package content_disposition;

typedef Options = {
	/**
		Specifies the disposition type.
		This can also be "inline", or any other value (all values except `inline` are treated like attachment,
		but can convey additional information if both parties agree to it).
		The `type` is normalized to lower-case.
	**/
	@:optional
	var type : String;
	/**
		If the filename option is outside ISO-8859-1,
		then the file name is actually stored in a supplemental field for clients
		that support Unicode file names and a ISO-8859-1 version of the file name is automatically generated
	**/
	@:optional
	var fallback : ts.AnyOf2<String, Bool>;
};