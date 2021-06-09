package bluebird;

typedef Resolvable<R> = ts.AnyOf2<js.lib.PromiseLike<R>, R>;