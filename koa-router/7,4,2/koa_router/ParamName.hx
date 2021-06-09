package koa_router;

@:jsRequire("koa-router", "ParamName") extern class ParamName {
	function new();
	var asterisk : Bool;
	var delimiter : String;
	var name : String;
	var optional : Bool;
	var partial : Bool;
	var pattern : String;
	var prefix : String;
	var repeat : String;
	static var prototype : ParamName;
}