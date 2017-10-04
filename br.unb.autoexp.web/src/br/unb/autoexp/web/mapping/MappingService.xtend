package br.unb.autoexp.web.mapping

import br.unb.autoexp.web.mapping.dto.MappingDTO
import java.util.List

interface MappingService {
	static String FILE_PATH="filePath"
	def List<MappingDTO> findAll()
	def MappingDTO findByTaskName(String taskName)	
}