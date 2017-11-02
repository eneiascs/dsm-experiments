package br.unb.autoexp.web.dohko.service.impl

import br.unb.autoexp.storage.entity.dto.ExecutionStatusDTO
import br.unb.autoexp.storage.entity.dto.ExperimentExecutionDTO
import br.unb.autoexp.storage.service.ExperimentExecutionStorageService
import br.unb.autoexp.tests.dohko.ApplicationDescriptorConverter
import br.unb.autoexp.web.dohko.service.DohkoService
import com.google.inject.Inject
import java.io.File
import java.io.IOException
import java.nio.charset.Charset
import java.nio.charset.StandardCharsets
import java.nio.file.Files
import java.nio.file.Paths
import java.util.List
import java.util.UUID
import javax.ws.rs.NotFoundException
import javax.ws.rs.client.ClientBuilder
import javax.ws.rs.client.Entity
import javax.ws.rs.client.WebTarget
import javax.ws.rs.core.GenericType
import javax.ws.rs.core.MediaType
import javax.ws.rs.core.Response
import org.apache.log4j.Logger
import org.excalibur.core.execution.domain.Application
import org.excalibur.core.execution.domain.ApplicationDescriptor
import org.excalibur.core.execution.domain.ResourceType
import org.excalibur.core.execution.domain.TaskResourceUsage
import org.excalibur.core.execution.domain.TaskStatus
import org.excalibur.core.execution.domain.TaskStatusType
import org.excalibur.discovery.ws.ext.YamlMapperProvider
import org.glassfish.jersey.jackson.JacksonFeature

class DohkoServiceImpl implements DohkoService {
	static final Logger logger = Logger.getLogger(DohkoServiceImpl)
	@Inject
	ExperimentExecutionStorageService experimentExecutionService
	
	override Response runDohko(ApplicationDescriptor applicationDescriptor) throws IOException {

		
		getApplicationTarget().request(MediaType.APPLICATION_XML_TYPE).put(Entity.entity(applicationDescriptor, MediaType.APPLICATION_XML_TYPE));
	}
	
	
	
	override updateTaskStatus(List<ExperimentExecutionDTO> tasks) {
 		logger.info("Updating tasks status for jobId %s".format(tasks.head.jobId))
		tasks.filter[executionStatus.equals(ExecutionStatusDTO.NOT_RECEIVED)||executionStatus.equals(ExecutionStatusDTO.PENDING)||executionStatus.equals(ExecutionStatusDTO.RUNNING)].forEach [ task |
			try {

				val target = getTaskTarget(task.taskId, "status")
				System.out.println(target.toString())
				val response = target.request(MediaType.APPLICATION_XML_TYPE)
				val status = response.get(TaskStatus)
				switch (status.type) {
					case TaskStatusType.PENDING: task.executionStatus = ExecutionStatusDTO.PENDING
					case TaskStatusType.RUNNING: task.executionStatus = ExecutionStatusDTO.RUNNING
					case TaskStatusType.FINISHED: task.executionStatus = ExecutionStatusDTO.FINISHED
					case TaskStatusType.FAILED: task.executionStatus = ExecutionStatusDTO.FAILED
				}

				val targetResources = getTaskTarget(task.taskId, "resources")
				
				val resources = targetResources.request(MediaType.APPLICATION_JSON).get(
					new GenericType<List<TaskResourceUsage>>() {
					})
				if (!resources.filter[resourceType.equals(ResourceType.CPU)].isNullOrEmpty)
					task.cpu = resources.filter[resourceType.equals(ResourceType.CPU)].maxBy[value].value.doubleValue
				if (!resources.filter[resourceType.equals(ResourceType.RAM)].isNullOrEmpty)
					task.memory = resources.filter[resourceType.equals(ResourceType.RAM)].maxBy[value].value.doubleValue
				task.time = Math.random().doubleValue

				experimentExecutionService.update(task)
			} catch (NotFoundException e) {
				logger.error(e.getMessage(), e)
				e.printStackTrace

			} 

		]
		tasks

	}
	override ApplicationDescriptor getApplicationDescriptor(File file) {
		try {
			val converter = new ApplicationDescriptorConverter();
			val fileString = readFile(file.getAbsolutePath(), StandardCharsets.UTF_8);
			val applicationDescriptor = converter.convert(fileString);

			if (applicationDescriptor.getId() === null) {
				val jobId = UUID.randomUUID().toString();
				applicationDescriptor.setId(jobId);
				for (Application application : applicationDescriptor.getApplications()) {
					if (application.getId() === null) {
						application.setId(UUID.randomUUID().toString());
						application.setJobId(jobId);
					}
				}

			}

			return applicationDescriptor;
		} catch (Exception e) {

			e.printStackTrace();
			throw e;
		}

	}
	def WebTarget getApplicationTarget() {
		val client = ClientBuilder.newClient().register(YamlMapperProvider).register(JacksonFeature);
		return client.target(String.format("http://%s/application", getDohkoAddress()));
	}
	
	
	def String getDohkoAddress() {
		var host = "10.10.3.10:8080"
		if (System.getenv("DOHKO_ADDRESS") !== null) {
			host = System.getenv("DOHKO_ADDRESS")
		}
		return host;
	}

	def WebTarget getTaskTarget(String taskId, String command) {
		
		ClientBuilder.newClient().target(String.format("http://%s/task/%s/%s", getDohkoAddress(), taskId, command))
	}
	
	def String readFile(String path, Charset encoding) throws IOException {
		new String(Files.readAllBytes(Paths.get(path)), encoding)
	}
}