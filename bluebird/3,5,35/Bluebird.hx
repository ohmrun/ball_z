@:jsRequire("bluebird") extern class Bluebird<R> {
	/**
		Create a new promise. The passed in function will receive functions
		`resolve` and `reject` as its arguments which can be called to seal the fate of the created promise.
		
		If promise cancellation is enabled, passed in function will receive
		one more function argument `onCancel` that allows to register an optional cancellation callback.
	**/
	function new(callback:ts.AnyOf2<(resolve:ts.AnyOf2<() -> Void, (thenableOrResult:ts.AnyOf2<js.lib.PromiseLike<R>, R>) -> Void>, reject:ts.AnyOf2<() -> Void, (error:Dynamic) -> Void>) -> Void, (resolve:ts.AnyOf2<() -> Void, (thenableOrResult:ts.AnyOf2<js.lib.PromiseLike<R>, R>) -> Void>, reject:ts.AnyOf2<() -> Void, (error:Dynamic) -> Void>, onCancel:(callback:() -> Void) -> Void) -> Void>);
	/**
		Promises/A+ `.then()`. Returns a new promise chained from this promise.
		
		The new promise will be rejected or resolved depending on the passed `fulfilledHandler`, `rejectedHandler` and the state of this promise.
	**/
	@:overload(function<TResult1, TResult2>(?onfulfilled:(value:R) -> bluebird.Resolvable<TResult1>, ?onrejected:(reason:Dynamic) -> bluebird.Resolvable<TResult2>):Bluebird<ts.AnyOf2<TResult1, TResult2>> { })
	function then<U>(?onFulfill:(value:R) -> bluebird.Resolvable<U>, ?onReject:(error:Dynamic) -> bluebird.Resolvable<U>):Bluebird<U>;
	/**
		This is a catch-all exception handler, shortcut for calling `.then(null, handler)` on this promise.
		
		Any exception happening in a `.then`-chain will propagate to nearest `.catch` handler.
		
		Alias `.caught();` for compatibility with earlier ECMAScript version.
		
		This extends `.catch` to work more like catch-clauses in languages like Java or C#.
		
		Instead of manually checking `instanceof` or `.name === "SomeError"`,
		you may specify a number of error constructors which are eligible for this catch handler.
		The catch handler that is first met that has eligible constructors specified, is the one that will be called.
		
		This method also supports predicate-based filters.
		If you pass a predicate function instead of an error constructor, the predicate will receive the error as an argument.
		The return result of the predicate will be used determine whether the error handler should be called.
		
		Alias `.caught();` for compatibility with earlier ECMAScript version.
	**/
	@:native("catch")
	@:overload(function<U, E1, E2, E3, E4, E5>(filter1:bluebird.Constructor<E1>, filter2:bluebird.Constructor<E2>, filter3:bluebird.Constructor<E3>, filter4:bluebird.Constructor<E4>, filter5:bluebird.Constructor<E5>, onReject:(error:ts.AnyOf5<E1, E2, E3, E4, E5>) -> bluebird.Resolvable<U>):Bluebird<ts.AnyOf2<R, U>> { })
	@:overload(function<U, E1, E2, E3, E4, E5>(filter1:ts.AnyOf3<bluebird.Constructor<E1>, (error:E1) -> Bool, Dynamic>, filter2:ts.AnyOf3<bluebird.Constructor<E2>, (error:E2) -> Bool, Dynamic>, filter3:ts.AnyOf3<bluebird.Constructor<E3>, (error:E3) -> Bool, Dynamic>, filter4:ts.AnyOf3<bluebird.Constructor<E4>, (error:E4) -> Bool, Dynamic>, filter5:ts.AnyOf3<bluebird.Constructor<E5>, (error:E5) -> Bool, Dynamic>, onReject:(error:ts.AnyOf5<E1, E2, E3, E4, E5>) -> bluebird.Resolvable<U>):Bluebird<ts.AnyOf2<R, U>> { })
	@:overload(function<U, E1, E2, E3, E4>(filter1:bluebird.Constructor<E1>, filter2:bluebird.Constructor<E2>, filter3:bluebird.Constructor<E3>, filter4:bluebird.Constructor<E4>, onReject:(error:ts.AnyOf4<E1, E2, E3, E4>) -> bluebird.Resolvable<U>):Bluebird<ts.AnyOf2<R, U>> { })
	@:overload(function<U, E1, E2, E3, E4>(filter1:ts.AnyOf3<bluebird.Constructor<E1>, (error:E1) -> Bool, Dynamic>, filter2:ts.AnyOf3<bluebird.Constructor<E2>, (error:E2) -> Bool, Dynamic>, filter3:ts.AnyOf3<bluebird.Constructor<E3>, (error:E3) -> Bool, Dynamic>, filter4:ts.AnyOf3<bluebird.Constructor<E4>, (error:E4) -> Bool, Dynamic>, onReject:(error:ts.AnyOf4<E1, E2, E3, E4>) -> bluebird.Resolvable<U>):Bluebird<ts.AnyOf2<R, U>> { })
	@:overload(function<U, E1, E2, E3>(filter1:bluebird.Constructor<E1>, filter2:bluebird.Constructor<E2>, filter3:bluebird.Constructor<E3>, onReject:(error:ts.AnyOf3<E1, E2, E3>) -> bluebird.Resolvable<U>):Bluebird<ts.AnyOf2<R, U>> { })
	@:overload(function<U, E1, E2, E3>(filter1:ts.AnyOf3<bluebird.Constructor<E1>, (error:E1) -> Bool, Dynamic>, filter2:ts.AnyOf3<bluebird.Constructor<E2>, (error:E2) -> Bool, Dynamic>, filter3:ts.AnyOf3<bluebird.Constructor<E3>, (error:E3) -> Bool, Dynamic>, onReject:(error:ts.AnyOf3<E1, E2, E3>) -> bluebird.Resolvable<U>):Bluebird<ts.AnyOf2<R, U>> { })
	@:overload(function<U, E1, E2>(filter1:bluebird.Constructor<E1>, filter2:bluebird.Constructor<E2>, onReject:(error:ts.AnyOf2<E1, E2>) -> bluebird.Resolvable<U>):Bluebird<ts.AnyOf2<R, U>> { })
	@:overload(function<U, E1, E2>(filter1:ts.AnyOf3<bluebird.Constructor<E1>, (error:E1) -> Bool, Dynamic>, filter2:ts.AnyOf3<bluebird.Constructor<E2>, (error:E2) -> Bool, Dynamic>, onReject:(error:ts.AnyOf2<E1, E2>) -> bluebird.Resolvable<U>):Bluebird<ts.AnyOf2<R, U>> { })
	@:overload(function<U, E1>(filter1:bluebird.Constructor<E1>, onReject:(error:E1) -> bluebird.Resolvable<U>):Bluebird<ts.AnyOf2<R, U>> { })
	@:overload(function<U, E1>(filter1:ts.AnyOf3<bluebird.Constructor<E1>, (error:E1) -> Bool, Dynamic>, onReject:(error:E1) -> bluebird.Resolvable<U>):Bluebird<ts.AnyOf2<R, U>> { })
	function catch_<U>(onReject:Null<(error:Dynamic) -> bluebird.Resolvable<U>>):Bluebird<ts.AnyOf2<R, U>>;
	/**
		This is a catch-all exception handler, shortcut for calling `.then(null, handler)` on this promise.
		
		Any exception happening in a `.then`-chain will propagate to nearest `.catch` handler.
		
		Alias `.caught();` for compatibility with earlier ECMAScript version.
	**/
	@:overload(function<U, E1, E2, E3, E4, E5>(filter1:bluebird.Constructor<E1>, filter2:bluebird.Constructor<E2>, filter3:bluebird.Constructor<E3>, filter4:bluebird.Constructor<E4>, filter5:bluebird.Constructor<E5>, onReject:(error:ts.AnyOf5<E1, E2, E3, E4, E5>) -> bluebird.Resolvable<U>):Bluebird<ts.AnyOf2<R, U>> { })
	@:overload(function<U, E1, E2, E3, E4, E5>(filter1:ts.AnyOf3<bluebird.Constructor<E1>, (error:E1) -> Bool, Dynamic>, filter2:ts.AnyOf3<bluebird.Constructor<E2>, (error:E2) -> Bool, Dynamic>, filter3:ts.AnyOf3<bluebird.Constructor<E3>, (error:E3) -> Bool, Dynamic>, filter4:ts.AnyOf3<bluebird.Constructor<E4>, (error:E4) -> Bool, Dynamic>, filter5:ts.AnyOf3<bluebird.Constructor<E5>, (error:E5) -> Bool, Dynamic>, onReject:(error:ts.AnyOf5<E1, E2, E3, E4, E5>) -> bluebird.Resolvable<U>):Bluebird<ts.AnyOf2<R, U>> { })
	@:overload(function<U, E1, E2, E3, E4>(filter1:bluebird.Constructor<E1>, filter2:bluebird.Constructor<E2>, filter3:bluebird.Constructor<E3>, filter4:bluebird.Constructor<E4>, onReject:(error:ts.AnyOf4<E1, E2, E3, E4>) -> bluebird.Resolvable<U>):Bluebird<ts.AnyOf2<R, U>> { })
	@:overload(function<U, E1, E2, E3, E4>(filter1:ts.AnyOf3<bluebird.Constructor<E1>, (error:E1) -> Bool, Dynamic>, filter2:ts.AnyOf3<bluebird.Constructor<E2>, (error:E2) -> Bool, Dynamic>, filter3:ts.AnyOf3<bluebird.Constructor<E3>, (error:E3) -> Bool, Dynamic>, filter4:ts.AnyOf3<bluebird.Constructor<E4>, (error:E4) -> Bool, Dynamic>, onReject:(error:ts.AnyOf4<E1, E2, E3, E4>) -> bluebird.Resolvable<U>):Bluebird<ts.AnyOf2<R, U>> { })
	@:overload(function<U, E1, E2, E3>(filter1:bluebird.Constructor<E1>, filter2:bluebird.Constructor<E2>, filter3:bluebird.Constructor<E3>, onReject:(error:ts.AnyOf3<E1, E2, E3>) -> bluebird.Resolvable<U>):Bluebird<ts.AnyOf2<R, U>> { })
	@:overload(function<U, E1, E2, E3>(filter1:ts.AnyOf3<bluebird.Constructor<E1>, (error:E1) -> Bool, Dynamic>, filter2:ts.AnyOf3<bluebird.Constructor<E2>, (error:E2) -> Bool, Dynamic>, filter3:ts.AnyOf3<bluebird.Constructor<E3>, (error:E3) -> Bool, Dynamic>, onReject:(error:ts.AnyOf3<E1, E2, E3>) -> bluebird.Resolvable<U>):Bluebird<ts.AnyOf2<R, U>> { })
	@:overload(function<U, E1, E2>(filter1:bluebird.Constructor<E1>, filter2:bluebird.Constructor<E2>, onReject:(error:ts.AnyOf2<E1, E2>) -> bluebird.Resolvable<U>):Bluebird<ts.AnyOf2<R, U>> { })
	@:overload(function<U, E1, E2>(filter1:ts.AnyOf3<bluebird.Constructor<E1>, (error:E1) -> Bool, Dynamic>, filter2:ts.AnyOf3<bluebird.Constructor<E2>, (error:E2) -> Bool, Dynamic>, onReject:(error:ts.AnyOf2<E1, E2>) -> bluebird.Resolvable<U>):Bluebird<ts.AnyOf2<R, U>> { })
	@:overload(function<U, E1>(filter1:bluebird.Constructor<E1>, onReject:(error:E1) -> bluebird.Resolvable<U>):Bluebird<ts.AnyOf2<R, U>> { })
	@:overload(function<U, E1>(filter1:ts.AnyOf3<bluebird.Constructor<E1>, (error:E1) -> Bool, Dynamic>, onReject:(error:E1) -> bluebird.Resolvable<U>):Bluebird<ts.AnyOf2<R, U>> { })
	dynamic function caught<U>(onReject:Null<(error:Dynamic) -> bluebird.Resolvable<U>>):Bluebird<ts.AnyOf2<R, U>>;
	/**
		Like `.catch` but instead of catching all types of exceptions,
		it only catches those that don't originate from thrown errors but rather from explicit rejections.
	**/
	function error<U>(onReject:(reason:Dynamic) -> bluebird.Resolvable<U>):Bluebird<U>;
	/**
		Pass a handler that will be called regardless of this promise's fate. Returns a new promise chained from this promise.
		
		There are special semantics for `.finally()` in that the final value cannot be modified from the handler.
		
		Alias `.lastly();` for compatibility with earlier ECMAScript version.
	**/
	function finally(handler:() -> Dynamic):Bluebird<R>;
	dynamic function lastly(handler:() -> Dynamic):Bluebird<R>;
	/**
		Create a promise that follows this promise, but is bound to the given `thisArg` value.
		A bound promise will call its handlers with the bound value set to `this`.
		
		Additionally promises derived from a bound promise will also be bound promises with the same `thisArg` binding as the original promise.
	**/
	function bind(thisArg:Dynamic):Bluebird<R>;
	/**
		Like `.then()`, but any unhandled rejection that ends up here will be thrown as an error.
	**/
	function done<U>(?onFulfilled:(value:R) -> bluebird.Resolvable<U>, ?onRejected:(error:Dynamic) -> bluebird.Resolvable<U>):Void;
	/**
		Like `.finally()`, but not called for rejections.
	**/
	function tap(onFulFill:(value:R) -> Dynamic):Bluebird<R>;
	/**
		Like `.catch()` but rethrows the error
	**/
	@:overload(function<E1, E2, E3, E4, E5>(filter1:bluebird.Constructor<E1>, filter2:bluebird.Constructor<E2>, filter3:bluebird.Constructor<E3>, filter4:bluebird.Constructor<E4>, filter5:bluebird.Constructor<E5>, onReject:(error:ts.AnyOf5<E1, E2, E3, E4, E5>) -> Dynamic):Bluebird<R> { })
	@:overload(function<E1, E2, E3, E4, E5>(filter1:ts.AnyOf3<bluebird.Constructor<E1>, (error:E1) -> Bool, Dynamic>, filter2:ts.AnyOf3<bluebird.Constructor<E2>, (error:E2) -> Bool, Dynamic>, filter3:ts.AnyOf3<bluebird.Constructor<E3>, (error:E3) -> Bool, Dynamic>, filter4:ts.AnyOf3<bluebird.Constructor<E4>, (error:E4) -> Bool, Dynamic>, filter5:ts.AnyOf3<bluebird.Constructor<E5>, (error:E5) -> Bool, Dynamic>, onReject:(error:ts.AnyOf5<E1, E2, E3, E4, E5>) -> Dynamic):Bluebird<R> { })
	@:overload(function<E1, E2, E3, E4>(filter1:bluebird.Constructor<E1>, filter2:bluebird.Constructor<E2>, filter3:bluebird.Constructor<E3>, filter4:bluebird.Constructor<E4>, onReject:(error:ts.AnyOf4<E1, E2, E3, E4>) -> Dynamic):Bluebird<R> { })
	@:overload(function<E1, E2, E3, E4>(filter1:ts.AnyOf3<bluebird.Constructor<E1>, (error:E1) -> Bool, Dynamic>, filter2:ts.AnyOf3<bluebird.Constructor<E2>, (error:E2) -> Bool, Dynamic>, filter3:ts.AnyOf3<bluebird.Constructor<E3>, (error:E3) -> Bool, Dynamic>, filter4:ts.AnyOf3<bluebird.Constructor<E4>, (error:E4) -> Bool, Dynamic>, onReject:(error:ts.AnyOf4<E1, E2, E3, E4>) -> Dynamic):Bluebird<R> { })
	@:overload(function<E1, E2, E3>(filter1:bluebird.Constructor<E1>, filter2:bluebird.Constructor<E2>, filter3:bluebird.Constructor<E3>, onReject:(error:ts.AnyOf3<E1, E2, E3>) -> Dynamic):Bluebird<R> { })
	@:overload(function<E1, E2, E3>(filter1:ts.AnyOf3<bluebird.Constructor<E1>, (error:E1) -> Bool, Dynamic>, filter2:ts.AnyOf3<bluebird.Constructor<E2>, (error:E2) -> Bool, Dynamic>, filter3:ts.AnyOf3<bluebird.Constructor<E3>, (error:E3) -> Bool, Dynamic>, onReject:(error:ts.AnyOf3<E1, E2, E3>) -> Dynamic):Bluebird<R> { })
	@:overload(function<E1, E2>(filter1:bluebird.Constructor<E1>, filter2:bluebird.Constructor<E2>, onReject:(error:ts.AnyOf2<E1, E2>) -> Dynamic):Bluebird<R> { })
	@:overload(function<E1, E2>(filter1:ts.AnyOf3<bluebird.Constructor<E1>, (error:E1) -> Bool, Dynamic>, filter2:ts.AnyOf3<bluebird.Constructor<E2>, (error:E2) -> Bool, Dynamic>, onReject:(error:ts.AnyOf2<E1, E2>) -> Dynamic):Bluebird<R> { })
	@:overload(function<E1>(filter1:bluebird.Constructor<E1>, onReject:(error:E1) -> Dynamic):Bluebird<R> { })
	@:overload(function<E1>(filter1:ts.AnyOf3<bluebird.Constructor<E1>, (error:E1) -> Bool, Dynamic>, onReject:(error:E1) -> Dynamic):Bluebird<R> { })
	function tapCatch(onReject:ts.AnyOf2<() -> Dynamic, (error:Dynamic) -> Dynamic>):Bluebird<R>;
	/**
		Same as calling `Promise.delay(ms, this)`.
	**/
	function delay(ms:Float):Bluebird<R>;
	/**
		Returns a promise that will be fulfilled with this promise's fulfillment value or rejection reason.
		  However, if this promise is not fulfilled or rejected within ms milliseconds, the returned promise
		  is rejected with a TimeoutError or the error as the reason.
		
		You may specify a custom error message with the `message` parameter.
	**/
	function timeout(ms:Float, ?message:ts.AnyOf2<String, js.lib.Error>):Bluebird<R>;
	/**
		Register a node-style callback on this promise.
		
		When this promise is is either fulfilled or rejected,
		the node callback will be called back with the node.js convention
		where error reason is the first argument and success value is the second argument.
		
		The error argument will be `null` in case of success.
		If the `callback` argument is not a function, this method does not do anything.
	**/
	@:overload(function(sink:haxe.extern.Rest<Dynamic>):Bluebird<R> { })
	function nodeify(callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, value:R) -> Void>, ?options:bluebird.SpreadOption):Bluebird<R>;
	@:overload(function(sink:haxe.extern.Rest<Dynamic>):Bluebird<R> { })
	function asCallback(callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, value:R) -> Void>, ?options:bluebird.SpreadOption):Bluebird<R>;
	/**
		See if this `promise` has been fulfilled.
	**/
	function isFulfilled():Bool;
	/**
		See if this `promise` has been rejected.
	**/
	function isRejected():Bool;
	/**
		See if this `promise` is still defer.
	**/
	function isPending():Bool;
	/**
		See if this `promise` has been cancelled.
	**/
	function isCancelled():Bool;
	/**
		See if this `promise` is resolved -> either fulfilled or rejected.
	**/
	function isResolved():Bool;
	/**
		Get the fulfillment value of the underlying promise. Throws if the promise isn't fulfilled yet.
		
		throws `TypeError`
	**/
	function value():R;
	/**
		Get the rejection reason for the underlying promise. Throws if the promise isn't rejected yet.
		
		throws `TypeError`
	**/
	function reason():Dynamic;
	/**
		Synchronously inspect the state of this `promise`. The `PromiseInspection` will represent the state of
		the promise as snapshotted at the time of calling `.reflect()`.
	**/
	function reflect():Bluebird<bluebird.Inspection<R>>;
	/**
		This is a convenience method for doing:
		
		<code>
		promise.then(function(obj){
		     return obj[propertyName].call(obj, arg...);
		});
		</code>
	**/
	function call<U, Q>(propertyName:U, args:haxe.extern.Rest<Dynamic>):Bluebird<Dynamic>;
	/**
		This is a convenience method for doing:
		
		<code>
		promise.then(function(obj){
		     return obj[propertyName];
		});
		</code>
	**/
	function get<U>(key:U):Bluebird<Dynamic>;
	/**
		Convenience method for:
		
		<code>
		.then(function() {
		    return value;
		});
		</code>
		
		in the case where `value` doesn't change its value. That means `value` is bound at the time of calling `.return()`
		
		Alias `.thenReturn();` for compatibility with earlier ECMAScript version.
	**/
	@:native("return")
	@:overload(function<U>(value:U):Bluebird<U> { })
	function return_():Bluebird<Void>;
	@:overload(function<U>(value:U):Bluebird<U> { })
	function thenReturn():Bluebird<Void>;
	/**
		Convenience method for:
		
		<code>
		.then(function() {
		    throw reason;
		});
		</code>
		Same limitations apply as with `.return()`.
		
		Alias `.thenThrow();` for compatibility with earlier ECMAScript version.
	**/
	@:native("throw")
	function throw_(reason:js.lib.Error):Bluebird<Any>;
	function thenThrow(reason:js.lib.Error):Bluebird<Any>;
	/**
		Convenience method for:
		
		<code>
		.catch(function() {
		    return value;
		});
		</code>
		
		in the case where `value` doesn't change its value. That means `value` is bound at the time of calling `.catchReturn()`
	**/
	@:overload(function<U>(filter1:bluebird.Constructor<js.lib.Error>, filter2:bluebird.Constructor<js.lib.Error>, filter3:bluebird.Constructor<js.lib.Error>, filter4:bluebird.Constructor<js.lib.Error>, filter5:bluebird.Constructor<js.lib.Error>, value:U):Bluebird<ts.AnyOf2<R, U>> { })
	@:overload(function<U>(filter1:ts.AnyOf3<bluebird.Constructor<js.lib.Error>, (error:js.lib.Error) -> Bool, js.lib.IError>, filter2:ts.AnyOf3<bluebird.Constructor<js.lib.Error>, (error:js.lib.Error) -> Bool, js.lib.IError>, filter3:ts.AnyOf3<bluebird.Constructor<js.lib.Error>, (error:js.lib.Error) -> Bool, js.lib.IError>, filter4:ts.AnyOf3<bluebird.Constructor<js.lib.Error>, (error:js.lib.Error) -> Bool, js.lib.IError>, filter5:ts.AnyOf3<bluebird.Constructor<js.lib.Error>, (error:js.lib.Error) -> Bool, js.lib.IError>, value:U):Bluebird<ts.AnyOf2<R, U>> { })
	@:overload(function<U>(filter1:bluebird.Constructor<js.lib.Error>, filter2:bluebird.Constructor<js.lib.Error>, filter3:bluebird.Constructor<js.lib.Error>, filter4:bluebird.Constructor<js.lib.Error>, value:U):Bluebird<ts.AnyOf2<R, U>> { })
	@:overload(function<U>(filter1:ts.AnyOf3<bluebird.Constructor<js.lib.Error>, (error:js.lib.Error) -> Bool, js.lib.IError>, filter2:ts.AnyOf3<bluebird.Constructor<js.lib.Error>, (error:js.lib.Error) -> Bool, js.lib.IError>, filter3:ts.AnyOf3<bluebird.Constructor<js.lib.Error>, (error:js.lib.Error) -> Bool, js.lib.IError>, filter4:ts.AnyOf3<bluebird.Constructor<js.lib.Error>, (error:js.lib.Error) -> Bool, js.lib.IError>, value:U):Bluebird<ts.AnyOf2<R, U>> { })
	@:overload(function<U>(filter1:bluebird.Constructor<js.lib.Error>, filter2:bluebird.Constructor<js.lib.Error>, filter3:bluebird.Constructor<js.lib.Error>, value:U):Bluebird<ts.AnyOf2<R, U>> { })
	@:overload(function<U>(filter1:ts.AnyOf3<bluebird.Constructor<js.lib.Error>, (error:js.lib.Error) -> Bool, js.lib.IError>, filter2:ts.AnyOf3<bluebird.Constructor<js.lib.Error>, (error:js.lib.Error) -> Bool, js.lib.IError>, filter3:ts.AnyOf3<bluebird.Constructor<js.lib.Error>, (error:js.lib.Error) -> Bool, js.lib.IError>, value:U):Bluebird<ts.AnyOf2<R, U>> { })
	@:overload(function<U>(filter1:bluebird.Constructor<js.lib.Error>, filter2:bluebird.Constructor<js.lib.Error>, value:U):Bluebird<ts.AnyOf2<R, U>> { })
	@:overload(function<U>(filter1:ts.AnyOf3<bluebird.Constructor<js.lib.Error>, (error:js.lib.Error) -> Bool, js.lib.IError>, filter2:ts.AnyOf3<bluebird.Constructor<js.lib.Error>, (error:js.lib.Error) -> Bool, js.lib.IError>, value:U):Bluebird<ts.AnyOf2<R, U>> { })
	@:overload(function<U>(filter1:bluebird.Constructor<js.lib.Error>, value:U):Bluebird<ts.AnyOf2<R, U>> { })
	@:overload(function<U>(filter1:ts.AnyOf3<bluebird.Constructor<js.lib.Error>, (error:js.lib.Error) -> Bool, js.lib.IError>, value:U):Bluebird<ts.AnyOf2<R, U>> { })
	function catchReturn<U>(value:U):Bluebird<ts.AnyOf2<R, U>>;
	/**
		Convenience method for:
		
		<code>
		.catch(function() {
		    throw reason;
		});
		</code>
		Same limitations apply as with `.catchReturn()`.
	**/
	@:overload(function(filter1:bluebird.Constructor<js.lib.Error>, filter2:bluebird.Constructor<js.lib.Error>, filter3:bluebird.Constructor<js.lib.Error>, filter4:bluebird.Constructor<js.lib.Error>, filter5:bluebird.Constructor<js.lib.Error>, reason:js.lib.Error):Bluebird<R> { })
	@:overload(function(filter1:ts.AnyOf3<bluebird.Constructor<js.lib.Error>, (error:js.lib.Error) -> Bool, js.lib.IError>, filter2:ts.AnyOf3<bluebird.Constructor<js.lib.Error>, (error:js.lib.Error) -> Bool, js.lib.IError>, filter3:ts.AnyOf3<bluebird.Constructor<js.lib.Error>, (error:js.lib.Error) -> Bool, js.lib.IError>, filter4:ts.AnyOf3<bluebird.Constructor<js.lib.Error>, (error:js.lib.Error) -> Bool, js.lib.IError>, filter5:ts.AnyOf3<bluebird.Constructor<js.lib.Error>, (error:js.lib.Error) -> Bool, js.lib.IError>, reason:js.lib.Error):Bluebird<R> { })
	@:overload(function(filter1:bluebird.Constructor<js.lib.Error>, filter2:bluebird.Constructor<js.lib.Error>, filter3:bluebird.Constructor<js.lib.Error>, filter4:bluebird.Constructor<js.lib.Error>, reason:js.lib.Error):Bluebird<R> { })
	@:overload(function(filter1:ts.AnyOf3<bluebird.Constructor<js.lib.Error>, (error:js.lib.Error) -> Bool, js.lib.IError>, filter2:ts.AnyOf3<bluebird.Constructor<js.lib.Error>, (error:js.lib.Error) -> Bool, js.lib.IError>, filter3:ts.AnyOf3<bluebird.Constructor<js.lib.Error>, (error:js.lib.Error) -> Bool, js.lib.IError>, filter4:ts.AnyOf3<bluebird.Constructor<js.lib.Error>, (error:js.lib.Error) -> Bool, js.lib.IError>, reason:js.lib.Error):Bluebird<R> { })
	@:overload(function(filter1:bluebird.Constructor<js.lib.Error>, filter2:bluebird.Constructor<js.lib.Error>, filter3:bluebird.Constructor<js.lib.Error>, reason:js.lib.Error):Bluebird<R> { })
	@:overload(function(filter1:ts.AnyOf3<bluebird.Constructor<js.lib.Error>, (error:js.lib.Error) -> Bool, js.lib.IError>, filter2:ts.AnyOf3<bluebird.Constructor<js.lib.Error>, (error:js.lib.Error) -> Bool, js.lib.IError>, filter3:ts.AnyOf3<bluebird.Constructor<js.lib.Error>, (error:js.lib.Error) -> Bool, js.lib.IError>, reason:js.lib.Error):Bluebird<R> { })
	@:overload(function(filter1:bluebird.Constructor<js.lib.Error>, filter2:bluebird.Constructor<js.lib.Error>, reason:js.lib.Error):Bluebird<R> { })
	@:overload(function(filter1:ts.AnyOf3<bluebird.Constructor<js.lib.Error>, (error:js.lib.Error) -> Bool, js.lib.IError>, filter2:ts.AnyOf3<bluebird.Constructor<js.lib.Error>, (error:js.lib.Error) -> Bool, js.lib.IError>, reason:js.lib.Error):Bluebird<R> { })
	@:overload(function(filter1:bluebird.Constructor<js.lib.Error>, reason:js.lib.Error):Bluebird<R> { })
	@:overload(function(filter1:ts.AnyOf3<bluebird.Constructor<js.lib.Error>, (error:js.lib.Error) -> Bool, js.lib.IError>, reason:js.lib.Error):Bluebird<R> { })
	function catchThrow(reason:js.lib.Error):Bluebird<R>;
	/**
		Convert to String.
	**/
	function toString():String;
	/**
		This is implicitly called by `JSON.stringify` when serializing the object. Returns a serialized representation of the `Promise`.
	**/
	function toJSON():Dynamic;
	/**
		Like calling `.then`, but the fulfillment value or rejection reason is assumed to be an array, which is flattened to the formal parameters of the handlers.
	**/
	function spread<U, Q>(fulfilledHandler:(values:haxe.extern.Rest<Q>) -> bluebird.Resolvable<U>):Bluebird<U>;
	/**
		Same as calling `Promise.all(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
		
		Same as calling `Promise.all(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
	**/
	@:overload(function<T1, T2, T3, T4>():Bluebird<ts.Tuple4<T1, T2, T3, T4>> { })
	@:overload(function<T1, T2, T3>():Bluebird<ts.Tuple3<T1, T2, T3>> { })
	@:overload(function<T1, T2>():Bluebird<ts.Tuple2<T1, T2>> { })
	@:overload(function<T1>():Bluebird<ts.Tuple1<T1>> { })
	@:overload(function<R>():Bluebird<Array<R>> { })
	@:overload(function():Bluebird<Any> { })
	function all<T1, T2, T3, T4, T5>():Bluebird<ts.Tuple5<T1, T2, T3, T4, T5>>;
	/**
		Same as calling `Promise.props(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
	**/
	@:overload(function<T>():Bluebird<T> { })
	function props<K, V>():Bluebird<js.lib.Map<K, V>>;
	/**
		Same as calling `Promise.any(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
		
		Same as calling `Promise.any(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
	**/
	@:overload(function():Bluebird<Any> { })
	function any<Q>():Bluebird<Q>;
	/**
		Same as calling `Promise.some(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
		Same as calling `Promise.some(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
		
		Same as calling `Promise.some(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
		Same as calling `Promise.some(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
	**/
	@:overload(function(count:Float):Bluebird<Any> { })
	function some<Q>(count:Float):Bluebird<R>;
	/**
		Same as calling `Promise.race(thisPromise, count)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
		
		Same as calling `Promise.race(thisPromise, count)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
	**/
	@:overload(function():Bluebird<Any> { })
	function race<Q>():Bluebird<Q>;
	/**
		Same as calling `Bluebird.map(thisPromise, mapper)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
	**/
	function map<U, Q>(mapper:bluebird.IterateFunction<Q, U>, ?options:bluebird.ConcurrencyOption):Bluebird<Array<U>>;
	/**
		Same as calling `Promise.reduce(thisPromise, Function reducer, initialValue)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
	**/
	function reduce<U, Q>(reducer:(memo:U, item:Q, index:Float, arrayLength:Float) -> bluebird.Resolvable<U>, ?initialValue:U):Bluebird<U>;
	/**
		Same as calling ``Promise.filter(thisPromise, filterer)``. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
	**/
	function filter<Q>(filterer:bluebird.IterateFunction<Q, Bool>, ?options:bluebird.ConcurrencyOption):Bluebird<R>;
	/**
		Same as calling ``Bluebird.each(thisPromise, iterator)``. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
	**/
	function each<Q>(iterator:bluebird.IterateFunction<Q, Dynamic>):Bluebird<R>;
	/**
		Same as calling ``Bluebird.mapSeries(thisPromise, iterator)``. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
	**/
	function mapSeries<U, Q>(iterator:bluebird.IterateFunction<Q, U>):Bluebird<Array<U>>;
	/**
		Cancel this `promise`. Will not do anything if this promise is already settled or if the cancellation feature has not been enabled
	**/
	function cancel():Void;
	/**
		Basically sugar for doing: somePromise.catch(function(){});
		
		Which is needed in case error handlers are attached asynchronously to the promise later, which would otherwise result in premature unhandled rejection reporting.
	**/
	function suppressUnhandledRejections():Void;
	/**
		A meta method used to specify the disposer method that cleans up a resource when using `Promise.using`.
		
		Returns a Disposer object which encapsulates both the resource as well as the method to clean it up.
		  The user can pass this object to `Promise.using` to get access to the resource when it becomes available,
		  as well as to ensure its automatically cleaned up.
		
		The second argument passed to a disposer is the result promise of the using block, which you can
		  inspect synchronously.
	**/
	function disposer(disposeFn:(arg:R, promise:Bluebird<R>) -> bluebird.Resolvable<Void>):bluebird.Disposer<R>;
	static var prototype : Bluebird<Dynamic>;
	/**
		Start the chain of promises with `Promise.try`. Any synchronous exceptions will be turned into rejections on the returned promise.
		
		Note about second argument: if it's specifically a true array, its values become respective arguments for the function call.
		Otherwise it is passed as is as the first argument for the function call.
		
		Alias for `attempt();` for compatibility with earlier ECMAScript version.
	**/
	@:native("try")
	static function try_<R>(fn:() -> bluebird.Resolvable<R>):Bluebird<R>;
	static function attempt<R>(fn:() -> bluebird.Resolvable<R>):Bluebird<R>;
	/**
		Returns a new function that wraps the given function `fn`.
		The new function will always return a promise that is fulfilled with the original functions return values or rejected with thrown exceptions from the original function.
		This method is convenient when a function can sometimes return synchronously or throw synchronously.
	**/
	@:overload(function<R, A1>(fn:(arg1:A1) -> bluebird.Resolvable<R>):(arg1:A1) -> Bluebird<R> { })
	@:overload(function<R, A1, A2>(fn:(arg1:A1, arg2:A2) -> bluebird.Resolvable<R>):(arg1:A1, arg2:A2) -> Bluebird<R> { })
	@:overload(function<R, A1, A2, A3>(fn:(arg1:A1, arg2:A2, arg3:A3) -> bluebird.Resolvable<R>):(arg1:A1, arg2:A2, arg3:A3) -> Bluebird<R> { })
	@:overload(function<R, A1, A2, A3, A4>(fn:(arg1:A1, arg2:A2, arg3:A3, arg4:A4) -> bluebird.Resolvable<R>):(arg1:A1, arg2:A2, arg3:A3, arg4:A4) -> Bluebird<R> { })
	@:overload(function<R, A1, A2, A3, A4, A5>(fn:(arg1:A1, arg2:A2, arg3:A3, arg4:A4, arg5:A5) -> bluebird.Resolvable<R>):(arg1:A1, arg2:A2, arg3:A3, arg4:A4, arg5:A5) -> Bluebird<R> { })
	@:overload(function<R>(fn:(args:haxe.extern.Rest<Dynamic>) -> bluebird.Resolvable<R>):(args:haxe.extern.Rest<Dynamic>) -> Bluebird<R> { })
	static function method<R>(fn:() -> bluebird.Resolvable<R>):() -> Bluebird<R>;
	/**
		Create a promise that is resolved with the given `value`. If `value` is a thenable or promise, the returned promise will assume its state.
	**/
	@:overload(function<R>(value:bluebird.Resolvable<R>):Bluebird<R> { })
	static function resolve():Bluebird<Void>;
	/**
		Create a promise that is rejected with the given `reason`.
	**/
	static function reject(reason:Dynamic):Bluebird<Any>;
	static function defer<R>():bluebird.Resolver<R>;
	/**
		Cast the given `value` to a trusted promise.
		
		If `value` is already a trusted `Promise`, it is returned as is. If `value` is not a thenable, a fulfilled is: Promise returned with `value` as its fulfillment value.
		If `value` is a thenable (Promise-like object, like those returned by jQuery's `$.ajax`), returns a trusted that: Promise assimilates the state of the thenable.
	**/
	@:native("cast")
	static function cast_<R>(value:bluebird.Resolvable<R>):Bluebird<R>;
	/**
		Sugar for `Promise.resolve(undefined).bind(thisArg);`. See `.bind()`.
	**/
	@:native("bind")
	static function bind_(thisArg:Dynamic):Bluebird<Void>;
	/**
		See if `value` is a trusted Promise.
	**/
	static function is(value:Dynamic):Bool;
	/**
		Call this right after the library is loaded to enabled long stack traces.
		
		Long stack traces cannot be disabled after being enabled, and cannot be enabled after promises have already been created.
		Long stack traces imply a substantial performance penalty, around 4-5x for throughput and 0.5x for latency.
	**/
	static function longStackTraces():Void;
	/**
		Returns a promise that will be resolved with value (or undefined) after given ms milliseconds.
		If value is a promise, the delay will start counting down when it is fulfilled and the returned
		  promise will be fulfilled with the fulfillment value of the value promise.
	**/
	@:overload(function(ms:Float):Bluebird<Void> { })
	@:native("delay")
	static function delay_<R>(ms:Float, value:bluebird.Resolvable<R>):Bluebird<R>;
	/**
		Returns a function that will wrap the given `nodeFunction`.
		
		Instead of taking a callback, the returned function will return a promise whose fate is decided by the callback behavior of the given node function.
		The node function should conform to node.js convention of accepting a callback as last argument and
		calling that callback with error as the first argument and success value on the second argument.
		
		If the `nodeFunction` calls its callback with multiple success values, the fulfillment value will be an array of them.
		
		If you pass a `receiver`, the `nodeFunction` will be called as a method on the `receiver`.
	**/
	@:overload(function<T, A1>(func:(arg1:A1, callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.PromisifyOptions):(arg1:A1) -> Bluebird<T> { })
	@:overload(function<T, A1, A2>(func:(arg1:A1, arg2:A2, callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.PromisifyOptions):(arg1:A1, arg2:A2) -> Bluebird<T> { })
	@:overload(function<T, A1, A2, A3>(func:(arg1:A1, arg2:A2, arg3:A3, callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.PromisifyOptions):(arg1:A1, arg2:A2, arg3:A3) -> Bluebird<T> { })
	@:overload(function<T, A1, A2, A3, A4>(func:(arg1:A1, arg2:A2, arg3:A3, arg4:A4, callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.PromisifyOptions):(arg1:A1, arg2:A2, arg3:A3, arg4:A4) -> Bluebird<T> { })
	@:overload(function<T, A1, A2, A3, A4, A5>(func:(arg1:A1, arg2:A2, arg3:A3, arg4:A4, arg5:A5, callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.PromisifyOptions):(arg1:A1, arg2:A2, arg3:A3, arg4:A4, arg5:A5) -> Bluebird<T> { })
	@:overload(function(nodeFunction:(args:haxe.extern.Rest<Dynamic>) -> Void, ?options:bluebird.PromisifyOptions):(args:haxe.extern.Rest<Dynamic>) -> Bluebird<Dynamic> { })
	static function promisify<T>(func:(callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.PromisifyOptions):() -> Bluebird<T>;
	/**
		Promisifies the entire object by going through the object's properties and creating an async equivalent of each function on the object and its prototype chain.
		
		The promisified method name will be the original method name postfixed with `Async`. Returns the input object.
		
		Note that the original methods on the object are not overwritten but new methods are created with the `Async`-postfix. For example,
		if you `promisifyAll()` the node.js `fs` object use `fs.statAsync()` to call the promisified `stat` method.
	**/
	static function promisifyAll<T>(target:T, ?options:bluebird.PromisifyAllOptions<T>):T;
	/**
		Returns a promise that is resolved by a node style callback function.
	**/
	static function fromNode<T>(resolver:(callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.FromNodeOptions):Bluebird<T>;
	static function fromCallback<T>(resolver:(callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.FromNodeOptions):Bluebird<T>;
	/**
		Returns a function that can use `yield` to run asynchronous code synchronously.
		
		This feature requires the support of generators which are drafted in the next version of the language.
		Node version greater than `0.11.2` is required and needs to be executed with the `--harmony-generators` (or `--harmony`) command-line switch.
	**/
	@:overload(function<T, A1>(generatorFunction:(a1:A1) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1) -> Bluebird<T> { })
	@:overload(function<T, A1, A2>(generatorFunction:(a1:A1, a2:A2) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1, a2:A2) -> Bluebird<T> { })
	@:overload(function<T, A1, A2, A3>(generatorFunction:(a1:A1, a2:A2, a3:A3) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1, a2:A2, a3:A3) -> Bluebird<T> { })
	@:overload(function<T, A1, A2, A3, A4>(generatorFunction:(a1:A1, a2:A2, a3:A3, a4:A4) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1, a2:A2, a3:A3, a4:A4) -> Bluebird<T> { })
	@:overload(function<T, A1, A2, A3, A4, A5>(generatorFunction:(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5) -> Bluebird<T> { })
	@:overload(function<T, A1, A2, A3, A4, A5, A6>(generatorFunction:(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5, a6:A6) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5, a6:A6) -> Bluebird<T> { })
	@:overload(function<T, A1, A2, A3, A4, A5, A6, A7>(generatorFunction:(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5, a6:A6, a7:A7) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5, a6:A6, a7:A7) -> Bluebird<T> { })
	@:overload(function<T, A1, A2, A3, A4, A5, A6, A7, A8>(generatorFunction:(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5, a6:A6, a7:A7, a8:A8) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5, a6:A6, a7:A7, a8:A8) -> Bluebird<T> { })
	static function coroutine<T>(generatorFunction:() -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):() -> Bluebird<T>;
	/**
		Add `handler` as the handler to call when there is a possibly unhandled rejection. The default handler logs the error stack to stderr or `console.error` in browsers.
		
		Passing no value or a non-function will have the effect of removing any kind of handling for possibly unhandled rejections.
		
		Add handler as the handler to call when there is a possibly unhandled rejection.
		The default handler logs the error stack to stderr or console.error in browsers.
		
		Passing no value or a non-function will have the effect of removing any kind of handling for possibly unhandled rejections.
		
		Note: this hook is specific to the bluebird instance its called on, application developers should use global rejection events.
	**/
	@:overload(function(?handler:(error:js.lib.Error, promise:Bluebird<Dynamic>) -> Void):Void { })
	static function onPossiblyUnhandledRejection(handler:(reason:Dynamic) -> Dynamic):Void;
	/**
		Given an array, or a promise of an array, which contains promises (or a mix of promises and values) return a promise that is fulfilled when all the items in the array are fulfilled.
		The promise's fulfillment value is an array with fulfillment values at respective positions to the original array.
		If any promise in the array rejects, the returned promise is rejected with the rejection reason.
	**/
	@:overload(function<T1, T2, T3, T4>(values:ts.Tuple4<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>, bluebird.Resolvable<T3>, bluebird.Resolvable<T4>>):Bluebird<ts.Tuple4<T1, T2, T3, T4>> { })
	@:overload(function<T1, T2, T3>(values:ts.Tuple3<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>, bluebird.Resolvable<T3>>):Bluebird<ts.Tuple3<T1, T2, T3>> { })
	@:overload(function<T1, T2>(values:ts.Tuple2<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>>):Bluebird<ts.Tuple2<T1, T2>> { })
	@:overload(function<T1>(values:ts.Tuple1<bluebird.Resolvable<T1>>):Bluebird<ts.Tuple1<T1>> { })
	@:overload(function<R>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>):Bluebird<Array<R>> { })
	@:native("all")
	static function all_<T1, T2, T3, T4, T5>(values:ts.Tuple5<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>, bluebird.Resolvable<T3>, bluebird.Resolvable<T4>, bluebird.Resolvable<T5>>):Bluebird<ts.Tuple5<T1, T2, T3, T4, T5>>;
	@:overload(function<T1, T2, T3, T4>(values:ts.Tuple4<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>, bluebird.Resolvable<T3>, bluebird.Resolvable<T4>>):Bluebird<ts.Tuple4<bluebird.Inspection<T1>, bluebird.Inspection<T2>, bluebird.Inspection<T3>, bluebird.Inspection<T4>>> { })
	@:overload(function<T1, T2, T3>(values:ts.Tuple3<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>, bluebird.Resolvable<T3>>):Bluebird<ts.Tuple3<bluebird.Inspection<T1>, bluebird.Inspection<T2>, bluebird.Inspection<T3>>> { })
	@:overload(function<T1, T2>(values:ts.Tuple2<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>>):Bluebird<ts.Tuple2<bluebird.Inspection<T1>, bluebird.Inspection<T2>>> { })
	@:overload(function<T1>(values:ts.Tuple1<bluebird.Resolvable<T1>>):Bluebird<ts.Tuple1<bluebird.Inspection<T1>>> { })
	@:overload(function<R>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>):Bluebird<Array<bluebird.Inspection<R>>> { })
	static function allSettled<T1, T2, T3, T4, T5>(values:ts.Tuple5<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>, bluebird.Resolvable<T3>, bluebird.Resolvable<T4>, bluebird.Resolvable<T5>>):Bluebird<ts.Tuple5<bluebird.Inspection<T1>, bluebird.Inspection<T2>, bluebird.Inspection<T3>, bluebird.Inspection<T4>, bluebird.Inspection<T5>>>;
	/**
		Like ``Promise.all`` but for object properties instead of array items. Returns a promise that is fulfilled when all the properties of the object are fulfilled.
		
		The promise's fulfillment value is an object with fulfillment values at respective keys to the original object.
		If any promise in the object rejects, the returned promise is rejected with the rejection reason.
		
		If `object` is a trusted `Promise`, then it will be treated as a promise for object rather than for its properties.
		All other objects are treated for their properties as is returned by `Object.keys` - the object's own enumerable properties.
		
		*The original object is not modified.*
	**/
	@:overload(function<T>(object:js.lib.PromiseLike<bluebird.ResolvableProps<T>>):Bluebird<T> { })
	@:overload(function<T>(object:bluebird.ResolvableProps<T>):Bluebird<T> { })
	@:native("props")
	static function props_<K, V>(map:bluebird.Resolvable<js.lib.Map<K, bluebird.Resolvable<V>>>):Bluebird<js.lib.Map<K, V>>;
	/**
		Like `Promise.some()`, with 1 as `count`. However, if the promise fulfills, the fulfillment value is not an array of 1 but the value directly.
	**/
	@:native("any")
	static function any_<R>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>):Bluebird<R>;
	/**
		Given an array, or a promise of an array, which contains promises (or a mix of promises and values) return a promise that is
		fulfilled or rejected as soon as a promise in the array is fulfilled or rejected with the respective rejection reason or fulfillment value.
		
		**Note** If you pass empty array or a sparse array with no values, or a promise/thenable for such, it will be forever pending.
	**/
	@:native("race")
	static function race_<R>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>):Bluebird<R>;
	/**
		Initiate a competitive race between multiple promises or values (values will become immediately fulfilled promises).
		When `count` amount of promises have been fulfilled, the returned promise is fulfilled with an array that contains the fulfillment values of
		the winners in order of resolution.
		
		If too many promises are rejected so that the promise can never become fulfilled,
		it will be immediately rejected with an array of rejection reasons in the order they were thrown in.
		
		*The original array is not modified.*
	**/
	@:native("some")
	static function some_<R>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>, count:Float):Bluebird<Array<R>>;
	/**
		Promise.join(
		   Promise<any>|any values...,
		   function handler
		) -> Promise
		For coordinating multiple concurrent discrete promises.
		
		Note: In 1.x and 0.x Promise.join used to be a Promise.all that took the values in as arguments instead in an array.
		This behavior has been deprecated but is still supported partially - when the last argument is an immediate function value the new semantics will apply
	**/
	@:overload(function<R, A1, A2>(arg1:bluebird.Resolvable<A1>, arg2:bluebird.Resolvable<A2>, handler:(arg1:A1, arg2:A2) -> bluebird.Resolvable<R>):Bluebird<R> { })
	@:overload(function<R, A1, A2, A3>(arg1:bluebird.Resolvable<A1>, arg2:bluebird.Resolvable<A2>, arg3:bluebird.Resolvable<A3>, handler:(arg1:A1, arg2:A2, arg3:A3) -> bluebird.Resolvable<R>):Bluebird<R> { })
	@:overload(function<R, A1, A2, A3, A4>(arg1:bluebird.Resolvable<A1>, arg2:bluebird.Resolvable<A2>, arg3:bluebird.Resolvable<A3>, arg4:bluebird.Resolvable<A4>, handler:(arg1:A1, arg2:A2, arg3:A3, arg4:A4) -> bluebird.Resolvable<R>):Bluebird<R> { })
	@:overload(function<R, A1, A2, A3, A4, A5>(arg1:bluebird.Resolvable<A1>, arg2:bluebird.Resolvable<A2>, arg3:bluebird.Resolvable<A3>, arg4:bluebird.Resolvable<A4>, arg5:bluebird.Resolvable<A5>, handler:(arg1:A1, arg2:A2, arg3:A3, arg4:A4, arg5:A5) -> bluebird.Resolvable<R>):Bluebird<R> { })
	@:overload(function<R>(values:haxe.extern.Rest<bluebird.Resolvable<R>>):Bluebird<Array<R>> { })
	static function join<R, A1>(arg1:bluebird.Resolvable<A1>, handler:(arg1:A1) -> bluebird.Resolvable<R>):Bluebird<R>;
	/**
		Map an array, or a promise of an array,
		which contains a promises (or a mix of promises and values) with the given `mapper` function with the signature `(item, index, arrayLength)`
		where `item` is the resolved value of a respective promise in the input array.
		If any promise in the input array is rejected the returned promise is rejected as well.
		
		If the `mapper` function returns promises or thenables, the returned promise will wait for all the mapped results to be resolved as well.
		
		*The original array is not modified.*
	**/
	@:native("map")
	static function map_<R, U>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>, mapper:bluebird.IterateFunction<R, U>, ?options:bluebird.ConcurrencyOption):Bluebird<Array<U>>;
	/**
		Reduce an array, or a promise of an array,
		which contains a promises (or a mix of promises and values) with the given `reducer` function with the signature `(total, current, index, arrayLength)`
		where `item` is the resolved value of a respective promise in the input array.
		If any promise in the input array is rejected the returned promise is rejected as well.
		
		If the reducer function returns a promise or a thenable, the result for the promise is awaited for before continuing with next iteration.
		
		*The original array is not modified. If no `initialValue` is given and the array doesn't contain at least 2 items,
		the callback will not be called and `undefined` is returned.
		
		If `initialValue` is given and the array doesn't have at least 1 item, `initialValue` is returned.*
	**/
	@:native("reduce")
	static function reduce_<R, U>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>, reducer:(total:U, current:R, index:Float, arrayLength:Float) -> bluebird.Resolvable<U>, ?initialValue:U):Bluebird<U>;
	/**
		Filter an array, or a promise of an array,
		which contains a promises (or a mix of promises and values) with the given `filterer` function with the signature `(item, index, arrayLength)`
		where `item` is the resolved value of a respective promise in the input array.
		If any promise in the input array is rejected the returned promise is rejected as well.
		
		The return values from the filtered functions are coerced to booleans, with the exception of promises and thenables which are awaited for their eventual result.
		
		*The original array is not modified.
	**/
	@:native("filter")
	static function filter_<R>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>, filterer:bluebird.IterateFunction<R, Bool>, ?option:bluebird.ConcurrencyOption):Bluebird<Array<R>>;
	/**
		Iterate over an array, or a promise of an array,
		which contains promises (or a mix of promises and values) with the given iterator function with the signature `(item, index, value)`
		where item is the resolved value of a respective promise in the input array.
		Iteration happens serially. If any promise in the input array is rejected the returned promise is rejected as well.
		
		Resolves to the original array unmodified, this method is meant to be used for side effects.
		If the iterator function returns a promise or a thenable, the result for the promise is awaited for before continuing with next iteration.
	**/
	@:native("each")
	static function each_<R>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>, iterator:bluebird.IterateFunction<R, Dynamic>):Bluebird<Array<R>>;
	/**
		Given an Iterable(arrays are Iterable), or a promise of an Iterable, which produces promises (or a mix of promises and values),
		iterate over all the values in the Iterable into an array and iterate over the array serially, in-order.
		
		Returns a promise for an array that contains the values returned by the iterator function in their respective positions.
		The iterator won't be called for an item until its previous item, and the promise returned by the iterator for that item are fulfilled.
		This results in a mapSeries kind of utility but it can also be used simply as a side effect iterator similar to Array#forEach.
		
		If any promise in the input array is rejected or any promise returned by the iterator function is rejected, the result will be rejected as well.
	**/
	@:native("mapSeries")
	static function mapSeries_<R, U>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>, iterator:bluebird.IterateFunction<R, U>):Bluebird<Array<U>>;
	/**
		In conjunction with `.disposer`, using will make sure that no matter what, the specified disposer
		  will be called when the promise returned by the callback passed to using has settled. The disposer is
		  necessary because there is no standard interface in node for disposing resources.
	**/
	@:native("using")
	@:overload(function<R1, R2, T>(disposer:bluebird.Disposer<R1>, disposer2:bluebird.Disposer<R2>, executor:(transaction1:R1, transaction2:R2) -> js.lib.PromiseLike<T>):Bluebird<T> { })
	@:overload(function<R1, R2, R3, T>(disposer:bluebird.Disposer<R1>, disposer2:bluebird.Disposer<R2>, disposer3:bluebird.Disposer<R3>, executor:(transaction1:R1, transaction2:R2, transaction3:R3) -> js.lib.PromiseLike<T>):Bluebird<T> { })
	static function using_<R, T>(disposer:bluebird.Disposer<R>, executor:(transaction:R) -> js.lib.PromiseLike<T>):Bluebird<T>;
	/**
		Configure long stack traces, warnings, monitoring and cancellation.
		Note that even though false is the default here, a development environment might be detected which automatically
		  enables long stack traces and warnings.
	**/
	static function config(options:{ /** Enable warnings **/ @:optional var warnings : ts.AnyOf2<Bool, { /** Enables all warnings except forgotten return statements. **/ var wForgottenReturn : Bool; }>; /** Enable long stack traces **/ @:optional var longStackTraces : Bool; /** Enable cancellation **/ @:optional var cancellation : Bool; /** Enable monitoring **/ @:optional var monitoring : Bool; /** Enable async hooks **/ @:optional var asyncHooks : Bool; }):Void;
	/**
		Create a new promise. The passed in function will receive functions `resolve` and `reject` as its arguments which can be called to seal the fate of the created promise.
		If promise cancellation is enabled, passed in function will receive one more function argument `onCancel` that allows to register an optional cancellation callback.
	**/
	static var Promise : {
		var prototype : Bluebird<Dynamic>;
		/**
			Start the chain of promises with `Promise.try`. Any synchronous exceptions will be turned into rejections on the returned promise.
			
			Note about second argument: if it's specifically a true array, its values become respective arguments for the function call.
			Otherwise it is passed as is as the first argument for the function call.
			
			Alias for `attempt();` for compatibility with earlier ECMAScript version.
		**/
		@:native("try")
		function try_<R>(fn:() -> bluebird.Resolvable<R>):Bluebird<R>;
		function attempt<R>(fn:() -> bluebird.Resolvable<R>):Bluebird<R>;
		/**
			Returns a new function that wraps the given function `fn`.
			The new function will always return a promise that is fulfilled with the original functions return values or rejected with thrown exceptions from the original function.
			This method is convenient when a function can sometimes return synchronously or throw synchronously.
		**/
		@:overload(function<R, A1>(fn:(arg1:A1) -> bluebird.Resolvable<R>):(arg1:A1) -> Bluebird<R> { })
		@:overload(function<R, A1, A2>(fn:(arg1:A1, arg2:A2) -> bluebird.Resolvable<R>):(arg1:A1, arg2:A2) -> Bluebird<R> { })
		@:overload(function<R, A1, A2, A3>(fn:(arg1:A1, arg2:A2, arg3:A3) -> bluebird.Resolvable<R>):(arg1:A1, arg2:A2, arg3:A3) -> Bluebird<R> { })
		@:overload(function<R, A1, A2, A3, A4>(fn:(arg1:A1, arg2:A2, arg3:A3, arg4:A4) -> bluebird.Resolvable<R>):(arg1:A1, arg2:A2, arg3:A3, arg4:A4) -> Bluebird<R> { })
		@:overload(function<R, A1, A2, A3, A4, A5>(fn:(arg1:A1, arg2:A2, arg3:A3, arg4:A4, arg5:A5) -> bluebird.Resolvable<R>):(arg1:A1, arg2:A2, arg3:A3, arg4:A4, arg5:A5) -> Bluebird<R> { })
		@:overload(function<R>(fn:(args:haxe.extern.Rest<Dynamic>) -> bluebird.Resolvable<R>):(args:haxe.extern.Rest<Dynamic>) -> Bluebird<R> { })
		function method<R>(fn:() -> bluebird.Resolvable<R>):() -> Bluebird<R>;
		/**
			Create a promise that is resolved with the given `value`. If `value` is a thenable or promise, the returned promise will assume its state.
		**/
		@:overload(function<R>(value:bluebird.Resolvable<R>):Bluebird<R> { })
		function resolve():Bluebird<Void>;
		/**
			Create a promise that is rejected with the given `reason`.
		**/
		function reject(reason:Dynamic):Bluebird<Any>;
		function defer<R>():bluebird.Resolver<R>;
		/**
			Cast the given `value` to a trusted promise.
			
			If `value` is already a trusted `Promise`, it is returned as is. If `value` is not a thenable, a fulfilled is: Promise returned with `value` as its fulfillment value.
			If `value` is a thenable (Promise-like object, like those returned by jQuery's `$.ajax`), returns a trusted that: Promise assimilates the state of the thenable.
		**/
		@:native("cast")
		function cast_<R>(value:bluebird.Resolvable<R>):Bluebird<R>;
		/**
			Sugar for `Promise.resolve(undefined).bind(thisArg);`. See `.bind()`.
		**/
		function bind(thisArg:Dynamic):Bluebird<Void>;
		/**
			See if `value` is a trusted Promise.
		**/
		function is(value:Dynamic):Bool;
		/**
			Call this right after the library is loaded to enabled long stack traces.
			
			Long stack traces cannot be disabled after being enabled, and cannot be enabled after promises have already been created.
			Long stack traces imply a substantial performance penalty, around 4-5x for throughput and 0.5x for latency.
		**/
		function longStackTraces():Void;
		/**
			Returns a promise that will be resolved with value (or undefined) after given ms milliseconds.
			If value is a promise, the delay will start counting down when it is fulfilled and the returned
			  promise will be fulfilled with the fulfillment value of the value promise.
		**/
		@:overload(function(ms:Float):Bluebird<Void> { })
		function delay<R>(ms:Float, value:bluebird.Resolvable<R>):Bluebird<R>;
		/**
			Returns a function that will wrap the given `nodeFunction`.
			
			Instead of taking a callback, the returned function will return a promise whose fate is decided by the callback behavior of the given node function.
			The node function should conform to node.js convention of accepting a callback as last argument and
			calling that callback with error as the first argument and success value on the second argument.
			
			If the `nodeFunction` calls its callback with multiple success values, the fulfillment value will be an array of them.
			
			If you pass a `receiver`, the `nodeFunction` will be called as a method on the `receiver`.
		**/
		@:overload(function<T, A1>(func:(arg1:A1, callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.PromisifyOptions):(arg1:A1) -> Bluebird<T> { })
		@:overload(function<T, A1, A2>(func:(arg1:A1, arg2:A2, callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.PromisifyOptions):(arg1:A1, arg2:A2) -> Bluebird<T> { })
		@:overload(function<T, A1, A2, A3>(func:(arg1:A1, arg2:A2, arg3:A3, callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.PromisifyOptions):(arg1:A1, arg2:A2, arg3:A3) -> Bluebird<T> { })
		@:overload(function<T, A1, A2, A3, A4>(func:(arg1:A1, arg2:A2, arg3:A3, arg4:A4, callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.PromisifyOptions):(arg1:A1, arg2:A2, arg3:A3, arg4:A4) -> Bluebird<T> { })
		@:overload(function<T, A1, A2, A3, A4, A5>(func:(arg1:A1, arg2:A2, arg3:A3, arg4:A4, arg5:A5, callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.PromisifyOptions):(arg1:A1, arg2:A2, arg3:A3, arg4:A4, arg5:A5) -> Bluebird<T> { })
		@:overload(function(nodeFunction:(args:haxe.extern.Rest<Dynamic>) -> Void, ?options:bluebird.PromisifyOptions):(args:haxe.extern.Rest<Dynamic>) -> Bluebird<Dynamic> { })
		function promisify<T>(func:(callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.PromisifyOptions):() -> Bluebird<T>;
		/**
			Promisifies the entire object by going through the object's properties and creating an async equivalent of each function on the object and its prototype chain.
			
			The promisified method name will be the original method name postfixed with `Async`. Returns the input object.
			
			Note that the original methods on the object are not overwritten but new methods are created with the `Async`-postfix. For example,
			if you `promisifyAll()` the node.js `fs` object use `fs.statAsync()` to call the promisified `stat` method.
		**/
		function promisifyAll<T>(target:T, ?options:bluebird.PromisifyAllOptions<T>):T;
		/**
			Returns a promise that is resolved by a node style callback function.
		**/
		function fromNode<T>(resolver:(callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.FromNodeOptions):Bluebird<T>;
		function fromCallback<T>(resolver:(callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.FromNodeOptions):Bluebird<T>;
		/**
			Returns a function that can use `yield` to run asynchronous code synchronously.
			
			This feature requires the support of generators which are drafted in the next version of the language.
			Node version greater than `0.11.2` is required and needs to be executed with the `--harmony-generators` (or `--harmony`) command-line switch.
		**/
		@:overload(function<T, A1>(generatorFunction:(a1:A1) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1) -> Bluebird<T> { })
		@:overload(function<T, A1, A2>(generatorFunction:(a1:A1, a2:A2) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1, a2:A2) -> Bluebird<T> { })
		@:overload(function<T, A1, A2, A3>(generatorFunction:(a1:A1, a2:A2, a3:A3) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1, a2:A2, a3:A3) -> Bluebird<T> { })
		@:overload(function<T, A1, A2, A3, A4>(generatorFunction:(a1:A1, a2:A2, a3:A3, a4:A4) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1, a2:A2, a3:A3, a4:A4) -> Bluebird<T> { })
		@:overload(function<T, A1, A2, A3, A4, A5>(generatorFunction:(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5) -> Bluebird<T> { })
		@:overload(function<T, A1, A2, A3, A4, A5, A6>(generatorFunction:(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5, a6:A6) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5, a6:A6) -> Bluebird<T> { })
		@:overload(function<T, A1, A2, A3, A4, A5, A6, A7>(generatorFunction:(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5, a6:A6, a7:A7) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5, a6:A6, a7:A7) -> Bluebird<T> { })
		@:overload(function<T, A1, A2, A3, A4, A5, A6, A7, A8>(generatorFunction:(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5, a6:A6, a7:A7, a8:A8) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5, a6:A6, a7:A7, a8:A8) -> Bluebird<T> { })
		function coroutine<T>(generatorFunction:() -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):() -> Bluebird<T>;
		/**
			Add `handler` as the handler to call when there is a possibly unhandled rejection. The default handler logs the error stack to stderr or `console.error` in browsers.
			
			Passing no value or a non-function will have the effect of removing any kind of handling for possibly unhandled rejections.
			
			Add handler as the handler to call when there is a possibly unhandled rejection.
			The default handler logs the error stack to stderr or console.error in browsers.
			
			Passing no value or a non-function will have the effect of removing any kind of handling for possibly unhandled rejections.
			
			Note: this hook is specific to the bluebird instance its called on, application developers should use global rejection events.
		**/
		@:overload(function(?handler:(error:js.lib.Error, promise:Bluebird<Dynamic>) -> Void):Void { })
		function onPossiblyUnhandledRejection(handler:(reason:Dynamic) -> Dynamic):Void;
		/**
			Given an array, or a promise of an array, which contains promises (or a mix of promises and values) return a promise that is fulfilled when all the items in the array are fulfilled.
			The promise's fulfillment value is an array with fulfillment values at respective positions to the original array.
			If any promise in the array rejects, the returned promise is rejected with the rejection reason.
		**/
		@:overload(function<T1, T2, T3, T4>(values:ts.Tuple4<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>, bluebird.Resolvable<T3>, bluebird.Resolvable<T4>>):Bluebird<ts.Tuple4<T1, T2, T3, T4>> { })
		@:overload(function<T1, T2, T3>(values:ts.Tuple3<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>, bluebird.Resolvable<T3>>):Bluebird<ts.Tuple3<T1, T2, T3>> { })
		@:overload(function<T1, T2>(values:ts.Tuple2<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>>):Bluebird<ts.Tuple2<T1, T2>> { })
		@:overload(function<T1>(values:ts.Tuple1<bluebird.Resolvable<T1>>):Bluebird<ts.Tuple1<T1>> { })
		@:overload(function<R>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>):Bluebird<Array<R>> { })
		function all<T1, T2, T3, T4, T5>(values:ts.Tuple5<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>, bluebird.Resolvable<T3>, bluebird.Resolvable<T4>, bluebird.Resolvable<T5>>):Bluebird<ts.Tuple5<T1, T2, T3, T4, T5>>;
		@:overload(function<T1, T2, T3, T4>(values:ts.Tuple4<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>, bluebird.Resolvable<T3>, bluebird.Resolvable<T4>>):Bluebird<ts.Tuple4<bluebird.Inspection<T1>, bluebird.Inspection<T2>, bluebird.Inspection<T3>, bluebird.Inspection<T4>>> { })
		@:overload(function<T1, T2, T3>(values:ts.Tuple3<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>, bluebird.Resolvable<T3>>):Bluebird<ts.Tuple3<bluebird.Inspection<T1>, bluebird.Inspection<T2>, bluebird.Inspection<T3>>> { })
		@:overload(function<T1, T2>(values:ts.Tuple2<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>>):Bluebird<ts.Tuple2<bluebird.Inspection<T1>, bluebird.Inspection<T2>>> { })
		@:overload(function<T1>(values:ts.Tuple1<bluebird.Resolvable<T1>>):Bluebird<ts.Tuple1<bluebird.Inspection<T1>>> { })
		@:overload(function<R>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>):Bluebird<Array<bluebird.Inspection<R>>> { })
		function allSettled<T1, T2, T3, T4, T5>(values:ts.Tuple5<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>, bluebird.Resolvable<T3>, bluebird.Resolvable<T4>, bluebird.Resolvable<T5>>):Bluebird<ts.Tuple5<bluebird.Inspection<T1>, bluebird.Inspection<T2>, bluebird.Inspection<T3>, bluebird.Inspection<T4>, bluebird.Inspection<T5>>>;
		/**
			Like ``Promise.all`` but for object properties instead of array items. Returns a promise that is fulfilled when all the properties of the object are fulfilled.
			
			The promise's fulfillment value is an object with fulfillment values at respective keys to the original object.
			If any promise in the object rejects, the returned promise is rejected with the rejection reason.
			
			If `object` is a trusted `Promise`, then it will be treated as a promise for object rather than for its properties.
			All other objects are treated for their properties as is returned by `Object.keys` - the object's own enumerable properties.
			
			*The original object is not modified.*
		**/
		@:overload(function<T>(object:js.lib.PromiseLike<bluebird.ResolvableProps<T>>):Bluebird<T> { })
		@:overload(function<T>(object:bluebird.ResolvableProps<T>):Bluebird<T> { })
		function props<K, V>(map:bluebird.Resolvable<js.lib.Map<K, bluebird.Resolvable<V>>>):Bluebird<js.lib.Map<K, V>>;
		/**
			Like `Promise.some()`, with 1 as `count`. However, if the promise fulfills, the fulfillment value is not an array of 1 but the value directly.
		**/
		function any<R>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>):Bluebird<R>;
		/**
			Given an array, or a promise of an array, which contains promises (or a mix of promises and values) return a promise that is
			fulfilled or rejected as soon as a promise in the array is fulfilled or rejected with the respective rejection reason or fulfillment value.
			
			**Note** If you pass empty array or a sparse array with no values, or a promise/thenable for such, it will be forever pending.
		**/
		function race<R>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>):Bluebird<R>;
		/**
			Initiate a competitive race between multiple promises or values (values will become immediately fulfilled promises).
			When `count` amount of promises have been fulfilled, the returned promise is fulfilled with an array that contains the fulfillment values of
			the winners in order of resolution.
			
			If too many promises are rejected so that the promise can never become fulfilled,
			it will be immediately rejected with an array of rejection reasons in the order they were thrown in.
			
			*The original array is not modified.*
		**/
		function some<R>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>, count:Float):Bluebird<Array<R>>;
		/**
			Promise.join(
			   Promise<any>|any values...,
			   function handler
			) -> Promise
			For coordinating multiple concurrent discrete promises.
			
			Note: In 1.x and 0.x Promise.join used to be a Promise.all that took the values in as arguments instead in an array.
			This behavior has been deprecated but is still supported partially - when the last argument is an immediate function value the new semantics will apply
		**/
		@:overload(function<R, A1, A2>(arg1:bluebird.Resolvable<A1>, arg2:bluebird.Resolvable<A2>, handler:(arg1:A1, arg2:A2) -> bluebird.Resolvable<R>):Bluebird<R> { })
		@:overload(function<R, A1, A2, A3>(arg1:bluebird.Resolvable<A1>, arg2:bluebird.Resolvable<A2>, arg3:bluebird.Resolvable<A3>, handler:(arg1:A1, arg2:A2, arg3:A3) -> bluebird.Resolvable<R>):Bluebird<R> { })
		@:overload(function<R, A1, A2, A3, A4>(arg1:bluebird.Resolvable<A1>, arg2:bluebird.Resolvable<A2>, arg3:bluebird.Resolvable<A3>, arg4:bluebird.Resolvable<A4>, handler:(arg1:A1, arg2:A2, arg3:A3, arg4:A4) -> bluebird.Resolvable<R>):Bluebird<R> { })
		@:overload(function<R, A1, A2, A3, A4, A5>(arg1:bluebird.Resolvable<A1>, arg2:bluebird.Resolvable<A2>, arg3:bluebird.Resolvable<A3>, arg4:bluebird.Resolvable<A4>, arg5:bluebird.Resolvable<A5>, handler:(arg1:A1, arg2:A2, arg3:A3, arg4:A4, arg5:A5) -> bluebird.Resolvable<R>):Bluebird<R> { })
		@:overload(function<R>(values:haxe.extern.Rest<bluebird.Resolvable<R>>):Bluebird<Array<R>> { })
		function join<R, A1>(arg1:bluebird.Resolvable<A1>, handler:(arg1:A1) -> bluebird.Resolvable<R>):Bluebird<R>;
		/**
			Map an array, or a promise of an array,
			which contains a promises (or a mix of promises and values) with the given `mapper` function with the signature `(item, index, arrayLength)`
			where `item` is the resolved value of a respective promise in the input array.
			If any promise in the input array is rejected the returned promise is rejected as well.
			
			If the `mapper` function returns promises or thenables, the returned promise will wait for all the mapped results to be resolved as well.
			
			*The original array is not modified.*
		**/
		function map<R, U>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>, mapper:bluebird.IterateFunction<R, U>, ?options:bluebird.ConcurrencyOption):Bluebird<Array<U>>;
		/**
			Reduce an array, or a promise of an array,
			which contains a promises (or a mix of promises and values) with the given `reducer` function with the signature `(total, current, index, arrayLength)`
			where `item` is the resolved value of a respective promise in the input array.
			If any promise in the input array is rejected the returned promise is rejected as well.
			
			If the reducer function returns a promise or a thenable, the result for the promise is awaited for before continuing with next iteration.
			
			*The original array is not modified. If no `initialValue` is given and the array doesn't contain at least 2 items,
			the callback will not be called and `undefined` is returned.
			
			If `initialValue` is given and the array doesn't have at least 1 item, `initialValue` is returned.*
		**/
		function reduce<R, U>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>, reducer:(total:U, current:R, index:Float, arrayLength:Float) -> bluebird.Resolvable<U>, ?initialValue:U):Bluebird<U>;
		/**
			Filter an array, or a promise of an array,
			which contains a promises (or a mix of promises and values) with the given `filterer` function with the signature `(item, index, arrayLength)`
			where `item` is the resolved value of a respective promise in the input array.
			If any promise in the input array is rejected the returned promise is rejected as well.
			
			The return values from the filtered functions are coerced to booleans, with the exception of promises and thenables which are awaited for their eventual result.
			
			*The original array is not modified.
		**/
		function filter<R>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>, filterer:bluebird.IterateFunction<R, Bool>, ?option:bluebird.ConcurrencyOption):Bluebird<Array<R>>;
		/**
			Iterate over an array, or a promise of an array,
			which contains promises (or a mix of promises and values) with the given iterator function with the signature `(item, index, value)`
			where item is the resolved value of a respective promise in the input array.
			Iteration happens serially. If any promise in the input array is rejected the returned promise is rejected as well.
			
			Resolves to the original array unmodified, this method is meant to be used for side effects.
			If the iterator function returns a promise or a thenable, the result for the promise is awaited for before continuing with next iteration.
		**/
		function each<R>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>, iterator:bluebird.IterateFunction<R, Dynamic>):Bluebird<Array<R>>;
		/**
			Given an Iterable(arrays are Iterable), or a promise of an Iterable, which produces promises (or a mix of promises and values),
			iterate over all the values in the Iterable into an array and iterate over the array serially, in-order.
			
			Returns a promise for an array that contains the values returned by the iterator function in their respective positions.
			The iterator won't be called for an item until its previous item, and the promise returned by the iterator for that item are fulfilled.
			This results in a mapSeries kind of utility but it can also be used simply as a side effect iterator similar to Array#forEach.
			
			If any promise in the input array is rejected or any promise returned by the iterator function is rejected, the result will be rejected as well.
		**/
		function mapSeries<R, U>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>, iterator:bluebird.IterateFunction<R, U>):Bluebird<Array<U>>;
		/**
			In conjunction with `.disposer`, using will make sure that no matter what, the specified disposer
			  will be called when the promise returned by the callback passed to using has settled. The disposer is
			  necessary because there is no standard interface in node for disposing resources.
		**/
		@:native("using")
		@:overload(function<R1, R2, T>(disposer:bluebird.Disposer<R1>, disposer2:bluebird.Disposer<R2>, executor:(transaction1:R1, transaction2:R2) -> js.lib.PromiseLike<T>):Bluebird<T> { })
		@:overload(function<R1, R2, R3, T>(disposer:bluebird.Disposer<R1>, disposer2:bluebird.Disposer<R2>, disposer3:bluebird.Disposer<R3>, executor:(transaction1:R1, transaction2:R2, transaction3:R3) -> js.lib.PromiseLike<T>):Bluebird<T> { })
		function using_<R, T>(disposer:bluebird.Disposer<R>, executor:(transaction:R) -> js.lib.PromiseLike<T>):Bluebird<T>;
		/**
			Configure long stack traces, warnings, monitoring and cancellation.
			Note that even though false is the default here, a development environment might be detected which automatically
			  enables long stack traces and warnings.
		**/
		function config(options:{ /** Enable warnings **/ @:optional var warnings : ts.AnyOf2<Bool, { /** Enables all warnings except forgotten return statements. **/ var wForgottenReturn : Bool; }>; /** Enable long stack traces **/ @:optional var longStackTraces : Bool; /** Enable cancellation **/ @:optional var cancellation : Bool; /** Enable monitoring **/ @:optional var monitoring : Bool; /** Enable async hooks **/ @:optional var asyncHooks : Bool; }):Void;
		/**
			Create a new promise. The passed in function will receive functions `resolve` and `reject` as its arguments which can be called to seal the fate of the created promise.
			If promise cancellation is enabled, passed in function will receive one more function argument `onCancel` that allows to register an optional cancellation callback.
		**/
		var Promise : Dynamic;
		/**
			The version number of the library
		**/
		var version : String;
		/**
			Returns a new independent copy of the Bluebird library.
			
			This method should be used before you use any of the methods which would otherwise alter the global Bluebird object - to avoid polluting global state.
		**/
		function getNewLibraryCopy():Dynamic;
		/**
			This is relevant to browser environments with no module loader.
			
			Release control of the Promise namespace to whatever it was before this library was loaded.
			Returns a reference to the library namespace so you can attach it to something else.
		**/
		function noConflict():Dynamic;
		/**
			Changes how bluebird schedules calls a-synchronously.
		**/
		function setScheduler(scheduler:(callback:(args:haxe.extern.Rest<Dynamic>) -> Void) -> Void):Void;
	};
	/**
		The version number of the library
	**/
	static var version : String;
	/**
		Returns a new independent copy of the Bluebird library.
		
		This method should be used before you use any of the methods which would otherwise alter the global Bluebird object - to avoid polluting global state.
	**/
	static function getNewLibraryCopy():{
		var prototype : Bluebird<Dynamic>;
		/**
			Start the chain of promises with `Promise.try`. Any synchronous exceptions will be turned into rejections on the returned promise.
			
			Note about second argument: if it's specifically a true array, its values become respective arguments for the function call.
			Otherwise it is passed as is as the first argument for the function call.
			
			Alias for `attempt();` for compatibility with earlier ECMAScript version.
		**/
		@:native("try")
		function try_<R>(fn:() -> bluebird.Resolvable<R>):Bluebird<R>;
		function attempt<R>(fn:() -> bluebird.Resolvable<R>):Bluebird<R>;
		/**
			Returns a new function that wraps the given function `fn`.
			The new function will always return a promise that is fulfilled with the original functions return values or rejected with thrown exceptions from the original function.
			This method is convenient when a function can sometimes return synchronously or throw synchronously.
		**/
		@:overload(function<R, A1>(fn:(arg1:A1) -> bluebird.Resolvable<R>):(arg1:A1) -> Bluebird<R> { })
		@:overload(function<R, A1, A2>(fn:(arg1:A1, arg2:A2) -> bluebird.Resolvable<R>):(arg1:A1, arg2:A2) -> Bluebird<R> { })
		@:overload(function<R, A1, A2, A3>(fn:(arg1:A1, arg2:A2, arg3:A3) -> bluebird.Resolvable<R>):(arg1:A1, arg2:A2, arg3:A3) -> Bluebird<R> { })
		@:overload(function<R, A1, A2, A3, A4>(fn:(arg1:A1, arg2:A2, arg3:A3, arg4:A4) -> bluebird.Resolvable<R>):(arg1:A1, arg2:A2, arg3:A3, arg4:A4) -> Bluebird<R> { })
		@:overload(function<R, A1, A2, A3, A4, A5>(fn:(arg1:A1, arg2:A2, arg3:A3, arg4:A4, arg5:A5) -> bluebird.Resolvable<R>):(arg1:A1, arg2:A2, arg3:A3, arg4:A4, arg5:A5) -> Bluebird<R> { })
		@:overload(function<R>(fn:(args:haxe.extern.Rest<Dynamic>) -> bluebird.Resolvable<R>):(args:haxe.extern.Rest<Dynamic>) -> Bluebird<R> { })
		function method<R>(fn:() -> bluebird.Resolvable<R>):() -> Bluebird<R>;
		/**
			Create a promise that is resolved with the given `value`. If `value` is a thenable or promise, the returned promise will assume its state.
		**/
		@:overload(function<R>(value:bluebird.Resolvable<R>):Bluebird<R> { })
		function resolve():Bluebird<Void>;
		/**
			Create a promise that is rejected with the given `reason`.
		**/
		function reject(reason:Dynamic):Bluebird<Any>;
		function defer<R>():bluebird.Resolver<R>;
		/**
			Cast the given `value` to a trusted promise.
			
			If `value` is already a trusted `Promise`, it is returned as is. If `value` is not a thenable, a fulfilled is: Promise returned with `value` as its fulfillment value.
			If `value` is a thenable (Promise-like object, like those returned by jQuery's `$.ajax`), returns a trusted that: Promise assimilates the state of the thenable.
		**/
		@:native("cast")
		function cast_<R>(value:bluebird.Resolvable<R>):Bluebird<R>;
		/**
			Sugar for `Promise.resolve(undefined).bind(thisArg);`. See `.bind()`.
		**/
		function bind(thisArg:Dynamic):Bluebird<Void>;
		/**
			See if `value` is a trusted Promise.
		**/
		function is(value:Dynamic):Bool;
		/**
			Call this right after the library is loaded to enabled long stack traces.
			
			Long stack traces cannot be disabled after being enabled, and cannot be enabled after promises have already been created.
			Long stack traces imply a substantial performance penalty, around 4-5x for throughput and 0.5x for latency.
		**/
		function longStackTraces():Void;
		/**
			Returns a promise that will be resolved with value (or undefined) after given ms milliseconds.
			If value is a promise, the delay will start counting down when it is fulfilled and the returned
			  promise will be fulfilled with the fulfillment value of the value promise.
		**/
		@:overload(function(ms:Float):Bluebird<Void> { })
		function delay<R>(ms:Float, value:bluebird.Resolvable<R>):Bluebird<R>;
		/**
			Returns a function that will wrap the given `nodeFunction`.
			
			Instead of taking a callback, the returned function will return a promise whose fate is decided by the callback behavior of the given node function.
			The node function should conform to node.js convention of accepting a callback as last argument and
			calling that callback with error as the first argument and success value on the second argument.
			
			If the `nodeFunction` calls its callback with multiple success values, the fulfillment value will be an array of them.
			
			If you pass a `receiver`, the `nodeFunction` will be called as a method on the `receiver`.
		**/
		@:overload(function<T, A1>(func:(arg1:A1, callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.PromisifyOptions):(arg1:A1) -> Bluebird<T> { })
		@:overload(function<T, A1, A2>(func:(arg1:A1, arg2:A2, callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.PromisifyOptions):(arg1:A1, arg2:A2) -> Bluebird<T> { })
		@:overload(function<T, A1, A2, A3>(func:(arg1:A1, arg2:A2, arg3:A3, callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.PromisifyOptions):(arg1:A1, arg2:A2, arg3:A3) -> Bluebird<T> { })
		@:overload(function<T, A1, A2, A3, A4>(func:(arg1:A1, arg2:A2, arg3:A3, arg4:A4, callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.PromisifyOptions):(arg1:A1, arg2:A2, arg3:A3, arg4:A4) -> Bluebird<T> { })
		@:overload(function<T, A1, A2, A3, A4, A5>(func:(arg1:A1, arg2:A2, arg3:A3, arg4:A4, arg5:A5, callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.PromisifyOptions):(arg1:A1, arg2:A2, arg3:A3, arg4:A4, arg5:A5) -> Bluebird<T> { })
		@:overload(function(nodeFunction:(args:haxe.extern.Rest<Dynamic>) -> Void, ?options:bluebird.PromisifyOptions):(args:haxe.extern.Rest<Dynamic>) -> Bluebird<Dynamic> { })
		function promisify<T>(func:(callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.PromisifyOptions):() -> Bluebird<T>;
		/**
			Promisifies the entire object by going through the object's properties and creating an async equivalent of each function on the object and its prototype chain.
			
			The promisified method name will be the original method name postfixed with `Async`. Returns the input object.
			
			Note that the original methods on the object are not overwritten but new methods are created with the `Async`-postfix. For example,
			if you `promisifyAll()` the node.js `fs` object use `fs.statAsync()` to call the promisified `stat` method.
		**/
		function promisifyAll<T>(target:T, ?options:bluebird.PromisifyAllOptions<T>):T;
		/**
			Returns a promise that is resolved by a node style callback function.
		**/
		function fromNode<T>(resolver:(callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.FromNodeOptions):Bluebird<T>;
		function fromCallback<T>(resolver:(callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.FromNodeOptions):Bluebird<T>;
		/**
			Returns a function that can use `yield` to run asynchronous code synchronously.
			
			This feature requires the support of generators which are drafted in the next version of the language.
			Node version greater than `0.11.2` is required and needs to be executed with the `--harmony-generators` (or `--harmony`) command-line switch.
		**/
		@:overload(function<T, A1>(generatorFunction:(a1:A1) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1) -> Bluebird<T> { })
		@:overload(function<T, A1, A2>(generatorFunction:(a1:A1, a2:A2) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1, a2:A2) -> Bluebird<T> { })
		@:overload(function<T, A1, A2, A3>(generatorFunction:(a1:A1, a2:A2, a3:A3) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1, a2:A2, a3:A3) -> Bluebird<T> { })
		@:overload(function<T, A1, A2, A3, A4>(generatorFunction:(a1:A1, a2:A2, a3:A3, a4:A4) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1, a2:A2, a3:A3, a4:A4) -> Bluebird<T> { })
		@:overload(function<T, A1, A2, A3, A4, A5>(generatorFunction:(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5) -> Bluebird<T> { })
		@:overload(function<T, A1, A2, A3, A4, A5, A6>(generatorFunction:(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5, a6:A6) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5, a6:A6) -> Bluebird<T> { })
		@:overload(function<T, A1, A2, A3, A4, A5, A6, A7>(generatorFunction:(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5, a6:A6, a7:A7) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5, a6:A6, a7:A7) -> Bluebird<T> { })
		@:overload(function<T, A1, A2, A3, A4, A5, A6, A7, A8>(generatorFunction:(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5, a6:A6, a7:A7, a8:A8) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5, a6:A6, a7:A7, a8:A8) -> Bluebird<T> { })
		function coroutine<T>(generatorFunction:() -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):() -> Bluebird<T>;
		/**
			Add `handler` as the handler to call when there is a possibly unhandled rejection. The default handler logs the error stack to stderr or `console.error` in browsers.
			
			Passing no value or a non-function will have the effect of removing any kind of handling for possibly unhandled rejections.
			
			Add handler as the handler to call when there is a possibly unhandled rejection.
			The default handler logs the error stack to stderr or console.error in browsers.
			
			Passing no value or a non-function will have the effect of removing any kind of handling for possibly unhandled rejections.
			
			Note: this hook is specific to the bluebird instance its called on, application developers should use global rejection events.
		**/
		@:overload(function(?handler:(error:js.lib.Error, promise:Bluebird<Dynamic>) -> Void):Void { })
		function onPossiblyUnhandledRejection(handler:(reason:Dynamic) -> Dynamic):Void;
		/**
			Given an array, or a promise of an array, which contains promises (or a mix of promises and values) return a promise that is fulfilled when all the items in the array are fulfilled.
			The promise's fulfillment value is an array with fulfillment values at respective positions to the original array.
			If any promise in the array rejects, the returned promise is rejected with the rejection reason.
		**/
		@:overload(function<T1, T2, T3, T4>(values:ts.Tuple4<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>, bluebird.Resolvable<T3>, bluebird.Resolvable<T4>>):Bluebird<ts.Tuple4<T1, T2, T3, T4>> { })
		@:overload(function<T1, T2, T3>(values:ts.Tuple3<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>, bluebird.Resolvable<T3>>):Bluebird<ts.Tuple3<T1, T2, T3>> { })
		@:overload(function<T1, T2>(values:ts.Tuple2<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>>):Bluebird<ts.Tuple2<T1, T2>> { })
		@:overload(function<T1>(values:ts.Tuple1<bluebird.Resolvable<T1>>):Bluebird<ts.Tuple1<T1>> { })
		@:overload(function<R>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>):Bluebird<Array<R>> { })
		function all<T1, T2, T3, T4, T5>(values:ts.Tuple5<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>, bluebird.Resolvable<T3>, bluebird.Resolvable<T4>, bluebird.Resolvable<T5>>):Bluebird<ts.Tuple5<T1, T2, T3, T4, T5>>;
		@:overload(function<T1, T2, T3, T4>(values:ts.Tuple4<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>, bluebird.Resolvable<T3>, bluebird.Resolvable<T4>>):Bluebird<ts.Tuple4<bluebird.Inspection<T1>, bluebird.Inspection<T2>, bluebird.Inspection<T3>, bluebird.Inspection<T4>>> { })
		@:overload(function<T1, T2, T3>(values:ts.Tuple3<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>, bluebird.Resolvable<T3>>):Bluebird<ts.Tuple3<bluebird.Inspection<T1>, bluebird.Inspection<T2>, bluebird.Inspection<T3>>> { })
		@:overload(function<T1, T2>(values:ts.Tuple2<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>>):Bluebird<ts.Tuple2<bluebird.Inspection<T1>, bluebird.Inspection<T2>>> { })
		@:overload(function<T1>(values:ts.Tuple1<bluebird.Resolvable<T1>>):Bluebird<ts.Tuple1<bluebird.Inspection<T1>>> { })
		@:overload(function<R>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>):Bluebird<Array<bluebird.Inspection<R>>> { })
		function allSettled<T1, T2, T3, T4, T5>(values:ts.Tuple5<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>, bluebird.Resolvable<T3>, bluebird.Resolvable<T4>, bluebird.Resolvable<T5>>):Bluebird<ts.Tuple5<bluebird.Inspection<T1>, bluebird.Inspection<T2>, bluebird.Inspection<T3>, bluebird.Inspection<T4>, bluebird.Inspection<T5>>>;
		/**
			Like ``Promise.all`` but for object properties instead of array items. Returns a promise that is fulfilled when all the properties of the object are fulfilled.
			
			The promise's fulfillment value is an object with fulfillment values at respective keys to the original object.
			If any promise in the object rejects, the returned promise is rejected with the rejection reason.
			
			If `object` is a trusted `Promise`, then it will be treated as a promise for object rather than for its properties.
			All other objects are treated for their properties as is returned by `Object.keys` - the object's own enumerable properties.
			
			*The original object is not modified.*
		**/
		@:overload(function<T>(object:js.lib.PromiseLike<bluebird.ResolvableProps<T>>):Bluebird<T> { })
		@:overload(function<T>(object:bluebird.ResolvableProps<T>):Bluebird<T> { })
		function props<K, V>(map:bluebird.Resolvable<js.lib.Map<K, bluebird.Resolvable<V>>>):Bluebird<js.lib.Map<K, V>>;
		/**
			Like `Promise.some()`, with 1 as `count`. However, if the promise fulfills, the fulfillment value is not an array of 1 but the value directly.
		**/
		function any<R>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>):Bluebird<R>;
		/**
			Given an array, or a promise of an array, which contains promises (or a mix of promises and values) return a promise that is
			fulfilled or rejected as soon as a promise in the array is fulfilled or rejected with the respective rejection reason or fulfillment value.
			
			**Note** If you pass empty array or a sparse array with no values, or a promise/thenable for such, it will be forever pending.
		**/
		function race<R>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>):Bluebird<R>;
		/**
			Initiate a competitive race between multiple promises or values (values will become immediately fulfilled promises).
			When `count` amount of promises have been fulfilled, the returned promise is fulfilled with an array that contains the fulfillment values of
			the winners in order of resolution.
			
			If too many promises are rejected so that the promise can never become fulfilled,
			it will be immediately rejected with an array of rejection reasons in the order they were thrown in.
			
			*The original array is not modified.*
		**/
		function some<R>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>, count:Float):Bluebird<Array<R>>;
		/**
			Promise.join(
			   Promise<any>|any values...,
			   function handler
			) -> Promise
			For coordinating multiple concurrent discrete promises.
			
			Note: In 1.x and 0.x Promise.join used to be a Promise.all that took the values in as arguments instead in an array.
			This behavior has been deprecated but is still supported partially - when the last argument is an immediate function value the new semantics will apply
		**/
		@:overload(function<R, A1, A2>(arg1:bluebird.Resolvable<A1>, arg2:bluebird.Resolvable<A2>, handler:(arg1:A1, arg2:A2) -> bluebird.Resolvable<R>):Bluebird<R> { })
		@:overload(function<R, A1, A2, A3>(arg1:bluebird.Resolvable<A1>, arg2:bluebird.Resolvable<A2>, arg3:bluebird.Resolvable<A3>, handler:(arg1:A1, arg2:A2, arg3:A3) -> bluebird.Resolvable<R>):Bluebird<R> { })
		@:overload(function<R, A1, A2, A3, A4>(arg1:bluebird.Resolvable<A1>, arg2:bluebird.Resolvable<A2>, arg3:bluebird.Resolvable<A3>, arg4:bluebird.Resolvable<A4>, handler:(arg1:A1, arg2:A2, arg3:A3, arg4:A4) -> bluebird.Resolvable<R>):Bluebird<R> { })
		@:overload(function<R, A1, A2, A3, A4, A5>(arg1:bluebird.Resolvable<A1>, arg2:bluebird.Resolvable<A2>, arg3:bluebird.Resolvable<A3>, arg4:bluebird.Resolvable<A4>, arg5:bluebird.Resolvable<A5>, handler:(arg1:A1, arg2:A2, arg3:A3, arg4:A4, arg5:A5) -> bluebird.Resolvable<R>):Bluebird<R> { })
		@:overload(function<R>(values:haxe.extern.Rest<bluebird.Resolvable<R>>):Bluebird<Array<R>> { })
		function join<R, A1>(arg1:bluebird.Resolvable<A1>, handler:(arg1:A1) -> bluebird.Resolvable<R>):Bluebird<R>;
		/**
			Map an array, or a promise of an array,
			which contains a promises (or a mix of promises and values) with the given `mapper` function with the signature `(item, index, arrayLength)`
			where `item` is the resolved value of a respective promise in the input array.
			If any promise in the input array is rejected the returned promise is rejected as well.
			
			If the `mapper` function returns promises or thenables, the returned promise will wait for all the mapped results to be resolved as well.
			
			*The original array is not modified.*
		**/
		function map<R, U>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>, mapper:bluebird.IterateFunction<R, U>, ?options:bluebird.ConcurrencyOption):Bluebird<Array<U>>;
		/**
			Reduce an array, or a promise of an array,
			which contains a promises (or a mix of promises and values) with the given `reducer` function with the signature `(total, current, index, arrayLength)`
			where `item` is the resolved value of a respective promise in the input array.
			If any promise in the input array is rejected the returned promise is rejected as well.
			
			If the reducer function returns a promise or a thenable, the result for the promise is awaited for before continuing with next iteration.
			
			*The original array is not modified. If no `initialValue` is given and the array doesn't contain at least 2 items,
			the callback will not be called and `undefined` is returned.
			
			If `initialValue` is given and the array doesn't have at least 1 item, `initialValue` is returned.*
		**/
		function reduce<R, U>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>, reducer:(total:U, current:R, index:Float, arrayLength:Float) -> bluebird.Resolvable<U>, ?initialValue:U):Bluebird<U>;
		/**
			Filter an array, or a promise of an array,
			which contains a promises (or a mix of promises and values) with the given `filterer` function with the signature `(item, index, arrayLength)`
			where `item` is the resolved value of a respective promise in the input array.
			If any promise in the input array is rejected the returned promise is rejected as well.
			
			The return values from the filtered functions are coerced to booleans, with the exception of promises and thenables which are awaited for their eventual result.
			
			*The original array is not modified.
		**/
		function filter<R>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>, filterer:bluebird.IterateFunction<R, Bool>, ?option:bluebird.ConcurrencyOption):Bluebird<Array<R>>;
		/**
			Iterate over an array, or a promise of an array,
			which contains promises (or a mix of promises and values) with the given iterator function with the signature `(item, index, value)`
			where item is the resolved value of a respective promise in the input array.
			Iteration happens serially. If any promise in the input array is rejected the returned promise is rejected as well.
			
			Resolves to the original array unmodified, this method is meant to be used for side effects.
			If the iterator function returns a promise or a thenable, the result for the promise is awaited for before continuing with next iteration.
		**/
		function each<R>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>, iterator:bluebird.IterateFunction<R, Dynamic>):Bluebird<Array<R>>;
		/**
			Given an Iterable(arrays are Iterable), or a promise of an Iterable, which produces promises (or a mix of promises and values),
			iterate over all the values in the Iterable into an array and iterate over the array serially, in-order.
			
			Returns a promise for an array that contains the values returned by the iterator function in their respective positions.
			The iterator won't be called for an item until its previous item, and the promise returned by the iterator for that item are fulfilled.
			This results in a mapSeries kind of utility but it can also be used simply as a side effect iterator similar to Array#forEach.
			
			If any promise in the input array is rejected or any promise returned by the iterator function is rejected, the result will be rejected as well.
		**/
		function mapSeries<R, U>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>, iterator:bluebird.IterateFunction<R, U>):Bluebird<Array<U>>;
		/**
			In conjunction with `.disposer`, using will make sure that no matter what, the specified disposer
			  will be called when the promise returned by the callback passed to using has settled. The disposer is
			  necessary because there is no standard interface in node for disposing resources.
		**/
		@:native("using")
		@:overload(function<R1, R2, T>(disposer:bluebird.Disposer<R1>, disposer2:bluebird.Disposer<R2>, executor:(transaction1:R1, transaction2:R2) -> js.lib.PromiseLike<T>):Bluebird<T> { })
		@:overload(function<R1, R2, R3, T>(disposer:bluebird.Disposer<R1>, disposer2:bluebird.Disposer<R2>, disposer3:bluebird.Disposer<R3>, executor:(transaction1:R1, transaction2:R2, transaction3:R3) -> js.lib.PromiseLike<T>):Bluebird<T> { })
		function using_<R, T>(disposer:bluebird.Disposer<R>, executor:(transaction:R) -> js.lib.PromiseLike<T>):Bluebird<T>;
		/**
			Configure long stack traces, warnings, monitoring and cancellation.
			Note that even though false is the default here, a development environment might be detected which automatically
			  enables long stack traces and warnings.
		**/
		function config(options:{ /** Enable warnings **/ @:optional var warnings : ts.AnyOf2<Bool, { /** Enables all warnings except forgotten return statements. **/ var wForgottenReturn : Bool; }>; /** Enable long stack traces **/ @:optional var longStackTraces : Bool; /** Enable cancellation **/ @:optional var cancellation : Bool; /** Enable monitoring **/ @:optional var monitoring : Bool; /** Enable async hooks **/ @:optional var asyncHooks : Bool; }):Void;
		/**
			Create a new promise. The passed in function will receive functions `resolve` and `reject` as its arguments which can be called to seal the fate of the created promise.
			If promise cancellation is enabled, passed in function will receive one more function argument `onCancel` that allows to register an optional cancellation callback.
		**/
		var Promise : Dynamic;
		/**
			The version number of the library
		**/
		var version : String;
		/**
			Returns a new independent copy of the Bluebird library.
			
			This method should be used before you use any of the methods which would otherwise alter the global Bluebird object - to avoid polluting global state.
		**/
		function getNewLibraryCopy():Dynamic;
		/**
			This is relevant to browser environments with no module loader.
			
			Release control of the Promise namespace to whatever it was before this library was loaded.
			Returns a reference to the library namespace so you can attach it to something else.
		**/
		function noConflict():Dynamic;
		/**
			Changes how bluebird schedules calls a-synchronously.
		**/
		function setScheduler(scheduler:(callback:(args:haxe.extern.Rest<Dynamic>) -> Void) -> Void):Void;
	};
	/**
		This is relevant to browser environments with no module loader.
		
		Release control of the Promise namespace to whatever it was before this library was loaded.
		Returns a reference to the library namespace so you can attach it to something else.
	**/
	static function noConflict():{
		var prototype : Bluebird<Dynamic>;
		/**
			Start the chain of promises with `Promise.try`. Any synchronous exceptions will be turned into rejections on the returned promise.
			
			Note about second argument: if it's specifically a true array, its values become respective arguments for the function call.
			Otherwise it is passed as is as the first argument for the function call.
			
			Alias for `attempt();` for compatibility with earlier ECMAScript version.
		**/
		@:native("try")
		function try_<R>(fn:() -> bluebird.Resolvable<R>):Bluebird<R>;
		function attempt<R>(fn:() -> bluebird.Resolvable<R>):Bluebird<R>;
		/**
			Returns a new function that wraps the given function `fn`.
			The new function will always return a promise that is fulfilled with the original functions return values or rejected with thrown exceptions from the original function.
			This method is convenient when a function can sometimes return synchronously or throw synchronously.
		**/
		@:overload(function<R, A1>(fn:(arg1:A1) -> bluebird.Resolvable<R>):(arg1:A1) -> Bluebird<R> { })
		@:overload(function<R, A1, A2>(fn:(arg1:A1, arg2:A2) -> bluebird.Resolvable<R>):(arg1:A1, arg2:A2) -> Bluebird<R> { })
		@:overload(function<R, A1, A2, A3>(fn:(arg1:A1, arg2:A2, arg3:A3) -> bluebird.Resolvable<R>):(arg1:A1, arg2:A2, arg3:A3) -> Bluebird<R> { })
		@:overload(function<R, A1, A2, A3, A4>(fn:(arg1:A1, arg2:A2, arg3:A3, arg4:A4) -> bluebird.Resolvable<R>):(arg1:A1, arg2:A2, arg3:A3, arg4:A4) -> Bluebird<R> { })
		@:overload(function<R, A1, A2, A3, A4, A5>(fn:(arg1:A1, arg2:A2, arg3:A3, arg4:A4, arg5:A5) -> bluebird.Resolvable<R>):(arg1:A1, arg2:A2, arg3:A3, arg4:A4, arg5:A5) -> Bluebird<R> { })
		@:overload(function<R>(fn:(args:haxe.extern.Rest<Dynamic>) -> bluebird.Resolvable<R>):(args:haxe.extern.Rest<Dynamic>) -> Bluebird<R> { })
		function method<R>(fn:() -> bluebird.Resolvable<R>):() -> Bluebird<R>;
		/**
			Create a promise that is resolved with the given `value`. If `value` is a thenable or promise, the returned promise will assume its state.
		**/
		@:overload(function<R>(value:bluebird.Resolvable<R>):Bluebird<R> { })
		function resolve():Bluebird<Void>;
		/**
			Create a promise that is rejected with the given `reason`.
		**/
		function reject(reason:Dynamic):Bluebird<Any>;
		function defer<R>():bluebird.Resolver<R>;
		/**
			Cast the given `value` to a trusted promise.
			
			If `value` is already a trusted `Promise`, it is returned as is. If `value` is not a thenable, a fulfilled is: Promise returned with `value` as its fulfillment value.
			If `value` is a thenable (Promise-like object, like those returned by jQuery's `$.ajax`), returns a trusted that: Promise assimilates the state of the thenable.
		**/
		@:native("cast")
		function cast_<R>(value:bluebird.Resolvable<R>):Bluebird<R>;
		/**
			Sugar for `Promise.resolve(undefined).bind(thisArg);`. See `.bind()`.
		**/
		function bind(thisArg:Dynamic):Bluebird<Void>;
		/**
			See if `value` is a trusted Promise.
		**/
		function is(value:Dynamic):Bool;
		/**
			Call this right after the library is loaded to enabled long stack traces.
			
			Long stack traces cannot be disabled after being enabled, and cannot be enabled after promises have already been created.
			Long stack traces imply a substantial performance penalty, around 4-5x for throughput and 0.5x for latency.
		**/
		function longStackTraces():Void;
		/**
			Returns a promise that will be resolved with value (or undefined) after given ms milliseconds.
			If value is a promise, the delay will start counting down when it is fulfilled and the returned
			  promise will be fulfilled with the fulfillment value of the value promise.
		**/
		@:overload(function(ms:Float):Bluebird<Void> { })
		function delay<R>(ms:Float, value:bluebird.Resolvable<R>):Bluebird<R>;
		/**
			Returns a function that will wrap the given `nodeFunction`.
			
			Instead of taking a callback, the returned function will return a promise whose fate is decided by the callback behavior of the given node function.
			The node function should conform to node.js convention of accepting a callback as last argument and
			calling that callback with error as the first argument and success value on the second argument.
			
			If the `nodeFunction` calls its callback with multiple success values, the fulfillment value will be an array of them.
			
			If you pass a `receiver`, the `nodeFunction` will be called as a method on the `receiver`.
		**/
		@:overload(function<T, A1>(func:(arg1:A1, callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.PromisifyOptions):(arg1:A1) -> Bluebird<T> { })
		@:overload(function<T, A1, A2>(func:(arg1:A1, arg2:A2, callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.PromisifyOptions):(arg1:A1, arg2:A2) -> Bluebird<T> { })
		@:overload(function<T, A1, A2, A3>(func:(arg1:A1, arg2:A2, arg3:A3, callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.PromisifyOptions):(arg1:A1, arg2:A2, arg3:A3) -> Bluebird<T> { })
		@:overload(function<T, A1, A2, A3, A4>(func:(arg1:A1, arg2:A2, arg3:A3, arg4:A4, callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.PromisifyOptions):(arg1:A1, arg2:A2, arg3:A3, arg4:A4) -> Bluebird<T> { })
		@:overload(function<T, A1, A2, A3, A4, A5>(func:(arg1:A1, arg2:A2, arg3:A3, arg4:A4, arg5:A5, callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.PromisifyOptions):(arg1:A1, arg2:A2, arg3:A3, arg4:A4, arg5:A5) -> Bluebird<T> { })
		@:overload(function(nodeFunction:(args:haxe.extern.Rest<Dynamic>) -> Void, ?options:bluebird.PromisifyOptions):(args:haxe.extern.Rest<Dynamic>) -> Bluebird<Dynamic> { })
		function promisify<T>(func:(callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.PromisifyOptions):() -> Bluebird<T>;
		/**
			Promisifies the entire object by going through the object's properties and creating an async equivalent of each function on the object and its prototype chain.
			
			The promisified method name will be the original method name postfixed with `Async`. Returns the input object.
			
			Note that the original methods on the object are not overwritten but new methods are created with the `Async`-postfix. For example,
			if you `promisifyAll()` the node.js `fs` object use `fs.statAsync()` to call the promisified `stat` method.
		**/
		function promisifyAll<T>(target:T, ?options:bluebird.PromisifyAllOptions<T>):T;
		/**
			Returns a promise that is resolved by a node style callback function.
		**/
		function fromNode<T>(resolver:(callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.FromNodeOptions):Bluebird<T>;
		function fromCallback<T>(resolver:(callback:ts.AnyOf2<(err:Dynamic) -> Void, (err:Dynamic, result:T) -> Void>) -> Void, ?options:bluebird.FromNodeOptions):Bluebird<T>;
		/**
			Returns a function that can use `yield` to run asynchronous code synchronously.
			
			This feature requires the support of generators which are drafted in the next version of the language.
			Node version greater than `0.11.2` is required and needs to be executed with the `--harmony-generators` (or `--harmony`) command-line switch.
		**/
		@:overload(function<T, A1>(generatorFunction:(a1:A1) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1) -> Bluebird<T> { })
		@:overload(function<T, A1, A2>(generatorFunction:(a1:A1, a2:A2) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1, a2:A2) -> Bluebird<T> { })
		@:overload(function<T, A1, A2, A3>(generatorFunction:(a1:A1, a2:A2, a3:A3) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1, a2:A2, a3:A3) -> Bluebird<T> { })
		@:overload(function<T, A1, A2, A3, A4>(generatorFunction:(a1:A1, a2:A2, a3:A3, a4:A4) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1, a2:A2, a3:A3, a4:A4) -> Bluebird<T> { })
		@:overload(function<T, A1, A2, A3, A4, A5>(generatorFunction:(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5) -> Bluebird<T> { })
		@:overload(function<T, A1, A2, A3, A4, A5, A6>(generatorFunction:(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5, a6:A6) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5, a6:A6) -> Bluebird<T> { })
		@:overload(function<T, A1, A2, A3, A4, A5, A6, A7>(generatorFunction:(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5, a6:A6, a7:A7) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5, a6:A6, a7:A7) -> Bluebird<T> { })
		@:overload(function<T, A1, A2, A3, A4, A5, A6, A7, A8>(generatorFunction:(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5, a6:A6, a7:A7, a8:A8) -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5, a6:A6, a7:A7, a8:A8) -> Bluebird<T> { })
		function coroutine<T>(generatorFunction:() -> js.lib.IterableIterator<Dynamic>, ?options:bluebird.CoroutineOptions):() -> Bluebird<T>;
		/**
			Add `handler` as the handler to call when there is a possibly unhandled rejection. The default handler logs the error stack to stderr or `console.error` in browsers.
			
			Passing no value or a non-function will have the effect of removing any kind of handling for possibly unhandled rejections.
			
			Add handler as the handler to call when there is a possibly unhandled rejection.
			The default handler logs the error stack to stderr or console.error in browsers.
			
			Passing no value or a non-function will have the effect of removing any kind of handling for possibly unhandled rejections.
			
			Note: this hook is specific to the bluebird instance its called on, application developers should use global rejection events.
		**/
		@:overload(function(?handler:(error:js.lib.Error, promise:Bluebird<Dynamic>) -> Void):Void { })
		function onPossiblyUnhandledRejection(handler:(reason:Dynamic) -> Dynamic):Void;
		/**
			Given an array, or a promise of an array, which contains promises (or a mix of promises and values) return a promise that is fulfilled when all the items in the array are fulfilled.
			The promise's fulfillment value is an array with fulfillment values at respective positions to the original array.
			If any promise in the array rejects, the returned promise is rejected with the rejection reason.
		**/
		@:overload(function<T1, T2, T3, T4>(values:ts.Tuple4<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>, bluebird.Resolvable<T3>, bluebird.Resolvable<T4>>):Bluebird<ts.Tuple4<T1, T2, T3, T4>> { })
		@:overload(function<T1, T2, T3>(values:ts.Tuple3<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>, bluebird.Resolvable<T3>>):Bluebird<ts.Tuple3<T1, T2, T3>> { })
		@:overload(function<T1, T2>(values:ts.Tuple2<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>>):Bluebird<ts.Tuple2<T1, T2>> { })
		@:overload(function<T1>(values:ts.Tuple1<bluebird.Resolvable<T1>>):Bluebird<ts.Tuple1<T1>> { })
		@:overload(function<R>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>):Bluebird<Array<R>> { })
		function all<T1, T2, T3, T4, T5>(values:ts.Tuple5<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>, bluebird.Resolvable<T3>, bluebird.Resolvable<T4>, bluebird.Resolvable<T5>>):Bluebird<ts.Tuple5<T1, T2, T3, T4, T5>>;
		@:overload(function<T1, T2, T3, T4>(values:ts.Tuple4<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>, bluebird.Resolvable<T3>, bluebird.Resolvable<T4>>):Bluebird<ts.Tuple4<bluebird.Inspection<T1>, bluebird.Inspection<T2>, bluebird.Inspection<T3>, bluebird.Inspection<T4>>> { })
		@:overload(function<T1, T2, T3>(values:ts.Tuple3<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>, bluebird.Resolvable<T3>>):Bluebird<ts.Tuple3<bluebird.Inspection<T1>, bluebird.Inspection<T2>, bluebird.Inspection<T3>>> { })
		@:overload(function<T1, T2>(values:ts.Tuple2<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>>):Bluebird<ts.Tuple2<bluebird.Inspection<T1>, bluebird.Inspection<T2>>> { })
		@:overload(function<T1>(values:ts.Tuple1<bluebird.Resolvable<T1>>):Bluebird<ts.Tuple1<bluebird.Inspection<T1>>> { })
		@:overload(function<R>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>):Bluebird<Array<bluebird.Inspection<R>>> { })
		function allSettled<T1, T2, T3, T4, T5>(values:ts.Tuple5<bluebird.Resolvable<T1>, bluebird.Resolvable<T2>, bluebird.Resolvable<T3>, bluebird.Resolvable<T4>, bluebird.Resolvable<T5>>):Bluebird<ts.Tuple5<bluebird.Inspection<T1>, bluebird.Inspection<T2>, bluebird.Inspection<T3>, bluebird.Inspection<T4>, bluebird.Inspection<T5>>>;
		/**
			Like ``Promise.all`` but for object properties instead of array items. Returns a promise that is fulfilled when all the properties of the object are fulfilled.
			
			The promise's fulfillment value is an object with fulfillment values at respective keys to the original object.
			If any promise in the object rejects, the returned promise is rejected with the rejection reason.
			
			If `object` is a trusted `Promise`, then it will be treated as a promise for object rather than for its properties.
			All other objects are treated for their properties as is returned by `Object.keys` - the object's own enumerable properties.
			
			*The original object is not modified.*
		**/
		@:overload(function<T>(object:js.lib.PromiseLike<bluebird.ResolvableProps<T>>):Bluebird<T> { })
		@:overload(function<T>(object:bluebird.ResolvableProps<T>):Bluebird<T> { })
		function props<K, V>(map:bluebird.Resolvable<js.lib.Map<K, bluebird.Resolvable<V>>>):Bluebird<js.lib.Map<K, V>>;
		/**
			Like `Promise.some()`, with 1 as `count`. However, if the promise fulfills, the fulfillment value is not an array of 1 but the value directly.
		**/
		function any<R>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>):Bluebird<R>;
		/**
			Given an array, or a promise of an array, which contains promises (or a mix of promises and values) return a promise that is
			fulfilled or rejected as soon as a promise in the array is fulfilled or rejected with the respective rejection reason or fulfillment value.
			
			**Note** If you pass empty array or a sparse array with no values, or a promise/thenable for such, it will be forever pending.
		**/
		function race<R>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>):Bluebird<R>;
		/**
			Initiate a competitive race between multiple promises or values (values will become immediately fulfilled promises).
			When `count` amount of promises have been fulfilled, the returned promise is fulfilled with an array that contains the fulfillment values of
			the winners in order of resolution.
			
			If too many promises are rejected so that the promise can never become fulfilled,
			it will be immediately rejected with an array of rejection reasons in the order they were thrown in.
			
			*The original array is not modified.*
		**/
		function some<R>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>, count:Float):Bluebird<Array<R>>;
		/**
			Promise.join(
			   Promise<any>|any values...,
			   function handler
			) -> Promise
			For coordinating multiple concurrent discrete promises.
			
			Note: In 1.x and 0.x Promise.join used to be a Promise.all that took the values in as arguments instead in an array.
			This behavior has been deprecated but is still supported partially - when the last argument is an immediate function value the new semantics will apply
		**/
		@:overload(function<R, A1, A2>(arg1:bluebird.Resolvable<A1>, arg2:bluebird.Resolvable<A2>, handler:(arg1:A1, arg2:A2) -> bluebird.Resolvable<R>):Bluebird<R> { })
		@:overload(function<R, A1, A2, A3>(arg1:bluebird.Resolvable<A1>, arg2:bluebird.Resolvable<A2>, arg3:bluebird.Resolvable<A3>, handler:(arg1:A1, arg2:A2, arg3:A3) -> bluebird.Resolvable<R>):Bluebird<R> { })
		@:overload(function<R, A1, A2, A3, A4>(arg1:bluebird.Resolvable<A1>, arg2:bluebird.Resolvable<A2>, arg3:bluebird.Resolvable<A3>, arg4:bluebird.Resolvable<A4>, handler:(arg1:A1, arg2:A2, arg3:A3, arg4:A4) -> bluebird.Resolvable<R>):Bluebird<R> { })
		@:overload(function<R, A1, A2, A3, A4, A5>(arg1:bluebird.Resolvable<A1>, arg2:bluebird.Resolvable<A2>, arg3:bluebird.Resolvable<A3>, arg4:bluebird.Resolvable<A4>, arg5:bluebird.Resolvable<A5>, handler:(arg1:A1, arg2:A2, arg3:A3, arg4:A4, arg5:A5) -> bluebird.Resolvable<R>):Bluebird<R> { })
		@:overload(function<R>(values:haxe.extern.Rest<bluebird.Resolvable<R>>):Bluebird<Array<R>> { })
		function join<R, A1>(arg1:bluebird.Resolvable<A1>, handler:(arg1:A1) -> bluebird.Resolvable<R>):Bluebird<R>;
		/**
			Map an array, or a promise of an array,
			which contains a promises (or a mix of promises and values) with the given `mapper` function with the signature `(item, index, arrayLength)`
			where `item` is the resolved value of a respective promise in the input array.
			If any promise in the input array is rejected the returned promise is rejected as well.
			
			If the `mapper` function returns promises or thenables, the returned promise will wait for all the mapped results to be resolved as well.
			
			*The original array is not modified.*
		**/
		function map<R, U>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>, mapper:bluebird.IterateFunction<R, U>, ?options:bluebird.ConcurrencyOption):Bluebird<Array<U>>;
		/**
			Reduce an array, or a promise of an array,
			which contains a promises (or a mix of promises and values) with the given `reducer` function with the signature `(total, current, index, arrayLength)`
			where `item` is the resolved value of a respective promise in the input array.
			If any promise in the input array is rejected the returned promise is rejected as well.
			
			If the reducer function returns a promise or a thenable, the result for the promise is awaited for before continuing with next iteration.
			
			*The original array is not modified. If no `initialValue` is given and the array doesn't contain at least 2 items,
			the callback will not be called and `undefined` is returned.
			
			If `initialValue` is given and the array doesn't have at least 1 item, `initialValue` is returned.*
		**/
		function reduce<R, U>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>, reducer:(total:U, current:R, index:Float, arrayLength:Float) -> bluebird.Resolvable<U>, ?initialValue:U):Bluebird<U>;
		/**
			Filter an array, or a promise of an array,
			which contains a promises (or a mix of promises and values) with the given `filterer` function with the signature `(item, index, arrayLength)`
			where `item` is the resolved value of a respective promise in the input array.
			If any promise in the input array is rejected the returned promise is rejected as well.
			
			The return values from the filtered functions are coerced to booleans, with the exception of promises and thenables which are awaited for their eventual result.
			
			*The original array is not modified.
		**/
		function filter<R>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>, filterer:bluebird.IterateFunction<R, Bool>, ?option:bluebird.ConcurrencyOption):Bluebird<Array<R>>;
		/**
			Iterate over an array, or a promise of an array,
			which contains promises (or a mix of promises and values) with the given iterator function with the signature `(item, index, value)`
			where item is the resolved value of a respective promise in the input array.
			Iteration happens serially. If any promise in the input array is rejected the returned promise is rejected as well.
			
			Resolves to the original array unmodified, this method is meant to be used for side effects.
			If the iterator function returns a promise or a thenable, the result for the promise is awaited for before continuing with next iteration.
		**/
		function each<R>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>, iterator:bluebird.IterateFunction<R, Dynamic>):Bluebird<Array<R>>;
		/**
			Given an Iterable(arrays are Iterable), or a promise of an Iterable, which produces promises (or a mix of promises and values),
			iterate over all the values in the Iterable into an array and iterate over the array serially, in-order.
			
			Returns a promise for an array that contains the values returned by the iterator function in their respective positions.
			The iterator won't be called for an item until its previous item, and the promise returned by the iterator for that item are fulfilled.
			This results in a mapSeries kind of utility but it can also be used simply as a side effect iterator similar to Array#forEach.
			
			If any promise in the input array is rejected or any promise returned by the iterator function is rejected, the result will be rejected as well.
		**/
		function mapSeries<R, U>(values:bluebird.Resolvable<Iterable<bluebird.Resolvable<R>>>, iterator:bluebird.IterateFunction<R, U>):Bluebird<Array<U>>;
		/**
			In conjunction with `.disposer`, using will make sure that no matter what, the specified disposer
			  will be called when the promise returned by the callback passed to using has settled. The disposer is
			  necessary because there is no standard interface in node for disposing resources.
		**/
		@:native("using")
		@:overload(function<R1, R2, T>(disposer:bluebird.Disposer<R1>, disposer2:bluebird.Disposer<R2>, executor:(transaction1:R1, transaction2:R2) -> js.lib.PromiseLike<T>):Bluebird<T> { })
		@:overload(function<R1, R2, R3, T>(disposer:bluebird.Disposer<R1>, disposer2:bluebird.Disposer<R2>, disposer3:bluebird.Disposer<R3>, executor:(transaction1:R1, transaction2:R2, transaction3:R3) -> js.lib.PromiseLike<T>):Bluebird<T> { })
		function using_<R, T>(disposer:bluebird.Disposer<R>, executor:(transaction:R) -> js.lib.PromiseLike<T>):Bluebird<T>;
		/**
			Configure long stack traces, warnings, monitoring and cancellation.
			Note that even though false is the default here, a development environment might be detected which automatically
			  enables long stack traces and warnings.
		**/
		function config(options:{ /** Enable warnings **/ @:optional var warnings : ts.AnyOf2<Bool, { /** Enables all warnings except forgotten return statements. **/ var wForgottenReturn : Bool; }>; /** Enable long stack traces **/ @:optional var longStackTraces : Bool; /** Enable cancellation **/ @:optional var cancellation : Bool; /** Enable monitoring **/ @:optional var monitoring : Bool; /** Enable async hooks **/ @:optional var asyncHooks : Bool; }):Void;
		/**
			Create a new promise. The passed in function will receive functions `resolve` and `reject` as its arguments which can be called to seal the fate of the created promise.
			If promise cancellation is enabled, passed in function will receive one more function argument `onCancel` that allows to register an optional cancellation callback.
		**/
		var Promise : Dynamic;
		/**
			The version number of the library
		**/
		var version : String;
		/**
			Returns a new independent copy of the Bluebird library.
			
			This method should be used before you use any of the methods which would otherwise alter the global Bluebird object - to avoid polluting global state.
		**/
		function getNewLibraryCopy():Dynamic;
		/**
			This is relevant to browser environments with no module loader.
			
			Release control of the Promise namespace to whatever it was before this library was loaded.
			Returns a reference to the library namespace so you can attach it to something else.
		**/
		function noConflict():Dynamic;
		/**
			Changes how bluebird schedules calls a-synchronously.
		**/
		function setScheduler(scheduler:(callback:(args:haxe.extern.Rest<Dynamic>) -> Void) -> Void):Void;
	};
	/**
		Changes how bluebird schedules calls a-synchronously.
	**/
	static function setScheduler(scheduler:(callback:(args:haxe.extern.Rest<Dynamic>) -> Void) -> Void):Void;
}