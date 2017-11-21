package br.unb.autoexp.design.factorial

import br.unb.autoexp.autoExp.Experiment
import br.unb.autoexp.design.ExecutionDesignGenerator
import br.unb.autoexp.generator.ExperimentalDesignGenerator
import br.unb.autoexp.generator.dto.ExecutionDTO
import com.google.inject.Inject
import java.util.ArrayList

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
	
	
	
	
		
}
