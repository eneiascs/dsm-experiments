package br.unb.autoexp.web.job

import br.unb.autoexp.storage.entity.dto.ExperimentDesignDTO
import br.unb.autoexp.storage.entity.dto.ExperimentExecutionDTO
import br.unb.autoexp.storage.service.ExperimentDesignStorageService
import java.io.File
import java.util.List
import javax.inject.Inject
import javax.inject.Provider
import org.eclipse.core.runtime.IProgressMonitor
import org.eclipse.core.runtime.OperationCanceledException
import org.eclipse.core.runtime.Status
import org.eclipse.core.runtime.jobs.Job
import org.eclipse.xtend.lib.annotations.Accessors

import static extension java.lang.String.*

class TaskExecutionJob extends Job {
	@Inject
	private ExperimentDesignStorageService experimentDesignService
	@Inject
	private Provider<UpdateTaskStatusJob> updateTaskStatusJobProvider;
	
	
	@Accessors
	private String jobId
 
    @Accessors
 	File specificationFile
	 @Accessors
	File dataFile
	
	ExperimentDesignDTO design
	
	@Accessors
	private String message
	@Accessors
	private boolean isError
	@Inject
	new() {
		super("Run execution")
	}

	new(String name) {
		super(name)
	}

	override protected run(IProgressMonitor monitor) {
		
		try{
			updateDesign
		
		while (!design.isFinished){
			if(monitor.isCanceled){
				throw new InterruptedException()
			}
			val updateTaskStatusJob = updateTaskStatusJobProvider.get
			updateTaskStatusJob.name = "Updating tasks status for jobId %s".format(jobId)
			updateTaskStatusJob.specificationFile = specificationFile
			updateTaskStatusJob.dataFile = dataFile
			
			updateTaskStatusJob.jobId = jobId
			
			updateTaskStatusJob.system = true
			
			updateTaskStatusJob.schedule()
			updateTaskStatusJob.join
			design=updateTaskStatusJob.design
			
			Thread.sleep(10000)
		}	
		

	Status.OK_STATUS
	
	} catch (InterruptedException ex) {
			Status.CANCEL_STATUS
		} catch (OperationCanceledException ex) {
			
			Status.CANCEL_STATUS
		} catch (Exception ex) {
			isError=true
			message="An error has occured: "+ex.message

			throw ex;

		} 
}
	
	def updateDesign() {
		if (jobId===null){
				throw new RuntimeException("Job id must not be null")
			}
		design=experimentDesignService.findByJobId(jobId)
			if (design===null){
				throw new RuntimeException("Job %s not found".format(jobId))
			}
	}


}
