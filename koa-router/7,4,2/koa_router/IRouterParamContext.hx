package koa_router;

typedef IRouterParamContext<StateT, CustomT> = {
	/**
		url params
	**/
	var params : { };
	/**
		the router instance
	**/
	var router : KoaRouter<StateT, CustomT>;
	/**
		Matched route
	**/
	var _matchedRoute : Null<ts.AnyOf2<String, js.lib.RegExp>>;
	var _matchedRouteName : Null<String>;
};