package br.unb.autoexp.storage.entity

import java.util.Date
import org.eclipse.xtend.lib.annotations.Accessors
import org.springframework.data.annotation.Id

@Accessors
class ExperimentDesign {
	@Id
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
		this.creationDate = builder.creationDate
		this.lastUpdateDate=builder.lastUpdateDate
	}

	def update(String jobId, String name, String design, String fileName,int runs, Date lastUpdateDate) {
		this.jobId = jobId
		this.name = name
		this.design = design
		this.fileName=fileName
		this.runs = runs
		this.lastUpdateDate = lastUpdateDate

	}

	def static Builder getBuilder() {
		new Builder()
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
		def fileName(String fileName){
			this.fileName=fileName
			this
		}
		def Builder design(String design) {
			this.design = design
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
		
		def ExperimentDesign build() {
			new ExperimentDesign(this);

		}
	}

}
