package node_fetch;

@:jsRequire("node-fetch", "FetchError") extern class FetchError extends js.lib.Error {
	function new(message:String, type:String, ?systemError:SystemError);
	var type : String;
	@:optional
	var code : String;
	@:optional
	var errno : String;
	static var prototype : FetchError;
}