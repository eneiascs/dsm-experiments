package br.unb.autoexp.web.dohko.service.impl

import br.unb.autoexp.autoExp.Experiment
import br.unb.autoexp.autoExp.Model
import br.unb.autoexp.storage.entity.dto.ExecutionStatusDTO
import br.unb.autoexp.storage.entity.dto.ExperimentExecutionDTO
import br.unb.autoexp.storage.service.ExperimentExecutionStorageService
import br.unb.autoexp.tests.dohko.ApplicationDescriptorConverter
import br.unb.autoexp.web.dohko.domain.TaskOutput
import br.unb.autoexp.web.dohko.service.DohkoService
import com.google.inject.Inject
import java.io.File
import java.io.IOException
import java.nio.charset.StandardCharsets
import java.nio.file.Files
import java.nio.file.Paths
import java.util.List
import java.util.regex.Pattern
import javax.ws.rs.NotFoundException
import javax.ws.rs.client.ClientBuilder
import javax.ws.rs.client.Entity
import javax.ws.rs.client.WebTarget
import javax.ws.rs.core.GenericType
import javax.ws.rs.core.MediaType
import javax.ws.rs.core.Response
import org.apache.log4j.Logger
import org.eclipse.xtext.testing.util.ParseHelper
import org.excalibur.core.execution.domain.ApplicationDescriptor
import org.excalibur.core.execution.domain.JobStatus
import org.excalibur.core.execution.domain.TaskOutputType
import org.excalibur.core.execution.domain.TaskStats

import static extension java.lang.String.*

class DohkoServiceImpl implements DohkoService {
	static final Logger logger = Logger.getLogger(DohkoServiceImpl)
	@Inject
	ExperimentExecutionStorageService experimentExecutionService
	@Inject
	ParseHelper<Model> parser

	override Response runDohko(ApplicationDescriptor applicationDescriptor) throws IOException {

		val entity = Entity.entity(applicationDescriptor, MediaType.APPLICATION_JSON)
		//logger.info(entity.toString)
		
		getJobTarget(applicationDescriptor.user.username).request(MediaType.APPLICATION_JSON).accept(
			MediaType.APPLICATION_JSON).post(entity)

	}

	override updateTaskStatus(List<ExperimentExecutionDTO> tasks, File specificationFile) {
		logger.info("Updating tasks status for jobId %s".format(tasks.head.jobId))
		tasks.filter[isNotFinished].forEach [ task |
			task.updateTaskStatus(specificationFile)

		]
		tasks

	}

	protected def boolean isNotFinished(ExperimentExecutionDTO it) {
		executionStatus.equals(ExecutionStatusDTO.NOT_RECEIVED) || executionStatus.equals(ExecutionStatusDTO.PENDING) ||
			executionStatus.equals(ExecutionStatusDTO.RUNNING)
	}

	override getApplicationDescriptor(String jobId, String username) {
		getJobTarget(jobId, username).request(MediaType.APPLICATION_JSON).get(ApplicationDescriptor)
	}

	override ApplicationDescriptor getApplicationDescriptor(File file) {
		try {
			val converter = new ApplicationDescriptorConverter();
			val fileString = readFile(file.getAbsolutePath());
			val applicationDescriptor = converter.convert(fileString);

			return applicationDescriptor;
		} catch (Exception e) {

			e.printStackTrace();
			throw e;
		}

	}

	def Experiment parseDomainmodel(File file) {

		val model = parser.parse(readFile(file.absolutePath))
		model.experiments.head

	}

	def WebTarget getJobTarget(String username) {
		ClientBuilder.newClient().target(String.format("http://%s/%s/jobs", getDohkoAddress(), username))
	}

	def WebTarget getJobTarget(String jobId, String username) {
		ClientBuilder.newClient().target(String.format("http://%s/%s/jobs/%s", getDohkoAddress(), username, jobId))
	}

	def WebTarget getJobTarget(String jobId, String username, String command) {
		ClientBuilder.newClient().target(
			String.format("http://%s/%s/jobs/%s/%s", getDohkoAddress(), username, jobId, command))
	}

	def String getDohkoAddress() {
		var host = "10.10.3.10:8080"
		if (System.getenv("DOHKO_ADDRESS") !== null) {
			host = System.getenv("DOHKO_ADDRESS")
		}
		return host;
	}

	def WebTarget getTaskTarget(String jobId, String taskId, String command) {

		ClientBuilder.newClient().target(
			String.format("http://%s/vagrant/jobs/%s/task/%s/%s", getDohkoAddress(), jobId, taskId, command))
	}

	def String readFile(String path) throws IOException {
		new String(Files.readAllBytes(Paths.get(path)), StandardCharsets.UTF_8)
	}

	override updateTaskStatus(ExperimentExecutionDTO task, File specificationFile) {
		try {

			
				val targetResources = getTaskTarget(task.jobId, task.taskId, "stats")

				val stats = targetResources.request(MediaType.APPLICATION_JSON).get(TaskStats)

				if (!stats.cpu.isNullOrEmpty) {
					task.addDependentVariable("cpu", stats.cpu.maxBy[percent].percent.doubleValue)
					//task.addDependentVariable("time",
					//	(status.date.time.doubleValue - stats.cpu.minBy[datetime].datetime.time.doubleValue) / 1000)

				}
				if (!stats.memory.isNullOrEmpty) {
					task.addDependentVariable("memory", stats.memory.maxBy[resident].resident.doubleValue / 1024)
				}
				val res = getTaskTarget(task.jobId, task.taskId, "output").request(MediaType.APPLICATION_JSON).get

				val outputs = res.readEntity(new GenericType<List<TaskOutput>>() {
				})
				if (!outputs.filter[type.equals(TaskOutputType.SYSOUT)].isNullOrEmpty) {
					val outputString = outputs.filter[type.equals(TaskOutputType.SYSOUT)].head.value.toString
					val experiment = parseDomainmodel(specificationFile)

					val depVariables = experiment.researchHypotheses.filter [
						formula.treatment1.name.equals(task.treatment) || formula.treatment2.name.equals(task.treatment)
					].filter[formula.depVariable.instrument !== null].map[formula.depVariable].toList

					depVariables.forEach [

						val p = Pattern.compile("(%s)( *)(\\d+\\.?\\d*)".format(instrument.valueExpression));
						val m = p.matcher(outputString);
						while (m.find) {
							if (m.groupCount >= 3) {
								var value = new Double(m.group(3))
								if (instrument.conversionFactor !== null) {
									value = (value * instrument.conversionFactor.doubleValue).doubleValue
								}
								task.addDependentVariable(name, value)
							}

						}
					]

				}

			

			experimentExecutionService.update(task)

		} catch (NotFoundException e) {
			logger.error(e.getMessage(), e)
			e.printStackTrace

		}
		task

	}

	override getJobStatus(String jobId) {
		getJobTarget(jobId, "vagrant", "status").request(MediaType.APPLICATION_JSON).get(JobStatus)
	}

}
