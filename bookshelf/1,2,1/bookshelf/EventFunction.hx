package bookshelf;

typedef EventFunction<T> = (model:T, attrs:Dynamic, options:Dynamic) -> ts.AnyOf2<Void, Bluebird<Dynamic>>;