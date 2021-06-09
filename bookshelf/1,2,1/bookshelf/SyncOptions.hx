package bookshelf;

typedef SyncOptions = {
	@:optional
	var transacting : knex.types.index.Transaction<Dynamic, Dynamic>;
	@:optional
	var debug : Bool;
	@:optional
	var withSchema : String;
};