package knex;

typedef Raw<TResult> = {
	function wrap<TResult2>(before:String, after:String):Raw<TResult>;
	function toSQL():Sql;
	function queryContext(context:Dynamic):Raw<TResult>;
	function addListener(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):Raw<TResult>;
	function on(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):Raw<TResult>;
	function once(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):Raw<TResult>;
	function removeListener(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):Raw<TResult>;
	function off(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):Raw<TResult>;
	function removeAllListeners(?event:ts.AnyOf2<String, js.lib.Symbol>):Raw<TResult>;
	function setMaxListeners(n:Float):Raw<TResult>;
	function getMaxListeners():Float;
	function listeners(event:ts.AnyOf2<String, js.lib.Symbol>):Array<haxe.Constraints.Function>;
	function rawListeners(event:ts.AnyOf2<String, js.lib.Symbol>):Array<haxe.Constraints.Function>;
	function emit(event:ts.AnyOf2<String, js.lib.Symbol>, args:haxe.extern.Rest<Dynamic>):Bool;
	function listenerCount(event:ts.AnyOf2<String, js.lib.Symbol>):Float;
	function prependListener(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):Raw<TResult>;
	function prependOnceListener(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):Raw<TResult>;
	function eventNames():Array<ts.AnyOf2<String, js.lib.Symbol>>;
	function toQuery():String;
	function options(options:{ }):Raw<TResult>;
	function connection(connection:Dynamic):Raw<TResult>;
	function debug(enabled:Bool):Raw<TResult>;
	function transacting(trx:Transaction<Dynamic, Dynamic>):Raw<TResult>;
	@:overload(function(options:{ }, handler:(readable:node.stream.PassThrough) -> Dynamic):js.lib.Promise<Dynamic> { })
	@:overload(function(?options:{ }):node.stream.PassThrough { })
	function stream(handler:(readable:node.stream.PassThrough) -> Dynamic):js.lib.Promise<Dynamic>;
	function pipe<T>(writable:T, ?options:{ }):node.stream.PassThrough;
	function asCallback(callback:haxe.Constraints.Function):Raw<TResult>;
	/**
		Attaches callbacks for the resolution and/or rejection of the Promise.
	**/
	function then<TResult1, TResult2>(?onfulfilled:(value:knex.deferredkeyselection.Resolve<TResult>) -> ts.AnyOf2<js.lib.PromiseLike<TResult1>, TResult1>, ?onrejected:(reason:Dynamic) -> ts.AnyOf2<js.lib.PromiseLike<TResult2>, TResult2>):js.lib.Promise<ts.AnyOf2<TResult1, TResult2>>;
	/**
		Attaches a callback for only the rejection of the Promise.
	**/
	@:native("catch")
	function catch_<TResult>(?onrejected:(reason:Dynamic) -> ts.AnyOf2<js.lib.PromiseLike<TResult>, TResult>):js.lib.Promise<ts.AnyOf2<knex.deferredkeyselection.Resolve<TResult>, TResult>>;
	/**
		Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		resolved value cannot be modified from the callback.
	**/
	function finally(?onfinally:() -> Void):js.lib.Promise<knex.deferredkeyselection.Resolve<TResult>>;
};