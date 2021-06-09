package knex;

typedef AssymetricAggregation<TRecord, TResult, TValue> = ts.AnyOf3<(columnNames:haxe.extern.Rest<Dynamic>) -> QueryBuilder<TRecord, Any>, (aliases:Any) -> QueryBuilder<TRecord, Any>, (columnNames:haxe.extern.Rest<ts.AnyOf3<String, Raw<Dynamic>, { }>>) -> QueryBuilder<TRecord, Any>>;