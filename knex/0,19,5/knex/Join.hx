package knex;

typedef Join<TRecord, TResult> = ts.AnyOf7<(raw:Raw<Dynamic>) -> QueryBuilder<Any, Any>, (tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, clause:JoinCallback) -> QueryBuilder<Any, Any>, (tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, columns:{ }) -> QueryBuilder<Any, Any>, (tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, raw:Raw<Dynamic>) -> QueryBuilder<Any, Any>, (tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, column1:String, column2:String) -> QueryBuilder<Any, Any>, (tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, column1:String, raw:Raw<Dynamic>) -> QueryBuilder<Any, Any>, (tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, column1:String, operator_:String, column2:String) -> QueryBuilder<Any, Any>>;