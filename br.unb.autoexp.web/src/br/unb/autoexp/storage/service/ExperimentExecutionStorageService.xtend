package br.unb.autoexp.storage.service

import br.unb.autoexp.storage.entity.dto.ExperimentExecutionDTO
import java.util.List

interface ExperimentExecutionStorageService {

	/**
	 * Creates a new experimentExecution entry.
	 * @param experimentExecution  The information of the created experimentExecution entry.
	 * @return      The information of the created experimentExecution entry.
	 */
	def ExperimentExecutionDTO create(ExperimentExecutionDTO experimentExecution)

	/**
	 * Creates a list of new experimentExecution entries.
	 * @param experimentExecution  The information of the created experimentExecution entry.
	 * @return      The information of the created experimentExecution entry.
	 */
	def List<ExperimentExecutionDTO> create(List<ExperimentExecutionDTO> experimentExecution)

	/**
	 * Finds all experimentExecution entries.
	 * @return      The information of all experimentExecution entries.
	 */
	def List<ExperimentExecutionDTO> findAll()

	/**
	 * Finds a single experimentExecution entry.
	 * @param id    The id of the requested experimentExecution entry.
	 * @return      The information of the requested experimentExecution entry.
	 * @throws br.unb.autoexp.storage.exception.ExperimentExecutionNotFoundException if no experimentExecution entry is found.
	 */
	def ExperimentExecutionDTO findById(String id)

	
	/**
	 * Updates the information of a experimentExecution entry.
	 * @param experimentExecution  The information of the updated experimentExecution entry.
	 * @return      The information of the updated experimentExecution entry.
	 * @throws br.unb.autoexp.storage.exception.ExperimentExecutionNotFoundException if no experimentExecution entry is found.
	 */
	def ExperimentExecutionDTO update(ExperimentExecutionDTO experimentExecution)

/**
	 * Finds a single experimentExecution entry.
	 * @param id    The id of the requested experimentExecution entry.
	 * @return      The information of the requested experimentExecution entry.
	 * @throws br.unb.autoexp.storage.exception.ExperimentExecutionNotFoundException if no experimentExecution entry is found.
	 */
	def List<ExperimentExecutionDTO> findByJobId(String jobId)
	
	def List<ExperimentExecutionDTO> findByTaskId(String taskId)
}
