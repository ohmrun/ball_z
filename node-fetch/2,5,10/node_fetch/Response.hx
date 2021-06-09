package node_fetch;

@:jsRequire("node-fetch", "Response") extern class Response extends Body {
	function new(?body:BodyInit, ?init:ResponseInit);
	function clone():Response;
	var headers : Headers;
	var ok : Bool;
	var redirected : Bool;
	var status : Float;
	var statusText : String;
	var type : ResponseType;
	var url : String;
	static var prototype : Response;
	static function error():Response;
	static function redirect(url:String, status:Float):Response;
}