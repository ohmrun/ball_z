package bluebird;

typedef Resolver<R> = {
	/**
		Returns a reference to the controlled promise that can be passed to clients.
	**/
	var promise : Bluebird<R>;
	/**
		Resolve the underlying promise with `value` as the resolution value. If `value` is a thenable or a promise, the underlying promise will assume its state.
	**/
	@:overload(function():Void { })
	function resolve(value:R):Void;
	/**
		Reject the underlying promise with `reason` as the rejection reason.
	**/
	function reject(reason:Dynamic):Void;
	/**
		Gives you a callback representation of the `PromiseResolver`. Note that this is not a method but a property.
		The callback accepts error object in first argument and success values on the 2nd parameter and the rest, I.E. node js conventions.
		
		If the the callback is called with multiple success values, the resolver fulfills its promise with an array of the values.
	**/
	function callback(err:Dynamic, value:R, values:haxe.extern.Rest<R>):Void;
};