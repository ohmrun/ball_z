package form_data;

typedef Options = {
	@:optional
	var writable : Bool;
	@:optional
	var readable : Bool;
	@:optional
	var dataSize : Float;
	@:optional
	var maxDataSize : Float;
	@:optional
	var pauseStreams : Bool;
	@:optional
	var highWaterMark : Float;
	@:optional
	var encoding : String;
	@:optional
	var objectMode : Bool;
	@:optional
	function read(size:Float):Void;
	@:optional
	function destroy(error:Null<js.lib.Error>, callback:(error:Null<js.lib.Error>) -> Void):Void;
	@:optional
	var autoDestroy : Bool;
};