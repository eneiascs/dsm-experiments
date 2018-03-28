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
import java.util.Base64
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
import org.excalibur.core.execution.domain.TaskStatus
import org.excalibur.core.execution.domain.TaskStatusType

import static extension java.lang.String.*

class DohkoServiceImpl implements DohkoService {
	static final Logger logger = Logger.getLogger(DohkoServiceImpl)
	@Inject
	ExperimentExecutionStorageService experimentExecutionService
	@Inject
	ParseHelper<Model> parser

	override Response runDohko(ApplicationDescriptor applicationDescriptor) throws IOException {

		val entity = Entity.entity(applicationDescriptor, MediaType.APPLICATION_JSON)

		getJobTarget(applicationDescriptor.user.username).request(MediaType.APPLICATION_JSON).accept(
			MediaType.APPLICATION_JSON).post(entity)

	}

	override updateTaskStatus(List<ExperimentExecutionDTO> tasks, File specificationFile) {
		logger.info("Updating tasks status for jobId %s".format(tasks.head.jobId))
		tasks.filter[isRunning].forEach [ task |
			task.updateTaskStatus(specificationFile)

		]
		tasks

	}

	protected def boolean isRunning(ExperimentExecutionDTO execution) {
		execution.executionStatus.equals(ExecutionStatusDTO.NOT_RECEIVED) ||
			execution.executionStatus.equals(ExecutionStatusDTO.PENDING) ||
			execution.executionStatus.equals(ExecutionStatusDTO.RUNNING)
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
			val target = getTaskTarget(task.jobId, task.taskId, "status")

			val status = target.request(MediaType.APPLICATION_JSON).get(TaskStatus)
			switch (status.type) {
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

			try {
				val targetResources = getTaskTarget(task.jobId, task.taskId, "stats")

				val stats = targetResources.request(MediaType.APPLICATION_JSON).get(TaskStats)

				if (!stats.cpu.isNullOrEmpty) {
					task.addDependentVariable("cpu", stats.cpu.maxBy[percent].percent.doubleValue)

				}
				if (!stats.memory.isNullOrEmpty) {
					task.addDependentVariable("memory", stats.memory.maxBy[resident].resident.doubleValue / 1024)
				}

			} catch (Exception e) {
				logger.error(e.message, e)
			}
			val res = getTaskTarget(task.jobId, task.taskId, "output").request(MediaType.APPLICATION_JSON).get

			val outputs = res.readEntity(new GenericType<List<TaskOutput>>() {
			})
			if (!outputs.filter[type.equals(TaskOutputType.SYSOUT)].isNullOrEmpty) {
				val encodedOutput = outputs.filter[type.equals(TaskOutputType.SYSOUT)].head.value.toString
				val decodedOutput = new String(Base64.getDecoder().decode(encodedOutput))

				val experiment = parseDomainmodel(specificationFile)

				val depVariables = experiment.researchHypotheses.filter [
					formula.treatment1.name.equals(task.treatment) || formula.treatment2.name.equals(task.treatment)
				].filter[formula.depVariable.instrument !== null].map[formula.depVariable].toList

				depVariables.forEach [
					val expression = instrument.valueExpression.replaceAll("\\(", "\\\\(").replaceAll("\\)", "\\\\)")

					val p = Pattern.compile("(%s)( *)(\\d+\\.?\\d*)".format(expression))
					val m = p.matcher(decodedOutput);
					while (m.find) {
						if (m.groupCount >= 3) {
							var value = new Double(m.group(3))
							if (instrument.conversionFactor !== null) {
								value = (value * instrument.conversionFactor.doubleValue).doubleValue
							}
							task.addDependentVariable(name.convert, value)
						}

					}
				]

			}
			if (task.id === null)
				experimentExecutionService.create(task)
			else
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

	def convert(String depVariable) {
		switch (depVariable) {
			case "cpuConsumption": "cpu"
			case "memoryConsumption": "memory"
			default: depVariable
		}
	}
}
