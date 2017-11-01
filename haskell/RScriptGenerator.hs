module RScriptGenerator where
import Data.String.Utils
import Common
import Experiment 
import RScript
 


compileRScript :: Experiment -> RScript
compileRScript (Experiment rh design infrastructure) = RScript (map compileHypothesis rh)


compileHypothesis :: ResearchHypothesis -> HypothesisAnalysis 
compileHypothesis rh = HypothesisAnalysis (compileDescriptiveStatistics rh) (compileParametricTest rh) (compileNonParametricTest rh) (compileComparison rh)


compileDescriptiveStatistics :: ResearchHypothesis -> [Command]
compileDescriptiveStatistics rh = ["Treatments data commands"]

compileParametricTest :: ResearchHypothesis -> [Command]
compileParametricTest rh = ["Parametric test commands"]

compileNonParametricTest :: ResearchHypothesis -> [Command]
compileNonParametricTest rh = ["Non Parametric test commands"]

compileComparison :: ResearchHypothesis -> [Command]
compileComparison rh = ["Comparison commands"]
