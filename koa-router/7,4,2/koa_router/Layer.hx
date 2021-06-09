package koa_router;

@:jsRequire("koa-router", "Layer") extern class Layer {
	@:overload(function(path:ts.AnyOf2<String, js.lib.RegExp>, methods:Array<String>, middleware:Array<koa_compose.Middleware<koa.ParameterizedContext<Dynamic, IRouterParamContext<Dynamic, { }>, Dynamic>>>, ?opts:ILayerOptions):Layer { })
	function new(path:ts.AnyOf2<String, js.lib.RegExp>, methods:Array<String>, middleware:koa_compose.Middleware<koa.ParameterizedContext<Dynamic, IRouterParamContext<Dynamic, { }>, Dynamic>>, ?opts:ILayerOptions);
	var opts : ILayerOptions;
	var name : String;
	var methods : Array<String>;
	var paramNames : Array<ParamName>;
	var stack : Array<koa_compose.Middleware<koa.ParameterizedContext<Dynamic, IRouterParamContext<Dynamic, { }>, Dynamic>>>;
	var regexp : js.lib.RegExp;
	var path : String;
	/**
		Returns whether request `path` matches route.
	**/
	function match(path:String):Bool;
	/**
		Returns map of URL parameters for given `path` and `paramNames`.
	**/
	function params(path:ts.AnyOf2<String, js.lib.RegExp>, captures:Array<String>, ?existingParams:Dynamic):Dynamic;
	/**
		Returns array of regexp url path captures.
	**/
	function captures(path:String):Array<String>;
	/**
		Generate URL for route using given `params`.
	**/
	function url(params:Dynamic):String;
	/**
		Run validations on route named parameters.
	**/
	function param(param:String, fn:koa_compose.Middleware<koa.ParameterizedContext<Dynamic, IRouterParamContext<Dynamic, { }>, Dynamic>>):Layer;
	/**
		Prefix route path.
	**/
	function setPrefix(prefix:String):Layer;
	static var prototype : Layer;
}