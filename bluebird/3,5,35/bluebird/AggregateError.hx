package bluebird;

/**
	A collection of errors. `AggregateError` is an array-like object, with numeric indices and a `.length` property.
	  It supports all generic array methods such as `.forEach` directly.
	
	`AggregateError`s are caught in `.error` handlers, even if the contained errors are not operational.
	
	`Promise.some` and `Promise.any` use `AggregateError` as rejection reason when they fail.
**/
@:jsRequire("bluebird", "AggregateError") extern class AggregateError extends js.lib.Error {
	function new();
	var length : Float;
	function join(?separator:String):String;
	function pop():js.lib.Error;
	function push(errors:haxe.extern.Rest<js.lib.Error>):Float;
	function shift():js.lib.Error;
	function unshift(errors:haxe.extern.Rest<js.lib.Error>):Float;
	function slice(?begin:Float, ?end:Float):AggregateError;
	function filter(callback:(element:js.lib.Error, index:Float, array:AggregateError) -> Bool, ?thisArg:Dynamic):AggregateError;
	function forEach(callback:(element:js.lib.Error, index:Float, array:AggregateError) -> Void, ?thisArg:Dynamic):Null<Any>;
	function some(callback:(element:js.lib.Error, index:Float, array:AggregateError) -> Bool, ?thisArg:Dynamic):Bool;
	function every(callback:(element:js.lib.Error, index:Float, array:AggregateError) -> Bool, ?thisArg:Dynamic):Bool;
	function map(callback:(element:js.lib.Error, index:Float, array:AggregateError) -> Bool, ?thisArg:Dynamic):AggregateError;
	function indexOf(searchElement:js.lib.Error, ?fromIndex:Float):Float;
	function lastIndexOf(searchElement:js.lib.Error, ?fromIndex:Float):Float;
	function reduce(callback:(accumulator:Dynamic, element:js.lib.Error, index:Float, array:AggregateError) -> Dynamic, ?initialValue:Dynamic):Dynamic;
	function reduceRight(callback:(previousValue:Dynamic, element:js.lib.Error, index:Float, array:AggregateError) -> Dynamic, ?initialValue:Dynamic):Dynamic;
	function sort(?compareFunction:(errLeft:js.lib.Error, errRight:js.lib.Error) -> Float):AggregateError;
	function reverse():AggregateError;
	static var prototype : AggregateError;
}