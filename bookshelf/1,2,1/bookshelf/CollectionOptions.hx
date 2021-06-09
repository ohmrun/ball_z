package bookshelf;

typedef CollectionOptions<T> = {
	@:optional
	var comparator : ts.AnyOf3<String, Bool, (a:T, b:T) -> Float>;
};