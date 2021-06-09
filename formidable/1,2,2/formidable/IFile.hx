package formidable;

typedef IFile = {
	/**
		The size of the uploaded file in bytes. If the file is still being uploaded (see `'fileBegin'`
		event), this property says how many bytes of the file have been written to disk yet.
	**/
	var size : Float;
	/**
		The path this file is being written to. You can modify this in the `'fileBegin'` event in case
		you are unhappy with the way formidable generates a temporary path for your files.
	**/
	var path : String;
	/**
		The name this file had according to the uploading client.
	**/
	var name : Null<String>;
	/**
		The mime type of this file, according to the uploading client.
	**/
	var type : Null<String>;
	/**
		A Date object (or `null`) containing the time this file was last written to. Mostly here for
		compatibility with the [W3C File API Draft](http://dev.w3.org/2006/webapi/FileAPI/).
	**/
	@:optional
	var lastModifiedDate : js.lib.Date;
	/**
		If `options.hash` calculation was set, you can read the hex digest out of this var.
	**/
	@:optional
	var hash : String;
	/**
		This method returns a JSON-representation of the file, allowing you to JSON.stringify() the
		file which is useful for logging and responding to requests.
	**/
	function toJSON():FileJSON;
	function toString():String;
};