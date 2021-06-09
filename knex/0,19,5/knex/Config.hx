package knex;

typedef Config = {
	@:optional
	var debug : Bool;
	@:optional
	var client : ts.AnyOf2<String, {
		var prototype : Client;
		@:overload(function(emitter:Config, event:String, ?options:Config):js.lib.Promise<Array<Dynamic>> { })
		function once(emitter:Config, event:ts.AnyOf2<String, js.lib.Symbol>, ?options:Config):js.lib.Promise<Array<Dynamic>>;
		function on(emitter:global.nodejs.EventEmitter, event:String, ?options:Config):js.lib.AsyncIterableIterator<Dynamic>;
		function listenerCount(emitter:global.nodejs.EventEmitter, event:ts.AnyOf2<String, js.lib.Symbol>):Float;
		/**
			Returns a list listener for a specific emitter event name.
		**/
		function getEventListener(emitter:ts.AnyOf2<global.nodejs.EventEmitter, Config>, name:ts.AnyOf2<String, js.lib.Symbol>):Array<haxe.Constraints.Function>;
		/**
			This symbol shall be used to install a listener for only monitoring `'error'`
			events. Listeners installed using this symbol are called before the regular
			`'error'` listeners are called.
			
			Installing a listener using this symbol does not change the behavior once an
			`'error'` event is emitted, therefore the process will still crash if no
			regular `'error'` listener is installed.
		**/
		final errorMonitor : js.lib.Symbol;
		final captureRejectionSymbol : js.lib.Symbol;
		/**
			Sets or gets the default captureRejection value for all emitters.
		**/
		var captureRejections : Bool;
		var defaultMaxListeners : Float;
	}>;
	@:optional
	var dialect : String;
	@:optional
	var version : String;
	@:optional
	var connection : ts.AnyOf8<String, ConnectionConfig, MariaSqlConnectionConfig, MySqlConnectionConfig, MsSqlConnectionConfig, OracleDbConnectionConfig, Sqlite3ConnectionConfig, SocketConnectionConfig>;
	@:optional
	var pool : PoolConfig;
	@:optional
	var migrations : MigratorConfig;
	@:optional
	dynamic function postProcessResponse(result:Dynamic, queryContext:Dynamic):Dynamic;
	@:optional
	dynamic function wrapIdentifier(value:String, origImpl:(value:String) -> String, queryContext:Dynamic):String;
	@:optional
	var seeds : SeedsConfig;
	@:optional
	var acquireConnectionTimeout : Float;
	@:optional
	var useNullAsDefault : Bool;
	@:optional
	var searchPath : ts.AnyOf2<String, Array<String>>;
	@:optional
	var asyncStackTraces : Bool;
	@:optional
	var log : Logger;
};