package knex;

typedef WhereExists<TRecord, TResult> = ts.AnyOf2<(callback:QueryCallback<Dynamic, Array<Any>>) -> QueryBuilder<TRecord, TResult>, (query:QueryBuilder<Any, Any>) -> QueryBuilder<TRecord, TResult>>;