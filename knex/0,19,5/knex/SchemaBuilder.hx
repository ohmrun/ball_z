package knex;

typedef SchemaBuilder = {
	function createTable(tableName:String, callback:(tableBuilder:CreateTableBuilder) -> Dynamic):SchemaBuilder;
	function createTableIfNotExists(tableName:String, callback:(tableBuilder:CreateTableBuilder) -> Dynamic):SchemaBuilder;
	function alterTable(tableName:String, callback:(tableBuilder:CreateTableBuilder) -> Dynamic):SchemaBuilder;
	function renameTable(oldTableName:String, newTableName:String):js.lib.Promise<Void>;
	function dropTable(tableName:String):SchemaBuilder;
	function hasTable(tableName:String):js.lib.Promise<Bool>;
	function hasColumn(tableName:String, columnName:String):js.lib.Promise<Bool>;
	function table(tableName:String, callback:(tableBuilder:AlterTableBuilder) -> Dynamic):js.lib.Promise<Void>;
	function dropTableIfExists(tableName:String):SchemaBuilder;
	function raw(statement:String):SchemaBuilder;
	function withSchema(schemaName:String):SchemaBuilder;
	function queryContext(context:Dynamic):SchemaBuilder;
	function toQuery():String;
	function options(options:{ }):SchemaBuilder;
	function connection(connection:Dynamic):SchemaBuilder;
	function debug(enabled:Bool):SchemaBuilder;
	function transacting(trx:Transaction<Dynamic, Dynamic>):SchemaBuilder;
	@:overload(function(options:{ }, handler:(readable:node.stream.PassThrough) -> Dynamic):js.lib.Promise<Dynamic> { })
	@:overload(function(?options:{ }):node.stream.PassThrough { })
	function stream(handler:(readable:node.stream.PassThrough) -> Dynamic):js.lib.Promise<Dynamic>;
	function pipe<T>(writable:T, ?options:{ }):node.stream.PassThrough;
	function asCallback(callback:haxe.Constraints.Function):SchemaBuilder;
	/**
		Attaches callbacks for the resolution and/or rejection of the Promise.
	**/
	function then<TResult1, TResult2>(?onfulfilled:(value:Void) -> ts.AnyOf2<js.lib.PromiseLike<TResult1>, TResult1>, ?onrejected:(reason:Dynamic) -> ts.AnyOf2<js.lib.PromiseLike<TResult2>, TResult2>):js.lib.Promise<ts.AnyOf2<TResult1, TResult2>>;
	/**
		Attaches a callback for only the rejection of the Promise.
	**/
	@:native("catch")
	function catch_<TResult>(?onrejected:(reason:Dynamic) -> ts.AnyOf2<js.lib.PromiseLike<TResult>, TResult>):js.lib.Promise<ts.AnyOf2<Void, TResult>>;
	/**
		Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		resolved value cannot be modified from the callback.
	**/
	function finally(?onfinally:() -> Void):js.lib.Promise<Void>;
};