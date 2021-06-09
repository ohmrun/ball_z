@:jsRequire("cookies") extern class Cookies {
	@:overload(function(request:node.http.IncomingMessage, response:node.http.ServerResponse, options:Array<String>):Cookies { })
	@:overload(function(request:node.http.IncomingMessage, response:node.http.ServerResponse, options:Keygrip):Cookies { })
	function new(request:node.http.IncomingMessage, response:node.http.ServerResponse, ?options:cookies.Option);
	static var value(get, never) : cookies.CookiesFunction;
	static inline function get_value():cookies.CookiesFunction return cast Cookies;
	var secure : Bool;
	var request : node.http.IncomingMessage;
	var response : node.http.ServerResponse;
	/**
		This extracts the cookie with the given name from the
		Cookie header in the request. If such a cookie exists,
		its value is returned. Otherwise, nothing is returned.
	**/
	function get(name:String, ?opts:cookies.GetOption):Null<String>;
	/**
		This sets the given cookie in the response and returns
		the current context to allow chaining.If the value is omitted,
		an outbound header with an expired date is used to delete the cookie.
	**/
	function set(name:String, ?value:String, ?opts:cookies.SetOption):Cookies;
	@:overload(function(request:node.http.IncomingMessage, response:node.http.ServerResponse, options:Array<String>):Cookies { })
	@:overload(function(request:node.http.IncomingMessage, response:node.http.ServerResponse, options:Keygrip):Cookies { })
	@:selfCall
	static function call(request:node.http.IncomingMessage, response:node.http.ServerResponse, ?options:cookies.Option):Cookies;
	static var Cookie : { };
	static function express(keys:ts.AnyOf2<Array<String>, Keygrip>):express.Handler;
	static function connect(keys:ts.AnyOf2<Array<String>, Keygrip>):connect.NextHandleFunction;
}