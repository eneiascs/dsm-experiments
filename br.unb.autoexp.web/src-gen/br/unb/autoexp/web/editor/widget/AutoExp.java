/**
 * @Generated
 */
package br.unb.autoexp.web.editor.widget;

import java.util.ArrayList;
import java.util.List;

import org.dslforge.styledtext.BasicText;
import org.eclipse.core.runtime.IPath;
import org.eclipse.core.runtime.Path;
import org.eclipse.rap.rwt.remote.Connection;
import org.eclipse.rap.rwt.remote.RemoteObject;
import org.eclipse.swt.widgets.Composite;

public class AutoExp extends BasicText {
	
	private static final long serialVersionUID = 1L;
	
	private static final String REMOTE_TYPE = "br.unb.autoexp.web.editor.widget.AutoExp";
	
	public AutoExp(Composite parent, int style) {
		super(parent, style);
	}
	
	@Override
	protected RemoteObject createRemoteObject(Connection connection) {
		return connection.createRemoteObject(REMOTE_TYPE);
	}
	
	@Override 
	protected void setupClient() {
		super.setupClient();
		List<IPath> languageResources = new ArrayList<IPath>();
		languageResources.add(new Path("src-js/br/unb/autoexp/web/ace/theme-autoexp.js"));
		languageResources.add(new Path("src-js/br/unb/autoexp/web/ace/mode-autoexp.js"));
		languageResources.add(new Path("src-js/br/unb/autoexp/web/ace/worker-autoexp.js"));
		languageResources.add(new Path("src-js/br/unb/autoexp/web/ace/snippets/autoexp.js"));
		languageResources.add(new Path("src-js/br/unb/autoexp/web/parser/antlr-all-min.js"));
		languageResources.add(new Path("src-js/br/unb/autoexp/web/parser/AutoExpParser.js"));
		languageResources.add(new Path("src-js/br/unb/autoexp/web/parser/AutoExpLexer.js"));
		registerJsResources(languageResources, getClassLoader());
		loadJsResources(languageResources);
	}

	@Override
	protected ClassLoader getClassLoader() {
		ClassLoader classLoader = AutoExp.class.getClassLoader();
		return classLoader;
	}
}
