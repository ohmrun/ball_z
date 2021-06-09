package bookshelf;

@:jsRequire("bookshelf", "Model") extern class Model<T> extends ModelBase<T> {
	function new();
	function belongsTo<R>(target:{ }, ?foreignKey:String, ?foreignKeyTarget:String):R;
	function belongsToMany<R>(target:{ }, ?table:String, ?foreignKey:String, ?otherKey:String, ?foreignKeyTarget:String, ?otherKeyTarget:String):Collection<R>;
	function count(?column:String, ?options:SyncOptions):Bluebird<ts.AnyOf2<String, Float>>;
	function destroy(?options:DestroyOptions):Bluebird<T>;
	function fetch(?options:FetchOptions):Bluebird<T>;
	function fetchAll(?options:FetchAllOptions):Bluebird<Collection<T>>;
	function hasMany<R>(target:{ }, ?foreignKey:String, ?foreignKeyTarget:String):Collection<R>;
	function hasOne<R>(target:{ }, ?foreignKey:String, ?foreignKeyTarget:String):R;
	function load(relations:ts.AnyOf2<String, Array<String>>, ?options:LoadOptions):Bluebird<T>;
	function morphMany<R>(target:{ }, ?name:String, ?columnNames:Array<String>, ?morphValue:String):Collection<R>;
	function morphOne<R>(target:{ }, ?name:String, ?columnNames:Array<String>, ?morphValue:String):R;
	@:overload(function(name:String, target:haxe.extern.Rest<ModelSubclass>):T { })
	function morphTo(name:String, ?columnNames:Array<String>, target:haxe.extern.Rest<ModelSubclass>):T;
	function orderBy(column:String, ?order:SortOrder):T;
	@:overload(function(callback:(qb:knex.types.index.QueryBuilder<Dynamic, Dynamic>) -> Void):T { })
	@:overload(function(query:haxe.extern.Rest<String>):T { })
	@:overload(function(query:{ }):T { })
	function query():knex.types.index.QueryBuilder<Dynamic, Dynamic>;
	function refresh(?options:FetchOptions):Bluebird<T>;
	function resetQuery():T;
	@:overload(function(?attrs:{ }, ?options:SaveOptions):Bluebird<T> { })
	function save(?key:String, ?val:Dynamic, ?options:SaveOptions):Bluebird<T>;
	function through<R>(interim:ModelSubclass, ?throughForeignKey:String, ?otherKey:String, ?throughForeignKeyTarget:String, ?otherKeyTarget:String):R;
	@:overload(function(key:String, operatorOrValue:ts.AnyOf3<String, Float, Bool>, ?valueIfOperator:ts.AnyOf5<String, Float, Bool, Array<String>, Array<Float>>):T { })
	function where(properties:{ }):T;
	static var prototype : Model<Dynamic>;
	static function collection<T>(?models:Array<T>, ?options:CollectionOptions<T>):Collection<T>;
	@:native("count")
	static function count_(?column:String, ?options:SyncOptions):Bluebird<ts.AnyOf2<String, Float>>;
	static function extend<T>(?prototypeProperties:Dynamic, ?classProperties:Dynamic):haxe.Constraints.Function;
	@:native("fetchAll")
	static function fetchAll_<T>():Bluebird<Collection<T>>;
	static function forge<T>(?attributes:Dynamic, ?options:ModelOptions):T;
	@:overload(function<T>(key:String, operatorOrValue:ts.AnyOf3<String, Float, Bool>, ?valueIfOperator:ts.AnyOf5<String, Float, Bool, Array<String>, Array<Float>>):T { })
	@:native("where")
	static function where_<T>(properties:{ }):T;
	static var NotFoundError : create_error.Error<js.lib.Error>;
	static var NoRowsUpdatedError : create_error.Error<js.lib.Error>;
	static var NoRowsDeletedError : create_error.Error<js.lib.Error>;
}