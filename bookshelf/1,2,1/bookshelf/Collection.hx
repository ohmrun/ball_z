package bookshelf;

@:jsRequire("bookshelf", "Collection") extern class Collection<T> extends CollectionBase<T> {
	function new();
	function attach(ids:Dynamic, ?options:SyncOptions):Bluebird<Collection<T>>;
	function count(?column:String, ?options:SyncOptions):Bluebird<ts.AnyOf2<String, Float>>;
	function create(model:{ }, ?options:CollectionCreateOptions):Bluebird<T>;
	@:overload(function(?options:SyncOptions):Bluebird<Dynamic> { })
	function detach(ids:Array<Dynamic>, ?options:SyncOptions):Bluebird<Dynamic>;
	function fetchOne(?options:CollectionFetchOneOptions):Bluebird<T>;
	function load(relations:ts.AnyOf2<String, Array<String>>, ?options:SyncOptions):Bluebird<Collection<T>>;
	function orderBy(column:String, ?order:SortOrder):Collection<T>;
	@:overload(function(callback:(qb:knex.types.index.QueryBuilder<Dynamic, Dynamic>) -> Void):Collection<T> { })
	@:overload(function(query:haxe.extern.Rest<String>):Collection<T> { })
	@:overload(function(query:{ }):Collection<T> { })
	function query():knex.types.index.QueryBuilder<Dynamic, Dynamic>;
	function resetQuery():Collection<T>;
	function through<R>(interim:ModelSubclass, ?throughForeignKey:String, ?otherKey:String):Collection<R>;
	function updatePivot(attributes:Dynamic, ?options:PivotOptions):Bluebird<Float>;
	function withPivot(columns:Array<String>):Collection<T>;
	static var prototype : Collection<Dynamic>;
	static function extend<T>(?prototypeProperties:Dynamic, ?classProperties:Dynamic):haxe.Constraints.Function;
	static function forge<T>(?attributes:Dynamic, ?options:ModelOptions):T;
	static var EmptyError : create_error.Error<js.lib.Error>;
}