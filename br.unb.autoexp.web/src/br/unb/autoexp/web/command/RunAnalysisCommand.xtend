package br.unb.autoexp.web.command;

import br.unb.autoexp.rBaseApi.dto.ResultDTO
import br.unb.autoexp.storage.entity.dto.ExecutionStatusDTO
import br.unb.autoexp.storage.entity.dto.ExperimentExecutionDTO
import br.unb.autoexp.storage.service.ExperimentDesignStorageService
import br.unb.autoexp.storage.service.ExperimentExecutionStorageService
import br.unb.autoexp.web.storage.ExperimentDesignStorageServiceFactory
import br.unb.autoexp.web.storage.ExperimentExecutionStorageServiceFactory
import com.fasterxml.jackson.databind.ObjectMapper
import com.google.inject.Injector
import java.io.BufferedReader
import java.io.File
import java.io.FileOutputStream
import java.io.IOException
import java.io.InputStreamReader
import java.io.OutputStreamWriter
import java.io.PrintWriter
import java.lang.reflect.InvocationTargetException
import java.net.HttpURLConnection
import java.net.URL
import java.nio.charset.StandardCharsets
import java.time.Duration
import java.util.List
import javax.ws.rs.NotFoundException
import javax.ws.rs.client.ClientBuilder
import javax.ws.rs.client.WebTarget
import javax.ws.rs.core.GenericType
import javax.ws.rs.core.MediaType
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
import org.excalibur.core.execution.domain.ResourceType
import org.excalibur.core.execution.domain.TaskResourceUsage
import org.excalibur.core.execution.domain.TaskStatus
import org.excalibur.core.execution.domain.TaskStatusType

import static javax.ws.rs.core.MediaType.APPLICATION_XML_TYPE

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
	private Injector injector

	private ExperimentDesignStorageService experimentDesignService = ExperimentDesignStorageServiceFactory.get()
	private ExperimentExecutionStorageService experimentExecutionService = ExperimentExecutionStorageServiceFactory.
		get()
	private IWorkbenchWindow window

	override execute(ExecutionEvent event) throws ExecutionException {

		window = HandlerUtil.getActiveWorkbenchWindowChecked(event);
		val file = unwrap(event, File);

		val IRunnableWithProgress operation = new IRunnableWithProgress() {
			override void run(IProgressMonitor progressMonitor) {
				var result = ""

				try {
					val timeout = Duration.ofMinutes(3).toMillis

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

						


						mapper.writeValue(dataFile, experimentExecutionService.findByJobId(design.jobId).updateStatus)

						var rBaseUrl = "http://localhost:8080/r-base/command"

						if (System.getenv("R_BASE_URL") !== null) {
							rBaseUrl = System.getenv("R_BASE_URL");
						}

						// mapperCommand.writeValue(new URL(rBaseUrl + "/pdf/"), stringJson)
						val url = new URL(rBaseUrl + "/pdf/")
						val httpConnection = url.openConnection() as HttpURLConnection
						httpConnection.setRequestMethod("POST")
						httpConnection.setDoOutput(true)
						logger.info("Connecting to %s ".format(url.toString))
						val out = rnwFile.relativePath.getBytes(StandardCharsets.UTF_8)
						val length = out.length

						httpConnection.setFixedLengthStreamingMode(length)
						httpConnection.setRequestProperty("Content-Type", "application/json; charset=UTF-8")
						httpConnection.connect()

						val os = httpConnection.getOutputStream()
						os.write(out)

						val responseCode = httpConnection.responseCode

						switch (responseCode) {
							case 202:
								logger.info("Accepted")
							case 404:
								throw new RuntimeException("URL %s not available".format(url.toString))
							default:
								throw new RuntimeException(
									"Error code calling analyis: %s".format(responseCode.toString))
						}

						val in = new BufferedReader(new InputStreamReader(httpConnection.getInputStream()))
						var String inputLine
						val response = new StringBuffer();

						while ((inputLine = in.readLine()) !== null) {
							response.append(inputLine)
						}
						in.close()

						val resultMapper = new ObjectMapper()

						val res = resultMapper.readerFor(ResultDTO).readValue(response.toString) as ResultDTO

						if (res.error) {
							throw new RuntimeException(res.message)
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

		def updateStatus(List<ExperimentExecutionDTO> tasks) {

			tasks.filter [
				executionStatus.equals(ExecutionStatusDTO.NOT_RECEIVED) ||
					executionStatus.equals(ExecutionStatusDTO.PENDING) ||
					executionStatus.equals(ExecutionStatusDTO.RUNNING)
			].forEach [ task |
				try {

					val target = getTarget(task.taskId, "status")
					System.out.println(target.toString())
					val response = target.request(APPLICATION_XML_TYPE)
					val status = response.get(TaskStatus)
					switch (status.type) {
						case TaskStatusType.PENDING: task.executionStatus = ExecutionStatusDTO.PENDING
						case TaskStatusType.RUNNING: task.executionStatus = ExecutionStatusDTO.RUNNING
						case TaskStatusType.FINISHED: task.executionStatus = ExecutionStatusDTO.FINISHED
						case TaskStatusType.FAILED: task.executionStatus = ExecutionStatusDTO.FAILED
					}

					val targetResources = getTarget(task.taskId, "resources")
					System.out.println(targetResources.toString())
					val resources = targetResources.request(MediaType.APPLICATION_JSON).get(
						new GenericType<List<TaskResourceUsage>>() {
						})
					if (!resources.filter[resourceType.equals(ResourceType.CPU)].isNullOrEmpty)
						task.cpu = resources.filter[resourceType.equals(ResourceType.CPU)].maxBy[value].value.
							doubleValue
					if (!resources.filter[resourceType.equals(ResourceType.RAM)].isNullOrEmpty)
						task.memory = resources.filter[resourceType.equals(ResourceType.RAM)].maxBy[value].value.
							doubleValue
					task.time = Math.random().doubleValue

					experimentExecutionService.update(task)
				} catch (NotFoundException e) {
					logger.error(e.getMessage(), e)
					e.printStackTrace

				}

			]
			tasks

		}

		def String getDohkoAddress() {
			var host = "10.10.3.10:8080"
			if (System.getenv("DOHKO_ADDRESS") !== null) {
				host = System.getenv("DOHKO_ADDRESS");
			}
			return host;
		}

		def WebTarget getTarget(String taskId, String command) {
			val client = ClientBuilder.newClient();
			client.target(String.format("http://%s/task/%s/%s", getDohkoAddress(), taskId, command));
		}

		def void checkFile(File file, File executionFolder) throws IOException {
			if (!file.exists()) {
				val message = String.format("File %s not found in %s folder", file.getName(), executionFolder.getName())
				MessageDialog.openError(window.getShell(), "Run Error", message)
				throw new RuntimeException(message)
			}

		}

		def File createTempScript(String command) throws IOException {
			val tempScript = File.createTempFile("script", null)
			val streamWriter = new OutputStreamWriter(new FileOutputStream(tempScript))
			val printWriter = new PrintWriter(streamWriter)

			printWriter.println("#!/bin/bash")
			printWriter.println(command)

			printWriter.close()

			tempScript
		}

		def String getLanguageName(String fileExtension) {
			val contributions = LanguageRegistry.INSTANCE.getLanguageByExtension(fileExtension);
			if (!contributions.isNullOrEmpty) {
				contributions.head
			} else
				null
		}

	}
	