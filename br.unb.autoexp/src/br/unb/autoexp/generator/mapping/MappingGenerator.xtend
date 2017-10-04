package br.unb.autoexp.generator.mapping

import br.unb.autoexp.autoExp.Experiment
import br.unb.autoexp.generator.ExperimentalDesignGenerator
import java.util.List
import javax.inject.Inject
import br.unb.autoexp.generator.mapping.dto.MappingDTO

class MappingGenerator {
	@Inject extension ExperimentalDesignGenerator

	def compileMapping(Experiment experiment) {
		'''
			[
			  «FOR mapping:experiment.mappings»
			  {
			    "experimentName": "«mapping.experimentName»",
			    "design": "«mapping.designType.name()»",
			    "runs": «mapping.runs»,
			    "taskName": "«mapping.taskName»",
			    "executionName": "«mapping.executionName»",
			    "factor": "«mapping.factor»",
			    "treatment": "«mapping.treatment»",
			    "object": "«mapping.object»"
			  }«IF !experiment.mappings.last.taskName.equals(mapping.taskName)»,«ENDIF»
			  «ENDFOR»		
			]
		'''

	}

	def List<MappingDTO> getMappings(Experiment experiment) {
		experiment.designExecutions.map[
			MappingDTO.builder.experimentName(experiment.name).runs(experiment.experimentalDesign.runs).taskName(taskName).executionName(name).treatment(treatment.name).factor(treatment.factor.name).object(object.name).designType(designType).build
		]
		
	}
}
