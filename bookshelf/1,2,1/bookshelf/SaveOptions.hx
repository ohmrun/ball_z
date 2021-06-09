package bookshelf;

typedef SaveOptions = {
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
	@:optional
	var transacting : knex.types.index.Transaction<Dynamic, Dynamic>;
	@:optional
	var debug : Bool;
	@:optional
	var withSchema : String;
};