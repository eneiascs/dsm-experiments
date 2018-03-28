package br.unb.autoexp.web.data

import br.unb.autoexp.storage.entity.dto.ExperimentExecutionDTO
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.databind.node.ObjectNode
import java.io.File
import java.io.IOException
import java.nio.charset.Charset
import java.nio.charset.StandardCharsets
import java.nio.file.Files
import java.nio.file.Paths
import java.util.List
import org.apache.commons.io.FileUtils

class DataFileGeneratorServiceImpl implements DataFileGeneratorService {

	override writeToFile(File file, List<ExperimentExecutionDTO> tasks) {
		val text = '''
			[
				«FOR task : tasks SEPARATOR ","»
				{
				"id":"«task.id»",
				"jobId":"«task.jobId»",
				"taskId":"«task.taskId»",
				"taskName":"«task.taskName»",
				"factor":"«task.factor»",
				"treatment":"«task.treatment»",
				"object":"«task.object»",
				«FOR key:task.dependentVariables.keySet»
					"«key»":«task.dependentVariables.get(key)»,
				«ENDFOR»
				"executionStatus":"«task.executionStatus.name»",
				"creationDate":«task.creationDate?.time»,
				"lastUpdateDate":«task.lastUpdateDate?.time»
				}
				«ENDFOR»
			]
		'''
		FileUtils.writeStringToFile(file, text, StandardCharsets.UTF_8)
	}

	override getJobIdFromFile(File file) {
		val mapper = new ObjectMapper()
		val nodes = mapper.readValue(readFile(file.absolutePath, StandardCharsets.UTF_8),
			mapper.getTypeFactory().constructCollectionType(List, ObjectNode)) as List<ObjectNode>
		var String jobId = null
		if (!nodes.isNullOrEmpty) {

			if (nodes.head.has("jobId")) {
				jobId=nodes.head.get("jobId").asText
			}
		}

		return jobId

	}

	def String readFile(String path, Charset encoding) throws IOException {
		new String(Files.readAllBytes(Paths.get(path)), encoding)
	}

}
