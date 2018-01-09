package br.unb.autoexp.generator.dohko

import br.unb.autoexp.autoExp.Experiment
import br.unb.autoexp.generator.ExperimentalDesignGenerator
import javax.inject.Inject

class DohkoGenerator {
@Inject extension ExperimentalDesignGenerator 

	def compileDohko(Experiment experiment) {
		'''
			---
			name: "«experiment.name»"
			description: "«IF experiment.description!==null»«experiment.description»«ENDIF»"
			user:
			  username: "«experiment.infrastructure.user.username»"
			  «IF !experiment.infrastructure.user.keys.isNullOrEmpty»
			  keys:
			  «ENDIF»
			    «FOR key:experiment.infrastructure.user.keys»
			    - name: "«key.name»"
			      «IF key.privateKey!==null»
			      private-key-material: "«key.privateKey»"
			      «ENDIF»
			      «IF key.privateKey!==null»
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
				      - name: "«execution.taskName»_«i»"
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
				     «ENDFOR»  
				  «ENDFOR»  
			«ENDIF»
			«IF experiment.infrastructure.onFinish!==null»
				on-finish: "«experiment.infrastructure.onFinish.typeName»"
			«ENDIF»
		'''

	}
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
				      {
				        "name": "«execution.taskName»_«i»",
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

}
