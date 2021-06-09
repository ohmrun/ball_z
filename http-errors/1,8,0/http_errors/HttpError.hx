package http_errors;

typedef HttpError = {
	var status : Float;
	var statusCode : Float;
	var expose : Bool;
	@:optional
	var headers : { };
	var name : String;
	var message : String;
	@:optional
	var stack : String;
};