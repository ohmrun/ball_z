package strapi_database;

@:jsRequire("strapi-database", "Repository") extern class Repository {
	function new();
	var model : Model;
	function find(params:Dynamic,?relations:Dynamic):js.lib.Promise<Array<ModelValue>>;
	function findOne(params:Dynamic,?relations:Dynamic):js.lib.Promise<ModelValue>;
	function create(input:Dynamic):js.lib.Promise<ModelValue>;
	function update(params:Dynamic, input:Dynamic):js.lib.Promise<ModelValue>;
	function delete(params:Dynamic):js.lib.Promise<ts.AnyOf2<ModelValue, Array<ModelValue>>>;
	function count(params:Dynamic):js.lib.Promise<Float>;
	function search(params:Dynamic):js.lib.Promise<Array<ModelValue>>;
	function countSearch(params:Dynamic):js.lib.Promise<Float>;
	static var prototype : Repository;
}