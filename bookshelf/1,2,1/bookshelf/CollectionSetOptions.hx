package bookshelf;

typedef CollectionSetOptions = {
	@:optional
	var add : Bool;
	@:optional
	var remove : Bool;
	@:optional
	var merge : Bool;
	@:optional
	var silent : Bool;
};