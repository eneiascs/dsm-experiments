package br.unb.autoexp.storage.service.impl

import br.unb.autoexp.storage.entity.ExperimentDesign
import br.unb.autoexp.storage.entity.dto.ExperimentDesignDTO
import br.unb.autoexp.storage.repository.ExperimentDesignRepository
import br.unb.autoexp.storage.service.ExperimentDesignStorageService
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
	
	override create(ExperimentDesignDTO experimentDesign) {
		LOGGER.info("Creating a new experimentDesign entry with information: {}", experimentDesign);

		var persisted = ExperimentDesign.getBuilder().jobId(experimentDesign.jobId).name(experimentDesign.name).fileName(experimentDesign.fileName).runs(experimentDesign.runs).design(experimentDesign.design).creationDate(new Date()).lastUpdateDate(new Date()).build();

		persisted = repository.save(persisted);
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

        var updated = repository.findOne(experimentDesign.id);
        
        updated.update(
                experimentDesign.jobId,
                experimentDesign.name,
                experimentDesign.design,
                 experimentDesign.fileName,
                experimentDesign.runs,
                new Date()
        		)
        updated = repository.save(updated);

        LOGGER.info("Updated experimentDesign entry with information: {}", updated);

        return convertToDTO(updated);
	}
	
	override findByJobId(String id) {
		repository.findByJobId(id).convertToDTO
	}
	def List<ExperimentDesignDTO> convertToDTO(List<ExperimentDesign> model) {
		model.map[convertToDTO]
	}

	def ExperimentDesignDTO convertToDTO(ExperimentDesign model) {
		ExperimentDesignDTO.builder.id(model.id).jobId(model.jobId).name(model.name).fileName(model.fileName).design(model.design).runs(model.runs).creationDate(model.creationDate).lastUpdateDate(model.lastUpdateDate).
			build()
	}
	
	override findByName(String name) {
		repository.findByName(name).convertToDTO
	}

		
}
