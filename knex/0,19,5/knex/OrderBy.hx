package knex;

typedef OrderBy<TRecord, TResult> = ts.AnyOf6<(columnName:Dynamic) -> QueryBuilder<TRecord, TResult>, (columnName:Dynamic, order:String) -> QueryBuilder<TRecord, TResult>, (columnName:String) -> QueryBuilder<TRecord, TResult>, (columnName:String, order:String) -> QueryBuilder<TRecord, TResult>, (columnDefs:Array<ts.AnyOf2<{ var column : Dynamic; @:optional var order : String; }, Dynamic>>) -> QueryBuilder<TRecord, TResult>, (columnDefs:Array<ts.AnyOf2<String, { var column : String; @:optional var order : String; }>>) -> QueryBuilder<TRecord, TResult>>;