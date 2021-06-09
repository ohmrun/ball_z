package node_fetch;

typedef ResponseInit = {
	@:optional
	var headers : HeadersInit;
	@:optional
	var size : Float;
	@:optional
	var status : Float;
	@:optional
	var statusText : String;
	@:optional
	var timeout : Float;
	@:optional
	var url : String;
};