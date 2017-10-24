// $ANTLR 3.3 avr. 19, 2016 01:13:22 /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g 2017-10-23 20:39:43



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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:32:1: rule_Experiment : 'Experiment' name_0= ID '{' ( 'Authors' '{' authors_1+= rule_Author ( ',' authors_2+= rule_Author )* '}' )? ( 'description' description_3= STRING )? ( 'Abstract' abstract_4= rule_Abstract )? ( 'Keywords' '{' keywords_5+= rule_Keyword ( ',' keywords_6+= rule_Keyword )* '}' )? ( 'Goals' '{' goals_7+= rule_Goal ( ',' goals_8+= rule_Goal )* '}' )? ( 'Research Questions' '{' researchquestions_9+= rule_ResearchQuestion ( ',' researchquestions_10+= rule_ResearchQuestion )* '}' )? ( 'Research Hypotheses' '{' researchhypotheses_11+= rule_ResearchHypothesis ( ',' researchhypotheses_12+= rule_ResearchHypothesis )* '}' )? ( 'Threat' '{' threats_13+= rule_Threat ( ',' threats_14+= rule_Threat )* '}' )? 'Experimental Design' experimentaldesign_15= rule_ExperimentalDesign ( 'Executions' '{' executions_16+= rule_Execution ( ',' executions_17+= rule_Execution )* '}' )? ( 'Analysis' analysis_18= rule_Analysis )? ( 'Infrastructure' infrastructure_19= rule_Infrastructure )? '}' ;
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
        var string_literal36 = null;
        var char_literal37 = null;
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
        var list_executions_16=null;
        var list_executions_17=null;
         var abstract_4 = null;
         var experimentaldesign_15 = null;
         var analysis_18 = null;
         var infrastructure_19 = null;
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
        var executions_16 = null;
        var executions_17 = null;
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
        var string_literal36_tree=null;
        var char_literal37_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:32:17: ( 'Experiment' name_0= ID '{' ( 'Authors' '{' authors_1+= rule_Author ( ',' authors_2+= rule_Author )* '}' )? ( 'description' description_3= STRING )? ( 'Abstract' abstract_4= rule_Abstract )? ( 'Keywords' '{' keywords_5+= rule_Keyword ( ',' keywords_6+= rule_Keyword )* '}' )? ( 'Goals' '{' goals_7+= rule_Goal ( ',' goals_8+= rule_Goal )* '}' )? ( 'Research Questions' '{' researchquestions_9+= rule_ResearchQuestion ( ',' researchquestions_10+= rule_ResearchQuestion )* '}' )? ( 'Research Hypotheses' '{' researchhypotheses_11+= rule_ResearchHypothesis ( ',' researchhypotheses_12+= rule_ResearchHypothesis )* '}' )? ( 'Threat' '{' threats_13+= rule_Threat ( ',' threats_14+= rule_Threat )* '}' )? 'Experimental Design' experimentaldesign_15= rule_ExperimentalDesign ( 'Executions' '{' executions_16+= rule_Execution ( ',' executions_17+= rule_Execution )* '}' )? ( 'Analysis' analysis_18= rule_Analysis )? ( 'Infrastructure' infrastructure_19= rule_Infrastructure )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:33:2: 'Experiment' name_0= ID '{' ( 'Authors' '{' authors_1+= rule_Author ( ',' authors_2+= rule_Author )* '}' )? ( 'description' description_3= STRING )? ( 'Abstract' abstract_4= rule_Abstract )? ( 'Keywords' '{' keywords_5+= rule_Keyword ( ',' keywords_6+= rule_Keyword )* '}' )? ( 'Goals' '{' goals_7+= rule_Goal ( ',' goals_8+= rule_Goal )* '}' )? ( 'Research Questions' '{' researchquestions_9+= rule_ResearchQuestion ( ',' researchquestions_10+= rule_ResearchQuestion )* '}' )? ( 'Research Hypotheses' '{' researchhypotheses_11+= rule_ResearchHypothesis ( ',' researchhypotheses_12+= rule_ResearchHypothesis )* '}' )? ( 'Threat' '{' threats_13+= rule_Threat ( ',' threats_14+= rule_Threat )* '}' )? 'Experimental Design' experimentaldesign_15= rule_ExperimentalDesign ( 'Executions' '{' executions_16+= rule_Execution ( ',' executions_17+= rule_Execution )* '}' )? ( 'Analysis' analysis_18= rule_Analysis )? ( 'Infrastructure' infrastructure_19= rule_Infrastructure )? '}'
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
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:45:2: ( 'Executions' '{' executions_16+= rule_Execution ( ',' executions_17+= rule_Execution )* '}' )?
            var alt17=2;
            var LA17_0 = this.input.LA(1);

            if ( (LA17_0==22) ) {
                alt17=1;
            }
            switch (alt17) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:45:3: 'Executions' '{' executions_16+= rule_Execution ( ',' executions_17+= rule_Execution )* '}'
                    string_literal31=this.match(this.input,22,AutoExpParser.FOLLOW_22_in_rule_Experiment261); 
                    string_literal31_tree = this.adaptor.create(string_literal31);
                    this.adaptor.addChild(root_0, string_literal31_tree);

                    char_literal32=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Experiment263); 
                    char_literal32_tree = this.adaptor.create(char_literal32);
                    this.adaptor.addChild(root_0, char_literal32_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Execution_in_rule_Experiment267);
                    executions_16=this.rule_Execution();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, executions_16.getTree());
                    if (org.antlr.lang.isNull(list_executions_16)) list_executions_16 = [];
                    list_executions_16.push(executions_16.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:45:50: ( ',' executions_17+= rule_Execution )*
                    loop16:
                    do {
                        var alt16=2;
                        var LA16_0 = this.input.LA(1);

                        if ( (LA16_0==12) ) {
                            alt16=1;
                        }


                        switch (alt16) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:45:51: ',' executions_17+= rule_Execution
                            char_literal33=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Experiment270); 
                            char_literal33_tree = this.adaptor.create(char_literal33);
                            this.adaptor.addChild(root_0, char_literal33_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Execution_in_rule_Experiment274);
                            executions_17=this.rule_Execution();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, executions_17.getTree());
                            if (org.antlr.lang.isNull(list_executions_17)) list_executions_17 = [];
                            list_executions_17.push(executions_17.getTree());



                            break;

                        default :
                            break loop16;
                        }
                    } while (true);

                    char_literal34=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Experiment278); 
                    char_literal34_tree = this.adaptor.create(char_literal34);
                    this.adaptor.addChild(root_0, char_literal34_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:46:2: ( 'Analysis' analysis_18= rule_Analysis )?
            var alt18=2;
            var LA18_0 = this.input.LA(1);

            if ( (LA18_0==23) ) {
                alt18=1;
            }
            switch (alt18) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:46:3: 'Analysis' analysis_18= rule_Analysis
                    string_literal35=this.match(this.input,23,AutoExpParser.FOLLOW_23_in_rule_Experiment284); 
                    string_literal35_tree = this.adaptor.create(string_literal35);
                    this.adaptor.addChild(root_0, string_literal35_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Analysis_in_rule_Experiment288);
                    analysis_18=this.rule_Analysis();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, analysis_18.getTree());


                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:47:2: ( 'Infrastructure' infrastructure_19= rule_Infrastructure )?
            var alt19=2;
            var LA19_0 = this.input.LA(1);

            if ( (LA19_0==24) ) {
                alt19=1;
            }
            switch (alt19) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:47:3: 'Infrastructure' infrastructure_19= rule_Infrastructure
                    string_literal36=this.match(this.input,24,AutoExpParser.FOLLOW_24_in_rule_Experiment294); 
                    string_literal36_tree = this.adaptor.create(string_literal36);
                    this.adaptor.addChild(root_0, string_literal36_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Infrastructure_in_rule_Experiment298);
                    infrastructure_19=this.rule_Infrastructure();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, infrastructure_19.getTree());


                    break;

            }

            char_literal37=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Experiment303); 
            char_literal37_tree = this.adaptor.create(char_literal37);
            this.adaptor.addChild(root_0, char_literal37_tree);




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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:52:1: rule_Infrastructure : '{' (user_0= rule_User )? ( 'requirements' requirements_1= rule_Requirements )? ( 'preconditions' preconditions_2= rule_Preconditions )? ( 'clouds' '{' clouds_3+= rule_Cloud ( ',' clouds_4+= rule_Cloud )* '}' )? ( 'on-finish' onfinish_5= rule_OnFinishType )? '}' ;
    // $ANTLR start "rule_Infrastructure"
    rule_Infrastructure: function() {
        var retval = new AutoExpParser.rule_Infrastructure_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal38 = null;
        var string_literal39 = null;
        var string_literal40 = null;
        var string_literal41 = null;
        var char_literal42 = null;
        var char_literal43 = null;
        var char_literal44 = null;
        var string_literal45 = null;
        var char_literal46 = null;
        var list_clouds_3=null;
        var list_clouds_4=null;
         var user_0 = null;
         var requirements_1 = null;
         var preconditions_2 = null;
         var onfinish_5 = null;
        var clouds_3 = null;
        var clouds_4 = null;
        var char_literal38_tree=null;
        var string_literal39_tree=null;
        var string_literal40_tree=null;
        var string_literal41_tree=null;
        var char_literal42_tree=null;
        var char_literal43_tree=null;
        var char_literal44_tree=null;
        var string_literal45_tree=null;
        var char_literal46_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:52:20: ( '{' (user_0= rule_User )? ( 'requirements' requirements_1= rule_Requirements )? ( 'preconditions' preconditions_2= rule_Preconditions )? ( 'clouds' '{' clouds_3+= rule_Cloud ( ',' clouds_4+= rule_Cloud )* '}' )? ( 'on-finish' onfinish_5= rule_OnFinishType )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:54:2: '{' (user_0= rule_User )? ( 'requirements' requirements_1= rule_Requirements )? ( 'preconditions' preconditions_2= rule_Preconditions )? ( 'clouds' '{' clouds_3+= rule_Cloud ( ',' clouds_4+= rule_Cloud )* '}' )? ( 'on-finish' onfinish_5= rule_OnFinishType )? '}'
            root_0 = this.adaptor.nil();

            char_literal38=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Infrastructure315); 
            char_literal38_tree = this.adaptor.create(char_literal38);
            this.adaptor.addChild(root_0, char_literal38_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:55:3: (user_0= rule_User )?
            var alt20=2;
            var LA20_0 = this.input.LA(1);

            if ( (LA20_0==29) ) {
                alt20=1;
            }
            switch (alt20) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:55:4: user_0= rule_User
                    this.pushFollow(AutoExpParser.FOLLOW_rule_User_in_rule_Infrastructure322);
                    user_0=this.rule_User();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, user_0.getTree());


                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:56:3: ( 'requirements' requirements_1= rule_Requirements )?
            var alt21=2;
            var LA21_0 = this.input.LA(1);

            if ( (LA21_0==25) ) {
                alt21=1;
            }
            switch (alt21) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:56:4: 'requirements' requirements_1= rule_Requirements
                    string_literal39=this.match(this.input,25,AutoExpParser.FOLLOW_25_in_rule_Infrastructure329); 
                    string_literal39_tree = this.adaptor.create(string_literal39);
                    this.adaptor.addChild(root_0, string_literal39_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Requirements_in_rule_Infrastructure333);
                    requirements_1=this.rule_Requirements();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, requirements_1.getTree());


                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:57:3: ( 'preconditions' preconditions_2= rule_Preconditions )?
            var alt22=2;
            var LA22_0 = this.input.LA(1);

            if ( (LA22_0==26) ) {
                alt22=1;
            }
            switch (alt22) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:57:4: 'preconditions' preconditions_2= rule_Preconditions
                    string_literal40=this.match(this.input,26,AutoExpParser.FOLLOW_26_in_rule_Infrastructure340); 
                    string_literal40_tree = this.adaptor.create(string_literal40);
                    this.adaptor.addChild(root_0, string_literal40_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Preconditions_in_rule_Infrastructure344);
                    preconditions_2=this.rule_Preconditions();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, preconditions_2.getTree());


                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:58:3: ( 'clouds' '{' clouds_3+= rule_Cloud ( ',' clouds_4+= rule_Cloud )* '}' )?
            var alt24=2;
            var LA24_0 = this.input.LA(1);

            if ( (LA24_0==27) ) {
                alt24=1;
            }
            switch (alt24) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:58:4: 'clouds' '{' clouds_3+= rule_Cloud ( ',' clouds_4+= rule_Cloud )* '}'
                    string_literal41=this.match(this.input,27,AutoExpParser.FOLLOW_27_in_rule_Infrastructure351); 
                    string_literal41_tree = this.adaptor.create(string_literal41);
                    this.adaptor.addChild(root_0, string_literal41_tree);

                    char_literal42=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Infrastructure353); 
                    char_literal42_tree = this.adaptor.create(char_literal42);
                    this.adaptor.addChild(root_0, char_literal42_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Cloud_in_rule_Infrastructure357);
                    clouds_3=this.rule_Cloud();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, clouds_3.getTree());
                    if (org.antlr.lang.isNull(list_clouds_3)) list_clouds_3 = [];
                    list_clouds_3.push(clouds_3.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:58:39: ( ',' clouds_4+= rule_Cloud )*
                    loop23:
                    do {
                        var alt23=2;
                        var LA23_0 = this.input.LA(1);

                        if ( (LA23_0==12) ) {
                            alt23=1;
                        }


                        switch (alt23) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:58:40: ',' clouds_4+= rule_Cloud
                            char_literal43=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Infrastructure361); 
                            char_literal43_tree = this.adaptor.create(char_literal43);
                            this.adaptor.addChild(root_0, char_literal43_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Cloud_in_rule_Infrastructure365);
                            clouds_4=this.rule_Cloud();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, clouds_4.getTree());
                            if (org.antlr.lang.isNull(list_clouds_4)) list_clouds_4 = [];
                            list_clouds_4.push(clouds_4.getTree());



                            break;

                        default :
                            break loop23;
                        }
                    } while (true);

                    char_literal44=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Infrastructure369); 
                    char_literal44_tree = this.adaptor.create(char_literal44);
                    this.adaptor.addChild(root_0, char_literal44_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:59:3: ( 'on-finish' onfinish_5= rule_OnFinishType )?
            var alt25=2;
            var LA25_0 = this.input.LA(1);

            if ( (LA25_0==28) ) {
                alt25=1;
            }
            switch (alt25) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:59:4: 'on-finish' onfinish_5= rule_OnFinishType
                    string_literal45=this.match(this.input,28,AutoExpParser.FOLLOW_28_in_rule_Infrastructure376); 
                    string_literal45_tree = this.adaptor.create(string_literal45);
                    this.adaptor.addChild(root_0, string_literal45_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_OnFinishType_in_rule_Infrastructure380);
                    onfinish_5=this.rule_OnFinishType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, onfinish_5.getTree());


                    break;

            }

            char_literal46=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Infrastructure385); 
            char_literal46_tree = this.adaptor.create(char_literal46);
            this.adaptor.addChild(root_0, char_literal46_tree);




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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:65:1: rule_Preconditions : '{' (packages_0+= STRING ( ',' packages_1+= STRING )* )? '}' ;
    // $ANTLR start "rule_Preconditions"
    rule_Preconditions: function() {
        var retval = new AutoExpParser.rule_Preconditions_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal47 = null;
        var char_literal48 = null;
        var char_literal49 = null;
        var packages_0 = null;
        var packages_1 = null;
        var list_packages_0=null;
        var list_packages_1=null;

        var char_literal47_tree=null;
        var char_literal48_tree=null;
        var char_literal49_tree=null;
        var packages_0_tree=null;
        var packages_1_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:65:19: ( '{' (packages_0+= STRING ( ',' packages_1+= STRING )* )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:67:2: '{' (packages_0+= STRING ( ',' packages_1+= STRING )* )? '}'
            root_0 = this.adaptor.nil();

            char_literal47=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Preconditions398); 
            char_literal47_tree = this.adaptor.create(char_literal47);
            this.adaptor.addChild(root_0, char_literal47_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:68:3: (packages_0+= STRING ( ',' packages_1+= STRING )* )?
            var alt27=2;
            var LA27_0 = this.input.LA(1);

            if ( (LA27_0==STRING) ) {
                alt27=1;
            }
            switch (alt27) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:68:4: packages_0+= STRING ( ',' packages_1+= STRING )*
                    packages_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Preconditions405); 
                    packages_0_tree = this.adaptor.create(packages_0);
                    this.adaptor.addChild(root_0, packages_0_tree);

                    if (org.antlr.lang.isNull(list_packages_0)) list_packages_0 = [];
                    list_packages_0.push(packages_0);

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:68:24: ( ',' packages_1+= STRING )*
                    loop26:
                    do {
                        var alt26=2;
                        var LA26_0 = this.input.LA(1);

                        if ( (LA26_0==12) ) {
                            alt26=1;
                        }


                        switch (alt26) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:68:25: ',' packages_1+= STRING
                            char_literal48=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Preconditions409); 
                            char_literal48_tree = this.adaptor.create(char_literal48);
                            this.adaptor.addChild(root_0, char_literal48_tree);

                            packages_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Preconditions413); 
                            packages_1_tree = this.adaptor.create(packages_1);
                            this.adaptor.addChild(root_0, packages_1_tree);

                            if (org.antlr.lang.isNull(list_packages_1)) list_packages_1 = [];
                            list_packages_1.push(packages_1);



                            break;

                        default :
                            break loop26;
                        }
                    } while (true);



                    break;

            }

            char_literal49=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Preconditions420); 
            char_literal49_tree = this.adaptor.create(char_literal49);
            this.adaptor.addChild(root_0, char_literal49_tree);




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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:73:1: rule_User : 'user' '{' 'username' username_0= STRING ( 'keys' '{' keys_1+= rule_UserKey ( ',' keys_2+= rule_UserKey )* '}' )? '}' ;
    // $ANTLR start "rule_User"
    rule_User: function() {
        var retval = new AutoExpParser.rule_User_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var username_0 = null;
        var string_literal50 = null;
        var char_literal51 = null;
        var string_literal52 = null;
        var string_literal53 = null;
        var char_literal54 = null;
        var char_literal55 = null;
        var char_literal56 = null;
        var char_literal57 = null;
        var list_keys_1=null;
        var list_keys_2=null;
        var keys_1 = null;
        var keys_2 = null;
        var username_0_tree=null;
        var string_literal50_tree=null;
        var char_literal51_tree=null;
        var string_literal52_tree=null;
        var string_literal53_tree=null;
        var char_literal54_tree=null;
        var char_literal55_tree=null;
        var char_literal56_tree=null;
        var char_literal57_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:73:10: ( 'user' '{' 'username' username_0= STRING ( 'keys' '{' keys_1+= rule_UserKey ( ',' keys_2+= rule_UserKey )* '}' )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:74:2: 'user' '{' 'username' username_0= STRING ( 'keys' '{' keys_1+= rule_UserKey ( ',' keys_2+= rule_UserKey )* '}' )? '}'
            root_0 = this.adaptor.nil();

            string_literal50=this.match(this.input,29,AutoExpParser.FOLLOW_29_in_rule_User431); 
            string_literal50_tree = this.adaptor.create(string_literal50);
            this.adaptor.addChild(root_0, string_literal50_tree);

            char_literal51=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_User433); 
            char_literal51_tree = this.adaptor.create(char_literal51);
            this.adaptor.addChild(root_0, char_literal51_tree);

            string_literal52=this.match(this.input,30,AutoExpParser.FOLLOW_30_in_rule_User437); 
            string_literal52_tree = this.adaptor.create(string_literal52);
            this.adaptor.addChild(root_0, string_literal52_tree);

            username_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_User441); 
            username_0_tree = this.adaptor.create(username_0);
            this.adaptor.addChild(root_0, username_0_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:76:3: ( 'keys' '{' keys_1+= rule_UserKey ( ',' keys_2+= rule_UserKey )* '}' )?
            var alt29=2;
            var LA29_0 = this.input.LA(1);

            if ( (LA29_0==31) ) {
                alt29=1;
            }
            switch (alt29) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:76:4: 'keys' '{' keys_1+= rule_UserKey ( ',' keys_2+= rule_UserKey )* '}'
                    string_literal53=this.match(this.input,31,AutoExpParser.FOLLOW_31_in_rule_User446); 
                    string_literal53_tree = this.adaptor.create(string_literal53);
                    this.adaptor.addChild(root_0, string_literal53_tree);

                    char_literal54=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_User448); 
                    char_literal54_tree = this.adaptor.create(char_literal54);
                    this.adaptor.addChild(root_0, char_literal54_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_UserKey_in_rule_User452);
                    keys_1=this.rule_UserKey();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, keys_1.getTree());
                    if (org.antlr.lang.isNull(list_keys_1)) list_keys_1 = [];
                    list_keys_1.push(keys_1.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:76:37: ( ',' keys_2+= rule_UserKey )*
                    loop28:
                    do {
                        var alt28=2;
                        var LA28_0 = this.input.LA(1);

                        if ( (LA28_0==12) ) {
                            alt28=1;
                        }


                        switch (alt28) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:76:38: ',' keys_2+= rule_UserKey
                            char_literal55=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_User456); 
                            char_literal55_tree = this.adaptor.create(char_literal55);
                            this.adaptor.addChild(root_0, char_literal55_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_UserKey_in_rule_User460);
                            keys_2=this.rule_UserKey();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, keys_2.getTree());
                            if (org.antlr.lang.isNull(list_keys_2)) list_keys_2 = [];
                            list_keys_2.push(keys_2.getTree());



                            break;

                        default :
                            break loop28;
                        }
                    } while (true);

                    char_literal56=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_User464); 
                    char_literal56_tree = this.adaptor.create(char_literal56);
                    this.adaptor.addChild(root_0, char_literal56_tree);



                    break;

            }

            char_literal57=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_User472); 
            char_literal57_tree = this.adaptor.create(char_literal57);
            this.adaptor.addChild(root_0, char_literal57_tree);




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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:82:1: rule_UserKey : name_0= STRING ( '{' ( 'privateKey' privatekey_1= STRING )? ( 'publicKey' publickey_2= STRING )? ( 'fingerprint' fingerprint_3= STRING )? '}' )? ;
    // $ANTLR start "rule_UserKey"
    rule_UserKey: function() {
        var retval = new AutoExpParser.rule_UserKey_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var privatekey_1 = null;
        var publickey_2 = null;
        var fingerprint_3 = null;
        var char_literal58 = null;
        var string_literal59 = null;
        var string_literal60 = null;
        var string_literal61 = null;
        var char_literal62 = null;

        var name_0_tree=null;
        var privatekey_1_tree=null;
        var publickey_2_tree=null;
        var fingerprint_3_tree=null;
        var char_literal58_tree=null;
        var string_literal59_tree=null;
        var string_literal60_tree=null;
        var string_literal61_tree=null;
        var char_literal62_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:82:13: (name_0= STRING ( '{' ( 'privateKey' privatekey_1= STRING )? ( 'publicKey' publickey_2= STRING )? ( 'fingerprint' fingerprint_3= STRING )? '}' )? )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:83:2: name_0= STRING ( '{' ( 'privateKey' privatekey_1= STRING )? ( 'publicKey' publickey_2= STRING )? ( 'fingerprint' fingerprint_3= STRING )? '}' )?
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_UserKey484); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:84:2: ( '{' ( 'privateKey' privatekey_1= STRING )? ( 'publicKey' publickey_2= STRING )? ( 'fingerprint' fingerprint_3= STRING )? '}' )?
            var alt33=2;
            var LA33_0 = this.input.LA(1);

            if ( (LA33_0==10) ) {
                alt33=1;
            }
            switch (alt33) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:84:3: '{' ( 'privateKey' privatekey_1= STRING )? ( 'publicKey' publickey_2= STRING )? ( 'fingerprint' fingerprint_3= STRING )? '}'
                    char_literal58=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_UserKey488); 
                    char_literal58_tree = this.adaptor.create(char_literal58);
                    this.adaptor.addChild(root_0, char_literal58_tree);

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:85:3: ( 'privateKey' privatekey_1= STRING )?
                    var alt30=2;
                    var LA30_0 = this.input.LA(1);

                    if ( (LA30_0==32) ) {
                        alt30=1;
                    }
                    switch (alt30) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:85:4: 'privateKey' privatekey_1= STRING
                            string_literal59=this.match(this.input,32,AutoExpParser.FOLLOW_32_in_rule_UserKey493); 
                            string_literal59_tree = this.adaptor.create(string_literal59);
                            this.adaptor.addChild(root_0, string_literal59_tree);

                            privatekey_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_UserKey497); 
                            privatekey_1_tree = this.adaptor.create(privatekey_1);
                            this.adaptor.addChild(root_0, privatekey_1_tree);



                            break;

                    }

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:86:3: ( 'publicKey' publickey_2= STRING )?
                    var alt31=2;
                    var LA31_0 = this.input.LA(1);

                    if ( (LA31_0==33) ) {
                        alt31=1;
                    }
                    switch (alt31) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:86:4: 'publicKey' publickey_2= STRING
                            string_literal60=this.match(this.input,33,AutoExpParser.FOLLOW_33_in_rule_UserKey504); 
                            string_literal60_tree = this.adaptor.create(string_literal60);
                            this.adaptor.addChild(root_0, string_literal60_tree);

                            publickey_2=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_UserKey508); 
                            publickey_2_tree = this.adaptor.create(publickey_2);
                            this.adaptor.addChild(root_0, publickey_2_tree);



                            break;

                    }

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:87:3: ( 'fingerprint' fingerprint_3= STRING )?
                    var alt32=2;
                    var LA32_0 = this.input.LA(1);

                    if ( (LA32_0==34) ) {
                        alt32=1;
                    }
                    switch (alt32) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:87:4: 'fingerprint' fingerprint_3= STRING
                            string_literal61=this.match(this.input,34,AutoExpParser.FOLLOW_34_in_rule_UserKey515); 
                            string_literal61_tree = this.adaptor.create(string_literal61);
                            this.adaptor.addChild(root_0, string_literal61_tree);

                            fingerprint_3=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_UserKey519); 
                            fingerprint_3_tree = this.adaptor.create(fingerprint_3);
                            this.adaptor.addChild(root_0, fingerprint_3_tree);



                            break;

                    }

                    char_literal62=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_UserKey524); 
                    char_literal62_tree = this.adaptor.create(char_literal62);
                    this.adaptor.addChild(root_0, char_literal62_tree);



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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:92:1: rule_Requirements : '{' 'cpu' cpu_0= INT 'memory' memory_1= INT 'platform' platform_2= rule_PlatformType 'cost' cost_3= rule_BigDecimalType 'number-of-instances-per-cloud' instancespercloud_4= INT '}' ;
    // $ANTLR start "rule_Requirements"
    rule_Requirements: function() {
        var retval = new AutoExpParser.rule_Requirements_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var cpu_0 = null;
        var memory_1 = null;
        var instancespercloud_4 = null;
        var char_literal63 = null;
        var string_literal64 = null;
        var string_literal65 = null;
        var string_literal66 = null;
        var string_literal67 = null;
        var string_literal68 = null;
        var char_literal69 = null;
         var platform_2 = null;
         var cost_3 = null;

        var cpu_0_tree=null;
        var memory_1_tree=null;
        var instancespercloud_4_tree=null;
        var char_literal63_tree=null;
        var string_literal64_tree=null;
        var string_literal65_tree=null;
        var string_literal66_tree=null;
        var string_literal67_tree=null;
        var string_literal68_tree=null;
        var char_literal69_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:92:18: ( '{' 'cpu' cpu_0= INT 'memory' memory_1= INT 'platform' platform_2= rule_PlatformType 'cost' cost_3= rule_BigDecimalType 'number-of-instances-per-cloud' instancespercloud_4= INT '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:93:2: '{' 'cpu' cpu_0= INT 'memory' memory_1= INT 'platform' platform_2= rule_PlatformType 'cost' cost_3= rule_BigDecimalType 'number-of-instances-per-cloud' instancespercloud_4= INT '}'
            root_0 = this.adaptor.nil();

            char_literal63=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Requirements537); 
            char_literal63_tree = this.adaptor.create(char_literal63);
            this.adaptor.addChild(root_0, char_literal63_tree);

            string_literal64=this.match(this.input,35,AutoExpParser.FOLLOW_35_in_rule_Requirements540); 
            string_literal64_tree = this.adaptor.create(string_literal64);
            this.adaptor.addChild(root_0, string_literal64_tree);

            cpu_0=this.match(this.input,INT,AutoExpParser.FOLLOW_INT_in_rule_Requirements544); 
            cpu_0_tree = this.adaptor.create(cpu_0);
            this.adaptor.addChild(root_0, cpu_0_tree);

            string_literal65=this.match(this.input,36,AutoExpParser.FOLLOW_36_in_rule_Requirements547); 
            string_literal65_tree = this.adaptor.create(string_literal65);
            this.adaptor.addChild(root_0, string_literal65_tree);

            memory_1=this.match(this.input,INT,AutoExpParser.FOLLOW_INT_in_rule_Requirements551); 
            memory_1_tree = this.adaptor.create(memory_1);
            this.adaptor.addChild(root_0, memory_1_tree);

            string_literal66=this.match(this.input,37,AutoExpParser.FOLLOW_37_in_rule_Requirements554); 
            string_literal66_tree = this.adaptor.create(string_literal66);
            this.adaptor.addChild(root_0, string_literal66_tree);

            this.pushFollow(AutoExpParser.FOLLOW_rule_PlatformType_in_rule_Requirements558);
            platform_2=this.rule_PlatformType();

            this.state._fsp--;

            this.adaptor.addChild(root_0, platform_2.getTree());
            string_literal67=this.match(this.input,38,AutoExpParser.FOLLOW_38_in_rule_Requirements561); 
            string_literal67_tree = this.adaptor.create(string_literal67);
            this.adaptor.addChild(root_0, string_literal67_tree);

            this.pushFollow(AutoExpParser.FOLLOW_rule_BigDecimalType_in_rule_Requirements565);
            cost_3=this.rule_BigDecimalType();

            this.state._fsp--;

            this.adaptor.addChild(root_0, cost_3.getTree());
            string_literal68=this.match(this.input,39,AutoExpParser.FOLLOW_39_in_rule_Requirements568); 
            string_literal68_tree = this.adaptor.create(string_literal68);
            this.adaptor.addChild(root_0, string_literal68_tree);

            instancespercloud_4=this.match(this.input,INT,AutoExpParser.FOLLOW_INT_in_rule_Requirements572); 
            instancespercloud_4_tree = this.adaptor.create(instancespercloud_4);
            this.adaptor.addChild(root_0, instancespercloud_4_tree);

            char_literal69=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Requirements575); 
            char_literal69_tree = this.adaptor.create(char_literal69);
            this.adaptor.addChild(root_0, char_literal69_tree);




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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:103:1: rule_PlatformType : typename_0= ( 'LINUX' | 'WINDOWS' ) ;
    // $ANTLR start "rule_PlatformType"
    rule_PlatformType: function() {
        var retval = new AutoExpParser.rule_PlatformType_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var typename_0 = null;

        var typename_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:103:18: (typename_0= ( 'LINUX' | 'WINDOWS' ) )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:104:2: typename_0= ( 'LINUX' | 'WINDOWS' )
            root_0 = this.adaptor.nil();

            typename_0=this.input.LT(1);
            if ( (this.input.LA(1)>=40 && this.input.LA(1)<=41) ) {
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:107:1: rule_BigDecimalType : INT ( '.' INT )? ;
    // $ANTLR start "rule_BigDecimalType"
    rule_BigDecimalType: function() {
        var retval = new AutoExpParser.rule_BigDecimalType_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var INT70 = null;
        var char_literal71 = null;
        var INT72 = null;

        var INT70_tree=null;
        var char_literal71_tree=null;
        var INT72_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:107:21: ( INT ( '.' INT )? )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:108:2: INT ( '.' INT )?
            root_0 = this.adaptor.nil();

            INT70=this.match(this.input,INT,AutoExpParser.FOLLOW_INT_in_rule_BigDecimalType605); 
            INT70_tree = this.adaptor.create(INT70);
            this.adaptor.addChild(root_0, INT70_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:108:6: ( '.' INT )?
            var alt34=2;
            var LA34_0 = this.input.LA(1);

            if ( (LA34_0==42) ) {
                alt34=1;
            }
            switch (alt34) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:108:7: '.' INT
                    char_literal71=this.match(this.input,42,AutoExpParser.FOLLOW_42_in_rule_BigDecimalType608); 
                    char_literal71_tree = this.adaptor.create(char_literal71);
                    this.adaptor.addChild(root_0, char_literal71_tree);

                    INT72=this.match(this.input,INT,AutoExpParser.FOLLOW_INT_in_rule_BigDecimalType610); 
                    INT72_tree = this.adaptor.create(INT72);
                    this.adaptor.addChild(root_0, INT72_tree);



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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:112:1: rule_Cloud : name_0= STRING '{' provider_1= rule_CloudProvider accesskey_2= rule_AccessKey ( 'regions' '{' regions_3+= rule_Region ( ',' regions_4+= rule_Region )* '}' )? ( 'instanceTypes' '{' instancetypes_5+= rule_InstanceType ( ',' instancetypes_6+= rule_InstanceType )* '}' )? '}' ;
    // $ANTLR start "rule_Cloud"
    rule_Cloud: function() {
        var retval = new AutoExpParser.rule_Cloud_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var char_literal73 = null;
        var string_literal74 = null;
        var char_literal75 = null;
        var char_literal76 = null;
        var char_literal77 = null;
        var string_literal78 = null;
        var char_literal79 = null;
        var char_literal80 = null;
        var char_literal81 = null;
        var char_literal82 = null;
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
        var char_literal73_tree=null;
        var string_literal74_tree=null;
        var char_literal75_tree=null;
        var char_literal76_tree=null;
        var char_literal77_tree=null;
        var string_literal78_tree=null;
        var char_literal79_tree=null;
        var char_literal80_tree=null;
        var char_literal81_tree=null;
        var char_literal82_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:112:11: (name_0= STRING '{' provider_1= rule_CloudProvider accesskey_2= rule_AccessKey ( 'regions' '{' regions_3+= rule_Region ( ',' regions_4+= rule_Region )* '}' )? ( 'instanceTypes' '{' instancetypes_5+= rule_InstanceType ( ',' instancetypes_6+= rule_InstanceType )* '}' )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:113:2: name_0= STRING '{' provider_1= rule_CloudProvider accesskey_2= rule_AccessKey ( 'regions' '{' regions_3+= rule_Region ( ',' regions_4+= rule_Region )* '}' )? ( 'instanceTypes' '{' instancetypes_5+= rule_InstanceType ( ',' instancetypes_6+= rule_InstanceType )* '}' )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Cloud624); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal73=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Cloud627); 
            char_literal73_tree = this.adaptor.create(char_literal73);
            this.adaptor.addChild(root_0, char_literal73_tree);

            this.pushFollow(AutoExpParser.FOLLOW_rule_CloudProvider_in_rule_Cloud633);
            provider_1=this.rule_CloudProvider();

            this.state._fsp--;

            this.adaptor.addChild(root_0, provider_1.getTree());
            this.pushFollow(AutoExpParser.FOLLOW_rule_AccessKey_in_rule_Cloud639);
            accesskey_2=this.rule_AccessKey();

            this.state._fsp--;

            this.adaptor.addChild(root_0, accesskey_2.getTree());
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:117:2: ( 'regions' '{' regions_3+= rule_Region ( ',' regions_4+= rule_Region )* '}' )?
            var alt36=2;
            var LA36_0 = this.input.LA(1);

            if ( (LA36_0==43) ) {
                alt36=1;
            }
            switch (alt36) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:117:3: 'regions' '{' regions_3+= rule_Region ( ',' regions_4+= rule_Region )* '}'
                    string_literal74=this.match(this.input,43,AutoExpParser.FOLLOW_43_in_rule_Cloud643); 
                    string_literal74_tree = this.adaptor.create(string_literal74);
                    this.adaptor.addChild(root_0, string_literal74_tree);

                    char_literal75=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Cloud645); 
                    char_literal75_tree = this.adaptor.create(char_literal75);
                    this.adaptor.addChild(root_0, char_literal75_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Region_in_rule_Cloud649);
                    regions_3=this.rule_Region();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, regions_3.getTree());
                    if (org.antlr.lang.isNull(list_regions_3)) list_regions_3 = [];
                    list_regions_3.push(regions_3.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:117:41: ( ',' regions_4+= rule_Region )*
                    loop35:
                    do {
                        var alt35=2;
                        var LA35_0 = this.input.LA(1);

                        if ( (LA35_0==12) ) {
                            alt35=1;
                        }


                        switch (alt35) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:117:42: ',' regions_4+= rule_Region
                            char_literal76=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Cloud653); 
                            char_literal76_tree = this.adaptor.create(char_literal76);
                            this.adaptor.addChild(root_0, char_literal76_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Region_in_rule_Cloud657);
                            regions_4=this.rule_Region();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, regions_4.getTree());
                            if (org.antlr.lang.isNull(list_regions_4)) list_regions_4 = [];
                            list_regions_4.push(regions_4.getTree());



                            break;

                        default :
                            break loop35;
                        }
                    } while (true);

                    char_literal77=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Cloud660); 
                    char_literal77_tree = this.adaptor.create(char_literal77);
                    this.adaptor.addChild(root_0, char_literal77_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:118:2: ( 'instanceTypes' '{' instancetypes_5+= rule_InstanceType ( ',' instancetypes_6+= rule_InstanceType )* '}' )?
            var alt38=2;
            var LA38_0 = this.input.LA(1);

            if ( (LA38_0==44) ) {
                alt38=1;
            }
            switch (alt38) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:118:3: 'instanceTypes' '{' instancetypes_5+= rule_InstanceType ( ',' instancetypes_6+= rule_InstanceType )* '}'
                    string_literal78=this.match(this.input,44,AutoExpParser.FOLLOW_44_in_rule_Cloud666); 
                    string_literal78_tree = this.adaptor.create(string_literal78);
                    this.adaptor.addChild(root_0, string_literal78_tree);

                    char_literal79=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Cloud668); 
                    char_literal79_tree = this.adaptor.create(char_literal79);
                    this.adaptor.addChild(root_0, char_literal79_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_InstanceType_in_rule_Cloud672);
                    instancetypes_5=this.rule_InstanceType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, instancetypes_5.getTree());
                    if (org.antlr.lang.isNull(list_instancetypes_5)) list_instancetypes_5 = [];
                    list_instancetypes_5.push(instancetypes_5.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:118:59: ( ',' instancetypes_6+= rule_InstanceType )*
                    loop37:
                    do {
                        var alt37=2;
                        var LA37_0 = this.input.LA(1);

                        if ( (LA37_0==12) ) {
                            alt37=1;
                        }


                        switch (alt37) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:118:60: ',' instancetypes_6+= rule_InstanceType
                            char_literal80=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Cloud676); 
                            char_literal80_tree = this.adaptor.create(char_literal80);
                            this.adaptor.addChild(root_0, char_literal80_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_InstanceType_in_rule_Cloud680);
                            instancetypes_6=this.rule_InstanceType();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, instancetypes_6.getTree());
                            if (org.antlr.lang.isNull(list_instancetypes_6)) list_instancetypes_6 = [];
                            list_instancetypes_6.push(instancetypes_6.getTree());



                            break;

                        default :
                            break loop37;
                        }
                    } while (true);

                    char_literal81=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Cloud683); 
                    char_literal81_tree = this.adaptor.create(char_literal81);
                    this.adaptor.addChild(root_0, char_literal81_tree);



                    break;

            }

            char_literal82=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Cloud688); 
            char_literal82_tree = this.adaptor.create(char_literal82);
            this.adaptor.addChild(root_0, char_literal82_tree);




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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:124:1: rule_CloudProvider : 'provider' name_0= STRING ( '{' ( 'maxResourcePerType' maxresourcepertype_1= INT )? ( 'description' description_2= STRING )? ( 'serviceClass' serviceclass_3= STRING )? '}' )? ;
    // $ANTLR start "rule_CloudProvider"
    rule_CloudProvider: function() {
        var retval = new AutoExpParser.rule_CloudProvider_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var maxresourcepertype_1 = null;
        var description_2 = null;
        var serviceclass_3 = null;
        var string_literal83 = null;
        var char_literal84 = null;
        var string_literal85 = null;
        var string_literal86 = null;
        var string_literal87 = null;
        var char_literal88 = null;

        var name_0_tree=null;
        var maxresourcepertype_1_tree=null;
        var description_2_tree=null;
        var serviceclass_3_tree=null;
        var string_literal83_tree=null;
        var char_literal84_tree=null;
        var string_literal85_tree=null;
        var string_literal86_tree=null;
        var string_literal87_tree=null;
        var char_literal88_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:124:19: ( 'provider' name_0= STRING ( '{' ( 'maxResourcePerType' maxresourcepertype_1= INT )? ( 'description' description_2= STRING )? ( 'serviceClass' serviceclass_3= STRING )? '}' )? )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:125:2: 'provider' name_0= STRING ( '{' ( 'maxResourcePerType' maxresourcepertype_1= INT )? ( 'description' description_2= STRING )? ( 'serviceClass' serviceclass_3= STRING )? '}' )?
            root_0 = this.adaptor.nil();

            string_literal83=this.match(this.input,45,AutoExpParser.FOLLOW_45_in_rule_CloudProvider700); 
            string_literal83_tree = this.adaptor.create(string_literal83);
            this.adaptor.addChild(root_0, string_literal83_tree);

            name_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_CloudProvider704); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:126:2: ( '{' ( 'maxResourcePerType' maxresourcepertype_1= INT )? ( 'description' description_2= STRING )? ( 'serviceClass' serviceclass_3= STRING )? '}' )?
            var alt42=2;
            var LA42_0 = this.input.LA(1);

            if ( (LA42_0==10) ) {
                alt42=1;
            }
            switch (alt42) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:126:3: '{' ( 'maxResourcePerType' maxresourcepertype_1= INT )? ( 'description' description_2= STRING )? ( 'serviceClass' serviceclass_3= STRING )? '}'
                    char_literal84=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_CloudProvider708); 
                    char_literal84_tree = this.adaptor.create(char_literal84);
                    this.adaptor.addChild(root_0, char_literal84_tree);

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:127:2: ( 'maxResourcePerType' maxresourcepertype_1= INT )?
                    var alt39=2;
                    var LA39_0 = this.input.LA(1);

                    if ( (LA39_0==46) ) {
                        alt39=1;
                    }
                    switch (alt39) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:127:3: 'maxResourcePerType' maxresourcepertype_1= INT
                            string_literal85=this.match(this.input,46,AutoExpParser.FOLLOW_46_in_rule_CloudProvider712); 
                            string_literal85_tree = this.adaptor.create(string_literal85);
                            this.adaptor.addChild(root_0, string_literal85_tree);

                            maxresourcepertype_1=this.match(this.input,INT,AutoExpParser.FOLLOW_INT_in_rule_CloudProvider716); 
                            maxresourcepertype_1_tree = this.adaptor.create(maxresourcepertype_1);
                            this.adaptor.addChild(root_0, maxresourcepertype_1_tree);



                            break;

                    }

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:128:2: ( 'description' description_2= STRING )?
                    var alt40=2;
                    var LA40_0 = this.input.LA(1);

                    if ( (LA40_0==14) ) {
                        alt40=1;
                    }
                    switch (alt40) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:128:3: 'description' description_2= STRING
                            string_literal86=this.match(this.input,14,AutoExpParser.FOLLOW_14_in_rule_CloudProvider724); 
                            string_literal86_tree = this.adaptor.create(string_literal86);
                            this.adaptor.addChild(root_0, string_literal86_tree);

                            description_2=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_CloudProvider728); 
                            description_2_tree = this.adaptor.create(description_2);
                            this.adaptor.addChild(root_0, description_2_tree);



                            break;

                    }

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:129:3: ( 'serviceClass' serviceclass_3= STRING )?
                    var alt41=2;
                    var LA41_0 = this.input.LA(1);

                    if ( (LA41_0==47) ) {
                        alt41=1;
                    }
                    switch (alt41) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:129:4: 'serviceClass' serviceclass_3= STRING
                            string_literal87=this.match(this.input,47,AutoExpParser.FOLLOW_47_in_rule_CloudProvider736); 
                            string_literal87_tree = this.adaptor.create(string_literal87);
                            this.adaptor.addChild(root_0, string_literal87_tree);

                            serviceclass_3=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_CloudProvider740); 
                            serviceclass_3_tree = this.adaptor.create(serviceclass_3);
                            this.adaptor.addChild(root_0, serviceclass_3_tree);



                            break;

                    }

                    char_literal88=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_CloudProvider747); 
                    char_literal88_tree = this.adaptor.create(char_literal88);
                    this.adaptor.addChild(root_0, char_literal88_tree);



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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:136:1: rule_InstanceType : name_0= STRING ( 'instances' numberofinstances_1= INT )? ;
    // $ANTLR start "rule_InstanceType"
    rule_InstanceType: function() {
        var retval = new AutoExpParser.rule_InstanceType_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var numberofinstances_1 = null;
        var string_literal89 = null;

        var name_0_tree=null;
        var numberofinstances_1_tree=null;
        var string_literal89_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:136:18: (name_0= STRING ( 'instances' numberofinstances_1= INT )? )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:138:2: name_0= STRING ( 'instances' numberofinstances_1= INT )?
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_InstanceType766); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:139:2: ( 'instances' numberofinstances_1= INT )?
            var alt43=2;
            var LA43_0 = this.input.LA(1);

            if ( (LA43_0==48) ) {
                alt43=1;
            }
            switch (alt43) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:139:3: 'instances' numberofinstances_1= INT
                    string_literal89=this.match(this.input,48,AutoExpParser.FOLLOW_48_in_rule_InstanceType770); 
                    string_literal89_tree = this.adaptor.create(string_literal89);
                    this.adaptor.addChild(root_0, string_literal89_tree);

                    numberofinstances_1=this.match(this.input,INT,AutoExpParser.FOLLOW_INT_in_rule_InstanceType774); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:144:1: rule_Region : name_0= STRING ( '{' ( 'endpoint' endpoint_1= STRING )? ( 'status' status_2= rule_StatusType )? ( 'city' city_3= STRING )? ( 'geographicRegion' geographicregion_4= INT )? ( 'zones' '{' zones_5+= rule_Zone ( ',' zones_6+= rule_Zone )* '}' )? '}' )? ;
    // $ANTLR start "rule_Region"
    rule_Region: function() {
        var retval = new AutoExpParser.rule_Region_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var endpoint_1 = null;
        var city_3 = null;
        var geographicregion_4 = null;
        var char_literal90 = null;
        var string_literal91 = null;
        var string_literal92 = null;
        var string_literal93 = null;
        var string_literal94 = null;
        var string_literal95 = null;
        var char_literal96 = null;
        var char_literal97 = null;
        var char_literal98 = null;
        var char_literal99 = null;
        var list_zones_5=null;
        var list_zones_6=null;
         var status_2 = null;
        var zones_5 = null;
        var zones_6 = null;
        var name_0_tree=null;
        var endpoint_1_tree=null;
        var city_3_tree=null;
        var geographicregion_4_tree=null;
        var char_literal90_tree=null;
        var string_literal91_tree=null;
        var string_literal92_tree=null;
        var string_literal93_tree=null;
        var string_literal94_tree=null;
        var string_literal95_tree=null;
        var char_literal96_tree=null;
        var char_literal97_tree=null;
        var char_literal98_tree=null;
        var char_literal99_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:144:12: (name_0= STRING ( '{' ( 'endpoint' endpoint_1= STRING )? ( 'status' status_2= rule_StatusType )? ( 'city' city_3= STRING )? ( 'geographicRegion' geographicregion_4= INT )? ( 'zones' '{' zones_5+= rule_Zone ( ',' zones_6+= rule_Zone )* '}' )? '}' )? )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:145:2: name_0= STRING ( '{' ( 'endpoint' endpoint_1= STRING )? ( 'status' status_2= rule_StatusType )? ( 'city' city_3= STRING )? ( 'geographicRegion' geographicregion_4= INT )? ( 'zones' '{' zones_5+= rule_Zone ( ',' zones_6+= rule_Zone )* '}' )? '}' )?
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Region789); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:146:2: ( '{' ( 'endpoint' endpoint_1= STRING )? ( 'status' status_2= rule_StatusType )? ( 'city' city_3= STRING )? ( 'geographicRegion' geographicregion_4= INT )? ( 'zones' '{' zones_5+= rule_Zone ( ',' zones_6+= rule_Zone )* '}' )? '}' )?
            var alt50=2;
            var LA50_0 = this.input.LA(1);

            if ( (LA50_0==10) ) {
                alt50=1;
            }
            switch (alt50) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:146:3: '{' ( 'endpoint' endpoint_1= STRING )? ( 'status' status_2= rule_StatusType )? ( 'city' city_3= STRING )? ( 'geographicRegion' geographicregion_4= INT )? ( 'zones' '{' zones_5+= rule_Zone ( ',' zones_6+= rule_Zone )* '}' )? '}'
                    char_literal90=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Region793); 
                    char_literal90_tree = this.adaptor.create(char_literal90);
                    this.adaptor.addChild(root_0, char_literal90_tree);

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:147:2: ( 'endpoint' endpoint_1= STRING )?
                    var alt44=2;
                    var LA44_0 = this.input.LA(1);

                    if ( (LA44_0==49) ) {
                        alt44=1;
                    }
                    switch (alt44) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:147:3: 'endpoint' endpoint_1= STRING
                            string_literal91=this.match(this.input,49,AutoExpParser.FOLLOW_49_in_rule_Region797); 
                            string_literal91_tree = this.adaptor.create(string_literal91);
                            this.adaptor.addChild(root_0, string_literal91_tree);

                            endpoint_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Region801); 
                            endpoint_1_tree = this.adaptor.create(endpoint_1);
                            this.adaptor.addChild(root_0, endpoint_1_tree);



                            break;

                    }

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:148:2: ( 'status' status_2= rule_StatusType )?
                    var alt45=2;
                    var LA45_0 = this.input.LA(1);

                    if ( (LA45_0==50) ) {
                        alt45=1;
                    }
                    switch (alt45) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:148:3: 'status' status_2= rule_StatusType
                            string_literal92=this.match(this.input,50,AutoExpParser.FOLLOW_50_in_rule_Region807); 
                            string_literal92_tree = this.adaptor.create(string_literal92);
                            this.adaptor.addChild(root_0, string_literal92_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_StatusType_in_rule_Region811);
                            status_2=this.rule_StatusType();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, status_2.getTree());


                            break;

                    }

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:149:2: ( 'city' city_3= STRING )?
                    var alt46=2;
                    var LA46_0 = this.input.LA(1);

                    if ( (LA46_0==51) ) {
                        alt46=1;
                    }
                    switch (alt46) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:149:3: 'city' city_3= STRING
                            string_literal93=this.match(this.input,51,AutoExpParser.FOLLOW_51_in_rule_Region817); 
                            string_literal93_tree = this.adaptor.create(string_literal93);
                            this.adaptor.addChild(root_0, string_literal93_tree);

                            city_3=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Region821); 
                            city_3_tree = this.adaptor.create(city_3);
                            this.adaptor.addChild(root_0, city_3_tree);



                            break;

                    }

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:150:2: ( 'geographicRegion' geographicregion_4= INT )?
                    var alt47=2;
                    var LA47_0 = this.input.LA(1);

                    if ( (LA47_0==52) ) {
                        alt47=1;
                    }
                    switch (alt47) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:150:3: 'geographicRegion' geographicregion_4= INT
                            string_literal94=this.match(this.input,52,AutoExpParser.FOLLOW_52_in_rule_Region827); 
                            string_literal94_tree = this.adaptor.create(string_literal94);
                            this.adaptor.addChild(root_0, string_literal94_tree);

                            geographicregion_4=this.match(this.input,INT,AutoExpParser.FOLLOW_INT_in_rule_Region831); 
                            geographicregion_4_tree = this.adaptor.create(geographicregion_4);
                            this.adaptor.addChild(root_0, geographicregion_4_tree);



                            break;

                    }

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:151:2: ( 'zones' '{' zones_5+= rule_Zone ( ',' zones_6+= rule_Zone )* '}' )?
                    var alt49=2;
                    var LA49_0 = this.input.LA(1);

                    if ( (LA49_0==53) ) {
                        alt49=1;
                    }
                    switch (alt49) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:151:3: 'zones' '{' zones_5+= rule_Zone ( ',' zones_6+= rule_Zone )* '}'
                            string_literal95=this.match(this.input,53,AutoExpParser.FOLLOW_53_in_rule_Region837); 
                            string_literal95_tree = this.adaptor.create(string_literal95);
                            this.adaptor.addChild(root_0, string_literal95_tree);

                            char_literal96=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Region839); 
                            char_literal96_tree = this.adaptor.create(char_literal96);
                            this.adaptor.addChild(root_0, char_literal96_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Zone_in_rule_Region843);
                            zones_5=this.rule_Zone();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, zones_5.getTree());
                            if (org.antlr.lang.isNull(list_zones_5)) list_zones_5 = [];
                            list_zones_5.push(zones_5.getTree());

                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:151:35: ( ',' zones_6+= rule_Zone )*
                            loop48:
                            do {
                                var alt48=2;
                                var LA48_0 = this.input.LA(1);

                                if ( (LA48_0==12) ) {
                                    alt48=1;
                                }


                                switch (alt48) {
                                case 1 :
                                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:151:36: ',' zones_6+= rule_Zone
                                    char_literal97=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Region847); 
                                    char_literal97_tree = this.adaptor.create(char_literal97);
                                    this.adaptor.addChild(root_0, char_literal97_tree);

                                    this.pushFollow(AutoExpParser.FOLLOW_rule_Zone_in_rule_Region851);
                                    zones_6=this.rule_Zone();

                                    this.state._fsp--;

                                    this.adaptor.addChild(root_0, zones_6.getTree());
                                    if (org.antlr.lang.isNull(list_zones_6)) list_zones_6 = [];
                                    list_zones_6.push(zones_6.getTree());



                                    break;

                                default :
                                    break loop48;
                                }
                            } while (true);

                            char_literal98=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Region854); 
                            char_literal98_tree = this.adaptor.create(char_literal98);
                            this.adaptor.addChild(root_0, char_literal98_tree);



                            break;

                    }

                    char_literal99=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Region859); 
                    char_literal99_tree = this.adaptor.create(char_literal99);
                    this.adaptor.addChild(root_0, char_literal99_tree);



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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:162:1: rule_StatusType : typename_0= ( 'UP' | 'DOWN' ) ;
    // $ANTLR start "rule_StatusType"
    rule_StatusType: function() {
        var retval = new AutoExpParser.rule_StatusType_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var typename_0 = null;

        var typename_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:162:16: (typename_0= ( 'UP' | 'DOWN' ) )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:163:2: typename_0= ( 'UP' | 'DOWN' )
            root_0 = this.adaptor.nil();

            typename_0=this.input.LT(1);
            if ( (this.input.LA(1)>=54 && this.input.LA(1)<=55) ) {
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:167:1: rule_Zone : name_0= STRING (status_1= STRING )? ;
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
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:167:10: (name_0= STRING (status_1= STRING )? )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:168:2: name_0= STRING (status_1= STRING )?
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Zone900); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:169:2: (status_1= STRING )?
            var alt51=2;
            var LA51_0 = this.input.LA(1);

            if ( (LA51_0==STRING) ) {
                alt51=1;
            }
            switch (alt51) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:169:3: status_1= STRING
                    status_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Zone906); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:174:1: rule_AccessKey : 'access-key' accesskey_0= STRING 'secret-key' secretkey_1= STRING ;
    // $ANTLR start "rule_AccessKey"
    rule_AccessKey: function() {
        var retval = new AutoExpParser.rule_AccessKey_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var accesskey_0 = null;
        var secretkey_1 = null;
        var string_literal100 = null;
        var string_literal101 = null;

        var accesskey_0_tree=null;
        var secretkey_1_tree=null;
        var string_literal100_tree=null;
        var string_literal101_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:174:15: ( 'access-key' accesskey_0= STRING 'secret-key' secretkey_1= STRING )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:175:2: 'access-key' accesskey_0= STRING 'secret-key' secretkey_1= STRING
            root_0 = this.adaptor.nil();

            string_literal100=this.match(this.input,56,AutoExpParser.FOLLOW_56_in_rule_AccessKey920); 
            string_literal100_tree = this.adaptor.create(string_literal100);
            this.adaptor.addChild(root_0, string_literal100_tree);

            accesskey_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_AccessKey924); 
            accesskey_0_tree = this.adaptor.create(accesskey_0);
            this.adaptor.addChild(root_0, accesskey_0_tree);

            string_literal101=this.match(this.input,57,AutoExpParser.FOLLOW_57_in_rule_AccessKey927); 
            string_literal101_tree = this.adaptor.create(string_literal101);
            this.adaptor.addChild(root_0, string_literal101_tree);

            secretkey_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_AccessKey930); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:187:1: rule_OnFinishType : typename_0= ( 'NONE' | 'TERMINATE' ) ;
    // $ANTLR start "rule_OnFinishType"
    rule_OnFinishType: function() {
        var retval = new AutoExpParser.rule_OnFinishType_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var typename_0 = null;

        var typename_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:187:18: (typename_0= ( 'NONE' | 'TERMINATE' ) )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:188:2: typename_0= ( 'NONE' | 'TERMINATE' )
            root_0 = this.adaptor.nil();

            typename_0=this.input.LT(1);
            if ( (this.input.LA(1)>=58 && this.input.LA(1)<=59) ) {
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:191:1: rule_Abstract : ( rule_Abstract_Impl | rule_SimpleAbstract | rule_StructuredAbstract );
    // $ANTLR start "rule_Abstract"
    rule_Abstract: function() {
        var retval = new AutoExpParser.rule_Abstract_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var rule_Abstract_Impl102 = null;
         var rule_SimpleAbstract103 = null;
         var rule_StructuredAbstract104 = null;


        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:191:15: ( rule_Abstract_Impl | rule_SimpleAbstract | rule_StructuredAbstract )
            var alt52=3;
            switch ( this.input.LA(1) ) {
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
                alt52=1;
                break;
            case STRING:
                alt52=2;
                break;
            case 10:
                alt52=3;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 52, 0, this.input);

                throw nvae;
            }

            switch (alt52) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:192:2: rule_Abstract_Impl
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Abstract_Impl_in_rule_Abstract974);
                    rule_Abstract_Impl102=this.rule_Abstract_Impl();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, rule_Abstract_Impl102.getTree());


                    break;
                case 2 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:192:23: rule_SimpleAbstract
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AutoExpParser.FOLLOW_rule_SimpleAbstract_in_rule_Abstract978);
                    rule_SimpleAbstract103=this.rule_SimpleAbstract();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, rule_SimpleAbstract103.getTree());


                    break;
                case 3 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:192:45: rule_StructuredAbstract
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AutoExpParser.FOLLOW_rule_StructuredAbstract_in_rule_Abstract982);
                    rule_StructuredAbstract104=this.rule_StructuredAbstract();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, rule_StructuredAbstract104.getTree());


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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:196:1: rule_Goal : ( rule_Goal_Impl | rule_SimpleGoal | rule_StructuredGoal );
    // $ANTLR start "rule_Goal"
    rule_Goal: function() {
        var retval = new AutoExpParser.rule_Goal_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var rule_Goal_Impl105 = null;
         var rule_SimpleGoal106 = null;
         var rule_StructuredGoal107 = null;


        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:196:11: ( rule_Goal_Impl | rule_SimpleGoal | rule_StructuredGoal )
            var alt53=3;
            var LA53_0 = this.input.LA(1);

            if ( (LA53_0==ID) ) {
                switch ( this.input.LA(2) ) {
                case STRING:
                    alt53=2;
                    break;
                case 10:
                    alt53=3;
                    break;
                case 12:
                case 13:
                    alt53=1;
                    break;
                default:
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 53, 1, this.input);

                    throw nvae;
                }

            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 53, 0, this.input);

                throw nvae;
            }
            switch (alt53) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:197:2: rule_Goal_Impl
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Goal_Impl_in_rule_Goal993);
                    rule_Goal_Impl105=this.rule_Goal_Impl();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, rule_Goal_Impl105.getTree());


                    break;
                case 2 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:197:19: rule_SimpleGoal
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AutoExpParser.FOLLOW_rule_SimpleGoal_in_rule_Goal997);
                    rule_SimpleGoal106=this.rule_SimpleGoal();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, rule_SimpleGoal106.getTree());


                    break;
                case 3 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:197:37: rule_StructuredGoal
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AutoExpParser.FOLLOW_rule_StructuredGoal_in_rule_Goal1001);
                    rule_StructuredGoal107=this.rule_StructuredGoal();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, rule_StructuredGoal107.getTree());


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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:201:1: rule_ExperimentalDesign : '{' ( 'type' type_0= rule_DesignType )? ( 'runs' runs_1= INT )? 'Dependent Variables' '{' dependentvariables_2+= rule_CustomDependentVariable ( ',' dependentvariables_3+= rule_CustomDependentVariable )* '}' 'Factors' '{' factors_4+= rule_Factor ( ',' factors_5+= rule_Factor )* '}' 'Treatments' '{' treatments_6+= rule_Treatment ( ',' treatments_7+= rule_Treatment )* '}' ( 'Groups' '{' groups_8+= rule_ObjectGroup ( ',' groups_9+= rule_ObjectGroup )* '}' )? 'Objects' '{' experimentalobjects_10+= rule_ExperimentalObject ( ',' experimentalobjects_11+= rule_ExperimentalObject )* '}' ( 'Restrictions' '{' restrictions_12+= rule_Restriction ( ',' restrictions_13+= rule_Restriction )* '}' )? ( 'Context Variables' '{' contextvariables_14+= rule_ContextVariable ( ',' contextvariables_15+= rule_ContextVariable )* '}' )? '}' ;
    // $ANTLR start "rule_ExperimentalDesign"
    rule_ExperimentalDesign: function() {
        var retval = new AutoExpParser.rule_ExperimentalDesign_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var runs_1 = null;
        var char_literal108 = null;
        var string_literal109 = null;
        var string_literal110 = null;
        var string_literal111 = null;
        var char_literal112 = null;
        var char_literal113 = null;
        var char_literal114 = null;
        var string_literal115 = null;
        var char_literal116 = null;
        var char_literal117 = null;
        var char_literal118 = null;
        var string_literal119 = null;
        var char_literal120 = null;
        var char_literal121 = null;
        var char_literal122 = null;
        var string_literal123 = null;
        var char_literal124 = null;
        var char_literal125 = null;
        var char_literal126 = null;
        var string_literal127 = null;
        var char_literal128 = null;
        var char_literal129 = null;
        var char_literal130 = null;
        var string_literal131 = null;
        var char_literal132 = null;
        var char_literal133 = null;
        var char_literal134 = null;
        var string_literal135 = null;
        var char_literal136 = null;
        var char_literal137 = null;
        var char_literal138 = null;
        var char_literal139 = null;
        var list_dependentvariables_2=null;
        var list_dependentvariables_3=null;
        var list_factors_4=null;
        var list_factors_5=null;
        var list_treatments_6=null;
        var list_treatments_7=null;
        var list_groups_8=null;
        var list_groups_9=null;
        var list_experimentalobjects_10=null;
        var list_experimentalobjects_11=null;
        var list_restrictions_12=null;
        var list_restrictions_13=null;
        var list_contextvariables_14=null;
        var list_contextvariables_15=null;
         var type_0 = null;
        var dependentvariables_2 = null;
        var dependentvariables_3 = null;
        var factors_4 = null;
        var factors_5 = null;
        var treatments_6 = null;
        var treatments_7 = null;
        var groups_8 = null;
        var groups_9 = null;
        var experimentalobjects_10 = null;
        var experimentalobjects_11 = null;
        var restrictions_12 = null;
        var restrictions_13 = null;
        var contextvariables_14 = null;
        var contextvariables_15 = null;
        var runs_1_tree=null;
        var char_literal108_tree=null;
        var string_literal109_tree=null;
        var string_literal110_tree=null;
        var string_literal111_tree=null;
        var char_literal112_tree=null;
        var char_literal113_tree=null;
        var char_literal114_tree=null;
        var string_literal115_tree=null;
        var char_literal116_tree=null;
        var char_literal117_tree=null;
        var char_literal118_tree=null;
        var string_literal119_tree=null;
        var char_literal120_tree=null;
        var char_literal121_tree=null;
        var char_literal122_tree=null;
        var string_literal123_tree=null;
        var char_literal124_tree=null;
        var char_literal125_tree=null;
        var char_literal126_tree=null;
        var string_literal127_tree=null;
        var char_literal128_tree=null;
        var char_literal129_tree=null;
        var char_literal130_tree=null;
        var string_literal131_tree=null;
        var char_literal132_tree=null;
        var char_literal133_tree=null;
        var char_literal134_tree=null;
        var string_literal135_tree=null;
        var char_literal136_tree=null;
        var char_literal137_tree=null;
        var char_literal138_tree=null;
        var char_literal139_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:201:25: ( '{' ( 'type' type_0= rule_DesignType )? ( 'runs' runs_1= INT )? 'Dependent Variables' '{' dependentvariables_2+= rule_CustomDependentVariable ( ',' dependentvariables_3+= rule_CustomDependentVariable )* '}' 'Factors' '{' factors_4+= rule_Factor ( ',' factors_5+= rule_Factor )* '}' 'Treatments' '{' treatments_6+= rule_Treatment ( ',' treatments_7+= rule_Treatment )* '}' ( 'Groups' '{' groups_8+= rule_ObjectGroup ( ',' groups_9+= rule_ObjectGroup )* '}' )? 'Objects' '{' experimentalobjects_10+= rule_ExperimentalObject ( ',' experimentalobjects_11+= rule_ExperimentalObject )* '}' ( 'Restrictions' '{' restrictions_12+= rule_Restriction ( ',' restrictions_13+= rule_Restriction )* '}' )? ( 'Context Variables' '{' contextvariables_14+= rule_ContextVariable ( ',' contextvariables_15+= rule_ContextVariable )* '}' )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:202:2: '{' ( 'type' type_0= rule_DesignType )? ( 'runs' runs_1= INT )? 'Dependent Variables' '{' dependentvariables_2+= rule_CustomDependentVariable ( ',' dependentvariables_3+= rule_CustomDependentVariable )* '}' 'Factors' '{' factors_4+= rule_Factor ( ',' factors_5+= rule_Factor )* '}' 'Treatments' '{' treatments_6+= rule_Treatment ( ',' treatments_7+= rule_Treatment )* '}' ( 'Groups' '{' groups_8+= rule_ObjectGroup ( ',' groups_9+= rule_ObjectGroup )* '}' )? 'Objects' '{' experimentalobjects_10+= rule_ExperimentalObject ( ',' experimentalobjects_11+= rule_ExperimentalObject )* '}' ( 'Restrictions' '{' restrictions_12+= rule_Restriction ( ',' restrictions_13+= rule_Restriction )* '}' )? ( 'Context Variables' '{' contextvariables_14+= rule_ContextVariable ( ',' contextvariables_15+= rule_ContextVariable )* '}' )? '}'
            root_0 = this.adaptor.nil();

            char_literal108=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ExperimentalDesign1012); 
            char_literal108_tree = this.adaptor.create(char_literal108);
            this.adaptor.addChild(root_0, char_literal108_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:203:2: ( 'type' type_0= rule_DesignType )?
            var alt54=2;
            var LA54_0 = this.input.LA(1);

            if ( (LA54_0==60) ) {
                alt54=1;
            }
            switch (alt54) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:203:3: 'type' type_0= rule_DesignType
                    string_literal109=this.match(this.input,60,AutoExpParser.FOLLOW_60_in_rule_ExperimentalDesign1016); 
                    string_literal109_tree = this.adaptor.create(string_literal109);
                    this.adaptor.addChild(root_0, string_literal109_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_DesignType_in_rule_ExperimentalDesign1020);
                    type_0=this.rule_DesignType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, type_0.getTree());


                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:204:2: ( 'runs' runs_1= INT )?
            var alt55=2;
            var LA55_0 = this.input.LA(1);

            if ( (LA55_0==61) ) {
                alt55=1;
            }
            switch (alt55) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:204:3: 'runs' runs_1= INT
                    string_literal110=this.match(this.input,61,AutoExpParser.FOLLOW_61_in_rule_ExperimentalDesign1026); 
                    string_literal110_tree = this.adaptor.create(string_literal110);
                    this.adaptor.addChild(root_0, string_literal110_tree);

                    runs_1=this.match(this.input,INT,AutoExpParser.FOLLOW_INT_in_rule_ExperimentalDesign1030); 
                    runs_1_tree = this.adaptor.create(runs_1);
                    this.adaptor.addChild(root_0, runs_1_tree);



                    break;

            }

            string_literal111=this.match(this.input,62,AutoExpParser.FOLLOW_62_in_rule_ExperimentalDesign1038); 
            string_literal111_tree = this.adaptor.create(string_literal111);
            this.adaptor.addChild(root_0, string_literal111_tree);

            char_literal112=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ExperimentalDesign1040); 
            char_literal112_tree = this.adaptor.create(char_literal112);
            this.adaptor.addChild(root_0, char_literal112_tree);

            this.pushFollow(AutoExpParser.FOLLOW_rule_CustomDependentVariable_in_rule_ExperimentalDesign1044);
            dependentvariables_2=this.rule_CustomDependentVariable();

            this.state._fsp--;

            this.adaptor.addChild(root_0, dependentvariables_2.getTree());
            if (org.antlr.lang.isNull(list_dependentvariables_2)) list_dependentvariables_2 = [];
            list_dependentvariables_2.push(dependentvariables_2.getTree());

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:206:79: ( ',' dependentvariables_3+= rule_CustomDependentVariable )*
            loop56:
            do {
                var alt56=2;
                var LA56_0 = this.input.LA(1);

                if ( (LA56_0==12) ) {
                    alt56=1;
                }


                switch (alt56) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:206:80: ',' dependentvariables_3+= rule_CustomDependentVariable
                    char_literal113=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_ExperimentalDesign1047); 
                    char_literal113_tree = this.adaptor.create(char_literal113);
                    this.adaptor.addChild(root_0, char_literal113_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_CustomDependentVariable_in_rule_ExperimentalDesign1051);
                    dependentvariables_3=this.rule_CustomDependentVariable();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, dependentvariables_3.getTree());
                    if (org.antlr.lang.isNull(list_dependentvariables_3)) list_dependentvariables_3 = [];
                    list_dependentvariables_3.push(dependentvariables_3.getTree());



                    break;

                default :
                    break loop56;
                }
            } while (true);

            char_literal114=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ExperimentalDesign1055); 
            char_literal114_tree = this.adaptor.create(char_literal114);
            this.adaptor.addChild(root_0, char_literal114_tree);

            string_literal115=this.match(this.input,63,AutoExpParser.FOLLOW_63_in_rule_ExperimentalDesign1058); 
            string_literal115_tree = this.adaptor.create(string_literal115);
            this.adaptor.addChild(root_0, string_literal115_tree);

            char_literal116=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ExperimentalDesign1060); 
            char_literal116_tree = this.adaptor.create(char_literal116);
            this.adaptor.addChild(root_0, char_literal116_tree);

            this.pushFollow(AutoExpParser.FOLLOW_rule_Factor_in_rule_ExperimentalDesign1064);
            factors_4=this.rule_Factor();

            this.state._fsp--;

            this.adaptor.addChild(root_0, factors_4.getTree());
            if (org.antlr.lang.isNull(list_factors_4)) list_factors_4 = [];
            list_factors_4.push(factors_4.getTree());

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:207:39: ( ',' factors_5+= rule_Factor )*
            loop57:
            do {
                var alt57=2;
                var LA57_0 = this.input.LA(1);

                if ( (LA57_0==12) ) {
                    alt57=1;
                }


                switch (alt57) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:207:40: ',' factors_5+= rule_Factor
                    char_literal117=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_ExperimentalDesign1067); 
                    char_literal117_tree = this.adaptor.create(char_literal117);
                    this.adaptor.addChild(root_0, char_literal117_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Factor_in_rule_ExperimentalDesign1071);
                    factors_5=this.rule_Factor();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, factors_5.getTree());
                    if (org.antlr.lang.isNull(list_factors_5)) list_factors_5 = [];
                    list_factors_5.push(factors_5.getTree());



                    break;

                default :
                    break loop57;
                }
            } while (true);

            char_literal118=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ExperimentalDesign1075); 
            char_literal118_tree = this.adaptor.create(char_literal118);
            this.adaptor.addChild(root_0, char_literal118_tree);

            string_literal119=this.match(this.input,64,AutoExpParser.FOLLOW_64_in_rule_ExperimentalDesign1078); 
            string_literal119_tree = this.adaptor.create(string_literal119);
            this.adaptor.addChild(root_0, string_literal119_tree);

            char_literal120=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ExperimentalDesign1080); 
            char_literal120_tree = this.adaptor.create(char_literal120);
            this.adaptor.addChild(root_0, char_literal120_tree);

            this.pushFollow(AutoExpParser.FOLLOW_rule_Treatment_in_rule_ExperimentalDesign1084);
            treatments_6=this.rule_Treatment();

            this.state._fsp--;

            this.adaptor.addChild(root_0, treatments_6.getTree());
            if (org.antlr.lang.isNull(list_treatments_6)) list_treatments_6 = [];
            list_treatments_6.push(treatments_6.getTree());

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:208:48: ( ',' treatments_7+= rule_Treatment )*
            loop58:
            do {
                var alt58=2;
                var LA58_0 = this.input.LA(1);

                if ( (LA58_0==12) ) {
                    alt58=1;
                }


                switch (alt58) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:208:49: ',' treatments_7+= rule_Treatment
                    char_literal121=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_ExperimentalDesign1087); 
                    char_literal121_tree = this.adaptor.create(char_literal121);
                    this.adaptor.addChild(root_0, char_literal121_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Treatment_in_rule_ExperimentalDesign1091);
                    treatments_7=this.rule_Treatment();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, treatments_7.getTree());
                    if (org.antlr.lang.isNull(list_treatments_7)) list_treatments_7 = [];
                    list_treatments_7.push(treatments_7.getTree());



                    break;

                default :
                    break loop58;
                }
            } while (true);

            char_literal122=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ExperimentalDesign1095); 
            char_literal122_tree = this.adaptor.create(char_literal122);
            this.adaptor.addChild(root_0, char_literal122_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:209:2: ( 'Groups' '{' groups_8+= rule_ObjectGroup ( ',' groups_9+= rule_ObjectGroup )* '}' )?
            var alt60=2;
            var LA60_0 = this.input.LA(1);

            if ( (LA60_0==65) ) {
                alt60=1;
            }
            switch (alt60) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:209:3: 'Groups' '{' groups_8+= rule_ObjectGroup ( ',' groups_9+= rule_ObjectGroup )* '}'
                    string_literal123=this.match(this.input,65,AutoExpParser.FOLLOW_65_in_rule_ExperimentalDesign1099); 
                    string_literal123_tree = this.adaptor.create(string_literal123);
                    this.adaptor.addChild(root_0, string_literal123_tree);

                    char_literal124=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ExperimentalDesign1101); 
                    char_literal124_tree = this.adaptor.create(char_literal124);
                    this.adaptor.addChild(root_0, char_literal124_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_ObjectGroup_in_rule_ExperimentalDesign1105);
                    groups_8=this.rule_ObjectGroup();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, groups_8.getTree());
                    if (org.antlr.lang.isNull(list_groups_8)) list_groups_8 = [];
                    list_groups_8.push(groups_8.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:209:43: ( ',' groups_9+= rule_ObjectGroup )*
                    loop59:
                    do {
                        var alt59=2;
                        var LA59_0 = this.input.LA(1);

                        if ( (LA59_0==12) ) {
                            alt59=1;
                        }


                        switch (alt59) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:209:44: ',' groups_9+= rule_ObjectGroup
                            char_literal125=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_ExperimentalDesign1108); 
                            char_literal125_tree = this.adaptor.create(char_literal125);
                            this.adaptor.addChild(root_0, char_literal125_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_ObjectGroup_in_rule_ExperimentalDesign1112);
                            groups_9=this.rule_ObjectGroup();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, groups_9.getTree());
                            if (org.antlr.lang.isNull(list_groups_9)) list_groups_9 = [];
                            list_groups_9.push(groups_9.getTree());



                            break;

                        default :
                            break loop59;
                        }
                    } while (true);

                    char_literal126=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ExperimentalDesign1116); 
                    char_literal126_tree = this.adaptor.create(char_literal126);
                    this.adaptor.addChild(root_0, char_literal126_tree);



                    break;

            }

            string_literal127=this.match(this.input,66,AutoExpParser.FOLLOW_66_in_rule_ExperimentalDesign1121); 
            string_literal127_tree = this.adaptor.create(string_literal127);
            this.adaptor.addChild(root_0, string_literal127_tree);

            char_literal128=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ExperimentalDesign1123); 
            char_literal128_tree = this.adaptor.create(char_literal128);
            this.adaptor.addChild(root_0, char_literal128_tree);

            this.pushFollow(AutoExpParser.FOLLOW_rule_ExperimentalObject_in_rule_ExperimentalDesign1127);
            experimentalobjects_10=this.rule_ExperimentalObject();

            this.state._fsp--;

            this.adaptor.addChild(root_0, experimentalobjects_10.getTree());
            if (org.antlr.lang.isNull(list_experimentalobjects_10)) list_experimentalobjects_10 = [];
            list_experimentalobjects_10.push(experimentalobjects_10.getTree());

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:210:64: ( ',' experimentalobjects_11+= rule_ExperimentalObject )*
            loop61:
            do {
                var alt61=2;
                var LA61_0 = this.input.LA(1);

                if ( (LA61_0==12) ) {
                    alt61=1;
                }


                switch (alt61) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:210:65: ',' experimentalobjects_11+= rule_ExperimentalObject
                    char_literal129=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_ExperimentalDesign1130); 
                    char_literal129_tree = this.adaptor.create(char_literal129);
                    this.adaptor.addChild(root_0, char_literal129_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_ExperimentalObject_in_rule_ExperimentalDesign1134);
                    experimentalobjects_11=this.rule_ExperimentalObject();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, experimentalobjects_11.getTree());
                    if (org.antlr.lang.isNull(list_experimentalobjects_11)) list_experimentalobjects_11 = [];
                    list_experimentalobjects_11.push(experimentalobjects_11.getTree());



                    break;

                default :
                    break loop61;
                }
            } while (true);

            char_literal130=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ExperimentalDesign1138); 
            char_literal130_tree = this.adaptor.create(char_literal130);
            this.adaptor.addChild(root_0, char_literal130_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:211:2: ( 'Restrictions' '{' restrictions_12+= rule_Restriction ( ',' restrictions_13+= rule_Restriction )* '}' )?
            var alt63=2;
            var LA63_0 = this.input.LA(1);

            if ( (LA63_0==67) ) {
                alt63=1;
            }
            switch (alt63) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:211:3: 'Restrictions' '{' restrictions_12+= rule_Restriction ( ',' restrictions_13+= rule_Restriction )* '}'
                    string_literal131=this.match(this.input,67,AutoExpParser.FOLLOW_67_in_rule_ExperimentalDesign1142); 
                    string_literal131_tree = this.adaptor.create(string_literal131);
                    this.adaptor.addChild(root_0, string_literal131_tree);

                    char_literal132=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ExperimentalDesign1144); 
                    char_literal132_tree = this.adaptor.create(char_literal132);
                    this.adaptor.addChild(root_0, char_literal132_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Restriction_in_rule_ExperimentalDesign1148);
                    restrictions_12=this.rule_Restriction();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, restrictions_12.getTree());
                    if (org.antlr.lang.isNull(list_restrictions_12)) list_restrictions_12 = [];
                    list_restrictions_12.push(restrictions_12.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:211:56: ( ',' restrictions_13+= rule_Restriction )*
                    loop62:
                    do {
                        var alt62=2;
                        var LA62_0 = this.input.LA(1);

                        if ( (LA62_0==12) ) {
                            alt62=1;
                        }


                        switch (alt62) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:211:57: ',' restrictions_13+= rule_Restriction
                            char_literal133=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_ExperimentalDesign1151); 
                            char_literal133_tree = this.adaptor.create(char_literal133);
                            this.adaptor.addChild(root_0, char_literal133_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Restriction_in_rule_ExperimentalDesign1155);
                            restrictions_13=this.rule_Restriction();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, restrictions_13.getTree());
                            if (org.antlr.lang.isNull(list_restrictions_13)) list_restrictions_13 = [];
                            list_restrictions_13.push(restrictions_13.getTree());



                            break;

                        default :
                            break loop62;
                        }
                    } while (true);

                    char_literal134=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ExperimentalDesign1159); 
                    char_literal134_tree = this.adaptor.create(char_literal134);
                    this.adaptor.addChild(root_0, char_literal134_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:213:2: ( 'Context Variables' '{' contextvariables_14+= rule_ContextVariable ( ',' contextvariables_15+= rule_ContextVariable )* '}' )?
            var alt65=2;
            var LA65_0 = this.input.LA(1);

            if ( (LA65_0==68) ) {
                alt65=1;
            }
            switch (alt65) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:213:3: 'Context Variables' '{' contextvariables_14+= rule_ContextVariable ( ',' contextvariables_15+= rule_ContextVariable )* '}'
                    string_literal135=this.match(this.input,68,AutoExpParser.FOLLOW_68_in_rule_ExperimentalDesign1167); 
                    string_literal135_tree = this.adaptor.create(string_literal135);
                    this.adaptor.addChild(root_0, string_literal135_tree);

                    char_literal136=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ExperimentalDesign1169); 
                    char_literal136_tree = this.adaptor.create(char_literal136);
                    this.adaptor.addChild(root_0, char_literal136_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_ContextVariable_in_rule_ExperimentalDesign1173);
                    contextvariables_14=this.rule_ContextVariable();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, contextvariables_14.getTree());
                    if (org.antlr.lang.isNull(list_contextvariables_14)) list_contextvariables_14 = [];
                    list_contextvariables_14.push(contextvariables_14.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:213:69: ( ',' contextvariables_15+= rule_ContextVariable )*
                    loop64:
                    do {
                        var alt64=2;
                        var LA64_0 = this.input.LA(1);

                        if ( (LA64_0==12) ) {
                            alt64=1;
                        }


                        switch (alt64) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:213:70: ',' contextvariables_15+= rule_ContextVariable
                            char_literal137=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_ExperimentalDesign1176); 
                            char_literal137_tree = this.adaptor.create(char_literal137);
                            this.adaptor.addChild(root_0, char_literal137_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_ContextVariable_in_rule_ExperimentalDesign1180);
                            contextvariables_15=this.rule_ContextVariable();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, contextvariables_15.getTree());
                            if (org.antlr.lang.isNull(list_contextvariables_15)) list_contextvariables_15 = [];
                            list_contextvariables_15.push(contextvariables_15.getTree());



                            break;

                        default :
                            break loop64;
                        }
                    } while (true);

                    char_literal138=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ExperimentalDesign1184); 
                    char_literal138_tree = this.adaptor.create(char_literal138);
                    this.adaptor.addChild(root_0, char_literal138_tree);



                    break;

            }

            char_literal139=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ExperimentalDesign1189); 
            char_literal139_tree = this.adaptor.create(char_literal139);
            this.adaptor.addChild(root_0, char_literal139_tree);




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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:218:1: rule_Restriction : treatment_0= ID 'objects' '{' objects_1+= ID ( ',' objects_2+= ID )* '}' ;
    // $ANTLR start "rule_Restriction"
    rule_Restriction: function() {
        var retval = new AutoExpParser.rule_Restriction_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var treatment_0 = null;
        var string_literal140 = null;
        var char_literal141 = null;
        var char_literal142 = null;
        var char_literal143 = null;
        var objects_1 = null;
        var objects_2 = null;
        var list_objects_1=null;
        var list_objects_2=null;

        var treatment_0_tree=null;
        var string_literal140_tree=null;
        var char_literal141_tree=null;
        var char_literal142_tree=null;
        var char_literal143_tree=null;
        var objects_1_tree=null;
        var objects_2_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:218:18: (treatment_0= ID 'objects' '{' objects_1+= ID ( ',' objects_2+= ID )* '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:219:2: treatment_0= ID 'objects' '{' objects_1+= ID ( ',' objects_2+= ID )* '}'
            root_0 = this.adaptor.nil();

            treatment_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Restriction1202); 
            treatment_0_tree = this.adaptor.create(treatment_0);
            this.adaptor.addChild(root_0, treatment_0_tree);

            string_literal140=this.match(this.input,69,AutoExpParser.FOLLOW_69_in_rule_Restriction1204); 
            string_literal140_tree = this.adaptor.create(string_literal140);
            this.adaptor.addChild(root_0, string_literal140_tree);

            char_literal141=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Restriction1206); 
            char_literal141_tree = this.adaptor.create(char_literal141);
            this.adaptor.addChild(root_0, char_literal141_tree);

            objects_1=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Restriction1210); 
            objects_1_tree = this.adaptor.create(objects_1);
            this.adaptor.addChild(root_0, objects_1_tree);

            if (org.antlr.lang.isNull(list_objects_1)) list_objects_1 = [];
            list_objects_1.push(objects_1);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:219:45: ( ',' objects_2+= ID )*
            loop66:
            do {
                var alt66=2;
                var LA66_0 = this.input.LA(1);

                if ( (LA66_0==12) ) {
                    alt66=1;
                }


                switch (alt66) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:219:46: ',' objects_2+= ID
                    char_literal142=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Restriction1213); 
                    char_literal142_tree = this.adaptor.create(char_literal142);
                    this.adaptor.addChild(root_0, char_literal142_tree);

                    objects_2=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Restriction1217); 
                    objects_2_tree = this.adaptor.create(objects_2);
                    this.adaptor.addChild(root_0, objects_2_tree);

                    if (org.antlr.lang.isNull(list_objects_2)) list_objects_2 = [];
                    list_objects_2.push(objects_2);



                    break;

                default :
                    break loop66;
                }
            } while (true);

            char_literal143=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Restriction1221); 
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
    rule_Execution_return: (function() {
        AutoExpParser.rule_Execution_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_Execution_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:224:1: rule_Execution : name_0= ID '{' ( 'command' cmd_1= STRING )? ( 'preconditions' preconditions_2= rule_Preconditions )? ( 'result' result_3= rule_File )? ( 'files' '{' files_4+= rule_File ( ',' files_5+= rule_File )* '}' )? '}' ;
    // $ANTLR start "rule_Execution"
    rule_Execution: function() {
        var retval = new AutoExpParser.rule_Execution_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var cmd_1 = null;
        var char_literal144 = null;
        var string_literal145 = null;
        var string_literal146 = null;
        var string_literal147 = null;
        var string_literal148 = null;
        var char_literal149 = null;
        var char_literal150 = null;
        var char_literal151 = null;
        var char_literal152 = null;
        var list_files_4=null;
        var list_files_5=null;
         var preconditions_2 = null;
         var result_3 = null;
        var files_4 = null;
        var files_5 = null;
        var name_0_tree=null;
        var cmd_1_tree=null;
        var char_literal144_tree=null;
        var string_literal145_tree=null;
        var string_literal146_tree=null;
        var string_literal147_tree=null;
        var string_literal148_tree=null;
        var char_literal149_tree=null;
        var char_literal150_tree=null;
        var char_literal151_tree=null;
        var char_literal152_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:224:16: (name_0= ID '{' ( 'command' cmd_1= STRING )? ( 'preconditions' preconditions_2= rule_Preconditions )? ( 'result' result_3= rule_File )? ( 'files' '{' files_4+= rule_File ( ',' files_5+= rule_File )* '}' )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:225:2: name_0= ID '{' ( 'command' cmd_1= STRING )? ( 'preconditions' preconditions_2= rule_Preconditions )? ( 'result' result_3= rule_File )? ( 'files' '{' files_4+= rule_File ( ',' files_5+= rule_File )* '}' )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Execution1236); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal144=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Execution1239); 
            char_literal144_tree = this.adaptor.create(char_literal144);
            this.adaptor.addChild(root_0, char_literal144_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:227:2: ( 'command' cmd_1= STRING )?
            var alt67=2;
            var LA67_0 = this.input.LA(1);

            if ( (LA67_0==70) ) {
                alt67=1;
            }
            switch (alt67) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:227:3: 'command' cmd_1= STRING
                    string_literal145=this.match(this.input,70,AutoExpParser.FOLLOW_70_in_rule_Execution1243); 
                    string_literal145_tree = this.adaptor.create(string_literal145);
                    this.adaptor.addChild(root_0, string_literal145_tree);

                    cmd_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Execution1247); 
                    cmd_1_tree = this.adaptor.create(cmd_1);
                    this.adaptor.addChild(root_0, cmd_1_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:228:2: ( 'preconditions' preconditions_2= rule_Preconditions )?
            var alt68=2;
            var LA68_0 = this.input.LA(1);

            if ( (LA68_0==26) ) {
                alt68=1;
            }
            switch (alt68) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:228:3: 'preconditions' preconditions_2= rule_Preconditions
                    string_literal146=this.match(this.input,26,AutoExpParser.FOLLOW_26_in_rule_Execution1253); 
                    string_literal146_tree = this.adaptor.create(string_literal146);
                    this.adaptor.addChild(root_0, string_literal146_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Preconditions_in_rule_Execution1257);
                    preconditions_2=this.rule_Preconditions();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, preconditions_2.getTree());


                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:229:2: ( 'result' result_3= rule_File )?
            var alt69=2;
            var LA69_0 = this.input.LA(1);

            if ( (LA69_0==71) ) {
                alt69=1;
            }
            switch (alt69) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:229:3: 'result' result_3= rule_File
                    string_literal147=this.match(this.input,71,AutoExpParser.FOLLOW_71_in_rule_Execution1263); 
                    string_literal147_tree = this.adaptor.create(string_literal147);
                    this.adaptor.addChild(root_0, string_literal147_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_File_in_rule_Execution1267);
                    result_3=this.rule_File();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, result_3.getTree());


                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:230:2: ( 'files' '{' files_4+= rule_File ( ',' files_5+= rule_File )* '}' )?
            var alt71=2;
            var LA71_0 = this.input.LA(1);

            if ( (LA71_0==72) ) {
                alt71=1;
            }
            switch (alt71) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:230:3: 'files' '{' files_4+= rule_File ( ',' files_5+= rule_File )* '}'
                    string_literal148=this.match(this.input,72,AutoExpParser.FOLLOW_72_in_rule_Execution1273); 
                    string_literal148_tree = this.adaptor.create(string_literal148);
                    this.adaptor.addChild(root_0, string_literal148_tree);

                    char_literal149=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Execution1275); 
                    char_literal149_tree = this.adaptor.create(char_literal149);
                    this.adaptor.addChild(root_0, char_literal149_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_File_in_rule_Execution1279);
                    files_4=this.rule_File();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, files_4.getTree());
                    if (org.antlr.lang.isNull(list_files_4)) list_files_4 = [];
                    list_files_4.push(files_4.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:230:34: ( ',' files_5+= rule_File )*
                    loop70:
                    do {
                        var alt70=2;
                        var LA70_0 = this.input.LA(1);

                        if ( (LA70_0==12) ) {
                            alt70=1;
                        }


                        switch (alt70) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:230:35: ',' files_5+= rule_File
                            char_literal150=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Execution1282); 
                            char_literal150_tree = this.adaptor.create(char_literal150);
                            this.adaptor.addChild(root_0, char_literal150_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_File_in_rule_Execution1286);
                            files_5=this.rule_File();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, files_5.getTree());
                            if (org.antlr.lang.isNull(list_files_5)) list_files_5 = [];
                            list_files_5.push(files_5.getTree());



                            break;

                        default :
                            break loop70;
                        }
                    } while (true);

                    char_literal151=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Execution1290); 
                    char_literal151_tree = this.adaptor.create(char_literal151);
                    this.adaptor.addChild(root_0, char_literal151_tree);



                    break;

            }

            char_literal152=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Execution1295); 
            char_literal152_tree = this.adaptor.create(char_literal152);
            this.adaptor.addChild(root_0, char_literal152_tree);




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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:235:1: rule_Analysis : name_0= ID '{' ( 'significance' significancelevel_1= rule_BigDecimalType )? '}' ;
    // $ANTLR start "rule_Analysis"
    rule_Analysis: function() {
        var retval = new AutoExpParser.rule_Analysis_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var char_literal153 = null;
        var string_literal154 = null;
        var char_literal155 = null;
         var significancelevel_1 = null;

        var name_0_tree=null;
        var char_literal153_tree=null;
        var string_literal154_tree=null;
        var char_literal155_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:235:15: (name_0= ID '{' ( 'significance' significancelevel_1= rule_BigDecimalType )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:237:2: name_0= ID '{' ( 'significance' significancelevel_1= rule_BigDecimalType )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Analysis1310); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal153=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Analysis1313); 
            char_literal153_tree = this.adaptor.create(char_literal153);
            this.adaptor.addChild(root_0, char_literal153_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:239:2: ( 'significance' significancelevel_1= rule_BigDecimalType )?
            var alt72=2;
            var LA72_0 = this.input.LA(1);

            if ( (LA72_0==73) ) {
                alt72=1;
            }
            switch (alt72) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:239:3: 'significance' significancelevel_1= rule_BigDecimalType
                    string_literal154=this.match(this.input,73,AutoExpParser.FOLLOW_73_in_rule_Analysis1317); 
                    string_literal154_tree = this.adaptor.create(string_literal154);
                    this.adaptor.addChild(root_0, string_literal154_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_BigDecimalType_in_rule_Analysis1321);
                    significancelevel_1=this.rule_BigDecimalType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, significancelevel_1.getTree());


                    break;

            }

            char_literal155=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Analysis1326); 
            char_literal155_tree = this.adaptor.create(char_literal155);
            this.adaptor.addChild(root_0, char_literal155_tree);




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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:244:1: rule_ExperimentalObject : name_0= ID 'description' description_1= STRING ( 'group' objectgroup_2= ID )? ( 'parameters' '{' parameters_3+= rule_Parameter ( ',' parameters_4+= rule_Parameter )* '}' )? ( 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}' )? ;
    // $ANTLR start "rule_ExperimentalObject"
    rule_ExperimentalObject: function() {
        var retval = new AutoExpParser.rule_ExperimentalObject_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var description_1 = null;
        var objectgroup_2 = null;
        var string_literal156 = null;
        var string_literal157 = null;
        var string_literal158 = null;
        var char_literal159 = null;
        var char_literal160 = null;
        var char_literal161 = null;
        var string_literal162 = null;
        var char_literal163 = null;
        var char_literal164 = null;
        var char_literal165 = null;
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
        var string_literal156_tree=null;
        var string_literal157_tree=null;
        var string_literal158_tree=null;
        var char_literal159_tree=null;
        var char_literal160_tree=null;
        var char_literal161_tree=null;
        var string_literal162_tree=null;
        var char_literal163_tree=null;
        var char_literal164_tree=null;
        var char_literal165_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:244:25: (name_0= ID 'description' description_1= STRING ( 'group' objectgroup_2= ID )? ( 'parameters' '{' parameters_3+= rule_Parameter ( ',' parameters_4+= rule_Parameter )* '}' )? ( 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}' )? )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:246:2: name_0= ID 'description' description_1= STRING ( 'group' objectgroup_2= ID )? ( 'parameters' '{' parameters_3+= rule_Parameter ( ',' parameters_4+= rule_Parameter )* '}' )? ( 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}' )?
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ExperimentalObject1341); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            string_literal156=this.match(this.input,14,AutoExpParser.FOLLOW_14_in_rule_ExperimentalObject1344); 
            string_literal156_tree = this.adaptor.create(string_literal156);
            this.adaptor.addChild(root_0, string_literal156_tree);

            description_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_ExperimentalObject1348); 
            description_1_tree = this.adaptor.create(description_1);
            this.adaptor.addChild(root_0, description_1_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:248:2: ( 'group' objectgroup_2= ID )?
            var alt73=2;
            var LA73_0 = this.input.LA(1);

            if ( (LA73_0==74) ) {
                alt73=1;
            }
            switch (alt73) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:248:3: 'group' objectgroup_2= ID
                    string_literal157=this.match(this.input,74,AutoExpParser.FOLLOW_74_in_rule_ExperimentalObject1352); 
                    string_literal157_tree = this.adaptor.create(string_literal157);
                    this.adaptor.addChild(root_0, string_literal157_tree);

                    objectgroup_2=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ExperimentalObject1356); 
                    objectgroup_2_tree = this.adaptor.create(objectgroup_2);
                    this.adaptor.addChild(root_0, objectgroup_2_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:249:2: ( 'parameters' '{' parameters_3+= rule_Parameter ( ',' parameters_4+= rule_Parameter )* '}' )?
            var alt75=2;
            var LA75_0 = this.input.LA(1);

            if ( (LA75_0==75) ) {
                alt75=1;
            }
            switch (alt75) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:249:3: 'parameters' '{' parameters_3+= rule_Parameter ( ',' parameters_4+= rule_Parameter )* '}'
                    string_literal158=this.match(this.input,75,AutoExpParser.FOLLOW_75_in_rule_ExperimentalObject1362); 
                    string_literal158_tree = this.adaptor.create(string_literal158);
                    this.adaptor.addChild(root_0, string_literal158_tree);

                    char_literal159=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ExperimentalObject1364); 
                    char_literal159_tree = this.adaptor.create(char_literal159);
                    this.adaptor.addChild(root_0, char_literal159_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Parameter_in_rule_ExperimentalObject1368);
                    parameters_3=this.rule_Parameter();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, parameters_3.getTree());
                    if (org.antlr.lang.isNull(list_parameters_3)) list_parameters_3 = [];
                    list_parameters_3.push(parameters_3.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:249:49: ( ',' parameters_4+= rule_Parameter )*
                    loop74:
                    do {
                        var alt74=2;
                        var LA74_0 = this.input.LA(1);

                        if ( (LA74_0==12) ) {
                            alt74=1;
                        }


                        switch (alt74) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:249:50: ',' parameters_4+= rule_Parameter
                            char_literal160=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_ExperimentalObject1371); 
                            char_literal160_tree = this.adaptor.create(char_literal160);
                            this.adaptor.addChild(root_0, char_literal160_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Parameter_in_rule_ExperimentalObject1375);
                            parameters_4=this.rule_Parameter();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, parameters_4.getTree());
                            if (org.antlr.lang.isNull(list_parameters_4)) list_parameters_4 = [];
                            list_parameters_4.push(parameters_4.getTree());



                            break;

                        default :
                            break loop74;
                        }
                    } while (true);

                    char_literal161=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ExperimentalObject1379); 
                    char_literal161_tree = this.adaptor.create(char_literal161);
                    this.adaptor.addChild(root_0, char_literal161_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:250:2: ( 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}' )?
            var alt77=2;
            var LA77_0 = this.input.LA(1);

            if ( (LA77_0==72) ) {
                alt77=1;
            }
            switch (alt77) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:250:3: 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}'
                    string_literal162=this.match(this.input,72,AutoExpParser.FOLLOW_72_in_rule_ExperimentalObject1385); 
                    string_literal162_tree = this.adaptor.create(string_literal162);
                    this.adaptor.addChild(root_0, string_literal162_tree);

                    char_literal163=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ExperimentalObject1387); 
                    char_literal163_tree = this.adaptor.create(char_literal163);
                    this.adaptor.addChild(root_0, char_literal163_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_File_in_rule_ExperimentalObject1391);
                    files_5=this.rule_File();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, files_5.getTree());
                    if (org.antlr.lang.isNull(list_files_5)) list_files_5 = [];
                    list_files_5.push(files_5.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:250:34: ( ',' files_6+= rule_File )*
                    loop76:
                    do {
                        var alt76=2;
                        var LA76_0 = this.input.LA(1);

                        if ( (LA76_0==12) ) {
                            alt76=1;
                        }


                        switch (alt76) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:250:35: ',' files_6+= rule_File
                            char_literal164=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_ExperimentalObject1394); 
                            char_literal164_tree = this.adaptor.create(char_literal164);
                            this.adaptor.addChild(root_0, char_literal164_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_File_in_rule_ExperimentalObject1398);
                            files_6=this.rule_File();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, files_6.getTree());
                            if (org.antlr.lang.isNull(list_files_6)) list_files_6 = [];
                            list_files_6.push(files_6.getTree());



                            break;

                        default :
                            break loop76;
                        }
                    } while (true);

                    char_literal165=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ExperimentalObject1402); 
                    char_literal165_tree = this.adaptor.create(char_literal165);
                    this.adaptor.addChild(root_0, char_literal165_tree);



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
    rule_Abstract_Impl_return: (function() {
        AutoExpParser.rule_Abstract_Impl_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_Abstract_Impl_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:254:1: rule_Abstract_Impl : ;
    // $ANTLR start "rule_Abstract_Impl"
    rule_Abstract_Impl: function() {
        var retval = new AutoExpParser.rule_Abstract_Impl_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:254:20: ()
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:255:2: 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:259:1: rule_Author : name_0= ID '{' ( 'fullName' fullname_1= STRING )? ( 'institution' institution_2= STRING )? ( 'email' email_3= STRING )? '}' ;
    // $ANTLR start "rule_Author"
    rule_Author: function() {
        var retval = new AutoExpParser.rule_Author_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var fullname_1 = null;
        var institution_2 = null;
        var email_3 = null;
        var char_literal166 = null;
        var string_literal167 = null;
        var string_literal168 = null;
        var string_literal169 = null;
        var char_literal170 = null;

        var name_0_tree=null;
        var fullname_1_tree=null;
        var institution_2_tree=null;
        var email_3_tree=null;
        var char_literal166_tree=null;
        var string_literal167_tree=null;
        var string_literal168_tree=null;
        var string_literal169_tree=null;
        var char_literal170_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:259:13: (name_0= ID '{' ( 'fullName' fullname_1= STRING )? ( 'institution' institution_2= STRING )? ( 'email' email_3= STRING )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:261:2: name_0= ID '{' ( 'fullName' fullname_1= STRING )? ( 'institution' institution_2= STRING )? ( 'email' email_3= STRING )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Author1429); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal166=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Author1432); 
            char_literal166_tree = this.adaptor.create(char_literal166);
            this.adaptor.addChild(root_0, char_literal166_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:263:2: ( 'fullName' fullname_1= STRING )?
            var alt78=2;
            var LA78_0 = this.input.LA(1);

            if ( (LA78_0==76) ) {
                alt78=1;
            }
            switch (alt78) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:263:3: 'fullName' fullname_1= STRING
                    string_literal167=this.match(this.input,76,AutoExpParser.FOLLOW_76_in_rule_Author1436); 
                    string_literal167_tree = this.adaptor.create(string_literal167);
                    this.adaptor.addChild(root_0, string_literal167_tree);

                    fullname_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Author1440); 
                    fullname_1_tree = this.adaptor.create(fullname_1);
                    this.adaptor.addChild(root_0, fullname_1_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:264:2: ( 'institution' institution_2= STRING )?
            var alt79=2;
            var LA79_0 = this.input.LA(1);

            if ( (LA79_0==77) ) {
                alt79=1;
            }
            switch (alt79) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:264:3: 'institution' institution_2= STRING
                    string_literal168=this.match(this.input,77,AutoExpParser.FOLLOW_77_in_rule_Author1446); 
                    string_literal168_tree = this.adaptor.create(string_literal168);
                    this.adaptor.addChild(root_0, string_literal168_tree);

                    institution_2=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Author1450); 
                    institution_2_tree = this.adaptor.create(institution_2);
                    this.adaptor.addChild(root_0, institution_2_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:265:2: ( 'email' email_3= STRING )?
            var alt80=2;
            var LA80_0 = this.input.LA(1);

            if ( (LA80_0==78) ) {
                alt80=1;
            }
            switch (alt80) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:265:3: 'email' email_3= STRING
                    string_literal169=this.match(this.input,78,AutoExpParser.FOLLOW_78_in_rule_Author1456); 
                    string_literal169_tree = this.adaptor.create(string_literal169);
                    this.adaptor.addChild(root_0, string_literal169_tree);

                    email_3=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Author1460); 
                    email_3_tree = this.adaptor.create(email_3);
                    this.adaptor.addChild(root_0, email_3_tree);



                    break;

            }

            char_literal170=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Author1467); 
            char_literal170_tree = this.adaptor.create(char_literal170);
            this.adaptor.addChild(root_0, char_literal170_tree);




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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:271:1: rule_Keyword : description_0= STRING ;
    // $ANTLR start "rule_Keyword"
    rule_Keyword: function() {
        var retval = new AutoExpParser.rule_Keyword_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var description_0 = null;

        var description_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:271:14: (description_0= STRING )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:273:2: description_0= STRING
            root_0 = this.adaptor.nil();

            description_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Keyword1482); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:278:1: rule_Threat : name_0= ID '{' ( 'description' description_1= STRING )? ( 'type' type_2= rule_ThreatType )? ( 'CA' ca_3= STRING )? '}' ;
    // $ANTLR start "rule_Threat"
    rule_Threat: function() {
        var retval = new AutoExpParser.rule_Threat_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var description_1 = null;
        var ca_3 = null;
        var char_literal171 = null;
        var string_literal172 = null;
        var string_literal173 = null;
        var string_literal174 = null;
        var char_literal175 = null;
         var type_2 = null;

        var name_0_tree=null;
        var description_1_tree=null;
        var ca_3_tree=null;
        var char_literal171_tree=null;
        var string_literal172_tree=null;
        var string_literal173_tree=null;
        var string_literal174_tree=null;
        var char_literal175_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:278:13: (name_0= ID '{' ( 'description' description_1= STRING )? ( 'type' type_2= rule_ThreatType )? ( 'CA' ca_3= STRING )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:280:2: name_0= ID '{' ( 'description' description_1= STRING )? ( 'type' type_2= rule_ThreatType )? ( 'CA' ca_3= STRING )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Threat1499); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal171=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Threat1502); 
            char_literal171_tree = this.adaptor.create(char_literal171);
            this.adaptor.addChild(root_0, char_literal171_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:282:2: ( 'description' description_1= STRING )?
            var alt81=2;
            var LA81_0 = this.input.LA(1);

            if ( (LA81_0==14) ) {
                alt81=1;
            }
            switch (alt81) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:282:3: 'description' description_1= STRING
                    string_literal172=this.match(this.input,14,AutoExpParser.FOLLOW_14_in_rule_Threat1506); 
                    string_literal172_tree = this.adaptor.create(string_literal172);
                    this.adaptor.addChild(root_0, string_literal172_tree);

                    description_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Threat1510); 
                    description_1_tree = this.adaptor.create(description_1);
                    this.adaptor.addChild(root_0, description_1_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:283:2: ( 'type' type_2= rule_ThreatType )?
            var alt82=2;
            var LA82_0 = this.input.LA(1);

            if ( (LA82_0==60) ) {
                alt82=1;
            }
            switch (alt82) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:283:3: 'type' type_2= rule_ThreatType
                    string_literal173=this.match(this.input,60,AutoExpParser.FOLLOW_60_in_rule_Threat1516); 
                    string_literal173_tree = this.adaptor.create(string_literal173);
                    this.adaptor.addChild(root_0, string_literal173_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_ThreatType_in_rule_Threat1520);
                    type_2=this.rule_ThreatType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, type_2.getTree());


                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:284:2: ( 'CA' ca_3= STRING )?
            var alt83=2;
            var LA83_0 = this.input.LA(1);

            if ( (LA83_0==79) ) {
                alt83=1;
            }
            switch (alt83) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:284:3: 'CA' ca_3= STRING
                    string_literal174=this.match(this.input,79,AutoExpParser.FOLLOW_79_in_rule_Threat1526); 
                    string_literal174_tree = this.adaptor.create(string_literal174);
                    this.adaptor.addChild(root_0, string_literal174_tree);

                    ca_3=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Threat1530); 
                    ca_3_tree = this.adaptor.create(ca_3);
                    this.adaptor.addChild(root_0, ca_3_tree);



                    break;

            }

            char_literal175=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Threat1535); 
            char_literal175_tree = this.adaptor.create(char_literal175);
            this.adaptor.addChild(root_0, char_literal175_tree);




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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:289:1: rule_Goal_Impl : name_0= ID ;
    // $ANTLR start "rule_Goal_Impl"
    rule_Goal_Impl: function() {
        var retval = new AutoExpParser.rule_Goal_Impl_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;

        var name_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:289:16: (name_0= ID )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:291:2: name_0= ID
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Goal_Impl1550); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:295:1: rule_ResearchQuestion : name_0= ID '{' ( 'description' description_1= STRING )? ( 'goal' goal_2= ID )? '}' ;
    // $ANTLR start "rule_ResearchQuestion"
    rule_ResearchQuestion: function() {
        var retval = new AutoExpParser.rule_ResearchQuestion_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var description_1 = null;
        var goal_2 = null;
        var char_literal176 = null;
        var string_literal177 = null;
        var string_literal178 = null;
        var char_literal179 = null;

        var name_0_tree=null;
        var description_1_tree=null;
        var goal_2_tree=null;
        var char_literal176_tree=null;
        var string_literal177_tree=null;
        var string_literal178_tree=null;
        var char_literal179_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:295:23: (name_0= ID '{' ( 'description' description_1= STRING )? ( 'goal' goal_2= ID )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:297:2: name_0= ID '{' ( 'description' description_1= STRING )? ( 'goal' goal_2= ID )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ResearchQuestion1565); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal176=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ResearchQuestion1568); 
            char_literal176_tree = this.adaptor.create(char_literal176);
            this.adaptor.addChild(root_0, char_literal176_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:299:2: ( 'description' description_1= STRING )?
            var alt84=2;
            var LA84_0 = this.input.LA(1);

            if ( (LA84_0==14) ) {
                alt84=1;
            }
            switch (alt84) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:299:3: 'description' description_1= STRING
                    string_literal177=this.match(this.input,14,AutoExpParser.FOLLOW_14_in_rule_ResearchQuestion1572); 
                    string_literal177_tree = this.adaptor.create(string_literal177);
                    this.adaptor.addChild(root_0, string_literal177_tree);

                    description_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_ResearchQuestion1576); 
                    description_1_tree = this.adaptor.create(description_1);
                    this.adaptor.addChild(root_0, description_1_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:300:2: ( 'goal' goal_2= ID )?
            var alt85=2;
            var LA85_0 = this.input.LA(1);

            if ( (LA85_0==80) ) {
                alt85=1;
            }
            switch (alt85) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:300:3: 'goal' goal_2= ID
                    string_literal178=this.match(this.input,80,AutoExpParser.FOLLOW_80_in_rule_ResearchQuestion1582); 
                    string_literal178_tree = this.adaptor.create(string_literal178);
                    this.adaptor.addChild(root_0, string_literal178_tree);

                    goal_2=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ResearchQuestion1586); 
                    goal_2_tree = this.adaptor.create(goal_2);
                    this.adaptor.addChild(root_0, goal_2_tree);



                    break;

            }

            char_literal179=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ResearchQuestion1591); 
            char_literal179_tree = this.adaptor.create(char_literal179);
            this.adaptor.addChild(root_0, char_literal179_tree);




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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:305:1: rule_ResearchHypothesis : name_0= ID '{' formula_1= rule_ResearchHypothesisFormula ( 'description' description_2= STRING )? ( 'goal' goal_3= ID )? '}' ;
    // $ANTLR start "rule_ResearchHypothesis"
    rule_ResearchHypothesis: function() {
        var retval = new AutoExpParser.rule_ResearchHypothesis_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var description_2 = null;
        var goal_3 = null;
        var char_literal180 = null;
        var string_literal181 = null;
        var string_literal182 = null;
        var char_literal183 = null;
         var formula_1 = null;

        var name_0_tree=null;
        var description_2_tree=null;
        var goal_3_tree=null;
        var char_literal180_tree=null;
        var string_literal181_tree=null;
        var string_literal182_tree=null;
        var char_literal183_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:305:25: (name_0= ID '{' formula_1= rule_ResearchHypothesisFormula ( 'description' description_2= STRING )? ( 'goal' goal_3= ID )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:307:2: name_0= ID '{' formula_1= rule_ResearchHypothesisFormula ( 'description' description_2= STRING )? ( 'goal' goal_3= ID )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ResearchHypothesis1606); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal180=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ResearchHypothesis1609); 
            char_literal180_tree = this.adaptor.create(char_literal180);
            this.adaptor.addChild(root_0, char_literal180_tree);

            this.pushFollow(AutoExpParser.FOLLOW_rule_ResearchHypothesisFormula_in_rule_ResearchHypothesis1614);
            formula_1=this.rule_ResearchHypothesisFormula();

            this.state._fsp--;

            this.adaptor.addChild(root_0, formula_1.getTree());
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:310:2: ( 'description' description_2= STRING )?
            var alt86=2;
            var LA86_0 = this.input.LA(1);

            if ( (LA86_0==14) ) {
                alt86=1;
            }
            switch (alt86) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:310:3: 'description' description_2= STRING
                    string_literal181=this.match(this.input,14,AutoExpParser.FOLLOW_14_in_rule_ResearchHypothesis1618); 
                    string_literal181_tree = this.adaptor.create(string_literal181);
                    this.adaptor.addChild(root_0, string_literal181_tree);

                    description_2=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_ResearchHypothesis1622); 
                    description_2_tree = this.adaptor.create(description_2);
                    this.adaptor.addChild(root_0, description_2_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:311:2: ( 'goal' goal_3= ID )?
            var alt87=2;
            var LA87_0 = this.input.LA(1);

            if ( (LA87_0==80) ) {
                alt87=1;
            }
            switch (alt87) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:311:3: 'goal' goal_3= ID
                    string_literal182=this.match(this.input,80,AutoExpParser.FOLLOW_80_in_rule_ResearchHypothesis1628); 
                    string_literal182_tree = this.adaptor.create(string_literal182);
                    this.adaptor.addChild(root_0, string_literal182_tree);

                    goal_3=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ResearchHypothesis1632); 
                    goal_3_tree = this.adaptor.create(goal_3);
                    this.adaptor.addChild(root_0, goal_3_tree);



                    break;

            }

            char_literal183=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ResearchHypothesis1637); 
            char_literal183_tree = this.adaptor.create(char_literal183);
            this.adaptor.addChild(root_0, char_literal183_tree);




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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:316:1: rule_ResearchHypothesisFormula : depvariable_0= ID treatment1_1= ID operator_2= rule_OperatorType treatment2_3= ID ;
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
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:316:32: (depvariable_0= ID treatment1_1= ID operator_2= rule_OperatorType treatment2_3= ID )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:318:2: depvariable_0= ID treatment1_1= ID operator_2= rule_OperatorType treatment2_3= ID
            root_0 = this.adaptor.nil();

            depvariable_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ResearchHypothesisFormula1652); 
            depvariable_0_tree = this.adaptor.create(depvariable_0);
            this.adaptor.addChild(root_0, depvariable_0_tree);

            treatment1_1=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ResearchHypothesisFormula1656); 
            treatment1_1_tree = this.adaptor.create(treatment1_1);
            this.adaptor.addChild(root_0, treatment1_1_tree);

            this.pushFollow(AutoExpParser.FOLLOW_rule_OperatorType_in_rule_ResearchHypothesisFormula1660);
            operator_2=this.rule_OperatorType();

            this.state._fsp--;

            this.adaptor.addChild(root_0, operator_2.getTree());
            treatment2_3=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ResearchHypothesisFormula1664); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:322:1: rule_OperatorType : typename_0= ( '<' | '=' | '!=' | '>' ) ;
    // $ANTLR start "rule_OperatorType"
    rule_OperatorType: function() {
        var retval = new AutoExpParser.rule_OperatorType_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var typename_0 = null;

        var typename_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:322:18: (typename_0= ( '<' | '=' | '!=' | '>' ) )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:323:2: typename_0= ( '<' | '=' | '!=' | '>' )
            root_0 = this.adaptor.nil();

            typename_0=this.input.LT(1);
            if ( (this.input.LA(1)>=81 && this.input.LA(1)<=84) ) {
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:327:1: rule_DependentVariable : ( rule_DependentVariable_Impl | rule_BuiltinDependentVariable | rule_CustomDependentVariable );
    // $ANTLR start "rule_DependentVariable"
    rule_DependentVariable: function() {
        var retval = new AutoExpParser.rule_DependentVariable_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var rule_DependentVariable_Impl184 = null;
         var rule_BuiltinDependentVariable185 = null;
         var rule_CustomDependentVariable186 = null;


        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:327:24: ( rule_DependentVariable_Impl | rule_BuiltinDependentVariable | rule_CustomDependentVariable )
            var alt88=3;
            var LA88_0 = this.input.LA(1);

            if ( (LA88_0==ID) ) {
                var LA88_1 = this.input.LA(2);

                if ( (LA88_1==10) ) {
                    alt88=3;
                }
                else if ( (LA88_1==EOF) ) {
                    alt88=1;
                }
                else {
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 88, 1, this.input);

                    throw nvae;
                }
            }
            else if ( (LA88_0==STRING) ) {
                alt88=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 88, 0, this.input);

                throw nvae;
            }
            switch (alt88) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:328:2: rule_DependentVariable_Impl
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AutoExpParser.FOLLOW_rule_DependentVariable_Impl_in_rule_DependentVariable1700);
                    rule_DependentVariable_Impl184=this.rule_DependentVariable_Impl();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, rule_DependentVariable_Impl184.getTree());


                    break;
                case 2 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:328:30: rule_BuiltinDependentVariable
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AutoExpParser.FOLLOW_rule_BuiltinDependentVariable_in_rule_DependentVariable1702);
                    rule_BuiltinDependentVariable185=this.rule_BuiltinDependentVariable();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, rule_BuiltinDependentVariable185.getTree());


                    break;
                case 3 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:328:60: rule_CustomDependentVariable
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AutoExpParser.FOLLOW_rule_CustomDependentVariable_in_rule_DependentVariable1704);
                    rule_CustomDependentVariable186=this.rule_CustomDependentVariable();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, rule_CustomDependentVariable186.getTree());


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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:333:1: rule_DependentVariable_Impl : name_0= ID ;
    // $ANTLR start "rule_DependentVariable_Impl"
    rule_DependentVariable_Impl: function() {
        var retval = new AutoExpParser.rule_DependentVariable_Impl_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;

        var name_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:333:29: (name_0= ID )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:335:2: name_0= ID
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_DependentVariable_Impl1720); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:339:1: rule_BuiltinDependentVariable : name_0= STRING ;
    // $ANTLR start "rule_BuiltinDependentVariable"
    rule_BuiltinDependentVariable: function() {
        var retval = new AutoExpParser.rule_BuiltinDependentVariable_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;

        var name_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:339:31: (name_0= STRING )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:341:2: name_0= STRING
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_BuiltinDependentVariable1735); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:349:1: rule_CustomDependentVariable : name_0= ID '{' 'description' description_1= STRING ( 'scaleType' scaletype_2= rule_ScaleType )? ( 'range' '{' range_3+= rule_Range ( ',' range_4+= rule_Range )* '}' )? '}' ;
    // $ANTLR start "rule_CustomDependentVariable"
    rule_CustomDependentVariable: function() {
        var retval = new AutoExpParser.rule_CustomDependentVariable_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var description_1 = null;
        var char_literal187 = null;
        var string_literal188 = null;
        var string_literal189 = null;
        var string_literal190 = null;
        var char_literal191 = null;
        var char_literal192 = null;
        var char_literal193 = null;
        var char_literal194 = null;
        var list_range_3=null;
        var list_range_4=null;
         var scaletype_2 = null;
        var range_3 = null;
        var range_4 = null;
        var name_0_tree=null;
        var description_1_tree=null;
        var char_literal187_tree=null;
        var string_literal188_tree=null;
        var string_literal189_tree=null;
        var string_literal190_tree=null;
        var char_literal191_tree=null;
        var char_literal192_tree=null;
        var char_literal193_tree=null;
        var char_literal194_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:349:30: (name_0= ID '{' 'description' description_1= STRING ( 'scaleType' scaletype_2= rule_ScaleType )? ( 'range' '{' range_3+= rule_Range ( ',' range_4+= rule_Range )* '}' )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:351:2: name_0= ID '{' 'description' description_1= STRING ( 'scaleType' scaletype_2= rule_ScaleType )? ( 'range' '{' range_3+= rule_Range ( ',' range_4+= rule_Range )* '}' )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_CustomDependentVariable1756); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal187=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_CustomDependentVariable1759); 
            char_literal187_tree = this.adaptor.create(char_literal187);
            this.adaptor.addChild(root_0, char_literal187_tree);

            string_literal188=this.match(this.input,14,AutoExpParser.FOLLOW_14_in_rule_CustomDependentVariable1762); 
            string_literal188_tree = this.adaptor.create(string_literal188);
            this.adaptor.addChild(root_0, string_literal188_tree);

            description_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_CustomDependentVariable1766); 
            description_1_tree = this.adaptor.create(description_1);
            this.adaptor.addChild(root_0, description_1_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:354:2: ( 'scaleType' scaletype_2= rule_ScaleType )?
            var alt89=2;
            var LA89_0 = this.input.LA(1);

            if ( (LA89_0==85) ) {
                alt89=1;
            }
            switch (alt89) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:354:3: 'scaleType' scaletype_2= rule_ScaleType
                    string_literal189=this.match(this.input,85,AutoExpParser.FOLLOW_85_in_rule_CustomDependentVariable1770); 
                    string_literal189_tree = this.adaptor.create(string_literal189);
                    this.adaptor.addChild(root_0, string_literal189_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_ScaleType_in_rule_CustomDependentVariable1774);
                    scaletype_2=this.rule_ScaleType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, scaletype_2.getTree());


                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:355:2: ( 'range' '{' range_3+= rule_Range ( ',' range_4+= rule_Range )* '}' )?
            var alt91=2;
            var LA91_0 = this.input.LA(1);

            if ( (LA91_0==86) ) {
                alt91=1;
            }
            switch (alt91) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:355:3: 'range' '{' range_3+= rule_Range ( ',' range_4+= rule_Range )* '}'
                    string_literal190=this.match(this.input,86,AutoExpParser.FOLLOW_86_in_rule_CustomDependentVariable1780); 
                    string_literal190_tree = this.adaptor.create(string_literal190);
                    this.adaptor.addChild(root_0, string_literal190_tree);

                    char_literal191=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_CustomDependentVariable1782); 
                    char_literal191_tree = this.adaptor.create(char_literal191);
                    this.adaptor.addChild(root_0, char_literal191_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Range_in_rule_CustomDependentVariable1786);
                    range_3=this.rule_Range();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, range_3.getTree());
                    if (org.antlr.lang.isNull(list_range_3)) list_range_3 = [];
                    list_range_3.push(range_3.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:355:35: ( ',' range_4+= rule_Range )*
                    loop90:
                    do {
                        var alt90=2;
                        var LA90_0 = this.input.LA(1);

                        if ( (LA90_0==12) ) {
                            alt90=1;
                        }


                        switch (alt90) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:355:36: ',' range_4+= rule_Range
                            char_literal192=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_CustomDependentVariable1789); 
                            char_literal192_tree = this.adaptor.create(char_literal192);
                            this.adaptor.addChild(root_0, char_literal192_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Range_in_rule_CustomDependentVariable1793);
                            range_4=this.rule_Range();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, range_4.getTree());
                            if (org.antlr.lang.isNull(list_range_4)) list_range_4 = [];
                            list_range_4.push(range_4.getTree());



                            break;

                        default :
                            break loop90;
                        }
                    } while (true);

                    char_literal193=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_CustomDependentVariable1797); 
                    char_literal193_tree = this.adaptor.create(char_literal193);
                    this.adaptor.addChild(root_0, char_literal193_tree);



                    break;

            }

            char_literal194=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_CustomDependentVariable1802); 
            char_literal194_tree = this.adaptor.create(char_literal194);
            this.adaptor.addChild(root_0, char_literal194_tree);




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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:360:1: rule_Factor : name_0= ID '{' 'description' description_1= STRING ( 'scaleType' scaletype_2= rule_ScaleType )? '}' ;
    // $ANTLR start "rule_Factor"
    rule_Factor: function() {
        var retval = new AutoExpParser.rule_Factor_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var description_1 = null;
        var char_literal195 = null;
        var string_literal196 = null;
        var string_literal197 = null;
        var char_literal198 = null;
         var scaletype_2 = null;

        var name_0_tree=null;
        var description_1_tree=null;
        var char_literal195_tree=null;
        var string_literal196_tree=null;
        var string_literal197_tree=null;
        var char_literal198_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:360:13: (name_0= ID '{' 'description' description_1= STRING ( 'scaleType' scaletype_2= rule_ScaleType )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:362:2: name_0= ID '{' 'description' description_1= STRING ( 'scaleType' scaletype_2= rule_ScaleType )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Factor1817); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal195=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Factor1820); 
            char_literal195_tree = this.adaptor.create(char_literal195);
            this.adaptor.addChild(root_0, char_literal195_tree);

            string_literal196=this.match(this.input,14,AutoExpParser.FOLLOW_14_in_rule_Factor1823); 
            string_literal196_tree = this.adaptor.create(string_literal196);
            this.adaptor.addChild(root_0, string_literal196_tree);

            description_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Factor1827); 
            description_1_tree = this.adaptor.create(description_1);
            this.adaptor.addChild(root_0, description_1_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:365:2: ( 'scaleType' scaletype_2= rule_ScaleType )?
            var alt92=2;
            var LA92_0 = this.input.LA(1);

            if ( (LA92_0==85) ) {
                alt92=1;
            }
            switch (alt92) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:365:3: 'scaleType' scaletype_2= rule_ScaleType
                    string_literal197=this.match(this.input,85,AutoExpParser.FOLLOW_85_in_rule_Factor1831); 
                    string_literal197_tree = this.adaptor.create(string_literal197);
                    this.adaptor.addChild(root_0, string_literal197_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_ScaleType_in_rule_Factor1835);
                    scaletype_2=this.rule_ScaleType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, scaletype_2.getTree());


                    break;

            }

            char_literal198=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Factor1840); 
            char_literal198_tree = this.adaptor.create(char_literal198);
            this.adaptor.addChild(root_0, char_literal198_tree);




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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:370:1: rule_ContextVariable : name_0= ID '{' ( 'description' description_1= STRING )? ( 'scaleType' scaletype_2= rule_ScaleType )? ( 'range' '{' range_3+= rule_Range ( ',' range_4+= rule_Range )* '}' )? '}' ;
    // $ANTLR start "rule_ContextVariable"
    rule_ContextVariable: function() {
        var retval = new AutoExpParser.rule_ContextVariable_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var description_1 = null;
        var char_literal199 = null;
        var string_literal200 = null;
        var string_literal201 = null;
        var string_literal202 = null;
        var char_literal203 = null;
        var char_literal204 = null;
        var char_literal205 = null;
        var char_literal206 = null;
        var list_range_3=null;
        var list_range_4=null;
         var scaletype_2 = null;
        var range_3 = null;
        var range_4 = null;
        var name_0_tree=null;
        var description_1_tree=null;
        var char_literal199_tree=null;
        var string_literal200_tree=null;
        var string_literal201_tree=null;
        var string_literal202_tree=null;
        var char_literal203_tree=null;
        var char_literal204_tree=null;
        var char_literal205_tree=null;
        var char_literal206_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:370:22: (name_0= ID '{' ( 'description' description_1= STRING )? ( 'scaleType' scaletype_2= rule_ScaleType )? ( 'range' '{' range_3+= rule_Range ( ',' range_4+= rule_Range )* '}' )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:372:2: name_0= ID '{' ( 'description' description_1= STRING )? ( 'scaleType' scaletype_2= rule_ScaleType )? ( 'range' '{' range_3+= rule_Range ( ',' range_4+= rule_Range )* '}' )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ContextVariable1855); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal199=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ContextVariable1858); 
            char_literal199_tree = this.adaptor.create(char_literal199);
            this.adaptor.addChild(root_0, char_literal199_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:374:2: ( 'description' description_1= STRING )?
            var alt93=2;
            var LA93_0 = this.input.LA(1);

            if ( (LA93_0==14) ) {
                alt93=1;
            }
            switch (alt93) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:374:3: 'description' description_1= STRING
                    string_literal200=this.match(this.input,14,AutoExpParser.FOLLOW_14_in_rule_ContextVariable1862); 
                    string_literal200_tree = this.adaptor.create(string_literal200);
                    this.adaptor.addChild(root_0, string_literal200_tree);

                    description_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_ContextVariable1866); 
                    description_1_tree = this.adaptor.create(description_1);
                    this.adaptor.addChild(root_0, description_1_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:375:2: ( 'scaleType' scaletype_2= rule_ScaleType )?
            var alt94=2;
            var LA94_0 = this.input.LA(1);

            if ( (LA94_0==85) ) {
                alt94=1;
            }
            switch (alt94) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:375:3: 'scaleType' scaletype_2= rule_ScaleType
                    string_literal201=this.match(this.input,85,AutoExpParser.FOLLOW_85_in_rule_ContextVariable1872); 
                    string_literal201_tree = this.adaptor.create(string_literal201);
                    this.adaptor.addChild(root_0, string_literal201_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_ScaleType_in_rule_ContextVariable1876);
                    scaletype_2=this.rule_ScaleType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, scaletype_2.getTree());


                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:376:2: ( 'range' '{' range_3+= rule_Range ( ',' range_4+= rule_Range )* '}' )?
            var alt96=2;
            var LA96_0 = this.input.LA(1);

            if ( (LA96_0==86) ) {
                alt96=1;
            }
            switch (alt96) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:376:3: 'range' '{' range_3+= rule_Range ( ',' range_4+= rule_Range )* '}'
                    string_literal202=this.match(this.input,86,AutoExpParser.FOLLOW_86_in_rule_ContextVariable1882); 
                    string_literal202_tree = this.adaptor.create(string_literal202);
                    this.adaptor.addChild(root_0, string_literal202_tree);

                    char_literal203=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_ContextVariable1884); 
                    char_literal203_tree = this.adaptor.create(char_literal203);
                    this.adaptor.addChild(root_0, char_literal203_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Range_in_rule_ContextVariable1888);
                    range_3=this.rule_Range();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, range_3.getTree());
                    if (org.antlr.lang.isNull(list_range_3)) list_range_3 = [];
                    list_range_3.push(range_3.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:376:35: ( ',' range_4+= rule_Range )*
                    loop95:
                    do {
                        var alt95=2;
                        var LA95_0 = this.input.LA(1);

                        if ( (LA95_0==12) ) {
                            alt95=1;
                        }


                        switch (alt95) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:376:36: ',' range_4+= rule_Range
                            char_literal204=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_ContextVariable1891); 
                            char_literal204_tree = this.adaptor.create(char_literal204);
                            this.adaptor.addChild(root_0, char_literal204_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Range_in_rule_ContextVariable1895);
                            range_4=this.rule_Range();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, range_4.getTree());
                            if (org.antlr.lang.isNull(list_range_4)) list_range_4 = [];
                            list_range_4.push(range_4.getTree());



                            break;

                        default :
                            break loop95;
                        }
                    } while (true);

                    char_literal205=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ContextVariable1899); 
                    char_literal205_tree = this.adaptor.create(char_literal205);
                    this.adaptor.addChild(root_0, char_literal205_tree);



                    break;

            }

            char_literal206=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_ContextVariable1904); 
            char_literal206_tree = this.adaptor.create(char_literal206);
            this.adaptor.addChild(root_0, char_literal206_tree);




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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:381:1: rule_Range : name_0= ID ;
    // $ANTLR start "rule_Range"
    rule_Range: function() {
        var retval = new AutoExpParser.rule_Range_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;

        var name_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:381:12: (name_0= ID )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:383:2: name_0= ID
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Range1919); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:387:1: rule_Treatment : name_0= ID 'description' description_1= STRING 'factor' factor_2= ID ( 'parameters' '{' parameters_3+= rule_Parameter ( ',' parameters_4+= rule_Parameter )* '}' )? ( 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}' )? 'execution' execution_7= ID ;
    // $ANTLR start "rule_Treatment"
    rule_Treatment: function() {
        var retval = new AutoExpParser.rule_Treatment_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var description_1 = null;
        var factor_2 = null;
        var execution_7 = null;
        var string_literal207 = null;
        var string_literal208 = null;
        var string_literal209 = null;
        var char_literal210 = null;
        var char_literal211 = null;
        var char_literal212 = null;
        var string_literal213 = null;
        var char_literal214 = null;
        var char_literal215 = null;
        var char_literal216 = null;
        var string_literal217 = null;
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
        var string_literal207_tree=null;
        var string_literal208_tree=null;
        var string_literal209_tree=null;
        var char_literal210_tree=null;
        var char_literal211_tree=null;
        var char_literal212_tree=null;
        var string_literal213_tree=null;
        var char_literal214_tree=null;
        var char_literal215_tree=null;
        var char_literal216_tree=null;
        var string_literal217_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:387:16: (name_0= ID 'description' description_1= STRING 'factor' factor_2= ID ( 'parameters' '{' parameters_3+= rule_Parameter ( ',' parameters_4+= rule_Parameter )* '}' )? ( 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}' )? 'execution' execution_7= ID )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:388:2: name_0= ID 'description' description_1= STRING 'factor' factor_2= ID ( 'parameters' '{' parameters_3+= rule_Parameter ( ',' parameters_4+= rule_Parameter )* '}' )? ( 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}' )? 'execution' execution_7= ID
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Treatment1932); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            string_literal207=this.match(this.input,14,AutoExpParser.FOLLOW_14_in_rule_Treatment1935); 
            string_literal207_tree = this.adaptor.create(string_literal207);
            this.adaptor.addChild(root_0, string_literal207_tree);

            description_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Treatment1939); 
            description_1_tree = this.adaptor.create(description_1);
            this.adaptor.addChild(root_0, description_1_tree);

            string_literal208=this.match(this.input,87,AutoExpParser.FOLLOW_87_in_rule_Treatment1942); 
            string_literal208_tree = this.adaptor.create(string_literal208);
            this.adaptor.addChild(root_0, string_literal208_tree);

            factor_2=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Treatment1946); 
            factor_2_tree = this.adaptor.create(factor_2);
            this.adaptor.addChild(root_0, factor_2_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:391:2: ( 'parameters' '{' parameters_3+= rule_Parameter ( ',' parameters_4+= rule_Parameter )* '}' )?
            var alt98=2;
            var LA98_0 = this.input.LA(1);

            if ( (LA98_0==75) ) {
                alt98=1;
            }
            switch (alt98) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:391:3: 'parameters' '{' parameters_3+= rule_Parameter ( ',' parameters_4+= rule_Parameter )* '}'
                    string_literal209=this.match(this.input,75,AutoExpParser.FOLLOW_75_in_rule_Treatment1950); 
                    string_literal209_tree = this.adaptor.create(string_literal209);
                    this.adaptor.addChild(root_0, string_literal209_tree);

                    char_literal210=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Treatment1952); 
                    char_literal210_tree = this.adaptor.create(char_literal210);
                    this.adaptor.addChild(root_0, char_literal210_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_Parameter_in_rule_Treatment1956);
                    parameters_3=this.rule_Parameter();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, parameters_3.getTree());
                    if (org.antlr.lang.isNull(list_parameters_3)) list_parameters_3 = [];
                    list_parameters_3.push(parameters_3.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:391:49: ( ',' parameters_4+= rule_Parameter )*
                    loop97:
                    do {
                        var alt97=2;
                        var LA97_0 = this.input.LA(1);

                        if ( (LA97_0==12) ) {
                            alt97=1;
                        }


                        switch (alt97) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:391:50: ',' parameters_4+= rule_Parameter
                            char_literal211=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Treatment1959); 
                            char_literal211_tree = this.adaptor.create(char_literal211);
                            this.adaptor.addChild(root_0, char_literal211_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_Parameter_in_rule_Treatment1963);
                            parameters_4=this.rule_Parameter();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, parameters_4.getTree());
                            if (org.antlr.lang.isNull(list_parameters_4)) list_parameters_4 = [];
                            list_parameters_4.push(parameters_4.getTree());



                            break;

                        default :
                            break loop97;
                        }
                    } while (true);

                    char_literal212=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Treatment1967); 
                    char_literal212_tree = this.adaptor.create(char_literal212);
                    this.adaptor.addChild(root_0, char_literal212_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:392:2: ( 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}' )?
            var alt100=2;
            var LA100_0 = this.input.LA(1);

            if ( (LA100_0==72) ) {
                alt100=1;
            }
            switch (alt100) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:392:3: 'files' '{' files_5+= rule_File ( ',' files_6+= rule_File )* '}'
                    string_literal213=this.match(this.input,72,AutoExpParser.FOLLOW_72_in_rule_Treatment1973); 
                    string_literal213_tree = this.adaptor.create(string_literal213);
                    this.adaptor.addChild(root_0, string_literal213_tree);

                    char_literal214=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_Treatment1975); 
                    char_literal214_tree = this.adaptor.create(char_literal214);
                    this.adaptor.addChild(root_0, char_literal214_tree);

                    this.pushFollow(AutoExpParser.FOLLOW_rule_File_in_rule_Treatment1979);
                    files_5=this.rule_File();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, files_5.getTree());
                    if (org.antlr.lang.isNull(list_files_5)) list_files_5 = [];
                    list_files_5.push(files_5.getTree());

                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:392:34: ( ',' files_6+= rule_File )*
                    loop99:
                    do {
                        var alt99=2;
                        var LA99_0 = this.input.LA(1);

                        if ( (LA99_0==12) ) {
                            alt99=1;
                        }


                        switch (alt99) {
                        case 1 :
                            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:392:35: ',' files_6+= rule_File
                            char_literal215=this.match(this.input,12,AutoExpParser.FOLLOW_12_in_rule_Treatment1982); 
                            char_literal215_tree = this.adaptor.create(char_literal215);
                            this.adaptor.addChild(root_0, char_literal215_tree);

                            this.pushFollow(AutoExpParser.FOLLOW_rule_File_in_rule_Treatment1986);
                            files_6=this.rule_File();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, files_6.getTree());
                            if (org.antlr.lang.isNull(list_files_6)) list_files_6 = [];
                            list_files_6.push(files_6.getTree());



                            break;

                        default :
                            break loop99;
                        }
                    } while (true);

                    char_literal216=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_Treatment1990); 
                    char_literal216_tree = this.adaptor.create(char_literal216);
                    this.adaptor.addChild(root_0, char_literal216_tree);



                    break;

            }

            string_literal217=this.match(this.input,88,AutoExpParser.FOLLOW_88_in_rule_Treatment1995); 
            string_literal217_tree = this.adaptor.create(string_literal217);
            this.adaptor.addChild(root_0, string_literal217_tree);

            execution_7=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Treatment1999); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:397:1: rule_File : '{' 'name' name_0= STRING 'path' path_1= STRING '}' ;
    // $ANTLR start "rule_File"
    rule_File: function() {
        var retval = new AutoExpParser.rule_File_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var path_1 = null;
        var char_literal218 = null;
        var string_literal219 = null;
        var string_literal220 = null;
        var char_literal221 = null;

        var name_0_tree=null;
        var path_1_tree=null;
        var char_literal218_tree=null;
        var string_literal219_tree=null;
        var string_literal220_tree=null;
        var char_literal221_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:397:11: ( '{' 'name' name_0= STRING 'path' path_1= STRING '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:399:2: '{' 'name' name_0= STRING 'path' path_1= STRING '}'
            root_0 = this.adaptor.nil();

            char_literal218=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_File2012); 
            char_literal218_tree = this.adaptor.create(char_literal218);
            this.adaptor.addChild(root_0, char_literal218_tree);

            string_literal219=this.match(this.input,89,AutoExpParser.FOLLOW_89_in_rule_File2015); 
            string_literal219_tree = this.adaptor.create(string_literal219);
            this.adaptor.addChild(root_0, string_literal219_tree);

            name_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_File2019); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            string_literal220=this.match(this.input,90,AutoExpParser.FOLLOW_90_in_rule_File2022); 
            string_literal220_tree = this.adaptor.create(string_literal220);
            this.adaptor.addChild(root_0, string_literal220_tree);

            path_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_File2026); 
            path_1_tree = this.adaptor.create(path_1);
            this.adaptor.addChild(root_0, path_1_tree);

            char_literal221=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_File2029); 
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
    rule_Parameter_return: (function() {
        AutoExpParser.rule_Parameter_return = function(){};
        org.antlr.lang.extend(AutoExpParser.rule_Parameter_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:407:1: rule_Parameter : name_0= ID (value_1= STRING )? ;
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
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:407:16: (name_0= ID (value_1= STRING )? )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:409:2: name_0= ID (value_1= STRING )?
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Parameter2046); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:410:2: (value_1= STRING )?
            var alt101=2;
            var LA101_0 = this.input.LA(1);

            if ( (LA101_0==STRING) ) {
                alt101=1;
            }
            switch (alt101) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:410:3: value_1= STRING
                    value_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Parameter2052); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:414:1: rule_ExecutionParameter : (value_0= STRING )? ;
    // $ANTLR start "rule_ExecutionParameter"
    rule_ExecutionParameter: function() {
        var retval = new AutoExpParser.rule_ExecutionParameter_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var value_0 = null;

        var value_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:414:25: ( (value_0= STRING )? )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:416:2: (value_0= STRING )?
            root_0 = this.adaptor.nil();

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:416:2: (value_0= STRING )?
            var alt102=2;
            var LA102_0 = this.input.LA(1);

            if ( (LA102_0==STRING) ) {
                alt102=1;
            }
            switch (alt102) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:416:3: value_0= STRING
                    value_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_ExecutionParameter2070); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:420:1: rule_Artifact : name_0= ID (value_1= STRING )? ;
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
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:420:15: (name_0= ID (value_1= STRING )? )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:422:2: name_0= ID (value_1= STRING )?
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_Artifact2087); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:423:2: (value_1= STRING )?
            var alt103=2;
            var LA103_0 = this.input.LA(1);

            if ( (LA103_0==STRING) ) {
                alt103=1;
            }
            switch (alt103) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:423:3: value_1= STRING
                    value_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_Artifact2093); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:427:1: rule_ObjectGroup : name_0= ID ;
    // $ANTLR start "rule_ObjectGroup"
    rule_ObjectGroup: function() {
        var retval = new AutoExpParser.rule_ObjectGroup_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;

        var name_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:427:18: (name_0= ID )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:429:2: name_0= ID
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_ObjectGroup2110); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:433:1: rule_SimpleAbstract : (description_0= STRING ) ;
    // $ANTLR start "rule_SimpleAbstract"
    rule_SimpleAbstract: function() {
        var retval = new AutoExpParser.rule_SimpleAbstract_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var description_0 = null;

        var description_0_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:433:21: ( (description_0= STRING ) )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:435:2: (description_0= STRING )
            root_0 = this.adaptor.nil();

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:435:2: (description_0= STRING )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:435:3: description_0= STRING
            description_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_SimpleAbstract2126); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:440:1: rule_StructuredAbstract : '{' ( 'context' context_0= STRING )? ( 'objective' objective_1= STRING )? ( 'method' method_2= STRING )? ( 'results' results_3= STRING )? ( 'conclusion' conclusion_4= STRING )? '}' ;
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
        var char_literal222 = null;
        var string_literal223 = null;
        var string_literal224 = null;
        var string_literal225 = null;
        var string_literal226 = null;
        var string_literal227 = null;
        var char_literal228 = null;

        var context_0_tree=null;
        var objective_1_tree=null;
        var method_2_tree=null;
        var results_3_tree=null;
        var conclusion_4_tree=null;
        var char_literal222_tree=null;
        var string_literal223_tree=null;
        var string_literal224_tree=null;
        var string_literal225_tree=null;
        var string_literal226_tree=null;
        var string_literal227_tree=null;
        var char_literal228_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:440:25: ( '{' ( 'context' context_0= STRING )? ( 'objective' objective_1= STRING )? ( 'method' method_2= STRING )? ( 'results' results_3= STRING )? ( 'conclusion' conclusion_4= STRING )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:442:2: '{' ( 'context' context_0= STRING )? ( 'objective' objective_1= STRING )? ( 'method' method_2= STRING )? ( 'results' results_3= STRING )? ( 'conclusion' conclusion_4= STRING )? '}'
            root_0 = this.adaptor.nil();

            char_literal222=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_StructuredAbstract2142); 
            char_literal222_tree = this.adaptor.create(char_literal222);
            this.adaptor.addChild(root_0, char_literal222_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:443:2: ( 'context' context_0= STRING )?
            var alt104=2;
            var LA104_0 = this.input.LA(1);

            if ( (LA104_0==91) ) {
                alt104=1;
            }
            switch (alt104) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:443:3: 'context' context_0= STRING
                    string_literal223=this.match(this.input,91,AutoExpParser.FOLLOW_91_in_rule_StructuredAbstract2146); 
                    string_literal223_tree = this.adaptor.create(string_literal223);
                    this.adaptor.addChild(root_0, string_literal223_tree);

                    context_0=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_StructuredAbstract2150); 
                    context_0_tree = this.adaptor.create(context_0);
                    this.adaptor.addChild(root_0, context_0_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:444:2: ( 'objective' objective_1= STRING )?
            var alt105=2;
            var LA105_0 = this.input.LA(1);

            if ( (LA105_0==92) ) {
                alt105=1;
            }
            switch (alt105) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:444:3: 'objective' objective_1= STRING
                    string_literal224=this.match(this.input,92,AutoExpParser.FOLLOW_92_in_rule_StructuredAbstract2156); 
                    string_literal224_tree = this.adaptor.create(string_literal224);
                    this.adaptor.addChild(root_0, string_literal224_tree);

                    objective_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_StructuredAbstract2160); 
                    objective_1_tree = this.adaptor.create(objective_1);
                    this.adaptor.addChild(root_0, objective_1_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:445:2: ( 'method' method_2= STRING )?
            var alt106=2;
            var LA106_0 = this.input.LA(1);

            if ( (LA106_0==93) ) {
                alt106=1;
            }
            switch (alt106) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:445:3: 'method' method_2= STRING
                    string_literal225=this.match(this.input,93,AutoExpParser.FOLLOW_93_in_rule_StructuredAbstract2166); 
                    string_literal225_tree = this.adaptor.create(string_literal225);
                    this.adaptor.addChild(root_0, string_literal225_tree);

                    method_2=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_StructuredAbstract2170); 
                    method_2_tree = this.adaptor.create(method_2);
                    this.adaptor.addChild(root_0, method_2_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:446:2: ( 'results' results_3= STRING )?
            var alt107=2;
            var LA107_0 = this.input.LA(1);

            if ( (LA107_0==94) ) {
                alt107=1;
            }
            switch (alt107) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:446:3: 'results' results_3= STRING
                    string_literal226=this.match(this.input,94,AutoExpParser.FOLLOW_94_in_rule_StructuredAbstract2176); 
                    string_literal226_tree = this.adaptor.create(string_literal226);
                    this.adaptor.addChild(root_0, string_literal226_tree);

                    results_3=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_StructuredAbstract2180); 
                    results_3_tree = this.adaptor.create(results_3);
                    this.adaptor.addChild(root_0, results_3_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:447:2: ( 'conclusion' conclusion_4= STRING )?
            var alt108=2;
            var LA108_0 = this.input.LA(1);

            if ( (LA108_0==95) ) {
                alt108=1;
            }
            switch (alt108) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:447:3: 'conclusion' conclusion_4= STRING
                    string_literal227=this.match(this.input,95,AutoExpParser.FOLLOW_95_in_rule_StructuredAbstract2186); 
                    string_literal227_tree = this.adaptor.create(string_literal227);
                    this.adaptor.addChild(root_0, string_literal227_tree);

                    conclusion_4=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_StructuredAbstract2190); 
                    conclusion_4_tree = this.adaptor.create(conclusion_4);
                    this.adaptor.addChild(root_0, conclusion_4_tree);



                    break;

            }

            char_literal228=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_StructuredAbstract2195); 
            char_literal228_tree = this.adaptor.create(char_literal228);
            this.adaptor.addChild(root_0, char_literal228_tree);




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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:452:1: rule_SimpleGoal : name_0= ID description_1= STRING ;
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
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:452:17: (name_0= ID description_1= STRING )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:454:2: name_0= ID description_1= STRING
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_SimpleGoal2210); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            description_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_SimpleGoal2215); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:460:1: rule_StructuredGoal : name_0= ID '{' ( 'object' object_1= STRING )? ( 'technique' technique_2= STRING )? ( 'quality' quality_3= STRING )? ( 'ptView' ptview_4= STRING )? ( 'contextOf' contextof_5= STRING )? '}' ;
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
        var char_literal229 = null;
        var string_literal230 = null;
        var string_literal231 = null;
        var string_literal232 = null;
        var string_literal233 = null;
        var string_literal234 = null;
        var char_literal235 = null;

        var name_0_tree=null;
        var object_1_tree=null;
        var technique_2_tree=null;
        var quality_3_tree=null;
        var ptview_4_tree=null;
        var contextof_5_tree=null;
        var char_literal229_tree=null;
        var string_literal230_tree=null;
        var string_literal231_tree=null;
        var string_literal232_tree=null;
        var string_literal233_tree=null;
        var string_literal234_tree=null;
        var char_literal235_tree=null;

        try {
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:460:21: (name_0= ID '{' ( 'object' object_1= STRING )? ( 'technique' technique_2= STRING )? ( 'quality' quality_3= STRING )? ( 'ptView' ptview_4= STRING )? ( 'contextOf' contextof_5= STRING )? '}' )
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:462:2: name_0= ID '{' ( 'object' object_1= STRING )? ( 'technique' technique_2= STRING )? ( 'quality' quality_3= STRING )? ( 'ptView' ptview_4= STRING )? ( 'contextOf' contextof_5= STRING )? '}'
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,AutoExpParser.FOLLOW_ID_in_rule_StructuredGoal2232); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            char_literal229=this.match(this.input,10,AutoExpParser.FOLLOW_10_in_rule_StructuredGoal2235); 
            char_literal229_tree = this.adaptor.create(char_literal229);
            this.adaptor.addChild(root_0, char_literal229_tree);

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:464:2: ( 'object' object_1= STRING )?
            var alt109=2;
            var LA109_0 = this.input.LA(1);

            if ( (LA109_0==96) ) {
                alt109=1;
            }
            switch (alt109) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:464:3: 'object' object_1= STRING
                    string_literal230=this.match(this.input,96,AutoExpParser.FOLLOW_96_in_rule_StructuredGoal2239); 
                    string_literal230_tree = this.adaptor.create(string_literal230);
                    this.adaptor.addChild(root_0, string_literal230_tree);

                    object_1=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_StructuredGoal2243); 
                    object_1_tree = this.adaptor.create(object_1);
                    this.adaptor.addChild(root_0, object_1_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:465:2: ( 'technique' technique_2= STRING )?
            var alt110=2;
            var LA110_0 = this.input.LA(1);

            if ( (LA110_0==97) ) {
                alt110=1;
            }
            switch (alt110) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:465:3: 'technique' technique_2= STRING
                    string_literal231=this.match(this.input,97,AutoExpParser.FOLLOW_97_in_rule_StructuredGoal2249); 
                    string_literal231_tree = this.adaptor.create(string_literal231);
                    this.adaptor.addChild(root_0, string_literal231_tree);

                    technique_2=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_StructuredGoal2253); 
                    technique_2_tree = this.adaptor.create(technique_2);
                    this.adaptor.addChild(root_0, technique_2_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:466:2: ( 'quality' quality_3= STRING )?
            var alt111=2;
            var LA111_0 = this.input.LA(1);

            if ( (LA111_0==98) ) {
                alt111=1;
            }
            switch (alt111) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:466:3: 'quality' quality_3= STRING
                    string_literal232=this.match(this.input,98,AutoExpParser.FOLLOW_98_in_rule_StructuredGoal2259); 
                    string_literal232_tree = this.adaptor.create(string_literal232);
                    this.adaptor.addChild(root_0, string_literal232_tree);

                    quality_3=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_StructuredGoal2263); 
                    quality_3_tree = this.adaptor.create(quality_3);
                    this.adaptor.addChild(root_0, quality_3_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:467:2: ( 'ptView' ptview_4= STRING )?
            var alt112=2;
            var LA112_0 = this.input.LA(1);

            if ( (LA112_0==99) ) {
                alt112=1;
            }
            switch (alt112) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:467:3: 'ptView' ptview_4= STRING
                    string_literal233=this.match(this.input,99,AutoExpParser.FOLLOW_99_in_rule_StructuredGoal2269); 
                    string_literal233_tree = this.adaptor.create(string_literal233);
                    this.adaptor.addChild(root_0, string_literal233_tree);

                    ptview_4=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_StructuredGoal2273); 
                    ptview_4_tree = this.adaptor.create(ptview_4);
                    this.adaptor.addChild(root_0, ptview_4_tree);



                    break;

            }

            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:468:2: ( 'contextOf' contextof_5= STRING )?
            var alt113=2;
            var LA113_0 = this.input.LA(1);

            if ( (LA113_0==100) ) {
                alt113=1;
            }
            switch (alt113) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:468:3: 'contextOf' contextof_5= STRING
                    string_literal234=this.match(this.input,100,AutoExpParser.FOLLOW_100_in_rule_StructuredGoal2279); 
                    string_literal234_tree = this.adaptor.create(string_literal234);
                    this.adaptor.addChild(root_0, string_literal234_tree);

                    contextof_5=this.match(this.input,STRING,AutoExpParser.FOLLOW_STRING_in_rule_StructuredGoal2283); 
                    contextof_5_tree = this.adaptor.create(contextof_5);
                    this.adaptor.addChild(root_0, contextof_5_tree);



                    break;

            }

            char_literal235=this.match(this.input,13,AutoExpParser.FOLLOW_13_in_rule_StructuredGoal2288); 
            char_literal235_tree = this.adaptor.create(char_literal235);
            this.adaptor.addChild(root_0, char_literal235_tree);




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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:471:1: rule_DesignType : (fACTORIAL= 'FACTORIAL' | cRD= 'CRD' | rCBD= 'RCBD' | lS= 'LS' | oTHER= 'OTHER' );
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
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:471:16: (fACTORIAL= 'FACTORIAL' | cRD= 'CRD' | rCBD= 'RCBD' | lS= 'LS' | oTHER= 'OTHER' )
            var alt114=5;
            switch ( this.input.LA(1) ) {
            case 101:
                alt114=1;
                break;
            case 102:
                alt114=2;
                break;
            case 103:
                alt114=3;
                break;
            case 104:
                alt114=4;
                break;
            case 105:
                alt114=5;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 114, 0, this.input);

                throw nvae;
            }

            switch (alt114) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:472:2: fACTORIAL= 'FACTORIAL'
                    root_0 = this.adaptor.nil();

                    fACTORIAL=this.match(this.input,101,AutoExpParser.FOLLOW_101_in_rule_DesignType2298); 
                    fACTORIAL_tree = this.adaptor.create(fACTORIAL);
                    this.adaptor.addChild(root_0, fACTORIAL_tree);



                    break;
                case 2 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:472:26: cRD= 'CRD'
                    root_0 = this.adaptor.nil();

                    cRD=this.match(this.input,102,AutoExpParser.FOLLOW_102_in_rule_DesignType2304); 
                    cRD_tree = this.adaptor.create(cRD);
                    this.adaptor.addChild(root_0, cRD_tree);



                    break;
                case 3 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:472:38: rCBD= 'RCBD'
                    root_0 = this.adaptor.nil();

                    rCBD=this.match(this.input,103,AutoExpParser.FOLLOW_103_in_rule_DesignType2310); 
                    rCBD_tree = this.adaptor.create(rCBD);
                    this.adaptor.addChild(root_0, rCBD_tree);



                    break;
                case 4 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:472:52: lS= 'LS'
                    root_0 = this.adaptor.nil();

                    lS=this.match(this.input,104,AutoExpParser.FOLLOW_104_in_rule_DesignType2316); 
                    lS_tree = this.adaptor.create(lS);
                    this.adaptor.addChild(root_0, lS_tree);



                    break;
                case 5 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:472:62: oTHER= 'OTHER'
                    root_0 = this.adaptor.nil();

                    oTHER=this.match(this.input,105,AutoExpParser.FOLLOW_105_in_rule_DesignType2322); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:474:1: rule_ScaleType : (absolute= 'Absolute' | ratio= 'Ratio' | interval= 'Interval' | ordinal= 'Ordinal' | nominal= 'Nominal' );
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
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:474:15: (absolute= 'Absolute' | ratio= 'Ratio' | interval= 'Interval' | ordinal= 'Ordinal' | nominal= 'Nominal' )
            var alt115=5;
            switch ( this.input.LA(1) ) {
            case 106:
                alt115=1;
                break;
            case 107:
                alt115=2;
                break;
            case 108:
                alt115=3;
                break;
            case 109:
                alt115=4;
                break;
            case 110:
                alt115=5;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 115, 0, this.input);

                throw nvae;
            }

            switch (alt115) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:475:2: absolute= 'Absolute'
                    root_0 = this.adaptor.nil();

                    absolute=this.match(this.input,106,AutoExpParser.FOLLOW_106_in_rule_ScaleType2332); 
                    absolute_tree = this.adaptor.create(absolute);
                    this.adaptor.addChild(root_0, absolute_tree);



                    break;
                case 2 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:475:24: ratio= 'Ratio'
                    root_0 = this.adaptor.nil();

                    ratio=this.match(this.input,107,AutoExpParser.FOLLOW_107_in_rule_ScaleType2338); 
                    ratio_tree = this.adaptor.create(ratio);
                    this.adaptor.addChild(root_0, ratio_tree);



                    break;
                case 3 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:475:40: interval= 'Interval'
                    root_0 = this.adaptor.nil();

                    interval=this.match(this.input,108,AutoExpParser.FOLLOW_108_in_rule_ScaleType2344); 
                    interval_tree = this.adaptor.create(interval);
                    this.adaptor.addChild(root_0, interval_tree);



                    break;
                case 4 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:475:62: ordinal= 'Ordinal'
                    root_0 = this.adaptor.nil();

                    ordinal=this.match(this.input,109,AutoExpParser.FOLLOW_109_in_rule_ScaleType2350); 
                    ordinal_tree = this.adaptor.create(ordinal);
                    this.adaptor.addChild(root_0, ordinal_tree);



                    break;
                case 5 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:475:82: nominal= 'Nominal'
                    root_0 = this.adaptor.nil();

                    nominal=this.match(this.input,110,AutoExpParser.FOLLOW_110_in_rule_ScaleType2356); 
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

    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:477:1: rule_ThreatType : (iv= 'iv' | ev= 'ev' | c= 'c' | r= 'r' | cl= 'cl' );
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
            // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:477:16: (iv= 'iv' | ev= 'ev' | c= 'c' | r= 'r' | cl= 'cl' )
            var alt116=5;
            switch ( this.input.LA(1) ) {
            case 111:
                alt116=1;
                break;
            case 112:
                alt116=2;
                break;
            case 113:
                alt116=3;
                break;
            case 114:
                alt116=4;
                break;
            case 115:
                alt116=5;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 116, 0, this.input);

                throw nvae;
            }

            switch (alt116) {
                case 1 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:478:2: iv= 'iv'
                    root_0 = this.adaptor.nil();

                    iv=this.match(this.input,111,AutoExpParser.FOLLOW_111_in_rule_ThreatType2366); 
                    iv_tree = this.adaptor.create(iv);
                    this.adaptor.addChild(root_0, iv_tree);



                    break;
                case 2 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:478:12: ev= 'ev'
                    root_0 = this.adaptor.nil();

                    ev=this.match(this.input,112,AutoExpParser.FOLLOW_112_in_rule_ThreatType2372); 
                    ev_tree = this.adaptor.create(ev);
                    this.adaptor.addChild(root_0, ev_tree);



                    break;
                case 3 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:478:22: c= 'c'
                    root_0 = this.adaptor.nil();

                    c=this.match(this.input,113,AutoExpParser.FOLLOW_113_in_rule_ThreatType2378); 
                    c_tree = this.adaptor.create(c);
                    this.adaptor.addChild(root_0, c_tree);



                    break;
                case 4 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:478:30: r= 'r'
                    root_0 = this.adaptor.nil();

                    r=this.match(this.input,114,AutoExpParser.FOLLOW_114_in_rule_ThreatType2384); 
                    r_tree = this.adaptor.create(r);
                    this.adaptor.addChild(root_0, r_tree);



                    break;
                case 5 :
                    // /home/eneiascs/dsm-workspace/dsm-experiments/br.unb.autoexp.web/src-js/br/unb/autoexp/web/parser/AutoExp.g:478:38: cl= 'cl'
                    root_0 = this.adaptor.nil();

                    cl=this.match(this.input,115,AutoExpParser.FOLLOW_115_in_rule_ThreatType2390); 
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
    tokenNames: ["<invalid>", "<EOR>", "<DOWN>", "<UP>", "ID", "STRING", "INT", "COMMENT", "WS", "'Experiment'", "'{'", "'Authors'", "','", "'}'", "'description'", "'Abstract'", "'Keywords'", "'Goals'", "'Research Questions'", "'Research Hypotheses'", "'Threat'", "'Experimental Design'", "'Executions'", "'Analysis'", "'Infrastructure'", "'requirements'", "'preconditions'", "'clouds'", "'on-finish'", "'user'", "'username'", "'keys'", "'privateKey'", "'publicKey'", "'fingerprint'", "'cpu'", "'memory'", "'platform'", "'cost'", "'number-of-instances-per-cloud'", "'LINUX'", "'WINDOWS'", "'.'", "'regions'", "'instanceTypes'", "'provider'", "'maxResourcePerType'", "'serviceClass'", "'instances'", "'endpoint'", "'status'", "'city'", "'geographicRegion'", "'zones'", "'UP'", "'DOWN'", "'access-key'", "'secret-key'", "'NONE'", "'TERMINATE'", "'type'", "'runs'", "'Dependent Variables'", "'Factors'", "'Treatments'", "'Groups'", "'Objects'", "'Restrictions'", "'Context Variables'", "'objects'", "'command'", "'result'", "'files'", "'significance'", "'group'", "'parameters'", "'fullName'", "'institution'", "'email'", "'CA'", "'goal'", "'<'", "'='", "'!='", "'>'", "'scaleType'", "'range'", "'factor'", "'execution'", "'name'", "'path'", "'context'", "'objective'", "'method'", "'results'", "'conclusion'", "'object'", "'technique'", "'quality'", "'ptView'", "'contextOf'", "'FACTORIAL'", "'CRD'", "'RCBD'", "'LS'", "'OTHER'", "'Absolute'", "'Ratio'", "'Interval'", "'Ordinal'", "'Nominal'", "'iv'", "'ev'", "'c'", "'r'", "'cl'"],
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
    FOLLOW_rule_ExperimentalDesign_in_rule_Experiment257: new org.antlr.runtime.BitSet([0x01C02000, 0x00000000]),
    FOLLOW_22_in_rule_Experiment261: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Experiment263: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Execution_in_rule_Experiment267: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Experiment270: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Execution_in_rule_Experiment274: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Experiment278: new org.antlr.runtime.BitSet([0x01802000, 0x00000000]),
    FOLLOW_23_in_rule_Experiment284: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Analysis_in_rule_Experiment288: new org.antlr.runtime.BitSet([0x01002000, 0x00000000]),
    FOLLOW_24_in_rule_Experiment294: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_Infrastructure_in_rule_Experiment298: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Experiment303: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_10_in_rule_Infrastructure315: new org.antlr.runtime.BitSet([0x3E002000, 0x00000000]),
    FOLLOW_rule_User_in_rule_Infrastructure322: new org.antlr.runtime.BitSet([0x1E002000, 0x00000000]),
    FOLLOW_25_in_rule_Infrastructure329: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_Requirements_in_rule_Infrastructure333: new org.antlr.runtime.BitSet([0x1C002000, 0x00000000]),
    FOLLOW_26_in_rule_Infrastructure340: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_Preconditions_in_rule_Infrastructure344: new org.antlr.runtime.BitSet([0x18002000, 0x00000000]),
    FOLLOW_27_in_rule_Infrastructure351: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Infrastructure353: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_Cloud_in_rule_Infrastructure357: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Infrastructure361: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_Cloud_in_rule_Infrastructure365: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Infrastructure369: new org.antlr.runtime.BitSet([0x10002000, 0x00000000]),
    FOLLOW_28_in_rule_Infrastructure376: new org.antlr.runtime.BitSet([0x00000000, 0x0C000000]),
    FOLLOW_rule_OnFinishType_in_rule_Infrastructure380: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Infrastructure385: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_10_in_rule_Preconditions398: new org.antlr.runtime.BitSet([0x00002020, 0x00000000]),
    FOLLOW_STRING_in_rule_Preconditions405: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Preconditions409: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Preconditions413: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Preconditions420: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_29_in_rule_User431: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_User433: new org.antlr.runtime.BitSet([0x40000000, 0x00000000]),
    FOLLOW_30_in_rule_User437: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_User441: new org.antlr.runtime.BitSet([0x80002000, 0x00000000]),
    FOLLOW_31_in_rule_User446: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_User448: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_UserKey_in_rule_User452: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_User456: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_UserKey_in_rule_User460: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_User464: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_User472: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_rule_UserKey484: new org.antlr.runtime.BitSet([0x00000402, 0x00000000]),
    FOLLOW_10_in_rule_UserKey488: new org.antlr.runtime.BitSet([0x00002000, 0x00000007]),
    FOLLOW_32_in_rule_UserKey493: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_UserKey497: new org.antlr.runtime.BitSet([0x00002000, 0x00000006]),
    FOLLOW_33_in_rule_UserKey504: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_UserKey508: new org.antlr.runtime.BitSet([0x00002000, 0x00000004]),
    FOLLOW_34_in_rule_UserKey515: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_UserKey519: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_UserKey524: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_10_in_rule_Requirements537: new org.antlr.runtime.BitSet([0x00000000, 0x00000008]),
    FOLLOW_35_in_rule_Requirements540: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_INT_in_rule_Requirements544: new org.antlr.runtime.BitSet([0x00000000, 0x00000010]),
    FOLLOW_36_in_rule_Requirements547: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_INT_in_rule_Requirements551: new org.antlr.runtime.BitSet([0x00000000, 0x00000020]),
    FOLLOW_37_in_rule_Requirements554: new org.antlr.runtime.BitSet([0x00000000, 0x00000300]),
    FOLLOW_rule_PlatformType_in_rule_Requirements558: new org.antlr.runtime.BitSet([0x00000000, 0x00000040]),
    FOLLOW_38_in_rule_Requirements561: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_rule_BigDecimalType_in_rule_Requirements565: new org.antlr.runtime.BitSet([0x00000000, 0x00000080]),
    FOLLOW_39_in_rule_Requirements568: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_INT_in_rule_Requirements572: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Requirements575: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_rule_PlatformType588: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_INT_in_rule_BigDecimalType605: new org.antlr.runtime.BitSet([0x00000002, 0x00000400]),
    FOLLOW_42_in_rule_BigDecimalType608: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_INT_in_rule_BigDecimalType610: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_rule_Cloud624: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Cloud627: new org.antlr.runtime.BitSet([0x00000000, 0x00002000]),
    FOLLOW_rule_CloudProvider_in_rule_Cloud633: new org.antlr.runtime.BitSet([0x00000000, 0x01000000]),
    FOLLOW_rule_AccessKey_in_rule_Cloud639: new org.antlr.runtime.BitSet([0x00002000, 0x00001800]),
    FOLLOW_43_in_rule_Cloud643: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Cloud645: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_Region_in_rule_Cloud649: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Cloud653: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_Region_in_rule_Cloud657: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Cloud660: new org.antlr.runtime.BitSet([0x00002000, 0x00001000]),
    FOLLOW_44_in_rule_Cloud666: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Cloud668: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_InstanceType_in_rule_Cloud672: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Cloud676: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_InstanceType_in_rule_Cloud680: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Cloud683: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Cloud688: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_45_in_rule_CloudProvider700: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_CloudProvider704: new org.antlr.runtime.BitSet([0x00000402, 0x00000000]),
    FOLLOW_10_in_rule_CloudProvider708: new org.antlr.runtime.BitSet([0x00006000, 0x0000C000]),
    FOLLOW_46_in_rule_CloudProvider712: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_INT_in_rule_CloudProvider716: new org.antlr.runtime.BitSet([0x00006000, 0x00008000]),
    FOLLOW_14_in_rule_CloudProvider724: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_CloudProvider728: new org.antlr.runtime.BitSet([0x00002000, 0x00008000]),
    FOLLOW_47_in_rule_CloudProvider736: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_CloudProvider740: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_CloudProvider747: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_rule_InstanceType766: new org.antlr.runtime.BitSet([0x00000002, 0x00010000]),
    FOLLOW_48_in_rule_InstanceType770: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_INT_in_rule_InstanceType774: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_rule_Region789: new org.antlr.runtime.BitSet([0x00000402, 0x00000000]),
    FOLLOW_10_in_rule_Region793: new org.antlr.runtime.BitSet([0x00002000, 0x003E0000]),
    FOLLOW_49_in_rule_Region797: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Region801: new org.antlr.runtime.BitSet([0x00002000, 0x003C0000]),
    FOLLOW_50_in_rule_Region807: new org.antlr.runtime.BitSet([0x00000000, 0x00C00000]),
    FOLLOW_rule_StatusType_in_rule_Region811: new org.antlr.runtime.BitSet([0x00002000, 0x00380000]),
    FOLLOW_51_in_rule_Region817: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Region821: new org.antlr.runtime.BitSet([0x00002000, 0x00300000]),
    FOLLOW_52_in_rule_Region827: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_INT_in_rule_Region831: new org.antlr.runtime.BitSet([0x00002000, 0x00200000]),
    FOLLOW_53_in_rule_Region837: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Region839: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_Zone_in_rule_Region843: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Region847: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_rule_Zone_in_rule_Region851: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Region854: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Region859: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_rule_StatusType880: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_rule_Zone900: new org.antlr.runtime.BitSet([0x00000022, 0x00000000]),
    FOLLOW_STRING_in_rule_Zone906: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_56_in_rule_AccessKey920: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_AccessKey924: new org.antlr.runtime.BitSet([0x00000000, 0x02000000]),
    FOLLOW_57_in_rule_AccessKey927: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_AccessKey930: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_rule_OnFinishType957: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_rule_Abstract_Impl_in_rule_Abstract974: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_rule_SimpleAbstract_in_rule_Abstract978: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_rule_StructuredAbstract_in_rule_Abstract982: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_rule_Goal_Impl_in_rule_Goal993: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_rule_SimpleGoal_in_rule_Goal997: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_rule_StructuredGoal_in_rule_Goal1001: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_10_in_rule_ExperimentalDesign1012: new org.antlr.runtime.BitSet([0x00000000, 0x70000000]),
    FOLLOW_60_in_rule_ExperimentalDesign1016: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x000003E0]),
    FOLLOW_rule_DesignType_in_rule_ExperimentalDesign1020: new org.antlr.runtime.BitSet([0x00000000, 0x60000000]),
    FOLLOW_61_in_rule_ExperimentalDesign1026: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_INT_in_rule_ExperimentalDesign1030: new org.antlr.runtime.BitSet([0x00000000, 0x40000000]),
    FOLLOW_62_in_rule_ExperimentalDesign1038: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_ExperimentalDesign1040: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_CustomDependentVariable_in_rule_ExperimentalDesign1044: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_ExperimentalDesign1047: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_CustomDependentVariable_in_rule_ExperimentalDesign1051: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_ExperimentalDesign1055: new org.antlr.runtime.BitSet([0x00000000, 0x80000000]),
    FOLLOW_63_in_rule_ExperimentalDesign1058: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_ExperimentalDesign1060: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Factor_in_rule_ExperimentalDesign1064: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_ExperimentalDesign1067: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Factor_in_rule_ExperimentalDesign1071: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_ExperimentalDesign1075: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000001, 0x00000000]),
    FOLLOW_64_in_rule_ExperimentalDesign1078: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_ExperimentalDesign1080: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Treatment_in_rule_ExperimentalDesign1084: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_ExperimentalDesign1087: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Treatment_in_rule_ExperimentalDesign1091: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_ExperimentalDesign1095: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000006, 0x00000000]),
    FOLLOW_65_in_rule_ExperimentalDesign1099: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_ExperimentalDesign1101: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_ObjectGroup_in_rule_ExperimentalDesign1105: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_ExperimentalDesign1108: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_ObjectGroup_in_rule_ExperimentalDesign1112: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_ExperimentalDesign1116: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000004, 0x00000000]),
    FOLLOW_66_in_rule_ExperimentalDesign1121: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_ExperimentalDesign1123: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_ExperimentalObject_in_rule_ExperimentalDesign1127: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_ExperimentalDesign1130: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_ExperimentalObject_in_rule_ExperimentalDesign1134: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_ExperimentalDesign1138: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000018, 0x00000000]),
    FOLLOW_67_in_rule_ExperimentalDesign1142: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_ExperimentalDesign1144: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Restriction_in_rule_ExperimentalDesign1148: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_ExperimentalDesign1151: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Restriction_in_rule_ExperimentalDesign1155: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_ExperimentalDesign1159: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000010, 0x00000000]),
    FOLLOW_68_in_rule_ExperimentalDesign1167: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_ExperimentalDesign1169: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_ContextVariable_in_rule_ExperimentalDesign1173: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_ExperimentalDesign1176: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_ContextVariable_in_rule_ExperimentalDesign1180: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_ExperimentalDesign1184: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_ExperimentalDesign1189: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Restriction1202: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000020, 0x00000000]),
    FOLLOW_69_in_rule_Restriction1204: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Restriction1206: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_Restriction1210: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Restriction1213: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_Restriction1217: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Restriction1221: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Execution1236: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Execution1239: new org.antlr.runtime.BitSet([0x04002000, 0x00000000,0x000001C0, 0x00000000]),
    FOLLOW_70_in_rule_Execution1243: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Execution1247: new org.antlr.runtime.BitSet([0x04002000, 0x00000000,0x00000180, 0x00000000]),
    FOLLOW_26_in_rule_Execution1253: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_Preconditions_in_rule_Execution1257: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000180, 0x00000000]),
    FOLLOW_71_in_rule_Execution1263: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_File_in_rule_Execution1267: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000100, 0x00000000]),
    FOLLOW_72_in_rule_Execution1273: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Execution1275: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_File_in_rule_Execution1279: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Execution1282: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_File_in_rule_Execution1286: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Execution1290: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Execution1295: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Analysis1310: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Analysis1313: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000200, 0x00000000]),
    FOLLOW_73_in_rule_Analysis1317: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_rule_BigDecimalType_in_rule_Analysis1321: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Analysis1326: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_ExperimentalObject1341: new org.antlr.runtime.BitSet([0x00004000, 0x00000000]),
    FOLLOW_14_in_rule_ExperimentalObject1344: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_ExperimentalObject1348: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000D00, 0x00000000]),
    FOLLOW_74_in_rule_ExperimentalObject1352: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_ExperimentalObject1356: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000900, 0x00000000]),
    FOLLOW_75_in_rule_ExperimentalObject1362: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_ExperimentalObject1364: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Parameter_in_rule_ExperimentalObject1368: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_ExperimentalObject1371: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Parameter_in_rule_ExperimentalObject1375: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_ExperimentalObject1379: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000100, 0x00000000]),
    FOLLOW_72_in_rule_ExperimentalObject1385: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_ExperimentalObject1387: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_File_in_rule_ExperimentalObject1391: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_ExperimentalObject1394: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_File_in_rule_ExperimentalObject1398: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_ExperimentalObject1402: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Author1429: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Author1432: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00007000, 0x00000000]),
    FOLLOW_76_in_rule_Author1436: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Author1440: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00006000, 0x00000000]),
    FOLLOW_77_in_rule_Author1446: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Author1450: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00004000, 0x00000000]),
    FOLLOW_78_in_rule_Author1456: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Author1460: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Author1467: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_rule_Keyword1482: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Threat1499: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Threat1502: new org.antlr.runtime.BitSet([0x00006000, 0x10000000,0x00008000, 0x00000000]),
    FOLLOW_14_in_rule_Threat1506: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Threat1510: new org.antlr.runtime.BitSet([0x00002000, 0x10000000,0x00008000, 0x00000000]),
    FOLLOW_60_in_rule_Threat1516: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x000F8000]),
    FOLLOW_rule_ThreatType_in_rule_Threat1520: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00008000, 0x00000000]),
    FOLLOW_79_in_rule_Threat1526: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Threat1530: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Threat1535: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Goal_Impl1550: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_ResearchQuestion1565: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_ResearchQuestion1568: new org.antlr.runtime.BitSet([0x00006000, 0x00000000,0x00010000, 0x00000000]),
    FOLLOW_14_in_rule_ResearchQuestion1572: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_ResearchQuestion1576: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00010000, 0x00000000]),
    FOLLOW_80_in_rule_ResearchQuestion1582: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_ResearchQuestion1586: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_ResearchQuestion1591: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_ResearchHypothesis1606: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_ResearchHypothesis1609: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_ResearchHypothesisFormula_in_rule_ResearchHypothesis1614: new org.antlr.runtime.BitSet([0x00006000, 0x00000000,0x00010000, 0x00000000]),
    FOLLOW_14_in_rule_ResearchHypothesis1618: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_ResearchHypothesis1622: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00010000, 0x00000000]),
    FOLLOW_80_in_rule_ResearchHypothesis1628: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_ResearchHypothesis1632: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_ResearchHypothesis1637: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_ResearchHypothesisFormula1652: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_ResearchHypothesisFormula1656: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x001E0000, 0x00000000]),
    FOLLOW_rule_OperatorType_in_rule_ResearchHypothesisFormula1660: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_ResearchHypothesisFormula1664: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_rule_OperatorType1676: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_rule_DependentVariable_Impl_in_rule_DependentVariable1700: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_rule_BuiltinDependentVariable_in_rule_DependentVariable1702: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_rule_CustomDependentVariable_in_rule_DependentVariable1704: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_DependentVariable_Impl1720: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_rule_BuiltinDependentVariable1735: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_CustomDependentVariable1756: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_CustomDependentVariable1759: new org.antlr.runtime.BitSet([0x00004000, 0x00000000]),
    FOLLOW_14_in_rule_CustomDependentVariable1762: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_CustomDependentVariable1766: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00600000, 0x00000000]),
    FOLLOW_85_in_rule_CustomDependentVariable1770: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00007C00]),
    FOLLOW_rule_ScaleType_in_rule_CustomDependentVariable1774: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00400000, 0x00000000]),
    FOLLOW_86_in_rule_CustomDependentVariable1780: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_CustomDependentVariable1782: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Range_in_rule_CustomDependentVariable1786: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_CustomDependentVariable1789: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Range_in_rule_CustomDependentVariable1793: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_CustomDependentVariable1797: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_CustomDependentVariable1802: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Factor1817: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Factor1820: new org.antlr.runtime.BitSet([0x00004000, 0x00000000]),
    FOLLOW_14_in_rule_Factor1823: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Factor1827: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00200000, 0x00000000]),
    FOLLOW_85_in_rule_Factor1831: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00007C00]),
    FOLLOW_rule_ScaleType_in_rule_Factor1835: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_Factor1840: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_ContextVariable1855: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_ContextVariable1858: new org.antlr.runtime.BitSet([0x00006000, 0x00000000,0x00600000, 0x00000000]),
    FOLLOW_14_in_rule_ContextVariable1862: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_ContextVariable1866: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00600000, 0x00000000]),
    FOLLOW_85_in_rule_ContextVariable1872: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00007C00]),
    FOLLOW_rule_ScaleType_in_rule_ContextVariable1876: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00400000, 0x00000000]),
    FOLLOW_86_in_rule_ContextVariable1882: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_ContextVariable1884: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Range_in_rule_ContextVariable1888: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_ContextVariable1891: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Range_in_rule_ContextVariable1895: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_ContextVariable1899: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_ContextVariable1904: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Range1919: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Treatment1932: new org.antlr.runtime.BitSet([0x00004000, 0x00000000]),
    FOLLOW_14_in_rule_Treatment1935: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_Treatment1939: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00800000, 0x00000000]),
    FOLLOW_87_in_rule_Treatment1942: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_Treatment1946: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01000900, 0x00000000]),
    FOLLOW_75_in_rule_Treatment1950: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Treatment1952: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Parameter_in_rule_Treatment1956: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Treatment1959: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Parameter_in_rule_Treatment1963: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Treatment1967: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01000100, 0x00000000]),
    FOLLOW_72_in_rule_Treatment1973: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_Treatment1975: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_File_in_rule_Treatment1979: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Treatment1982: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_rule_File_in_rule_Treatment1986: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_13_in_rule_Treatment1990: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01000000, 0x00000000]),
    FOLLOW_88_in_rule_Treatment1995: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_Treatment1999: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_10_in_rule_File2012: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x02000000, 0x00000000]),
    FOLLOW_89_in_rule_File2015: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_File2019: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x04000000, 0x00000000]),
    FOLLOW_90_in_rule_File2022: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_File2026: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_File2029: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Parameter2046: new org.antlr.runtime.BitSet([0x00000022, 0x00000000]),
    FOLLOW_STRING_in_rule_Parameter2052: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_rule_ExecutionParameter2070: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Artifact2087: new org.antlr.runtime.BitSet([0x00000022, 0x00000000]),
    FOLLOW_STRING_in_rule_Artifact2093: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_ObjectGroup2110: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_rule_SimpleAbstract2126: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_10_in_rule_StructuredAbstract2142: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0xF8000000, 0x00000000]),
    FOLLOW_91_in_rule_StructuredAbstract2146: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_StructuredAbstract2150: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0xF0000000, 0x00000000]),
    FOLLOW_92_in_rule_StructuredAbstract2156: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_StructuredAbstract2160: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0xE0000000, 0x00000000]),
    FOLLOW_93_in_rule_StructuredAbstract2166: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_StructuredAbstract2170: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0xC0000000, 0x00000000]),
    FOLLOW_94_in_rule_StructuredAbstract2176: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_StructuredAbstract2180: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x80000000, 0x00000000]),
    FOLLOW_95_in_rule_StructuredAbstract2186: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_StructuredAbstract2190: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_StructuredAbstract2195: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_SimpleGoal2210: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_SimpleGoal2215: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_StructuredGoal2232: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_10_in_rule_StructuredGoal2235: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000000, 0x0000001F]),
    FOLLOW_96_in_rule_StructuredGoal2239: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_StructuredGoal2243: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000000, 0x0000001E]),
    FOLLOW_97_in_rule_StructuredGoal2249: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_StructuredGoal2253: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000000, 0x0000001C]),
    FOLLOW_98_in_rule_StructuredGoal2259: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_StructuredGoal2263: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000000, 0x00000018]),
    FOLLOW_99_in_rule_StructuredGoal2269: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_StructuredGoal2273: new org.antlr.runtime.BitSet([0x00002000, 0x00000000,0x00000000, 0x00000010]),
    FOLLOW_100_in_rule_StructuredGoal2279: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_STRING_in_rule_StructuredGoal2283: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_13_in_rule_StructuredGoal2288: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_101_in_rule_DesignType2298: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_102_in_rule_DesignType2304: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_103_in_rule_DesignType2310: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_104_in_rule_DesignType2316: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_105_in_rule_DesignType2322: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_106_in_rule_ScaleType2332: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_107_in_rule_ScaleType2338: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_108_in_rule_ScaleType2344: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_109_in_rule_ScaleType2350: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_110_in_rule_ScaleType2356: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_111_in_rule_ThreatType2366: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_112_in_rule_ThreatType2372: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_113_in_rule_ThreatType2378: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_114_in_rule_ThreatType2384: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_115_in_rule_ThreatType2390: new org.antlr.runtime.BitSet([0x00000002, 0x00000000])
});

})();