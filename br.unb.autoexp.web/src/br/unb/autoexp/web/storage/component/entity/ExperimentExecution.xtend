package br.unb.autoexp.web.storage.component.entity

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty
import java.util.Date
import org.eclipse.xtend.lib.annotations.Accessors
import org.mongojack.ObjectId

@JsonIgnoreProperties(value="_class", ignoreUnknown=true)
@Accessors
class ExperimentExecution {
	@ObjectId
	String _id
	@JsonProperty
	String jobId
	@JsonProperty
	String taskId
	@JsonProperty
	String taskName
	@JsonProperty
	String factor
	@JsonProperty
	String treatment
	@JsonProperty
	String object
	@JsonProperty
	Double cpu
	@JsonProperty
	Double memory
	@JsonProperty
	Double time
	@JsonProperty
	Date creationDate
	@JsonProperty
	Date lastUpdateDate
	@JsonProperty
	ExecutionStatus executionStatus

	new() {
	}

	private new(Builder builder) {
		this._id = builder.id
		this.jobId = builder.jobId
		this.taskId = builder.taskId
		this.taskName = builder.taskName
		this.factor = builder.factor
		this.treatment = builder.treatment
		this.object = builder.object
		this.cpu = builder.cpu
		this.memory = builder.memory
		this.time = builder.time
		this.creationDate = builder.creationDate
		this.lastUpdateDate = builder.lastUpdateDate
		this.executionStatus = builder.executionStatus
	}

	def static Builder getBuilder() {
		new Builder()
	}

	def update(String jobId, String taskId, String taskName, String factor, String treatment, String object, Double cpu,
		Double memory, Double time, Date lastUpdateDate, ExecutionStatus executionStatus) {

		this.jobId = jobId
		this.taskId = taskId
		this.taskName = taskName
		this.factor = factor
		this.treatment = treatment
		this.object = object
		this.cpu = cpu
		this.memory = memory
		this.time = time
		this.lastUpdateDate = lastUpdateDate
		this.executionStatus = executionStatus
	}

	override toString() {
		this.jobId
	}

	static class Builder {
		String id
		String jobId
		String taskId
		String taskName
		String factor
		String treatment
		String object
		Double cpu
		Double memory
		Double time
		Date creationDate
		Date lastUpdateDate
		ExecutionStatus executionStatus

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

		def Builder cpu(Double cpu) {
			this.cpu = cpu
			this
		}

		def Builder memory(Double memory) {
			this.memory = memory
			this
		}

		def Builder time(Double time) {
			this.time = time
			this
		}

		def Builder executionStatus(ExecutionStatus executionStatus) {
			this.executionStatus = executionStatus
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

		def ExperimentExecution build() {
			new ExperimentExecution(this);

		}
	}

}
