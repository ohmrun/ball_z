package knex;

typedef ChainableInterface<T> = {
	function toQuery():String;
	function options(options:{ }):ChainableInterface<T>;
	function connection(connection:Dynamic):ChainableInterface<T>;
	function debug(enabled:Bool):ChainableInterface<T>;
	function transacting(trx:Transaction<Dynamic, Dynamic>):ChainableInterface<T>;
	@:overload(function(options:{ }, handler:(readable:node.stream.PassThrough) -> Dynamic):js.lib.Promise<Dynamic> { })
	@:overload(function(?options:{ }):node.stream.PassThrough { })
	function stream(handler:(readable:node.stream.PassThrough) -> Dynamic):js.lib.Promise<Dynamic>;
	function pipe<T>(writable:T, ?options:{ }):node.stream.PassThrough;
	function asCallback(callback:haxe.Constraints.Function):ChainableInterface<T>;
	/**
		Attaches callbacks for the resolution and/or rejection of the Promise.
	**/
	function then<TResult1, TResult2>(?onfulfilled:(value:T) -> ts.AnyOf2<js.lib.PromiseLike<TResult1>, TResult1>, ?onrejected:(reason:Dynamic) -> ts.AnyOf2<js.lib.PromiseLike<TResult2>, TResult2>):js.lib.Promise<ts.AnyOf2<TResult1, TResult2>>;
	/**
		Attaches a callback for only the rejection of the Promise.
	**/
	@:native("catch")
	function catch_<TResult>(?onrejected:(reason:Dynamic) -> ts.AnyOf2<js.lib.PromiseLike<TResult>, TResult>):js.lib.Promise<ts.AnyOf2<T, TResult>>;
	/**
		Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		resolved value cannot be modified from the callback.
	**/
	function finally(?onfinally:() -> Void):js.lib.Promise<T>;
};