/**
	Create an attachment `Content-Disposition` header value using the given file name, if supplied.
	The `filename` is optional and if no file name is desired, but you want to specify options, set `filename` to undefined.
**/
@:jsRequire("content-disposition") @valueModuleOnly extern class ContentDisposition {
	/**
		Create an attachment `Content-Disposition` header value using the given file name, if supplied.
		The `filename` is optional and if no file name is desired, but you want to specify options, set `filename` to undefined.
	**/
	@:selfCall
	static function call(?filename:String, ?options:content_disposition.Options):String;
	/**
		Parse a Content-Disposition header string
	**/
	static function parse(contentDispositionHeader:String):content_disposition.ContentDisposition;
}