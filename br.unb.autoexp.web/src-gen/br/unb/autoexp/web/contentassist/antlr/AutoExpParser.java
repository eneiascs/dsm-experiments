/*Generated by Xtext*/
package br.unb.autoexp.web.contentassist.antlr;

import java.util.Collection;
import java.util.Map;
import java.util.HashMap;

import org.antlr.runtime.RecognitionException;
import org.eclipse.xtext.AbstractElement;
import org.eclipse.xtext.ui.editor.contentassist.antlr.AbstractContentAssistParser;
import org.eclipse.xtext.ui.editor.contentassist.antlr.FollowElement;
import org.eclipse.xtext.ui.editor.contentassist.antlr.internal.AbstractInternalContentAssistParser;

import com.google.inject.Inject;

import br.unb.autoexp.services.AutoExpGrammarAccess;

public class AutoExpParser extends AbstractContentAssistParser {
	
	@Inject
	private AutoExpGrammarAccess grammarAccess;
	
	private Map<AbstractElement, String> nameMappings;
	
	@Override
	protected br.unb.autoexp.web.contentassist.antlr.internal.InternalAutoExpParser createParser() {
		br.unb.autoexp.web.contentassist.antlr.internal.InternalAutoExpParser result = new br.unb.autoexp.web.contentassist.antlr.internal.InternalAutoExpParser(null);
		result.setGrammarAccess(grammarAccess);
		return result;
	}
	
	@Override
	protected String getRuleName(AbstractElement element) {
		if (nameMappings == null) {
			nameMappings = new HashMap<AbstractElement, String>() {
				private static final long serialVersionUID = 1L;
				{
					put(grammarAccess.getPlatformTypeAccess().getTypeNameAlternatives_0(), "rule__PlatformType__TypeNameAlternatives_0");
					put(grammarAccess.getStatusTypeAccess().getTypeNameAlternatives_0(), "rule__StatusType__TypeNameAlternatives_0");
					put(grammarAccess.getOnFinishTypeAccess().getTypeNameAlternatives_0(), "rule__OnFinishType__TypeNameAlternatives_0");
					put(grammarAccess.getAbstractAccess().getAlternatives(), "rule__Abstract__Alternatives");
					put(grammarAccess.getGoalAccess().getAlternatives(), "rule__Goal__Alternatives");
					put(grammarAccess.getOperatorTypeAccess().getTypeNameAlternatives_0(), "rule__OperatorType__TypeNameAlternatives_0");
					put(grammarAccess.getDependentVariableAccess().getAlternatives(), "rule__DependentVariable__Alternatives");
					put(grammarAccess.getDesignTypeAccess().getAlternatives(), "rule__DesignType__Alternatives");
					put(grammarAccess.getScaleTypeAccess().getAlternatives(), "rule__ScaleType__Alternatives");
					put(grammarAccess.getThreatTypeAccess().getAlternatives(), "rule__ThreatType__Alternatives");
					put(grammarAccess.getExperimentAccess().getGroup(), "rule__Experiment__Group__0");
					put(grammarAccess.getExperimentAccess().getGroup_3(), "rule__Experiment__Group_3__0");
					put(grammarAccess.getExperimentAccess().getGroup_3_3(), "rule__Experiment__Group_3_3__0");
					put(grammarAccess.getExperimentAccess().getGroup_4(), "rule__Experiment__Group_4__0");
					put(grammarAccess.getExperimentAccess().getGroup_5(), "rule__Experiment__Group_5__0");
					put(grammarAccess.getExperimentAccess().getGroup_6(), "rule__Experiment__Group_6__0");
					put(grammarAccess.getExperimentAccess().getGroup_6_3(), "rule__Experiment__Group_6_3__0");
					put(grammarAccess.getExperimentAccess().getGroup_7(), "rule__Experiment__Group_7__0");
					put(grammarAccess.getExperimentAccess().getGroup_7_3(), "rule__Experiment__Group_7_3__0");
					put(grammarAccess.getExperimentAccess().getGroup_8(), "rule__Experiment__Group_8__0");
					put(grammarAccess.getExperimentAccess().getGroup_8_3(), "rule__Experiment__Group_8_3__0");
					put(grammarAccess.getExperimentAccess().getGroup_9(), "rule__Experiment__Group_9__0");
					put(grammarAccess.getExperimentAccess().getGroup_9_3(), "rule__Experiment__Group_9_3__0");
					put(grammarAccess.getExperimentAccess().getGroup_10(), "rule__Experiment__Group_10__0");
					put(grammarAccess.getExperimentAccess().getGroup_10_3(), "rule__Experiment__Group_10_3__0");
					put(grammarAccess.getExperimentAccess().getGroup_13(), "rule__Experiment__Group_13__0");
					put(grammarAccess.getExperimentAccess().getGroup_13_3(), "rule__Experiment__Group_13_3__0");
					put(grammarAccess.getExperimentAccess().getGroup_14(), "rule__Experiment__Group_14__0");
					put(grammarAccess.getExperimentAccess().getGroup_15(), "rule__Experiment__Group_15__0");
					put(grammarAccess.getInfrastructureAccess().getGroup(), "rule__Infrastructure__Group__0");
					put(grammarAccess.getInfrastructureAccess().getGroup_3(), "rule__Infrastructure__Group_3__0");
					put(grammarAccess.getInfrastructureAccess().getGroup_4(), "rule__Infrastructure__Group_4__0");
					put(grammarAccess.getInfrastructureAccess().getGroup_5(), "rule__Infrastructure__Group_5__0");
					put(grammarAccess.getInfrastructureAccess().getGroup_5_3(), "rule__Infrastructure__Group_5_3__0");
					put(grammarAccess.getInfrastructureAccess().getGroup_6(), "rule__Infrastructure__Group_6__0");
					put(grammarAccess.getPreconditionsAccess().getGroup(), "rule__Preconditions__Group__0");
					put(grammarAccess.getPreconditionsAccess().getGroup_2(), "rule__Preconditions__Group_2__0");
					put(grammarAccess.getPreconditionsAccess().getGroup_2_1(), "rule__Preconditions__Group_2_1__0");
					put(grammarAccess.getUserAccess().getGroup(), "rule__User__Group__0");
					put(grammarAccess.getUserAccess().getGroup_4(), "rule__User__Group_4__0");
					put(grammarAccess.getUserAccess().getGroup_4_3(), "rule__User__Group_4_3__0");
					put(grammarAccess.getUserKeyAccess().getGroup(), "rule__UserKey__Group__0");
					put(grammarAccess.getUserKeyAccess().getGroup_1(), "rule__UserKey__Group_1__0");
					put(grammarAccess.getUserKeyAccess().getGroup_1_1(), "rule__UserKey__Group_1_1__0");
					put(grammarAccess.getUserKeyAccess().getGroup_1_2(), "rule__UserKey__Group_1_2__0");
					put(grammarAccess.getUserKeyAccess().getGroup_1_3(), "rule__UserKey__Group_1_3__0");
					put(grammarAccess.getRequirementsAccess().getGroup(), "rule__Requirements__Group__0");
					put(grammarAccess.getBigDecimalTypeAccess().getGroup(), "rule__BigDecimalType__Group__0");
					put(grammarAccess.getBigDecimalTypeAccess().getGroup_1(), "rule__BigDecimalType__Group_1__0");
					put(grammarAccess.getCloudAccess().getGroup(), "rule__Cloud__Group__0");
					put(grammarAccess.getCloudAccess().getGroup_4(), "rule__Cloud__Group_4__0");
					put(grammarAccess.getCloudAccess().getGroup_4_3(), "rule__Cloud__Group_4_3__0");
					put(grammarAccess.getCloudAccess().getGroup_5(), "rule__Cloud__Group_5__0");
					put(grammarAccess.getCloudAccess().getGroup_5_3(), "rule__Cloud__Group_5_3__0");
					put(grammarAccess.getCloudProviderAccess().getGroup(), "rule__CloudProvider__Group__0");
					put(grammarAccess.getCloudProviderAccess().getGroup_2(), "rule__CloudProvider__Group_2__0");
					put(grammarAccess.getCloudProviderAccess().getGroup_2_1(), "rule__CloudProvider__Group_2_1__0");
					put(grammarAccess.getCloudProviderAccess().getGroup_2_2(), "rule__CloudProvider__Group_2_2__0");
					put(grammarAccess.getCloudProviderAccess().getGroup_2_3(), "rule__CloudProvider__Group_2_3__0");
					put(grammarAccess.getInstanceTypeAccess().getGroup(), "rule__InstanceType__Group__0");
					put(grammarAccess.getInstanceTypeAccess().getGroup_2(), "rule__InstanceType__Group_2__0");
					put(grammarAccess.getRegionAccess().getGroup(), "rule__Region__Group__0");
					put(grammarAccess.getRegionAccess().getGroup_1(), "rule__Region__Group_1__0");
					put(grammarAccess.getRegionAccess().getGroup_1_1(), "rule__Region__Group_1_1__0");
					put(grammarAccess.getRegionAccess().getGroup_1_2(), "rule__Region__Group_1_2__0");
					put(grammarAccess.getRegionAccess().getGroup_1_3(), "rule__Region__Group_1_3__0");
					put(grammarAccess.getRegionAccess().getGroup_1_4(), "rule__Region__Group_1_4__0");
					put(grammarAccess.getRegionAccess().getGroup_1_5(), "rule__Region__Group_1_5__0");
					put(grammarAccess.getRegionAccess().getGroup_1_5_3(), "rule__Region__Group_1_5_3__0");
					put(grammarAccess.getZoneAccess().getGroup(), "rule__Zone__Group__0");
					put(grammarAccess.getAccessKeyAccess().getGroup(), "rule__AccessKey__Group__0");
					put(grammarAccess.getExperimentalDesignAccess().getGroup(), "rule__ExperimentalDesign__Group__0");
					put(grammarAccess.getExperimentalDesignAccess().getGroup_1(), "rule__ExperimentalDesign__Group_1__0");
					put(grammarAccess.getExperimentalDesignAccess().getGroup_2(), "rule__ExperimentalDesign__Group_2__0");
					put(grammarAccess.getExperimentalDesignAccess().getGroup_6(), "rule__ExperimentalDesign__Group_6__0");
					put(grammarAccess.getExperimentalDesignAccess().getGroup_11(), "rule__ExperimentalDesign__Group_11__0");
					put(grammarAccess.getExperimentalDesignAccess().getGroup_16(), "rule__ExperimentalDesign__Group_16__0");
					put(grammarAccess.getExperimentalDesignAccess().getGroup_18(), "rule__ExperimentalDesign__Group_18__0");
					put(grammarAccess.getExperimentalDesignAccess().getGroup_18_3(), "rule__ExperimentalDesign__Group_18_3__0");
					put(grammarAccess.getExperimentalDesignAccess().getGroup_22(), "rule__ExperimentalDesign__Group_22__0");
					put(grammarAccess.getExperimentalDesignAccess().getGroup_24(), "rule__ExperimentalDesign__Group_24__0");
					put(grammarAccess.getExperimentalDesignAccess().getGroup_24_3(), "rule__ExperimentalDesign__Group_24_3__0");
					put(grammarAccess.getExecutionAccess().getGroup(), "rule__Execution__Group__0");
					put(grammarAccess.getExecutionAccess().getGroup_2(), "rule__Execution__Group_2__0");
					put(grammarAccess.getExecutionAccess().getGroup_3(), "rule__Execution__Group_3__0");
					put(grammarAccess.getExecutionAccess().getGroup_4(), "rule__Execution__Group_4__0");
					put(grammarAccess.getExecutionAccess().getGroup_5(), "rule__Execution__Group_5__0");
					put(grammarAccess.getExecutionAccess().getGroup_5_3(), "rule__Execution__Group_5_3__0");
					put(grammarAccess.getAnalysisAccess().getGroup(), "rule__Analysis__Group__0");
					put(grammarAccess.getAnalysisAccess().getGroup_3(), "rule__Analysis__Group_3__0");
					put(grammarAccess.getExperimentalObjectAccess().getGroup(), "rule__ExperimentalObject__Group__0");
					put(grammarAccess.getExperimentalObjectAccess().getGroup_4(), "rule__ExperimentalObject__Group_4__0");
					put(grammarAccess.getExperimentalObjectAccess().getGroup_5(), "rule__ExperimentalObject__Group_5__0");
					put(grammarAccess.getExperimentalObjectAccess().getGroup_5_3(), "rule__ExperimentalObject__Group_5_3__0");
					put(grammarAccess.getExperimentalObjectAccess().getGroup_6(), "rule__ExperimentalObject__Group_6__0");
					put(grammarAccess.getExperimentalObjectAccess().getGroup_6_3(), "rule__ExperimentalObject__Group_6_3__0");
					put(grammarAccess.getAuthorAccess().getGroup(), "rule__Author__Group__0");
					put(grammarAccess.getAuthorAccess().getGroup_3(), "rule__Author__Group_3__0");
					put(grammarAccess.getAuthorAccess().getGroup_4(), "rule__Author__Group_4__0");
					put(grammarAccess.getAuthorAccess().getGroup_5(), "rule__Author__Group_5__0");
					put(grammarAccess.getKeywordAccess().getGroup(), "rule__Keyword__Group__0");
					put(grammarAccess.getThreatAccess().getGroup(), "rule__Threat__Group__0");
					put(grammarAccess.getThreatAccess().getGroup_3(), "rule__Threat__Group_3__0");
					put(grammarAccess.getThreatAccess().getGroup_4(), "rule__Threat__Group_4__0");
					put(grammarAccess.getThreatAccess().getGroup_5(), "rule__Threat__Group_5__0");
					put(grammarAccess.getGoal_ImplAccess().getGroup(), "rule__Goal_Impl__Group__0");
					put(grammarAccess.getResearchQuestionAccess().getGroup(), "rule__ResearchQuestion__Group__0");
					put(grammarAccess.getResearchQuestionAccess().getGroup_3(), "rule__ResearchQuestion__Group_3__0");
					put(grammarAccess.getResearchQuestionAccess().getGroup_4(), "rule__ResearchQuestion__Group_4__0");
					put(grammarAccess.getResearchHypothesisAccess().getGroup(), "rule__ResearchHypothesis__Group__0");
					put(grammarAccess.getResearchHypothesisAccess().getGroup_4(), "rule__ResearchHypothesis__Group_4__0");
					put(grammarAccess.getResearchHypothesisAccess().getGroup_5(), "rule__ResearchHypothesis__Group_5__0");
					put(grammarAccess.getResearchHypothesisFormulaAccess().getGroup(), "rule__ResearchHypothesisFormula__Group__0");
					put(grammarAccess.getDependentVariable_ImplAccess().getGroup(), "rule__DependentVariable_Impl__Group__0");
					put(grammarAccess.getBuiltinDependentVariableAccess().getGroup(), "rule__BuiltinDependentVariable__Group__0");
					put(grammarAccess.getCustomDependentVariableAccess().getGroup(), "rule__CustomDependentVariable__Group__0");
					put(grammarAccess.getCustomDependentVariableAccess().getGroup_5(), "rule__CustomDependentVariable__Group_5__0");
					put(grammarAccess.getCustomDependentVariableAccess().getGroup_6(), "rule__CustomDependentVariable__Group_6__0");
					put(grammarAccess.getCustomDependentVariableAccess().getGroup_6_3(), "rule__CustomDependentVariable__Group_6_3__0");
					put(grammarAccess.getFactorAccess().getGroup(), "rule__Factor__Group__0");
					put(grammarAccess.getFactorAccess().getGroup_5(), "rule__Factor__Group_5__0");
					put(grammarAccess.getContextVariableAccess().getGroup(), "rule__ContextVariable__Group__0");
					put(grammarAccess.getContextVariableAccess().getGroup_3(), "rule__ContextVariable__Group_3__0");
					put(grammarAccess.getContextVariableAccess().getGroup_4(), "rule__ContextVariable__Group_4__0");
					put(grammarAccess.getContextVariableAccess().getGroup_5(), "rule__ContextVariable__Group_5__0");
					put(grammarAccess.getContextVariableAccess().getGroup_5_3(), "rule__ContextVariable__Group_5_3__0");
					put(grammarAccess.getRangeAccess().getGroup(), "rule__Range__Group__0");
					put(grammarAccess.getTreatmentAccess().getGroup(), "rule__Treatment__Group__0");
					put(grammarAccess.getTreatmentAccess().getGroup_5(), "rule__Treatment__Group_5__0");
					put(grammarAccess.getTreatmentAccess().getGroup_5_3(), "rule__Treatment__Group_5_3__0");
					put(grammarAccess.getTreatmentAccess().getGroup_6(), "rule__Treatment__Group_6__0");
					put(grammarAccess.getTreatmentAccess().getGroup_6_3(), "rule__Treatment__Group_6_3__0");
					put(grammarAccess.getFileAccess().getGroup(), "rule__File__Group__0");
					put(grammarAccess.getParameterAccess().getGroup(), "rule__Parameter__Group__0");
					put(grammarAccess.getExecutionParameterAccess().getGroup(), "rule__ExecutionParameter__Group__0");
					put(grammarAccess.getArtifactAccess().getGroup(), "rule__Artifact__Group__0");
					put(grammarAccess.getObjectGroupAccess().getGroup(), "rule__ObjectGroup__Group__0");
					put(grammarAccess.getSimpleAbstractAccess().getGroup(), "rule__SimpleAbstract__Group__0");
					put(grammarAccess.getStructuredAbstractAccess().getGroup(), "rule__StructuredAbstract__Group__0");
					put(grammarAccess.getStructuredAbstractAccess().getGroup_2(), "rule__StructuredAbstract__Group_2__0");
					put(grammarAccess.getStructuredAbstractAccess().getGroup_3(), "rule__StructuredAbstract__Group_3__0");
					put(grammarAccess.getStructuredAbstractAccess().getGroup_4(), "rule__StructuredAbstract__Group_4__0");
					put(grammarAccess.getStructuredAbstractAccess().getGroup_5(), "rule__StructuredAbstract__Group_5__0");
					put(grammarAccess.getStructuredAbstractAccess().getGroup_6(), "rule__StructuredAbstract__Group_6__0");
					put(grammarAccess.getSimpleGoalAccess().getGroup(), "rule__SimpleGoal__Group__0");
					put(grammarAccess.getStructuredGoalAccess().getGroup(), "rule__StructuredGoal__Group__0");
					put(grammarAccess.getStructuredGoalAccess().getGroup_3(), "rule__StructuredGoal__Group_3__0");
					put(grammarAccess.getStructuredGoalAccess().getGroup_4(), "rule__StructuredGoal__Group_4__0");
					put(grammarAccess.getStructuredGoalAccess().getGroup_5(), "rule__StructuredGoal__Group_5__0");
					put(grammarAccess.getStructuredGoalAccess().getGroup_6(), "rule__StructuredGoal__Group_6__0");
					put(grammarAccess.getStructuredGoalAccess().getGroup_7(), "rule__StructuredGoal__Group_7__0");
					put(grammarAccess.getModelAccess().getExperimentsAssignment(), "rule__Model__ExperimentsAssignment");
					put(grammarAccess.getExperimentAccess().getNameAssignment_1(), "rule__Experiment__NameAssignment_1");
					put(grammarAccess.getExperimentAccess().getAuthorsAssignment_3_2(), "rule__Experiment__AuthorsAssignment_3_2");
					put(grammarAccess.getExperimentAccess().getAuthorsAssignment_3_3_1(), "rule__Experiment__AuthorsAssignment_3_3_1");
					put(grammarAccess.getExperimentAccess().getDescriptionAssignment_4_1(), "rule__Experiment__DescriptionAssignment_4_1");
					put(grammarAccess.getExperimentAccess().getAbstractAssignment_5_1(), "rule__Experiment__AbstractAssignment_5_1");
					put(grammarAccess.getExperimentAccess().getKeywordsAssignment_6_2(), "rule__Experiment__KeywordsAssignment_6_2");
					put(grammarAccess.getExperimentAccess().getKeywordsAssignment_6_3_1(), "rule__Experiment__KeywordsAssignment_6_3_1");
					put(grammarAccess.getExperimentAccess().getGoalsAssignment_7_2(), "rule__Experiment__GoalsAssignment_7_2");
					put(grammarAccess.getExperimentAccess().getGoalsAssignment_7_3_1(), "rule__Experiment__GoalsAssignment_7_3_1");
					put(grammarAccess.getExperimentAccess().getResearchQuestionsAssignment_8_2(), "rule__Experiment__ResearchQuestionsAssignment_8_2");
					put(grammarAccess.getExperimentAccess().getResearchQuestionsAssignment_8_3_1(), "rule__Experiment__ResearchQuestionsAssignment_8_3_1");
					put(grammarAccess.getExperimentAccess().getResearchHypothesesAssignment_9_2(), "rule__Experiment__ResearchHypothesesAssignment_9_2");
					put(grammarAccess.getExperimentAccess().getResearchHypothesesAssignment_9_3_1(), "rule__Experiment__ResearchHypothesesAssignment_9_3_1");
					put(grammarAccess.getExperimentAccess().getThreatsAssignment_10_2(), "rule__Experiment__ThreatsAssignment_10_2");
					put(grammarAccess.getExperimentAccess().getThreatsAssignment_10_3_1(), "rule__Experiment__ThreatsAssignment_10_3_1");
					put(grammarAccess.getExperimentAccess().getExperimentalDesignAssignment_12(), "rule__Experiment__ExperimentalDesignAssignment_12");
					put(grammarAccess.getExperimentAccess().getExecutionsAssignment_13_2(), "rule__Experiment__ExecutionsAssignment_13_2");
					put(grammarAccess.getExperimentAccess().getExecutionsAssignment_13_3_1(), "rule__Experiment__ExecutionsAssignment_13_3_1");
					put(grammarAccess.getExperimentAccess().getAnalysisAssignment_14_1(), "rule__Experiment__AnalysisAssignment_14_1");
					put(grammarAccess.getExperimentAccess().getInfrastructureAssignment_15_1(), "rule__Experiment__InfrastructureAssignment_15_1");
					put(grammarAccess.getInfrastructureAccess().getUserAssignment_2(), "rule__Infrastructure__UserAssignment_2");
					put(grammarAccess.getInfrastructureAccess().getRequirementsAssignment_3_1(), "rule__Infrastructure__RequirementsAssignment_3_1");
					put(grammarAccess.getInfrastructureAccess().getPreconditionsAssignment_4_1(), "rule__Infrastructure__PreconditionsAssignment_4_1");
					put(grammarAccess.getInfrastructureAccess().getCloudsAssignment_5_2(), "rule__Infrastructure__CloudsAssignment_5_2");
					put(grammarAccess.getInfrastructureAccess().getCloudsAssignment_5_3_1(), "rule__Infrastructure__CloudsAssignment_5_3_1");
					put(grammarAccess.getInfrastructureAccess().getOnFinishAssignment_6_1(), "rule__Infrastructure__OnFinishAssignment_6_1");
					put(grammarAccess.getPreconditionsAccess().getPackagesAssignment_2_0(), "rule__Preconditions__PackagesAssignment_2_0");
					put(grammarAccess.getPreconditionsAccess().getPackagesAssignment_2_1_1(), "rule__Preconditions__PackagesAssignment_2_1_1");
					put(grammarAccess.getUserAccess().getUsernameAssignment_3(), "rule__User__UsernameAssignment_3");
					put(grammarAccess.getUserAccess().getKeysAssignment_4_2(), "rule__User__KeysAssignment_4_2");
					put(grammarAccess.getUserAccess().getKeysAssignment_4_3_1(), "rule__User__KeysAssignment_4_3_1");
					put(grammarAccess.getUserKeyAccess().getNameAssignment_0(), "rule__UserKey__NameAssignment_0");
					put(grammarAccess.getUserKeyAccess().getPrivateKeyAssignment_1_1_1(), "rule__UserKey__PrivateKeyAssignment_1_1_1");
					put(grammarAccess.getUserKeyAccess().getPublicKeyAssignment_1_2_1(), "rule__UserKey__PublicKeyAssignment_1_2_1");
					put(grammarAccess.getUserKeyAccess().getFingerprintAssignment_1_3_1(), "rule__UserKey__FingerprintAssignment_1_3_1");
					put(grammarAccess.getRequirementsAccess().getCpuAssignment_2(), "rule__Requirements__CpuAssignment_2");
					put(grammarAccess.getRequirementsAccess().getMemoryAssignment_4(), "rule__Requirements__MemoryAssignment_4");
					put(grammarAccess.getRequirementsAccess().getPlatformAssignment_6(), "rule__Requirements__PlatformAssignment_6");
					put(grammarAccess.getRequirementsAccess().getCostAssignment_8(), "rule__Requirements__CostAssignment_8");
					put(grammarAccess.getRequirementsAccess().getInstancesPerCloudAssignment_10(), "rule__Requirements__InstancesPerCloudAssignment_10");
					put(grammarAccess.getPlatformTypeAccess().getTypeNameAssignment(), "rule__PlatformType__TypeNameAssignment");
					put(grammarAccess.getCloudAccess().getNameAssignment_0(), "rule__Cloud__NameAssignment_0");
					put(grammarAccess.getCloudAccess().getProviderAssignment_2(), "rule__Cloud__ProviderAssignment_2");
					put(grammarAccess.getCloudAccess().getAccessKeyAssignment_3(), "rule__Cloud__AccessKeyAssignment_3");
					put(grammarAccess.getCloudAccess().getRegionsAssignment_4_2(), "rule__Cloud__RegionsAssignment_4_2");
					put(grammarAccess.getCloudAccess().getRegionsAssignment_4_3_1(), "rule__Cloud__RegionsAssignment_4_3_1");
					put(grammarAccess.getCloudAccess().getInstanceTypesAssignment_5_2(), "rule__Cloud__InstanceTypesAssignment_5_2");
					put(grammarAccess.getCloudAccess().getInstanceTypesAssignment_5_3_1(), "rule__Cloud__InstanceTypesAssignment_5_3_1");
					put(grammarAccess.getCloudProviderAccess().getNameAssignment_1(), "rule__CloudProvider__NameAssignment_1");
					put(grammarAccess.getCloudProviderAccess().getMaxResourcePerTypeAssignment_2_1_1(), "rule__CloudProvider__MaxResourcePerTypeAssignment_2_1_1");
					put(grammarAccess.getCloudProviderAccess().getDescriptionAssignment_2_2_1(), "rule__CloudProvider__DescriptionAssignment_2_2_1");
					put(grammarAccess.getCloudProviderAccess().getServiceClassAssignment_2_3_1(), "rule__CloudProvider__ServiceClassAssignment_2_3_1");
					put(grammarAccess.getInstanceTypeAccess().getNameAssignment_1(), "rule__InstanceType__NameAssignment_1");
					put(grammarAccess.getInstanceTypeAccess().getNumberOfInstancesAssignment_2_1(), "rule__InstanceType__NumberOfInstancesAssignment_2_1");
					put(grammarAccess.getRegionAccess().getNameAssignment_0(), "rule__Region__NameAssignment_0");
					put(grammarAccess.getRegionAccess().getEndpointAssignment_1_1_1(), "rule__Region__EndpointAssignment_1_1_1");
					put(grammarAccess.getRegionAccess().getStatusAssignment_1_2_1(), "rule__Region__StatusAssignment_1_2_1");
					put(grammarAccess.getRegionAccess().getCityAssignment_1_3_1(), "rule__Region__CityAssignment_1_3_1");
					put(grammarAccess.getRegionAccess().getGeographicRegionAssignment_1_4_1(), "rule__Region__GeographicRegionAssignment_1_4_1");
					put(grammarAccess.getRegionAccess().getZonesAssignment_1_5_2(), "rule__Region__ZonesAssignment_1_5_2");
					put(grammarAccess.getRegionAccess().getZonesAssignment_1_5_3_1(), "rule__Region__ZonesAssignment_1_5_3_1");
					put(grammarAccess.getStatusTypeAccess().getTypeNameAssignment(), "rule__StatusType__TypeNameAssignment");
					put(grammarAccess.getZoneAccess().getNameAssignment_0(), "rule__Zone__NameAssignment_0");
					put(grammarAccess.getZoneAccess().getStatusAssignment_1(), "rule__Zone__StatusAssignment_1");
					put(grammarAccess.getAccessKeyAccess().getAccessKeyAssignment_1(), "rule__AccessKey__AccessKeyAssignment_1");
					put(grammarAccess.getAccessKeyAccess().getSecretKeyAssignment_3(), "rule__AccessKey__SecretKeyAssignment_3");
					put(grammarAccess.getOnFinishTypeAccess().getTypeNameAssignment(), "rule__OnFinishType__TypeNameAssignment");
					put(grammarAccess.getExperimentalDesignAccess().getTypeAssignment_1_1(), "rule__ExperimentalDesign__TypeAssignment_1_1");
					put(grammarAccess.getExperimentalDesignAccess().getRunsAssignment_2_1(), "rule__ExperimentalDesign__RunsAssignment_2_1");
					put(grammarAccess.getExperimentalDesignAccess().getDependentVariablesAssignment_5(), "rule__ExperimentalDesign__DependentVariablesAssignment_5");
					put(grammarAccess.getExperimentalDesignAccess().getDependentVariablesAssignment_6_1(), "rule__ExperimentalDesign__DependentVariablesAssignment_6_1");
					put(grammarAccess.getExperimentalDesignAccess().getFactorsAssignment_10(), "rule__ExperimentalDesign__FactorsAssignment_10");
					put(grammarAccess.getExperimentalDesignAccess().getFactorsAssignment_11_1(), "rule__ExperimentalDesign__FactorsAssignment_11_1");
					put(grammarAccess.getExperimentalDesignAccess().getTreatmentsAssignment_15(), "rule__ExperimentalDesign__TreatmentsAssignment_15");
					put(grammarAccess.getExperimentalDesignAccess().getTreatmentsAssignment_16_1(), "rule__ExperimentalDesign__TreatmentsAssignment_16_1");
					put(grammarAccess.getExperimentalDesignAccess().getGroupsAssignment_18_2(), "rule__ExperimentalDesign__GroupsAssignment_18_2");
					put(grammarAccess.getExperimentalDesignAccess().getGroupsAssignment_18_3_1(), "rule__ExperimentalDesign__GroupsAssignment_18_3_1");
					put(grammarAccess.getExperimentalDesignAccess().getExperimentalObjectsAssignment_21(), "rule__ExperimentalDesign__ExperimentalObjectsAssignment_21");
					put(grammarAccess.getExperimentalDesignAccess().getExperimentalObjectsAssignment_22_1(), "rule__ExperimentalDesign__ExperimentalObjectsAssignment_22_1");
					put(grammarAccess.getExperimentalDesignAccess().getContextVariablesAssignment_24_2(), "rule__ExperimentalDesign__ContextVariablesAssignment_24_2");
					put(grammarAccess.getExperimentalDesignAccess().getContextVariablesAssignment_24_3_1(), "rule__ExperimentalDesign__ContextVariablesAssignment_24_3_1");
					put(grammarAccess.getExecutionAccess().getNameAssignment_0(), "rule__Execution__NameAssignment_0");
					put(grammarAccess.getExecutionAccess().getCmdAssignment_2_1(), "rule__Execution__CmdAssignment_2_1");
					put(grammarAccess.getExecutionAccess().getPreconditionsAssignment_3_1(), "rule__Execution__PreconditionsAssignment_3_1");
					put(grammarAccess.getExecutionAccess().getResultAssignment_4_1(), "rule__Execution__ResultAssignment_4_1");
					put(grammarAccess.getExecutionAccess().getFilesAssignment_5_2(), "rule__Execution__FilesAssignment_5_2");
					put(grammarAccess.getExecutionAccess().getFilesAssignment_5_3_1(), "rule__Execution__FilesAssignment_5_3_1");
					put(grammarAccess.getAnalysisAccess().getNameAssignment_1(), "rule__Analysis__NameAssignment_1");
					put(grammarAccess.getAnalysisAccess().getSignificanceLevelAssignment_3_1(), "rule__Analysis__SignificanceLevelAssignment_3_1");
					put(grammarAccess.getExperimentalObjectAccess().getNameAssignment_1(), "rule__ExperimentalObject__NameAssignment_1");
					put(grammarAccess.getExperimentalObjectAccess().getDescriptionAssignment_3(), "rule__ExperimentalObject__DescriptionAssignment_3");
					put(grammarAccess.getExperimentalObjectAccess().getObjectGroupAssignment_4_1(), "rule__ExperimentalObject__ObjectGroupAssignment_4_1");
					put(grammarAccess.getExperimentalObjectAccess().getParametersAssignment_5_2(), "rule__ExperimentalObject__ParametersAssignment_5_2");
					put(grammarAccess.getExperimentalObjectAccess().getParametersAssignment_5_3_1(), "rule__ExperimentalObject__ParametersAssignment_5_3_1");
					put(grammarAccess.getExperimentalObjectAccess().getFilesAssignment_6_2(), "rule__ExperimentalObject__FilesAssignment_6_2");
					put(grammarAccess.getExperimentalObjectAccess().getFilesAssignment_6_3_1(), "rule__ExperimentalObject__FilesAssignment_6_3_1");
					put(grammarAccess.getAuthorAccess().getNameAssignment_1(), "rule__Author__NameAssignment_1");
					put(grammarAccess.getAuthorAccess().getFullNameAssignment_3_1(), "rule__Author__FullNameAssignment_3_1");
					put(grammarAccess.getAuthorAccess().getInstitutionAssignment_4_1(), "rule__Author__InstitutionAssignment_4_1");
					put(grammarAccess.getAuthorAccess().getEmailAssignment_5_1(), "rule__Author__EmailAssignment_5_1");
					put(grammarAccess.getKeywordAccess().getDescriptionAssignment_1(), "rule__Keyword__DescriptionAssignment_1");
					put(grammarAccess.getThreatAccess().getNameAssignment_1(), "rule__Threat__NameAssignment_1");
					put(grammarAccess.getThreatAccess().getDescriptionAssignment_3_1(), "rule__Threat__DescriptionAssignment_3_1");
					put(grammarAccess.getThreatAccess().getTypeAssignment_4_1(), "rule__Threat__TypeAssignment_4_1");
					put(grammarAccess.getThreatAccess().getCAAssignment_5_1(), "rule__Threat__CAAssignment_5_1");
					put(grammarAccess.getGoal_ImplAccess().getNameAssignment_1(), "rule__Goal_Impl__NameAssignment_1");
					put(grammarAccess.getResearchQuestionAccess().getNameAssignment_1(), "rule__ResearchQuestion__NameAssignment_1");
					put(grammarAccess.getResearchQuestionAccess().getDescriptionAssignment_3_1(), "rule__ResearchQuestion__DescriptionAssignment_3_1");
					put(grammarAccess.getResearchQuestionAccess().getGoalAssignment_4_1(), "rule__ResearchQuestion__GoalAssignment_4_1");
					put(grammarAccess.getResearchHypothesisAccess().getNameAssignment_1(), "rule__ResearchHypothesis__NameAssignment_1");
					put(grammarAccess.getResearchHypothesisAccess().getFormulaAssignment_3(), "rule__ResearchHypothesis__FormulaAssignment_3");
					put(grammarAccess.getResearchHypothesisAccess().getDescriptionAssignment_4_1(), "rule__ResearchHypothesis__DescriptionAssignment_4_1");
					put(grammarAccess.getResearchHypothesisAccess().getGoalAssignment_5_1(), "rule__ResearchHypothesis__GoalAssignment_5_1");
					put(grammarAccess.getResearchHypothesisFormulaAccess().getDepVariableAssignment_1(), "rule__ResearchHypothesisFormula__DepVariableAssignment_1");
					put(grammarAccess.getResearchHypothesisFormulaAccess().getTreatment1Assignment_2(), "rule__ResearchHypothesisFormula__Treatment1Assignment_2");
					put(grammarAccess.getResearchHypothesisFormulaAccess().getOperatorAssignment_3(), "rule__ResearchHypothesisFormula__OperatorAssignment_3");
					put(grammarAccess.getResearchHypothesisFormulaAccess().getTreatment2Assignment_4(), "rule__ResearchHypothesisFormula__Treatment2Assignment_4");
					put(grammarAccess.getOperatorTypeAccess().getTypeNameAssignment(), "rule__OperatorType__TypeNameAssignment");
					put(grammarAccess.getDependentVariable_ImplAccess().getNameAssignment_1(), "rule__DependentVariable_Impl__NameAssignment_1");
					put(grammarAccess.getBuiltinDependentVariableAccess().getNameAssignment_1(), "rule__BuiltinDependentVariable__NameAssignment_1");
					put(grammarAccess.getCustomDependentVariableAccess().getNameAssignment_1(), "rule__CustomDependentVariable__NameAssignment_1");
					put(grammarAccess.getCustomDependentVariableAccess().getDescriptionAssignment_4(), "rule__CustomDependentVariable__DescriptionAssignment_4");
					put(grammarAccess.getCustomDependentVariableAccess().getScaleTypeAssignment_5_1(), "rule__CustomDependentVariable__ScaleTypeAssignment_5_1");
					put(grammarAccess.getCustomDependentVariableAccess().getRangeAssignment_6_2(), "rule__CustomDependentVariable__RangeAssignment_6_2");
					put(grammarAccess.getCustomDependentVariableAccess().getRangeAssignment_6_3_1(), "rule__CustomDependentVariable__RangeAssignment_6_3_1");
					put(grammarAccess.getFactorAccess().getNameAssignment_1(), "rule__Factor__NameAssignment_1");
					put(grammarAccess.getFactorAccess().getDescriptionAssignment_4(), "rule__Factor__DescriptionAssignment_4");
					put(grammarAccess.getFactorAccess().getScaleTypeAssignment_5_1(), "rule__Factor__ScaleTypeAssignment_5_1");
					put(grammarAccess.getContextVariableAccess().getNameAssignment_1(), "rule__ContextVariable__NameAssignment_1");
					put(grammarAccess.getContextVariableAccess().getDescriptionAssignment_3_1(), "rule__ContextVariable__DescriptionAssignment_3_1");
					put(grammarAccess.getContextVariableAccess().getScaleTypeAssignment_4_1(), "rule__ContextVariable__ScaleTypeAssignment_4_1");
					put(grammarAccess.getContextVariableAccess().getRangeAssignment_5_2(), "rule__ContextVariable__RangeAssignment_5_2");
					put(grammarAccess.getContextVariableAccess().getRangeAssignment_5_3_1(), "rule__ContextVariable__RangeAssignment_5_3_1");
					put(grammarAccess.getRangeAccess().getNameAssignment_1(), "rule__Range__NameAssignment_1");
					put(grammarAccess.getTreatmentAccess().getNameAssignment_0(), "rule__Treatment__NameAssignment_0");
					put(grammarAccess.getTreatmentAccess().getDescriptionAssignment_2(), "rule__Treatment__DescriptionAssignment_2");
					put(grammarAccess.getTreatmentAccess().getFactorAssignment_4(), "rule__Treatment__FactorAssignment_4");
					put(grammarAccess.getTreatmentAccess().getParametersAssignment_5_2(), "rule__Treatment__ParametersAssignment_5_2");
					put(grammarAccess.getTreatmentAccess().getParametersAssignment_5_3_1(), "rule__Treatment__ParametersAssignment_5_3_1");
					put(grammarAccess.getTreatmentAccess().getFilesAssignment_6_2(), "rule__Treatment__FilesAssignment_6_2");
					put(grammarAccess.getTreatmentAccess().getFilesAssignment_6_3_1(), "rule__Treatment__FilesAssignment_6_3_1");
					put(grammarAccess.getTreatmentAccess().getExecutionAssignment_8(), "rule__Treatment__ExecutionAssignment_8");
					put(grammarAccess.getFileAccess().getNameAssignment_3(), "rule__File__NameAssignment_3");
					put(grammarAccess.getFileAccess().getPathAssignment_5(), "rule__File__PathAssignment_5");
					put(grammarAccess.getParameterAccess().getNameAssignment_1(), "rule__Parameter__NameAssignment_1");
					put(grammarAccess.getParameterAccess().getValueAssignment_2(), "rule__Parameter__ValueAssignment_2");
					put(grammarAccess.getExecutionParameterAccess().getValueAssignment_1(), "rule__ExecutionParameter__ValueAssignment_1");
					put(grammarAccess.getArtifactAccess().getNameAssignment_1(), "rule__Artifact__NameAssignment_1");
					put(grammarAccess.getArtifactAccess().getValueAssignment_2(), "rule__Artifact__ValueAssignment_2");
					put(grammarAccess.getObjectGroupAccess().getNameAssignment_1(), "rule__ObjectGroup__NameAssignment_1");
					put(grammarAccess.getSimpleAbstractAccess().getDescriptionAssignment_1(), "rule__SimpleAbstract__DescriptionAssignment_1");
					put(grammarAccess.getStructuredAbstractAccess().getContextAssignment_2_1(), "rule__StructuredAbstract__ContextAssignment_2_1");
					put(grammarAccess.getStructuredAbstractAccess().getObjectiveAssignment_3_1(), "rule__StructuredAbstract__ObjectiveAssignment_3_1");
					put(grammarAccess.getStructuredAbstractAccess().getMethodAssignment_4_1(), "rule__StructuredAbstract__MethodAssignment_4_1");
					put(grammarAccess.getStructuredAbstractAccess().getResultsAssignment_5_1(), "rule__StructuredAbstract__ResultsAssignment_5_1");
					put(grammarAccess.getStructuredAbstractAccess().getConclusionAssignment_6_1(), "rule__StructuredAbstract__ConclusionAssignment_6_1");
					put(grammarAccess.getSimpleGoalAccess().getNameAssignment_1(), "rule__SimpleGoal__NameAssignment_1");
					put(grammarAccess.getSimpleGoalAccess().getDescriptionAssignment_2(), "rule__SimpleGoal__DescriptionAssignment_2");
					put(grammarAccess.getStructuredGoalAccess().getNameAssignment_1(), "rule__StructuredGoal__NameAssignment_1");
					put(grammarAccess.getStructuredGoalAccess().getObjectAssignment_3_1(), "rule__StructuredGoal__ObjectAssignment_3_1");
					put(grammarAccess.getStructuredGoalAccess().getTechniqueAssignment_4_1(), "rule__StructuredGoal__TechniqueAssignment_4_1");
					put(grammarAccess.getStructuredGoalAccess().getQualityAssignment_5_1(), "rule__StructuredGoal__QualityAssignment_5_1");
					put(grammarAccess.getStructuredGoalAccess().getPtViewAssignment_6_1(), "rule__StructuredGoal__PtViewAssignment_6_1");
					put(grammarAccess.getStructuredGoalAccess().getContextOfAssignment_7_1(), "rule__StructuredGoal__ContextOfAssignment_7_1");
				}
			};
		}
		return nameMappings.get(element);
	}
	
	@Override
	protected Collection<FollowElement> getFollowElements(AbstractInternalContentAssistParser parser) {
		try {
			br.unb.autoexp.web.contentassist.antlr.internal.InternalAutoExpParser typedParser = (br.unb.autoexp.web.contentassist.antlr.internal.InternalAutoExpParser) parser;
			typedParser.entryRuleModel();
			return typedParser.getFollowElements();
		} catch(RecognitionException ex) {
			throw new RuntimeException(ex);
		}		
	}
	
	@Override
	protected String[] getInitialHiddenTokens() {
		return new String[] { "RULE_WS", "RULE_ML_COMMENT", "RULE_SL_COMMENT" };
	}
	
	public AutoExpGrammarAccess getGrammarAccess() {
		return this.grammarAccess;
	}
	
	public void setGrammarAccess(AutoExpGrammarAccess grammarAccess) {
		this.grammarAccess = grammarAccess;
	}
}