package br.unb.autoexp.web.job

import br.unb.autoexp.rBaseApi.client.RBaseApiClient
import br.unb.autoexp.rBaseApi.dto.ResultDTO
import java.io.File
import javax.inject.Inject
import org.apache.log4j.Logger
import org.eclipse.core.runtime.IProgressMonitor
import org.eclipse.core.runtime.OperationCanceledException
import org.eclipse.core.runtime.Status
import org.eclipse.core.runtime.jobs.Job
import org.eclipse.xtend.lib.annotations.Accessors

import static extension java.lang.String.*

class RunAnalysisJob extends Job {

	static final Logger logger = Logger.getLogger(UpdateTaskStatusJob)
	@Inject
	private RBaseApiClient rBaseApiClient

	@Accessors
	private String message
	@Accessors
	private boolean isError
	@Accessors
	private File rnwFile
	@Accessors
	private UpdateTaskStatusJob updateTaskStatusJob

	@Inject
	new() {
		super("Run Analysis")
	}

	new(String name) {
		super(name)
	}

	new(String name, File rnwFile) {
		super(name)

	}

	override protected run(IProgressMonitor progressMonitor) {

		try {
			if (updateTaskStatusJob !== null) {
				updateTaskStatusJob.join
				if (updateTaskStatusJob.result.equals(Status.CANCEL_STATUS)) {
					throw new InterruptedException()
				}
			}
			val res = rBaseApiClient.runAnalysis(rnwFile.relativePath)
			if (progressMonitor.isCanceled()) {
				progressMonitor.done();

				throw new InterruptedException()

			}

			switch (res.status) {
				case 202:
					logger.info("Accepted")
				case 404:
					throw new RuntimeException("URL not available")
				default:
					throw new RuntimeException("Error code calling analysis: %s".format(res.statusInfo))
			}

			val entity = res.readEntity(ResultDTO)

			if (entity.error) {
				throw new RuntimeException(entity.message)
			}

			message = "Analysis finished. Check generated files."

			Status.OK_STATUS

		} catch (InterruptedException ex) {
			Status.CANCEL_STATUS
		} catch (OperationCanceledException ex) {

			Status.CANCEL_STATUS
		} catch (Exception ex) {
			isError = true
			message = "An error has occurred: " + ex.getMessage();
			logger.error(ex.getMessage(), ex)
			ex.printStackTrace

			throw ex;

		} finally {
			progressMonitor.done()

		}
	}

	def getRelativePath(File file) {
		file.parentFile.parentFile.parentFile.name + "/" + file.parentFile.parentFile.name + "/" +
			file.parentFile.name + "/" + file.name
	}

}
