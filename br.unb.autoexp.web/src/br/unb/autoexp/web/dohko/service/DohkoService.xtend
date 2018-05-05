package br.unb.autoexp.web.dohko.service

import br.unb.autoexp.storage.entity.dto.ExperimentExecutionDTO
import br.unb.autoexp.web.dohko.domain.TaskMessage
import java.io.File
import java.io.IOException
import java.util.List
import javax.ws.rs.core.Response
import org.excalibur.core.execution.domain.ApplicationDescriptor
import org.excalibur.core.execution.domain.JobStatus

interface DohkoService {
	def List<ExperimentExecutionDTO> updateTaskStatus(List<ExperimentExecutionDTO> tasks,File specificationFile)
	def ExperimentExecutionDTO updateTaskStatus(ExperimentExecutionDTO task, File specificationFile)
	def Response runDohko(ApplicationDescriptor applicationDescriptor) throws IOException 
	def ApplicationDescriptor getApplicationDescriptor(File file)
	def ApplicationDescriptor getApplicationDescriptor(String jobId,String username)
	def JobStatus getJobStatus(String jobId)
	def String getDohkoAddress()
	def ExperimentExecutionDTO updateTaskStatus(TaskMessage taskMessage)
	
} 