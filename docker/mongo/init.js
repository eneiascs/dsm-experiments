conn = new Mongo();
db = conn.getDB("experiments");
db.experimentDesign.createIndex({ "jobId": 1 }, { unique: true } )
db.experimentExecution.createIndex({ "jobId": 1 }, { unique: false } )
db.experimentExecution.createIndex({ "taskId": 1 }, { unique: true } )
