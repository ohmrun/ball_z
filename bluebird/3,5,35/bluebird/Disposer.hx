package bluebird;

/**
	returned by `Bluebird.disposer()`.
**/
@:jsRequire("bluebird", "Disposer") extern class Disposer<R> {
	function new();
	static var prototype : Disposer<Dynamic>;
}