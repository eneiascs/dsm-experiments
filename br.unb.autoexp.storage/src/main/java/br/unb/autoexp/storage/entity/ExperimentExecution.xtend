package br.unb.autoexp.storage.entity

import java.util.Date
import java.util.HashMap
import java.util.List
import org.eclipse.xtend.lib.annotations.Accessors
import org.springframework.data.annotation.Id

@Accessors
class ExperimentExecution {
	@Id
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
	ExecutionStatus executionStatus

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
		this.creationDate=builder.creationDate
		this.lastUpdateDate=builder.lastUpdateDate
		this.executionStatus = builder.executionStatus
	}

	def static Builder getBuilder() {
		new Builder()
	}

	def update(String jobId, String taskId, String taskName, String factor, String treatment, String object, HashMap<String,Double> depVariables, Date lastUpdateDate, ExecutionStatus executionStatus) {
		

		this.jobId = jobId
		this.taskId = taskId
		this.taskName = taskName
		this.factor = factor
		this.treatment = treatment
		this.object = object
		this.dependentVariables = depVariables 
		this.lastUpdateDate = lastUpdateDate
		this.executionStatus = executionStatus
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

		def Builder dependentvariables(HashMap<String,Double> dependentVariables) {
			this.dependentVariables = dependentVariables
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
