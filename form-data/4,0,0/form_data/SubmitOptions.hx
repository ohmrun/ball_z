package form_data;

typedef SubmitOptions = {
	@:optional
	var protocol : String;
	@:optional
	var abort : js.html.AbortSignal;
	@:optional
	var host : String;
	@:optional
	var hostname : String;
	@:optional
	var family : Float;
	@:optional
	var port : ts.AnyOf2<String, Float>;
	@:optional
	var defaultPort : ts.AnyOf2<String, Float>;
	@:optional
	var localAddress : String;
	@:optional
	var socketPath : String;
	@:optional
	var maxHeaderSize : Float;
	@:optional
	var method : String;
	@:optional
	var path : String;
	@:optional
	var headers : node.http.OutgoingHttpHeaders;
	@:optional
	var auth : String;
	@:optional
	var agent : ts.AnyOf2<Bool, node.http.Agent>;
	@:optional
	var _defaultAgent : node.http.Agent;
	@:optional
	var timeout : Float;
	@:optional
	var setHost : Bool;
	@:optional
	dynamic function createConnection(options:node.http.ClientRequestArgs, oncreate:(err:js.lib.Error, socket:node.net.Socket) -> Void):node.net.Socket;
};