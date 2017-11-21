module ExperimentFunctions where
import Experiment 
import Dohko
import RScript

experiment :: Experiment -> [HypothesisResult]
experiment exp= analyze (generateRScript exp) (map createExecutionResult (zip (generateListOfExecutions exp) (dohko (compileDohko exp)))) 


compileDohko :: Experiment -> ApplicationDescriptor
compileDohko experiment = ApplicationDescriptor (map compileApplication (generateListOfExecutions experiment))  

generateListOfExecutions :: Experiment -> [(Treatment,ExperimentalObject,DependentVariable)]
generateListOfExecutions experiment = concatMap (applyDesign (design experiment) (objects experiment)) (researchHypotheses experiment)

applyDesign :: ExperimentalDesign -> [ExperimentalObject]-> ResearchHypothesis -> [(Treatment,ExperimentalObject,DependentVariable)]
applyDesign design objects hypothesis =concatMap (replicate (runs design)) (map (applyDependentVariable (dependentVariable hypothesis)) ((designFunction design) ([treatment1 hypothesis, treatment2 hypothesis]) objects))

applyDependentVariable :: DependentVariable -> (Treatment,ExperimentalObject) ->(Treatment,ExperimentalObject,DependentVariable)
applyDependentVariable depVariable (treatment, object)=(treatment,object,depVariable) 

compileApplication ::(Treatment,ExperimentalObject, DependentVariable) -> Application
compileApplication (treatment,object, depVariable) = Application (instrument depVariable) (treatmentCommand treatment) (argument object)



applyTreatment :: Treatment -> DependentVariable -> ExperimentalObject -> (Treatment,ExperimentalObject, DependentVariable)
applyTreatment treatment depVariable object = (treatment, object,depVariable)

createExecutionResult :: ((Treatment,ExperimentalObject, DependentVariable),IO Float)->ExecutionResult
createExecutionResult ((treat, obj, depVariable), value) = ExecutionResult depVariable treat obj value


generateRScript :: Experiment -> RScript
generateRScript experiment = RScript (map generateHypothesis (researchHypotheses experiment)) (objects experiment)


generateHypothesis :: ResearchHypothesis -> HypothesisTest 
generateHypothesis rh = HypothesisTest rh (AnalysisFunction "wilcoxTest" wilcoxTest)

wilcoxTest :: [ExecutionResult]->[ExecutionResult]->HypothesisObjectResult
wilcoxTest sample1 sample2 = HypothesisObjectResult "some result" 


