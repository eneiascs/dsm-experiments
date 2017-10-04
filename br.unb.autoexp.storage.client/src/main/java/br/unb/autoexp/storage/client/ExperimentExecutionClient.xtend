package br.unb.autoexp.storage.client

import br.unb.autoexp.storage.entity.dto.ExperimentExecutionDTO
import br.unb.autoexp.storage.service.ExperimentExecutionStorageService
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
class ExperimentExecutionClient implements ExperimentExecutionStorageService {
	@Value("${br.unb.autoexp.storage.uri}")
	private String urlBase
 
	val restTemplate = new RestTemplate()

	override create(ExperimentExecutionDTO experimentExecution) {
		val headers = new HttpHeaders()
		headers.setContentType(MediaType.APPLICATION_JSON)
		val requestEntity = new HttpEntity<Object>(experimentExecution, headers)

		val ResponseEntity<ExperimentExecutionDTO> response = restTemplate.exchange(urlBase + "/api/execution/",
			HttpMethod.POST, requestEntity, ExperimentExecutionDTO)

		response.body
	}

	override create(List<ExperimentExecutionDTO> experimentExecution) {
		val headers = new HttpHeaders()
		headers.setContentType(MediaType.APPLICATION_JSON)
		val requestEntity = new HttpEntity<Object>(experimentExecution, headers)

		val ResponseEntity<List<ExperimentExecutionDTO>> response = restTemplate.exchange(urlBase +
			"/api/execution/list", HttpMethod.POST, requestEntity,
			new ParameterizedTypeReference<List<ExperimentExecutionDTO>>() {
			})

		response.body
	}

	override findAll() {
		val ResponseEntity<List<ExperimentExecutionDTO>> response = restTemplate.exchange(urlBase + "/api/execution",
			HttpMethod.GET, null, new ParameterizedTypeReference<List<ExperimentExecutionDTO>>() {
			})

		response.body
	}

	override findById(String id) {
		val ResponseEntity<ExperimentExecutionDTO> response = restTemplate.exchange(urlBase + "/api/execution/id/{id}",
			HttpMethod.GET, null, ExperimentExecutionDTO, id)

		response.body
	}

	override findByJobId(String jobId) {

		val ResponseEntity<List<ExperimentExecutionDTO>> response = restTemplate.exchange(
			urlBase + "/api/execution/jobId/{jobId}", HttpMethod.GET, null,
			new ParameterizedTypeReference<List<ExperimentExecutionDTO>>() {
			}, jobId)

		response.body
	}

	override update(ExperimentExecutionDTO experimentExecution) {
		val headers = new HttpHeaders()
		headers.setContentType(MediaType.APPLICATION_JSON)
		val requestEntity = new HttpEntity<Object>(experimentExecution, headers)

		val ResponseEntity<ExperimentExecutionDTO> response = restTemplate.exchange(urlBase + "/api/execution/{id}",
			HttpMethod.PUT, requestEntity, ExperimentExecutionDTO, experimentExecution.id)

		response.body
	}

}
