
import Experiment 
import Dohko
import ExperimentFunctions
import RScript

func:: [Treatment]->[ExperimentalObject]->[(Treatment,ExperimentalObject)]
func treatments objects =[(treatment,object) | treatment <- treatments, object<-objects]
main = do
  
  let featureFamily= Treatment "featureFamily" "java -jar reanaSpl.jar --analysis-strategy='FEATURE_FAMILY'" 
  let featureProduct= Treatment "featureProduct" "java -jar reanaSpl.jar --analysis-strategy='FEATURE_PRODUCT'" 
  let memoryInstrument = Instrument "time"
  let timeInstrument = Instrument "memory"
  let time = DependentVariable "time" timeInstrument
  let memory = DependentVariable "memory" memoryInstrument
  let rh1 = ResearchHypothesis "RH1" time featureFamily featureProduct
  let rh2 = ResearchHypothesis "RH2" memory featureFamily featureProduct
  let bsn = ExperimentalObject "bsn" "--feature-model='bsn.txt' ----uml-models='bsn_behavioral_model.xml'"
  let email = ExperimentalObject "email" "--feature-model='email.txt' ----uml-models='email_behavioral_model.xml'"
  let lift = ExperimentalObject "lift" "--feature-model='lift.txt' ----uml-models='lift_behavioral_model.xml'"
  let intercloud = ExperimentalObject "intercloud" "--feature-model='intercloud.txt' ----uml-models='intercloud_behavioral_model.xml'"
  let minepump = ExperimentalObject "minepump" "--feature-model='minepump.txt' ----uml-models='minepump_behavioral_model.xml'"
  let tankwar = ExperimentalObject "tankwar" "--feature-model='tankwar.txt' ----uml-models='tankwar_behavioral_model.xml'"
  let design = ExperimentalDesign 2 func 
  let exp = Experiment [rh1,rh2] design [featureFamily,featureProduct] [bsn,email,lift,intercloud,minepump,tankwar] [time,memory] [timeInstrument,memoryInstrument]
  let applicationDescriptor = compileDohko exp
  let rscript = generateRScript exp
  let executionResults = dohko applicationDescriptor
  let experimentResults= experiment exp
  print applicationDescriptor
  print experimentResults
  
 
