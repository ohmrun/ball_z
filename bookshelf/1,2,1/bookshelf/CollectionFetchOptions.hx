package bookshelf;

typedef CollectionFetchOptions = {
	@:optional
	var require : Bool;
	@:optional
	var withRelated : ts.AnyOf2<String, Array<String>>;
};