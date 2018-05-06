package br.unb.autoexp.generator.dto

import br.unb.autoexp.autoExp.DependentVariable
import br.unb.autoexp.autoExp.ExperimentalObject
import br.unb.autoexp.autoExp.Treatment
import org.eclipse.xtend.lib.annotations.Accessors

@Accessors
class ExecutionDTO {
	
	Treatment treatment
	ExperimentalObject object
	DependentVariable depVariable
		override boolean equals(Object obj){
		if (obj===null||!(obj instanceof ExecutionDTO)){
			false
		}else{
			val exec=obj as ExecutionDTO
			this.treatment.equals(exec.treatment)
			&&this.object.equals(exec.object)
			&&this.depVariable.equals(exec.depVariable)
			
		}
		
	}
	def ExecutionDTO copy() {
		var copy=new ExecutionDTO()
		copy.treatment = this.treatment
		copy.object = this.object
		copy.depVariable = this.depVariable
		copy

	}
	

	





	
}