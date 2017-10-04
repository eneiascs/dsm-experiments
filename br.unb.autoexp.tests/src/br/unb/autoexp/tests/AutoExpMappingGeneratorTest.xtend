package br.unb.autoexp.tests

import br.unb.autoexp.tests.helper.AutoExpGeneratorTestHelper
import com.google.inject.Inject
import org.eclipse.xtext.testing.InjectWith
import org.eclipse.xtext.testing.XtextRunner
import org.junit.Test
import org.junit.runner.RunWith

@RunWith(XtextRunner)
@InjectWith(AutoExpInjectorProvider)
class AutoExpMappingGeneratorTest {
	@Inject extension AutoExpGeneratorTestHelper
	


	@Test
	def void testGeneratedMappingApplications() {
		'''
			Experiment reanaSpl {
			
			  description "Reliability Analysis of Software Product Lines" 
			     
			  Research Hypotheses {
			  	RH1 {timeConsumption featureFamily = featureProduct}
			  }
			  Experimental Design {
			  	runs 2
			  	Dependent Variables {
			  	   timeConsumption { description "Analysis time" scaleType Absolute }
				}    
				 
				Factors { 
					strategy { description "Analysis Strategy" scaleType Nominal}
					} 
					
					Treatments { 
					 featureFamily description "Feature Family" factor strategy execution helloWorldFeatureFamily,
					 featureProduct description "Feature Product" factor strategy execution helloWorldFeatureProduct
					   	  		
				
				}
				Objects { intercloud description "Intercloud",lift description "Lift"} 	
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
			val jsonMapping = '''
				[
				  {
				    "experimentName": "reanaSpl",
				    "design": "FACTORIAL",
				    "runs": 2,
				    "taskName": "FACTORIAL_strategy_featureFamily_intercloud",
				    "executionName": "helloWorldFeatureFamily",
				    "factor": "strategy",
				    "treatment": "featureFamily",
				    "object": "intercloud"
				  },
				  {
				    "experimentName": "reanaSpl",
				    "design": "FACTORIAL",
				    "runs": 2,
				    "taskName": "FACTORIAL_strategy_featureFamily_lift",
				    "executionName": "helloWorldFeatureFamily",
				    "factor": "strategy",
				    "treatment": "featureFamily",
				    "object": "lift"
				  },
				  {
				    "experimentName": "reanaSpl",
				    "design": "FACTORIAL",
				    "runs": 2,
				    "taskName": "FACTORIAL_strategy_featureProduct_intercloud",
				    "executionName": "helloWorldFeatureProduct",
				    "factor": "strategy",
				    "treatment": "featureProduct",
				    "object": "intercloud"
				  },
				  {
				    "experimentName": "reanaSpl",
				    "design": "FACTORIAL",
				    "runs": 2,
				    "taskName": "FACTORIAL_strategy_featureProduct_lift",
				    "executionName": "helloWorldFeatureProduct",
				    "factor": "strategy",
				    "treatment": "featureProduct",
				    "object": "lift"
				  }
				]
			'''
			assertCompilesToWithFileExtension(jsonMapping,".json")

		]
	}
}
