module DohkoGenerator where
import Data.String.Utils
import Experiment 
import Dohko
import Common 


compileDohko :: Experiment -> ApplicationDescriptor
compileDohko (Experiment rh design (Infrastructure requirement preconditions)) = ApplicationDescriptor requirement preconditions (compileApplications rh design)


compileApplications :: [ResearchHypothesis] -> ExperimentalDesign -> [Application]
compileApplications hypotheses (ExperimentalDesign runs objects restrictions) = 
  concatMap (replicate runs) (map compileApplication (applyTreatments (removeDuplicates (getTreatments hypotheses)) objects restrictions))  

applyTreatments :: [Treatment] -> [ExperimentalObject] -> [Restriction] -> [Execution]
applyTreatments [] _ _  = []
applyTreatments (x:xs) objects []  = applyTreatment x objects ++ applyTreatments xs objects []
applyTreatments (x:xs) objects restrictions  = applyTreatment x (filterObjects x restrictions) ++ applyTreatments xs objects restrictions


applyTreatment :: Treatment -> [ExperimentalObject] -> [Execution]
applyTreatment _ [] = []  
applyTreatment treatment (x:xs) = [(execution treatment) {eCommand = (replaceParameters (eCommand (execution treatment)) (tName treatment) (oName x))}] ++ applyTreatment treatment xs



replaceParameters :: Command -> Name -> Name -> Command
replaceParameters command treatmentName objectName = replace "${object.name}" objectName (replace "${treatment.name}" treatmentName command)
 
getTreatments :: [ResearchHypothesis] -> [Treatment]
getTreatments [] = []
getTreatments (x:xs) = getTreatmentsFromHypothesis x ++ getTreatments xs  
  


getTreatmentsFromHypothesis :: ResearchHypothesis -> [Treatment]
getTreatmentsFromHypothesis (ResearchHypothesis _ formula) =  [treatment1 formula] ++ [treatment2 formula]


filterObjects :: Treatment -> [Restriction] -> [ExperimentalObject]
filterObjects treatment restrictions = concat [objects|(Restriction treatmentRestriction objects)<-restrictions, treatment == treatmentRestriction] 

compileApplication :: Execution -> Application
compileApplication (Execution name command preconditions result files) = Application name command preconditions result files

removeDuplicates :: (Eq a) => [a] -> [a]
removeDuplicates [] = []
removeDuplicates [x] = [x]
removeDuplicates (x:xs) = x : [ k  | k <- removeDuplicates(xs), k /=x ]


