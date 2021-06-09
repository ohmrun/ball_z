package koa;

typedef Middleware<StateT, ContextT, ResponseBodyT> = koa_compose.Middleware<ParameterizedContext<StateT, ContextT, ResponseBodyT>>;