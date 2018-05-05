package br.unb.autoexp.storage.repository

import br.unb.autoexp.storage.entity.ExperimentExecution
import java.util.List
import org.springframework.data.mongodb.repository.MongoRepository

interface ExperimentExecutionRepository extends MongoRepository<ExperimentExecution, String> {

   def List<ExperimentExecution> findByJobId(String jobId)
   def List<ExperimentExecution> findByTaskId(String taskId)
	
}