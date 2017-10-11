package br.unb.autoexp.template.wizard;

import java.io.File;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

import org.eclipse.core.runtime.IPath;
import org.eclipse.core.runtime.Path;
import org.eclipse.emf.common.util.URI;
import org.eclipse.jface.viewers.ISelection;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.viewers.SelectionChangedEvent;
import org.eclipse.jface.viewers.StructuredSelection;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Group;
import org.eclipse.swt.widgets.Text;

public class NewModelTemplateWizardPage extends AbstractNewResourceWizardPage {

	protected NewModelTemplateWizardPage(String pageName) {
		super(pageName);

	}

	private static final long serialVersionUID = 1L;
	public Collection<String> availableFileExtensions = Collections.emptyList();
	public String defaultFileExtension = "ae";
	private Text fileNameText;

	@Override
	public void createControl(Composite parent) {
		Composite workArea = new Composite(parent, SWT.NONE);
		setControl(workArea);
		workArea.setLayout(new GridLayout());
		workArea.setLayoutData(new GridData(SWT.BORDER | GridData.FILL_HORIZONTAL));
		createContainerArea(workArea);
		createInfoArea(workArea);
	}

	private void createInfoArea(Composite workArea) {
		Group group = new Group(workArea, SWT.NONE);
		group.setLayout(new GridLayout());
		group.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
		group.setText("File Information");

		Composite folderInfoComposite = new Composite(group, SWT.NONE);
		GridLayout layout = new GridLayout();
		layout.numColumns = 2;
		layout.marginWidth = 0;
		layout.makeColumnsEqualWidth = false;
		folderInfoComposite.setLayout(layout);
		folderInfoComposite.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));

		fileNameText = addTextField(folderInfoComposite, "&File Name:", true);
		fileNameText.setText("." + defaultFileExtension);
		setPageComplete(validatePage());
	}

	@Override
	protected boolean validatePage() {

		URI fileURI = getFileURI();
		if (fileURI == null || fileURI.isEmpty()) {
			setErrorMessage(null);
			return false;
		}
		List<IStructuredSelection> initialElementSelections = getInitialElementSelections();
		if (initialElementSelections == null) {
			setErrorMessage("The model file container is not specified, please select the file container");
			return false;
		}

		String extension = fileURI.fileExtension();
		if (extension == null || !defaultFileExtension.equals(extension)) {
			setErrorMessage("The model file name must have the following extension: " + defaultFileExtension);
			return false;
		}
		if (fileNameText.getText() == null || fileNameText.getText().equals(".ae")) {
			setErrorMessage("Model file name not specified, please enter the file name");
			return false;
		}
		setErrorMessage(null);
		return true;
	}

	protected URI getFileURI() {
		IStructuredSelection selection = (IStructuredSelection) getContainerViewer().getSelection();
		File file = (File) selection.getFirstElement();
		if (!file.isDirectory()) {
			file = file.getParentFile();
		}
		IPath append = new Path(file.getAbsolutePath()).append(new Path(fileNameText.getText()));
		return URI.createFileURI(append.toString());
	}

	@Override
	protected void viewerSelectionChanged(SelectionChangedEvent event) {

		super.viewerSelectionChanged(event);
		List<IStructuredSelection> initialElementSelections = getInitialElementSelections();
		ISelection iSelection = initialElementSelections.get(0);
		if (iSelection instanceof StructuredSelection) {
			Object firstElement = ((StructuredSelection) iSelection).getFirstElement();
			File container = (File) firstElement;
			if (!container.isDirectory()) {
				fileNameText.setText(container.getName());
			}
		}
	}
}
