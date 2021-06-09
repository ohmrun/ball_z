package node_fetch;

@:jsRequire("node-fetch", "Headers") extern class Headers {
	function new(?init:HeadersInit);
	function forEach(callback:(value:String, name:String) -> Void):Void;
	function append(name:String, value:String):Void;
	function delete(name:String):Void;
	function get(name:String):Null<String>;
	function has(name:String):Bool;
	function raw():{ };
	function set(name:String, value:String):Void;
	function entries():js.lib.IterableIterator<ts.Tuple2<String, String>>;
	function keys():js.lib.IterableIterator<String>;
	function values():js.lib.IterableIterator<ts.Tuple1<String>>;
	static var prototype : Headers;
}