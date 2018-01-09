package br.unb.autoexp.generator

import br.unb.autoexp.autoExp.CustomDependentVariable
import br.unb.autoexp.autoExp.Experiment
import br.unb.autoexp.autoExp.ExperimentalObject
import br.unb.autoexp.autoExp.File
import br.unb.autoexp.autoExp.ResearchHypothesis
import br.unb.autoexp.autoExp.Treatment
import br.unb.autoexp.generator.dto.ExecutionDTO
import br.unb.autoexp.generator.dto.FileDTO
import com.google.common.collect.Lists
import java.util.ArrayList
import java.util.List
import java.util.regex.Pattern

import static extension java.lang.String.*

class ExperimentalDesignGenerator {
	


	def List<CustomDependentVariable> getDependentVariables(Treatment treatment) {
		val experiment = (treatment.eContainer) as Experiment
		experiment.researchHypotheses.filter [
			formula.treatment1.name.equals(treatment.name) || formula.treatment2.name.equals(treatment.name)
		].map[formula.depVariable].toList

	}

	def getExperimentalObjects(Treatment treatment) {
		val experiment = (treatment.eContainer as Experiment)

		val restrictions = experiment.experimentalDesign.restrictions.filter[it.treatment.name.equals(treatment.name)].
			toList
		if (restrictions.isNullOrEmpty) {
			experiment.experimentalObjects

		} else {

			experiment.experimentalObjects.filter [
				restrictions.map[objects].flatten.map[object|object.name].toList.contains(name)
			]
		}
	}

	def List<ExperimentalObject> getObjects(ResearchHypothesis hypothesis) {
		hypothesis.treatments.map[experimentalObjects].flatten.toList.removeDuplicates
	}

	def List<Treatment> getTreatments(ResearchHypothesis hypothesis) {
		val treatments = new ArrayList<Treatment>()
		treatments.add(hypothesis.formula.treatment1)
		treatments.add(hypothesis.formula.treatment2)

		treatments.sortBy[name]
	}

	def treatmentsInUse(Experiment experiment) {

		Lists.newArrayList(experiment.researchHypotheses.map[formula.treatment1] + experiment.researchHypotheses.map [
			formula.treatment2
		]).removeDuplicates.sortBy[name]
	}

	def List<CustomDependentVariable> getDependentVariables(Experiment experiment) {

		Lists.newArrayList(experiment.researchHypotheses.map[formula.depVariable]).removeDuplicates
	}

	def List<ExperimentalObject> getObjectsInUse(Experiment experiment) {
		experiment.researchHypotheses.map[treatments].flatten.map[experimentalObjects].flatten.toList.removeDuplicates

	}

	def designExecutions(Experiment experiment) {
		val executions = new ArrayList<ExecutionDTO>()
		experiment.treatmentsInUse.forEach [ treatment |
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

	def designExecutionsRepeatedWithNumberOfRuns(Experiment experiment) {
		if(experiment.experimentalDesign.runs == 0) experiment.experimentalDesign.runs = 1
		val executions = new ArrayList<ExecutionDTO>()
		experiment.designExecutions.forEach [ execution |
			for (i : 0 ..< experiment.experimentalDesign.runs) {

				executions.add(execution.copy(execution.taskName + "_" + i))
			}
		]
		executions

	}

	def applyTreatmentToObject(Treatment treatment, ExperimentalObject object) {

		val execution = new ExecutionDTO()

		execution.cmd = treatment.execution.cmd.replaceParameter(treatment, object)
		execution.name = treatment.execution.name
		execution.taskName = "%s_%s".format(treatment.name, object.name)
		execution.timeout = treatment.execution.timeout
		execution.treatment = treatment
		execution.object = object
		execution.preconditions = treatment.execution.preconditions
		execution.designType = (treatment.eContainer as Experiment).experimentalDesign.type
		if (treatment.execution.result !== null) {
			var result = new FileDTO()
			result.setGenerated(true)
			result.name = treatment.execution.result.name
			result.source = treatment.execution.result.source.replaceParameter(treatment, object)
			execution.files.add(result)
		}
		execution.files.filter[generated].forEach [
			getSource.parameters.forEach[execution.invalidParameters.put(it, "result")]
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
					treatment.files.resolveFileParameter(execution, split.tail, m.group)
				}
				case "object":
					object.files.resolveFileParameter(execution, split.tail, m.group)
				case "execution":
					treatment.execution.files.resolveFileParameter(execution, split.tail, m.group)
				default:
					execution.invalidParameters.put(m.group, "cmd")
			}

		}
		execution.files.addAll(treatment.execution.files.map [
			var file = new FileDTO()
			file.setGenerated(false)
			file.name = name
			file.source = source
			file.dest = dest
			file.checksum = checksum
		
			file
		])
		execution
	}

	def resolveFileParameter(List<File> files, ExecutionDTO execution, String[] split, String group) {
		val actualParameter = group.substring(2, group.length - 1)
		switch split.head {
			case "file": {

				if (files.filter[split.tail.head.equals(name)].isNullOrEmpty) {

					execution.invalidParameters.put(group, "cmd")
				} else {
					var file = new FileDTO()
					file.setGenerated(false)
					file.name = files.filter[split.tail.head.equals(name)]?.head.name
					file.source = files.filter[split.tail.head.equals(name)]?.head.source
					file.dest = files.filter[split.tail.head.equals(name)]?.head.dest
					file.checksum = files.filter[split.tail.head.equals(name)]?.head.checksum
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
