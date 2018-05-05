package br.unb.autoexp.storage.service.impl

import br.unb.autoexp.storage.entity.ExperimentDesign
import br.unb.autoexp.storage.entity.dto.ExecutionStatusDTO
import br.unb.autoexp.storage.entity.dto.ExperimentDesignDTO
import br.unb.autoexp.storage.repository.ExperimentDesignRepository
import br.unb.autoexp.storage.service.ExperimentDesignStorageService
import br.unb.autoexp.storage.service.ExperimentExecutionStorageService
import java.util.Date
import java.util.List
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class ExperimentDesignStorageServiceImpl implements ExperimentDesignStorageService {
	static val Logger LOGGER = LoggerFactory.getLogger(typeof(ExperimentDesignStorageServiceImpl))

	@Autowired
	ExperimentDesignRepository repository;

	@Autowired
	ExperimentExecutionStorageService executionService;

	override create(ExperimentDesignDTO experimentDesign) {
		LOGGER.info("Creating a new experimentDesign entry with information: {}", experimentDesign);

		var persisted = ExperimentDesign.getBuilder()
			.jobId(experimentDesign.jobId)
			.name(experimentDesign.name)
			.fileName(experimentDesign.fileName)
			.specification(experimentDesign.specification)
			.mapping(experimentDesign.mapping)
			.runs(experimentDesign.runs)
			.numberOfTasks(experimentDesign.numberOfTasks)
			.design(experimentDesign.design)
			.creationDate(new Date())
			.lastUpdateDate(new Date())
			.build();

		persisted = repository.save(persisted.updateDesignSummary);
		LOGGER.info("Created a new experimentDesign entry with information: {}", persisted);

		convertToDTO(persisted)
	}

	override findAll() {
		repository.findAll.convertToDTO
	}

	override findById(String id) {
		repository.findOne(id).convertToDTO
	}

	override update(ExperimentDesignDTO experimentDesign) {
		LOGGER.info("Updating experimentDesign entry with information: {}", experimentDesign);
		
		var updated = repository.findOne(experimentDesign.id).updateDesignSummary
 
		updated.update(
			experimentDesign.jobId,
			experimentDesign.name,
			experimentDesign.design,
			experimentDesign.fileName,
			experimentDesign.specification,
			experimentDesign.mapping,
			experimentDesign.runs,
			experimentDesign.numberOfTasks,
			experimentDesign.numberOfTasks-(updated.pending+updated.running+updated.finished+updated.failed+updated.cancelled),
			updated.pending,
			updated.running,
			updated.finished,
			updated.failed,
			updated.cancelled,
			new Date()
		)
		updated = repository.save(updated);

		LOGGER.info("Updated experimentDesign entry with information: {}", updated);

		convertToDTO(updated) 
	}
 
	def ExperimentDesign updateDesignSummary(ExperimentDesign experimentDesign) {
		val tasks = executionService.findByJobId(experimentDesign.jobId)
		if (!tasks.isNullOrEmpty) {
			experimentDesign.numberOfTasks = tasks.size
			experimentDesign.notReceived = tasks.filter[executionStatus.equals(ExecutionStatusDTO.NOT_RECEIVED)].toList.size
			experimentDesign.pending = tasks.filter[executionStatus.equals(ExecutionStatusDTO.PENDING)].toList.size
			experimentDesign.running = tasks.filter[executionStatus.equals(ExecutionStatusDTO.RUNNING)].toList.size
			experimentDesign.finished =tasks.filter[executionStatus.equals(ExecutionStatusDTO.FINISHED)].toList.size
			experimentDesign.failed = tasks.filter[executionStatus.equals(ExecutionStatusDTO.FAILED)].toList.size
			experimentDesign.cancelled = tasks.filter[executionStatus.equals(ExecutionStatusDTO.CANCELLED)].toList.size
		}
		experimentDesign
	}

	override findByJobId(String id) {
		LOGGER.info("Finding by jobId: {}", id);
		repository.findByJobId(id).convertToDTO
	}

	def List<ExperimentDesignDTO> convertToDTO(List<ExperimentDesign> model) {
		model.map[convertToDTO]
	}

	def ExperimentDesignDTO convertToDTO(ExperimentDesign model) {
		if (model===null){
			null
		}else{
		ExperimentDesignDTO.builder.id(model.id).jobId(model.jobId).name(model.name).fileName(model.fileName).specification(model.specification).mapping(model.mapping).design(
			model.design).runs(model.runs).numberOfTasks(model.numberOfTasks).notReceived(model.notReceived).pending(model.pending).running(model.running).finished(model.finished).failed(model.failed).cancelled(model.cancelled).creationDate(model.creationDate).lastUpdateDate(model.lastUpdateDate).build()
			
			}
	}

	override findByName(String name) {
		repository.findByName(name).convertToDTO
	}
	
	override update(String jobId) {
		findByJobId(jobId).update
	}

}
