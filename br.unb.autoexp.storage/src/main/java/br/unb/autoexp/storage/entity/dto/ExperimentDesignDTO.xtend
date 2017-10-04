package br.unb.autoexp.storage.entity.dto

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import java.util.Date
import org.eclipse.xtend.lib.annotations.Accessors

@JsonIgnoreProperties(ignoreUnknown = true)
@Accessors
class ExperimentDesignDTO {
 
	String id
	String name
	String jobId
	String design
	String fileName
	int runs
	Date creationDate
	Date lastUpdateDate

	new() {
	}

	private new(Builder builder) {
		this.id = builder.id
		this.name = builder.name
		this.jobId = builder.jobId
		this.design = builder.design
		this.fileName=builder.fileName
		this.runs = builder.runs
		this.creationDate=builder.creationDate
		this.lastUpdateDate=builder.lastUpdateDate
	}

	def static Builder getBuilder() {
		new Builder()
	}

	override toString() {
		"{\"id\":\"%s\", \"name\":\"%s\",\"jobId\":\"%s\",\"design\":\"%s\", \"runs\":%s, \"creationDate\": \"%s\", \"lastUpdateDate\": \"%s\"}".format(id,
			name, jobId, design, runs, creationDate,lastUpdateDate)
	}

	static class Builder {
		String id
		String name
		String jobId
		String design
		String fileName
		int runs
		Date creationDate
		Date lastUpdateDate

		private new() {
		}

		def Builder id(String id) {
			this.id = id
			this
		}

		def Builder name(String name) {
			this.name = name
			this
		}

		def Builder jobId(String jobId) {
			this.jobId = jobId
			this
		}

		def Builder design(String design) {
			this.design = design
			this
		}
		def Builder fileName(String fileName){
			this.fileName=fileName
			this
		}
		def Builder runs(int runs) {
			this.runs = runs
			this
		}
		def Builder lastUpdateDate(Date lastUpdateDate) {
			this.lastUpdateDate = lastUpdateDate
			this
		}
		
		def Builder creationDate(Date creationDate) {
			this.creationDate = creationDate
			this
		}
		
		def ExperimentDesignDTO build() {
			new ExperimentDesignDTO(this);

		}
	}

}
