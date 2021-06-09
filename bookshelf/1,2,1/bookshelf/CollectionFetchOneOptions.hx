package bookshelf;

typedef CollectionFetchOneOptions = {
	@:optional
	var require : Bool;
	@:optional
	var columns : ts.AnyOf2<String, Array<String>>;
};