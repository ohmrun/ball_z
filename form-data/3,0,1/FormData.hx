@:jsRequire("form-data") extern class FormData extends node.stream.Readable {
	function new(?options:form_data.Options);
	function append(key:String, value:Dynamic, ?options:ts.AnyOf2<String, form_data.AppendOptions>):Void;
	function getHeaders(?userHeaders:form_data.Headers):form_data.Headers;
	function submit(params:ts.AnyOf2<String, form_data.SubmitOptions>, ?callback:(error:Null<js.lib.Error>, response:node.http.IncomingMessage) -> Void):node.http.ClientRequest;
	function getBuffer():global.Buffer;
	function setBoundary(boundary:String):Void;
	function getBoundary():String;
	function getLength(callback:(err:Null<js.lib.Error>, length:Float) -> Void):Void;
	function getLengthSync():Float;
	function hasKnownLength():Bool;
	function setEncoding(encoding:global.BufferEncoding):FormData;
	function pause():FormData;
	function resume():FormData;
	function unpipe(?destination:global.nodejs.WritableStream):FormData;
	function wrap(oldStream:global.nodejs.ReadableStream):FormData;
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
	@:overload(function(event:String, listener:(chunk:Dynamic) -> Void):FormData { })
	@:overload(function(event:String, listener:() -> Void):FormData { })
	@:overload(function(event:String, listener:(err:js.lib.Error) -> Void):FormData { })
	@:overload(function(event:String, listener:() -> Void):FormData { })
	@:overload(function(event:String, listener:() -> Void):FormData { })
	@:overload(function(event:String, listener:() -> Void):FormData { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):FormData { })
	function addListener(event:String, listener:() -> Void):FormData;
	@:overload(function(event:String, listener:(chunk:Dynamic) -> Void):FormData { })
	@:overload(function(event:String, listener:() -> Void):FormData { })
	@:overload(function(event:String, listener:(err:js.lib.Error) -> Void):FormData { })
	@:overload(function(event:String, listener:() -> Void):FormData { })
	@:overload(function(event:String, listener:() -> Void):FormData { })
	@:overload(function(event:String, listener:() -> Void):FormData { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):FormData { })
	function on(event:String, listener:() -> Void):FormData;
	@:overload(function(event:String, listener:(chunk:Dynamic) -> Void):FormData { })
	@:overload(function(event:String, listener:() -> Void):FormData { })
	@:overload(function(event:String, listener:(err:js.lib.Error) -> Void):FormData { })
	@:overload(function(event:String, listener:() -> Void):FormData { })
	@:overload(function(event:String, listener:() -> Void):FormData { })
	@:overload(function(event:String, listener:() -> Void):FormData { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):FormData { })
	function once(event:String, listener:() -> Void):FormData;
	@:overload(function(event:String, listener:(chunk:Dynamic) -> Void):FormData { })
	@:overload(function(event:String, listener:() -> Void):FormData { })
	@:overload(function(event:String, listener:(err:js.lib.Error) -> Void):FormData { })
	@:overload(function(event:String, listener:() -> Void):FormData { })
	@:overload(function(event:String, listener:() -> Void):FormData { })
	@:overload(function(event:String, listener:() -> Void):FormData { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):FormData { })
	function prependListener(event:String, listener:() -> Void):FormData;
	@:overload(function(event:String, listener:(chunk:Dynamic) -> Void):FormData { })
	@:overload(function(event:String, listener:() -> Void):FormData { })
	@:overload(function(event:String, listener:(err:js.lib.Error) -> Void):FormData { })
	@:overload(function(event:String, listener:() -> Void):FormData { })
	@:overload(function(event:String, listener:() -> Void):FormData { })
	@:overload(function(event:String, listener:() -> Void):FormData { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):FormData { })
	function prependOnceListener(event:String, listener:() -> Void):FormData;
	@:overload(function(event:String, listener:(chunk:Dynamic) -> Void):FormData { })
	@:overload(function(event:String, listener:() -> Void):FormData { })
	@:overload(function(event:String, listener:(err:js.lib.Error) -> Void):FormData { })
	@:overload(function(event:String, listener:() -> Void):FormData { })
	@:overload(function(event:String, listener:() -> Void):FormData { })
	@:overload(function(event:String, listener:() -> Void):FormData { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):FormData { })
	function removeListener(event:String, listener:() -> Void):FormData;
	function off(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):FormData;
	function removeAllListeners(?event:ts.AnyOf2<String, js.lib.Symbol>):FormData;
	function setMaxListeners(n:Float):FormData;
	static var prototype : FormData;
}