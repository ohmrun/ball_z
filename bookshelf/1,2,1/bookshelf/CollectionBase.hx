package bookshelf;

@:jsRequire("bookshelf", "CollectionBase") extern class CollectionBase<T> extends Events<T> {
	function new(?models:Array<T>, ?options:CollectionOptions<T>);
	var length : Float;
	function add(models:ts.AnyOf2<Array<T>, Array<{ }>>, ?options:CollectionAddOptions):Collection<T>;
	function at(index:Float):T;
	function clone():Collection<T>;
	function fetch(?options:CollectionFetchOptions):Bluebird<Collection<T>>;
	function findWhere(match:{ }):T;
	function get(id:Dynamic):T;
	function invokeThen(name:String, args:haxe.extern.Rest<Dynamic>):Bluebird<Dynamic>;
	function parse(response:Dynamic):Dynamic;
	function pluck(attribute:String):Array<Dynamic>;
	function pop():Void;
	function push(model:Dynamic):Collection<T>;
	function reduceThen<R>(iterator:(prev:R, cur:T, idx:Float, array:Array<T>) -> R, initialValue:R, context:Dynamic):Bluebird<R>;
	@:overload(function(model:Array<T>, ?options:EventOptions):Array<T> { })
	function remove(model:T, ?options:EventOptions):T;
	function reset(model:Array<Dynamic>, ?options:CollectionAddOptions):Array<T>;
	function serialize(?options:SerializeOptions):Array<Dynamic>;
	function set(models:ts.AnyOf2<Array<T>, Array<{ }>>, ?options:CollectionSetOptions):Collection<T>;
	function shift(?options:EventOptions):Void;
	function slice(?begin:Float, ?end:Float):Void;
	function toJSON(?options:SerializeOptions):Array<Dynamic>;
	function unshift(model:Dynamic, ?options:CollectionAddOptions):Void;
	function where(match:{ }, firstOnly:Bool):ts.AnyOf2<Collection<T>, T>;
	function includes(value:Dynamic, ?fromIndex:Float):Bool;
	@:overload(function<R>(?predicate:R):lodash.Dictionary<Float> { })
	function countBy(?predicate:ts.AnyOf3<String, lodash.ListIterator<T, Bool>, lodash.ObjectIterator<lodash.Dictionary<T>, Bool>>, ?thisArg:Dynamic):lodash.Dictionary<Float>;
	@:overload(function<R>(?predicate:R):Bool { })
	function every(?predicate:ts.AnyOf3<String, lodash.ListIterator<T, Bool>, lodash.ObjectIterator<lodash.Dictionary<T>, Bool>>, ?thisArg:Dynamic):Bool;
	@:overload(function<R>(?predicate:R):Array<T> { })
	function filter(?predicate:ts.AnyOf3<String, lodash.ListIterator<T, Bool>, lodash.ObjectIterator<lodash.Dictionary<T>, Bool>>, ?thisArg:Dynamic):Array<T>;
	@:overload(function<R>(?predicate:R):T { })
	function find(?predicate:ts.AnyOf3<String, lodash.ListIterator<T, Bool>, lodash.ObjectIterator<lodash.Dictionary<T>, Bool>>, ?thisArg:Dynamic):T;
	function first():T;
	@:overload(function(?callback:lodash.ObjectIterator<lodash.Dictionary<T>, Void>, ?thisArg:Dynamic):lodash.Dictionary<T> { })
	@:overload(function(?callback:lodash.ObjectIterator<T, Void>, ?thisArg:Dynamic):T { })
	function forEach(?callback:lodash.ListIterator<T, Void>, ?thisArg:Dynamic):lodash.List_<T>;
	@:overload(function<R>(?predicate:R):lodash.Dictionary<Array<T>> { })
	function groupBy(?predicate:ts.AnyOf3<String, lodash.ListIterator<T, Bool>, lodash.ObjectIterator<lodash.Dictionary<T>, Bool>>, ?thisArg:Dynamic):lodash.Dictionary<Array<T>>;
	function invokeMap(methodName:ts.AnyOf2<String, haxe.Constraints.Function>, args:haxe.extern.Rest<Dynamic>):Dynamic;
	function isEmpty():Bool;
	function keys():Array<String>;
	function last():T;
	@:overload(function<U>(?predicate:ts.AnyOf2<String, lodash.ObjectIterator<lodash.Dictionary<T>, U>>, ?thisArg:Dynamic):Array<U> { })
	@:overload(function<U>(?predicate:String):Array<U> { })
	function map<U>(?predicate:ts.AnyOf2<String, lodash.ListIterator<T, U>>, ?thisArg:Dynamic):Array<U>;
	function reduce<R>(?callback:lodash.MemoIterator<T, R>, ?accumulator:R, ?thisArg:Dynamic):R;
	function reduceRight<R>(?callback:lodash.MemoIterator<T, R>, ?accumulator:R, ?thisArg:Dynamic):R;
	@:overload(function<R>(?predicate:R):Array<T> { })
	function reject(?predicate:ts.AnyOf3<String, lodash.ListIterator<T, Bool>, lodash.ObjectIterator<lodash.Dictionary<T>, Bool>>, ?thisArg:Dynamic):Array<T>;
	function tail():Array<T>;
	@:overload(function<R>(?predicate:R):Bool { })
	function some(?predicate:ts.AnyOf3<String, lodash.ListIterator<T, Bool>, lodash.ObjectIterator<lodash.Dictionary<T>, Bool>>, ?thisArg:Dynamic):Bool;
	@:overload(function<R>(?predicate:R):Array<T> { })
	function sortBy(?predicate:ts.AnyOf3<String, lodash.ListIterator<T, Bool>, lodash.ObjectIterator<lodash.Dictionary<T>, Bool>>, ?thisArg:Dynamic):Array<T>;
	function toArray():Array<T>;
	static var prototype : CollectionBase<Dynamic>;
}