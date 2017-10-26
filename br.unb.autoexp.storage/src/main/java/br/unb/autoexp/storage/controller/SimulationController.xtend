package br.unb.autoexp.storage.controller

import br.unb.autoexp.storage.entity.dto.ExecutionStatusDTO
import br.unb.autoexp.storage.entity.dto.ExperimentExecutionDTO
import br.unb.autoexp.storage.service.ExperimentExecutionStorageService
import java.util.List
import java.util.concurrent.ThreadLocalRandom
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/simulation")
class SimulationController {

	static val LOGGER = LoggerFactory.getLogger(typeof(SimulationController))

	@Autowired
	private ExperimentExecutionStorageService storageService

	@RequestMapping(method=RequestMethod.GET)
	@ResponseBody
	def List<ExperimentExecutionDTO> findAll() {
		storageService.findAll().filter[!executionStatus.name.equals(ExecutionStatusDTO.FINISHED.name)].forEach [
//			it.setCpu(ThreadLocalRandom.current().nextLong(1L, 1000L))
//			it.setTime(ThreadLocalRandom.current().nextLong(1L, 1000L))
//			it.setMemory(ThreadLocalRandom.current().nextLong(1L, 1000L))
//			it.setExecutionStatus(ExecutionStatusDTO.FINISHED)
//			storageService.update(it)
		]
		storageService.findAll()
	}

}
