package br.unb.autoexp.example.wizard;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.dslforge.workspace.ui.wizards.NewModelFileWizardPage;
import org.dslforge.xtext.common.registry.LanguageRegistry;
import org.eclipse.core.runtime.IPath;
import org.eclipse.core.runtime.Path;
import org.eclipse.emf.common.util.URI;
import org.eclipse.jface.viewers.ISelection;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.viewers.StructuredSelection;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.ModifyEvent;
import org.eclipse.swt.events.ModifyListener;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.events.SelectionListener;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Combo;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Group;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Text;

import com.google.common.base.Function;
import com.google.common.collect.Iterables;
import com.google.common.collect.Lists;

public class NewModelExampleWizardPage extends NewModelFileWizardPage {

	protected NewModelExampleWizardPage(String pageName) {
		super(pageName);

	}

	private static final long serialVersionUID = 1L;

	public String defaultFileExtension = null;
	private Text fileNameText;
	private Combo languageNameCombo;
	private String languageName = null;

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

		Label dslNameLabel = new Label(folderInfoComposite, SWT.NONE);
		dslNameLabel.setLayoutData(new GridData(160, SWT.DEFAULT));
		dslNameLabel.setText("&DSL Name:");

		languageNameCombo = new Combo(folderInfoComposite, SWT.BORDER | SWT.READ_ONLY);
		GridData data = new GridData();
		data.horizontalAlignment = GridData.FILL;
		data.grabExcessHorizontalSpace = true;
		languageNameCombo.setLayoutData(data);
		languageNameCombo.setToolTipText("Select among the available languages.");
		initializeLanguageCombo();

		languageNameCombo.addSelectionListener(new SelectionListener() {

			@Override
			public void widgetSelected(SelectionEvent e) {
				Object source = e.getSource();
				if (source instanceof Combo) {
					defaultFileExtension = getLanguageToFileExtension().get(((Combo) source).getText());
				}
				setPageComplete(validatePage());
			}

			@Override
			public void widgetDefaultSelected(SelectionEvent e) {
				Object source = e.getSource();
				if (source instanceof Combo) {
					defaultFileExtension = getLanguageToFileExtension().get(((Combo) source).getText());
				}
			}
		});

		languageNameCombo.addModifyListener(new ModifyListener() {
			@Override
			public void modifyText(ModifyEvent event) {
				setPageComplete(validatePage());
			}
		});

		Label projectNameLabel = new Label(folderInfoComposite, SWT.NONE);
		projectNameLabel.setLayoutData(new GridData(160, SWT.DEFAULT));
		projectNameLabel.setText("&File Name:");

		fileNameText = new Text(folderInfoComposite, SWT.BORDER);
		GridData layoutData = new GridData();
		layoutData.horizontalAlignment = GridData.FILL;
		layoutData.grabExcessHorizontalSpace = true;
		fileNameText.setLayoutData(layoutData);
		fileNameText.setFocus();
		fileNameText.setText("example." + getSelectedFileExtension());
		fileNameText.addModifyListener(new ModifyListener() {
			@Override
			public void modifyText(ModifyEvent event) {
				updateWidgetEnablements();
			}
		});
		setPageComplete(validatePage());
	}

	@Override
	protected boolean validatePage() {
		if (fileNameText.getText() == null)
			return false;
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
		ISelection iSelection = initialElementSelections.get(0);
		if (iSelection instanceof StructuredSelection) {
			Object firstElement = ((StructuredSelection) iSelection).getFirstElement();
			File container = (File) firstElement;
			if (!container.isDirectory()) {
				setErrorMessage("The model file container should be a folder or a project");
				return false;
			}
		}
		String extension = fileURI.fileExtension();
		if (extension == null || !getSelectedFileExtension().equals(extension)) {
			setErrorMessage("The model file name must have the following extension: " + getSelectedFileExtension());
			return false;
		}
		setErrorMessage(null);
		return true;
	}

	@Override
	public void initializeLanguageCombo() {
		if (languageName == null) {
			for (String objectName : getAvailableDSLNames()) {
				languageNameCombo.add(objectName);
			}
			if (languageNameCombo.getItemCount() == 1) {
				languageNameCombo.select(0);
			}
		} else {
			languageNameCombo.add(languageName);
			languageNameCombo.select(0);
			languageNameCombo.setEnabled(false);
		}
	}

	private List<String> getAvailableDSLNames() {
		List<String> availableLanguages = LanguageRegistry.INSTANCE.getMetamodels();
		ArrayList<String> names = Lists
				.newArrayList(Iterables.transform(availableLanguages, new Function<String, String>() {
					@Override
					public String apply(String input) {
						return toShortName(input);
					}
				}));
		return names;
	}

	private String toShortName(String input) {
		return (new Path(input)).removeFileExtension().lastSegment();
	}

	@Override
	protected URI getFileURI() {
		IStructuredSelection selection = (IStructuredSelection) getContainerViewer().getSelection();
		File file = (File) selection.getFirstElement();
		IPath append = new Path(file.getAbsolutePath()).append(new Path(fileNameText.getText()));
		return URI.createFileURI(append.toString());
	}

}
