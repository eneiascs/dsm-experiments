// $ANTLR 3.3 avr. 19, 2016 01:13:22 /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g 2018-02-14 12:12:24



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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:32:1: rule_Experiment : 'Experiment' name_0= ID '{' ( 'Authors' '{' authors_1+= rule_Author ( ',' authors_2+= rule_Author )* '}' )? ( 'description' description_3= STRING )? ( 'Abstract' abstract_4= rule_Abstract )? ( 'Keywords' '{' keywords_5+= rule_Keyword ( ',' keywords_6+= rule_Keyword )* '}' )? ( 'Goals' '{' goals_7+= rule_Goal ( ',' goals_8+= rule_Goal )* '}' )? ( 'Research Questions' '{' researchquestions_9+= rule_ResearchQuestion ( ',' researchquestions_10+= rule_ResearchQuestion )* '}' )? ( 'Research Hypotheses' '{' researchhypotheses_11+= rule_ResearchHypothesis ( ',' researchhypotheses_12+= rule_ResearchHypothesis )* '}' )? ( 'Threat' '{' threats_13+= rule_Threat ( ',' threats_14+= rule_Threat )* '}' )? 'Experimental Design' experimentaldesign_15= rule_ExperimentalDesign 'Dependent Variables' '{' dependentvariables_16+= rule_CustomDependentVariable ( ',' dependentvariables_17+= rule_CustomDependentVariable )* '}' ( 'Instruments' '{' instruments_18+= rule_Instrument ( ',' instruments_19+= rule_Instrument )* '}' )? 'Factors' '{' factors_20+= rule_Factor ( ',' factors_21+= rule_Factor )* '}' 'Treatments' '{' treatments_22+= rule_Treatment ( ',' treatments_23+= rule_Treatment )* '}' ( 'Groups' '{' groups_24+= rule_ObjectGroup ( ',' groups_25+= rule_ObjectGroup )* '}' )? 'Objects' '{' experimentalobjects_26+= rule_ExperimentalObject ( ',' experimentalobjects_27+= rule_ExperimentalObject )* '}' 'Executions' '{' executions_28+= rule_Execution ( ',' executions_29+= rule_Execution )* '}' ( 'Analysis' analysis_30= rule_Analysis )? 'Infrastructure' infrastructure_31= rule_Infrastructure '}' ;
    // $ANTLR start "rule_Experiment"
    rule_Experiment: function() {
        var retval = new AutoExpParser.rule_Experiment_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var description_3 = null;
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
        var char_literal53 = null;
        var char_literal54 = null;
        var string_literal55 = null;
        var char_literal56 = null;
        var char_literal57 = null;
        var char_literal58 = null;
        var string_literal59 = null;
        var string_literal60 = null;
        var char_literal61 = null;
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
        var list_experimentalobjects_26=null;
        var list_experimentalobjects_27=null;
        var list_executions_28=null;
        var list_executions_29=null;
         var abstract_4 = null;
         var experimentaldesign_15 = null;
         var analysis_30 = null;
         var infrastructure_31 = null;
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
        var experimentalobjects_26 = null;
        var experimentalobjects_27 = null;
        var executions_28 = null;
        var executions_29 = null;
        var name_0_tree=null;
        var description_3_tree=null;
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
        var char_literal53_tree=null;
        var char_literal54_tree=null;
        var string_literal55_tree=null;
        var char_literal56_tree=null;
        var char_literal57_tree=null;
        var char_literal58_tree=null;
        var string_literal59_tree=null;
        var string_literal60_tree=null;
        var char_literal61_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:32:17: ( 'Experiment' name_0= ID '{' ( 'Authors' '{' authors_1+= rule_Author ( ',' authors_2+= rule_Author )* '}' )? ( 'description' description_3= STRING )? ( 'Abstract' abstract_4= rule_Abstract )? ( 'Keywords' '{' keywords_5+= rule_Keyword ( ',' keywords_6+= rule_Keyword )* '}' )? ( 'Goals' '{' goals_7+= rule_Goal ( ',' goals_8+= rule_Goal )* '}' )? ( 'Research Questions' '{' researchquestions_9+= rule_ResearchQuestion ( ',' researchquestions_10+= rule_ResearchQuestion )* '}' )? ( 'Research Hypotheses' '{' researchhypotheses_11+= rule_ResearchHypothesis ( ',' researchhypotheses_12+= rule_ResearchHypothesis )* '}' )? ( 'Threat' '{' threats_13+= rule_Threat ( ',' threats_14+= rule_Threat )* '}' )? 'Experimental Design' experimentaldesign_15= rule_ExperimentalDesign 'Dependent Variables' '{' dependentvariables_16+= rule_CustomDependentVariable ( ',' dependentvariables_17+= rule_CustomDependentVariable )* '}' ( 'Instruments' '{' instruments_18+= rule_Instrument ( ',' instruments_19+= rule_Instrument )* '}' )? 'Factors' '{' factors_20+= rule_Factor ( ',' factors_21+= rule_Factor )* '}' 'Treatments' '{' treatments_22+= rule_Treatment ( ',' treatments_23+= rule_Treatment )* '}' ( 'Groups' '{' groups_24+= rule_ObjectGroup ( ',' groups_25+= rule_ObjectGroup )* '}' )? 'Objects' '{' experimentalobjects_26+= rule_ExperimentalObject ( ',' experimentalobjects_27+= rule_ExperimentalObject )* '}' 'Executions' '{' executions_28+= rule_Execution ( ',' executions_29+= rule_Execution )* '}' ( 'Analysis' analysis_30= rule_Analysis )? 'Infrastructure' infrastructure_31= rule_Infrastructure '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:33:2: 'Experiment' name_0= ID '{' ( 'Authors' '{' authors_1+= rule_Author ( ',' authors_2+= rule_Author )* '}' )? ( 'description' description_3= STRING )? ( 'Abstract' abstract_4= rule_Abstract )? ( 'Keywords' '{' keywords_5+= rule_Keyword ( ',' keywords_6+= rule_Keyword )* '}' )? ( 'Goals' '{' goals_7+= rule_Goal ( ',' goals_8+= rule_Goal )* '}' )? ( 'Research Questions' '{' researchquestions_9+= rule_ResearchQuestion ( ',' researchquestions_10+= rule_ResearchQuestion )* '}' )? ( 'Research Hypotheses' '{' researchhypotheses_11+= rule_ResearchHypothesis ( ',' researchhypotheses_12+= rule_ResearchHypothesis )* '}' )? ( 'Threat' '{' threats_13+= rule_Threat ( ',' threats_14+= rule_Threat )* '}' )? 'Experimental Design' experimentaldesign_15= rule_ExperimentalDesign 'Dependent Variables' '{' dependentvariables_16+= rule_CustomDependentVariable ( ',' dependentvariables_17+= rule_CustomDependentVariable )* '}' ( 'Instruments' '{' instruments_18+= rule_Instrument ( ',' instruments_19+= rule_Instrument )* '}' )? 'Factors' '{' factors_20+= rule_Factor ( ',' factors_21+= rule_Factor )* '}' 'Treatments' '{' treatments_22+= rule_Treatment ( ',' treatments_23+= rule_Treatment )* '}' ( 'Groups' '{' groups_24+= rule_ObjectGroup ( ',' groups_25+= rule_ObjectGroup )* '}' )? 'Objects' '{' experimentalobjects_26+= rule_ExperimentalObject ( ',' experimentalobjects_27+= rule_ExperimentalObject )* '}' 'Executions' '{' executions_28+= rule_Execution ( ',' executions_29+= rule_Execution )* '}' ( 'Analysis' analysis_30= rule_Analysis )? 'Infrastructure' infrastructure_31= rule_Infrastructure '}'
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

            this.pushFollow(AutoExpParser.FOLLOW_rule_ExperimentalObject_in_rule_Experiment372);
            experimentalobjects_26=this.rule_ExperimentalObject();

            this.state._fsp--;

            this.adaptor.addChild(root_0, experimentalobjects_26.getTree());
            if (org.antlr.lang.isNull(list_experimentalobjects_26)) list_experimentalobjects_26 = [];
            list_experimentalobjects_26.push(experimentalobjects_26.getTree());

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:50:64: ( ',' experimentalobjects_27+= rule_ExperimentalObject )*
            loop23:
            do {
                var alt23=2;
                var LA23_0 = this.input.LA(1);

                if ( (LA23_0==12) ) {
                    alt23=1;
                }


                switch (alt23) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:50:65: ',' experimentalobjects_27+= rule_ExperimentalObject
                    char_literal53=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Experiment375); 
                    char_literal53_tree = this.adaptor.create(char_literal53);
                    this.adaptor.addChild(root_0, char_literal53_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_ExperimentalObject_in_rule_Experiment379);
                    experimentalobjects_27=this.rule_ExperimentalObject();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, experimentalobjects_27.getTree());
                    if (org.antlr.lang.isNull(list_experimentalobjects_27)) list_experimentalobjects_27 = [];
                    list_experimentalobjects_27.push(experimentalobjects_27.getTree());



                    break;

                default :
                    break loop23;
                }
            } while (true);

            char_literal54=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Experiment383); 
            char_literal54_tree = this.adaptor.create(char_literal54);
            this.adaptor.addChild(root_0, char_literal54_tree);

            string_literal55=this.match(this.input,28,AutoExpParser.FOLLOW_28_in_rule_Experiment386); 
            string_literal55_tree = this.adaptor.create(string_literal55);
            this.adaptor.addChild(root_0, string_literal55_tree);

            char_literal56=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Experiment388); 
            char_literal56_tree = this.adaptor.create(char_literal56);
            this.adaptor.addChild(root_0, char_literal56_tree);

            this.pushFollow(AutoExpParser.FOLLOW_rule_Execution_in_rule_Experiment392);
            executions_28=this.rule_Execution();

            this.state._fsp--;

            this.adaptor.addChild(root_0, executions_28.getTree());
            if (org.antlr.lang.isNull(list_executions_28)) list_executions_28 = [];
            list_executions_28.push(executions_28.getTree());

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:51:49: ( ',' executions_29+= rule_Execution )*
            loop24:
            do {
                var alt24=2;
                var LA24_0 = this.input.LA(1);

                if ( (LA24_0==12) ) {
                    alt24=1;
                }


                switch (alt24) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:51:50: ',' executions_29+= rule_Execution
                    char_literal57=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Experiment395); 
                    char_literal57_tree = this.adaptor.create(char_literal57);
                    this.adaptor.addChild(root_0, char_literal57_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Execution_in_rule_Experiment399);
                    executions_29=this.rule_Execution();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, executions_29.getTree());
                    if (org.antlr.lang.isNull(list_executions_29)) list_executions_29 = [];
                    list_executions_29.push(executions_29.getTree());



                    break;

                default :
                    break loop24;
                }
            } while (true);

            char_literal58=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Experiment403); 
            char_literal58_tree = this.adaptor.create(char_literal58);
            this.adaptor.addChild(root_0, char_literal58_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:52:2: ( 'Analysis' analysis_30= rule_Analysis )?
            var alt25=2;
            var LA25_0 = this.input.LA(1);

            if ( (LA25_0==29) ) {
                alt25=1;
            }
            switch (alt25) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:52:3: 'Analysis' analysis_30= rule_Analysis
                    string_literal59=this.match(this.input,29,AutoExpParser.FOLLOW_29_in_rule_Experiment407); 
                    string_literal59_tree = this.adaptor.create(string_literal59);
                    this.adaptor.addChild(root_0, string_literal59_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Analysis_in_rule_Experiment411);
                    analysis_30=this.rule_Analysis();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, analysis_30.getTree());


                    break;

            }

            string_literal60=this.match(this.input,30,AutoExpParser.FOLLOW_30_in_rule_Experiment416); 
            string_literal60_tree = this.adaptor.create(string_literal60);
            this.adaptor.addChild(root_0, string_literal60_tree);

            this.pushFollow(AutoExpParser.FOLLOW_rule_Infrastructure_in_rule_Experiment420);
            infrastructure_31=this.rule_Infrastructure();

            this.state._fsp--;

            this.adaptor.addChild(root_0, infrastructure_31.getTree());
            char_literal61=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Experiment423); 
            char_literal61_tree = this.adaptor.create(char_literal61);
            this.adaptor.addChild(root_0, char_literal61_tree);




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

        var char_literal62 = null;
        var string_literal63 = null;
        var string_literal64 = null;
        var string_literal65 = null;
        var char_literal66 = null;
        var char_literal67 = null;
        var char_literal68 = null;
        var string_literal69 = null;
        var char_literal70 = null;
        var list_clouds_3=null;
        var list_clouds_4=null;
         var user_0 = null;
         var requirements_1 = null;
         var preconditions_2 = null;
         var onfinish_5 = null;
        var clouds_3 = null;
        var clouds_4 = null;
        var char_literal62_tree=null;
        var string_literal63_tree=null;
        var string_literal64_tree=null;
        var string_literal65_tree=null;
        var char_literal66_tree=null;
        var char_literal67_tree=null;
        var char_literal68_tree=null;
        var string_literal69_tree=null;
        var char_literal70_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:58:20: ( '{' user_0= rule_User ( 'requirements' requirements_1= rule_Requirements )? ( 'preconditions' preconditions_2= rule_Preconditions )? ( 'clouds' '{' clouds_3+= rule_Cloud ( ',' clouds_4+= rule_Cloud )* '}' )? ( 'on-finish' onfinish_5= rule_OnFinishType )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:60:2: '{' user_0= rule_User ( 'requirements' requirements_1= rule_Requirements )? ( 'preconditions' preconditions_2= rule_Preconditions )? ( 'clouds' '{' clouds_3+= rule_Cloud ( ',' clouds_4+= rule_Cloud )* '}' )? ( 'on-finish' onfinish_5= rule_OnFinishType )? '}'
            root_0 = this.adaptor.nil();

            char_literal62=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Infrastructure435); 
            char_literal62_tree = this.adaptor.create(char_literal62);
            this.adaptor.addChild(root_0, char_literal62_tree);

            this.pushFollow(AutoExpParser.FOLLOW_rule_User_in_rule_Infrastructure441);
            user_0=this.rule_User();

            this.state._fsp--;

            this.adaptor.addChild(root_0, user_0.getTree());
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:62:3: ( 'requirements' requirements_1= rule_Requirements )?
            var alt26=2;
            var LA26_0 = this.input.LA(1);

            if ( (LA26_0==31) ) {
                alt26=1;
            }
            switch (alt26) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:62:4: 'requirements' requirements_1= rule_Requirements
                    string_literal63=this.match(this.input,31,AutoExpParser.FOLLOW_31_in_rule_Infrastructure446); 
                    string_literal63_tree = this.adaptor.create(string_literal63);
                    this.adaptor.addChild(root_0, string_literal63_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Requirements_in_rule_Infrastructure450);
                    requirements_1=this.rule_Requirements();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, requirements_1.getTree());


                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:63:3: ( 'preconditions' preconditions_2= rule_Preconditions )?
            var alt27=2;
            var LA27_0 = this.input.LA(1);

            if ( (LA27_0==32) ) {
                alt27=1;
            }
            switch (alt27) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:63:4: 'preconditions' preconditions_2= rule_Preconditions
                    string_literal64=this.match(this.input,32,AutoExpParser.FOLLOW_32_in_rule_Infrastructure457); 
                    string_literal64_tree = this.adaptor.create(string_literal64);
                    this.adaptor.addChild(root_0, string_literal64_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Preconditions_in_rule_Infrastructure461);
                    preconditions_2=this.rule_Preconditions();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, preconditions_2.getTree());


                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:64:3: ( 'clouds' '{' clouds_3+= rule_Cloud ( ',' clouds_4+= rule_Cloud )* '}' )?
            var alt29=2;
            var LA29_0 = this.input.LA(1);

            if ( (LA29_0==33) ) {
                alt29=1;
            }
            switch (alt29) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:64:4: 'clouds' '{' clouds_3+= rule_Cloud ( ',' clouds_4+= rule_Cloud )* '}'
                    string_literal65=this.match(this.input,33,AutoExpParser.FOLLOW_33_in_rule_Infrastructure468); 
                    string_literal65_tree = this.adaptor.create(string_literal65);
                    this.adaptor.addChild(root_0, string_literal65_tree);

                    char_literal66=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Infrastructure470); 
                    char_literal66_tree = this.adaptor.create(char_literal66);
                    this.adaptor.addChild(root_0, char_literal66_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Cloud_in_rule_Infrastructure474);
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
                            char_literal67=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Infrastructure478); 
                            char_literal67_tree = this.adaptor.create(char_literal67);
                            this.adaptor.addChild(root_0, char_literal67_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Cloud_in_rule_Infrastructure482);
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

                    char_literal68=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Infrastructure486); 
                    char_literal68_tree = this.adaptor.create(char_literal68);
                    this.adaptor.addChild(root_0, char_literal68_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:65:3: ( 'on-finish' onfinish_5= rule_OnFinishType )?
            var alt30=2;
            var LA30_0 = this.input.LA(1);

            if ( (LA30_0==34) ) {
                alt30=1;
            }
            switch (alt30) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:65:4: 'on-finish' onfinish_5= rule_OnFinishType
                    string_literal69=this.match(this.input,34,AutoExpParser.FOLLOW_34_in_rule_Infrastructure493); 
                    string_literal69_tree = this.adaptor.create(string_literal69);
                    this.adaptor.addChild(root_0, string_literal69_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_OnFinishType_in_rule_Infrastructure497);
                    onfinish_5=this.rule_OnFinishType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, onfinish_5.getTree());


                    break;

            }

            char_literal70=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Infrastructure502); 
            char_literal70_tree = this.adaptor.create(char_literal70);
            this.adaptor.addChild(root_0, char_literal70_tree);




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

        var char_literal71 = null;
        var char_literal72 = null;
        var char_literal73 = null;
        var packages_0 = null;
        var packages_1 = null;
        var list_packages_0=null;
        var list_packages_1=null;

        var char_literal71_tree=null;
        var char_literal72_tree=null;
        var char_literal73_tree=null;
        var packages_0_tree=null;
        var packages_1_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:71:19: ( '{' (packages_0+= STRING ( ',' packages_1+= STRING )* )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:73:2: '{' (packages_0+= STRING ( ',' packages_1+= STRING )* )? '}'
            root_0 = this.adaptor.nil();

            char_literal71=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Preconditions515); 
            char_literal71_tree = this.adaptor.create(char_literal71);
            this.adaptor.addChild(root_0, char_literal71_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:74:3: (packages_0+= STRING ( ',' packages_1+= STRING )* )?
            var alt32=2;
            var LA32_0 = this.input.LA(1);

            if ( (LA32_0==STRING) ) {
                alt32=1;
            }
            switch (alt32) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:74:4: packages_0+= STRING ( ',' packages_1+= STRING )*
                    packages_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Preconditions522); 
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
                            char_literal72=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Preconditions526); 
                            char_literal72_tree = this.adaptor.create(char_literal72);
                            this.adaptor.addChild(root_0, char_literal72_tree);

                            packages_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Preconditions530); 
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

            char_literal73=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Preconditions537); 
            char_literal73_tree = this.adaptor.create(char_literal73);
            this.adaptor.addChild(root_0, char_literal73_tree);




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
        var string_literal74 = null;
        var char_literal75 = null;
        var string_literal76 = null;
        var string_literal77 = null;
        var char_literal78 = null;
        var char_literal79 = null;
        var char_literal80 = null;
        var char_literal81 = null;
        var list_keys_1=null;
        var list_keys_2=null;
        var keys_1 = null;
        var keys_2 = null;
        var username_0_tree=null;
        var string_literal74_tree=null;
        var char_literal75_tree=null;
        var string_literal76_tree=null;
        var string_literal77_tree=null;
        var char_literal78_tree=null;
        var char_literal79_tree=null;
        var char_literal80_tree=null;
        var char_literal81_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:79:10: ( 'user' '{' 'username' username_0= STRING ( 'keys' '{' keys_1+= rule_UserKey ( ',' keys_2+= rule_UserKey )* '}' )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:80:2: 'user' '{' 'username' username_0= STRING ( 'keys' '{' keys_1+= rule_UserKey ( ',' keys_2+= rule_UserKey )* '}' )? '}'
            root_0 = this.adaptor.nil();

            string_literal74=this.match(this.input,35,AutoExpParser.FOLLOW_35_in_rule_User548); 
            string_literal74_tree = this.adaptor.create(string_literal74);
            this.adaptor.addChild(root_0, string_literal74_tree);

            char_literal75=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_User550); 
            char_literal75_tree = this.adaptor.create(char_literal75);
            this.adaptor.addChild(root_0, char_literal75_tree);

            string_literal76=this.match(this.input,36,AutoExpParser.FOLLOW_36_in_rule_User554); 
            string_literal76_tree = this.adaptor.create(string_literal76);
            this.adaptor.addChild(root_0, string_literal76_tree);

            username_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_User558); 
            username_0_tree = this.adaptor.create(username_0);
            this.adaptor.addChild(root_0, username_0_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:82:3: ( 'keys' '{' keys_1+= rule_UserKey ( ',' keys_2+= rule_UserKey )* '}' )?
            var alt34=2;
            var LA34_0 = this.input.LA(1);

            if ( (LA34_0==37) ) {
                alt34=1;
            }
            switch (alt34) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:82:4: 'keys' '{' keys_1+= rule_UserKey ( ',' keys_2+= rule_UserKey )* '}'
                    string_literal77=this.match(this.input,37,AutoExpParser.FOLLOW_37_in_rule_User563); 
                    string_literal77_tree = this.adaptor.create(string_literal77);
                    this.adaptor.addChild(root_0, string_literal77_tree);

                    char_literal78=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_User565); 
                    char_literal78_tree = this.adaptor.create(char_literal78);
                    this.adaptor.addChild(root_0, char_literal78_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_UserKey_in_rule_User569);
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
                            char_literal79=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_User573); 
                            char_literal79_tree = this.adaptor.create(char_literal79);
                            this.adaptor.addChild(root_0, char_literal79_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_UserKey_in_rule_User577);
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

                    char_literal80=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_User581); 
                    char_literal80_tree = this.adaptor.create(char_literal80);
                    this.adaptor.addChild(root_0, char_literal80_tree);



                    break;

            }

            char_literal81=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_User589); 
            char_literal81_tree = this.adaptor.create(char_literal81);
            this.adaptor.addChild(root_0, char_literal81_tree);




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
        var char_literal82 = null;
        var string_literal83 = null;
        var string_literal84 = null;
        var string_literal85 = null;
        var char_literal86 = null;

        var name_0_tree=null;
        var privatekey_1_tree=null;
        var publickey_2_tree=null;
        var fingerprint_3_tree=null;
        var char_literal82_tree=null;
        var string_literal83_tree=null;
        var string_literal84_tree=null;
        var string_literal85_tree=null;
        var char_literal86_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:88:13: (name_0= STRING ( '{' ( 'privateKey' privatekey_1= STRING )? ( 'publicKey' publickey_2= STRING )? ( 'fingerprint' fingerprint_3= STRING )? '}' )? )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:89:2: name_0= STRING ( '{' ( 'privateKey' privatekey_1= STRING )? ( 'publicKey' publickey_2= STRING )? ( 'fingerprint' fingerprint_3= STRING )? '}' )?
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_UserKey601); 
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
                    char_literal82=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_UserKey605); 
                    char_literal82_tree = this.adaptor.create(char_literal82);
                    this.adaptor.addChild(root_0, char_literal82_tree);

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:91:3: ( 'privateKey' privatekey_1= STRING )?
                    var alt35=2;
                    var LA35_0 = this.input.LA(1);

                    if ( (LA35_0==38) ) {
                        alt35=1;
                    }
                    switch (alt35) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:91:4: 'privateKey' privatekey_1= STRING
                            string_literal83=this.match(this.input,38,AutoExpParser.FOLLOW_38_in_rule_UserKey610); 
                            string_literal83_tree = this.adaptor.create(string_literal83);
                            this.adaptor.addChild(root_0, string_literal83_tree);

                            privatekey_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_UserKey614); 
                            privatekey_1_tree = this.adaptor.create(privatekey_1);
                            this.adaptor.addChild(root_0, privatekey_1_tree);



                            break;

                    }

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:92:3: ( 'publicKey' publickey_2= STRING )?
                    var alt36=2;
                    var LA36_0 = this.input.LA(1);

                    if ( (LA36_0==39) ) {
                        alt36=1;
                    }
                    switch (alt36) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:92:4: 'publicKey' publickey_2= STRING
                            string_literal84=this.match(this.input,39,AutoExpParser.FOLLOW_39_in_rule_UserKey621); 
                            string_literal84_tree = this.adaptor.create(string_literal84);
                            this.adaptor.addChild(root_0, string_literal84_tree);

                            publickey_2=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_UserKey625); 
                            publickey_2_tree = this.adaptor.create(publickey_2);
                            this.adaptor.addChild(root_0, publickey_2_tree);



                            break;

                    }

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:93:3: ( 'fingerprint' fingerprint_3= STRING )?
                    var alt37=2;
                    var LA37_0 = this.input.LA(1);

                    if ( (LA37_0==40) ) {
                        alt37=1;
                    }
                    switch (alt37) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:93:4: 'fingerprint' fingerprint_3= STRING
                            string_literal85=this.match(this.input,40,AutoExpParser.FOLLOW_40_in_rule_UserKey632); 
                            string_literal85_tree = this.adaptor.create(string_literal85);
                            this.adaptor.addChild(root_0, string_literal85_tree);

                            fingerprint_3=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_UserKey636); 
                            fingerprint_3_tree = this.adaptor.create(fingerprint_3);
                            this.adaptor.addChild(root_0, fingerprint_3_tree);



                            break;

                    }

                    char_literal86=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_UserKey641); 
                    char_literal86_tree = this.adaptor.create(char_literal86);
                    this.adaptor.addChild(root_0, char_literal86_tree);



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
        var char_literal87 = null;
        var string_literal88 = null;
        var string_literal89 = null;
        var string_literal90 = null;
        var string_literal91 = null;
        var string_literal92 = null;
        var char_literal93 = null;
         var platform_2 = null;
         var cost_3 = null;

        var cpu_0_tree=null;
        var memory_1_tree=null;
        var instancespercloud_4_tree=null;
        var char_literal87_tree=null;
        var string_literal88_tree=null;
        var string_literal89_tree=null;
        var string_literal90_tree=null;
        var string_literal91_tree=null;
        var string_literal92_tree=null;
        var char_literal93_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:98:18: ( '{' 'cpu' cpu_0= INT 'memory' memory_1= INT 'platform' platform_2= rule_PlatformType 'cost' cost_3= rule_BigDecimalType 'number-of-instances-per-cloud' instancespercloud_4= INT '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:99:2: '{' 'cpu' cpu_0= INT 'memory' memory_1= INT 'platform' platform_2= rule_PlatformType 'cost' cost_3= rule_BigDecimalType 'number-of-instances-per-cloud' instancespercloud_4= INT '}'
            root_0 = this.adaptor.nil();

            char_literal87=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Requirements654); 
            char_literal87_tree = this.adaptor.create(char_literal87);
            this.adaptor.addChild(root_0, char_literal87_tree);

            string_literal88=this.match(this.input,41,AutoExpParser.FOLLOW_41_in_rule_Requirements657); 
            string_literal88_tree = this.adaptor.create(string_literal88);
            this.adaptor.addChild(root_0, string_literal88_tree);

            cpu_0=this.match(this.input,INT,AutoExpParser.FOLLOW_INT_in_rule_Requirements661); 
            cpu_0_tree = this.adaptor.create(cpu_0);
            this.adaptor.addChild(root_0, cpu_0_tree);

            string_literal89=this.match(this.input,42,AutoExpParser.FOLLOW_42_in_rule_Requirements664); 
            string_literal89_tree = this.adaptor.create(string_literal89);
            this.adaptor.addChild(root_0, string_literal89_tree);

            memory_1=this.match(this.input,INT,AutoExpParser.FOLLOW_INT_in_rule_Requirements668); 
            memory_1_tree = this.adaptor.create(memory_1);
            this.adaptor.addChild(root_0, memory_1_tree);

            string_literal90=this.match(this.input,43,AutoExpParser.FOLLOW_43_in_rule_Requirements671); 
            string_literal90_tree = this.adaptor.create(string_literal90);
            this.adaptor.addChild(root_0, string_literal90_tree);

            this.pushFollow(AutoExpParser.FOLLOW_rule_PlatformType_in_rule_Requirements675);
            platform_2=this.rule_PlatformType();

            this.state._fsp--;

            this.adaptor.addChild(root_0, platform_2.getTree());
            string_literal91=this.match(this.input,44,AutoExpParser.FOLLOW_44_in_rule_Requirements678); 
            string_literal91_tree = this.adaptor.create(string_literal91);
            this.adaptor.addChild(root_0, string_literal91_tree);

            this.pushFollow(AutoExpParser.FOLLOW_rule_BigDecimalType_in_rule_Requirements682);
            cost_3=this.rule_BigDecimalType();

            this.state._fsp--;

            this.adaptor.addChild(root_0, cost_3.getTree());
            string_literal92=this.match(this.input,45,AutoExpParser.FOLLOW_45_in_rule_Requirements685); 
            string_literal92_tree = this.adaptor.create(string_literal92);
            this.adaptor.addChild(root_0, string_literal92_tree);

            instancespercloud_4=this.match(this.input,INT,AutoExpParser.FOLLOW_INT_in_rule_Requirements689); 
            instancespercloud_4_tree = this.adaptor.create(instancespercloud_4);
            this.adaptor.addChild(root_0, instancespercloud_4_tree);

            char_literal93=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Requirements692); 
            char_literal93_tree = this.adaptor.create(char_literal93);
            this.adaptor.addChild(root_0, char_literal93_tree);




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
            if ( (this.input.LA(1)>=46 && this.input.LA(1)<=47) ) {
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

        var INT94 = null;
        var char_literal95 = null;
        var INT96 = null;

        var INT94_tree=null;
        var char_literal95_tree=null;
        var INT96_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:113:21: ( INT ( '.' INT )? )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:114:2: INT ( '.' INT )?
            root_0 = this.adaptor.nil();

            INT94=this.match(this.input,INT,AutoExpParser.FOLLOW_INT_in_rule_BigDecimalType722); 
            INT94_tree = this.adaptor.create(INT94);
            this.adaptor.addChild(root_0, INT94_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:114:6: ( '.' INT )?
            var alt39=2;
            var LA39_0 = this.input.LA(1);

            if ( (LA39_0==48) ) {
                alt39=1;
            }
            switch (alt39) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:114:7: '.' INT
                    char_literal95=this.match(this.input,48,AutoExpParser.FOLLOW_48_in_rule_BigDecimalType725); 
                    char_literal95_tree = this.adaptor.create(char_literal95);
                    this.adaptor.addChild(root_0, char_literal95_tree);

                    INT96=this.match(this.input,INT,AutoExpParser.FOLLOW_INT_in_rule_BigDecimalType727); 
                    INT96_tree = this.adaptor.create(INT96);
                    this.adaptor.addChild(root_0, INT96_tree);



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
        var char_literal97 = null;
        var string_literal98 = null;
        var char_literal99 = null;
        var char_literal100 = null;
        var char_literal101 = null;
        var string_literal102 = null;
        var char_literal103 = null;
        var char_literal104 = null;
        var char_literal105 = null;
        var char_literal106 = null;
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
        var char_literal97_tree=null;
        var string_literal98_tree=null;
        var char_literal99_tree=null;
        var char_literal100_tree=null;
        var char_literal101_tree=null;
        var string_literal102_tree=null;
        var char_literal103_tree=null;
        var char_literal104_tree=null;
        var char_literal105_tree=null;
        var char_literal106_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:118:11: (name_0= STRING '{' provider_1= rule_CloudProvider accesskey_2= rule_AccessKey ( 'regions' '{' regions_3+= rule_Region ( ',' regions_4+= rule_Region )* '}' )? ( 'instanceTypes' '{' instancetypes_5+= rule_InstanceType ( ',' instancetypes_6+= rule_InstanceType )* '}' )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:119:2: name_0= STRING '{' provider_1= rule_CloudProvider accesskey_2= rule_AccessKey ( 'regions' '{' regions_3+= rule_Region ( ',' regions_4+= rule_Region )* '}' )? ( 'instanceTypes' '{' instancetypes_5+= rule_InstanceType ( ',' instancetypes_6+= rule_InstanceType )* '}' )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Cloud741); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal97=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Cloud744); 
            char_literal97_tree = this.adaptor.create(char_literal97);
            this.adaptor.addChild(root_0, char_literal97_tree);

            this.pushFollow(AutoExpParser.FOLLOW_rule_CloudProvider_in_rule_Cloud750);
            provider_1=this.rule_CloudProvider();

            this.state._fsp--;

            this.adaptor.addChild(root_0, provider_1.getTree());
            this.pushFollow(AutoExpParser.FOLLOW_rule_AccessKey_in_rule_Cloud756);
            accesskey_2=this.rule_AccessKey();

            this.state._fsp--;

            this.adaptor.addChild(root_0, accesskey_2.getTree());
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:123:2: ( 'regions' '{' regions_3+= rule_Region ( ',' regions_4+= rule_Region )* '}' )?
            var alt41=2;
            var LA41_0 = this.input.LA(1);

            if ( (LA41_0==49) ) {
                alt41=1;
            }
            switch (alt41) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:123:3: 'regions' '{' regions_3+= rule_Region ( ',' regions_4+= rule_Region )* '}'
                    string_literal98=this.match(this.input,49,AutoExpParser.FOLLOW_49_in_rule_Cloud760); 
                    string_literal98_tree = this.adaptor.create(string_literal98);
                    this.adaptor.addChild(root_0, string_literal98_tree);

                    char_literal99=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Cloud762); 
                    char_literal99_tree = this.adaptor.create(char_literal99);
                    this.adaptor.addChild(root_0, char_literal99_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Region_in_rule_Cloud766);
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
                            char_literal100=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Cloud770); 
                            char_literal100_tree = this.adaptor.create(char_literal100);
                            this.adaptor.addChild(root_0, char_literal100_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Region_in_rule_Cloud774);
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

                    char_literal101=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Cloud777); 
                    char_literal101_tree = this.adaptor.create(char_literal101);
                    this.adaptor.addChild(root_0, char_literal101_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:124:2: ( 'instanceTypes' '{' instancetypes_5+= rule_InstanceType ( ',' instancetypes_6+= rule_InstanceType )* '}' )?
            var alt43=2;
            var LA43_0 = this.input.LA(1);

            if ( (LA43_0==50) ) {
                alt43=1;
            }
            switch (alt43) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:124:3: 'instanceTypes' '{' instancetypes_5+= rule_InstanceType ( ',' instancetypes_6+= rule_InstanceType )* '}'
                    string_literal102=this.match(this.input,50,AutoExpParser.FOLLOW_50_in_rule_Cloud783); 
                    string_literal102_tree = this.adaptor.create(string_literal102);
                    this.adaptor.addChild(root_0, string_literal102_tree);

                    char_literal103=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Cloud785); 
                    char_literal103_tree = this.adaptor.create(char_literal103);
                    this.adaptor.addChild(root_0, char_literal103_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_InstanceType_in_rule_Cloud789);
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
                            char_literal104=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Cloud793); 
                            char_literal104_tree = this.adaptor.create(char_literal104);
                            this.adaptor.addChild(root_0, char_literal104_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_InstanceType_in_rule_Cloud797);
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

                    char_literal105=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Cloud800); 
                    char_literal105_tree = this.adaptor.create(char_literal105);
                    this.adaptor.addChild(root_0, char_literal105_tree);



                    break;

            }

            char_literal106=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Cloud805); 
            char_literal106_tree = this.adaptor.create(char_literal106);
            this.adaptor.addChild(root_0, char_literal106_tree);




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
        var string_literal107 = null;
        var char_literal108 = null;
        var string_literal109 = null;
        var string_literal110 = null;
        var string_literal111 = null;
        var char_literal112 = null;

        var name_0_tree=null;
        var maxresourcepertype_1_tree=null;
        var description_2_tree=null;
        var serviceclass_3_tree=null;
        var string_literal107_tree=null;
        var char_literal108_tree=null;
        var string_literal109_tree=null;
        var string_literal110_tree=null;
        var string_literal111_tree=null;
        var char_literal112_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:130:19: ( 'provider' name_0= STRING ( '{' ( 'maxResourcePerType' maxresourcepertype_1= INT )? ( 'description' description_2= STRING )? ( 'serviceClass' serviceclass_3= STRING )? '}' )? )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:131:2: 'provider' name_0= STRING ( '{' ( 'maxResourcePerType' maxresourcepertype_1= INT )? ( 'description' description_2= STRING )? ( 'serviceClass' serviceclass_3= STRING )? '}' )?
            root_0 = this.adaptor.nil();

            string_literal107=this.match(this.input,51,AutoExpParser.FOLLOW_51_in_rule_CloudProvider817); 
            string_literal107_tree = this.adaptor.create(string_literal107);
            this.adaptor.addChild(root_0, string_literal107_tree);

            name_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_CloudProvider821); 
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
                    char_literal108=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_CloudProvider825); 
                    char_literal108_tree = this.adaptor.create(char_literal108);
                    this.adaptor.addChild(root_0, char_literal108_tree);

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:133:2: ( 'maxResourcePerType' maxresourcepertype_1= INT )?
                    var alt44=2;
                    var LA44_0 = this.input.LA(1);

                    if ( (LA44_0==52) ) {
                        alt44=1;
                    }
                    switch (alt44) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:133:3: 'maxResourcePerType' maxresourcepertype_1= INT
                            string_literal109=this.match(this.input,52,AutoExpParser.FOLLOW_52_in_rule_CloudProvider829); 
                            string_literal109_tree = this.adaptor.create(string_literal109);
                            this.adaptor.addChild(root_0, string_literal109_tree);

                            maxresourcepertype_1=this.match(this.input,INT,AutoExpParser.FOLLOW_INT_in_rule_CloudProvider833); 
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
                            string_literal110=this.match(this.input,14,AutoExpParser.FOLLOW_14_in_rule_CloudProvider841); 
                            string_literal110_tree = this.adaptor.create(string_literal110);
                            this.adaptor.addChild(root_0, string_literal110_tree);

                            description_2=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_CloudProvider845); 
                            description_2_tree = this.adaptor.create(description_2);
                            this.adaptor.addChild(root_0, description_2_tree);



                            break;

                    }

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:135:3: ( 'serviceClass' serviceclass_3= STRING )?
                    var alt46=2;
                    var LA46_0 = this.input.LA(1);

                    if ( (LA46_0==53) ) {
                        alt46=1;
                    }
                    switch (alt46) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:135:4: 'serviceClass' serviceclass_3= STRING
                            string_literal111=this.match(this.input,53,AutoExpParser.FOLLOW_53_in_rule_CloudProvider853); 
                            string_literal111_tree = this.adaptor.create(string_literal111);
                            this.adaptor.addChild(root_0, string_literal111_tree);

                            serviceclass_3=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_CloudProvider857); 
                            serviceclass_3_tree = this.adaptor.create(serviceclass_3);
                            this.adaptor.addChild(root_0, serviceclass_3_tree);



                            break;

                    }

                    char_literal112=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_CloudProvider864); 
                    char_literal112_tree = this.adaptor.create(char_literal112);
                    this.adaptor.addChild(root_0, char_literal112_tree);



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
        var string_literal113 = null;

        var name_0_tree=null;
        var numberofinstances_1_tree=null;
        var string_literal113_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:142:18: (name_0= STRING ( 'instances' numberofinstances_1= INT )? )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:144:2: name_0= STRING ( 'instances' numberofinstances_1= INT )?
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_InstanceType883); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:145:2: ( 'instances' numberofinstances_1= INT )?
            var alt48=2;
            var LA48_0 = this.input.LA(1);

            if ( (LA48_0==54) ) {
                alt48=1;
            }
            switch (alt48) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:145:3: 'instances' numberofinstances_1= INT
                    string_literal113=this.match(this.input,54,AutoExpParser.FOLLOW_54_in_rule_InstanceType887); 
                    string_literal113_tree = this.adaptor.create(string_literal113);
                    this.adaptor.addChild(root_0, string_literal113_tree);

                    numberofinstances_1=this.match(this.input,INT,AutoExpParser.FOLLOW_INT_in_rule_InstanceType891); 
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
        var char_literal114 = null;
        var string_literal115 = null;
        var string_literal116 = null;
        var string_literal117 = null;
        var string_literal118 = null;
        var string_literal119 = null;
        var char_literal120 = null;
        var char_literal121 = null;
        var char_literal122 = null;
        var char_literal123 = null;
        var list_zones_5=null;
        var list_zones_6=null;
         var status_2 = null;
        var zones_5 = null;
        var zones_6 = null;
        var name_0_tree=null;
        var endpoint_1_tree=null;
        var city_3_tree=null;
        var geographicregion_4_tree=null;
        var char_literal114_tree=null;
        var string_literal115_tree=null;
        var string_literal116_tree=null;
        var string_literal117_tree=null;
        var string_literal118_tree=null;
        var string_literal119_tree=null;
        var char_literal120_tree=null;
        var char_literal121_tree=null;
        var char_literal122_tree=null;
        var char_literal123_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:150:12: (name_0= STRING ( '{' ( 'endpoint' endpoint_1= STRING )? ( 'status' status_2= rule_StatusType )? ( 'city' city_3= STRING )? ( 'geographicRegion' geographicregion_4= INT )? ( 'zones' '{' zones_5+= rule_Zone ( ',' zones_6+= rule_Zone )* '}' )? '}' )? )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:151:2: name_0= STRING ( '{' ( 'endpoint' endpoint_1= STRING )? ( 'status' status_2= rule_StatusType )? ( 'city' city_3= STRING )? ( 'geographicRegion' geographicregion_4= INT )? ( 'zones' '{' zones_5+= rule_Zone ( ',' zones_6+= rule_Zone )* '}' )? '}' )?
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Region906); 
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
                    char_literal114=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Region910); 
                    char_literal114_tree = this.adaptor.create(char_literal114);
                    this.adaptor.addChild(root_0, char_literal114_tree);

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:153:2: ( 'endpoint' endpoint_1= STRING )?
                    var alt49=2;
                    var LA49_0 = this.input.LA(1);

                    if ( (LA49_0==55) ) {
                        alt49=1;
                    }
                    switch (alt49) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:153:3: 'endpoint' endpoint_1= STRING
                            string_literal115=this.match(this.input,55,AutoExpParser.FOLLOW_55_in_rule_Region914); 
                            string_literal115_tree = this.adaptor.create(string_literal115);
                            this.adaptor.addChild(root_0, string_literal115_tree);

                            endpoint_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Region918); 
                            endpoint_1_tree = this.adaptor.create(endpoint_1);
                            this.adaptor.addChild(root_0, endpoint_1_tree);



                            break;

                    }

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:154:2: ( 'status' status_2= rule_StatusType )?
                    var alt50=2;
                    var LA50_0 = this.input.LA(1);

                    if ( (LA50_0==56) ) {
                        alt50=1;
                    }
                    switch (alt50) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:154:3: 'status' status_2= rule_StatusType
                            string_literal116=this.match(this.input,56,AutoExpParser.FOLLOW_56_in_rule_Region924); 
                            string_literal116_tree = this.adaptor.create(string_literal116);
                            this.adaptor.addChild(root_0, string_literal116_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_StatusType_in_rule_Region928);
                            status_2=this.rule_StatusType();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, status_2.getTree());


                            break;

                    }

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:155:2: ( 'city' city_3= STRING )?
                    var alt51=2;
                    var LA51_0 = this.input.LA(1);

                    if ( (LA51_0==57) ) {
                        alt51=1;
                    }
                    switch (alt51) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:155:3: 'city' city_3= STRING
                            string_literal117=this.match(this.input,57,AutoExpParser.FOLLOW_57_in_rule_Region934); 
                            string_literal117_tree = this.adaptor.create(string_literal117);
                            this.adaptor.addChild(root_0, string_literal117_tree);

                            city_3=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Region938); 
                            city_3_tree = this.adaptor.create(city_3);
                            this.adaptor.addChild(root_0, city_3_tree);



                            break;

                    }

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:156:2: ( 'geographicRegion' geographicregion_4= INT )?
                    var alt52=2;
                    var LA52_0 = this.input.LA(1);

                    if ( (LA52_0==58) ) {
                        alt52=1;
                    }
                    switch (alt52) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:156:3: 'geographicRegion' geographicregion_4= INT
                            string_literal118=this.match(this.input,58,AutoExpParser.FOLLOW_58_in_rule_Region944); 
                            string_literal118_tree = this.adaptor.create(string_literal118);
                            this.adaptor.addChild(root_0, string_literal118_tree);

                            geographicregion_4=this.match(this.input,INT,AutoExpParser.FOLLOW_INT_in_rule_Region948); 
                            geographicregion_4_tree = this.adaptor.create(geographicregion_4);
                            this.adaptor.addChild(root_0, geographicregion_4_tree);



                            break;

                    }

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:157:2: ( 'zones' '{' zones_5+= rule_Zone ( ',' zones_6+= rule_Zone )* '}' )?
                    var alt54=2;
                    var LA54_0 = this.input.LA(1);

                    if ( (LA54_0==59) ) {
                        alt54=1;
                    }
                    switch (alt54) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:157:3: 'zones' '{' zones_5+= rule_Zone ( ',' zones_6+= rule_Zone )* '}'
                            string_literal119=this.match(this.input,59,AutoExpParser.FOLLOW_59_in_rule_Region954); 
                            string_literal119_tree = this.adaptor.create(string_literal119);
                            this.adaptor.addChild(root_0, string_literal119_tree);

                            char_literal120=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Region956); 
                            char_literal120_tree = this.adaptor.create(char_literal120);
                            this.adaptor.addChild(root_0, char_literal120_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Zone_in_rule_Region960);
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
                                    char_literal121=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Region964); 
                                    char_literal121_tree = this.adaptor.create(char_literal121);
                                    this.adaptor.addChild(root_0, char_literal121_tree);

                                    this.pushFollow(AutoExpParser.FOLLOW_rule_Zone_in_rule_Region968);
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

                            char_literal122=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Region971); 
                            char_literal122_tree = this.adaptor.create(char_literal122);
                            this.adaptor.addChild(root_0, char_literal122_tree);



                            break;

                    }

                    char_literal123=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Region976); 
                    char_literal123_tree = this.adaptor.create(char_literal123);
                    this.adaptor.addChild(root_0, char_literal123_tree);



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
            if ( (this.input.LA(1)>=60 && this.input.LA(1)<=61) ) {
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

            name_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Zone1017); 
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
                    status_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Zone1023); 
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
        var string_literal124 = null;
        var string_literal125 = null;

        var accesskey_0_tree=null;
        var secretkey_1_tree=null;
        var string_literal124_tree=null;
        var string_literal125_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:180:15: ( 'access-key' accesskey_0= STRING 'secret-key' secretkey_1= STRING )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:181:2: 'access-key' accesskey_0= STRING 'secret-key' secretkey_1= STRING
            root_0 = this.adaptor.nil();

            string_literal124=this.match(this.input,62,AutoExpParser.FOLLOW_62_in_rule_AccessKey1037); 
            string_literal124_tree = this.adaptor.create(string_literal124);
            this.adaptor.addChild(root_0, string_literal124_tree);

            accesskey_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_AccessKey1041); 
            accesskey_0_tree = this.adaptor.create(accesskey_0);
            this.adaptor.addChild(root_0, accesskey_0_tree);

            string_literal125=this.match(this.input,63,AutoExpParser.FOLLOW_63_in_rule_AccessKey1044); 
            string_literal125_tree = this.adaptor.create(string_literal125);
            this.adaptor.addChild(root_0, string_literal125_tree);

            secretkey_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_AccessKey1047); 
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
            if ( (this.input.LA(1)>=64 && this.input.LA(1)<=66) ) {
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

         var rule_Abstract_Impl126 = null;
         var rule_SimpleAbstract127 = null;
         var rule_StructuredAbstract128 = null;


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

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Abstract_Impl_in_rule_Abstract1094);
                    rule_Abstract_Impl126=this.rule_Abstract_Impl();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, rule_Abstract_Impl126.getTree());


                    break;
                case 2 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:198:23: rule_SimpleAbstract
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AutoExpParser.FOLLOW_rule_SimpleAbstract_in_rule_Abstract1098);
                    rule_SimpleAbstract127=this.rule_SimpleAbstract();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, rule_SimpleAbstract127.getTree());


                    break;
                case 3 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:198:45: rule_StructuredAbstract
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AutoExpParser.FOLLOW_rule_StructuredAbstract_in_rule_Abstract1102);
                    rule_StructuredAbstract128=this.rule_StructuredAbstract();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, rule_StructuredAbstract128.getTree());


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

         var rule_Goal_Impl129 = null;
         var rule_SimpleGoal130 = null;
         var rule_StructuredGoal131 = null;


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

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Goal_Impl_in_rule_Goal1113);
                    rule_Goal_Impl129=this.rule_Goal_Impl();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, rule_Goal_Impl129.getTree());


                    break;
                case 2 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:203:19: rule_SimpleGoal
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AutoExpParser.FOLLOW_rule_SimpleGoal_in_rule_Goal1117);
                    rule_SimpleGoal130=this.rule_SimpleGoal();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, rule_SimpleGoal130.getTree());


                    break;
                case 3 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:203:37: rule_StructuredGoal
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AutoExpParser.FOLLOW_rule_StructuredGoal_in_rule_Goal1121);
                    rule_StructuredGoal131=this.rule_StructuredGoal();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, rule_StructuredGoal131.getTree());


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
        var char_literal132 = null;
        var string_literal133 = null;
        var string_literal134 = null;
        var string_literal135 = null;
        var char_literal136 = null;
        var char_literal137 = null;
        var char_literal138 = null;
        var string_literal139 = null;
        var char_literal140 = null;
        var char_literal141 = null;
        var char_literal142 = null;
        var char_literal143 = null;
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
        var char_literal132_tree=null;
        var string_literal133_tree=null;
        var string_literal134_tree=null;
        var string_literal135_tree=null;
        var char_literal136_tree=null;
        var char_literal137_tree=null;
        var char_literal138_tree=null;
        var string_literal139_tree=null;
        var char_literal140_tree=null;
        var char_literal141_tree=null;
        var char_literal142_tree=null;
        var char_literal143_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:207:25: ( '{' ( 'type' type_0= rule_DesignType )? 'runs' runs_1= INT ( 'Restrictions' '{' restrictions_2+= rule_Restriction ( ',' restrictions_3+= rule_Restriction )* '}' )? ( 'Context Variables' '{' contextvariables_4+= rule_ContextVariable ( ',' contextvariables_5+= rule_ContextVariable )* '}' )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:208:2: '{' ( 'type' type_0= rule_DesignType )? 'runs' runs_1= INT ( 'Restrictions' '{' restrictions_2+= rule_Restriction ( ',' restrictions_3+= rule_Restriction )* '}' )? ( 'Context Variables' '{' contextvariables_4+= rule_ContextVariable ( ',' contextvariables_5+= rule_ContextVariable )* '}' )? '}'
            root_0 = this.adaptor.nil();

            char_literal132=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ExperimentalDesign1132); 
            char_literal132_tree = this.adaptor.create(char_literal132);
            this.adaptor.addChild(root_0, char_literal132_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:209:2: ( 'type' type_0= rule_DesignType )?
            var alt59=2;
            var LA59_0 = this.input.LA(1);

            if ( (LA59_0==67) ) {
                alt59=1;
            }
            switch (alt59) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:209:3: 'type' type_0= rule_DesignType
                    string_literal133=this.match(this.input,67,AutoExpParser.FOLLOW_67_in_rule_ExperimentalDesign1136); 
                    string_literal133_tree = this.adaptor.create(string_literal133);
                    this.adaptor.addChild(root_0, string_literal133_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_DesignType_in_rule_ExperimentalDesign1140);
                    type_0=this.rule_DesignType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, type_0.getTree());


                    break;

            }

            string_literal134=this.match(this.input,68,AutoExpParser.FOLLOW_68_in_rule_ExperimentalDesign1145); 
            string_literal134_tree = this.adaptor.create(string_literal134);
            this.adaptor.addChild(root_0, string_literal134_tree);

            runs_1=this.match(this.input,INT,AutoExpParser.FOLLOW_INT_in_rule_ExperimentalDesign1149); 
            runs_1_tree = this.adaptor.create(runs_1);
            this.adaptor.addChild(root_0, runs_1_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:212:2: ( 'Restrictions' '{' restrictions_2+= rule_Restriction ( ',' restrictions_3+= rule_Restriction )* '}' )?
            var alt61=2;
            var LA61_0 = this.input.LA(1);

            if ( (LA61_0==69) ) {
                alt61=1;
            }
            switch (alt61) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:212:3: 'Restrictions' '{' restrictions_2+= rule_Restriction ( ',' restrictions_3+= rule_Restriction )* '}'
                    string_literal135=this.match(this.input,69,AutoExpParser.FOLLOW_69_in_rule_ExperimentalDesign1155); 
                    string_literal135_tree = this.adaptor.create(string_literal135);
                    this.adaptor.addChild(root_0, string_literal135_tree);

                    char_literal136=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ExperimentalDesign1157); 
                    char_literal136_tree = this.adaptor.create(char_literal136);
                    this.adaptor.addChild(root_0, char_literal136_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Restriction_in_rule_ExperimentalDesign1161);
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
                            char_literal137=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_ExperimentalDesign1164); 
                            char_literal137_tree = this.adaptor.create(char_literal137);
                            this.adaptor.addChild(root_0, char_literal137_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Restriction_in_rule_ExperimentalDesign1168);
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

                    char_literal138=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ExperimentalDesign1172); 
                    char_literal138_tree = this.adaptor.create(char_literal138);
                    this.adaptor.addChild(root_0, char_literal138_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:214:2: ( 'Context Variables' '{' contextvariables_4+= rule_ContextVariable ( ',' contextvariables_5+= rule_ContextVariable )* '}' )?
            var alt63=2;
            var LA63_0 = this.input.LA(1);

            if ( (LA63_0==70) ) {
                alt63=1;
            }
            switch (alt63) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:214:3: 'Context Variables' '{' contextvariables_4+= rule_ContextVariable ( ',' contextvariables_5+= rule_ContextVariable )* '}'
                    string_literal139=this.match(this.input,70,AutoExpParser.FOLLOW_70_in_rule_ExperimentalDesign1180); 
                    string_literal139_tree = this.adaptor.create(string_literal139);
                    this.adaptor.addChild(root_0, string_literal139_tree);

                    char_literal140=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ExperimentalDesign1182); 
                    char_literal140_tree = this.adaptor.create(char_literal140);
                    this.adaptor.addChild(root_0, char_literal140_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_ContextVariable_in_rule_ExperimentalDesign1186);
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
                            char_literal141=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_ExperimentalDesign1189); 
                            char_literal141_tree = this.adaptor.create(char_literal141);
                            this.adaptor.addChild(root_0, char_literal141_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_ContextVariable_in_rule_ExperimentalDesign1193);
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

                    char_literal142=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ExperimentalDesign1197); 
                    char_literal142_tree = this.adaptor.create(char_literal142);
                    this.adaptor.addChild(root_0, char_literal142_tree);



                    break;

            }

            char_literal143=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ExperimentalDesign1202); 
            char_literal143_tree = this.adaptor.create(char_literal143);
            this.adaptor.addChild(root_0, char_literal143_tree);




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
        var string_literal144 = null;
        var char_literal145 = null;
        var char_literal146 = null;
        var char_literal147 = null;
        var objects_1 = null;
        var objects_2 = null;
        var list_objects_1=null;
        var list_objects_2=null;

        var treatment_0_tree=null;
        var string_literal144_tree=null;
        var char_literal145_tree=null;
        var char_literal146_tree=null;
        var char_literal147_tree=null;
        var objects_1_tree=null;
        var objects_2_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:219:18: (treatment_0= ID 'objects' '{' objects_1+= ID ( ',' objects_2+= ID )* '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:220:2: treatment_0= ID 'objects' '{' objects_1+= ID ( ',' objects_2+= ID )* '}'
            root_0 = this.adaptor.nil();

            treatment_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Restriction1215); 
            treatment_0_tree = this.adaptor.create(treatment_0);
            this.adaptor.addChild(root_0, treatment_0_tree);

            string_literal144=this.match(this.input,71,AutoExpParser.FOLLOW_71_in_rule_Restriction1217); 
            string_literal144_tree = this.adaptor.create(string_literal144);
            this.adaptor.addChild(root_0, string_literal144_tree);

            char_literal145=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Restriction1219); 
            char_literal145_tree = this.adaptor.create(char_literal145);
            this.adaptor.addChild(root_0, char_literal145_tree);

            objects_1=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Restriction1223); 
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
                    char_literal146=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Restriction1226); 
                    char_literal146_tree = this.adaptor.create(char_literal146);
                    this.adaptor.addChild(root_0, char_literal146_tree);

                    objects_2=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Restriction1230); 
                    objects_2_tree = this.adaptor.create(objects_2);
                    this.adaptor.addChild(root_0, objects_2_tree);

                    if (org.antlr.lang.isNull(list_objects_2)) list_objects_2 = [];
                    list_objects_2.push(objects_2);



                    break;

                default :
                    break loop64;
                }
            } while (true);

            char_literal147=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Restriction1234); 
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
    rule_Execution_return: (function() {
        AutoExpParser.rule_Execution_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_Execution_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:225:1: rule_Execution : name_0= ID '{' ( 'command' cmd_1= STRING )? ( 'timeout' timeout_2= rule_BigDecimalType )? ( 'preconditions' preconditions_3= rule_Preconditions )? ( 'result' result_4= rule_File )? ( 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}' )? '}' ;
    // $ANTLR start "rule_Execution"
    rule_Execution: function() {
        var retval = new AutoExpParser.rule_Execution_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var cmd_1 = null;
        var char_literal148 = null;
        var string_literal149 = null;
        var string_literal150 = null;
        var string_literal151 = null;
        var string_literal152 = null;
        var string_literal153 = null;
        var char_literal154 = null;
        var char_literal155 = null;
        var char_literal156 = null;
        var char_literal157 = null;
        var list_files_5=null;
        var list_files_6=null;
         var timeout_2 = null;
         var preconditions_3 = null;
         var result_4 = null;
        var files_5 = null;
        var files_6 = null;
        var name_0_tree=null;
        var cmd_1_tree=null;
        var char_literal148_tree=null;
        var string_literal149_tree=null;
        var string_literal150_tree=null;
        var string_literal151_tree=null;
        var string_literal152_tree=null;
        var string_literal153_tree=null;
        var char_literal154_tree=null;
        var char_literal155_tree=null;
        var char_literal156_tree=null;
        var char_literal157_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:225:16: (name_0= ID '{' ( 'command' cmd_1= STRING )? ( 'timeout' timeout_2= rule_BigDecimalType )? ( 'preconditions' preconditions_3= rule_Preconditions )? ( 'result' result_4= rule_File )? ( 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}' )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:226:2: name_0= ID '{' ( 'command' cmd_1= STRING )? ( 'timeout' timeout_2= rule_BigDecimalType )? ( 'preconditions' preconditions_3= rule_Preconditions )? ( 'result' result_4= rule_File )? ( 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}' )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Execution1249); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal148=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Execution1252); 
            char_literal148_tree = this.adaptor.create(char_literal148);
            this.adaptor.addChild(root_0, char_literal148_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:228:2: ( 'command' cmd_1= STRING )?
            var alt65=2;
            var LA65_0 = this.input.LA(1);

            if ( (LA65_0==72) ) {
                alt65=1;
            }
            switch (alt65) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:228:3: 'command' cmd_1= STRING
                    string_literal149=this.match(this.input,72,AutoExpParser.FOLLOW_72_in_rule_Execution1256); 
                    string_literal149_tree = this.adaptor.create(string_literal149);
                    this.adaptor.addChild(root_0, string_literal149_tree);

                    cmd_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Execution1260); 
                    cmd_1_tree = this.adaptor.create(cmd_1);
                    this.adaptor.addChild(root_0, cmd_1_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:229:2: ( 'timeout' timeout_2= rule_BigDecimalType )?
            var alt66=2;
            var LA66_0 = this.input.LA(1);

            if ( (LA66_0==73) ) {
                alt66=1;
            }
            switch (alt66) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:229:3: 'timeout' timeout_2= rule_BigDecimalType
                    string_literal150=this.match(this.input,73,AutoExpParser.FOLLOW_73_in_rule_Execution1266); 
                    string_literal150_tree = this.adaptor.create(string_literal150);
                    this.adaptor.addChild(root_0, string_literal150_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_BigDecimalType_in_rule_Execution1270);
                    timeout_2=this.rule_BigDecimalType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, timeout_2.getTree());


                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:230:2: ( 'preconditions' preconditions_3= rule_Preconditions )?
            var alt67=2;
            var LA67_0 = this.input.LA(1);

            if ( (LA67_0==32) ) {
                alt67=1;
            }
            switch (alt67) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:230:3: 'preconditions' preconditions_3= rule_Preconditions
                    string_literal151=this.match(this.input,32,AutoExpParser.FOLLOW_32_in_rule_Execution1276); 
                    string_literal151_tree = this.adaptor.create(string_literal151);
                    this.adaptor.addChild(root_0, string_literal151_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Preconditions_in_rule_Execution1280);
                    preconditions_3=this.rule_Preconditions();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, preconditions_3.getTree());


                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:231:2: ( 'result' result_4= rule_File )?
            var alt68=2;
            var LA68_0 = this.input.LA(1);

            if ( (LA68_0==74) ) {
                alt68=1;
            }
            switch (alt68) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:231:3: 'result' result_4= rule_File
                    string_literal152=this.match(this.input,74,AutoExpParser.FOLLOW_74_in_rule_Execution1286); 
                    string_literal152_tree = this.adaptor.create(string_literal152);
                    this.adaptor.addChild(root_0, string_literal152_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_File_in_rule_Execution1290);
                    result_4=this.rule_File();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, result_4.getTree());


                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:232:2: ( 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}' )?
            var alt70=2;
            var LA70_0 = this.input.LA(1);

            if ( (LA70_0==75) ) {
                alt70=1;
            }
            switch (alt70) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:232:3: 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}'
                    string_literal153=this.match(this.input,75,AutoExpParser.FOLLOW_75_in_rule_Execution1296); 
                    string_literal153_tree = this.adaptor.create(string_literal153);
                    this.adaptor.addChild(root_0, string_literal153_tree);

                    char_literal154=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Execution1298); 
                    char_literal154_tree = this.adaptor.create(char_literal154);
                    this.adaptor.addChild(root_0, char_literal154_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_File_in_rule_Execution1302);
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
                            char_literal155=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Execution1305); 
                            char_literal155_tree = this.adaptor.create(char_literal155);
                            this.adaptor.addChild(root_0, char_literal155_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_File_in_rule_Execution1309);
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

                    char_literal156=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Execution1313); 
                    char_literal156_tree = this.adaptor.create(char_literal156);
                    this.adaptor.addChild(root_0, char_literal156_tree);



                    break;

            }

            char_literal157=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Execution1318); 
            char_literal157_tree = this.adaptor.create(char_literal157);
            this.adaptor.addChild(root_0, char_literal157_tree);




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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:237:1: rule_Analysis : name_0= ID '{' ( 'significance' significancelevel_1= rule_BigDecimalType )? '}' ;
    // $ANTLR start "rule_Analysis"
    rule_Analysis: function() {
        var retval = new AutoExpParser.rule_Analysis_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var char_literal158 = null;
        var string_literal159 = null;
        var char_literal160 = null;
         var significancelevel_1 = null;

        var name_0_tree=null;
        var char_literal158_tree=null;
        var string_literal159_tree=null;
        var char_literal160_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:237:15: (name_0= ID '{' ( 'significance' significancelevel_1= rule_BigDecimalType )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:239:2: name_0= ID '{' ( 'significance' significancelevel_1= rule_BigDecimalType )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Analysis1333); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal158=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Analysis1336); 
            char_literal158_tree = this.adaptor.create(char_literal158);
            this.adaptor.addChild(root_0, char_literal158_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:241:2: ( 'significance' significancelevel_1= rule_BigDecimalType )?
            var alt71=2;
            var LA71_0 = this.input.LA(1);

            if ( (LA71_0==76) ) {
                alt71=1;
            }
            switch (alt71) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:241:3: 'significance' significancelevel_1= rule_BigDecimalType
                    string_literal159=this.match(this.input,76,AutoExpParser.FOLLOW_76_in_rule_Analysis1340); 
                    string_literal159_tree = this.adaptor.create(string_literal159);
                    this.adaptor.addChild(root_0, string_literal159_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_BigDecimalType_in_rule_Analysis1344);
                    significancelevel_1=this.rule_BigDecimalType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, significancelevel_1.getTree());


                    break;

            }

            char_literal160=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Analysis1349); 
            char_literal160_tree = this.adaptor.create(char_literal160);
            this.adaptor.addChild(root_0, char_literal160_tree);




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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:246:1: rule_ExperimentalObject : name_0= ID '{' 'description' description_1= STRING ( 'group' objectgroup_2= ID )? ( 'parameters' '{' parameters_3+= rule_Parameter ( ',' parameters_4+= rule_Parameter )* '}' )? ( 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}' )? '}' ;
    // $ANTLR start "rule_ExperimentalObject"
    rule_ExperimentalObject: function() {
        var retval = new AutoExpParser.rule_ExperimentalObject_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var description_1 = null;
        var objectgroup_2 = null;
        var char_literal161 = null;
        var string_literal162 = null;
        var string_literal163 = null;
        var string_literal164 = null;
        var char_literal165 = null;
        var char_literal166 = null;
        var char_literal167 = null;
        var string_literal168 = null;
        var char_literal169 = null;
        var char_literal170 = null;
        var char_literal171 = null;
        var char_literal172 = null;
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
        var objectgroup_2_tree=null;
        var char_literal161_tree=null;
        var string_literal162_tree=null;
        var string_literal163_tree=null;
        var string_literal164_tree=null;
        var char_literal165_tree=null;
        var char_literal166_tree=null;
        var char_literal167_tree=null;
        var string_literal168_tree=null;
        var char_literal169_tree=null;
        var char_literal170_tree=null;
        var char_literal171_tree=null;
        var char_literal172_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:246:25: (name_0= ID '{' 'description' description_1= STRING ( 'group' objectgroup_2= ID )? ( 'parameters' '{' parameters_3+= rule_Parameter ( ',' parameters_4+= rule_Parameter )* '}' )? ( 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}' )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:248:2: name_0= ID '{' 'description' description_1= STRING ( 'group' objectgroup_2= ID )? ( 'parameters' '{' parameters_3+= rule_Parameter ( ',' parameters_4+= rule_Parameter )* '}' )? ( 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}' )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ExperimentalObject1364); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal161=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ExperimentalObject1367); 
            char_literal161_tree = this.adaptor.create(char_literal161);
            this.adaptor.addChild(root_0, char_literal161_tree);

            string_literal162=this.match(this.input,14,AutoExpParser.FOLLOW_14_in_rule_ExperimentalObject1370); 
            string_literal162_tree = this.adaptor.create(string_literal162);
            this.adaptor.addChild(root_0, string_literal162_tree);

            description_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_ExperimentalObject1374); 
            description_1_tree = this.adaptor.create(description_1);
            this.adaptor.addChild(root_0, description_1_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:251:2: ( 'group' objectgroup_2= ID )?
            var alt72=2;
            var LA72_0 = this.input.LA(1);

            if ( (LA72_0==77) ) {
                alt72=1;
            }
            switch (alt72) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:251:3: 'group' objectgroup_2= ID
                    string_literal163=this.match(this.input,77,AutoExpParser.FOLLOW_77_in_rule_ExperimentalObject1378); 
                    string_literal163_tree = this.adaptor.create(string_literal163);
                    this.adaptor.addChild(root_0, string_literal163_tree);

                    objectgroup_2=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ExperimentalObject1382); 
                    objectgroup_2_tree = this.adaptor.create(objectgroup_2);
                    this.adaptor.addChild(root_0, objectgroup_2_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:252:2: ( 'parameters' '{' parameters_3+= rule_Parameter ( ',' parameters_4+= rule_Parameter )* '}' )?
            var alt74=2;
            var LA74_0 = this.input.LA(1);

            if ( (LA74_0==78) ) {
                alt74=1;
            }
            switch (alt74) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:252:3: 'parameters' '{' parameters_3+= rule_Parameter ( ',' parameters_4+= rule_Parameter )* '}'
                    string_literal164=this.match(this.input,78,AutoExpParser.FOLLOW_78_in_rule_ExperimentalObject1388); 
                    string_literal164_tree = this.adaptor.create(string_literal164);
                    this.adaptor.addChild(root_0, string_literal164_tree);

                    char_literal165=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ExperimentalObject1390); 
                    char_literal165_tree = this.adaptor.create(char_literal165);
                    this.adaptor.addChild(root_0, char_literal165_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Parameter_in_rule_ExperimentalObject1394);
                    parameters_3=this.rule_Parameter();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, parameters_3.getTree());
                    if (org.antlr.lang.isNull(list_parameters_3)) list_parameters_3 = [];
                    list_parameters_3.push(parameters_3.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:252:49: ( ',' parameters_4+= rule_Parameter )*
                    loop73:
                    do {
                        var alt73=2;
                        var LA73_0 = this.input.LA(1);

                        if ( (LA73_0==12) ) {
                            alt73=1;
                        }


                        switch (alt73) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:252:50: ',' parameters_4+= rule_Parameter
                            char_literal166=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_ExperimentalObject1397); 
                            char_literal166_tree = this.adaptor.create(char_literal166);
                            this.adaptor.addChild(root_0, char_literal166_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Parameter_in_rule_ExperimentalObject1401);
                            parameters_4=this.rule_Parameter();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, parameters_4.getTree());
                            if (org.antlr.lang.isNull(list_parameters_4)) list_parameters_4 = [];
                            list_parameters_4.push(parameters_4.getTree());



                            break;

                        default :
                            break loop73;
                        }
                    } while (true);

                    char_literal167=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ExperimentalObject1405); 
                    char_literal167_tree = this.adaptor.create(char_literal167);
                    this.adaptor.addChild(root_0, char_literal167_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:253:2: ( 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}' )?
            var alt76=2;
            var LA76_0 = this.input.LA(1);

            if ( (LA76_0==75) ) {
                alt76=1;
            }
            switch (alt76) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:253:3: 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}'
                    string_literal168=this.match(this.input,75,AutoExpParser.FOLLOW_75_in_rule_ExperimentalObject1411); 
                    string_literal168_tree = this.adaptor.create(string_literal168);
                    this.adaptor.addChild(root_0, string_literal168_tree);

                    char_literal169=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ExperimentalObject1413); 
                    char_literal169_tree = this.adaptor.create(char_literal169);
                    this.adaptor.addChild(root_0, char_literal169_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_File_in_rule_ExperimentalObject1417);
                    files_5=this.rule_File();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, files_5.getTree());
                    if (org.antlr.lang.isNull(list_files_5)) list_files_5 = [];
                    list_files_5.push(files_5.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:253:34: ( ',' files_6+= rule_File )*
                    loop75:
                    do {
                        var alt75=2;
                        var LA75_0 = this.input.LA(1);

                        if ( (LA75_0==12) ) {
                            alt75=1;
                        }


                        switch (alt75) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:253:35: ',' files_6+= rule_File
                            char_literal170=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_ExperimentalObject1420); 
                            char_literal170_tree = this.adaptor.create(char_literal170);
                            this.adaptor.addChild(root_0, char_literal170_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_File_in_rule_ExperimentalObject1424);
                            files_6=this.rule_File();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, files_6.getTree());
                            if (org.antlr.lang.isNull(list_files_6)) list_files_6 = [];
                            list_files_6.push(files_6.getTree());



                            break;

                        default :
                            break loop75;
                        }
                    } while (true);

                    char_literal171=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ExperimentalObject1428); 
                    char_literal171_tree = this.adaptor.create(char_literal171);
                    this.adaptor.addChild(root_0, char_literal171_tree);



                    break;

            }

            char_literal172=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ExperimentalObject1433); 
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
    rule_Abstract_Impl_return: (function() {
        AutoExpParser.rule_Abstract_Impl_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_Abstract_Impl_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:258:1: rule_Abstract_Impl : ;
    // $ANTLR start "rule_Abstract_Impl"
    rule_Abstract_Impl: function() {
        var retval = new AutoExpParser.rule_Abstract_Impl_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:258:20: ()
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:259:2: 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:263:1: rule_Author : name_0= ID '{' ( 'fullName' fullname_1= STRING )? ( 'institution' institution_2= STRING )? ( 'email' email_3= STRING )? '}' ;
    // $ANTLR start "rule_Author"
    rule_Author: function() {
        var retval = new AutoExpParser.rule_Author_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var fullname_1 = null;
        var institution_2 = null;
        var email_3 = null;
        var char_literal173 = null;
        var string_literal174 = null;
        var string_literal175 = null;
        var string_literal176 = null;
        var char_literal177 = null;

        var name_0_tree=null;
        var fullname_1_tree=null;
        var institution_2_tree=null;
        var email_3_tree=null;
        var char_literal173_tree=null;
        var string_literal174_tree=null;
        var string_literal175_tree=null;
        var string_literal176_tree=null;
        var char_literal177_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:263:13: (name_0= ID '{' ( 'fullName' fullname_1= STRING )? ( 'institution' institution_2= STRING )? ( 'email' email_3= STRING )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:265:2: name_0= ID '{' ( 'fullName' fullname_1= STRING )? ( 'institution' institution_2= STRING )? ( 'email' email_3= STRING )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Author1458); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal173=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Author1461); 
            char_literal173_tree = this.adaptor.create(char_literal173);
            this.adaptor.addChild(root_0, char_literal173_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:267:2: ( 'fullName' fullname_1= STRING )?
            var alt77=2;
            var LA77_0 = this.input.LA(1);

            if ( (LA77_0==79) ) {
                alt77=1;
            }
            switch (alt77) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:267:3: 'fullName' fullname_1= STRING
                    string_literal174=this.match(this.input,79,AutoExpParser.FOLLOW_79_in_rule_Author1465); 
                    string_literal174_tree = this.adaptor.create(string_literal174);
                    this.adaptor.addChild(root_0, string_literal174_tree);

                    fullname_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Author1469); 
                    fullname_1_tree = this.adaptor.create(fullname_1);
                    this.adaptor.addChild(root_0, fullname_1_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:268:2: ( 'institution' institution_2= STRING )?
            var alt78=2;
            var LA78_0 = this.input.LA(1);

            if ( (LA78_0==80) ) {
                alt78=1;
            }
            switch (alt78) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:268:3: 'institution' institution_2= STRING
                    string_literal175=this.match(this.input,80,AutoExpParser.FOLLOW_80_in_rule_Author1475); 
                    string_literal175_tree = this.adaptor.create(string_literal175);
                    this.adaptor.addChild(root_0, string_literal175_tree);

                    institution_2=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Author1479); 
                    institution_2_tree = this.adaptor.create(institution_2);
                    this.adaptor.addChild(root_0, institution_2_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:269:2: ( 'email' email_3= STRING )?
            var alt79=2;
            var LA79_0 = this.input.LA(1);

            if ( (LA79_0==81) ) {
                alt79=1;
            }
            switch (alt79) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:269:3: 'email' email_3= STRING
                    string_literal176=this.match(this.input,81,AutoExpParser.FOLLOW_81_in_rule_Author1485); 
                    string_literal176_tree = this.adaptor.create(string_literal176);
                    this.adaptor.addChild(root_0, string_literal176_tree);

                    email_3=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Author1489); 
                    email_3_tree = this.adaptor.create(email_3);
                    this.adaptor.addChild(root_0, email_3_tree);



                    break;

            }

            char_literal177=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Author1496); 
            char_literal177_tree = this.adaptor.create(char_literal177);
            this.adaptor.addChild(root_0, char_literal177_tree);




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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:275:1: rule_Keyword : description_0= STRING ;
    // $ANTLR start "rule_Keyword"
    rule_Keyword: function() {
        var retval = new AutoExpParser.rule_Keyword_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var description_0 = null;

        var description_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:275:14: (description_0= STRING )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:277:2: description_0= STRING
            root_0 = this.adaptor.nil();

            description_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Keyword1511); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:282:1: rule_Threat : name_0= ID '{' ( 'description' description_1= STRING )? ( 'type' type_2= rule_ThreatType )? ( 'CA' ca_3= STRING )? '}' ;
    // $ANTLR start "rule_Threat"
    rule_Threat: function() {
        var retval = new AutoExpParser.rule_Threat_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var description_1 = null;
        var ca_3 = null;
        var char_literal178 = null;
        var string_literal179 = null;
        var string_literal180 = null;
        var string_literal181 = null;
        var char_literal182 = null;
         var type_2 = null;

        var name_0_tree=null;
        var description_1_tree=null;
        var ca_3_tree=null;
        var char_literal178_tree=null;
        var string_literal179_tree=null;
        var string_literal180_tree=null;
        var string_literal181_tree=null;
        var char_literal182_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:282:13: (name_0= ID '{' ( 'description' description_1= STRING )? ( 'type' type_2= rule_ThreatType )? ( 'CA' ca_3= STRING )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:284:2: name_0= ID '{' ( 'description' description_1= STRING )? ( 'type' type_2= rule_ThreatType )? ( 'CA' ca_3= STRING )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Threat1528); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal178=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Threat1531); 
            char_literal178_tree = this.adaptor.create(char_literal178);
            this.adaptor.addChild(root_0, char_literal178_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:286:2: ( 'description' description_1= STRING )?
            var alt80=2;
            var LA80_0 = this.input.LA(1);

            if ( (LA80_0==14) ) {
                alt80=1;
            }
            switch (alt80) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:286:3: 'description' description_1= STRING
                    string_literal179=this.match(this.input,14,AutoExpParser.FOLLOW_14_in_rule_Threat1535); 
                    string_literal179_tree = this.adaptor.create(string_literal179);
                    this.adaptor.addChild(root_0, string_literal179_tree);

                    description_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Threat1539); 
                    description_1_tree = this.adaptor.create(description_1);
                    this.adaptor.addChild(root_0, description_1_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:287:2: ( 'type' type_2= rule_ThreatType )?
            var alt81=2;
            var LA81_0 = this.input.LA(1);

            if ( (LA81_0==67) ) {
                alt81=1;
            }
            switch (alt81) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:287:3: 'type' type_2= rule_ThreatType
                    string_literal180=this.match(this.input,67,AutoExpParser.FOLLOW_67_in_rule_Threat1545); 
                    string_literal180_tree = this.adaptor.create(string_literal180);
                    this.adaptor.addChild(root_0, string_literal180_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_ThreatType_in_rule_Threat1549);
                    type_2=this.rule_ThreatType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, type_2.getTree());


                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:288:2: ( 'CA' ca_3= STRING )?
            var alt82=2;
            var LA82_0 = this.input.LA(1);

            if ( (LA82_0==82) ) {
                alt82=1;
            }
            switch (alt82) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:288:3: 'CA' ca_3= STRING
                    string_literal181=this.match(this.input,82,AutoExpParser.FOLLOW_82_in_rule_Threat1555); 
                    string_literal181_tree = this.adaptor.create(string_literal181);
                    this.adaptor.addChild(root_0, string_literal181_tree);

                    ca_3=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Threat1559); 
                    ca_3_tree = this.adaptor.create(ca_3);
                    this.adaptor.addChild(root_0, ca_3_tree);



                    break;

            }

            char_literal182=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Threat1564); 
            char_literal182_tree = this.adaptor.create(char_literal182);
            this.adaptor.addChild(root_0, char_literal182_tree);




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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:293:1: rule_Goal_Impl : name_0= ID ;
    // $ANTLR start "rule_Goal_Impl"
    rule_Goal_Impl: function() {
        var retval = new AutoExpParser.rule_Goal_Impl_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;

        var name_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:293:16: (name_0= ID )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:295:2: name_0= ID
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Goal_Impl1579); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:299:1: rule_ResearchQuestion : name_0= ID '{' ( 'description' description_1= STRING )? ( 'goal' goal_2= ID )? '}' ;
    // $ANTLR start "rule_ResearchQuestion"
    rule_ResearchQuestion: function() {
        var retval = new AutoExpParser.rule_ResearchQuestion_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var description_1 = null;
        var goal_2 = null;
        var char_literal183 = null;
        var string_literal184 = null;
        var string_literal185 = null;
        var char_literal186 = null;

        var name_0_tree=null;
        var description_1_tree=null;
        var goal_2_tree=null;
        var char_literal183_tree=null;
        var string_literal184_tree=null;
        var string_literal185_tree=null;
        var char_literal186_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:299:23: (name_0= ID '{' ( 'description' description_1= STRING )? ( 'goal' goal_2= ID )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:301:2: name_0= ID '{' ( 'description' description_1= STRING )? ( 'goal' goal_2= ID )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ResearchQuestion1594); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal183=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ResearchQuestion1597); 
            char_literal183_tree = this.adaptor.create(char_literal183);
            this.adaptor.addChild(root_0, char_literal183_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:303:2: ( 'description' description_1= STRING )?
            var alt83=2;
            var LA83_0 = this.input.LA(1);

            if ( (LA83_0==14) ) {
                alt83=1;
            }
            switch (alt83) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:303:3: 'description' description_1= STRING
                    string_literal184=this.match(this.input,14,AutoExpParser.FOLLOW_14_in_rule_ResearchQuestion1601); 
                    string_literal184_tree = this.adaptor.create(string_literal184);
                    this.adaptor.addChild(root_0, string_literal184_tree);

                    description_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_ResearchQuestion1605); 
                    description_1_tree = this.adaptor.create(description_1);
                    this.adaptor.addChild(root_0, description_1_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:304:2: ( 'goal' goal_2= ID )?
            var alt84=2;
            var LA84_0 = this.input.LA(1);

            if ( (LA84_0==83) ) {
                alt84=1;
            }
            switch (alt84) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:304:3: 'goal' goal_2= ID
                    string_literal185=this.match(this.input,83,AutoExpParser.FOLLOW_83_in_rule_ResearchQuestion1611); 
                    string_literal185_tree = this.adaptor.create(string_literal185);
                    this.adaptor.addChild(root_0, string_literal185_tree);

                    goal_2=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ResearchQuestion1615); 
                    goal_2_tree = this.adaptor.create(goal_2);
                    this.adaptor.addChild(root_0, goal_2_tree);



                    break;

            }

            char_literal186=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ResearchQuestion1620); 
            char_literal186_tree = this.adaptor.create(char_literal186);
            this.adaptor.addChild(root_0, char_literal186_tree);




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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:309:1: rule_ResearchHypothesis : name_0= ID '{' formula_1= rule_ResearchHypothesisFormula ( 'description' description_2= STRING )? ( 'goal' goal_3= ID )? '}' ;
    // $ANTLR start "rule_ResearchHypothesis"
    rule_ResearchHypothesis: function() {
        var retval = new AutoExpParser.rule_ResearchHypothesis_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var description_2 = null;
        var goal_3 = null;
        var char_literal187 = null;
        var string_literal188 = null;
        var string_literal189 = null;
        var char_literal190 = null;
         var formula_1 = null;

        var name_0_tree=null;
        var description_2_tree=null;
        var goal_3_tree=null;
        var char_literal187_tree=null;
        var string_literal188_tree=null;
        var string_literal189_tree=null;
        var char_literal190_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:309:25: (name_0= ID '{' formula_1= rule_ResearchHypothesisFormula ( 'description' description_2= STRING )? ( 'goal' goal_3= ID )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:311:2: name_0= ID '{' formula_1= rule_ResearchHypothesisFormula ( 'description' description_2= STRING )? ( 'goal' goal_3= ID )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ResearchHypothesis1635); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal187=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ResearchHypothesis1638); 
            char_literal187_tree = this.adaptor.create(char_literal187);
            this.adaptor.addChild(root_0, char_literal187_tree);

            this.pushFollow(AutoExpParser.FOLLOW_rule_ResearchHypothesisFormula_in_rule_ResearchHypothesis1643);
            formula_1=this.rule_ResearchHypothesisFormula();

            this.state._fsp--;

            this.adaptor.addChild(root_0, formula_1.getTree());
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:314:2: ( 'description' description_2= STRING )?
            var alt85=2;
            var LA85_0 = this.input.LA(1);

            if ( (LA85_0==14) ) {
                alt85=1;
            }
            switch (alt85) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:314:3: 'description' description_2= STRING
                    string_literal188=this.match(this.input,14,AutoExpParser.FOLLOW_14_in_rule_ResearchHypothesis1647); 
                    string_literal188_tree = this.adaptor.create(string_literal188);
                    this.adaptor.addChild(root_0, string_literal188_tree);

                    description_2=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_ResearchHypothesis1651); 
                    description_2_tree = this.adaptor.create(description_2);
                    this.adaptor.addChild(root_0, description_2_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:315:2: ( 'goal' goal_3= ID )?
            var alt86=2;
            var LA86_0 = this.input.LA(1);

            if ( (LA86_0==83) ) {
                alt86=1;
            }
            switch (alt86) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:315:3: 'goal' goal_3= ID
                    string_literal189=this.match(this.input,83,AutoExpParser.FOLLOW_83_in_rule_ResearchHypothesis1657); 
                    string_literal189_tree = this.adaptor.create(string_literal189);
                    this.adaptor.addChild(root_0, string_literal189_tree);

                    goal_3=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ResearchHypothesis1661); 
                    goal_3_tree = this.adaptor.create(goal_3);
                    this.adaptor.addChild(root_0, goal_3_tree);



                    break;

            }

            char_literal190=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ResearchHypothesis1666); 
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
    rule_ResearchHypothesisFormula_return: (function() {
        AutoExpParser.rule_ResearchHypothesisFormula_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_ResearchHypothesisFormula_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:320:1: rule_ResearchHypothesisFormula : depvariable_0= ID treatment1_1= ID operator_2= rule_OperatorType treatment2_3= ID ;
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
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:320:32: (depvariable_0= ID treatment1_1= ID operator_2= rule_OperatorType treatment2_3= ID )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:322:2: depvariable_0= ID treatment1_1= ID operator_2= rule_OperatorType treatment2_3= ID
            root_0 = this.adaptor.nil();

            depvariable_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ResearchHypothesisFormula1681); 
            depvariable_0_tree = this.adaptor.create(depvariable_0);
            this.adaptor.addChild(root_0, depvariable_0_tree);

            treatment1_1=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ResearchHypothesisFormula1685); 
            treatment1_1_tree = this.adaptor.create(treatment1_1);
            this.adaptor.addChild(root_0, treatment1_1_tree);

            this.pushFollow(AutoExpParser.FOLLOW_rule_OperatorType_in_rule_ResearchHypothesisFormula1689);
            operator_2=this.rule_OperatorType();

            this.state._fsp--;

            this.adaptor.addChild(root_0, operator_2.getTree());
            treatment2_3=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ResearchHypothesisFormula1693); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:326:1: rule_OperatorType : typename_0= ( '<' | '=' | '!=' | '>' ) ;
    // $ANTLR start "rule_OperatorType"
    rule_OperatorType: function() {
        var retval = new AutoExpParser.rule_OperatorType_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var typename_0 = null;

        var typename_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:326:18: (typename_0= ( '<' | '=' | '!=' | '>' ) )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:327:2: typename_0= ( '<' | '=' | '!=' | '>' )
            root_0 = this.adaptor.nil();

            typename_0=this.input.LT(1);
            if ( (this.input.LA(1)>=84 && this.input.LA(1)<=87) ) {
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:331:1: rule_DependentVariable : ( rule_DependentVariable_Impl | rule_BuiltinDependentVariable | rule_CustomDependentVariable );
    // $ANTLR start "rule_DependentVariable"
    rule_DependentVariable: function() {
        var retval = new AutoExpParser.rule_DependentVariable_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var rule_DependentVariable_Impl191 = null;
         var rule_BuiltinDependentVariable192 = null;
         var rule_CustomDependentVariable193 = null;


        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:331:24: ( rule_DependentVariable_Impl | rule_BuiltinDependentVariable | rule_CustomDependentVariable )
            var alt87=3;
            var LA87_0 = this.input.LA(1);

            if ( (LA87_0==ID) ) {
                var LA87_1 = this.input.LA(2);

                if ( (LA87_1==10) ) {
                    alt87=3;
                }
                else if ( (LA87_1==EOF) ) {
                    alt87=1;
                }
                else {
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 87, 1, this.input);

                    throw nvae;
                }
            }
            else if ( (LA87_0==STRING) ) {
                alt87=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 87, 0, this.input);

                throw nvae;
            }
            switch (alt87) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:332:2: rule_DependentVariable_Impl
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AutoExpParser.FOLLOW_rule_DependentVariable_Impl_in_rule_DependentVariable1729);
                    rule_DependentVariable_Impl191=this.rule_DependentVariable_Impl();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, rule_DependentVariable_Impl191.getTree());


                    break;
                case 2 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:332:30: rule_BuiltinDependentVariable
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AutoExpParser.FOLLOW_rule_BuiltinDependentVariable_in_rule_DependentVariable1731);
                    rule_BuiltinDependentVariable192=this.rule_BuiltinDependentVariable();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, rule_BuiltinDependentVariable192.getTree());


                    break;
                case 3 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:332:60: rule_CustomDependentVariable
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AutoExpParser.FOLLOW_rule_CustomDependentVariable_in_rule_DependentVariable1733);
                    rule_CustomDependentVariable193=this.rule_CustomDependentVariable();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, rule_CustomDependentVariable193.getTree());


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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:337:1: rule_DependentVariable_Impl : name_0= ID ;
    // $ANTLR start "rule_DependentVariable_Impl"
    rule_DependentVariable_Impl: function() {
        var retval = new AutoExpParser.rule_DependentVariable_Impl_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;

        var name_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:337:29: (name_0= ID )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:339:2: name_0= ID
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_DependentVariable_Impl1749); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:343:1: rule_BuiltinDependentVariable : name_0= STRING ;
    // $ANTLR start "rule_BuiltinDependentVariable"
    rule_BuiltinDependentVariable: function() {
        var retval = new AutoExpParser.rule_BuiltinDependentVariable_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;

        var name_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:343:31: (name_0= STRING )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:345:2: name_0= STRING
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_BuiltinDependentVariable1764); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:351:1: rule_CustomDependentVariable : name_0= ID '{' 'description' description_1= STRING ( 'scaleType' scaletype_2= rule_ScaleType )? ( 'unit' unit_3= STRING )? ( 'range' '{' range_4+= rule_Range ( ',' range_5+= rule_Range )* '}' )? ( 'instrument' instrument_6= ID )? '}' ;
    // $ANTLR start "rule_CustomDependentVariable"
    rule_CustomDependentVariable: function() {
        var retval = new AutoExpParser.rule_CustomDependentVariable_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var description_1 = null;
        var unit_3 = null;
        var instrument_6 = null;
        var char_literal194 = null;
        var string_literal195 = null;
        var string_literal196 = null;
        var string_literal197 = null;
        var string_literal198 = null;
        var char_literal199 = null;
        var char_literal200 = null;
        var char_literal201 = null;
        var string_literal202 = null;
        var char_literal203 = null;
        var list_range_4=null;
        var list_range_5=null;
         var scaletype_2 = null;
        var range_4 = null;
        var range_5 = null;
        var name_0_tree=null;
        var description_1_tree=null;
        var unit_3_tree=null;
        var instrument_6_tree=null;
        var char_literal194_tree=null;
        var string_literal195_tree=null;
        var string_literal196_tree=null;
        var string_literal197_tree=null;
        var string_literal198_tree=null;
        var char_literal199_tree=null;
        var char_literal200_tree=null;
        var char_literal201_tree=null;
        var string_literal202_tree=null;
        var char_literal203_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:351:30: (name_0= ID '{' 'description' description_1= STRING ( 'scaleType' scaletype_2= rule_ScaleType )? ( 'unit' unit_3= STRING )? ( 'range' '{' range_4+= rule_Range ( ',' range_5+= rule_Range )* '}' )? ( 'instrument' instrument_6= ID )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:353:2: name_0= ID '{' 'description' description_1= STRING ( 'scaleType' scaletype_2= rule_ScaleType )? ( 'unit' unit_3= STRING )? ( 'range' '{' range_4+= rule_Range ( ',' range_5+= rule_Range )* '}' )? ( 'instrument' instrument_6= ID )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_CustomDependentVariable1782); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal194=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_CustomDependentVariable1785); 
            char_literal194_tree = this.adaptor.create(char_literal194);
            this.adaptor.addChild(root_0, char_literal194_tree);

            string_literal195=this.match(this.input,14,AutoExpParser.FOLLOW_14_in_rule_CustomDependentVariable1788); 
            string_literal195_tree = this.adaptor.create(string_literal195);
            this.adaptor.addChild(root_0, string_literal195_tree);

            description_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_CustomDependentVariable1792); 
            description_1_tree = this.adaptor.create(description_1);
            this.adaptor.addChild(root_0, description_1_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:356:2: ( 'scaleType' scaletype_2= rule_ScaleType )?
            var alt88=2;
            var LA88_0 = this.input.LA(1);

            if ( (LA88_0==88) ) {
                alt88=1;
            }
            switch (alt88) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:356:3: 'scaleType' scaletype_2= rule_ScaleType
                    string_literal196=this.match(this.input,88,AutoExpParser.FOLLOW_88_in_rule_CustomDependentVariable1796); 
                    string_literal196_tree = this.adaptor.create(string_literal196);
                    this.adaptor.addChild(root_0, string_literal196_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_ScaleType_in_rule_CustomDependentVariable1800);
                    scaletype_2=this.rule_ScaleType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, scaletype_2.getTree());


                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:357:2: ( 'unit' unit_3= STRING )?
            var alt89=2;
            var LA89_0 = this.input.LA(1);

            if ( (LA89_0==89) ) {
                alt89=1;
            }
            switch (alt89) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:357:3: 'unit' unit_3= STRING
                    string_literal197=this.match(this.input,89,AutoExpParser.FOLLOW_89_in_rule_CustomDependentVariable1806); 
                    string_literal197_tree = this.adaptor.create(string_literal197);
                    this.adaptor.addChild(root_0, string_literal197_tree);

                    unit_3=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_CustomDependentVariable1810); 
                    unit_3_tree = this.adaptor.create(unit_3);
                    this.adaptor.addChild(root_0, unit_3_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:358:2: ( 'range' '{' range_4+= rule_Range ( ',' range_5+= rule_Range )* '}' )?
            var alt91=2;
            var LA91_0 = this.input.LA(1);

            if ( (LA91_0==90) ) {
                alt91=1;
            }
            switch (alt91) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:358:3: 'range' '{' range_4+= rule_Range ( ',' range_5+= rule_Range )* '}'
                    string_literal198=this.match(this.input,90,AutoExpParser.FOLLOW_90_in_rule_CustomDependentVariable1816); 
                    string_literal198_tree = this.adaptor.create(string_literal198);
                    this.adaptor.addChild(root_0, string_literal198_tree);

                    char_literal199=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_CustomDependentVariable1818); 
                    char_literal199_tree = this.adaptor.create(char_literal199);
                    this.adaptor.addChild(root_0, char_literal199_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Range_in_rule_CustomDependentVariable1822);
                    range_4=this.rule_Range();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, range_4.getTree());
                    if (org.antlr.lang.isNull(list_range_4)) list_range_4 = [];
                    list_range_4.push(range_4.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:358:35: ( ',' range_5+= rule_Range )*
                    loop90:
                    do {
                        var alt90=2;
                        var LA90_0 = this.input.LA(1);

                        if ( (LA90_0==12) ) {
                            alt90=1;
                        }


                        switch (alt90) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:358:36: ',' range_5+= rule_Range
                            char_literal200=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_CustomDependentVariable1825); 
                            char_literal200_tree = this.adaptor.create(char_literal200);
                            this.adaptor.addChild(root_0, char_literal200_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Range_in_rule_CustomDependentVariable1829);
                            range_5=this.rule_Range();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, range_5.getTree());
                            if (org.antlr.lang.isNull(list_range_5)) list_range_5 = [];
                            list_range_5.push(range_5.getTree());



                            break;

                        default :
                            break loop90;
                        }
                    } while (true);

                    char_literal201=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_CustomDependentVariable1833); 
                    char_literal201_tree = this.adaptor.create(char_literal201);
                    this.adaptor.addChild(root_0, char_literal201_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:359:2: ( 'instrument' instrument_6= ID )?
            var alt92=2;
            var LA92_0 = this.input.LA(1);

            if ( (LA92_0==91) ) {
                alt92=1;
            }
            switch (alt92) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:359:3: 'instrument' instrument_6= ID
                    string_literal202=this.match(this.input,91,AutoExpParser.FOLLOW_91_in_rule_CustomDependentVariable1839); 
                    string_literal202_tree = this.adaptor.create(string_literal202);
                    this.adaptor.addChild(root_0, string_literal202_tree);

                    instrument_6=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_CustomDependentVariable1843); 
                    instrument_6_tree = this.adaptor.create(instrument_6);
                    this.adaptor.addChild(root_0, instrument_6_tree);



                    break;

            }

            char_literal203=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_CustomDependentVariable1848); 
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
    rule_Instrument_return: (function() {
        AutoExpParser.rule_Instrument_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_Instrument_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:363:1: rule_Instrument : name_0= ID '{' 'command' command_1= STRING 'valueExpression' valueexpression_2= STRING ( 'conversionFactor' conversionfactor_3= rule_BigDecimalType )? '}' ;
    // $ANTLR start "rule_Instrument"
    rule_Instrument: function() {
        var retval = new AutoExpParser.rule_Instrument_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var command_1 = null;
        var valueexpression_2 = null;
        var char_literal204 = null;
        var string_literal205 = null;
        var string_literal206 = null;
        var string_literal207 = null;
        var char_literal208 = null;
         var conversionfactor_3 = null;

        var name_0_tree=null;
        var command_1_tree=null;
        var valueexpression_2_tree=null;
        var char_literal204_tree=null;
        var string_literal205_tree=null;
        var string_literal206_tree=null;
        var string_literal207_tree=null;
        var char_literal208_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:363:17: (name_0= ID '{' 'command' command_1= STRING 'valueExpression' valueexpression_2= STRING ( 'conversionFactor' conversionfactor_3= rule_BigDecimalType )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:365:2: name_0= ID '{' 'command' command_1= STRING 'valueExpression' valueexpression_2= STRING ( 'conversionFactor' conversionfactor_3= rule_BigDecimalType )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Instrument1862); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal204=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Instrument1865); 
            char_literal204_tree = this.adaptor.create(char_literal204);
            this.adaptor.addChild(root_0, char_literal204_tree);

            string_literal205=this.match(this.input,72,AutoExpParser.FOLLOW_72_in_rule_Instrument1868); 
            string_literal205_tree = this.adaptor.create(string_literal205);
            this.adaptor.addChild(root_0, string_literal205_tree);

            command_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Instrument1872); 
            command_1_tree = this.adaptor.create(command_1);
            this.adaptor.addChild(root_0, command_1_tree);

            string_literal206=this.match(this.input,92,AutoExpParser.FOLLOW_92_in_rule_Instrument1875); 
            string_literal206_tree = this.adaptor.create(string_literal206);
            this.adaptor.addChild(root_0, string_literal206_tree);

            valueexpression_2=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Instrument1879); 
            valueexpression_2_tree = this.adaptor.create(valueexpression_2);
            this.adaptor.addChild(root_0, valueexpression_2_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:369:2: ( 'conversionFactor' conversionfactor_3= rule_BigDecimalType )?
            var alt93=2;
            var LA93_0 = this.input.LA(1);

            if ( (LA93_0==93) ) {
                alt93=1;
            }
            switch (alt93) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:369:3: 'conversionFactor' conversionfactor_3= rule_BigDecimalType
                    string_literal207=this.match(this.input,93,AutoExpParser.FOLLOW_93_in_rule_Instrument1883); 
                    string_literal207_tree = this.adaptor.create(string_literal207);
                    this.adaptor.addChild(root_0, string_literal207_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_BigDecimalType_in_rule_Instrument1887);
                    conversionfactor_3=this.rule_BigDecimalType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, conversionfactor_3.getTree());


                    break;

            }

            char_literal208=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Instrument1892); 
            char_literal208_tree = this.adaptor.create(char_literal208);
            this.adaptor.addChild(root_0, char_literal208_tree);




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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:374:1: rule_Factor : name_0= ID '{' 'description' description_1= STRING ( 'scaleType' scaletype_2= rule_ScaleType )? '}' ;
    // $ANTLR start "rule_Factor"
    rule_Factor: function() {
        var retval = new AutoExpParser.rule_Factor_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var description_1 = null;
        var char_literal209 = null;
        var string_literal210 = null;
        var string_literal211 = null;
        var char_literal212 = null;
         var scaletype_2 = null;

        var name_0_tree=null;
        var description_1_tree=null;
        var char_literal209_tree=null;
        var string_literal210_tree=null;
        var string_literal211_tree=null;
        var char_literal212_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:374:13: (name_0= ID '{' 'description' description_1= STRING ( 'scaleType' scaletype_2= rule_ScaleType )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:376:2: name_0= ID '{' 'description' description_1= STRING ( 'scaleType' scaletype_2= rule_ScaleType )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Factor1907); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal209=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Factor1910); 
            char_literal209_tree = this.adaptor.create(char_literal209);
            this.adaptor.addChild(root_0, char_literal209_tree);

            string_literal210=this.match(this.input,14,AutoExpParser.FOLLOW_14_in_rule_Factor1913); 
            string_literal210_tree = this.adaptor.create(string_literal210);
            this.adaptor.addChild(root_0, string_literal210_tree);

            description_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Factor1917); 
            description_1_tree = this.adaptor.create(description_1);
            this.adaptor.addChild(root_0, description_1_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:379:2: ( 'scaleType' scaletype_2= rule_ScaleType )?
            var alt94=2;
            var LA94_0 = this.input.LA(1);

            if ( (LA94_0==88) ) {
                alt94=1;
            }
            switch (alt94) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:379:3: 'scaleType' scaletype_2= rule_ScaleType
                    string_literal211=this.match(this.input,88,AutoExpParser.FOLLOW_88_in_rule_Factor1921); 
                    string_literal211_tree = this.adaptor.create(string_literal211);
                    this.adaptor.addChild(root_0, string_literal211_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_ScaleType_in_rule_Factor1925);
                    scaletype_2=this.rule_ScaleType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, scaletype_2.getTree());


                    break;

            }

            char_literal212=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Factor1930); 
            char_literal212_tree = this.adaptor.create(char_literal212);
            this.adaptor.addChild(root_0, char_literal212_tree);




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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:384:1: rule_ContextVariable : name_0= ID '{' ( 'description' description_1= STRING )? ( 'scaleType' scaletype_2= rule_ScaleType )? ( 'range' '{' range_3+= rule_Range ( ',' range_4+= rule_Range )* '}' )? '}' ;
    // $ANTLR start "rule_ContextVariable"
    rule_ContextVariable: function() {
        var retval = new AutoExpParser.rule_ContextVariable_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var description_1 = null;
        var char_literal213 = null;
        var string_literal214 = null;
        var string_literal215 = null;
        var string_literal216 = null;
        var char_literal217 = null;
        var char_literal218 = null;
        var char_literal219 = null;
        var char_literal220 = null;
        var list_range_3=null;
        var list_range_4=null;
         var scaletype_2 = null;
        var range_3 = null;
        var range_4 = null;
        var name_0_tree=null;
        var description_1_tree=null;
        var char_literal213_tree=null;
        var string_literal214_tree=null;
        var string_literal215_tree=null;
        var string_literal216_tree=null;
        var char_literal217_tree=null;
        var char_literal218_tree=null;
        var char_literal219_tree=null;
        var char_literal220_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:384:22: (name_0= ID '{' ( 'description' description_1= STRING )? ( 'scaleType' scaletype_2= rule_ScaleType )? ( 'range' '{' range_3+= rule_Range ( ',' range_4+= rule_Range )* '}' )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:386:2: name_0= ID '{' ( 'description' description_1= STRING )? ( 'scaleType' scaletype_2= rule_ScaleType )? ( 'range' '{' range_3+= rule_Range ( ',' range_4+= rule_Range )* '}' )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ContextVariable1945); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal213=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ContextVariable1948); 
            char_literal213_tree = this.adaptor.create(char_literal213);
            this.adaptor.addChild(root_0, char_literal213_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:388:2: ( 'description' description_1= STRING )?
            var alt95=2;
            var LA95_0 = this.input.LA(1);

            if ( (LA95_0==14) ) {
                alt95=1;
            }
            switch (alt95) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:388:3: 'description' description_1= STRING
                    string_literal214=this.match(this.input,14,AutoExpParser.FOLLOW_14_in_rule_ContextVariable1952); 
                    string_literal214_tree = this.adaptor.create(string_literal214);
                    this.adaptor.addChild(root_0, string_literal214_tree);

                    description_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_ContextVariable1956); 
                    description_1_tree = this.adaptor.create(description_1);
                    this.adaptor.addChild(root_0, description_1_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:389:2: ( 'scaleType' scaletype_2= rule_ScaleType )?
            var alt96=2;
            var LA96_0 = this.input.LA(1);

            if ( (LA96_0==88) ) {
                alt96=1;
            }
            switch (alt96) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:389:3: 'scaleType' scaletype_2= rule_ScaleType
                    string_literal215=this.match(this.input,88,AutoExpParser.FOLLOW_88_in_rule_ContextVariable1962); 
                    string_literal215_tree = this.adaptor.create(string_literal215);
                    this.adaptor.addChild(root_0, string_literal215_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_ScaleType_in_rule_ContextVariable1966);
                    scaletype_2=this.rule_ScaleType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, scaletype_2.getTree());


                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:390:2: ( 'range' '{' range_3+= rule_Range ( ',' range_4+= rule_Range )* '}' )?
            var alt98=2;
            var LA98_0 = this.input.LA(1);

            if ( (LA98_0==90) ) {
                alt98=1;
            }
            switch (alt98) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:390:3: 'range' '{' range_3+= rule_Range ( ',' range_4+= rule_Range )* '}'
                    string_literal216=this.match(this.input,90,AutoExpParser.FOLLOW_90_in_rule_ContextVariable1972); 
                    string_literal216_tree = this.adaptor.create(string_literal216);
                    this.adaptor.addChild(root_0, string_literal216_tree);

                    char_literal217=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ContextVariable1974); 
                    char_literal217_tree = this.adaptor.create(char_literal217);
                    this.adaptor.addChild(root_0, char_literal217_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Range_in_rule_ContextVariable1978);
                    range_3=this.rule_Range();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, range_3.getTree());
                    if (org.antlr.lang.isNull(list_range_3)) list_range_3 = [];
                    list_range_3.push(range_3.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:390:35: ( ',' range_4+= rule_Range )*
                    loop97:
                    do {
                        var alt97=2;
                        var LA97_0 = this.input.LA(1);

                        if ( (LA97_0==12) ) {
                            alt97=1;
                        }


                        switch (alt97) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:390:36: ',' range_4+= rule_Range
                            char_literal218=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_ContextVariable1981); 
                            char_literal218_tree = this.adaptor.create(char_literal218);
                            this.adaptor.addChild(root_0, char_literal218_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Range_in_rule_ContextVariable1985);
                            range_4=this.rule_Range();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, range_4.getTree());
                            if (org.antlr.lang.isNull(list_range_4)) list_range_4 = [];
                            list_range_4.push(range_4.getTree());



                            break;

                        default :
                            break loop97;
                        }
                    } while (true);

                    char_literal219=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ContextVariable1989); 
                    char_literal219_tree = this.adaptor.create(char_literal219);
                    this.adaptor.addChild(root_0, char_literal219_tree);



                    break;

            }

            char_literal220=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ContextVariable1994); 
            char_literal220_tree = this.adaptor.create(char_literal220);
            this.adaptor.addChild(root_0, char_literal220_tree);




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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:395:1: rule_Range : name_0= ID ;
    // $ANTLR start "rule_Range"
    rule_Range: function() {
        var retval = new AutoExpParser.rule_Range_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;

        var name_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:395:12: (name_0= ID )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:397:2: name_0= ID
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Range2009); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:401:1: rule_Treatment : name_0= ID 'description' description_1= STRING 'factor' factor_2= ID ( 'parameters' '{' parameters_3+= rule_Parameter ( ',' parameters_4+= rule_Parameter )* '}' )? ( 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}' )? 'execution' execution_7= ID ;
    // $ANTLR start "rule_Treatment"
    rule_Treatment: function() {
        var retval = new AutoExpParser.rule_Treatment_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var description_1 = null;
        var factor_2 = null;
        var execution_7 = null;
        var string_literal221 = null;
        var string_literal222 = null;
        var string_literal223 = null;
        var char_literal224 = null;
        var char_literal225 = null;
        var char_literal226 = null;
        var string_literal227 = null;
        var char_literal228 = null;
        var char_literal229 = null;
        var char_literal230 = null;
        var string_literal231 = null;
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
        var string_literal221_tree=null;
        var string_literal222_tree=null;
        var string_literal223_tree=null;
        var char_literal224_tree=null;
        var char_literal225_tree=null;
        var char_literal226_tree=null;
        var string_literal227_tree=null;
        var char_literal228_tree=null;
        var char_literal229_tree=null;
        var char_literal230_tree=null;
        var string_literal231_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:401:16: (name_0= ID 'description' description_1= STRING 'factor' factor_2= ID ( 'parameters' '{' parameters_3+= rule_Parameter ( ',' parameters_4+= rule_Parameter )* '}' )? ( 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}' )? 'execution' execution_7= ID )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:402:2: name_0= ID 'description' description_1= STRING 'factor' factor_2= ID ( 'parameters' '{' parameters_3+= rule_Parameter ( ',' parameters_4+= rule_Parameter )* '}' )? ( 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}' )? 'execution' execution_7= ID
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Treatment2022); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            string_literal221=this.match(this.input,14,AutoExpParser.FOLLOW_14_in_rule_Treatment2025); 
            string_literal221_tree = this.adaptor.create(string_literal221);
            this.adaptor.addChild(root_0, string_literal221_tree);

            description_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Treatment2029); 
            description_1_tree = this.adaptor.create(description_1);
            this.adaptor.addChild(root_0, description_1_tree);

            string_literal222=this.match(this.input,94,AutoExpParser.FOLLOW_94_in_rule_Treatment2032); 
            string_literal222_tree = this.adaptor.create(string_literal222);
            this.adaptor.addChild(root_0, string_literal222_tree);

            factor_2=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Treatment2036); 
            factor_2_tree = this.adaptor.create(factor_2);
            this.adaptor.addChild(root_0, factor_2_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:405:2: ( 'parameters' '{' parameters_3+= rule_Parameter ( ',' parameters_4+= rule_Parameter )* '}' )?
            var alt100=2;
            var LA100_0 = this.input.LA(1);

            if ( (LA100_0==78) ) {
                alt100=1;
            }
            switch (alt100) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:405:3: 'parameters' '{' parameters_3+= rule_Parameter ( ',' parameters_4+= rule_Parameter )* '}'
                    string_literal223=this.match(this.input,78,AutoExpParser.FOLLOW_78_in_rule_Treatment2040); 
                    string_literal223_tree = this.adaptor.create(string_literal223);
                    this.adaptor.addChild(root_0, string_literal223_tree);

                    char_literal224=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Treatment2042); 
                    char_literal224_tree = this.adaptor.create(char_literal224);
                    this.adaptor.addChild(root_0, char_literal224_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Parameter_in_rule_Treatment2046);
                    parameters_3=this.rule_Parameter();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, parameters_3.getTree());
                    if (org.antlr.lang.isNull(list_parameters_3)) list_parameters_3 = [];
                    list_parameters_3.push(parameters_3.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:405:49: ( ',' parameters_4+= rule_Parameter )*
                    loop99:
                    do {
                        var alt99=2;
                        var LA99_0 = this.input.LA(1);

                        if ( (LA99_0==12) ) {
                            alt99=1;
                        }


                        switch (alt99) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:405:50: ',' parameters_4+= rule_Parameter
                            char_literal225=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Treatment2049); 
                            char_literal225_tree = this.adaptor.create(char_literal225);
                            this.adaptor.addChild(root_0, char_literal225_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Parameter_in_rule_Treatment2053);
                            parameters_4=this.rule_Parameter();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, parameters_4.getTree());
                            if (org.antlr.lang.isNull(list_parameters_4)) list_parameters_4 = [];
                            list_parameters_4.push(parameters_4.getTree());



                            break;

                        default :
                            break loop99;
                        }
                    } while (true);

                    char_literal226=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Treatment2057); 
                    char_literal226_tree = this.adaptor.create(char_literal226);
                    this.adaptor.addChild(root_0, char_literal226_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:406:2: ( 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}' )?
            var alt102=2;
            var LA102_0 = this.input.LA(1);

            if ( (LA102_0==75) ) {
                alt102=1;
            }
            switch (alt102) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:406:3: 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}'
                    string_literal227=this.match(this.input,75,AutoExpParser.FOLLOW_75_in_rule_Treatment2063); 
                    string_literal227_tree = this.adaptor.create(string_literal227);
                    this.adaptor.addChild(root_0, string_literal227_tree);

                    char_literal228=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Treatment2065); 
                    char_literal228_tree = this.adaptor.create(char_literal228);
                    this.adaptor.addChild(root_0, char_literal228_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_File_in_rule_Treatment2069);
                    files_5=this.rule_File();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, files_5.getTree());
                    if (org.antlr.lang.isNull(list_files_5)) list_files_5 = [];
                    list_files_5.push(files_5.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:406:34: ( ',' files_6+= rule_File )*
                    loop101:
                    do {
                        var alt101=2;
                        var LA101_0 = this.input.LA(1);

                        if ( (LA101_0==12) ) {
                            alt101=1;
                        }


                        switch (alt101) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:406:35: ',' files_6+= rule_File
                            char_literal229=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Treatment2072); 
                            char_literal229_tree = this.adaptor.create(char_literal229);
                            this.adaptor.addChild(root_0, char_literal229_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_File_in_rule_Treatment2076);
                            files_6=this.rule_File();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, files_6.getTree());
                            if (org.antlr.lang.isNull(list_files_6)) list_files_6 = [];
                            list_files_6.push(files_6.getTree());



                            break;

                        default :
                            break loop101;
                        }
                    } while (true);

                    char_literal230=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Treatment2080); 
                    char_literal230_tree = this.adaptor.create(char_literal230);
                    this.adaptor.addChild(root_0, char_literal230_tree);



                    break;

            }

            string_literal231=this.match(this.input,95,AutoExpParser.FOLLOW_95_in_rule_Treatment2085); 
            string_literal231_tree = this.adaptor.create(string_literal231);
            this.adaptor.addChild(root_0, string_literal231_tree);

            execution_7=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Treatment2089); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:411:1: rule_File : '{' 'name' name_0= STRING 'source' source_1= STRING ( 'dest' dest_2= STRING )? ( 'checksum' checksum_3= STRING )? '}' ;
    // $ANTLR start "rule_File"
    rule_File: function() {
        var retval = new AutoExpParser.rule_File_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var source_1 = null;
        var dest_2 = null;
        var checksum_3 = null;
        var char_literal232 = null;
        var string_literal233 = null;
        var string_literal234 = null;
        var string_literal235 = null;
        var string_literal236 = null;
        var char_literal237 = null;

        var name_0_tree=null;
        var source_1_tree=null;
        var dest_2_tree=null;
        var checksum_3_tree=null;
        var char_literal232_tree=null;
        var string_literal233_tree=null;
        var string_literal234_tree=null;
        var string_literal235_tree=null;
        var string_literal236_tree=null;
        var char_literal237_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:411:11: ( '{' 'name' name_0= STRING 'source' source_1= STRING ( 'dest' dest_2= STRING )? ( 'checksum' checksum_3= STRING )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:413:2: '{' 'name' name_0= STRING 'source' source_1= STRING ( 'dest' dest_2= STRING )? ( 'checksum' checksum_3= STRING )? '}'
            root_0 = this.adaptor.nil();

            char_literal232=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_File2102); 
            char_literal232_tree = this.adaptor.create(char_literal232);
            this.adaptor.addChild(root_0, char_literal232_tree);

            string_literal233=this.match(this.input,96,AutoExpParser.FOLLOW_96_in_rule_File2105); 
            string_literal233_tree = this.adaptor.create(string_literal233);
            this.adaptor.addChild(root_0, string_literal233_tree);

            name_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_File2109); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            string_literal234=this.match(this.input,97,AutoExpParser.FOLLOW_97_in_rule_File2112); 
            string_literal234_tree = this.adaptor.create(string_literal234);
            this.adaptor.addChild(root_0, string_literal234_tree);

            source_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_File2116); 
            source_1_tree = this.adaptor.create(source_1);
            this.adaptor.addChild(root_0, source_1_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:416:2: ( 'dest' dest_2= STRING )?
            var alt103=2;
            var LA103_0 = this.input.LA(1);

            if ( (LA103_0==98) ) {
                alt103=1;
            }
            switch (alt103) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:416:3: 'dest' dest_2= STRING
                    string_literal235=this.match(this.input,98,AutoExpParser.FOLLOW_98_in_rule_File2120); 
                    string_literal235_tree = this.adaptor.create(string_literal235);
                    this.adaptor.addChild(root_0, string_literal235_tree);

                    dest_2=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_File2124); 
                    dest_2_tree = this.adaptor.create(dest_2);
                    this.adaptor.addChild(root_0, dest_2_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:417:2: ( 'checksum' checksum_3= STRING )?
            var alt104=2;
            var LA104_0 = this.input.LA(1);

            if ( (LA104_0==99) ) {
                alt104=1;
            }
            switch (alt104) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:417:3: 'checksum' checksum_3= STRING
                    string_literal236=this.match(this.input,99,AutoExpParser.FOLLOW_99_in_rule_File2130); 
                    string_literal236_tree = this.adaptor.create(string_literal236);
                    this.adaptor.addChild(root_0, string_literal236_tree);

                    checksum_3=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_File2134); 
                    checksum_3_tree = this.adaptor.create(checksum_3);
                    this.adaptor.addChild(root_0, checksum_3_tree);



                    break;

            }

            char_literal237=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_File2139); 
            char_literal237_tree = this.adaptor.create(char_literal237);
            this.adaptor.addChild(root_0, char_literal237_tree);




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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:423:1: rule_Parameter : name_0= ID (value_1= STRING )? ;
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
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:423:16: (name_0= ID (value_1= STRING )? )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:425:2: name_0= ID (value_1= STRING )?
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Parameter2156); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:426:2: (value_1= STRING )?
            var alt105=2;
            var LA105_0 = this.input.LA(1);

            if ( (LA105_0==STRING) ) {
                alt105=1;
            }
            switch (alt105) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:426:3: value_1= STRING
                    value_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Parameter2162); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:430:1: rule_ExecutionParameter : (value_0= STRING )? ;
    // $ANTLR start "rule_ExecutionParameter"
    rule_ExecutionParameter: function() {
        var retval = new AutoExpParser.rule_ExecutionParameter_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var value_0 = null;

        var value_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:430:25: ( (value_0= STRING )? )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:432:2: (value_0= STRING )?
            root_0 = this.adaptor.nil();

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:432:2: (value_0= STRING )?
            var alt106=2;
            var LA106_0 = this.input.LA(1);

            if ( (LA106_0==STRING) ) {
                alt106=1;
            }
            switch (alt106) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:432:3: value_0= STRING
                    value_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_ExecutionParameter2180); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:436:1: rule_Artifact : name_0= ID (value_1= STRING )? ;
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
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:436:15: (name_0= ID (value_1= STRING )? )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:438:2: name_0= ID (value_1= STRING )?
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Artifact2197); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:439:2: (value_1= STRING )?
            var alt107=2;
            var LA107_0 = this.input.LA(1);

            if ( (LA107_0==STRING) ) {
                alt107=1;
            }
            switch (alt107) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:439:3: value_1= STRING
                    value_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Artifact2203); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:443:1: rule_ObjectGroup : name_0= ID ;
    // $ANTLR start "rule_ObjectGroup"
    rule_ObjectGroup: function() {
        var retval = new AutoExpParser.rule_ObjectGroup_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;

        var name_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:443:18: (name_0= ID )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:445:2: name_0= ID
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ObjectGroup2220); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:449:1: rule_SimpleAbstract : (description_0= STRING ) ;
    // $ANTLR start "rule_SimpleAbstract"
    rule_SimpleAbstract: function() {
        var retval = new AutoExpParser.rule_SimpleAbstract_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var description_0 = null;

        var description_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:449:21: ( (description_0= STRING ) )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:451:2: (description_0= STRING )
            root_0 = this.adaptor.nil();

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:451:2: (description_0= STRING )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:451:3: description_0= STRING
            description_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_SimpleAbstract2236); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:456:1: rule_StructuredAbstract : '{' ( 'context' context_0= STRING )? ( 'objective' objective_1= STRING )? ( 'method' method_2= STRING )? ( 'results' results_3= STRING )? ( 'conclusion' conclusion_4= STRING )? '}' ;
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
        var char_literal238 = null;
        var string_literal239 = null;
        var string_literal240 = null;
        var string_literal241 = null;
        var string_literal242 = null;
        var string_literal243 = null;
        var char_literal244 = null;

        var context_0_tree=null;
        var objective_1_tree=null;
        var method_2_tree=null;
        var results_3_tree=null;
        var conclusion_4_tree=null;
        var char_literal238_tree=null;
        var string_literal239_tree=null;
        var string_literal240_tree=null;
        var string_literal241_tree=null;
        var string_literal242_tree=null;
        var string_literal243_tree=null;
        var char_literal244_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:456:25: ( '{' ( 'context' context_0= STRING )? ( 'objective' objective_1= STRING )? ( 'method' method_2= STRING )? ( 'results' results_3= STRING )? ( 'conclusion' conclusion_4= STRING )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:458:2: '{' ( 'context' context_0= STRING )? ( 'objective' objective_1= STRING )? ( 'method' method_2= STRING )? ( 'results' results_3= STRING )? ( 'conclusion' conclusion_4= STRING )? '}'
            root_0 = this.adaptor.nil();

            char_literal238=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_StructuredAbstract2252); 
            char_literal238_tree = this.adaptor.create(char_literal238);
            this.adaptor.addChild(root_0, char_literal238_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:459:2: ( 'context' context_0= STRING )?
            var alt108=2;
            var LA108_0 = this.input.LA(1);

            if ( (LA108_0==100) ) {
                alt108=1;
            }
            switch (alt108) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:459:3: 'context' context_0= STRING
                    string_literal239=this.match(this.input,100,AutoExpParser.FOLLOW_100_in_rule_StructuredAbstract2256); 
                    string_literal239_tree = this.adaptor.create(string_literal239);
                    this.adaptor.addChild(root_0, string_literal239_tree);

                    context_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_StructuredAbstract2260); 
                    context_0_tree = this.adaptor.create(context_0);
                    this.adaptor.addChild(root_0, context_0_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:460:2: ( 'objective' objective_1= STRING )?
            var alt109=2;
            var LA109_0 = this.input.LA(1);

            if ( (LA109_0==101) ) {
                alt109=1;
            }
            switch (alt109) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:460:3: 'objective' objective_1= STRING
                    string_literal240=this.match(this.input,101,AutoExpParser.FOLLOW_101_in_rule_StructuredAbstract2266); 
                    string_literal240_tree = this.adaptor.create(string_literal240);
                    this.adaptor.addChild(root_0, string_literal240_tree);

                    objective_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_StructuredAbstract2270); 
                    objective_1_tree = this.adaptor.create(objective_1);
                    this.adaptor.addChild(root_0, objective_1_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:461:2: ( 'method' method_2= STRING )?
            var alt110=2;
            var LA110_0 = this.input.LA(1);

            if ( (LA110_0==102) ) {
                alt110=1;
            }
            switch (alt110) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:461:3: 'method' method_2= STRING
                    string_literal241=this.match(this.input,102,AutoExpParser.FOLLOW_102_in_rule_StructuredAbstract2276); 
                    string_literal241_tree = this.adaptor.create(string_literal241);
                    this.adaptor.addChild(root_0, string_literal241_tree);

                    method_2=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_StructuredAbstract2280); 
                    method_2_tree = this.adaptor.create(method_2);
                    this.adaptor.addChild(root_0, method_2_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:462:2: ( 'results' results_3= STRING )?
            var alt111=2;
            var LA111_0 = this.input.LA(1);

            if ( (LA111_0==103) ) {
                alt111=1;
            }
            switch (alt111) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:462:3: 'results' results_3= STRING
                    string_literal242=this.match(this.input,103,AutoExpParser.FOLLOW_103_in_rule_StructuredAbstract2286); 
                    string_literal242_tree = this.adaptor.create(string_literal242);
                    this.adaptor.addChild(root_0, string_literal242_tree);

                    results_3=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_StructuredAbstract2290); 
                    results_3_tree = this.adaptor.create(results_3);
                    this.adaptor.addChild(root_0, results_3_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:463:2: ( 'conclusion' conclusion_4= STRING )?
            var alt112=2;
            var LA112_0 = this.input.LA(1);

            if ( (LA112_0==104) ) {
                alt112=1;
            }
            switch (alt112) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:463:3: 'conclusion' conclusion_4= STRING
                    string_literal243=this.match(this.input,104,AutoExpParser.FOLLOW_104_in_rule_StructuredAbstract2296); 
                    string_literal243_tree = this.adaptor.create(string_literal243);
                    this.adaptor.addChild(root_0, string_literal243_tree);

                    conclusion_4=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_StructuredAbstract2300); 
                    conclusion_4_tree = this.adaptor.create(conclusion_4);
                    this.adaptor.addChild(root_0, conclusion_4_tree);



                    break;

            }

            char_literal244=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_StructuredAbstract2305); 
            char_literal244_tree = this.adaptor.create(char_literal244);
            this.adaptor.addChild(root_0, char_literal244_tree);




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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:468:1: rule_SimpleGoal : name_0= ID description_1= STRING ;
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
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:468:17: (name_0= ID description_1= STRING )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:470:2: name_0= ID description_1= STRING
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_SimpleGoal2320); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            description_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_SimpleGoal2325); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:476:1: rule_StructuredGoal : name_0= ID '{' ( 'object' object_1= STRING )? ( 'technique' technique_2= STRING )? ( 'quality' quality_3= STRING )? ( 'ptView' ptview_4= STRING )? ( 'contextOf' contextof_5= STRING )? '}' ;
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
        var char_literal245 = null;
        var string_literal246 = null;
        var string_literal247 = null;
        var string_literal248 = null;
        var string_literal249 = null;
        var string_literal250 = null;
        var char_literal251 = null;

        var name_0_tree=null;
        var object_1_tree=null;
        var technique_2_tree=null;
        var quality_3_tree=null;
        var ptview_4_tree=null;
        var contextof_5_tree=null;
        var char_literal245_tree=null;
        var string_literal246_tree=null;
        var string_literal247_tree=null;
        var string_literal248_tree=null;
        var string_literal249_tree=null;
        var string_literal250_tree=null;
        var char_literal251_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:476:21: (name_0= ID '{' ( 'object' object_1= STRING )? ( 'technique' technique_2= STRING )? ( 'quality' quality_3= STRING )? ( 'ptView' ptview_4= STRING )? ( 'contextOf' contextof_5= STRING )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:478:2: name_0= ID '{' ( 'object' object_1= STRING )? ( 'technique' technique_2= STRING )? ( 'quality' quality_3= STRING )? ( 'ptView' ptview_4= STRING )? ( 'contextOf' contextof_5= STRING )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_StructuredGoal2342); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal245=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_StructuredGoal2345); 
            char_literal245_tree = this.adaptor.create(char_literal245);
            this.adaptor.addChild(root_0, char_literal245_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:480:2: ( 'object' object_1= STRING )?
            var alt113=2;
            var LA113_0 = this.input.LA(1);

            if ( (LA113_0==105) ) {
                alt113=1;
            }
            switch (alt113) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:480:3: 'object' object_1= STRING
                    string_literal246=this.match(this.input,105,AutoExpParser.FOLLOW_105_in_rule_StructuredGoal2349); 
                    string_literal246_tree = this.adaptor.create(string_literal246);
                    this.adaptor.addChild(root_0, string_literal246_tree);

                    object_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_StructuredGoal2353); 
                    object_1_tree = this.adaptor.create(object_1);
                    this.adaptor.addChild(root_0, object_1_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:481:2: ( 'technique' technique_2= STRING )?
            var alt114=2;
            var LA114_0 = this.input.LA(1);

            if ( (LA114_0==106) ) {
                alt114=1;
            }
            switch (alt114) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:481:3: 'technique' technique_2= STRING
                    string_literal247=this.match(this.input,106,AutoExpParser.FOLLOW_106_in_rule_StructuredGoal2359); 
                    string_literal247_tree = this.adaptor.create(string_literal247);
                    this.adaptor.addChild(root_0, string_literal247_tree);

                    technique_2=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_StructuredGoal2363); 
                    technique_2_tree = this.adaptor.create(technique_2);
                    this.adaptor.addChild(root_0, technique_2_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:482:2: ( 'quality' quality_3= STRING )?
            var alt115=2;
            var LA115_0 = this.input.LA(1);

            if ( (LA115_0==107) ) {
                alt115=1;
            }
            switch (alt115) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:482:3: 'quality' quality_3= STRING
                    string_literal248=this.match(this.input,107,AutoExpParser.FOLLOW_107_in_rule_StructuredGoal2369); 
                    string_literal248_tree = this.adaptor.create(string_literal248);
                    this.adaptor.addChild(root_0, string_literal248_tree);

                    quality_3=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_StructuredGoal2373); 
                    quality_3_tree = this.adaptor.create(quality_3);
                    this.adaptor.addChild(root_0, quality_3_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:483:2: ( 'ptView' ptview_4= STRING )?
            var alt116=2;
            var LA116_0 = this.input.LA(1);

            if ( (LA116_0==108) ) {
                alt116=1;
            }
            switch (alt116) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:483:3: 'ptView' ptview_4= STRING
                    string_literal249=this.match(this.input,108,AutoExpParser.FOLLOW_108_in_rule_StructuredGoal2379); 
                    string_literal249_tree = this.adaptor.create(string_literal249);
                    this.adaptor.addChild(root_0, string_literal249_tree);

                    ptview_4=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_StructuredGoal2383); 
                    ptview_4_tree = this.adaptor.create(ptview_4);
                    this.adaptor.addChild(root_0, ptview_4_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:484:2: ( 'contextOf' contextof_5= STRING )?
            var alt117=2;
            var LA117_0 = this.input.LA(1);

            if ( (LA117_0==109) ) {
                alt117=1;
            }
            switch (alt117) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:484:3: 'contextOf' contextof_5= STRING
                    string_literal250=this.match(this.input,109,AutoExpParser.FOLLOW_109_in_rule_StructuredGoal2389); 
                    string_literal250_tree = this.adaptor.create(string_literal250);
                    this.adaptor.addChild(root_0, string_literal250_tree);

                    contextof_5=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_StructuredGoal2393); 
                    contextof_5_tree = this.adaptor.create(contextof_5);
                    this.adaptor.addChild(root_0, contextof_5_tree);



                    break;

            }

            char_literal251=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_StructuredGoal2398); 
            char_literal251_tree = this.adaptor.create(char_literal251);
            this.adaptor.addChild(root_0, char_literal251_tree);




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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:487:1: rule_DesignType : (fACTORIAL= 'FACTORIAL' | cRD= 'CRD' | rCBD= 'RCBD' | lS= 'LS' | oTHER= 'OTHER' );
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
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:487:16: (fACTORIAL= 'FACTORIAL' | cRD= 'CRD' | rCBD= 'RCBD' | lS= 'LS' | oTHER= 'OTHER' )
            var alt118=5;
            switch ( this.input.LA(1) ) {
            case 110:
                alt118=1;
                break;
            case 111:
                alt118=2;
                break;
            case 112:
                alt118=3;
                break;
            case 113:
                alt118=4;
                break;
            case 114:
                alt118=5;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 118, 0, this.input);

                throw nvae;
            }

            switch (alt118) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:488:2: fACTORIAL= 'FACTORIAL'
                    root_0 = this.adaptor.nil();

                    fACTORIAL=this.match(this.input,110,AutoExpParser.FOLLOW_110_in_rule_DesignType2408); 
                    fACTORIAL_tree = this.adaptor.create(fACTORIAL);
                    this.adaptor.addChild(root_0, fACTORIAL_tree);



                    break;
                case 2 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:488:26: cRD= 'CRD'
                    root_0 = this.adaptor.nil();

                    cRD=this.match(this.input,111,AutoExpParser.FOLLOW_111_in_rule_DesignType2414); 
                    cRD_tree = this.adaptor.create(cRD);
                    this.adaptor.addChild(root_0, cRD_tree);



                    break;
                case 3 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:488:38: rCBD= 'RCBD'
                    root_0 = this.adaptor.nil();

                    rCBD=this.match(this.input,112,AutoExpParser.FOLLOW_112_in_rule_DesignType2420); 
                    rCBD_tree = this.adaptor.create(rCBD);
                    this.adaptor.addChild(root_0, rCBD_tree);



                    break;
                case 4 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:488:52: lS= 'LS'
                    root_0 = this.adaptor.nil();

                    lS=this.match(this.input,113,AutoExpParser.FOLLOW_113_in_rule_DesignType2426); 
                    lS_tree = this.adaptor.create(lS);
                    this.adaptor.addChild(root_0, lS_tree);



                    break;
                case 5 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:488:62: oTHER= 'OTHER'
                    root_0 = this.adaptor.nil();

                    oTHER=this.match(this.input,114,AutoExpParser.FOLLOW_114_in_rule_DesignType2432); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:490:1: rule_ScaleType : (absolute= 'Absolute' | ratio= 'Ratio' | interval= 'Interval' | ordinal= 'Ordinal' | nominal= 'Nominal' );
    // $ANTLR start "rule_ScaleType"
    rule_ScaleType: function() {
        var retval = new AutoExpParser.rule_ScaleType_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var absolute = null;
        var ratio = null;
        var interval = null;
        var ordinal = null;
        var nominal = null;

        var absolute_tree=null;
        var ratio_tree=null;
        var interval_tree=null;
        var ordinal_tree=null;
        var nominal_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:490:15: (absolute= 'Absolute' | ratio= 'Ratio' | interval= 'Interval' | ordinal= 'Ordinal' | nominal= 'Nominal' )
            var alt119=5;
            switch ( this.input.LA(1) ) {
            case 115:
                alt119=1;
                break;
            case 116:
                alt119=2;
                break;
            case 117:
                alt119=3;
                break;
            case 118:
                alt119=4;
                break;
            case 119:
                alt119=5;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 119, 0, this.input);

                throw nvae;
            }

            switch (alt119) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:491:2: absolute= 'Absolute'
                    root_0 = this.adaptor.nil();

                    absolute=this.match(this.input,115,AutoExpParser.FOLLOW_115_in_rule_ScaleType2442); 
                    absolute_tree = this.adaptor.create(absolute);
                    this.adaptor.addChild(root_0, absolute_tree);



                    break;
                case 2 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:491:24: ratio= 'Ratio'
                    root_0 = this.adaptor.nil();

                    ratio=this.match(this.input,116,AutoExpParser.FOLLOW_116_in_rule_ScaleType2448); 
                    ratio_tree = this.adaptor.create(ratio);
                    this.adaptor.addChild(root_0, ratio_tree);



                    break;
                case 3 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:491:40: interval= 'Interval'
                    root_0 = this.adaptor.nil();

                    interval=this.match(this.input,117,AutoExpParser.FOLLOW_117_in_rule_ScaleType2454); 
                    interval_tree = this.adaptor.create(interval);
                    this.adaptor.addChild(root_0, interval_tree);



                    break;
                case 4 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:491:62: ordinal= 'Ordinal'
                    root_0 = this.adaptor.nil();

                    ordinal=this.match(this.input,118,AutoExpParser.FOLLOW_118_in_rule_ScaleType2460); 
                    ordinal_tree = this.adaptor.create(ordinal);
                    this.adaptor.addChild(root_0, ordinal_tree);



                    break;
                case 5 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:491:82: nominal= 'Nominal'
                    root_0 = this.adaptor.nil();

                    nominal=this.match(this.input,119,AutoExpParser.FOLLOW_119_in_rule_ScaleType2466); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:493:1: rule_ThreatType : (iv= 'iv' | ev= 'ev' | c= 'c' | r= 'r' | cl= 'cl' );
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
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:493:16: (iv= 'iv' | ev= 'ev' | c= 'c' | r= 'r' | cl= 'cl' )
            var alt120=5;
            switch ( this.input.LA(1) ) {
            case 120:
                alt120=1;
                break;
            case 121:
                alt120=2;
                break;
            case 122:
                alt120=3;
                break;
            case 123:
                alt120=4;
                break;
            case 124:
                alt120=5;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 120, 0, this.input);

                throw nvae;
            }

            switch (alt120) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:494:2: iv= 'iv'
                    root_0 = this.adaptor.nil();

                    iv=this.match(this.input,120,AutoExpParser.FOLLOW_120_in_rule_ThreatType2476); 
                    iv_tree = this.adaptor.create(iv);
                    this.adaptor.addChild(root_0, iv_tree);



                    break;
                case 2 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:494:12: ev= 'ev'
                    root_0 = this.adaptor.nil();

                    ev=this.match(this.input,121,AutoExpParser.FOLLOW_121_in_rule_ThreatType2482); 
                    ev_tree = this.adaptor.create(ev);
                    this.adaptor.addChild(root_0, ev_tree);



                    break;
                case 3 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:494:22: c= 'c'
                    root_0 = this.adaptor.nil();

                    c=this.match(this.input,122,AutoExpParser.FOLLOW_122_in_rule_ThreatType2488); 
                    c_tree = this.adaptor.create(c);
                    this.adaptor.addChild(root_0, c_tree);



                    break;
                case 4 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:494:30: r= 'r'
                    root_0 = this.adaptor.nil();

                    r=this.match(this.input,123,AutoExpParser.FOLLOW_123_in_rule_ThreatType2494); 
                    r_tree = this.adaptor.create(r);
                    this.adaptor.addChild(root_0, r_tree);



                    break;
                case 5 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:494:38: cl= 'cl'
                    root_0 = this.adaptor.nil();

                    cl=this.match(this.input,124,AutoExpParser.FOLLOW_124_in_rule_ThreatType2500); 
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
    tokenNames: ["<invalid>", "<EOR>", "<DOWN>", "<UP>", "ID", "STRING", "INT", "COMMENT", "WS", "'Experiment'", "'{'", "'Authors'", "','", "'}'", "'description'", "'Abstract'", "'Keywords'", "'Goals'", "'Research Questions'", "'Research Hypotheses'", "'Threat'", "'Experimental Design'", "'Dependent Variables'", "'Instruments'", "'Factors'", "'Treatments'", "'Groups'", "'Objects'", "'Executions'", "'Analysis'", "'Infrastructure'", "'requirements'", "'preconditions'", "'clouds'", "'on-finish'", "'user'", "'username'", "'keys'", "'privateKey'", "'publicKey'", "'fingerprint'", "'cpu'", "'memory'", "'platform'", "'cost'", "'number-of-instances-per-cloud'", "'LINUX'", "'WINDOWS'", "'.'", "'regions'", "'instanceTypes'", "'provider'", "'maxResourcePerType'", "'serviceClass'", "'instances'", "'endpoint'", "'status'", "'city'", "'geographicRegion'", "'zones'", "'UP'", "'DOWN'", "'access-key'", "'secret-key'", "'NONE'", "'SHUTDOWN'", "'TERMINATE'", "'type'", "'runs'", "'Restrictions'", "'Context Variables'", "'objects'", "'command'", "'timeout'", "'result'", "'files'", "'significance'", "'group'", "'parameters'", "'fullName'", "'institution'", "'email'", "'CA'", "'goal'", "'<'", "'='", "'!='", "'>'", "'scaleType'", "'unit'", "'range'", "'instrument'", "'valueExpression'", "'conversionFactor'", "'factor'", "'execution'", "'name'", "'source'", "'dest'", "'checksum'", "'context'", "'objective'", "'method'", "'results'", "'conclusion'", "'object'", "'technique'", "'quality'", "'ptView'", "'contextOf'", "'FACTORIAL'", "'CRD'", "'RCBD'", "'LS'", "'OTHER'", "'Absolute'", "'Ratio'", "'Interval'", "'Ordinal'", "'Nominal'", "'iv'", "'ev'", "'c'", "'r'", "'cl'"],
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
    FOLLOW_10_in_rule_Experiment368: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_ExperimentalObject_in_rule_Experiment372: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Experiment375: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_ExperimentalObject_in_rule_Experiment379: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Experiment383: new org.antlr.runtime.BitSet([0x10000000, 0x00000000]),
    FOLLOW_28_in_rule_Experiment386: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Experiment388: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Execution_in_rule_Experiment392: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Experiment395: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Execution_in_rule_Experiment399: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Experiment403: new org.antlr.runtime.BitSet([0x60000000, 0x00000000]),
    FOLLOW_29_in_rule_Experiment407: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Analysis_in_rule_Experiment411: new org.antlr.runtime.BitSet([0x40000000, 0x00000000]),
    FOLLOW_30_in_rule_Experiment416: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_Infrastructure_in_rule_Experiment420: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Experiment423: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_10_in_rule_Infrastructure435: new org.antlr.runtime.BitSet([0x00000000, 0x00000008]),
    FOLLOW_rule_User_in_rule_Infrastructure441: new org.antlr.runtime.BitSet([0x80002000, 0x00000007]),
    FOLLOW_31_in_rule_Infrastructure446: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_Requirements_in_rule_Infrastructure450: new org.antlr.runtime.BitSet([0x00002000, 0x00000007]),
    FOLLOW_32_in_rule_Infrastructure457: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_Preconditions_in_rule_Infrastructure461: new org.antlr.runtime.BitSet([0x00002000, 0x00000006]),
    FOLLOW_33_in_rule_Infrastructure468: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Infrastructure470: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_Cloud_in_rule_Infrastructure474: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Infrastructure478: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_Cloud_in_rule_Infrastructure482: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Infrastructure486: new org.antlr.runtime.BitSet([0x00002000, 0x00000004]),
    FOLLOW_34_in_rule_Infrastructure493: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000007, 0x00000000]),
    FOLLOW_rule_OnFinishType_in_rule_Infrastructure497: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Infrastructure502: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_10_in_rule_Preconditions515: new org.antlr.runtime.BitSet([0x00002020, 0x00000000]),
    FOLLOW_STRING_in_rule_Preconditions522: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Preconditions526: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Preconditions530: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Preconditions537: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_35_in_rule_User548: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_User550: new org.antlr.runtime.BitSet([0x00000000, 0x00000010]),
    FOLLOW_36_in_rule_User554: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_User558: new org.antlr.runtime.BitSet([0x00002000, 0x00000020]),
    FOLLOW_37_in_rule_User563: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_User565: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_UserKey_in_rule_User569: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_User573: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_UserKey_in_rule_User577: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_User581: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_User589: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_rule_UserKey601: new org.antlr.runtime.BitSet([0x00000402, 0x00000000]),
    FOLLOW_10_in_rule_UserKey605: new org.antlr.runtime.BitSet([0x00002000, 0x000001C0]),
    FOLLOW_38_in_rule_UserKey610: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_UserKey614: new org.antlr.runtime.BitSet([0x00002000, 0x00000180]),
    FOLLOW_39_in_rule_UserKey621: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_UserKey625: new org.antlr.runtime.BitSet([0x00002000, 0x00000100]),
    FOLLOW_40_in_rule_UserKey632: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_UserKey636: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_UserKey641: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_10_in_rule_Requirements654: new org.antlr.runtime.BitSet([0x00000000, 0x00000200]),
    FOLLOW_41_in_rule_Requirements657: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_INT_in_rule_Requirements661: new org.antlr.runtime.BitSet([0x00000000, 0x00000400]),
    FOLLOW_42_in_rule_Requirements664: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_INT_in_rule_Requirements668: new org.antlr.runtime.BitSet([0x00000000, 0x00000800]),
    FOLLOW_43_in_rule_Requirements671: new org.antlr.runtime.BitSet([0x00000000, 0x0000C000]),
    FOLLOW_rule_PlatformType_in_rule_Requirements675: new org.antlr.runtime.BitSet([0x00000000, 0x00001000]),
    FOLLOW_44_in_rule_Requirements678: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_rule_BigDecimalType_in_rule_Requirements682: new org.antlr.runtime.BitSet([0x00000000, 0x00002000]),
    FOLLOW_45_in_rule_Requirements685: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_INT_in_rule_Requirements689: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Requirements692: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_rule_PlatformType705: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_INT_in_rule_BigDecimalType722: new org.antlr.runtime.BitSet([0x00000002, 0x00010000]),
    FOLLOW_48_in_rule_BigDecimalType725: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_INT_in_rule_BigDecimalType727: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_rule_Cloud741: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Cloud744: new org.antlr.runtime.BitSet([0x00000000, 0x00080000]),
    FOLLOW_rule_CloudProvider_in_rule_Cloud750: new org.antlr.runtime.BitSet([0x00000000, 0x40000000]),
    FOLLOW_rule_AccessKey_in_rule_Cloud756: new org.antlr.runtime.BitSet([0x00002000, 0x00060000]),
    FOLLOW_49_in_rule_Cloud760: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Cloud762: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_Region_in_rule_Cloud766: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Cloud770: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_Region_in_rule_Cloud774: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Cloud777: new org.antlr.runtime.BitSet([0x00002000, 0x00040000]),
    FOLLOW_50_in_rule_Cloud783: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Cloud785: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_InstanceType_in_rule_Cloud789: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Cloud793: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_InstanceType_in_rule_Cloud797: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Cloud800: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Cloud805: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_51_in_rule_CloudProvider817: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_CloudProvider821: new org.antlr.runtime.BitSet([0x00000402, 0x00000000]),
    FOLLOW_10_in_rule_CloudProvider825: new org.antlr.runtime.BitSet([0x00006000, 0x00300000]),
    FOLLOW_52_in_rule_CloudProvider829: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_INT_in_rule_CloudProvider833: new org.antlr.runtime.BitSet([0x00006000, 0x00200000]),
    FOLLOW_14_in_rule_CloudProvider841: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_CloudProvider845: new org.antlr.runtime.BitSet([0x00002000, 0x00200000]),
    FOLLOW_53_in_rule_CloudProvider853: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_CloudProvider857: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_CloudProvider864: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_rule_InstanceType883: new org.antlr.runtime.BitSet([0x00000002, 0x00400000]),
    FOLLOW_54_in_rule_InstanceType887: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_INT_in_rule_InstanceType891: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_rule_Region906: new org.antlr.runtime.BitSet([0x00000402, 0x00000000]),
    FOLLOW_10_in_rule_Region910: new org.antlr.runtime.BitSet([0x00002000, 0x0F800000]),
    FOLLOW_55_in_rule_Region914: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Region918: new org.antlr.runtime.BitSet([0x00002000, 0x0F000000]),
    FOLLOW_56_in_rule_Region924: new org.antlr.runtime.BitSet([0x00000000, 0x30000000]),
    FOLLOW_rule_StatusType_in_rule_Region928: new org.antlr.runtime.BitSet([0x00002000, 0x0E000000]),
    FOLLOW_57_in_rule_Region934: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Region938: new org.antlr.runtime.BitSet([0x00002000, 0x0C000000]),
    FOLLOW_58_in_rule_Region944: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_INT_in_rule_Region948: new org.antlr.runtime.BitSet([0x00002000, 0x08000000]),
    FOLLOW_59_in_rule_Region954: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Region956: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_Zone_in_rule_Region960: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Region964: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_Zone_in_rule_Region968: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Region971: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Region976: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_rule_StatusType997: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_rule_Zone1017: new org.antlr.runtime.BitSet([0x00000022, 0x00000000]),
    FOLLOW_STRING_in_rule_Zone1023: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_62_in_rule_AccessKey1037: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_AccessKey1041: new org.antlr.runtime.BitSet([0x00000000, 0x80000000]),
    FOLLOW_63_in_rule_AccessKey1044: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_AccessKey1047: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_rule_OnFinishType1074: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_rule_Abstract_Impl_in_rule_Abstract1094: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_rule_SimpleAbstract_in_rule_Abstract1098: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_rule_StructuredAbstract_in_rule_Abstract1102: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_rule_Goal_Impl_in_rule_Goal1113: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_rule_SimpleGoal_in_rule_Goal1117: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_rule_StructuredGoal_in_rule_Goal1121: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_10_in_rule_ExperimentalDesign1132: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000018, 0x00000000]),
    FOLLOW_67_in_rule_ExperimentalDesign1136: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x0007C000]),
    FOLLOW_rule_DesignType_in_rule_ExperimentalDesign1140: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000010, 0x00000000]),
    FOLLOW_68_in_rule_ExperimentalDesign1145: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_INT_in_rule_ExperimentalDesign1149: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000060, 0x00000000]),
    FOLLOW_69_in_rule_ExperimentalDesign1155: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_ExperimentalDesign1157: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Restriction_in_rule_ExperimentalDesign1161: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_ExperimentalDesign1164: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Restriction_in_rule_ExperimentalDesign1168: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_ExperimentalDesign1172: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000040, 0x00000000]),
    FOLLOW_70_in_rule_ExperimentalDesign1180: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_ExperimentalDesign1182: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_ContextVariable_in_rule_ExperimentalDesign1186: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_ExperimentalDesign1189: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_ContextVariable_in_rule_ExperimentalDesign1193: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_ExperimentalDesign1197: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_ExperimentalDesign1202: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Restriction1215: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000080, 0x00000000]),
    FOLLOW_71_in_rule_Restriction1217: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Restriction1219: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_Restriction1223: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Restriction1226: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_Restriction1230: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Restriction1234: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Execution1249: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Execution1252: new org.antlr.runtime.BitSet([0x00002000, 0x00000001,0x00000F00, 0x00000000]),
    FOLLOW_72_in_rule_Execution1256: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Execution1260: new org.antlr.runtime.BitSet([0x00002000, 0x00000001,0x00000E00, 0x00000000]),
    FOLLOW_73_in_rule_Execution1266: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_rule_BigDecimalType_in_rule_Execution1270: new org.antlr.runtime.BitSet([0x00002000, 0x00000001,0x00000C00, 0x00000000]),
    FOLLOW_32_in_rule_Execution1276: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_Preconditions_in_rule_Execution1280: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000C00, 0x00000000]),
    FOLLOW_74_in_rule_Execution1286: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_File_in_rule_Execution1290: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000800, 0x00000000]),
    FOLLOW_75_in_rule_Execution1296: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Execution1298: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_File_in_rule_Execution1302: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Execution1305: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_File_in_rule_Execution1309: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Execution1313: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Execution1318: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Analysis1333: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Analysis1336: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00001000, 0x00000000]),
    FOLLOW_76_in_rule_Analysis1340: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_rule_BigDecimalType_in_rule_Analysis1344: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Analysis1349: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_ExperimentalObject1364: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_ExperimentalObject1367: new org.antlr.runtime.BitSet([0x00004000, 0x00000000]),
    FOLLOW_14_in_rule_ExperimentalObject1370: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_ExperimentalObject1374: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00006800, 0x00000000]),
    FOLLOW_77_in_rule_ExperimentalObject1378: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_ExperimentalObject1382: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00004800, 0x00000000]),
    FOLLOW_78_in_rule_ExperimentalObject1388: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_ExperimentalObject1390: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Parameter_in_rule_ExperimentalObject1394: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_ExperimentalObject1397: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Parameter_in_rule_ExperimentalObject1401: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_ExperimentalObject1405: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000800, 0x00000000]),
    FOLLOW_75_in_rule_ExperimentalObject1411: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_ExperimentalObject1413: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_File_in_rule_ExperimentalObject1417: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_ExperimentalObject1420: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_File_in_rule_ExperimentalObject1424: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_ExperimentalObject1428: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_ExperimentalObject1433: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Author1458: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Author1461: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00038000, 0x00000000]),
    FOLLOW_79_in_rule_Author1465: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Author1469: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00030000, 0x00000000]),
    FOLLOW_80_in_rule_Author1475: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Author1479: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00020000, 0x00000000]),
    FOLLOW_81_in_rule_Author1485: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Author1489: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Author1496: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_rule_Keyword1511: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Threat1528: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Threat1531: new org.antlr.runtime.BitSet([0x00006000, 0x00000000,0x00040008, 0x00000000]),
    FOLLOW_14_in_rule_Threat1535: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Threat1539: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00040008, 0x00000000]),
    FOLLOW_67_in_rule_Threat1545: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x1F000000]),
    FOLLOW_rule_ThreatType_in_rule_Threat1549: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00040000, 0x00000000]),
    FOLLOW_82_in_rule_Threat1555: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Threat1559: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Threat1564: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Goal_Impl1579: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_ResearchQuestion1594: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_ResearchQuestion1597: new org.antlr.runtime.BitSet([0x00006000, 0x00000000,0x00080000, 0x00000000]),
    FOLLOW_14_in_rule_ResearchQuestion1601: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_ResearchQuestion1605: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00080000, 0x00000000]),
    FOLLOW_83_in_rule_ResearchQuestion1611: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_ResearchQuestion1615: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_ResearchQuestion1620: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_ResearchHypothesis1635: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_ResearchHypothesis1638: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_ResearchHypothesisFormula_in_rule_ResearchHypothesis1643: new org.antlr.runtime.BitSet([0x00006000, 0x00000000,0x00080000, 0x00000000]),
    FOLLOW_14_in_rule_ResearchHypothesis1647: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_ResearchHypothesis1651: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00080000, 0x00000000]),
    FOLLOW_83_in_rule_ResearchHypothesis1657: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_ResearchHypothesis1661: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_ResearchHypothesis1666: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_ResearchHypothesisFormula1681: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_ResearchHypothesisFormula1685: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00F00000, 0x00000000]),
    FOLLOW_rule_OperatorType_in_rule_ResearchHypothesisFormula1689: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_ResearchHypothesisFormula1693: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_rule_OperatorType1705: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_rule_DependentVariable_Impl_in_rule_DependentVariable1729: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_rule_BuiltinDependentVariable_in_rule_DependentVariable1731: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_rule_CustomDependentVariable_in_rule_DependentVariable1733: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_DependentVariable_Impl1749: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_rule_BuiltinDependentVariable1764: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_CustomDependentVariable1782: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_CustomDependentVariable1785: new org.antlr.runtime.BitSet([0x00004000, 0x00000000]),
    FOLLOW_14_in_rule_CustomDependentVariable1788: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_CustomDependentVariable1792: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x0F000000, 0x00000000]),
    FOLLOW_88_in_rule_CustomDependentVariable1796: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00F80000]),
    FOLLOW_rule_ScaleType_in_rule_CustomDependentVariable1800: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x0E000000, 0x00000000]),
    FOLLOW_89_in_rule_CustomDependentVariable1806: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_CustomDependentVariable1810: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x0C000000, 0x00000000]),
    FOLLOW_90_in_rule_CustomDependentVariable1816: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_CustomDependentVariable1818: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Range_in_rule_CustomDependentVariable1822: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_CustomDependentVariable1825: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Range_in_rule_CustomDependentVariable1829: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_CustomDependentVariable1833: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x08000000, 0x00000000]),
    FOLLOW_91_in_rule_CustomDependentVariable1839: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_CustomDependentVariable1843: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_CustomDependentVariable1848: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Instrument1862: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Instrument1865: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000100, 0x00000000]),
    FOLLOW_72_in_rule_Instrument1868: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Instrument1872: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x10000000, 0x00000000]),
    FOLLOW_92_in_rule_Instrument1875: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Instrument1879: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x20000000, 0x00000000]),
    FOLLOW_93_in_rule_Instrument1883: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_rule_BigDecimalType_in_rule_Instrument1887: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Instrument1892: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Factor1907: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Factor1910: new org.antlr.runtime.BitSet([0x00004000, 0x00000000]),
    FOLLOW_14_in_rule_Factor1913: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Factor1917: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x01000000, 0x00000000]),
    FOLLOW_88_in_rule_Factor1921: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00F80000]),
    FOLLOW_rule_ScaleType_in_rule_Factor1925: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Factor1930: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_ContextVariable1945: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_ContextVariable1948: new org.antlr.runtime.BitSet([0x00006000, 0x00000000,0x05000000, 0x00000000]),
    FOLLOW_14_in_rule_ContextVariable1952: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_ContextVariable1956: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x05000000, 0x00000000]),
    FOLLOW_88_in_rule_ContextVariable1962: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00F80000]),
    FOLLOW_rule_ScaleType_in_rule_ContextVariable1966: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x04000000, 0x00000000]),
    FOLLOW_90_in_rule_ContextVariable1972: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_ContextVariable1974: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Range_in_rule_ContextVariable1978: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_ContextVariable1981: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Range_in_rule_ContextVariable1985: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_ContextVariable1989: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_ContextVariable1994: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Range2009: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Treatment2022: new org.antlr.runtime.BitSet([0x00004000, 0x00000000]),
    FOLLOW_14_in_rule_Treatment2025: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Treatment2029: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x40000000, 0x00000000]),
    FOLLOW_94_in_rule_Treatment2032: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_Treatment2036: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80004800, 0x00000000]),
    FOLLOW_78_in_rule_Treatment2040: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Treatment2042: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Parameter_in_rule_Treatment2046: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Treatment2049: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Parameter_in_rule_Treatment2053: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Treatment2057: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000800, 0x00000000]),
    FOLLOW_75_in_rule_Treatment2063: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Treatment2065: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_File_in_rule_Treatment2069: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Treatment2072: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_File_in_rule_Treatment2076: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Treatment2080: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x00000000]),
    FOLLOW_95_in_rule_Treatment2085: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_Treatment2089: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_10_in_rule_File2102: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000001]),
    FOLLOW_96_in_rule_File2105: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_File2109: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000002]),
    FOLLOW_97_in_rule_File2112: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_File2116: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000000, 0x0000000C]),
    FOLLOW_98_in_rule_File2120: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_File2124: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000000, 0x00000008]),
    FOLLOW_99_in_rule_File2130: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_File2134: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_File2139: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Parameter2156: new org.antlr.runtime.BitSet([0x00000022, 0x00000000]),
    FOLLOW_STRING_in_rule_Parameter2162: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_rule_ExecutionParameter2180: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Artifact2197: new org.antlr.runtime.BitSet([0x00000022, 0x00000000]),
    FOLLOW_STRING_in_rule_Artifact2203: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_ObjectGroup2220: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_rule_SimpleAbstract2236: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_10_in_rule_StructuredAbstract2252: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000000, 0x000001F0]),
    FOLLOW_100_in_rule_StructuredAbstract2256: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_StructuredAbstract2260: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000000, 0x000001E0]),
    FOLLOW_101_in_rule_StructuredAbstract2266: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_StructuredAbstract2270: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000000, 0x000001C0]),
    FOLLOW_102_in_rule_StructuredAbstract2276: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_StructuredAbstract2280: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000000, 0x00000180]),
    FOLLOW_103_in_rule_StructuredAbstract2286: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_StructuredAbstract2290: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000000, 0x00000100]),
    FOLLOW_104_in_rule_StructuredAbstract2296: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_StructuredAbstract2300: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_StructuredAbstract2305: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_SimpleGoal2320: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_SimpleGoal2325: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_StructuredGoal2342: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_StructuredGoal2345: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000000, 0x00003E00]),
    FOLLOW_105_in_rule_StructuredGoal2349: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_StructuredGoal2353: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000000, 0x00003C00]),
    FOLLOW_106_in_rule_StructuredGoal2359: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_StructuredGoal2363: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000000, 0x00003800]),
    FOLLOW_107_in_rule_StructuredGoal2369: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_StructuredGoal2373: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000000, 0x00003000]),
    FOLLOW_108_in_rule_StructuredGoal2379: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_StructuredGoal2383: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000000, 0x00002000]),
    FOLLOW_109_in_rule_StructuredGoal2389: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_StructuredGoal2393: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_StructuredGoal2398: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_110_in_rule_DesignType2408: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_111_in_rule_DesignType2414: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_112_in_rule_DesignType2420: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_113_in_rule_DesignType2426: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_114_in_rule_DesignType2432: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_115_in_rule_ScaleType2442: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_116_in_rule_ScaleType2448: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_117_in_rule_ScaleType2454: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_118_in_rule_ScaleType2460: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_119_in_rule_ScaleType2466: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_120_in_rule_ThreatType2476: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_121_in_rule_ThreatType2482: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_122_in_rule_ThreatType2488: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_123_in_rule_ThreatType2494: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_124_in_rule_ThreatType2500: new org.antlr.runtime.BitSet([0x00000002, 0x00000000])
});

})();