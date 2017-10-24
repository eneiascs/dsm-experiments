package br.unb.autoexp.web.command;
import java.net.URL;

import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.IEditorSite;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.browser.AbstractWebBrowser;
import org.eclipse.ui.browser.IWebBrowser;

public class WebBrowser extends AbstractWebBrowser {

	private IWebBrowser browser;
	public WebBrowser(String id) {
		super(id);
		try {
			browser=PlatformUI.getWorkbench().getBrowserSupport().getExternalBrowser();
			
		} catch (PartInitException e) {
			e.printStackTrace();
		}
	}

	@Override
	public void openURL(URL url) throws PartInitException {
		
		browser.openURL(url);
	}

	

}
