package br.unb.autoexp.generator.mapping.dto

import br.unb.autoexp.autoExp.DesignType
import org.eclipse.xtend.lib.annotations.Accessors

@Accessors
class MappingDTO {
	String experimentName
	String taskName
	String executionName
	String factor
	String treatment
	String object
	DesignType designType
	int runs

	new() {
	}

	private new(Builder builder) {
		this.experimentName = builder.experimentName
		this.taskName = builder.taskName
		this.executionName = builder.executionName
		this.factor = builder.factor
		this.treatment = builder.treatment
		this.object = builder.object
		this.designType = builder.designType
		this.runs = builder.runs

	}

	def update(String experimentName, String taskName, String executionName, String factor, String treatment, String object,
		DesignType designType, int runs) {
		this.experimentName = experimentName
		this.taskName = taskName
		this.executionName = executionName
		this.factor = factor
		this.treatment = treatment
		this.object = object
		this.designType = designType
		this.runs = runs

	}

	def static Builder getBuilder() {
		new Builder()
	}

	static class Builder {
		String experimentName
		String taskName
		String executionName
		String factor
		String treatment
		String object
		DesignType designType
		int runs

		private new() {
		}

		def Builder experimentName(String experimentName) {
			this.experimentName = experimentName
			this
		}

		def Builder taskName(String taskName) {
			this.taskName = taskName
			this
		}

		def Builder executionName(String executionName) {
			this.executionName = executionName
			this
		}

		def Builder factor(String factor) {
			this.factor = factor
			this
		}

		def Builder designType(DesignType designType) {
			this.designType = designType
			this
		}

		def Builder runs(int runs) {
			this.runs = runs
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

		def MappingDTO build() {
			new MappingDTO(this);

		}
	}
}
