package bookshelf;

typedef LoadOptions = {
	var withRelated : Array<ts.AnyOf2<String, WithRelatedQuery>>;
	@:optional
	var transacting : knex.types.index.Transaction<Dynamic, Dynamic>;
	@:optional
	var debug : Bool;
	@:optional
	var withSchema : String;
};