package br.unb.autoexp.storage.repository

import br.unb.autoexp.storage.entity.ExperimentDesign
import java.util.List
import org.springframework.data.mongodb.repository.MongoRepository

interface ExperimentDesignRepository extends MongoRepository<ExperimentDesign, String> {

	def ExperimentDesign findByJobId(String jobId)

	def List<ExperimentDesign> findByName(String name)

}
