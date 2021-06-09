package knex;

typedef MySqlConnectionConfig = {
	@:optional
	var host : String;
	@:optional
	var port : Float;
	@:optional
	var localAddress : String;
	@:optional
	var socketPath : String;
	@:optional
	var user : String;
	@:optional
	var password : String;
	@:optional
	var database : String;
	@:optional
	var charset : String;
	@:optional
	var timezone : String;
	@:optional
	var connectTimeout : Float;
	@:optional
	var stringifyObjects : Bool;
	@:optional
	var insecureAuth : Bool;
	@:optional
	var typeCast : Dynamic;
	@:optional
	dynamic function queryFormat(query:String, values:Dynamic):String;
	@:optional
	var supportBigNumbers : Bool;
	@:optional
	var bigNumberStrings : Bool;
	@:optional
	var dateStrings : Bool;
	@:optional
	var debug : Bool;
	@:optional
	var trace : Bool;
	@:optional
	var multipleStatements : Bool;
	@:optional
	var flags : String;
	@:optional
	var ssl : ts.AnyOf2<String, MariaSslConfiguration>;
	@:optional
	var decimalNumbers : Bool;
};