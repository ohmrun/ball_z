package knex;

@:jsRequire("knex", "Client") extern class Client extends node.Events {
	function new(config:Config);
	var config : Config;
	var dialect : String;
	var driverName : String;
	var connectionSettings : Dynamic;
	function acquireRawConnection():js.lib.Promise<Dynamic>;
	function destroyRawConnection(connection:Dynamic):js.lib.Promise<Void>;
	function validateConnection(connection:Dynamic):js.lib.Promise<Bool>;
	function addListener(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):Client;
	function on(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):Client;
	function once(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):Client;
	function removeListener(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):Client;
	function off(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):Client;
	function removeAllListeners(?event:ts.AnyOf2<String, js.lib.Symbol>):Client;
	function setMaxListeners(n:Float):Client;
	function prependListener(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):Client;
	function prependOnceListener(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):Client;
	static var prototype : Client;
}