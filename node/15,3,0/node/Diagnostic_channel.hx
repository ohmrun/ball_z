package node;

@:jsRequire("diagnostic_channel") @valueModuleOnly extern class Diagnostic_channel {
	/**
		Returns wether a named channel has subscribers or not.
	**/
	static function hasSubscribers(name:String):Bool;
	/**
		Gets or create a diagnostic channel by name.
	**/
	static function channel(name:String):node.diagnostic_channel.Channel;
}