package koa_router;

typedef IMiddleware<StateT, CustomT> = koa_compose.Middleware<koa.ParameterizedContext<StateT, Dynamic, Dynamic>>;