package br.unb.autoexp.generator.dohko

import br.unb.autoexp.autoExp.Experiment
import br.unb.autoexp.autoExp.ExperimentalDesign
import br.unb.autoexp.autoExp.ExperimentalObject
import br.unb.autoexp.autoExp.ResearchHypothesis
import br.unb.autoexp.autoExp.Treatment
import br.unb.autoexp.generator.ExperimentalDesignGenerator
import br.unb.autoexp.generator.dto.ExecutionDTO
import br.unb.autoexp.generator.dto.ExecutionDTO2
import br.unb.autoexp.generator.exception.InvalidPropertyException
import java.util.ArrayList
import java.util.List
import java.util.UUID
import java.util.regex.Pattern
import javax.inject.Inject
import org.eclipse.emf.common.util.EList
import org.excalibur.core.cloud.api.AccessKey
import org.excalibur.core.cloud.api.Cloud
import org.excalibur.core.cloud.api.InstanceTypeReq
import org.excalibur.core.cloud.api.Platform
import org.excalibur.core.cloud.api.ProviderSupport
import org.excalibur.core.cloud.api.domain.GeographicRegion
import org.excalibur.core.cloud.api.domain.Region
import org.excalibur.core.cloud.api.domain.RegionStatus
import org.excalibur.core.cloud.api.domain.Zone
import org.excalibur.core.domain.User
import org.excalibur.core.domain.UserKey
import org.excalibur.core.execution.domain.Application
import org.excalibur.core.execution.domain.ApplicationDescriptor
import org.excalibur.core.execution.domain.Block
import org.excalibur.core.execution.domain.FinishAction
import org.excalibur.core.execution.domain.Precondition
import org.excalibur.core.execution.domain.Requirements

import static extension java.lang.String.*

class DohkoGenerator {
	@Inject extension ExperimentalDesignGenerator

	def ApplicationDescriptor generateApplicationDescriptor(Experiment experiment) {
		experiment.checkConstraints

		val applicationDescriptor = new ApplicationDescriptor
		applicationDescriptor.name = experiment.name
		applicationDescriptor.description = experiment.description
		val user = new User()
		user.username = experiment.infrastructure.user.username
		applicationDescriptor.user = user
		val keys = new ArrayList<UserKey>
		experiment.infrastructure.user.keys.forEach [
			val key = new UserKey()
			key.name = name
			key.privateKeyMaterial = privateKey
			key.publicKeyMaterial = publicKey
			key.fingerPrint = fingerprint
			keys.add(key)
		]
		applicationDescriptor.user.addKeys(keys)

		if (experiment.infrastructure.requirements !== null) {

			val req = new Requirements()

			req.maximalCostPerHour = experiment.infrastructure.requirements.cost
			req.memorySize = experiment.infrastructure.requirements.memory
			req.numberOfCpuCores = experiment.infrastructure.requirements.cpu
			req.numberOfInstancesPerCloud = experiment.infrastructure.requirements.instancesPerCloud

			req.platform = switch (experiment.infrastructure.requirements.platform.typeName) {
				case "LINUX": Platform.LINUX
				case "WINDOWS": Platform.WINDOWS
			}
			applicationDescriptor.requirements = req

		}

		if (experiment.infrastructure.preconditions !== null) {
			val pre = new Precondition()
			experiment.infrastructure.preconditions.packages.forEach [

				pre.add(it)

			]
			applicationDescriptor.addPrecondition(pre)
		}

		experiment.infrastructure.clouds.forEach [
			val cloud = new Cloud()
			cloud.name = name
			val key = new AccessKey()
			key.accessKey = accessKey.accessKey
			key.secretKey = accessKey.secretKey
			cloud.accessKey = key

			val prov = new ProviderSupport()
			prov.description = provider.description
			prov.name = provider.name
			prov.limitOfResourcesPerType = provider.maxResourcePerType
			prov.serviceClass = provider.serviceClass

			cloud.provider = prov

			regions.forEach [
				val region = new Region()
				region.city = city
				region.endpoint = endpoint
				val geo = new GeographicRegion()
				geo.id = geographicRegion
				region.geographicRegion = geo
				region.name = name

				region.status = switch (status.typeName) {
					case "UP": RegionStatus.UP
					case "DOWN": RegionStatus.DOWN
				}
				zones.forEach [
					val zone = new Zone()
					zone.name = name
					zone.status = status
					region.addZone(zone)
				]
				cloud.addRegion(region)
			]

			instanceTypes.forEach [
				val inst = new InstanceTypeReq()
				inst.name = name
				inst.numberOfInstances = numberOfInstances
				cloud.addInstanceType(inst)
			]

			applicationDescriptor.addCloud(cloud)

		]

		if (experiment.infrastructure.onFinish !== null) {
			applicationDescriptor.onFinished = switch (experiment.infrastructure.onFinish.typeName) {
				case "NONE": FinishAction.NONE
				case "SHUTDOWN": FinishAction.SHUTDOWN
				case "TERMINATE": FinishAction.TERMINATE
			}
		}

		experiment.researchHypotheses.forEach [ hypothesis |
			val executions = applyDesign(hypothesis, experiment.experimentalDesign, experiment.experimentalObjects)

			executions.forEach [ execution |
				applicationDescriptor.addBlock(compileBlock(execution, experiment.experimentalDesign.runs))
			]

		]

		applicationDescriptor
	}

	protected def compileBlock(ExecutionDTO exec, int runs) {
		val block = new Block()
		block.id = UUID.randomUUID.toString
		block.name = exec.treatment.name + "_" + exec.object.name
		for (run : 0 .. (runs - 1)) {
			block.addApplication(compileApplication(exec, run))

		}
		block
	}

	protected def Application compileApplication(ExecutionDTO exec, int run) {
		val application = new Application()
		application.name = exec.treatment.name + "_" + exec.object.name + "_" + run
		if (exec.depVariable.instrument !== null)
			application.commandLine = exec.depVariable.instrument.command + " " + exec.treatment.execution.cmd
		else
			application.commandLine = exec.treatment.execution.cmd

		application.commandLine = application.commandLine.resolveParameters(exec.treatment, exec.object)
		application
	}

	def resolveParameters(String cmd, Treatment treatment, ExperimentalObject object) {
		var result = new String(cmd)
		val pattern = "\\$\\{[^\\}]*\\}"
		var m = Pattern.compile(pattern).matcher(cmd)

		while (m.find) {

			val parameter = m.group.substring(2, m.group.length - 1)

			val parameterSplit = parameter.split("\\.")
			if (parameterSplit.length > 1) {
				val parameterValue = switch (parameterSplit.head) {
					case "object": {
						switch (parameterSplit.get(1)) {
							case "name": {
								object.name
							}
							case "description": {
								object.description
							}
							case "parameter": {
								if (parameterSplit.length > 2) {

									val parametersFiltered = object.parameters.filter [
										name.equals(parameterSplit.get(2))
									]
									if (!parametersFiltered.isNullOrEmpty)
										parametersFiltered.head.value

								}
							}
						}
					}
					case "treatment": {
						switch (parameterSplit.get(1)) {
							case "name": {
								treatment.name
							}
							case "description": {
								treatment.description
							}
							case "parameter": {
								if (parameterSplit.length > 2) {

									val parametersFiltered = treatment.parameters.filter [
										name.equals(parameterSplit.get(2))
									]
									if (!parametersFiltered.isNullOrEmpty)
										parametersFiltered.head.value

								}
							}
						}
					}
				}
				if (parameterValue !== null) {

					result = result.replaceFirst("\\$\\{%s\\}".format(parameter), parameterValue)

				}
			}

		}

		result

	}

	def List<ExecutionDTO> applyDesign(ResearchHypothesis hypothesis, ExperimentalDesign design,
		EList<ExperimentalObject> objects) {
		val executions = new ArrayList<ExecutionDTO>()

		hypothesis.treatments.forEach [ treatment |
			objects.forEach [ object |

				val execution = new ExecutionDTO()
				execution.depVariable = hypothesis.formula.depVariable
				execution.treatment = treatment
				execution.object = object

				executions.add(execution.copy)

			]
		]

		executions

	}

	def List<Treatment> getTreatments(ResearchHypothesis hypothesis) {
		val treatments = new ArrayList<Treatment>()
		treatments.add(hypothesis.formula.treatment1)
		treatments.add(hypothesis.formula.treatment2)

		treatments.sortBy[name]
	}

	def <T> removeDuplicates(List<T> list) {
		val filteredList = new ArrayList<T>()
		list.forEach[element|if(!filteredList.contains(element)) filteredList.add(element)]
		filteredList
	}

	def void checkConstraints(Experiment experiment) {

		if (experiment.name === null)
			throw new InvalidPropertyException("Property 'name' must not be null");
		if (experiment.experimentalDesign === null)
			throw new InvalidPropertyException("Property 'experimentalDesign' must not be null");
		if (experiment.experimentalDesign.runs < 1)
			throw new InvalidPropertyException(
				"Property 'runs' must be greater or equals 1. Value: %s".format(
					experiment.experimentalDesign.runs.toString));
		if (experiment.dependentVariables.nullOrEmpty)
			throw new InvalidPropertyException("Property 'dependentVariables' must not be null or empty");
		if (experiment.dependentVariables.head.name === null)
			throw new InvalidPropertyException("Property 'name' of 'dependentVariable' must not be null");
		if (experiment.dependentVariables.head.description === null)
			throw new InvalidPropertyException("Property 'description' of 'dependentVariable' must not be null");
		experiment.instruments.forEach [
			if (name === null)
				throw new InvalidPropertyException("Property 'name' of 'instrument' must not be null");
			if (command === null)
				throw new InvalidPropertyException("Property 'command' of 'instrument' must not be null");
			if (valueExpression === null)
				throw new InvalidPropertyException("Property 'valueExpression' of 'instrument' must not be null");
		]
		if (experiment.factors.nullOrEmpty)
			throw new InvalidPropertyException("Property 'factors' must not be null or empty");
		experiment.factors.forEach [
			if (name === null)
				throw new InvalidPropertyException("Property 'name' of 'factor' must not be null")

			if (description === null)
				throw new InvalidPropertyException("Property 'description' of 'factor' must not be null");
		]
		if (experiment.treatments.nullOrEmpty)
			throw new InvalidPropertyException("Property 'treatments' must not be null or empty")

		experiment.treatments.forEach [
			if (name === null)
				throw new InvalidPropertyException("Property 'name' of 'treatment' must not be null")

			if (description === null)
				throw new InvalidPropertyException("Property 'description' of 'treatment' must not be null");

			if (factor === null)
				throw new InvalidPropertyException("Property 'factor' of 'treatment' must not be null");

			if (execution === null)
				throw new InvalidPropertyException("Property 'execution' of 'treatment' must not be null");
		]
		if (experiment.experimentalObjects.nullOrEmpty)
			throw new InvalidPropertyException("Property 'experimentalObjects' must not be null or empty")
		experiment.experimentalObjects.forEach [
			if (name === null)
				throw new InvalidPropertyException("Property 'name' of 'experimentalObject' must not be null")

			if (description === null)
				throw new InvalidPropertyException("Property 'description' of 'experimentalObject' must not be null");
			parameters.forEach [
				if (name === null)
					throw new InvalidPropertyException("Property 'name' of 'parameter' must not be null")
				if (value === null)
					throw new InvalidPropertyException("Property 'value' of 'parameter' must not be null")
			]
		]
		if (experiment.executions.nullOrEmpty)
			throw new InvalidPropertyException("Property 'executions' must not be null or empty")
		experiment.executions.forEach [
			if (name === null)
				throw new InvalidPropertyException("Property 'name' of 'execution' must not be null")
		]
		if (experiment.infrastructure === null)
			throw new InvalidPropertyException("Property 'infrastructure' must not be null");
		if (experiment.infrastructure.user === null)
			throw new InvalidPropertyException("Property 'user' of 'infrastructure' must not be null");
		if (experiment.infrastructure.user.username === null)
			throw new InvalidPropertyException("Property 'username' of 'user' must not be null");
		if (experiment.researchHypotheses.nullOrEmpty)
			throw new InvalidPropertyException("Property 'researchHypotheses' must not be null or empty")
		experiment.researchHypotheses.forEach [
			if (name === null)
				throw new InvalidPropertyException("Property 'name' of 'researchHypothesis' must not be null")
			if (formula === null)
				throw new InvalidPropertyException("Property 'formula' of 'researchHypothesis' must not be null")
			if (formula.depVariable === null)
				throw new InvalidPropertyException("Property 'depVariable' of 'researchHypothesis' must not be null")
			if (formula.operator === null)
				throw new InvalidPropertyException("Property 'operator' of 'researchHypothesis' must not be null")
			if (formula.treatment1 === null)
				throw new InvalidPropertyException("Property 'treatment1' of 'researchHypothesis' must not be null")
			if (formula.treatment2 === null)
				throw new InvalidPropertyException("Property 'treatment2' of 'researchHypothesis' must not be null")
		]

	}

	def compileDohko(Experiment experiment) {
		//val applicationDescriptor = generateApplicationDescriptor(experiment)
		//writeApplicationDescriptorToYaml(applicationDescriptor)
		'''
			---
			name: "«experiment.name»"
			description: "«IF experiment.description!==null»«experiment.description»«ENDIF»"
			user:
			  username: "«experiment.infrastructure.user.username»"
			  «IF !experiment.infrastructure.user.keys.isNullOrEmpty»
			  	keys:
			  «ENDIF»
			  «FOR key : experiment.infrastructure.user.keys»
			  	- name: "«key.name»"
			  	  «IF key.privateKey!==null»
			  	  	private-key-material: "«key.privateKey»"
			  	  «ENDIF»
			  	  «IF key.publicKey!==null»
			  	  	public-key-material: "«key.publicKey»"
			  	  «ENDIF»
			  	  «IF key.privateKey!==null»
			  	  	fingerprint: "«key.fingerprint»"
			  	  «ENDIF»
			  «ENDFOR»			   
			«IF experiment.infrastructure.requirements!==null»
				requirements:
				  cpu: «experiment.infrastructure.requirements.cpu»
				  memory: «experiment.infrastructure.requirements.memory»
				  platform: "«experiment.infrastructure.requirements.platform.typeName»"
				  cost: «experiment.infrastructure.requirements.cost»
				  number-of-instances-per-cloud: «experiment.infrastructure.requirements.instancesPerCloud»
			«ENDIF»
			«IF experiment.infrastructure.preconditions!==null»
				preconditions:
				  packages:
				  «FOR pack:experiment.infrastructure.preconditions.packages»
				  	- «pack»
				  «ENDFOR»
			«ENDIF»				
			«IF !experiment.infrastructure.clouds.isNullOrEmpty»
				clouds:
				  «FOR cloud:experiment.infrastructure.clouds»				  	
				  	- name: "«cloud.name»"
				  	  «IF cloud.provider!==null»
				  	  	provider:
				  	  	  name: "«cloud.provider.name»"
				  	  	  «IF cloud.provider.maxResourcePerType>0»
				  	  	  	max-resource-per-type: «cloud.provider.maxResourcePerType»
				  	  	  «ENDIF»
				  	  	  «IF cloud.provider.description!==null»
				  	  	  	description: "«cloud.provider.description»"
				  	  	  «ENDIF»
				  	  	  «IF cloud.provider.serviceClass!==null»
				  	  	  	service-class: "«cloud.provider.serviceClass»"
				  	  	  «ENDIF»
				  	  «ENDIF»
				  	  «IF cloud.accessKey!==null»
				  	  	access-key:
				  	  	  access-key: "«cloud.accessKey.accessKey»"
				  	  	  secret-key: "«cloud.accessKey.secretKey»"
				  	  «ENDIF»  
				  	  «IF !cloud.regions.isNullOrEmpty»
				  	  	regions:
				  	  «ENDIF»
				  	  «FOR region:cloud.regions»
				  	  	- name: "«region.name»"
				  	  	  «IF region.endpoint!==null»
				  	  	  	endpoint: "«region.endpoint»"
				  	  	  «ENDIF»
				  	  	  «IF region.status!==null»
				  	  	  	status: «region.status.typeName»
				  	  	  «ENDIF»
				  	  	  «IF region.city!==null»
				  	  	  	city: "«region.city»"
				  	  	  «ENDIF»
				  	  	  «IF region.geographicRegion!=0»
				  	  	  	geographic-region: «region.geographicRegion»
				  	  	  «ENDIF»
				  	  	  «IF !region.zones.isNullOrEmpty»
				  	  	  	zone:
				  	  	  «ENDIF»
				  	  	  «FOR zone:region.zones»
				  	  	  	- name: "«zone.name»"
				  	  	  	  «IF zone.status!==null»
				  	  	  	  	status: "«zone.status»"
				  	  	  	  «ENDIF»
				  	  	  «ENDFOR»  
				  	  «ENDFOR»
				  	  «IF !cloud.instanceTypes.isNullOrEmpty»
				  	  	instance-types:
				  	  «ENDIF»
				  	  «FOR instance:cloud.instanceTypes»
				  	  	- name: "«instance.name»"
				  	  	  «IF instance.numberOfInstances>0»
				  	  	  	number-of-instances: «instance.numberOfInstances»
				  	  	  «ENDIF»
				  	  «ENDFOR»					  	
				  «ENDFOR»
			«ENDIF»
			«IF !experiment.designExecutions.isNullOrEmpty»
			  blocks:
			    «FOR execution:experiment.designExecutions» 
			      - applications:
			        «FOR i:0..(experiment.experimentalDesign.runs-1)»
			          «FOR pre:execution.preProcessing»
			            «generateApplication(pre, "pre"+"_"+pre.name+"_"+execution.taskName+"_"+i)»
			          «ENDFOR»
			          «generateApplication(execution, execution.taskName+"_"+i)»
			          «FOR post:execution.postProcessing»
			            «generateApplication(post, "post"+"_"+post.name+"_"+execution.taskName+"_"+i)»
			          «ENDFOR»
			        «ENDFOR»
			    «ENDFOR»
			«ENDIF»
			«IF experiment.infrastructure.onFinish!==null»
				on-finish: "«experiment.infrastructure.onFinish.typeName»"
			«ENDIF»
		'''

	}
	
	protected def Object generateApplication(ExecutionDTO2 execution, String taskName)
	 '''
	 - name: "«taskName»"
	   command-line: "«execution.cmd»"
	   «IF execution.timeout!==null»
	     timeout: «execution.timeout»
	   «ENDIF»
	   «IF execution.preconditions!==null»
	     preconditions:
	       packages: 
	       «FOR pack:execution.preconditions.packages»
	         - «pack»
	       «ENDFOR»
	   «ENDIF»
	   «IF!execution.files.isNullOrEmpty»
	     files:
	   «ENDIF»
	   «FOR file:execution.files»
	     - name: "«file.name»"
	       source: "«file.source»"
	       «IF file.dest===null»
	         dest: "/opt/dohko/files/«file.name»"
	       «ELSE»
	         dest: "«file.dest»"
	       «ENDIF»
	       «IF file.checksum!==null»
	         checksum: "«file.checksum»"
	       «ENDIF»
	       generated: «IF file.generated»"Y"«ELSE»"N"«ENDIF»
	   «ENDFOR»
	 '''
	

	def writeApplicationDescriptorToYaml(ApplicationDescriptor app) {
		''' 
			---
			name: "«app.name»"
			description: "«IF app.description!==null»«app.description»«ENDIF»"
			user:
			  username: "«app.user.username»"
			  «IF !app.user.keys.isNullOrEmpty»
			  	keys:
			  «ENDIF»
			  «FOR key : app.user.keys»
			  	- name: "«key.name»"
			  	  «IF key.privateKeyMaterial!==null»
			  	  	private-key-material: "«key.privateKeyMaterial»"
			  	  «ENDIF»
			  	  «IF key.publicKeyMaterial!==null»
			  	  	public-key-material: "«key.publicKeyMaterial»"
			  	  «ENDIF»
			  	  «IF key.fingerPrint!==null»
			  	  	fingerprint: "«key.fingerPrint»"
			  	  «ENDIF»
			  «ENDFOR»			   
			«IF app.requirements!==null»
				requirements:
				  cpu: «app.requirements.numberOfCpuCores»
				  memory: «app.requirements.memorySize»
				  platform: "«app.requirements.platform.name»"
				  cost: «app.requirements.maximalCostPerHour»
				  number-of-instances-per-cloud: «app.requirements.numberOfInstancesPerCloud»
			«ENDIF»
			«IF !app.getPreconditions().isNullOrEmpty»
				preconditions:
				  packages:
				  «FOR pre:app.getPreconditions()»
				  	«FOR pack:pre.packages»
				  		- «pack»
				  	«ENDFOR»
				  «ENDFOR»
			«ENDIF»				
			«IF !app.clouds.isNullOrEmpty»
				clouds:
				  «FOR cloud:app.clouds»				  	
				  	- name: "«cloud.name»"
				  	  «IF cloud.provider!==null»
				  	  	provider:
				  	  	  name: "«cloud.provider.name»"
				  	  	  «IF cloud.provider.limitOfResourcesPerType>0»
				  	  	  	max-resource-per-type: «cloud.provider.limitOfResourcesPerType»
				  	  	  «ENDIF»
				  	  	  «IF cloud.provider.description!==null»
				  	  	  	description: "«cloud.provider.description»"
				  	  	  «ENDIF»
				  	  	  «IF cloud.provider.serviceClass!==null»
				  	  	  	service-class: "«cloud.provider.serviceClass»"
				  	  	  «ENDIF»
				  	  «ENDIF»
				  	  «IF cloud.accessKey!==null»
				  	  	access-key:
				  	  	  access-key: "«cloud.accessKey.accessKey»"
				  	  	  secret-key: "«cloud.accessKey.secretKey»"
				  	  «ENDIF»  
				  	  «IF !cloud.regions.isNullOrEmpty»
				  	  	regions:
				  	  «ENDIF»
				  	  «FOR region:cloud.regions»
				  	  	- name: "«region.name»"
				  	  	  «IF region.endpoint!==null»
				  	  	  	endpoint: "«region.endpoint»"
				  	  	  «ENDIF»
				  	  	  «IF region.status!==null»
				  	  	  	status: «region.status.name»
				  	  	  «ENDIF»
				  	  	  «IF region.city!==null»
				  	  	  	city: "«region.city»"
				  	  	  «ENDIF»
				  	  	  «IF region.geographicRegion!=0»
				  	  	  	geographic-region: «region.geographicRegion»
				  	  	  «ENDIF»
				  	  	  «IF !region.zones.isNullOrEmpty»
				  	  	  	zone:
				  	  	  «ENDIF»
				  	  	  «FOR zone:region.zones»
				  	  	  	- name: "«zone.name»"
				  	  	  	  «IF zone.status!==null»
				  	  	  	  	status: "«zone.status»"
				  	  	  	  «ENDIF»
				  	  	  «ENDFOR»  
				  	  «ENDFOR»
				  	  «IF !cloud.instanceTypes.isNullOrEmpty»
				  	  	instance-types:
				  	  «ENDIF»
				  	  «FOR instance:cloud.instanceTypes»
				  	  	- name: "«instance.name»"
				  	  	  «IF instance.numberOfInstances>0»
				  	  	  	number-of-instances: «instance.numberOfInstances»
				  	  	  «ENDIF»
				  	  «ENDFOR»					  	
				  «ENDFOR»
			«ENDIF»
			«writeApplications(app.getApplications())»
			«IF !app.getBlocks().isNullOrEmpty»
				blocks:
				  «FOR block:app.getBlocks()»
				  	«writeApplications(block.getApplications())»
				  «ENDFOR»  
			«ENDIF» 
			«IF app.onFinished!==null»
				on-finish: "«app.onFinished»"
			«ENDIF»
		'''
	}

	protected def CharSequence writeApplications(List<Application> applications) '''				    
		«IF !applications.isNullOrEmpty»
			- applications:
			  «FOR application:applications»
			  	- name: "«application.name»"
			  	  command-line: "«application.commandLine»"
			  	  «IF application.timeout!==null» 
			  	  	timeout: «application.timeout»
			  	  «ENDIF»
			  	  «IF application.preconditions!==null»
			  	  	preconditions:
			  	  	  packages:
			  	  	  «FOR pre:application.preconditions» 
			  	  	  	«FOR pack:pre.packages»
			  	  	  		- «pack»
			  	  	  	«ENDFOR»
			  	  	  «ENDFOR»
			  	  «ENDIF»
			  	  «IF!application.files.isNullOrEmpty»				    
			  	  	files:
			  	  «ENDIF»
			  	  «FOR file:application.files»
			  	  	- name: "«file.getName»"
			  	  	  source: "«file.getSource»"
			  	  	  «IF file.getDest===null»
			  	  	  	dest: "/opt/dohko/files/«file.getName»"
			  	  	  «ELSE»
			  	  	  	dest: "«file.getDest»"
			  	  	  «ENDIF»
			  	  	  «IF file.getChecksum!==null»
			  	  	  	checksum: "«file.getChecksum»"
			  	  	  «ENDIF»
			  	  	  generated: «file.generated»
			  	«ENDFOR»
			«ENDFOR»
		 «ENDIF»
	'''

	def compileDohkoJson(Experiment experiment) {
		'''
			{
			"name": "«experiment.name»",
			"description": "«IF experiment.description!==null»«experiment.description»«ENDIF»",
			"user":{
			  "username": "«experiment.infrastructure.user.username»"
			«IF !experiment.infrastructure.user.keys.isNullOrEmpty»
				,
				"keys": [
				    «FOR key:experiment.infrastructure.user.keys SEPARATOR ","»
				    	{
				    	"name": "«key.name»"
				    	«IF key.privateKey!==null»
				    		,
				    		"private-key-material": "«key.privateKey»"
				    	«ENDIF»
				    	«IF key.privateKey!==null»
				    		,
				    		"public-key-material": "«key.publicKey»"
				    	«ENDIF»
				    	«IF key.privateKey!==null»
				    		,
				    		"fingerprint": "«key.fingerprint»"
				    	«ENDIF»
				    	}
				    «ENDFOR»
				    ] 
			«ENDIF»  			   
			}
			«IF experiment.infrastructure.requirements!==null»
				,
				"requirements":{
				  "cpu": «experiment.infrastructure.requirements.cpu»,
				  "memory": «experiment.infrastructure.requirements.memory»,
				  "platform": "«experiment.infrastructure.requirements.platform.typeName»",
				  "cost": «experiment.infrastructure.requirements.cost»,
				  "number-of-instances-per-cloud": «experiment.infrastructure.requirements.instancesPerCloud»
				}
			«ENDIF»			
			«IF experiment.infrastructure.preconditions!==null»
				,
				"preconditions":{
				  "packages":[
				  «FOR pack:experiment.infrastructure.preconditions.packages SEPARATOR ","»
				  	"«pack»"
				  «ENDFOR»
				  ]
				}	  
			«ENDIF»				
			«IF !experiment.infrastructure.clouds.isNullOrEmpty»
				,
				"clouds":[
				  «FOR cloud:experiment.infrastructure.clouds SEPARATOR ","»				  	
				  	{
				  	"name": "«cloud.name»"
				  	  «IF cloud.provider!==null»
				  	  	,
				  	  	"provider":{
				  	  	  "name": "«cloud.provider.name»"				  	    
				  	  	  «IF cloud.provider.maxResourcePerType>0»
				  	  	  	,
				  	  	  	"max-resource-per-type": «cloud.provider.maxResourcePerType»
				  	  	  «ENDIF»
				  	  	  «IF cloud.provider.description!==null»
				  	  	  	,
				  	  	  	"description": "«cloud.provider.description»"
				  	  	  «ENDIF»
				  	  	  «IF cloud.provider.serviceClass!==null»
				  	  	  	,
				  	  	  	"service-class": "«cloud.provider.serviceClass»"
				  	  	  «ENDIF»
				  	  	}
				  	  «ENDIF»
				  	  «IF cloud.accessKey!==null»
				  	  	,
				  	  	"access-key":{
				  	  	  "access-key": "«cloud.accessKey.accessKey»",
				  	  	  "secret-key": "«cloud.accessKey.secretKey»"
				  	  	}
				  	  «ENDIF»  
				  	  «IF !cloud.regions.isNullOrEmpty »
				  	  	,
				  	  	"regions":[
				  	  	«FOR region:cloud.regions SEPARATOR ","»
				  	  		{
				  	  			  "name":"«region.name»"
				  	  			  «IF region.endpoint!==null»
				  	  			  	,
				  	  			  	"endpoint": "«region.endpoint»"
				  	  			  «ENDIF»
				  	  			  «IF region.status!==null»
				  	  			  	,
				  	  			  	"status": "«region.status.typeName»"
				  	  			  «ENDIF»
				  	  			  «IF region.city!==null»
				  	  			  	,
				  	  			  	"city": "«region.city»"
				  	  			  «ENDIF»
				  	  			  «IF region.geographicRegion!=0»
				  	  			  	,
				  	  			  	"geographic-region": «region.geographicRegion»
				  	  			  «ENDIF»
				  	  			  «IF !region.zones.isNullOrEmpty»
				  	  			  	,
				  	  			  	"zone":
				  	  			  «ENDIF»
				  	  			  «FOR zone:region.zones»
				  	  			  	{
				  	  			  	  "name": "«zone.name»"
				  	  			  	  «IF zone.status!==null»
				  	  			  	  	,
				  	  			  	  	"status": "«zone.status»"
				  	  			  	  «ENDIF»
				  	  			  	}
				  	  			  «ENDFOR»  
				  	  		}
				  	  	«ENDFOR»
				  	  	]
				  	  «ENDIF»
				  	  «IF !cloud.instanceTypes.isNullOrEmpty»
				  	  	,
				  	  	"instance-types":[
				  	  	
				  	  	  «FOR instance:cloud.instanceTypes SEPARATOR ","»
				  	  	  	{
				  	  	  	  "name": "«instance.name»"
				  	  	  	  «IF instance.numberOfInstances>0»
				  	  	  	  	,
				  	  	  	  	"number-of-instances": «instance.numberOfInstances»
				  	  	  	  «ENDIF»
				  	  	  	}
				  	  	  «ENDFOR»
				  	  	  ]
				  	  «ENDIF»  
				  	}    					  	
				  «ENDFOR»
				  ]
			«ENDIF»			 
			«IF !experiment.designExecutions.isNullOrEmpty»
				,
				"blocks":[
				  «FOR execution:experiment.designExecutions SEPARATOR ","»				  
				  	{
				  	"applications":[
				  	
				  	«FOR i:(0..experiment.experimentalDesign.runs-1) SEPARATOR ","»
				  	  «FOR pre: execution.preProcessing SEPARATOR "," AFTER "," »
				  	  «generateApplicationJson(pre, "pre"+"_"+pre.name+"_"+execution.taskName+"_"+i)»
				  	  «ENDFOR»
				  	  «generateApplicationJson(execution, execution.taskName+"_"+i)»
				  	  «FOR post: execution.postProcessing BEFORE "," SEPARATOR "," »
				  	    «generateApplicationJson(post, "post"+"_"+post.name+"_"+execution.taskName+"_"+i)»
				  	  «ENDFOR»
				  	«ENDFOR»
				  	]  
				  	}
				  «ENDFOR»
				  ]  
			«ENDIF»
			«IF experiment.infrastructure.onFinish!==null»
				,
				"on-finish": "«experiment.infrastructure.onFinish.typeName»"
			«ENDIF»
			}	
		'''

	}
	
	protected def Object generateApplicationJson(ExecutionDTO2 execution, String taskName)
		'''
						  		{
						  		  "name": "«taskName»",
						  		  "command-line": "«execution.cmd»"
						  		  «IF execution.timeout!==null»
						  		  	, 
						  		  	"timeout": «execution.timeout»
						  		  «ENDIF»
						  		  «IF execution.preconditions!==null»
						  		  	,
						  		  	"preconditions":{
						  		  	  "packages":[ 
						  		  	  «FOR pack:execution.preconditions.packages SEPARATOR ","»
						  		  	  	"«pack»"
						  		  	  «ENDFOR»
						  		  	  ]
						  		  	}
						  		  «ENDIF»
						  		  «IF!execution.files.isNullOrEmpty»				    
						  		  	,
						  		  	"files":[
						  		  	«FOR file:execution.files SEPARATOR ","»
						  		  		{
						  		  		"name": "«file.name»",
						  		  		"source": "«file.source»",
						  		  		«IF file.dest===null»
						  		  			"dest": "/opt/dohko/files/«file.name»",
						  		  		«ELSE»
						  		  			"dest": "«file.dest»",
						  		  		«ENDIF»
						  		  		«IF file.checksum!==null»
						  		  			"checksum": "«file.checksum»",
						  		  		«ENDIF»
						  		  		"generated": «IF file.generated»"Y"«ELSE»"N"«ENDIF»
						  		  		} 
						  			«ENDFOR»
						  			]
						  		«ENDIF»
						  		} 
						  	'''
	

}
