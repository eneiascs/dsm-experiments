package br.unb.autoexp.template.wizard;

import org.eclipse.swt.SWT;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Group;
import org.eclipse.swt.widgets.List;

import br.unb.autoexp.autoExp.Experiment;

public class NewModelTemplateWizardResearchHypothessListPage extends AbstractNewResourceWizardPage {

	private static final long serialVersionUID = 1L;

	protected Experiment experiment;

	public NewModelTemplateWizardResearchHypothessListPage(String pageName, Experiment experiment) {
		super(pageName);
		this.experiment = experiment;

	}

	protected NewModelTemplateWizardResearchHypothessListPage(String pageName) {
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

		Button button = new Button(workArea, SWT.PUSH);
		button.setText("Add new research hypothesis");
		button.setEnabled(validatePage());
		button.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				handleNewResearchHypothesis();
			}
		});
		List list = new List(workArea, SWT.BORDER | SWT.SINGLE | SWT.V_SCROLL);

		experiment.getResearchHypotheses()
				.forEach((hyp) -> list.add(String.format("%s: %s %s %s %s", hyp.getName(),
						hyp.getFormula().getDepVariable().getName(), hyp.getFormula().getTreatment1().getName(),
						hyp.getFormula().getOperator().getTypeName(), hyp.getFormula().getTreatment2().getName())));

		setPageComplete(validatePage());

	}

	protected void handleNewResearchHypothesis() {

	}

	@Override
	protected boolean validatePage() {
		if (experiment.getResearchHypotheses() == null || experiment.getResearchHypotheses().isEmpty()) {
			setErrorMessage("There is no hypothesis specified, please specify at least one research hypothesis");

			return false;
		}

		setErrorMessage(null);

		return true;
	}

}
