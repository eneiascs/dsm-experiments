package br.unb.autoexp.tests

import br.unb.autoexp.autoExp.AutoExpPackage
import br.unb.autoexp.autoExp.Model
import br.unb.autoexp.validation.AutoExpValidator
import com.google.inject.Inject
import org.eclipse.xtext.testing.InjectWith
import org.eclipse.xtext.testing.XtextRunner
import org.eclipse.xtext.testing.util.ParseHelper
import org.eclipse.xtext.testing.validation.ValidationTestHelper
import org.junit.Test
import org.junit.runner.RunWith

@RunWith(XtextRunner)
@InjectWith(AutoExpInjectorProvider)
class AutoExpValidatorTest {

	@Inject extension ParseHelper<Model>
	@Inject extension ValidationTestHelper



	@Test
	def void testValidExperimentComplete(){
		'''
			Experiment reanaSpl {
			
				Authors {author1 {fullName "Author1 Full Name" institution "University of Bras�lia" email "author1@unb.br"},author2 {fullName "Author2 Full Name" institution "University of Bras�lia" email "author2@unb.br"}}
			
			  description "Reliability Analysis of Software Product Lines" 
			 Abstract {
			     context "Model checking techniques have been applied to ensure software systems achieve desired quality levels and fulfill functional and non-functional requirements. However, applying these techniques to software product lines is a challenging task, given the exponential blowup of the number of products. Current product-line model checking techniques leverage symbolic model checking and variability information to optimize the analysis, but still face limitations that make them costly or even infeasible for some product lines." 
			     objective "The objectives of this paper are the following: a) present a method to efficiently analyze the reliability of software product lines, b) provide a tool that implements the proposed method, and c) report on an empirical study comparing the performance of reliability analysis strategies."
			     method "We present a feature-family-based strategy to analyze the reliability of software product lines. Our approach limits the effort needed to compute the reliability of a product line by employing a divide-and-conquer strategy. The feature-based analysis step divides the behavioral models into smaller units, which can be model checked more efficiently and facilitates the reuse of reliability computations for redundant behaviors. The familybased step performs the reliability computation for all configurations at once by evaluating reliability expressions in terms of a suitable variational data structure."
			     results "The empirical results show that our feature-family-based strategy significantly outperforms other state-of-the-art analysis strategies in terms of time and space, being the only one that could be scaled to a 2 20 -fold increase in the size of the configuration space."
			     conclusion "Our feature-family-based strategy leverages both featureand family-based strategies by taming the size of the models to be analyzed and by avoiding the products enumeration inherent to some state-of-the-art analysis methods."
			 } 
			 Keywords { "SPL", "Software Product Lines"}
			 Goals {goal1 {object "Object" technique "Technique" quality "Quality"  ptView "ptView" contextOf "contextOf"},goal2 "Goal 2"}
			 
			 Research Questions { question1 { description  "Research Question 1" goal goal1}, question2 { description "Question 2"}} 			     
			  Research Hypotheses {
			  	RH1 {time featureFamily = featureProduct},
			  	RH2 {memoryConsumption featureFamily < featureProduct}, 
			  	RH3 {memoryConsumption featureFamily != familyProduct},
			  	RH4 {memoryConsumption micro > large}
			  	
			  }
			  Experimental Design {
			    type FACTORIAL
			    runs 1
			  }
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
					  micro description "" factor  computer execution cpuinfo,
					  large description "" factor computer execution cpuinfo
					   	  		
				
				}
				Objects {description "SPL" scaleType Nominal { intercloud {description ""},lift {description ""},bsn {description ""}}}	
				
				Executions { 
					cpuinfo { 
						command "cat /proc/cpuinfo"
					}
				}
				Analysis analysis {significance 0.01}	
									 
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
		'''.parse.assertNoIssues
	}

	@Test
	def void testValidExperimentSimpleInfrastructure() {
		'''
			Experiment reanaSpl {
				
				description "Reliability Analysis of Software Product Lines" 
				
				Research Hypotheses {
					RH1 {time featureFamily = featureProduct},
					RH2 {memoryConsumption featureFamily < featureProduct}, 
					RH3 {memoryConsumption featureFamily != familyProduct},
					RH4 {memoryConsumption micro > large}
					}
					Experimental Design {
						runs 1
					}
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
							Objects {description "SPL" scaleType Nominal { intercloud {description ""},lift {description ""},bsn {description ""}}} 	
							
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
		'''.parse.assertNoIssues
	}

	@Test
	def void testValidExperimentParameter() {
		val testInput = '''
			Experiment reanaSpl {
			
			  description "Reliability Analysis of Software Product Lines" 
			     
			  Research Hypotheses {
			  	RH1 {time featureFamily = featureProduct}
			  }
			  Experimental Design {
			   runs 1
			  }
			    Dependent Variables {
			      time { description "Analysis time" scaleType Absolute }
				}    
				 
				Factors { 
					strategy { description "Analysis Strategy" scaleType Nominal}
					} 
					
					Treatments { 
					   featureFamily description "" factor strategy parameters{ argument "Feature Family"} execution helloWorld,
					   featureProduct description "" factor strategy parameters{ argument "Feature Product"} execution helloWorld
					   	  		
				
				}
				Objects {description "SPL" scaleType Nominal { 
					intercloud  {description "" parameters {
						featureModel "intercloud/0.txt",umlModel "intercloud/0_behavioral_model.xml"}} ,
					lift {description "" parameters {
						featureModel "lift/0.txt",umlModel "lift/0_behavioral_model.xml"}} 
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
		'''
		testInput.parse.assertNoIssues
	}

	@Test
	def void testSameTreatmentComparison() {
		val testInput = '''
			Experiment reanaSpl {
			
			  description "Reliability Analysis of Software Product Lines" 
			     
			  Research Hypotheses {
			  	RH1 {time featureFamily = featureFamily}
			  }
			  Experimental Design {
			   runs 1
			  }
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
					  family description "" factor strategy execution cpuinfo,
					  familyProduct description "" factor strategy execution cpuinfo,
					  product description "" factor strategy execution cpuinfo,
					  micro description "" factor computer execution cpuinfo,
					  large description "" factor computer execution cpuinfo
					   	  		
				
				}
				Objects {description "SPL" scaleType Nominal { intercloud {description ""},lift {description ""},Email {description ""},bsn {description ""}}} 	
				
				Executions { 
					cpuinfo { 
					 	command "cat /proc/cpuinfo"
					}
				}	
				Infrastructure {
					user {
						username "user"
					}	
				}
							
				
			}
		'''
		testInput.parse => [
			assertError(AutoExpPackage.eINSTANCE.researchHypothesisFormula, AutoExpValidator.SAME_TREATMENT_COMPARISON,
				"Comparison must be done between distinct treatments")
			assertError(AutoExpPackage.eINSTANCE.researchHypothesisFormula, AutoExpValidator.SAME_TREATMENT_COMPARISON,
				testInput.lastIndexOf("featureFamily}"), "featureFamily".length)
		]
	}
	@Test
	def void testSameInstrument() {
		val testInput = '''
				Experiment reanaSpl {
					
					  description "Reliability Analysis of Software Product Lines" 
					     
					  Research Hypotheses {
					  	RH1 {time featureFamily = featureProduct},
					  	RH2 {memoryConsumption featureFamily = featureProduct}
					  }
					  Experimental Design {
					   runs 1
					  }
					    Dependent Variables {
					      time { description "Analysis time" scaleType Absolute instrument timeInstrument},
					      memoryConsumption { description "Memory Consumption" scaleType Absolute instrument timeInstrument}
						}    
						 Instruments {
						 	timeInstrument {command  "/usr/bin/time -v"  valueExpression "Total analysis time:"}
						} 
						Factors { 
							strategy { description "Analysis Strategy" scaleType Nominal}
							} 
							
							Treatments { 
							  featureFamily description "" factor strategy execution featureFamilyExecutor,
							  featureProduct description "" factor strategy execution featureProductExecutor
							   	  		
						
						}
						Objects {description "SPL" scaleType Nominal { intercloud {description ""}}} 	
						
						Executions { 
							featureFamilyExecutor { 
							 	command "java -jar reana-spl.jar --analysis-strategy = FEATURE_FAMILY --feature-model = ${object.parameter.spl}/models/0.txt --uml-models = ${object.parameter.spl}/models/0_behavioral_model.xml "
							},
							featureProductExecutor { 
							 	command "java -jar reana-spl.jar --analysis-strategy = FEATURE_PRODUCT --feature-model = ${object.parameter.spl}/models/0.txt --uml-models = ${object.parameter.spl}/models/0_behavioral_model.xml "
							} 
						}	
						Infrastructure {
							user {
								username "user"
							}	
						}
									
						
					}
		'''
		testInput.parse => [
			assertError(AutoExpPackage.eINSTANCE.dependentVariable, AutoExpValidator.SAME_INSTRUMENT,
				"Dependent variables 'time' and 'memoryConsumption' have the same instrument")
			assertError(AutoExpPackage.eINSTANCE.dependentVariable, AutoExpValidator.SAME_INSTRUMENT,
				testInput.lastIndexOf("memoryConsumption"), "memoryConsumption".length)
		]
	}
	@Test
	def void testSameInstrumentCommand() {
		val testInput = '''
					Experiment reanaSpl {
						
						  description "Reliability Analysis of Software Product Lines" 
						     
						  Research Hypotheses {
						  	RH1 {time featureFamily = featureProduct},
						  	RH2 {memoryConsumption featureFamily = featureProduct}
						  }
						  Experimental Design {
						   runs 1
						  }
						    Dependent Variables {
						      time { description "Analysis time" scaleType Absolute instrument timeInstrument},
						      memoryConsumption { description "Memory Consumption" scaleType Absolute instrument memoryInstrument}
							}    
							 Instruments {
							 	timeInstrument {command  "/usr/bin/time -v"  valueExpression "Total analysis time:"},
							 	memoryInstrument {command  "/usr/bin/time -v"  valueExpression "Total analysis time:"}
							 } 
							Factors { 
								strategy { description "Analysis Strategy" scaleType Nominal}
								} 
								
								Treatments { 
								  featureFamily description "" factor strategy execution featureFamilyExecutor,
								  featureProduct description "" factor strategy execution featureProductExecutor
								   	  		
							
							}
							Objects {description "SPL" scaleType Nominal { intercloud {description ""}}} 	
							
							Executions { 
								featureFamilyExecutor { 
								 	command "java -jar reana-spl.jar --analysis-strategy = FEATURE_FAMILY --feature-model = ${object.parameter.spl}/models/0.txt --uml-models = ${object.parameter.spl}/models/0_behavioral_model.xml "
								},
								featureProductExecutor { 
								 	command "java -jar reana-spl.jar --analysis-strategy = FEATURE_PRODUCT --feature-model = ${object.parameter.spl}/models/0.txt --uml-models = ${object.parameter.spl}/models/0_behavioral_model.xml "
								} 
							}	
							Infrastructure {
								user {
									username "user"
								}	
							}
										
							
						}
		'''
		testInput.parse => [
			assertError(AutoExpPackage.eINSTANCE.instrument, AutoExpValidator.SAME_INSTRUMENT_COMMAND,
				"Instruments 'timeInstrument' and 'memoryInstrument' have the same commands and expressions")
			assertError(AutoExpPackage.eINSTANCE.instrument, AutoExpValidator.SAME_INSTRUMENT_COMMAND,
				testInput.lastIndexOf("memoryInstrument"), "memoryInstrument".length)
		]
	}
	@Test
	def void testTreatmentSameParameter() {
		val testInput = '''
			Experiment reanaSpl {
						
						  description "Reliability Analysis of Software Product Lines" 
						     
						  Research Hypotheses {
						  	RH1 {time featureFamily = featureProduct},
						  	RH2 {memoryConsumption featureFamily = featureProduct}
						  }
						  Experimental Design {
						   runs 1
						  }
						    Dependent Variables {
						      time { description "Analysis time" scaleType Absolute instrument timeInstrument},
						      memoryConsumption { description "Memory Consumption" scaleType Absolute instrument memoryInstrument}
							}    
							 Instruments {
				                timeInstrument {command  "/usr/bin/time -v"  valueExpression "Total analysis time:"},
				                memoryInstrument {command  "/usr/bin/time -v"  valueExpression "memory:"}
				            } 
							Factors { 
								strategy { description "Analysis Strategy" scaleType Nominal}
								} 
								
								Treatments { 
								  featureFamily description "" factor strategy parameters {strategy "FEATURE_FAMILY"} execution executor,
								  featureProduct description "" factor strategy parameters {strategy "FEATURE_FAMILY"} execution executor
								   	  		
							
							}
							Objects {description "SPL" scaleType Nominal { intercloud {description ""}}} 	
							
							Executions { 
								executor { 
								 	command "java -jar reana-spl.jar --analysis-strategy = ${treatment.parameter.strategy} --feature-model = ${object.parameter.spl}/models/0.txt --uml-models = ${object.parameter.spl}/models/0_behavioral_model.xml "
								}
							}	
							Infrastructure {
								user {
									username "user"
								}	
							}
										
							
						}
		'''
		testInput.parse => [
			assertError(AutoExpPackage.eINSTANCE.treatment, AutoExpValidator.SAME_TREATMENT_PARAMETER,
				"Treatments 'featureFamily' and 'featureProduct' have the same parameter 'strategy'")
			assertError(AutoExpPackage.eINSTANCE.treatment, AutoExpValidator.SAME_TREATMENT_PARAMETER,
				testInput.lastIndexOf("featureProduct"), "featureProduct".length)
		]
	}
	@Test
	def void testObjectSameParameter() {
		val testInput = '''
					Experiment reanaSpl {
						
						  description "Reliability Analysis of Software Product Lines" 
						     
						  Research Hypotheses {
						  	RH1 {time featureFamily = featureProduct},
						  	RH2 {memoryConsumption featureFamily = featureProduct}
						  }
						  Experimental Design {
						   runs 1
						  }
						    Dependent Variables {
						      time { description "Analysis time" scaleType Absolute instrument timeInstrument},
						      memoryConsumption { description "Memory Consumption" scaleType Absolute instrument memoryInstrument}
							}    
							 Instruments {
							 	timeInstrument {command  "/usr/bin/time -v"  valueExpression "Total analysis time:"},
							 	memoryInstrument {command  "/usr/bin/time -v"  valueExpression "memory:"}
							 } 
							Factors { 
								strategy { description "Analysis Strategy" scaleType Nominal}
								} 
								
								Treatments { 
								  featureFamily description "" factor strategy parameters {strategy "FEATURE_FAMILY"} execution executor,
								  featureProduct description "" factor strategy parameters {strategy "FEATURE_PRODUCT"} execution executor
								   	  		
							
							}
							Objects {description "SPL" scaleType Nominal { 
							    intercloud {description "" parameters {spl "intercloud"}},
							    bsn {description "" parameters {spl "intercloud"}} 
							}} 	
							
							Executions { 
								executor { 
								 	command "java -jar reana-spl.jar --analysis-strategy = ${treatment.parameter.strategy} --feature-model = ${object.parameter.spl}/models/0.txt --uml-models = ${object.parameter.spl}/models/0_behavioral_model.xml "
								}
							}	
							Infrastructure {
								user {
									username "user"
								}	
							}
										
							
						}

		'''
		testInput.parse => [
			assertError(AutoExpPackage.eINSTANCE.experimentalObject, AutoExpValidator.SAME_OBJECT_PARAMETER,
				"Objects 'intercloud' and 'bsn' have the same parameter 'spl'")
			assertError(AutoExpPackage.eINSTANCE.experimentalObject, AutoExpValidator.SAME_OBJECT_PARAMETER,
				testInput.lastIndexOf("bsn"), "bsn".length)
		]
	}
	@Test
	def void testDistinctFactors() {
		val testInput = '''
			Experiment reanaSpl {
			
			  description "Reliability Analysis of Software Product Lines" 
			     
			  Research Hypotheses {
			  	RH1 {time featureFamily = micro}
			  }
			  Experimental Design {
			   runs 1
			  }  
			    Dependent Variables {
			      time { description "Analysis time" scaleType Absolute },
			      memoryConsumption { description "Memory Consumption" scaleType Absolute }
				}    
				 
				Factors { 
					strategy { description "Analysis Strategy" scaleType Nominal},
					computer { description "Computer" scaleType Nominal}  
					} 
					
					Treatments { 
					  featureFamily description ""  factor strategy execution cpuinfo,
					  featureProduct description "" factor strategy execution cpuinfo,
					  family description "" factor strategy execution cpuinfo,
					  familyProduct description "" factor strategy execution cpuinfo,
					  product description "" factor strategy execution cpuinfo,
					  micro description "" factor computer execution cpuinfo,
					  large description "" factor computer execution cpuinfo
					   	  		
				
				}
				Objects {description "SPL" scaleType Nominal { intercloud {description ""},lift {description ""},Email {description ""},bsn {description ""}}} 	
								
				Executions { 
				  cpuinfo { 
				  command "cat /proc/cpuinfo"
					}
				}	
				
			}
		'''
		testInput.parse => [
			assertError(AutoExpPackage.eINSTANCE.researchHypothesisFormula,
				AutoExpValidator.TREATMENT_FROM_DISTINCT_FACTORS,
				"Treatments 'featureFamily' and 'micro' do not belong to the same factor")
				assertError(AutoExpPackage.eINSTANCE.researchHypothesisFormula,
					AutoExpValidator.TREATMENT_FROM_DISTINCT_FACTORS, testInput.lastIndexOf("micro}"), "micro".length)

			]
		}

		@Test
		def void testSameFormula() {
			val testInput = '''
				Experiment reanaSpl {
				
				  description "Reliability Analysis of Software Product Lines" 
				     
				  Research Hypotheses {
				  	RH1 {time featureFamily = featureProduct},
				  	RH2 {time featureFamily = featureProduct}
				  }
				  Experimental Design {
				  	runs 1
				  }
				    Dependent Variables {
				      time { description "Analysis time" scaleType Absolute }
					}    
					 
					Factors { 
						strategy { description "Analysis Strategy" scaleType Nominal}
						} 
						
						Treatments { 
						  featureFamily description "" factor strategy execution cpuinfo,
						  featureProduct description "" factor strategy execution cpuinfo
						   	  		
					
					}
					Objects {description "SPL" scaleType Nominal { intercloud {description ""},lift {description ""},Email {description ""},bsn {description ""}}} 	
							
					Executions { 
					  cpuinfo { 
					  command "cat /proc/cpuinfo"
						}
					}
				}
			'''
			testInput.parse => [
				assertWarning(AutoExpPackage.eINSTANCE.researchHypothesis, AutoExpValidator.SAME_FORMULA,
					"Hyphoteses 'RH1' and 'RH2' have the same formula")
				assertWarning(AutoExpPackage.eINSTANCE.researchHypothesis, AutoExpValidator.SAME_FORMULA,
					testInput.indexOf("time featureFamily = featureProduct"),
					"time featureFamily = featureProduct".length)
					assertWarning(AutoExpPackage.eINSTANCE.researchHypothesis, AutoExpValidator.SAME_FORMULA,
						"Hyphoteses 'RH2' and 'RH1' have the same formula")
					assertWarning(AutoExpPackage.eINSTANCE.researchHypothesis, AutoExpValidator.SAME_FORMULA,
						testInput.lastIndexOf("time featureFamily = featureProduct"),
						"time featureFamily = featureProduct".length)

				]
			}

			@Test
			def void testDependentVariableNeverUsed() {
				val testInput = '''
					Experiment reanaSpl {
										
										  description "Reliability Analysis of Software Product Lines" 
										     
										  Research Hypotheses {
										  	RH1 {time featureFamily = featureProduct}
										  }
										  Experimental Design {
										  	runs 1
										  } 
										   Dependent Variables {
										      time { description "Analysis time" scaleType Absolute },
										      memoryConsumption { description "Memory Consumption" scaleType Absolute }
											}    
											 
											Factors { 
												strategy { description "Analysis Strategy" scaleType Nominal},
												computer { description "Computer" scaleType Nominal}  
												} 
												
												Treatments { 
												  featureFamily description ""  factor strategy execution cpuinfo,
												  featureProduct description "" factor strategy execution cpuinfo
												   	  		
											
											}
											Objects {description "SPL" scaleType Nominal { intercloud {description ""},lift {description ""},Email {description ""},bsn {description ""}}} 	
											
												
										Executions { 
										  cpuinfo { 
										  command "cat /proc/cpuinfo"
											}
										}
										}
				'''
				testInput.parse => [
					assertWarning(AutoExpPackage.eINSTANCE.dependentVariable, AutoExpValidator.DEPENDENT_VARIABLE_NEVER_USED,
						"Dependent variable 'memoryConsumption' is never used")
					assertWarning(AutoExpPackage.eINSTANCE.dependentVariable, AutoExpValidator.DEPENDENT_VARIABLE_NEVER_USED,
						testInput.indexOf("memoryConsumption"), "memoryConsumption".length)
				]

			}

			@Test
			def void testFactorNeverUsed() {
				val testInput = '''
					Experiment reanaSpl {
					
					  description "Reliability Analysis of Software Product Lines" 
					     
					  Research Hypotheses {
					  	RH1 {time featureFamily = featureProduct}
					  }
					  Experimental Design {
					  	runs 1
					  }  
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
							  featureProduct description "" factor strategy execution cpuinfo
							   	  		
						
						}
						Objects {description "SPL" scaleType Nominal { intercloud {description ""},lift {description ""},email {description ""},bsn {description ""}}} 	
					Executions { 
					  cpuinfo { 
					  command "cat /proc/cpuinfo"
					}
					}
					}
					
				'''
				testInput.parse => [
					assertWarning(AutoExpPackage.eINSTANCE.factor, AutoExpValidator.FACTOR_NEVER_USED,
						"Factor 'computer' is never used")
					assertWarning(AutoExpPackage.eINSTANCE.factor, AutoExpValidator.FACTOR_NEVER_USED,
						testInput.indexOf("computer"), "computer".length)
				]

			}

			@Test
			def void testTreatmentNeverUsed() {
				val testInput = '''
					Experiment reanaSpl {
					
					  description "Reliability Analysis of Software Product Lines" 
					     
					  Research Hypotheses {
					  	RH1 {time featureFamily = featureProduct}
					  }
					  Experimental Design {
					  
					  }  
					    
					    Dependent Variables {
					      time { description "Analysis time" scaleType Absolute }
						}    
						 
						Factors { 
							strategy { description "Analysis Strategy" scaleType Nominal}
							} 
							
							Treatments { 
							  featureFamily description "" factor strategy execution cpuinfo,
							  featureProduct description "" factor strategy execution cpuinfo,
							  product description "" factor strategy execution cpuinfo
							   	  		
						
						}
						Objects {description "SPL" scaleType Nominal { intercloud {description ""},lift {description ""},email {description ""},bsn {description ""}}} 	
					Executions { 
										  cpuinfo { 
										  command "cat /proc/cpuinfo"
										}
										}
										}
				'''
				testInput.parse => [
					assertWarning(AutoExpPackage.eINSTANCE.treatment, AutoExpValidator.TREATMENT_NEVER_USED,
						"Treatment 'product' is never used")
					assertWarning(AutoExpPackage.eINSTANCE.treatment, AutoExpValidator.TREATMENT_NEVER_USED,
						testInput.indexOf("product"), "product".length)
				]
			}

			@Test
			def void testExecutionNeverUsed() {
				val testInput = '''
					Experiment reanaSpl {
										
										  description "Reliability Analysis of Software Product Lines" 
										     
										  Research Hypotheses {
										  	RH1 {time featureFamily = featureProduct}
										  }
										  Experimental Design {
										      runs 1
										  }  
										    Dependent Variables {
										      time { description "Analysis time" scaleType Absolute }
											}    
											 
											Factors { 
												strategy { description "Analysis Strategy" scaleType Nominal}
												} 
												
												Treatments{ 
												   featureFamily description "" factor strategy parameters{ argument "Feature Family"} execution helloWorld,
												   featureProduct description "" factor strategy parameters{ argument "Feature Product"} execution helloWorld
												   	  		
											
											}
											Objects {description "SPL" scaleType Nominal { intercloud {description ""},lift {description ""},Email {description ""},bsn {description ""}}} 	
											
											Executions { helloWorld { 
																	
											 	command "echo 'Hello World ${treatment.parameter.argument}'"
											 	 },
											 	 cpuinfo { 
											 	    command "cat /proc/cpuinfo"
											 	 }	 
											 	}
										}
				'''
				testInput.parse => [
					assertWarning(AutoExpPackage.eINSTANCE.execution, AutoExpValidator.EXECUTION_NEVER_USED,
						"Execution 'cpuinfo' is never used")
					assertWarning(AutoExpPackage.eINSTANCE.execution, AutoExpValidator.EXECUTION_NEVER_USED,
						testInput.indexOf("cpuinfo"), "cpuinfo".length)
				]
			}

			@Test
			def void testInvalidTreatment() {
				val testInput = '''
					Experiment reanaSpl {
					
					  description "Reliability Analysis of Software Product Lines" 
					     
					  Research Hypotheses {
					  	RH1 {time featureFamily = featureProduct}
					  }
					  Experimental Design {
					    runs 1
					  }  
					    Dependent Variables {
					      time { description "Analysis time" scaleType Absolute }
						}    
						 
						Factors { 
							strategy { description "Analysis Strategy" scaleType Nominal}
							} 
							
							Treatments { 
							   featureFamily description ""  factor strategy parameters{ argument "Feature Family"} execution helloWorld,
							   featureProduct description "" factor strategy parameters{ argument "Feature Product"} execution helloWorld
							   	  		
						
						}
						Objects {description "SPL" scaleType Nominal { 
							intercloud {description "" parameters {
								featureModel "intercloud/0.txt",umlModel "intercloud/0_behavioral_model.xml"}} ,
							lift {description "" parameters {
								featureModel "lift/0.txt",umlModel "lift/0_behavioral_model.xml"}} 
							} 	
						}
						Executions { helloWorld { 
							command "echo 'Hello World ${treatment2.name}: ${treatment.parameter.argument} Object:${object.name} featureModel: ${object.parameter.featureModel} umlModel: ${object.parameter.umlModel}'"
							},
							cpuinfo { 
													command "echo " 
													}
															 
						}			}
				'''
				testInput.parse => [
					assertError(AutoExpPackage.eINSTANCE.execution, AutoExpValidator.INVALID_PARAMETER,
						"Parameter '${treatment2.name}' cannot be resolved")
					assertError(AutoExpPackage.eINSTANCE.execution, AutoExpValidator.INVALID_PARAMETER,
						testInput.indexOf(
							"echo 'Hello World ${treatment2.name}: ${treatment.parameter.argument} Object:${object.name} featureModel: ${object.parameter.featureModel} umlModel: ${object.parameter.umlModel}'") -
							1,
						"echo 'Hello World ${treatment2.name}: ${treatment.parameter.argument} Object:${object.name} featureModel: ${object.parameter.featureModel} umlModel: ${object.parameter.umlModel}'".
							length + 2)
				]
			}

			@Test
			def void testValidParameters() {
				val testInput = '''
					Experiment reanaSpl {
					
					  description "Reliability Analysis of Software Product Lines" 
					     
					  Research Hypotheses {
					  	RH1 {time featureFamily = featureProduct}
					  }
					  Experimental Design {
					  	runs 1
					  }
					    Dependent Variables {
					      time { description "Analysis time" scaleType Absolute }
						}    
						 
						Factors { 
							strategy { description "Analysis Strategy" scaleType Nominal}
							} 
							
							Treatments { 
							   featureFamily  description "" factor strategy parameters{ argument "Feature Family"} execution helloWorld,
							   featureProduct description "" factor strategy parameters{ argument "Feature Product"} execution helloWorld
							   	  		
						
						}
						Objects {description "SPL" scaleType Nominal { 
							intercloud {description "" parameters {
								featureModel "intercloud/0.txt",umlModel "intercloud/0_behavioral_model.xml"}} ,
							lift {description "" parameters {
								featureModel "lift/0.txt",umlModel "lift/0_behavioral_model.xml"}} 
							} 	
						}
						Executions { helloWorld { 
							command "echo 'Hello World ${treatment.name}: ${treatment.parameter.argument} Object:${object.name} featureModel: ${object.parameter.featureModel} umlModel: ${object.parameter.umlModel} ${treatment.description} ${object.description}'"
							}
															 
						}			
						
					Infrastructure {
													user{
														username "user"
													}
													
												}	
						}
				'''
				testInput.parse.assertNoIssues
			}

			@Test
			def void testInvalidTreatmentName() {
				val testInput = '''
					Experiment reanaSpl {
					
					  description "Reliability Analysis of Software Product Lines" 
					     
					  Research Hypotheses {
					  	RH1 {time featureFamily = featureProduct}
					  }
					  Experimental Design {
					  runs 1
					  }
					    Dependent Variables {
					      time { description "Analysis time" scaleType Absolute }
						}    
						 
						Factors { 
							strategy { description "Analysis Strategy" scaleType Nominal}
							} 
							
							Treatments { 
							   featureFamily description "" factor strategy parameters{ argument "Feature Family"} execution helloWorld,
							   featureProduct description "" factor strategy parameters{ argument "Feature Product"} execution helloWorld
							   	  		
						
						}
						Objects {description "SPL" scaleType Nominal { 
							intercloud {description "" parameters {
								featureModel "intercloud/0.txt",umlModel "intercloud/0_behavioral_model.xml"} },
							lift {description "" parameters {
								featureModel "lift/0.txt",umlModel "lift/0_behavioral_model.xml"}} 
							} 	
						}
						Executions { helloWorld { 
							command "echo 'Hello World ${treatment.name2}: ${treatment.parameter.argument} Object:${object.name} featureModel: ${object.parameter.featureModel} umlModel: ${object.parameter.umlModel}'" 
							}
															 
						}			}
				'''
				testInput.parse => [
					assertError(AutoExpPackage.eINSTANCE.execution, AutoExpValidator.INVALID_PARAMETER,
						"Parameter '${treatment.name2}' cannot be resolved")
					assertError(AutoExpPackage.eINSTANCE.execution, AutoExpValidator.INVALID_PARAMETER,
						testInput.indexOf("echo") - 1,
						"echo 'Hello World ${treatment.name2}: ${treatment.parameter.argument} Object:${object.name} featureModel: ${object.parameter.featureModel} umlModel: ${object.parameter.umlModel}'".
							length + 2)

				]
			}

			@Test
			def void testInvalidParameter() {
				val testInput = '''
					Experiment reanaSpl {
					
					  description "Reliability Analysis of Software Product Lines" 
					     
					  Research Hypotheses {
					  	RH1 {time featureFamily = featureProduct}
					  }
					  Experimental Design {
					  	runs 1
					  }  
					    Dependent Variables {
					      time { description "Analysis time" scaleType Absolute }
						}    
						 
						Factors { 
							strategy { description "Analysis Strategy" scaleType Nominal}
							} 
							
							Treatments { 
							   featureFamily description "" factor strategy parameters{ argument "Feature Family"} execution helloWorld,
							   featureProduct description "" factor strategy parameters{ argument "Feature Product"} execution helloWorld
							   	  		
						
						}
						Objects {description "SPL" scaleType Nominal { 
							intercloud {description "" parameters {
								featureModel "intercloud/0.txt",umlModel "intercloud/0_behavioral_model.xml"}} ,
							lift {description "" parameters {
								featureModel "lift/0.txt",umlModel "lift/0_behavioral_model.xml"}} 
							} 	
						}
						Executions { helloWorld { 
							command "echo 'Hello World ${treatment.name}: ${treatment.parameter2.argument} Object:${object.name} featureModel: ${object.parameter.featureModel} umlModel: ${object.parameter.umlModel}'" 
							}
															 
						}			}
				'''
				testInput.parse => [
					assertError(AutoExpPackage.eINSTANCE.execution, AutoExpValidator.INVALID_PARAMETER,
						"Parameter '${treatment.parameter2.argument}' cannot be resolved")
					assertError(AutoExpPackage.eINSTANCE.execution, AutoExpValidator.INVALID_PARAMETER,
						testInput.indexOf(
							"echo 'Hello World ${treatment.name}: ${treatment.parameter2.argument} Object:${object.name} featureModel: ${object.parameter.featureModel} umlModel: ${object.parameter.umlModel}'") -
							1,
						"echo 'Hello World ${treatment.name}: ${treatment.parameter2.argument} Object:${object.name} featureModel: ${object.parameter.featureModel} umlModel: ${object.parameter.umlModel}'".
							length + 2)
				]
			}

			@Test
			def void testInvalidParameterName() {
				val testInput = '''
					Experiment reanaSpl {
					
					  description "Reliability Analysis of Software Product Lines" 
					     
					  Research Hypotheses {
					  	RH1 {time featureFamily = featureProduct}
					  }
					  Experimental Design {
					  	runs 1
					  }	
					    Dependent Variables {
					      timeConsumption { description "Analysis time" scaleType Absolute }
						}    
						 
						Factors { 
							strategy { description "Analysis Strategy" scaleType Nominal}
							} 
							
							Treatments { 
							   featureFamily description "Feature Family" factor strategy parameters{ argument "Feature Family"} execution helloWorld,
							   featureProduct description "Feature Product" factor strategy parameters{ argument "Feature Product"} execution helloWorld
							   	  		
						
						}
						Objects {description "SPL" scaleType Nominal { 
							intercloud {description "Intercloud" parameters {
								featureModel "intercloud/0.txt",umlModel "intercloud/0_behavioral_model.xml"}} ,
							lift {description "Lift" parameters {
								featureModel "lift/0.txt",umlModel "lift/0_behavioral_model.xml"}} 
							} 	
						}
						Executions { helloWorld { 
							command "echo 'Hello World ${treatment.name}: ${treatment.parameter.argument2} Object:${object.name} featureModel: ${object.parameter.featureModel} umlModel: ${object.parameter.umlModel}'" 
							}
															 
						}			}
				'''
				testInput.parse => [
					assertError(AutoExpPackage.eINSTANCE.execution, AutoExpValidator.INVALID_PARAMETER,
						"Parameter '${treatment.parameter.argument2}' cannot be resolved")
					assertError(AutoExpPackage.eINSTANCE.execution, AutoExpValidator.INVALID_PARAMETER,
						testInput.indexOf(
							"echo 'Hello World ${treatment.name}: ${treatment.parameter.argument2} Object:${object.name} featureModel: ${object.parameter.featureModel} umlModel: ${object.parameter.umlModel}'") -
							1,
						"echo 'Hello World ${treatment.name}: ${treatment.parameter.argument2} Object:${object.name} featureModel: ${object.parameter.featureModel} umlModel: ${object.parameter.umlModel}'".
							length + 2)
				]
			}

			@Test
			def void testInvalidObject() {
				val testInput = '''
					Experiment reanaSpl {
					
					  description "Reliability Analysis of Software Product Lines" 
					     
					  Research Hypotheses {
					  	RH1 {time featureFamily = featureProduct}
					  }
					  Experimental Design {
					  	runs 1
					  }	
					    Dependent Variables {
					      time { description "Analysis time" scaleType Absolute }
						}    
						 
						Factors { 
							strategy { description "Analysis Strategy" scaleType Nominal}
							} 
							
							Treatments { 
							   featureFamily description ""  factor strategy parameters{ argument "Feature Family"} execution helloWorld,
							   featureProduct description "" factor strategy parameters{ argument "Feature Product"} execution helloWorld
							   	  		
						
						}
						Objects {description "SPL" scaleType Nominal { 
							intercloud {description "" parameters {
								featureModel "intercloud/0.txt",umlModel "intercloud/0_behavioral_model.xml"}} ,
							lift {description "" parameters {
								featureModel "lift/0.txt",umlModel "lift/0_behavioral_model.xml"}} 
							} 	
						}
						Executions { helloWorld { 
							command "echo 'Hello World ${treatment.name}: ${treatment.parameter.argument} Object:${object2.name} featureModel: ${object.parameter.featureModel} umlModel: ${object.parameter.umlModel}'" 
							}
															 
						}			}
				'''
				testInput.parse => [
					assertError(AutoExpPackage.eINSTANCE.execution, AutoExpValidator.INVALID_PARAMETER,
						"Parameter '${object2.name}' cannot be resolved")
					assertError(AutoExpPackage.eINSTANCE.execution, AutoExpValidator.INVALID_PARAMETER,
						testInput.indexOf(
							"echo 'Hello World ${treatment.name}: ${treatment.parameter.argument} Object:${object2.name} featureModel: ${object.parameter.featureModel} umlModel: ${object.parameter.umlModel}'") -
							1,
						"echo 'Hello World ${treatment.name}: ${treatment.parameter.argument} Object:${object2.name} featureModel: ${object.parameter.featureModel} umlModel: ${object.parameter.umlModel}'".
							length + 2)
				]
			}

			@Test
			def void testInvalidObjectName() {
				val testInput = '''
					Experiment reanaSpl {
					
					  description "Reliability Analysis of Software Product Lines" 
					     
					  Research Hypotheses {
					  	RH1 {time featureFamily = featureProduct}
					  }
					  Experimental Design {
					  	runs 1
					  }	
					    Dependent Variables {
					      time { description "Analysis time" scaleType Absolute }
						}    
						 
						Factors { 
							strategy { description "Analysis Strategy" scaleType Nominal}
							} 
							
							Treatments { 
							   featureFamily  description "" factor strategy parameters{ argument "Feature Family"} execution helloWorld,
							   featureProduct description "" factor strategy parameters{ argument "Feature Product"} execution helloWorld
							   	  		
						
						}
						Objects {description "SPL" scaleType Nominal { 
							intercloud {description "" parameters {
								featureModel "intercloud/0.txt",umlModel "intercloud/0_behavioral_model.xml"}} ,
							lift {description "" parameters {
								featureModel "lift/0.txt",umlModel "lift/0_behavioral_model.xml"}} 
							} 	
						}
						Executions { helloWorld { 
							command "echo 'Hello World ${treatment.name}: ${treatment.parameter.argument} Object:${object.name2} featureModel: ${object.parameter.featureModel} umlModel: ${object.parameter.umlModel}'" 
							}
															 
						}			}
				'''
				testInput.parse => [
					assertError(AutoExpPackage.eINSTANCE.execution, AutoExpValidator.INVALID_PARAMETER,
						"Parameter '${object.name2}' cannot be resolved")
					assertError(AutoExpPackage.eINSTANCE.execution, AutoExpValidator.INVALID_PARAMETER,
						testInput.indexOf(
							"echo 'Hello World ${treatment.name}: ${treatment.parameter.argument} Object:${object.name2} featureModel: ${object.parameter.featureModel} umlModel: ${object.parameter.umlModel}'") -
							1,
						"echo 'Hello World ${treatment.name}: ${treatment.parameter.argument} Object:${object.name2} featureModel: ${object.parameter.featureModel} umlModel: ${object.parameter.umlModel}'".
							length + 2)
				]
			}

			@Test
			def void testInvalidparameter() {
				val testInput = '''
					Experiment reanaSpl {
					
					  description "Reliability Analysis of Software Product Lines" 
					     
					  Research Hypotheses {
					  	RH1 {time featureFamily = featureProduct}
					  }
					  Experimental Design {
					    runs 1
					  }	
					    Dependent Variables {
					      time { description "Analysis time" scaleType Absolute }
						}    
						 
						Factors { 
							strategy { description "Analysis Strategy" scaleType Nominal}
							} 
							
							Treatments { 
							   featureFamily description "" factor strategy parameters{ argument "Feature Family"} execution helloWorld,
							   featureProduct description "" factor strategy parameters{ argument "Feature Product"} execution helloWorld
							   	  		
						
						}
						Objects {description "SPL" scaleType Nominal { 
							intercloud {description "" parameters {
								featureModel "intercloud/0.txt",umlModel "intercloud/0_behavioral_model.xml"}} ,
							lift {description "" parameters {
								featureModel "lift/0.txt",umlModel "lift/0_behavioral_model.xml"}} 
							} 	
						}
						Executions { helloWorld { 
							command "echo 'Hello World ${treatment.name}: ${treatment.parameter.argument} Object:${object.name} featureModel: ${object.parameter2.featureModel} umlModel: ${object.parameter.umlModel}'" 
							}
															 
						}			}
				'''
				testInput.parse => [
					assertError(AutoExpPackage.eINSTANCE.execution, AutoExpValidator.INVALID_PARAMETER,
						"Parameter '${object.parameter2.featureModel}' cannot be resolved")
					assertError(AutoExpPackage.eINSTANCE.execution, AutoExpValidator.INVALID_PARAMETER,
						testInput.indexOf("echo") - 1,
						"echo 'Hello World ${treatment.name}: ${treatment.parameter.argument} Object:${object.name} featureModel: ${object.parameter2.featureModel} umlModel: ${object.parameter.umlModel}'".
							length + 2)
				]
			}

			@Test
			def void testInvalidparameterName() {
				val testInput = '''
					Experiment reanaSpl {
					
					  description "Reliability Analysis of Software Product Lines" 
					     
					  Research Hypotheses {
					  	RH1 {time featureFamily = featureProduct}
					  }
					  Experimental Design {
					    runs 1
					  }	
					    Dependent Variables {
					      time { description "Analysis time" scaleType Absolute }
						}    
						 
						Factors { 
							strategy { description "Analysis Strategy" scaleType Nominal}
							} 
							
							Treatments { 
							   featureFamily description "" factor strategy parameters{ argument "Feature Family"} execution helloWorld,
							   featureProduct description "" factor strategy parameters{ argument "Feature Product"} execution helloWorld
							   	  		
						
						}
						Objects {description "SPL" scaleType Nominal { 
							intercloud {description "" parameters {
								featureModel "intercloud/0.txt",umlModel "intercloud/0_behavioral_model.xml"}} ,
							lift {description "" parameters {
								featureModel "lift/0.txt",umlModel "lift/0_behavioral_model.xml"}} 
							} 	
						}
						Executions { helloWorld { 
							command "echo 'Hello World ${treatment.name}: ${treatment.parameter.argument} Object:${object.name} featureModel: ${object.parameter.featureModel2} umlModel: ${object.parameter.umlModel}'" 
							}
															 
						}			}
				'''
				testInput.parse => [
					assertError(AutoExpPackage.eINSTANCE.execution, AutoExpValidator.INVALID_PARAMETER,
						"Parameter '${object.parameter.featureModel2}' cannot be resolved")
					assertError(AutoExpPackage.eINSTANCE.execution, AutoExpValidator.INVALID_PARAMETER,
						testInput.indexOf(
							"echo 'Hello World ${treatment.name}: ${treatment.parameter.argument} Object:${object.name} featureModel: ${object.parameter.featureModel2} umlModel: ${object.parameter.umlModel}'") -
							1,
						"echo 'Hello World ${treatment.name}: ${treatment.parameter.argument} Object:${object.name} featureModel: ${object.parameter.featureModel2} umlModel: ${object.parameter.umlModel}'".
							length + 2)
				]
			}

			@Test
			def void testInvalidParameterResult() {
				val testInput = '''
					Experiment reanaSpl {
					
					  description "Reliability Analysis of Software Product Lines" 
					     
					  Research Hypotheses {
					  	RH1 {time featureFamily = featureProduct}
					  }
					  Experimental Design {
					  	runs 1
					  }	
					    Dependent Variables {
					      time { description "Analysis time" scaleType Absolute }
						}    
						 
						Factors { 
							strategy { description "Analysis Strategy" scaleType Nominal}
							} 
							
							Treatments { 
							 featureFamily description ""  factor strategy parameters{argument "Feature Family"} execution helloWorld,
							 featureProduct description "" factor strategy parameters{argument "Feature Product"} execution helloWorld
							 
						
						}
						Objects {description "SPL" scaleType Nominal { 
							intercloud {description ""}, lift {description ""}  	
							}
						}
						Executions { helloWorld { 
							command "echo 'Hello World ${treatment.name}'" result {name 'results' source '$HOME/results/${object.name2}_results.json'}
											 }
											 
											
						}					
						Infrastructure {
							user {
								username "user"
							}
							
						}
					}
				'''
				testInput.parse => [
					assertError(AutoExpPackage.eINSTANCE.execution, AutoExpValidator.INVALID_PARAMETER,
						"Parameter '${object.name2}' cannot be resolved")
					assertError(AutoExpPackage.eINSTANCE.execution, AutoExpValidator.INVALID_PARAMETER,
						testInput.indexOf("{name 'results'"),
						"{name 'results' source '$HOME/results/${object.name2}_results.json}'".length)
				]
			}

			@Test
			def void testValidParameterResult() {
				val testInput = '''
					Experiment reanaSpl {
					
					  description "Reliability Analysis of Software Product Lines" 
					     
					  Research Hypotheses {
					  	RH1 {time featureFamily = featureProduct}
					  }
					  Experimental Design {
					  	runs 1
					  }	
					    Dependent Variables {
					      time { description "Analysis time" scaleType Absolute }
						}    
						 
						Factors { 
							strategy { description "Analysis Strategy" scaleType Nominal}
							} 
							
							Treatments { 
							 featureFamily description "" factor strategy parameters{argument "Feature Family"} execution helloWorld,
							 featureProduct description "" factor strategy parameters{argument "Feature Product"} execution helloWorld
							 
						
						}
						Objects {description "SPL" scaleType Nominal { 
							intercloud {description ""}, lift  {description ""}	
							}
						}
						Executions { helloWorld { 
							command "echo 'Hello World ${treatment.name}'" result {name 'results' source '$HOME/results/${object.name}_results.json'}
											 }
											 
											
						}					
						Infrastructure {
							user {
								username "user"
							}
							
						}
					}
				'''
				testInput.parse.assertNoIssues
			}

			@Test
			def void testValidParametersFiles() {
				val testInput = '''
					Experiment ssearch36 {
					
							  description "Reliability Analysis of Software Product Lines" 
							     
							  Research Hypotheses {
							  	RH1 {score query1 = query2}
							  }
							  Experimental Design {
							  	runs 1
							  }	
							    Dependent Variables {
							      score { description "Analysis time" scaleType Absolute }
							}    
							 
							Factors { 
								query { description "Query" scaleType Nominal}
								} 
								
								Treatments { 
								 query1 description "Query 1" factor query files {{name "database" source "$HOME/uniprot_sprot.fasta"}} execution ssearch36,
								 query2 description "" factor query files {{name "database" source "$HOME/uniprot_sprot.fasta"}} execution ssearch36
								 
							
							}
							Objects {description "" scaleType Nominal { 
								O60341 {description "" files {{name "query" source "$HOME/sequences/O60341.fasta"}}} 
							}}
							
							
							Executions { 
								ssearch36 { 
									command "ssearch36 -d 0 ${object.file.query} ${treatment.file.database}" result {name "score_table" source "$HOME/scores/${object.name}_scores.txt"}
									}
							}
							Infrastructure {
								user{
								  username "user"
								  keys {"key"}
								}  
							}
						}
				'''
				testInput.parse.assertNoIssues
			}

			@Test
			def void testInvalidParametersFiles() {
				val testInput = '''
					Experiment ssearch36 {
						
						  description "Reliability Analysis of Software Product Lines" 
						     
						  Research Hypotheses {
						  	RH1 {score query1 = query2}
						  }
						  Experimental Design {
						  	runs 1
						  }
						    Dependent Variables {
						      score { description "Analysis time" scaleType Absolute }
							}    
							 
							Factors { 
								query { description "Query" scaleType Nominal}
								} 
								
								Treatments { 
								 query1 description "" factor query files {{name "database" source "$HOME/uniprot_sprot.fasta"}} execution ssearch36,
								 query2 description "" factor query files {{name "database" source "$HOME/uniprot_sprot.fasta"}} execution ssearch36
								 
							
							}
							Objects {description "" scaleType Nominal { 
								O60341 {description "" files {{name "query" source "$HOME/sequences/O60341.fasta"}}} 
							}
							}
							
							Executions { 
								ssearch36 { 
									command "ssearch36 -d 0 ${object.file.query2} ${treatment.file.database}" result {name "score_table" source "$HOME/scores/${object.name}_scores.txt"}
									}
							}
							Infrastructure {
								user{
								  username "user"
								  key "key"
								}  
							}
						}
				'''
				testInput.parse => [
					assertError(AutoExpPackage.eINSTANCE.execution, AutoExpValidator.INVALID_PARAMETER,
						"Parameter '${object.file.query2}' cannot be resolved")
					assertError(AutoExpPackage.eINSTANCE.execution, AutoExpValidator.INVALID_PARAMETER,
						testInput.indexOf("ssearch36 -d 0 ${object.file.query2}") - 1,
						"ssearch36 -d 0 ${object.file.query2} ${treatment.file.database}".length + 2)
				]
			}

			def void testValidParametersFilesExecution() {
				val testInput = '''
					Experiment ssearch36 {
						
						  description "Reliability Analysis of Software Product Lines" 
						     
						  Research Hypotheses {
						  	RH1 {score query1 = query2}
						  }
						  Experimental Design {
						  	runs 1
						  }	
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
							Objects {description "" scaleType Nominal { 
								O60341  {description ""}
							}
							}
							
							Executions { 
								ssearch36 { 
									command "ssearch36 -d 0 ${execution.file.query} ${execution.file.database}" 
									result {name "score_table" source "$HOME/scores/${object.name}_scores.txt"}
									files {
										{name "database" source "$HOME/uniprot_sprot.fasta"},
										{name "query" source "$HOME/sequences/O60341.fasta"}
									}
									}
							}
							Infrastructure {
								user{
								  username "user"
								  
								}  
							}
						}
				'''
				testInput.parse.assertNoIssues
			}

			@Test
			def void testInvalidParametersFilesExecution() {
				val testInput = '''
					Experiment ssearch36 {
					
					  description "Reliability Analysis of Software Product Lines" 
					     
					  Research Hypotheses {
					  	RH1 {score query1 = query2}
					  }
					  Experimental Design {
					  	runs 1
					  }	
					    Dependent Variables {
					      score { description "Analysis time" scaleType Absolute }
						}    
						 
						Factors { 
							query { description "Query" scaleType Nominal}
							} 
							
							Treatments { 
							 query1 description ""  factor query execution ssearch36,
							 query2 description "" factor query execution ssearch36
							 
						
						}
						Objects {description "" scaleType Nominal { 
							O60341 {description ""}
							}
						}
						
						Executions { 
							ssearch36 { 
								command "ssearch36 -d 0 ${execution.file.query2} ${execution.file.database}" 
								result {name "score_table" source "$HOME/scores/${object.name}_scores.txt"}
								files {
									{name "database" source "$HOME/uniprot_sprot.fasta"},
									{name "query" source "$HOME/sequences/O60341.fasta"}
								}
								}
						}
						Infrastructure {
							user{
							  username "user"
							}  
						}
					}
				'''
				testInput.parse => [
					assertError(AutoExpPackage.eINSTANCE.execution, AutoExpValidator.INVALID_PARAMETER,
						"Parameter '${execution.file.query2}' cannot be resolved")
					assertError(AutoExpPackage.eINSTANCE.execution, AutoExpValidator.INVALID_PARAMETER,
						testInput.indexOf("ssearch36 -d 0 ${execution.file.query2} ${execution.file.database}") - 1,
						"ssearch36 -d 0 ${execution.file.query2} ${execution.file.database}".length + 2)
				]
			}
	@Test
	def void testAbsolutWithNumericValue() {
		'''
			Experiment reanaSpl {
				
				description "Reliability Analysis of Software Product Lines" 
				
				Research Hypotheses {
					RH1 {time featureFamily = featureProduct},
					RH2 {memoryConsumption featureFamily < featureProduct}, 
					RH3 {memoryConsumption featureFamily != familyProduct},
					RH4 {memoryConsumption micro > large}
					}
					Experimental Design {
						runs 1
					}
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
							Objects {description "SPL" scaleType Absolute { 
								intercloud {description "" value "1"},
								lift {description "" value "2"},
								bsn {description "" value "3"}
							}} 	
							
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
		'''.parse.assertNoIssues
	}
		@Test
	def void testAbsolutWithoutNumericValue() {
		val testInput='''
			Experiment reanaSpl {
				
				description "Reliability Analysis of Software Product Lines" 
				
				Research Hypotheses {
					RH1 {time featureFamily = featureProduct},
					RH2 {memoryConsumption featureFamily < featureProduct}, 
					RH3 {memoryConsumption featureFamily != familyProduct},
					RH4 {memoryConsumption micro > large}
					}
					Experimental Design {
						runs 1
					}
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
							Objects {description "SPL" scaleType Absolute { 
								intercloud {description "" value "e"},
								lift {description "" value "0.r"},
								bsn {description ""}
							}} 	 	
							
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
		'''
		
		testInput.parse => [
				assertError(AutoExpPackage.eINSTANCE.experimentalObject, AutoExpValidator.NUMERIC_VALUE_MISSING,
						"Scale type 'Absolute' requires a numeric value.")
				]
	}	
		@Test
	def void testLogWithNumericValue() {
		'''
			Experiment reanaSpl {
				
				description "Reliability Analysis of Software Product Lines" 
				
				Research Hypotheses {
					RH1 {time featureFamily = featureProduct},
					RH2 {memoryConsumption featureFamily < featureProduct}, 
					RH3 {memoryConsumption featureFamily != familyProduct},
					RH4 {memoryConsumption micro > large}
					}
					Experimental Design {
						runs 1
					}
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
							Objects {description "SPL" scaleType Logarithmic { 
								intercloud {description "" value "10.1"},
								lift {description "" value "15.4"},
								bsn {description "" value "20.6"}
							}} 
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
		'''.parse.assertNoIssues
	}
		@Test
	def void testLogWithoutNumericValue() {
		val testInput='''
			Experiment reanaSpl {
				
				description "Reliability Analysis of Software Product Lines" 
				
				Research Hypotheses {
					RH1 {time featureFamily = featureProduct},
					RH2 {memoryConsumption featureFamily < featureProduct}, 
					RH3 {memoryConsumption featureFamily != familyProduct},
					RH4 {memoryConsumption micro > large}
					}
					Experimental Design {
						runs 1
					}
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
							Objects {description "SPL" scaleType Logarithmic { intercloud {description ""},lift {description ""},bsn {description ""}}} 	
							
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
		'''
		testInput.parse => [
					assertError(AutoExpPackage.eINSTANCE.experimentalObject, AutoExpValidator.NUMERIC_VALUE_MISSING,
						"Scale type 'Logarithmic' requires a numeric value.")
				]
	}	
			
			}
