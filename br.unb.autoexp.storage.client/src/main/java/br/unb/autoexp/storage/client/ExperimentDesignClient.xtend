package br.unb.autoexp.storage.client

import br.unb.autoexp.storage.entity.dto.ExperimentDesignDTO
import br.unb.autoexp.storage.service.ExperimentDesignStorageService
import java.util.List
import org.springframework.beans.factory.annotation.Value
import org.springframework.core.ParameterizedTypeReference
import org.springframework.http.HttpEntity
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpMethod
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service
import org.springframework.web.client.RestTemplate

@Service
class ExperimentDesignClient implements ExperimentDesignStorageService {

	@Value("${br.unb.autoexp.storage.uri}")
	private String urlBase

	val restTemplate = new RestTemplate()

	override create(ExperimentDesignDTO experimentDesign) {
		val headers = new HttpHeaders()
		headers.setContentType(MediaType.APPLICATION_JSON)
		val requestEntity =new HttpEntity<Object>(experimentDesign, headers)

		val ResponseEntity<ExperimentDesignDTO> response = restTemplate.exchange(urlBase + "/api/experiment/",
			HttpMethod.POST, requestEntity, ExperimentDesignDTO)

		response.body
	}

	override findAll() {

		val ResponseEntity<List<ExperimentDesignDTO>> response = restTemplate.exchange(urlBase + "/api/experiment",
			HttpMethod.GET, null, new ParameterizedTypeReference<List<ExperimentDesignDTO>>() {
			})

		response.body
	}

	override findById(String id) {
		val ResponseEntity<ExperimentDesignDTO> response = restTemplate.exchange(
			urlBase + "/api/experiment/id/{id}", HttpMethod.GET, null, ExperimentDesignDTO, id)

		response.body

	}

	override findByName(String name) {
		val ResponseEntity<List<ExperimentDesignDTO>> response = restTemplate.exchange(urlBase +
			"/api/experiment/name/{name}", HttpMethod.GET, null,
			new ParameterizedTypeReference<List<ExperimentDesignDTO>>() {
			}, name)

		response.body
	}

	override update(ExperimentDesignDTO experimentDesign) {
		val headers = new HttpHeaders()
		headers.setContentType(MediaType.APPLICATION_JSON)
		val requestEntity =new HttpEntity<Object>(experimentDesign, headers)

		val ResponseEntity<ExperimentDesignDTO> response = restTemplate.exchange(urlBase + "/api/experiment/{id}",
			HttpMethod.PUT, requestEntity, ExperimentDesignDTO,experimentDesign.id)

		response.body
	}

	override findByJobId(String jobId) {

		val ResponseEntity<ExperimentDesignDTO> response = restTemplate.exchange(
			urlBase + "/api/experiment/jobId/{jobId}", HttpMethod.GET, null, ExperimentDesignDTO, jobId)

		response.body
	}

}
