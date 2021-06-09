package node_mocks_http;

typedef ResponseOptions = {
	@:optional
	var eventEmitter : Dynamic;
	@:optional
	var writableStream : Dynamic;
	@:optional
	var req : Dynamic;
	@:optional
	var locals : Dynamic;
};