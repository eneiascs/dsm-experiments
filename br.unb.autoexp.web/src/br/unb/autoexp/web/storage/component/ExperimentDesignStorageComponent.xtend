package br.unb.autoexp.web.storage.component

import br.unb.autoexp.storage.entity.dto.ExperimentDesignDTO
import br.unb.autoexp.storage.service.ExperimentDesignStorageService
import br.unb.autoexp.web.storage.MongoClientProvider
import br.unb.autoexp.web.storage.MongoClientProviderFactory
import br.unb.autoexp.web.storage.component.entity.ExperimentDesign
import com.mongodb.DBCollection
import java.util.ArrayList
import java.util.Date
import java.util.Map
import org.mongojack.DBQuery
import org.mongojack.JacksonDBCollection

class ExperimentDesignStorageComponent implements ExperimentDesignStorageService {

	DBCollection dbCollection
	volatile JacksonDBCollection<ExperimentDesign, String> experimentsCollection

	def activate(Map<String, Object> properties) {

		dbCollection = MongoClientProviderFactory.get.getMongoClient.getDB(
			properties.get(MongoClientProvider.PROP_DATABASE) as String).getCollection("experimentDesign")
		experimentsCollection = JacksonDBCollection.wrap(dbCollection, ExperimentDesign, String)
		this
	}

	override create(ExperimentDesignDTO experimentDesign) {
		var ExperimentDesign persisted = ExperimentDesign.getBuilder().jobId(experimentDesign.jobId).name(
			experimentDesign.name).fileName(experimentDesign.fileName).runs(experimentDesign.runs).design(
			experimentDesign.design).creationDate(new Date()).lastUpdateDate(new Date()).build();

		experimentsCollection.save(persisted).savedObject.convertToDTO
	}

	override findAll() {
		val results = new ArrayList<ExperimentDesignDTO>()
		experimentsCollection.find.forEach[results.add(it.convertToDTO)]
		results
	}

	override findById(String objectId) {

		experimentsCollection.findOneById(objectId).convertToDTO
	}

	override findByName(String name) {
		val results = new ArrayList<ExperimentDesignDTO>()
		experimentsCollection.find(DBQuery.is("name", name)).forEach[results.add(it.convertToDTO)]
		results
	}

	override update(ExperimentDesignDTO experimentDesign) {

		var updated = experimentsCollection.findOneById(experimentDesign.id)

		updated.update(
			experimentDesign.jobId,
			experimentDesign.name,
			experimentDesign.design,
			experimentDesign.fileName,
			experimentDesign.runs,
			new Date()
		)
		experimentsCollection.updateById(experimentDesign.id, updated)
		updated.convertToDTO

	}

	override findByJobId(String id) {
		experimentsCollection.findOne(DBQuery.is("jobId", id)).convertToDTO
	}

	def ExperimentDesignDTO convertToDTO(ExperimentDesign model) {
		if (model === null) {
			null
		} else {
			ExperimentDesignDTO.builder.id(model._id.toString).jobId(model.jobId).name(model.name).design(model.design).
				fileName(model.fileName).runs(model.runs).creationDate(model.creationDate).lastUpdateDate(
					model.lastUpdateDate).build()
		}
	}
}
