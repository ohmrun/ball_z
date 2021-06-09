package node_fetch;

@:jsRequire("node-fetch", "Request") extern class Request extends Body {
	function new(input:RequestInfo, ?init:RequestInit);
	function clone():Request;
	var context : RequestContext;
	var headers : Headers;
	var method : String;
	var redirect : RequestRedirect;
	var referrer : String;
	var url : String;
	@:optional
	var agent : ts.AnyOf2<node.http.Agent, (parsedUrl:node.url.URL) -> node.http.Agent>;
	var compress : Bool;
	var counter : Float;
	var follow : Float;
	var hostname : String;
	@:optional
	var port : Float;
	var protocol : String;
	static var prototype : Request;
}