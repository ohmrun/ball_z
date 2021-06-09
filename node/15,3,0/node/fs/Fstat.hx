package node.fs;

/**
	Asynchronous fstat(2) - Get file status.
**/
@:jsRequire("fs", "fstat") @valueModuleOnly extern class Fstat {
	/**
		Asynchronous fstat(2) - Get file status.
	**/
	@:overload(function(fd:Float, options:Null<Dynamic>, callback:(err:Null<global.nodejs.ErrnoException>, stats:Stats) -> Void):Void { })
	@:overload(function(fd:Float, options:Dynamic, callback:(err:Null<global.nodejs.ErrnoException>, stats:BigIntStats) -> Void):Void { })
	@:overload(function(fd:Float, options:Null<StatOptions>, callback:(err:Null<global.nodejs.ErrnoException>, stats:ts.AnyOf2<Stats, BigIntStats>) -> Void):Void { })
	@:selfCall
	static function call(fd:Float, callback:(err:Null<global.nodejs.ErrnoException>, stats:Stats) -> Void):Void;
}