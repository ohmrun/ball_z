package formidable;

typedef EmitData = {
	var formname : Dynamic;
	@:optional
	var key : ts.AnyOf2<String, Float>;
	var name : String;
	var value : ts.AnyOf2<String, File>;
};