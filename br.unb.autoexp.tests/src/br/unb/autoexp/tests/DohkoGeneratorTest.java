package br.unb.autoexp.tests;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.fail;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.excalibur.core.execution.domain.ApplicationDescriptor;
import org.excalibur.core.execution.domain.Block;
import org.excalibur.core.util.YesNoEnum;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;

import br.unb.autoexp.autoExp.AccessKey;
import br.unb.autoexp.autoExp.AutoExpFactory;
import br.unb.autoexp.autoExp.Cloud;
import br.unb.autoexp.autoExp.CloudProvider;
import br.unb.autoexp.autoExp.DependentVariable;
import br.unb.autoexp.autoExp.Execution;
import br.unb.autoexp.autoExp.Experiment;
import br.unb.autoexp.autoExp.ExperimentalObject;
import br.unb.autoexp.autoExp.Factor;
import br.unb.autoexp.autoExp.File;
import br.unb.autoexp.autoExp.Infrastructure;
import br.unb.autoexp.autoExp.InstanceType;
import br.unb.autoexp.autoExp.Instrument;
import br.unb.autoexp.autoExp.OnFinishType;
import br.unb.autoexp.autoExp.OperatorType;
import br.unb.autoexp.autoExp.Parameter;
import br.unb.autoexp.autoExp.PlatformType;
import br.unb.autoexp.autoExp.Preconditions;
import br.unb.autoexp.autoExp.Region;
import br.unb.autoexp.autoExp.Requirements;
import br.unb.autoexp.autoExp.ResearchHypothesis;
import br.unb.autoexp.autoExp.ResearchHypothesisFormula;
import br.unb.autoexp.autoExp.StatusType;
import br.unb.autoexp.autoExp.Treatment;
import br.unb.autoexp.autoExp.User;
import br.unb.autoexp.autoExp.UserKey;
import br.unb.autoexp.autoExp.Zone;
import br.unb.autoexp.generator.dohko.DohkoGenerator;
import br.unb.autoexp.generator.exception.InvalidPropertyException;

public class DohkoGeneratorTest {
	DohkoGenerator dohkoGenerator;
	Experiment experiment;

	@Before
	public void initExperiment() {
		dohkoGenerator = new DohkoGenerator();
		experiment = AutoExpFactory.eINSTANCE.createExperiment();

	}

	public void setValidExperiment() {
		experiment.setName("name");
		experiment.setExperimentalDesign(AutoExpFactory.eINSTANCE.createExperimentalDesign());
		experiment.getExperimentalDesign().setRuns(2);
		DependentVariable dv = AutoExpFactory.eINSTANCE.createDependentVariable();
		dv.setName("dependent variable name");
		dv.setDescription("dependent variable description");

		Instrument instr = AutoExpFactory.eINSTANCE.createInstrument();
		instr.setCommand("instrCmd");
		dv.setInstrument(instr);
		experiment.getDependentVariables().add(dv);
		Factor factor = AutoExpFactory.eINSTANCE.createFactor();
		factor.setName("factorName");
		factor.setDescription("factorDescription");
		experiment.getFactors().add(factor);

		Execution execution = AutoExpFactory.eINSTANCE.createExecution();
		execution.setName("executionName");
		execution.setCmd("cmdLine");
		experiment.getExecutions().add(execution);

		Execution execution2 = AutoExpFactory.eINSTANCE.createExecution();
		execution2.setName("executionName2");
		execution2.setCmd("cmdLine2");
		experiment.getExecutions().add(execution2);

		Treatment treatment = AutoExpFactory.eINSTANCE.createTreatment();
		treatment.setName("treatmentName");
		treatment.setDescription("treatmentDescription");
		treatment.setFactor(factor);
		treatment.setExecution(execution);
		experiment.getTreatments().add(treatment);

		Treatment treatment2 = AutoExpFactory.eINSTANCE.createTreatment();
		treatment2.setName("treatmentName2");
		treatment2.setDescription("treatmentDescription");
		treatment2.setFactor(factor);
		treatment2.setExecution(execution2);
		experiment.getTreatments().add(treatment2);

		ExperimentalObject object = AutoExpFactory.eINSTANCE.createExperimentalObject();
		object.setName("objectName");
		object.setDescription("objectDescription");
		experiment.getExperimentalObjects().add(object);

		ExperimentalObject object2 = AutoExpFactory.eINSTANCE.createExperimentalObject();
		object2.setName("objectName2");
		object2.setDescription("objectDescription2");
		experiment.getExperimentalObjects().add(object2);

		ResearchHypothesis rh = AutoExpFactory.eINSTANCE.createResearchHypothesis();
		rh.setName("rh1");
		ResearchHypothesisFormula rhf = AutoExpFactory.eINSTANCE.createResearchHypothesisFormula();
		rhf.setDepVariable(dv);
		OperatorType operator = AutoExpFactory.eINSTANCE.createOperatorType();
		operator.setTypeName("=");
		rhf.setOperator(operator);
		rhf.setTreatment1(treatment);
		rhf.setTreatment2(treatment2);
		rh.setFormula(rhf);
		experiment.getResearchHypotheses().add(rh);
		Infrastructure infrastructure = AutoExpFactory.eINSTANCE.createInfrastructure();
		User user = AutoExpFactory.eINSTANCE.createUser();
		user.setUsername("username");
		infrastructure.setUser(user);
		experiment.setInfrastructure(infrastructure);
	}

	private List<Block> sortBlocks(ApplicationDescriptor applicationDescriptor) {
		List<Block> blocks = new ArrayList<Block>();
		blocks.addAll(applicationDescriptor.getBlocks());
		Collections.sort(blocks, new Comparator<Block>() {
			@Override
			public int compare(Block block1, Block block2) {

				return block1.getName().compareTo(block2.getName());
			}
		});
		return blocks;
	}

	@Test
	public void generateApplications() {
		setValidExperiment();
		experiment.getExperimentalDesign().setRuns(1);
		ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
		List<Block> blocks = sortBlocks(applicationDescriptor);
		assertEquals(4, applicationDescriptor.getBlocks().size());
		applicationDescriptor.getBlocks().forEach((block) -> {
			assertEquals(1, block.getApplications().size());

		});

		assertEquals("treatmentName2_objectName_0", blocks.get(0).getApplications().get(0).getName());
		assertEquals("instrCmd cmdLine2", blocks.get(0).getApplications().get(0).getCommandLine());
		assertEquals("treatmentName2_objectName2_0", blocks.get(1).getApplications().get(0).getName());
		assertEquals("instrCmd cmdLine2", blocks.get(1).getApplications().get(0).getCommandLine());
		assertEquals("treatmentName_objectName_0", blocks.get(2).getApplications().get(0).getName());
		assertEquals("instrCmd cmdLine", blocks.get(2).getApplications().get(0).getCommandLine());
		assertEquals("treatmentName_objectName2_0", blocks.get(3).getApplications().get(0).getName());
		assertEquals("instrCmd cmdLine", blocks.get(3).getApplications().get(0).getCommandLine());

	}

	@Test
	public void generateApplicationsRuns() {
		setValidExperiment();
		experiment.getExperimentalDesign().setRuns(2);
		ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
		List<Block> blocks = sortBlocks(applicationDescriptor);
		assertEquals(4, applicationDescriptor.getBlocks().size());
		applicationDescriptor.getBlocks().forEach((block) -> {
			assertEquals(2, block.getApplications().size());

		});

		assertEquals("treatmentName2_objectName_0", blocks.get(0).getApplications().get(0).getName());
		assertEquals("treatmentName2_objectName_1", blocks.get(0).getApplications().get(1).getName());
		blocks.get(0).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine2", app.getCommandLine());
		});

		assertEquals("treatmentName2_objectName2_0", blocks.get(1).getApplications().get(0).getName());
		assertEquals("treatmentName2_objectName2_1", blocks.get(1).getApplications().get(1).getName());
		blocks.get(1).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine2", app.getCommandLine());
		});

		assertEquals("treatmentName_objectName_0", blocks.get(2).getApplications().get(0).getName());
		assertEquals("treatmentName_objectName_1", blocks.get(2).getApplications().get(1).getName());
		blocks.get(2).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine", app.getCommandLine());
		});

		assertEquals("treatmentName_objectName2_0", blocks.get(3).getApplications().get(0).getName());
		assertEquals("treatmentName_objectName2_1", blocks.get(3).getApplications().get(1).getName());
		blocks.get(3).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine", app.getCommandLine());
		});
	}

	@Test
	public void generateApplicationsObjectsArguments() {
		setValidExperiment();
		experiment.getExperimentalDesign().setRuns(2);
		experiment.getExperimentalObjects().clear();
		ExperimentalObject object = AutoExpFactory.eINSTANCE.createExperimentalObject();
		object.setName("objectName");
		object.setDescription("objectDescription");

		Parameter param1 = AutoExpFactory.eINSTANCE.createParameter();
		param1.setName("arg");
		param1.setValue("OBJECT1");
		object.getParameters().add(param1);
		experiment.getExperimentalObjects().add(object);

		ExperimentalObject object2 = AutoExpFactory.eINSTANCE.createExperimentalObject();
		object2.setName("objectName2");
		object2.setDescription("objectDescription2");
		Parameter param2 = AutoExpFactory.eINSTANCE.createParameter();
		param2.setName("arg");
		param2.setValue("OBJECT2");
		object2.getParameters().add(param2);
		experiment.getExperimentalObjects().add(object2);
		experiment.getTreatments().clear();
		experiment.getResearchHypotheses().clear();
		experiment.getExecutions().clear();
		Execution execution = AutoExpFactory.eINSTANCE.createExecution();
		execution.setName("executionName");
		execution.setCmd("cmdLine --${object.parameter.arg}");
		experiment.getExecutions().add(execution);

		Execution execution2 = AutoExpFactory.eINSTANCE.createExecution();
		execution2.setName("executionName2");
		execution2.setCmd("cmdLine2 --${object.parameter.arg}");
		experiment.getExecutions().add(execution2);

		Treatment treatment = AutoExpFactory.eINSTANCE.createTreatment();
		treatment.setName("treatmentName");
		treatment.setDescription("treatmentDescription");
		treatment.setFactor(experiment.getFactors().get(0));
		treatment.setExecution(execution);
		experiment.getTreatments().add(treatment);

		Treatment treatment2 = AutoExpFactory.eINSTANCE.createTreatment();
		treatment2.setName("treatmentName2");
		treatment2.setDescription("treatmentDescription");
		treatment2.setFactor(experiment.getFactors().get(0));
		treatment2.setExecution(execution2);
		experiment.getTreatments().add(treatment2);

		ResearchHypothesis rh = AutoExpFactory.eINSTANCE.createResearchHypothesis();
		rh.setName("rh1");
		ResearchHypothesisFormula rhf = AutoExpFactory.eINSTANCE.createResearchHypothesisFormula();
		rhf.setDepVariable(experiment.getDependentVariables().get(0));
		OperatorType operator = AutoExpFactory.eINSTANCE.createOperatorType();
		operator.setTypeName("=");
		rhf.setOperator(operator);
		rhf.setTreatment1(treatment);
		rhf.setTreatment2(treatment2);
		rh.setFormula(rhf);
		experiment.getResearchHypotheses().add(rh);

		ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
		List<Block> blocks = sortBlocks(applicationDescriptor);
		assertEquals(4, applicationDescriptor.getBlocks().size());
		applicationDescriptor.getBlocks().forEach((block) -> {
			assertEquals(2, block.getApplications().size());

		});

		assertEquals("treatmentName2_objectName_0", blocks.get(0).getApplications().get(0).getName());
		assertEquals("treatmentName2_objectName_1", blocks.get(0).getApplications().get(1).getName());
		blocks.get(0).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine2 --OBJECT1", app.getCommandLine());
		});

		assertEquals("treatmentName2_objectName2_0", blocks.get(1).getApplications().get(0).getName());
		assertEquals("treatmentName2_objectName2_1", blocks.get(1).getApplications().get(1).getName());
		blocks.get(1).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine2 --OBJECT2", app.getCommandLine());
		});

		assertEquals("treatmentName_objectName_0", blocks.get(2).getApplications().get(0).getName());
		assertEquals("treatmentName_objectName_1", blocks.get(2).getApplications().get(1).getName());
		blocks.get(2).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine --OBJECT1", app.getCommandLine());
		});

		assertEquals("treatmentName_objectName2_0", blocks.get(3).getApplications().get(0).getName());
		assertEquals("treatmentName_objectName2_1", blocks.get(3).getApplications().get(1).getName());
		blocks.get(3).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine --OBJECT2", app.getCommandLine());
		});
	}

	@Test
	public void generateApplicationsParameterObjectName() {
		setValidExperiment();
		experiment.getExperimentalDesign().setRuns(2);
		experiment.getExperimentalObjects().clear();
		ExperimentalObject object = AutoExpFactory.eINSTANCE.createExperimentalObject();
		object.setName("objectName");
		object.setDescription("objectDescription");

		experiment.getExperimentalObjects().add(object);

		ExperimentalObject object2 = AutoExpFactory.eINSTANCE.createExperimentalObject();
		object2.setName("objectName2");
		object2.setDescription("objectDescription2");
		experiment.getExperimentalObjects().add(object2);
		experiment.getTreatments().clear();
		experiment.getResearchHypotheses().clear();
		experiment.getExecutions().clear();
		Execution execution = AutoExpFactory.eINSTANCE.createExecution();
		execution.setName("executionName");
		execution.setCmd("cmdLine --${object.name}");
		experiment.getExecutions().add(execution);

		Execution execution2 = AutoExpFactory.eINSTANCE.createExecution();
		execution2.setName("executionName2");
		execution2.setCmd("cmdLine2 --${object.name}");
		experiment.getExecutions().add(execution2);

		Treatment treatment = AutoExpFactory.eINSTANCE.createTreatment();
		treatment.setName("treatmentName");
		treatment.setDescription("treatmentDescription");
		treatment.setFactor(experiment.getFactors().get(0));
		treatment.setExecution(execution);
		experiment.getTreatments().add(treatment);

		Treatment treatment2 = AutoExpFactory.eINSTANCE.createTreatment();
		treatment2.setName("treatmentName2");
		treatment2.setDescription("treatmentDescription");
		treatment2.setFactor(experiment.getFactors().get(0));
		treatment2.setExecution(execution2);
		experiment.getTreatments().add(treatment2);

		ResearchHypothesis rh = AutoExpFactory.eINSTANCE.createResearchHypothesis();
		rh.setName("rh1");
		ResearchHypothesisFormula rhf = AutoExpFactory.eINSTANCE.createResearchHypothesisFormula();
		rhf.setDepVariable(experiment.getDependentVariables().get(0));
		OperatorType operator = AutoExpFactory.eINSTANCE.createOperatorType();
		operator.setTypeName("=");
		rhf.setOperator(operator);
		rhf.setTreatment1(treatment);
		rhf.setTreatment2(treatment2);
		rh.setFormula(rhf);
		experiment.getResearchHypotheses().add(rh);

		ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
		List<Block> blocks = sortBlocks(applicationDescriptor);
		assertEquals(4, applicationDescriptor.getBlocks().size());
		applicationDescriptor.getBlocks().forEach((block) -> {
			assertEquals(2, block.getApplications().size());

		});

		assertEquals("treatmentName2_objectName_0", blocks.get(0).getApplications().get(0).getName());
		assertEquals("treatmentName2_objectName_1", blocks.get(0).getApplications().get(1).getName());
		blocks.get(0).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine2 --objectName", app.getCommandLine());
		});

		assertEquals("treatmentName2_objectName2_0", blocks.get(1).getApplications().get(0).getName());
		assertEquals("treatmentName2_objectName2_1", blocks.get(1).getApplications().get(1).getName());
		blocks.get(1).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine2 --objectName2", app.getCommandLine());
		});

		assertEquals("treatmentName_objectName_0", blocks.get(2).getApplications().get(0).getName());
		assertEquals("treatmentName_objectName_1", blocks.get(2).getApplications().get(1).getName());
		blocks.get(2).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine --objectName", app.getCommandLine());
		});

		assertEquals("treatmentName_objectName2_0", blocks.get(3).getApplications().get(0).getName());
		assertEquals("treatmentName_objectName2_1", blocks.get(3).getApplications().get(1).getName());
		blocks.get(3).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine --objectName2", app.getCommandLine());
		});
	}

	@Test
	public void generateApplicationsParameterObjectDescription() {
		setValidExperiment();
		experiment.getExperimentalDesign().setRuns(2);
		experiment.getExperimentalObjects().clear();
		ExperimentalObject object = AutoExpFactory.eINSTANCE.createExperimentalObject();
		object.setName("objectName");
		object.setDescription("objectDescription");

		experiment.getExperimentalObjects().add(object);

		ExperimentalObject object2 = AutoExpFactory.eINSTANCE.createExperimentalObject();
		object2.setName("objectName2");
		object2.setDescription("objectDescription2");
		experiment.getExperimentalObjects().add(object2);
		experiment.getTreatments().clear();
		experiment.getResearchHypotheses().clear();
		experiment.getExecutions().clear();
		Execution execution = AutoExpFactory.eINSTANCE.createExecution();
		execution.setName("executionName");
		execution.setCmd("cmdLine --${object.description}");
		experiment.getExecutions().add(execution);

		Execution execution2 = AutoExpFactory.eINSTANCE.createExecution();
		execution2.setName("executionName2");
		execution2.setCmd("cmdLine2 --${object.description}");
		experiment.getExecutions().add(execution2);

		Treatment treatment = AutoExpFactory.eINSTANCE.createTreatment();
		treatment.setName("treatmentName");
		treatment.setDescription("treatmentDescription");
		treatment.setFactor(experiment.getFactors().get(0));
		treatment.setExecution(execution);
		experiment.getTreatments().add(treatment);

		Treatment treatment2 = AutoExpFactory.eINSTANCE.createTreatment();
		treatment2.setName("treatmentName2");
		treatment2.setDescription("treatmentDescription");
		treatment2.setFactor(experiment.getFactors().get(0));
		treatment2.setExecution(execution2);
		experiment.getTreatments().add(treatment2);

		ResearchHypothesis rh = AutoExpFactory.eINSTANCE.createResearchHypothesis();
		rh.setName("rh1");
		ResearchHypothesisFormula rhf = AutoExpFactory.eINSTANCE.createResearchHypothesisFormula();
		rhf.setDepVariable(experiment.getDependentVariables().get(0));
		OperatorType operator = AutoExpFactory.eINSTANCE.createOperatorType();
		operator.setTypeName("=");
		rhf.setOperator(operator);
		rhf.setTreatment1(treatment);
		rhf.setTreatment2(treatment2);
		rh.setFormula(rhf);
		experiment.getResearchHypotheses().add(rh);

		ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
		List<Block> blocks = sortBlocks(applicationDescriptor);
		assertEquals(4, applicationDescriptor.getBlocks().size());
		applicationDescriptor.getBlocks().forEach((block) -> {
			assertEquals(2, block.getApplications().size());

		});

		assertEquals("treatmentName2_objectName_0", blocks.get(0).getApplications().get(0).getName());
		assertEquals("treatmentName2_objectName_1", blocks.get(0).getApplications().get(1).getName());
		blocks.get(0).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine2 --objectDescription", app.getCommandLine());
		});

		assertEquals("treatmentName2_objectName2_0", blocks.get(1).getApplications().get(0).getName());
		assertEquals("treatmentName2_objectName2_1", blocks.get(1).getApplications().get(1).getName());
		blocks.get(1).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine2 --objectDescription2", app.getCommandLine());
		});

		assertEquals("treatmentName_objectName_0", blocks.get(2).getApplications().get(0).getName());
		assertEquals("treatmentName_objectName_1", blocks.get(2).getApplications().get(1).getName());
		blocks.get(2).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine --objectDescription", app.getCommandLine());
		});

		assertEquals("treatmentName_objectName2_0", blocks.get(3).getApplications().get(0).getName());
		assertEquals("treatmentName_objectName2_1", blocks.get(3).getApplications().get(1).getName());
		blocks.get(3).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine --objectDescription2", app.getCommandLine());
		});
	}

	@Test
	public void generateApplicationsTreatmentArguments() {
		setValidExperiment();
		experiment.getExperimentalDesign().setRuns(2);
		experiment.getExperimentalObjects().clear();
		ExperimentalObject object = AutoExpFactory.eINSTANCE.createExperimentalObject();
		object.setName("objectName");
		object.setDescription("objectDescription");

		experiment.getExperimentalObjects().add(object);

		ExperimentalObject object2 = AutoExpFactory.eINSTANCE.createExperimentalObject();
		object2.setName("objectName2");
		object2.setDescription("objectDescription2");

		experiment.getExperimentalObjects().add(object2);
		experiment.getTreatments().clear();
		experiment.getResearchHypotheses().clear();
		experiment.getExecutions().clear();
		Execution execution = AutoExpFactory.eINSTANCE.createExecution();
		execution.setName("executionName");
		execution.setCmd("cmdLine --${treatment.parameter.arg} --${object.name}");
		experiment.getExecutions().add(execution);

		Execution execution2 = AutoExpFactory.eINSTANCE.createExecution();
		execution2.setName("executionName2");
		execution2.setCmd("cmdLine2 --${treatment.parameter.arg} --${object.name}");
		experiment.getExecutions().add(execution2);

		Treatment treatment = AutoExpFactory.eINSTANCE.createTreatment();
		treatment.setName("treatmentName");
		treatment.setDescription("treatmentDescription");
		treatment.setFactor(experiment.getFactors().get(0));
		treatment.setExecution(execution);
		Parameter param1 = AutoExpFactory.eINSTANCE.createParameter();
		param1.setName("arg");
		param1.setValue("treatment1");
		treatment.getParameters().add(param1);

		experiment.getTreatments().add(treatment);

		Treatment treatment2 = AutoExpFactory.eINSTANCE.createTreatment();
		treatment2.setName("treatmentName2");
		treatment2.setDescription("treatmentDescription");
		treatment2.setFactor(experiment.getFactors().get(0));
		treatment2.setExecution(execution2);
		Parameter param2 = AutoExpFactory.eINSTANCE.createParameter();
		param2.setName("arg");
		param2.setValue("treatment2");
		treatment2.getParameters().add(param2);

		experiment.getTreatments().add(treatment2);

		ResearchHypothesis rh = AutoExpFactory.eINSTANCE.createResearchHypothesis();
		rh.setName("rh1");
		ResearchHypothesisFormula rhf = AutoExpFactory.eINSTANCE.createResearchHypothesisFormula();
		rhf.setDepVariable(experiment.getDependentVariables().get(0));
		OperatorType operator = AutoExpFactory.eINSTANCE.createOperatorType();
		operator.setTypeName("=");
		rhf.setOperator(operator);
		rhf.setTreatment1(treatment);
		rhf.setTreatment2(treatment2);
		rh.setFormula(rhf);
		experiment.getResearchHypotheses().add(rh);

		ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
		List<Block> blocks = sortBlocks(applicationDescriptor);
		assertEquals(4, applicationDescriptor.getBlocks().size());
		applicationDescriptor.getBlocks().forEach((block) -> {
			assertEquals(2, block.getApplications().size());

		});

		assertEquals("treatmentName2_objectName_0", blocks.get(0).getApplications().get(0).getName());
		assertEquals("treatmentName2_objectName_1", blocks.get(0).getApplications().get(1).getName());
		blocks.get(0).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine2 --treatment2 --objectName", app.getCommandLine());
		});

		assertEquals("treatmentName2_objectName2_0", blocks.get(1).getApplications().get(0).getName());
		assertEquals("treatmentName2_objectName2_1", blocks.get(1).getApplications().get(1).getName());
		blocks.get(1).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine2 --treatment2 --objectName2", app.getCommandLine());
		});

		assertEquals("treatmentName_objectName_0", blocks.get(2).getApplications().get(0).getName());
		assertEquals("treatmentName_objectName_1", blocks.get(2).getApplications().get(1).getName());
		blocks.get(2).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine --treatment1 --objectName", app.getCommandLine());
		});

		assertEquals("treatmentName_objectName2_0", blocks.get(3).getApplications().get(0).getName());
		assertEquals("treatmentName_objectName2_1", blocks.get(3).getApplications().get(1).getName());
		blocks.get(3).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine --treatment1 --objectName2", app.getCommandLine());
		});
	}

	@Test
	public void generateApplicationsTreatmentName() {
		setValidExperiment();
		experiment.getExperimentalDesign().setRuns(2);
		experiment.getExperimentalObjects().clear();
		ExperimentalObject object = AutoExpFactory.eINSTANCE.createExperimentalObject();
		object.setName("objectName");
		object.setDescription("objectDescription");

		experiment.getExperimentalObjects().add(object);

		ExperimentalObject object2 = AutoExpFactory.eINSTANCE.createExperimentalObject();
		object2.setName("objectName2");
		object2.setDescription("objectDescription2");

		experiment.getExperimentalObjects().add(object2);
		experiment.getTreatments().clear();
		experiment.getResearchHypotheses().clear();
		experiment.getExecutions().clear();
		Execution execution = AutoExpFactory.eINSTANCE.createExecution();
		execution.setName("executionName");
		execution.setCmd("cmdLine --${treatment.name} --${object.name}");
		experiment.getExecutions().add(execution);

		Execution execution2 = AutoExpFactory.eINSTANCE.createExecution();
		execution2.setName("executionName2");
		execution2.setCmd("cmdLine2 --${treatment.name} --${object.name}");
		experiment.getExecutions().add(execution2);

		Treatment treatment = AutoExpFactory.eINSTANCE.createTreatment();
		treatment.setName("treatmentName");
		treatment.setDescription("treatmentDescription");
		treatment.setFactor(experiment.getFactors().get(0));
		treatment.setExecution(execution);

		experiment.getTreatments().add(treatment);

		Treatment treatment2 = AutoExpFactory.eINSTANCE.createTreatment();
		treatment2.setName("treatmentName2");
		treatment2.setDescription("treatmentDescription");
		treatment2.setFactor(experiment.getFactors().get(0));
		treatment2.setExecution(execution2);

		experiment.getTreatments().add(treatment2);

		ResearchHypothesis rh = AutoExpFactory.eINSTANCE.createResearchHypothesis();
		rh.setName("rh1");
		ResearchHypothesisFormula rhf = AutoExpFactory.eINSTANCE.createResearchHypothesisFormula();
		rhf.setDepVariable(experiment.getDependentVariables().get(0));
		OperatorType operator = AutoExpFactory.eINSTANCE.createOperatorType();
		operator.setTypeName("=");
		rhf.setOperator(operator);
		rhf.setTreatment1(treatment);
		rhf.setTreatment2(treatment2);
		rh.setFormula(rhf);
		experiment.getResearchHypotheses().add(rh);

		ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
		List<Block> blocks = sortBlocks(applicationDescriptor);
		assertEquals(4, applicationDescriptor.getBlocks().size());
		applicationDescriptor.getBlocks().forEach((block) -> {
			assertEquals(2, block.getApplications().size());

		});

		assertEquals("treatmentName2_objectName_0", blocks.get(0).getApplications().get(0).getName());
		assertEquals("treatmentName2_objectName_1", blocks.get(0).getApplications().get(1).getName());
		blocks.get(0).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine2 --treatmentName2 --objectName", app.getCommandLine());
		});

		assertEquals("treatmentName2_objectName2_0", blocks.get(1).getApplications().get(0).getName());
		assertEquals("treatmentName2_objectName2_1", blocks.get(1).getApplications().get(1).getName());
		blocks.get(1).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine2 --treatmentName2 --objectName2", app.getCommandLine());
		});

		assertEquals("treatmentName_objectName_0", blocks.get(2).getApplications().get(0).getName());
		assertEquals("treatmentName_objectName_1", blocks.get(2).getApplications().get(1).getName());
		blocks.get(2).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine --treatmentName --objectName", app.getCommandLine());
		});

		assertEquals("treatmentName_objectName2_0", blocks.get(3).getApplications().get(0).getName());
		assertEquals("treatmentName_objectName2_1", blocks.get(3).getApplications().get(1).getName());
		blocks.get(3).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine --treatmentName --objectName2", app.getCommandLine());
		});
	}

	@Test
	public void generateApplicationsTreatmentDescription() {
		setValidExperiment();
		experiment.getExperimentalDesign().setRuns(2);
		experiment.getExperimentalObjects().clear();
		ExperimentalObject object = AutoExpFactory.eINSTANCE.createExperimentalObject();
		object.setName("objectName");
		object.setDescription("objectDescription");

		experiment.getExperimentalObjects().add(object);

		ExperimentalObject object2 = AutoExpFactory.eINSTANCE.createExperimentalObject();
		object2.setName("objectName2");
		object2.setDescription("objectDescription2");

		experiment.getExperimentalObjects().add(object2);
		experiment.getTreatments().clear();
		experiment.getResearchHypotheses().clear();
		experiment.getExecutions().clear();
		Execution execution = AutoExpFactory.eINSTANCE.createExecution();
		execution.setName("executionName");
		execution.setCmd("cmdLine --${treatment.description} --${object.name}");
		experiment.getExecutions().add(execution);

		Execution execution2 = AutoExpFactory.eINSTANCE.createExecution();
		execution2.setName("executionName2");
		execution2.setCmd("cmdLine2 --${treatment.description} --${object.name}");
		experiment.getExecutions().add(execution2);

		Treatment treatment = AutoExpFactory.eINSTANCE.createTreatment();
		treatment.setName("treatmentName");
		treatment.setDescription("treatmentDescription");
		treatment.setFactor(experiment.getFactors().get(0));
		treatment.setExecution(execution);

		experiment.getTreatments().add(treatment);

		Treatment treatment2 = AutoExpFactory.eINSTANCE.createTreatment();
		treatment2.setName("treatmentName2");
		treatment2.setDescription("treatmentDescription2");
		treatment2.setFactor(experiment.getFactors().get(0));
		treatment2.setExecution(execution2);

		experiment.getTreatments().add(treatment2);

		ResearchHypothesis rh = AutoExpFactory.eINSTANCE.createResearchHypothesis();
		rh.setName("rh1");
		ResearchHypothesisFormula rhf = AutoExpFactory.eINSTANCE.createResearchHypothesisFormula();
		rhf.setDepVariable(experiment.getDependentVariables().get(0));
		OperatorType operator = AutoExpFactory.eINSTANCE.createOperatorType();
		operator.setTypeName("=");
		rhf.setOperator(operator);
		rhf.setTreatment1(treatment);
		rhf.setTreatment2(treatment2);
		rh.setFormula(rhf);
		experiment.getResearchHypotheses().add(rh);

		ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
		List<Block> blocks = sortBlocks(applicationDescriptor);
		assertEquals(4, applicationDescriptor.getBlocks().size());
		applicationDescriptor.getBlocks().forEach((block) -> {
			assertEquals(2, block.getApplications().size());

		});

		assertEquals("treatmentName2_objectName_0", blocks.get(0).getApplications().get(0).getName());
		assertEquals("treatmentName2_objectName_1", blocks.get(0).getApplications().get(1).getName());
		blocks.get(0).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine2 --treatmentDescription2 --objectName", app.getCommandLine());
		});

		assertEquals("treatmentName2_objectName2_0", blocks.get(1).getApplications().get(0).getName());
		assertEquals("treatmentName2_objectName2_1", blocks.get(1).getApplications().get(1).getName());
		blocks.get(1).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine2 --treatmentDescription2 --objectName2", app.getCommandLine());
		});

		assertEquals("treatmentName_objectName_0", blocks.get(2).getApplications().get(0).getName());
		assertEquals("treatmentName_objectName_1", blocks.get(2).getApplications().get(1).getName());
		blocks.get(2).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine --treatmentDescription --objectName", app.getCommandLine());
		});

		assertEquals("treatmentName_objectName2_0", blocks.get(3).getApplications().get(0).getName());
		assertEquals("treatmentName_objectName2_1", blocks.get(3).getApplications().get(1).getName());
		blocks.get(3).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine --treatmentDescription --objectName2", app.getCommandLine());
		});
	}

	@Ignore
	@Test
	public void generateApplicationsObjectFile() {
		setValidExperiment();
		experiment.getExperimentalDesign().setRuns(2);
		experiment.getExperimentalObjects().clear();
		ExperimentalObject object = AutoExpFactory.eINSTANCE.createExperimentalObject();
		object.setName("objectName");
		object.setDescription("objectDescription");
		File file1 = AutoExpFactory.eINSTANCE.createFile();
		file1.setName("fileObject");
		file1.setSource("/source/filetreatment1");
		file1.setDest("/dest/filetreatment1");
		file1.setChecksum("checksumFileTreatment1");
		object.getFiles().add(file1);

		experiment.getExperimentalObjects().add(object);

		ExperimentalObject object2 = AutoExpFactory.eINSTANCE.createExperimentalObject();
		object2.setName("objectName2");
		object2.setDescription("objectDescription2");
		File file2 = AutoExpFactory.eINSTANCE.createFile();
		file2.setName("fileObject");
		file2.setSource("/source/filetreatment2");
		file2.setDest("/dest/filetreatment2");
		file2.setChecksum("checksumfiletreatment2");
		object2.getFiles().add(file2);
		experiment.getExperimentalObjects().add(object2);
		experiment.getTreatments().clear();
		experiment.getResearchHypotheses().clear();
		experiment.getExecutions().clear();
		Execution execution = AutoExpFactory.eINSTANCE.createExecution();
		execution.setName("executionName");
		execution.setCmd("cmdLine --${treatment.name} --${object.name} ${object.file.fileObject}");
		experiment.getExecutions().add(execution);

		Execution execution2 = AutoExpFactory.eINSTANCE.createExecution();
		execution2.setName("executionName2");
		execution2.setCmd("cmdLine2 --${treatment.name} --${object.name} ${object.file.fileObject}");
		experiment.getExecutions().add(execution2);

		Treatment treatment = AutoExpFactory.eINSTANCE.createTreatment();
		treatment.setName("treatmentName");
		treatment.setDescription("treatmentDescription");
		treatment.setFactor(experiment.getFactors().get(0));
		treatment.setExecution(execution);

		experiment.getTreatments().add(treatment);

		Treatment treatment2 = AutoExpFactory.eINSTANCE.createTreatment();
		treatment2.setName("treatmentName2");
		treatment2.setDescription("treatmentDescription");
		treatment2.setFactor(experiment.getFactors().get(0));
		treatment2.setExecution(execution2);

		experiment.getTreatments().add(treatment2);

		ResearchHypothesis rh = AutoExpFactory.eINSTANCE.createResearchHypothesis();
		rh.setName("rh1");
		ResearchHypothesisFormula rhf = AutoExpFactory.eINSTANCE.createResearchHypothesisFormula();
		rhf.setDepVariable(experiment.getDependentVariables().get(0));
		OperatorType operator = AutoExpFactory.eINSTANCE.createOperatorType();
		operator.setTypeName("=");
		rhf.setOperator(operator);
		rhf.setTreatment1(treatment);
		rhf.setTreatment2(treatment2);
		rh.setFormula(rhf);
		experiment.getResearchHypotheses().add(rh);

		ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
		List<Block> blocks = sortBlocks(applicationDescriptor);
		assertEquals(4, applicationDescriptor.getBlocks().size());
		applicationDescriptor.getBlocks().forEach((block) -> {
			assertEquals(2, block.getApplications().size());

		});

		assertEquals("treatmentName2_objectName_0", blocks.get(0).getApplications().get(0).getName());
		assertEquals("treatmentName2_objectName_1", blocks.get(0).getApplications().get(1).getName());
		blocks.get(0).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine2 --treatmentName2 --objectName ${fileObject}", app.getCommandLine());
			assertEquals("fileObject", app.getFiles().get(0).getName());
			assertEquals("/source/filetreatment", app.getFiles().get(0).getSource());
			assertEquals("/dest/filetreatment", app.getFiles().get(0).getDest());
			assertEquals("/dest/checksumfiletreatment", app.getFiles().get(0).getChecksum());
			assertEquals(YesNoEnum.NO, app.getFiles().get(0).getGenerated());
		});

		assertEquals("treatmentName2_objectName2_0", blocks.get(1).getApplications().get(0).getName());
		assertEquals("treatmentName2_objectName2_1", blocks.get(1).getApplications().get(1).getName());
		blocks.get(1).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine2 --treatmentName2 --objectName2 ${fileObject}", app.getCommandLine());
			assertEquals("fileObject", app.getFiles().get(0).getName());
			assertEquals("/source/filetreatment2", app.getFiles().get(0).getSource());
			assertEquals("/dest/filetreatment2", app.getFiles().get(0).getDest());
			assertEquals("/dest/checksumfiletreatment2", app.getFiles().get(0).getChecksum());
			assertEquals(YesNoEnum.NO, app.getFiles().get(0).getGenerated());
		});

		assertEquals("treatmentName_objectName_0", blocks.get(2).getApplications().get(0).getName());
		assertEquals("treatmentName_objectName_1", blocks.get(2).getApplications().get(1).getName());
		blocks.get(2).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine --treatmentName --objectName ${fileObject}", app.getCommandLine());
			assertEquals("fileObject", app.getFiles().get(0).getName());
			assertEquals("/source/filetreatment", app.getFiles().get(0).getSource());
			assertEquals("/dest/filetreatment", app.getFiles().get(0).getDest());
			assertEquals("/dest/checksumfiletreatment", app.getFiles().get(0).getChecksum());
			assertEquals(YesNoEnum.NO, app.getFiles().get(0).getGenerated());
		});

		assertEquals("treatmentName_objectName2_0", blocks.get(3).getApplications().get(0).getName());
		assertEquals("treatmentName_objectName2_1", blocks.get(3).getApplications().get(1).getName());
		blocks.get(3).getApplications().forEach((app) -> {
			assertEquals("instrCmd cmdLine --treatmentName --objectName2 ${fileObject}", app.getCommandLine());
			assertEquals("fileObject", app.getFiles().get(0).getName());
			assertEquals("/source/filetreatment2", app.getFiles().get(0).getSource());
			assertEquals("/dest/filetreatment2", app.getFiles().get(0).getDest());
			assertEquals("/dest/checksumfiletreatment2", app.getFiles().get(0).getChecksum());
			assertEquals(YesNoEnum.NO, app.getFiles().get(0).getGenerated());
		});
	}

	@Test
	public void generateParameterNameNull() {
		setValidExperiment();
		try {
			Parameter param1 = AutoExpFactory.eINSTANCE.createParameter();
			param1.setName(null);
			param1.setValue("--OBJECT1");

			experiment.getExperimentalObjects().get(0).getParameters().add(param1);
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'name' of 'parameter' must not be null", e.getMessage());

		}

	}

	@Test
	public void generateParameterValueNull() {
		setValidExperiment();
		try {
			Parameter param1 = AutoExpFactory.eINSTANCE.createParameter();
			param1.setName("name");
			param1.setValue(null);

			experiment.getExperimentalObjects().get(0).getParameters().add(param1);
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'value' of 'parameter' must not be null", e.getMessage());

		}

	}

	@Test
	public void generateApplicationDescriptor() {
		setValidExperiment();
		ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
		assertNotNull(applicationDescriptor);
		assertNotNull(applicationDescriptor.getApplications());
		assertNotNull(applicationDescriptor.getBlocks());
		assertEquals(0, applicationDescriptor.getClouds().size());
		assertNull(applicationDescriptor.getDescription());
		assertEquals(0, applicationDescriptor.getPreconditions().size());
		assertNull(applicationDescriptor.getRequirements());
		assertNotNull(applicationDescriptor.getUser());
	}

	@Test
	public void generateName() {
		setValidExperiment();
		experiment.setName("name");
		ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
		assertEquals("name", applicationDescriptor.getName());
	}

	@Test
	public void generateNameNull() {
		setValidExperiment();
		try {
			experiment.setName(null);
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'name' must not be null", e.getMessage());

		}

	}

	@Test
	public void generateDescription() {
		setValidExperiment();
		experiment.setDescription("description");
		ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
		assertEquals("description", applicationDescriptor.getDescription());
	}

	@Test
	public void generateDescriptionNull() {
		setValidExperiment();
		experiment.setDescription(null);
		ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
		assertNull(applicationDescriptor.getDescription());
	}

	@Test
	public void generateUsername() {
		setValidExperiment();
		experiment.getInfrastructure().getUser().setUsername("username");
		ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
		assertEquals("username", applicationDescriptor.getUser().getUsername());
	}

	@Test
	public void generateKeys() {
		setValidExperiment();
		UserKey key1 = AutoExpFactory.eINSTANCE.createUserKey();
		key1.setName("key1");
		key1.setPrivateKey("privateKey1");
		key1.setPublicKey("publicKey1");
		key1.setFingerprint("fingerprint1");

		experiment.getInfrastructure().getUser().getKeys().add(key1);

		UserKey key2 = AutoExpFactory.eINSTANCE.createUserKey();
		key2.setName("key2");
		key2.setPrivateKey("privateKey2");
		key2.setPublicKey("publicKey2");
		key2.setFingerprint("fingerprint2");
		experiment.getInfrastructure().getUser().getKeys().add(key2);

		ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
		assertEquals("key1", applicationDescriptor.getUser().getKeys().get(0).getName());
		assertEquals("privateKey1", applicationDescriptor.getUser().getKeys().get(0).getPrivateKeyMaterial());
		assertEquals("publicKey1", applicationDescriptor.getUser().getKeys().get(0).getPublicKeyMaterial());
		assertEquals("fingerprint1", applicationDescriptor.getUser().getKeys().get(0).getFingerPrint());
		// TODO Check!!
		// assertEquals("key2",
		// applicationDescriptor.getUser().getKeys().get(1).getName());
		// assertEquals("privateKey2",
		// applicationDescriptor.getUser().getKeys().get(1).getPrivateKeyMaterial());
		// assertEquals("publicKey2",
		// applicationDescriptor.getUser().getKeys().get(1).getPublicKeyMaterial());
		// assertEquals("fingerprint2",
		// applicationDescriptor.getUser().getKeys().get(1).getFingerPrint());
	}

	@Test
	public void generateRequirements() {
		setValidExperiment();
		Requirements req = AutoExpFactory.eINSTANCE.createRequirements();

		req.setCost(new BigDecimal(0.2));
		req.setCpu(4);
		req.setInstancesPerCloud(2);
		req.setMemory(5);
		PlatformType platformType = AutoExpFactory.eINSTANCE.createPlatformType();
		platformType.setTypeName("LINUX");
		req.setPlatform(platformType);
		experiment.getInfrastructure().setRequirements(req);

		ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
		assertEquals(new BigDecimal(0.2), applicationDescriptor.getRequirements().getMaximalCostPerHour());
		assertEquals(4, (int) applicationDescriptor.getRequirements().getNumberOfCpuCores());
		assertEquals(2, (int) applicationDescriptor.getRequirements().getNumberOfInstancesPerCloud());
		assertEquals(5, (int) applicationDescriptor.getRequirements().getMemorySize());
		assertEquals("LINUX", applicationDescriptor.getRequirements().getPlatform().name());

	}

	@Test
	public void generatePreconditions() {
		setValidExperiment();
		Preconditions pre = AutoExpFactory.eINSTANCE.createPreconditions();

		pre.getPackages().add("java");
		pre.getPackages().add("reana-spl");

		experiment.getInfrastructure().setPreconditions(pre);

		ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
		assertEquals("java", applicationDescriptor.getPreconditions().get(0).getPackages().get(0));
		assertEquals("reana-spl", applicationDescriptor.getPreconditions().get(0).getPackages().get(1));

	}

	@Test
	public void generateClouds() {
		setValidExperiment();
		Cloud cloud1 = AutoExpFactory.eINSTANCE.createCloud();
		cloud1.setName("cloud1");
		CloudProvider cloudprovider1 = AutoExpFactory.eINSTANCE.createCloudProvider();
		cloudprovider1.setName("cloudProvider1");
		cloudprovider1.setDescription("cloudProvider1 desc");
		cloudprovider1.setMaxResourcePerType(1);
		cloudprovider1.setServiceClass("cloud provider1 service class");
		cloud1.setProvider(cloudprovider1);

		AccessKey accessKey = AutoExpFactory.eINSTANCE.createAccessKey();
		accessKey.setAccessKey("accessKey");
		accessKey.setSecretKey("secretKey");
		cloud1.setAccessKey(accessKey);

		Region region = AutoExpFactory.eINSTANCE.createRegion();
		region.setCity("city");
		region.setEndpoint("endpoint");
		region.setGeographicRegion(2);
		region.setName("regionName");
		StatusType status = AutoExpFactory.eINSTANCE.createStatusType();
		status.setTypeName("UP");
		region.setStatus(status);

		Zone zone = AutoExpFactory.eINSTANCE.createZone();
		zone.setName("zoneName");
		zone.setStatus("UP");
		region.getZones().add(zone);
		cloud1.getRegions().add(region);

		InstanceType instanceType = AutoExpFactory.eINSTANCE.createInstanceType();
		instanceType.setName("instanceTypeName");
		instanceType.setNumberOfInstances(3);
		cloud1.getInstanceTypes().add(instanceType);
		experiment.getInfrastructure().getClouds().add(cloud1);

		ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
		assertEquals("cloud1", applicationDescriptor.getClouds().get(0).getName());
		assertEquals("cloudProvider1", applicationDescriptor.getClouds().get(0).getProvider().getName());
		assertEquals("cloudProvider1 desc", applicationDescriptor.getClouds().get(0).getProvider().getDescription());
		assertEquals(1, (int) applicationDescriptor.getClouds().get(0).getProvider().getLimitOfResourcesPerType());
		assertEquals("cloud provider1 service class",
				applicationDescriptor.getClouds().get(0).getProvider().getServiceClass());
		assertEquals("accessKey", applicationDescriptor.getClouds().get(0).getAccessKey().getAccessKey());
		assertEquals("secretKey", applicationDescriptor.getClouds().get(0).getAccessKey().getSecretKey());
		assertEquals("city", applicationDescriptor.getClouds().get(0).getRegions().get(0).getCity());
		assertEquals("endpoint", applicationDescriptor.getClouds().get(0).getRegions().get(0).getEndpoint());
		assertEquals("regionName", applicationDescriptor.getClouds().get(0).getRegions().get(0).getName());
		assertEquals(2,
				(int) applicationDescriptor.getClouds().get(0).getRegions().get(0).getGeographicRegion().getId());
		assertEquals("UP", applicationDescriptor.getClouds().get(0).getRegions().get(0).getStatus().name());
		assertEquals("zoneName",
				applicationDescriptor.getClouds().get(0).getRegions().get(0).getZones().get(0).getName());
		assertEquals("UP", applicationDescriptor.getClouds().get(0).getRegions().get(0).getZones().get(0).getStatus());
		assertEquals("instanceTypeName", applicationDescriptor.getClouds().get(0).getInstanceTypes().get(0).getName());
		assertEquals(3,
				(int) applicationDescriptor.getClouds().get(0).getInstanceTypes().get(0).getNumberOfInstances());

	}

	@Test
	public void generateOnFinish() {
		setValidExperiment();
		OnFinishType onFinish = AutoExpFactory.eINSTANCE.createOnFinishType();
		onFinish.setTypeName("TERMINATE");

		experiment.getInfrastructure().setOnFinish(onFinish);

		ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
		assertEquals("TERMINATE", applicationDescriptor.getOnFinished().name());

	}

	@Test
	public void generateDesignNull() {
		setValidExperiment();
		try {
			experiment.setExperimentalDesign(null);
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'experimentalDesign' must not be null", e.getMessage());

		}
	}

	@Test
	public void generateHypothesesNull() {
		setValidExperiment();
		try {
			experiment.getResearchHypotheses().clear();
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'researchHypotheses' must not be null or empty", e.getMessage());

		}
	}

	@Test
	public void generateHypothesesNameNull() {
		setValidExperiment();
		try {
			experiment.getResearchHypotheses().get(0).setName(null);
			;
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'name' of 'researchHypothesis' must not be null", e.getMessage());

		}
	}

	@Test
	public void generateHypothesesDvNull() {
		setValidExperiment();
		try {
			experiment.getResearchHypotheses().get(0).getFormula().setDepVariable(null);
			;
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'depVariable' of 'researchHypothesis' must not be null", e.getMessage());

		}
	}

	@Test
	public void generateHypothesesOperatorNull() {
		setValidExperiment();
		try {
			experiment.getResearchHypotheses().get(0).getFormula().setOperator(null);
			;
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'operator' of 'researchHypothesis' must not be null", e.getMessage());

		}
	}

	@Test
	public void generateHypothesesTreatment1Null() {
		setValidExperiment();
		try {
			experiment.getResearchHypotheses().get(0).getFormula().setTreatment1(null);
			;
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'treatment1' of 'researchHypothesis' must not be null", e.getMessage());

		}
	}

	@Test
	public void generateHypothesesTreatment2Null() {
		setValidExperiment();
		try {
			experiment.getResearchHypotheses().get(0).getFormula().setTreatment2(null);
			;
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'treatment2' of 'researchHypothesis' must not be null", e.getMessage());

		}
	}

	@Test
	public void generateHypothesesFormulaNull() {
		setValidExperiment();
		try {
			experiment.getResearchHypotheses().get(0).setFormula(null);
			;
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'formula' of 'researchHypothesis' must not be null", e.getMessage());

		}
	}

	@Test
	public void generateInvalidRuns() {
		setValidExperiment();
		try {
			experiment.getExperimentalDesign().setRuns(0);
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'runs' must be greater or equals 1. Value: 0", e.getMessage());

		}
	}

	@Test
	public void generateDependentVariablesNull() {
		setValidExperiment();
		try {
			experiment.getDependentVariables().clear();
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'dependentVariables' must not be null or empty", e.getMessage());

		}
	}

	@Test
	public void generateDependentVariableNameNull() {
		setValidExperiment();
		try {
			experiment.getDependentVariables().get(0).setName(null);
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'name' of 'dependentVariable' must not be null", e.getMessage());

		}
	}

	@Test
	public void generateDependentVariableDesciptionNull() {
		setValidExperiment();
		try {
			experiment.getDependentVariables().get(0).setDescription(null);
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'description' of 'dependentVariable' must not be null", e.getMessage());

		}
	}

	@Test
	public void generateInstrumentNameNull() {
		setValidExperiment();
		try {
			Instrument instr = AutoExpFactory.eINSTANCE.createInstrument();

			experiment.getInstruments().add(instr);
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'name' of 'instrument' must not be null", e.getMessage());

		}
	}

	@Test
	public void generateInstrumentCommandNull() {
		setValidExperiment();
		try {
			Instrument instr = AutoExpFactory.eINSTANCE.createInstrument();
			instr.setName("name");
			experiment.getInstruments().add(instr);

			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'command' of 'instrument' must not be null", e.getMessage());

		}
	}

	@Test
	public void generateInstrumentValueExpressionNull() {
		setValidExperiment();
		try {
			Instrument instr = AutoExpFactory.eINSTANCE.createInstrument();
			instr.setName("name");
			instr.setCommand("command");
			experiment.getInstruments().add(instr);

			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'valueExpression' of 'instrument' must not be null", e.getMessage());

		}
	}

	@Test
	public void generateFactorsNull() {
		setValidExperiment();
		try {
			experiment.getFactors().clear();
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'factors' must not be null or empty", e.getMessage());

		}
	}

	@Test
	public void generateFactorsNameNull() {
		setValidExperiment();
		try {
			experiment.getFactors().get(0).setName(null);
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'name' of 'factor' must not be null", e.getMessage());

		}
	}

	@Test
	public void generateFactorsDescriptionNull() {
		setValidExperiment();
		try {
			experiment.getFactors().get(0).setDescription(null);
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'description' of 'factor' must not be null", e.getMessage());

		}
	}

	@Test
	public void generateTreatmentsNull() {
		setValidExperiment();
		try {
			experiment.getTreatments().clear();
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'treatments' must not be null or empty", e.getMessage());

		}
	}

	@Test
	public void generateTreatmentsNameNull() {
		setValidExperiment();
		try {
			experiment.getTreatments().get(0).setName(null);
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'name' of 'treatment' must not be null", e.getMessage());

		}
	}

	@Test
	public void generateTreatmentsDescriptionNull() {
		setValidExperiment();
		try {
			experiment.getTreatments().get(0).setDescription(null);
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'description' of 'treatment' must not be null", e.getMessage());

		}
	}

	@Test
	public void generateTreatmentsFactorNull() {
		setValidExperiment();
		try {
			experiment.getTreatments().get(0).setFactor(null);
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'factor' of 'treatment' must not be null", e.getMessage());

		}
	}

	@Test
	public void generateTreatmentsExecutionNull() {
		setValidExperiment();
		try {
			experiment.getTreatments().get(0).setExecution(null);
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'execution' of 'treatment' must not be null", e.getMessage());

		}
	}

	@Test
	public void generateExperimentalObjectsNull() {
		setValidExperiment();
		try {
			experiment.getExperimentalObjects().clear();
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'experimentalObjects' must not be null or empty", e.getMessage());

		}
	}

	@Test
	public void generateExperimentalObjectNameNull() {
		setValidExperiment();
		try {
			experiment.getExperimentalObjects().get(0).setName(null);
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'name' of 'experimentalObject' must not be null", e.getMessage());

		}
	}

	@Test
	public void generateExperimentalObjectDescriptionNull() {
		setValidExperiment();
		try {
			experiment.getExperimentalObjects().get(0).setDescription(null);
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'description' of 'experimentalObject' must not be null", e.getMessage());

		}
	}

	@Test
	public void generateExecutionsNull() {
		setValidExperiment();
		try {
			experiment.getExecutions().clear();
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'executions' must not be null or empty", e.getMessage());

		}
	}

	@Test
	public void generateExecutionNameNull() {
		setValidExperiment();
		try {
			experiment.getExecutions().get(0).setName(null);
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'name' of 'execution' must not be null", e.getMessage());

		}
	}

	@Test
	public void generateInfrastructureNull() {
		setValidExperiment();
		try {
			experiment.setInfrastructure(null);
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'infrastructure' must not be null", e.getMessage());

		}
	}

	@Test
	public void generateInfrastructureUserNull() {
		setValidExperiment();
		try {
			experiment.getInfrastructure().setUser(null);
			;
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'user' of 'infrastructure' must not be null", e.getMessage());

		}
	}

	@Test
	public void generateInfrastructureUsernameNull() {
		setValidExperiment();
		try {
			experiment.getInfrastructure().getUser().setUsername(null);
			;
			ApplicationDescriptor applicationDescriptor = dohkoGenerator.generateApplicationDescriptor(experiment);
			fail();
		} catch (InvalidPropertyException e) {
			assertEquals("Property 'username' of 'user' must not be null", e.getMessage());

		}
	}

}
