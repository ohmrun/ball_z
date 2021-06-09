package knex;

typedef MsSqlConnectionConfig = {
	@:optional
	var driver : String;
	@:optional
	var user : String;
	@:optional
	var password : String;
	var server : String;
	@:optional
	var port : Float;
	@:optional
	var domain : String;
	var database : String;
	@:optional
	var connectionTimeout : Float;
	@:optional
	var requestTimeout : Float;
	@:optional
	var stream : Bool;
	@:optional
	var parseJSON : Bool;
	@:optional
	var options : {
		@:optional
		var encrypt : Bool;
		@:optional
		var instanceName : String;
		@:optional
		var useUTC : Bool;
		@:optional
		var tdsVersion : String;
		@:optional
		var appName : String;
		@:optional
		var abortTransactionOnError : Bool;
		@:optional
		var trustedConnection : Bool;
	};
	@:optional
	var pool : {
		@:optional
		var min : Float;
		@:optional
		var max : Float;
		@:optional
		var idleTimeoutMillis : Float;
		@:optional
		var maxWaitingClients : Float;
		@:optional
		var testOnBorrow : Bool;
		@:optional
		var acquireTimeoutMillis : Float;
		@:optional
		var fifo : Bool;
		@:optional
		var priorityRange : Float;
		@:optional
		var autostart : Bool;
		@:optional
		var evictionRunIntervalMillis : Float;
		@:optional
		var numTestsPerRun : Float;
		@:optional
		var softIdleTimeoutMillis : Float;
		@:optional
		var Promise : Dynamic;
	};
};