package cookies;

typedef Option = {
	@:optional
	var keys : ts.AnyOf2<Array<String>, Keygrip>;
	@:optional
	var secure : Bool;
};