package create_error;

typedef Error<T> = {
	var name : String;
	var message : String;
	@:optional
	var stack : String;
};