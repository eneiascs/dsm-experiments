package br.unb.autoexp.web.storage.component

import br.unb.autoexp.storage.entity.dto.ExecutionStatusDTO
import br.unb.autoexp.storage.entity.dto.ExperimentExecutionDTO
import br.unb.autoexp.storage.service.ExperimentExecutionStorageService
import br.unb.autoexp.web.storage.MongoClientProvider
import br.unb.autoexp.web.storage.MongoClientProviderFactory
import br.unb.autoexp.web.storage.component.entity.ExecutionStatus
import br.unb.autoexp.web.storage.component.entity.ExperimentExecution
import com.mongodb.DBCollection
import java.util.ArrayList
import java.util.Date
import java.util.HashMap
import java.util.List
import java.util.Map
import org.mongojack.DBQuery
import org.mongojack.JacksonDBCollection

class ExperimentExecutionStorageComponent implements ExperimentExecutionStorageService {
	DBCollection dbCollection
	volatile JacksonDBCollection<ExperimentExecution, String> executionsCollection

	new (){
		val properties = new HashMap<String, Object>();

			var databaseName = "experiments";

			if (System.getenv("DATABASE_NAME") !== null) {
				databaseName = System.getenv("DATABASE_NAME");
			}

			properties.put(MongoClientProvider.PROP_DATABASE, databaseName);

			this.activate(properties);
	}


	def ExperimentExecutionStorageService activate(Map<String, Object> properties) {

		dbCollection = MongoClientProviderFactory.get.getMongoClient.getDB(
			properties.get(MongoClientProvider.PROP_DATABASE) as String).getCollection("experimentExecution")
		executionsCollection = JacksonDBCollection.wrap(dbCollection, ExperimentExecution, String)
		this
	}

	override create(ExperimentExecutionDTO experimentExecution) {

		var persisted = ExperimentExecution.getBuilder().jobId(experimentExecution.jobId).taskId(
			experimentExecution.taskId).taskName(experimentExecution.taskName).factor(experimentExecution.factor).
			treatment(experimentExecution.treatment).object(experimentExecution.object).cpu(experimentExecution.cpu).
			memory(experimentExecution.memory).time(experimentExecution.time).creationDate(new Date()).
			lastUpdateDate(new Date()).executionStatus(experimentExecution.executionStatus.convertToEntity).build();

		executionsCollection.save(persisted).savedObject.convertToDTO
	}

	override findAll() {
		val results = new ArrayList<ExperimentExecutionDTO>()
		executionsCollection.find.forEach[results.add(it.convertToDTO)]
		results

	}

	override findById(String objectId) {

		executionsCollection.findOneById(objectId).convertToDTO
	}

	override update(ExperimentExecutionDTO experimentExecution) {
		val updated = executionsCollection.findOneById(experimentExecution.id)

		updated.update(experimentExecution.jobId, experimentExecution.taskId, experimentExecution.taskName,
			experimentExecution.factor, experimentExecution.treatment, experimentExecution.object,
			experimentExecution.cpu, experimentExecution.memory, experimentExecution.time, new Date(),
			experimentExecution.executionStatus.convertToEntity)

		executionsCollection.updateById(experimentExecution.id, updated)
		updated.convertToDTO

	}

	override findByJobId(String jobId) {
		val results = new ArrayList<ExperimentExecutionDTO>()
		executionsCollection.find(DBQuery.is("jobId", jobId)).forEach[results.add(it.convertToDTO)]
		results
	}

	def List<ExperimentExecutionDTO> convertToDTO(List<ExperimentExecution> model) {
		model.map[convertToDTO]
	}

	def ExecutionStatusDTO convert(ExecutionStatus model) {
		switch (model) {
			case NOT_RECEIVED: ExecutionStatusDTO.NOT_RECEIVED
			case PENDING: ExecutionStatusDTO.PENDING
			case RUNNING: ExecutionStatusDTO.RUNNING
			case FINISHED: ExecutionStatusDTO.FINISHED
			case FAILED: ExecutionStatusDTO.FAILED
		}

	}

	def convertToEntity(ExecutionStatusDTO dto) {
		switch (dto) {
			case NOT_RECEIVED: ExecutionStatus.NOT_RECEIVED
			case PENDING: ExecutionStatus.PENDING
			case RUNNING: ExecutionStatus.RUNNING
			case FINISHED: ExecutionStatus.FINISHED
			case FAILED: ExecutionStatus.FAILED
		}
	}

	override create(List<ExperimentExecutionDTO> experimentExecution) {
		experimentExecution.map[create]
	}

	def ExperimentExecutionDTO convertToDTO(ExperimentExecution model) {
		if (model === null)
			null
		else {
			ExperimentExecutionDTO.builder.id(model._id).jobId(model.jobId).taskId(model.taskId).taskName(
				model.taskName).factor(model.factor).treatment(model.treatment).object(model.object).cpu(model.cpu).
				memory(model.memory).time(model.time).creationDate(model.creationDate).lastUpdateDate(
					model.lastUpdateDate).executionStatus(model.executionStatus.convert).build()
 
		}
	}

}
