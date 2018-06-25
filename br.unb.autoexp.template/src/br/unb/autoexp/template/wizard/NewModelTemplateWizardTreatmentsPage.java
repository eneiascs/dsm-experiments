package br.unb.autoexp.template.wizard;

import org.eclipse.jface.wizard.IWizardPage;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Group;
import org.eclipse.swt.widgets.Text;

import br.unb.autoexp.autoExp.AutoExpFactory;
import br.unb.autoexp.autoExp.DependentVariable;
import br.unb.autoexp.autoExp.Experiment;
import br.unb.autoexp.autoExp.Factor;
import br.unb.autoexp.autoExp.OperatorType;
import br.unb.autoexp.autoExp.ResearchHypothesis;
import br.unb.autoexp.autoExp.ResearchHypothesisFormula;
import br.unb.autoexp.autoExp.Treatment;

public class NewModelTemplateWizardTreatmentsPage extends AbstractNewResourceWizardPage {

	private static final long serialVersionUID = 1L;

	protected Experiment experiment;

	protected Text firstTreatmentText;
	protected Text firstTreatmentDescriptionText;
	protected Text secondTreatmentText;
	protected Text secondTreatmentDescriptionText;
	protected Text factorText;
	protected Text factorDescriptionText;
	protected Button button;

	public NewModelTemplateWizardTreatmentsPage(String pageName, Experiment experiment) {
		super(pageName);
		this.experiment = experiment;

	}

	protected NewModelTemplateWizardTreatmentsPage(String pageName) {
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
		group.setText("Research Hypothesis");

		Composite folderInfoComposite = new Composite(group, SWT.NONE);
		GridLayout layout = new GridLayout();
		layout.numColumns = 2;
		layout.marginWidth = 0;
		layout.makeColumnsEqualWidth = true;
		folderInfoComposite.setLayout(layout);
		folderInfoComposite.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));

		firstTreatmentText = addTextField(folderInfoComposite, "First Treatment:", false);
		firstTreatmentDescriptionText = addTextField(folderInfoComposite, "First Treatment Description:", false);
		secondTreatmentText = addTextField(folderInfoComposite, "Second Treatment:", false);
		secondTreatmentDescriptionText = addTextField(folderInfoComposite, "Second Treatment Description:", false);
		factorText = addTextField(folderInfoComposite, "Factor name:", false);
		factorDescriptionText = addTextField(folderInfoComposite, "Factor Description:", false);

		button = new Button(workArea, SWT.PUSH);
		button.setText("Add new research hypothesis");
		button.setEnabled(validatePage());
		button.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				handleNewResearchHypothesis();
			}
		});
		button.setVisible(false);
		setPageComplete(validatePage());
	}

	protected void handleNewResearchHypothesis() {

		addResearchHypothesis();

		clearPage();
		NewModelTemplateWizardResearchHypothesisPage prevPage = (NewModelTemplateWizardResearchHypothesisPage) (this
				.getPreviousPage());

		prevPage.clearPage();

	}

	private void clearPage() {
		firstTreatmentText.setText("");
		firstTreatmentDescriptionText.setText("");
		secondTreatmentText.setText("");
		secondTreatmentDescriptionText.setText("");
		factorText.setText("");
		factorDescriptionText.setText("");
	}

	@Override
	protected boolean validatePage() {

		if (firstTreatmentText.getText() == null || firstTreatmentText.getText().equals("")) {
			setErrorMessage("First treatment not specified, please enter the first treatment");

			return false;
		}
		if (secondTreatmentText.getText() == null || secondTreatmentText.getText().equals("")) {
			setErrorMessage("Second treatment not specified, please enter the second treatment");

			return false;
		}
		if (factorText.getText() == null || factorText.getText().equals("")) {
			setErrorMessage("Factor not specified, please enter the factor");

			return false;
		}

		setErrorMessage(null);

		return true;
	}

	public void addResearchHypothesis() {
		if (validatePage()) {
			ResearchHypothesis rh = AutoExpFactory.eINSTANCE.createResearchHypothesis();
			ResearchHypothesisFormula rhf = AutoExpFactory.eINSTANCE.createResearchHypothesisFormula();

			DependentVariable depVariable = AutoExpFactory.eINSTANCE.createDependentVariable();
			Treatment firstTreatment = AutoExpFactory.eINSTANCE.createTreatment();
			Treatment secondTreatment = AutoExpFactory.eINSTANCE.createTreatment();
			Factor factor = AutoExpFactory.eINSTANCE.createFactor();
			OperatorType operator = AutoExpFactory.eINSTANCE.createOperatorType();
			factor.setName(factorText.getText());
			factor.setDescription(factorDescriptionText.getText());

			NewModelTemplateWizardResearchHypothesisPage prevPage = (NewModelTemplateWizardResearchHypothesisPage) (this
					.getPreviousPage());

			depVariable.setName(prevPage.depVariableText.getText());
			depVariable.setDescription(prevPage.depVariableDescriptionText.getText());
			firstTreatment.setName(firstTreatmentText.getText());
			firstTreatment.setDescription(firstTreatmentDescriptionText.getText());
			firstTreatment.setFactor(factor);
			secondTreatment.setName(secondTreatmentText.getText());
			secondTreatment.setDescription(secondTreatmentDescriptionText.getText());
			secondTreatment.setFactor(factor);
			operator.setTypeName("=");
			rhf.setDepVariable(depVariable);
			rhf.setTreatment1(firstTreatment);
			rhf.setOperator(operator);
			rhf.setTreatment2(secondTreatment);
			rh.setFormula(rhf);
			rh.setName(prevPage.nameText.getText());
			rh.setDescription(prevPage.descriptionText.getText());

			experiment.getResearchHypotheses().add(rh);

			experiment.getDependentVariables().add(depVariable);

			experiment.getFactors().add(factor);

			experiment.getTreatments().add(firstTreatment);
			experiment.getTreatments().add(secondTreatment);
		}
	}

	@Override
	public IWizardPage getNextPage() {

		return super.getNextPage();
	}

	@Override
	public IWizardPage getPreviousPage() {

		return super.getPreviousPage();
	}

	@Override
	protected void updateWidgetEnablements() {
		super.updateWidgetEnablements();
		button.setEnabled(validatePage());
	}

}
