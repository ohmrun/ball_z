package knex;

typedef Table<TRecord, TResult> = ts.AnyOf3<(tableName:ts.AnyOf4<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict>) -> QueryBuilder<Any, Any>, (callback:haxe.Constraints.Function) -> QueryBuilder<Any, Any>, (raw:Raw<Dynamic>) -> QueryBuilder<Any, Any>>;