package bluebird;

typedef Inspection<R> = {
	/**
		See if the underlying promise was fulfilled at the creation time of this inspection object.
	**/
	function isFulfilled():Bool;
	/**
		See if the underlying promise was rejected at the creation time of this inspection object.
	**/
	function isRejected():Bool;
	/**
		See if the underlying promise was cancelled at the creation time of this inspection object.
	**/
	function isCancelled():Bool;
	/**
		See if the underlying promise was defer at the creation time of this inspection object.
	**/
	function isPending():Bool;
	/**
		Get the fulfillment value of the underlying promise. Throws if the promise wasn't fulfilled at the creation time of this inspection object.
		
		throws `TypeError`
	**/
	function value():R;
	/**
		Get the rejection reason for the underlying promise. Throws if the promise wasn't rejected at the creation time of this inspection object.
		
		throws `TypeError`
	**/
	function reason():Dynamic;
};