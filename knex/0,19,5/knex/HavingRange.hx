package knex;

typedef HavingRange<TRecord, TResult> = ts.AnyOf2<(columnName:Any, values:Array<Dynamic>) -> QueryBuilder<TRecord, TResult>, (columnName:String, values:Array<Value>) -> QueryBuilder<TRecord, TResult>>;