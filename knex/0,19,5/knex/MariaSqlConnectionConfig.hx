package knex;

typedef MariaSqlConnectionConfig = {
	@:optional
	var user : String;
	@:optional
	var password : String;
	@:optional
	var host : String;
	@:optional
	var port : Float;
	@:optional
	var unixSocket : String;
	@:optional
	var protocol : String;
	@:optional
	var db : String;
	@:optional
	var keepQueries : Bool;
	@:optional
	var multiStatements : Bool;
	@:optional
	var connTimeout : Float;
	@:optional
	var pingInterval : Float;
	@:optional
	var secureAuth : Bool;
	@:optional
	var compress : Bool;
	@:optional
	var ssl : ts.AnyOf2<Bool, MariaSslConfiguration>;
	@:optional
	var local_infile : Bool;
	@:optional
	var read_default_file : String;
	@:optional
	var read_default_group : String;
	@:optional
	var charset : String;
	@:optional
	var streamHWM : Float;
};