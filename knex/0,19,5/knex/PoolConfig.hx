package knex;

typedef PoolConfig = {
	@:optional
	var name : String;
	@:optional
	var create : haxe.Constraints.Function;
	@:optional
	var afterCreate : haxe.Constraints.Function;
	@:optional
	var destroy : haxe.Constraints.Function;
	@:optional
	var min : Float;
	@:optional
	var max : Float;
	@:optional
	var refreshIdle : Bool;
	@:optional
	var idleTimeoutMillis : Float;
	@:optional
	var reapIntervalMillis : Float;
	@:optional
	var returnToHead : Bool;
	@:optional
	var priorityRange : Float;
	@:optional
	var validate : haxe.Constraints.Function;
	@:optional
	var log : Bool;
	@:optional
	var maxWaitingClients : Float;
	@:optional
	var testOnBorrow : Bool;
	@:optional
	var acquireTimeoutMillis : Float;
	@:optional
	var fifo : Bool;
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