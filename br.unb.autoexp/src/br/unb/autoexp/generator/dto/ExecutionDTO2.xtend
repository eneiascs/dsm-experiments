package br.unb.autoexp.generator.dto

import br.unb.autoexp.autoExp.DesignType
import br.unb.autoexp.autoExp.ExperimentalObject
import br.unb.autoexp.autoExp.Preconditions
import br.unb.autoexp.autoExp.Treatment
import java.math.BigDecimal
import java.util.ArrayList
import java.util.HashMap
import java.util.List
import java.util.Map
import org.eclipse.xtend.lib.annotations.Accessors

@Accessors
class ExecutionDTO2 {
	String name
	String taskName
	String cmd
	BigDecimal timeout
	Preconditions preconditions
	List<FileDTO> files=new ArrayList<FileDTO>()
	Treatment treatment
	ExperimentalObject object
	DesignType designType
	Map<String,String> invalidParameters=new HashMap<String,String>()

	override boolean equals(Object obj){
		if (obj===null||!(obj instanceof ExecutionDTO2)){
			false
		}else{
			val exec=obj as ExecutionDTO2
			this.name.equals(exec.name)
			&&this.taskName.equals(exec.taskName)
			&&this.cmd.equals(exec.cmd)
			&&((this.timeout===null&&exec.timeout===null)||(this.timeout.equals(exec.timeout)))	
			&&((this.preconditions===null&&exec.preconditions===null)||(this.preconditions.equals(exec.preconditions)))			
			&&this.files.equals(exec.files)
		}
		
	}
	def ExecutionDTO2 copy() {
		var copy=new ExecutionDTO2()
		copy.name = this.name
		copy.taskName = this.taskName
		copy.cmd = this.cmd
		copy.timeout=this.timeout
		copy.preconditions = this.preconditions
		copy.treatment = this.treatment
		copy.object = this.object
		copy.designType=this.designType
		copy.files = this.files?.map[copy()]
		copy

	}
	def ExecutionDTO2 copy(String taskName) {
		var copy=new ExecutionDTO2()
		copy.name = this.name
		copy.taskName = taskName
		copy.cmd = this.cmd
		copy.timeout=this.timeout
		copy.preconditions = this.preconditions
		copy.treatment = this.treatment
		copy.object = this.object
		copy.designType=this.designType
		copy.files = this.files?.map[copy()]
		copy

	}

	

}

@Accessors
class FileDTO {
	String name
	String source
	String dest
	String checksum
	boolean generated
	override boolean equals(Object obj){
		if (obj===null||!(obj instanceof FileDTO)){
			false
		}else{
			val file=obj as FileDTO
			this.name.equals(file.name)
			&&this.source.equals(file.source)
			&&this.generated.equals(file.generated)
		}
		
	}
	def create file: new FileDTO copy() {
		file.name = this.name
		file.source = this.source
		file.dest=this.dest
		file.checksum=this.checksum
		file.generated = this.generated
	}
	


	
}
