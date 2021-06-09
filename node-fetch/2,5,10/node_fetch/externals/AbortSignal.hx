package node_fetch.externals;

typedef AbortSignal = {
	var aborted : Bool;
	dynamic function addEventListener(type:String, listener:(event:Dynamic) -> Dynamic, ?options:ts.AnyOf2<Bool, { @:optional var capture : Bool; @:optional var once : Bool; @:optional var passive : Bool; }>):Void;
	dynamic function removeEventListener(type:String, listener:(event:Dynamic) -> Dynamic, ?options:ts.AnyOf2<Bool, { @:optional var capture : Bool; }>):Void;
	dynamic function dispatchEvent(event:Dynamic):Bool;
	@:optional
	dynamic function onabort(event:Dynamic):Void;
};