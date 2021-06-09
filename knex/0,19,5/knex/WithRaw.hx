package knex;

typedef WithRaw<TRecord, TResult> = ts.AnyOf3<(alias:String, raw:ts.AnyOf2<Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>>) -> QueryBuilder<TRecord, TResult>, (alias:String, sql:String) -> QueryBuilder<TRecord, TResult>, (alias:String, sql:String, bindings:ts.AnyOf2<Dynamic, Array<Value>>) -> QueryBuilder<TRecord, TResult>>;