package koa_router;

typedef IRoutesMatch = {
	var path : Array<Layer>;
	var pathAndMethod : Array<Layer>;
	var route : Bool;
};