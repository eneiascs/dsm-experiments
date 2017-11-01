module Common where

data Infrastructure = Infrastructure {infRequirement :: Requirement, infPreconditions :: [Precondition]}
  deriving (Show, Eq, Ord) 

data Requirement = Requirement {cpu ::Cpu, memory :: Memory, platform :: Platform, cost :: Cost, numberOfInstancesPerCloud :: NumberOfInstancePerCloud}
  deriving (Show, Eq, Ord) 


data File = File {fileName :: Name, path :: Path}
  deriving (Show, Eq, Ord) 


type Cpu=Int
type Memory=Int
type Platform=String
type Cost=Double
type NumberOfInstancePerCloud=Int



type Name = String
type Description = String

type Command = String

type Precondition =  String 

type Result = File


type Path = String


