package br.unb.autoexp.web.command;

import java.io.File;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

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
import org.excalibur.core.execution.domain.ApplicationDescriptor;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.inject.Inject;

import br.unb.autoexp.storage.entity.dto.ExecutionStatusDTO;
import br.unb.autoexp.storage.entity.dto.ExperimentDesignDTO;
import br.unb.autoexp.storage.entity.dto.ExperimentExecutionDTO;
import br.unb.autoexp.storage.service.ExperimentDesignStorageService;
import br.unb.autoexp.storage.service.ExperimentExecutionStorageService;
import br.unb.autoexp.web.dohko.service.DohkoService;
import br.unb.autoexp.web.mapping.MappingService;
import br.unb.autoexp.web.mapping.MappingServiceFactory;
import br.unb.autoexp.web.mapping.dto.MappingDTO;

/**
 * Our sample handler extends AbstractHandler, an IHandler base class.
 * 
 * @see org.eclipse.core.commands.IHandler
 * @see org.eclipse.core.commands.AbstractHandler
 */

public class RunCommand extends AbstractWorkspaceCommand {
	private static final String DEFAULT_OUTPUT_FOLDER = "src-gen";
	static final Logger logger = Logger.getLogger(RunCommand.class);
	@Inject
	private DohkoService dohkoService;
	@Inject
	private ExperimentDesignStorageService experimentDesignService;
	@Inject
	private ExperimentExecutionStorageService experimentExecutionService;
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

					ApplicationDescriptor applicationDescriptor = dohkoService
							.getApplicationDescriptor(applicationDescriptorFile);
					Response response = dohkoService.runDohko(applicationDescriptor);

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

	protected String getLanguageName(String fileExtension) {
		List<String> contributions = LanguageRegistry.INSTANCE.getLanguageByExtension(fileExtension);
		if (!contributions.isEmpty()) {
			return contributions.get(0);
		}
		return null;
	}

}
