package br.unb.autoexp.web.handlers;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.Writer;
import java.lang.reflect.InvocationTargetException;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.UUID;

import org.apache.log4j.Logger;
import org.dslforge.xtext.common.commands.BasicGenerateCommand;
import org.dslforge.xtext.common.registry.LanguageRegistry;
import org.eclipse.core.commands.ExecutionEvent;
import org.eclipse.core.commands.ExecutionException;
import org.eclipse.core.runtime.IConfigurationElement;
import org.eclipse.core.runtime.IExtensionPoint;
import org.eclipse.core.runtime.IExtensionRegistry;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.core.runtime.RegistryFactory;
import org.eclipse.jface.dialogs.MessageDialog;
import org.eclipse.jface.operation.IRunnableWithProgress;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.handlers.HandlerUtil;

import com.google.inject.Injector;

import br.unb.autoexp.storage.entity.dto.ExecutionStatusDTO;
import br.unb.autoexp.storage.entity.dto.ExperimentDesignDTO;
import br.unb.autoexp.storage.entity.dto.ExperimentExecutionDTO;
import br.unb.autoexp.storage.service.ExperimentDesignStorageService;
import br.unb.autoexp.storage.service.ExperimentExecutionStorageService;
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

		BasicGenerateCommand generateCommand= new BasicGenerateCommand();
		
		generateCommand.execute(event);
		
	
		IRunnableWithProgress operation = new IRunnableWithProgress() {
			public void run(IProgressMonitor progressMonitor) {
				String result = "";

				try {
					
					String message = "Execution must be run from a specification file (*.ae)";
					if (!file.getName().endsWith(".ae")){
						
						MessageDialog.openError(window.getShell(), "Run Error", message);
						throw new RuntimeException(message);
					}
					File specificationFile=file;
					File jsonFile=new File(file.getParentFile().getAbsolutePath()+File.separator+DEFAULT_OUTPUT_FOLDER+File.separator+file.getName().replaceFirst("[.][^.]+$", ".json"));
					File applicationDescriptorFile=new File(file.getParentFile().getAbsolutePath()+File.separator+DEFAULT_OUTPUT_FOLDER+File.separator+file.getName().replaceFirst("[.][^.]+$", ".yml"));;
					File rnwFile=new File(file.getParentFile().getAbsolutePath()+File.separator+DEFAULT_OUTPUT_FOLDER+File.separator+file.getName().replaceFirst("[.][^.]+$", ".Rnw"));;
					
					
					String jobId = UUID.randomUUID().toString();
					
					File executionFolder=new File(String.format("%s%s%s%s%s",specificationFile.getParentFile().getAbsolutePath(),File.separator,"executions",File.separator,jobId));
					executionFolder.mkdirs();
					
					copyToFolder(applicationDescriptorFile, executionFolder);
					copyToFolder(jsonFile, executionFolder);
					copyToFolder(specificationFile, executionFolder);
					copyToFolder(rnwFile, executionFolder);

						
						
					
					
					MappingService mappingService = MappingServiceFactory
							.get(jsonFile.getAbsolutePath());

					String design = mappingService.findAll().get(0).getDesignType().getName();
					
					
					
				
					
					
					
					int runs = mappingService.findAll().get(0).getRuns();
					String experimentName = mappingService.findAll().get(0).getExperimentName();
						
					experimentDesignService.create(ExperimentDesignDTO.getBuilder().design(design).jobId(jobId)
							.runs(runs).name(experimentName).fileName(specificationFile.getName()).build());
					mappingService.findAll().forEach((task) -> {

						for (int i = 0; i < runs; i++) {

							String taskId = UUID.randomUUID().toString();

							MappingDTO mapping = mappingService.findByTaskName(task.getTaskName());

							experimentExecutionService.create(
									ExperimentExecutionDTO.getBuilder().executionStatus(ExecutionStatusDTO.RECEIVED)
											.taskId(taskId).factor(mapping.getFactor()).object(mapping.getObject())
											.taskName(mapping.getTaskName()).treatment(mapping.getTreatment())
											.jobId(jobId).build());

						}
					});

					//Path filePath = new Path(file.getAbsolutePath());
					String host = "10.10.3.10";
					if (System.getenv("DOHKO_ADDRESS") != null) {
						host = System.getenv("DOHKO_ADDRESS");
					}

					String clientPath = "/opt/dohko-client/dohko-client.jar";

					if (System.getenv("DOHKO_CLIENT_PATH") != null) {
						clientPath = System.getenv("DOHKO_CLIENT_PATH");
					}
									
					
					File tempScript = createTempScript(clientPath, host, applicationDescriptorFile.getAbsolutePath());

					try {
						ProcessBuilder pb = new ProcessBuilder("bash", tempScript.toString());
						Process p = pb.start();
						InputStream is = p.getInputStream();
						BufferedReader br = new BufferedReader(new InputStreamReader(is));
						String line = null;
						while ((line = br.readLine()) != null) {
							result = result.concat(line) + "\n";
							System.out.println(line);
						}
						int r = p.waitFor(); // Let the process finish.
						if (r == 0) { // No error
							result = String.format("Result: %s", result);
						} else {
							result = "Error in job execution";
						}

					} catch (Exception e) {
						result = "Error " + result;
					} finally {
						tempScript.delete();
					}

					MessageDialog.openInformation(window.getShell(), "br.unb.autoexp.web", result);

				} catch (Exception ex) {
					
					logger.error(ex.getMessage(), ex);
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
		if (!file.exists()){		
			String message=String.format("File %s not found in %s folder",file.getName(),DEFAULT_OUTPUT_FOLDER );
			MessageDialog.openError(window.getShell(), "Run Error", message);
			throw new RuntimeException(message);
		}
		
		Files.copy(file.toPath(), new File(executionFolder.getAbsolutePath()+File.separator+file.getName()).toPath(),StandardCopyOption.REPLACE_EXISTING, StandardCopyOption.COPY_ATTRIBUTES);
	}
	public File createTempScript(String clientPath, String host, String filePath) throws IOException {
		File clientFile=new File(clientPath);
		if(!clientFile.exists()){
			throw new RuntimeException(String.format("file %s not found.",clientFile.getAbsolutePath()));
		}
		File tempScript = File.createTempFile("script", null);
		Writer streamWriter = new OutputStreamWriter(new FileOutputStream(tempScript));
		PrintWriter printWriter = new PrintWriter(streamWriter);

		printWriter.println("#!/bin/bash");
		printWriter.println(String.format("java -jar %s deploy  --host %s --df %s", clientFile.getAbsolutePath(), host, filePath));

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
