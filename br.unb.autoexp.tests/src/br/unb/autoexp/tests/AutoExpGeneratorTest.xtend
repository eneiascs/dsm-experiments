package br.unb.autoexp.tests

import br.unb.autoexp.dohko.parser.ApplicationDescriptorConverter
import br.unb.autoexp.tests.helper.AutoExpGeneratorTestHelper
import com.google.inject.Inject
import org.eclipse.xtext.testing.InjectWith
import org.eclipse.xtext.testing.XtextRunner
import org.junit.Test
import org.junit.runner.RunWith

@RunWith(XtextRunner)
@InjectWith(AutoExpInjectorProvider)
class AutoExpGeneratorTest {
	@Inject extension AutoExpGeneratorTestHelper
	@Inject extension ApplicationDescriptorConverter
	
	@Test
	def void testGeneratedDohkoCode() {
		'''
			Experiment reanaSpl {
			
			  description "Reliability Analysis of Software Product Lines" 
			     
			  Research Hypotheses {
			  	RH1 {time featureFamily = featureProduct},
			  	RH2 {memoryConsumption featureFamily < featureProduct}
			  	
			  }
			  Experimental Design {
			    Dependent Variables {
			      time { description "Analysis time" scaleType Absolute },
			      memoryConsumption { description "Memory Consumption" scaleType Absolute }
				}    
				 
				Factors { 
					strategy { description "Analysis Strategy" scaleType Nominal},
					computer { description "Computer" scaleType Nominal}   
					} 
					
					Treatments { 
					  featureFamily description "" factor strategy execution cpuinfo,
					  featureProduct description "" factor strategy execution cpuinfo,
					  familyProduct description "" factor strategy execution cpuinfo,
					  micro description "" factor computer execution cpuinfo,
					  large description "" factor computer execution cpuinfo
					   	  		
				
				}
				Objects { lift description "",bsn description ""} 	
				}
				Executions { 
					cpuinfo { 
						command "cat /proc/cpuinfo"
						preconditions {
							"reana-spl",
							"param"
						}	
					}
				}					 
				Infrastructure {
					user {
						username "user" 
						keys { 
							"key" {privateKey "xxx" publicKey "yyy" fingerprint "zzz"},
							"key2" {privateKey "xxx2" publicKey "yyy2" fingerprint "zzz2"}
						}	
					}
					requirements {
						cpu 1
						memory 2
						platform LINUX
						cost 0.2
						number-of-instances-per-cloud 1
					}
					preconditions {
						"docker",
						"java"
					}							
					clouds{
						"ec2"{
						  provider "amazon" {maxResourcePerType 2  description "description" serviceClass "Service class"}
						  access-key "65AA31A0E92741A2"
						  secret-key "619770ECE1D5492886D80B44E3AA2970"
						  regions {"us-east-1" {endpoint "endpoint" status UP city "City" geographicRegion 5 zones {"name" "status"}}}
						  instanceTypes {"micro" instances 1,"large" instances 1}
						},
						"ec3"{
						   provider "amazon3" 
						   access-key "65AA31A0E92741A2"
						  secret-key "619770ECE1D5492886D80B44E3AA2970"
						}
					}		
					on-finish NONE
					
				}
			}
		''' => [
			val applicationDescriptor = '''
				---
				name: "reanaSpl"
				user:
				  username: "user"
				  keys:
				    key:
				    - name: "key"
				      private-key-material: "xxx"
				      public-key-material: "yyy"
				      fingerprint: "zzz"
				    - name: "key2"
				      private-key-material: "xxx2"
				      public-key-material: "yyy2"
				      fingerprint: "zzz2"
				requirements:
				  cpu: 1
				  memory: 2
				  platform: "LINUX"
				  cost: 0.2
				  number-of-instances-per-cloud: 1
				preconditions:
				  packages:
				  - docker
				  - java
				clouds:
				  cloud:
				  - name: "ec2"
				    provider:
				      name: "amazon"
				      max-resource-per-type: 2
				      description: "description"
				      service-class: "Service class"
				    access-key:
				      access-key: "65AA31A0E92741A2"
				      secret-key: "619770ECE1D5492886D80B44E3AA2970"
				    region:
				    - name: "us-east-1"
				      endpoint: "endpoint"
				      status: UP
				      city: "City"
				      geographic-region: 5
				      zone:
				      - name: "name"
				        status: "status"
				    instance-types:
				      instance-type:
				      - name: "micro"
				        number-of-instances: 1
				      - name: "large"
				        number-of-instances: 1
				  - name: "ec3"
				    provider:
				      name: "amazon3"
				    access-key:
				      access-key: "65AA31A0E92741A2"
				      secret-key: "619770ECE1D5492886D80B44E3AA2970"
				applications:
				  application:
				  - name: "FACTORIAL_strategy_featureFamily_lift"
				    command-line: "cat /proc/cpuinfo"
				    preconditions:
				      packages:
				      - reana-spl
				      - param
				  - name: "FACTORIAL_strategy_featureFamily_bsn"
				    command-line: "cat /proc/cpuinfo"
				    preconditions:
				      packages:
				      - reana-spl
				      - param
				  - name: "FACTORIAL_strategy_featureProduct_lift"
				    command-line: "cat /proc/cpuinfo"
				    preconditions:
				      packages:
				      - reana-spl
				      - param
				  - name: "FACTORIAL_strategy_featureProduct_bsn"
				    command-line: "cat /proc/cpuinfo"
				    preconditions:
				      packages:
				      - reana-spl
				      - param
				on-finish: "NONE"
			'''
			assertCompilesToWithFileExtension(applicationDescriptor,".yml")
			applicationDescriptor.convert

		]
	}

	@Test
	def void testGeneratedDohkoCode2() {
		'''
			Experiment reanaSpl {
			
			  description "Reliability Analysis of Software Product Lines" 
			     
			  Research Hypotheses {
			  	RH1 {time featureFamily = featureProduct},
			  	RH2 {memoryConsumption featureFamily < featureProduct}
			  	
			  }
			  Experimental Design {
			    Dependent Variables {
			      time { description "Analysis time" scaleType Absolute },
			      memoryConsumption { description "Memory Consumption" scaleType Absolute }
				}    
				 
				Factors { 
					strategy { description "Analysis Strategy" scaleType Nominal},
					computer { description "Computer" scaleType Nominal}   
					} 
					
					Treatments { 
					  featureFamily description "" factor strategy execution cpuinfo,
					  featureProduct description "" factor strategy execution cpuinfo,
					  familyProduct description "" factor strategy execution cpuinfo,
					  micro description "" factor computer execution cpuinfo,
					  large description "" factor computer execution cpuinfo
					   	  		
				
				}
				Objects {lift description "",bsn description ""} 	
				}
				Executions { 
					cpuinfo { 
						command "cat /proc/cpuinfo"
					}
				}	
				Infrastructure {
					user{
					  username "user"
					}
					
				}
			}
		''' => [
			val applicationDescriptor = '''
				---
				name: "reanaSpl"
				user:
				  username: "user"
				applications:
				  application:
				  - name: "FACTORIAL_strategy_featureFamily_lift"
				    command-line: "cat /proc/cpuinfo"
				  - name: "FACTORIAL_strategy_featureFamily_bsn"
				    command-line: "cat /proc/cpuinfo"
				  - name: "FACTORIAL_strategy_featureProduct_lift"
				    command-line: "cat /proc/cpuinfo"
				  - name: "FACTORIAL_strategy_featureProduct_bsn"
				    command-line: "cat /proc/cpuinfo"
			'''
				assertCompilesToWithFileExtension(applicationDescriptor,".yml")
			applicationDescriptor.convert

		]
	}

	@Test
	def void testGeneratedDohkoCodeApplications() {
		'''
			Experiment reanaSpl {
			
			  description "Reliability Analysis of Software Product Lines" 
			     
			  Research Hypotheses {
			  	RH1 {time featureFamily = featureProduct}
			  }
			  Experimental Design {
			  	Dependent Variables {
			  	   time { description "Analysis time" scaleType Absolute },
			  	   memoryConsumption { description "Memory Consumption" scaleType Absolute }
				}    
				 
				Factors { 
					strategy { description "Analysis Strategy" scaleType Nominal},
					computer { description "Computer" scaleType Nominal}   
					} 
					
					Treatments { 
					 featureFamily description "Feature Family" factor strategy execution helloWorldFeatureFamily,
					 featureProduct description "Feature Product" factor strategy execution helloWorldFeatureProduct,
					 family description "Family" factor strategy execution helloWorldFamily,
					 familyProduct description "Family Product" factor strategy execution helloWorldFamilyProduct
					   	  		
				
				}
				Objects {lift description "",bsn description ""} 	
				}
				Executions { helloWorldFeatureFamily { 
						
						command "echo 'Hello World Feature Family'"
						preconditions {
							"java"
							 }
						},
						 helloWorldFeatureProduct { 
						
						command "echo 'Hello World Feature Product'" 
												
						},
						 helloWorldFamily { 
						
						command "echo 'Hello World Family'" 
												
						} 
						,
						 helloWorldFamilyProduct { 
						
						command "echo 'Hello World Family Product'" 										
						} 
						
					}
				Infrastructure {
					user{
						username "user"
					}
					
				}
			}
		''' => [
			val applicationDescriptor = '''
				---
				name: "reanaSpl"
				user:
				  username: "user"
				applications:
				  application:
				  - name: "FACTORIAL_strategy_featureFamily_lift"
				    command-line: "echo 'Hello World Feature Family'"
				    preconditions:
				      packages:
				      - java
				  - name: "FACTORIAL_strategy_featureFamily_bsn"
				    command-line: "echo 'Hello World Feature Family'"
				    preconditions:
				      packages:
				      - java
				  - name: "FACTORIAL_strategy_featureProduct_lift"
				    command-line: "echo 'Hello World Feature Product'"
				  - name: "FACTORIAL_strategy_featureProduct_bsn"
				    command-line: "echo 'Hello World Feature Product'"
			'''
			assertCompilesToWithFileExtension(applicationDescriptor,".yml")
			applicationDescriptor.convert

		]
	}

	@Test
	def void testGeneratedDohkoCodeApplicationsParametersName() {
		'''
			Experiment reanaSpl {
			
			  description "Reliability Analysis of Software Product Lines" 
			     
			  Research Hypotheses {
			  	RH1 {time featureFamily = featureProduct},
			  	RH2 {memoryConsumption featureFamily = family}, 
			  	RH3 {memoryConsumption featureFamily = familyProduct}
			  }
			  Experimental Design {
			    Dependent Variables {
			      time { description "Analysis time" scaleType Absolute },
			      memoryConsumption { description "Memory Consumption" scaleType Absolute }
				}    
				 
				Factors { 
					strategy { description "Analysis Strategy" scaleType Nominal},
					computer { description "Computer" scaleType Nominal}   
					} 
					
					Treatments { 
					 featureFamily description "" factor strategy parameters{ argument "Feature Family"} execution helloWorld,
					 featureProduct description "" factor strategy parameters{ argument "Feature Product"} execution helloWorld,
					 family description "" factor strategy parameters{argument "Family"} execution helloWorld,
					 familyProduct description "" factor strategy parameters{ argument "Family Product"} execution helloWorld
					   	  		
				
				}
				Objects {lift description "",bsn description ""} 	
				}
				Executions { helloWorld { 
						
						command "echo 'Hello World ${treatment.name}'"
						}
						
					}
				Infrastructure {
					user{
						username "user"
					}
					
				}
			}
		''' => [
			val applicationDescriptor = '''
				---
				name: "reanaSpl"
				user:
				  username: "user"
				applications:
				  application:
				  - name: "FACTORIAL_strategy_featureFamily_lift"
				    command-line: "echo 'Hello World featureFamily'"
				  - name: "FACTORIAL_strategy_featureFamily_bsn"
				    command-line: "echo 'Hello World featureFamily'"
				  - name: "FACTORIAL_strategy_featureProduct_lift"
				    command-line: "echo 'Hello World featureProduct'"
				  - name: "FACTORIAL_strategy_featureProduct_bsn"
				    command-line: "echo 'Hello World featureProduct'"
				  - name: "FACTORIAL_strategy_family_lift"
				    command-line: "echo 'Hello World family'"
				  - name: "FACTORIAL_strategy_family_bsn"
				    command-line: "echo 'Hello World family'"
				  - name: "FACTORIAL_strategy_familyProduct_lift"
				    command-line: "echo 'Hello World familyProduct'"
				  - name: "FACTORIAL_strategy_familyProduct_bsn"
				    command-line: "echo 'Hello World familyProduct'"
			'''
				assertCompilesToWithFileExtension(applicationDescriptor,".yml")
			applicationDescriptor.convert
		]
	}
	@Test
	def void testGeneratedDohkoCodeApplicationsParametersDescription() {
		'''
			Experiment reanaSpl {
			
			  description "Reliability Analysis of Software Product Lines" 
			     
			  Research Hypotheses {
			  	RH1 {time featureFamily = featureProduct},
			  	RH2 {memoryConsumption featureFamily = family}, 
			  	RH3 {memoryConsumption featureFamily = familyProduct}
			  }
			  Experimental Design {
			    Dependent Variables {
			      time { description "Analysis time" scaleType Absolute },
			      memoryConsumption { description "Memory Consumption" scaleType Absolute }
				}    
				 
				Factors { 
					strategy { description "Analysis Strategy" scaleType Nominal},
					computer { description "Computer" scaleType Nominal}   
					} 
					
					Treatments { 
					 featureFamily description "Feature Family" factor strategy parameters{ argument "Feature Family"} execution helloWorld,
					 featureProduct description "Feature Product" factor strategy parameters{ argument "Feature Product"} execution helloWorld,
					 family description "Family" factor strategy parameters{argument "Family"} execution helloWorld,
					 familyProduct description "Family Product" factor strategy parameters{ argument "Family Product"} execution helloWorld
					   	  		
				
				}
				Objects {lift description "Lift",bsn description "BSN"} 	
				}
				Executions { helloWorld { 
						
						command "echo 'Hello World ${treatment.description} ${object.description}'"
						}
						
					}
				Infrastructure {
					user{
						username "user"
					}
					
				}
			}
		''' => [
			val applicationDescriptor = '''
				---
				name: "reanaSpl"
				user:
				  username: "user"
				applications:
				  application:
				  - name: "FACTORIAL_strategy_featureFamily_lift"
				    command-line: "echo 'Hello World Feature Family Lift'"
				  - name: "FACTORIAL_strategy_featureFamily_bsn"
				    command-line: "echo 'Hello World Feature Family BSN'"
				  - name: "FACTORIAL_strategy_featureProduct_lift"
				    command-line: "echo 'Hello World Feature Product Lift'"
				  - name: "FACTORIAL_strategy_featureProduct_bsn"
				    command-line: "echo 'Hello World Feature Product BSN'"
				  - name: "FACTORIAL_strategy_family_lift"
				    command-line: "echo 'Hello World Family Lift'"
				  - name: "FACTORIAL_strategy_family_bsn"
				    command-line: "echo 'Hello World Family BSN'"
				  - name: "FACTORIAL_strategy_familyProduct_lift"
				    command-line: "echo 'Hello World Family Product Lift'"
				  - name: "FACTORIAL_strategy_familyProduct_bsn"
				    command-line: "echo 'Hello World Family Product BSN'"
			'''
				assertCompilesToWithFileExtension(applicationDescriptor,".yml")
			applicationDescriptor.convert
		]
	}
	@Test
	def void testGeneratedDohkoCodeApplicationsParametersArgument() {
		'''
			Experiment reanaSpl {
			
			  description "Reliability Analysis of Software Product Lines" 
			     
			  Research Hypotheses {
			  	RH1 {time featureFamily = featureProduct},
			  	RH2 {memoryConsumption featureFamily = family}, 
			  	RH3 {memoryConsumption featureFamily = familyProduct}
			  }
			  Experimental Design {
			    Dependent Variables {
			      timeConsumption { description "Analysis time" scaleType Absolute },
			      memoryConsumption { description "Memory Consumption" scaleType Absolute }
				}    
				 
				Factors { 
					strategy { description "Analysis Strategy" scaleType Nominal},
					computer { description "Computer" scaleType Nominal}   
					} 
					
					Treatments { 
					 featureFamily description ""  factor strategy parameters{ argument "Feature Family"} execution helloWorld,
					 featureProduct description "" factor strategy parameters{ argument "Feature Product"} execution helloWorld,
					 family description "" factor strategy parameters{argument "Family"} execution helloWorld,
					 familyProduct description "" factor strategy parameters{ argument "Family Product"} execution helloWorld
					   	  		
				
				}
				Objects {lift description ""} 	
				}
				Executions { helloWorld { 
						
						command "echo 'Hello World ${treatment.parameter.argument}'"
						}
						
					}
				Infrastructure {
					user{
						username "user"
					}
					
				}
			}
		''' => [
			val applicationDescriptor = '''
				---
				name: "reanaSpl"
				user:
				  username: "user"
				applications:
				  application:
				  - name: "FACTORIAL_strategy_featureFamily_lift"
				    command-line: "echo 'Hello World Feature Family'"
				  - name: "FACTORIAL_strategy_featureProduct_lift"
				    command-line: "echo 'Hello World Feature Product'"
				  - name: "FACTORIAL_strategy_family_lift"
				    command-line: "echo 'Hello World Family'"
				  - name: "FACTORIAL_strategy_familyProduct_lift"
				    command-line: "echo 'Hello World Family Product'"
			'''
				assertCompilesToWithFileExtension(applicationDescriptor,".yml")
			applicationDescriptor.convert
		]
	}

	@Test
	def void testGeneratedDohkoCodeApplicationsParametersNameAndArgument() {
		'''
			Experiment reanaSpl {
			
			  description "Reliability Analysis of Software Product Lines" 
			     
			  Research Hypotheses {
			  	RH1 {time featureFamily = featureProduct},
			  	RH2 {memoryConsumption featureFamily = family}, 
			  	RH3 {memoryConsumption featureFamily = familyProduct}
			  }
			  Experimental Design {
			    Dependent Variables {
			      time { description "Analysis time" scaleType Absolute },
			      memoryConsumption { description "Memory Consumption" scaleType Absolute }
				}    
				 
				Factors { 
					strategy { description "Analysis Strategy" scaleType Nominal},
					computer { description "Computer" scaleType Nominal}   
					} 
					
					Treatments { 
					 featureFamily description ""  factor strategy parameters{argument "Feature Family"} execution helloWorld,
					 featureProduct description "" factor strategy parameters{argument "Feature Product"} execution helloWorld,
					 family description "" factor strategy parameters{argument "Family"} execution helloWorld,
					 familyProduct description "" factor strategy parameters{argument "Family Product"} execution helloWorld
					   	  		
				
				}
				Objects {lift description "",bsn description ""} 	
				}
				Executions { helloWorld { 
						
						command "echo 'Hello World ${treatment.name}: ${treatment.parameter.argument}'"
						}
						
					}
				Infrastructure {
					user{
						username "user"
					}
					
				}
			}
		''' => [
			val applicationDescriptor = '''
				---
				name: "reanaSpl"
				user:
				  username: "user"
				applications:
				  application:
				  - name: "FACTORIAL_strategy_featureFamily_lift"
				    command-line: "echo 'Hello World featureFamily: Feature Family'"
				  - name: "FACTORIAL_strategy_featureFamily_bsn"
				    command-line: "echo 'Hello World featureFamily: Feature Family'"
				  - name: "FACTORIAL_strategy_featureProduct_lift"
				    command-line: "echo 'Hello World featureProduct: Feature Product'"
				  - name: "FACTORIAL_strategy_featureProduct_bsn"
				    command-line: "echo 'Hello World featureProduct: Feature Product'"
				  - name: "FACTORIAL_strategy_family_lift"
				    command-line: "echo 'Hello World family: Family'"
				  - name: "FACTORIAL_strategy_family_bsn"
				    command-line: "echo 'Hello World family: Family'"
				  - name: "FACTORIAL_strategy_familyProduct_lift"
				    command-line: "echo 'Hello World familyProduct: Family Product'"
				  - name: "FACTORIAL_strategy_familyProduct_bsn"
				    command-line: "echo 'Hello World familyProduct: Family Product'"
			'''
				assertCompilesToWithFileExtension(applicationDescriptor,".yml")
			applicationDescriptor.convert
		]
	}

	@Test
	def void testGeneratedDohkoCodeApplicationsParametersObject() {
		'''
			Experiment reanaSpl {
			
			  description "Reliability Analysis of Software Product Lines" 
			     
			  Research Hypotheses {
			  	RH1 {time featureFamily = featureProduct}
			  }
			  Experimental Design {
			    Dependent Variables {
			      time { description "Analysis time" scaleType Absolute }
				}    
				 
				Factors { 
					strategy { description "Analysis Strategy" scaleType Nominal},
					computer { description "Computer" scaleType Nominal}   
					} 
					
					Treatments { 
					 featureFamily description "" factor strategy parameters{argument "Feature Family"} execution helloWorld,
					 featureProduct description "" factor strategy parameters{argument "Feature Product"} execution helloWorld
					 
				
				}
				Objects { 
					intercloud description "" parameters {
						featureModel "intercloud/0.txt",umlModel "intercloud/0_behavioral_model.xml"} ,
					lift description "" parameters {
						featureModel "lift/0.txt",umlModel "lift/0_behavioral_model.xml"} 
					} 	
				}
				Executions { helloWorld { 
					command "echo 'Hello World ${treatment.name}: ${treatment.parameter.argument} Object:${object.name} featureModel: ${object.parameter.featureModel} umlModel: ${object.parameter.umlModel}'" 
									 }
									 
									}
				Infrastructure {
					user{
						username "user"
					}
					
				}
			}
		''' => [
			val applicationDescriptor = '''
				---
				name: "reanaSpl"
				user:
				  username: "user"
				applications:
				  application:
				  - name: "FACTORIAL_strategy_featureFamily_intercloud"
				    command-line: "echo 'Hello World featureFamily: Feature Family Object:intercloud featureModel: intercloud/0.txt umlModel: intercloud/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_featureFamily_lift"
				    command-line: "echo 'Hello World featureFamily: Feature Family Object:lift featureModel: lift/0.txt umlModel: lift/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_featureProduct_intercloud"
				    command-line: "echo 'Hello World featureProduct: Feature Product Object:intercloud featureModel: intercloud/0.txt umlModel: intercloud/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_featureProduct_lift"
				    command-line: "echo 'Hello World featureProduct: Feature Product Object:lift featureModel: lift/0.txt umlModel: lift/0_behavioral_model.xml'"
			'''
				assertCompilesToWithFileExtension(applicationDescriptor,".yml")
			applicationDescriptor.convert
		]
	}

	@Test
	def void testGeneratedDohkoCodeParametersResult() {
		'''
			Experiment reanaSpl {
			
			  description "Reliability Analysis of Software Product Lines" 
			     
			  Research Hypotheses {
			  	RH1 {time featureFamily = featureProduct}
			  }
			  Experimental Design {
			    Dependent Variables {
			      time { description "Analysis time" scaleType Absolute }
				}    
				 
				Factors { 
					strategy { description "Analysis Strategy" scaleType Nominal}
					} 
					
					Treatments { 
					 featureFamily  description "" factor strategy parameters{argument "Feature Family"} execution helloWorld,
					 featureProduct description "" factor strategy parameters{argument "Feature Product"} execution helloWorld
					 
				
				}
				Objects { 
					intercloud description "", lift  description ""	
					}
				}
				Executions { helloWorld { 
					command "echo 'Hello World ${treatment.name} ${object.name}'" result {name "results" path "$HOME/results/${object.name}_results.json"}
									 }
									 
									
				}					
				Infrastructure {
					user{
						username "user"
					}
					
				}
			}
		''' => [
			val applicationDescriptor = '''
				---
				name: "reanaSpl"
				user:
				  username: "user"
				applications:
				  application:
				  - name: "FACTORIAL_strategy_featureFamily_intercloud"
				    command-line: "echo 'Hello World featureFamily intercloud' >> ${results}"
				    files:
				    - name: "results"
				      path: "$HOME/results/intercloud_results.json"
				      generated: "Y"
				  - name: "FACTORIAL_strategy_featureFamily_lift"
				    command-line: "echo 'Hello World featureFamily lift' >> ${results}"
				    files:
				    - name: "results"
				      path: "$HOME/results/lift_results.json"
				      generated: "Y"
				  - name: "FACTORIAL_strategy_featureProduct_intercloud"
				    command-line: "echo 'Hello World featureProduct intercloud' >> ${results}"
				    files:
				    - name: "results"
				      path: "$HOME/results/intercloud_results.json"
				      generated: "Y"
				  - name: "FACTORIAL_strategy_featureProduct_lift"
				    command-line: "echo 'Hello World featureProduct lift' >> ${results}"
				    files:
				    - name: "results"
				      path: "$HOME/results/lift_results.json"
				      generated: "Y"
			'''
				assertCompilesToWithFileExtension(applicationDescriptor,".yml")
			applicationDescriptor.convert
		]
	}

	@Test
	def void testGeneratedDohkoFiles() {
		'''
			Experiment ssearch36 {
				
				  description "Reliability Analysis of Software Product Lines" 
				     
				  Research Hypotheses {
				  	RH1 {score query1 = query2}
				  }
				  Experimental Design {
				    Dependent Variables {
				      score { description "Analysis time" scaleType Absolute }
					}    
					 
					Factors { 
						query { description "Query" scaleType Nominal}
						} 
						
						Treatments { 
						 query1 description "" factor query files {{name "database" path "$HOME/uniprot_sprot.fasta"}} execution ssearch36,
						 query2 description "" factor query files {{name "database" path "$HOME/uniprot_sprot.fasta"}} execution ssearch36
						 
					
					}
					Objects { 
						O60341 description "" files {{name "query" path "$HOME/sequences/O60341.fasta"}} 
					}
					
					}
					Executions { 
						ssearch36 { 
							command "ssearch36 -d 0 ${object.file.query} ${treatment.file.database}" result {name "score_table" path "$HOME/scores/${object.name}_scores.txt"}
							}
					}
					Infrastructure {
						user{
						  username "user"
						  keys { 
						  	"key"
						  }	
						}  
					}
				}
		''' => [
			val applicationDescriptor = '''
				---
				name: "ssearch36"
				user:
				  username: "user"
				  keys:
				    key:
				    - name: "key"
				applications:
				  application:
				  - name: "FACTORIAL_query_query1_O60341"
				    command-line: "ssearch36 -d 0 ${query} ${database} >> ${score_table}"
				    files:
				    - name: "score_table"
				      path: "$HOME/scores/O60341_scores.txt"
				      generated: "Y"
				    - name: "query"
				      path: "$HOME/sequences/O60341.fasta"
				      generated: "N"
				    - name: "database"
				      path: "$HOME/uniprot_sprot.fasta"
				      generated: "N"
				  - name: "FACTORIAL_query_query2_O60341"
				    command-line: "ssearch36 -d 0 ${query} ${database} >> ${score_table}"
				    files:
				    - name: "score_table"
				      path: "$HOME/scores/O60341_scores.txt"
				      generated: "Y"
				    - name: "query"
				      path: "$HOME/sequences/O60341.fasta"
				      generated: "N"
				    - name: "database"
				      path: "$HOME/uniprot_sprot.fasta"
				      generated: "N"
			'''
			assertCompilesToWithFileExtension(applicationDescriptor,".yml")
			applicationDescriptor.convert
		]
	}

	@Test
	def void testGeneratedDohkoDistinctFiles() {
		'''
			Experiment ssearch36 {
				
				  description "Reliability Analysis of Software Product Lines" 
				     
				  Research Hypotheses {
				  	RH1 {score query1 = query2}
				  }
				  Experimental Design {
				    Dependent Variables {
				      score { description "Analysis time" scaleType Absolute }
					}    
					 
					Factors { 
						query { description "Query" scaleType Nominal}
						} 
						
						Treatments { 
						 query1 description ""  factor query files {{name "database" path "$HOME/uniprot_sprot.fasta"}} execution ssearch36,
						 query2 description "" factor query files {{name "database" path "$HOME/uniprot_sprot2.fasta"}} execution ssearch36
						 
					
					}
					Objects { 
						O60341 description "" files {{name "query" path "$HOME/sequences/O60341.fasta"}},
						O60342 description "" files {{name "query" path "$HOME/sequences/O60342.fasta"}} 
					}
					
					}
					Executions { 
						ssearch36 { 
							command "ssearch36 -d 0 ${object.file.query} ${treatment.file.database}"
							}
					}
					Infrastructure {
						user{
						  username "user"
						  keys { 
						  	"key"
						  }	
						}  
					}
				}
		''' => [
			val applicationDescriptor = '''
				---
				name: "ssearch36"
				user:
				  username: "user"
				  keys:
				    key:
				    - name: "key"
				applications:
				  application:
				  - name: "FACTORIAL_query_query1_O60341"
				    command-line: "ssearch36 -d 0 ${query} ${database}"
				    files:
				    - name: "query"
				      path: "$HOME/sequences/O60341.fasta"
				      generated: "N"
				    - name: "database"
				      path: "$HOME/uniprot_sprot.fasta"
				      generated: "N"
				  - name: "FACTORIAL_query_query1_O60342"
				    command-line: "ssearch36 -d 0 ${query} ${database}"
				    files:
				    - name: "query"
				      path: "$HOME/sequences/O60342.fasta"
				      generated: "N"
				    - name: "database"
				      path: "$HOME/uniprot_sprot.fasta"
				      generated: "N"
				  - name: "FACTORIAL_query_query2_O60341"
				    command-line: "ssearch36 -d 0 ${query} ${database}"
				    files:
				    - name: "query"
				      path: "$HOME/sequences/O60341.fasta"
				      generated: "N"
				    - name: "database"
				      path: "$HOME/uniprot_sprot2.fasta"
				      generated: "N"
				  - name: "FACTORIAL_query_query2_O60342"
				    command-line: "ssearch36 -d 0 ${query} ${database}"
				    files:
				    - name: "query"
				      path: "$HOME/sequences/O60342.fasta"
				      generated: "N"
				    - name: "database"
				      path: "$HOME/uniprot_sprot2.fasta"
				      generated: "N"
			'''
				assertCompilesToWithFileExtension(applicationDescriptor,".yml")
			applicationDescriptor.convert
		]
	}

	@Test
	def void testGeneratedDohkoFilesExecution() {
		'''
			Experiment ssearch36 {
			
			  description "Reliability Analysis of Software Product Lines" 
			     
			  Research Hypotheses {
			  	RH1 {score query1 = query2}
			  }
			  Experimental Design {
			    Dependent Variables {
			      score { description "Analysis time" scaleType Absolute }
				}    
				 
				Factors { 
					query { description "Query" scaleType Nominal}
					} 
					
					Treatments { 
					 query1 description "" factor query execution ssearch36,
					 query2 description "" factor query execution ssearch36
					 
				
				}
				Objects { 
					O60341  description ""
				}
				
				}
				Executions { 
					ssearch36 { 
						command "ssearch36 -d 0 ${execution.file.query} ${execution.file.database}" 
						result {name "score_table" path "$HOME/scores/${object.name}_scores.txt"}
						files {
							{name "database" path "$HOME/uniprot_sprot.fasta"},
							{name "query" path "$HOME/sequences/O60341.fasta"}
						}
						}
				}
				Infrastructure {
					user{
					  username "user"
					  keys { 
						"key"
						 }	
					}  
				}
			}
		''' => [
			val applicationDescriptor = '''
				---
				name: "ssearch36"
				user:
				  username: "user"
				  keys:
				    key:
				    - name: "key"
				applications:
				  application:
				  - name: "FACTORIAL_query_query1_O60341"
				    command-line: "ssearch36 -d 0 ${query} ${database} >> ${score_table}"
				    files:
				    - name: "score_table"
				      path: "$HOME/scores/O60341_scores.txt"
				      generated: "Y"
				    - name: "query"
				      path: "$HOME/sequences/O60341.fasta"
				      generated: "N"
				    - name: "database"
				      path: "$HOME/uniprot_sprot.fasta"
				      generated: "N"
				  - name: "FACTORIAL_query_query2_O60341"
				    command-line: "ssearch36 -d 0 ${query} ${database} >> ${score_table}"
				    files:
				    - name: "score_table"
				      path: "$HOME/scores/O60341_scores.txt"
				      generated: "Y"
				    - name: "query"
				      path: "$HOME/sequences/O60341.fasta"
				      generated: "N"
				    - name: "database"
				      path: "$HOME/uniprot_sprot.fasta"
				      generated: "N"
			'''
				assertCompilesToWithFileExtension(applicationDescriptor,".yml")
			applicationDescriptor.convert
		]

	}

	@Test
	def void testGeneratedDohkoFilesReanaSpl() {
		'''
Experiment reanaSpl {
			
			  description "Reliability Analysis of Software Product Lines" 
			     
			  Research Hypotheses {
			  	RH1 {time featureFamily = featureProduct},
			  	RH8 {memoryConsumption featureFamily = product}
			  }
			  Experimental Design {
			    Dependent Variables {
			      time { description "Analysis time" scaleType Absolute },
			      memoryConsumption { description "Memory Consumption" scaleType Absolute }
				}    
				 
				Factors { 
					strategy { description "Analysis Strategy" scaleType Nominal}
					} 
					
				 Treatments { 
					 featureFamily description ""  factor strategy parameters{argument "Feature-family-based"} execution reanaEvaluator,
					 featureProduct description "" factor strategy parameters{argument "Feature-product-based"} execution reanaEvaluator,
					 family description "" factor strategy parameters{argument "Family-based"} execution reanaEvaluator,
					 familyProduct description "" factor strategy parameters{argument "Family-product-based"} execution reanaEvaluator,
					 product description "" factor strategy parameters{argument "Product-based"} execution reanaEvaluator
					 
				
				}
				Objects { 
					intercloud description "" parameters {
						featureModel "intercloud/0.txt",umlModel "intercloud/0_behavioral_model.xml"},
					lift description "" parameters {
						featureModel "lift/0.txt",umlModel "lift/0_behavioral_model.xml"}, 
					 
					bsn description "" parameters {
						featureModel "bsn/0.txt",umlModel "bsn/0_behavioral_model.xml"}, 	 
					eMail description "" parameters {
						featureModel "email/0.txt",umlModel "email/0_behavioral_model.xml"}, 	 
					tankwar description "" parameters {
						featureModel "tankwar/0.txt",umlModel "tankwar/0_behavioral_model.xml"}, 	 
					minepump description "" parameters {
						featureModel "minepump/0.txt",umlModel "minepump/0_behavioral_model.xml"} 	 
							
				}}
				Executions { 
					reanaEvaluator { 
						command "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh '${treatment.parameter.argument}' '${object.name}' 1 11 'mongodb://localhost:27017/'" 
						}
				}
				Infrastructure {
					user{
					  username "user"
					  keys { 
					    "key"
					  }	

					}  
				}
			}
		''' => [
			val applicationDescriptor = '''
				---
				name: "reanaSpl"
				user:
				  username: "user"
				  keys:
				    key:
				    - name: "key"
				applications:
				  application:
				  - name: "FACTORIAL_strategy_featureFamily_intercloud"
				    command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Feature-family-based' 'intercloud' 1 11 'mongodb://localhost:27017/'"
				  - name: "FACTORIAL_strategy_featureFamily_lift"
				    command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Feature-family-based' 'lift' 1 11 'mongodb://localhost:27017/'"
				  - name: "FACTORIAL_strategy_featureFamily_bsn"
				    command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Feature-family-based' 'bsn' 1 11 'mongodb://localhost:27017/'"
				  - name: "FACTORIAL_strategy_featureFamily_eMail"
				    command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Feature-family-based' 'eMail' 1 11 'mongodb://localhost:27017/'"
				  - name: "FACTORIAL_strategy_featureFamily_tankwar"
				    command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Feature-family-based' 'tankwar' 1 11 'mongodb://localhost:27017/'"
				  - name: "FACTORIAL_strategy_featureFamily_minepump"
				    command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Feature-family-based' 'minepump' 1 11 'mongodb://localhost:27017/'"
				  - name: "FACTORIAL_strategy_featureProduct_intercloud"
				    command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Feature-product-based' 'intercloud' 1 11 'mongodb://localhost:27017/'"
				  - name: "FACTORIAL_strategy_featureProduct_lift"
				    command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Feature-product-based' 'lift' 1 11 'mongodb://localhost:27017/'"
				  - name: "FACTORIAL_strategy_featureProduct_bsn"
				    command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Feature-product-based' 'bsn' 1 11 'mongodb://localhost:27017/'"
				  - name: "FACTORIAL_strategy_featureProduct_eMail"
				    command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Feature-product-based' 'eMail' 1 11 'mongodb://localhost:27017/'"
				  - name: "FACTORIAL_strategy_featureProduct_tankwar"
				    command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Feature-product-based' 'tankwar' 1 11 'mongodb://localhost:27017/'"
				  - name: "FACTORIAL_strategy_featureProduct_minepump"
				    command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Feature-product-based' 'minepump' 1 11 'mongodb://localhost:27017/'"
				  - name: "FACTORIAL_strategy_product_intercloud"
				    command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Product-based' 'intercloud' 1 11 'mongodb://localhost:27017/'"
				  - name: "FACTORIAL_strategy_product_lift"
				    command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Product-based' 'lift' 1 11 'mongodb://localhost:27017/'"
				  - name: "FACTORIAL_strategy_product_bsn"
				    command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Product-based' 'bsn' 1 11 'mongodb://localhost:27017/'"
				  - name: "FACTORIAL_strategy_product_eMail"
				    command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Product-based' 'eMail' 1 11 'mongodb://localhost:27017/'"
				  - name: "FACTORIAL_strategy_product_tankwar"
				    command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Product-based' 'tankwar' 1 11 'mongodb://localhost:27017/'"
				  - name: "FACTORIAL_strategy_product_minepump"
				    command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Product-based' 'minepump' 1 11 'mongodb://localhost:27017/'"
			'''
				assertCompilesToWithFileExtension(applicationDescriptor,".yml")
			applicationDescriptor.convert
		]
	}
	@Test
	def void testDesignRestrictions() {
		'''
Experiment reanaSpl {

	
	 description "Reliability Analysis" 
	 				 
	 Research Hypotheses {
	 	rh1 {time featureFamily = product description ""},
	 	rh2 {time featureFamily = featureProduct description ""},
	 	rh3 {time featureFamily = family description ""},
	 	rh4 {time featureFamily = familyProduct description ""}
	 	
	 	
	 	}
	 	
	 	Experimental Design {
	 	   runs 2 
	 	  Dependent Variables {
	 	  time { description "Analysis time" scaleType Absolute }
	 	  
	 	  
	 	  
	 }    
	  
	 Factors {
	 	strategy { description "Analysis Strategy" scaleType Nominal}
	 	
	 	} 
	 	
	 	Treatments {
	 	featureFamily description "Feature Family"  factor strategy parameters{argument "arg"} execution reanaEvaluator,	
	 	featureProduct description "Feature Product"  factor strategy parameters{argument "arg"} execution reanaEvaluator,	
	 	family description ""  factor strategy parameters{argument "arg"} execution reanaEvaluator,	
	 	familyProduct description ""  factor strategy parameters{argument "arg"} execution reanaEvaluator,
	 	product description ""  factor strategy parameters{argument "arg"} execution reanaEvaluator	
	 	}
	 Objects { 
	 	intercloud description "Intercloud" parameters {
	 		featureModel "intercloud/0.txt",umlModel "intercloud/0_behavioral_model.xml"},
	 	lift description "Lift" parameters {
	 		featureModel "lift/0.txt",umlModel "lift/0_behavioral_model.xml"}, 
	 		
	 	bsn description "BSN" parameters {
	 		featureModel "bsn/0.txt",umlModel "bsn/0_behavioral_model.xml"}, 	 
	 	eMail description "Email" parameters {
	 		featureModel "email/0.txt",umlModel "email/0_behavioral_model.xml"}, 	 
	 	tankwar description "Tank War" parameters {
	 		featureModel "tankwar/0.txt",umlModel "tankwar/0_behavioral_model.xml"}, 	 
	 	minepump description "Minepump" parameters {
	 		featureModel "minepump/0.txt",umlModel "minepump/0_behavioral_model.xml"} 	 
	 			
	 }
	 Restrictions {
	 	 	  	product objects {bsn},
	 	 	  	product objects {eMail},
	 	 	  	family objects{intercloud,minepump},
	 	 	  	featureProduct objects {lift,bsn},
	 	 	  	familyProduct objects {bsn,eMail,minepump}
	 }
	 
	 }
	 Executions { 
	 	reanaEvaluator { 
	 		command "java -jar reanaSpl.jar --analysis-strategy='${treatment.parameter.argument}' --feature-model='${object.parameter.featureModel}' --uml-model='${object.parameter.umlModel}'" 
	 		
	 		files {
	 		    {name "featureModel" path "${object.parameter.featureModel}"},
	 		    { name "umlModel" path "${object.parameter.umlModel}" }
	 		    
	 		}
	 		   
	 	}
	 		
	 		
	 }
	 Infrastructure {
	 	user{
	 	  username "vagrant"
	 	  	 
	 	  	    
	 	}
	 	 
	 }
	}
		''' => [
			val applicationDescriptor = '''
				---
				name: "reanaSpl"
				user:
				  username: "vagrant"
				applications:
				  application:
				  - name: "FACTORIAL_strategy_featureFamily_intercloud"
				    command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='intercloud/0.txt' --uml-model='intercloud/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_featureFamily_intercloud"
				    command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='intercloud/0.txt' --uml-model='intercloud/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_featureFamily_lift"
				    command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='lift/0.txt' --uml-model='lift/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_featureFamily_lift"
				    command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='lift/0.txt' --uml-model='lift/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_featureFamily_bsn"
				    command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='bsn/0.txt' --uml-model='bsn/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_featureFamily_bsn"
				    command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='bsn/0.txt' --uml-model='bsn/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_featureFamily_eMail"
				    command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='email/0.txt' --uml-model='email/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_featureFamily_eMail"
				    command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='email/0.txt' --uml-model='email/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_featureFamily_tankwar"
				    command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='tankwar/0.txt' --uml-model='tankwar/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_featureFamily_tankwar"
				    command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='tankwar/0.txt' --uml-model='tankwar/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_featureFamily_minepump"
				    command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='minepump/0.txt' --uml-model='minepump/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_featureFamily_minepump"
				    command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='minepump/0.txt' --uml-model='minepump/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_product_bsn"
				    command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='bsn/0.txt' --uml-model='bsn/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_product_bsn"
				    command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='bsn/0.txt' --uml-model='bsn/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_product_eMail"
				    command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='email/0.txt' --uml-model='email/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_product_eMail"
				    command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='email/0.txt' --uml-model='email/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_featureProduct_lift"
				    command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='lift/0.txt' --uml-model='lift/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_featureProduct_lift"
				    command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='lift/0.txt' --uml-model='lift/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_featureProduct_bsn"
				    command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='bsn/0.txt' --uml-model='bsn/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_featureProduct_bsn"
				    command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='bsn/0.txt' --uml-model='bsn/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_family_intercloud"
				    command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='intercloud/0.txt' --uml-model='intercloud/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_family_intercloud"
				    command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='intercloud/0.txt' --uml-model='intercloud/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_family_minepump"
				    command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='minepump/0.txt' --uml-model='minepump/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_family_minepump"
				    command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='minepump/0.txt' --uml-model='minepump/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_familyProduct_bsn"
				    command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='bsn/0.txt' --uml-model='bsn/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_familyProduct_bsn"
				    command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='bsn/0.txt' --uml-model='bsn/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_familyProduct_eMail"
				    command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='email/0.txt' --uml-model='email/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_familyProduct_eMail"
				    command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='email/0.txt' --uml-model='email/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_familyProduct_minepump"
				    command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='minepump/0.txt' --uml-model='minepump/0_behavioral_model.xml'"
				  - name: "FACTORIAL_strategy_familyProduct_minepump"
				    command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='minepump/0.txt' --uml-model='minepump/0_behavioral_model.xml'"
			'''
			assertCompilesToWithFileExtension(applicationDescriptor, ".yml")
			applicationDescriptor.convert
		]
	}
}
