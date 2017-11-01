import Common 
import Experiment 
import Dohko
import DohkoGenerator
import RScript
import RScriptGenerator 
main = do
  let result = File "result" "/opt/result.txt"
  let reanaSpl = Execution "reanaSpl" "java -jar reanaSpl.jar --analysis-strategy=${treatment.name} --spl=${object.name}" [] result []
  let strategy = Factor "strategy" "Analysis Strategy"
  let featureFamily= Treatment "featureFamily" "Feature Family" strategy reanaSpl
  let featureProduct= Treatment "featureProduct" "Feature Product" strategy reanaSpl
  let time = DependentVariable "time" "Analysis time" Absolute
  let memory = DependentVariable "memory" "Memory Consumption" Absolute
  let rh1 = ResearchHypothesis "RH1" (ResearchHypothesisFormula time featureFamily Equals featureProduct)
  let rh2 = ResearchHypothesis "RH2" (ResearchHypothesisFormula memory featureFamily Equals featureProduct)
  let bsn = ExperimentalObject "bsn" "BSN SPL"
  let email = ExperimentalObject "email" "Email SPL"
  let lift = ExperimentalObject "lift" "Lift SPL"
  let intercloud = ExperimentalObject "intercloud" "Intercloud SPL"
  let minepump = ExperimentalObject "minepump" "Minepump SPL"
  let tankwar = ExperimentalObject "tankwar" "Tankwar SPL"
  let rest1 = Restriction featureFamily [bsn,email,lift,intercloud]
  let rest2 = Restriction featureProduct [bsn,email,lift]
  let design = ExperimentalDesign 2 [bsn,email,lift,intercloud,minepump,tankwar] [rest1,rest2]
  let infrastructure=Infrastructure (Requirement 2 4 "LINUX" 0.2 1) [] 
  let experiment = Experiment [rh1,rh2] design infrastructure
  let applicationDescriptor = compileDohko experiment
 
  print applicationDescriptor
  let applications = adApplications applicationDescriptor
  print (length applications)
  let rscript = compileRScript experiment
  print rscript
 
