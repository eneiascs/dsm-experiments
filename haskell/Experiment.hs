module Experiment where
import Common

data Experiment = Experiment {researchHypotheses :: [ResearchHypothesis], design :: ExperimentalDesign,infrastructure :: Infrastructure}
  deriving (Show, Eq, Ord) 


data ResearchHypothesis = ResearchHypothesis {hName :: Name, formula :: ResearchHypothesisFormula}
  deriving (Show, Eq, Ord) 

data ResearchHypothesisFormula = ResearchHypothesisFormula {dependentVariable :: DependentVariable, treatment1 :: Treatment, operator :: Operator, treatment2 :: Treatment}
  deriving (Show, Eq, Ord) 

data ExperimentalDesign =  ExperimentalDesign {runs :: Runs, objects :: [ExperimentalObject], restrictions :: [Restriction]}
  deriving (Show, Eq, Ord) 

data DependentVariable = DependentVariable {dvName :: Name, dvDescription :: Description, scaleType :: ScaleType}
  deriving (Show, Eq, Ord) 

data Factor = Factor {fName :: Name, fDescription :: Description}
  deriving (Show, Eq, Ord) 

data Treatment = Treatment {tName :: Name, tDescription :: Description, factor :: Factor, execution :: Execution}
  deriving (Show, Eq, Ord) 

data ExperimentalObject = ExperimentalObject {oName :: Name, oDescription :: Description}
  deriving (Show, Eq, Ord) 

data Restriction = Restriction {rTreatment :: Treatment, rObjects :: [ExperimentalObject]}
  deriving (Show, Eq, Ord) 

data Execution = Execution {eName :: Name, eCommand :: Command, ePreconditions :: [Precondition], eResult :: Result, eFiles :: [File]}
  deriving (Show, Eq, Ord) 



data Operator = Equals
  deriving (Show, Eq, Ord) 


type Runs=Int


data ScaleType = Absolute | Ratio | Interval | Ordinal | Nominal
  deriving (Show, Eq, Ord) 








