package knex;

typedef Sql = {
	var method : String;
	var options : Dynamic;
	var bindings : Array<Value>;
	var sql : String;
	function toNative():SqlNative;
};