package node.fs;

typedef Abortable = {
	@:optional
	var signal : js.html.AbortSignal;
};