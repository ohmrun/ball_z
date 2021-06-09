package node.fs;

/**
	Asynchronous lstat(2) - Get file status. Does not dereference symbolic links.
**/
@:jsRequire("fs", "lstat") @valueModuleOnly extern class Lstat {
	/**
		Asynchronous lstat(2) - Get file status. Does not dereference symbolic links.
	**/
	@:overload(function(path:PathLike, options:Null<Dynamic>, callback:(err:Null<global.nodejs.ErrnoException>, stats:Stats) -> Void):Void { })
	@:overload(function(path:PathLike, options:Dynamic, callback:(err:Null<global.nodejs.ErrnoException>, stats:BigIntStats) -> Void):Void { })
	@:overload(function(path:PathLike, options:Null<StatOptions>, callback:(err:Null<global.nodejs.ErrnoException>, stats:ts.AnyOf2<Stats, BigIntStats>) -> Void):Void { })
	@:selfCall
	static function call(path:PathLike, callback:(err:Null<global.nodejs.ErrnoException>, stats:Stats) -> Void):Void;
}