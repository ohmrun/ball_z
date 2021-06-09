package node_fetch;

@:jsRequire("node-fetch", "Body") extern class Body {
	function new(?body:Dynamic, ?opts:{ @:optional var size : Float; @:optional var timeout : Float; });
	function arrayBuffer():js.lib.Promise<js.lib.ArrayBuffer>;
	function blob():js.lib.Promise<Blob>;
	var body : global.nodejs.ReadableStream;
	var bodyUsed : Bool;
	function buffer():js.lib.Promise<global.Buffer>;
	function json():js.lib.Promise<Dynamic>;
	var size : Float;
	function text():js.lib.Promise<String>;
	function textConverted():js.lib.Promise<String>;
	var timeout : Float;
	static var prototype : Body;
}