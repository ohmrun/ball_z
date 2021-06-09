package bookshelf;

@:jsRequire("bookshelf", "ModelBase") extern class ModelBase<T> extends Events<ts.AnyOf2<Collection<T>, T>> {
	function new(?attributes:Dynamic, ?options:ModelOptions);
	/**
		If overriding, must use a getter instead of a plain property.
	**/
	var idAttribute : String;
	var id : Dynamic;
	var attributes : Dynamic;
	function clear():T;
	function clone():T;
	function escape(attribute:String):String;
	function format(attributes:Dynamic):Dynamic;
	function get(attribute:String):Dynamic;
	function has(attribute:String):Bool;
	function hasChanged(?attribute:String):Bool;
	function isNew():Bool;
	function parse(response:Dynamic):Dynamic;
	function previousAttributes():Dynamic;
	function previous(attribute:String):Dynamic;
	function related<R>(relation:String):ts.AnyOf2<Collection<R>, R>;
	function serialize(?options:SerializeOptions):Dynamic;
	@:overload(function(attribute:String, ?value:Dynamic, ?options:SetOptions):T { })
	function set(?attribute:{ }, ?options:SetOptions):T;
	function timestamp(?options:TimestampOptions):Dynamic;
	function toJSON(?options:SerializeOptions):Dynamic;
	function unset(attribute:String):T;
	@:overload(function<R>(attributes:haxe.extern.Rest<String>):R { })
	function omit<R>(?predicate:lodash.ObjectIterator<Dynamic, Bool>, ?thisArg:Dynamic):R;
	@:overload(function<R>(attributes:haxe.extern.Rest<String>):R { })
	function pick<R>(?predicate:lodash.ObjectIterator<Dynamic, Bool>, ?thisArg:Dynamic):R;
	/**
		Should be declared as a getter instead of a plain property.
	**/
	@:optional
	var hasTimestamps : ts.AnyOf2<Bool, Array<String>>;
	/**
		Should be declared as a getter instead of a plain property. Should be required, but cannot have abstract properties yet.
	**/
	@:optional
	var tableName : String;
	static var prototype : ModelBase<Dynamic>;
}