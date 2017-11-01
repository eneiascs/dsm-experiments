module Dohko where
import Common 

data ApplicationDescriptor = ApplicationDescriptor {adRequirement :: Requirement, adPrecondition :: [Precondition], adApplications :: [Application]}
  deriving (Show, Eq, Ord)
data Application = Application {appName :: Name, appCommand :: Command, appPreconditions :: [Precondition], appResult :: Result, appFiles :: [File]}
  deriving (Show, Eq, Ord)




