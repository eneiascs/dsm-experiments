package br.unb.autoexp.storage.controller

import br.unb.autoexp.storage.entity.dto.ExperimentExecutionDTO
import br.unb.autoexp.storage.exception.ExperimentExecutionNotFoundException
import br.unb.autoexp.storage.service.ExperimentExecutionStorageService
import java.util.List
import javax.validation.Valid
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/execution")
class ExperimentExecutionController {

	static val LOGGER = LoggerFactory.getLogger(typeof(ExperimentExecutionController))

	@Autowired
	private ExperimentExecutionStorageService storageService

	@RequestMapping(method=RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	@ResponseBody
	def ExperimentExecutionDTO create(@RequestBody @Valid ExperimentExecutionDTO dto) {

		storageService.create(dto)
	}

	@RequestMapping(value="/list", method=RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	@ResponseBody
	def List<ExperimentExecutionDTO> createList(@RequestBody @Valid List<ExperimentExecutionDTO> dto) {

		storageService.create(dto)
	}

	@RequestMapping(method=RequestMethod.GET)
	@ResponseBody
	def List<ExperimentExecutionDTO> findAll() {
		storageService.findAll()
	}

	@RequestMapping(method=RequestMethod.GET, value="/jobId/{jobId}")
	@ResponseBody
	def List<ExperimentExecutionDTO> findByJobId(@PathVariable String jobId) {
		storageService.findByJobId(jobId)
	}

	@RequestMapping(value="/id/{id}", method=RequestMethod.GET)
	@ResponseBody
	def ExperimentExecutionDTO findById(@PathVariable String id) {
		storageService.findById(id)
	}

	@RequestMapping(value="{id}", method=RequestMethod.PUT)
	@ResponseBody
	def update(@RequestBody @Valid ExperimentExecutionDTO dto) {

		return storageService.update(dto)
	}

	@ExceptionHandler
	@ResponseStatus(HttpStatus.NOT_FOUND)
	def void handleExperimentExecutionNotFound(ExperimentExecutionNotFoundException ex) {
		LOGGER.error("Handling error with message: {}", ex.getMessage());
	}

}
