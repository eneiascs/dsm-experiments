package br.unb.autoexp.storage.entity.dto

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import java.util.Date
import java.util.HashMap
import org.eclipse.xtend.lib.annotations.Accessors

import static extension java.lang.String.*

@JsonIgnoreProperties(ignoreUnknown = true)
@Accessors
class ExperimentExecutionDTO {

	String id
	String jobId
	String taskId
	String taskName
	String factor
	String treatment
	String object
	
	HashMap<String,Double> dependentVariables
	ExecutionStatusDTO executionStatus
	Date creationDate
	Date lastUpdateDate
	
	

	new() {
	}

	private new(Builder builder) {
		this.id = builder.id
		this.jobId = builder.jobId
		this.taskId = builder.taskId
		this.taskName = builder.taskName
		this.factor = builder.factor
		this.treatment = builder.treatment
		this.object = builder.object
		this.dependentVariables=builder.dependentVariables
		this.executionStatus = builder.executionStatus
		this.creationDate=builder.creationDate
		this.lastUpdateDate=builder.lastUpdateDate
		
		
	}
	def getDependentVariables(){
		if(dependentVariables===null){
			dependentVariables=new HashMap<String,Double>()
		}
		dependentVariables
	}
	def addDependentVariable(String name, Double value){
		this.getDependentVariables.put(name,value)
		
	}
	def static Builder getBuilder() {
		new Builder()
	}

	override toString() {
		"{\"id\":\"%s\",\"jobId\":\"%s\",\"taskId\":\"%s\",\"taskName\":\"%s\",\"factor\":\"%s\",\"treatment\":\"%s\",\"object\":\"%s\",\"executionStatus\":\"%s\",\"creationDate\":\"%s\",\"lastUpdateDate\":\"%s\"}"
		.format(id,jobId,taskId,taskName,factor,treatment,object,executionStatus,creationDate,lastUpdateDate)
	}

	static class Builder {
		String id
		String jobId
		String taskId
		String taskName
		String factor
		String treatment
		String object
		HashMap<String,Double> dependentVariables
		Date creationDate
		Date lastUpdateDate
		ExecutionStatusDTO executionStatus

		private new() {
		}

		def Builder id(String id) {
			this.id = id
			this
		}

		def Builder jobId(String jobId) {
			this.jobId = jobId
			this
		}

		def Builder taskId(String taskId) {
			this.taskId = taskId
			this
		}

		def Builder taskName(String taskName) {
			this.taskName = taskName
			this
		}

		def Builder factor(String factor) {
			this.factor = factor
			this
		}

		def Builder treatment(String treatment) {
			this.treatment = treatment
			this
		}

		def Builder object(String object) {
			this.object = object
			this
		}

		def Builder dependentVariables(HashMap<String,Double> dependentVariables){
			this.dependentVariables=dependentVariables
			this
		}
		def Builder creationDate(Date creationDate) {
			this.creationDate = creationDate
			this
		}
		def Builder lastUpdateDate(Date lastUpdateDate) {
			this.lastUpdateDate = lastUpdateDate
			this
		}
		def Builder executionStatus(ExecutionStatusDTO executionStatus) {
			this.executionStatus = executionStatus
			this
		}

		def ExperimentExecutionDTO build() {
			new ExperimentExecutionDTO(this);

		}
	}
	
	def isFinished() { 
		executionStatus.equals(ExecutionStatusDTO.FINISHED) || executionStatus.equals(ExecutionStatusDTO.FAILED) || executionStatus.equals(ExecutionStatusDTO.CANCELLED)
	}

}
