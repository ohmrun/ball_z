package knex;

typedef WhereBetween<TRecord, TResult> = ts.AnyOf2<(columnName:Any, range:ts.Tuple2<Dynamic, Dynamic>) -> QueryBuilder<TRecord, TResult>, (columnName:String, range:ts.Tuple2<Value, Value>) -> QueryBuilder<TRecord, TResult>>;