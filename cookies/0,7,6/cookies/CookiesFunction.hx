package cookies;

typedef CookiesFunction = {
	@:overload(function(request:node.http.IncomingMessage, response:node.http.ServerResponse, options:Array<String>):Cookies { })
	@:overload(function(request:node.http.IncomingMessage, response:node.http.ServerResponse, options:Keygrip):Cookies { })
	@:selfCall
	function call(request:node.http.IncomingMessage, response:node.http.ServerResponse, ?options:Option):Cookies;
	var Cookie : { };
	function express(keys:ts.AnyOf2<Array<String>, Keygrip>):express.Handler;
	function connect(keys:ts.AnyOf2<Array<String>, Keygrip>):connect.NextHandleFunction;
};