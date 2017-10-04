package br.unb.autoexp.storage.service.impl

import br.unb.autoexp.storage.entity.ExecutionStatus
import br.unb.autoexp.storage.entity.ExperimentExecution
import br.unb.autoexp.storage.entity.dto.ExecutionStatusDTO
import br.unb.autoexp.storage.entity.dto.ExperimentExecutionDTO
import br.unb.autoexp.storage.repository.ExperimentExecutionRepository
import br.unb.autoexp.storage.service.ExperimentExecutionStorageService
import java.util.Date
import java.util.List
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class ExperimentExecutionStorageServiceImpl implements ExperimentExecutionStorageService {
	static val Logger LOGGER = LoggerFactory.getLogger(typeof(ExperimentExecutionStorageServiceImpl))

	@Autowired
	ExperimentExecutionRepository repository;

	override create(ExperimentExecutionDTO experimentExecution) {
		LOGGER.info("Creating a new todo entry with information: {}", experimentExecution);

		var persisted = ExperimentExecution.getBuilder().jobId(experimentExecution.jobId).taskId(
			experimentExecution.taskId).taskName(experimentExecution.taskName).factor(experimentExecution.factor).
			treatment(experimentExecution.treatment).object(experimentExecution.object).cpu(experimentExecution.cpu).memory(experimentExecution.memory).time(
				experimentExecution.time).creationDate(new Date()).lastUpdateDate(new Date()).executionStatus(
				experimentExecution.executionStatus.convertToEntity).build();

		persisted = repository.save(persisted);
		LOGGER.info("Created a new experimentExecution entry with information: {}", persisted);

		convertToDTO(persisted)
	}

	override findAll() {
		LOGGER.info("Finding all entries.");

		repository.findAll().convertToDTO

	}

	override findById(String id) {
		repository.findOne(id).convertToDTO
	}

	override update(ExperimentExecutionDTO experimentExecution) {
		 LOGGER.info("Updating experimentExecution entry with information: {}", experimentExecution);

        var updated = repository.findOne(experimentExecution.id);
        
        updated.update(experimentExecution.jobId,experimentExecution.taskId,experimentExecution.taskName,experimentExecution.factor, experimentExecution.treatment,experimentExecution.object,experimentExecution.cpu,experimentExecution.memory,experimentExecution.time, new Date(),experimentExecution.executionStatus.convertToEntity)
               
        		
        updated = repository.save(updated);

        LOGGER.info("Updated experimentExecution entry with information: {}", updated);

        return convertToDTO(updated);
		
	}

	def List<ExperimentExecutionDTO> convertToDTO(List<ExperimentExecution> model) {
		model.map[convertToDTO]
	}

	def ExecutionStatusDTO convert(ExecutionStatus model) {
		switch (model) {
			case RECEIVED: ExecutionStatusDTO.RECEIVED
			case STARTED: ExecutionStatusDTO.STARTED
			case FINISHED: ExecutionStatusDTO.FINISHED
			case ERROR: ExecutionStatusDTO.ERROR
		}

	}

	def convertToEntity(ExecutionStatusDTO dto) {
		switch (dto) {
			case RECEIVED: ExecutionStatus.RECEIVED
			case STARTED: ExecutionStatus.STARTED
			case FINISHED: ExecutionStatus.FINISHED
			case ERROR: ExecutionStatus.ERROR
		}
	}

	override create(List<ExperimentExecutionDTO> experimentExecution) {
		experimentExecution.map[create]
	}

	override findByJobId(String jobId) {
		repository.findByJobId(jobId).convertToDTO
	}

	def ExperimentExecutionDTO convertToDTO(ExperimentExecution model) {
		ExperimentExecutionDTO.builder.id(model.id).jobId(model.jobId).taskId(model.taskId).taskName(model.taskName).
			factor(model.factor).treatment(model.treatment).object(model.object).cpu(model.cpu).
			memory(model.memory).time(model.time).creationDate(model.creationDate).lastUpdateDate(model.lastUpdateDate).executionStatus(model.executionStatus.convert).
			build()
	}

		}
		