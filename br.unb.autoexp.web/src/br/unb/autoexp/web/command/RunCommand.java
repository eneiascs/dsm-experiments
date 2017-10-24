package br.unb.autoexp.web.command;

import static javax.ws.rs.core.MediaType.APPLICATION_XML_TYPE;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.Writer;
import java.lang.reflect.InvocationTargetException;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.Response;

import org.apache.log4j.Logger;
import org.dslforge.xtext.common.commands.BasicGenerateCommand;
import org.dslforge.xtext.common.registry.LanguageRegistry;
import org.eclipse.core.commands.ExecutionEvent;
import org.eclipse.core.commands.ExecutionException;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.jface.dialogs.MessageDialog;
import org.eclipse.jface.operation.IRunnableWithProgress;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.handlers.HandlerUtil;
import org.excalibur.core.execution.domain.Application;
import org.excalibur.core.execution.domain.ApplicationDescriptor;
import org.excalibur.discovery.ws.ext.YamlMapperProvider;
import org.glassfish.jersey.jackson.JacksonFeature;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.inject.Injector;

import br.unb.autoexp.storage.entity.dto.ExecutionStatusDTO;
import br.unb.autoexp.storage.entity.dto.ExperimentDesignDTO;
import br.unb.autoexp.storage.entity.dto.ExperimentExecutionDTO;
import br.unb.autoexp.storage.service.ExperimentDesignStorageService;
import br.unb.autoexp.storage.service.ExperimentExecutionStorageService;
import br.unb.autoexp.tests.dohko.ApplicationDescriptorConverter;
import br.unb.autoexp.web.mapping.MappingService;
import br.unb.autoexp.web.mapping.MappingServiceFactory;
import br.unb.autoexp.web.mapping.dto.MappingDTO;
import br.unb.autoexp.web.storage.ExperimentDesignStorageServiceFactory;
import br.unb.autoexp.web.storage.ExperimentExecutionStorageServiceFactory;

/**
 * Our sample handler extends AbstractHandler, an IHandler base class.
 * 
 * @see org.eclipse.core.commands.IHandler
 * @see org.eclipse.core.commands.AbstractHandler
 */

public class RunCommand extends AbstractWorkspaceCommand {
	private static final String DEFAULT_OUTPUT_FOLDER = "src-gen";
	static final Logger logger = Logger.getLogger(RunCommand.class);
	private Injector injector;

	private ExperimentDesignStorageService experimentDesignService = ExperimentDesignStorageServiceFactory.get();
	private ExperimentExecutionStorageService experimentExecutionService = ExperimentExecutionStorageServiceFactory
			.get();
	private IWorkbenchWindow window;

	@Override
	public Object execute(final ExecutionEvent event) throws ExecutionException {
		window = HandlerUtil.getActiveWorkbenchWindowChecked(event);
		final File file = unwrap(event, File.class);

		BasicGenerateCommand generateCommand = new BasicGenerateCommand();

		generateCommand.execute(event);

		IRunnableWithProgress operation = new IRunnableWithProgress() {
			@Override
			public void run(IProgressMonitor progressMonitor) {
				String result = "";

				try {

					String message = "Execution must be run from a specification file (*.ae)";
					if (!file.getName().endsWith(".ae")) {

						MessageDialog.openError(window.getShell(), "Run Error", message);
						throw new RuntimeException(message);
					}
					File specificationFile = file;
					File jsonFile = new File(
							file.getParentFile().getAbsolutePath() + File.separator + DEFAULT_OUTPUT_FOLDER
									+ File.separator + file.getName().replaceFirst("[.][^.]+$", ".json"));
					File applicationDescriptorFile = new File(
							file.getParentFile().getAbsolutePath() + File.separator + DEFAULT_OUTPUT_FOLDER
									+ File.separator + file.getName().replaceFirst("[.][^.]+$", ".yml"));
					;
					File rnwFile = new File(
							file.getParentFile().getAbsolutePath() + File.separator + DEFAULT_OUTPUT_FOLDER
									+ File.separator + file.getName().replaceFirst("[.][^.]+$", ".Rnw"));

					ApplicationDescriptor applicationDescriptor = getApplicationDescriptor(applicationDescriptorFile);
					Response response = runDohko(applicationDescriptor);

					result = String.format("Response status: %s", response.getStatusInfo());
					System.out.println(result);

					if (response.getStatus() == 202) {
						String jobId = applicationDescriptor.getId();

						SimpleDateFormat sdf = new SimpleDateFormat("YYYY-MM-dd-HH-mm-ss");
						File executionFolder = new File(
								String.format("%s%s%s%s%s", specificationFile.getParentFile().getAbsolutePath(),
										File.separator, "executions", File.separator, sdf.format(new Date())));
						executionFolder.mkdirs();

						File dataFile = new File(executionFolder.getAbsolutePath() + File.separator + "data.json");

						copyToFolder(applicationDescriptorFile, executionFolder);
						copyToFolder(jsonFile, executionFolder);
						copyToFolder(specificationFile, executionFolder);
						copyToFolder(rnwFile, executionFolder);

						MappingService mappingService = MappingServiceFactory.get(jsonFile.getAbsolutePath());

						String design = mappingService.findAll().get(0).getDesignType().getName();

						int runs = mappingService.findAll().get(0).getRuns();
						String experimentName = mappingService.findAll().get(0).getExperimentName();

						experimentDesignService.create(ExperimentDesignDTO.getBuilder().design(design).jobId(jobId)
								.runs(runs).name(experimentName).fileName(specificationFile.getName()).build());
						applicationDescriptor.getApplications().forEach((task) -> {

							MappingDTO mapping = mappingService.findByTaskName(task.getName());

							experimentExecutionService.create(
									ExperimentExecutionDTO.getBuilder().executionStatus(ExecutionStatusDTO.NOT_RECEIVED)
											.taskId(task.getId()).factor(mapping.getFactor())
											.object(mapping.getObject()).taskName(mapping.getTaskName())
											.treatment(mapping.getTreatment()).jobId(jobId).build());

						});

						List<ExperimentExecutionDTO> tasks = experimentExecutionService.findByJobId(jobId);

						ObjectMapper mapper = new ObjectMapper();

						mapper.writeValue(dataFile, tasks);

					}

					MessageDialog.openInformation(window.getShell(), "Execution Result", result);

				} catch (Exception ex) {

					result = "An error has occurred: " + ex.getMessage();
					ex.printStackTrace();

					logger.error(ex.getMessage(), ex);
					ex.printStackTrace();
					MessageDialog.openError(window.getShell(), "Execution Result", result);

				} finally {
					progressMonitor.done();

				}
			}

		};
		try {
			getWindow().run(false, false, operation);
		} catch (InvocationTargetException ex) {
			logger.error(ex.getMessage(), ex);
		} catch (InterruptedException ex) {
			logger.error(ex.getMessage(), ex);
		}
		return null;
	}

	protected String getDohkoAddress() {
		String host = "10.10.3.10:8080";
		if (System.getenv("DOHKO_ADDRESS") != null) {
			host = System.getenv("DOHKO_ADDRESS");
		}
		return host;
	}

	protected Response runDohko(ApplicationDescriptor applicationDescriptor) throws IOException {

		WebTarget target = getTarget();
		System.out.println(target.toString());
		Response response = target.request(APPLICATION_XML_TYPE)
				.put(Entity.entity(applicationDescriptor, APPLICATION_XML_TYPE));

		return response;
	}

	protected ApplicationDescriptor getApplicationDescriptor(File file) throws Exception {
		try {
			ApplicationDescriptorConverter converter = new ApplicationDescriptorConverter();
			String fileString = readFile(file.getAbsolutePath(), StandardCharsets.UTF_8);
			ApplicationDescriptor applicationDescriptor = converter.convert(fileString);

			if (applicationDescriptor.getId() == null) {
				String jobId = UUID.randomUUID().toString();
				applicationDescriptor.setId(jobId);
				for (Application application : applicationDescriptor.getApplications()) {
					if (application.getId() == null) {
						application.setId(UUID.randomUUID().toString());
						application.setJobId(jobId);
					}
				}

			}

			return applicationDescriptor;
		} catch (Exception e) {

			e.printStackTrace();
			throw e;
		}

	}

	protected WebTarget getTarget() {
		Client client = ClientBuilder.newClient().register(YamlMapperProvider.class).register(JacksonFeature.class);
		return client.target(String.format("http://%s/application", getDohkoAddress()));
	}

	String readFile(String path, Charset encoding) throws IOException {
		byte[] encoded = Files.readAllBytes(Paths.get(path));
		return new String(encoded, encoding);
	}

	private void copyToFolder(final File file, File executionFolder) throws IOException {
		if (!file.exists()) {
			String message = String.format("File %s not found in %s folder", file.getName(), DEFAULT_OUTPUT_FOLDER);
			MessageDialog.openError(window.getShell(), "Run Error", message);
			throw new RuntimeException(message);
		}

		Files.copy(file.toPath(),
				new File(executionFolder.getAbsolutePath() + File.separator + file.getName()).toPath(),
				StandardCopyOption.REPLACE_EXISTING, StandardCopyOption.COPY_ATTRIBUTES);
	}

	public File createTempScript(String clientPath, String host, String filePath) throws IOException {
		File clientFile = new File(clientPath);
		if (!clientFile.exists()) {
			throw new RuntimeException(String.format("file %s not found.", clientFile.getAbsolutePath()));
		}
		File tempScript = File.createTempFile("script", null);
		Writer streamWriter = new OutputStreamWriter(new FileOutputStream(tempScript));
		PrintWriter printWriter = new PrintWriter(streamWriter);

		printWriter.println("#!/bin/bash");
		String command = String.format("java -jar %s deploy  --host %s --df %s", clientFile.getAbsolutePath(), host,
				filePath);
		logger.info(command);
		printWriter.println(command);

		printWriter.close();

		return tempScript;
	}

	protected String getLanguageName(String fileExtension) {
		List<String> contributions = LanguageRegistry.INSTANCE.getLanguageByExtension(fileExtension);
		if (!contributions.isEmpty()) {
			return contributions.get(0);
		}
		return null;
	}

}
