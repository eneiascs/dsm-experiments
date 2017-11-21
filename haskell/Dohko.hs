module Dohko where
import Experiment 
import System.Random
data ApplicationDescriptor = ApplicationDescriptor {applications :: [Application]} deriving (Show, Eq, Ord) 
  
data Application = Application {appInstrument :: Instrument, appCommand :: String, appArgument:: String} deriving (Show, Eq, Ord) 

data ExecutionResult = ExecutionResult {resDependentVariable :: DependentVariable, treatment :: Treatment, object :: ExperimentalObject, value :: IO Float}



--An Application Descriptor contains a list of Applications in which each Application contains an instrument, specified by the dependent variable, an execution command, specified by the treatment, and an argument, specified by the experimental object. Each application command is executed by Dohko and the instrument is applyed to collect the value for the dependent variable at hand. The result is a list of values in which each value corresponds to the execution of a triple (dependent variable, treatment, object).  

dohko :: ApplicationDescriptor -> [IO Float]
dohko applicationDescriptor =map execute (applications applicationDescriptor) 


execute :: Application -> IO Float
execute application = getStdRandom (randomR (1,1000)) 
