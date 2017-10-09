package br.unb.autoexp.template.command;

import java.io.File;

import org.dslforge.workspace.ui.commands.AbstractWorkspaceCommand;
import org.eclipse.core.commands.ExecutionEvent;
import org.eclipse.core.commands.ExecutionException;
import org.eclipse.jface.viewers.StructuredSelection;
import org.eclipse.jface.wizard.WizardDialog;

import br.unb.autoexp.template.wizard.NewModelTemplateWizard;

public class NewModelTemplateCommand extends AbstractWorkspaceCommand {

	@Override
	public Object execute(ExecutionEvent event) throws ExecutionException {
		File file = unwrap(event, File.class);
		if (file != null) {
			StructuredSelection selection = new StructuredSelection(file);
			NewModelTemplateWizard wizard = new NewModelTemplateWizard(file);
			wizard.init(getWindow().getWorkbench(), selection);
			WizardDialog wizardDialog = new WizardDialog(getWindow().getShell(), wizard);
			wizardDialog.create();
			setSizeAndLocation(wizardDialog);
			return wizardDialog.open();
		}
		return null;
	}

}
