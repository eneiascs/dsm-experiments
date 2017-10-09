package br.unb.autoexp.template.wizard;

import org.dslforge.workspace.ui.wizards.NewModelFileWizardPage;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.ModifyEvent;
import org.eclipse.swt.events.ModifyListener;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Group;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Text;

import br.unb.autoexp.autoExp.Experiment;

public class NewModelTemplateWizardBasicInfoPage extends NewModelFileWizardPage {

	private static final long serialVersionUID = 1L;

	protected Experiment experiment;
	protected Text nameText;
	protected Text descriptionText;

	public NewModelTemplateWizardBasicInfoPage(String pageName, Experiment experiment) {
		super(pageName);
		this.experiment = experiment;
	}

	protected NewModelTemplateWizardBasicInfoPage(String pageName) {
		super(pageName);

	}

	@Override
	public void createControl(Composite parent) {
		Composite workArea = new Composite(parent, SWT.NONE);
		setControl(workArea);
		workArea.setLayout(new GridLayout());
		workArea.setLayoutData(new GridData(SWT.BORDER | GridData.FILL_HORIZONTAL));
		createInfoArea(workArea);
	}

	private void createInfoArea(Composite workArea) {
		Group group = new Group(workArea, SWT.NONE);
		group.setLayout(new GridLayout());
		group.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
		group.setText("Basic Information");

		Composite folderInfoComposite = new Composite(group, SWT.NONE);
		GridLayout layout = new GridLayout();
		layout.numColumns = 2;
		layout.marginWidth = 0;
		layout.makeColumnsEqualWidth = false;
		folderInfoComposite.setLayout(layout);
		folderInfoComposite.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));

		Label experimentName = new Label(folderInfoComposite, SWT.NONE);
		experimentName.setLayoutData(new GridData(160, SWT.DEFAULT));
		experimentName.setText("&Experiment Name:");

		nameText = new Text(folderInfoComposite, SWT.BORDER);
		GridData layoutData = new GridData();
		layoutData.horizontalAlignment = GridData.FILL;
		layoutData.grabExcessHorizontalSpace = true;
		nameText.setLayoutData(layoutData);
		nameText.setFocus();
		nameText.addModifyListener(new ModifyListener() {
			@Override
			public void modifyText(ModifyEvent event) {

				updateWidgetEnablements();

			}
		});
		Label experimentDescription = new Label(folderInfoComposite, SWT.NONE);
		experimentDescription.setLayoutData(new GridData(160, SWT.DEFAULT));
		experimentDescription.setText("&Description:");

		descriptionText = new Text(folderInfoComposite, SWT.BORDER);
		GridData data = new GridData();
		data.horizontalAlignment = GridData.FILL;
		data.grabExcessHorizontalSpace = true;
		descriptionText.setLayoutData(data);
		descriptionText.setFocus();
		descriptionText.addModifyListener(new ModifyListener() {
			@Override
			public void modifyText(ModifyEvent event) {
				updateWidgetEnablements();

			}
		});
		setPageComplete(validatePage());
	}

	@Override
	protected boolean validatePage() {
		if (nameText.getText() == null || nameText.getText().equals("")) {
			setErrorMessage("Experiment name not specified, please enter the experiment name");

			return false;
		}
		if (descriptionText.getText() == null || descriptionText.getText().equals("")) {
			setErrorMessage("Experiment description not specified, please enter the experiment description");
			return false;
		}
		experiment.setName(nameText.getText());
		experiment.setDescription(descriptionText.getText());
		setErrorMessage(null);
		return true;
	}

}
