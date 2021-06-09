package knex;

typedef Logger = {
	@:optional
	dynamic function warn(message:String):Void;
	@:optional
	dynamic function error(message:String):Void;
	@:optional
	dynamic function debug(message:String):Void;
	@:optional
	dynamic function deprecate(method:String, alternative:String):Void;
};