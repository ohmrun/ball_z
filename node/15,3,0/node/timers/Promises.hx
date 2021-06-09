package node.timers;

@:jsRequire("timers/promises") @valueModuleOnly extern class Promises {
	/**
		Returns a promise that resolves after the specified delay in milliseconds.
	**/
	static function setTimeout<T>(delay:Float, ?value:T, ?options:TimerOptions):js.lib.Promise<T>;
	/**
		Returns a promise that resolves in the next tick.
	**/
	static function setImmediate<T>(value:T, ?options:TimerOptions):js.lib.Promise<T>;
}