// $ANTLR 3.3 avr. 19, 2016 01:13:22 /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g 2018-03-21 20:06:09



/**
 * @Generated
 */
var AutoExpParser = function(input, state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    AutoExpParser.superclass.constructor.call(this, input, state);


         

    /* @todo only create adaptor if output=AST */
    this.adaptor = new org.antlr.runtime.tree.CommonTreeAdaptor();

};

org.antlr.lang.augmentObject(AutoExpParser, {
    EOF: -1,
    T__9: 9,
    T__10: 10,
    T__11: 11,
    T__12: 12,
    T__13: 13,
    T__14: 14,
    T__15: 15,
    T__16: 16,
    T__17: 17,
    T__18: 18,
    T__19: 19,
    T__20: 20,
    T__21: 21,
    T__22: 22,
    T__23: 23,
    T__24: 24,
    T__25: 25,
    T__26: 26,
    T__27: 27,
    T__28: 28,
    T__29: 29,
    T__30: 30,
    T__31: 31,
    T__32: 32,
    T__33: 33,
    T__34: 34,
    T__35: 35,
    T__36: 36,
    T__37: 37,
    T__38: 38,
    T__39: 39,
    T__40: 40,
    T__41: 41,
    T__42: 42,
    T__43: 43,
    T__44: 44,
    T__45: 45,
    T__46: 46,
    T__47: 47,
    T__48: 48,
    T__49: 49,
    T__50: 50,
    T__51: 51,
    T__52: 52,
    T__53: 53,
    T__54: 54,
    T__55: 55,
    T__56: 56,
    T__57: 57,
    T__58: 58,
    T__59: 59,
    T__60: 60,
    T__61: 61,
    T__62: 62,
    T__63: 63,
    T__64: 64,
    T__65: 65,
    T__66: 66,
    T__67: 67,
    T__68: 68,
    T__69: 69,
    T__70: 70,
    T__71: 71,
    T__72: 72,
    T__73: 73,
    T__74: 74,
    T__75: 75,
    T__76: 76,
    T__77: 77,
    T__78: 78,
    T__79: 79,
    T__80: 80,
    T__81: 81,
    T__82: 82,
    T__83: 83,
    T__84: 84,
    T__85: 85,
    T__86: 86,
    T__87: 87,
    T__88: 88,
    T__89: 89,
    T__90: 90,
    T__91: 91,
    T__92: 92,
    T__93: 93,
    T__94: 94,
    T__95: 95,
    T__96: 96,
    T__97: 97,
    T__98: 98,
    T__99: 99,
    T__100: 100,
    T__101: 101,
    T__102: 102,
    T__103: 103,
    T__104: 104,
    T__105: 105,
    T__106: 106,
    T__107: 107,
    T__108: 108,
    T__109: 109,
    T__110: 110,
    T__111: 111,
    T__112: 112,
    T__113: 113,
    T__114: 114,
    T__115: 115,
    T__116: 116,
    T__117: 117,
    T__118: 118,
    T__119: 119,
    T__120: 120,
    T__121: 121,
    T__122: 122,
    T__123: 123,
    T__124: 124,
    T__125: 125,
    ID: 4,
    STRING: 5,
    INT: 6,
    COMMENT: 7,
    WS: 8
});

(function(){
// public class variables
var EOF= -1,
    T__9= 9,
    T__10= 10,
    T__11= 11,
    T__12= 12,
    T__13= 13,
    T__14= 14,
    T__15= 15,
    T__16= 16,
    T__17= 17,
    T__18= 18,
    T__19= 19,
    T__20= 20,
    T__21= 21,
    T__22= 22,
    T__23= 23,
    T__24= 24,
    T__25= 25,
    T__26= 26,
    T__27= 27,
    T__28= 28,
    T__29= 29,
    T__30= 30,
    T__31= 31,
    T__32= 32,
    T__33= 33,
    T__34= 34,
    T__35= 35,
    T__36= 36,
    T__37= 37,
    T__38= 38,
    T__39= 39,
    T__40= 40,
    T__41= 41,
    T__42= 42,
    T__43= 43,
    T__44= 44,
    T__45= 45,
    T__46= 46,
    T__47= 47,
    T__48= 48,
    T__49= 49,
    T__50= 50,
    T__51= 51,
    T__52= 52,
    T__53= 53,
    T__54= 54,
    T__55= 55,
    T__56= 56,
    T__57= 57,
    T__58= 58,
    T__59= 59,
    T__60= 60,
    T__61= 61,
    T__62= 62,
    T__63= 63,
    T__64= 64,
    T__65= 65,
    T__66= 66,
    T__67= 67,
    T__68= 68,
    T__69= 69,
    T__70= 70,
    T__71= 71,
    T__72= 72,
    T__73= 73,
    T__74= 74,
    T__75= 75,
    T__76= 76,
    T__77= 77,
    T__78= 78,
    T__79= 79,
    T__80= 80,
    T__81= 81,
    T__82= 82,
    T__83= 83,
    T__84= 84,
    T__85= 85,
    T__86= 86,
    T__87= 87,
    T__88= 88,
    T__89= 89,
    T__90= 90,
    T__91= 91,
    T__92= 92,
    T__93= 93,
    T__94= 94,
    T__95= 95,
    T__96= 96,
    T__97= 97,
    T__98= 98,
    T__99= 99,
    T__100= 100,
    T__101= 101,
    T__102= 102,
    T__103= 103,
    T__104= 104,
    T__105= 105,
    T__106= 106,
    T__107= 107,
    T__108= 108,
    T__109= 109,
    T__110= 110,
    T__111= 111,
    T__112= 112,
    T__113= 113,
    T__114= 114,
    T__115= 115,
    T__116= 116,
    T__117= 117,
    T__118= 118,
    T__119= 119,
    T__120= 120,
    T__121= 121,
    T__122= 122,
    T__123= 123,
    T__124= 124,
    T__125= 125,
    ID= 4,
    STRING= 5,
    INT= 6,
    COMMENT= 7,
    WS= 8;

// public instance methods/vars
org.antlr.lang.extend(AutoExpParser, org.antlr.runtime.Parser, {
        
    setTreeAdaptor: function(adaptor) {
        this.adaptor = adaptor;
    },
    getTreeAdaptor: function() {
        return this.adaptor;
    },

    getTokenNames: function() { return AutoExpParser.tokenNames; },
    getGrammarFileName: function() { return "/home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g"; }
});
org.antlr.lang.augmentObject(AutoExpParser.prototype, {

    // inline static return class
    rule_Model_return: (function() {
        AutoExpParser.rule_Model_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_Model_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:23:1: rule_Model : (experiments_0+= rule_Experiment )* EOF ;
    // $ANTLR start "rule_Model"
    rule_Model: function() {
        var retval = new AutoExpParser.rule_Model_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var EOF1 = null;
        var list_experiments_0=null;
        var experiments_0 = null;
        var EOF1_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:23:11: ( (experiments_0+= rule_Experiment )* EOF )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:25:2: (experiments_0+= rule_Experiment )* EOF
            root_0 = this.adaptor.nil();

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:25:15: (experiments_0+= rule_Experiment )*
            loop1:
            do {
                var alt1=2;
                var LA1_0 = this.input.LA(1);

                if ( (LA1_0==9) ) {
                    alt1=1;
                }


                switch (alt1) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:25:15: experiments_0+= rule_Experiment
                    this.pushFollow(AutoExpParser.FOLLOW_rule_Experiment_in_rule_Model66);
                    experiments_0=this.rule_Experiment();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, experiments_0.getTree());
                    if (org.antlr.lang.isNull(list_experiments_0)) list_experiments_0 = [];
                    list_experiments_0.push(experiments_0.getTree());



                    break;

                default :
                    break loop1;
                }
            } while (true);

            EOF1=this.match(this.input,EOF,AutoExpParser.FOLLOW_EOF_in_rule_Model71); 



            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_Experiment_return: (function() {
        AutoExpParser.rule_Experiment_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_Experiment_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:32:1: rule_Experiment : 'Experiment' name_0= ID '{' ( 'Authors' '{' authors_1+= rule_Author ( ',' authors_2+= rule_Author )* '}' )? ( 'description' description_3= STRING )? ( 'Abstract' abstract_4= rule_Abstract )? ( 'Keywords' '{' keywords_5+= rule_Keyword ( ',' keywords_6+= rule_Keyword )* '}' )? ( 'Goals' '{' goals_7+= rule_Goal ( ',' goals_8+= rule_Goal )* '}' )? ( 'Research Questions' '{' researchquestions_9+= rule_ResearchQuestion ( ',' researchquestions_10+= rule_ResearchQuestion )* '}' )? ( 'Research Hypotheses' '{' researchhypotheses_11+= rule_ResearchHypothesis ( ',' researchhypotheses_12+= rule_ResearchHypothesis )* '}' )? ( 'Threat' '{' threats_13+= rule_Threat ( ',' threats_14+= rule_Threat )* '}' )? 'Experimental Design' experimentaldesign_15= rule_ExperimentalDesign 'Dependent Variables' '{' dependentvariables_16+= rule_CustomDependentVariable ( ',' dependentvariables_17+= rule_CustomDependentVariable )* '}' ( 'Instruments' '{' instruments_18+= rule_Instrument ( ',' instruments_19+= rule_Instrument )* '}' )? 'Factors' '{' factors_20+= rule_Factor ( ',' factors_21+= rule_Factor )* '}' 'Treatments' '{' treatments_22+= rule_Treatment ( ',' treatments_23+= rule_Treatment )* '}' ( 'Groups' '{' groups_24+= rule_ObjectGroup ( ',' groups_25+= rule_ObjectGroup )* '}' )? 'Objects' '{' 'description' objectsdescription_26= STRING 'scaleType' objectsscaletype_27= rule_ScaleType '{' experimentalobjects_28+= rule_ExperimentalObject ( ',' experimentalobjects_29+= rule_ExperimentalObject )* '}' '}' 'Executions' '{' executions_30+= rule_Execution ( ',' executions_31+= rule_Execution )* '}' ( 'Analysis' analysis_32= rule_Analysis )? 'Infrastructure' infrastructure_33= rule_Infrastructure '}' ;
    // $ANTLR start "rule_Experiment"
    rule_Experiment: function() {
        var retval = new AutoExpParser.rule_Experiment_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var description_3 = null;
        var objectsdescription_26 = null;
        var string_literal2 = null;
        var char_literal3 = null;
        var string_literal4 = null;
        var char_literal5 = null;
        var char_literal6 = null;
        var char_literal7 = null;
        var string_literal8 = null;
        var string_literal9 = null;
        var string_literal10 = null;
        var char_literal11 = null;
        var char_literal12 = null;
        var char_literal13 = null;
        var string_literal14 = null;
        var char_literal15 = null;
        var char_literal16 = null;
        var char_literal17 = null;
        var string_literal18 = null;
        var char_literal19 = null;
        var char_literal20 = null;
        var char_literal21 = null;
        var string_literal22 = null;
        var char_literal23 = null;
        var char_literal24 = null;
        var char_literal25 = null;
        var string_literal26 = null;
        var char_literal27 = null;
        var char_literal28 = null;
        var char_literal29 = null;
        var string_literal30 = null;
        var string_literal31 = null;
        var char_literal32 = null;
        var char_literal33 = null;
        var char_literal34 = null;
        var string_literal35 = null;
        var char_literal36 = null;
        var char_literal37 = null;
        var char_literal38 = null;
        var string_literal39 = null;
        var char_literal40 = null;
        var char_literal41 = null;
        var char_literal42 = null;
        var string_literal43 = null;
        var char_literal44 = null;
        var char_literal45 = null;
        var char_literal46 = null;
        var string_literal47 = null;
        var char_literal48 = null;
        var char_literal49 = null;
        var char_literal50 = null;
        var string_literal51 = null;
        var char_literal52 = null;
        var string_literal53 = null;
        var string_literal54 = null;
        var char_literal55 = null;
        var char_literal56 = null;
        var char_literal57 = null;
        var char_literal58 = null;
        var string_literal59 = null;
        var char_literal60 = null;
        var char_literal61 = null;
        var char_literal62 = null;
        var string_literal63 = null;
        var string_literal64 = null;
        var char_literal65 = null;
        var list_authors_1=null;
        var list_authors_2=null;
        var list_keywords_5=null;
        var list_keywords_6=null;
        var list_goals_7=null;
        var list_goals_8=null;
        var list_researchquestions_9=null;
        var list_researchquestions_10=null;
        var list_researchhypotheses_11=null;
        var list_researchhypotheses_12=null;
        var list_threats_13=null;
        var list_threats_14=null;
        var list_dependentvariables_16=null;
        var list_dependentvariables_17=null;
        var list_instruments_18=null;
        var list_instruments_19=null;
        var list_factors_20=null;
        var list_factors_21=null;
        var list_treatments_22=null;
        var list_treatments_23=null;
        var list_groups_24=null;
        var list_groups_25=null;
        var list_experimentalobjects_28=null;
        var list_experimentalobjects_29=null;
        var list_executions_30=null;
        var list_executions_31=null;
         var abstract_4 = null;
         var experimentaldesign_15 = null;
         var objectsscaletype_27 = null;
         var analysis_32 = null;
         var infrastructure_33 = null;
        var authors_1 = null;
        var authors_2 = null;
        var keywords_5 = null;
        var keywords_6 = null;
        var goals_7 = null;
        var goals_8 = null;
        var researchquestions_9 = null;
        var researchquestions_10 = null;
        var researchhypotheses_11 = null;
        var researchhypotheses_12 = null;
        var threats_13 = null;
        var threats_14 = null;
        var dependentvariables_16 = null;
        var dependentvariables_17 = null;
        var instruments_18 = null;
        var instruments_19 = null;
        var factors_20 = null;
        var factors_21 = null;
        var treatments_22 = null;
        var treatments_23 = null;
        var groups_24 = null;
        var groups_25 = null;
        var experimentalobjects_28 = null;
        var experimentalobjects_29 = null;
        var executions_30 = null;
        var executions_31 = null;
        var name_0_tree=null;
        var description_3_tree=null;
        var objectsdescription_26_tree=null;
        var string_literal2_tree=null;
        var char_literal3_tree=null;
        var string_literal4_tree=null;
        var char_literal5_tree=null;
        var char_literal6_tree=null;
        var char_literal7_tree=null;
        var string_literal8_tree=null;
        var string_literal9_tree=null;
        var string_literal10_tree=null;
        var char_literal11_tree=null;
        var char_literal12_tree=null;
        var char_literal13_tree=null;
        var string_literal14_tree=null;
        var char_literal15_tree=null;
        var char_literal16_tree=null;
        var char_literal17_tree=null;
        var string_literal18_tree=null;
        var char_literal19_tree=null;
        var char_literal20_tree=null;
        var char_literal21_tree=null;
        var string_literal22_tree=null;
        var char_literal23_tree=null;
        var char_literal24_tree=null;
        var char_literal25_tree=null;
        var string_literal26_tree=null;
        var char_literal27_tree=null;
        var char_literal28_tree=null;
        var char_literal29_tree=null;
        var string_literal30_tree=null;
        var string_literal31_tree=null;
        var char_literal32_tree=null;
        var char_literal33_tree=null;
        var char_literal34_tree=null;
        var string_literal35_tree=null;
        var char_literal36_tree=null;
        var char_literal37_tree=null;
        var char_literal38_tree=null;
        var string_literal39_tree=null;
        var char_literal40_tree=null;
        var char_literal41_tree=null;
        var char_literal42_tree=null;
        var string_literal43_tree=null;
        var char_literal44_tree=null;
        var char_literal45_tree=null;
        var char_literal46_tree=null;
        var string_literal47_tree=null;
        var char_literal48_tree=null;
        var char_literal49_tree=null;
        var char_literal50_tree=null;
        var string_literal51_tree=null;
        var char_literal52_tree=null;
        var string_literal53_tree=null;
        var string_literal54_tree=null;
        var char_literal55_tree=null;
        var char_literal56_tree=null;
        var char_literal57_tree=null;
        var char_literal58_tree=null;
        var string_literal59_tree=null;
        var char_literal60_tree=null;
        var char_literal61_tree=null;
        var char_literal62_tree=null;
        var string_literal63_tree=null;
        var string_literal64_tree=null;
        var char_literal65_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:32:17: ( 'Experiment' name_0= ID '{' ( 'Authors' '{' authors_1+= rule_Author ( ',' authors_2+= rule_Author )* '}' )? ( 'description' description_3= STRING )? ( 'Abstract' abstract_4= rule_Abstract )? ( 'Keywords' '{' keywords_5+= rule_Keyword ( ',' keywords_6+= rule_Keyword )* '}' )? ( 'Goals' '{' goals_7+= rule_Goal ( ',' goals_8+= rule_Goal )* '}' )? ( 'Research Questions' '{' researchquestions_9+= rule_ResearchQuestion ( ',' researchquestions_10+= rule_ResearchQuestion )* '}' )? ( 'Research Hypotheses' '{' researchhypotheses_11+= rule_ResearchHypothesis ( ',' researchhypotheses_12+= rule_ResearchHypothesis )* '}' )? ( 'Threat' '{' threats_13+= rule_Threat ( ',' threats_14+= rule_Threat )* '}' )? 'Experimental Design' experimentaldesign_15= rule_ExperimentalDesign 'Dependent Variables' '{' dependentvariables_16+= rule_CustomDependentVariable ( ',' dependentvariables_17+= rule_CustomDependentVariable )* '}' ( 'Instruments' '{' instruments_18+= rule_Instrument ( ',' instruments_19+= rule_Instrument )* '}' )? 'Factors' '{' factors_20+= rule_Factor ( ',' factors_21+= rule_Factor )* '}' 'Treatments' '{' treatments_22+= rule_Treatment ( ',' treatments_23+= rule_Treatment )* '}' ( 'Groups' '{' groups_24+= rule_ObjectGroup ( ',' groups_25+= rule_ObjectGroup )* '}' )? 'Objects' '{' 'description' objectsdescription_26= STRING 'scaleType' objectsscaletype_27= rule_ScaleType '{' experimentalobjects_28+= rule_ExperimentalObject ( ',' experimentalobjects_29+= rule_ExperimentalObject )* '}' '}' 'Executions' '{' executions_30+= rule_Execution ( ',' executions_31+= rule_Execution )* '}' ( 'Analysis' analysis_32= rule_Analysis )? 'Infrastructure' infrastructure_33= rule_Infrastructure '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:33:2: 'Experiment' name_0= ID '{' ( 'Authors' '{' authors_1+= rule_Author ( ',' authors_2+= rule_Author )* '}' )? ( 'description' description_3= STRING )? ( 'Abstract' abstract_4= rule_Abstract )? ( 'Keywords' '{' keywords_5+= rule_Keyword ( ',' keywords_6+= rule_Keyword )* '}' )? ( 'Goals' '{' goals_7+= rule_Goal ( ',' goals_8+= rule_Goal )* '}' )? ( 'Research Questions' '{' researchquestions_9+= rule_ResearchQuestion ( ',' researchquestions_10+= rule_ResearchQuestion )* '}' )? ( 'Research Hypotheses' '{' researchhypotheses_11+= rule_ResearchHypothesis ( ',' researchhypotheses_12+= rule_ResearchHypothesis )* '}' )? ( 'Threat' '{' threats_13+= rule_Threat ( ',' threats_14+= rule_Threat )* '}' )? 'Experimental Design' experimentaldesign_15= rule_ExperimentalDesign 'Dependent Variables' '{' dependentvariables_16+= rule_CustomDependentVariable ( ',' dependentvariables_17+= rule_CustomDependentVariable )* '}' ( 'Instruments' '{' instruments_18+= rule_Instrument ( ',' instruments_19+= rule_Instrument )* '}' )? 'Factors' '{' factors_20+= rule_Factor ( ',' factors_21+= rule_Factor )* '}' 'Treatments' '{' treatments_22+= rule_Treatment ( ',' treatments_23+= rule_Treatment )* '}' ( 'Groups' '{' groups_24+= rule_ObjectGroup ( ',' groups_25+= rule_ObjectGroup )* '}' )? 'Objects' '{' 'description' objectsdescription_26= STRING 'scaleType' objectsscaletype_27= rule_ScaleType '{' experimentalobjects_28+= rule_ExperimentalObject ( ',' experimentalobjects_29+= rule_ExperimentalObject )* '}' '}' 'Executions' '{' executions_30+= rule_Execution ( ',' executions_31+= rule_Execution )* '}' ( 'Analysis' analysis_32= rule_Analysis )? 'Infrastructure' infrastructure_33= rule_Infrastructure '}'
            root_0 = this.adaptor.nil();

            string_literal2=this.match(this.input,9,AutoExpParser.FOLLOW_9_in_rule_Experiment84); 
            string_literal2_tree = this.adaptor.create(string_literal2);
            this.adaptor.addChild(root_0, string_literal2_tree);

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Experiment89); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal3=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Experiment92); 
            char_literal3_tree = this.adaptor.create(char_literal3);
            this.adaptor.addChild(root_0, char_literal3_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:36:2: ( 'Authors' '{' authors_1+= rule_Author ( ',' authors_2+= rule_Author )* '}' )?
            var alt3=2;
            var LA3_0 = this.input.LA(1);

            if ( (LA3_0==11) ) {
                alt3=1;
            }
            switch (alt3) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:36:3: 'Authors' '{' authors_1+= rule_Author ( ',' authors_2+= rule_Author )* '}'
                    string_literal4=this.match(this.input,11,AutoExpParser.FOLLOW_11_in_rule_Experiment96); 
                    string_literal4_tree = this.adaptor.create(string_literal4);
                    this.adaptor.addChild(root_0, string_literal4_tree);

                    char_literal5=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Experiment98); 
                    char_literal5_tree = this.adaptor.create(char_literal5);
                    this.adaptor.addChild(root_0, char_literal5_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Author_in_rule_Experiment102);
                    authors_1=this.rule_Author();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, authors_1.getTree());
                    if (org.antlr.lang.isNull(list_authors_1)) list_authors_1 = [];
                    list_authors_1.push(authors_1.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:36:40: ( ',' authors_2+= rule_Author )*
                    loop2:
                    do {
                        var alt2=2;
                        var LA2_0 = this.input.LA(1);

                        if ( (LA2_0==12) ) {
                            alt2=1;
                        }


                        switch (alt2) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:36:41: ',' authors_2+= rule_Author
                            char_literal6=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Experiment105); 
                            char_literal6_tree = this.adaptor.create(char_literal6);
                            this.adaptor.addChild(root_0, char_literal6_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Author_in_rule_Experiment109);
                            authors_2=this.rule_Author();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, authors_2.getTree());
                            if (org.antlr.lang.isNull(list_authors_2)) list_authors_2 = [];
                            list_authors_2.push(authors_2.getTree());



                            break;

                        default :
                            break loop2;
                        }
                    } while (true);

                    char_literal7=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Experiment113); 
                    char_literal7_tree = this.adaptor.create(char_literal7);
                    this.adaptor.addChild(root_0, char_literal7_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:37:2: ( 'description' description_3= STRING )?
            var alt4=2;
            var LA4_0 = this.input.LA(1);

            if ( (LA4_0==14) ) {
                alt4=1;
            }
            switch (alt4) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:37:3: 'description' description_3= STRING
                    string_literal8=this.match(this.input,14,AutoExpParser.FOLLOW_14_in_rule_Experiment119); 
                    string_literal8_tree = this.adaptor.create(string_literal8);
                    this.adaptor.addChild(root_0, string_literal8_tree);

                    description_3=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Experiment123); 
                    description_3_tree = this.adaptor.create(description_3);
                    this.adaptor.addChild(root_0, description_3_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:38:2: ( 'Abstract' abstract_4= rule_Abstract )?
            var alt5=2;
            var LA5_0 = this.input.LA(1);

            if ( (LA5_0==15) ) {
                alt5=1;
            }
            switch (alt5) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:38:3: 'Abstract' abstract_4= rule_Abstract
                    string_literal9=this.match(this.input,15,AutoExpParser.FOLLOW_15_in_rule_Experiment129); 
                    string_literal9_tree = this.adaptor.create(string_literal9);
                    this.adaptor.addChild(root_0, string_literal9_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Abstract_in_rule_Experiment133);
                    abstract_4=this.rule_Abstract();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, abstract_4.getTree());


                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:39:2: ( 'Keywords' '{' keywords_5+= rule_Keyword ( ',' keywords_6+= rule_Keyword )* '}' )?
            var alt7=2;
            var LA7_0 = this.input.LA(1);

            if ( (LA7_0==16) ) {
                alt7=1;
            }
            switch (alt7) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:39:3: 'Keywords' '{' keywords_5+= rule_Keyword ( ',' keywords_6+= rule_Keyword )* '}'
                    string_literal10=this.match(this.input,16,AutoExpParser.FOLLOW_16_in_rule_Experiment139); 
                    string_literal10_tree = this.adaptor.create(string_literal10);
                    this.adaptor.addChild(root_0, string_literal10_tree);

                    char_literal11=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Experiment141); 
                    char_literal11_tree = this.adaptor.create(char_literal11);
                    this.adaptor.addChild(root_0, char_literal11_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Keyword_in_rule_Experiment145);
                    keywords_5=this.rule_Keyword();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, keywords_5.getTree());
                    if (org.antlr.lang.isNull(list_keywords_5)) list_keywords_5 = [];
                    list_keywords_5.push(keywords_5.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:39:43: ( ',' keywords_6+= rule_Keyword )*
                    loop6:
                    do {
                        var alt6=2;
                        var LA6_0 = this.input.LA(1);

                        if ( (LA6_0==12) ) {
                            alt6=1;
                        }


                        switch (alt6) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:39:44: ',' keywords_6+= rule_Keyword
                            char_literal12=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Experiment148); 
                            char_literal12_tree = this.adaptor.create(char_literal12);
                            this.adaptor.addChild(root_0, char_literal12_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Keyword_in_rule_Experiment152);
                            keywords_6=this.rule_Keyword();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, keywords_6.getTree());
                            if (org.antlr.lang.isNull(list_keywords_6)) list_keywords_6 = [];
                            list_keywords_6.push(keywords_6.getTree());



                            break;

                        default :
                            break loop6;
                        }
                    } while (true);

                    char_literal13=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Experiment156); 
                    char_literal13_tree = this.adaptor.create(char_literal13);
                    this.adaptor.addChild(root_0, char_literal13_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:40:2: ( 'Goals' '{' goals_7+= rule_Goal ( ',' goals_8+= rule_Goal )* '}' )?
            var alt9=2;
            var LA9_0 = this.input.LA(1);

            if ( (LA9_0==17) ) {
                alt9=1;
            }
            switch (alt9) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:40:3: 'Goals' '{' goals_7+= rule_Goal ( ',' goals_8+= rule_Goal )* '}'
                    string_literal14=this.match(this.input,17,AutoExpParser.FOLLOW_17_in_rule_Experiment162); 
                    string_literal14_tree = this.adaptor.create(string_literal14);
                    this.adaptor.addChild(root_0, string_literal14_tree);

                    char_literal15=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Experiment164); 
                    char_literal15_tree = this.adaptor.create(char_literal15);
                    this.adaptor.addChild(root_0, char_literal15_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Goal_in_rule_Experiment168);
                    goals_7=this.rule_Goal();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, goals_7.getTree());
                    if (org.antlr.lang.isNull(list_goals_7)) list_goals_7 = [];
                    list_goals_7.push(goals_7.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:40:34: ( ',' goals_8+= rule_Goal )*
                    loop8:
                    do {
                        var alt8=2;
                        var LA8_0 = this.input.LA(1);

                        if ( (LA8_0==12) ) {
                            alt8=1;
                        }


                        switch (alt8) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:40:35: ',' goals_8+= rule_Goal
                            char_literal16=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Experiment171); 
                            char_literal16_tree = this.adaptor.create(char_literal16);
                            this.adaptor.addChild(root_0, char_literal16_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Goal_in_rule_Experiment175);
                            goals_8=this.rule_Goal();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, goals_8.getTree());
                            if (org.antlr.lang.isNull(list_goals_8)) list_goals_8 = [];
                            list_goals_8.push(goals_8.getTree());



                            break;

                        default :
                            break loop8;
                        }
                    } while (true);

                    char_literal17=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Experiment179); 
                    char_literal17_tree = this.adaptor.create(char_literal17);
                    this.adaptor.addChild(root_0, char_literal17_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:41:2: ( 'Research Questions' '{' researchquestions_9+= rule_ResearchQuestion ( ',' researchquestions_10+= rule_ResearchQuestion )* '}' )?
            var alt11=2;
            var LA11_0 = this.input.LA(1);

            if ( (LA11_0==18) ) {
                alt11=1;
            }
            switch (alt11) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:41:3: 'Research Questions' '{' researchquestions_9+= rule_ResearchQuestion ( ',' researchquestions_10+= rule_ResearchQuestion )* '}'
                    string_literal18=this.match(this.input,18,AutoExpParser.FOLLOW_18_in_rule_Experiment185); 
                    string_literal18_tree = this.adaptor.create(string_literal18);
                    this.adaptor.addChild(root_0, string_literal18_tree);

                    char_literal19=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Experiment187); 
                    char_literal19_tree = this.adaptor.create(char_literal19);
                    this.adaptor.addChild(root_0, char_literal19_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_ResearchQuestion_in_rule_Experiment191);
                    researchquestions_9=this.rule_ResearchQuestion();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, researchquestions_9.getTree());
                    if (org.antlr.lang.isNull(list_researchquestions_9)) list_researchquestions_9 = [];
                    list_researchquestions_9.push(researchquestions_9.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:41:71: ( ',' researchquestions_10+= rule_ResearchQuestion )*
                    loop10:
                    do {
                        var alt10=2;
                        var LA10_0 = this.input.LA(1);

                        if ( (LA10_0==12) ) {
                            alt10=1;
                        }


                        switch (alt10) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:41:72: ',' researchquestions_10+= rule_ResearchQuestion
                            char_literal20=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Experiment194); 
                            char_literal20_tree = this.adaptor.create(char_literal20);
                            this.adaptor.addChild(root_0, char_literal20_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_ResearchQuestion_in_rule_Experiment198);
                            researchquestions_10=this.rule_ResearchQuestion();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, researchquestions_10.getTree());
                            if (org.antlr.lang.isNull(list_researchquestions_10)) list_researchquestions_10 = [];
                            list_researchquestions_10.push(researchquestions_10.getTree());



                            break;

                        default :
                            break loop10;
                        }
                    } while (true);

                    char_literal21=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Experiment202); 
                    char_literal21_tree = this.adaptor.create(char_literal21);
                    this.adaptor.addChild(root_0, char_literal21_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:42:2: ( 'Research Hypotheses' '{' researchhypotheses_11+= rule_ResearchHypothesis ( ',' researchhypotheses_12+= rule_ResearchHypothesis )* '}' )?
            var alt13=2;
            var LA13_0 = this.input.LA(1);

            if ( (LA13_0==19) ) {
                alt13=1;
            }
            switch (alt13) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:42:3: 'Research Hypotheses' '{' researchhypotheses_11+= rule_ResearchHypothesis ( ',' researchhypotheses_12+= rule_ResearchHypothesis )* '}'
                    string_literal22=this.match(this.input,19,AutoExpParser.FOLLOW_19_in_rule_Experiment208); 
                    string_literal22_tree = this.adaptor.create(string_literal22);
                    this.adaptor.addChild(root_0, string_literal22_tree);

                    char_literal23=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Experiment210); 
                    char_literal23_tree = this.adaptor.create(char_literal23);
                    this.adaptor.addChild(root_0, char_literal23_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_ResearchHypothesis_in_rule_Experiment214);
                    researchhypotheses_11=this.rule_ResearchHypothesis();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, researchhypotheses_11.getTree());
                    if (org.antlr.lang.isNull(list_researchhypotheses_11)) list_researchhypotheses_11 = [];
                    list_researchhypotheses_11.push(researchhypotheses_11.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:42:76: ( ',' researchhypotheses_12+= rule_ResearchHypothesis )*
                    loop12:
                    do {
                        var alt12=2;
                        var LA12_0 = this.input.LA(1);

                        if ( (LA12_0==12) ) {
                            alt12=1;
                        }


                        switch (alt12) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:42:77: ',' researchhypotheses_12+= rule_ResearchHypothesis
                            char_literal24=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Experiment217); 
                            char_literal24_tree = this.adaptor.create(char_literal24);
                            this.adaptor.addChild(root_0, char_literal24_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_ResearchHypothesis_in_rule_Experiment221);
                            researchhypotheses_12=this.rule_ResearchHypothesis();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, researchhypotheses_12.getTree());
                            if (org.antlr.lang.isNull(list_researchhypotheses_12)) list_researchhypotheses_12 = [];
                            list_researchhypotheses_12.push(researchhypotheses_12.getTree());



                            break;

                        default :
                            break loop12;
                        }
                    } while (true);

                    char_literal25=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Experiment225); 
                    char_literal25_tree = this.adaptor.create(char_literal25);
                    this.adaptor.addChild(root_0, char_literal25_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:43:2: ( 'Threat' '{' threats_13+= rule_Threat ( ',' threats_14+= rule_Threat )* '}' )?
            var alt15=2;
            var LA15_0 = this.input.LA(1);

            if ( (LA15_0==20) ) {
                alt15=1;
            }
            switch (alt15) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:43:3: 'Threat' '{' threats_13+= rule_Threat ( ',' threats_14+= rule_Threat )* '}'
                    string_literal26=this.match(this.input,20,AutoExpParser.FOLLOW_20_in_rule_Experiment231); 
                    string_literal26_tree = this.adaptor.create(string_literal26);
                    this.adaptor.addChild(root_0, string_literal26_tree);

                    char_literal27=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Experiment233); 
                    char_literal27_tree = this.adaptor.create(char_literal27);
                    this.adaptor.addChild(root_0, char_literal27_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Threat_in_rule_Experiment237);
                    threats_13=this.rule_Threat();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, threats_13.getTree());
                    if (org.antlr.lang.isNull(list_threats_13)) list_threats_13 = [];
                    list_threats_13.push(threats_13.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:43:40: ( ',' threats_14+= rule_Threat )*
                    loop14:
                    do {
                        var alt14=2;
                        var LA14_0 = this.input.LA(1);

                        if ( (LA14_0==12) ) {
                            alt14=1;
                        }


                        switch (alt14) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:43:41: ',' threats_14+= rule_Threat
                            char_literal28=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Experiment240); 
                            char_literal28_tree = this.adaptor.create(char_literal28);
                            this.adaptor.addChild(root_0, char_literal28_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Threat_in_rule_Experiment244);
                            threats_14=this.rule_Threat();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, threats_14.getTree());
                            if (org.antlr.lang.isNull(list_threats_14)) list_threats_14 = [];
                            list_threats_14.push(threats_14.getTree());



                            break;

                        default :
                            break loop14;
                        }
                    } while (true);

                    char_literal29=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Experiment248); 
                    char_literal29_tree = this.adaptor.create(char_literal29);
                    this.adaptor.addChild(root_0, char_literal29_tree);



                    break;

            }

            string_literal30=this.match(this.input,21,AutoExpParser.FOLLOW_21_in_rule_Experiment253); 
            string_literal30_tree = this.adaptor.create(string_literal30);
            this.adaptor.addChild(root_0, string_literal30_tree);

            this.pushFollow(AutoExpParser.FOLLOW_rule_ExperimentalDesign_in_rule_Experiment257);
            experimentaldesign_15=this.rule_ExperimentalDesign();

            this.state._fsp--;

            this.adaptor.addChild(root_0, experimentaldesign_15.getTree());
            string_literal31=this.match(this.input,22,AutoExpParser.FOLLOW_22_in_rule_Experiment260); 
            string_literal31_tree = this.adaptor.create(string_literal31);
            this.adaptor.addChild(root_0, string_literal31_tree);

            char_literal32=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Experiment262); 
            char_literal32_tree = this.adaptor.create(char_literal32);
            this.adaptor.addChild(root_0, char_literal32_tree);

            this.pushFollow(AutoExpParser.FOLLOW_rule_CustomDependentVariable_in_rule_Experiment266);
            dependentvariables_16=this.rule_CustomDependentVariable();

            this.state._fsp--;

            this.adaptor.addChild(root_0, dependentvariables_16.getTree());
            if (org.antlr.lang.isNull(list_dependentvariables_16)) list_dependentvariables_16 = [];
            list_dependentvariables_16.push(dependentvariables_16.getTree());

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:45:80: ( ',' dependentvariables_17+= rule_CustomDependentVariable )*
            loop16:
            do {
                var alt16=2;
                var LA16_0 = this.input.LA(1);

                if ( (LA16_0==12) ) {
                    alt16=1;
                }


                switch (alt16) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:45:81: ',' dependentvariables_17+= rule_CustomDependentVariable
                    char_literal33=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Experiment269); 
                    char_literal33_tree = this.adaptor.create(char_literal33);
                    this.adaptor.addChild(root_0, char_literal33_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_CustomDependentVariable_in_rule_Experiment273);
                    dependentvariables_17=this.rule_CustomDependentVariable();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, dependentvariables_17.getTree());
                    if (org.antlr.lang.isNull(list_dependentvariables_17)) list_dependentvariables_17 = [];
                    list_dependentvariables_17.push(dependentvariables_17.getTree());



                    break;

                default :
                    break loop16;
                }
            } while (true);

            char_literal34=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Experiment277); 
            char_literal34_tree = this.adaptor.create(char_literal34);
            this.adaptor.addChild(root_0, char_literal34_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:46:2: ( 'Instruments' '{' instruments_18+= rule_Instrument ( ',' instruments_19+= rule_Instrument )* '}' )?
            var alt18=2;
            var LA18_0 = this.input.LA(1);

            if ( (LA18_0==23) ) {
                alt18=1;
            }
            switch (alt18) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:46:3: 'Instruments' '{' instruments_18+= rule_Instrument ( ',' instruments_19+= rule_Instrument )* '}'
                    string_literal35=this.match(this.input,23,AutoExpParser.FOLLOW_23_in_rule_Experiment281); 
                    string_literal35_tree = this.adaptor.create(string_literal35);
                    this.adaptor.addChild(root_0, string_literal35_tree);

                    char_literal36=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Experiment283); 
                    char_literal36_tree = this.adaptor.create(char_literal36);
                    this.adaptor.addChild(root_0, char_literal36_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Instrument_in_rule_Experiment287);
                    instruments_18=this.rule_Instrument();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, instruments_18.getTree());
                    if (org.antlr.lang.isNull(list_instruments_18)) list_instruments_18 = [];
                    list_instruments_18.push(instruments_18.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:46:53: ( ',' instruments_19+= rule_Instrument )*
                    loop17:
                    do {
                        var alt17=2;
                        var LA17_0 = this.input.LA(1);

                        if ( (LA17_0==12) ) {
                            alt17=1;
                        }


                        switch (alt17) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:46:54: ',' instruments_19+= rule_Instrument
                            char_literal37=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Experiment290); 
                            char_literal37_tree = this.adaptor.create(char_literal37);
                            this.adaptor.addChild(root_0, char_literal37_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Instrument_in_rule_Experiment294);
                            instruments_19=this.rule_Instrument();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, instruments_19.getTree());
                            if (org.antlr.lang.isNull(list_instruments_19)) list_instruments_19 = [];
                            list_instruments_19.push(instruments_19.getTree());



                            break;

                        default :
                            break loop17;
                        }
                    } while (true);

                    char_literal38=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Experiment298); 
                    char_literal38_tree = this.adaptor.create(char_literal38);
                    this.adaptor.addChild(root_0, char_literal38_tree);



                    break;

            }

            string_literal39=this.match(this.input,24,AutoExpParser.FOLLOW_24_in_rule_Experiment303); 
            string_literal39_tree = this.adaptor.create(string_literal39);
            this.adaptor.addChild(root_0, string_literal39_tree);

            char_literal40=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Experiment305); 
            char_literal40_tree = this.adaptor.create(char_literal40);
            this.adaptor.addChild(root_0, char_literal40_tree);

            this.pushFollow(AutoExpParser.FOLLOW_rule_Factor_in_rule_Experiment309);
            factors_20=this.rule_Factor();

            this.state._fsp--;

            this.adaptor.addChild(root_0, factors_20.getTree());
            if (org.antlr.lang.isNull(list_factors_20)) list_factors_20 = [];
            list_factors_20.push(factors_20.getTree());

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:47:40: ( ',' factors_21+= rule_Factor )*
            loop19:
            do {
                var alt19=2;
                var LA19_0 = this.input.LA(1);

                if ( (LA19_0==12) ) {
                    alt19=1;
                }


                switch (alt19) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:47:41: ',' factors_21+= rule_Factor
                    char_literal41=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Experiment312); 
                    char_literal41_tree = this.adaptor.create(char_literal41);
                    this.adaptor.addChild(root_0, char_literal41_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Factor_in_rule_Experiment316);
                    factors_21=this.rule_Factor();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, factors_21.getTree());
                    if (org.antlr.lang.isNull(list_factors_21)) list_factors_21 = [];
                    list_factors_21.push(factors_21.getTree());



                    break;

                default :
                    break loop19;
                }
            } while (true);

            char_literal42=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Experiment320); 
            char_literal42_tree = this.adaptor.create(char_literal42);
            this.adaptor.addChild(root_0, char_literal42_tree);

            string_literal43=this.match(this.input,25,AutoExpParser.FOLLOW_25_in_rule_Experiment323); 
            string_literal43_tree = this.adaptor.create(string_literal43);
            this.adaptor.addChild(root_0, string_literal43_tree);

            char_literal44=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Experiment325); 
            char_literal44_tree = this.adaptor.create(char_literal44);
            this.adaptor.addChild(root_0, char_literal44_tree);

            this.pushFollow(AutoExpParser.FOLLOW_rule_Treatment_in_rule_Experiment329);
            treatments_22=this.rule_Treatment();

            this.state._fsp--;

            this.adaptor.addChild(root_0, treatments_22.getTree());
            if (org.antlr.lang.isNull(list_treatments_22)) list_treatments_22 = [];
            list_treatments_22.push(treatments_22.getTree());

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:48:49: ( ',' treatments_23+= rule_Treatment )*
            loop20:
            do {
                var alt20=2;
                var LA20_0 = this.input.LA(1);

                if ( (LA20_0==12) ) {
                    alt20=1;
                }


                switch (alt20) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:48:50: ',' treatments_23+= rule_Treatment
                    char_literal45=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Experiment332); 
                    char_literal45_tree = this.adaptor.create(char_literal45);
                    this.adaptor.addChild(root_0, char_literal45_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Treatment_in_rule_Experiment336);
                    treatments_23=this.rule_Treatment();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, treatments_23.getTree());
                    if (org.antlr.lang.isNull(list_treatments_23)) list_treatments_23 = [];
                    list_treatments_23.push(treatments_23.getTree());



                    break;

                default :
                    break loop20;
                }
            } while (true);

            char_literal46=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Experiment340); 
            char_literal46_tree = this.adaptor.create(char_literal46);
            this.adaptor.addChild(root_0, char_literal46_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:49:2: ( 'Groups' '{' groups_24+= rule_ObjectGroup ( ',' groups_25+= rule_ObjectGroup )* '}' )?
            var alt22=2;
            var LA22_0 = this.input.LA(1);

            if ( (LA22_0==26) ) {
                alt22=1;
            }
            switch (alt22) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:49:3: 'Groups' '{' groups_24+= rule_ObjectGroup ( ',' groups_25+= rule_ObjectGroup )* '}'
                    string_literal47=this.match(this.input,26,AutoExpParser.FOLLOW_26_in_rule_Experiment344); 
                    string_literal47_tree = this.adaptor.create(string_literal47);
                    this.adaptor.addChild(root_0, string_literal47_tree);

                    char_literal48=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Experiment346); 
                    char_literal48_tree = this.adaptor.create(char_literal48);
                    this.adaptor.addChild(root_0, char_literal48_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_ObjectGroup_in_rule_Experiment350);
                    groups_24=this.rule_ObjectGroup();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, groups_24.getTree());
                    if (org.antlr.lang.isNull(list_groups_24)) list_groups_24 = [];
                    list_groups_24.push(groups_24.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:49:44: ( ',' groups_25+= rule_ObjectGroup )*
                    loop21:
                    do {
                        var alt21=2;
                        var LA21_0 = this.input.LA(1);

                        if ( (LA21_0==12) ) {
                            alt21=1;
                        }


                        switch (alt21) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:49:45: ',' groups_25+= rule_ObjectGroup
                            char_literal49=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Experiment353); 
                            char_literal49_tree = this.adaptor.create(char_literal49);
                            this.adaptor.addChild(root_0, char_literal49_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_ObjectGroup_in_rule_Experiment357);
                            groups_25=this.rule_ObjectGroup();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, groups_25.getTree());
                            if (org.antlr.lang.isNull(list_groups_25)) list_groups_25 = [];
                            list_groups_25.push(groups_25.getTree());



                            break;

                        default :
                            break loop21;
                        }
                    } while (true);

                    char_literal50=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Experiment361); 
                    char_literal50_tree = this.adaptor.create(char_literal50);
                    this.adaptor.addChild(root_0, char_literal50_tree);



                    break;

            }

            string_literal51=this.match(this.input,27,AutoExpParser.FOLLOW_27_in_rule_Experiment366); 
            string_literal51_tree = this.adaptor.create(string_literal51);
            this.adaptor.addChild(root_0, string_literal51_tree);

            char_literal52=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Experiment368); 
            char_literal52_tree = this.adaptor.create(char_literal52);
            this.adaptor.addChild(root_0, char_literal52_tree);

            string_literal53=this.match(this.input,14,AutoExpParser.FOLLOW_14_in_rule_Experiment370); 
            string_literal53_tree = this.adaptor.create(string_literal53);
            this.adaptor.addChild(root_0, string_literal53_tree);

            objectsdescription_26=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Experiment374); 
            objectsdescription_26_tree = this.adaptor.create(objectsdescription_26);
            this.adaptor.addChild(root_0, objectsdescription_26_tree);

            string_literal54=this.match(this.input,28,AutoExpParser.FOLLOW_28_in_rule_Experiment376); 
            string_literal54_tree = this.adaptor.create(string_literal54);
            this.adaptor.addChild(root_0, string_literal54_tree);

            this.pushFollow(AutoExpParser.FOLLOW_rule_ScaleType_in_rule_Experiment380);
            objectsscaletype_27=this.rule_ScaleType();

            this.state._fsp--;

            this.adaptor.addChild(root_0, objectsscaletype_27.getTree());
            char_literal55=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Experiment382); 
            char_literal55_tree = this.adaptor.create(char_literal55);
            this.adaptor.addChild(root_0, char_literal55_tree);

            this.pushFollow(AutoExpParser.FOLLOW_rule_ExperimentalObject_in_rule_Experiment386);
            experimentalobjects_28=this.rule_ExperimentalObject();

            this.state._fsp--;

            this.adaptor.addChild(root_0, experimentalobjects_28.getTree());
            if (org.antlr.lang.isNull(list_experimentalobjects_28)) list_experimentalobjects_28 = [];
            list_experimentalobjects_28.push(experimentalobjects_28.getTree());

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:50:158: ( ',' experimentalobjects_29+= rule_ExperimentalObject )*
            loop23:
            do {
                var alt23=2;
                var LA23_0 = this.input.LA(1);

                if ( (LA23_0==12) ) {
                    alt23=1;
                }


                switch (alt23) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:50:159: ',' experimentalobjects_29+= rule_ExperimentalObject
                    char_literal56=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Experiment389); 
                    char_literal56_tree = this.adaptor.create(char_literal56);
                    this.adaptor.addChild(root_0, char_literal56_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_ExperimentalObject_in_rule_Experiment393);
                    experimentalobjects_29=this.rule_ExperimentalObject();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, experimentalobjects_29.getTree());
                    if (org.antlr.lang.isNull(list_experimentalobjects_29)) list_experimentalobjects_29 = [];
                    list_experimentalobjects_29.push(experimentalobjects_29.getTree());



                    break;

                default :
                    break loop23;
                }
            } while (true);

            char_literal57=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Experiment397); 
            char_literal57_tree = this.adaptor.create(char_literal57);
            this.adaptor.addChild(root_0, char_literal57_tree);

            char_literal58=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Experiment399); 
            char_literal58_tree = this.adaptor.create(char_literal58);
            this.adaptor.addChild(root_0, char_literal58_tree);

            string_literal59=this.match(this.input,29,AutoExpParser.FOLLOW_29_in_rule_Experiment402); 
            string_literal59_tree = this.adaptor.create(string_literal59);
            this.adaptor.addChild(root_0, string_literal59_tree);

            char_literal60=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Experiment404); 
            char_literal60_tree = this.adaptor.create(char_literal60);
            this.adaptor.addChild(root_0, char_literal60_tree);

            this.pushFollow(AutoExpParser.FOLLOW_rule_Execution_in_rule_Experiment408);
            executions_30=this.rule_Execution();

            this.state._fsp--;

            this.adaptor.addChild(root_0, executions_30.getTree());
            if (org.antlr.lang.isNull(list_executions_30)) list_executions_30 = [];
            list_executions_30.push(executions_30.getTree());

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:51:49: ( ',' executions_31+= rule_Execution )*
            loop24:
            do {
                var alt24=2;
                var LA24_0 = this.input.LA(1);

                if ( (LA24_0==12) ) {
                    alt24=1;
                }


                switch (alt24) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:51:50: ',' executions_31+= rule_Execution
                    char_literal61=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Experiment411); 
                    char_literal61_tree = this.adaptor.create(char_literal61);
                    this.adaptor.addChild(root_0, char_literal61_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Execution_in_rule_Experiment415);
                    executions_31=this.rule_Execution();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, executions_31.getTree());
                    if (org.antlr.lang.isNull(list_executions_31)) list_executions_31 = [];
                    list_executions_31.push(executions_31.getTree());



                    break;

                default :
                    break loop24;
                }
            } while (true);

            char_literal62=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Experiment419); 
            char_literal62_tree = this.adaptor.create(char_literal62);
            this.adaptor.addChild(root_0, char_literal62_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:52:2: ( 'Analysis' analysis_32= rule_Analysis )?
            var alt25=2;
            var LA25_0 = this.input.LA(1);

            if ( (LA25_0==30) ) {
                alt25=1;
            }
            switch (alt25) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:52:3: 'Analysis' analysis_32= rule_Analysis
                    string_literal63=this.match(this.input,30,AutoExpParser.FOLLOW_30_in_rule_Experiment423); 
                    string_literal63_tree = this.adaptor.create(string_literal63);
                    this.adaptor.addChild(root_0, string_literal63_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Analysis_in_rule_Experiment427);
                    analysis_32=this.rule_Analysis();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, analysis_32.getTree());


                    break;

            }

            string_literal64=this.match(this.input,31,AutoExpParser.FOLLOW_31_in_rule_Experiment432); 
            string_literal64_tree = this.adaptor.create(string_literal64);
            this.adaptor.addChild(root_0, string_literal64_tree);

            this.pushFollow(AutoExpParser.FOLLOW_rule_Infrastructure_in_rule_Experiment436);
            infrastructure_33=this.rule_Infrastructure();

            this.state._fsp--;

            this.adaptor.addChild(root_0, infrastructure_33.getTree());
            char_literal65=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Experiment439); 
            char_literal65_tree = this.adaptor.create(char_literal65);
            this.adaptor.addChild(root_0, char_literal65_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_Infrastructure_return: (function() {
        AutoExpParser.rule_Infrastructure_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_Infrastructure_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:58:1: rule_Infrastructure : '{' user_0= rule_User ( 'requirements' requirements_1= rule_Requirements )? ( 'preconditions' preconditions_2= rule_Preconditions )? ( 'clouds' '{' clouds_3+= rule_Cloud ( ',' clouds_4+= rule_Cloud )* '}' )? ( 'on-finish' onfinish_5= rule_OnFinishType )? '}' ;
    // $ANTLR start "rule_Infrastructure"
    rule_Infrastructure: function() {
        var retval = new AutoExpParser.rule_Infrastructure_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal66 = null;
        var string_literal67 = null;
        var string_literal68 = null;
        var string_literal69 = null;
        var char_literal70 = null;
        var char_literal71 = null;
        var char_literal72 = null;
        var string_literal73 = null;
        var char_literal74 = null;
        var list_clouds_3=null;
        var list_clouds_4=null;
         var user_0 = null;
         var requirements_1 = null;
         var preconditions_2 = null;
         var onfinish_5 = null;
        var clouds_3 = null;
        var clouds_4 = null;
        var char_literal66_tree=null;
        var string_literal67_tree=null;
        var string_literal68_tree=null;
        var string_literal69_tree=null;
        var char_literal70_tree=null;
        var char_literal71_tree=null;
        var char_literal72_tree=null;
        var string_literal73_tree=null;
        var char_literal74_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:58:20: ( '{' user_0= rule_User ( 'requirements' requirements_1= rule_Requirements )? ( 'preconditions' preconditions_2= rule_Preconditions )? ( 'clouds' '{' clouds_3+= rule_Cloud ( ',' clouds_4+= rule_Cloud )* '}' )? ( 'on-finish' onfinish_5= rule_OnFinishType )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:60:2: '{' user_0= rule_User ( 'requirements' requirements_1= rule_Requirements )? ( 'preconditions' preconditions_2= rule_Preconditions )? ( 'clouds' '{' clouds_3+= rule_Cloud ( ',' clouds_4+= rule_Cloud )* '}' )? ( 'on-finish' onfinish_5= rule_OnFinishType )? '}'
            root_0 = this.adaptor.nil();

            char_literal66=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Infrastructure451); 
            char_literal66_tree = this.adaptor.create(char_literal66);
            this.adaptor.addChild(root_0, char_literal66_tree);

            this.pushFollow(AutoExpParser.FOLLOW_rule_User_in_rule_Infrastructure457);
            user_0=this.rule_User();

            this.state._fsp--;

            this.adaptor.addChild(root_0, user_0.getTree());
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:62:3: ( 'requirements' requirements_1= rule_Requirements )?
            var alt26=2;
            var LA26_0 = this.input.LA(1);

            if ( (LA26_0==32) ) {
                alt26=1;
            }
            switch (alt26) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:62:4: 'requirements' requirements_1= rule_Requirements
                    string_literal67=this.match(this.input,32,AutoExpParser.FOLLOW_32_in_rule_Infrastructure462); 
                    string_literal67_tree = this.adaptor.create(string_literal67);
                    this.adaptor.addChild(root_0, string_literal67_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Requirements_in_rule_Infrastructure466);
                    requirements_1=this.rule_Requirements();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, requirements_1.getTree());


                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:63:3: ( 'preconditions' preconditions_2= rule_Preconditions )?
            var alt27=2;
            var LA27_0 = this.input.LA(1);

            if ( (LA27_0==33) ) {
                alt27=1;
            }
            switch (alt27) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:63:4: 'preconditions' preconditions_2= rule_Preconditions
                    string_literal68=this.match(this.input,33,AutoExpParser.FOLLOW_33_in_rule_Infrastructure473); 
                    string_literal68_tree = this.adaptor.create(string_literal68);
                    this.adaptor.addChild(root_0, string_literal68_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Preconditions_in_rule_Infrastructure477);
                    preconditions_2=this.rule_Preconditions();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, preconditions_2.getTree());


                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:64:3: ( 'clouds' '{' clouds_3+= rule_Cloud ( ',' clouds_4+= rule_Cloud )* '}' )?
            var alt29=2;
            var LA29_0 = this.input.LA(1);

            if ( (LA29_0==34) ) {
                alt29=1;
            }
            switch (alt29) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:64:4: 'clouds' '{' clouds_3+= rule_Cloud ( ',' clouds_4+= rule_Cloud )* '}'
                    string_literal69=this.match(this.input,34,AutoExpParser.FOLLOW_34_in_rule_Infrastructure484); 
                    string_literal69_tree = this.adaptor.create(string_literal69);
                    this.adaptor.addChild(root_0, string_literal69_tree);

                    char_literal70=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Infrastructure486); 
                    char_literal70_tree = this.adaptor.create(char_literal70);
                    this.adaptor.addChild(root_0, char_literal70_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Cloud_in_rule_Infrastructure490);
                    clouds_3=this.rule_Cloud();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, clouds_3.getTree());
                    if (org.antlr.lang.isNull(list_clouds_3)) list_clouds_3 = [];
                    list_clouds_3.push(clouds_3.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:64:39: ( ',' clouds_4+= rule_Cloud )*
                    loop28:
                    do {
                        var alt28=2;
                        var LA28_0 = this.input.LA(1);

                        if ( (LA28_0==12) ) {
                            alt28=1;
                        }


                        switch (alt28) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:64:40: ',' clouds_4+= rule_Cloud
                            char_literal71=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Infrastructure494); 
                            char_literal71_tree = this.adaptor.create(char_literal71);
                            this.adaptor.addChild(root_0, char_literal71_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Cloud_in_rule_Infrastructure498);
                            clouds_4=this.rule_Cloud();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, clouds_4.getTree());
                            if (org.antlr.lang.isNull(list_clouds_4)) list_clouds_4 = [];
                            list_clouds_4.push(clouds_4.getTree());



                            break;

                        default :
                            break loop28;
                        }
                    } while (true);

                    char_literal72=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Infrastructure502); 
                    char_literal72_tree = this.adaptor.create(char_literal72);
                    this.adaptor.addChild(root_0, char_literal72_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:65:3: ( 'on-finish' onfinish_5= rule_OnFinishType )?
            var alt30=2;
            var LA30_0 = this.input.LA(1);

            if ( (LA30_0==35) ) {
                alt30=1;
            }
            switch (alt30) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:65:4: 'on-finish' onfinish_5= rule_OnFinishType
                    string_literal73=this.match(this.input,35,AutoExpParser.FOLLOW_35_in_rule_Infrastructure509); 
                    string_literal73_tree = this.adaptor.create(string_literal73);
                    this.adaptor.addChild(root_0, string_literal73_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_OnFinishType_in_rule_Infrastructure513);
                    onfinish_5=this.rule_OnFinishType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, onfinish_5.getTree());


                    break;

            }

            char_literal74=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Infrastructure518); 
            char_literal74_tree = this.adaptor.create(char_literal74);
            this.adaptor.addChild(root_0, char_literal74_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_Preconditions_return: (function() {
        AutoExpParser.rule_Preconditions_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_Preconditions_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:71:1: rule_Preconditions : '{' (packages_0+= STRING ( ',' packages_1+= STRING )* )? '}' ;
    // $ANTLR start "rule_Preconditions"
    rule_Preconditions: function() {
        var retval = new AutoExpParser.rule_Preconditions_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal75 = null;
        var char_literal76 = null;
        var char_literal77 = null;
        var packages_0 = null;
        var packages_1 = null;
        var list_packages_0=null;
        var list_packages_1=null;

        var char_literal75_tree=null;
        var char_literal76_tree=null;
        var char_literal77_tree=null;
        var packages_0_tree=null;
        var packages_1_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:71:19: ( '{' (packages_0+= STRING ( ',' packages_1+= STRING )* )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:73:2: '{' (packages_0+= STRING ( ',' packages_1+= STRING )* )? '}'
            root_0 = this.adaptor.nil();

            char_literal75=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Preconditions531); 
            char_literal75_tree = this.adaptor.create(char_literal75);
            this.adaptor.addChild(root_0, char_literal75_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:74:3: (packages_0+= STRING ( ',' packages_1+= STRING )* )?
            var alt32=2;
            var LA32_0 = this.input.LA(1);

            if ( (LA32_0==STRING) ) {
                alt32=1;
            }
            switch (alt32) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:74:4: packages_0+= STRING ( ',' packages_1+= STRING )*
                    packages_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Preconditions538); 
                    packages_0_tree = this.adaptor.create(packages_0);
                    this.adaptor.addChild(root_0, packages_0_tree);

                    if (org.antlr.lang.isNull(list_packages_0)) list_packages_0 = [];
                    list_packages_0.push(packages_0);

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:74:24: ( ',' packages_1+= STRING )*
                    loop31:
                    do {
                        var alt31=2;
                        var LA31_0 = this.input.LA(1);

                        if ( (LA31_0==12) ) {
                            alt31=1;
                        }


                        switch (alt31) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:74:25: ',' packages_1+= STRING
                            char_literal76=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Preconditions542); 
                            char_literal76_tree = this.adaptor.create(char_literal76);
                            this.adaptor.addChild(root_0, char_literal76_tree);

                            packages_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Preconditions546); 
                            packages_1_tree = this.adaptor.create(packages_1);
                            this.adaptor.addChild(root_0, packages_1_tree);

                            if (org.antlr.lang.isNull(list_packages_1)) list_packages_1 = [];
                            list_packages_1.push(packages_1);



                            break;

                        default :
                            break loop31;
                        }
                    } while (true);



                    break;

            }

            char_literal77=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Preconditions553); 
            char_literal77_tree = this.adaptor.create(char_literal77);
            this.adaptor.addChild(root_0, char_literal77_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_User_return: (function() {
        AutoExpParser.rule_User_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_User_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:79:1: rule_User : 'user' '{' 'username' username_0= STRING ( 'keys' '{' keys_1+= rule_UserKey ( ',' keys_2+= rule_UserKey )* '}' )? '}' ;
    // $ANTLR start "rule_User"
    rule_User: function() {
        var retval = new AutoExpParser.rule_User_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var username_0 = null;
        var string_literal78 = null;
        var char_literal79 = null;
        var string_literal80 = null;
        var string_literal81 = null;
        var char_literal82 = null;
        var char_literal83 = null;
        var char_literal84 = null;
        var char_literal85 = null;
        var list_keys_1=null;
        var list_keys_2=null;
        var keys_1 = null;
        var keys_2 = null;
        var username_0_tree=null;
        var string_literal78_tree=null;
        var char_literal79_tree=null;
        var string_literal80_tree=null;
        var string_literal81_tree=null;
        var char_literal82_tree=null;
        var char_literal83_tree=null;
        var char_literal84_tree=null;
        var char_literal85_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:79:10: ( 'user' '{' 'username' username_0= STRING ( 'keys' '{' keys_1+= rule_UserKey ( ',' keys_2+= rule_UserKey )* '}' )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:80:2: 'user' '{' 'username' username_0= STRING ( 'keys' '{' keys_1+= rule_UserKey ( ',' keys_2+= rule_UserKey )* '}' )? '}'
            root_0 = this.adaptor.nil();

            string_literal78=this.match(this.input,36,AutoExpParser.FOLLOW_36_in_rule_User564); 
            string_literal78_tree = this.adaptor.create(string_literal78);
            this.adaptor.addChild(root_0, string_literal78_tree);

            char_literal79=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_User566); 
            char_literal79_tree = this.adaptor.create(char_literal79);
            this.adaptor.addChild(root_0, char_literal79_tree);

            string_literal80=this.match(this.input,37,AutoExpParser.FOLLOW_37_in_rule_User570); 
            string_literal80_tree = this.adaptor.create(string_literal80);
            this.adaptor.addChild(root_0, string_literal80_tree);

            username_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_User574); 
            username_0_tree = this.adaptor.create(username_0);
            this.adaptor.addChild(root_0, username_0_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:82:3: ( 'keys' '{' keys_1+= rule_UserKey ( ',' keys_2+= rule_UserKey )* '}' )?
            var alt34=2;
            var LA34_0 = this.input.LA(1);

            if ( (LA34_0==38) ) {
                alt34=1;
            }
            switch (alt34) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:82:4: 'keys' '{' keys_1+= rule_UserKey ( ',' keys_2+= rule_UserKey )* '}'
                    string_literal81=this.match(this.input,38,AutoExpParser.FOLLOW_38_in_rule_User579); 
                    string_literal81_tree = this.adaptor.create(string_literal81);
                    this.adaptor.addChild(root_0, string_literal81_tree);

                    char_literal82=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_User581); 
                    char_literal82_tree = this.adaptor.create(char_literal82);
                    this.adaptor.addChild(root_0, char_literal82_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_UserKey_in_rule_User585);
                    keys_1=this.rule_UserKey();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, keys_1.getTree());
                    if (org.antlr.lang.isNull(list_keys_1)) list_keys_1 = [];
                    list_keys_1.push(keys_1.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:82:37: ( ',' keys_2+= rule_UserKey )*
                    loop33:
                    do {
                        var alt33=2;
                        var LA33_0 = this.input.LA(1);

                        if ( (LA33_0==12) ) {
                            alt33=1;
                        }


                        switch (alt33) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:82:38: ',' keys_2+= rule_UserKey
                            char_literal83=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_User589); 
                            char_literal83_tree = this.adaptor.create(char_literal83);
                            this.adaptor.addChild(root_0, char_literal83_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_UserKey_in_rule_User593);
                            keys_2=this.rule_UserKey();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, keys_2.getTree());
                            if (org.antlr.lang.isNull(list_keys_2)) list_keys_2 = [];
                            list_keys_2.push(keys_2.getTree());



                            break;

                        default :
                            break loop33;
                        }
                    } while (true);

                    char_literal84=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_User597); 
                    char_literal84_tree = this.adaptor.create(char_literal84);
                    this.adaptor.addChild(root_0, char_literal84_tree);



                    break;

            }

            char_literal85=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_User605); 
            char_literal85_tree = this.adaptor.create(char_literal85);
            this.adaptor.addChild(root_0, char_literal85_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_UserKey_return: (function() {
        AutoExpParser.rule_UserKey_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_UserKey_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:88:1: rule_UserKey : name_0= STRING ( '{' ( 'privateKey' privatekey_1= STRING )? ( 'publicKey' publickey_2= STRING )? ( 'fingerprint' fingerprint_3= STRING )? '}' )? ;
    // $ANTLR start "rule_UserKey"
    rule_UserKey: function() {
        var retval = new AutoExpParser.rule_UserKey_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var privatekey_1 = null;
        var publickey_2 = null;
        var fingerprint_3 = null;
        var char_literal86 = null;
        var string_literal87 = null;
        var string_literal88 = null;
        var string_literal89 = null;
        var char_literal90 = null;

        var name_0_tree=null;
        var privatekey_1_tree=null;
        var publickey_2_tree=null;
        var fingerprint_3_tree=null;
        var char_literal86_tree=null;
        var string_literal87_tree=null;
        var string_literal88_tree=null;
        var string_literal89_tree=null;
        var char_literal90_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:88:13: (name_0= STRING ( '{' ( 'privateKey' privatekey_1= STRING )? ( 'publicKey' publickey_2= STRING )? ( 'fingerprint' fingerprint_3= STRING )? '}' )? )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:89:2: name_0= STRING ( '{' ( 'privateKey' privatekey_1= STRING )? ( 'publicKey' publickey_2= STRING )? ( 'fingerprint' fingerprint_3= STRING )? '}' )?
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_UserKey617); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:90:2: ( '{' ( 'privateKey' privatekey_1= STRING )? ( 'publicKey' publickey_2= STRING )? ( 'fingerprint' fingerprint_3= STRING )? '}' )?
            var alt38=2;
            var LA38_0 = this.input.LA(1);

            if ( (LA38_0==10) ) {
                alt38=1;
            }
            switch (alt38) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:90:3: '{' ( 'privateKey' privatekey_1= STRING )? ( 'publicKey' publickey_2= STRING )? ( 'fingerprint' fingerprint_3= STRING )? '}'
                    char_literal86=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_UserKey621); 
                    char_literal86_tree = this.adaptor.create(char_literal86);
                    this.adaptor.addChild(root_0, char_literal86_tree);

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:91:3: ( 'privateKey' privatekey_1= STRING )?
                    var alt35=2;
                    var LA35_0 = this.input.LA(1);

                    if ( (LA35_0==39) ) {
                        alt35=1;
                    }
                    switch (alt35) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:91:4: 'privateKey' privatekey_1= STRING
                            string_literal87=this.match(this.input,39,AutoExpParser.FOLLOW_39_in_rule_UserKey626); 
                            string_literal87_tree = this.adaptor.create(string_literal87);
                            this.adaptor.addChild(root_0, string_literal87_tree);

                            privatekey_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_UserKey630); 
                            privatekey_1_tree = this.adaptor.create(privatekey_1);
                            this.adaptor.addChild(root_0, privatekey_1_tree);



                            break;

                    }

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:92:3: ( 'publicKey' publickey_2= STRING )?
                    var alt36=2;
                    var LA36_0 = this.input.LA(1);

                    if ( (LA36_0==40) ) {
                        alt36=1;
                    }
                    switch (alt36) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:92:4: 'publicKey' publickey_2= STRING
                            string_literal88=this.match(this.input,40,AutoExpParser.FOLLOW_40_in_rule_UserKey637); 
                            string_literal88_tree = this.adaptor.create(string_literal88);
                            this.adaptor.addChild(root_0, string_literal88_tree);

                            publickey_2=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_UserKey641); 
                            publickey_2_tree = this.adaptor.create(publickey_2);
                            this.adaptor.addChild(root_0, publickey_2_tree);



                            break;

                    }

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:93:3: ( 'fingerprint' fingerprint_3= STRING )?
                    var alt37=2;
                    var LA37_0 = this.input.LA(1);

                    if ( (LA37_0==41) ) {
                        alt37=1;
                    }
                    switch (alt37) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:93:4: 'fingerprint' fingerprint_3= STRING
                            string_literal89=this.match(this.input,41,AutoExpParser.FOLLOW_41_in_rule_UserKey648); 
                            string_literal89_tree = this.adaptor.create(string_literal89);
                            this.adaptor.addChild(root_0, string_literal89_tree);

                            fingerprint_3=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_UserKey652); 
                            fingerprint_3_tree = this.adaptor.create(fingerprint_3);
                            this.adaptor.addChild(root_0, fingerprint_3_tree);



                            break;

                    }

                    char_literal90=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_UserKey657); 
                    char_literal90_tree = this.adaptor.create(char_literal90);
                    this.adaptor.addChild(root_0, char_literal90_tree);



                    break;

            }




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_Requirements_return: (function() {
        AutoExpParser.rule_Requirements_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_Requirements_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:98:1: rule_Requirements : '{' 'cpu' cpu_0= INT 'memory' memory_1= INT 'platform' platform_2= rule_PlatformType 'cost' cost_3= rule_BigDecimalType 'number-of-instances-per-cloud' instancespercloud_4= INT '}' ;
    // $ANTLR start "rule_Requirements"
    rule_Requirements: function() {
        var retval = new AutoExpParser.rule_Requirements_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var cpu_0 = null;
        var memory_1 = null;
        var instancespercloud_4 = null;
        var char_literal91 = null;
        var string_literal92 = null;
        var string_literal93 = null;
        var string_literal94 = null;
        var string_literal95 = null;
        var string_literal96 = null;
        var char_literal97 = null;
         var platform_2 = null;
         var cost_3 = null;

        var cpu_0_tree=null;
        var memory_1_tree=null;
        var instancespercloud_4_tree=null;
        var char_literal91_tree=null;
        var string_literal92_tree=null;
        var string_literal93_tree=null;
        var string_literal94_tree=null;
        var string_literal95_tree=null;
        var string_literal96_tree=null;
        var char_literal97_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:98:18: ( '{' 'cpu' cpu_0= INT 'memory' memory_1= INT 'platform' platform_2= rule_PlatformType 'cost' cost_3= rule_BigDecimalType 'number-of-instances-per-cloud' instancespercloud_4= INT '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:99:2: '{' 'cpu' cpu_0= INT 'memory' memory_1= INT 'platform' platform_2= rule_PlatformType 'cost' cost_3= rule_BigDecimalType 'number-of-instances-per-cloud' instancespercloud_4= INT '}'
            root_0 = this.adaptor.nil();

            char_literal91=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Requirements670); 
            char_literal91_tree = this.adaptor.create(char_literal91);
            this.adaptor.addChild(root_0, char_literal91_tree);

            string_literal92=this.match(this.input,42,AutoExpParser.FOLLOW_42_in_rule_Requirements673); 
            string_literal92_tree = this.adaptor.create(string_literal92);
            this.adaptor.addChild(root_0, string_literal92_tree);

            cpu_0=this.match(this.input,INT,AutoExpParser.FOLLOW_INT_in_rule_Requirements677); 
            cpu_0_tree = this.adaptor.create(cpu_0);
            this.adaptor.addChild(root_0, cpu_0_tree);

            string_literal93=this.match(this.input,43,AutoExpParser.FOLLOW_43_in_rule_Requirements680); 
            string_literal93_tree = this.adaptor.create(string_literal93);
            this.adaptor.addChild(root_0, string_literal93_tree);

            memory_1=this.match(this.input,INT,AutoExpParser.FOLLOW_INT_in_rule_Requirements684); 
            memory_1_tree = this.adaptor.create(memory_1);
            this.adaptor.addChild(root_0, memory_1_tree);

            string_literal94=this.match(this.input,44,AutoExpParser.FOLLOW_44_in_rule_Requirements687); 
            string_literal94_tree = this.adaptor.create(string_literal94);
            this.adaptor.addChild(root_0, string_literal94_tree);

            this.pushFollow(AutoExpParser.FOLLOW_rule_PlatformType_in_rule_Requirements691);
            platform_2=this.rule_PlatformType();

            this.state._fsp--;

            this.adaptor.addChild(root_0, platform_2.getTree());
            string_literal95=this.match(this.input,45,AutoExpParser.FOLLOW_45_in_rule_Requirements694); 
            string_literal95_tree = this.adaptor.create(string_literal95);
            this.adaptor.addChild(root_0, string_literal95_tree);

            this.pushFollow(AutoExpParser.FOLLOW_rule_BigDecimalType_in_rule_Requirements698);
            cost_3=this.rule_BigDecimalType();

            this.state._fsp--;

            this.adaptor.addChild(root_0, cost_3.getTree());
            string_literal96=this.match(this.input,46,AutoExpParser.FOLLOW_46_in_rule_Requirements701); 
            string_literal96_tree = this.adaptor.create(string_literal96);
            this.adaptor.addChild(root_0, string_literal96_tree);

            instancespercloud_4=this.match(this.input,INT,AutoExpParser.FOLLOW_INT_in_rule_Requirements705); 
            instancespercloud_4_tree = this.adaptor.create(instancespercloud_4);
            this.adaptor.addChild(root_0, instancespercloud_4_tree);

            char_literal97=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Requirements708); 
            char_literal97_tree = this.adaptor.create(char_literal97);
            this.adaptor.addChild(root_0, char_literal97_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_PlatformType_return: (function() {
        AutoExpParser.rule_PlatformType_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_PlatformType_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:109:1: rule_PlatformType : typename_0= ( 'LINUX' | 'WINDOWS' ) ;
    // $ANTLR start "rule_PlatformType"
    rule_PlatformType: function() {
        var retval = new AutoExpParser.rule_PlatformType_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var typename_0 = null;

        var typename_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:109:18: (typename_0= ( 'LINUX' | 'WINDOWS' ) )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:110:2: typename_0= ( 'LINUX' | 'WINDOWS' )
            root_0 = this.adaptor.nil();

            typename_0=this.input.LT(1);
            if ( (this.input.LA(1)>=47 && this.input.LA(1)<=48) ) {
                this.input.consume();
                this.adaptor.addChild(root_0, this.adaptor.create(typename_0));
                this.state.errorRecovery=false;
            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_BigDecimalType_return: (function() {
        AutoExpParser.rule_BigDecimalType_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_BigDecimalType_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:113:1: rule_BigDecimalType : INT ( '.' INT )? ;
    // $ANTLR start "rule_BigDecimalType"
    rule_BigDecimalType: function() {
        var retval = new AutoExpParser.rule_BigDecimalType_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var INT98 = null;
        var char_literal99 = null;
        var INT100 = null;

        var INT98_tree=null;
        var char_literal99_tree=null;
        var INT100_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:113:21: ( INT ( '.' INT )? )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:114:2: INT ( '.' INT )?
            root_0 = this.adaptor.nil();

            INT98=this.match(this.input,INT,AutoExpParser.FOLLOW_INT_in_rule_BigDecimalType738); 
            INT98_tree = this.adaptor.create(INT98);
            this.adaptor.addChild(root_0, INT98_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:114:6: ( '.' INT )?
            var alt39=2;
            var LA39_0 = this.input.LA(1);

            if ( (LA39_0==49) ) {
                alt39=1;
            }
            switch (alt39) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:114:7: '.' INT
                    char_literal99=this.match(this.input,49,AutoExpParser.FOLLOW_49_in_rule_BigDecimalType741); 
                    char_literal99_tree = this.adaptor.create(char_literal99);
                    this.adaptor.addChild(root_0, char_literal99_tree);

                    INT100=this.match(this.input,INT,AutoExpParser.FOLLOW_INT_in_rule_BigDecimalType743); 
                    INT100_tree = this.adaptor.create(INT100);
                    this.adaptor.addChild(root_0, INT100_tree);



                    break;

            }




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_Cloud_return: (function() {
        AutoExpParser.rule_Cloud_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_Cloud_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:118:1: rule_Cloud : name_0= STRING '{' provider_1= rule_CloudProvider accesskey_2= rule_AccessKey ( 'regions' '{' regions_3+= rule_Region ( ',' regions_4+= rule_Region )* '}' )? ( 'instanceTypes' '{' instancetypes_5+= rule_InstanceType ( ',' instancetypes_6+= rule_InstanceType )* '}' )? '}' ;
    // $ANTLR start "rule_Cloud"
    rule_Cloud: function() {
        var retval = new AutoExpParser.rule_Cloud_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var char_literal101 = null;
        var string_literal102 = null;
        var char_literal103 = null;
        var char_literal104 = null;
        var char_literal105 = null;
        var string_literal106 = null;
        var char_literal107 = null;
        var char_literal108 = null;
        var char_literal109 = null;
        var char_literal110 = null;
        var list_regions_3=null;
        var list_regions_4=null;
        var list_instancetypes_5=null;
        var list_instancetypes_6=null;
         var provider_1 = null;
         var accesskey_2 = null;
        var regions_3 = null;
        var regions_4 = null;
        var instancetypes_5 = null;
        var instancetypes_6 = null;
        var name_0_tree=null;
        var char_literal101_tree=null;
        var string_literal102_tree=null;
        var char_literal103_tree=null;
        var char_literal104_tree=null;
        var char_literal105_tree=null;
        var string_literal106_tree=null;
        var char_literal107_tree=null;
        var char_literal108_tree=null;
        var char_literal109_tree=null;
        var char_literal110_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:118:11: (name_0= STRING '{' provider_1= rule_CloudProvider accesskey_2= rule_AccessKey ( 'regions' '{' regions_3+= rule_Region ( ',' regions_4+= rule_Region )* '}' )? ( 'instanceTypes' '{' instancetypes_5+= rule_InstanceType ( ',' instancetypes_6+= rule_InstanceType )* '}' )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:119:2: name_0= STRING '{' provider_1= rule_CloudProvider accesskey_2= rule_AccessKey ( 'regions' '{' regions_3+= rule_Region ( ',' regions_4+= rule_Region )* '}' )? ( 'instanceTypes' '{' instancetypes_5+= rule_InstanceType ( ',' instancetypes_6+= rule_InstanceType )* '}' )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Cloud757); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal101=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Cloud760); 
            char_literal101_tree = this.adaptor.create(char_literal101);
            this.adaptor.addChild(root_0, char_literal101_tree);

            this.pushFollow(AutoExpParser.FOLLOW_rule_CloudProvider_in_rule_Cloud766);
            provider_1=this.rule_CloudProvider();

            this.state._fsp--;

            this.adaptor.addChild(root_0, provider_1.getTree());
            this.pushFollow(AutoExpParser.FOLLOW_rule_AccessKey_in_rule_Cloud772);
            accesskey_2=this.rule_AccessKey();

            this.state._fsp--;

            this.adaptor.addChild(root_0, accesskey_2.getTree());
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:123:2: ( 'regions' '{' regions_3+= rule_Region ( ',' regions_4+= rule_Region )* '}' )?
            var alt41=2;
            var LA41_0 = this.input.LA(1);

            if ( (LA41_0==50) ) {
                alt41=1;
            }
            switch (alt41) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:123:3: 'regions' '{' regions_3+= rule_Region ( ',' regions_4+= rule_Region )* '}'
                    string_literal102=this.match(this.input,50,AutoExpParser.FOLLOW_50_in_rule_Cloud776); 
                    string_literal102_tree = this.adaptor.create(string_literal102);
                    this.adaptor.addChild(root_0, string_literal102_tree);

                    char_literal103=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Cloud778); 
                    char_literal103_tree = this.adaptor.create(char_literal103);
                    this.adaptor.addChild(root_0, char_literal103_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Region_in_rule_Cloud782);
                    regions_3=this.rule_Region();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, regions_3.getTree());
                    if (org.antlr.lang.isNull(list_regions_3)) list_regions_3 = [];
                    list_regions_3.push(regions_3.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:123:41: ( ',' regions_4+= rule_Region )*
                    loop40:
                    do {
                        var alt40=2;
                        var LA40_0 = this.input.LA(1);

                        if ( (LA40_0==12) ) {
                            alt40=1;
                        }


                        switch (alt40) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:123:42: ',' regions_4+= rule_Region
                            char_literal104=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Cloud786); 
                            char_literal104_tree = this.adaptor.create(char_literal104);
                            this.adaptor.addChild(root_0, char_literal104_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Region_in_rule_Cloud790);
                            regions_4=this.rule_Region();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, regions_4.getTree());
                            if (org.antlr.lang.isNull(list_regions_4)) list_regions_4 = [];
                            list_regions_4.push(regions_4.getTree());



                            break;

                        default :
                            break loop40;
                        }
                    } while (true);

                    char_literal105=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Cloud793); 
                    char_literal105_tree = this.adaptor.create(char_literal105);
                    this.adaptor.addChild(root_0, char_literal105_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:124:2: ( 'instanceTypes' '{' instancetypes_5+= rule_InstanceType ( ',' instancetypes_6+= rule_InstanceType )* '}' )?
            var alt43=2;
            var LA43_0 = this.input.LA(1);

            if ( (LA43_0==51) ) {
                alt43=1;
            }
            switch (alt43) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:124:3: 'instanceTypes' '{' instancetypes_5+= rule_InstanceType ( ',' instancetypes_6+= rule_InstanceType )* '}'
                    string_literal106=this.match(this.input,51,AutoExpParser.FOLLOW_51_in_rule_Cloud799); 
                    string_literal106_tree = this.adaptor.create(string_literal106);
                    this.adaptor.addChild(root_0, string_literal106_tree);

                    char_literal107=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Cloud801); 
                    char_literal107_tree = this.adaptor.create(char_literal107);
                    this.adaptor.addChild(root_0, char_literal107_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_InstanceType_in_rule_Cloud805);
                    instancetypes_5=this.rule_InstanceType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, instancetypes_5.getTree());
                    if (org.antlr.lang.isNull(list_instancetypes_5)) list_instancetypes_5 = [];
                    list_instancetypes_5.push(instancetypes_5.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:124:59: ( ',' instancetypes_6+= rule_InstanceType )*
                    loop42:
                    do {
                        var alt42=2;
                        var LA42_0 = this.input.LA(1);

                        if ( (LA42_0==12) ) {
                            alt42=1;
                        }


                        switch (alt42) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:124:60: ',' instancetypes_6+= rule_InstanceType
                            char_literal108=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Cloud809); 
                            char_literal108_tree = this.adaptor.create(char_literal108);
                            this.adaptor.addChild(root_0, char_literal108_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_InstanceType_in_rule_Cloud813);
                            instancetypes_6=this.rule_InstanceType();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, instancetypes_6.getTree());
                            if (org.antlr.lang.isNull(list_instancetypes_6)) list_instancetypes_6 = [];
                            list_instancetypes_6.push(instancetypes_6.getTree());



                            break;

                        default :
                            break loop42;
                        }
                    } while (true);

                    char_literal109=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Cloud816); 
                    char_literal109_tree = this.adaptor.create(char_literal109);
                    this.adaptor.addChild(root_0, char_literal109_tree);



                    break;

            }

            char_literal110=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Cloud821); 
            char_literal110_tree = this.adaptor.create(char_literal110);
            this.adaptor.addChild(root_0, char_literal110_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_CloudProvider_return: (function() {
        AutoExpParser.rule_CloudProvider_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_CloudProvider_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:130:1: rule_CloudProvider : 'provider' name_0= STRING ( '{' ( 'maxResourcePerType' maxresourcepertype_1= INT )? ( 'description' description_2= STRING )? ( 'serviceClass' serviceclass_3= STRING )? '}' )? ;
    // $ANTLR start "rule_CloudProvider"
    rule_CloudProvider: function() {
        var retval = new AutoExpParser.rule_CloudProvider_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var maxresourcepertype_1 = null;
        var description_2 = null;
        var serviceclass_3 = null;
        var string_literal111 = null;
        var char_literal112 = null;
        var string_literal113 = null;
        var string_literal114 = null;
        var string_literal115 = null;
        var char_literal116 = null;

        var name_0_tree=null;
        var maxresourcepertype_1_tree=null;
        var description_2_tree=null;
        var serviceclass_3_tree=null;
        var string_literal111_tree=null;
        var char_literal112_tree=null;
        var string_literal113_tree=null;
        var string_literal114_tree=null;
        var string_literal115_tree=null;
        var char_literal116_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:130:19: ( 'provider' name_0= STRING ( '{' ( 'maxResourcePerType' maxresourcepertype_1= INT )? ( 'description' description_2= STRING )? ( 'serviceClass' serviceclass_3= STRING )? '}' )? )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:131:2: 'provider' name_0= STRING ( '{' ( 'maxResourcePerType' maxresourcepertype_1= INT )? ( 'description' description_2= STRING )? ( 'serviceClass' serviceclass_3= STRING )? '}' )?
            root_0 = this.adaptor.nil();

            string_literal111=this.match(this.input,52,AutoExpParser.FOLLOW_52_in_rule_CloudProvider833); 
            string_literal111_tree = this.adaptor.create(string_literal111);
            this.adaptor.addChild(root_0, string_literal111_tree);

            name_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_CloudProvider837); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:132:2: ( '{' ( 'maxResourcePerType' maxresourcepertype_1= INT )? ( 'description' description_2= STRING )? ( 'serviceClass' serviceclass_3= STRING )? '}' )?
            var alt47=2;
            var LA47_0 = this.input.LA(1);

            if ( (LA47_0==10) ) {
                alt47=1;
            }
            switch (alt47) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:132:3: '{' ( 'maxResourcePerType' maxresourcepertype_1= INT )? ( 'description' description_2= STRING )? ( 'serviceClass' serviceclass_3= STRING )? '}'
                    char_literal112=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_CloudProvider841); 
                    char_literal112_tree = this.adaptor.create(char_literal112);
                    this.adaptor.addChild(root_0, char_literal112_tree);

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:133:2: ( 'maxResourcePerType' maxresourcepertype_1= INT )?
                    var alt44=2;
                    var LA44_0 = this.input.LA(1);

                    if ( (LA44_0==53) ) {
                        alt44=1;
                    }
                    switch (alt44) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:133:3: 'maxResourcePerType' maxresourcepertype_1= INT
                            string_literal113=this.match(this.input,53,AutoExpParser.FOLLOW_53_in_rule_CloudProvider845); 
                            string_literal113_tree = this.adaptor.create(string_literal113);
                            this.adaptor.addChild(root_0, string_literal113_tree);

                            maxresourcepertype_1=this.match(this.input,INT,AutoExpParser.FOLLOW_INT_in_rule_CloudProvider849); 
                            maxresourcepertype_1_tree = this.adaptor.create(maxresourcepertype_1);
                            this.adaptor.addChild(root_0, maxresourcepertype_1_tree);



                            break;

                    }

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:134:2: ( 'description' description_2= STRING )?
                    var alt45=2;
                    var LA45_0 = this.input.LA(1);

                    if ( (LA45_0==14) ) {
                        alt45=1;
                    }
                    switch (alt45) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:134:3: 'description' description_2= STRING
                            string_literal114=this.match(this.input,14,AutoExpParser.FOLLOW_14_in_rule_CloudProvider857); 
                            string_literal114_tree = this.adaptor.create(string_literal114);
                            this.adaptor.addChild(root_0, string_literal114_tree);

                            description_2=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_CloudProvider861); 
                            description_2_tree = this.adaptor.create(description_2);
                            this.adaptor.addChild(root_0, description_2_tree);



                            break;

                    }

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:135:3: ( 'serviceClass' serviceclass_3= STRING )?
                    var alt46=2;
                    var LA46_0 = this.input.LA(1);

                    if ( (LA46_0==54) ) {
                        alt46=1;
                    }
                    switch (alt46) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:135:4: 'serviceClass' serviceclass_3= STRING
                            string_literal115=this.match(this.input,54,AutoExpParser.FOLLOW_54_in_rule_CloudProvider869); 
                            string_literal115_tree = this.adaptor.create(string_literal115);
                            this.adaptor.addChild(root_0, string_literal115_tree);

                            serviceclass_3=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_CloudProvider873); 
                            serviceclass_3_tree = this.adaptor.create(serviceclass_3);
                            this.adaptor.addChild(root_0, serviceclass_3_tree);



                            break;

                    }

                    char_literal116=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_CloudProvider880); 
                    char_literal116_tree = this.adaptor.create(char_literal116);
                    this.adaptor.addChild(root_0, char_literal116_tree);



                    break;

            }




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_InstanceType_return: (function() {
        AutoExpParser.rule_InstanceType_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_InstanceType_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:142:1: rule_InstanceType : name_0= STRING ( 'instances' numberofinstances_1= INT )? ;
    // $ANTLR start "rule_InstanceType"
    rule_InstanceType: function() {
        var retval = new AutoExpParser.rule_InstanceType_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var numberofinstances_1 = null;
        var string_literal117 = null;

        var name_0_tree=null;
        var numberofinstances_1_tree=null;
        var string_literal117_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:142:18: (name_0= STRING ( 'instances' numberofinstances_1= INT )? )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:144:2: name_0= STRING ( 'instances' numberofinstances_1= INT )?
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_InstanceType899); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:145:2: ( 'instances' numberofinstances_1= INT )?
            var alt48=2;
            var LA48_0 = this.input.LA(1);

            if ( (LA48_0==55) ) {
                alt48=1;
            }
            switch (alt48) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:145:3: 'instances' numberofinstances_1= INT
                    string_literal117=this.match(this.input,55,AutoExpParser.FOLLOW_55_in_rule_InstanceType903); 
                    string_literal117_tree = this.adaptor.create(string_literal117);
                    this.adaptor.addChild(root_0, string_literal117_tree);

                    numberofinstances_1=this.match(this.input,INT,AutoExpParser.FOLLOW_INT_in_rule_InstanceType907); 
                    numberofinstances_1_tree = this.adaptor.create(numberofinstances_1);
                    this.adaptor.addChild(root_0, numberofinstances_1_tree);



                    break;

            }




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_Region_return: (function() {
        AutoExpParser.rule_Region_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_Region_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:150:1: rule_Region : name_0= STRING ( '{' ( 'endpoint' endpoint_1= STRING )? ( 'status' status_2= rule_StatusType )? ( 'city' city_3= STRING )? ( 'geographicRegion' geographicregion_4= INT )? ( 'zones' '{' zones_5+= rule_Zone ( ',' zones_6+= rule_Zone )* '}' )? '}' )? ;
    // $ANTLR start "rule_Region"
    rule_Region: function() {
        var retval = new AutoExpParser.rule_Region_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var endpoint_1 = null;
        var city_3 = null;
        var geographicregion_4 = null;
        var char_literal118 = null;
        var string_literal119 = null;
        var string_literal120 = null;
        var string_literal121 = null;
        var string_literal122 = null;
        var string_literal123 = null;
        var char_literal124 = null;
        var char_literal125 = null;
        var char_literal126 = null;
        var char_literal127 = null;
        var list_zones_5=null;
        var list_zones_6=null;
         var status_2 = null;
        var zones_5 = null;
        var zones_6 = null;
        var name_0_tree=null;
        var endpoint_1_tree=null;
        var city_3_tree=null;
        var geographicregion_4_tree=null;
        var char_literal118_tree=null;
        var string_literal119_tree=null;
        var string_literal120_tree=null;
        var string_literal121_tree=null;
        var string_literal122_tree=null;
        var string_literal123_tree=null;
        var char_literal124_tree=null;
        var char_literal125_tree=null;
        var char_literal126_tree=null;
        var char_literal127_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:150:12: (name_0= STRING ( '{' ( 'endpoint' endpoint_1= STRING )? ( 'status' status_2= rule_StatusType )? ( 'city' city_3= STRING )? ( 'geographicRegion' geographicregion_4= INT )? ( 'zones' '{' zones_5+= rule_Zone ( ',' zones_6+= rule_Zone )* '}' )? '}' )? )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:151:2: name_0= STRING ( '{' ( 'endpoint' endpoint_1= STRING )? ( 'status' status_2= rule_StatusType )? ( 'city' city_3= STRING )? ( 'geographicRegion' geographicregion_4= INT )? ( 'zones' '{' zones_5+= rule_Zone ( ',' zones_6+= rule_Zone )* '}' )? '}' )?
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Region922); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:152:2: ( '{' ( 'endpoint' endpoint_1= STRING )? ( 'status' status_2= rule_StatusType )? ( 'city' city_3= STRING )? ( 'geographicRegion' geographicregion_4= INT )? ( 'zones' '{' zones_5+= rule_Zone ( ',' zones_6+= rule_Zone )* '}' )? '}' )?
            var alt55=2;
            var LA55_0 = this.input.LA(1);

            if ( (LA55_0==10) ) {
                alt55=1;
            }
            switch (alt55) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:152:3: '{' ( 'endpoint' endpoint_1= STRING )? ( 'status' status_2= rule_StatusType )? ( 'city' city_3= STRING )? ( 'geographicRegion' geographicregion_4= INT )? ( 'zones' '{' zones_5+= rule_Zone ( ',' zones_6+= rule_Zone )* '}' )? '}'
                    char_literal118=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Region926); 
                    char_literal118_tree = this.adaptor.create(char_literal118);
                    this.adaptor.addChild(root_0, char_literal118_tree);

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:153:2: ( 'endpoint' endpoint_1= STRING )?
                    var alt49=2;
                    var LA49_0 = this.input.LA(1);

                    if ( (LA49_0==56) ) {
                        alt49=1;
                    }
                    switch (alt49) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:153:3: 'endpoint' endpoint_1= STRING
                            string_literal119=this.match(this.input,56,AutoExpParser.FOLLOW_56_in_rule_Region930); 
                            string_literal119_tree = this.adaptor.create(string_literal119);
                            this.adaptor.addChild(root_0, string_literal119_tree);

                            endpoint_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Region934); 
                            endpoint_1_tree = this.adaptor.create(endpoint_1);
                            this.adaptor.addChild(root_0, endpoint_1_tree);



                            break;

                    }

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:154:2: ( 'status' status_2= rule_StatusType )?
                    var alt50=2;
                    var LA50_0 = this.input.LA(1);

                    if ( (LA50_0==57) ) {
                        alt50=1;
                    }
                    switch (alt50) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:154:3: 'status' status_2= rule_StatusType
                            string_literal120=this.match(this.input,57,AutoExpParser.FOLLOW_57_in_rule_Region940); 
                            string_literal120_tree = this.adaptor.create(string_literal120);
                            this.adaptor.addChild(root_0, string_literal120_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_StatusType_in_rule_Region944);
                            status_2=this.rule_StatusType();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, status_2.getTree());


                            break;

                    }

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:155:2: ( 'city' city_3= STRING )?
                    var alt51=2;
                    var LA51_0 = this.input.LA(1);

                    if ( (LA51_0==58) ) {
                        alt51=1;
                    }
                    switch (alt51) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:155:3: 'city' city_3= STRING
                            string_literal121=this.match(this.input,58,AutoExpParser.FOLLOW_58_in_rule_Region950); 
                            string_literal121_tree = this.adaptor.create(string_literal121);
                            this.adaptor.addChild(root_0, string_literal121_tree);

                            city_3=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Region954); 
                            city_3_tree = this.adaptor.create(city_3);
                            this.adaptor.addChild(root_0, city_3_tree);



                            break;

                    }

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:156:2: ( 'geographicRegion' geographicregion_4= INT )?
                    var alt52=2;
                    var LA52_0 = this.input.LA(1);

                    if ( (LA52_0==59) ) {
                        alt52=1;
                    }
                    switch (alt52) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:156:3: 'geographicRegion' geographicregion_4= INT
                            string_literal122=this.match(this.input,59,AutoExpParser.FOLLOW_59_in_rule_Region960); 
                            string_literal122_tree = this.adaptor.create(string_literal122);
                            this.adaptor.addChild(root_0, string_literal122_tree);

                            geographicregion_4=this.match(this.input,INT,AutoExpParser.FOLLOW_INT_in_rule_Region964); 
                            geographicregion_4_tree = this.adaptor.create(geographicregion_4);
                            this.adaptor.addChild(root_0, geographicregion_4_tree);



                            break;

                    }

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:157:2: ( 'zones' '{' zones_5+= rule_Zone ( ',' zones_6+= rule_Zone )* '}' )?
                    var alt54=2;
                    var LA54_0 = this.input.LA(1);

                    if ( (LA54_0==60) ) {
                        alt54=1;
                    }
                    switch (alt54) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:157:3: 'zones' '{' zones_5+= rule_Zone ( ',' zones_6+= rule_Zone )* '}'
                            string_literal123=this.match(this.input,60,AutoExpParser.FOLLOW_60_in_rule_Region970); 
                            string_literal123_tree = this.adaptor.create(string_literal123);
                            this.adaptor.addChild(root_0, string_literal123_tree);

                            char_literal124=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Region972); 
                            char_literal124_tree = this.adaptor.create(char_literal124);
                            this.adaptor.addChild(root_0, char_literal124_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Zone_in_rule_Region976);
                            zones_5=this.rule_Zone();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, zones_5.getTree());
                            if (org.antlr.lang.isNull(list_zones_5)) list_zones_5 = [];
                            list_zones_5.push(zones_5.getTree());

                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:157:35: ( ',' zones_6+= rule_Zone )*
                            loop53:
                            do {
                                var alt53=2;
                                var LA53_0 = this.input.LA(1);

                                if ( (LA53_0==12) ) {
                                    alt53=1;
                                }


                                switch (alt53) {
                                case 1 :
                                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:157:36: ',' zones_6+= rule_Zone
                                    char_literal125=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Region980); 
                                    char_literal125_tree = this.adaptor.create(char_literal125);
                                    this.adaptor.addChild(root_0, char_literal125_tree);

                                    this.pushFollow(AutoExpParser.FOLLOW_rule_Zone_in_rule_Region984);
                                    zones_6=this.rule_Zone();

                                    this.state._fsp--;

                                    this.adaptor.addChild(root_0, zones_6.getTree());
                                    if (org.antlr.lang.isNull(list_zones_6)) list_zones_6 = [];
                                    list_zones_6.push(zones_6.getTree());



                                    break;

                                default :
                                    break loop53;
                                }
                            } while (true);

                            char_literal126=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Region987); 
                            char_literal126_tree = this.adaptor.create(char_literal126);
                            this.adaptor.addChild(root_0, char_literal126_tree);



                            break;

                    }

                    char_literal127=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Region992); 
                    char_literal127_tree = this.adaptor.create(char_literal127);
                    this.adaptor.addChild(root_0, char_literal127_tree);



                    break;

            }




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_StatusType_return: (function() {
        AutoExpParser.rule_StatusType_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_StatusType_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:168:1: rule_StatusType : typename_0= ( 'UP' | 'DOWN' ) ;
    // $ANTLR start "rule_StatusType"
    rule_StatusType: function() {
        var retval = new AutoExpParser.rule_StatusType_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var typename_0 = null;

        var typename_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:168:16: (typename_0= ( 'UP' | 'DOWN' ) )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:169:2: typename_0= ( 'UP' | 'DOWN' )
            root_0 = this.adaptor.nil();

            typename_0=this.input.LT(1);
            if ( (this.input.LA(1)>=61 && this.input.LA(1)<=62) ) {
                this.input.consume();
                this.adaptor.addChild(root_0, this.adaptor.create(typename_0));
                this.state.errorRecovery=false;
            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_Zone_return: (function() {
        AutoExpParser.rule_Zone_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_Zone_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:173:1: rule_Zone : name_0= STRING (status_1= STRING )? ;
    // $ANTLR start "rule_Zone"
    rule_Zone: function() {
        var retval = new AutoExpParser.rule_Zone_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var status_1 = null;

        var name_0_tree=null;
        var status_1_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:173:10: (name_0= STRING (status_1= STRING )? )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:174:2: name_0= STRING (status_1= STRING )?
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Zone1033); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:175:2: (status_1= STRING )?
            var alt56=2;
            var LA56_0 = this.input.LA(1);

            if ( (LA56_0==STRING) ) {
                alt56=1;
            }
            switch (alt56) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:175:3: status_1= STRING
                    status_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Zone1039); 
                    status_1_tree = this.adaptor.create(status_1);
                    this.adaptor.addChild(root_0, status_1_tree);



                    break;

            }




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_AccessKey_return: (function() {
        AutoExpParser.rule_AccessKey_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_AccessKey_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:180:1: rule_AccessKey : 'access-key' accesskey_0= STRING 'secret-key' secretkey_1= STRING ;
    // $ANTLR start "rule_AccessKey"
    rule_AccessKey: function() {
        var retval = new AutoExpParser.rule_AccessKey_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var accesskey_0 = null;
        var secretkey_1 = null;
        var string_literal128 = null;
        var string_literal129 = null;

        var accesskey_0_tree=null;
        var secretkey_1_tree=null;
        var string_literal128_tree=null;
        var string_literal129_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:180:15: ( 'access-key' accesskey_0= STRING 'secret-key' secretkey_1= STRING )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:181:2: 'access-key' accesskey_0= STRING 'secret-key' secretkey_1= STRING
            root_0 = this.adaptor.nil();

            string_literal128=this.match(this.input,63,AutoExpParser.FOLLOW_63_in_rule_AccessKey1053); 
            string_literal128_tree = this.adaptor.create(string_literal128);
            this.adaptor.addChild(root_0, string_literal128_tree);

            accesskey_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_AccessKey1057); 
            accesskey_0_tree = this.adaptor.create(accesskey_0);
            this.adaptor.addChild(root_0, accesskey_0_tree);

            string_literal129=this.match(this.input,64,AutoExpParser.FOLLOW_64_in_rule_AccessKey1060); 
            string_literal129_tree = this.adaptor.create(string_literal129);
            this.adaptor.addChild(root_0, string_literal129_tree);

            secretkey_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_AccessKey1063); 
            secretkey_1_tree = this.adaptor.create(secretkey_1);
            this.adaptor.addChild(root_0, secretkey_1_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_OnFinishType_return: (function() {
        AutoExpParser.rule_OnFinishType_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_OnFinishType_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:193:1: rule_OnFinishType : typename_0= ( 'NONE' | 'SHUTDOWN' | 'TERMINATE' ) ;
    // $ANTLR start "rule_OnFinishType"
    rule_OnFinishType: function() {
        var retval = new AutoExpParser.rule_OnFinishType_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var typename_0 = null;

        var typename_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:193:18: (typename_0= ( 'NONE' | 'SHUTDOWN' | 'TERMINATE' ) )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:194:2: typename_0= ( 'NONE' | 'SHUTDOWN' | 'TERMINATE' )
            root_0 = this.adaptor.nil();

            typename_0=this.input.LT(1);
            if ( (this.input.LA(1)>=65 && this.input.LA(1)<=67) ) {
                this.input.consume();
                this.adaptor.addChild(root_0, this.adaptor.create(typename_0));
                this.state.errorRecovery=false;
            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_Abstract_return: (function() {
        AutoExpParser.rule_Abstract_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_Abstract_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:197:1: rule_Abstract : ( rule_Abstract_Impl | rule_SimpleAbstract | rule_StructuredAbstract );
    // $ANTLR start "rule_Abstract"
    rule_Abstract: function() {
        var retval = new AutoExpParser.rule_Abstract_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var rule_Abstract_Impl130 = null;
         var rule_SimpleAbstract131 = null;
         var rule_StructuredAbstract132 = null;


        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:197:15: ( rule_Abstract_Impl | rule_SimpleAbstract | rule_StructuredAbstract )
            var alt57=3;
            switch ( this.input.LA(1) ) {
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
                alt57=1;
                break;
            case STRING:
                alt57=2;
                break;
            case 10:
                alt57=3;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 57, 0, this.input);

                throw nvae;
            }

            switch (alt57) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:198:2: rule_Abstract_Impl
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Abstract_Impl_in_rule_Abstract1110);
                    rule_Abstract_Impl130=this.rule_Abstract_Impl();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, rule_Abstract_Impl130.getTree());


                    break;
                case 2 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:198:23: rule_SimpleAbstract
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AutoExpParser.FOLLOW_rule_SimpleAbstract_in_rule_Abstract1114);
                    rule_SimpleAbstract131=this.rule_SimpleAbstract();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, rule_SimpleAbstract131.getTree());


                    break;
                case 3 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:198:45: rule_StructuredAbstract
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AutoExpParser.FOLLOW_rule_StructuredAbstract_in_rule_Abstract1118);
                    rule_StructuredAbstract132=this.rule_StructuredAbstract();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, rule_StructuredAbstract132.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_Goal_return: (function() {
        AutoExpParser.rule_Goal_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_Goal_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:202:1: rule_Goal : ( rule_Goal_Impl | rule_SimpleGoal | rule_StructuredGoal );
    // $ANTLR start "rule_Goal"
    rule_Goal: function() {
        var retval = new AutoExpParser.rule_Goal_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var rule_Goal_Impl133 = null;
         var rule_SimpleGoal134 = null;
         var rule_StructuredGoal135 = null;


        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:202:11: ( rule_Goal_Impl | rule_SimpleGoal | rule_StructuredGoal )
            var alt58=3;
            var LA58_0 = this.input.LA(1);

            if ( (LA58_0==ID) ) {
                switch ( this.input.LA(2) ) {
                case STRING:
                    alt58=2;
                    break;
                case 10:
                    alt58=3;
                    break;
                case 12:
                case 13:
                    alt58=1;
                    break;
                default:
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 58, 1, this.input);

                    throw nvae;
                }

            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 58, 0, this.input);

                throw nvae;
            }
            switch (alt58) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:203:2: rule_Goal_Impl
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Goal_Impl_in_rule_Goal1129);
                    rule_Goal_Impl133=this.rule_Goal_Impl();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, rule_Goal_Impl133.getTree());


                    break;
                case 2 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:203:19: rule_SimpleGoal
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AutoExpParser.FOLLOW_rule_SimpleGoal_in_rule_Goal1133);
                    rule_SimpleGoal134=this.rule_SimpleGoal();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, rule_SimpleGoal134.getTree());


                    break;
                case 3 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:203:37: rule_StructuredGoal
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AutoExpParser.FOLLOW_rule_StructuredGoal_in_rule_Goal1137);
                    rule_StructuredGoal135=this.rule_StructuredGoal();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, rule_StructuredGoal135.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_ExperimentalDesign_return: (function() {
        AutoExpParser.rule_ExperimentalDesign_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_ExperimentalDesign_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:207:1: rule_ExperimentalDesign : '{' ( 'type' type_0= rule_DesignType )? 'runs' runs_1= INT ( 'Restrictions' '{' restrictions_2+= rule_Restriction ( ',' restrictions_3+= rule_Restriction )* '}' )? ( 'Context Variables' '{' contextvariables_4+= rule_ContextVariable ( ',' contextvariables_5+= rule_ContextVariable )* '}' )? '}' ;
    // $ANTLR start "rule_ExperimentalDesign"
    rule_ExperimentalDesign: function() {
        var retval = new AutoExpParser.rule_ExperimentalDesign_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var runs_1 = null;
        var char_literal136 = null;
        var string_literal137 = null;
        var string_literal138 = null;
        var string_literal139 = null;
        var char_literal140 = null;
        var char_literal141 = null;
        var char_literal142 = null;
        var string_literal143 = null;
        var char_literal144 = null;
        var char_literal145 = null;
        var char_literal146 = null;
        var char_literal147 = null;
        var list_restrictions_2=null;
        var list_restrictions_3=null;
        var list_contextvariables_4=null;
        var list_contextvariables_5=null;
         var type_0 = null;
        var restrictions_2 = null;
        var restrictions_3 = null;
        var contextvariables_4 = null;
        var contextvariables_5 = null;
        var runs_1_tree=null;
        var char_literal136_tree=null;
        var string_literal137_tree=null;
        var string_literal138_tree=null;
        var string_literal139_tree=null;
        var char_literal140_tree=null;
        var char_literal141_tree=null;
        var char_literal142_tree=null;
        var string_literal143_tree=null;
        var char_literal144_tree=null;
        var char_literal145_tree=null;
        var char_literal146_tree=null;
        var char_literal147_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:207:25: ( '{' ( 'type' type_0= rule_DesignType )? 'runs' runs_1= INT ( 'Restrictions' '{' restrictions_2+= rule_Restriction ( ',' restrictions_3+= rule_Restriction )* '}' )? ( 'Context Variables' '{' contextvariables_4+= rule_ContextVariable ( ',' contextvariables_5+= rule_ContextVariable )* '}' )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:208:2: '{' ( 'type' type_0= rule_DesignType )? 'runs' runs_1= INT ( 'Restrictions' '{' restrictions_2+= rule_Restriction ( ',' restrictions_3+= rule_Restriction )* '}' )? ( 'Context Variables' '{' contextvariables_4+= rule_ContextVariable ( ',' contextvariables_5+= rule_ContextVariable )* '}' )? '}'
            root_0 = this.adaptor.nil();

            char_literal136=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ExperimentalDesign1148); 
            char_literal136_tree = this.adaptor.create(char_literal136);
            this.adaptor.addChild(root_0, char_literal136_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:209:2: ( 'type' type_0= rule_DesignType )?
            var alt59=2;
            var LA59_0 = this.input.LA(1);

            if ( (LA59_0==68) ) {
                alt59=1;
            }
            switch (alt59) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:209:3: 'type' type_0= rule_DesignType
                    string_literal137=this.match(this.input,68,AutoExpParser.FOLLOW_68_in_rule_ExperimentalDesign1152); 
                    string_literal137_tree = this.adaptor.create(string_literal137);
                    this.adaptor.addChild(root_0, string_literal137_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_DesignType_in_rule_ExperimentalDesign1156);
                    type_0=this.rule_DesignType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, type_0.getTree());


                    break;

            }

            string_literal138=this.match(this.input,69,AutoExpParser.FOLLOW_69_in_rule_ExperimentalDesign1161); 
            string_literal138_tree = this.adaptor.create(string_literal138);
            this.adaptor.addChild(root_0, string_literal138_tree);

            runs_1=this.match(this.input,INT,AutoExpParser.FOLLOW_INT_in_rule_ExperimentalDesign1165); 
            runs_1_tree = this.adaptor.create(runs_1);
            this.adaptor.addChild(root_0, runs_1_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:212:2: ( 'Restrictions' '{' restrictions_2+= rule_Restriction ( ',' restrictions_3+= rule_Restriction )* '}' )?
            var alt61=2;
            var LA61_0 = this.input.LA(1);

            if ( (LA61_0==70) ) {
                alt61=1;
            }
            switch (alt61) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:212:3: 'Restrictions' '{' restrictions_2+= rule_Restriction ( ',' restrictions_3+= rule_Restriction )* '}'
                    string_literal139=this.match(this.input,70,AutoExpParser.FOLLOW_70_in_rule_ExperimentalDesign1171); 
                    string_literal139_tree = this.adaptor.create(string_literal139);
                    this.adaptor.addChild(root_0, string_literal139_tree);

                    char_literal140=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ExperimentalDesign1173); 
                    char_literal140_tree = this.adaptor.create(char_literal140);
                    this.adaptor.addChild(root_0, char_literal140_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Restriction_in_rule_ExperimentalDesign1177);
                    restrictions_2=this.rule_Restriction();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, restrictions_2.getTree());
                    if (org.antlr.lang.isNull(list_restrictions_2)) list_restrictions_2 = [];
                    list_restrictions_2.push(restrictions_2.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:212:55: ( ',' restrictions_3+= rule_Restriction )*
                    loop60:
                    do {
                        var alt60=2;
                        var LA60_0 = this.input.LA(1);

                        if ( (LA60_0==12) ) {
                            alt60=1;
                        }


                        switch (alt60) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:212:56: ',' restrictions_3+= rule_Restriction
                            char_literal141=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_ExperimentalDesign1180); 
                            char_literal141_tree = this.adaptor.create(char_literal141);
                            this.adaptor.addChild(root_0, char_literal141_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Restriction_in_rule_ExperimentalDesign1184);
                            restrictions_3=this.rule_Restriction();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, restrictions_3.getTree());
                            if (org.antlr.lang.isNull(list_restrictions_3)) list_restrictions_3 = [];
                            list_restrictions_3.push(restrictions_3.getTree());



                            break;

                        default :
                            break loop60;
                        }
                    } while (true);

                    char_literal142=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ExperimentalDesign1188); 
                    char_literal142_tree = this.adaptor.create(char_literal142);
                    this.adaptor.addChild(root_0, char_literal142_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:214:2: ( 'Context Variables' '{' contextvariables_4+= rule_ContextVariable ( ',' contextvariables_5+= rule_ContextVariable )* '}' )?
            var alt63=2;
            var LA63_0 = this.input.LA(1);

            if ( (LA63_0==71) ) {
                alt63=1;
            }
            switch (alt63) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:214:3: 'Context Variables' '{' contextvariables_4+= rule_ContextVariable ( ',' contextvariables_5+= rule_ContextVariable )* '}'
                    string_literal143=this.match(this.input,71,AutoExpParser.FOLLOW_71_in_rule_ExperimentalDesign1196); 
                    string_literal143_tree = this.adaptor.create(string_literal143);
                    this.adaptor.addChild(root_0, string_literal143_tree);

                    char_literal144=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ExperimentalDesign1198); 
                    char_literal144_tree = this.adaptor.create(char_literal144);
                    this.adaptor.addChild(root_0, char_literal144_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_ContextVariable_in_rule_ExperimentalDesign1202);
                    contextvariables_4=this.rule_ContextVariable();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, contextvariables_4.getTree());
                    if (org.antlr.lang.isNull(list_contextvariables_4)) list_contextvariables_4 = [];
                    list_contextvariables_4.push(contextvariables_4.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:214:68: ( ',' contextvariables_5+= rule_ContextVariable )*
                    loop62:
                    do {
                        var alt62=2;
                        var LA62_0 = this.input.LA(1);

                        if ( (LA62_0==12) ) {
                            alt62=1;
                        }


                        switch (alt62) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:214:69: ',' contextvariables_5+= rule_ContextVariable
                            char_literal145=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_ExperimentalDesign1205); 
                            char_literal145_tree = this.adaptor.create(char_literal145);
                            this.adaptor.addChild(root_0, char_literal145_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_ContextVariable_in_rule_ExperimentalDesign1209);
                            contextvariables_5=this.rule_ContextVariable();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, contextvariables_5.getTree());
                            if (org.antlr.lang.isNull(list_contextvariables_5)) list_contextvariables_5 = [];
                            list_contextvariables_5.push(contextvariables_5.getTree());



                            break;

                        default :
                            break loop62;
                        }
                    } while (true);

                    char_literal146=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ExperimentalDesign1213); 
                    char_literal146_tree = this.adaptor.create(char_literal146);
                    this.adaptor.addChild(root_0, char_literal146_tree);



                    break;

            }

            char_literal147=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ExperimentalDesign1218); 
            char_literal147_tree = this.adaptor.create(char_literal147);
            this.adaptor.addChild(root_0, char_literal147_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_Restriction_return: (function() {
        AutoExpParser.rule_Restriction_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_Restriction_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:219:1: rule_Restriction : treatment_0= ID 'objects' '{' objects_1+= ID ( ',' objects_2+= ID )* '}' ;
    // $ANTLR start "rule_Restriction"
    rule_Restriction: function() {
        var retval = new AutoExpParser.rule_Restriction_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var treatment_0 = null;
        var string_literal148 = null;
        var char_literal149 = null;
        var char_literal150 = null;
        var char_literal151 = null;
        var objects_1 = null;
        var objects_2 = null;
        var list_objects_1=null;
        var list_objects_2=null;

        var treatment_0_tree=null;
        var string_literal148_tree=null;
        var char_literal149_tree=null;
        var char_literal150_tree=null;
        var char_literal151_tree=null;
        var objects_1_tree=null;
        var objects_2_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:219:18: (treatment_0= ID 'objects' '{' objects_1+= ID ( ',' objects_2+= ID )* '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:220:2: treatment_0= ID 'objects' '{' objects_1+= ID ( ',' objects_2+= ID )* '}'
            root_0 = this.adaptor.nil();

            treatment_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Restriction1231); 
            treatment_0_tree = this.adaptor.create(treatment_0);
            this.adaptor.addChild(root_0, treatment_0_tree);

            string_literal148=this.match(this.input,72,AutoExpParser.FOLLOW_72_in_rule_Restriction1233); 
            string_literal148_tree = this.adaptor.create(string_literal148);
            this.adaptor.addChild(root_0, string_literal148_tree);

            char_literal149=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Restriction1235); 
            char_literal149_tree = this.adaptor.create(char_literal149);
            this.adaptor.addChild(root_0, char_literal149_tree);

            objects_1=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Restriction1239); 
            objects_1_tree = this.adaptor.create(objects_1);
            this.adaptor.addChild(root_0, objects_1_tree);

            if (org.antlr.lang.isNull(list_objects_1)) list_objects_1 = [];
            list_objects_1.push(objects_1);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:220:45: ( ',' objects_2+= ID )*
            loop64:
            do {
                var alt64=2;
                var LA64_0 = this.input.LA(1);

                if ( (LA64_0==12) ) {
                    alt64=1;
                }


                switch (alt64) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:220:46: ',' objects_2+= ID
                    char_literal150=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Restriction1242); 
                    char_literal150_tree = this.adaptor.create(char_literal150);
                    this.adaptor.addChild(root_0, char_literal150_tree);

                    objects_2=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Restriction1246); 
                    objects_2_tree = this.adaptor.create(objects_2);
                    this.adaptor.addChild(root_0, objects_2_tree);

                    if (org.antlr.lang.isNull(list_objects_2)) list_objects_2 = [];
                    list_objects_2.push(objects_2);



                    break;

                default :
                    break loop64;
                }
            } while (true);

            char_literal151=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Restriction1250); 
            char_literal151_tree = this.adaptor.create(char_literal151);
            this.adaptor.addChild(root_0, char_literal151_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_Execution_return: (function() {
        AutoExpParser.rule_Execution_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_Execution_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:225:1: rule_Execution : name_0= ID '{' ( 'command' cmd_1= STRING )? ( 'timeout' timeout_2= rule_BigDecimalType )? ( 'preconditions' preconditions_3= rule_Preconditions )? ( 'result' result_4= rule_File )? ( 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}' )? ( 'preprocessing' '{' preprocessingexecutions_7+= rule_Execution ( ',' preprocessingexecutions_8+= rule_Execution )* '}' )? ( 'postprocessing' '{' postprocessingexecutions_9+= rule_Execution ( ',' postprocessingexecutions_10+= rule_Execution )* '}' )? '}' ;
    // $ANTLR start "rule_Execution"
    rule_Execution: function() {
        var retval = new AutoExpParser.rule_Execution_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var cmd_1 = null;
        var char_literal152 = null;
        var string_literal153 = null;
        var string_literal154 = null;
        var string_literal155 = null;
        var string_literal156 = null;
        var string_literal157 = null;
        var char_literal158 = null;
        var char_literal159 = null;
        var char_literal160 = null;
        var string_literal161 = null;
        var char_literal162 = null;
        var char_literal163 = null;
        var char_literal164 = null;
        var string_literal165 = null;
        var char_literal166 = null;
        var char_literal167 = null;
        var char_literal168 = null;
        var char_literal169 = null;
        var list_files_5=null;
        var list_files_6=null;
        var list_preprocessingexecutions_7=null;
        var list_preprocessingexecutions_8=null;
        var list_postprocessingexecutions_9=null;
        var list_postprocessingexecutions_10=null;
         var timeout_2 = null;
         var preconditions_3 = null;
         var result_4 = null;
        var files_5 = null;
        var files_6 = null;
        var preprocessingexecutions_7 = null;
        var preprocessingexecutions_8 = null;
        var postprocessingexecutions_9 = null;
        var postprocessingexecutions_10 = null;
        var name_0_tree=null;
        var cmd_1_tree=null;
        var char_literal152_tree=null;
        var string_literal153_tree=null;
        var string_literal154_tree=null;
        var string_literal155_tree=null;
        var string_literal156_tree=null;
        var string_literal157_tree=null;
        var char_literal158_tree=null;
        var char_literal159_tree=null;
        var char_literal160_tree=null;
        var string_literal161_tree=null;
        var char_literal162_tree=null;
        var char_literal163_tree=null;
        var char_literal164_tree=null;
        var string_literal165_tree=null;
        var char_literal166_tree=null;
        var char_literal167_tree=null;
        var char_literal168_tree=null;
        var char_literal169_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:225:16: (name_0= ID '{' ( 'command' cmd_1= STRING )? ( 'timeout' timeout_2= rule_BigDecimalType )? ( 'preconditions' preconditions_3= rule_Preconditions )? ( 'result' result_4= rule_File )? ( 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}' )? ( 'preprocessing' '{' preprocessingexecutions_7+= rule_Execution ( ',' preprocessingexecutions_8+= rule_Execution )* '}' )? ( 'postprocessing' '{' postprocessingexecutions_9+= rule_Execution ( ',' postprocessingexecutions_10+= rule_Execution )* '}' )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:226:2: name_0= ID '{' ( 'command' cmd_1= STRING )? ( 'timeout' timeout_2= rule_BigDecimalType )? ( 'preconditions' preconditions_3= rule_Preconditions )? ( 'result' result_4= rule_File )? ( 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}' )? ( 'preprocessing' '{' preprocessingexecutions_7+= rule_Execution ( ',' preprocessingexecutions_8+= rule_Execution )* '}' )? ( 'postprocessing' '{' postprocessingexecutions_9+= rule_Execution ( ',' postprocessingexecutions_10+= rule_Execution )* '}' )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Execution1265); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal152=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Execution1268); 
            char_literal152_tree = this.adaptor.create(char_literal152);
            this.adaptor.addChild(root_0, char_literal152_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:228:2: ( 'command' cmd_1= STRING )?
            var alt65=2;
            var LA65_0 = this.input.LA(1);

            if ( (LA65_0==73) ) {
                alt65=1;
            }
            switch (alt65) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:228:3: 'command' cmd_1= STRING
                    string_literal153=this.match(this.input,73,AutoExpParser.FOLLOW_73_in_rule_Execution1272); 
                    string_literal153_tree = this.adaptor.create(string_literal153);
                    this.adaptor.addChild(root_0, string_literal153_tree);

                    cmd_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Execution1276); 
                    cmd_1_tree = this.adaptor.create(cmd_1);
                    this.adaptor.addChild(root_0, cmd_1_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:229:2: ( 'timeout' timeout_2= rule_BigDecimalType )?
            var alt66=2;
            var LA66_0 = this.input.LA(1);

            if ( (LA66_0==74) ) {
                alt66=1;
            }
            switch (alt66) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:229:3: 'timeout' timeout_2= rule_BigDecimalType
                    string_literal154=this.match(this.input,74,AutoExpParser.FOLLOW_74_in_rule_Execution1282); 
                    string_literal154_tree = this.adaptor.create(string_literal154);
                    this.adaptor.addChild(root_0, string_literal154_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_BigDecimalType_in_rule_Execution1286);
                    timeout_2=this.rule_BigDecimalType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, timeout_2.getTree());


                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:230:2: ( 'preconditions' preconditions_3= rule_Preconditions )?
            var alt67=2;
            var LA67_0 = this.input.LA(1);

            if ( (LA67_0==33) ) {
                alt67=1;
            }
            switch (alt67) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:230:3: 'preconditions' preconditions_3= rule_Preconditions
                    string_literal155=this.match(this.input,33,AutoExpParser.FOLLOW_33_in_rule_Execution1292); 
                    string_literal155_tree = this.adaptor.create(string_literal155);
                    this.adaptor.addChild(root_0, string_literal155_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Preconditions_in_rule_Execution1296);
                    preconditions_3=this.rule_Preconditions();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, preconditions_3.getTree());


                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:231:2: ( 'result' result_4= rule_File )?
            var alt68=2;
            var LA68_0 = this.input.LA(1);

            if ( (LA68_0==75) ) {
                alt68=1;
            }
            switch (alt68) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:231:3: 'result' result_4= rule_File
                    string_literal156=this.match(this.input,75,AutoExpParser.FOLLOW_75_in_rule_Execution1302); 
                    string_literal156_tree = this.adaptor.create(string_literal156);
                    this.adaptor.addChild(root_0, string_literal156_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_File_in_rule_Execution1306);
                    result_4=this.rule_File();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, result_4.getTree());


                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:232:2: ( 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}' )?
            var alt70=2;
            var LA70_0 = this.input.LA(1);

            if ( (LA70_0==76) ) {
                alt70=1;
            }
            switch (alt70) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:232:3: 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}'
                    string_literal157=this.match(this.input,76,AutoExpParser.FOLLOW_76_in_rule_Execution1312); 
                    string_literal157_tree = this.adaptor.create(string_literal157);
                    this.adaptor.addChild(root_0, string_literal157_tree);

                    char_literal158=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Execution1314); 
                    char_literal158_tree = this.adaptor.create(char_literal158);
                    this.adaptor.addChild(root_0, char_literal158_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_File_in_rule_Execution1318);
                    files_5=this.rule_File();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, files_5.getTree());
                    if (org.antlr.lang.isNull(list_files_5)) list_files_5 = [];
                    list_files_5.push(files_5.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:232:34: ( ',' files_6+= rule_File )*
                    loop69:
                    do {
                        var alt69=2;
                        var LA69_0 = this.input.LA(1);

                        if ( (LA69_0==12) ) {
                            alt69=1;
                        }


                        switch (alt69) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:232:35: ',' files_6+= rule_File
                            char_literal159=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Execution1321); 
                            char_literal159_tree = this.adaptor.create(char_literal159);
                            this.adaptor.addChild(root_0, char_literal159_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_File_in_rule_Execution1325);
                            files_6=this.rule_File();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, files_6.getTree());
                            if (org.antlr.lang.isNull(list_files_6)) list_files_6 = [];
                            list_files_6.push(files_6.getTree());



                            break;

                        default :
                            break loop69;
                        }
                    } while (true);

                    char_literal160=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Execution1329); 
                    char_literal160_tree = this.adaptor.create(char_literal160);
                    this.adaptor.addChild(root_0, char_literal160_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:233:2: ( 'preprocessing' '{' preprocessingexecutions_7+= rule_Execution ( ',' preprocessingexecutions_8+= rule_Execution )* '}' )?
            var alt72=2;
            var LA72_0 = this.input.LA(1);

            if ( (LA72_0==77) ) {
                alt72=1;
            }
            switch (alt72) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:233:3: 'preprocessing' '{' preprocessingexecutions_7+= rule_Execution ( ',' preprocessingexecutions_8+= rule_Execution )* '}'
                    string_literal161=this.match(this.input,77,AutoExpParser.FOLLOW_77_in_rule_Execution1335); 
                    string_literal161_tree = this.adaptor.create(string_literal161);
                    this.adaptor.addChild(root_0, string_literal161_tree);

                    char_literal162=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Execution1337); 
                    char_literal162_tree = this.adaptor.create(char_literal162);
                    this.adaptor.addChild(root_0, char_literal162_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Execution_in_rule_Execution1341);
                    preprocessingexecutions_7=this.rule_Execution();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, preprocessingexecutions_7.getTree());
                    if (org.antlr.lang.isNull(list_preprocessingexecutions_7)) list_preprocessingexecutions_7 = [];
                    list_preprocessingexecutions_7.push(preprocessingexecutions_7.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:233:65: ( ',' preprocessingexecutions_8+= rule_Execution )*
                    loop71:
                    do {
                        var alt71=2;
                        var LA71_0 = this.input.LA(1);

                        if ( (LA71_0==12) ) {
                            alt71=1;
                        }


                        switch (alt71) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:233:66: ',' preprocessingexecutions_8+= rule_Execution
                            char_literal163=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Execution1344); 
                            char_literal163_tree = this.adaptor.create(char_literal163);
                            this.adaptor.addChild(root_0, char_literal163_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Execution_in_rule_Execution1348);
                            preprocessingexecutions_8=this.rule_Execution();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, preprocessingexecutions_8.getTree());
                            if (org.antlr.lang.isNull(list_preprocessingexecutions_8)) list_preprocessingexecutions_8 = [];
                            list_preprocessingexecutions_8.push(preprocessingexecutions_8.getTree());



                            break;

                        default :
                            break loop71;
                        }
                    } while (true);

                    char_literal164=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Execution1352); 
                    char_literal164_tree = this.adaptor.create(char_literal164);
                    this.adaptor.addChild(root_0, char_literal164_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:234:2: ( 'postprocessing' '{' postprocessingexecutions_9+= rule_Execution ( ',' postprocessingexecutions_10+= rule_Execution )* '}' )?
            var alt74=2;
            var LA74_0 = this.input.LA(1);

            if ( (LA74_0==78) ) {
                alt74=1;
            }
            switch (alt74) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:234:3: 'postprocessing' '{' postprocessingexecutions_9+= rule_Execution ( ',' postprocessingexecutions_10+= rule_Execution )* '}'
                    string_literal165=this.match(this.input,78,AutoExpParser.FOLLOW_78_in_rule_Execution1358); 
                    string_literal165_tree = this.adaptor.create(string_literal165);
                    this.adaptor.addChild(root_0, string_literal165_tree);

                    char_literal166=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Execution1360); 
                    char_literal166_tree = this.adaptor.create(char_literal166);
                    this.adaptor.addChild(root_0, char_literal166_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Execution_in_rule_Execution1364);
                    postprocessingexecutions_9=this.rule_Execution();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, postprocessingexecutions_9.getTree());
                    if (org.antlr.lang.isNull(list_postprocessingexecutions_9)) list_postprocessingexecutions_9 = [];
                    list_postprocessingexecutions_9.push(postprocessingexecutions_9.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:234:67: ( ',' postprocessingexecutions_10+= rule_Execution )*
                    loop73:
                    do {
                        var alt73=2;
                        var LA73_0 = this.input.LA(1);

                        if ( (LA73_0==12) ) {
                            alt73=1;
                        }


                        switch (alt73) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:234:68: ',' postprocessingexecutions_10+= rule_Execution
                            char_literal167=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Execution1367); 
                            char_literal167_tree = this.adaptor.create(char_literal167);
                            this.adaptor.addChild(root_0, char_literal167_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Execution_in_rule_Execution1371);
                            postprocessingexecutions_10=this.rule_Execution();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, postprocessingexecutions_10.getTree());
                            if (org.antlr.lang.isNull(list_postprocessingexecutions_10)) list_postprocessingexecutions_10 = [];
                            list_postprocessingexecutions_10.push(postprocessingexecutions_10.getTree());



                            break;

                        default :
                            break loop73;
                        }
                    } while (true);

                    char_literal168=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Execution1375); 
                    char_literal168_tree = this.adaptor.create(char_literal168);
                    this.adaptor.addChild(root_0, char_literal168_tree);



                    break;

            }

            char_literal169=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Execution1380); 
            char_literal169_tree = this.adaptor.create(char_literal169);
            this.adaptor.addChild(root_0, char_literal169_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_Analysis_return: (function() {
        AutoExpParser.rule_Analysis_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_Analysis_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:239:1: rule_Analysis : name_0= ID '{' ( 'significance' significancelevel_1= rule_BigDecimalType )? '}' ;
    // $ANTLR start "rule_Analysis"
    rule_Analysis: function() {
        var retval = new AutoExpParser.rule_Analysis_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var char_literal170 = null;
        var string_literal171 = null;
        var char_literal172 = null;
         var significancelevel_1 = null;

        var name_0_tree=null;
        var char_literal170_tree=null;
        var string_literal171_tree=null;
        var char_literal172_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:239:15: (name_0= ID '{' ( 'significance' significancelevel_1= rule_BigDecimalType )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:241:2: name_0= ID '{' ( 'significance' significancelevel_1= rule_BigDecimalType )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Analysis1395); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal170=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Analysis1398); 
            char_literal170_tree = this.adaptor.create(char_literal170);
            this.adaptor.addChild(root_0, char_literal170_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:243:2: ( 'significance' significancelevel_1= rule_BigDecimalType )?
            var alt75=2;
            var LA75_0 = this.input.LA(1);

            if ( (LA75_0==79) ) {
                alt75=1;
            }
            switch (alt75) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:243:3: 'significance' significancelevel_1= rule_BigDecimalType
                    string_literal171=this.match(this.input,79,AutoExpParser.FOLLOW_79_in_rule_Analysis1402); 
                    string_literal171_tree = this.adaptor.create(string_literal171);
                    this.adaptor.addChild(root_0, string_literal171_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_BigDecimalType_in_rule_Analysis1406);
                    significancelevel_1=this.rule_BigDecimalType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, significancelevel_1.getTree());


                    break;

            }

            char_literal172=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Analysis1411); 
            char_literal172_tree = this.adaptor.create(char_literal172);
            this.adaptor.addChild(root_0, char_literal172_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_ExperimentalObject_return: (function() {
        AutoExpParser.rule_ExperimentalObject_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_ExperimentalObject_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:248:1: rule_ExperimentalObject : name_0= ID '{' 'description' description_1= STRING ( 'value' value_2= STRING )? ( 'group' objectgroup_3= ID )? ( 'parameters' '{' parameters_4+= rule_Parameter ( ',' parameters_5+= rule_Parameter )* '}' )? ( 'files' '{' files_6+= rule_File ( ',' files_7+= rule_File )* '}' )? '}' ;
    // $ANTLR start "rule_ExperimentalObject"
    rule_ExperimentalObject: function() {
        var retval = new AutoExpParser.rule_ExperimentalObject_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var description_1 = null;
        var value_2 = null;
        var objectgroup_3 = null;
        var char_literal173 = null;
        var string_literal174 = null;
        var string_literal175 = null;
        var string_literal176 = null;
        var string_literal177 = null;
        var char_literal178 = null;
        var char_literal179 = null;
        var char_literal180 = null;
        var string_literal181 = null;
        var char_literal182 = null;
        var char_literal183 = null;
        var char_literal184 = null;
        var char_literal185 = null;
        var list_parameters_4=null;
        var list_parameters_5=null;
        var list_files_6=null;
        var list_files_7=null;
        var parameters_4 = null;
        var parameters_5 = null;
        var files_6 = null;
        var files_7 = null;
        var name_0_tree=null;
        var description_1_tree=null;
        var value_2_tree=null;
        var objectgroup_3_tree=null;
        var char_literal173_tree=null;
        var string_literal174_tree=null;
        var string_literal175_tree=null;
        var string_literal176_tree=null;
        var string_literal177_tree=null;
        var char_literal178_tree=null;
        var char_literal179_tree=null;
        var char_literal180_tree=null;
        var string_literal181_tree=null;
        var char_literal182_tree=null;
        var char_literal183_tree=null;
        var char_literal184_tree=null;
        var char_literal185_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:248:25: (name_0= ID '{' 'description' description_1= STRING ( 'value' value_2= STRING )? ( 'group' objectgroup_3= ID )? ( 'parameters' '{' parameters_4+= rule_Parameter ( ',' parameters_5+= rule_Parameter )* '}' )? ( 'files' '{' files_6+= rule_File ( ',' files_7+= rule_File )* '}' )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:250:2: name_0= ID '{' 'description' description_1= STRING ( 'value' value_2= STRING )? ( 'group' objectgroup_3= ID )? ( 'parameters' '{' parameters_4+= rule_Parameter ( ',' parameters_5+= rule_Parameter )* '}' )? ( 'files' '{' files_6+= rule_File ( ',' files_7+= rule_File )* '}' )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ExperimentalObject1426); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal173=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ExperimentalObject1429); 
            char_literal173_tree = this.adaptor.create(char_literal173);
            this.adaptor.addChild(root_0, char_literal173_tree);

            string_literal174=this.match(this.input,14,AutoExpParser.FOLLOW_14_in_rule_ExperimentalObject1432); 
            string_literal174_tree = this.adaptor.create(string_literal174);
            this.adaptor.addChild(root_0, string_literal174_tree);

            description_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_ExperimentalObject1436); 
            description_1_tree = this.adaptor.create(description_1);
            this.adaptor.addChild(root_0, description_1_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:253:2: ( 'value' value_2= STRING )?
            var alt76=2;
            var LA76_0 = this.input.LA(1);

            if ( (LA76_0==80) ) {
                alt76=1;
            }
            switch (alt76) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:253:3: 'value' value_2= STRING
                    string_literal175=this.match(this.input,80,AutoExpParser.FOLLOW_80_in_rule_ExperimentalObject1440); 
                    string_literal175_tree = this.adaptor.create(string_literal175);
                    this.adaptor.addChild(root_0, string_literal175_tree);

                    value_2=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_ExperimentalObject1444); 
                    value_2_tree = this.adaptor.create(value_2);
                    this.adaptor.addChild(root_0, value_2_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:254:2: ( 'group' objectgroup_3= ID )?
            var alt77=2;
            var LA77_0 = this.input.LA(1);

            if ( (LA77_0==81) ) {
                alt77=1;
            }
            switch (alt77) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:254:3: 'group' objectgroup_3= ID
                    string_literal176=this.match(this.input,81,AutoExpParser.FOLLOW_81_in_rule_ExperimentalObject1450); 
                    string_literal176_tree = this.adaptor.create(string_literal176);
                    this.adaptor.addChild(root_0, string_literal176_tree);

                    objectgroup_3=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ExperimentalObject1454); 
                    objectgroup_3_tree = this.adaptor.create(objectgroup_3);
                    this.adaptor.addChild(root_0, objectgroup_3_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:255:2: ( 'parameters' '{' parameters_4+= rule_Parameter ( ',' parameters_5+= rule_Parameter )* '}' )?
            var alt79=2;
            var LA79_0 = this.input.LA(1);

            if ( (LA79_0==82) ) {
                alt79=1;
            }
            switch (alt79) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:255:3: 'parameters' '{' parameters_4+= rule_Parameter ( ',' parameters_5+= rule_Parameter )* '}'
                    string_literal177=this.match(this.input,82,AutoExpParser.FOLLOW_82_in_rule_ExperimentalObject1460); 
                    string_literal177_tree = this.adaptor.create(string_literal177);
                    this.adaptor.addChild(root_0, string_literal177_tree);

                    char_literal178=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ExperimentalObject1462); 
                    char_literal178_tree = this.adaptor.create(char_literal178);
                    this.adaptor.addChild(root_0, char_literal178_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Parameter_in_rule_ExperimentalObject1466);
                    parameters_4=this.rule_Parameter();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, parameters_4.getTree());
                    if (org.antlr.lang.isNull(list_parameters_4)) list_parameters_4 = [];
                    list_parameters_4.push(parameters_4.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:255:49: ( ',' parameters_5+= rule_Parameter )*
                    loop78:
                    do {
                        var alt78=2;
                        var LA78_0 = this.input.LA(1);

                        if ( (LA78_0==12) ) {
                            alt78=1;
                        }


                        switch (alt78) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:255:50: ',' parameters_5+= rule_Parameter
                            char_literal179=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_ExperimentalObject1469); 
                            char_literal179_tree = this.adaptor.create(char_literal179);
                            this.adaptor.addChild(root_0, char_literal179_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Parameter_in_rule_ExperimentalObject1473);
                            parameters_5=this.rule_Parameter();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, parameters_5.getTree());
                            if (org.antlr.lang.isNull(list_parameters_5)) list_parameters_5 = [];
                            list_parameters_5.push(parameters_5.getTree());



                            break;

                        default :
                            break loop78;
                        }
                    } while (true);

                    char_literal180=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ExperimentalObject1477); 
                    char_literal180_tree = this.adaptor.create(char_literal180);
                    this.adaptor.addChild(root_0, char_literal180_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:256:2: ( 'files' '{' files_6+= rule_File ( ',' files_7+= rule_File )* '}' )?
            var alt81=2;
            var LA81_0 = this.input.LA(1);

            if ( (LA81_0==76) ) {
                alt81=1;
            }
            switch (alt81) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:256:3: 'files' '{' files_6+= rule_File ( ',' files_7+= rule_File )* '}'
                    string_literal181=this.match(this.input,76,AutoExpParser.FOLLOW_76_in_rule_ExperimentalObject1483); 
                    string_literal181_tree = this.adaptor.create(string_literal181);
                    this.adaptor.addChild(root_0, string_literal181_tree);

                    char_literal182=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ExperimentalObject1485); 
                    char_literal182_tree = this.adaptor.create(char_literal182);
                    this.adaptor.addChild(root_0, char_literal182_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_File_in_rule_ExperimentalObject1489);
                    files_6=this.rule_File();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, files_6.getTree());
                    if (org.antlr.lang.isNull(list_files_6)) list_files_6 = [];
                    list_files_6.push(files_6.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:256:34: ( ',' files_7+= rule_File )*
                    loop80:
                    do {
                        var alt80=2;
                        var LA80_0 = this.input.LA(1);

                        if ( (LA80_0==12) ) {
                            alt80=1;
                        }


                        switch (alt80) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:256:35: ',' files_7+= rule_File
                            char_literal183=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_ExperimentalObject1492); 
                            char_literal183_tree = this.adaptor.create(char_literal183);
                            this.adaptor.addChild(root_0, char_literal183_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_File_in_rule_ExperimentalObject1496);
                            files_7=this.rule_File();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, files_7.getTree());
                            if (org.antlr.lang.isNull(list_files_7)) list_files_7 = [];
                            list_files_7.push(files_7.getTree());



                            break;

                        default :
                            break loop80;
                        }
                    } while (true);

                    char_literal184=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ExperimentalObject1500); 
                    char_literal184_tree = this.adaptor.create(char_literal184);
                    this.adaptor.addChild(root_0, char_literal184_tree);



                    break;

            }

            char_literal185=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ExperimentalObject1505); 
            char_literal185_tree = this.adaptor.create(char_literal185);
            this.adaptor.addChild(root_0, char_literal185_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_Abstract_Impl_return: (function() {
        AutoExpParser.rule_Abstract_Impl_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_Abstract_Impl_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:261:1: rule_Abstract_Impl : ;
    // $ANTLR start "rule_Abstract_Impl"
    rule_Abstract_Impl: function() {
        var retval = new AutoExpParser.rule_Abstract_Impl_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:261:20: ()
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:262:2: 
            root_0 = this.adaptor.nil();



            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_Author_return: (function() {
        AutoExpParser.rule_Author_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_Author_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:266:1: rule_Author : name_0= ID '{' ( 'fullName' fullname_1= STRING )? ( 'institution' institution_2= STRING )? ( 'email' email_3= STRING )? '}' ;
    // $ANTLR start "rule_Author"
    rule_Author: function() {
        var retval = new AutoExpParser.rule_Author_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var fullname_1 = null;
        var institution_2 = null;
        var email_3 = null;
        var char_literal186 = null;
        var string_literal187 = null;
        var string_literal188 = null;
        var string_literal189 = null;
        var char_literal190 = null;

        var name_0_tree=null;
        var fullname_1_tree=null;
        var institution_2_tree=null;
        var email_3_tree=null;
        var char_literal186_tree=null;
        var string_literal187_tree=null;
        var string_literal188_tree=null;
        var string_literal189_tree=null;
        var char_literal190_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:266:13: (name_0= ID '{' ( 'fullName' fullname_1= STRING )? ( 'institution' institution_2= STRING )? ( 'email' email_3= STRING )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:268:2: name_0= ID '{' ( 'fullName' fullname_1= STRING )? ( 'institution' institution_2= STRING )? ( 'email' email_3= STRING )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Author1530); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal186=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Author1533); 
            char_literal186_tree = this.adaptor.create(char_literal186);
            this.adaptor.addChild(root_0, char_literal186_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:270:2: ( 'fullName' fullname_1= STRING )?
            var alt82=2;
            var LA82_0 = this.input.LA(1);

            if ( (LA82_0==83) ) {
                alt82=1;
            }
            switch (alt82) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:270:3: 'fullName' fullname_1= STRING
                    string_literal187=this.match(this.input,83,AutoExpParser.FOLLOW_83_in_rule_Author1537); 
                    string_literal187_tree = this.adaptor.create(string_literal187);
                    this.adaptor.addChild(root_0, string_literal187_tree);

                    fullname_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Author1541); 
                    fullname_1_tree = this.adaptor.create(fullname_1);
                    this.adaptor.addChild(root_0, fullname_1_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:271:2: ( 'institution' institution_2= STRING )?
            var alt83=2;
            var LA83_0 = this.input.LA(1);

            if ( (LA83_0==84) ) {
                alt83=1;
            }
            switch (alt83) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:271:3: 'institution' institution_2= STRING
                    string_literal188=this.match(this.input,84,AutoExpParser.FOLLOW_84_in_rule_Author1547); 
                    string_literal188_tree = this.adaptor.create(string_literal188);
                    this.adaptor.addChild(root_0, string_literal188_tree);

                    institution_2=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Author1551); 
                    institution_2_tree = this.adaptor.create(institution_2);
                    this.adaptor.addChild(root_0, institution_2_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:272:2: ( 'email' email_3= STRING )?
            var alt84=2;
            var LA84_0 = this.input.LA(1);

            if ( (LA84_0==85) ) {
                alt84=1;
            }
            switch (alt84) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:272:3: 'email' email_3= STRING
                    string_literal189=this.match(this.input,85,AutoExpParser.FOLLOW_85_in_rule_Author1557); 
                    string_literal189_tree = this.adaptor.create(string_literal189);
                    this.adaptor.addChild(root_0, string_literal189_tree);

                    email_3=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Author1561); 
                    email_3_tree = this.adaptor.create(email_3);
                    this.adaptor.addChild(root_0, email_3_tree);



                    break;

            }

            char_literal190=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Author1568); 
            char_literal190_tree = this.adaptor.create(char_literal190);
            this.adaptor.addChild(root_0, char_literal190_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_Keyword_return: (function() {
        AutoExpParser.rule_Keyword_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_Keyword_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:278:1: rule_Keyword : description_0= STRING ;
    // $ANTLR start "rule_Keyword"
    rule_Keyword: function() {
        var retval = new AutoExpParser.rule_Keyword_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var description_0 = null;

        var description_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:278:14: (description_0= STRING )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:280:2: description_0= STRING
            root_0 = this.adaptor.nil();

            description_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Keyword1583); 
            description_0_tree = this.adaptor.create(description_0);
            this.adaptor.addChild(root_0, description_0_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_Threat_return: (function() {
        AutoExpParser.rule_Threat_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_Threat_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:285:1: rule_Threat : name_0= ID '{' ( 'description' description_1= STRING )? ( 'type' type_2= rule_ThreatType )? ( 'CA' ca_3= STRING )? '}' ;
    // $ANTLR start "rule_Threat"
    rule_Threat: function() {
        var retval = new AutoExpParser.rule_Threat_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var description_1 = null;
        var ca_3 = null;
        var char_literal191 = null;
        var string_literal192 = null;
        var string_literal193 = null;
        var string_literal194 = null;
        var char_literal195 = null;
         var type_2 = null;

        var name_0_tree=null;
        var description_1_tree=null;
        var ca_3_tree=null;
        var char_literal191_tree=null;
        var string_literal192_tree=null;
        var string_literal193_tree=null;
        var string_literal194_tree=null;
        var char_literal195_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:285:13: (name_0= ID '{' ( 'description' description_1= STRING )? ( 'type' type_2= rule_ThreatType )? ( 'CA' ca_3= STRING )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:287:2: name_0= ID '{' ( 'description' description_1= STRING )? ( 'type' type_2= rule_ThreatType )? ( 'CA' ca_3= STRING )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Threat1600); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal191=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Threat1603); 
            char_literal191_tree = this.adaptor.create(char_literal191);
            this.adaptor.addChild(root_0, char_literal191_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:289:2: ( 'description' description_1= STRING )?
            var alt85=2;
            var LA85_0 = this.input.LA(1);

            if ( (LA85_0==14) ) {
                alt85=1;
            }
            switch (alt85) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:289:3: 'description' description_1= STRING
                    string_literal192=this.match(this.input,14,AutoExpParser.FOLLOW_14_in_rule_Threat1607); 
                    string_literal192_tree = this.adaptor.create(string_literal192);
                    this.adaptor.addChild(root_0, string_literal192_tree);

                    description_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Threat1611); 
                    description_1_tree = this.adaptor.create(description_1);
                    this.adaptor.addChild(root_0, description_1_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:290:2: ( 'type' type_2= rule_ThreatType )?
            var alt86=2;
            var LA86_0 = this.input.LA(1);

            if ( (LA86_0==68) ) {
                alt86=1;
            }
            switch (alt86) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:290:3: 'type' type_2= rule_ThreatType
                    string_literal193=this.match(this.input,68,AutoExpParser.FOLLOW_68_in_rule_Threat1617); 
                    string_literal193_tree = this.adaptor.create(string_literal193);
                    this.adaptor.addChild(root_0, string_literal193_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_ThreatType_in_rule_Threat1621);
                    type_2=this.rule_ThreatType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, type_2.getTree());


                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:291:2: ( 'CA' ca_3= STRING )?
            var alt87=2;
            var LA87_0 = this.input.LA(1);

            if ( (LA87_0==86) ) {
                alt87=1;
            }
            switch (alt87) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:291:3: 'CA' ca_3= STRING
                    string_literal194=this.match(this.input,86,AutoExpParser.FOLLOW_86_in_rule_Threat1627); 
                    string_literal194_tree = this.adaptor.create(string_literal194);
                    this.adaptor.addChild(root_0, string_literal194_tree);

                    ca_3=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Threat1631); 
                    ca_3_tree = this.adaptor.create(ca_3);
                    this.adaptor.addChild(root_0, ca_3_tree);



                    break;

            }

            char_literal195=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Threat1636); 
            char_literal195_tree = this.adaptor.create(char_literal195);
            this.adaptor.addChild(root_0, char_literal195_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_Goal_Impl_return: (function() {
        AutoExpParser.rule_Goal_Impl_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_Goal_Impl_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:296:1: rule_Goal_Impl : name_0= ID ;
    // $ANTLR start "rule_Goal_Impl"
    rule_Goal_Impl: function() {
        var retval = new AutoExpParser.rule_Goal_Impl_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;

        var name_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:296:16: (name_0= ID )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:298:2: name_0= ID
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Goal_Impl1651); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_ResearchQuestion_return: (function() {
        AutoExpParser.rule_ResearchQuestion_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_ResearchQuestion_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:302:1: rule_ResearchQuestion : name_0= ID '{' ( 'description' description_1= STRING )? ( 'goal' goal_2= ID )? '}' ;
    // $ANTLR start "rule_ResearchQuestion"
    rule_ResearchQuestion: function() {
        var retval = new AutoExpParser.rule_ResearchQuestion_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var description_1 = null;
        var goal_2 = null;
        var char_literal196 = null;
        var string_literal197 = null;
        var string_literal198 = null;
        var char_literal199 = null;

        var name_0_tree=null;
        var description_1_tree=null;
        var goal_2_tree=null;
        var char_literal196_tree=null;
        var string_literal197_tree=null;
        var string_literal198_tree=null;
        var char_literal199_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:302:23: (name_0= ID '{' ( 'description' description_1= STRING )? ( 'goal' goal_2= ID )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:304:2: name_0= ID '{' ( 'description' description_1= STRING )? ( 'goal' goal_2= ID )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ResearchQuestion1666); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal196=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ResearchQuestion1669); 
            char_literal196_tree = this.adaptor.create(char_literal196);
            this.adaptor.addChild(root_0, char_literal196_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:306:2: ( 'description' description_1= STRING )?
            var alt88=2;
            var LA88_0 = this.input.LA(1);

            if ( (LA88_0==14) ) {
                alt88=1;
            }
            switch (alt88) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:306:3: 'description' description_1= STRING
                    string_literal197=this.match(this.input,14,AutoExpParser.FOLLOW_14_in_rule_ResearchQuestion1673); 
                    string_literal197_tree = this.adaptor.create(string_literal197);
                    this.adaptor.addChild(root_0, string_literal197_tree);

                    description_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_ResearchQuestion1677); 
                    description_1_tree = this.adaptor.create(description_1);
                    this.adaptor.addChild(root_0, description_1_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:307:2: ( 'goal' goal_2= ID )?
            var alt89=2;
            var LA89_0 = this.input.LA(1);

            if ( (LA89_0==87) ) {
                alt89=1;
            }
            switch (alt89) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:307:3: 'goal' goal_2= ID
                    string_literal198=this.match(this.input,87,AutoExpParser.FOLLOW_87_in_rule_ResearchQuestion1683); 
                    string_literal198_tree = this.adaptor.create(string_literal198);
                    this.adaptor.addChild(root_0, string_literal198_tree);

                    goal_2=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ResearchQuestion1687); 
                    goal_2_tree = this.adaptor.create(goal_2);
                    this.adaptor.addChild(root_0, goal_2_tree);



                    break;

            }

            char_literal199=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ResearchQuestion1692); 
            char_literal199_tree = this.adaptor.create(char_literal199);
            this.adaptor.addChild(root_0, char_literal199_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_ResearchHypothesis_return: (function() {
        AutoExpParser.rule_ResearchHypothesis_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_ResearchHypothesis_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:312:1: rule_ResearchHypothesis : name_0= ID '{' formula_1= rule_ResearchHypothesisFormula ( 'description' description_2= STRING )? ( 'goal' goal_3= ID )? '}' ;
    // $ANTLR start "rule_ResearchHypothesis"
    rule_ResearchHypothesis: function() {
        var retval = new AutoExpParser.rule_ResearchHypothesis_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var description_2 = null;
        var goal_3 = null;
        var char_literal200 = null;
        var string_literal201 = null;
        var string_literal202 = null;
        var char_literal203 = null;
         var formula_1 = null;

        var name_0_tree=null;
        var description_2_tree=null;
        var goal_3_tree=null;
        var char_literal200_tree=null;
        var string_literal201_tree=null;
        var string_literal202_tree=null;
        var char_literal203_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:312:25: (name_0= ID '{' formula_1= rule_ResearchHypothesisFormula ( 'description' description_2= STRING )? ( 'goal' goal_3= ID )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:314:2: name_0= ID '{' formula_1= rule_ResearchHypothesisFormula ( 'description' description_2= STRING )? ( 'goal' goal_3= ID )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ResearchHypothesis1707); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal200=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ResearchHypothesis1710); 
            char_literal200_tree = this.adaptor.create(char_literal200);
            this.adaptor.addChild(root_0, char_literal200_tree);

            this.pushFollow(AutoExpParser.FOLLOW_rule_ResearchHypothesisFormula_in_rule_ResearchHypothesis1715);
            formula_1=this.rule_ResearchHypothesisFormula();

            this.state._fsp--;

            this.adaptor.addChild(root_0, formula_1.getTree());
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:317:2: ( 'description' description_2= STRING )?
            var alt90=2;
            var LA90_0 = this.input.LA(1);

            if ( (LA90_0==14) ) {
                alt90=1;
            }
            switch (alt90) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:317:3: 'description' description_2= STRING
                    string_literal201=this.match(this.input,14,AutoExpParser.FOLLOW_14_in_rule_ResearchHypothesis1719); 
                    string_literal201_tree = this.adaptor.create(string_literal201);
                    this.adaptor.addChild(root_0, string_literal201_tree);

                    description_2=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_ResearchHypothesis1723); 
                    description_2_tree = this.adaptor.create(description_2);
                    this.adaptor.addChild(root_0, description_2_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:318:2: ( 'goal' goal_3= ID )?
            var alt91=2;
            var LA91_0 = this.input.LA(1);

            if ( (LA91_0==87) ) {
                alt91=1;
            }
            switch (alt91) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:318:3: 'goal' goal_3= ID
                    string_literal202=this.match(this.input,87,AutoExpParser.FOLLOW_87_in_rule_ResearchHypothesis1729); 
                    string_literal202_tree = this.adaptor.create(string_literal202);
                    this.adaptor.addChild(root_0, string_literal202_tree);

                    goal_3=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ResearchHypothesis1733); 
                    goal_3_tree = this.adaptor.create(goal_3);
                    this.adaptor.addChild(root_0, goal_3_tree);



                    break;

            }

            char_literal203=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ResearchHypothesis1738); 
            char_literal203_tree = this.adaptor.create(char_literal203);
            this.adaptor.addChild(root_0, char_literal203_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_ResearchHypothesisFormula_return: (function() {
        AutoExpParser.rule_ResearchHypothesisFormula_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_ResearchHypothesisFormula_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:323:1: rule_ResearchHypothesisFormula : depvariable_0= ID treatment1_1= ID operator_2= rule_OperatorType treatment2_3= ID ;
    // $ANTLR start "rule_ResearchHypothesisFormula"
    rule_ResearchHypothesisFormula: function() {
        var retval = new AutoExpParser.rule_ResearchHypothesisFormula_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var depvariable_0 = null;
        var treatment1_1 = null;
        var treatment2_3 = null;
         var operator_2 = null;

        var depvariable_0_tree=null;
        var treatment1_1_tree=null;
        var treatment2_3_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:323:32: (depvariable_0= ID treatment1_1= ID operator_2= rule_OperatorType treatment2_3= ID )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:325:2: depvariable_0= ID treatment1_1= ID operator_2= rule_OperatorType treatment2_3= ID
            root_0 = this.adaptor.nil();

            depvariable_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ResearchHypothesisFormula1753); 
            depvariable_0_tree = this.adaptor.create(depvariable_0);
            this.adaptor.addChild(root_0, depvariable_0_tree);

            treatment1_1=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ResearchHypothesisFormula1757); 
            treatment1_1_tree = this.adaptor.create(treatment1_1);
            this.adaptor.addChild(root_0, treatment1_1_tree);

            this.pushFollow(AutoExpParser.FOLLOW_rule_OperatorType_in_rule_ResearchHypothesisFormula1761);
            operator_2=this.rule_OperatorType();

            this.state._fsp--;

            this.adaptor.addChild(root_0, operator_2.getTree());
            treatment2_3=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ResearchHypothesisFormula1765); 
            treatment2_3_tree = this.adaptor.create(treatment2_3);
            this.adaptor.addChild(root_0, treatment2_3_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_OperatorType_return: (function() {
        AutoExpParser.rule_OperatorType_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_OperatorType_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:329:1: rule_OperatorType : typename_0= ( '<' | '=' | '!=' | '>' ) ;
    // $ANTLR start "rule_OperatorType"
    rule_OperatorType: function() {
        var retval = new AutoExpParser.rule_OperatorType_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var typename_0 = null;

        var typename_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:329:18: (typename_0= ( '<' | '=' | '!=' | '>' ) )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:330:2: typename_0= ( '<' | '=' | '!=' | '>' )
            root_0 = this.adaptor.nil();

            typename_0=this.input.LT(1);
            if ( (this.input.LA(1)>=88 && this.input.LA(1)<=91) ) {
                this.input.consume();
                this.adaptor.addChild(root_0, this.adaptor.create(typename_0));
                this.state.errorRecovery=false;
            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_DependentVariable_return: (function() {
        AutoExpParser.rule_DependentVariable_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_DependentVariable_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:334:1: rule_DependentVariable : ( rule_DependentVariable_Impl | rule_BuiltinDependentVariable | rule_CustomDependentVariable );
    // $ANTLR start "rule_DependentVariable"
    rule_DependentVariable: function() {
        var retval = new AutoExpParser.rule_DependentVariable_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var rule_DependentVariable_Impl204 = null;
         var rule_BuiltinDependentVariable205 = null;
         var rule_CustomDependentVariable206 = null;


        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:334:24: ( rule_DependentVariable_Impl | rule_BuiltinDependentVariable | rule_CustomDependentVariable )
            var alt92=3;
            var LA92_0 = this.input.LA(1);

            if ( (LA92_0==ID) ) {
                var LA92_1 = this.input.LA(2);

                if ( (LA92_1==10) ) {
                    alt92=3;
                }
                else if ( (LA92_1==EOF) ) {
                    alt92=1;
                }
                else {
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 92, 1, this.input);

                    throw nvae;
                }
            }
            else if ( (LA92_0==STRING) ) {
                alt92=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 92, 0, this.input);

                throw nvae;
            }
            switch (alt92) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:335:2: rule_DependentVariable_Impl
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AutoExpParser.FOLLOW_rule_DependentVariable_Impl_in_rule_DependentVariable1801);
                    rule_DependentVariable_Impl204=this.rule_DependentVariable_Impl();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, rule_DependentVariable_Impl204.getTree());


                    break;
                case 2 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:335:30: rule_BuiltinDependentVariable
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AutoExpParser.FOLLOW_rule_BuiltinDependentVariable_in_rule_DependentVariable1803);
                    rule_BuiltinDependentVariable205=this.rule_BuiltinDependentVariable();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, rule_BuiltinDependentVariable205.getTree());


                    break;
                case 3 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:335:60: rule_CustomDependentVariable
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AutoExpParser.FOLLOW_rule_CustomDependentVariable_in_rule_DependentVariable1805);
                    rule_CustomDependentVariable206=this.rule_CustomDependentVariable();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, rule_CustomDependentVariable206.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_DependentVariable_Impl_return: (function() {
        AutoExpParser.rule_DependentVariable_Impl_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_DependentVariable_Impl_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:340:1: rule_DependentVariable_Impl : name_0= ID ;
    // $ANTLR start "rule_DependentVariable_Impl"
    rule_DependentVariable_Impl: function() {
        var retval = new AutoExpParser.rule_DependentVariable_Impl_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;

        var name_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:340:29: (name_0= ID )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:342:2: name_0= ID
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_DependentVariable_Impl1821); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_BuiltinDependentVariable_return: (function() {
        AutoExpParser.rule_BuiltinDependentVariable_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_BuiltinDependentVariable_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:346:1: rule_BuiltinDependentVariable : name_0= STRING ;
    // $ANTLR start "rule_BuiltinDependentVariable"
    rule_BuiltinDependentVariable: function() {
        var retval = new AutoExpParser.rule_BuiltinDependentVariable_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;

        var name_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:346:31: (name_0= STRING )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:348:2: name_0= STRING
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_BuiltinDependentVariable1836); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_CustomDependentVariable_return: (function() {
        AutoExpParser.rule_CustomDependentVariable_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_CustomDependentVariable_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:354:1: rule_CustomDependentVariable : name_0= ID '{' 'description' description_1= STRING ( 'scaleType' scaletype_2= rule_ScaleType )? ( 'unit' unit_3= STRING )? ( 'range' '{' range_4+= rule_Range ( ',' range_5+= rule_Range )* '}' )? ( 'instrument' instrument_6= ID )? '}' ;
    // $ANTLR start "rule_CustomDependentVariable"
    rule_CustomDependentVariable: function() {
        var retval = new AutoExpParser.rule_CustomDependentVariable_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var description_1 = null;
        var unit_3 = null;
        var instrument_6 = null;
        var char_literal207 = null;
        var string_literal208 = null;
        var string_literal209 = null;
        var string_literal210 = null;
        var string_literal211 = null;
        var char_literal212 = null;
        var char_literal213 = null;
        var char_literal214 = null;
        var string_literal215 = null;
        var char_literal216 = null;
        var list_range_4=null;
        var list_range_5=null;
         var scaletype_2 = null;
        var range_4 = null;
        var range_5 = null;
        var name_0_tree=null;
        var description_1_tree=null;
        var unit_3_tree=null;
        var instrument_6_tree=null;
        var char_literal207_tree=null;
        var string_literal208_tree=null;
        var string_literal209_tree=null;
        var string_literal210_tree=null;
        var string_literal211_tree=null;
        var char_literal212_tree=null;
        var char_literal213_tree=null;
        var char_literal214_tree=null;
        var string_literal215_tree=null;
        var char_literal216_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:354:30: (name_0= ID '{' 'description' description_1= STRING ( 'scaleType' scaletype_2= rule_ScaleType )? ( 'unit' unit_3= STRING )? ( 'range' '{' range_4+= rule_Range ( ',' range_5+= rule_Range )* '}' )? ( 'instrument' instrument_6= ID )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:356:2: name_0= ID '{' 'description' description_1= STRING ( 'scaleType' scaletype_2= rule_ScaleType )? ( 'unit' unit_3= STRING )? ( 'range' '{' range_4+= rule_Range ( ',' range_5+= rule_Range )* '}' )? ( 'instrument' instrument_6= ID )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_CustomDependentVariable1854); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal207=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_CustomDependentVariable1857); 
            char_literal207_tree = this.adaptor.create(char_literal207);
            this.adaptor.addChild(root_0, char_literal207_tree);

            string_literal208=this.match(this.input,14,AutoExpParser.FOLLOW_14_in_rule_CustomDependentVariable1860); 
            string_literal208_tree = this.adaptor.create(string_literal208);
            this.adaptor.addChild(root_0, string_literal208_tree);

            description_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_CustomDependentVariable1864); 
            description_1_tree = this.adaptor.create(description_1);
            this.adaptor.addChild(root_0, description_1_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:359:2: ( 'scaleType' scaletype_2= rule_ScaleType )?
            var alt93=2;
            var LA93_0 = this.input.LA(1);

            if ( (LA93_0==28) ) {
                alt93=1;
            }
            switch (alt93) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:359:3: 'scaleType' scaletype_2= rule_ScaleType
                    string_literal209=this.match(this.input,28,AutoExpParser.FOLLOW_28_in_rule_CustomDependentVariable1868); 
                    string_literal209_tree = this.adaptor.create(string_literal209);
                    this.adaptor.addChild(root_0, string_literal209_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_ScaleType_in_rule_CustomDependentVariable1872);
                    scaletype_2=this.rule_ScaleType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, scaletype_2.getTree());


                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:360:2: ( 'unit' unit_3= STRING )?
            var alt94=2;
            var LA94_0 = this.input.LA(1);

            if ( (LA94_0==92) ) {
                alt94=1;
            }
            switch (alt94) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:360:3: 'unit' unit_3= STRING
                    string_literal210=this.match(this.input,92,AutoExpParser.FOLLOW_92_in_rule_CustomDependentVariable1878); 
                    string_literal210_tree = this.adaptor.create(string_literal210);
                    this.adaptor.addChild(root_0, string_literal210_tree);

                    unit_3=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_CustomDependentVariable1882); 
                    unit_3_tree = this.adaptor.create(unit_3);
                    this.adaptor.addChild(root_0, unit_3_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:361:2: ( 'range' '{' range_4+= rule_Range ( ',' range_5+= rule_Range )* '}' )?
            var alt96=2;
            var LA96_0 = this.input.LA(1);

            if ( (LA96_0==93) ) {
                alt96=1;
            }
            switch (alt96) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:361:3: 'range' '{' range_4+= rule_Range ( ',' range_5+= rule_Range )* '}'
                    string_literal211=this.match(this.input,93,AutoExpParser.FOLLOW_93_in_rule_CustomDependentVariable1888); 
                    string_literal211_tree = this.adaptor.create(string_literal211);
                    this.adaptor.addChild(root_0, string_literal211_tree);

                    char_literal212=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_CustomDependentVariable1890); 
                    char_literal212_tree = this.adaptor.create(char_literal212);
                    this.adaptor.addChild(root_0, char_literal212_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Range_in_rule_CustomDependentVariable1894);
                    range_4=this.rule_Range();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, range_4.getTree());
                    if (org.antlr.lang.isNull(list_range_4)) list_range_4 = [];
                    list_range_4.push(range_4.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:361:35: ( ',' range_5+= rule_Range )*
                    loop95:
                    do {
                        var alt95=2;
                        var LA95_0 = this.input.LA(1);

                        if ( (LA95_0==12) ) {
                            alt95=1;
                        }


                        switch (alt95) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:361:36: ',' range_5+= rule_Range
                            char_literal213=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_CustomDependentVariable1897); 
                            char_literal213_tree = this.adaptor.create(char_literal213);
                            this.adaptor.addChild(root_0, char_literal213_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Range_in_rule_CustomDependentVariable1901);
                            range_5=this.rule_Range();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, range_5.getTree());
                            if (org.antlr.lang.isNull(list_range_5)) list_range_5 = [];
                            list_range_5.push(range_5.getTree());



                            break;

                        default :
                            break loop95;
                        }
                    } while (true);

                    char_literal214=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_CustomDependentVariable1905); 
                    char_literal214_tree = this.adaptor.create(char_literal214);
                    this.adaptor.addChild(root_0, char_literal214_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:362:2: ( 'instrument' instrument_6= ID )?
            var alt97=2;
            var LA97_0 = this.input.LA(1);

            if ( (LA97_0==94) ) {
                alt97=1;
            }
            switch (alt97) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:362:3: 'instrument' instrument_6= ID
                    string_literal215=this.match(this.input,94,AutoExpParser.FOLLOW_94_in_rule_CustomDependentVariable1911); 
                    string_literal215_tree = this.adaptor.create(string_literal215);
                    this.adaptor.addChild(root_0, string_literal215_tree);

                    instrument_6=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_CustomDependentVariable1915); 
                    instrument_6_tree = this.adaptor.create(instrument_6);
                    this.adaptor.addChild(root_0, instrument_6_tree);



                    break;

            }

            char_literal216=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_CustomDependentVariable1920); 
            char_literal216_tree = this.adaptor.create(char_literal216);
            this.adaptor.addChild(root_0, char_literal216_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_Instrument_return: (function() {
        AutoExpParser.rule_Instrument_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_Instrument_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:366:1: rule_Instrument : name_0= ID '{' 'command' command_1= STRING 'valueExpression' valueexpression_2= STRING ( 'conversionFactor' conversionfactor_3= rule_BigDecimalType )? '}' ;
    // $ANTLR start "rule_Instrument"
    rule_Instrument: function() {
        var retval = new AutoExpParser.rule_Instrument_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var command_1 = null;
        var valueexpression_2 = null;
        var char_literal217 = null;
        var string_literal218 = null;
        var string_literal219 = null;
        var string_literal220 = null;
        var char_literal221 = null;
         var conversionfactor_3 = null;

        var name_0_tree=null;
        var command_1_tree=null;
        var valueexpression_2_tree=null;
        var char_literal217_tree=null;
        var string_literal218_tree=null;
        var string_literal219_tree=null;
        var string_literal220_tree=null;
        var char_literal221_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:366:17: (name_0= ID '{' 'command' command_1= STRING 'valueExpression' valueexpression_2= STRING ( 'conversionFactor' conversionfactor_3= rule_BigDecimalType )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:368:2: name_0= ID '{' 'command' command_1= STRING 'valueExpression' valueexpression_2= STRING ( 'conversionFactor' conversionfactor_3= rule_BigDecimalType )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Instrument1934); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal217=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Instrument1937); 
            char_literal217_tree = this.adaptor.create(char_literal217);
            this.adaptor.addChild(root_0, char_literal217_tree);

            string_literal218=this.match(this.input,73,AutoExpParser.FOLLOW_73_in_rule_Instrument1940); 
            string_literal218_tree = this.adaptor.create(string_literal218);
            this.adaptor.addChild(root_0, string_literal218_tree);

            command_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Instrument1944); 
            command_1_tree = this.adaptor.create(command_1);
            this.adaptor.addChild(root_0, command_1_tree);

            string_literal219=this.match(this.input,95,AutoExpParser.FOLLOW_95_in_rule_Instrument1947); 
            string_literal219_tree = this.adaptor.create(string_literal219);
            this.adaptor.addChild(root_0, string_literal219_tree);

            valueexpression_2=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Instrument1951); 
            valueexpression_2_tree = this.adaptor.create(valueexpression_2);
            this.adaptor.addChild(root_0, valueexpression_2_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:372:2: ( 'conversionFactor' conversionfactor_3= rule_BigDecimalType )?
            var alt98=2;
            var LA98_0 = this.input.LA(1);

            if ( (LA98_0==96) ) {
                alt98=1;
            }
            switch (alt98) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:372:3: 'conversionFactor' conversionfactor_3= rule_BigDecimalType
                    string_literal220=this.match(this.input,96,AutoExpParser.FOLLOW_96_in_rule_Instrument1955); 
                    string_literal220_tree = this.adaptor.create(string_literal220);
                    this.adaptor.addChild(root_0, string_literal220_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_BigDecimalType_in_rule_Instrument1959);
                    conversionfactor_3=this.rule_BigDecimalType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, conversionfactor_3.getTree());


                    break;

            }

            char_literal221=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Instrument1964); 
            char_literal221_tree = this.adaptor.create(char_literal221);
            this.adaptor.addChild(root_0, char_literal221_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_Factor_return: (function() {
        AutoExpParser.rule_Factor_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_Factor_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:377:1: rule_Factor : name_0= ID '{' 'description' description_1= STRING ( 'scaleType' scaletype_2= rule_ScaleType )? '}' ;
    // $ANTLR start "rule_Factor"
    rule_Factor: function() {
        var retval = new AutoExpParser.rule_Factor_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var description_1 = null;
        var char_literal222 = null;
        var string_literal223 = null;
        var string_literal224 = null;
        var char_literal225 = null;
         var scaletype_2 = null;

        var name_0_tree=null;
        var description_1_tree=null;
        var char_literal222_tree=null;
        var string_literal223_tree=null;
        var string_literal224_tree=null;
        var char_literal225_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:377:13: (name_0= ID '{' 'description' description_1= STRING ( 'scaleType' scaletype_2= rule_ScaleType )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:379:2: name_0= ID '{' 'description' description_1= STRING ( 'scaleType' scaletype_2= rule_ScaleType )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Factor1979); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal222=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Factor1982); 
            char_literal222_tree = this.adaptor.create(char_literal222);
            this.adaptor.addChild(root_0, char_literal222_tree);

            string_literal223=this.match(this.input,14,AutoExpParser.FOLLOW_14_in_rule_Factor1985); 
            string_literal223_tree = this.adaptor.create(string_literal223);
            this.adaptor.addChild(root_0, string_literal223_tree);

            description_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Factor1989); 
            description_1_tree = this.adaptor.create(description_1);
            this.adaptor.addChild(root_0, description_1_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:382:2: ( 'scaleType' scaletype_2= rule_ScaleType )?
            var alt99=2;
            var LA99_0 = this.input.LA(1);

            if ( (LA99_0==28) ) {
                alt99=1;
            }
            switch (alt99) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:382:3: 'scaleType' scaletype_2= rule_ScaleType
                    string_literal224=this.match(this.input,28,AutoExpParser.FOLLOW_28_in_rule_Factor1993); 
                    string_literal224_tree = this.adaptor.create(string_literal224);
                    this.adaptor.addChild(root_0, string_literal224_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_ScaleType_in_rule_Factor1997);
                    scaletype_2=this.rule_ScaleType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, scaletype_2.getTree());


                    break;

            }

            char_literal225=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Factor2002); 
            char_literal225_tree = this.adaptor.create(char_literal225);
            this.adaptor.addChild(root_0, char_literal225_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_ContextVariable_return: (function() {
        AutoExpParser.rule_ContextVariable_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_ContextVariable_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:387:1: rule_ContextVariable : name_0= ID '{' ( 'description' description_1= STRING )? ( 'scaleType' scaletype_2= rule_ScaleType )? ( 'range' '{' range_3+= rule_Range ( ',' range_4+= rule_Range )* '}' )? '}' ;
    // $ANTLR start "rule_ContextVariable"
    rule_ContextVariable: function() {
        var retval = new AutoExpParser.rule_ContextVariable_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var description_1 = null;
        var char_literal226 = null;
        var string_literal227 = null;
        var string_literal228 = null;
        var string_literal229 = null;
        var char_literal230 = null;
        var char_literal231 = null;
        var char_literal232 = null;
        var char_literal233 = null;
        var list_range_3=null;
        var list_range_4=null;
         var scaletype_2 = null;
        var range_3 = null;
        var range_4 = null;
        var name_0_tree=null;
        var description_1_tree=null;
        var char_literal226_tree=null;
        var string_literal227_tree=null;
        var string_literal228_tree=null;
        var string_literal229_tree=null;
        var char_literal230_tree=null;
        var char_literal231_tree=null;
        var char_literal232_tree=null;
        var char_literal233_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:387:22: (name_0= ID '{' ( 'description' description_1= STRING )? ( 'scaleType' scaletype_2= rule_ScaleType )? ( 'range' '{' range_3+= rule_Range ( ',' range_4+= rule_Range )* '}' )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:389:2: name_0= ID '{' ( 'description' description_1= STRING )? ( 'scaleType' scaletype_2= rule_ScaleType )? ( 'range' '{' range_3+= rule_Range ( ',' range_4+= rule_Range )* '}' )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ContextVariable2017); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal226=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ContextVariable2020); 
            char_literal226_tree = this.adaptor.create(char_literal226);
            this.adaptor.addChild(root_0, char_literal226_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:391:2: ( 'description' description_1= STRING )?
            var alt100=2;
            var LA100_0 = this.input.LA(1);

            if ( (LA100_0==14) ) {
                alt100=1;
            }
            switch (alt100) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:391:3: 'description' description_1= STRING
                    string_literal227=this.match(this.input,14,AutoExpParser.FOLLOW_14_in_rule_ContextVariable2024); 
                    string_literal227_tree = this.adaptor.create(string_literal227);
                    this.adaptor.addChild(root_0, string_literal227_tree);

                    description_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_ContextVariable2028); 
                    description_1_tree = this.adaptor.create(description_1);
                    this.adaptor.addChild(root_0, description_1_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:392:2: ( 'scaleType' scaletype_2= rule_ScaleType )?
            var alt101=2;
            var LA101_0 = this.input.LA(1);

            if ( (LA101_0==28) ) {
                alt101=1;
            }
            switch (alt101) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:392:3: 'scaleType' scaletype_2= rule_ScaleType
                    string_literal228=this.match(this.input,28,AutoExpParser.FOLLOW_28_in_rule_ContextVariable2034); 
                    string_literal228_tree = this.adaptor.create(string_literal228);
                    this.adaptor.addChild(root_0, string_literal228_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_ScaleType_in_rule_ContextVariable2038);
                    scaletype_2=this.rule_ScaleType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, scaletype_2.getTree());


                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:393:2: ( 'range' '{' range_3+= rule_Range ( ',' range_4+= rule_Range )* '}' )?
            var alt103=2;
            var LA103_0 = this.input.LA(1);

            if ( (LA103_0==93) ) {
                alt103=1;
            }
            switch (alt103) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:393:3: 'range' '{' range_3+= rule_Range ( ',' range_4+= rule_Range )* '}'
                    string_literal229=this.match(this.input,93,AutoExpParser.FOLLOW_93_in_rule_ContextVariable2044); 
                    string_literal229_tree = this.adaptor.create(string_literal229);
                    this.adaptor.addChild(root_0, string_literal229_tree);

                    char_literal230=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ContextVariable2046); 
                    char_literal230_tree = this.adaptor.create(char_literal230);
                    this.adaptor.addChild(root_0, char_literal230_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Range_in_rule_ContextVariable2050);
                    range_3=this.rule_Range();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, range_3.getTree());
                    if (org.antlr.lang.isNull(list_range_3)) list_range_3 = [];
                    list_range_3.push(range_3.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:393:35: ( ',' range_4+= rule_Range )*
                    loop102:
                    do {
                        var alt102=2;
                        var LA102_0 = this.input.LA(1);

                        if ( (LA102_0==12) ) {
                            alt102=1;
                        }


                        switch (alt102) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:393:36: ',' range_4+= rule_Range
                            char_literal231=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_ContextVariable2053); 
                            char_literal231_tree = this.adaptor.create(char_literal231);
                            this.adaptor.addChild(root_0, char_literal231_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Range_in_rule_ContextVariable2057);
                            range_4=this.rule_Range();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, range_4.getTree());
                            if (org.antlr.lang.isNull(list_range_4)) list_range_4 = [];
                            list_range_4.push(range_4.getTree());



                            break;

                        default :
                            break loop102;
                        }
                    } while (true);

                    char_literal232=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ContextVariable2061); 
                    char_literal232_tree = this.adaptor.create(char_literal232);
                    this.adaptor.addChild(root_0, char_literal232_tree);



                    break;

            }

            char_literal233=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ContextVariable2066); 
            char_literal233_tree = this.adaptor.create(char_literal233);
            this.adaptor.addChild(root_0, char_literal233_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_Range_return: (function() {
        AutoExpParser.rule_Range_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_Range_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:398:1: rule_Range : name_0= ID ;
    // $ANTLR start "rule_Range"
    rule_Range: function() {
        var retval = new AutoExpParser.rule_Range_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;

        var name_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:398:12: (name_0= ID )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:400:2: name_0= ID
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Range2081); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_Treatment_return: (function() {
        AutoExpParser.rule_Treatment_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_Treatment_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:404:1: rule_Treatment : name_0= ID 'description' description_1= STRING 'factor' factor_2= ID ( 'parameters' '{' parameters_3+= rule_Parameter ( ',' parameters_4+= rule_Parameter )* '}' )? ( 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}' )? 'execution' execution_7= ID ;
    // $ANTLR start "rule_Treatment"
    rule_Treatment: function() {
        var retval = new AutoExpParser.rule_Treatment_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var description_1 = null;
        var factor_2 = null;
        var execution_7 = null;
        var string_literal234 = null;
        var string_literal235 = null;
        var string_literal236 = null;
        var char_literal237 = null;
        var char_literal238 = null;
        var char_literal239 = null;
        var string_literal240 = null;
        var char_literal241 = null;
        var char_literal242 = null;
        var char_literal243 = null;
        var string_literal244 = null;
        var list_parameters_3=null;
        var list_parameters_4=null;
        var list_files_5=null;
        var list_files_6=null;
        var parameters_3 = null;
        var parameters_4 = null;
        var files_5 = null;
        var files_6 = null;
        var name_0_tree=null;
        var description_1_tree=null;
        var factor_2_tree=null;
        var execution_7_tree=null;
        var string_literal234_tree=null;
        var string_literal235_tree=null;
        var string_literal236_tree=null;
        var char_literal237_tree=null;
        var char_literal238_tree=null;
        var char_literal239_tree=null;
        var string_literal240_tree=null;
        var char_literal241_tree=null;
        var char_literal242_tree=null;
        var char_literal243_tree=null;
        var string_literal244_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:404:16: (name_0= ID 'description' description_1= STRING 'factor' factor_2= ID ( 'parameters' '{' parameters_3+= rule_Parameter ( ',' parameters_4+= rule_Parameter )* '}' )? ( 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}' )? 'execution' execution_7= ID )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:405:2: name_0= ID 'description' description_1= STRING 'factor' factor_2= ID ( 'parameters' '{' parameters_3+= rule_Parameter ( ',' parameters_4+= rule_Parameter )* '}' )? ( 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}' )? 'execution' execution_7= ID
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Treatment2094); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            string_literal234=this.match(this.input,14,AutoExpParser.FOLLOW_14_in_rule_Treatment2097); 
            string_literal234_tree = this.adaptor.create(string_literal234);
            this.adaptor.addChild(root_0, string_literal234_tree);

            description_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Treatment2101); 
            description_1_tree = this.adaptor.create(description_1);
            this.adaptor.addChild(root_0, description_1_tree);

            string_literal235=this.match(this.input,97,AutoExpParser.FOLLOW_97_in_rule_Treatment2104); 
            string_literal235_tree = this.adaptor.create(string_literal235);
            this.adaptor.addChild(root_0, string_literal235_tree);

            factor_2=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Treatment2108); 
            factor_2_tree = this.adaptor.create(factor_2);
            this.adaptor.addChild(root_0, factor_2_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:408:2: ( 'parameters' '{' parameters_3+= rule_Parameter ( ',' parameters_4+= rule_Parameter )* '}' )?
            var alt105=2;
            var LA105_0 = this.input.LA(1);

            if ( (LA105_0==82) ) {
                alt105=1;
            }
            switch (alt105) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:408:3: 'parameters' '{' parameters_3+= rule_Parameter ( ',' parameters_4+= rule_Parameter )* '}'
                    string_literal236=this.match(this.input,82,AutoExpParser.FOLLOW_82_in_rule_Treatment2112); 
                    string_literal236_tree = this.adaptor.create(string_literal236);
                    this.adaptor.addChild(root_0, string_literal236_tree);

                    char_literal237=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Treatment2114); 
                    char_literal237_tree = this.adaptor.create(char_literal237);
                    this.adaptor.addChild(root_0, char_literal237_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Parameter_in_rule_Treatment2118);
                    parameters_3=this.rule_Parameter();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, parameters_3.getTree());
                    if (org.antlr.lang.isNull(list_parameters_3)) list_parameters_3 = [];
                    list_parameters_3.push(parameters_3.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:408:49: ( ',' parameters_4+= rule_Parameter )*
                    loop104:
                    do {
                        var alt104=2;
                        var LA104_0 = this.input.LA(1);

                        if ( (LA104_0==12) ) {
                            alt104=1;
                        }


                        switch (alt104) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:408:50: ',' parameters_4+= rule_Parameter
                            char_literal238=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Treatment2121); 
                            char_literal238_tree = this.adaptor.create(char_literal238);
                            this.adaptor.addChild(root_0, char_literal238_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Parameter_in_rule_Treatment2125);
                            parameters_4=this.rule_Parameter();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, parameters_4.getTree());
                            if (org.antlr.lang.isNull(list_parameters_4)) list_parameters_4 = [];
                            list_parameters_4.push(parameters_4.getTree());



                            break;

                        default :
                            break loop104;
                        }
                    } while (true);

                    char_literal239=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Treatment2129); 
                    char_literal239_tree = this.adaptor.create(char_literal239);
                    this.adaptor.addChild(root_0, char_literal239_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:409:2: ( 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}' )?
            var alt107=2;
            var LA107_0 = this.input.LA(1);

            if ( (LA107_0==76) ) {
                alt107=1;
            }
            switch (alt107) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:409:3: 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}'
                    string_literal240=this.match(this.input,76,AutoExpParser.FOLLOW_76_in_rule_Treatment2135); 
                    string_literal240_tree = this.adaptor.create(string_literal240);
                    this.adaptor.addChild(root_0, string_literal240_tree);

                    char_literal241=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Treatment2137); 
                    char_literal241_tree = this.adaptor.create(char_literal241);
                    this.adaptor.addChild(root_0, char_literal241_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_File_in_rule_Treatment2141);
                    files_5=this.rule_File();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, files_5.getTree());
                    if (org.antlr.lang.isNull(list_files_5)) list_files_5 = [];
                    list_files_5.push(files_5.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:409:34: ( ',' files_6+= rule_File )*
                    loop106:
                    do {
                        var alt106=2;
                        var LA106_0 = this.input.LA(1);

                        if ( (LA106_0==12) ) {
                            alt106=1;
                        }


                        switch (alt106) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:409:35: ',' files_6+= rule_File
                            char_literal242=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Treatment2144); 
                            char_literal242_tree = this.adaptor.create(char_literal242);
                            this.adaptor.addChild(root_0, char_literal242_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_File_in_rule_Treatment2148);
                            files_6=this.rule_File();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, files_6.getTree());
                            if (org.antlr.lang.isNull(list_files_6)) list_files_6 = [];
                            list_files_6.push(files_6.getTree());



                            break;

                        default :
                            break loop106;
                        }
                    } while (true);

                    char_literal243=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Treatment2152); 
                    char_literal243_tree = this.adaptor.create(char_literal243);
                    this.adaptor.addChild(root_0, char_literal243_tree);



                    break;

            }

            string_literal244=this.match(this.input,98,AutoExpParser.FOLLOW_98_in_rule_Treatment2157); 
            string_literal244_tree = this.adaptor.create(string_literal244);
            this.adaptor.addChild(root_0, string_literal244_tree);

            execution_7=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Treatment2161); 
            execution_7_tree = this.adaptor.create(execution_7);
            this.adaptor.addChild(root_0, execution_7_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_File_return: (function() {
        AutoExpParser.rule_File_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_File_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:414:1: rule_File : '{' 'name' name_0= STRING 'source' source_1= STRING ( 'dest' dest_2= STRING )? ( 'checksum' checksum_3= STRING )? '}' ;
    // $ANTLR start "rule_File"
    rule_File: function() {
        var retval = new AutoExpParser.rule_File_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var source_1 = null;
        var dest_2 = null;
        var checksum_3 = null;
        var char_literal245 = null;
        var string_literal246 = null;
        var string_literal247 = null;
        var string_literal248 = null;
        var string_literal249 = null;
        var char_literal250 = null;

        var name_0_tree=null;
        var source_1_tree=null;
        var dest_2_tree=null;
        var checksum_3_tree=null;
        var char_literal245_tree=null;
        var string_literal246_tree=null;
        var string_literal247_tree=null;
        var string_literal248_tree=null;
        var string_literal249_tree=null;
        var char_literal250_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:414:11: ( '{' 'name' name_0= STRING 'source' source_1= STRING ( 'dest' dest_2= STRING )? ( 'checksum' checksum_3= STRING )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:416:2: '{' 'name' name_0= STRING 'source' source_1= STRING ( 'dest' dest_2= STRING )? ( 'checksum' checksum_3= STRING )? '}'
            root_0 = this.adaptor.nil();

            char_literal245=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_File2174); 
            char_literal245_tree = this.adaptor.create(char_literal245);
            this.adaptor.addChild(root_0, char_literal245_tree);

            string_literal246=this.match(this.input,99,AutoExpParser.FOLLOW_99_in_rule_File2177); 
            string_literal246_tree = this.adaptor.create(string_literal246);
            this.adaptor.addChild(root_0, string_literal246_tree);

            name_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_File2181); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            string_literal247=this.match(this.input,100,AutoExpParser.FOLLOW_100_in_rule_File2184); 
            string_literal247_tree = this.adaptor.create(string_literal247);
            this.adaptor.addChild(root_0, string_literal247_tree);

            source_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_File2188); 
            source_1_tree = this.adaptor.create(source_1);
            this.adaptor.addChild(root_0, source_1_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:419:2: ( 'dest' dest_2= STRING )?
            var alt108=2;
            var LA108_0 = this.input.LA(1);

            if ( (LA108_0==101) ) {
                alt108=1;
            }
            switch (alt108) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:419:3: 'dest' dest_2= STRING
                    string_literal248=this.match(this.input,101,AutoExpParser.FOLLOW_101_in_rule_File2192); 
                    string_literal248_tree = this.adaptor.create(string_literal248);
                    this.adaptor.addChild(root_0, string_literal248_tree);

                    dest_2=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_File2196); 
                    dest_2_tree = this.adaptor.create(dest_2);
                    this.adaptor.addChild(root_0, dest_2_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:420:2: ( 'checksum' checksum_3= STRING )?
            var alt109=2;
            var LA109_0 = this.input.LA(1);

            if ( (LA109_0==102) ) {
                alt109=1;
            }
            switch (alt109) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:420:3: 'checksum' checksum_3= STRING
                    string_literal249=this.match(this.input,102,AutoExpParser.FOLLOW_102_in_rule_File2202); 
                    string_literal249_tree = this.adaptor.create(string_literal249);
                    this.adaptor.addChild(root_0, string_literal249_tree);

                    checksum_3=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_File2206); 
                    checksum_3_tree = this.adaptor.create(checksum_3);
                    this.adaptor.addChild(root_0, checksum_3_tree);



                    break;

            }

            char_literal250=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_File2211); 
            char_literal250_tree = this.adaptor.create(char_literal250);
            this.adaptor.addChild(root_0, char_literal250_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_Parameter_return: (function() {
        AutoExpParser.rule_Parameter_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_Parameter_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:426:1: rule_Parameter : name_0= ID (value_1= STRING )? ;
    // $ANTLR start "rule_Parameter"
    rule_Parameter: function() {
        var retval = new AutoExpParser.rule_Parameter_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var value_1 = null;

        var name_0_tree=null;
        var value_1_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:426:16: (name_0= ID (value_1= STRING )? )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:428:2: name_0= ID (value_1= STRING )?
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Parameter2228); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:429:2: (value_1= STRING )?
            var alt110=2;
            var LA110_0 = this.input.LA(1);

            if ( (LA110_0==STRING) ) {
                alt110=1;
            }
            switch (alt110) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:429:3: value_1= STRING
                    value_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Parameter2234); 
                    value_1_tree = this.adaptor.create(value_1);
                    this.adaptor.addChild(root_0, value_1_tree);



                    break;

            }




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_ExecutionParameter_return: (function() {
        AutoExpParser.rule_ExecutionParameter_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_ExecutionParameter_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:433:1: rule_ExecutionParameter : (value_0= STRING )? ;
    // $ANTLR start "rule_ExecutionParameter"
    rule_ExecutionParameter: function() {
        var retval = new AutoExpParser.rule_ExecutionParameter_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var value_0 = null;

        var value_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:433:25: ( (value_0= STRING )? )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:435:2: (value_0= STRING )?
            root_0 = this.adaptor.nil();

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:435:2: (value_0= STRING )?
            var alt111=2;
            var LA111_0 = this.input.LA(1);

            if ( (LA111_0==STRING) ) {
                alt111=1;
            }
            switch (alt111) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:435:3: value_0= STRING
                    value_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_ExecutionParameter2252); 
                    value_0_tree = this.adaptor.create(value_0);
                    this.adaptor.addChild(root_0, value_0_tree);



                    break;

            }




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_Artifact_return: (function() {
        AutoExpParser.rule_Artifact_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_Artifact_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:439:1: rule_Artifact : name_0= ID (value_1= STRING )? ;
    // $ANTLR start "rule_Artifact"
    rule_Artifact: function() {
        var retval = new AutoExpParser.rule_Artifact_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var value_1 = null;

        var name_0_tree=null;
        var value_1_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:439:15: (name_0= ID (value_1= STRING )? )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:441:2: name_0= ID (value_1= STRING )?
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Artifact2269); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:442:2: (value_1= STRING )?
            var alt112=2;
            var LA112_0 = this.input.LA(1);

            if ( (LA112_0==STRING) ) {
                alt112=1;
            }
            switch (alt112) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:442:3: value_1= STRING
                    value_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Artifact2275); 
                    value_1_tree = this.adaptor.create(value_1);
                    this.adaptor.addChild(root_0, value_1_tree);



                    break;

            }




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_ObjectGroup_return: (function() {
        AutoExpParser.rule_ObjectGroup_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_ObjectGroup_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:446:1: rule_ObjectGroup : name_0= ID ;
    // $ANTLR start "rule_ObjectGroup"
    rule_ObjectGroup: function() {
        var retval = new AutoExpParser.rule_ObjectGroup_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;

        var name_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:446:18: (name_0= ID )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:448:2: name_0= ID
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ObjectGroup2292); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_SimpleAbstract_return: (function() {
        AutoExpParser.rule_SimpleAbstract_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_SimpleAbstract_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:452:1: rule_SimpleAbstract : (description_0= STRING ) ;
    // $ANTLR start "rule_SimpleAbstract"
    rule_SimpleAbstract: function() {
        var retval = new AutoExpParser.rule_SimpleAbstract_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var description_0 = null;

        var description_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:452:21: ( (description_0= STRING ) )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:454:2: (description_0= STRING )
            root_0 = this.adaptor.nil();

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:454:2: (description_0= STRING )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:454:3: description_0= STRING
            description_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_SimpleAbstract2308); 
            description_0_tree = this.adaptor.create(description_0);
            this.adaptor.addChild(root_0, description_0_tree);







            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_StructuredAbstract_return: (function() {
        AutoExpParser.rule_StructuredAbstract_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_StructuredAbstract_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:459:1: rule_StructuredAbstract : '{' ( 'context' context_0= STRING )? ( 'objective' objective_1= STRING )? ( 'method' method_2= STRING )? ( 'results' results_3= STRING )? ( 'conclusion' conclusion_4= STRING )? '}' ;
    // $ANTLR start "rule_StructuredAbstract"
    rule_StructuredAbstract: function() {
        var retval = new AutoExpParser.rule_StructuredAbstract_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var context_0 = null;
        var objective_1 = null;
        var method_2 = null;
        var results_3 = null;
        var conclusion_4 = null;
        var char_literal251 = null;
        var string_literal252 = null;
        var string_literal253 = null;
        var string_literal254 = null;
        var string_literal255 = null;
        var string_literal256 = null;
        var char_literal257 = null;

        var context_0_tree=null;
        var objective_1_tree=null;
        var method_2_tree=null;
        var results_3_tree=null;
        var conclusion_4_tree=null;
        var char_literal251_tree=null;
        var string_literal252_tree=null;
        var string_literal253_tree=null;
        var string_literal254_tree=null;
        var string_literal255_tree=null;
        var string_literal256_tree=null;
        var char_literal257_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:459:25: ( '{' ( 'context' context_0= STRING )? ( 'objective' objective_1= STRING )? ( 'method' method_2= STRING )? ( 'results' results_3= STRING )? ( 'conclusion' conclusion_4= STRING )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:461:2: '{' ( 'context' context_0= STRING )? ( 'objective' objective_1= STRING )? ( 'method' method_2= STRING )? ( 'results' results_3= STRING )? ( 'conclusion' conclusion_4= STRING )? '}'
            root_0 = this.adaptor.nil();

            char_literal251=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_StructuredAbstract2324); 
            char_literal251_tree = this.adaptor.create(char_literal251);
            this.adaptor.addChild(root_0, char_literal251_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:462:2: ( 'context' context_0= STRING )?
            var alt113=2;
            var LA113_0 = this.input.LA(1);

            if ( (LA113_0==103) ) {
                alt113=1;
            }
            switch (alt113) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:462:3: 'context' context_0= STRING
                    string_literal252=this.match(this.input,103,AutoExpParser.FOLLOW_103_in_rule_StructuredAbstract2328); 
                    string_literal252_tree = this.adaptor.create(string_literal252);
                    this.adaptor.addChild(root_0, string_literal252_tree);

                    context_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_StructuredAbstract2332); 
                    context_0_tree = this.adaptor.create(context_0);
                    this.adaptor.addChild(root_0, context_0_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:463:2: ( 'objective' objective_1= STRING )?
            var alt114=2;
            var LA114_0 = this.input.LA(1);

            if ( (LA114_0==104) ) {
                alt114=1;
            }
            switch (alt114) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:463:3: 'objective' objective_1= STRING
                    string_literal253=this.match(this.input,104,AutoExpParser.FOLLOW_104_in_rule_StructuredAbstract2338); 
                    string_literal253_tree = this.adaptor.create(string_literal253);
                    this.adaptor.addChild(root_0, string_literal253_tree);

                    objective_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_StructuredAbstract2342); 
                    objective_1_tree = this.adaptor.create(objective_1);
                    this.adaptor.addChild(root_0, objective_1_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:464:2: ( 'method' method_2= STRING )?
            var alt115=2;
            var LA115_0 = this.input.LA(1);

            if ( (LA115_0==105) ) {
                alt115=1;
            }
            switch (alt115) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:464:3: 'method' method_2= STRING
                    string_literal254=this.match(this.input,105,AutoExpParser.FOLLOW_105_in_rule_StructuredAbstract2348); 
                    string_literal254_tree = this.adaptor.create(string_literal254);
                    this.adaptor.addChild(root_0, string_literal254_tree);

                    method_2=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_StructuredAbstract2352); 
                    method_2_tree = this.adaptor.create(method_2);
                    this.adaptor.addChild(root_0, method_2_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:465:2: ( 'results' results_3= STRING )?
            var alt116=2;
            var LA116_0 = this.input.LA(1);

            if ( (LA116_0==106) ) {
                alt116=1;
            }
            switch (alt116) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:465:3: 'results' results_3= STRING
                    string_literal255=this.match(this.input,106,AutoExpParser.FOLLOW_106_in_rule_StructuredAbstract2358); 
                    string_literal255_tree = this.adaptor.create(string_literal255);
                    this.adaptor.addChild(root_0, string_literal255_tree);

                    results_3=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_StructuredAbstract2362); 
                    results_3_tree = this.adaptor.create(results_3);
                    this.adaptor.addChild(root_0, results_3_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:466:2: ( 'conclusion' conclusion_4= STRING )?
            var alt117=2;
            var LA117_0 = this.input.LA(1);

            if ( (LA117_0==107) ) {
                alt117=1;
            }
            switch (alt117) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:466:3: 'conclusion' conclusion_4= STRING
                    string_literal256=this.match(this.input,107,AutoExpParser.FOLLOW_107_in_rule_StructuredAbstract2368); 
                    string_literal256_tree = this.adaptor.create(string_literal256);
                    this.adaptor.addChild(root_0, string_literal256_tree);

                    conclusion_4=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_StructuredAbstract2372); 
                    conclusion_4_tree = this.adaptor.create(conclusion_4);
                    this.adaptor.addChild(root_0, conclusion_4_tree);



                    break;

            }

            char_literal257=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_StructuredAbstract2377); 
            char_literal257_tree = this.adaptor.create(char_literal257);
            this.adaptor.addChild(root_0, char_literal257_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_SimpleGoal_return: (function() {
        AutoExpParser.rule_SimpleGoal_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_SimpleGoal_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:471:1: rule_SimpleGoal : name_0= ID description_1= STRING ;
    // $ANTLR start "rule_SimpleGoal"
    rule_SimpleGoal: function() {
        var retval = new AutoExpParser.rule_SimpleGoal_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var description_1 = null;

        var name_0_tree=null;
        var description_1_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:471:17: (name_0= ID description_1= STRING )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:473:2: name_0= ID description_1= STRING
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_SimpleGoal2392); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            description_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_SimpleGoal2397); 
            description_1_tree = this.adaptor.create(description_1);
            this.adaptor.addChild(root_0, description_1_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_StructuredGoal_return: (function() {
        AutoExpParser.rule_StructuredGoal_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_StructuredGoal_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:479:1: rule_StructuredGoal : name_0= ID '{' ( 'object' object_1= STRING )? ( 'technique' technique_2= STRING )? ( 'quality' quality_3= STRING )? ( 'ptView' ptview_4= STRING )? ( 'contextOf' contextof_5= STRING )? '}' ;
    // $ANTLR start "rule_StructuredGoal"
    rule_StructuredGoal: function() {
        var retval = new AutoExpParser.rule_StructuredGoal_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var object_1 = null;
        var technique_2 = null;
        var quality_3 = null;
        var ptview_4 = null;
        var contextof_5 = null;
        var char_literal258 = null;
        var string_literal259 = null;
        var string_literal260 = null;
        var string_literal261 = null;
        var string_literal262 = null;
        var string_literal263 = null;
        var char_literal264 = null;

        var name_0_tree=null;
        var object_1_tree=null;
        var technique_2_tree=null;
        var quality_3_tree=null;
        var ptview_4_tree=null;
        var contextof_5_tree=null;
        var char_literal258_tree=null;
        var string_literal259_tree=null;
        var string_literal260_tree=null;
        var string_literal261_tree=null;
        var string_literal262_tree=null;
        var string_literal263_tree=null;
        var char_literal264_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:479:21: (name_0= ID '{' ( 'object' object_1= STRING )? ( 'technique' technique_2= STRING )? ( 'quality' quality_3= STRING )? ( 'ptView' ptview_4= STRING )? ( 'contextOf' contextof_5= STRING )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:481:2: name_0= ID '{' ( 'object' object_1= STRING )? ( 'technique' technique_2= STRING )? ( 'quality' quality_3= STRING )? ( 'ptView' ptview_4= STRING )? ( 'contextOf' contextof_5= STRING )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_StructuredGoal2414); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal258=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_StructuredGoal2417); 
            char_literal258_tree = this.adaptor.create(char_literal258);
            this.adaptor.addChild(root_0, char_literal258_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:483:2: ( 'object' object_1= STRING )?
            var alt118=2;
            var LA118_0 = this.input.LA(1);

            if ( (LA118_0==108) ) {
                alt118=1;
            }
            switch (alt118) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:483:3: 'object' object_1= STRING
                    string_literal259=this.match(this.input,108,AutoExpParser.FOLLOW_108_in_rule_StructuredGoal2421); 
                    string_literal259_tree = this.adaptor.create(string_literal259);
                    this.adaptor.addChild(root_0, string_literal259_tree);

                    object_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_StructuredGoal2425); 
                    object_1_tree = this.adaptor.create(object_1);
                    this.adaptor.addChild(root_0, object_1_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:484:2: ( 'technique' technique_2= STRING )?
            var alt119=2;
            var LA119_0 = this.input.LA(1);

            if ( (LA119_0==109) ) {
                alt119=1;
            }
            switch (alt119) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:484:3: 'technique' technique_2= STRING
                    string_literal260=this.match(this.input,109,AutoExpParser.FOLLOW_109_in_rule_StructuredGoal2431); 
                    string_literal260_tree = this.adaptor.create(string_literal260);
                    this.adaptor.addChild(root_0, string_literal260_tree);

                    technique_2=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_StructuredGoal2435); 
                    technique_2_tree = this.adaptor.create(technique_2);
                    this.adaptor.addChild(root_0, technique_2_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:485:2: ( 'quality' quality_3= STRING )?
            var alt120=2;
            var LA120_0 = this.input.LA(1);

            if ( (LA120_0==110) ) {
                alt120=1;
            }
            switch (alt120) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:485:3: 'quality' quality_3= STRING
                    string_literal261=this.match(this.input,110,AutoExpParser.FOLLOW_110_in_rule_StructuredGoal2441); 
                    string_literal261_tree = this.adaptor.create(string_literal261);
                    this.adaptor.addChild(root_0, string_literal261_tree);

                    quality_3=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_StructuredGoal2445); 
                    quality_3_tree = this.adaptor.create(quality_3);
                    this.adaptor.addChild(root_0, quality_3_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:486:2: ( 'ptView' ptview_4= STRING )?
            var alt121=2;
            var LA121_0 = this.input.LA(1);

            if ( (LA121_0==111) ) {
                alt121=1;
            }
            switch (alt121) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:486:3: 'ptView' ptview_4= STRING
                    string_literal262=this.match(this.input,111,AutoExpParser.FOLLOW_111_in_rule_StructuredGoal2451); 
                    string_literal262_tree = this.adaptor.create(string_literal262);
                    this.adaptor.addChild(root_0, string_literal262_tree);

                    ptview_4=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_StructuredGoal2455); 
                    ptview_4_tree = this.adaptor.create(ptview_4);
                    this.adaptor.addChild(root_0, ptview_4_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:487:2: ( 'contextOf' contextof_5= STRING )?
            var alt122=2;
            var LA122_0 = this.input.LA(1);

            if ( (LA122_0==112) ) {
                alt122=1;
            }
            switch (alt122) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:487:3: 'contextOf' contextof_5= STRING
                    string_literal263=this.match(this.input,112,AutoExpParser.FOLLOW_112_in_rule_StructuredGoal2461); 
                    string_literal263_tree = this.adaptor.create(string_literal263);
                    this.adaptor.addChild(root_0, string_literal263_tree);

                    contextof_5=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_StructuredGoal2465); 
                    contextof_5_tree = this.adaptor.create(contextof_5);
                    this.adaptor.addChild(root_0, contextof_5_tree);



                    break;

            }

            char_literal264=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_StructuredGoal2470); 
            char_literal264_tree = this.adaptor.create(char_literal264);
            this.adaptor.addChild(root_0, char_literal264_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_DesignType_return: (function() {
        AutoExpParser.rule_DesignType_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_DesignType_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:490:1: rule_DesignType : (fACTORIAL= 'FACTORIAL' | cRD= 'CRD' | rCBD= 'RCBD' | lS= 'LS' | oTHER= 'OTHER' );
    // $ANTLR start "rule_DesignType"
    rule_DesignType: function() {
        var retval = new AutoExpParser.rule_DesignType_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var fACTORIAL = null;
        var cRD = null;
        var rCBD = null;
        var lS = null;
        var oTHER = null;

        var fACTORIAL_tree=null;
        var cRD_tree=null;
        var rCBD_tree=null;
        var lS_tree=null;
        var oTHER_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:490:16: (fACTORIAL= 'FACTORIAL' | cRD= 'CRD' | rCBD= 'RCBD' | lS= 'LS' | oTHER= 'OTHER' )
            var alt123=5;
            switch ( this.input.LA(1) ) {
            case 113:
                alt123=1;
                break;
            case 114:
                alt123=2;
                break;
            case 115:
                alt123=3;
                break;
            case 116:
                alt123=4;
                break;
            case 117:
                alt123=5;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 123, 0, this.input);

                throw nvae;
            }

            switch (alt123) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:491:2: fACTORIAL= 'FACTORIAL'
                    root_0 = this.adaptor.nil();

                    fACTORIAL=this.match(this.input,113,AutoExpParser.FOLLOW_113_in_rule_DesignType2480); 
                    fACTORIAL_tree = this.adaptor.create(fACTORIAL);
                    this.adaptor.addChild(root_0, fACTORIAL_tree);



                    break;
                case 2 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:491:26: cRD= 'CRD'
                    root_0 = this.adaptor.nil();

                    cRD=this.match(this.input,114,AutoExpParser.FOLLOW_114_in_rule_DesignType2486); 
                    cRD_tree = this.adaptor.create(cRD);
                    this.adaptor.addChild(root_0, cRD_tree);



                    break;
                case 3 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:491:38: rCBD= 'RCBD'
                    root_0 = this.adaptor.nil();

                    rCBD=this.match(this.input,115,AutoExpParser.FOLLOW_115_in_rule_DesignType2492); 
                    rCBD_tree = this.adaptor.create(rCBD);
                    this.adaptor.addChild(root_0, rCBD_tree);



                    break;
                case 4 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:491:52: lS= 'LS'
                    root_0 = this.adaptor.nil();

                    lS=this.match(this.input,116,AutoExpParser.FOLLOW_116_in_rule_DesignType2498); 
                    lS_tree = this.adaptor.create(lS);
                    this.adaptor.addChild(root_0, lS_tree);



                    break;
                case 5 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:491:62: oTHER= 'OTHER'
                    root_0 = this.adaptor.nil();

                    oTHER=this.match(this.input,117,AutoExpParser.FOLLOW_117_in_rule_DesignType2504); 
                    oTHER_tree = this.adaptor.create(oTHER);
                    this.adaptor.addChild(root_0, oTHER_tree);



                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_ScaleType_return: (function() {
        AutoExpParser.rule_ScaleType_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_ScaleType_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:493:1: rule_ScaleType : (absolute= 'Absolute' | logarithmic= 'Logarithmic' | nominal= 'Nominal' );
    // $ANTLR start "rule_ScaleType"
    rule_ScaleType: function() {
        var retval = new AutoExpParser.rule_ScaleType_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var absolute = null;
        var logarithmic = null;
        var nominal = null;

        var absolute_tree=null;
        var logarithmic_tree=null;
        var nominal_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:493:15: (absolute= 'Absolute' | logarithmic= 'Logarithmic' | nominal= 'Nominal' )
            var alt124=3;
            switch ( this.input.LA(1) ) {
            case 118:
                alt124=1;
                break;
            case 119:
                alt124=2;
                break;
            case 120:
                alt124=3;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 124, 0, this.input);

                throw nvae;
            }

            switch (alt124) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:494:2: absolute= 'Absolute'
                    root_0 = this.adaptor.nil();

                    absolute=this.match(this.input,118,AutoExpParser.FOLLOW_118_in_rule_ScaleType2514); 
                    absolute_tree = this.adaptor.create(absolute);
                    this.adaptor.addChild(root_0, absolute_tree);



                    break;
                case 2 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:494:24: logarithmic= 'Logarithmic'
                    root_0 = this.adaptor.nil();

                    logarithmic=this.match(this.input,119,AutoExpParser.FOLLOW_119_in_rule_ScaleType2520); 
                    logarithmic_tree = this.adaptor.create(logarithmic);
                    this.adaptor.addChild(root_0, logarithmic_tree);



                    break;
                case 3 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:494:52: nominal= 'Nominal'
                    root_0 = this.adaptor.nil();

                    nominal=this.match(this.input,120,AutoExpParser.FOLLOW_120_in_rule_ScaleType2526); 
                    nominal_tree = this.adaptor.create(nominal);
                    this.adaptor.addChild(root_0, nominal_tree);



                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_ThreatType_return: (function() {
        AutoExpParser.rule_ThreatType_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_ThreatType_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:496:1: rule_ThreatType : (iv= 'iv' | ev= 'ev' | c= 'c' | r= 'r' | cl= 'cl' );
    // $ANTLR start "rule_ThreatType"
    rule_ThreatType: function() {
        var retval = new AutoExpParser.rule_ThreatType_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var iv = null;
        var ev = null;
        var c = null;
        var r = null;
        var cl = null;

        var iv_tree=null;
        var ev_tree=null;
        var c_tree=null;
        var r_tree=null;
        var cl_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:496:16: (iv= 'iv' | ev= 'ev' | c= 'c' | r= 'r' | cl= 'cl' )
            var alt125=5;
            switch ( this.input.LA(1) ) {
            case 121:
                alt125=1;
                break;
            case 122:
                alt125=2;
                break;
            case 123:
                alt125=3;
                break;
            case 124:
                alt125=4;
                break;
            case 125:
                alt125=5;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 125, 0, this.input);

                throw nvae;
            }

            switch (alt125) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:497:2: iv= 'iv'
                    root_0 = this.adaptor.nil();

                    iv=this.match(this.input,121,AutoExpParser.FOLLOW_121_in_rule_ThreatType2536); 
                    iv_tree = this.adaptor.create(iv);
                    this.adaptor.addChild(root_0, iv_tree);



                    break;
                case 2 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:497:12: ev= 'ev'
                    root_0 = this.adaptor.nil();

                    ev=this.match(this.input,122,AutoExpParser.FOLLOW_122_in_rule_ThreatType2542); 
                    ev_tree = this.adaptor.create(ev);
                    this.adaptor.addChild(root_0, ev_tree);



                    break;
                case 3 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:497:22: c= 'c'
                    root_0 = this.adaptor.nil();

                    c=this.match(this.input,123,AutoExpParser.FOLLOW_123_in_rule_ThreatType2548); 
                    c_tree = this.adaptor.create(c);
                    this.adaptor.addChild(root_0, c_tree);



                    break;
                case 4 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:497:30: r= 'r'
                    root_0 = this.adaptor.nil();

                    r=this.match(this.input,124,AutoExpParser.FOLLOW_124_in_rule_ThreatType2554); 
                    r_tree = this.adaptor.create(r);
                    this.adaptor.addChild(root_0, r_tree);



                    break;
                case 5 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:497:38: cl= 'cl'
                    root_0 = this.adaptor.nil();

                    cl=this.match(this.input,125,AutoExpParser.FOLLOW_125_in_rule_ThreatType2560); 
                    cl_tree = this.adaptor.create(cl);
                    this.adaptor.addChild(root_0, cl_tree);



                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    }

    // Delegated rules




}, true); // important to pass true to overwrite default implementations

 

// public class variables
org.antlr.lang.augmentObject(AutoExpParser, {
    tokenNames: ["<invalid>", "<EOR>", "<DOWN>", "<UP>", "ID", "STRING", "INT", "COMMENT", "WS", "'Experiment'", "'{'", "'Authors'", "','", "'}'", "'description'", "'Abstract'", "'Keywords'", "'Goals'", "'Research Questions'", "'Research Hypotheses'", "'Threat'", "'Experimental Design'", "'Dependent Variables'", "'Instruments'", "'Factors'", "'Treatments'", "'Groups'", "'Objects'", "'scaleType'", "'Executions'", "'Analysis'", "'Infrastructure'", "'requirements'", "'preconditions'", "'clouds'", "'on-finish'", "'user'", "'username'", "'keys'", "'privateKey'", "'publicKey'", "'fingerprint'", "'cpu'", "'memory'", "'platform'", "'cost'", "'number-of-instances-per-cloud'", "'LINUX'", "'WINDOWS'", "'.'", "'regions'", "'instanceTypes'", "'provider'", "'maxResourcePerType'", "'serviceClass'", "'instances'", "'endpoint'", "'status'", "'city'", "'geographicRegion'", "'zones'", "'UP'", "'DOWN'", "'access-key'", "'secret-key'", "'NONE'", "'SHUTDOWN'", "'TERMINATE'", "'type'", "'runs'", "'Restrictions'", "'Context Variables'", "'objects'", "'command'", "'timeout'", "'result'", "'files'", "'preprocessing'", "'postprocessing'", "'significance'", "'value'", "'group'", "'parameters'", "'fullName'", "'institution'", "'email'", "'CA'", "'goal'", "'<'", "'='", "'!='", "'>'", "'unit'", "'range'", "'instrument'", "'valueExpression'", "'conversionFactor'", "'factor'", "'execution'", "'name'", "'source'", "'dest'", "'checksum'", "'context'", "'objective'", "'method'", "'results'", "'conclusion'", "'object'", "'technique'", "'quality'", "'ptView'", "'contextOf'", "'FACTORIAL'", "'CRD'", "'RCBD'", "'LS'", "'OTHER'", "'Absolute'", "'Logarithmic'", "'Nominal'", "'iv'", "'ev'", "'c'", "'r'", "'cl'"],
    FOLLOW_rule_Experiment_in_rule_Model66: new org.antlr.runtime.BitSet([0x00000200, 0x00000000]),
    FOLLOW_EOF_in_rule_Model71: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_9_in_rule_Experiment84: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_Experiment89: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Experiment92: new org.antlr.runtime.BitSet([0x003FC800, 0x00000000]),
    FOLLOW_11_in_rule_Experiment96: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Experiment98: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Author_in_rule_Experiment102: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Experiment105: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Author_in_rule_Experiment109: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Experiment113: new org.antlr.runtime.BitSet([0x003FC000, 0x00000000]),
    FOLLOW_14_in_rule_Experiment119: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Experiment123: new org.antlr.runtime.BitSet([0x003F8000, 0x00000000]),
    FOLLOW_15_in_rule_Experiment129: new org.antlr.runtime.BitSet([0x00000420, 0x00000000]),
    FOLLOW_rule_Abstract_in_rule_Experiment133: new org.antlr.runtime.BitSet([0x003F0000, 0x00000000]),
    FOLLOW_16_in_rule_Experiment139: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Experiment141: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_Keyword_in_rule_Experiment145: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Experiment148: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_Keyword_in_rule_Experiment152: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Experiment156: new org.antlr.runtime.BitSet([0x003E0000, 0x00000000]),
    FOLLOW_17_in_rule_Experiment162: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Experiment164: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Goal_in_rule_Experiment168: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Experiment171: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Goal_in_rule_Experiment175: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Experiment179: new org.antlr.runtime.BitSet([0x003C0000, 0x00000000]),
    FOLLOW_18_in_rule_Experiment185: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Experiment187: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_ResearchQuestion_in_rule_Experiment191: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Experiment194: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_ResearchQuestion_in_rule_Experiment198: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Experiment202: new org.antlr.runtime.BitSet([0x00380000, 0x00000000]),
    FOLLOW_19_in_rule_Experiment208: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Experiment210: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_ResearchHypothesis_in_rule_Experiment214: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Experiment217: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_ResearchHypothesis_in_rule_Experiment221: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Experiment225: new org.antlr.runtime.BitSet([0x00300000, 0x00000000]),
    FOLLOW_20_in_rule_Experiment231: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Experiment233: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Threat_in_rule_Experiment237: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Experiment240: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Threat_in_rule_Experiment244: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Experiment248: new org.antlr.runtime.BitSet([0x00200000, 0x00000000]),
    FOLLOW_21_in_rule_Experiment253: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_ExperimentalDesign_in_rule_Experiment257: new org.antlr.runtime.BitSet([0x00400000, 0x00000000]),
    FOLLOW_22_in_rule_Experiment260: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Experiment262: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_CustomDependentVariable_in_rule_Experiment266: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Experiment269: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_CustomDependentVariable_in_rule_Experiment273: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Experiment277: new org.antlr.runtime.BitSet([0x01800000, 0x00000000]),
    FOLLOW_23_in_rule_Experiment281: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Experiment283: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Instrument_in_rule_Experiment287: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Experiment290: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Instrument_in_rule_Experiment294: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Experiment298: new org.antlr.runtime.BitSet([0x01000000, 0x00000000]),
    FOLLOW_24_in_rule_Experiment303: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Experiment305: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Factor_in_rule_Experiment309: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Experiment312: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Factor_in_rule_Experiment316: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Experiment320: new org.antlr.runtime.BitSet([0x02000000, 0x00000000]),
    FOLLOW_25_in_rule_Experiment323: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Experiment325: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Treatment_in_rule_Experiment329: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Experiment332: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Treatment_in_rule_Experiment336: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Experiment340: new org.antlr.runtime.BitSet([0x0C000000, 0x00000000]),
    FOLLOW_26_in_rule_Experiment344: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Experiment346: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_ObjectGroup_in_rule_Experiment350: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Experiment353: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_ObjectGroup_in_rule_Experiment357: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Experiment361: new org.antlr.runtime.BitSet([0x08000000, 0x00000000]),
    FOLLOW_27_in_rule_Experiment366: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Experiment368: new org.antlr.runtime.BitSet([0x00004000, 0x00000000]),
    FOLLOW_14_in_rule_Experiment370: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Experiment374: new org.antlr.runtime.BitSet([0x10000000, 0x00000000]),
    FOLLOW_28_in_rule_Experiment376: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x01C00000]),
    FOLLOW_rule_ScaleType_in_rule_Experiment380: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Experiment382: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_ExperimentalObject_in_rule_Experiment386: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Experiment389: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_ExperimentalObject_in_rule_Experiment393: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Experiment397: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Experiment399: new org.antlr.runtime.BitSet([0x20000000, 0x00000000]),
    FOLLOW_29_in_rule_Experiment402: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Experiment404: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Execution_in_rule_Experiment408: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Experiment411: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Execution_in_rule_Experiment415: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Experiment419: new org.antlr.runtime.BitSet([0xC0000000, 0x00000000]),
    FOLLOW_30_in_rule_Experiment423: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Analysis_in_rule_Experiment427: new org.antlr.runtime.BitSet([0x80000000, 0x00000000]),
    FOLLOW_31_in_rule_Experiment432: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_Infrastructure_in_rule_Experiment436: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Experiment439: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_10_in_rule_Infrastructure451: new org.antlr.runtime.BitSet([0x00000000, 0x00000010]),
    FOLLOW_rule_User_in_rule_Infrastructure457: new org.antlr.runtime.BitSet([0x00002000, 0x0000000F]),
    FOLLOW_32_in_rule_Infrastructure462: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_Requirements_in_rule_Infrastructure466: new org.antlr.runtime.BitSet([0x00002000, 0x0000000E]),
    FOLLOW_33_in_rule_Infrastructure473: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_Preconditions_in_rule_Infrastructure477: new org.antlr.runtime.BitSet([0x00002000, 0x0000000C]),
    FOLLOW_34_in_rule_Infrastructure484: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Infrastructure486: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_Cloud_in_rule_Infrastructure490: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Infrastructure494: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_Cloud_in_rule_Infrastructure498: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Infrastructure502: new org.antlr.runtime.BitSet([0x00002000, 0x00000008]),
    FOLLOW_35_in_rule_Infrastructure509: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x0000000E, 0x00000000]),
    FOLLOW_rule_OnFinishType_in_rule_Infrastructure513: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Infrastructure518: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_10_in_rule_Preconditions531: new org.antlr.runtime.BitSet([0x00002020, 0x00000000]),
    FOLLOW_STRING_in_rule_Preconditions538: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Preconditions542: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Preconditions546: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Preconditions553: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_36_in_rule_User564: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_User566: new org.antlr.runtime.BitSet([0x00000000, 0x00000020]),
    FOLLOW_37_in_rule_User570: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_User574: new org.antlr.runtime.BitSet([0x00002000, 0x00000040]),
    FOLLOW_38_in_rule_User579: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_User581: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_UserKey_in_rule_User585: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_User589: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_UserKey_in_rule_User593: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_User597: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_User605: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_rule_UserKey617: new org.antlr.runtime.BitSet([0x00000402, 0x00000000]),
    FOLLOW_10_in_rule_UserKey621: new org.antlr.runtime.BitSet([0x00002000, 0x00000380]),
    FOLLOW_39_in_rule_UserKey626: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_UserKey630: new org.antlr.runtime.BitSet([0x00002000, 0x00000300]),
    FOLLOW_40_in_rule_UserKey637: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_UserKey641: new org.antlr.runtime.BitSet([0x00002000, 0x00000200]),
    FOLLOW_41_in_rule_UserKey648: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_UserKey652: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_UserKey657: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_10_in_rule_Requirements670: new org.antlr.runtime.BitSet([0x00000000, 0x00000400]),
    FOLLOW_42_in_rule_Requirements673: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_INT_in_rule_Requirements677: new org.antlr.runtime.BitSet([0x00000000, 0x00000800]),
    FOLLOW_43_in_rule_Requirements680: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_INT_in_rule_Requirements684: new org.antlr.runtime.BitSet([0x00000000, 0x00001000]),
    FOLLOW_44_in_rule_Requirements687: new org.antlr.runtime.BitSet([0x00000000, 0x00018000]),
    FOLLOW_rule_PlatformType_in_rule_Requirements691: new org.antlr.runtime.BitSet([0x00000000, 0x00002000]),
    FOLLOW_45_in_rule_Requirements694: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_rule_BigDecimalType_in_rule_Requirements698: new org.antlr.runtime.BitSet([0x00000000, 0x00004000]),
    FOLLOW_46_in_rule_Requirements701: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_INT_in_rule_Requirements705: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Requirements708: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_rule_PlatformType721: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_INT_in_rule_BigDecimalType738: new org.antlr.runtime.BitSet([0x00000002, 0x00020000]),
    FOLLOW_49_in_rule_BigDecimalType741: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_INT_in_rule_BigDecimalType743: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_rule_Cloud757: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Cloud760: new org.antlr.runtime.BitSet([0x00000000, 0x00100000]),
    FOLLOW_rule_CloudProvider_in_rule_Cloud766: new org.antlr.runtime.BitSet([0x00000000, 0x80000000]),
    FOLLOW_rule_AccessKey_in_rule_Cloud772: new org.antlr.runtime.BitSet([0x00002000, 0x000C0000]),
    FOLLOW_50_in_rule_Cloud776: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Cloud778: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_Region_in_rule_Cloud782: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Cloud786: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_Region_in_rule_Cloud790: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Cloud793: new org.antlr.runtime.BitSet([0x00002000, 0x00080000]),
    FOLLOW_51_in_rule_Cloud799: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Cloud801: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_InstanceType_in_rule_Cloud805: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Cloud809: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_InstanceType_in_rule_Cloud813: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Cloud816: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Cloud821: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_52_in_rule_CloudProvider833: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_CloudProvider837: new org.antlr.runtime.BitSet([0x00000402, 0x00000000]),
    FOLLOW_10_in_rule_CloudProvider841: new org.antlr.runtime.BitSet([0x00006000, 0x00600000]),
    FOLLOW_53_in_rule_CloudProvider845: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_INT_in_rule_CloudProvider849: new org.antlr.runtime.BitSet([0x00006000, 0x00400000]),
    FOLLOW_14_in_rule_CloudProvider857: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_CloudProvider861: new org.antlr.runtime.BitSet([0x00002000, 0x00400000]),
    FOLLOW_54_in_rule_CloudProvider869: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_CloudProvider873: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_CloudProvider880: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_rule_InstanceType899: new org.antlr.runtime.BitSet([0x00000002, 0x00800000]),
    FOLLOW_55_in_rule_InstanceType903: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_INT_in_rule_InstanceType907: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_rule_Region922: new org.antlr.runtime.BitSet([0x00000402, 0x00000000]),
    FOLLOW_10_in_rule_Region926: new org.antlr.runtime.BitSet([0x00002000, 0x1F000000]),
    FOLLOW_56_in_rule_Region930: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Region934: new org.antlr.runtime.BitSet([0x00002000, 0x1E000000]),
    FOLLOW_57_in_rule_Region940: new org.antlr.runtime.BitSet([0x00000000, 0x60000000]),
    FOLLOW_rule_StatusType_in_rule_Region944: new org.antlr.runtime.BitSet([0x00002000, 0x1C000000]),
    FOLLOW_58_in_rule_Region950: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Region954: new org.antlr.runtime.BitSet([0x00002000, 0x18000000]),
    FOLLOW_59_in_rule_Region960: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_INT_in_rule_Region964: new org.antlr.runtime.BitSet([0x00002000, 0x10000000]),
    FOLLOW_60_in_rule_Region970: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Region972: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_Zone_in_rule_Region976: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Region980: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_Zone_in_rule_Region984: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Region987: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Region992: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_rule_StatusType1013: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_rule_Zone1033: new org.antlr.runtime.BitSet([0x00000022, 0x00000000]),
    FOLLOW_STRING_in_rule_Zone1039: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_63_in_rule_AccessKey1053: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_AccessKey1057: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000001, 0x00000000]),
    FOLLOW_64_in_rule_AccessKey1060: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_AccessKey1063: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_rule_OnFinishType1090: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_rule_Abstract_Impl_in_rule_Abstract1110: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_rule_SimpleAbstract_in_rule_Abstract1114: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_rule_StructuredAbstract_in_rule_Abstract1118: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_rule_Goal_Impl_in_rule_Goal1129: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_rule_SimpleGoal_in_rule_Goal1133: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_rule_StructuredGoal_in_rule_Goal1137: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_10_in_rule_ExperimentalDesign1148: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000030, 0x00000000]),
    FOLLOW_68_in_rule_ExperimentalDesign1152: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x003E0000]),
    FOLLOW_rule_DesignType_in_rule_ExperimentalDesign1156: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000020, 0x00000000]),
    FOLLOW_69_in_rule_ExperimentalDesign1161: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_INT_in_rule_ExperimentalDesign1165: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x000000C0, 0x00000000]),
    FOLLOW_70_in_rule_ExperimentalDesign1171: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_ExperimentalDesign1173: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Restriction_in_rule_ExperimentalDesign1177: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_ExperimentalDesign1180: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Restriction_in_rule_ExperimentalDesign1184: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_ExperimentalDesign1188: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000080, 0x00000000]),
    FOLLOW_71_in_rule_ExperimentalDesign1196: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_ExperimentalDesign1198: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_ContextVariable_in_rule_ExperimentalDesign1202: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_ExperimentalDesign1205: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_ContextVariable_in_rule_ExperimentalDesign1209: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_ExperimentalDesign1213: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_ExperimentalDesign1218: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Restriction1231: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000100, 0x00000000]),
    FOLLOW_72_in_rule_Restriction1233: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Restriction1235: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_Restriction1239: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Restriction1242: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_Restriction1246: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Restriction1250: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Execution1265: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Execution1268: new org.antlr.runtime.BitSet([0x00002000, 0x00000002,0x00007E00, 0x00000000]),
    FOLLOW_73_in_rule_Execution1272: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Execution1276: new org.antlr.runtime.BitSet([0x00002000, 0x00000002,0x00007C00, 0x00000000]),
    FOLLOW_74_in_rule_Execution1282: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_rule_BigDecimalType_in_rule_Execution1286: new org.antlr.runtime.BitSet([0x00002000, 0x00000002,0x00007800, 0x00000000]),
    FOLLOW_33_in_rule_Execution1292: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_Preconditions_in_rule_Execution1296: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00007800, 0x00000000]),
    FOLLOW_75_in_rule_Execution1302: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_File_in_rule_Execution1306: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00007000, 0x00000000]),
    FOLLOW_76_in_rule_Execution1312: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Execution1314: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_File_in_rule_Execution1318: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Execution1321: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_File_in_rule_Execution1325: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Execution1329: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00006000, 0x00000000]),
    FOLLOW_77_in_rule_Execution1335: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Execution1337: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Execution_in_rule_Execution1341: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Execution1344: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Execution_in_rule_Execution1348: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Execution1352: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00004000, 0x00000000]),
    FOLLOW_78_in_rule_Execution1358: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Execution1360: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Execution_in_rule_Execution1364: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Execution1367: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Execution_in_rule_Execution1371: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Execution1375: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Execution1380: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Analysis1395: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Analysis1398: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00008000, 0x00000000]),
    FOLLOW_79_in_rule_Analysis1402: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_rule_BigDecimalType_in_rule_Analysis1406: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Analysis1411: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_ExperimentalObject1426: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_ExperimentalObject1429: new org.antlr.runtime.BitSet([0x00004000, 0x00000000]),
    FOLLOW_14_in_rule_ExperimentalObject1432: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_ExperimentalObject1436: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00071000, 0x00000000]),
    FOLLOW_80_in_rule_ExperimentalObject1440: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_ExperimentalObject1444: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00061000, 0x00000000]),
    FOLLOW_81_in_rule_ExperimentalObject1450: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_ExperimentalObject1454: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00041000, 0x00000000]),
    FOLLOW_82_in_rule_ExperimentalObject1460: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_ExperimentalObject1462: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Parameter_in_rule_ExperimentalObject1466: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_ExperimentalObject1469: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Parameter_in_rule_ExperimentalObject1473: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_ExperimentalObject1477: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00001000, 0x00000000]),
    FOLLOW_76_in_rule_ExperimentalObject1483: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_ExperimentalObject1485: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_File_in_rule_ExperimentalObject1489: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_ExperimentalObject1492: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_File_in_rule_ExperimentalObject1496: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_ExperimentalObject1500: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_ExperimentalObject1505: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Author1530: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Author1533: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00380000, 0x00000000]),
    FOLLOW_83_in_rule_Author1537: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Author1541: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00300000, 0x00000000]),
    FOLLOW_84_in_rule_Author1547: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Author1551: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00200000, 0x00000000]),
    FOLLOW_85_in_rule_Author1557: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Author1561: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Author1568: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_rule_Keyword1583: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Threat1600: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Threat1603: new org.antlr.runtime.BitSet([0x00006000, 0x00000000,0x00400010, 0x00000000]),
    FOLLOW_14_in_rule_Threat1607: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Threat1611: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00400010, 0x00000000]),
    FOLLOW_68_in_rule_Threat1617: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x3E000000]),
    FOLLOW_rule_ThreatType_in_rule_Threat1621: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00400000, 0x00000000]),
    FOLLOW_86_in_rule_Threat1627: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Threat1631: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Threat1636: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Goal_Impl1651: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_ResearchQuestion1666: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_ResearchQuestion1669: new org.antlr.runtime.BitSet([0x00006000, 0x00000000,0x00800000, 0x00000000]),
    FOLLOW_14_in_rule_ResearchQuestion1673: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_ResearchQuestion1677: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00800000, 0x00000000]),
    FOLLOW_87_in_rule_ResearchQuestion1683: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_ResearchQuestion1687: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_ResearchQuestion1692: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_ResearchHypothesis1707: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_ResearchHypothesis1710: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_ResearchHypothesisFormula_in_rule_ResearchHypothesis1715: new org.antlr.runtime.BitSet([0x00006000, 0x00000000,0x00800000, 0x00000000]),
    FOLLOW_14_in_rule_ResearchHypothesis1719: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_ResearchHypothesis1723: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00800000, 0x00000000]),
    FOLLOW_87_in_rule_ResearchHypothesis1729: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_ResearchHypothesis1733: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_ResearchHypothesis1738: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_ResearchHypothesisFormula1753: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_ResearchHypothesisFormula1757: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x0F000000, 0x00000000]),
    FOLLOW_rule_OperatorType_in_rule_ResearchHypothesisFormula1761: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_ResearchHypothesisFormula1765: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_rule_OperatorType1777: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_rule_DependentVariable_Impl_in_rule_DependentVariable1801: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_rule_BuiltinDependentVariable_in_rule_DependentVariable1803: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_rule_CustomDependentVariable_in_rule_DependentVariable1805: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_DependentVariable_Impl1821: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_rule_BuiltinDependentVariable1836: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_CustomDependentVariable1854: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_CustomDependentVariable1857: new org.antlr.runtime.BitSet([0x00004000, 0x00000000]),
    FOLLOW_14_in_rule_CustomDependentVariable1860: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_CustomDependentVariable1864: new org.antlr.runtime.BitSet([0x10002000, 0x00000000,0x70000000, 0x00000000]),
    FOLLOW_28_in_rule_CustomDependentVariable1868: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x01C00000]),
    FOLLOW_rule_ScaleType_in_rule_CustomDependentVariable1872: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x70000000, 0x00000000]),
    FOLLOW_92_in_rule_CustomDependentVariable1878: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_CustomDependentVariable1882: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x60000000, 0x00000000]),
    FOLLOW_93_in_rule_CustomDependentVariable1888: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_CustomDependentVariable1890: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Range_in_rule_CustomDependentVariable1894: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_CustomDependentVariable1897: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Range_in_rule_CustomDependentVariable1901: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_CustomDependentVariable1905: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x40000000, 0x00000000]),
    FOLLOW_94_in_rule_CustomDependentVariable1911: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_CustomDependentVariable1915: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_CustomDependentVariable1920: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Instrument1934: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Instrument1937: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000200, 0x00000000]),
    FOLLOW_73_in_rule_Instrument1940: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Instrument1944: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x00000000]),
    FOLLOW_95_in_rule_Instrument1947: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Instrument1951: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000000, 0x00000001]),
    FOLLOW_96_in_rule_Instrument1955: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_rule_BigDecimalType_in_rule_Instrument1959: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Instrument1964: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Factor1979: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Factor1982: new org.antlr.runtime.BitSet([0x00004000, 0x00000000]),
    FOLLOW_14_in_rule_Factor1985: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Factor1989: new org.antlr.runtime.BitSet([0x10002000, 0x00000000]),
    FOLLOW_28_in_rule_Factor1993: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x01C00000]),
    FOLLOW_rule_ScaleType_in_rule_Factor1997: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Factor2002: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_ContextVariable2017: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_ContextVariable2020: new org.antlr.runtime.BitSet([0x10006000, 0x00000000,0x20000000, 0x00000000]),
    FOLLOW_14_in_rule_ContextVariable2024: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_ContextVariable2028: new org.antlr.runtime.BitSet([0x10002000, 0x00000000,0x20000000, 0x00000000]),
    FOLLOW_28_in_rule_ContextVariable2034: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x01C00000]),
    FOLLOW_rule_ScaleType_in_rule_ContextVariable2038: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x20000000, 0x00000000]),
    FOLLOW_93_in_rule_ContextVariable2044: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_ContextVariable2046: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Range_in_rule_ContextVariable2050: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_ContextVariable2053: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Range_in_rule_ContextVariable2057: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_ContextVariable2061: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_ContextVariable2066: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Range2081: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Treatment2094: new org.antlr.runtime.BitSet([0x00004000, 0x00000000]),
    FOLLOW_14_in_rule_Treatment2097: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Treatment2101: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000002]),
    FOLLOW_97_in_rule_Treatment2104: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_Treatment2108: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00041000, 0x00000004]),
    FOLLOW_82_in_rule_Treatment2112: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Treatment2114: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Parameter_in_rule_Treatment2118: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Treatment2121: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Parameter_in_rule_Treatment2125: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Treatment2129: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00001000, 0x00000004]),
    FOLLOW_76_in_rule_Treatment2135: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Treatment2137: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_File_in_rule_Treatment2141: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Treatment2144: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_File_in_rule_Treatment2148: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Treatment2152: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000004]),
    FOLLOW_98_in_rule_Treatment2157: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_Treatment2161: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_10_in_rule_File2174: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000008]),
    FOLLOW_99_in_rule_File2177: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_File2181: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000010]),
    FOLLOW_100_in_rule_File2184: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_File2188: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000000, 0x00000060]),
    FOLLOW_101_in_rule_File2192: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_File2196: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000000, 0x00000040]),
    FOLLOW_102_in_rule_File2202: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_File2206: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_File2211: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Parameter2228: new org.antlr.runtime.BitSet([0x00000022, 0x00000000]),
    FOLLOW_STRING_in_rule_Parameter2234: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_rule_ExecutionParameter2252: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Artifact2269: new org.antlr.runtime.BitSet([0x00000022, 0x00000000]),
    FOLLOW_STRING_in_rule_Artifact2275: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_ObjectGroup2292: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_rule_SimpleAbstract2308: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_10_in_rule_StructuredAbstract2324: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000000, 0x00000F80]),
    FOLLOW_103_in_rule_StructuredAbstract2328: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_StructuredAbstract2332: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000000, 0x00000F00]),
    FOLLOW_104_in_rule_StructuredAbstract2338: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_StructuredAbstract2342: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000000, 0x00000E00]),
    FOLLOW_105_in_rule_StructuredAbstract2348: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_StructuredAbstract2352: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000000, 0x00000C00]),
    FOLLOW_106_in_rule_StructuredAbstract2358: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_StructuredAbstract2362: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000000, 0x00000800]),
    FOLLOW_107_in_rule_StructuredAbstract2368: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_StructuredAbstract2372: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_StructuredAbstract2377: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_SimpleGoal2392: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_SimpleGoal2397: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_StructuredGoal2414: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_StructuredGoal2417: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000000, 0x0001F000]),
    FOLLOW_108_in_rule_StructuredGoal2421: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_StructuredGoal2425: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000000, 0x0001E000]),
    FOLLOW_109_in_rule_StructuredGoal2431: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_StructuredGoal2435: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000000, 0x0001C000]),
    FOLLOW_110_in_rule_StructuredGoal2441: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_StructuredGoal2445: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000000, 0x00018000]),
    FOLLOW_111_in_rule_StructuredGoal2451: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_StructuredGoal2455: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000000, 0x00010000]),
    FOLLOW_112_in_rule_StructuredGoal2461: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_StructuredGoal2465: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_StructuredGoal2470: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_113_in_rule_DesignType2480: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_114_in_rule_DesignType2486: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_115_in_rule_DesignType2492: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_116_in_rule_DesignType2498: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_117_in_rule_DesignType2504: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_118_in_rule_ScaleType2514: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_119_in_rule_ScaleType2520: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_120_in_rule_ScaleType2526: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_121_in_rule_ThreatType2536: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_122_in_rule_ThreatType2542: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_123_in_rule_ThreatType2548: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_124_in_rule_ThreatType2554: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_125_in_rule_ThreatType2560: new org.antlr.runtime.BitSet([0x00000002, 0x00000000])
});

})();