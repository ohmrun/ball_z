package node_fetch;

@:jsRequire("node-fetch", "default") @valueModuleOnly extern class Fetch {
	@:selfCall
	static function call(url:RequestInfo, ?init:RequestInit):js.lib.Promise<Response>;
	static function isRedirect(code:Float):Bool;
}