package node.fs;

/**
	Asynchronous stat(2) - Get file status.
**/
@:jsRequire("fs", "stat") @valueModuleOnly extern class Stat {
	/**
		Asynchronous stat(2) - Get file status.
	**/
	@:overload(function(path:PathLike, options:Null<Dynamic>, callback:(err:Null<global.nodejs.ErrnoException>, stats:Stats) -> Void):Void { })
	@:overload(function(path:PathLike, options:Dynamic, callback:(err:Null<global.nodejs.ErrnoException>, stats:BigIntStats) -> Void):Void { })
	@:overload(function(path:PathLike, options:Null<StatOptions>, callback:(err:Null<global.nodejs.ErrnoException>, stats:ts.AnyOf2<Stats, BigIntStats>) -> Void):Void { })
	@:selfCall
	static function call(path:PathLike, callback:(err:Null<global.nodejs.ErrnoException>, stats:Stats) -> Void):Void;
}