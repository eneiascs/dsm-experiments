package br.unb.autoexp.web.command;

import br.unb.autoexp.storage.entity.dto.ExecutionStatusDTO
import br.unb.autoexp.storage.entity.dto.ExperimentDesignDTO
import br.unb.autoexp.storage.entity.dto.ExperimentExecutionDTO
import br.unb.autoexp.storage.service.ExperimentDesignStorageService
import br.unb.autoexp.web.client.NotificationClientEndpoint
import br.unb.autoexp.web.data.DataFileGeneratorService
import br.unb.autoexp.web.dohko.service.DohkoService
import br.unb.autoexp.web.mapping.MappingServiceFactory
import com.google.inject.Inject
import java.io.File
import java.io.IOException
import java.lang.reflect.InvocationTargetException
import java.nio.file.Files
import java.nio.file.Paths
import java.nio.file.StandardCopyOption
import java.text.SimpleDateFormat
import java.util.Base64
import java.util.Date
import java.util.List
import javax.ws.rs.core.Response
import org.apache.log4j.Logger
import org.dslforge.xtext.common.commands.BasicGenerateCommand
import org.dslforge.xtext.common.registry.LanguageRegistry
import org.eclipse.core.commands.AbstractHandler
import org.eclipse.core.commands.ExecutionEvent
import org.eclipse.core.commands.ExecutionException
import org.eclipse.core.commands.IHandler
import org.eclipse.core.runtime.IProgressMonitor
import org.eclipse.core.runtime.OperationCanceledException
import org.eclipse.core.runtime.Status
import org.eclipse.core.runtime.jobs.Job
import org.eclipse.jface.dialogs.MessageDialog
import org.eclipse.ui.IWorkbenchWindow
import org.eclipse.ui.handlers.HandlerUtil
import org.excalibur.core.execution.domain.ApplicationDescriptor
import org.excalibur.core.execution.domain.JobStatus

import static extension java.lang.String.*

/**
 * Our sample handler extends AbstractHandler, an IHandler base class.
 * 
 * @see IHandler
 * @see AbstractHandler
 */
class RunCommand extends AbstractWorkspaceCommand {
	private static final String DEFAULT_OUTPUT_FOLDER = "src-gen"
	static final Logger logger = Logger.getLogger(RunCommand)

	@Inject
	private DohkoService dohkoService;

	@Inject
	private ExperimentDesignStorageService experimentDesignService

	@Inject
	private DataFileGeneratorService dataFileGenerator

	@Inject
	private NotificationClientEndpoint notificationClientEndpoint

	private IWorkbenchWindow window

	private String result
	private boolean isError

	private File dataFile
	private File specificationFile
	private File jsonFile

	private File file

	ApplicationDescriptor applicationDescriptor
	private Job runExperimentJob

	
	String jobId
	File applicationDescriptorFile
	File executionFolder
	
	Response response
	List<ExperimentExecutionDTO> tasks
	ExperimentDesignDTO experimentDesign	
	override execute(ExecutionEvent event) throws ExecutionException {
		try {
			window = HandlerUtil.getActiveWorkbenchWindowChecked(event)
			file = unwrap(event, File)
			result = ""
			isError = false
			notificationClientEndpoint.createOrReuseConnection
	
			
			runExperimentJob = new Job("Running experiment ...") {
				
	
	
			override run(IProgressMonitor progressMonitor) {

					try {
								progressMonitor.beginTask("Running experiment ...",IProgressMonitor.UNKNOWN )
						
								logger.info(String.format("Generating artifacts for %s", file.getName()));

								progressMonitor.subTask(String.format("Generating artifacts for %s", file.getName()))
								val generateCommand = new BasicGenerateCommand();
								
								if (generateCommand === null || event === null) {

									throw new RuntimeException("Error getting generate command");
								}
								generateCommand.execute(event);
								val availableLanguages = LanguageRegistry.INSTANCE.getMetamodels();

								if (availableLanguages.isNullOrEmpty) {
									throw new RuntimeException("No language available.");
								}
								val defaultFileExtension = LanguageRegistry.INSTANCE.getFileExtensionFor(
									availableLanguages.get(0))

								val message = "Execution must be run from a specification file (*.%s)".format(
									defaultFileExtension);
								if (!file.getName().endsWith("." + defaultFileExtension)) {

									throw new RuntimeException(message);
								}
								specificationFile = file;
								jsonFile = new File(
									file.getParentFile().getAbsolutePath() + File.separator + DEFAULT_OUTPUT_FOLDER +
										File.separator + file.getName().replaceFirst("[.][^.]+$", ".json"));
								applicationDescriptorFile = new File(
									file.getParentFile().getAbsolutePath() + File.separator + DEFAULT_OUTPUT_FOLDER +
										File.separator + file.getName().replaceFirst("[.][^.]+$", ".yml"));

								logger.info(String.format("Converting file %s to application descriptor object",
									applicationDescriptorFile.getName()));

								progressMonitor.subTask("Converting application descriptor")
								applicationDescriptor = dohkoService.getApplicationDescriptor(
									applicationDescriptorFile);

								
								val sdf = new SimpleDateFormat("YYYY-MM-dd-HH-mm-ss");
								executionFolder = new File(
									String.format("%s%s%s%s%s", specificationFile.getParentFile().getAbsolutePath(),
										File.separator, "executions", File.separator, sdf.format(new Date())));
								executionFolder.mkdirs();

								dataFile = new File(executionFolder.getAbsolutePath() + File.separator + "data.json");
								applicationDescriptorFile.parentFile.listFiles.forEach[copyToFolder(executionFolder)]
								specificationFile.copyToFolder(executionFolder)
								
						
					
								progressMonitor.subTask("Sending application descriptor to execution")
								logger.info(String.format("Sending application descriptor to dohko"));
								response = dohkoService.runDohko(applicationDescriptor);

								
								result = String.format("Response status: %s", response.getStatusInfo());
								logger.info(result);

								if (response.getStatus() != 201 && response.getStatus() != 202) {

									throw new RuntimeException(result)
								}

	
					
								progressMonitor.subTask("Inserting tasks into database")

								val jobStatus = response.readEntity(JobStatus)
								jobId = jobStatus.id
								val mappingService = MappingServiceFactory.get(jsonFile.getAbsolutePath());

								val design = mappingService.findAll().get(0).getDesignType().getName();

								val runs = mappingService.findAll().get(0).getRuns();
								val experimentName = mappingService.findAll().get(0).getExperimentName();
								
								val specification=new String(Base64.getEncoder.encode(Files.readAllBytes(Paths.get(specificationFile.absolutePath))))
								val mappingString=new String(Base64.getEncoder.encode(Files.readAllBytes(Paths.get(jsonFile.absolutePath))))
								val numberOfTasks=applicationDescriptor.getApplications().size+applicationDescriptor.getBlocks.fold(0)[result, applications | result + applications.size ]
								experimentDesignService.create(
									ExperimentDesignDTO.getBuilder()
										.design(design)
										.jobId(jobId)
										.runs(runs)
										.name(experimentName)
										.fileName(new File(executionFolder.getAbsolutePath() + File.separator + specificationFile.name).absolutePath)
										.specification(specification)
										.mapping(mappingString)
										.numberOfTasks(numberOfTasks)
										.notReceived(applicationDescriptor.getApplications().size)
										.build());

								tasks = (applicationDescriptor.getApplications() + applicationDescriptor.getBlocks().map [
									getApplications()
								].flatten).toList.map [
									val mapping = mappingService.findByTaskName(name);
									ExperimentExecutionDTO.builder.executionStatus(ExecutionStatusDTO.PENDING).
										taskId(id).factor(if(mapping === null) null else mapping.factor).object(
											if(mapping === null) null else mapping.object).taskName(
											if(mapping === null) null else mapping.getTaskName).treatment(
											if(mapping === null) null else mapping.treatment).jobId(jobId).build

								]

								dataFileGenerator.writeToFile(dataFile, tasks);
								
						do {
							if (progressMonitor.isCanceled()) {
								progressMonitor.done()
								return Status.OK_STATUS

							}
							experimentDesign = experimentDesignService.findByJobId(tasks.head.jobId)
							progressMonitor.beginTask("Running experiment ...", experimentDesign.numberOfTasks)
							val status = '''
								«val completed=experimentDesign.getFinished()+experimentDesign.getFailed+experimentDesign.cancelled»
								Completed «completed» of «experimentDesign.numberOfTasks» tasks («100*completed/experimentDesign.numberOfTasks»%)
								Elapsed time: «experimentDesign.creationDate.diff»
							'''

							progressMonitor.worked(experimentDesign.getFinished() + experimentDesign.failed + experimentDesign.cancelled)
							progressMonitor.subTask(status)
							if (!experimentDesign.isFinished)
								Thread.sleep(10000)

						} while (!experimentDesign.isFinished)
						result = '''
							Execution Status:
							 
							Tasks: «experimentDesign.numberOfTasks» 
							Pending: «experimentDesign.pending+experimentDesign.notReceived» 
							Running: «experimentDesign.running» 
							Finished: «experimentDesign.getFinished()» 
							Failed: «experimentDesign.failed» 
							Cancelled: «experimentDesign.cancelled»
						'''
						progressMonitor.done
						
								
						displayResult
						Status.OK_STATUS

					} catch (InterruptedException ex) {
						Status.CANCEL_STATUS
					} catch (OperationCanceledException ex) {
						jobGroup.cancel
						Status.CANCEL_STATUS
					} catch (Exception ex) {
						progressMonitor.done()
						isError = true
						result = "An error has occurred: " + ex.getMessage();
						logger.error(ex.getMessage(), ex)
						ex.printStackTrace
						displayResult
						Status.OK_STATUS

					} finally {
						progressMonitor.done()

					}
				}

				def getRelativePath(File file) {
					file.parentFile.parentFile.parentFile.name + "/" + file.parentFile.parentFile.name + "/" +
						file.parentFile.name + "/" + file.name
				}

			};
		
			runExperimentJob.user = true
			
			runExperimentJob.schedule
//			experimentDesign = experimentDesignService.findByJobId(tasks.head.jobId)
//			if (experimentDesign!==null){
//				result = '''
//					Execution Status:
//					 
//					Tasks: «experimentDesign.numberOfTasks» 
//					Pending: «experimentDesign.pending+experimentDesign.notReceived» 
//					Running: «experimentDesign.running» 
//					Finished: «experimentDesign.getFinished()» 
//					Failed: «experimentDesign.failed» 
//					Cancelled: «experimentDesign.cancelled»
//				'''
//			
//			}
//			displayResult
			
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
	def String diff(Date date) {
		val now = new Date()
		val diff = now.getTime() - date.getTime()
		val diffMinutes = diff / (60 * 1000) % 60;
		val diffHours = diff / (60 * 60 * 1000) % 24;
		val diffDays = diff / (24 * 60 * 60 * 1000);

		'''«IF diffDays==1»«diffDays» day «ENDIF»«IF diffDays>1»«diffDays» days «ENDIF»«diffHours»h«diffMinutes»min
		'''
	}
	def void copyToFolder(File file, File executionFolder) throws IOException {
		if (!file.exists()) {
			val message = String.format("File %s not found in %s folder", file.getName(), DEFAULT_OUTPUT_FOLDER);

			throw new RuntimeException(message);
		}

		Files.copy(file.toPath(),
			new File(executionFolder.getAbsolutePath() + File.separator + file.getName()).toPath(),
			StandardCopyOption.REPLACE_EXISTING, StandardCopyOption.COPY_ATTRIBUTES);
	}

	def displayResult() {
		window.shell.display.syncExec(new Runnable() {

			override run() {

				if (isError) {
					MessageDialog.openError(window.getShell(), "Execution Status", result)
				} else {
					MessageDialog.openInformation(window.getShell(), "Execution Status", result)
				}
			}
		})
	}
}
