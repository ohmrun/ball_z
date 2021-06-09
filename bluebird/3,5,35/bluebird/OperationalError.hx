package bluebird;

/**
	Represents an error is an explicit promise rejection as opposed to a thrown error.
	  For example, if an error is errbacked by a callback API promisified through undefined or undefined
	  and is not a typed error, it will be converted to a `OperationalError` which has the original error in
	  the `.cause` property.
	
	`OperationalError`s are caught in `.error` handlers.
**/
@:jsRequire("bluebird", "OperationalError") extern class OperationalError extends js.lib.Error {
	function new();
	static var prototype : OperationalError;
}