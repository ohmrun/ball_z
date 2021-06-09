package knex;

typedef QueryCallback<TRecord, TResult> = (builder:QueryBuilder<TRecord, TResult>) -> Void;