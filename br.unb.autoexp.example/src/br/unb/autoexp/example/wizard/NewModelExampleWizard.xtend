package br.unb.autoexp.example.wizard;

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
import br.unb.autoexp.example.wizard.NewModelExampleWizardPage
import static extension com.google.common.io.Files.*
import static extension java.lang.String.*

class NewModelExampleWizard extends NewModelFileWizard {
	static final Logger logger = Logger.getLogger(NewModelExampleWizard)
	protected NewModelExampleWizardPage page = null;
	protected File containerFile;

	new(File container) {
		super(container);
		containerFile = container;
		setWindowTitle("New Model Example");
	}

	override public void addPages() {
		page = new NewModelExampleWizardPage("NewModelFile");
		page.setTitle("New Model Example");
		page.setDescription("Create a example of experiment specification");
		//
		page.setInitialElementSelections(Collections.singletonList(getSelection()));
		addPage(page);
	}

	override boolean performFinish() {
		val URI fileURI = computeFileURI();

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
					modelExample.write(new File(fileURI.toFileString), Charsets.UTF_8)

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

	def getModelExample() {
		'''
			Experiment helloWorld {
				Authors {
				    firstAuthor {fullName "First Author"},
				    secondAuthor {fullName "Second Author"}
				     
				}
				
				 description "Reliability Analysis of Software Product Lines" 
				 
				 Keywords { "SPL","Software Product Lines"}
				 Goals {goal1 {object "Object" technique "Technique" quality "Quality"  ptView "ptView" contextOf "contextOf"},goal2 "Goal 2"}
				 
				 Research Questions { question1 { description  "Research Question 1" goal goal1}, question2 { description "Question 2"}} 
				 
				 Research Hypotheses {
				  	RH1 {time featureFamily = featureProduct description "Time Comparison between Feature Family and Feature Product" goal goal1},
				  	RH2 {time featureFamily = family goal goal2},
				  	RH3 {time featureFamily = familyProduct},
				  	RH4 {time featureFamily = product},
				  	RH5 {memoryConsumption featureFamily = featureProduct},
				  	RH6 {memoryConsumption featureFamily = family},
				  	RH7 {memoryConsumption featureFamily = familyProduct},
				  	RH8 {memoryConsumption featureFamily = product}
				  }
				  
				  Experimental Design {
				     runs 8
				  }    
				    Dependent Variables {
				      time { description "Analysis time" scaleType Absolute },
				      memoryConsumption { description "Memory Consumption" scaleType Absolute }
				 }    
				  
				 Factors { 
				 	strategy { description "Analysis Strategy" scaleType Nominal}
				 	} 
				 	
				 	Treatments { 
				 	 featureFamily description "Feature Family"  factor strategy parameters{argument "Feature-family-based"} execution reanaEvaluator,
				 	 featureProduct description "Feature Product" factor strategy parameters{argument "Feature-product-based"} execution reanaEvaluator,
				 	 family description "Family" factor strategy parameters{argument "Family-based"} execution reanaEvaluator,
				 	 familyProduct description "Family Product" factor strategy parameters{argument "Family-product-based"} execution reanaEvaluator,
				 	 product description "Product" factor strategy parameters{argument "Product-based"} execution reanaEvaluator
				 	 
				 
				 }
				 Objects { description "" scaleType Nominal { 
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
