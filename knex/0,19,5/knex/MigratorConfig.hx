package knex;

typedef MigratorConfig = {
	@:optional
	var database : String;
	@:optional
	var directory : ts.AnyOf2<String, Array<String>>;
	@:optional
	var extension : String;
	@:optional
	var stub : String;
	@:optional
	var tableName : String;
	@:optional
	var schemaName : String;
	@:optional
	var disableTransactions : Bool;
	@:optional
	var sortDirsSeparately : Bool;
	@:optional
	var loadExtensions : Array<String>;
	@:optional
	var migrationSource : Dynamic;
};