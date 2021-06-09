package koa_router;

typedef IRouterOptions = {
	/**
		Prefix for all routes.
	**/
	@:optional
	var prefix : String;
	/**
		Methods which should be supported by the router.
	**/
	@:optional
	var methods : Array<String>;
	@:optional
	var routerPath : String;
	/**
		Whether or not routing should be case-sensitive.
	**/
	@:optional
	var sensitive : Bool;
	/**
		Whether or not routes should matched strictly.
		
		If strict matching is enabled, the trailing slash is taken into
		account when matching routes.
	**/
	@:optional
	var strict : Bool;
};