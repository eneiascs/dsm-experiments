package br.unb.autoexp.web.command;

import br.unb.autoexp.storage.entity.dto.ExecutionStatusDTO
import br.unb.autoexp.storage.entity.dto.ExperimentDesignDTO
import br.unb.autoexp.storage.entity.dto.ExperimentExecutionDTO
import br.unb.autoexp.storage.service.ExperimentDesignStorageService
import br.unb.autoexp.storage.service.ExperimentExecutionStorageService
import br.unb.autoexp.web.data.DataFileGeneratorService
import br.unb.autoexp.web.dohko.service.DohkoService
import br.unb.autoexp.web.job.RunAnalysisJob
import br.unb.autoexp.web.job.TaskExecutionJob
import br.unb.autoexp.web.mapping.MappingServiceFactory
import com.google.inject.Inject
import java.io.File
import java.io.IOException
import java.lang.reflect.InvocationTargetException
import java.nio.file.Files
import java.nio.file.StandardCopyOption
import java.text.SimpleDateFormat
import java.util.Date
import java.util.List
import javax.inject.Provider
import javax.ws.rs.core.Response
import org.apache.log4j.Logger
import org.dslforge.xtext.common.commands.BasicGenerateCommand
import org.eclipse.core.commands.AbstractHandler
import org.eclipse.core.commands.ExecutionEvent
import org.eclipse.core.commands.ExecutionException
import org.eclipse.core.commands.IHandler
import org.eclipse.core.runtime.IProgressMonitor
import org.eclipse.core.runtime.OperationCanceledException
import org.eclipse.core.runtime.Status
import org.eclipse.core.runtime.jobs.Job
import org.eclipse.core.runtime.jobs.JobGroup
import org.eclipse.jface.dialogs.MessageDialog
import org.eclipse.ui.IWorkbenchWindow
import org.eclipse.ui.handlers.HandlerUtil
import org.excalibur.core.execution.domain.ApplicationDescriptor
import org.excalibur.core.execution.domain.JobStatus

/**
 * Our sample handler extends AbstractHandler, an IHandler base class.
 * 
 * @see IHandler
 * @see AbstractHandler
 */
class RunCommand extends AbstractWorkspaceCommand {
	private static final String DEFAULT_OUTPUT_FOLDER = "src-gen"
	static final Logger logger = Logger.getLogger(RunCommand)

	@Inject
	private DohkoService dohkoService;

	@Inject
	private ExperimentDesignStorageService experimentDesignService
	@Inject
	private ExperimentExecutionStorageService experimentExecutionService
	@Inject
	private DataFileGeneratorService dataFileGenerator

	private IWorkbenchWindow window

	private String result
	private boolean isError

	private File dataFile
	private File specificationFile
	private File jsonFile

	private File file
	private File rnwFile
	ApplicationDescriptor applicationDescriptor
	private Job runExperimentJob

	@Inject
	private Provider<TaskExecutionJob> taskExecutionJobProvider;

	private JobGroup runExperimentJobGroup
	String jobId
	File applicationDescriptorFile
	File executionFolder
	@Inject
	private Provider<RunAnalysisJob> runAnalysisJobProvider;
	Response response
	List<ExperimentExecutionDTO> tasks

	override execute(ExecutionEvent event) throws ExecutionException {
		try {
			window = HandlerUtil.getActiveWorkbenchWindowChecked(event)
			file = unwrap(event, File)
			result = ""
			isError = false
			window = HandlerUtil.getActiveWorkbenchWindowChecked(event)

			runExperimentJob = new Job("Running experiment ...") {
				override run(IProgressMonitor progressMonitor) {

					try {

						val sendToDohkoJob = new Job("Sending job to execution ...") {

							override run(IProgressMonitor progressMonitor) {
								progressMonitor.beginTask("Sending job to execution ...", 100)
								logger.info(String.format("Generating artifacts for %s", file.getName()));

								progressMonitor.subTask(String.format("Generating artifacts for %s", file.getName()))
								val generateCommand = new BasicGenerateCommand();
								progressMonitor.worked(20)
								generateCommand.execute(event);

								val message = "Execution must be run from a specification file (*.ae)";
								if (!file.getName().endsWith(".ae")) {

									throw new RuntimeException(message);
								}
								specificationFile = file;
								jsonFile = new File(
									file.getParentFile().getAbsolutePath() + File.separator + DEFAULT_OUTPUT_FOLDER +
										File.separator + file.getName().replaceFirst("[.][^.]+$", ".json"));
								applicationDescriptorFile = new File(
									file.getParentFile().getAbsolutePath() + File.separator + DEFAULT_OUTPUT_FOLDER +
										File.separator + file.getName().replaceFirst("[.][^.]+$", ".yml"));

								rnwFile = new File(
									file.getParentFile().getAbsolutePath() + File.separator + DEFAULT_OUTPUT_FOLDER +
										File.separator + file.getName().replaceFirst("[.][^.]+$", ".Rnw"));
								logger.info(String.format("Converting file %s to application descriptor object",
									applicationDescriptorFile.getName()));

								progressMonitor.subTask("Converting application descriptor")
								applicationDescriptor = dohkoService.getApplicationDescriptor(
									applicationDescriptorFile);
								progressMonitor.worked(20)

								progressMonitor.subTask("Sending application descriptor to Execution")
								logger.info(String.format("Sending application descriptor to dohko"));
								response = dohkoService.runDohko(applicationDescriptor);

								progressMonitor.worked(100)

								result = String.format("Response status: %s", response.getStatusInfo());
								logger.info(result);

								if (response.getStatus() == 201 || response.getStatus() == 202) {

									Status.OK_STATUS
								} else {
									throw new RuntimeException(result)
								}

							}
						}
						progressMonitor.beginTask(" ...", 100)
						progressMonitor.subTask("Sending job to Dohko ... ")
						sendToDohkoJob.system = true
						sendToDohkoJob.jobGroup = runExperimentJobGroup
						sendToDohkoJob.schedule

						runExperimentJobGroup.join(Long.MAX_VALUE, progressMonitor)

						val insertTasksInDatabase = new Job("Inserting tasks in database ...") {

							override run(IProgressMonitor progressMonitor) {
								val jobStatus = response.readEntity(JobStatus);

								jobId = jobStatus.getId();
								applicationDescriptor = dohkoService.getApplicationDescriptor(jobId,
									applicationDescriptor.getUser().getUsername());
								val sdf = new SimpleDateFormat("YYYY-MM-dd-HH-mm-ss");
								executionFolder = new File(
									String.format("%s%s%s%s%s", specificationFile.getParentFile().getAbsolutePath(),
										File.separator, "executions", File.separator, sdf.format(new Date())));
								executionFolder.mkdirs();

								dataFile = new File(executionFolder.getAbsolutePath() + File.separator + "data.json");

								copyToFolder(applicationDescriptorFile, executionFolder);
								copyToFolder(jsonFile, executionFolder);
								copyToFolder(specificationFile, executionFolder);
								copyToFolder(rnwFile, executionFolder);

								val mappingService = MappingServiceFactory.get(jsonFile.getAbsolutePath());

								val design = mappingService.findAll().get(0).getDesignType().getName();

								val runs = mappingService.findAll().get(0).getRuns();
								val experimentName = mappingService.findAll().get(0).getExperimentName();

								experimentDesignService.create(
									ExperimentDesignDTO.getBuilder().design(design).jobId(jobId).runs(runs).name(
										experimentName).fileName(specificationFile.getName()).numberOfTasks(applicationDescriptor.getApplications().size).pending(applicationDescriptor.getApplications().size).build());

								tasks = (applicationDescriptor.getApplications() + applicationDescriptor.getBlocks().map[getApplications()].flatten).toList.map [
									val mapping = mappingService.findByTaskName(name);
									ExperimentExecutionDTO.builder.executionStatus(ExecutionStatusDTO.PENDING).
										taskId(id).factor(if(mapping === null) null else mapping.factor).object(
											if(mapping === null) null else mapping.object).taskName(
											if(mapping === null) null else mapping.getTaskName).treatment(
											if(mapping === null) null else mapping.treatment).jobId(jobId).build

								]
								tasks = experimentExecutionService.create(tasks)
								
								dataFileGenerator.writeToFile(dataFile, experimentExecutionService.findByJobId(jobId));
								Status.OK_STATUS
							}
						}
						insertTasksInDatabase.system = true
						insertTasksInDatabase.jobGroup = runExperimentJobGroup
						insertTasksInDatabase.schedule

						runExperimentJobGroup.join(Long.MAX_VALUE, progressMonitor)

						val TaskExecutionJob taskExecutionJob = taskExecutionJobProvider.get
						taskExecutionJob.jobGroup = runExperimentJobGroup
						taskExecutionJob.system = true
						taskExecutionJob.jobId = jobId
						taskExecutionJob.specificationFile = specificationFile
						taskExecutionJob.dataFile=dataFile
						taskExecutionJob.schedule
//						tasks.forEach [
//							val TaskExecutionJob taskExecutionJob = taskExecutionJobProvider.get
//							taskExecutionJob.jobGroup = runExperimentJobGroup
//							taskExecutionJob.system = true
//							taskExecutionJob.task = it
//							taskExecutionJob.specificationFile = specificationFile
//							taskExecutionJob.schedule
//						]
						progressMonitor.subTask("Running tasks")
						runExperimentJobGroup.join(Long.MAX_VALUE, progressMonitor)
						isError = taskExecutionJob.isError
						result = taskExecutionJob.message

						if (!isError) {

							val runAnalysisJob = runAnalysisJobProvider.get
							runAnalysisJob.rnwFile = new File(
								executionFolder.absolutePath + File.separator +
									file.getName().replaceFirst("[.][^.]+$", ".Rnw"))

							runAnalysisJob.jobGroup = runExperimentJobGroup
							runAnalysisJob.system = true
							runAnalysisJob.schedule

							runExperimentJobGroup.join(Long.MAX_VALUE, progressMonitor)

							result = runAnalysisJob.message
							isError = runAnalysisJob.error
						}
						val Job res = new Job("Displaying results...") {
							override run(IProgressMonitor progressMonitor) {

								if (!progressMonitor.isCanceled) {
									displayResult

								}
								Status.OK_STATUS
							}
						}
						res.jobGroup = runExperimentJobGroup
						res.system = true
						res.schedule

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
			runExperimentJobGroup = new JobGroup("runExperimentJobGroup", 4, 1)
			runExperimentJob.user = true
			// runExperimentJob.jobGroup=runExperimentJobGroup
			runExperimentJob.schedule
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

	def void copyToFolder(File file, File executionFolder) throws IOException {
		if (!file.exists()) {
			val message = String.format("File %s not found in %s folder", file.getName(), DEFAULT_OUTPUT_FOLDER);

			throw new RuntimeException(message);
		}

		Files.copy(file.toPath(),
			new File(executionFolder.getAbsolutePath() + File.separator + file.getName()).toPath(),
			StandardCopyOption.REPLACE_EXISTING, StandardCopyOption.COPY_ATTRIBUTES);
	}

	def displayResult() {
		window.shell.display.syncExec(new Runnable() {

			override run() {

				if (isError) {
					MessageDialog.openError(window.getShell(), "Execution Status", result)
				} else {
					MessageDialog.openInformation(window.getShell(), "Execution Status", result)
				}
			}
		})
	}
}
