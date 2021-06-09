package bookshelf;

typedef ModelOptions = {
	@:optional
	var tableName : String;
	@:optional
	var hasTimestamps : Bool;
	@:optional
	var parse : Bool;
};