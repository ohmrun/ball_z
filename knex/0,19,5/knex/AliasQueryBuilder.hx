package knex;

typedef AliasQueryBuilder<TRecord, TResult> = ts.AnyOf4<(aliases:haxe.extern.Rest<Any>) -> QueryBuilder<TRecord, Any>, (aliases:Any) -> QueryBuilder<TRecord, Any>, (aliases:haxe.extern.Rest<Any>) -> QueryBuilder<TRecord, Any>, (aliases:Any) -> QueryBuilder<TRecord, Any>>;