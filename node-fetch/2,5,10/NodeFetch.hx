@:jsRequire("node-fetch") @valueModuleOnly extern class NodeFetch {
	@:native("default")
	static function default_(url:node_fetch.RequestInfo, ?init:node_fetch.RequestInit):js.lib.Promise<node_fetch.Response>;
}