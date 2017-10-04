package br.unb.autoexp.generator

import br.unb.autoexp.autoExp.DesignType
import br.unb.autoexp.autoExp.Experiment
import br.unb.autoexp.autoExp.ExperimentalDesign
import br.unb.autoexp.autoExp.ExperimentalObject
import br.unb.autoexp.autoExp.File
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
@Inject FactorialExecutionDesignGenerator factorialGenerator

	def treatments(Experiment experiment) {

		Lists.newArrayList(experiment.researchHypotheses.map[formula.treatment1] + experiment.researchHypotheses.map [
			formula.treatment2
		]).removeDuplicates
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
				executions.add(execution.copy)
			}
		]
		executions

	}

	def replaceParameter(Treatment treatment, ExperimentalObject object) {

		val execution = new ExecutionDTO()
	
		
		execution.cmd = treatment.execution.cmd.replaceParameter(treatment, object)
		execution.name=treatment.execution.name
		execution.taskName="%s_%s_%s_%s".format((treatment.eContainer as ExperimentalDesign).type,treatment.factor.name,treatment.name,object.name)
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
//	def resolveFiles(ExecutionDTO execution, Treatment treatment, ExperimentalObject object) {
//		var result = new String(execution.cmd)
//		val pattern = "\\$\\{[^\\}]*\\}"
//		var m = Pattern.compile(pattern).matcher(result)
//
//		while (m.find) {
//
//			val actualParameter = m.group.substring(2, m.group.length - 1)
//			val split = actualParameter.split("\\.")
//			switch split.head {
//				case "treatment": {
//					switch split.tail?.head {
//						case "file": {
//
//							if (treatment.files.filter[split.tail.tail.head.equals(name)].isNullOrEmpty) {
//								println("invalid")
//								execution.invalidParameters.put(m.group, "cmd")
//							} else {
//								var file = new FileDTO()
//								file.setGenerated(false)
//								file.name = treatment.files.filter[split.tail.tail.head.equals(name)]?.head.name
//								file.path = treatment.files.filter[split.tail.tail.head.equals(name)]?.head.path
//								execution.files.add(file)
//								execution.cmd = execution.cmd.replaceFirst(actualParameter, "%s".format(file.name))
//
//							}
//						}
//						default:
//							execution.invalidParameters.put(m.group, "cmd")
//					}
//				}
//				case "object":
//					switch split.tail?.head {
//						case "file": {
//
//							if (object.files.filter[split.tail.tail.head.equals(name)].isNullOrEmpty) {
//								execution.invalidParameters.put(m.group, "cmd")
//							} else {
//								var file = new FileDTO()
//								file.setGenerated(false)
//								file.name = object.files.filter[split.tail.tail.head.equals(name)]?.head.name
//								file.path = object.files.filter[split.tail.tail.head.equals(name)]?.head.path
//								execution.files.add(file)
//								execution.cmd = execution.cmd.replaceFirst(actualParameter, "%s".format(file.name))
//							}
//
//						}
//						default:
//							execution.invalidParameters.put(m.group, "cmd")
//					}
//				case "execution":
//					switch split.tail?.head {
//						case "file": {
//							if (treatment.execution.files.filter[split.tail.tail.head.equals(name)].isNullOrEmpty) {
//								execution.invalidParameters.put(m.group, "cmd")
//							} else {
//								var file = new FileDTO()
//								file.setGenerated(false)
//								file.name = treatment.execution.files.filter[split.tail.tail.head.equals(name)]?.head.
//									name
//								file.path = treatment.execution.files.filter[split.tail.tail.head.equals(name)]?.head.
//									path
//								execution.files.add(file)
//								execution.cmd = execution.cmd.replaceFirst(actualParameter, "%s".format(file.name))
//
//							}
//						}
//						default:
//							execution.invalidParameters.put(m.group, "cmd")
//					}
//				default:
//					execution.invalidParameters.put(m.group, "cmd")
//			}
//
//		}
//
//		execution
//	}

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
