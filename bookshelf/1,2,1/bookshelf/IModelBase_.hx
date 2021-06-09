package bookshelf;

typedef IModelBase_ = {
	/**
		Should be declared as a getter instead of a plain property.
	**/
	@:optional
	var hasTimestamps : ts.AnyOf2<Bool, Array<String>>;
	/**
		Should be declared as a getter instead of a plain property. Should be required, but cannot have abstract properties yet.
	**/
	@:optional
	var tableName : String;
};