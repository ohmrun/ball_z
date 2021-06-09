package bookshelf;

typedef CollectionCreateOptions = {
	@:optional
	var tableName : String;
	@:optional
	var hasTimestamps : Bool;
	@:optional
	var parse : Bool;
	@:optional
	var transacting : knex.types.index.Transaction<Dynamic, Dynamic>;
	@:optional
	var debug : Bool;
	@:optional
	var withSchema : String;
	@:optional
	var at : Float;
	@:optional
	var merge : Bool;
	@:optional
	var silent : Bool;
	@:optional
	var method : String;
	@:optional
	var defaults : String;
	@:optional
	var patch : Bool;
	@:optional
	var require : Bool;
	@:optional
	var autoRefresh : Bool;
};