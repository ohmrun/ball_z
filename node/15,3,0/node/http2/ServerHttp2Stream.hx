package node.http2;

typedef ServerHttp2Stream = {
	final headersSent : Bool;
	final pushAllowed : Bool;
	function additionalHeaders(headers:node.http.OutgoingHttpHeaders):Void;
	@:overload(function(headers:node.http.OutgoingHttpHeaders, ?options:StreamPriorityOptions, ?callback:(err:Null<js.lib.Error>, pushStream:ServerHttp2Stream, headers:node.http.OutgoingHttpHeaders) -> Void):Void { })
	function pushStream(headers:node.http.OutgoingHttpHeaders, ?callback:(err:Null<js.lib.Error>, pushStream:ServerHttp2Stream, headers:node.http.OutgoingHttpHeaders) -> Void):Void;
	function respond(?headers:node.http.OutgoingHttpHeaders, ?options:ServerStreamResponseOptions):Void;
	function respondWithFD(fd:ts.AnyOf2<Float, node.fs.promises.FileHandle>, ?headers:node.http.OutgoingHttpHeaders, ?options:ServerStreamFileResponseOptions):Void;
	function respondWithFile(path:String, ?headers:node.http.OutgoingHttpHeaders, ?options:ServerStreamFileResponseOptionsWithError):Void;
	final aborted : Bool;
	final bufferSize : Float;
	final closed : Bool;
	final destroyed : Bool;
	/**
		Set the true if the END_STREAM flag was set in the request or response HEADERS frame received,
		indicating that no additional data should be received and the readable side of the Http2Stream will be closed.
	**/
	final endAfterHeaders : Bool;
	@:optional
	final id : Float;
	final pending : Bool;
	final rstCode : Float;
	final sentHeaders : node.http.OutgoingHttpHeaders;
	@:optional
	final sentInfoHeaders : Array<node.http.OutgoingHttpHeaders>;
	@:optional
	final sentTrailers : node.http.OutgoingHttpHeaders;
	final session : Http2Session;
	final state : StreamState;
	function close(?code:Float, ?callback:() -> Void):Void;
	function priority(options:StreamPriorityOptions):Void;
	function setTimeout(msecs:Float, ?callback:() -> Void):Void;
	function sendTrailers(headers:node.http.OutgoingHttpHeaders):Void;
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
		
		Event emitter
		The defined events on documents including:
		1. close
		2. data
		3. end
		4. error
		5. pause
		6. readable
		7. resume
		
		Event emitter
		The defined events on documents including:
		1. close
		2. data
		3. end
		4. error
		5. pause
		6. readable
		7. resume
		
		Event emitter
		The defined events on documents including:
		1. close
		2. data
		3. end
		4. error
		5. pause
		6. readable
		7. resume
		
		Event emitter
		The defined events on documents including:
		1. close
		2. data
		3. end
		4. error
		5. pause
		6. readable
		7. resume
		
		Event emitter
		The defined events on documents including:
		1. close
		2. data
		3. end
		4. error
		5. pause
		6. readable
		7. resume
		
		Event emitter
		The defined events on documents including:
		1. close
		2. data
		3. end
		4. error
		5. pause
		6. readable
		7. resume
		
		Event emitter
		The defined events on documents including:
		1. close
		2. data
		3. end
		4. error
		5. pause
		6. readable
		7. resume
		
		Event emitter
		The defined events on documents including:
		1. close
		2. data
		3. end
		4. error
		5. pause
		6. readable
		7. resume
		
		Event emitter
		The defined events on documents including:
		1. close
		2. data
		3. end
		4. error
		5. pause
		6. readable
		7. resume
		
		Event emitter
		The defined events on documents including:
		1. close
		2. data
		3. end
		4. error
		5. pause
		6. readable
		7. resume
		
		Event emitter
		The defined events on documents including:
		1. close
		2. data
		3. end
		4. error
		5. pause
		6. readable
		7. resume
		
		Event emitter
		The defined events on documents including:
		1. close
		2. data
		3. end
		4. error
		5. pause
		6. readable
		7. resume
		
		Event emitter
		The defined events on documents including:
		1. close
		2. data
		3. end
		4. error
		5. pause
		6. readable
		7. resume
		
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
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(chunk:ts.AnyOf2<String, global.Buffer>) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(err:js.lib.Error) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(frameType:Float, errorCode:Float) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(src:node.stream.Readable) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(src:node.stream.Readable) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(code:Float) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(trailers:IncomingHttpHeaders, flags:Float) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):ServerHttp2Stream { })
	function addListener(event:String, listener:() -> Void):ServerHttp2Stream;
	@:overload(function(event:String):Bool { })
	@:overload(function(event:String, chunk:ts.AnyOf2<String, global.Buffer>):Bool { })
	@:overload(function(event:String):Bool { })
	@:overload(function(event:String):Bool { })
	@:overload(function(event:String, err:js.lib.Error):Bool { })
	@:overload(function(event:String):Bool { })
	@:overload(function(event:String, frameType:Float, errorCode:Float):Bool { })
	@:overload(function(event:String, src:node.stream.Readable):Bool { })
	@:overload(function(event:String, src:node.stream.Readable):Bool { })
	@:overload(function(event:String, code:Float):Bool { })
	@:overload(function(event:String):Bool { })
	@:overload(function(event:String, trailers:IncomingHttpHeaders, flags:Float):Bool { })
	@:overload(function(event:String):Bool { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, args:haxe.extern.Rest<Dynamic>):Bool { })
	function emit(event:String):Bool;
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(chunk:ts.AnyOf2<String, global.Buffer>) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(err:js.lib.Error) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(frameType:Float, errorCode:Float) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(src:node.stream.Readable) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(src:node.stream.Readable) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(code:Float) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(trailers:IncomingHttpHeaders, flags:Float) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):ServerHttp2Stream { })
	function on(event:String, listener:() -> Void):ServerHttp2Stream;
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(chunk:ts.AnyOf2<String, global.Buffer>) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(err:js.lib.Error) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(frameType:Float, errorCode:Float) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(src:node.stream.Readable) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(src:node.stream.Readable) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(code:Float) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(trailers:IncomingHttpHeaders, flags:Float) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):ServerHttp2Stream { })
	function once(event:String, listener:() -> Void):ServerHttp2Stream;
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(chunk:ts.AnyOf2<String, global.Buffer>) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(err:js.lib.Error) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(frameType:Float, errorCode:Float) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(src:node.stream.Readable) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(src:node.stream.Readable) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(code:Float) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(trailers:IncomingHttpHeaders, flags:Float) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):ServerHttp2Stream { })
	function prependListener(event:String, listener:() -> Void):ServerHttp2Stream;
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(chunk:ts.AnyOf2<String, global.Buffer>) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(err:js.lib.Error) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(frameType:Float, errorCode:Float) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(src:node.stream.Readable) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(src:node.stream.Readable) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(code:Float) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(trailers:IncomingHttpHeaders, flags:Float) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):ServerHttp2Stream { })
	function prependOnceListener(event:String, listener:() -> Void):ServerHttp2Stream;
	final writable : Bool;
	final writableEnded : Bool;
	final writableFinished : Bool;
	final writableHighWaterMark : Float;
	final writableLength : Float;
	final writableObjectMode : Bool;
	final writableCorked : Float;
	function _write(chunk:Dynamic, encoding:global.BufferEncoding, callback:ts.AnyOf2<() -> Void, (error:js.lib.Error) -> Void>):Void;
	@:optional
	function _writev(chunks:Array<{ var chunk : Dynamic; var encoding : global.BufferEncoding; }>, callback:ts.AnyOf2<() -> Void, (error:js.lib.Error) -> Void>):Void;
	function _destroy(error:Null<js.lib.Error>, callback:(error:Null<js.lib.Error>) -> Void):Void;
	function _final(callback:ts.AnyOf2<() -> Void, (error:js.lib.Error) -> Void>):Void;
	@:overload(function(chunk:Dynamic, ?cb:(error:Null<js.lib.Error>) -> Void):Bool { })
	function write(chunk:Dynamic, ?encoding:global.BufferEncoding, ?cb:(error:Null<js.lib.Error>) -> Void):Bool;
	function setDefaultEncoding(encoding:global.BufferEncoding):ServerHttp2Stream;
	@:overload(function(chunk:Dynamic, ?cb:() -> Void):Void { })
	@:overload(function(chunk:Dynamic, ?encoding:global.BufferEncoding, ?cb:() -> Void):Void { })
	function end(?cb:() -> Void):Void;
	function cork():Void;
	function uncork():Void;
	var readable : Bool;
	final readableEncoding : Null<global.BufferEncoding>;
	final readableEnded : Bool;
	final readableFlowing : Null<Bool>;
	final readableHighWaterMark : Float;
	final readableLength : Float;
	final readableObjectMode : Bool;
	@:optional
	function _construct(callback:ts.AnyOf2<() -> Void, (error:js.lib.Error) -> Void>):Void;
	function _read(size:Float):Void;
	function read(?size:Float):Dynamic;
	function setEncoding(encoding:global.BufferEncoding):ServerHttp2Stream;
	function pause():ServerHttp2Stream;
	function resume():ServerHttp2Stream;
	function isPaused():Bool;
	function unpipe(?destination:global.nodejs.WritableStream):ServerHttp2Stream;
	function unshift(chunk:Dynamic, ?encoding:global.BufferEncoding):Void;
	function wrap(oldStream:global.nodejs.ReadableStream):ServerHttp2Stream;
	function push(chunk:Dynamic, ?encoding:global.BufferEncoding):Bool;
	function destroy(?error:js.lib.Error):Void;
	@:overload(function(event:String, listener:(chunk:Dynamic) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:(err:js.lib.Error) -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:String, listener:() -> Void):ServerHttp2Stream { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):ServerHttp2Stream { })
	function removeListener(event:String, listener:() -> Void):ServerHttp2Stream;
	function pipe<T>(destination:T, ?options:{ @:optional var end : Bool; }):T;
	function off(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):ServerHttp2Stream;
	function removeAllListeners(?event:ts.AnyOf2<String, js.lib.Symbol>):ServerHttp2Stream;
	function setMaxListeners(n:Float):ServerHttp2Stream;
	function getMaxListeners():Float;
	function listeners(event:ts.AnyOf2<String, js.lib.Symbol>):Array<haxe.Constraints.Function>;
	function rawListeners(event:ts.AnyOf2<String, js.lib.Symbol>):Array<haxe.Constraints.Function>;
	function listenerCount(event:ts.AnyOf2<String, js.lib.Symbol>):Float;
	function eventNames():Array<ts.AnyOf2<String, js.lib.Symbol>>;
};