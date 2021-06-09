package knex;

typedef WithWrapped<TRecord, TResult> = ts.AnyOf2<(alias:String, queryBuilder:QueryBuilder<Dynamic, Array<Dynamic>>) -> QueryBuilder<TRecord, TResult>, (alias:String, callback:(queryBuilder:QueryBuilder<Dynamic, Array<Dynamic>>) -> Dynamic) -> QueryBuilder<TRecord, TResult>>;