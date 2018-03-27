package br.unb.autoexp.tests

import br.unb.autoexp.tests.dohko.ApplicationDescriptorConverter
import br.unb.autoexp.tests.helper.AutoExpGeneratorTestHelper
import com.google.inject.Inject
import org.eclipse.xtext.testing.InjectWith
import org.eclipse.xtext.testing.XtextRunner
import org.junit.Ignore
import org.junit.Test
import org.junit.runner.RunWith

@RunWith(XtextRunner)
@InjectWith(AutoExpInjectorProvider)
class AutoExpGeneratorTest {
	@Inject extension AutoExpGeneratorTestHelper
	@Inject extension ApplicationDescriptorConverter
	
	
	@Test
	def void testInstruments() {
		'''
			Experiment reanaSpl {
						
							
							 description "Reliability Analysis" 
							 				 
							 Research Hypotheses {
							 	RH1 {analysisTime featureFamily = product description "Analysis time for Feature Family is equals than analysis time for Product"},
							 	RH2 {analysisTime featureFamily = featureProduct description "Analysis time for Feature Family is equals than analysis time for Feature Product"},
							 	RH3 {analysisTime featureFamily = family description "Analysis time for Feature Family is equals than analysis time for Family"},
							 	RH4 {analysisTime featureFamily = familyProduct description "Analysis time for Feature Family is equals than analysis time for Family Product"},
							 	RH5 {memoryConsumption featureFamily = product description "Memory consumption for Feature Family is equals than memory consumption for Product"},
							 	RH6 {memoryConsumption featureFamily = featureProduct description "Memory consumption for Feature Family is equals than memory consumption for Feature Product"},
							 	RH7 {memoryConsumption featureFamily = family description "Memory consumption for Feature Family is equals than memory consumption for Family"},
							 	RH8 {memoryConsumption featureFamily = familyProduct description "Memory consumption for Feature Family is equals than memory consumption for Family Product"}
							 	 
							 	
							 	}
							 	
							 	Experimental Design {
							 	   runs 1
							 	}   
							 	  Dependent Variables {
							 	  analysisTime { description "Analysis time" scaleType Absolute instrument analysisTimeCommand },
							 	  memoryConsumption { description "Memory consumption" scaleType Absolute instrument memoryCommand }
							 	  }
							 	 Instruments 
							     {
							        analysisTimeCommand {command  "/usr/bin/time -v"  valueExpression "Total analysis time:"},
							        memoryCommand {command  "/usr/bin/time -v"  valueExpression "Maximum resident set size (kbytes):"}
							         
							     }
							 	  
							     
							  
							 Factors {
							 	strategy { description "Analysis Strategy" scaleType Nominal}
							 	
							 	} 
							 	
							 	Treatments {
							 	featureFamily description "Feature Family"  factor strategy parameters{argument "FEATURE_FAMILY"} execution reanaEvaluator,	
							 	featureProduct description "Feature Product"  factor strategy parameters{argument "FEATURE_PRODUCT"} execution reanaEvaluator,	
							 	family description "Family"  factor strategy parameters{argument "FAMILY"} execution reanaEvaluator,	
							 	familyProduct description "Family Product"  factor strategy parameters{argument "FAMILY_PRODUCT"} execution reanaEvaluator,
							 	product description "Product"  factor strategy parameters{argument "PRODUCT"} execution reanaEvaluator	
							 	}
							 Objects {description "SPL" scaleType Nominal { 
							 	intercloud0 {description "Intercloud"  parameters {
							 		spl "intercloud", evolution "0"}},
							 	lift0 {description "Lift"  parameters {
							 		spl "lift", evolution "0"}}, 
							 		
							 	bsn0 {description "BSN"  parameters {
							 		spl "bsn", evolution "0"}} , 	 
							 	eMail0 {description "Email"  parameters {
							 		spl "email", evolution "0"}}, 	 
							 	tankwar0 {description "Tank War"  parameters {
							 		spl "tankwar", evolution "0"}}, 	 
							 	minepump0 {description "Minepump" parameters {
							 		spl "minepump", evolution "0"}} 	 
							 	}		
							 }
							 	    
							  
							 	
							 Executions { 
							 	reanaEvaluator { 
							 		command "java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/${object.parameter.spl}/models/${object.parameter.evolution}.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/${object.parameter.spl}/models/${object.parameter.evolution}_behavioral_model.xml"
							 	
							 	    timeout 1
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
				description: "Reliability Analysis"
				user:
				  username: "vagrant"
				blocks:
				  - applications:
				    - name: "family_intercloud0_0"
				      command-line: "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/intercloud/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/intercloud/models/0_behavioral_model.xml"
				      timeout: 1
				  - applications:
				    - name: "family_lift0_0"
				      command-line: "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/lift/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/lift/models/0_behavioral_model.xml"
				      timeout: 1
				  - applications:
				    - name: "family_bsn0_0"
				      command-line: "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/bsn/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/bsn/models/0_behavioral_model.xml"
				      timeout: 1
				  - applications:
				    - name: "family_eMail0_0"
				      command-line: "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/email/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/email/models/0_behavioral_model.xml"
				      timeout: 1
				  - applications:
				    - name: "family_tankwar0_0"
				      command-line: "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/tankwar/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/tankwar/models/0_behavioral_model.xml"
				      timeout: 1
				  - applications:
				    - name: "family_minepump0_0"
				      command-line: "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/minepump/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/minepump/models/0_behavioral_model.xml"
				      timeout: 1
				  - applications:
				    - name: "familyProduct_intercloud0_0"
				      command-line: "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/intercloud/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/intercloud/models/0_behavioral_model.xml"
				      timeout: 1
				  - applications:
				    - name: "familyProduct_lift0_0"
				      command-line: "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/lift/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/lift/models/0_behavioral_model.xml"
				      timeout: 1
				  - applications:
				    - name: "familyProduct_bsn0_0"
				      command-line: "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/bsn/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/bsn/models/0_behavioral_model.xml"
				      timeout: 1
				  - applications:
				    - name: "familyProduct_eMail0_0"
				      command-line: "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/email/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/email/models/0_behavioral_model.xml"
				      timeout: 1
				  - applications:
				    - name: "familyProduct_tankwar0_0"
				      command-line: "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/tankwar/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/tankwar/models/0_behavioral_model.xml"
				      timeout: 1
				  - applications:
				    - name: "familyProduct_minepump0_0"
				      command-line: "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/minepump/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/minepump/models/0_behavioral_model.xml"
				      timeout: 1
				  - applications:
				    - name: "featureFamily_intercloud0_0"
				      command-line: "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/intercloud/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/intercloud/models/0_behavioral_model.xml"
				      timeout: 1
				  - applications:
				    - name: "featureFamily_lift0_0"
				      command-line: "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/lift/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/lift/models/0_behavioral_model.xml"
				      timeout: 1
				  - applications:
				    - name: "featureFamily_bsn0_0"
				      command-line: "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/bsn/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/bsn/models/0_behavioral_model.xml"
				      timeout: 1
				  - applications:
				    - name: "featureFamily_eMail0_0"
				      command-line: "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/email/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/email/models/0_behavioral_model.xml"
				      timeout: 1
				  - applications:
				    - name: "featureFamily_tankwar0_0"
				      command-line: "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/tankwar/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/tankwar/models/0_behavioral_model.xml"
				      timeout: 1
				  - applications:
				    - name: "featureFamily_minepump0_0"
				      command-line: "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/minepump/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/minepump/models/0_behavioral_model.xml"
				      timeout: 1
				  - applications:
				    - name: "featureProduct_intercloud0_0"
				      command-line: "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/intercloud/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/intercloud/models/0_behavioral_model.xml"
				      timeout: 1
				  - applications:
				    - name: "featureProduct_lift0_0"
				      command-line: "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/lift/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/lift/models/0_behavioral_model.xml"
				      timeout: 1
				  - applications:
				    - name: "featureProduct_bsn0_0"
				      command-line: "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/bsn/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/bsn/models/0_behavioral_model.xml"
				      timeout: 1
				  - applications:
				    - name: "featureProduct_eMail0_0"
				      command-line: "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/email/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/email/models/0_behavioral_model.xml"
				      timeout: 1
				  - applications:
				    - name: "featureProduct_tankwar0_0"
				      command-line: "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/tankwar/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/tankwar/models/0_behavioral_model.xml"
				      timeout: 1
				  - applications:
				    - name: "featureProduct_minepump0_0"
				      command-line: "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/minepump/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/minepump/models/0_behavioral_model.xml"
				      timeout: 1
				  - applications:
				    - name: "product_intercloud0_0"
				      command-line: "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/intercloud/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/intercloud/models/0_behavioral_model.xml"
				      timeout: 1
				  - applications:
				    - name: "product_lift0_0"
				      command-line: "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/lift/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/lift/models/0_behavioral_model.xml"
				      timeout: 1
				  - applications:
				    - name: "product_bsn0_0"
				      command-line: "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/bsn/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/bsn/models/0_behavioral_model.xml"
				      timeout: 1
				  - applications:
				    - name: "product_eMail0_0"
				      command-line: "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/email/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/email/models/0_behavioral_model.xml"
				      timeout: 1
				  - applications:
				    - name: "product_tankwar0_0"
				      command-line: "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/tankwar/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/tankwar/models/0_behavioral_model.xml"
				      timeout: 1
				  - applications:
				    - name: "product_minepump0_0"
				      command-line: "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/minepump/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/minepump/models/0_behavioral_model.xml"
				      timeout: 1
			'''
			
			val applicationDescriptorJson = '''
				{
				"name": "reanaSpl",
				"description": "Reliability Analysis",
				"user":{
				  "username": "vagrant"
				}
				,
				"blocks":[
				      {
				      "applications":[
				      {
				        "name": "family_intercloud0_0",
				        "command-line": "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/intercloud/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/intercloud/models/0_behavioral_model.xml"
				        , 
				        "timeout": 1
				      } 
				     ]  
				  },
				      {
				      "applications":[
				      {
				        "name": "family_lift0_0",
				        "command-line": "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/lift/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/lift/models/0_behavioral_model.xml"
				        , 
				        "timeout": 1
				      } 
				     ]  
				  },
				      {
				      "applications":[
				      {
				        "name": "family_bsn0_0",
				        "command-line": "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/bsn/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/bsn/models/0_behavioral_model.xml"
				        , 
				        "timeout": 1
				      } 
				     ]  
				  },
				      {
				      "applications":[
				      {
				        "name": "family_eMail0_0",
				        "command-line": "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/email/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/email/models/0_behavioral_model.xml"
				        , 
				        "timeout": 1
				      } 
				     ]  
				  },
				      {
				      "applications":[
				      {
				        "name": "family_tankwar0_0",
				        "command-line": "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/tankwar/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/tankwar/models/0_behavioral_model.xml"
				        , 
				        "timeout": 1
				      } 
				     ]  
				  },
				      {
				      "applications":[
				      {
				        "name": "family_minepump0_0",
				        "command-line": "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/minepump/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/minepump/models/0_behavioral_model.xml"
				        , 
				        "timeout": 1
				      } 
				     ]  
				  },
				      {
				      "applications":[
				      {
				        "name": "familyProduct_intercloud0_0",
				        "command-line": "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/intercloud/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/intercloud/models/0_behavioral_model.xml"
				        , 
				        "timeout": 1
				      } 
				     ]  
				  },
				      {
				      "applications":[
				      {
				        "name": "familyProduct_lift0_0",
				        "command-line": "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/lift/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/lift/models/0_behavioral_model.xml"
				        , 
				        "timeout": 1
				      } 
				     ]  
				  },
				      {
				      "applications":[
				      {
				        "name": "familyProduct_bsn0_0",
				        "command-line": "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/bsn/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/bsn/models/0_behavioral_model.xml"
				        , 
				        "timeout": 1
				      } 
				     ]  
				  },
				      {
				      "applications":[
				      {
				        "name": "familyProduct_eMail0_0",
				        "command-line": "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/email/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/email/models/0_behavioral_model.xml"
				        , 
				        "timeout": 1
				      } 
				     ]  
				  },
				      {
				      "applications":[
				      {
				        "name": "familyProduct_tankwar0_0",
				        "command-line": "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/tankwar/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/tankwar/models/0_behavioral_model.xml"
				        , 
				        "timeout": 1
				      } 
				     ]  
				  },
				      {
				      "applications":[
				      {
				        "name": "familyProduct_minepump0_0",
				        "command-line": "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/minepump/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/minepump/models/0_behavioral_model.xml"
				        , 
				        "timeout": 1
				      } 
				     ]  
				  },
				      {
				      "applications":[
				      {
				        "name": "featureFamily_intercloud0_0",
				        "command-line": "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/intercloud/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/intercloud/models/0_behavioral_model.xml"
				        , 
				        "timeout": 1
				      } 
				     ]  
				  },
				      {
				      "applications":[
				      {
				        "name": "featureFamily_lift0_0",
				        "command-line": "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/lift/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/lift/models/0_behavioral_model.xml"
				        , 
				        "timeout": 1
				      } 
				     ]  
				  },
				      {
				      "applications":[
				      {
				        "name": "featureFamily_bsn0_0",
				        "command-line": "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/bsn/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/bsn/models/0_behavioral_model.xml"
				        , 
				        "timeout": 1
				      } 
				     ]  
				  },
				      {
				      "applications":[
				      {
				        "name": "featureFamily_eMail0_0",
				        "command-line": "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/email/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/email/models/0_behavioral_model.xml"
				        , 
				        "timeout": 1
				      } 
				     ]  
				  },
				      {
				      "applications":[
				      {
				        "name": "featureFamily_tankwar0_0",
				        "command-line": "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/tankwar/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/tankwar/models/0_behavioral_model.xml"
				        , 
				        "timeout": 1
				      } 
				     ]  
				  },
				      {
				      "applications":[
				      {
				        "name": "featureFamily_minepump0_0",
				        "command-line": "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/minepump/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/minepump/models/0_behavioral_model.xml"
				        , 
				        "timeout": 1
				      } 
				     ]  
				  },
				      {
				      "applications":[
				      {
				        "name": "featureProduct_intercloud0_0",
				        "command-line": "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/intercloud/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/intercloud/models/0_behavioral_model.xml"
				        , 
				        "timeout": 1
				      } 
				     ]  
				  },
				      {
				      "applications":[
				      {
				        "name": "featureProduct_lift0_0",
				        "command-line": "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/lift/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/lift/models/0_behavioral_model.xml"
				        , 
				        "timeout": 1
				      } 
				     ]  
				  },
				      {
				      "applications":[
				      {
				        "name": "featureProduct_bsn0_0",
				        "command-line": "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/bsn/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/bsn/models/0_behavioral_model.xml"
				        , 
				        "timeout": 1
				      } 
				     ]  
				  },
				      {
				      "applications":[
				      {
				        "name": "featureProduct_eMail0_0",
				        "command-line": "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/email/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/email/models/0_behavioral_model.xml"
				        , 
				        "timeout": 1
				      } 
				     ]  
				  },
				      {
				      "applications":[
				      {
				        "name": "featureProduct_tankwar0_0",
				        "command-line": "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/tankwar/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/tankwar/models/0_behavioral_model.xml"
				        , 
				        "timeout": 1
				      } 
				     ]  
				  },
				      {
				      "applications":[
				      {
				        "name": "featureProduct_minepump0_0",
				        "command-line": "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/minepump/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/minepump/models/0_behavioral_model.xml"
				        , 
				        "timeout": 1
				      } 
				     ]  
				  },
				      {
				      "applications":[
				      {
				        "name": "product_intercloud0_0",
				        "command-line": "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/intercloud/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/intercloud/models/0_behavioral_model.xml"
				        , 
				        "timeout": 1
				      } 
				     ]  
				  },
				      {
				      "applications":[
				      {
				        "name": "product_lift0_0",
				        "command-line": "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/lift/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/lift/models/0_behavioral_model.xml"
				        , 
				        "timeout": 1
				      } 
				     ]  
				  },
				      {
				      "applications":[
				      {
				        "name": "product_bsn0_0",
				        "command-line": "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/bsn/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/bsn/models/0_behavioral_model.xml"
				        , 
				        "timeout": 1
				      } 
				     ]  
				  },
				      {
				      "applications":[
				      {
				        "name": "product_eMail0_0",
				        "command-line": "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/email/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/email/models/0_behavioral_model.xml"
				        , 
				        "timeout": 1
				      } 
				     ]  
				  },
				      {
				      "applications":[
				      {
				        "name": "product_tankwar0_0",
				        "command-line": "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/tankwar/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/tankwar/models/0_behavioral_model.xml"
				        , 
				        "timeout": 1
				      } 
				     ]  
				  },
				      {
				      "applications":[
				      {
				        "name": "product_minepump0_0",
				        "command-line": "/usr/bin/time -v java -Xss100m -Xmx8g -jar /home/eneiascs/reana-evaluator/tools/reana-spl.jar --all-configurations --suppress-report --stats --param-path=/home/eneiascs/reana-evaluator/tools/param --analysis-strategy=FEATURE_FAMILY --feature-model=/home/eneiascs/reana-evaluator/models/sequential/minepump/models/0.txt --uml-models=/home/eneiascs/reana-evaluator/models/sequential/minepump/models/0_behavioral_model.xml"
				        , 
				        "timeout": 1
				      } 
				     ]  
				  }
				  ]  
				}			
			'''
			
			assertCompilesToWithFileExtension(applicationDescriptor,".yml")
			applicationDescriptor.convert

		]
	}
	
	
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
						  	runs 2
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
							Objects {description "SPL" scaleType Nominal { lift {description ""},bsn {description ""}}} 	
							
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
				description: "Reliability Analysis of Software Product Lines"
				user:
				  username: "user"
				  keys:
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
				  - name: "ec2"
				    provider:
				      name: "amazon"
				      max-resource-per-type: 2
				      description: "description"
				      service-class: "Service class"
				    access-key:
				      access-key: "65AA31A0E92741A2"
				      secret-key: "619770ECE1D5492886D80B44E3AA2970"
				    regions:
				    - name: "us-east-1"
				      endpoint: "endpoint"
				      status: UP
				      city: "City"
				      geographic-region: 5
				      zone:
				      - name: "name"
				        status: "status"
				    instance-types:
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
				blocks:
				  - applications:
				    - name: "featureFamily_lift_0"
				      command-line: "cat /proc/cpuinfo"
				      preconditions:
				        packages: 
				        - reana-spl
				        - param
				    - name: "featureFamily_lift_1"
				      command-line: "cat /proc/cpuinfo"
				      preconditions:
				        packages: 
				        - reana-spl
				        - param
				  - applications:
				    - name: "featureFamily_bsn_0"
				      command-line: "cat /proc/cpuinfo"
				      preconditions:
				        packages: 
				        - reana-spl
				        - param
				    - name: "featureFamily_bsn_1"
				      command-line: "cat /proc/cpuinfo"
				      preconditions:
				        packages: 
				        - reana-spl
				        - param
				  - applications:
				    - name: "featureProduct_lift_0"
				      command-line: "cat /proc/cpuinfo"
				      preconditions:
				        packages: 
				        - reana-spl
				        - param
				    - name: "featureProduct_lift_1"
				      command-line: "cat /proc/cpuinfo"
				      preconditions:
				        packages: 
				        - reana-spl
				        - param
				  - applications:
				    - name: "featureProduct_bsn_0"
				      command-line: "cat /proc/cpuinfo"
				      preconditions:
				        packages: 
				        - reana-spl
				        - param
				    - name: "featureProduct_bsn_1"
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
 					    runs 2
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
 						Objects {description "SPL" scaleType Nominal { lift {description ""},bsn {description ""}}} 	
 						
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
				description: "Reliability Analysis of Software Product Lines"
				user:
				  username: "user"
				blocks:
				  - applications:
				    - name: "featureFamily_lift_0"
				      command-line: "cat /proc/cpuinfo"
				    - name: "featureFamily_lift_1"
				      command-line: "cat /proc/cpuinfo"
				  - applications:
				    - name: "featureFamily_bsn_0"
				      command-line: "cat /proc/cpuinfo"
				    - name: "featureFamily_bsn_1"
				      command-line: "cat /proc/cpuinfo"
				  - applications:
				    - name: "featureProduct_lift_0"
				      command-line: "cat /proc/cpuinfo"
				    - name: "featureProduct_lift_1"
				      command-line: "cat /proc/cpuinfo"
				  - applications:
				    - name: "featureProduct_bsn_0"
				      command-line: "cat /proc/cpuinfo"
				    - name: "featureProduct_bsn_1"
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
					 featureFamily description "Feature Family" factor strategy execution helloWorldFeatureFamily,
					 featureProduct description "Feature Product" factor strategy execution helloWorldFeatureProduct,
					 family description "Family" factor strategy execution helloWorldFamily,
					 familyProduct description "Family Product" factor strategy execution helloWorldFamilyProduct
					   	  		
				
				}
				Objects {description "SPL" scaleType Nominal { lift {description ""},bsn {description ""}}} 	
				
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
				description: "Reliability Analysis of Software Product Lines"
				user:
				  username: "user"
				blocks:
				  - applications:
				    - name: "featureFamily_lift_0"
				      command-line: "echo 'Hello World Feature Family'"
				      preconditions:
				        packages: 
				        - java
				  - applications:
				    - name: "featureFamily_bsn_0"
				      command-line: "echo 'Hello World Feature Family'"
				      preconditions:
				        packages: 
				        - java
				  - applications:
				    - name: "featureProduct_lift_0"
				      command-line: "echo 'Hello World Feature Product'"
				  - applications:
				    - name: "featureProduct_bsn_0"
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
			  	runs 2
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
					 featureFamily description "" factor strategy parameters{ argument "Feature Family"} execution helloWorld,
					 featureProduct description "" factor strategy parameters{ argument "Feature Product"} execution helloWorld,
					 family description "" factor strategy parameters{argument "Family"} execution helloWorld,
					 familyProduct description "" factor strategy parameters{ argument "Family Product"} execution helloWorld
					   	  		
				
				}
				Objects {description "SPL" scaleType Nominal { lift {description ""},bsn {description ""}}} 	
				
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
				description: "Reliability Analysis of Software Product Lines"
				user:
				  username: "user"
				blocks:
				  - applications:
				    - name: "family_lift_0"
				      command-line: "echo 'Hello World family'"
				    - name: "family_lift_1"
				      command-line: "echo 'Hello World family'"
				  - applications:
				    - name: "family_bsn_0"
				      command-line: "echo 'Hello World family'"
				    - name: "family_bsn_1"
				      command-line: "echo 'Hello World family'"
				  - applications:
				    - name: "familyProduct_lift_0"
				      command-line: "echo 'Hello World familyProduct'"
				    - name: "familyProduct_lift_1"
				      command-line: "echo 'Hello World familyProduct'"
				  - applications:
				    - name: "familyProduct_bsn_0"
				      command-line: "echo 'Hello World familyProduct'"
				    - name: "familyProduct_bsn_1"
				      command-line: "echo 'Hello World familyProduct'"
				  - applications:
				    - name: "featureFamily_lift_0"
				      command-line: "echo 'Hello World featureFamily'"
				    - name: "featureFamily_lift_1"
				      command-line: "echo 'Hello World featureFamily'"
				  - applications:
				    - name: "featureFamily_bsn_0"
				      command-line: "echo 'Hello World featureFamily'"
				    - name: "featureFamily_bsn_1"
				      command-line: "echo 'Hello World featureFamily'"
				  - applications:
				    - name: "featureProduct_lift_0"
				      command-line: "echo 'Hello World featureProduct'"
				    - name: "featureProduct_lift_1"
				      command-line: "echo 'Hello World featureProduct'"
				  - applications:
				    - name: "featureProduct_bsn_0"
				      command-line: "echo 'Hello World featureProduct'"
				    - name: "featureProduct_bsn_1"
				      command-line: "echo 'Hello World featureProduct'"
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
					 featureFamily description "Feature Family" factor strategy parameters{ argument "Feature Family"} execution helloWorld,
					 featureProduct description "Feature Product" factor strategy parameters{ argument "Feature Product"} execution helloWorld,
					 family description "Family" factor strategy parameters{argument "Family"} execution helloWorld,
					 familyProduct description "Family Product" factor strategy parameters{ argument "Family Product"} execution helloWorld
					   	  		
				
				}
				Objects {description "SPL" scaleType Nominal { lift {description "Lift"},bsn {description "BSN"}}} 	
				
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
				description: "Reliability Analysis of Software Product Lines"
				user:
				  username: "user"
				blocks:
				  - applications:
				    - name: "family_lift_0"
				      command-line: "echo 'Hello World Family Lift'"
				  - applications:
				    - name: "family_bsn_0"
				      command-line: "echo 'Hello World Family BSN'"
				  - applications:
				    - name: "familyProduct_lift_0"
				      command-line: "echo 'Hello World Family Product Lift'"
				  - applications:
				    - name: "familyProduct_bsn_0"
				      command-line: "echo 'Hello World Family Product BSN'"
				  - applications:
				    - name: "featureFamily_lift_0"
				      command-line: "echo 'Hello World Feature Family Lift'"
				  - applications:
				    - name: "featureFamily_bsn_0"
				      command-line: "echo 'Hello World Feature Family BSN'"
				  - applications:
				    - name: "featureProduct_lift_0"
				      command-line: "echo 'Hello World Feature Product Lift'"
				  - applications:
				    - name: "featureProduct_bsn_0"
				      command-line: "echo 'Hello World Feature Product BSN'"
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
					 featureFamily description ""  factor strategy parameters{ argument "Feature Family"} execution helloWorld,
					 featureProduct description "" factor strategy parameters{ argument "Feature Product"} execution helloWorld,
					 family description "" factor strategy parameters{argument "Family"} execution helloWorld,
					 familyProduct description "" factor strategy parameters{ argument "Family Product"} execution helloWorld
					   	  		
				
				}
				Objects {description "SPL" scaleType Nominal {lift {description ""}}}	
				
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
				description: "Reliability Analysis of Software Product Lines"
				user:
				  username: "user"
				blocks:
				  - applications:
				    - name: "family_lift_0"
				      command-line: "echo 'Hello World Family'"
				  - applications:
				    - name: "familyProduct_lift_0"
				      command-line: "echo 'Hello World Family Product'"
				  - applications:
				    - name: "featureFamily_lift_0"
				      command-line: "echo 'Hello World Feature Family'"
				  - applications:
				    - name: "featureProduct_lift_0"
				      command-line: "echo 'Hello World Feature Product'"
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
					 featureFamily description ""  factor strategy parameters{argument "Feature Family"} execution helloWorld,
					 featureProduct description "" factor strategy parameters{argument "Feature Product"} execution helloWorld,
					 family description "" factor strategy parameters{argument "Family"} execution helloWorld,
					 familyProduct description "" factor strategy parameters{argument "Family Product"} execution helloWorld
					   	  		
				
				}
				Objects {description "SPL" scaleType Nominal { lift {description ""},bsn {description ""}}} 	
				
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
				description: "Reliability Analysis of Software Product Lines"
				user:
				  username: "user"
				blocks:
				  - applications:
				    - name: "family_lift_0"
				      command-line: "echo 'Hello World family: Family'"
				  - applications:
				    - name: "family_bsn_0"
				      command-line: "echo 'Hello World family: Family'"
				  - applications:
				    - name: "familyProduct_lift_0"
				      command-line: "echo 'Hello World familyProduct: Family Product'"
				  - applications:
				    - name: "familyProduct_bsn_0"
				      command-line: "echo 'Hello World familyProduct: Family Product'"
				  - applications:
				    - name: "featureFamily_lift_0"
				      command-line: "echo 'Hello World featureFamily: Feature Family'"
				  - applications:
				    - name: "featureFamily_bsn_0"
				      command-line: "echo 'Hello World featureFamily: Feature Family'"
				  - applications:
				    - name: "featureProduct_lift_0"
				      command-line: "echo 'Hello World featureProduct: Feature Product'"
				  - applications:
				    - name: "featureProduct_bsn_0"
				      command-line: "echo 'Hello World featureProduct: Feature Product'"
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
			  	runs 1
			  }	
			  	
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
				Objects {description "SPL" scaleType Nominal { 
					intercloud {description "" parameters {
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
		''' => [
			val applicationDescriptor = '''
				---
				name: "reanaSpl"
				description: "Reliability Analysis of Software Product Lines"
				user:
				  username: "user"
				blocks:
				  - applications:
				    - name: "featureFamily_intercloud_0"
				      command-line: "echo 'Hello World featureFamily: Feature Family Object:intercloud featureModel: intercloud/0.txt umlModel: intercloud/0_behavioral_model.xml'"
				  - applications:
				    - name: "featureFamily_lift_0"
				      command-line: "echo 'Hello World featureFamily: Feature Family Object:lift featureModel: lift/0.txt umlModel: lift/0_behavioral_model.xml'"
				  - applications:
				    - name: "featureProduct_intercloud_0"
				      command-line: "echo 'Hello World featureProduct: Feature Product Object:intercloud featureModel: intercloud/0.txt umlModel: intercloud/0_behavioral_model.xml'"
				  - applications:
				    - name: "featureProduct_lift_0"
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
			  	runs 1
			  }	
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
				Objects {description "SPL" scaleType Nominal { 
					intercloud {description ""}, lift  {description ""}	
					}	
				}
				Executions { helloWorld { 
					command "echo 'Hello World ${treatment.name} ${object.name}'" result {name "results" source "$HOME/results/${object.name}_results.json"}
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
				description: "Reliability Analysis of Software Product Lines"
				user:
				  username: "user"
				blocks:
				  - applications:
				    - name: "featureFamily_intercloud_0"
				      command-line: "echo 'Hello World featureFamily intercloud'"
				      files:
				      - name: "results"
				        source: "$HOME/results/intercloud_results.json"
				        dest: "/opt/dohko/files/results"
				        generated: "Y"
				  - applications:
				    - name: "featureFamily_lift_0"
				      command-line: "echo 'Hello World featureFamily lift'"
				      files:
				      - name: "results"
				        source: "$HOME/results/lift_results.json"
				        dest: "/opt/dohko/files/results"
				        generated: "Y"
				  - applications:
				    - name: "featureProduct_intercloud_0"
				      command-line: "echo 'Hello World featureProduct intercloud'"
				      files:
				      - name: "results"
				        source: "$HOME/results/intercloud_results.json"
				        dest: "/opt/dohko/files/results"
				        generated: "Y"
				  - applications:
				    - name: "featureProduct_lift_0"
				      command-line: "echo 'Hello World featureProduct lift'"
				      files:
				      - name: "results"
				        source: "$HOME/results/lift_results.json"
				        dest: "/opt/dohko/files/results"
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
					Objects {description "SPL" scaleType Nominal { 
						O60341 {description "" files {{name "query" source "$HOME/sequences/O60341.fasta"}}} 
						}
					}
					
					Executions { 
						ssearch36 { 
							command "ssearch36 -d 0 ${object.file.query} ${treatment.file.database}" result {name "score_table" source "$HOME/scores/${object.name}_scores.txt"}
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
				description: "Reliability Analysis of Software Product Lines"
				user:
				  username: "user"
				  keys:
				  - name: "key"
				blocks:
				  - applications:
				    - name: "query1_O60341_0"
				      command-line: "ssearch36 -d 0 ${query} ${database}"
				      files:
				      - name: "score_table"
				        source: "$HOME/scores/O60341_scores.txt"
				        dest: "/opt/dohko/files/score_table"
				        generated: "Y"
				      - name: "query"
				        source: "$HOME/sequences/O60341.fasta"
				        dest: "/opt/dohko/files/query"
				        generated: "N"
				      - name: "database"
				        source: "$HOME/uniprot_sprot.fasta"
				        dest: "/opt/dohko/files/database"
				        generated: "N"
				  - applications:
				    - name: "query2_O60341_0"
				      command-line: "ssearch36 -d 0 ${query} ${database}"
				      files:
				      - name: "score_table"
				        source: "$HOME/scores/O60341_scores.txt"
				        dest: "/opt/dohko/files/score_table"
				        generated: "Y"
				      - name: "query"
				        source: "$HOME/sequences/O60341.fasta"
				        dest: "/opt/dohko/files/query"
				        generated: "N"
				      - name: "database"
				        source: "$HOME/uniprot_sprot.fasta"
				        dest: "/opt/dohko/files/database"
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
				  	runs 1
				  }	
				    Dependent Variables {
				      score { description "Analysis time" scaleType Absolute }
					}    
					 
					Factors { 
						query { description "Query" scaleType Nominal}
						} 
						
						Treatments { 
						 query1 description ""  factor query files {{name "database" source "$HOME/uniprot_sprot.fasta"}} execution ssearch36,
						 query2 description "" factor query files {{name "database" source "$HOME/uniprot_sprot2.fasta"}} execution ssearch36
						 
					
					}
					Objects {description "SPL" scaleType Nominal { 
						O60341 {description "" files {{name "query" source "$HOME/sequences/O60341.fasta"}}},
						O60342 {description "" files {{name "query" source "$HOME/sequences/O60342.fasta"}}} 
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
				description: "Reliability Analysis of Software Product Lines"
				user:
				  username: "user"
				  keys:
				  - name: "key"
				blocks:
				  - applications:
				    - name: "query1_O60341_0"
				      command-line: "ssearch36 -d 0 ${query} ${database}"
				      files:
				      - name: "query"
				        source: "$HOME/sequences/O60341.fasta"
				        dest: "/opt/dohko/files/query"
				        generated: "N"
				      - name: "database"
				        source: "$HOME/uniprot_sprot.fasta"
				        dest: "/opt/dohko/files/database"
				        generated: "N"
				  - applications:
				    - name: "query1_O60342_0"
				      command-line: "ssearch36 -d 0 ${query} ${database}"
				      files:
				      - name: "query"
				        source: "$HOME/sequences/O60342.fasta"
				        dest: "/opt/dohko/files/query"
				        generated: "N"
				      - name: "database"
				        source: "$HOME/uniprot_sprot.fasta"
				        dest: "/opt/dohko/files/database"
				        generated: "N"
				  - applications:
				    - name: "query2_O60341_0"
				      command-line: "ssearch36 -d 0 ${query} ${database}"
				      files:
				      - name: "query"
				        source: "$HOME/sequences/O60341.fasta"
				        dest: "/opt/dohko/files/query"
				        generated: "N"
				      - name: "database"
				        source: "$HOME/uniprot_sprot2.fasta"
				        dest: "/opt/dohko/files/database"
				        generated: "N"
				  - applications:
				    - name: "query2_O60342_0"
				      command-line: "ssearch36 -d 0 ${query} ${database}"
				      files:
				      - name: "query"
				        source: "$HOME/sequences/O60342.fasta"
				        dest: "/opt/dohko/files/query"
				        generated: "N"
				      - name: "database"
				        source: "$HOME/uniprot_sprot2.fasta"
				        dest: "/opt/dohko/files/database"
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
				Objects {description "SPL" scaleType Nominal{ 
					O60341 { description ""}
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
				description: "Reliability Analysis of Software Product Lines"
				user:
				  username: "user"
				  keys:
				  - name: "key"
				blocks:
				  - applications:
				    - name: "query1_O60341_0"
				      command-line: "ssearch36 -d 0 ${query} ${database}"
				      files:
				      - name: "score_table"
				        source: "$HOME/scores/O60341_scores.txt"
				        dest: "/opt/dohko/files/score_table"
				        generated: "Y"
				      - name: "query"
				        source: "$HOME/sequences/O60341.fasta"
				        dest: "/opt/dohko/files/query"
				        generated: "N"
				      - name: "database"
				        source: "$HOME/uniprot_sprot.fasta"
				        dest: "/opt/dohko/files/database"
				        generated: "N"
				      - name: "database"
				        source: "$HOME/uniprot_sprot.fasta"
				        dest: "/opt/dohko/files/database"
				        generated: "N"
				      - name: "query"
				        source: "$HOME/sequences/O60341.fasta"
				        dest: "/opt/dohko/files/query"
				        generated: "N"
				  - applications:
				    - name: "query2_O60341_0"
				      command-line: "ssearch36 -d 0 ${query} ${database}"
				      files:
				      - name: "score_table"
				        source: "$HOME/scores/O60341_scores.txt"
				        dest: "/opt/dohko/files/score_table"
				        generated: "Y"
				      - name: "query"
				        source: "$HOME/sequences/O60341.fasta"
				        dest: "/opt/dohko/files/query"
				        generated: "N"
				      - name: "database"
				        source: "$HOME/uniprot_sprot.fasta"
				        dest: "/opt/dohko/files/database"
				        generated: "N"
				      - name: "database"
				        source: "$HOME/uniprot_sprot.fasta"
				        dest: "/opt/dohko/files/database"
				        generated: "N"
				      - name: "query"
				        source: "$HOME/sequences/O60341.fasta"
				        dest: "/opt/dohko/files/query"
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
			  	runs 1
			  }	
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
				Objects {description "SPL" scaleType Nominal { 
					intercloud {description "" parameters {
						featureModel "intercloud/0.txt",umlModel "intercloud/0_behavioral_model.xml"}},
					lift {description "" parameters {
						featureModel "lift/0.txt",umlModel "lift/0_behavioral_model.xml"}}, 
					 
					bsn {description "" parameters {
						featureModel "bsn/0.txt",umlModel "bsn/0_behavioral_model.xml"}}, 	 
					eMail {description "" parameters {
						featureModel "email/0.txt",umlModel "email/0_behavioral_model.xml"}}, 	 
					tankwar {description "" parameters {
						featureModel "tankwar/0.txt",umlModel "tankwar/0_behavioral_model.xml"}}, 	 
					minepump {description "" parameters {
						featureModel "minepump/0.txt",umlModel "minepump/0_behavioral_model.xml"}} 	 
					}		
				}
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
				description: "Reliability Analysis of Software Product Lines"
				user:
				  username: "user"
				  keys:
				  - name: "key"
				blocks:
				  - applications:
				    - name: "featureFamily_intercloud_0"
				      command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Feature-family-based' 'intercloud' 1 11 'mongodb://localhost:27017/'"
				  - applications:
				    - name: "featureFamily_lift_0"
				      command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Feature-family-based' 'lift' 1 11 'mongodb://localhost:27017/'"
				  - applications:
				    - name: "featureFamily_bsn_0"
				      command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Feature-family-based' 'bsn' 1 11 'mongodb://localhost:27017/'"
				  - applications:
				    - name: "featureFamily_eMail_0"
				      command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Feature-family-based' 'eMail' 1 11 'mongodb://localhost:27017/'"
				  - applications:
				    - name: "featureFamily_tankwar_0"
				      command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Feature-family-based' 'tankwar' 1 11 'mongodb://localhost:27017/'"
				  - applications:
				    - name: "featureFamily_minepump_0"
				      command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Feature-family-based' 'minepump' 1 11 'mongodb://localhost:27017/'"
				  - applications:
				    - name: "featureProduct_intercloud_0"
				      command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Feature-product-based' 'intercloud' 1 11 'mongodb://localhost:27017/'"
				  - applications:
				    - name: "featureProduct_lift_0"
				      command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Feature-product-based' 'lift' 1 11 'mongodb://localhost:27017/'"
				  - applications:
				    - name: "featureProduct_bsn_0"
				      command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Feature-product-based' 'bsn' 1 11 'mongodb://localhost:27017/'"
				  - applications:
				    - name: "featureProduct_eMail_0"
				      command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Feature-product-based' 'eMail' 1 11 'mongodb://localhost:27017/'"
				  - applications:
				    - name: "featureProduct_tankwar_0"
				      command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Feature-product-based' 'tankwar' 1 11 'mongodb://localhost:27017/'"
				  - applications:
				    - name: "featureProduct_minepump_0"
				      command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Feature-product-based' 'minepump' 1 11 'mongodb://localhost:27017/'"
				  - applications:
				    - name: "product_intercloud_0"
				      command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Product-based' 'intercloud' 1 11 'mongodb://localhost:27017/'"
				  - applications:
				    - name: "product_lift_0"
				      command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Product-based' 'lift' 1 11 'mongodb://localhost:27017/'"
				  - applications:
				    - name: "product_bsn_0"
				      command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Product-based' 'bsn' 1 11 'mongodb://localhost:27017/'"
				  - applications:
				    - name: "product_eMail_0"
				      command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Product-based' 'eMail' 1 11 'mongodb://localhost:27017/'"
				  - applications:
				    - name: "product_tankwar_0"
				      command-line: "docker exec -dt scalabilityAnalysis1 /reana-evaluation/run_analysis.sh 'Product-based' 'tankwar' 1 11 'mongodb://localhost:27017/'"
				  - applications:
				    - name: "product_minepump_0"
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

	
	 
	 				 
	 Research Hypotheses {
	 	rh1 {time featureFamily = product description ""},
	 	rh2 {time featureFamily = featureProduct description ""},
	 	rh3 {time featureFamily = family description ""},
	 	rh4 {time featureFamily = familyProduct description ""}
	 	
	 	
	 	}
	 	
	 	Experimental Design {
	 	   runs 2 
	 	   Restrictions {
	 	 	  	product objects {bsn},
	 	 	  	product objects {eMail},
	 	 	  	family objects{intercloud,minepump},
	 	 	  	featureProduct objects {lift,bsn},
	 	 	  	familyProduct objects {bsn,eMail,minepump}
	 }
	 
	 	}  
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
	 Objects {description "SPL" scaleType Nominal { 
	 	intercloud {description "Intercloud" parameters {
	 		featureModel "intercloud/0.txt",umlModel "intercloud/0_behavioral_model.xml"}},
	 	lift {description "Lift" parameters {
	 		featureModel "lift/0.txt",umlModel "lift/0_behavioral_model.xml"}}, 
	 		
	 	bsn {description "BSN" parameters {
	 		featureModel "bsn/0.txt",umlModel "bsn/0_behavioral_model.xml"}}, 	 
	 	eMail {description "Email" parameters {
	 		featureModel "email/0.txt",umlModel "email/0_behavioral_model.xml"}}, 	 
	 	tankwar {description "Tank War" parameters {
	 		featureModel "tankwar/0.txt",umlModel "tankwar/0_behavioral_model.xml"}}, 	 
	 	minepump {description "Minepump" parameters {
	 		featureModel "minepump/0.txt",umlModel "minepump/0_behavioral_model.xml"}} 	 
	 	}			
	 }
	
	 
	
	 Executions { 
	 	reanaEvaluator { 
	 		command "java -jar reanaSpl.jar --analysis-strategy='${treatment.parameter.argument}' --feature-model='${object.parameter.featureModel}' --uml-model='${object.parameter.umlModel}'" 
	 		
	 		
	 		   
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
				description: ""
				user:
				  username: "vagrant"
				blocks:
				  - applications:
				    - name: "family_intercloud_0"
				      command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='intercloud/0.txt' --uml-model='intercloud/0_behavioral_model.xml'"
				    - name: "family_intercloud_1"
				      command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='intercloud/0.txt' --uml-model='intercloud/0_behavioral_model.xml'"
				  - applications:
				    - name: "family_minepump_0"
				      command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='minepump/0.txt' --uml-model='minepump/0_behavioral_model.xml'"
				    - name: "family_minepump_1"
				      command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='minepump/0.txt' --uml-model='minepump/0_behavioral_model.xml'"
				  - applications:
				    - name: "familyProduct_bsn_0"
				      command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='bsn/0.txt' --uml-model='bsn/0_behavioral_model.xml'"
				    - name: "familyProduct_bsn_1"
				      command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='bsn/0.txt' --uml-model='bsn/0_behavioral_model.xml'"
				  - applications:
				    - name: "familyProduct_eMail_0"
				      command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='email/0.txt' --uml-model='email/0_behavioral_model.xml'"
				    - name: "familyProduct_eMail_1"
				      command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='email/0.txt' --uml-model='email/0_behavioral_model.xml'"
				  - applications:
				    - name: "familyProduct_minepump_0"
				      command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='minepump/0.txt' --uml-model='minepump/0_behavioral_model.xml'"
				    - name: "familyProduct_minepump_1"
				      command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='minepump/0.txt' --uml-model='minepump/0_behavioral_model.xml'"
				  - applications:
				    - name: "featureFamily_intercloud_0"
				      command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='intercloud/0.txt' --uml-model='intercloud/0_behavioral_model.xml'"
				    - name: "featureFamily_intercloud_1"
				      command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='intercloud/0.txt' --uml-model='intercloud/0_behavioral_model.xml'"
				  - applications:
				    - name: "featureFamily_lift_0"
				      command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='lift/0.txt' --uml-model='lift/0_behavioral_model.xml'"
				    - name: "featureFamily_lift_1"
				      command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='lift/0.txt' --uml-model='lift/0_behavioral_model.xml'"
				  - applications:
				    - name: "featureFamily_bsn_0"
				      command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='bsn/0.txt' --uml-model='bsn/0_behavioral_model.xml'"
				    - name: "featureFamily_bsn_1"
				      command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='bsn/0.txt' --uml-model='bsn/0_behavioral_model.xml'"
				  - applications:
				    - name: "featureFamily_eMail_0"
				      command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='email/0.txt' --uml-model='email/0_behavioral_model.xml'"
				    - name: "featureFamily_eMail_1"
				      command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='email/0.txt' --uml-model='email/0_behavioral_model.xml'"
				  - applications:
				    - name: "featureFamily_tankwar_0"
				      command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='tankwar/0.txt' --uml-model='tankwar/0_behavioral_model.xml'"
				    - name: "featureFamily_tankwar_1"
				      command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='tankwar/0.txt' --uml-model='tankwar/0_behavioral_model.xml'"
				  - applications:
				    - name: "featureFamily_minepump_0"
				      command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='minepump/0.txt' --uml-model='minepump/0_behavioral_model.xml'"
				    - name: "featureFamily_minepump_1"
				      command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='minepump/0.txt' --uml-model='minepump/0_behavioral_model.xml'"
				  - applications:
				    - name: "featureProduct_lift_0"
				      command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='lift/0.txt' --uml-model='lift/0_behavioral_model.xml'"
				    - name: "featureProduct_lift_1"
				      command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='lift/0.txt' --uml-model='lift/0_behavioral_model.xml'"
				  - applications:
				    - name: "featureProduct_bsn_0"
				      command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='bsn/0.txt' --uml-model='bsn/0_behavioral_model.xml'"
				    - name: "featureProduct_bsn_1"
				      command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='bsn/0.txt' --uml-model='bsn/0_behavioral_model.xml'"
				  - applications:
				    - name: "product_bsn_0"
				      command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='bsn/0.txt' --uml-model='bsn/0_behavioral_model.xml'"
				    - name: "product_bsn_1"
				      command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='bsn/0.txt' --uml-model='bsn/0_behavioral_model.xml'"
				  - applications:
				    - name: "product_eMail_0"
				      command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='email/0.txt' --uml-model='email/0_behavioral_model.xml'"
				    - name: "product_eMail_1"
				      command-line: "java -jar reanaSpl.jar --analysis-strategy='arg' --feature-model='email/0.txt' --uml-model='email/0_behavioral_model.xml'"
			'''
			assertCompilesToWithFileExtension(applicationDescriptor, ".yml")
			applicationDescriptor.convert
		]
	}
	
	@Test
	def void testPreProcessing() {
		''' 
			Experiment reanaSpl {
				description "Reliability Analysis of Software Product Lines" 
				     
				Research Hypotheses {
					RH1 {time featureFamily = featureProduct}
				}
				Experimental Design {
				  	runs 2
				}  
				Dependent Variables {
				    time { description "Analysis time" scaleType Absolute instrument timeInstrument }
				}
				Instruments {
				    timeInstrument {command  "/usr/bin/time -f 'Elapsed Real Time (secs): %e'"  valueExpression "Elapsed Real Time (secs):"}
				} 
				Factors { 
					strategy { description "Analysis Strategy" scaleType Nominal}
				} 
				Treatments { 
				    featureFamily description "" factor strategy execution cat,
					featureProduct description "" factor strategy execution cat
				}
				Objects {description "SPL" scaleType Nominal { lift {description ""},bsn {description ""}}} 	
										 
				Executions {
					cat {command "cat /opt/dohko/${treatment.name}/${object.name}.dat" timeout 10 
						preprocessing {
							mkdir{command "mkdir -p /opt/dohko/${treatment.name}"},
							echo{command "echo 'Treatment: ${treatment.name} Object: ${object.name}' >> /opt/dohko/${treatment.name}/${object.name}.dat"}
						}
					}
				}						 
				
				Infrastructure {
					user {
						username "vagrant" 
					}
				}
			}

		''' => [
			val applicationDescriptor = '''
				---
				name: "reanaSpl"
				description: "Reliability Analysis of Software Product Lines"
				user:
				  username: "vagrant"
				blocks:
				  - applications:
				    - name: "pre_mkdir_featureFamily_lift_0"
				      command-line: "mkdir -p /opt/dohko/featureFamily"
				    - name: "pre_echo_featureFamily_lift_0"
				      command-line: "echo 'Treatment: featureFamily Object: lift' >> /opt/dohko/featureFamily/lift.dat"
				    - name: "featureFamily_lift_0"
				      command-line: "/usr/bin/time -f 'Elapsed Real Time (secs): %e' cat /opt/dohko/featureFamily/lift.dat"
				      timeout: 10
				    - name: "pre_mkdir_featureFamily_lift_1"
				      command-line: "mkdir -p /opt/dohko/featureFamily"
				    - name: "pre_echo_featureFamily_lift_1"
				      command-line: "echo 'Treatment: featureFamily Object: lift' >> /opt/dohko/featureFamily/lift.dat"
				    - name: "featureFamily_lift_1"
				      command-line: "/usr/bin/time -f 'Elapsed Real Time (secs): %e' cat /opt/dohko/featureFamily/lift.dat"
				      timeout: 10
				  - applications:
				    - name: "pre_mkdir_featureFamily_bsn_0"
				      command-line: "mkdir -p /opt/dohko/featureFamily"
				    - name: "pre_echo_featureFamily_bsn_0"
				      command-line: "echo 'Treatment: featureFamily Object: bsn' >> /opt/dohko/featureFamily/bsn.dat"
				    - name: "featureFamily_bsn_0"
				      command-line: "/usr/bin/time -f 'Elapsed Real Time (secs): %e' cat /opt/dohko/featureFamily/bsn.dat"
				      timeout: 10
				    - name: "pre_mkdir_featureFamily_bsn_1"
				      command-line: "mkdir -p /opt/dohko/featureFamily"
				    - name: "pre_echo_featureFamily_bsn_1"
				      command-line: "echo 'Treatment: featureFamily Object: bsn' >> /opt/dohko/featureFamily/bsn.dat"
				    - name: "featureFamily_bsn_1"
				      command-line: "/usr/bin/time -f 'Elapsed Real Time (secs): %e' cat /opt/dohko/featureFamily/bsn.dat"
				      timeout: 10
				  - applications:
				    - name: "pre_mkdir_featureProduct_lift_0"
				      command-line: "mkdir -p /opt/dohko/featureProduct"
				    - name: "pre_echo_featureProduct_lift_0"
				      command-line: "echo 'Treatment: featureProduct Object: lift' >> /opt/dohko/featureProduct/lift.dat"
				    - name: "featureProduct_lift_0"
				      command-line: "/usr/bin/time -f 'Elapsed Real Time (secs): %e' cat /opt/dohko/featureProduct/lift.dat"
				      timeout: 10
				    - name: "pre_mkdir_featureProduct_lift_1"
				      command-line: "mkdir -p /opt/dohko/featureProduct"
				    - name: "pre_echo_featureProduct_lift_1"
				      command-line: "echo 'Treatment: featureProduct Object: lift' >> /opt/dohko/featureProduct/lift.dat"
				    - name: "featureProduct_lift_1"
				      command-line: "/usr/bin/time -f 'Elapsed Real Time (secs): %e' cat /opt/dohko/featureProduct/lift.dat"
				      timeout: 10
				  - applications:
				    - name: "pre_mkdir_featureProduct_bsn_0"
				      command-line: "mkdir -p /opt/dohko/featureProduct"
				    - name: "pre_echo_featureProduct_bsn_0"
				      command-line: "echo 'Treatment: featureProduct Object: bsn' >> /opt/dohko/featureProduct/bsn.dat"
				    - name: "featureProduct_bsn_0"
				      command-line: "/usr/bin/time -f 'Elapsed Real Time (secs): %e' cat /opt/dohko/featureProduct/bsn.dat"
				      timeout: 10
				    - name: "pre_mkdir_featureProduct_bsn_1"
				      command-line: "mkdir -p /opt/dohko/featureProduct"
				    - name: "pre_echo_featureProduct_bsn_1"
				      command-line: "echo 'Treatment: featureProduct Object: bsn' >> /opt/dohko/featureProduct/bsn.dat"
				    - name: "featureProduct_bsn_1"
				      command-line: "/usr/bin/time -f 'Elapsed Real Time (secs): %e' cat /opt/dohko/featureProduct/bsn.dat"
				      timeout: 10
			'''
			assertCompilesToWithFileExtension(applicationDescriptor,".yml")
			applicationDescriptor.convert

		]
	}

	@Test
	def void testPostProcessing() {
		''' 
			Experiment reanaSpl {
				description "Reliability Analysis of Software Product Lines" 
				     
				Research Hypotheses {
					RH1 {time featureFamily = featureProduct}
				}
				Experimental Design {
				  	runs 2
				}  
				Dependent Variables {
				    time { description "Analysis time" scaleType Absolute instrument timeInstrument }
				}
				Instruments {
				    timeInstrument {command  "/usr/bin/time -f 'Elapsed Real Time (secs): %e'"  valueExpression "Elapsed Real Time (secs):"}
				} 
				Factors { 
					strategy { description "Analysis Strategy" scaleType Nominal}
				} 
				Treatments { 
				    featureFamily description "" factor strategy execution cat,
					featureProduct description "" factor strategy execution cat
				}
				Objects {description "SPL" scaleType Nominal { lift {description ""},bsn {description ""}}} 	
										 
				Executions {
					cat {command "cat /opt/dohko/${treatment.name}/${object.name}.dat" timeout 10 
						postprocessing {
							rmdir{command "rm -f /opt/dohko/${treatment.name}/${object.name}.dat"}
						}
					}
				}						 
				
				Infrastructure {
					user {
						username "vagrant" 
					}
				}
			}
		''' => [
			val applicationDescriptor = '''
				---
				name: "reanaSpl"
				description: "Reliability Analysis of Software Product Lines"
				user:
				  username: "vagrant"
				blocks:
				  - applications:
				    - name: "featureFamily_lift_0"
				      command-line: "/usr/bin/time -f 'Elapsed Real Time (secs): %e' cat /opt/dohko/featureFamily/lift.dat"
				      timeout: 10
				    - name: "post_rmdir_featureFamily_lift_0"
				      command-line: "rm -f /opt/dohko/featureFamily/lift.dat"
				    - name: "featureFamily_lift_1"
				      command-line: "/usr/bin/time -f 'Elapsed Real Time (secs): %e' cat /opt/dohko/featureFamily/lift.dat"
				      timeout: 10
				    - name: "post_rmdir_featureFamily_lift_1"
				      command-line: "rm -f /opt/dohko/featureFamily/lift.dat"
				  - applications:
				    - name: "featureFamily_bsn_0"
				      command-line: "/usr/bin/time -f 'Elapsed Real Time (secs): %e' cat /opt/dohko/featureFamily/bsn.dat"
				      timeout: 10
				    - name: "post_rmdir_featureFamily_bsn_0"
				      command-line: "rm -f /opt/dohko/featureFamily/bsn.dat"
				    - name: "featureFamily_bsn_1"
				      command-line: "/usr/bin/time -f 'Elapsed Real Time (secs): %e' cat /opt/dohko/featureFamily/bsn.dat"
				      timeout: 10
				    - name: "post_rmdir_featureFamily_bsn_1"
				      command-line: "rm -f /opt/dohko/featureFamily/bsn.dat"
				  - applications:
				    - name: "featureProduct_lift_0"
				      command-line: "/usr/bin/time -f 'Elapsed Real Time (secs): %e' cat /opt/dohko/featureProduct/lift.dat"
				      timeout: 10
				    - name: "post_rmdir_featureProduct_lift_0"
				      command-line: "rm -f /opt/dohko/featureProduct/lift.dat"
				    - name: "featureProduct_lift_1"
				      command-line: "/usr/bin/time -f 'Elapsed Real Time (secs): %e' cat /opt/dohko/featureProduct/lift.dat"
				      timeout: 10
				    - name: "post_rmdir_featureProduct_lift_1"
				      command-line: "rm -f /opt/dohko/featureProduct/lift.dat"
				  - applications:
				    - name: "featureProduct_bsn_0"
				      command-line: "/usr/bin/time -f 'Elapsed Real Time (secs): %e' cat /opt/dohko/featureProduct/bsn.dat"
				      timeout: 10
				    - name: "post_rmdir_featureProduct_bsn_0"
				      command-line: "rm -f /opt/dohko/featureProduct/bsn.dat"
				    - name: "featureProduct_bsn_1"
				      command-line: "/usr/bin/time -f 'Elapsed Real Time (secs): %e' cat /opt/dohko/featureProduct/bsn.dat"
				      timeout: 10
				    - name: "post_rmdir_featureProduct_bsn_1"
				      command-line: "rm -f /opt/dohko/featureProduct/bsn.dat"
			'''
			assertCompilesToWithFileExtension(applicationDescriptor,".yml")
			applicationDescriptor.convert

		]
	}	
}
