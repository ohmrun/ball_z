package knex;

typedef RawQueryBuilder<TRecord, TResult> = ts.AnyOf3<(sql:String, bindings:haxe.extern.Rest<RawBinding>) -> QueryBuilder<TRecord, Any>, (sql:String, bindings:ts.AnyOf2<Array<RawBinding>, ValueDict>) -> QueryBuilder<TRecord, Any>, (raw:Raw<Any>) -> QueryBuilder<TRecord, Any>>;