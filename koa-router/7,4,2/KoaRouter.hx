@:jsRequire("koa-router") extern class KoaRouter<StateT, CustomT> {
	/**
		Create a new router.
	**/
	function new(?opt:koa_router.IRouterOptions);
	var params : Dynamic;
	var stack : Array<koa_router.Layer>;
	/**
		Use given middleware.
		
		Middleware run in the order they are defined by `.use()`. They are invoked
		sequentially, requests start at the first middleware and work their way
		"down" the middleware stack.
	**/
	@:overload(function(path:ts.AnyOf3<String, js.lib.RegExp, Array<String>>, middleware:haxe.extern.Rest<koa_compose.Middleware<koa.ParameterizedContext<StateT, Dynamic, Dynamic>>>):KoaRouter<StateT, CustomT> { })
	function use(middleware:haxe.extern.Rest<koa_compose.Middleware<koa.ParameterizedContext<StateT, Dynamic, Dynamic>>>):KoaRouter<StateT, CustomT>;
	/**
		HTTP get method
	**/
	@:overload(function(path:ts.AnyOf3<String, js.lib.RegExp, Array<ts.AnyOf2<String, js.lib.RegExp>>>, middleware:haxe.extern.Rest<koa_compose.Middleware<koa.ParameterizedContext<StateT, Dynamic, Dynamic>>>):KoaRouter<StateT, CustomT> { })
	@:overload(function<T, U>(name:String, path:ts.AnyOf2<String, js.lib.RegExp>, middleware:koa_compose.Middleware<koa.ParameterizedContext<T, U, Dynamic>>, routeHandler:koa_compose.Middleware<koa.ParameterizedContext<Dynamic, Dynamic, Dynamic>>):KoaRouter<Dynamic, Dynamic> { })
	@:overload(function<T, U>(path:ts.AnyOf3<String, js.lib.RegExp, Array<ts.AnyOf2<String, js.lib.RegExp>>>, middleware:koa_compose.Middleware<koa.ParameterizedContext<T, U, Dynamic>>, routeHandler:koa_compose.Middleware<koa.ParameterizedContext<Dynamic, Dynamic, Dynamic>>):KoaRouter<Dynamic, Dynamic> { })
	function get(name:String, path:ts.AnyOf2<String, js.lib.RegExp>, middleware:haxe.extern.Rest<koa_compose.Middleware<koa.ParameterizedContext<StateT, Dynamic, Dynamic>>>):KoaRouter<StateT, CustomT>;
	/**
		HTTP post method
	**/
	@:overload(function(path:ts.AnyOf3<String, js.lib.RegExp, Array<ts.AnyOf2<String, js.lib.RegExp>>>, middleware:haxe.extern.Rest<koa_compose.Middleware<koa.ParameterizedContext<StateT, Dynamic, Dynamic>>>):KoaRouter<StateT, CustomT> { })
	@:overload(function<T, U>(name:String, path:ts.AnyOf2<String, js.lib.RegExp>, middleware:koa_compose.Middleware<koa.ParameterizedContext<T, U, Dynamic>>, routeHandler:koa_compose.Middleware<koa.ParameterizedContext<Dynamic, Dynamic, Dynamic>>):KoaRouter<Dynamic, Dynamic> { })
	@:overload(function<T, U>(path:ts.AnyOf3<String, js.lib.RegExp, Array<ts.AnyOf2<String, js.lib.RegExp>>>, middleware:koa_compose.Middleware<koa.ParameterizedContext<T, U, Dynamic>>, routeHandler:koa_compose.Middleware<koa.ParameterizedContext<Dynamic, Dynamic, Dynamic>>):KoaRouter<Dynamic, Dynamic> { })
	function post(name:String, path:ts.AnyOf2<String, js.lib.RegExp>, middleware:haxe.extern.Rest<koa_compose.Middleware<koa.ParameterizedContext<StateT, Dynamic, Dynamic>>>):KoaRouter<StateT, CustomT>;
	/**
		HTTP put method
	**/
	@:overload(function(path:ts.AnyOf3<String, js.lib.RegExp, Array<ts.AnyOf2<String, js.lib.RegExp>>>, middleware:haxe.extern.Rest<koa_compose.Middleware<koa.ParameterizedContext<StateT, Dynamic, Dynamic>>>):KoaRouter<StateT, CustomT> { })
	@:overload(function<T, U>(name:String, path:ts.AnyOf2<String, js.lib.RegExp>, middleware:koa_compose.Middleware<koa.ParameterizedContext<T, U, Dynamic>>, routeHandler:koa_compose.Middleware<koa.ParameterizedContext<Dynamic, Dynamic, Dynamic>>):KoaRouter<Dynamic, Dynamic> { })
	@:overload(function<T, U>(path:ts.AnyOf3<String, js.lib.RegExp, Array<ts.AnyOf2<String, js.lib.RegExp>>>, middleware:koa_compose.Middleware<koa.ParameterizedContext<T, U, Dynamic>>, routeHandler:koa_compose.Middleware<koa.ParameterizedContext<Dynamic, Dynamic, Dynamic>>):KoaRouter<Dynamic, Dynamic> { })
	function put(name:String, path:ts.AnyOf2<String, js.lib.RegExp>, middleware:haxe.extern.Rest<koa_compose.Middleware<koa.ParameterizedContext<StateT, Dynamic, Dynamic>>>):KoaRouter<StateT, CustomT>;
	/**
		HTTP link method
	**/
	@:overload(function(path:ts.AnyOf3<String, js.lib.RegExp, Array<ts.AnyOf2<String, js.lib.RegExp>>>, middleware:haxe.extern.Rest<koa_compose.Middleware<koa.ParameterizedContext<StateT, Dynamic, Dynamic>>>):KoaRouter<StateT, CustomT> { })
	@:overload(function<T, U>(name:String, path:ts.AnyOf2<String, js.lib.RegExp>, middleware:koa_compose.Middleware<koa.ParameterizedContext<T, U, Dynamic>>, routeHandler:koa_compose.Middleware<koa.ParameterizedContext<Dynamic, Dynamic, Dynamic>>):KoaRouter<Dynamic, Dynamic> { })
	@:overload(function<T, U>(path:ts.AnyOf3<String, js.lib.RegExp, Array<ts.AnyOf2<String, js.lib.RegExp>>>, middleware:koa_compose.Middleware<koa.ParameterizedContext<T, U, Dynamic>>, routeHandler:koa_compose.Middleware<koa.ParameterizedContext<Dynamic, Dynamic, Dynamic>>):KoaRouter<Dynamic, Dynamic> { })
	function link(name:String, path:ts.AnyOf2<String, js.lib.RegExp>, middleware:haxe.extern.Rest<koa_compose.Middleware<koa.ParameterizedContext<StateT, Dynamic, Dynamic>>>):KoaRouter<StateT, CustomT>;
	/**
		HTTP unlink method
	**/
	@:overload(function(path:ts.AnyOf3<String, js.lib.RegExp, Array<ts.AnyOf2<String, js.lib.RegExp>>>, middleware:haxe.extern.Rest<koa_compose.Middleware<koa.ParameterizedContext<StateT, Dynamic, Dynamic>>>):KoaRouter<StateT, CustomT> { })
	@:overload(function<T, U>(name:String, path:ts.AnyOf2<String, js.lib.RegExp>, middleware:koa_compose.Middleware<koa.ParameterizedContext<T, U, Dynamic>>, routeHandler:koa_compose.Middleware<koa.ParameterizedContext<Dynamic, Dynamic, Dynamic>>):KoaRouter<Dynamic, Dynamic> { })
	@:overload(function<T, U>(path:ts.AnyOf3<String, js.lib.RegExp, Array<ts.AnyOf2<String, js.lib.RegExp>>>, middleware:koa_compose.Middleware<koa.ParameterizedContext<T, U, Dynamic>>, routeHandler:koa_compose.Middleware<koa.ParameterizedContext<Dynamic, Dynamic, Dynamic>>):KoaRouter<Dynamic, Dynamic> { })
	function unlink(name:String, path:ts.AnyOf2<String, js.lib.RegExp>, middleware:haxe.extern.Rest<koa_compose.Middleware<koa.ParameterizedContext<StateT, Dynamic, Dynamic>>>):KoaRouter<StateT, CustomT>;
	/**
		HTTP delete method
	**/
	@:overload(function(path:ts.AnyOf3<String, js.lib.RegExp, Array<ts.AnyOf2<String, js.lib.RegExp>>>, middleware:haxe.extern.Rest<koa_compose.Middleware<koa.ParameterizedContext<StateT, Dynamic, Dynamic>>>):KoaRouter<StateT, CustomT> { })
	@:overload(function<T, U>(name:String, path:ts.AnyOf2<String, js.lib.RegExp>, middleware:koa_compose.Middleware<koa.ParameterizedContext<T, U, Dynamic>>, routeHandler:koa_compose.Middleware<koa.ParameterizedContext<Dynamic, Dynamic, Dynamic>>):KoaRouter<Dynamic, Dynamic> { })
	@:overload(function<T, U>(path:ts.AnyOf3<String, js.lib.RegExp, Array<ts.AnyOf2<String, js.lib.RegExp>>>, middleware:koa_compose.Middleware<koa.ParameterizedContext<T, U, Dynamic>>, routeHandler:koa_compose.Middleware<koa.ParameterizedContext<Dynamic, Dynamic, Dynamic>>):KoaRouter<Dynamic, Dynamic> { })
	function delete(name:String, path:ts.AnyOf2<String, js.lib.RegExp>, middleware:haxe.extern.Rest<koa_compose.Middleware<koa.ParameterizedContext<StateT, Dynamic, Dynamic>>>):KoaRouter<StateT, CustomT>;
	/**
		Alias for `router.delete()` because delete is a reserved word
	**/
	@:overload(function(path:ts.AnyOf3<String, js.lib.RegExp, Array<ts.AnyOf2<String, js.lib.RegExp>>>, middleware:haxe.extern.Rest<koa_compose.Middleware<koa.ParameterizedContext<StateT, Dynamic, Dynamic>>>):KoaRouter<StateT, CustomT> { })
	@:overload(function<T, U>(name:String, path:ts.AnyOf2<String, js.lib.RegExp>, middleware:koa_compose.Middleware<koa.ParameterizedContext<T, U, Dynamic>>, routeHandler:koa_compose.Middleware<koa.ParameterizedContext<Dynamic, Dynamic, Dynamic>>):KoaRouter<Dynamic, Dynamic> { })
	@:overload(function<T, U>(path:ts.AnyOf3<String, js.lib.RegExp, Array<ts.AnyOf2<String, js.lib.RegExp>>>, middleware:koa_compose.Middleware<koa.ParameterizedContext<T, U, Dynamic>>, routeHandler:koa_compose.Middleware<koa.ParameterizedContext<Dynamic, Dynamic, Dynamic>>):KoaRouter<Dynamic, Dynamic> { })
	function del(name:String, path:ts.AnyOf2<String, js.lib.RegExp>, middleware:haxe.extern.Rest<koa_compose.Middleware<koa.ParameterizedContext<StateT, Dynamic, Dynamic>>>):KoaRouter<StateT, CustomT>;
	/**
		HTTP head method
	**/
	@:overload(function(path:ts.AnyOf3<String, js.lib.RegExp, Array<ts.AnyOf2<String, js.lib.RegExp>>>, middleware:haxe.extern.Rest<koa_compose.Middleware<koa.ParameterizedContext<StateT, Dynamic, Dynamic>>>):KoaRouter<StateT, CustomT> { })
	@:overload(function<T, U>(name:String, path:ts.AnyOf2<String, js.lib.RegExp>, middleware:koa_compose.Middleware<koa.ParameterizedContext<T, U, Dynamic>>, routeHandler:koa_compose.Middleware<koa.ParameterizedContext<Dynamic, Dynamic, Dynamic>>):KoaRouter<Dynamic, Dynamic> { })
	@:overload(function<T, U>(path:ts.AnyOf3<String, js.lib.RegExp, Array<ts.AnyOf2<String, js.lib.RegExp>>>, middleware:koa_compose.Middleware<koa.ParameterizedContext<T, U, Dynamic>>, routeHandler:koa_compose.Middleware<koa.ParameterizedContext<Dynamic, Dynamic, Dynamic>>):KoaRouter<Dynamic, Dynamic> { })
	function head(name:String, path:ts.AnyOf2<String, js.lib.RegExp>, middleware:haxe.extern.Rest<koa_compose.Middleware<koa.ParameterizedContext<StateT, Dynamic, Dynamic>>>):KoaRouter<StateT, CustomT>;
	/**
		HTTP options method
	**/
	@:overload(function(path:ts.AnyOf3<String, js.lib.RegExp, Array<ts.AnyOf2<String, js.lib.RegExp>>>, middleware:haxe.extern.Rest<koa_compose.Middleware<koa.ParameterizedContext<StateT, Dynamic, Dynamic>>>):KoaRouter<StateT, CustomT> { })
	@:overload(function<T, U>(name:String, path:ts.AnyOf2<String, js.lib.RegExp>, middleware:koa_compose.Middleware<koa.ParameterizedContext<T, U, Dynamic>>, routeHandler:koa_compose.Middleware<koa.ParameterizedContext<Dynamic, Dynamic, Dynamic>>):KoaRouter<Dynamic, Dynamic> { })
	@:overload(function<T, U>(path:ts.AnyOf3<String, js.lib.RegExp, Array<ts.AnyOf2<String, js.lib.RegExp>>>, middleware:koa_compose.Middleware<koa.ParameterizedContext<T, U, Dynamic>>, routeHandler:koa_compose.Middleware<koa.ParameterizedContext<Dynamic, Dynamic, Dynamic>>):KoaRouter<Dynamic, Dynamic> { })
	function options(name:String, path:ts.AnyOf2<String, js.lib.RegExp>, middleware:haxe.extern.Rest<koa_compose.Middleware<koa.ParameterizedContext<StateT, Dynamic, Dynamic>>>):KoaRouter<StateT, CustomT>;
	/**
		HTTP patch method
	**/
	@:overload(function(path:ts.AnyOf3<String, js.lib.RegExp, Array<ts.AnyOf2<String, js.lib.RegExp>>>, middleware:haxe.extern.Rest<koa_compose.Middleware<koa.ParameterizedContext<StateT, Dynamic, Dynamic>>>):KoaRouter<StateT, CustomT> { })
	@:overload(function<T, U>(name:String, path:ts.AnyOf2<String, js.lib.RegExp>, middleware:koa_compose.Middleware<koa.ParameterizedContext<T, U, Dynamic>>, routeHandler:koa_compose.Middleware<koa.ParameterizedContext<Dynamic, Dynamic, Dynamic>>):KoaRouter<Dynamic, Dynamic> { })
	@:overload(function<T, U>(path:ts.AnyOf3<String, js.lib.RegExp, Array<ts.AnyOf2<String, js.lib.RegExp>>>, middleware:koa_compose.Middleware<koa.ParameterizedContext<T, U, Dynamic>>, routeHandler:koa_compose.Middleware<koa.ParameterizedContext<Dynamic, Dynamic, Dynamic>>):KoaRouter<Dynamic, Dynamic> { })
	function patch(name:String, path:ts.AnyOf2<String, js.lib.RegExp>, middleware:haxe.extern.Rest<koa_compose.Middleware<koa.ParameterizedContext<StateT, Dynamic, Dynamic>>>):KoaRouter<StateT, CustomT>;
	/**
		Register route with all methods.
	**/
	@:overload(function(path:ts.AnyOf3<String, js.lib.RegExp, Array<ts.AnyOf2<String, js.lib.RegExp>>>, middleware:haxe.extern.Rest<koa_compose.Middleware<koa.ParameterizedContext<StateT, Dynamic, Dynamic>>>):KoaRouter<StateT, CustomT> { })
	@:overload(function<T, U>(name:String, path:ts.AnyOf2<String, js.lib.RegExp>, middleware:koa_compose.Middleware<koa.ParameterizedContext<T, U, Dynamic>>, routeHandler:koa_compose.Middleware<koa.ParameterizedContext<Dynamic, Dynamic, Dynamic>>):KoaRouter<Dynamic, Dynamic> { })
	@:overload(function<T, U>(path:ts.AnyOf3<String, js.lib.RegExp, Array<ts.AnyOf2<String, js.lib.RegExp>>>, middleware:koa_compose.Middleware<koa.ParameterizedContext<T, U, Dynamic>>, routeHandler:koa_compose.Middleware<koa.ParameterizedContext<Dynamic, Dynamic, Dynamic>>):KoaRouter<Dynamic, Dynamic> { })
	function all(name:String, path:ts.AnyOf2<String, js.lib.RegExp>, middleware:haxe.extern.Rest<koa_compose.Middleware<koa.ParameterizedContext<StateT, Dynamic, Dynamic>>>):KoaRouter<StateT, CustomT>;
	/**
		Set the path prefix for a Router instance that was already initialized.
	**/
	function prefix(prefix:String):KoaRouter<StateT, CustomT>;
	/**
		Returns router middleware which dispatches a route matching the request.
	**/
	function routes():koa_compose.Middleware<koa.ParameterizedContext<StateT, Dynamic, Dynamic>>;
	/**
		Returns router middleware which dispatches a route matching the request.
	**/
	function middleware():koa_compose.Middleware<koa.ParameterizedContext<StateT, Dynamic, Dynamic>>;
	/**
		Returns separate middleware for responding to `OPTIONS` requests with
		an `Allow` header containing the allowed methods, as well as responding
		with `405 Method Not Allowed` and `501 Not Implemented` as appropriate.
	**/
	function allowedMethods(?options:koa_router.IRouterAllowedMethodsOptions):koa_compose.Middleware<koa.ParameterizedContext<StateT, Dynamic, Dynamic>>;
	/**
		Redirect `source` to `destination` URL with optional 30x status `code`.
		
		Both `source` and `destination` can be route names.
	**/
	function redirect(source:String, destination:String, ?code:Float):KoaRouter<StateT, CustomT>;
	/**
		Create and register a route.
	**/
	function register(path:ts.AnyOf2<String, js.lib.RegExp>, methods:Array<String>, middleware:ts.AnyOf2<koa_compose.Middleware<koa.ParameterizedContext<StateT, Dynamic, Dynamic>>, Array<koa_compose.Middleware<koa.ParameterizedContext<StateT, Dynamic, Dynamic>>>>, ?opts:koa_router.ILayerOptions):koa_router.Layer;
	/**
		Lookup route with given `name`.
	**/
	@:overload(function(name:String):Bool { })
	function route(name:String):koa_router.Layer;
	/**
		Generate URL for route. Takes either map of named `params` or series of
		arguments (for regular expression routes)
		
		router = new Router();
		router.get('user', "/users/:id", ...
		
		router.url('user', { id: 3 });
		// => "/users/3"
		
		Query can be generated from third argument:
		
		router.url('user', { id: 3 }, { query: { limit: 1 } });
		// => "/users/3?limit=1"
		
		router.url('user', { id: 3 }, { query: "limit=1" });
		// => "/users/3?limit=1"
	**/
	@:overload(function(name:String, params:Dynamic, ?options:koa_router.IUrlOptionsQuery):js.lib.Error { })
	function url(name:String, params:Dynamic, ?options:koa_router.IUrlOptionsQuery):String;
	/**
		Match given `path` and return corresponding routes.
	**/
	function match(path:String, method:String):koa_router.IRoutesMatch;
	/**
		Run middleware for named route parameters. Useful for auto-loading or validation.
	**/
	function param(param:String, middleware:koa_router.IParamMiddleware<StateT, CustomT>):KoaRouter<StateT, CustomT>;
	static var prototype : KoaRouter<Dynamic, Dynamic>;
	/**
		Generate URL from url pattern and given `params`.
	**/
	@:native("url")
	static function url_(path:ts.AnyOf2<String, js.lib.RegExp>, params:Dynamic):String;
}