package knex;

typedef As<TRecord, TResult> = ts.AnyOf2<(columnName:Dynamic) -> QueryBuilder<TRecord, TResult>, (columnName:String) -> QueryBuilder<TRecord, TResult>>;