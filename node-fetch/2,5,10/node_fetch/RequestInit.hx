package node_fetch;

typedef RequestInit = {
	@:optional
	var body : BodyInit;
	@:optional
	var headers : HeadersInit;
	@:optional
	var method : String;
	@:optional
	var redirect : RequestRedirect;
	@:optional
	var signal : node_fetch.externals.AbortSignal;
	@:optional
	var agent : ts.AnyOf2<node.http.Agent, (parsedUrl:node.url.URL) -> node.http.Agent>;
	@:optional
	var compress : Bool;
	@:optional
	var follow : Float;
	@:optional
	var size : Float;
	@:optional
	var timeout : Float;
};