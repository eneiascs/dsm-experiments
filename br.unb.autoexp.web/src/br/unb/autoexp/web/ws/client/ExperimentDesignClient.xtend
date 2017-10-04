package br.unb.autoexp.web.ws.client

import br.unb.autoexp.storage.entity.dto.ExperimentDesignDTO
import br.unb.autoexp.storage.service.ExperimentDesignStorageService
import br.unb.autoexp.web.storage.MongoClientProvider
import com.fasterxml.jackson.databind.ObjectMapper
import java.net.URL
import java.util.Arrays
import java.util.Map

class ExperimentDesignClient implements ExperimentDesignStorageService {

	private String url

	def ExperimentDesignClient activate(Map<String, Object> properties) {
		url = properties.get(MongoClientProvider.PROP_URI) as String
		this
	}

	override create(ExperimentDesignDTO experimentDesign) {
		val mapper = new ObjectMapper()
		val stringJson = mapper.writeValueAsString(experimentDesign)
		// mapper.writerFor(ExperimentDesignDTO).writeValue(new URL(urlBase + "/experiments/jobId/" + jobId),experimentDesign)
		println(stringJson)





		val charset = "UTF-8";
		val connection = new URL(url+"/api/experiment/").openConnection();
		connection.setDoOutput(true); // Triggers POST.
		connection.setRequestProperty("Accept-Charset", charset);
		connection.setRequestProperty("Content-Type", "application/json;charset=" + charset);
		connection.requestProperties
		try {
			val output = connection.getOutputStream()
			output.write(stringJson.getBytes(charset))

			val response = connection.getInputStream()
			println(response)
		}catch(Exception e){
			e.printStackTrace
		}

		experimentDesign
	}

	override findAll() {
		val mapper = new ObjectMapper()

		val obj = mapper.readerFor(typeof(ExperimentDesignDTO[])).readValue(new URL(url + "/api/experiment"))
		Arrays.asList(obj)
	}

	override findById(String id) {
		val mapper = new ObjectMapper()

		mapper.readerFor(ExperimentDesignDTO).readValue(new URL(url + "/api/experiment/id/" + id))

	}

	override findByName(String name) {
		val mapper = new ObjectMapper()

		mapper.readerFor(ExperimentDesignDTO).readValue(new URL(url + "/api/experiment/name/" + name))

	}

	override update(ExperimentDesignDTO experimentDesign) {
		val mapper = new ObjectMapper()
		val stringJson = mapper.writeValueAsString(experimentDesign)
		// mapper.writerFor(ExperimentDesignDTO).writeValue(new URL(urlBase + "/experiments/jobId/" + jobId),experimentDesign)
		println(stringJson)





		val charset = "UTF-8";
		val connection = new URL(url+"/api/experiment/"+experimentDesign.id).openConnection();
		connection.setDoOutput(true); // Triggers POST.
		connection.setRequestProperty("Accept-Charset", charset);
		connection.setRequestProperty("Content-Type", "application/json;charset=" + charset);
		connection.requestProperties
		try {
			val output = connection.getOutputStream()
			output.write(stringJson.getBytes(charset))

			val response = connection.getInputStream()
			println(response)
		}catch(Exception e){
			e.printStackTrace
		}
		experimentDesign
	}

	override findByJobId(String jobId) {

		val mapper = new ObjectMapper()

		mapper.readerFor(ExperimentDesignDTO).readValue(new URL(url + "/api/experiment/jobId/" + jobId))

	}

}
