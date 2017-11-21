package br.unb.autoexp.generator

import br.unb.autoexp.autoExp.CustomDependentVariable
import br.unb.autoexp.autoExp.DesignType
import br.unb.autoexp.autoExp.Experiment
import br.unb.autoexp.autoExp.ExperimentalDesign
import br.unb.autoexp.autoExp.ExperimentalObject
import br.unb.autoexp.autoExp.File
import br.unb.autoexp.autoExp.ResearchHypothesis
import br.unb.autoexp.autoExp.Treatment
import br.unb.autoexp.design.factorial.FactorialExecutionDesignGenerator
import br.unb.autoexp.generator.dto.ExecutionDTO
import br.unb.autoexp.generator.dto.FileDTO
import com.google.common.collect.Lists
import com.google.inject.Inject
import java.util.ArrayList
import java.util.List
import java.util.regex.Pattern

import static extension br.unb.autoexp.design.ExecutionDesignGeneratorFactory.*
import static extension java.lang.String.*

class ExperimentalDesignGenerator {
@Inject extension FactorialExecutionDesignGenerator factorialGenerator

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

	def List<ExperimentalObject> getObjects(ResearchHypothesis hypothesis){
		hypothesis.treatments.map[experimentalObjects].flatten.toList.removeDuplicates
	}
	def List<Treatment> getTreatments(ResearchHypothesis hypothesis){
		val treatments=new ArrayList<Treatment>()
		treatments.add(hypothesis.formula.treatment1)
		treatments.add(hypothesis.formula.treatment2)
		
		treatments.sortBy[name]
	}
	def treatments(Experiment experiment) {

		Lists.newArrayList(experiment.researchHypotheses.map[formula.treatment1] + experiment.researchHypotheses.map [
			formula.treatment2
		]).removeDuplicates.sortBy[name]
	}
	def List<CustomDependentVariable> getDependentVariables(Experiment experiment) {

		Lists.newArrayList(experiment.researchHypotheses.map[formula.depVariable]).removeDuplicates
	}
	def List<ExperimentalObject> getObjectsInUse(Experiment experiment){
		experiment.researchHypotheses.map[treatments].flatten.map[experimentalObjects].flatten.toList.removeDuplicates
		
	}
	def designExecutions(Experiment experiment) {
		
		DesignType.FACTORIAL.register(factorialGenerator)
		
		val generator = experiment.experimentalDesign.type.generator
		
		if(generator===null)
			throw new RuntimeException("Execution Generator not found for design type %s".format(experiment.experimentalDesign.type.name()))
		generator.generate(experiment)
	}

	def designExecutionsRepeatedWithNumberOfRuns(Experiment experiment) {
		if(experiment.experimentalDesign.runs == 0) experiment.experimentalDesign.runs = 1
		val executions = new ArrayList<ExecutionDTO>()
		experiment.designExecutions.forEach [ execution |
			for (i : 0 ..< experiment.experimentalDesign.runs) {
				
				executions.add(execution.copy(execution.taskName+"_"+i))
			}
		]
		executions

	}

	def applyTreatmentToObject(Treatment treatment, ExperimentalObject object) {

		val execution = new ExecutionDTO()
	
		
		execution.cmd = treatment.execution.cmd.replaceParameter(treatment, object)
		execution.name=treatment.execution.name
		execution.taskName="%s_%s_%s_%s".format((treatment.eContainer as ExperimentalDesign).type,treatment.factor.name,treatment.name,object.name)
		execution.timeout=treatment.execution.timeout
		execution.treatment = treatment
		execution.object = object
	    execution.preconditions = treatment.execution.preconditions
		execution.designType=(treatment.eContainer as ExperimentalDesign).type	
		if (treatment.execution.result !== null) {
			var result = new FileDTO()
			result.setGenerated(true)
			result.name = treatment.execution.result.name
			result.path = treatment.execution.result.path.replaceParameter(treatment, object)
			execution.files.add(result)
		}
		execution.files.filter[generated].forEach [
			path.parameters.forEach[execution.invalidParameters.put(it, "result")]
		]
		execution.resolveFiles(treatment, object)
	}

	def resolveFiles(ExecutionDTO execution, Treatment treatment, ExperimentalObject object) {
		var result = new String(execution.cmd)
		val pattern = "\\$\\{[^\\}]*\\}"
		var m = Pattern.compile(pattern).matcher(result)

		while (m.find) {

			val actualParameter = m.group.substring(2, m.group.length - 1)
			val split = actualParameter.split("\\.")
			switch split.head {
				case "treatment": {
					treatment.files.resolveFileParameter(execution,split.tail,m.group)
				}
				case "object":
					object.files.resolveFileParameter(execution,split.tail,m.group)
				case "execution":
					treatment.execution.files.resolveFileParameter(execution,split.tail,m.group)
				default:
					execution.invalidParameters.put(m.group, "cmd")
			}

		}

		execution
	}

	def resolveFileParameter( List<File> files,ExecutionDTO execution, String[] split,String group) {
		val actualParameter = group.substring(2, group.length - 1)
		switch split.head {
			
			case "file": {
				
				if (files.filter[split.tail.head.equals(name)].isNullOrEmpty) {

					execution.invalidParameters.put(group, "cmd")
				} else {
					var file = new FileDTO()
					file.setGenerated(false)
					file.name = files.filter[split.tail.head.equals(name)]?.head.name
					file.path = files.filter[split.tail.head.equals(name)]?.head.path
					execution.files.add(file)
					execution.cmd = execution.cmd.replaceFirst(actualParameter, "%s".format(file.name))

				}
			}
			default:
				execution.invalidParameters.put(group, "cmd")
		}
	}

	def replaceParameter(String text, Treatment treatment, ExperimentalObject object) {
		var result = new String(text)
		val pattern = "\\$\\{[^\\}]*\\}"
		var m = Pattern.compile(pattern).matcher(text)

		while (m.find) {

			val actualParameter = m.group.substring(2, m.group.length - 1)

			val split = actualParameter.split("\\.")
			val value = switch split.head {
				case "treatment": treatment.value(split.tail.head, split.tail.tail)
				case "object": object.value(split.tail.head, split.tail.tail)
			}

			if (value !== null) {

				result = result.replaceFirst("\\$\\{%s\\}".format(actualParameter), value)

			}

		}

		result
	}

	def parameters(String text) {
		val pattern = "\\$\\{[^\\}]*\\}"
		var m = Pattern.compile(pattern).matcher(text)
		val matches = new ArrayList<String>()
		while (m.find && !matches.contains(m.group)) {
			matches.add(m.group)

			m.reset
			m = Pattern.compile(pattern).matcher(text)

		}
		matches
	}

	def String value(Treatment treatment, String head, String [] split) {

		switch head {
			case "parameter": treatment.parameters?.filter[name.equals(split.head)]?.head?.value
			case "name": treatment.name
			case "description": treatment.description
			default: null
		}

	}

	def String value(ExperimentalObject object, String head, String [] split) {

		switch head {
			case "parameter": object.parameters?.filter[name.equals(split.head)]?.head?.value
			case "name": object.name
			case "description": object.description
			default: null
		}

	}

	def <T> removeDuplicates(List<T> list) {
		val filteredList = new ArrayList<T>()
		list.forEach[element|if(!filteredList.contains(element)) filteredList.add(element)]
		filteredList
	}

}
