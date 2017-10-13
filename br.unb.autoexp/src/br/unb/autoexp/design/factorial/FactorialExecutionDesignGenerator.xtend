package br.unb.autoexp.design.factorial

import br.unb.autoexp.autoExp.Experiment
import br.unb.autoexp.autoExp.ExperimentalDesign
import br.unb.autoexp.autoExp.Treatment
import br.unb.autoexp.design.ExecutionDesignGenerator
import br.unb.autoexp.generator.ExperimentalDesignGenerator
import br.unb.autoexp.generator.dto.ExecutionDTO
import com.google.inject.Inject
import java.util.ArrayList

class FactorialExecutionDesignGenerator implements ExecutionDesignGenerator {
	@Inject extension ExperimentalDesignGenerator

	override generate(Experiment experiment) {
		val executions = new ArrayList<ExecutionDTO>()
		experiment.treatments.forEach [ treatment |
			treatment.experimentalObjects.forEach [ obj |
				executions.add(treatment.replaceParameter(obj))

			]

		]
		executions.removeDuplicates
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
