/**
 * @Generated
 */
grammar AutoExp;

options {
  language=JavaScript;
  output=AST;
  ASTLabelType=CommonTree;
}

@lexer::header {
}

@parser::header {
}





 
rule_Model:
	
	experiments_0+=rule_Experiment*

 EOF!;




rule_Experiment :
	'Experiment'
	name_0=ID
	'{'
	('Authors' '{' authors_1+=rule_Author (',' authors_2+=rule_Author)* '}')?
	('description' description_3=STRING)?
	('Abstract' abstract_4=rule_Abstract)?
	('Keywords' '{' keywords_5+=rule_Keyword (',' keywords_6+=rule_Keyword)* '}')?
	('Goals' '{' goals_7+=rule_Goal (',' goals_8+=rule_Goal)* '}')?
	('Research Questions' '{' researchquestions_9+=rule_ResearchQuestion (',' researchquestions_10+=rule_ResearchQuestion)* '}')?
	('Research Hypotheses' '{' researchhypotheses_11+=rule_ResearchHypothesis (',' researchhypotheses_12+=rule_ResearchHypothesis)* '}')?
	('Threat' '{' threats_13+=rule_Threat (',' threats_14+=rule_Threat)* '}')?
	'Experimental Design' experimentaldesign_15=rule_ExperimentalDesign
	('Executions' '{' executions_16+=rule_Execution (',' executions_17+=rule_Execution)* '}')?
	('Analysis' analysis_18=rule_Analysis)?
	('Infrastructure' infrastructure_19=rule_Infrastructure)?
	'}';



rule_Infrastructure:
	
	'{'
		(user_0=rule_User)?
		('requirements' requirements_1=rule_Requirements)?
		('preconditions' preconditions_2=rule_Preconditions)?
		('clouds' '{' clouds_3+=rule_Cloud	 (',' clouds_4+=rule_Cloud)* '}')?
		('on-finish' onfinish_5=rule_OnFinishType)?
	'}'
;



rule_Preconditions:
	
	'{'
	 (packages_0+=STRING	 (',' packages_1+=STRING)*)?
	'}'
;

	
rule_User:
	'user' '{'
	 'username' username_0=STRING
	 ('keys' '{' keys_1+=rule_UserKey	 (',' keys_2+=rule_UserKey)* '}')?
	
	 '}'
;


rule_UserKey:
	name_0=STRING
	('{'
	 ('privateKey' privatekey_1=STRING)?
	 ('publicKey' publickey_2=STRING)?
	 ('fingerprint' fingerprint_3=STRING)?
	'}')?
	;


rule_Requirements:
	'{'
	'cpu' cpu_0=INT
	'memory' memory_1=INT
	'platform' platform_2=rule_PlatformType
	'cost' cost_3=rule_BigDecimalType
	'number-of-instances-per-cloud' instancespercloud_4=INT
	'}'	
;


rule_PlatformType:
	typename_0=('LINUX' | 'WINDOWS' );


rule_BigDecimalType :
	INT ('.' INT)?;



rule_Cloud:
	name_0=STRING
	'{'
	 provider_1=rule_CloudProvider
	 accesskey_2=rule_AccessKey
	('regions' '{' regions_3+=rule_Region  (',' regions_4+=rule_Region)*'}')?
	('instanceTypes' '{' instancetypes_5+=rule_InstanceType  (',' instancetypes_6+=rule_InstanceType)*'}')?
	'}'
	;



rule_CloudProvider:
	'provider' name_0=STRING
	('{'
	('maxResourcePerType' maxresourcepertype_1=INT)?  
	('description' description_2=STRING)? 
	 ('serviceClass' serviceclass_3=STRING)? 
	 '}')?
	
;



rule_InstanceType:
	
	name_0=STRING
	('instances' numberofinstances_1=INT)?
;



rule_Region:
	name_0=STRING
	('{'
	('endpoint' endpoint_1=STRING)?
	('status' status_2=rule_StatusType)?
	('city' city_3=STRING)?
	('geographicRegion' geographicregion_4=INT)?
	('zones' '{' zones_5+=rule_Zone  (',' zones_6+=rule_Zone)*'}')?
	'}')?
;



//enum GeographicRegionEnum:
//	AFRICA='1' | ASIA='2' | CENTRAL_AMERICA='3' | EUROPEAN='4' | NORTH_AMERICA='5'|SOUTH_AMERICA='6'
//	
//;
 
rule_StatusType:
	typename_0=('UP' | 'DOWN' );


	
rule_Zone:
	name_0=STRING
	(status_1=STRING)?	
;



rule_AccessKey:
	'access-key' accesskey_0=STRING
	'secret-key'secretkey_1=STRING
;



			 		
		




rule_OnFinishType:
	typename_0=('NONE' | 'TERMINATE' );


rule_Abstract :
	rule_Abstract_Impl | rule_SimpleAbstract | rule_StructuredAbstract;



rule_Goal :
	rule_Goal_Impl | rule_SimpleGoal | rule_StructuredGoal;



rule_ExperimentalDesign :
	'{'
	('type' type_0=rule_DesignType)?
	('runs' runs_1=INT )?
	
	'Dependent Variables' '{' dependentvariables_2+=rule_CustomDependentVariable (',' dependentvariables_3+=rule_CustomDependentVariable)* '}'
	'Factors' '{' factors_4+=rule_Factor (',' factors_5+=rule_Factor)* '}'
	'Treatments' '{' treatments_6+=rule_Treatment (',' treatments_7+=rule_Treatment)* '}'
	('Groups' '{' groups_8+=rule_ObjectGroup (',' groups_9+=rule_ObjectGroup)* '}')?
	'Objects' '{' experimentalobjects_10+=rule_ExperimentalObject (',' experimentalobjects_11+=rule_ExperimentalObject)* '}'
	('Restrictions' '{' restrictions_12+=rule_Restriction (',' restrictions_13+=rule_Restriction)* '}')?
	
	('Context Variables' '{' contextvariables_14+=rule_ContextVariable (',' contextvariables_15+=rule_ContextVariable)* '}')?
	'}';



rule_Restriction :
	treatment_0=ID 'objects' '{' objects_1+=ID (',' objects_2+=ID)* '}' 
;



rule_Execution :
	name_0=ID
	'{'
	('command' cmd_1=STRING)?
	('preconditions' preconditions_2=rule_Preconditions)?
	('result' result_3=rule_File)?
	('files' '{' files_4+=rule_File (',' files_5+=rule_File)* '}')?
	'}';



rule_Analysis :
	
	name_0=ID
	'{'
	('significance' significancelevel_1=rule_BigDecimalType)?
	'}';



rule_ExperimentalObject :
	
	name_0=ID
	'description' description_1=STRING
	('group' objectgroup_2=ID)?
	('parameters' '{' parameters_3+=rule_Parameter (',' parameters_4+=rule_Parameter)* '}')?
	('files' '{' files_5+=rule_File (',' files_6+=rule_File)* '}')?
;


rule_Abstract_Impl :
	;



rule_Author :
	
	name_0=ID
	'{'
	('fullName' fullname_1=STRING)?
	('institution' institution_2=STRING)?
	('email' email_3=STRING)?
	
	'}';



rule_Keyword :
	
	description_0=STRING
	;



rule_Threat :
	
	name_0=ID
	'{'
	('description' description_1=STRING)?
	('type' type_2=rule_ThreatType)?
	('CA' ca_3=STRING)?
	'}';



rule_Goal_Impl :
	
	name_0=ID;



rule_ResearchQuestion :
	
	name_0=ID
	'{'
	('description' description_1=STRING)?
	('goal' goal_2=ID)?
	'}';



rule_ResearchHypothesis :
	
	name_0=ID
	'{'
	formula_1=rule_ResearchHypothesisFormula
	('description' description_2=STRING)?
	('goal' goal_3=ID)?
	'}';



rule_ResearchHypothesisFormula :
	
	depvariable_0=ID treatment1_1=ID operator_2=rule_OperatorType treatment2_3=ID;



rule_OperatorType:
	typename_0=('<' | '=' |'!=' | '>');



rule_DependentVariable :
	rule_DependentVariable_Impl|rule_BuiltinDependentVariable|rule_CustomDependentVariable
;



rule_DependentVariable_Impl :
	
	name_0=ID
;


rule_BuiltinDependentVariable :
	
	name_0=STRING
	;


//enum BuiltinDependentVariableType returns BuiltinDependentVariableType:
	
//	cpu='cpu' |time='CRD' | RCBD='RCBD' | LS='LS' |  OTHER='OTHER';

rule_CustomDependentVariable :
	
	name_0=ID
	'{'
	'description' description_1=STRING
	('scaleType' scaletype_2=rule_ScaleType)?
	('range' '{' range_3+=rule_Range (',' range_4+=rule_Range)* '}')?
	'}';



rule_Factor :
	
	name_0=ID
	'{'
	'description' description_1=STRING
	('scaleType' scaletype_2=rule_ScaleType)?
	'}';



rule_ContextVariable :
	
	name_0=ID
	'{'
	('description' description_1=STRING)?
	('scaleType' scaletype_2=rule_ScaleType)?
	('range' '{' range_3+=rule_Range (',' range_4+=rule_Range)* '}')?
	'}';



rule_Range :
	
	name_0=ID;



rule_Treatment :
	name_0=ID
	'description' description_1=STRING
	'factor' factor_2=ID
	('parameters' '{' parameters_3+=rule_Parameter (',' parameters_4+=rule_Parameter)* '}')?
	('files' '{' files_5+=rule_File (',' files_6+=rule_File)* '}')?
	'execution' execution_7=ID;



rule_File :
	
	'{'
	'name' name_0=STRING
	'path' path_1=STRING
	'}'
	
;


rule_Parameter :
	
	name_0=ID
	(value_1=STRING)?;



rule_ExecutionParameter :
	
	(value_0=STRING)?;



rule_Artifact :
	
	name_0=ID
	(value_1=STRING)?;



rule_ObjectGroup :
	
	name_0=ID;



rule_SimpleAbstract :
	
	(description_0=STRING)
	;



rule_StructuredAbstract :
	
	'{'
	('context' context_0=STRING)?
	('objective' objective_1=STRING)?
	('method' method_2=STRING)?
	('results' results_3=STRING)?
	('conclusion' conclusion_4=STRING)?
	'}';



rule_SimpleGoal :
	
	name_0=ID
	description_1=STRING
	;



rule_StructuredGoal :
	
	name_0=ID
	'{'
	('object' object_1=STRING)?
	('technique' technique_2=STRING)?
	('quality' quality_3=STRING)?
	('ptView' ptview_4=STRING)?
	('contextOf' contextof_5=STRING)?
	'}';

rule_DesignType:
	fACTORIAL='FACTORIAL' | cRD='CRD' | rCBD='RCBD' | lS='LS' | oTHER='OTHER';

rule_ScaleType:
	absolute='Absolute' | ratio='Ratio' | interval='Interval' | ordinal='Ordinal' | nominal='Nominal';

rule_ThreatType:
	iv='iv' | ev='ev' | c='c' | r='r' | cl='cl';

ID : ('a'..'z' | 'A'..'Z' | '_') ('a'..'z' | 'A'..'Z' | '_' | '0'..'9')* ;

STRING : ('"' ('\\' ('b'|'t'|'n'|'f'|'r'|'u'|'"'|'\''|'\\')|~(('\\'|'"')))* '"'|'\'' ('\\' ('b'|'t'|'n'|'f'|'r'|'u'|'"'|'\''|'\\')|~(('\\'|'\'')))* '\'');

COMMENT : ('/*' .* '*/' | '//' ~('\r' | '\n')*)   { $channel = HIDDEN; } ;

WS:  (' '|'\r'|'\t'|'\u000C'|'\n') {$channel=HIDDEN;} ;

INT: ('0'..'9')+;

