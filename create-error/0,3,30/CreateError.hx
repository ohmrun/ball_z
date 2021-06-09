@:jsRequire("create-error") extern class CreateError {
	@:overload(function<T>(name:String, ?properties:Dynamic):T { })
	@:overload(function<T>(Target:create_error.Error<js.lib.Error>, ?name:String, ?properties:Dynamic):T { })
	@:selfCall
	static function call():create_error.Error<js.lib.Error>;
}