package node.dns;

@:jsRequire("dns", "resolveCaa") @valueModuleOnly extern class ResolveCaa {
	@:selfCall
	static function call(hostname:String, callback:(err:Null<global.nodejs.ErrnoException>, records:Array<CaaRecord>) -> Void):Void;
}