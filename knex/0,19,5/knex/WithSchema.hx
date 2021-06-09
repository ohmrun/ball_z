package knex;

typedef WithSchema<TRecord, TResult> = (schema:String) -> QueryBuilder<TRecord, TResult>;