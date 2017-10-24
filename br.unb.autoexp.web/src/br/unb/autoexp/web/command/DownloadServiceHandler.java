package br.unb.autoexp.web.command;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.eclipse.core.runtime.IConfigurationElement;
import org.eclipse.core.runtime.IExtensionPoint;
import org.eclipse.core.runtime.IExtensionRegistry;
import org.eclipse.core.runtime.Platform;
import org.eclipse.core.runtime.RegistryFactory;
import org.eclipse.rap.rwt.service.ServiceHandler;

public class DownloadServiceHandler implements ServiceHandler {

	public void service(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		// Which file to download?
		String fileName = request.getParameter("filename");
		// Get the file content
		File file = new File(fileName);
		validateFile(file);

		fileName = file.getName();
		byte[] download;
		if (file.isDirectory()) {
			File zipFile = new File(file.getAbsolutePath() + ".zip");
			pack(file.getAbsolutePath(), zipFile.getAbsolutePath());
			download = Files.readAllBytes(zipFile.toPath());
			fileName = zipFile.getName();
			zipFile.delete();
		} else {
			download = Files.readAllBytes(file.toPath());
		}

		// Send the file in the response
		response.setContentType("application/octet-stream");
		response.setContentLength(download.length);
		String contentDisposition = "attachment; filename=\"" + fileName + "\"";
		response.setHeader("Content-Disposition", contentDisposition);
		response.getOutputStream().write(download);
	}

	private void validateFile(File file) {
		if (!file.exists()) {
			throw new RuntimeException(String.format("File %s does not exist", file.getAbsolutePath()));
		}

		String workspacePath = "D:/www/workspace/";
		IExtensionRegistry registry = RegistryFactory.getRegistry();
		IExtensionPoint extensionPoint = registry.getExtensionPoint("org.dslforge.workspace.config", "configuration");

		if (extensionPoint != null) {
			IConfigurationElement[] elements = extensionPoint.getConfigurationElements();
			if (elements!=null&&elements.length > 0) {
				IConfigurationElement element = elements[0];
				workspacePath = element.getAttribute("path");

			}
		}

		if (!file.getAbsolutePath().startsWith(new File(workspacePath).getAbsolutePath())) {
			throw new RuntimeException(
					String.format("File %s does not exist in workspace folder", file.getAbsolutePath()));
		}
	}

	private void pack(String sourceDirPath, String zipFilePath) throws IOException {
		Path p = Files.createFile(Paths.get(zipFilePath));
		try (ZipOutputStream zs = new ZipOutputStream(Files.newOutputStream(p))) {
			Path pp = Paths.get(sourceDirPath);
			Files.walk(pp).filter(path -> !Files.isDirectory(path)).forEach(path -> {
				ZipEntry zipEntry = new ZipEntry(pp.relativize(path).toString());
				try {
					zs.putNextEntry(zipEntry);
					Files.copy(path, zs);
					zs.closeEntry();
				} catch (Exception e) {
					System.err.println(e);
				}
			});
		}
	}
}