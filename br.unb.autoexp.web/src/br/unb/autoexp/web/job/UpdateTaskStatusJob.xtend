package br.unb.autoexp.web.job

import br.unb.autoexp.storage.entity.dto.ExecutionStatusDTO
import br.unb.autoexp.storage.entity.dto.ExperimentDesignDTO
import br.unb.autoexp.storage.entity.dto.ExperimentExecutionDTO
import br.unb.autoexp.storage.service.ExperimentDesignStorageService
import br.unb.autoexp.storage.service.ExperimentExecutionStorageService
import br.unb.autoexp.web.data.DataFileGeneratorService
import br.unb.autoexp.web.dohko.service.DohkoService
import br.unb.autoexp.web.mapping.MappingServiceFactory
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

			if (progressMonitor.isCanceled()) {
				progressMonitor.done();

				throw new InterruptedException()

			}

			val applicationDescriptorFile = new File(
				specificationFile.getParentFile().getAbsolutePath() + File.separator +
					specificationFile.getName().replaceFirst("[.][^.]+$", ".yml"));
			var applicationDescriptor = dohkoService.getApplicationDescriptor(applicationDescriptorFile);

			logger.info("Reading application descriptor for job id %s".format(jobId))
			applicationDescriptor = dohkoService.getApplicationDescriptor(jobId, applicationDescriptor.user.username);

			val jsonFile = new File(
				dataFile.getParentFile().getAbsolutePath() + File.separator +
					specificationFile.getName().replaceFirst("[.][^.]+$", ".json"));
			val mappingService = MappingServiceFactory.get(jsonFile.getAbsolutePath());

			design = experimentDesignService.findByJobId(jobId)
			val tasksDatabase =experimentExecutionService.findByJobId(jobId)
			var tasks = (applicationDescriptor.getApplications() + applicationDescriptor.getBlocks().map [
				getApplications()
			].flatten).toList.map [
							
				val mapping = mappingService.findByTaskName(name);
				
				val i =if(tasksDatabase!==null&&!tasksDatabase.filter[t|t.taskId.equals(id)].isNullOrEmpty)  tasksDatabase.filter[t|t.taskId.equals(id)].head.id else null
				
				ExperimentExecutionDTO.builder.executionStatus(ExecutionStatusDTO.PENDING)
				.id(i)
				.taskId(id)
				.factor(if(mapping === null) null else mapping.factor)
				.object(if(mapping === null) null else mapping.object)
				.taskName(if(mapping === null) null else mapping.getTaskName)
				.treatment(if(mapping === null) null else mapping.treatment)
				.jobId(jobId)
				.build

			]
			
			val tasksGroup = new JobGroup("tasksGroup", 30, 1)

			
			tasks.forEach [ task |

				val taskJob = new Job("Updating task status...") {
					override run(IProgressMonitor progressMonitor) {
						if (progressMonitor.isCanceled()) {
							progressMonitor.done();

							throw new InterruptedException()

						}
						
						experimentExecutionService.findByJobId(jobId)
						dohkoService.updateTaskStatus(task, specificationFile)
						Status.OK_STATUS
					}
				}
				taskJob.system = true
				taskJob.jobGroup = tasksGroup
				taskJob.schedule
			]

			if (progressMonitor.isCanceled()) {
				progressMonitor.done();

				throw new InterruptedException()

			}
			tasksGroup.join(Long.MAX_VALUE, progressMonitor)
			tasks = experimentExecutionService.findByJobId(jobId)
			design = experimentDesignService.update(jobId)

			dataFileGenerator.writeToFile(dataFile, tasks);


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

				
				Status.OK_STATUS
			}

		};
	}

}
