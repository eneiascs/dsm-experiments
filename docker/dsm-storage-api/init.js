db=connect("mongodb://dsm-storage-mongo:27017/experiments")
db.experimentExecution.createIndex( { "taskId": 1 }, { unique: true } )
db.experimentDesign.createIndex( { "jobId": 1 }, { unique: true } )
db.experimentExecution.createIndex( { "jobId": 1 }, { unique: false } )
