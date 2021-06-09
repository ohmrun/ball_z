package formidable;

@:jsRequire("formidable/FormidableError") extern class FormidableError {
	static var value(get, never) : Dynamic;
	static inline function get_value():Dynamic return cast FormidableError;
}