package knex;

/**
	Used with SQLite3 adapter
**/
typedef Sqlite3ConnectionConfig = {
	var filename : String;
	@:optional
	var debug : Bool;
};