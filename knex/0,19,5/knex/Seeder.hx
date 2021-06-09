package knex;

@:jsRequire("knex", "Seeder") extern class Seeder {
	function new(knex:Knex<Dynamic, Array<Dynamic>>);
	function setConfig(config:SeederConfig):SeederConfig;
	function run(?config:SeederConfig):js.lib.Promise<Array<String>>;
	function make(name:String, ?config:SeederConfig):js.lib.Promise<String>;
	static var prototype : Seeder;
}