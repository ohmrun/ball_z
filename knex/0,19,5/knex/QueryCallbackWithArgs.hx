package knex;

typedef QueryCallbackWithArgs<TRecord, TResult> = (builder:QueryBuilder<TRecord, TResult>, args:haxe.extern.Rest<Dynamic>) -> Void;