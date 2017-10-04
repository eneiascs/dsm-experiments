package br.unb.autoexp.web.storage.component.entity

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty
import java.util.Date
import org.eclipse.xtend.lib.annotations.Accessors
import org.mongojack.ObjectId

@JsonIgnoreProperties(value = "_class" ,ignoreUnknown=true)
@Accessors
class ExperimentDesign {
	
	
	 @ObjectId
	String _id
	@JsonProperty
	String name
	@JsonProperty
	String jobId
	@JsonProperty
	String design
	@JsonProperty
	String fileName
	@JsonProperty
	int runs
	@JsonProperty
	Date creationDate
	@JsonProperty
	Date lastUpdateDate
	new() { 
	}

	private new(Builder builder) {
		this._id = builder.id
		this.name=builder.name
		this.jobId = builder.jobId
		this.design = builder.design
		this.fileName=builder.fileName
		this.runs = builder.runs
		this.creationDate = builder.creationDate
		this.lastUpdateDate=builder.lastUpdateDate
	}
	def update(String jobId,String name,String design,String fileName,int runs,Date lastUpdateDate){
		this.jobId=jobId
		this.name=name
		this.design=design
		this.runs=runs
		this.lastUpdateDate = lastUpdateDate
		
	}
	def static Builder getBuilder() {
		new Builder()
	}

	override toString() {
		this.jobId
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
		def Builder name(String name){
			this.name=name
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
			this.runs=runs
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
