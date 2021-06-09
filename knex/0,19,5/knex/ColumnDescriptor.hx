package knex;

typedef ColumnDescriptor<TRecord, TResult> = ts.AnyOf4<String, Raw<Dynamic>, QueryBuilder<TRecord, TResult>, Dict<String>>;