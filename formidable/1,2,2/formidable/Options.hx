package formidable;

typedef Options = {
	/**
		sets encoding for incoming form fields
	**/
	@:optional
	var encoding : BufferEncoding;
	/**
		the directory for placing file uploads in. You can move them later by using fs.rename()
	**/
	@:optional
	var uploadDir : String;
	/**
		to include the extensions of the original files or not
	**/
	@:optional
	var keepExtensions : Bool;
	/**
		allow upload empty files
	**/
	@:optional
	var allowEmptyFiles : Bool;
	/**
		the minium size of uploaded file
	**/
	@:optional
	var minFileSize : Float;
	/**
		limit the size of uploaded file
	**/
	@:optional
	var maxFileSize : Float;
	/**
		limit the number of fields, set 0 for unlimited
	**/
	@:optional
	var maxFields : Float;
	/**
		limit the amount of memory all fields together (except files) can allocate in bytes
	**/
	@:optional
	var maxFieldsSize : Float;
	/**
		include checksums calculated for incoming files, set this to some hash algorithm, see
		crypto.createHash for available algorithms
	**/
	@:optional
	var hash : ts.AnyOf2<String, Bool>;
	/**
		which by default writes to host machine file system every file parsed; The function should
		return an instance of a Writable stream that will receive the uploaded file data. With this
		option, you can have any custom behavior regarding where the uploaded file data will be
		streamed for. If you are looking to write the file uploaded in other types of cloud storages
		(AWS S3, Azure blob storage, Google cloud storage) or private file storage, this is the option
		you're looking for. When this option is defined the default behavior of writing the file in the
		host machine file system is lost.
	**/
	@:optional
	dynamic function fileWriteStreamHandler():Void;
	/**
		when you call the .parse method, the files argument (of the callback) will contain arrays of
		files for inputs which submit multiple files using the HTML5 multiple attribute. Also, the
		fields argument will contain arrays of values for fields that have names ending with '[]'
	**/
	@:optional
	var multiples : Bool;
	@:optional
	var enabledPlugins : Array<String>;
};