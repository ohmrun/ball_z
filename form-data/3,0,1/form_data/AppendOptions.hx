package form_data;

typedef AppendOptions = {
	@:optional
	var header : ts.AnyOf2<String, Headers>;
	@:optional
	var knownLength : Float;
	@:optional
	var filename : String;
	@:optional
	var filepath : String;
	@:optional
	var contentType : String;
};