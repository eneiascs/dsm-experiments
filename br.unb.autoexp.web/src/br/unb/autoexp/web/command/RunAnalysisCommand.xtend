package br.unb.autoexp.web.command;

import br.unb.autoexp.rBaseApi.client.RBaseApiClient
import br.unb.autoexp.rBaseApi.dto.ResultDTO
import br.unb.autoexp.storage.entity.dto.ExperimentExecutionDTO
import br.unb.autoexp.storage.service.ExperimentDesignStorageService
import br.unb.autoexp.storage.service.ExperimentExecutionStorageService
import br.unb.autoexp.web.dohko.service.DohkoService
import com.fasterxml.jackson.databind.ObjectMapper
import com.google.inject.Inject
import java.io.BufferedReader
import java.io.File
import java.io.IOException
import java.io.InputStreamReader
import java.lang.reflect.InvocationTargetException
import java.net.HttpURLConnection
import java.net.URL
import java.nio.charset.StandardCharsets
import java.util.List
import org.apache.log4j.Logger
import org.dslforge.xtext.common.registry.LanguageRegistry
import org.eclipse.core.commands.AbstractHandler
import org.eclipse.core.commands.ExecutionEvent
import org.eclipse.core.commands.ExecutionException
import org.eclipse.core.commands.IHandler
import org.eclipse.core.runtime.IProgressMonitor
import org.eclipse.jface.dialogs.MessageDialog
import org.eclipse.jface.operation.IRunnableWithProgress
import org.eclipse.ui.IWorkbenchWindow
import org.eclipse.ui.handlers.HandlerUtil

import static extension java.lang.String.*

/**
 * Our sample handler extends AbstractHandler, an IHandler base class.
 * 
 * @see IHandler
 * @see AbstractHandler
 */
class RunAnalysisCommand extends AbstractWorkspaceCommand {
	private static final String DEFAULT_OUTPUT_FOLDER = "src-gen"
	static final Logger logger = Logger.getLogger(RunAnalysisCommand)
	@Inject
	private extension DohkoService 
	
	@Inject
	private  RBaseApiClient rBaseApiClient 
	@Inject
	private ExperimentDesignStorageService experimentDesignService 
	@Inject
	private ExperimentExecutionStorageService experimentExecutionService 
	private IWorkbenchWindow window

	override execute(ExecutionEvent event) throws ExecutionException {

		window = HandlerUtil.getActiveWorkbenchWindowChecked(event);
		val file = unwrap(event, File);

		val IRunnableWithProgress operation = new IRunnableWithProgress() {
			override void run(IProgressMonitor progressMonitor) {
				

				try {
				
					progressMonitor.beginTask("analysis", 2)
					val message = String.format(
						"Analysis must be run from a execution folder.\nExecution data not found for %s.",
						file.getName())

						
						val dataFile = new File(file.getAbsolutePath() + File.separator + "data.json")
						if (!dataFile.exists) {

							
							throw new RuntimeException(message)
						}
						
						val mapper = new ObjectMapper();

						val List<ExperimentExecutionDTO> tasks = mapper.readValue(
							dataFile,
							mapper.getTypeFactory().constructCollectionType(List, ExperimentExecutionDTO)
						)
						if (tasks.isNullOrEmpty) {

							MessageDialog.openError(window.getShell(), "Status Error", message)
							throw new RuntimeException(message)
						}

						val design = experimentDesignService.findByJobId(tasks.head.jobId)

						if (design === null) {

							MessageDialog.openError(window.getShell(), "Status Error", message)
							throw new RuntimeException(message)
						}

						val specificationFile = new File(file.getAbsolutePath() + File.separator + design.getFileName())
						val jsonFile = new File(file.getAbsolutePath() + File.separator +
							design.getFileName().replaceFirst("[.][^.]+$", ".json"))
						val applicationDescriptorFile = new File(file.getAbsolutePath() + File.separator +
							design.getFileName().replaceFirst("[.][^.]+$", ".yml"))
						
						val rnwFile = new File(file.getAbsolutePath() + File.separator +
							design.getFileName().replaceFirst("[.][^.]+$", ".Rnw"))
						val executionFolder = file

						checkFile(applicationDescriptorFile, executionFolder)
						checkFile(jsonFile, executionFolder)
						checkFile(specificationFile, executionFolder)
						// checkFile(rFile, executionFolder)
						checkFile(rnwFile, executionFolder)

						
 

						mapper.writeValue(dataFile, experimentExecutionService.findByJobId(design.jobId).updateTaskStatus)
						
						
						val res=rBaseApiClient.runAnalysis(rnwFile.relativePath)
						
							switch (res.status) {
							case 202:
								logger.info("Accepted")
							case 404:
								throw new RuntimeException("URL not available")
							default:
								throw new RuntimeException(
									"Error code calling analysis: %s".format(res.statusInfo))
						}
						
					
						val entity = res.readEntity(ResultDTO)

						if (entity.error) {
							throw new RuntimeException(entity.message)
						}

						MessageDialog.openInformation(window.getShell(), "Analysis",
							"Analysis finished. Check generated files.")

					} catch (Exception ex) {
						MessageDialog.openError(window.getShell(), "Analysis",
							"An error occurred during analysis: \n %s".format(ex.message))
						logger.error(ex.getMessage(), ex)
					} finally {

						progressMonitor.done()
					}
				}

				def getRelativePath(File file) {
					file.parentFile.parentFile.parentFile.name + "/" + file.parentFile.parentFile.name + "/" +
						file.parentFile.name + "/" + file.name
				}

			};
			try {
				getWindow().run(false, false, operation)
			} catch (InvocationTargetException ex) {
				logger.error(ex.getMessage(), ex)
			} catch (InterruptedException ex) {
				logger.error(ex.getMessage(), ex)
			}
			return null;
		}

	

		def void checkFile(File file, File executionFolder) throws IOException {
			if (!file.exists()) {
				val message = String.format("File %s not found in %s folder", file.getName(), executionFolder.getName())
				MessageDialog.openError(window.getShell(), "Run Error", message)
				throw new RuntimeException(message)
			}

		}

	
		def String getLanguageName(String fileExtension) {
			val contributions = LanguageRegistry.INSTANCE.getLanguageByExtension(fileExtension);
			if (!contributions.isNullOrEmpty) {
				contributions.head
			} else
				null
		}

	}
	