module RScript where
import Experiment
import Dohko
data RScript = RScript {hypothesesTests :: [HypothesisTest], expObjects :: [ExperimentalObject]} 

data HypothesisTest = HypothesisTest {researchHypothesis :: ResearchHypothesis, analysisFunction :: AnalysisFunction} 
data AnalysisFunction = AnalysisFunction {functionName :: String, function :: [ExecutionResult]->[ExecutionResult]->HypothesisObjectResult} 


analyze :: RScript -> [ExecutionResult] -> [HypothesisResult]
analyze rscript executionResults = map (testHypothesis executionResults (expObjects rscript)) (hypothesesTests rscript)

testHypothesis :: [ExecutionResult] -> [ExperimentalObject]->HypothesisTest -> HypothesisResult
testHypothesis executionResults objs hypothesisTest = HypothesisResult (map (applyAnalysisFunction executionResults hypothesisTest)  objs)


applyAnalysisFunction :: [ExecutionResult] ->HypothesisTest -> ExperimentalObject -> HypothesisObjectResult
applyAnalysisFunction executionResults (HypothesisTest researchHypothesis analysisFunction) obj= 
  (function analysisFunction) sample1 sample2
  where sample1 = ([ result | result <- executionResults, (resDependentVariable result) == (dependentVariable researchHypothesis) && (object result)==obj && (treatment result)==(treatment1 researchHypothesis)])
        sample2 = ([ result | result <- executionResults, (resDependentVariable result) == (dependentVariable researchHypothesis) && (object result)==obj && (treatment result)==(treatment2 researchHypothesis)])
		
