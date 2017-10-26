package br.unb.autoexp.web.ws.client

import br.unb.autoexp.storage.entity.dto.ExperimentExecutionDTO
import br.unb.autoexp.storage.service.ExperimentExecutionStorageService
import java.util.List
import javax.ws.rs.client.ClientBuilder
import javax.ws.rs.client.Entity
import javax.ws.rs.core.GenericType
import javax.ws.rs.core.MediaType

import static extension java.lang.String.*

class ExperimentExecutionClient implements ExperimentExecutionStorageService {

	override create(ExperimentExecutionDTO experimentExecution) {
		val response = ClientBuilder.newClient().target("%s/execution".format(getBaseUrl())).request(MediaType.APPLICATION_JSON).post(
					Entity.entity(experimentExecution, MediaType.APPLICATION_JSON))
		response.readEntity(ExperimentExecutionDTO)
	}

	override create(List<ExperimentExecutionDTO> experimentExecution) {
		ClientBuilder.newClient().target("%s/execution/list".format(getBaseUrl())).request(MediaType.APPLICATION_JSON).
			post(Entity.entity(experimentExecution, MediaType.APPLICATION_JSON)).readEntity(
				new GenericType<List<ExperimentExecutionDTO>>() {
				})
	}

	override findAll() {
		ClientBuilder.newClient().target("%s/execution".format(getBaseUrl())).request(MediaType.APPLICATION_JSON).get.
			readEntity(new GenericType<List<ExperimentExecutionDTO>>() {
			})
	}


	override findById(String objectId) {
		ClientBuilder.newClient().target("%s/execution/id/%s".format(getBaseUrl(), objectId)).request(
			MediaType.APPLICATION_JSON).get.readEntity(ExperimentExecutionDTO)
	}

	override findByJobId(String jobId) {
		ClientBuilder.newClient().target("%s/execution/jobId/%s".format(getBaseUrl(), jobId)).request(
			MediaType.APPLICATION_JSON).get.readEntity(new GenericType<List<ExperimentExecutionDTO>>() {
			})
	}
	
	override update(ExperimentExecutionDTO experimentExecution) {
		ClientBuilder.newClient().target("%s/execution/%s".format(getBaseUrl(),experimentExecution.id)).request(MediaType.APPLICATION_JSON).put(
			Entity.entity(experimentExecution, MediaType.APPLICATION_JSON)).readEntity(ExperimentExecutionDTO)
	}

	

	

	def String getBaseUrl() {

		var uri = "http://localhost:8090/api";
		if (System.getenv("DATABASE_URI") !== null) {
			uri = System.getenv("DATABASE_URI");
		}

	}
}
