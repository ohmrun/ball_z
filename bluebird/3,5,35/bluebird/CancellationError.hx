package bluebird;

/**
	Signals that an operation has been aborted or cancelled. The default reason used by `.cancel`.
**/
@:jsRequire("bluebird", "CancellationError") extern class CancellationError extends js.lib.Error {
	function new();
	static var prototype : CancellationError;
}