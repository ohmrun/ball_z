package formidable;

@:jsRequire("formidable/Formidable") extern class Formidable {
	function new(?options:{ /** sets encoding for incoming form fields **/ @:optional var encoding : BufferEncoding; /** the directory for placing file uploads in. You can move them later by using fs.rename() **/ @:optional var uploadDir : String; /** to include the extensions of the original files or not **/ @:optional var keepExtensions : Bool; /** allow upload empty files **/ @:optional var allowEmptyFiles : Bool; /** the minium size of uploaded file **/ @:optional var minFileSize : Float; /** limit the size of uploaded file **/ @:optional var maxFileSize : Float; /** limit the number of fields, set 0 for unlimited **/ @:optional var maxFields : Float; /** limit the amount of memory all fields together (except files) can allocate in bytes **/ @:optional var maxFieldsSize : Float; /** include checksums calculated for incoming files, set this to some hash algorithm, seecrypto.createHash for available algorithms **/ @:optional var hash : ts.AnyOf2<String, Bool>; /** which by default writes to host machine file system every file parsed; The function shouldreturn an instance of a Writable stream that will receive the uploaded file data. With thisoption, you can have any custom behavior regarding where the uploaded file data will bestreamed for. If you are looking to write the file uploaded in other types of cloud storages(AWS S3, Azure blob storage, Google cloud storage) or private file storage, this is the optionyou're looking for. When this option is defined the default behavior of writing the file in thehost machine file system is lost. **/ @:optional dynamic function fileWriteStreamHandler():Void; /** when you call the .parse method, the files argument (of the callback) will contain arrays offiles for inputs which submit multiple files using the HTML5 multiple attribute. Also, thefields argument will contain arrays of values for fields that have names ending with '[]' **/ @:optional var multiples : Bool; @:optional var enabledPlugins : Array<String>; });
	/**
		Parses an incoming Node.js request containing form data. If callback is provided, all fields
		and files are collected and passed to the callback.
	**/
	function parse(request:node.http.IncomingMessage, callback:(err:Dynamic, fields:Fields, files:Files) -> Void):Void;
	@:overload(function(name:String, callback:(err:Dynamic) -> Void):Void { })
	function once(name:String, callback:() -> Void):Void;
	@:overload(function(name:String, callback:(err:Dynamic) -> Void):Void { })
	@:overload(function(name:String, callback:(name:String, value:String) -> Void):Void { })
	@:overload(function(name:String, callback:(formName:String, file:File__) -> Void):Void { })
	@:overload(function(name:String, callback:(bytesReceived:Float, bytesExpected:Float) -> Void):Void { })
	@:overload(function(name:String, callback:() -> Void):Void { })
	function on(name:String, callback:(data:EventData) -> Void):Void;
	function emit(name:String, data:EmitData):Void;
	/**
		A method that allows you to extend the Formidable library. By default we include 4 plugins,
		which essentially are adapters to plug the different built-in parsers.
	**/
	function use(plugin:PluginFunction):Void;
	/**
		If you want to use Formidable to only handle certain parts for you, you can do something
		similar. Or see #387 for inspiration, you can for example validate the mime-type.
	**/
	function onPart(part:Part):Void;
	function handlePart(part:Part):Void;
	static var prototype : Formidable;
	static final DEFAULT_OPTIONS : DefaultOptions;
}