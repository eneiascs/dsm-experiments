package br.unb.autoexp.generator.dto

import br.unb.autoexp.autoExp.DesignType
import br.unb.autoexp.autoExp.ExperimentalObject
import br.unb.autoexp.autoExp.Preconditions
import br.unb.autoexp.autoExp.Treatment
import java.util.ArrayList
import java.util.HashMap
import java.util.List
import java.util.Map
import org.eclipse.xtend.lib.annotations.Accessors

@Accessors
class ExecutionDTO {
	String name
	String taskName
	String cmd
	Preconditions preconditions
	List<FileDTO> files=new ArrayList<FileDTO>()
	Treatment treatment
	ExperimentalObject object
	DesignType designType
	Map<String,String> invalidParameters=new HashMap<String,String>()

	override boolean equals(Object obj){
		if (obj===null||!(obj instanceof ExecutionDTO)){
			false
		}else{
			val exec=obj as ExecutionDTO
			this.name.equals(exec.name)
			&&this.taskName.equals(exec.taskName)
			&&this.cmd.equals(exec.cmd)
			&&((this.preconditions===null&&exec.preconditions===null)||(this.preconditions.equals(exec.preconditions)))			
			&&this.files.equals(exec.files)
		}
		
	}
	def create execution: new ExecutionDTO copy() {
		execution.name = this.name
		execution.taskName = this.taskName
		execution.cmd = this.cmd
		execution.preconditions = this.preconditions
		execution.treatment = this.treatment
		execution.object = this.object
		execution.designType=this.designType
		execution.files = this.files?.map[copy]

	}

	

}

@Accessors
class FileDTO {
	String name
	String path
	boolean generated
	override boolean equals(Object obj){
		if (obj===null||!(obj instanceof FileDTO)){
			false
		}else{
			val file=obj as FileDTO
			this.name.equals(file.name)
			&&this.path.equals(file.path)
			&&this.generated.equals(file.generated)
		}
		
	}
	def create file: new FileDTO copy() {
		file.name = this.name
		file.path = this.path
		file.generated = this.generated
	}
	


	
}
