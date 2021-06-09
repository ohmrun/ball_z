@:jsRequire("keygrip") extern class Keygrip {
	function new(keys:haxe.ds.ReadOnlyArray<String>, ?algorithm:String, ?encoding:String);
	static var value(get, never) : keygrip.KeygripFunction;
	static inline function get_value():keygrip.KeygripFunction return cast Keygrip;
	function sign(data:Dynamic):String;
	function verify(data:Dynamic, digest:String):Bool;
	function index(data:Dynamic, digest:String):Float;
	@:selfCall
	static function call(keys:haxe.ds.ReadOnlyArray<String>, ?algorithm:String, ?encoding:String):Keygrip;
}