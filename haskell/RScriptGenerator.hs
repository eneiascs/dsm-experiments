module RScriptGenerator where
import Experiment 
import RScript
 


generateRScript :: Experiment -> RScript
generateRScript experiment = RScript (map generateHypothesis (researchHypotheses experiment)) (objects experiment)


generateHypothesis :: ResearchHypothesis -> HypothesisTest 
generateHypothesis rh = HypothesisTest rh (AnalysisFunction "wilcoxTest" wilcoxTest)

wilcoxTest :: [ExecutionResult]->[ExecutionResult]->HypothesisObjectResult
wilcoxTest sample1 sample2 = HypothesisObjectResult "some result" 
