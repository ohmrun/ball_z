package knex;

typedef WhereWrapped<TRecord, TResult> = (callback:QueryCallback<Dynamic, Array<Any>>) -> QueryBuilder<TRecord, TResult>;