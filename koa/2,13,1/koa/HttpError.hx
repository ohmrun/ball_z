package koa;

/**
	A re-export of `HttpError` from the `http-error` package.
	
	This is the error type that is thrown by `ctx.assert()` and `ctx.throw()`.
**/
@:jsRequire("koa", "HttpError") extern class HttpError {
	function new(?msg:String);
}