package br.unb.autoexp.rBaseApi.client

import javax.ws.rs.client.ClientBuilder
import javax.ws.rs.client.Entity
import javax.ws.rs.client.WebTarget
import javax.ws.rs.core.MediaType

class RBaseApiClientImpl implements RBaseApiClient {

	override runAnalysis(String filePath) {
		
		getTarget().request(MediaType.APPLICATION_JSON).post(Entity.entity(filePath, MediaType.APPLICATION_JSON));

	}

	def WebTarget getTarget() {
		val target=ClientBuilder.newClient().target(String.format("%s/pdf", getBaseUrl()))
		println(target.toString)
		target
	}

	def String getBaseUrl() {
		var rBaseUrl = "http://localhost:8080/r-base/command"

		if (System.getenv("R_BASE_URL") !== null) {
			rBaseUrl = System.getenv("R_BASE_URL");
		}
		rBaseUrl
	}
}
