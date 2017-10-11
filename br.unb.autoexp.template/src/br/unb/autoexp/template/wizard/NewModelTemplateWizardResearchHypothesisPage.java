package br.unb.autoexp.template.wizard;

import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Group;
import org.eclipse.swt.widgets.Text;

import br.unb.autoexp.autoExp.Experiment;

public class NewModelTemplateWizardResearchHypothesisPage extends AbstractNewResourceWizardPage {

	private static final long serialVersionUID = 1L;

	protected Experiment experiment;
	protected Text nameText;
	protected Text descriptionText;
	protected Text depVariableText;
	protected Text depVariableDescriptionText;

	public NewModelTemplateWizardResearchHypothesisPage(String pageName, Experiment experiment) {
		super(pageName);
		this.experiment = experiment;

	}

	protected NewModelTemplateWizardResearchHypothesisPage(String pageName) {
		super(pageName);

	}

	@Override
	public void createControl(Composite parent) {
		Composite workArea = new Composite(parent, SWT.NONE);
		setControl(workArea);
		workArea.setLayout(new GridLayout());
		workArea.setLayoutData(new GridData(SWT.BORDER | GridData.FILL_HORIZONTAL));

		// createDialogArea(workArea);
		createInfoArea(workArea);
	}

	private void createInfoArea(Composite workArea) {
		Group group = new Group(workArea, SWT.NONE);
		group.setLayout(new GridLayout());
		group.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
		group.setText("Research Hypothesis");

		Composite folderInfoComposite = new Composite(group, SWT.NONE);
		GridLayout layout = new GridLayout();
		layout.numColumns = 2;
		layout.marginWidth = 0;
		layout.makeColumnsEqualWidth = true;
		folderInfoComposite.setLayout(layout);
		folderInfoComposite.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));

		nameText = addTextField(folderInfoComposite, "Hypothesis Name:", true);
		descriptionText = addTextField(folderInfoComposite, "Hypothesis Description:", false);
		depVariableText = addTextField(folderInfoComposite, "Dependent Variable:", false);
		depVariableDescriptionText = addTextField(folderInfoComposite, "Dependent Variable Description:", false);

		setPageComplete(validatePage());
	}

	@Override
	protected boolean validatePage() {
		if (nameText.getText() == null || nameText.getText().equals("")) {
			setErrorMessage("Hypothesis name not specified, please enter the research hypothesis name");

			return false;
		}
		if (depVariableText.getText() == null || depVariableText.getText().equals("")) {
			setErrorMessage("Dependent Variable not specified, please enter the dependent variable");

			return false;
		}

		setErrorMessage(null);

		return true;
	}

	public void clearPage() {

		depVariableDescriptionText.setText("");
		depVariableText.setText("");
		nameText.setText("");
		descriptionText.setText("");

	}

}
