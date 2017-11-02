package br.unb.autoexp.storage.service

import br.unb.autoexp.storage.entity.dto.ExperimentDesignDTO
import java.util.List

interface ExperimentDesignStorageService {

	/**
	 * Creates a new experimentDesign entry.
	 * @param experimentDesign  The information of the created experimentDesign entry.
	 * @return      The information of the created experimentDesign entry.
	 */
	def ExperimentDesignDTO create(ExperimentDesignDTO experimentDesign)


	/** 
	 * Finds all experimentDesign entries.
	 * @return      The information of all experimentDesign entries.
	 */
	def List<ExperimentDesignDTO> findAll()

	/**
	 * Finds a single experimentDesign entry.
	 * @param id    The id of the requested experimentDesign entry.
	 * @return      The information of the requested experimentDesign entry.
	 * @throws br.unb.autoexp.storage.exception.experimentDesignNotFoundException if no experimentDesign entry is found.
	 */
	def ExperimentDesignDTO findById(String id)

	/**
	 * Finds all experimentDesign entries by name.
	 * @param name    The name of the requested experimentDesign entries.
	 * @return      The information of the requested experimentDesign entry.
	 * @throws br.unb.autoexp.storage.exception.experimentDesignNotFoundException if no experimentDesign entry is found.
	 */
	def List<ExperimentDesignDTO> findByName(String name)
	
	/**
	 * Updates the information of a experimentDesign entry.
	 * @param experimentDesign  The information of the updated experimentDesign entry.
	 * @return      The information of the updated experimentDesign entry.
	 * @throws br.unb.autoexp.storage.exception.experimentDesignNotFoundException if no experimentDesign entry is found.
	 */
	def ExperimentDesignDTO update(ExperimentDesignDTO experimentDesign)

/**
	 * Finds a single experimentDesign entry.
	 * @param id    The id of the requested experimentDesign entry.
	 * @return      The information of the requested experimentDesign entry.
	 * @throws br.unb.autoexp.storage.exception.experimentDesignNotFoundException if no experimentDesign entry is found.
	 */
	def ExperimentDesignDTO findByJobId(String id)


}
