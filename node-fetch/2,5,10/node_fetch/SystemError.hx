package node_fetch;

typedef SystemError = {
	@:optional
	var code : String;
	var name : String;
	var message : String;
	@:optional
	var stack : String;
};