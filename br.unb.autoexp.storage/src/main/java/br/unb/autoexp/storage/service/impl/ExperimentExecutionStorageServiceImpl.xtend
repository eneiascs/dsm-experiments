package br.unb.autoexp.storage.service.impl

import br.unb.autoexp.storage.entity.ExecutionStatus
import br.unb.autoexp.storage.entity.ExperimentExecution
import br.unb.autoexp.storage.entity.dto.ExecutionStatusDTO
import br.unb.autoexp.storage.entity.dto.ExperimentExecutionDTO
import br.unb.autoexp.storage.repository.ExperimentExecutionRepository
import br.unb.autoexp.storage.service.ExperimentDesignStorageService
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
			treatment(experimentExecution.treatment).object(experimentExecution.object).dependentvariables(experimentExecution.dependentVariables).creationDate(new Date()).lastUpdateDate(new Date()).executionStatus(
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
        
        updated.update(experimentExecution.jobId,experimentExecution.taskId,experimentExecution.taskName,experimentExecution.factor, experimentExecution.treatment,experimentExecution.object,experimentExecution.dependentVariables, new Date(),experimentExecution.executionStatus.convertToEntity)
               
        		
        updated = repository.save(updated);

        LOGGER.info("Updated experimentExecution entry with information: {}", updated.toString);
			
        return convertToDTO(updated);
		
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
			case CANCELLED: ExecutionStatusDTO.CANCELLED
		}

	}

	def convertToEntity(ExecutionStatusDTO dto) {
		switch (dto) {
			case NOT_RECEIVED: ExecutionStatus.NOT_RECEIVED
			case PENDING: ExecutionStatus.PENDING
			case RUNNING: ExecutionStatus.RUNNING
			case FINISHED: ExecutionStatus.FINISHED
			case FAILED: ExecutionStatus.FAILED
			case CANCELLED: ExecutionStatus.CANCELLED
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
			factor(model.factor).treatment(model.treatment).object(model.object).dependentVariables(model.dependentVariables).creationDate(model.creationDate).lastUpdateDate(model.lastUpdateDate).executionStatus(model.executionStatus.convert).
			build()
	}

		}
		