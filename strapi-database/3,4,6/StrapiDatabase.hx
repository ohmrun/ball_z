@:jsRequire("strapi-database") @valueModuleOnly extern class StrapiDatabase {
	static function createDatabaseManager(strapi:Dynamic):js.lib.Promise<strapi_database.DatabaseManager>;
}