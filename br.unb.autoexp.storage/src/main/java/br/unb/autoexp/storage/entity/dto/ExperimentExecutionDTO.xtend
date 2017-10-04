package br.unb.autoexp.storage.entity.dto

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import java.util.Date
import org.eclipse.xtend.lib.annotations.Accessors

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
	Long cpu
	Long memory
	Long time
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
		this.cpu = builder.cpu
		this.memory = builder.memory
		this.time = builder.time
		this.executionStatus = builder.executionStatus
		this.creationDate=builder.creationDate
		this.lastUpdateDate=builder.lastUpdateDate
		
		
	}

	def static Builder getBuilder() {
		new Builder()
	}

	override toString() {
		"{\"id\":\"%s\",\"jobId\":\"%s\",\"taskId\":\"%s\",\"taskName\":\"%s\",\"factor\":\"%s\",\"treatment\":\"%s\",\"object\":\"%s\",\"cpu\":\"%s\",\"memory\":\"%s\",\"time\":\"%s\",\"executionStatus\":\"%s\",\"creationDate\":\"%s\",\"lastUpdateDate\":\"%s\"}"
		.format(id,jobId,taskId,taskName,factor,treatment,object,cpu,memory,time,executionStatus,creationDate,lastUpdateDate)
	}

	static class Builder {
		String id
		String jobId
		String taskId
		String taskName
		String factor
		String treatment
		String object
		Long cpu
		Long memory
		Long time
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

		def Builder cpu(Long cpu) {
			this.cpu = cpu
			this
		}

		def Builder memory(Long memory) {
			this.memory = memory
			this
		}

		def Builder time(Long time) {
			this.time = time
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

}
