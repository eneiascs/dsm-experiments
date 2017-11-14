package br.unb.autoexp.web.command;

import br.unb.autoexp.storage.entity.dto.ExperimentExecutionDTO
import br.unb.autoexp.storage.service.ExperimentDesignStorageService
import br.unb.autoexp.storage.service.ExperimentExecutionStorageService
import br.unb.autoexp.web.data.DataFileGeneratorService
import br.unb.autoexp.web.job.RunAnalysisJob
import br.unb.autoexp.web.job.UpdateTaskStatusJob
import com.google.inject.Inject
import java.io.File
import java.io.IOException
import java.lang.reflect.InvocationTargetException
import java.util.List
import javax.inject.Provider
import org.apache.log4j.Logger
import org.dslforge.xtext.common.registry.LanguageRegistry
import org.eclipse.core.commands.AbstractHandler
import org.eclipse.core.commands.ExecutionEvent
import org.eclipse.core.commands.ExecutionException
import org.eclipse.core.commands.IHandler
import org.eclipse.core.runtime.IProgressMonitor
import org.eclipse.core.runtime.OperationCanceledException
import org.eclipse.core.runtime.Status
import org.eclipse.core.runtime.jobs.Job
import org.eclipse.jface.dialogs.MessageDialog
import org.eclipse.ui.IWorkbenchWindow
import org.eclipse.ui.handlers.HandlerUtil
import org.eclipse.xtend.lib.annotations.Accessors

import static extension java.lang.String.*

/**
 * Our sample handler extends AbstractHandler, an IHandler base class.
 * 
 * @see IHandler
 * @see AbstractHandler
 */
class RunAnalysisCommand extends AbstractWorkspaceCommand {
	private static final String DEFAULT_OUTPUT_FOLDER = "src-gen"
	static final Logger logger = Logger.getLogger(RunAnalysisCommand)

	@Inject
	private ExperimentDesignStorageService experimentDesignService
	@Inject
	private ExperimentExecutionStorageService experimentExecutionService
	@Inject
	private DataFileGeneratorService dataFileGenerator
	@Inject
	private Provider<RunAnalysisJob> runAnalysisJobProvider;

	@Inject
	private Provider<UpdateTaskStatusJob> updateTaskStatusJobProvider;
	private IWorkbenchWindow window
@Accessors
	private String result
	@Accessors
	private boolean isError

	private File dataFile
	private File specificationFile
	private File rnwFile

	@Accessors
	private File file
	private UpdateTaskStatusJob updateTaskStatusJob

	private RunAnalysisJob runAnalysisJob

	String jobId

	override execute(ExecutionEvent event) throws ExecutionException {
		try {
			window = HandlerUtil.getActiveWorkbenchWindowChecked(event);
			if (file === null) {
				file = unwrap(event, File);
			}
			result = ""
			isError = false
			val Job operation = new Job("Checking files in folder...") {
				override run(IProgressMonitor progressMonitor) {

					try {

						val message = String.format(
							"Analysis must be run from a execution folder.\nExecution data not found for %s.",
							file.getName())

						dataFile = new File(file.getAbsolutePath() + File.separator + "data.json")
						if (!dataFile.exists) {

							throw new RuntimeException(message)
						}

						val List<ExperimentExecutionDTO> tasks = experimentExecutionService.findByJobId(
							dataFileGenerator.getJobIdFromFile(dataFile))

						if (tasks.isNullOrEmpty) {

							throw new RuntimeException(message)
						}
						jobId = tasks.head.jobId
						val design = experimentDesignService.findByJobId(tasks.head.jobId)

						if (design === null) {

							throw new RuntimeException(message)
						}

						specificationFile = new File(file.getAbsolutePath() + File.separator + design.getFileName())
						val jsonFile = new File(file.getAbsolutePath() + File.separator +
							design.getFileName().replaceFirst("[.][^.]+$", ".json"))
						val applicationDescriptorFile = new File(file.getAbsolutePath() + File.separator +
							design.getFileName().replaceFirst("[.][^.]+$", ".yml"))

						rnwFile = new File(file.getAbsolutePath() + File.separator +
							design.getFileName().replaceFirst("[.][^.]+$", ".Rnw"))
						val executionFolder = file

						checkFile(applicationDescriptorFile, executionFolder)
						checkFile(jsonFile, executionFolder)
						checkFile(specificationFile, executionFolder)
						checkFile(rnwFile, executionFolder)

						Status.OK_STATUS

					} catch (InterruptedException ex) {
						Status.CANCEL_STATUS
					} catch (OperationCanceledException ex) {
						jobGroup.cancel
						Status.CANCEL_STATUS
					} catch (Exception ex) {
						isError = true
						result = "An error has occurred: " + ex.getMessage();
						logger.error(ex.getMessage(), ex)
						ex.printStackTrace
						displayResult
						Status.OK_STATUS

					} finally {
						progressMonitor.done()

					}
				}

				def getRelativePath(File file) {
					file.parentFile.parentFile.parentFile.name + "/" + file.parentFile.parentFile.name + "/" +
						file.parentFile.name + "/" + file.name
				}

			};
			operation.user = true
			operation.schedule
			operation.join
//			updateTaskStatusJob = updateTaskStatusJobProvider.get
//			updateTaskStatusJob.name = "Updating tasks status for folder %s".format(file.name)
//			updateTaskStatusJob.specificationFile = specificationFile
//			updateTaskStatusJob.dataFile = dataFile
//
//			updateTaskStatusJob.jobId = jobId
//
//			updateTaskStatusJob.user = true
//
//			updateTaskStatusJob.schedule()

			runAnalysisJob = runAnalysisJobProvider.get
			runAnalysisJob.name = "Running analysis script for folder %s".format(file.name)

			runAnalysisJob.rnwFile = rnwFile
			runAnalysisJob.user = true
			//runAnalysisJob.updateTaskStatusJob = updateTaskStatusJob
			runAnalysisJob.schedule

			val Job res = new Job("Displaying results...") {
				override run(IProgressMonitor progressMonitor) {

					runAnalysisJob.join
					if (!progressMonitor.isCanceled && !runAnalysisJob.result.equals(Status.CANCEL_STATUS)) {
						displayResult

					}
					Status.OK_STATUS
				}
			}
			res.system = true
			res.schedule

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

	def displayResult() {
		window.shell.display.syncExec(new Runnable() {

			override run() {

				if (runAnalysisJob.isError) {
					MessageDialog.openError(window.getShell(), "Execution Status",runAnalysisJob.message)
				} else {
					MessageDialog.openInformation(window.getShell(), "Execution Status", runAnalysisJob.message)
				}
			}
		})
	}
}
