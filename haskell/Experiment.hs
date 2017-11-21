module Experiment where

data Experiment = Experiment {researchHypotheses :: [ResearchHypothesis], design :: ExperimentalDesign, treatments:: [Treatment], objects:: [ExperimentalObject], dependentVariables :: [DependentVariable], instruments :: [Instrument]} 
data ResearchHypothesis = ResearchHypothesis {hypothesisName :: String, dependentVariable :: DependentVariable, treatment1 :: Treatment, treatment2 :: Treatment} deriving (Show, Eq, Ord) 
data DependentVariable = DependentVariable {dvName :: String, instrument :: Instrument} deriving (Show, Eq, Ord) 
data Instrument = Instrument { instrumentCommand :: String} deriving (Show, Eq, Ord) 
data ExperimentalDesign =  ExperimentalDesign {runs :: Int, designFunction :: [Treatment]->[ExperimentalObject] ->[(Treatment,ExperimentalObject)] } 
data Treatment = Treatment {treatmentName :: String, treatmentCommand :: String} deriving (Show, Eq, Ord) 
data ExperimentalObject = ExperimentalObject {objectName :: String, argument:: String} deriving (Show, Eq, Ord)

data HypothesisResult = HypothesisResult {objectResults :: [HypothesisObjectResult]} deriving (Show, Eq, Ord)  
data HypothesisObjectResult = HypothesisObjectResult {objectResult :: String}  deriving (Show, Eq, Ord) 


 










