package br.unb.autoexp.web.dohko.service

import br.unb.autoexp.storage.entity.dto.ExperimentExecutionDTO
import java.io.File
import java.io.IOException
import java.util.List
import javax.ws.rs.core.Response
import org.excalibur.core.execution.domain.ApplicationDescriptor

interface DohkoService {
	def List<ExperimentExecutionDTO> updateTaskStatus(List<ExperimentExecutionDTO> tasks)
	def Response runDohko(ApplicationDescriptor applicationDescriptor) throws IOException 
	def ApplicationDescriptor getApplicationDescriptor(File file)
} 