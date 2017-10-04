package br.unb.autoexp.rBaseApi.controller

import br.unb.autoexp.rBaseApi.dto.ResultDTO
import br.unb.autoexp.rBaseApi.service.RCommandService
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/r-base/command")
class RCommandController {

	static val LOGGER = LoggerFactory.getLogger(typeof(RCommandController))

	@Autowired
	private RCommandService rCommandService
	

	@RequestMapping(value="/pdf",method=RequestMethod.POST)
	@ResponseStatus(HttpStatus.ACCEPTED)
	@ResponseBody 
	def ResultDTO generatePdfFile(@RequestBody String file)	{

		rCommandService.generatePdfFile(file)
	}


	
}
