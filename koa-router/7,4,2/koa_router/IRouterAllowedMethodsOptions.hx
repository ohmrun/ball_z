package koa_router;

typedef IRouterAllowedMethodsOptions = {
	/**
		throw error instead of setting status and header
	**/
	@:optional
	@:native("throw")
	var throw_ : Bool;
	/**
		throw the returned value in place of the default NotImplemented error
	**/
	@:optional
	dynamic function notImplemented():Dynamic;
	/**
		throw the returned value in place of the default MethodNotAllowed error
	**/
	@:optional
	dynamic function methodNotAllowed():Dynamic;
};