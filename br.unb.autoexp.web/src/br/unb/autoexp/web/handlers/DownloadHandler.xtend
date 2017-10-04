package br.unb.autoexp.web.handlers;

import java.io.File
import java.io.FileOutputStream
import java.io.IOException
import java.io.OutputStreamWriter
import java.io.PrintWriter
import java.lang.reflect.InvocationTargetException
import java.net.URL
import org.apache.log4j.Logger
import org.dslforge.xtext.common.registry.LanguageRegistry
import org.eclipse.core.commands.AbstractHandler
import org.eclipse.core.commands.ExecutionEvent
import org.eclipse.core.commands.ExecutionException
import org.eclipse.core.commands.IHandler
import org.eclipse.core.runtime.IProgressMonitor
import org.eclipse.jface.dialogs.MessageDialog
import org.eclipse.jface.operation.IRunnableWithProgress
import org.eclipse.rap.rwt.RWT
import org.eclipse.ui.IWorkbenchWindow
import org.eclipse.ui.PlatformUI
import org.eclipse.ui.handlers.HandlerUtil

/**
 * Our sample handler extends AbstractHandler, an IHandler base class.
 * 
 * @see IHandler
 * @see AbstractHandler
 */
class DownloadHandler extends AbstractWorkspaceCommand {

	static final Logger logger = Logger.getLogger(DownloadHandler)
	private IWorkbenchWindow window

	override execute(ExecutionEvent event) throws ExecutionException {

		window = HandlerUtil.getActiveWorkbenchWindowChecked(event);
		val file = unwrap(event, File);

		val IRunnableWithProgress operation = new IRunnableWithProgress() {
			override void run(IProgressMonitor progressMonitor) {

				try {
					
					val browser = PlatformUI.getWorkbench().getBrowserSupport().getExternalBrowser()
    				logger.info(createDownloadUrl(file.absolutePath))
    				browser.openURL(new URL(createDownloadUrl(file.absolutePath)))
    				

				} catch (Exception ex) {

					logger.error(ex.getMessage(), ex)
				} finally {
					progressMonitor.done()
				}
			}

		}
		try {
			getWindow().run(false, false, operation)
		} catch (InvocationTargetException ex) {
			logger.error(ex.getMessage(), ex)
		} catch (InterruptedException ex) {
			logger.error(ex.getMessage(), ex)
		}
		return null;
	}

	def createDownloadUrl(String fileName) {
		val url = new StringBuilder();
		url.append("http://")
		.append(RWT.request.serverName)
		.append(":")
		.append(RWT.request.serverPort)
		.append(RWT.getServiceManager().getServiceHandlerUrl("br.unb.autoexp.web.downloadServiceHandler"))
		.append('&').append("filename").append('=').append(fileName)

		return RWT.getResponse().encodeURL(url.toString());
	}

	def void checkFile(File file, File executionFolder) throws IOException {
		if (!file.exists()) {
			val message = String.format("File %s not found in %s folder", file.getName(), executionFolder.getName())
			MessageDialog.openError(window.getShell(), "Run Error", message)
			throw new RuntimeException(message)
		}

	}

	def File createTempScript(String clientPath, String host, String filePath) throws IOException {
		val tempScript = File.createTempFile("script", null)
		val streamWriter = new OutputStreamWriter(new FileOutputStream(tempScript))
		val printWriter = new PrintWriter(streamWriter)

		printWriter.println("#!/bin/bash")
		printWriter.println(String.format("java -jar %s deploy  --host %s --df %s", clientPath, host, filePath))

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
