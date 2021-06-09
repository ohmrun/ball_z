package bookshelf;

typedef DestroyOptions = {
	@:optional
	var require : Bool;
	@:optional
	var transacting : knex.types.index.Transaction<Dynamic, Dynamic>;
	@:optional
	var debug : Bool;
	@:optional
	var withSchema : String;
};