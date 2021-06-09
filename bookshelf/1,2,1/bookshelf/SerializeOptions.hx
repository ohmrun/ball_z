package bookshelf;

typedef SerializeOptions = {
	@:optional
	var shallow : Bool;
	@:optional
	var omitPivot : Bool;
	@:optional
	var visibility : Bool;
};