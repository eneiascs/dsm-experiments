package br.unb.autoexp.template.wizard;

import br.unb.autoexp.autoExp.Experiment
import com.google.common.base.Charsets
import java.io.File
import java.lang.reflect.InvocationTargetException
import java.util.Collections
import org.apache.log4j.Logger
import org.eclipse.core.runtime.IProgressMonitor
import org.eclipse.emf.common.util.URI
import org.eclipse.jface.dialogs.MessageDialog
import org.eclipse.jface.operation.IRunnableWithProgress
import org.eclipse.jface.viewers.IStructuredSelection
import org.eclipse.rap.rwt.RWT

import static extension com.google.common.io.Files.*
import static extension java.lang.String.*

class NewModelTemplateWizard extends AbstractNewResourceWizard {
	

	static final Logger logger = Logger.getLogger(NewModelTemplateWizard)
	protected NewModelTemplateWizardPage page
	protected NewModelTemplateWizardResearchHypothesisPage researchHypothesePage;
	protected NewModelTemplateWizardTreatmentsPage treatmentsPage;
	protected File containerFile;
	protected Experiment experiment

	new(File container, Experiment experiment) {
		super(container);
		
		containerFile = container;
		this.experiment = experiment
		
		
		setWindowTitle("Model Wizard");
	}

	

	override public void addPages() {

		page = new NewModelTemplateWizardPage("page")
		page.setTitle("File Information");
		page.setDescription("Create a example of experiment specification");

		//
		page.setInitialElementSelections(Collections.singletonList(getSelection()));
		addPage(page);

		val basicInfoPage = new NewModelTemplateWizardBasicInfoPage("basicInfoPage", experiment)
		basicInfoPage.title = "Experiment Basic Information"
		addPage(basicInfoPage)

		researchHypothesePage = new NewModelTemplateWizardResearchHypothesisPage("researchHypothesePage", experiment)
		researchHypothesePage.title = "Experiment Research Hypotheses"

		addPage(researchHypothesePage)

		treatmentsPage = new NewModelTemplateWizardTreatmentsPage("treatmentsPage", experiment)
		treatmentsPage.title = "Experiment Research Hypotheses"

		addPage(treatmentsPage)

		val researhHypothesisListPage = new NewModelTemplateWizardResearchHypothessListPage("researhHypothesisListPage",
			experiment)
	// addPage(researhHypothesisListPage)
	}

	override boolean performFinish() {
		treatmentsPage.addResearchHypothesis
		val URI fileURI = computeFileURI();
		logger.info(experiment.name)
		logger.info(experiment.description)

		val IStructuredSelection selection = getSelection();
		val File container = new File(selection.toString());
		if (container.exists() && !container.isDirectory()) {
			MessageDialog.openQuestion(getShell(), "Question",
				"The selected container is not valid, please select where the file should be located.");

			return false;
		}
		if (new File(fileURI.devicePath()).exists()) {
			if (!MessageDialog.openQuestion(getShell(), "Question",
				"The file " + fileURI.devicePath() + " already exists.  Do you want to replace the existing file?")) {
				return false;
			}
		}

		val IRunnableWithProgress operation = new IRunnableWithProgress() {

			override void run(IProgressMonitor progressMonitor) {
				try {

					// WorkspaceManager.INSTANCE.createResource(new Path(fileURI.devicePath()));
					logger.info("Writing to file %s".format(fileURI.toFileString))
					experiment.generate.write(new File(fileURI.toFileString), Charsets.UTF_8)

					MessageDialog.openInformation(getWorkbench().activeWorkbenchWindow.shell, "Model Example Created",
						"The model file '%s' has been created.".format(new File(fileURI.toFileString).name))
				} catch (Exception ex) {
					logger.error(ex.getMessage(), ex);
				} finally {
					progressMonitor.done();

				}
			}

		};

		try {
			getContainer().run(false, false, operation);
		} catch (InvocationTargetException ex) {
			logger.error(ex.getMessage(), ex);
		} catch (InterruptedException ex) {
			logger.error(ex.getMessage(), ex);
		}
		val String currentUser = RWT.getUISession().getAttribute("user") as String;
		logger.info(currentUser + " created new model: " + fileURI);

		// return openEditor(getWorkbench(), fileURI);
		return true;
	}

	def URI computeFileURI() {
		page.fileURI
	}

	def generate(Experiment experiment) {
		'''
			Experiment «experiment.name» {
				Authors {
					«FOR author : experiment.authors»
						«author.name» {fullName "«author.fullName»"}«IF !experiment.authors.last.name.equals(author.name)»,«ENDIF»
					«ENDFOR»
				}
				
				 description "«experiment.description»" 
				 				 
				 Research Hypotheses {
				 	«FOR rh : experiment.researchHypotheses»
				 		«rh.name» {«rh.formula.depVariable.name» «rh.formula.treatment1.name» = «rh.formula.treatment2.name» description "«rh.description»"}«IF !experiment.researchHypotheses.last.name.equals(rh.name)»,«ENDIF»
				 	«ENDFOR»
				 	}
				 	
				 	Experimental Design {
				 	   runs 8
				 	}    
				 	  Dependent Variables {
				 	  «FOR depVariable : experiment.dependentVariables»	
				 	  	«depVariable.name» { description "«depVariable.description»" scaleType Absolute }«IF !experiment.dependentVariables.last.name.equals(depVariable.name)»,«ENDIF»
				 	  «ENDFOR»   
				 }    
				  
				 Factors {
				 	«FOR factor : experiment.factors»
				 		«factor.name» { description "«factor.description»" scaleType Nominal}«IF !experiment.factors.last.name.equals(factor.name)»,«ENDIF»
				 	«ENDFOR»    
				 	
				 	} 
				 	
				 	Treatments {
				 	«FOR treatment : experiment.treatments»
				 		«treatment.name» description "«treatment.description»"  factor «treatment.factor.name» parameters{argument "arg"} execution reanaEvaluator«IF !experiment.treatments.last.name.equals(treatment.name)»,«ENDIF»	
				 	«ENDFOR»   	 		 
				 	}
				 	 Objects { 
				 	 	intercloud {
				 	 	    description "Intercloud" 
				 	 	    parameters {
				 	 		    featureModel "intercloud/0.txt",
				 	 		    umlModel "intercloud/0_behavioral_model.xml"}
				 	 	},
				 	 	lift {
				 	 	    description "Lift" 
				 	 	    parameters {
				 	 		    featureModel "lift/0.txt",
				 	 		    umlModel "lift/0_behavioral_model.xml"
				 	 	    } 
				 	 	},	
				 	 	bsn {
				 	 	    description "BSN" 
				 	 	    parameters {
				 	 		    featureModel "bsn/0.txt",
				 	 		    umlModel "bsn/0_behavioral_model.xml"
				 	 	    } 	 
				 	 	},
				 	 	eMail {
				 	 	    description "Email" 
				 	 	    parameters {
				 	 		    featureModel "email/0.txt",
				 	 		    umlModel "email/0_behavioral_model.xml"
				 	 	    } 	 
				 	 	},
				 	 	tankwar {
				 	 	    description "Tank War" 
				 	 	    parameters {
				 	 		    featureModel "tankwar/0.txt",
				 	 		    umlModel "tankwar/0_behavioral_model.xml"
				 	 	    }   
				 	 	 }, 	 
				 	 	minepump {
				 	 	    description "Minepump" 
				 	 	    parameters {
				 	 		featureModel "minepump/0.txt",
				 	 		umlModel "minepump/0_behavioral_model.xml"
				 	 	    } 	 
				 	 	}		
				 	 }
				 	Executions { 
				 	    reanaEvaluator { 
				 	 	    command "java -jar reanaSpl.jar --analysis-strategy='${treatment.parameter.argument}' --feature-model='${object.parameter.featureModel}' --uml-model='${object.parameter.umlModel}'" 
				 	 		
				 	 		files {
				 	 		    {
				 	 		        name "featureModel" 
				 	 		        source "${object.parameter.featureModel}"
				 	 		    },
				 	 		    {
				 	 		        name "umlModel" 
				 	 		        source "${object.parameter.umlModel}"
				 	 		    }
				 	 		}
				 	 	}
				 	}
				 Infrastructure {
				 	user{
				 	  username "vagrant"
				 	}
				 }
				}
		'''

	}
}
