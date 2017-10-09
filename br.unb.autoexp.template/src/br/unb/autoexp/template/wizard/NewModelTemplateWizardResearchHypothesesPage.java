package br.unb.autoexp.template.wizard;

import org.dslforge.workspace.ui.wizards.NewModelFileWizardPage;
import org.eclipse.swt.SWT;
import org.eclipse.swt.custom.ScrolledComposite;
import org.eclipse.swt.events.ModifyEvent;
import org.eclipse.swt.events.ModifyListener;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Combo;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Group;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Text;

import br.unb.autoexp.autoExp.AutoExpFactory;
import br.unb.autoexp.autoExp.CustomDependentVariable;
import br.unb.autoexp.autoExp.Experiment;
import br.unb.autoexp.autoExp.ExperimentalDesign;
import br.unb.autoexp.autoExp.ResearchHypothesis;
import br.unb.autoexp.autoExp.ResearchHypothesisFormula;
import br.unb.autoexp.autoExp.Treatment;

public class NewModelTemplateWizardResearchHypothesesPage extends NewModelFileWizardPage {

	private static final long serialVersionUID = 1L;

	protected Experiment experiment;
	protected Text nameText;
	protected Text depVariableText;
	protected Text firstTreatmentText;
	protected Text secondTreatmentText;
	protected Text comparatorText;

	public NewModelTemplateWizardResearchHypothesesPage(String pageName, Experiment experiment) {
		super(pageName);
		this.experiment = experiment;
	}

	protected NewModelTemplateWizardResearchHypothesesPage(String pageName) {
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

	protected void createDialogArea(final Composite parent) {
		Group group = new Group(parent, SWT.NONE);
		group.setLayout(new GridLayout());
		group.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));

		final ScrolledComposite scrolledComposite = new ScrolledComposite(parent,
				SWT.BORDER | SWT.H_SCROLL | SWT.V_SCROLL);
		scrolledComposite.setExpandHorizontal(true);
		scrolledComposite.setExpandVertical(true);

		final Composite composite = new Composite(scrolledComposite, SWT.NONE);
		composite.setLayout(new GridLayout(1, false));
		scrolledComposite.setContent(composite);
		scrolledComposite.setSize(composite.computeSize(SWT.DEFAULT, SWT.DEFAULT));

		final Composite composite_1 = new Composite(composite, SWT.NONE);
		composite_1.setLayout(new GridLayout(2, false));
		composite_1.setLayoutData(new GridData(SWT.LEFT, SWT.CENTER, false, false));

		final Label lblDefault = new Label(composite_1, SWT.NONE);
		lblDefault.setLayoutData(new GridData(SWT.RIGHT, SWT.CENTER, false, false, 1, 1));
		lblDefault.setText("Default:");

		final Combo combo = new Combo(composite_1, SWT.NONE);
		combo.setLayoutData(new GridData(SWT.LEFT, SWT.CENTER, true, false, 1, 1));

		final Composite composite_2 = new Composite(composite, SWT.NONE);
		composite_2.setLayout(new GridLayout(4, false));
		composite_2.setLayoutData(new GridData(SWT.LEFT, SWT.CENTER, false, false));

		final Composite composite_3 = new Composite(composite, SWT.NONE);
		composite_3.setLayout(new GridLayout());
		composite_3.setLayoutData(new GridData(SWT.LEFT, SWT.CENTER, false, false));

		final Button btnAdd = new Button(composite_3, SWT.NONE);
		btnAdd.setText("Add");
		btnAdd.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(final SelectionEvent e) {
				final Label label2 = new Label(composite_2, SWT.NONE);
				label2.setLayoutData(new GridData(SWT.RIGHT, SWT.CENTER, false, false, 1, 1));
				int count = 0;
				label2.setText(String.valueOf(count++));

				new Text(composite_2, SWT.BORDER).setLayoutData(new GridData(SWT.FILL, SWT.CENTER, true, false));
				new Text(composite_2, SWT.BORDER).setLayoutData(new GridData(SWT.FILL, SWT.CENTER, true, false));
				new Button(composite_2, SWT.NONE).setText("Delete");

				// DO THIS:
				scrolledComposite.layout(true, true);
				scrolledComposite.setMinSize(composite.computeSize(SWT.DEFAULT, SWT.DEFAULT));
				// .. and it will work
			}
		});

		setPageComplete(validatePage());
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
		layout.makeColumnsEqualWidth = false;
		folderInfoComposite.setLayout(layout);
		folderInfoComposite.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));

		Label hypothesisName = new Label(folderInfoComposite, SWT.NONE);
		hypothesisName.setLayoutData(new GridData(160, SWT.DEFAULT));
		hypothesisName.setText("&Hypothesis Name:");

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
		Label dependentVariable = new Label(folderInfoComposite, SWT.NONE);
		dependentVariable.setLayoutData(new GridData(160, SWT.DEFAULT));
		dependentVariable.setText("&Dependent Variable:");

		depVariableText = new Text(folderInfoComposite, SWT.BORDER);
		depVariableText.setLayoutData(layoutData);
		depVariableText.addModifyListener(new ModifyListener() {
			@Override
			public void modifyText(ModifyEvent event) {
				updateWidgetEnablements();

			}
		});

		Label firstTreatmentLabel = new Label(folderInfoComposite, SWT.NONE);
		firstTreatmentLabel.setLayoutData(new GridData(160, SWT.DEFAULT));
		firstTreatmentLabel.setText("&First Treatment:");

		firstTreatmentText = new Text(folderInfoComposite, SWT.BORDER);
		firstTreatmentText.setLayoutData(layoutData);
		firstTreatmentText.addModifyListener(new ModifyListener() {
			@Override
			public void modifyText(ModifyEvent event) {
				updateWidgetEnablements();

			}
		});

		Label secondTreatmentLabel = new Label(folderInfoComposite, SWT.NONE);
		secondTreatmentLabel.setLayoutData(new GridData(160, SWT.DEFAULT));
		secondTreatmentLabel.setText("&Second Treatment:");

		secondTreatmentText = new Text(folderInfoComposite, SWT.BORDER);
		secondTreatmentText.setLayoutData(layoutData);
		secondTreatmentText.addModifyListener(new ModifyListener() {
			@Override
			public void modifyText(ModifyEvent event) {
				updateWidgetEnablements();

			}
		});

		setPageComplete(validatePage());
	}

	@Override
	protected boolean validatePage() {
		if (nameText == null || nameText.equals("")) {
			setErrorMessage("Research hypothesis not specified, please enter the research hypothesis name");

			return false;
		}
		if (depVariableText == null || depVariableText.equals("")) {
			setErrorMessage("Dependent Variable not specified, please enter the dependent variable");

			return false;
		}
		if (firstTreatmentText == null || firstTreatmentText.equals("")) {
			setErrorMessage("First treatment not specified, please enter the first treatment");

			return false;
		}
		if (secondTreatmentText == null || secondTreatmentText.equals("")) {
			setErrorMessage("Second treatment not specified, please enter the second treatment");

			return false;
		}
		ResearchHypothesis rh = AutoExpFactory.eINSTANCE.createResearchHypothesis();
		ResearchHypothesisFormula rhf = AutoExpFactory.eINSTANCE.createResearchHypothesisFormula();
		CustomDependentVariable depVariable = AutoExpFactory.eINSTANCE.createCustomDependentVariable();
		ExperimentalDesign design = AutoExpFactory.eINSTANCE.createExperimentalDesign();
		Treatment firstTreatment = AutoExpFactory.eINSTANCE.createTreatment();
		Treatment secondTreatment = AutoExpFactory.eINSTANCE.createTreatment();
		depVariable.setName(depVariableText.getText());
		firstTreatment.setName(firstTreatmentText.getText());
		secondTreatment.setName(secondTreatmentText.getText());
		rhf.setDepVariable(depVariable);
		rhf.setTreatment1(firstTreatment);
		rhf.setTreatment2(secondTreatment);
		rh.setFormula(rhf);
		rh.setName(nameText.getText());
		experiment.getResearchHypotheses().clear();
		experiment.getResearchHypotheses().add(rh);
		design.getDependentVariables().clear();
		design.getDependentVariables().add(depVariable);
		design.getTreatments().clear();
		design.getTreatments().add(firstTreatment);
		design.getTreatments().add(secondTreatment);
		experiment.setExperimentalDesign(design);

		setErrorMessage(null);

		return true;
	}

}
