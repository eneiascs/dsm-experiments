package br.unb.autoexp.web.command;

import br.unb.autoexp.storage.entity.dto.ExecutionStatusDTO
import br.unb.autoexp.storage.entity.dto.ExperimentExecutionDTO
import br.unb.autoexp.storage.service.ExperimentDesignStorageService
import br.unb.autoexp.storage.service.ExperimentExecutionStorageService
import br.unb.autoexp.web.dohko.service.DohkoService
import com.fasterxml.jackson.databind.ObjectMapper
import com.google.inject.Inject
import java.io.File
import java.io.IOException
import java.lang.reflect.InvocationTargetException
import java.util.List
import org.apache.log4j.Logger
import org.dslforge.xtext.common.registry.LanguageRegistry
import org.eclipse.core.commands.AbstractHandler
import org.eclipse.core.commands.ExecutionEvent
import org.eclipse.core.commands.ExecutionException
import org.eclipse.core.commands.IHandler
import org.eclipse.core.runtime.IProgressMonitor
import org.eclipse.jface.dialogs.MessageDialog
import org.eclipse.jface.operation.IRunnableWithProgress
import org.eclipse.ui.IWorkbenchWindow
import org.eclipse.ui.handlers.HandlerUtil

/**
 * Our sample handler extends AbstractHandler, an IHandler base class.
 * 
 * @see IHandler
 * @see AbstractHandler
 */
class StatusCommand extends AbstractWorkspaceCommand {
	private static final String DEFAULT_OUTPUT_FOLDER = "src-gen"
	static final Logger logger = Logger.getLogger(StatusCommand)
	
	@Inject
	private extension DohkoService 
	@Inject
	private ExperimentDesignStorageService experimentDesignService 
	@Inject
	private ExperimentExecutionStorageService experimentExecutionService
	private IWorkbenchWindow window
	
	
	override execute(ExecutionEvent event) throws ExecutionException {

		window = HandlerUtil.getActiveWorkbenchWindowChecked(event);
		val file = unwrap(event, File);

		val IRunnableWithProgress operation = new IRunnableWithProgress() {
			override void run(IProgressMonitor progressMonitor) {
				var result = ""

				try {
					
					val message = String.format(
						"Status must be run from a execution folder.\nExecution data not found for %s.", file.getName())
					
					val dataFile = new File(file.getAbsolutePath() + File.separator + "data.json")
					if (!dataFile.exists) {

							
							throw new RuntimeException(message)
						}	
					val executionFolder = file



						val mapper = new ObjectMapper();

						var List<ExperimentExecutionDTO> tasks=mapper.readValue(dataFile,
							mapper.getTypeFactory().constructCollectionType(List, ExperimentExecutionDTO)
							
						)
					if (tasks.isNullOrEmpty) {

						MessageDialog.openError(window.getShell(), "Status Error", message)
						throw new RuntimeException(message)
					}
					tasks.updateTaskStatus
					
					
					val design = experimentDesignService.findByJobId(tasks.head.jobId)

					if (design === null) {

						MessageDialog.openError(window.getShell(), "Status Error", message)
						throw new RuntimeException(message)
					}
					
					
					
					val specificationFile = new File(file.getAbsolutePath() + File.separator + design.getFileName())
					val jsonFile = new File(file.getAbsolutePath() + File.separator +
						design.getFileName().replaceFirst("[.][^.]+$", ".json"))
					val applicationDescriptorFile = new File(file.getAbsolutePath() + File.separator +
						design.getFileName().replaceFirst("[.][^.]+$", ".yml"))
					val rnwFile = new File(file.getAbsolutePath() + File.separator +
						design.getFileName().replaceFirst("[.][^.]+$", ".Rnw"))
					
				





					checkFile(applicationDescriptorFile, executionFolder)
					checkFile(jsonFile, executionFolder)
					checkFile(specificationFile, executionFolder)
					checkFile(rnwFile, executionFolder)

					

					
					tasks=experimentExecutionService.findByJobId(design.jobId).updateTaskStatus
					mapper.writeValue(dataFile, tasks)

					result = '''
						Execution Status:
											
						Tasks: «tasks.size»
						Not Received: «tasks.filter[executionStatus.equals(ExecutionStatusDTO.NOT_RECEIVED)].size»
						Pending: «tasks.filter[executionStatus.equals(ExecutionStatusDTO.PENDING)].size»
						Running: «tasks.filter[executionStatus.equals(ExecutionStatusDTO.RUNNING)].size»
						Finished: «tasks.filter[executionStatus.equals(ExecutionStatusDTO.FINISHED)].size»
						Failed: «tasks.filter[executionStatus.equals(ExecutionStatusDTO.FAILED)].size»
												
					'''
					MessageDialog.openInformation(window.getShell(), "Execution Status", result)

				} catch (Exception ex) {
					result = "An error has occurred: " + ex.getMessage();
					logger.error(ex.getMessage(), ex)
					ex.printStackTrace
					MessageDialog.openError(window.getShell(), "Execution Status", result)
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
