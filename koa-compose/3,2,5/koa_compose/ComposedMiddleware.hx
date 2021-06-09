package koa_compose;

typedef ComposedMiddleware<T> = ts.AnyOf2<(context:T) -> js.lib.Promise<Void>, (context:T, next:koa.Next) -> js.lib.Promise<Void>>;