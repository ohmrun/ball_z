package knex;

typedef ConnectionConfig = {
	var host : String;
	var user : String;
	var password : String;
	var database : String;
	@:optional
	var domain : String;
	@:optional
	var instanceName : String;
	@:optional
	var debug : Bool;
	@:optional
	var requestTimeout : Float;
};