package knex;

typedef RawBuilder<TRecord, TResult> = ts.AnyOf3<(value:Value) -> Raw<Any>, (sql:String, bindings:haxe.extern.Rest<RawBinding>) -> Raw<Any>, (sql:String, bindings:ts.AnyOf2<Array<RawBinding>, ValueDict>) -> Raw<Any>>;