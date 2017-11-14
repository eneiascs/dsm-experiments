package br.unb.autoexp.design.factorial

import br.unb.autoexp.autoExp.CustomDependentVariable
import br.unb.autoexp.autoExp.Experiment
import br.unb.autoexp.autoExp.ExperimentalDesign
import br.unb.autoexp.autoExp.ExperimentalObject
import br.unb.autoexp.autoExp.Treatment
import br.unb.autoexp.design.ExecutionDesignGenerator
import br.unb.autoexp.generator.ExperimentalDesignGenerator
import br.unb.autoexp.generator.dto.ExecutionDTO
import com.google.inject.Inject
import java.util.ArrayList
import java.util.List

import static extension java.lang.String.*

class FactorialExecutionDesignGenerator implements ExecutionDesignGenerator {
	@Inject extension ExperimentalDesignGenerator

	override generate(Experiment experiment) {
		val executions = new ArrayList<ExecutionDTO>()
		experiment.treatments.forEach [ treatment |
			treatment.experimentalObjects.forEach [ obj |
				val execution = treatment.applyTreatmentToObject(obj)
				
				val depVariables=treatment.getDependentVariables.removeDuplicates.filter[instrument!==null]
				depVariables.forEach[
				    var ExecutionDTO exec=execution.copy
					var result=""
									    
				    if(!exec.files.filter[generated].isNullOrEmpty){
				      result=" >> ${%s}".format(exec.files.filter[generated].head.name)	
				    }
				
				    exec.cmd="%s %s%s".format(instrument.command,execution.cmd,result).trim()
				    val currentCommand=exec.cmd
				    val currentTaskName=exec.taskName
				    if (!executions.filter[taskName.equals(currentTaskName)&&!cmd.equals(currentCommand)].isNullOrEmpty){
				    	exec.taskName="%s_%s".format(execution.taskName,name)
				    }					  
				   // exec.taskName="%s_%s".format(execution.taskName,name)
				    executions.add(exec)
				]
				if (depVariables.isNullOrEmpty){
					executions.add(execution)
				
				}

			] 

		]
		executions.removeDuplicates
	}
	
	def List<CustomDependentVariable> getDependentVariables(Treatment treatment) {
		val experiment=(treatment.eContainer.eContainer) as Experiment
		experiment.researchHypotheses.filter[formula.treatment1.name.equals(treatment.name)||formula.treatment2.name.equals(treatment.name)].map[formula.depVariable].toList
		
	}
	
	def getExperimentalObjects(Treatment treatment){
		val design=(treatment.eContainer as ExperimentalDesign)
		val restrictions=design.restrictions.filter[it.treatment.name.equals(treatment.name)].toList
		if (restrictions.isNullOrEmpty){
			design.experimentalObjects
		
		}else{
			
			design.experimentalObjects.filter[restrictions.map[objects].flatten.map[object|object.name].toList.contains(name)]
		}
	}
	
	
		
}
