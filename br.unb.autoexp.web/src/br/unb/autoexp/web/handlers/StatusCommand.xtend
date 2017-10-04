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
import java.util.List;

import org.apache.log4j.Logger;
import org.dslforge.xtext.common.registry.LanguageRegistry;
import org.eclipse.core.commands.ExecutionEvent;
import org.eclipse.core.commands.ExecutionException;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.jface.dialogs.MessageDialog;
import org.eclipse.jface.operation.IRunnableWithProgress;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.handlers.HandlerUtil;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.inject.Injector;

import br.unb.autoexp.storage.entity.dto.ExperimentDesignDTO;
import br.unb.autoexp.storage.entity.dto.ExperimentExecutionDTO;
import br.unb.autoexp.storage.service.ExperimentDesignStorageService;
import br.unb.autoexp.storage.service.ExperimentExecutionStorageService;
import br.unb.autoexp.web.storage.ExperimentDesignStorageServiceFactory;
import br.unb.autoexp.web.storage.ExperimentExecutionStorageServiceFactory;
import br.unb.autoexp.storage.entity.dto.ExecutionStatusDTO

/**
 * Our sample handler extends AbstractHandler, an IHandler base class.
 * 
 * @see org.eclipse.core.commands.IHandler
 * @see org.eclipse.core.commands.AbstractHandler
 */
class StatusCommand extends AbstractWorkspaceCommand {
	private static final String DEFAULT_OUTPUT_FOLDER = "src-gen"
	static final Logger logger = Logger.getLogger(StatusCommand)
	private Injector injector

	private ExperimentDesignStorageService experimentDesignService = ExperimentDesignStorageServiceFactory.get()
	private ExperimentExecutionStorageService experimentExecutionService = ExperimentExecutionStorageServiceFactory.
		get()
	private IWorkbenchWindow window

	override execute(ExecutionEvent event) throws ExecutionException {

		window = HandlerUtil.getActiveWorkbenchWindowChecked(event);
		val file = unwrap(event, File);

		val IRunnableWithProgress operation = new IRunnableWithProgress() {
			override void run(IProgressMonitor progressMonitor) {
				var result = ""

				try {

					val message = String.format(
						"Status must be run from a execution folder.\nExecution data not found for %s.",
						file.getName())
						val design = experimentDesignService.findByJobId(file.getName())

						if (design === null) {

							MessageDialog.openError(window.getShell(), "Status Error", message)
							throw new RuntimeException(message)
						}
						val specificationFile = new File(file.getAbsolutePath() + File.separator + design.getFileName())
						val jsonFile = new File(
							file.getAbsolutePath() + File.separator +
								design.getFileName().replaceFirst("[.][^.]+$", ".json"))
						val applicationDescriptorFile = new File(
							file.getAbsolutePath() + File.separator +
								design.getFileName().replaceFirst("[.][^.]+$", ".yml"))
						val rnwFile = new File(
							file.getAbsolutePath() + File.separator +
								design.getFileName().replaceFirst("[.][^.]+$", ".Rnw"))
						val dataFile = new File(file.getAbsolutePath() + File.separator + "data.json")

						val executionFolder = file

						checkFile(applicationDescriptorFile, executionFolder)
						checkFile(jsonFile, executionFolder)
						checkFile(specificationFile, executionFolder)
						checkFile(rnwFile, executionFolder)

						val executions = experimentExecutionService.findByJobId(executionFolder.getName())

						val mapper = new ObjectMapper()

						mapper.writeValue(dataFile, executions)
						
						result=
						'''
								Execution Status:
													
								Tasks: «executions.size»
								Received: «executions.filter[executionStatus.equals(ExecutionStatusDTO.RECEIVED)].size»
								Started: «executions.filter[executionStatus.equals(ExecutionStatusDTO.STARTED)].size»
								Error: «executions.filter[executionStatus.equals(ExecutionStatusDTO.ERROR)].size»
								Finished: «executions.filter[executionStatus.equals(ExecutionStatusDTO.FINISHED)].size»
						'''						
						MessageDialog.openInformation(window.getShell(), "Execution Status", result)
						
						

					} catch (Exception ex) {

						logger.error(ex.getMessage(), ex)
					} finally {
						progressMonitor.done()
					}
				}

			};
			try {
				getWindow().run(false, false, operation)
			} catch (InvocationTargetException ex) {
				logger.error(ex.getMessage(), ex)
			} catch (InterruptedException ex) {
				logger.error(ex.getMessage(), ex)
			}
			return null;
		}

		def void checkFile(File file, File executionFolder) throws IOException {
			if (!file.exists()) {
				val message = String.format("File %s not found in %s folder", file.getName(), executionFolder.getName())
				MessageDialog.openError(window.getShell(), "Run Error", message)
				throw new RuntimeException(message)
			}

		}

		
		def String getLanguageName(String fileExtension) {
			val contributions = LanguageRegistry.INSTANCE.getLanguageByExtension(fileExtension);
			if (!contributions.isNullOrEmpty) {
				contributions.head
			} else
				null
		}

	}
	