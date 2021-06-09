package bluebird;

typedef IterateFunction<T, R> = (item:T, index:Float, arrayLength:Float) -> Resolvable<R>;