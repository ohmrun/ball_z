package events;

@:jsRequire("events", "EventEmitter") extern class EventEmitter {
	function new();
	function eventNames():Array<ts.AnyOf2<String, Float>>;
	function setMaxListeners(n:Float):EventEmitter;
	function getMaxListeners():Float;
	function emit(type:ts.AnyOf2<String, Float>, args:haxe.extern.Rest<Dynamic>):Bool;
	function addListener(type:ts.AnyOf2<String, Float>, listener:Listener):EventEmitter;
	function on(type:ts.AnyOf2<String, Float>, listener:Listener):EventEmitter;
	function once(type:ts.AnyOf2<String, Float>, listener:Listener):EventEmitter;
	function prependListener(type:ts.AnyOf2<String, Float>, listener:Listener):EventEmitter;
	function prependOnceListener(type:ts.AnyOf2<String, Float>, listener:Listener):EventEmitter;
	function removeListener(type:ts.AnyOf2<String, Float>, listener:Listener):EventEmitter;
	function off(type:ts.AnyOf2<String, Float>, listener:Listener):EventEmitter;
	function removeAllListeners(?type:ts.AnyOf2<String, Float>):EventEmitter;
	function listeners(type:ts.AnyOf2<String, Float>):Array<Listener>;
	function listenerCount(type:ts.AnyOf2<String, Float>):Float;
	function rawListeners(type:ts.AnyOf2<String, Float>):Array<Listener>;
	static var prototype : EventEmitter;
	@:native("listenerCount")
	static function listenerCount_(emitter:EventEmitter, type:ts.AnyOf2<String, Float>):Float;
	static var defaultMaxListeners : Float;
}