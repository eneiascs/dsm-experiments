package br.unb.autoexp.rBaseApi.service.impl

import br.unb.autoexp.rBaseApi.dto.ResultDTO
import br.unb.autoexp.rBaseApi.service.RCommandService
import java.io.File
import java.io.FileOutputStream
import java.io.IOException
import java.io.OutputStreamWriter
import java.io.PrintWriter
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Service

import static extension java.lang.String.*

@Service
class RCommandServiceImpl implements RCommandService {
	static val Logger LOGGER = LoggerFactory.getLogger(typeof(RCommandServiceImpl))

	override generatePdfFile(String file) {
		var basePath = "/home/docker/"
		if (System.getenv("BASE_PATH") !== null) {
			basePath = System.getenv("BASE_PATH")
		}

		val rnwFile = new File(basePath + "/"+file)
		val texFile = new File(rnwFile.getAbsolutePath().replaceFirst("[.][^.]+$", ".tex"))
		val pdfFile = new File(texFile.getAbsolutePath().replaceFirst("[.][^.]+$", ".pdf"))
		val fileFolder = rnwFile.parentFile.absolutePath
		var result = new ResultDTO("", false)
		val commandTex = "Rscript -e \"library(knitr); knit('%s')\" > %s%stexCommand.out".format(rnwFile.absolutePath,
			fileFolder, File.separator)

		val tempScriptTex = createTempScript(commandTex, fileFolder)

		val commandPdf = "pdflatex %s > %s%spdfCommand.out".format(texFile.absolutePath, fileFolder, File.separator)

		val tempScriptPdf = createTempScript(commandPdf, fileFolder)

		try {
			if (!rnwFile.exists) {
				throw new RuntimeException("File %s not found".format(rnwFile.absolutePath))
			}
			if (texFile.exists) {
				texFile.delete
			}
			val pb = new ProcessBuilder("bash", tempScriptTex.toString)
			LOGGER.info("Running command %s".format(commandTex))
			val p = pb.start()

			val int r = p.waitFor()
			if (r == 0) {
				result.message = "OK"

			} else {
				throw new RuntimeException("Command %s returned an error".format(commandTex))

			}

			LOGGER.info("Running command %s".format(commandPdf))

			if (!texFile.exists) {
				throw new RuntimeException("File %s not found".format(texFile.absolutePath))
			}
			if (pdfFile.exists) {
				pdfFile.delete
			}
			val pbPdf = new ProcessBuilder("bash", tempScriptPdf.toString)
			val pPdf = pbPdf.start()

			val int rPdf = pPdf.waitFor()
			if (rPdf == 0) {
				result.message = "OK"

			} else {
				throw new RuntimeException("Command %s returned an error".format(commandTex))
			}

		} catch (Exception e) {
			result.error = true
			result.message = e.message
			LOGGER.error(e.message, e)

		} finally {
			tempScriptTex.delete
			tempScriptPdf.delete
		}
		result

	}

	

	def File createTempScript(String command, String folder) throws IOException {
		val tempScript = File.createTempFile("script", null)
		val streamWriter = new OutputStreamWriter(new FileOutputStream(tempScript))
		val printWriter = new PrintWriter(streamWriter)

		printWriter.println("#!/bin/bash")
		printWriter.println("cd " + folder)
		printWriter.println(command)

		printWriter.close()

		tempScript
	}

}
