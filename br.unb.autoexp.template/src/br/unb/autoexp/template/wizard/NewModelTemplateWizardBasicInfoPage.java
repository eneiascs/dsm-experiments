package br.unb.autoexp.template.wizard;

import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Group;
import org.eclipse.swt.widgets.Text;

import br.unb.autoexp.autoExp.Author;
import br.unb.autoexp.autoExp.AutoExpFactory;
import br.unb.autoexp.autoExp.Experiment;

public class NewModelTemplateWizardBasicInfoPage extends AbstractNewResourceWizardPage {

	private static final long serialVersionUID = 1L;

	protected Experiment experiment;
	protected Text nameText;
	protected Text descriptionText;
	protected Text authorText;

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

		nameText = addTextField(folderInfoComposite, "&Experiment Name:", true);
		descriptionText = addTextField(folderInfoComposite, "&Description:", false);
		authorText = addTextField(folderInfoComposite, "&Author:", false);

		initValues();
		setPageComplete(validatePage());
	}

	protected void initValues() {
		String name = "";
		String description = "";

		if (experiment.getName() != null) {
			name = experiment.getName();
		}
		if (experiment.getDescription() != null) {
			description = experiment.getDescription();
		}
		nameText.setText(name);
		descriptionText.setText(description);
	}

	@Override
	protected boolean validatePage() {
		if (nameText.getText() == null || nameText.getText().equals("")) {
			setErrorMessage("Experiment name not specified, please enter the experiment name");

			return false;
		}

		Author author = AutoExpFactory.eINSTANCE.createAuthor();
		author.setName("firstAuthor");
		author.setFullName(authorText.getText());
		experiment.setName(nameText.getText());
		experiment.setDescription(descriptionText.getText());
		experiment.getAuthors().clear();
		experiment.getAuthors().add(author);
		setErrorMessage(null);
		return true;
	}

}
