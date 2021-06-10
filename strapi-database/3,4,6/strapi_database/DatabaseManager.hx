package strapi_database;

@:jsRequire("strapi-database", "DatabaseManager") extern class DatabaseManager {
	function new();
	var connections : Array<ConnectionInfo>;
	function initialize():js.lib.Promise<DatabaseManager>;
	function query(model:String, plugin:String):Repository;
	function getModel(model:String, plugin:String):Model;
	function getModelByAssoc(assoc:Dynamic):Model;
	static var prototype : DatabaseManager;
}