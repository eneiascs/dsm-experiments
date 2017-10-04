package br.unb.autoexp.design.factorial

import br.unb.autoexp.autoExp.Experiment
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
			experiment.experimentalDesign.experimentalObjects.forEach [ obj |
				executions.add(treatment.replaceParameter(obj))

			]

		]
		executions.removeDuplicates
	}

}
