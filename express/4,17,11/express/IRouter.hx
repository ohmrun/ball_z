package express;

typedef IRouter = {
	@:selfCall
	function call(req:express_serve_static_core.Request<express_serve_static_core.ParamsDictionary, Dynamic, Dynamic, qs.ParsedQs, { }>, res:express_serve_static_core.Response<Dynamic, { }, Float>, next:express_serve_static_core.NextFunction):Void;
	/**
		Map the given param placeholder `name`(s) to the given callback(s).
		
		Parameter mapping is used to provide pre-conditions to routes
		which use normalized placeholders. For example a _:user_id_ parameter
		could automatically load a user's information from the database without
		any additional code,
		
		The callback uses the samesignature as middleware, the only differencing
		being that the value of the placeholder is passed, in this case the _id_
		of the user. Once the `next()` function is invoked, just like middleware
		it will continue on to execute the route, or subsequent parameter functions.
		
		      app.param('user_id', function(req, res, next, id){
		        User.find(id, function(err, user){
		          if (err) {
		            next(err);
		          } else if (user) {
		            req.user = user;
		            next();
		          } else {
		            next(new Error('failed to load user'));
		          }
		        });
		      });
		
		Alternatively, you can pass only a callback, in which case you have the opportunity to alter the app.param()
	**/
	@:overload(function(callback:(name:String, matcher:js.lib.RegExp) -> express_serve_static_core.RequestParamHandler):IRouter { })
	function param(name:String, handler:express_serve_static_core.RequestParamHandler):IRouter;
	/**
		Special-cased "all" method, applying the given route `path`,
		middleware, and callback to _every_ HTTP method.
	**/
	@:overload(function<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter { })
	@:overload(function(path:express_serve_static_core.PathParams, subApplication:express_serve_static_core.Application):IRouter { })
	dynamic function all<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter;
	@:overload(function<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter { })
	@:overload(function(path:express_serve_static_core.PathParams, subApplication:express_serve_static_core.Application):IRouter { })
	dynamic function get<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter;
	@:overload(function<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter { })
	@:overload(function(path:express_serve_static_core.PathParams, subApplication:express_serve_static_core.Application):IRouter { })
	dynamic function post<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter;
	@:overload(function<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter { })
	@:overload(function(path:express_serve_static_core.PathParams, subApplication:express_serve_static_core.Application):IRouter { })
	dynamic function put<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter;
	@:overload(function<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter { })
	@:overload(function(path:express_serve_static_core.PathParams, subApplication:express_serve_static_core.Application):IRouter { })
	dynamic function delete<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter;
	@:overload(function<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter { })
	@:overload(function(path:express_serve_static_core.PathParams, subApplication:express_serve_static_core.Application):IRouter { })
	dynamic function patch<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter;
	@:overload(function<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter { })
	@:overload(function(path:express_serve_static_core.PathParams, subApplication:express_serve_static_core.Application):IRouter { })
	dynamic function options<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter;
	@:overload(function<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter { })
	@:overload(function(path:express_serve_static_core.PathParams, subApplication:express_serve_static_core.Application):IRouter { })
	dynamic function head<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter;
	@:overload(function<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter { })
	@:overload(function(path:express_serve_static_core.PathParams, subApplication:express_serve_static_core.Application):IRouter { })
	dynamic function checkout<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter;
	@:overload(function<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter { })
	@:overload(function(path:express_serve_static_core.PathParams, subApplication:express_serve_static_core.Application):IRouter { })
	dynamic function connect<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter;
	@:overload(function<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter { })
	@:overload(function(path:express_serve_static_core.PathParams, subApplication:express_serve_static_core.Application):IRouter { })
	dynamic function copy<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter;
	@:overload(function<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter { })
	@:overload(function(path:express_serve_static_core.PathParams, subApplication:express_serve_static_core.Application):IRouter { })
	dynamic function lock<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter;
	@:overload(function<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter { })
	@:overload(function(path:express_serve_static_core.PathParams, subApplication:express_serve_static_core.Application):IRouter { })
	dynamic function merge<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter;
	@:overload(function<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter { })
	@:overload(function(path:express_serve_static_core.PathParams, subApplication:express_serve_static_core.Application):IRouter { })
	dynamic function mkactivity<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter;
	@:overload(function<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter { })
	@:overload(function(path:express_serve_static_core.PathParams, subApplication:express_serve_static_core.Application):IRouter { })
	dynamic function mkcol<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter;
	@:overload(function<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter { })
	@:overload(function(path:express_serve_static_core.PathParams, subApplication:express_serve_static_core.Application):IRouter { })
	dynamic function move<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter;
	@:native("m-search")
	@:overload(function<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter { })
	@:overload(function(path:express_serve_static_core.PathParams, subApplication:express_serve_static_core.Application):IRouter { })
	dynamic function m_search<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter;
	@:overload(function<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter { })
	@:overload(function(path:express_serve_static_core.PathParams, subApplication:express_serve_static_core.Application):IRouter { })
	dynamic function notify<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter;
	@:overload(function<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter { })
	@:overload(function(path:express_serve_static_core.PathParams, subApplication:express_serve_static_core.Application):IRouter { })
	dynamic function propfind<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter;
	@:overload(function<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter { })
	@:overload(function(path:express_serve_static_core.PathParams, subApplication:express_serve_static_core.Application):IRouter { })
	dynamic function proppatch<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter;
	@:overload(function<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter { })
	@:overload(function(path:express_serve_static_core.PathParams, subApplication:express_serve_static_core.Application):IRouter { })
	dynamic function purge<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter;
	@:overload(function<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter { })
	@:overload(function(path:express_serve_static_core.PathParams, subApplication:express_serve_static_core.Application):IRouter { })
	dynamic function report<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter;
	@:overload(function<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter { })
	@:overload(function(path:express_serve_static_core.PathParams, subApplication:express_serve_static_core.Application):IRouter { })
	dynamic function search<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter;
	@:overload(function<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter { })
	@:overload(function(path:express_serve_static_core.PathParams, subApplication:express_serve_static_core.Application):IRouter { })
	dynamic function subscribe<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter;
	@:overload(function<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter { })
	@:overload(function(path:express_serve_static_core.PathParams, subApplication:express_serve_static_core.Application):IRouter { })
	dynamic function trace<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter;
	@:overload(function<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter { })
	@:overload(function(path:express_serve_static_core.PathParams, subApplication:express_serve_static_core.Application):IRouter { })
	dynamic function unlock<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter;
	@:overload(function<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter { })
	@:overload(function(path:express_serve_static_core.PathParams, subApplication:express_serve_static_core.Application):IRouter { })
	dynamic function unsubscribe<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter;
	@:overload(function(handlers:haxe.extern.Rest<express_serve_static_core.RequestHandlerParams<express_serve_static_core.ParamsDictionary, Dynamic, Dynamic, qs.ParsedQs, { }>>):IRouter { })
	@:overload(function<P, ResBody, ReqBody, ReqQuery, Locals>(handlers:haxe.extern.Rest<express_serve_static_core.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter { })
	@:overload(function<P, ResBody, ReqBody, ReqQuery, Locals>(handlers:haxe.extern.Rest<express_serve_static_core.RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter { })
	@:overload(function<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter { })
	@:overload(function<P, ResBody, ReqBody, ReqQuery, Locals>(path:express_serve_static_core.PathParams, handlers:haxe.extern.Rest<express_serve_static_core.RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, Locals>>):IRouter { })
	@:overload(function(path:express_serve_static_core.PathParams, subApplication:express_serve_static_core.Application):IRouter { })
	dynamic function use(handlers:haxe.extern.Rest<express_serve_static_core.RequestHandler<express_serve_static_core.ParamsDictionary, Dynamic, Dynamic, qs.ParsedQs, { }>>):IRouter;
	function route(prefix:express_serve_static_core.PathParams):express_serve_static_core.IRoute;
	/**
		Stack of configured routes
	**/
	var stack : Array<Dynamic>;
};