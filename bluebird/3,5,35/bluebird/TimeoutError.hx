package bluebird;

/**
	Signals that an operation has timed out. Used as a custom cancellation reason in `.timeout`.
**/
@:jsRequire("bluebird", "TimeoutError") extern class TimeoutError extends js.lib.Error {
	function new();
	static var prototype : TimeoutError;
}