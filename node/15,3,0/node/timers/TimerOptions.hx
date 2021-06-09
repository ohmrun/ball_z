package node.timers;

typedef TimerOptions = {
	/**
		Set to `false` to indicate that the scheduled `Timeout`
		should not require the Node.js event loop to remain active.
	**/
	@:optional
	var ref : Bool;
	/**
		An optional `AbortSignal` that can be used to cancel the scheduled `Timeout`.
	**/
	@:optional
	var signal : js.html.AbortSignal;
};