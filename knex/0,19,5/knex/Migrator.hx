package knex;

typedef Migrator = {
	function make(name:String, ?config:MigratorConfig):js.lib.Promise<String>;
	function latest(?config:MigratorConfig):js.lib.Promise<Dynamic>;
	function rollback(?config:MigratorConfig, ?all:Bool):js.lib.Promise<Dynamic>;
	function status(?config:MigratorConfig):js.lib.Promise<Float>;
	function currentVersion(?config:MigratorConfig):js.lib.Promise<String>;
	function list(?config:MigratorConfig):js.lib.Promise<Dynamic>;
	function up(?config:MigratorConfig):js.lib.Promise<Dynamic>;
	function down(?config:MigratorConfig):js.lib.Promise<Dynamic>;
};