package br.unb.autoexp.web.job

import br.unb.autoexp.storage.entity.dto.ExecutionStatusDTO
import br.unb.autoexp.storage.entity.dto.ExperimentDesignDTO
import br.unb.autoexp.storage.entity.dto.ExperimentExecutionDTO
import br.unb.autoexp.storage.service.ExperimentDesignStorageService
import br.unb.autoexp.storage.service.ExperimentExecutionStorageService
import br.unb.autoexp.web.data.DataFileGeneratorService
import br.unb.autoexp.web.dohko.service.DohkoService
import java.io.File
import javax.inject.Inject
import org.apache.log4j.Logger
import org.eclipse.core.runtime.IProgressMonitor
import org.eclipse.core.runtime.OperationCanceledException
import org.eclipse.core.runtime.Status
import org.eclipse.core.runtime.jobs.Job
import org.eclipse.core.runtime.jobs.JobGroup
import org.eclipse.xtend.lib.annotations.Accessors
import org.excalibur.core.execution.domain.JobStatus
import org.excalibur.core.execution.domain.TaskStatusType

import static extension java.lang.String.*

class UpdateTaskStatusJob extends Job {
	static final Logger logger = Logger.getLogger(UpdateTaskStatusJob)
	@Inject
	private DohkoService dohkoService
	@Inject
	private ExperimentDesignStorageService experimentDesignService
	@Inject
	private ExperimentExecutionStorageService experimentExecutionService

	@Accessors
	private String jobId
	@Accessors
	private String message
	@Accessors
	private boolean isError

	@Inject
	private DataFileGeneratorService dataFileGenerator
	@Accessors
	private File dataFile
	@Accessors
	private File specificationFile
	@Accessors
	private ExperimentDesignDTO design

	@Inject
	new() {
		super("Update task status")
	}

	new(String name) {
		super(name)
	}

	override protected run(IProgressMonitor progressMonitor) {

		try {
			design = experimentDesignService.findByJobId(jobId)
			if (progressMonitor.isCanceled()) {
				progressMonitor.done();

				throw new InterruptedException()

			}

			if (!design.isFinished) {

				val jobStatus = dohkoService.getJobStatus(jobId)

				if (jobStatus.changed(design)) {

					var tasks = experimentExecutionService.findByJobId(jobId)
					val pendingTasks = tasks.filter[task|!task.isFinished].toList

					val tasksGroup = new JobGroup("tasksGroup", 4, 1)

					jobStatus.tasksStatus.filter[!type.equals(TaskStatusType.PENDING)].forEach [
						val taskJob = new Job("Updating task status...") {
							override run(IProgressMonitor progressMonitor) {
								if (progressMonitor.isCanceled()) {
									progressMonitor.done();

									throw new InterruptedException()

								}

								if (!pendingTasks.filter[element|element.taskId.equals(taskId)].isNullOrEmpty) {

									val task = pendingTasks.filter[element|element.taskId.equals(taskId)].head

									switch (type) {
										case TaskStatusType.PENDING:
											task.executionStatus = ExecutionStatusDTO.PENDING
										case TaskStatusType.RUNNING:
											task.executionStatus = ExecutionStatusDTO.RUNNING
										case TaskStatusType.FINISHED:
											task.executionStatus = ExecutionStatusDTO.FINISHED
										case TaskStatusType.FAILED:
											task.executionStatus = ExecutionStatusDTO.FAILED
										case TaskStatusType.CANCELLED:
											task.executionStatus = ExecutionStatusDTO.CANCELLED	
										default: {
										}
									}

									dohkoService.updateTaskStatus(task, specificationFile)
									design = experimentDesignService.update(jobId)
								}
								Status.OK_STATUS
							}
						}
						taskJob.system=true
						taskJob.jobGroup=tasksGroup
						taskJob.schedule
					]
			
					if (progressMonitor.isCanceled()) {
						progressMonitor.done();

						throw new InterruptedException()

					}
					tasksGroup.join(Long.MAX_VALUE, progressMonitor)
					tasks = experimentExecutionService.findByJobId(jobId)
					design = experimentDesignService.update(jobId)
					// progressMonitor.subTask("Writing data to file %s".format(dataFile.name));
					dataFileGenerator.writeToFile(dataFile, tasks);

				}
			// progressMonitor.worked(1);
			// progressMonitor.done()
			}
			message = '''
				Execution Status:
									
				Tasks: «design.numberOfTasks»
				Not Received: «design.notReceived»
				Pending: «design.pending»
				Running: «design.running»
				Finished: «design.getFinished()»
				Failed: «design.failed»
				Cancelled: «design.cancelled»
										
			'''

			Status.OK_STATUS

		} catch (InterruptedException ex) {
			Status.CANCEL_STATUS
		} catch (OperationCanceledException ex) {

			Status.CANCEL_STATUS
		} catch (Exception ex) {
			isError = true
			message = "An error has occurred: " + ex.getMessage();
			logger.error(ex.getMessage(), ex)
			ex.printStackTrace

			throw ex;

		} finally {
			progressMonitor.done()

		}
	}

	def changed(JobStatus status, ExperimentDesignDTO design) {
		status.tasksStatus.filter[type.equals(TaskStatusType.PENDING)].length !== design.pending ||
			status.tasksStatus.filter[type.equals(TaskStatusType.RUNNING)].length !== design.running ||
			status.tasksStatus.filter[type.equals(TaskStatusType.FINISHED)].length !== design.getFinished() ||
			status.tasksStatus.filter[type.equals(TaskStatusType.FAILED)].length !== design.failed ||
			status.tasksStatus.filter[type.equals(TaskStatusType.CANCELLED)].length !== design.cancelled
	}

	


	def createUpdateTaskJob(ExperimentExecutionDTO task, String jobName) {
		new Job(jobName) {
			override run(IProgressMonitor progressMonitor) {

				// task.updateTaskStatus(specificationFile)
				// progressMonitor.done();
				Status.OK_STATUS
			}

		};
	}

}
