package br.unb.autoexp.storage.controller

import br.unb.autoexp.storage.entity.dto.ExperimentDesignDTO
import br.unb.autoexp.storage.exception.ExperimentDesignNotFoundException
import br.unb.autoexp.storage.service.ExperimentDesignStorageService
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
@RequestMapping("/api/experiment")
class ExperimentDesignController {

	static val LOGGER = LoggerFactory.getLogger(typeof(ExperimentDesignController))

	@Autowired
	private ExperimentDesignStorageService storageService

	@RequestMapping(method=RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	@ResponseBody 
	def ExperimentDesignDTO create(@RequestBody @Valid ExperimentDesignDTO dto) {

		storageService.create(dto)
	}

	@RequestMapping(method=RequestMethod.GET )
	@ResponseBody 
	def List<ExperimentDesignDTO> findAll() { 
		storageService.findAll()
	} 
	@RequestMapping(value="/jobId/{jobId}",method=RequestMethod.GET)
	@ResponseBody 
	def  ExperimentDesignDTO findByJobId(@PathVariable String jobId) { 
		storageService.findByJobId(jobId)
	} 
	
	@RequestMapping(value="/id/{id}",method=RequestMethod.GET)
	@ResponseBody 
	def  ExperimentDesignDTO findById(@PathVariable String id) { 
		storageService.findById(id)
	} 
	@RequestMapping(value="/name/{name}",method=RequestMethod.GET)
	@ResponseBody 
	def  List<ExperimentDesignDTO> findByName(@PathVariable String name) { 
		storageService.findByName(name)
	} 
	@RequestMapping(value = "{id}", method = RequestMethod.PUT)
	@ResponseBody
    def update(@RequestBody @Valid ExperimentDesignDTO dto) {
       
        return storageService.update(dto)
    }
    @RequestMapping(value="/jobId/{jobId}", method=RequestMethod.PUT)
	@ResponseBody
	def update(@RequestBody @Valid String jobId) {

		return storageService.update(jobId)
	}
	
	@ExceptionHandler
	@ResponseStatus(HttpStatus.NOT_FOUND)
	def void handleExperimentExecutionNotFound(ExperimentDesignNotFoundException ex) {
		LOGGER.error("Handling error with message: {}", ex.getMessage());
	}

}
