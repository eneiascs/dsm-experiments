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
import java.util.List
import org.apache.log4j.Logger
import org.dslforge.xtext.common.registry.LanguageRegistry
import org.eclipse.core.commands.AbstractHandler
import org.eclipse.core.commands.ExecutionEvent
import org.eclipse.core.commands.ExecutionException
import org.eclipse.core.commands.IHandler
import org.eclipse.core.runtime.IProgressMonitor
import org.eclipse.core.runtime.Status
import org.eclipse.core.runtime.jobs.Job
import org.eclipse.jface.dialogs.MessageDialog
import org.eclipse.jface.dialogs.ProgressMonitorDialog
import org.eclipse.jface.operation.IRunnableWithProgress
import org.eclipse.swt.widgets.Shell
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

	private String message
	private boolean isError
	@Inject
	private DataFileGeneratorService dataFileGenerator

	private File dataFile
	private File specificationFile

	private File file

	String jobId

	private IRunnableWithProgress operation
	ExperimentDesignDTO design

	override execute(ExecutionEvent event) throws ExecutionException {
		try {
			window = HandlerUtil.getActiveWorkbenchWindowChecked(event);
			file = unwrap(event, File);
			message = ""
			isError = false
			operation = new IRunnableWithProgress() {
				override run(IProgressMonitor progressMonitor) {
					try {

						val fetchData = new Job("Fetching data from database ...") {

							override run(IProgressMonitor progressMonitor) {
								val message = String.format(
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

								design = experimentDesignService.findByJobId(tasks.head.jobId)

								if (design === null) {

									throw new RuntimeException(message)
								}

								specificationFile = new File(file.getAbsolutePath() + File.separator +
									design.getFileName())
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

								// progressMonitor.subTask("Writing data to file %s".format(dataFile.name));
								// dataFileGenerator.writeToFile(dataFile, tasks);
								// progressMonitor.worked(1);
								progressMonitor.done()
								Status.OK_STATUS
							}
						}

						fetchData.system = true
						fetchData.schedule
						fetchData.join
						
						progressMonitor.beginTask("Running experiment ...", design.numberOfTasks)
						progressMonitor.worked(design.finished + design.failed)
						while (!design.isFinished) {
							if (progressMonitor.isCanceled()) {
								progressMonitor.done()
								return

							}
							fetchData.schedule
							fetchData.join
							progressMonitor.beginTask("Running experiment ...", design.numberOfTasks)
							progressMonitor.worked(design.finished + design.failed)
							Thread.sleep(5000)

						}

					} catch (Exception e) {
					} finally {
						progressMonitor.done
					}

				}
			}

			new ProgressMonitorDialog(new Shell()).run(true, true, operation);
			message = '''
				Execution Status:
									
				Tasks: «design.numberOfTasks»
				Not Received: «design.notReceived»
				Pending: «design.pending»
				Running: «design.running»
				Finished: «design.finished»
				Failed: «design.failed»
										
			'''
			displayResult
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

	def boolean isFinished(ExperimentDesignDTO design) {

		((design.finished + design.failed) == design.numberOfTasks && design.numberOfTasks != 0)

	}

	def createUpdateTaskJob(ExperimentExecutionDTO task, String jobName) {
		new Job(jobName) {
			override run(IProgressMonitor progressMonitor) {

				task.updateTaskStatus(specificationFile)
				// progressMonitor.done();
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
