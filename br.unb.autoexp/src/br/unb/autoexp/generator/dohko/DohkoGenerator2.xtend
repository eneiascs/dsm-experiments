package br.unb.autoexp.generator.dohko

import br.unb.autoexp.autoExp.Experiment
import br.unb.autoexp.generator.ExperimentalDesignGenerator
import javax.inject.Inject

class DohkoGenerator2 {
@Inject extension ExperimentalDesignGenerator 

def compileDohko(Experiment experiment) {
	'''
	---
	name: "«experiment.name»"
	user:
	  username: "«experiment.infrastructure.user.username»"
	requirements:
	  cpu: «experiment.infrastructure.requirements.cpu»
	  memory: «experiment.infrastructure.requirements.memory»
	  platform: "«experiment.infrastructure.requirements.platform.typeName»"
	  cost: «experiment.infrastructure.requirements.cost»
	  number-of-instances-per-cloud: «experiment.infrastructure.
	  									requirements.instancesPerCloud»
	applications:
	  «FOR execution:experiment.designExecutionsRepeatedWithNumberOfRuns»				  	
	  - name: "«execution.taskName»"
	    command-line: "«execution.cmd»"
	  «ENDFOR»  
	'''
}

}
