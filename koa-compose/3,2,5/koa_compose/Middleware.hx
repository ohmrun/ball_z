package koa_compose;

typedef Middleware<T> = (context:T, next:koa.Next) -> Dynamic;