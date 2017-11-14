package br.unb.autoexp.web.data

import br.unb.autoexp.storage.entity.dto.ExperimentExecutionDTO
import java.io.File
import java.util.List

interface DataFileGeneratorService {
	def void writeToFile(File file,List<ExperimentExecutionDTO> tasks)
	
	
	
	def String getJobIdFromFile(File file)
	
}