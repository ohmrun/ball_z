package koa_router;

typedef IParamMiddleware<STateT, CustomT> = (param:String, ctx:koa.ParameterizedContext<STateT, Dynamic, Any>, next:() -> js.lib.Promise<Dynamic>) -> Dynamic;