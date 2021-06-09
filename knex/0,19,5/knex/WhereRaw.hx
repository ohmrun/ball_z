package knex;

typedef WhereRaw<TRecord, TResult> = ts.AnyOf4<(condition:Bool) -> QueryBuilder<TRecord, TResult>, (sql:String, bindings:haxe.extern.Rest<RawBinding>) -> QueryBuilder<TRecord, Any>, (sql:String, bindings:ts.AnyOf2<Array<RawBinding>, ValueDict>) -> QueryBuilder<TRecord, Any>, (raw:Raw<Any>) -> QueryBuilder<TRecord, Any>>;