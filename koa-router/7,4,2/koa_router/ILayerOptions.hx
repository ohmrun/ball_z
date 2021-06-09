package koa_router;

typedef ILayerOptions = {
	var name : String;
	@:optional
	var sensitive : Bool;
	@:optional
	var strict : Bool;
	@:optional
	var end : Bool;
	@:optional
	var prefix : String;
	@:optional
	var ignoreCaptures : Bool;
};