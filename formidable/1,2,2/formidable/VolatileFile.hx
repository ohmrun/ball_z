package formidable;

@:jsRequire("formidable/VolatileFile") extern class VolatileFile {
	function new(properties:File_);
	static var value(get, never) : {
		var prototype : PersistentFile;
		@:overload(function(emitter:VolatileFile, event:String, ?options:VolatileFile):js.lib.Promise<Array<Dynamic>> { })
		function once(emitter:VolatileFile, event:ts.AnyOf2<String, js.lib.Symbol>, ?options:VolatileFile):js.lib.Promise<Array<Dynamic>>;
		function on(emitter:global.nodejs.EventEmitter, event:String, ?options:VolatileFile):js.lib.AsyncIterableIterator<Dynamic>;
		function listenerCount(emitter:global.nodejs.EventEmitter, event:ts.AnyOf2<String, js.lib.Symbol>):Float;
		/**
			Returns a list listener for a specific emitter event name.
		**/
		function getEventListener(emitter:ts.AnyOf2<global.nodejs.EventEmitter, VolatileFile>, name:ts.AnyOf2<String, js.lib.Symbol>):Array<haxe.Constraints.Function>;
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
	};
	static inline function get_value():{
		var prototype : PersistentFile;
		@:overload(function(emitter:VolatileFile, event:String, ?options:VolatileFile):js.lib.Promise<Array<Dynamic>> { })
		function once(emitter:VolatileFile, event:ts.AnyOf2<String, js.lib.Symbol>, ?options:VolatileFile):js.lib.Promise<Array<Dynamic>>;
		function on(emitter:global.nodejs.EventEmitter, event:String, ?options:VolatileFile):js.lib.AsyncIterableIterator<Dynamic>;
		function listenerCount(emitter:global.nodejs.EventEmitter, event:ts.AnyOf2<String, js.lib.Symbol>):Float;
		/**
			Returns a list listener for a specific emitter event name.
		**/
		function getEventListener(emitter:ts.AnyOf2<global.nodejs.EventEmitter, VolatileFile>, name:ts.AnyOf2<String, js.lib.Symbol>):Array<haxe.Constraints.Function>;
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
	} return cast VolatileFile;
	static var prototype : PersistentFile;
	@:overload(function(emitter:VolatileFile, event:String, ?options:VolatileFile):js.lib.Promise<Array<Dynamic>> { })
	static function once(emitter:VolatileFile, event:ts.AnyOf2<String, js.lib.Symbol>, ?options:VolatileFile):js.lib.Promise<Array<Dynamic>>;
	static function on(emitter:global.nodejs.EventEmitter, event:String, ?options:VolatileFile):js.lib.AsyncIterableIterator<Dynamic>;
	static function listenerCount(emitter:global.nodejs.EventEmitter, event:ts.AnyOf2<String, js.lib.Symbol>):Float;
	/**
		Returns a list listener for a specific emitter event name.
	**/
	static function getEventListener(emitter:ts.AnyOf2<global.nodejs.EventEmitter, VolatileFile>, name:ts.AnyOf2<String, js.lib.Symbol>):Array<haxe.Constraints.Function>;
	/**
		This symbol shall be used to install a listener for only monitoring `'error'`
		events. Listeners installed using this symbol are called before the regular
		`'error'` listeners are called.
		
		Installing a listener using this symbol does not change the behavior once an
		`'error'` event is emitted, therefore the process will still crash if no
		regular `'error'` listener is installed.
	**/
	static final errorMonitor : js.lib.Symbol;
	static final captureRejectionSymbol : js.lib.Symbol;
	/**
		Sets or gets the default captureRejection value for all emitters.
	**/
	static var captureRejections : Bool;
	static var defaultMaxListeners : Float;
}