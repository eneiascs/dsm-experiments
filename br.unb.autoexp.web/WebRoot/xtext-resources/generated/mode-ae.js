define(["ace/lib/oop", "ace/mode/text", "ace/mode/text_highlight_rules"], function(oop, mText, mTextHighlightRules) {
	var HighlightRules = function() {
		var keywords = "Absolute|Abstract|Analysis|Authors|CA|CRD|DOWN|Executions|Experiment|FACTORIAL|Factors|Goals|Groups|Infrastructure|Interval|Keywords|LINUX|LS|NONE|Nominal|OTHER|Objects|Ordinal|RCBD|Ratio|TERMINATE|Threat|Treatments|UP|WINDOWS|c|city|cl|clouds|command|conclusion|context|contextOf|cost|cpu|description|email|endpoint|ev|execution|factor|files|fingerprint|fullName|geographicRegion|goal|group|instanceTypes|instances|institution|iv|keys|maxResourcePerType|memory|method|name|object|objective|parameters|path|platform|preconditions|privateKey|provider|ptView|publicKey|quality|r|range|regions|requirements|result|results|runs|scaleType|serviceClass|significance|status|technique|type|user|username|zones";
		this.$rules = {
			"start": [
				{token: "comment", regex: "\\/\\/.*$"},
				{token: "comment", regex: "\\/\\*", next : "comment"},
				{token: "string", regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},
				{token: "string", regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},
				{token: "constant.numeric", regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},
				{token: "lparen", regex: "[{]"},
				{token: "rparen", regex: "[}]"},
				{token: "keyword", regex: "\\b(?:" + keywords + ")\\b"}
			],
			"comment": [
				{token: "comment", regex: ".*?\\*\\/", next : "start"},
				{token: "comment", regex: ".+"}
			]
		};
	};
	oop.inherits(HighlightRules, mTextHighlightRules.TextHighlightRules);
	
	var Mode = function() {
		this.HighlightRules = HighlightRules;
	};
	oop.inherits(Mode, mText.Mode);
	Mode.prototype.$id = "xtext/ae";
	Mode.prototype.getCompletions = function(state, session, pos, prefix) {
		return [];
	}
	
	return {
		Mode: Mode
	};
});
