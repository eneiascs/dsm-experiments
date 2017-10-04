package br.unb.autoexp.web.mapping.component

import br.unb.autoexp.web.mapping.MappingService
import br.unb.autoexp.web.mapping.dto.MappingDTO
import com.fasterxml.jackson.databind.ObjectMapper
import java.io.File
import java.util.Arrays
import java.util.Map

class MappingComponent implements MappingService {

	String filePath

	def MappingComponent activate(Map<String, Object> properties) {

		filePath = properties.get(MappingService.FILE_PATH) as String
		this
	}

	override findAll() {
		val mapper = new ObjectMapper()
		
		val obj = mapper.readerFor(typeof (MappingDTO[])).readValue(new File(filePath))
		Arrays.asList(obj)
	
	}

	override findByTaskName(String taskName) {
		findAll.filter[it.taskName.equals(taskName)].head
	}

}
