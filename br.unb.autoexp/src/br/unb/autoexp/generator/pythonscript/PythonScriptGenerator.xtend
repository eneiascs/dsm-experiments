package br.unb.autoexp.generator.pythonscript

import br.unb.autoexp.autoExp.Experiment
import br.unb.autoexp.generator.ExperimentalDesignGenerator
import br.unb.autoexp.generator.dto.ExecutionDTO2
import javax.inject.Inject

class PythonScriptGenerator {
	@Inject extension ExperimentalDesignGenerator



	def compilePythonScript(Experiment experiment) {
		'''
		import subprocess
		import re
		
		def main():
			runs =«experiment.experimentalDesign.runs»
			with open('out/result_runexec.dat', 'w') as f:
				«FOR execution:experiment.designExecutions»
				try:
					total_secs = 0.0
					measured_secs = []
					treatment="«execution.treatment.name»"
					object="«IF execution.object.value===null»«execution.object.description»«ELSE»«execution.object.value»«ENDIF»"
					for _ in xrange(runs):
						«FOR pre:execution.preProcessing»
						«pre.generateApplication»
						«ENDFOR»
						rv=«execution.generateApplication»
						«FOR post:execution.postProcessing»
						«post.generateApplication»
						«ENDFOR»
						if rv['exitcode'] != 0:
							raise ExecutionError("Error running command. Exitcode: {}".format(rv['exitcode']),rv['exitcode'])
						measured_secs.append(rv['runtime'])
						total_secs += rv['runtime']
					measured_secs.sort()
					avg_runtime = total_secs / runs
					lower_bound = measured_secs[0]
					upper_bound = measured_secs[-1]
					print "Average runtime: {:2f}, range = [{:2f}, {:2f}]".format(avg_runtime, lower_bound, upper_bound)
					f.write('{} {} {} {} {} {}\n'.format(treatment,object,"Runexec", avg_runtime, lower_bound, upper_bound))
				except ExecutionError as e:
					print e
				«ENDFOR»
			print("Success.")
		def _runexec(command_line,timeout=3600):
			rv={}
			formated_command_line="runexec --walltimelimit {} -- {}".format(timeout,command_line)
			output = subprocess.check_output(formated_command_line,
		                                     	shell=True,
		                                     	cwd='.',
		                                     	stderr=subprocess.STDOUT)
			rv['runtime']=_parse_running_time(output)
			rv['exitcode']=_parse_exit_code(output)
			print("command line: {}".format(formated_command_line))
			print("exitcode: {}".format(rv['exitcode']))
			print("time: {}".format(rv['runtime']))
			return rv
				
		def _parse_running_time(output):
			pattern = re.compile(r"walltime= *(\d+\.?\d*)")
			matched=pattern.search(output).group(1)
			return float(matched)
		def _parse_exit_code(output):
			pattern = re.compile(r"exitcode= *(\d+)")
			matched=pattern.search(output).group(1)
			return int(matched)
		class ExecutionError(BaseException):
			def __init__(self, message, errorcode):
				super(ExecutionError, self).__init__(message)
		if __name__ == '__main__':
		    main()
		'''

	}
	
	def generateApplication(ExecutionDTO2 execution) {
		'''	
		_runexec("«execution.cmd»"«IF execution.timeout!==null»,«execution.timeout»«ENDIF»)
		'''
	}
	
	
				  
}	
