package br.unb.autoexp.template.command;

import br.unb.autoexp.AutoExpStandaloneSetup
import br.unb.autoexp.autoExp.Experiment
import br.unb.autoexp.autoExp.Model
import br.unb.autoexp.template.wizard.NewModelTemplateWizard
import com.google.inject.Inject
import java.io.BufferedReader
import java.io.File
import java.io.FileReader
import java.io.IOException
import org.eclipse.core.commands.AbstractHandler
import org.eclipse.core.commands.ExecutionEvent
import org.eclipse.core.commands.ExecutionException
import org.eclipse.core.runtime.IAdaptable
import org.eclipse.jface.viewers.IStructuredSelection
import org.eclipse.jface.viewers.StructuredSelection
import org.eclipse.jface.wizard.WizardDialog
import org.eclipse.swt.graphics.Rectangle
import org.eclipse.swt.widgets.Shell
import org.eclipse.ui.IWorkbenchWindow
import org.eclipse.ui.PlatformUI
import org.eclipse.ui.handlers.HandlerUtil
import org.eclipse.xtext.testing.util.ParseHelper

public class EditModelTemplateCommand extends AbstractHandler {
	@Inject
	ParseHelper<Model> parser

	override Object execute(ExecutionEvent event) throws ExecutionException {
		val File file = unwrap(event, File);
		if (file !== null) {
			val StructuredSelection selection = new StructuredSelection(file);

			if (!file.isDirectory) {
				val Experiment experiment = file.parseDomainmodel
				
				val NewModelTemplateWizard wizard = new NewModelTemplateWizard(file, experiment);
				wizard.init(getWindow().getWorkbench(), selection);
				val WizardDialog wizardDialog = new WizardDialog(getWindow().getShell(), wizard);
				wizardDialog.create();
				setSizeAndLocation(wizardDialog);
				return wizardDialog.open();

			}
		}
		return null;
	}

	def Experiment parseDomainmodel(File file) {
		val injector = new AutoExpStandaloneSetup().createInjectorAndDoEMFRegistration()
		injector.injectMembers(this)
		val model = parser.parse(readFile(file.absolutePath))
		model.experiments.head

	}

	def String readFile(String file) throws IOException {
		val BufferedReader reader = new BufferedReader(new FileReader(file));
		var String line = null;
		val StringBuilder stringBuilder = new StringBuilder();
		val String ls = System.getProperty("line.separator");

		try {
			line = reader.readLine()
			while (line !== null) {
				stringBuilder.append(line);
				stringBuilder.append(ls);
				line = reader.readLine()
			}

			return stringBuilder.toString();
		} finally {
			reader.close();
		}
	}

	override boolean isEnabled() {

		return true;
	}

	def static <T> T unwrap(Object object, Class<T> type) {
		var obj = object
		if (obj instanceof ExecutionEvent) {
			obj = HandlerUtil.getCurrentSelection(obj as ExecutionEvent);
		}
		if (obj instanceof IStructuredSelection) {
			obj = (obj as IStructuredSelection).getFirstElement();
		}
		if (obj instanceof IAdaptable) {
			obj = (obj as IAdaptable).getAdapter(type);
		}
		if (type.isInstance(obj)) {
			return type.cast(obj);
		}
		return null;
	}

	def void setSizeAndLocation(WizardDialog wizardDialog) {
		wizardDialog.getShell().setSize(700, 600);
		val Shell activeShell = PlatformUI.getWorkbench().getActiveWorkbenchWindow().getShell();
		val Rectangle bounds = activeShell.getBounds();
		val Rectangle rect = wizardDialog.getShell().getBounds();
		val int x = bounds.x + (bounds.width - rect.width) / 2;
		val int y = bounds.y + (bounds.height - rect.height) / 2;
		wizardDialog.getShell().setLocation(x, y);
	}

	def IWorkbenchWindow getWindow() {
		return PlatformUI.getWorkbench().getActiveWorkbenchWindow();
	}
}
