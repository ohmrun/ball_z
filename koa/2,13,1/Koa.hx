@:jsRequire("koa") extern class Koa<StateT, ContextT> extends node.Events {
	function new();
	var proxy : Bool;
	var proxyIpHeader : String;
	var maxIpsCount : Float;
	var middleware : Array<koa_compose.Middleware<koa.ParameterizedContext<StateT, ContextT, Dynamic>>>;
	var subdomainOffset : Float;
	var env : String;
	var context : Dynamic;
	var request : koa.BaseRequest;
	var response : koa.BaseResponse;
	var silent : Bool;
	var keys : ts.AnyOf2<Array<String>, Keygrip>;
	/**
		Shorthand for:
		
		    http.createServer(app.callback()).listen(...)
	**/
	@:overload(function(port:Float, ?hostname:String, ?listeningListener:() -> Void):node.http.Server { })
	@:overload(function(port:Float, ?backlog:Float, ?listeningListener:() -> Void):node.http.Server { })
	@:overload(function(port:Float, ?listeningListener:() -> Void):node.http.Server { })
	@:overload(function(path:String, ?backlog:Float, ?listeningListener:() -> Void):node.http.Server { })
	@:overload(function(path:String, ?listeningListener:() -> Void):node.http.Server { })
	@:overload(function(options:node.net.ListenOptions, ?listeningListener:() -> Void):node.http.Server { })
	@:overload(function(handle:Dynamic, ?backlog:Float, ?listeningListener:() -> Void):node.http.Server { })
	@:overload(function(handle:Dynamic, ?listeningListener:() -> Void):node.http.Server { })
	function listen(?port:Float, ?hostname:String, ?backlog:Float, ?listeningListener:() -> Void):node.http.Server;
	/**
		Return JSON representation.
		We only bother showing settings.
	**/
	function inspect():Dynamic;
	/**
		Return JSON representation.
		We only bother showing settings.
	**/
	function toJSON():Dynamic;
	/**
		Use the given middleware `fn`.
		
		Old-style middleware will be converted.
	**/
	function use<NewStateT, NewContextT>(middleware:koa_compose.Middleware<koa.ParameterizedContext<Dynamic, Dynamic, Dynamic>>):Koa<Dynamic, Dynamic>;
	/**
		Return a request handler callback
		for node's native http/http2 server.
	**/
	function callback():(req:ts.AnyOf2<node.http.IncomingMessage, node.http2.Http2ServerRequest>, res:ts.AnyOf2<node.http.ServerResponse, node.http2.Http2ServerResponse>) -> Void;
	/**
		Initialize a new context.
	**/
	function createContext<StateT>(req:node.http.IncomingMessage, res:node.http.ServerResponse):koa.ParameterizedContext<StateT, koa.DefaultContext, Any>;
	/**
		Default error handler.
	**/
	function onerror(err:js.lib.Error):Void;
	function addListener(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):Koa<StateT, ContextT>;
	function on(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):Koa<StateT, ContextT>;
	function once(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):Koa<StateT, ContextT>;
	function removeListener(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):Koa<StateT, ContextT>;
	function off(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):Koa<StateT, ContextT>;
	function removeAllListeners(?event:ts.AnyOf2<String, js.lib.Symbol>):Koa<StateT, ContextT>;
	function setMaxListeners(n:Float):Koa<StateT, ContextT>;
	function prependListener(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):Koa<StateT, ContextT>;
	function prependOnceListener(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):Koa<StateT, ContextT>;
	static var prototype : Koa<Dynamic, Dynamic>;
}