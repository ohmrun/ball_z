package knex;

typedef SocketConnectionConfig = {
	var socketPath : String;
	var user : String;
	var password : String;
	var database : String;
	@:optional
	var debug : Bool;
};