package br.unb.autoexp.storage.mongodb.client

import br.unb.autoexp.storage.entity.dto.ExperimentDesignDTO
import br.unb.autoexp.storage.service.ExperimentDesignStorageService
import java.util.List
import javax.ws.rs.client.ClientBuilder
import javax.ws.rs.client.Entity
import javax.ws.rs.core.GenericType
import javax.ws.rs.core.MediaType

import static extension java.lang.String.*

class ExperimentDesignClient implements ExperimentDesignStorageService {

	override create(ExperimentDesignDTO experimentDesign) {

		ClientBuilder.newClient().target("%s/experiment".format(getBaseUrl())).request(MediaType.APPLICATION_JSON).post(
			Entity.entity(experimentDesign, MediaType.APPLICATION_JSON)).readEntity(ExperimentDesignDTO)

	}

	override findAll() {
		ClientBuilder.newClient().target("%s/experiment".format(getBaseUrl())).request(MediaType.APPLICATION_JSON).get.
			readEntity(new GenericType<List<ExperimentDesignDTO>>() {
			})
	}

	override findById(String id) {

		ClientBuilder.newClient().target("%s/experiment/id/%s".format(getBaseUrl(), id)).request(
			MediaType.APPLICATION_JSON).get.readEntity(ExperimentDesignDTO)

	}

	override findByName(String name) {
		ClientBuilder.newClient().target("%s/experiment/name/%s".format(getBaseUrl(), name)).request(
			MediaType.APPLICATION_JSON).get.readEntity(new GenericType<List<ExperimentDesignDTO>>() {
		})

	}

	override findByJobId(String jobId) {

		ClientBuilder.newClient().target("%s/experiment/jobId/%s".format(getBaseUrl(), jobId)).request(
			MediaType.APPLICATION_JSON).get.readEntity(ExperimentDesignDTO)

	}

	override update(ExperimentDesignDTO experimentDesign) {

		ClientBuilder.newClient().target("%s/experiment/".format(getBaseUrl(), experimentDesign.id)).request(
			MediaType.APPLICATION_JSON).put(Entity.entity(experimentDesign, MediaType.APPLICATION_JSON)).readEntity(
			ExperimentDesignDTO)

	}

	def String getBaseUrl() {

		var uri = "http://localhost:8090/api";
		if (System.getenv("DATABASE_URI") !== null) {
			uri = System.getenv("DATABASE_URI");
		}
		
	}
}
