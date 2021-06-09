package formidable;

@:jsRequire("formidable/PersistentFile") extern class PersistentFile extends node.Events {
	function new(properties:File_);
	function open():Void;
	function toJSON():FileJSON;
	/**
		Returns a string representation of an object.
	**/
	function toString():String;
	function write(buffer:String, cb:() -> Void):Void;
	function end(cb:() -> Void):Void;
	function destroy():Void;
	function addListener(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):PersistentFile;
	function on(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):PersistentFile;
	function once(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):PersistentFile;
	function removeListener(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):PersistentFile;
	function off(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):PersistentFile;
	function removeAllListeners(?event:ts.AnyOf2<String, js.lib.Symbol>):PersistentFile;
	function setMaxListeners(n:Float):PersistentFile;
	function prependListener(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):PersistentFile;
	function prependOnceListener(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):PersistentFile;
	static var prototype : PersistentFile;
}