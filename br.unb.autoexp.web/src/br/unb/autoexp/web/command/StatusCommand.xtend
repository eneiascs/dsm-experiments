package br.unb.autoexp.web.command;

import br.unb.autoexp.storage.entity.dto.ExperimentDesignDTO
import br.unb.autoexp.storage.entity.dto.ExperimentExecutionDTO
import br.unb.autoexp.storage.service.ExperimentDesignStorageService
import br.unb.autoexp.storage.service.ExperimentExecutionStorageService
import br.unb.autoexp.web.data.DataFileGeneratorService
import br.unb.autoexp.web.dohko.service.DohkoService
import com.google.inject.Inject
import java.io.File
import java.io.IOException
import java.lang.reflect.InvocationTargetException
import java.util.Date
import java.util.List
import org.apache.log4j.Logger
import org.dslforge.xtext.common.registry.LanguageRegistry
import org.eclipse.core.commands.ExecutionEvent
import org.eclipse.core.commands.ExecutionException
import org.eclipse.core.runtime.IProgressMonitor
import org.eclipse.core.runtime.Status
import org.eclipse.core.runtime.jobs.Job
import org.eclipse.jface.dialogs.MessageDialog
import org.eclipse.ui.IWorkbenchWindow
import org.eclipse.ui.handlers.HandlerUtil

class StatusCommand extends AbstractWorkspaceCommand {

	static final Logger logger = Logger.getLogger(StatusCommand)

	@Inject
	private extension DohkoService
	@Inject
	private ExperimentDesignStorageService experimentDesignService
	@Inject
	private ExperimentExecutionStorageService experimentExecutionService
	private IWorkbenchWindow window

	private String message
	private boolean isError
	@Inject
	private DataFileGeneratorService dataFileGenerator

	private File dataFile
	private File specificationFile

	private File file

	String jobId

	ExperimentDesignDTO design

	override execute(ExecutionEvent event) throws ExecutionException {
		try {
			window = HandlerUtil.getActiveWorkbenchWindowChecked(event);
			file = unwrap(event, File);
			message = ""
			isError = false
			val operation = new Job("Running experiment ...") {
				override run(IProgressMonitor progressMonitor) {
					try {
						progressMonitor.beginTask("Running experiment ...", IProgressMonitor.UNKNOWN)
						progressMonitor.subTask("Checking files")
						message = String.format(
							"Status must be run from a execution folder.\nExecution data not found for %s.",
							file.getName())

						dataFile = new File(file.getAbsolutePath() + File.separator + "data.json")
						if (!dataFile.exists) {

							throw new RuntimeException(message)
						}
						val executionFolder = file

						jobId = dataFileGenerator.getJobIdFromFile(dataFile)
						var List<ExperimentExecutionDTO> tasks = experimentExecutionService.findByJobId(jobId)

						if (tasks.isNullOrEmpty) {

							throw new RuntimeException(message)
						}
						progressMonitor.subTask("Reading database")
						design = experimentDesignService.findByJobId(tasks.head.jobId)

						if (design === null) {

							throw new RuntimeException(message)
						}

						specificationFile = new File(design.getFileName())
						val jsonFile = new File(design.getFileName().replaceFirst("[.][^.]+$", ".json"))
						val applicationDescriptorFile = new File(design.getFileName().replaceFirst("[.][^.]+$", ".yml"))
						val rnwFile = new File(design.getFileName().replaceFirst("[.][^.]+$", ".Rnw"))

						checkFile(applicationDescriptorFile, executionFolder)
						checkFile(jsonFile, executionFolder)
						checkFile(specificationFile, executionFolder)
						checkFile(rnwFile, executionFolder)

						do {
							if (progressMonitor.isCanceled()) {
								progressMonitor.done()
								return Status.OK_STATUS

							}
							design = experimentDesignService.findByJobId(tasks.head.jobId)
							progressMonitor.beginTask("Running experiment ...", design.numberOfTasks)
							message = '''
								«val completed=design.getFinished()+design.getFailed+design.cancelled»
								Completed «completed» of «design.numberOfTasks» tasks («100*completed/design.numberOfTasks»%)
								Elapsed time: «design.creationDate.elapsedTime(new Date())»
							'''

							progressMonitor.worked(design.getFinished() + design.failed + design.cancelled)
							progressMonitor.subTask(message)
							if (!design.isFinished)
								Thread.sleep(10000)

						} while (!design.isFinished)

						progressMonitor.done
						message = '''
							Execution Status:
							 
							Tasks: «design.numberOfTasks» 
							Pending: «design.pending+design.notReceived» 
							Running: «design.running» 
							Finished: «design.getFinished()» 
							Failed: «design.failed» 
							Cancelled: «design.cancelled»
							 
							Elapsed time: «design.creationDate.elapsedTime(design.lastUpdateDate)»
						'''
						displayResult
						Status.OK_STATUS

					} catch (Exception e) {
					} finally {
						progressMonitor.done
					}

				}

			}

		
			operation.user = true
			
			operation.schedule
		} catch (InvocationTargetException ex) {
			message = "An error has occurred: " + ex.getMessage();
			displayResult
			logger.error(ex.getMessage(), ex)
		} catch (Exception ex) {
			message = "An error has occurred: " + ex.getMessage();
			displayResult
			logger.error(ex.getMessage(), ex)
			ex.printStackTrace

		}
		return null;
	}

	def String elapsedTime(Date firstDate,Date secondDate) {		
		val diff = secondDate.getTime() - firstDate.getTime()
		val diffMinutes = diff / (60 * 1000) % 60;
		val diffHours = diff / (60 * 60 * 1000) % 24;
		val diffDays = diff / (24 * 60 * 60 * 1000);

		'''«IF diffDays==1»«diffDays» day «ENDIF»«IF diffDays>1»«diffDays» days «ENDIF»«diffHours»h«diffMinutes»min
		'''
	}

	def createUpdateTaskJob(ExperimentExecutionDTO task, String jobName) {
		new Job(jobName) {
			override run(IProgressMonitor progressMonitor) {

				task.updateTaskStatus(specificationFile)

				Status.OK_STATUS
			}

		};
	}

	def displayResult() {
		window.shell.display.syncExec(new Runnable() {

			override run() {

				if (isError) {
					MessageDialog.openError(window.getShell(), "Execution Status", message)
				} else {
					MessageDialog.openInformation(window.getShell(), "Execution Status", message)
				}
			}
		})
	}

	def void checkFile(File file, File executionFolder) throws IOException {
		if (!file.exists()) {
			val message = String.format("File %s not found in %s folder", file.getName(), executionFolder.getName())
			
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
