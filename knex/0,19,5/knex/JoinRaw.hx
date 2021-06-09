package knex;

typedef JoinRaw<TRecord, TResult> = ts.AnyOf2<(tableName:String) -> QueryBuilder<TRecord, TResult>, (tableName:String, binding:ts.AnyOf11<String, Float, Bool, global.Buffer, js.lib.Date, Array<String>, Array<Float>, Array<js.lib.Date>, Array<Bool>, Raw<Dynamic>, ValueDict>) -> QueryBuilder<TRecord, TResult>>;