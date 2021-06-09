package formidable.parsers.index;

@:jsRequire("formidable/parsers/index", "StreamingQuerystring") extern class StreamingQuerystring extends QuerystringParser {
	function new();
	function emitField(key:String, ?val:String):Void;
	function getSection(buffer:global.Buffer, i:Float):String;
	function setDefaultEncoding(encoding:global.BufferEncoding):StreamingQuerystring;
	function setEncoding(encoding:global.BufferEncoding):StreamingQuerystring;
	function pause():StreamingQuerystring;
	function resume():StreamingQuerystring;
	function unpipe(?destination:global.nodejs.WritableStream):StreamingQuerystring;
	function wrap(oldStream:global.nodejs.ReadableStream):StreamingQuerystring;
	/**
		Event emitter
		The defined events on documents including:
		1. close
		2. data
		3. end
		4. error
		5. pause
		6. readable
		7. resume
	**/
	@:overload(function(event:String, listener:(chunk:Dynamic) -> Void):StreamingQuerystring { })
	@:overload(function(event:String, listener:() -> Void):StreamingQuerystring { })
	@:overload(function(event:String, listener:(err:js.lib.Error) -> Void):StreamingQuerystring { })
	@:overload(function(event:String, listener:() -> Void):StreamingQuerystring { })
	@:overload(function(event:String, listener:() -> Void):StreamingQuerystring { })
	@:overload(function(event:String, listener:() -> Void):StreamingQuerystring { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):StreamingQuerystring { })
	function addListener(event:String, listener:() -> Void):StreamingQuerystring;
	@:overload(function(event:String, listener:(chunk:Dynamic) -> Void):StreamingQuerystring { })
	@:overload(function(event:String, listener:() -> Void):StreamingQuerystring { })
	@:overload(function(event:String, listener:(err:js.lib.Error) -> Void):StreamingQuerystring { })
	@:overload(function(event:String, listener:() -> Void):StreamingQuerystring { })
	@:overload(function(event:String, listener:() -> Void):StreamingQuerystring { })
	@:overload(function(event:String, listener:() -> Void):StreamingQuerystring { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):StreamingQuerystring { })
	function on(event:String, listener:() -> Void):StreamingQuerystring;
	@:overload(function(event:String, listener:(chunk:Dynamic) -> Void):StreamingQuerystring { })
	@:overload(function(event:String, listener:() -> Void):StreamingQuerystring { })
	@:overload(function(event:String, listener:(err:js.lib.Error) -> Void):StreamingQuerystring { })
	@:overload(function(event:String, listener:() -> Void):StreamingQuerystring { })
	@:overload(function(event:String, listener:() -> Void):StreamingQuerystring { })
	@:overload(function(event:String, listener:() -> Void):StreamingQuerystring { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):StreamingQuerystring { })
	function once(event:String, listener:() -> Void):StreamingQuerystring;
	@:overload(function(event:String, listener:(chunk:Dynamic) -> Void):StreamingQuerystring { })
	@:overload(function(event:String, listener:() -> Void):StreamingQuerystring { })
	@:overload(function(event:String, listener:(err:js.lib.Error) -> Void):StreamingQuerystring { })
	@:overload(function(event:String, listener:() -> Void):StreamingQuerystring { })
	@:overload(function(event:String, listener:() -> Void):StreamingQuerystring { })
	@:overload(function(event:String, listener:() -> Void):StreamingQuerystring { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):StreamingQuerystring { })
	function prependListener(event:String, listener:() -> Void):StreamingQuerystring;
	@:overload(function(event:String, listener:(chunk:Dynamic) -> Void):StreamingQuerystring { })
	@:overload(function(event:String, listener:() -> Void):StreamingQuerystring { })
	@:overload(function(event:String, listener:(err:js.lib.Error) -> Void):StreamingQuerystring { })
	@:overload(function(event:String, listener:() -> Void):StreamingQuerystring { })
	@:overload(function(event:String, listener:() -> Void):StreamingQuerystring { })
	@:overload(function(event:String, listener:() -> Void):StreamingQuerystring { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):StreamingQuerystring { })
	function prependOnceListener(event:String, listener:() -> Void):StreamingQuerystring;
	@:overload(function(event:String, listener:(chunk:Dynamic) -> Void):StreamingQuerystring { })
	@:overload(function(event:String, listener:() -> Void):StreamingQuerystring { })
	@:overload(function(event:String, listener:(err:js.lib.Error) -> Void):StreamingQuerystring { })
	@:overload(function(event:String, listener:() -> Void):StreamingQuerystring { })
	@:overload(function(event:String, listener:() -> Void):StreamingQuerystring { })
	@:overload(function(event:String, listener:() -> Void):StreamingQuerystring { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):StreamingQuerystring { })
	function removeListener(event:String, listener:() -> Void):StreamingQuerystring;
	function off(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):StreamingQuerystring;
	function removeAllListeners(?event:ts.AnyOf2<String, js.lib.Symbol>):StreamingQuerystring;
	function setMaxListeners(n:Float):StreamingQuerystring;
	static var prototype : StreamingQuerystring;
}