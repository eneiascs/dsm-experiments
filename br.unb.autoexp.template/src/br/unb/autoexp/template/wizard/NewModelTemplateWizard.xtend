package br.unb.autoexp.template.wizard;

import br.unb.autoexp.autoExp.AutoExpFactory
import br.unb.autoexp.autoExp.Experiment
import com.google.common.base.Charsets
import java.io.File
import java.lang.reflect.InvocationTargetException
import java.util.Collections
import org.apache.log4j.Logger
import org.dslforge.workspace.WorkspaceManager
import org.dslforge.workspace.ui.wizards.NewModelFileWizard
import org.eclipse.core.runtime.IProgressMonitor
import org.eclipse.core.runtime.Path
import org.eclipse.emf.common.util.URI
import org.eclipse.jface.dialogs.MessageDialog
import org.eclipse.jface.operation.IRunnableWithProgress
import org.eclipse.jface.viewers.IStructuredSelection
import org.eclipse.rap.rwt.RWT

import static extension com.google.common.io.Files.*
import static extension java.lang.String.*

class NewModelTemplateWizard extends NewModelFileWizard {
	static final Logger logger = Logger.getLogger(NewModelTemplateWizard)
	protected NewModelTemplateWizardPage page = null;
	protected NewModelTemplateWizardBasicInfoPage basicInfoPage = null;
	protected File containerFile;
	protected Experiment experiment=AutoExpFactory.eINSTANCE.createExperiment
	new(File container) {
		super(container);
		containerFile = container;
		setWindowTitle("New Model Template");
	}

	override public void addPages() {
		page = new NewModelTemplateWizardPage("NewModelFile");
		page.setTitle("File Information");
		page.setDescription("Create a example of experiment specification");
		//
		page.setInitialElementSelections(Collections.singletonList(getSelection()));
		addPage(page);
		
		basicInfoPage=new NewModelTemplateWizardBasicInfoPage("NewModelFile",experiment)
		basicInfoPage.title="Experiment Basic Information"
		addPage(basicInfoPage)
		
		val researhHypothesePage=new NewModelTemplateWizardResearchHypothesesPage("NewModelFile",experiment)
		researhHypothesePage.title="Experiment Research Hypotheses"
		addPage(researhHypothesePage)
	}

	override boolean performFinish() {
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

					WorkspaceManager.INSTANCE.createResource(new Path(fileURI.devicePath()));
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

	override URI computeFileURI() {
		page.fileURI
	}

	def generate(Experiment experiment) {
		'''
			Experiment «experiment.name» {
				Authors {
				    firstAuthor {fullName "First Author"},
				    secondAuthor {fullName "Second Author"}
				     
				}
				
				 description "«experiment.description»" 
				 
				 Keywords { "SPL","Software Product Lines"}
				 Goals {goal1 {object "Object" technique "Technique" quality "Quality"  ptView "ptView" contextOf "contextOf"},goal2 "Goal 2"}
				 
				 Research Questions { question1 { description  "Research Question 1" goal goal1}, question2 { description "Question 2"}} 
				 
				 Research Hypotheses {
				 	«FOR rh:experiment.researchHypotheses»
				 	«rh.name» {«rh.formula.depVariable.name» «rh.formula.treatment1.name» = «rh.formula.treatment2.name» description "«rh.description»" goal goal1}«IF !experiment.researchHypotheses.last.name.equals(rh.name)»,«ENDIF»
				 	«ENDFOR»
				  }
				  
				  Experimental Design {
				     runs 8 
				    Dependent Variables {
				    «FOR depVariable:experiment.experimentalDesign.dependentVariables»	
				      «depVariable.name» { description "«depVariable.description»" scaleType Absolute }«IF !experiment.experimentalDesign.dependentVariables.last.name.equals(depVariable.name)»,«ENDIF»
				    «ENDFOR»   
				 }    
				  
				 Factors { 
				 	strategy { description "Analysis Strategy" scaleType Nominal}
				 	} 
				 	
				 	Treatments {
					 «FOR treatment:experiment.experimentalDesign.treatments»
					 	«treatment.name» description "«treatment.description»"  factor strategy parameters{argument "«treatment.name»"} execution reanaEvaluator«IF !experiment.experimentalDesign.treatments.last.name.equals(treatment.name)»,«ENDIF»	
					 «ENDFOR»   	 		 
				 	}
				 Objects { 
				 	intercloud description "Intercloud" parameters {
				 		featureModel "intercloud/0.txt",umlModel "intercloud/0_behavioral_model.xml"},
				 	lift description "Lift" parameters {
				 		featureModel "lift/0.txt",umlModel "lift/0_behavioral_model.xml"}, 
				 		
				 	bsn description "BSN" parameters {
				 		featureModel "bsn/0.txt",umlModel "bsn/0_behavioral_model.xml"}, 	 
				 	eMail description "Email" parameters {
				 		featureModel "email/0.txt",umlModel "email/0_behavioral_model.xml"}, 	 
				 	tankwar description "Tank War" parameters {
				 		featureModel "tankwar/0.txt",umlModel "tankwar/0_behavioral_model.xml"}, 	 
				 	minepump description "Minepump" parameters {
				 		featureModel "minepump/0.txt",umlModel "minepump/0_behavioral_model.xml"} 	 
				 			
				 }}
				 Executions { 
				 	reanaEvaluator { 
				 		command "java -jar reanaSpl.jar --analysis-strategy='${treatment.parameter.argument}' --feature-model='${object.parameter.featureModel}' --uml-model='${object.parameter.umlModel}'" 
				 		
				 		files {
				 		    {name "featureModel" path "${object.parameter.featureModel}"},
				 		    { name "umlModel" path "${object.parameter.umlModel}" }
				 		    
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
