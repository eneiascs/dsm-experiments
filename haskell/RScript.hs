module RScript where
import Common
data RScript = RScript {
  hypotheses :: [HypothesisAnalysis]
    
}deriving (Show, Eq, Ord)

data HypothesisAnalysis = HypothesisAnalysis {
  descriptiveStatistics :: [Command],
  parametricTest :: [Command],
  nonParametricTest :: [Command],
  comparison :: [Command]

}deriving (Show, Eq, Ord)

