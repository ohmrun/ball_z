package knex;

typedef OracleDbConnectionConfig = {
	var host : String;
	var user : String;
	@:optional
	var password : String;
	@:optional
	var database : String;
	@:optional
	var domain : String;
	@:optional
	var instanceName : String;
	@:optional
	var debug : Bool;
	@:optional
	var requestTimeout : Float;
	@:optional
	var connectString : String;
};