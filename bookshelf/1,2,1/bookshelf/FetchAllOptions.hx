package bookshelf;

typedef FetchAllOptions = {
	@:optional
	var require : Bool;
	@:optional
	var columns : ts.AnyOf2<String, Array<String>>;
	@:optional
	var withRelated : Array<ts.AnyOf2<String, WithRelatedQuery>>;
	@:optional
	var transacting : knex.types.index.Transaction<Dynamic, Dynamic>;
	@:optional
	var debug : Bool;
	@:optional
	var withSchema : String;
};