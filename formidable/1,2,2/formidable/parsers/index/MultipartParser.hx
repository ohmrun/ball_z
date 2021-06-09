package formidable.parsers.index;

@:jsRequire("formidable/parsers/index", "MultipartParser") extern class MultipartParser extends node.stream.Transform {
	function new(?options:{ /** sets encoding for incoming form fields **/ @:optional var encoding : formidable.BufferEncoding; /** the directory for placing file uploads in. You can move them later by using fs.rename() **/ @:optional var uploadDir : String; /** to include the extensions of the original files or not **/ @:optional var keepExtensions : Bool; /** allow upload empty files **/ @:optional var allowEmptyFiles : Bool; /** the minium size of uploaded file **/ @:optional var minFileSize : Float; /** limit the size of uploaded file **/ @:optional var maxFileSize : Float; /** limit the number of fields, set 0 for unlimited **/ @:optional var maxFields : Float; /** limit the amount of memory all fields together (except files) can allocate in bytes **/ @:optional var maxFieldsSize : Float; /** include checksums calculated for incoming files, set this to some hash algorithm, seecrypto.createHash for available algorithms **/ @:optional var hash : ts.AnyOf2<String, Bool>; /** which by default writes to host machine file system every file parsed; The function shouldreturn an instance of a Writable stream that will receive the uploaded file data. With thisoption, you can have any custom behavior regarding where the uploaded file data will bestreamed for. If you are looking to write the file uploaded in other types of cloud storages(AWS S3, Azure blob storage, Google cloud storage) or private file storage, this is the optionyou're looking for. When this option is defined the default behavior of writing the file in thehost machine file system is lost. **/ @:optional dynamic function fileWriteStreamHandler():Void; /** when you call the .parse method, the files argument (of the callback) will contain arrays offiles for inputs which submit multiple files using the HTML5 multiple attribute. Also, thefields argument will contain arrays of values for fields that have names ending with '[]' **/ @:optional var multiples : Bool; @:optional var enabledPlugins : Array<String>; });
	function _final(callback:() -> Void):Void;
	function _handleCallback(name:String, buffer:global.Buffer, ?start:Float, ?end:Float):Void;
	function _transform(buffer:global.Buffer, _:Dynamic, callback:() -> Void):Float;
	function explain():String;
	function initWithBoundary(str:String):Void;
	function setDefaultEncoding(encoding:global.BufferEncoding):MultipartParser;
	function setEncoding(encoding:global.BufferEncoding):MultipartParser;
	function pause():MultipartParser;
	function resume():MultipartParser;
	function unpipe(?destination:global.nodejs.WritableStream):MultipartParser;
	function wrap(oldStream:global.nodejs.ReadableStream):MultipartParser;
	/**
		Event emitter
		The defined events on documents including:
		1. close
		2. data
		3. end
		4. error
		5. pause
		6. readable
		7. resume
	**/
	@:overload(function(event:String, listener:(chunk:Dynamic) -> Void):MultipartParser { })
	@:overload(function(event:String, listener:() -> Void):MultipartParser { })
	@:overload(function(event:String, listener:(err:js.lib.Error) -> Void):MultipartParser { })
	@:overload(function(event:String, listener:() -> Void):MultipartParser { })
	@:overload(function(event:String, listener:() -> Void):MultipartParser { })
	@:overload(function(event:String, listener:() -> Void):MultipartParser { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):MultipartParser { })
	function addListener(event:String, listener:() -> Void):MultipartParser;
	@:overload(function(event:String, listener:(chunk:Dynamic) -> Void):MultipartParser { })
	@:overload(function(event:String, listener:() -> Void):MultipartParser { })
	@:overload(function(event:String, listener:(err:js.lib.Error) -> Void):MultipartParser { })
	@:overload(function(event:String, listener:() -> Void):MultipartParser { })
	@:overload(function(event:String, listener:() -> Void):MultipartParser { })
	@:overload(function(event:String, listener:() -> Void):MultipartParser { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):MultipartParser { })
	function on(event:String, listener:() -> Void):MultipartParser;
	@:overload(function(event:String, listener:(chunk:Dynamic) -> Void):MultipartParser { })
	@:overload(function(event:String, listener:() -> Void):MultipartParser { })
	@:overload(function(event:String, listener:(err:js.lib.Error) -> Void):MultipartParser { })
	@:overload(function(event:String, listener:() -> Void):MultipartParser { })
	@:overload(function(event:String, listener:() -> Void):MultipartParser { })
	@:overload(function(event:String, listener:() -> Void):MultipartParser { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):MultipartParser { })
	function once(event:String, listener:() -> Void):MultipartParser;
	@:overload(function(event:String, listener:(chunk:Dynamic) -> Void):MultipartParser { })
	@:overload(function(event:String, listener:() -> Void):MultipartParser { })
	@:overload(function(event:String, listener:(err:js.lib.Error) -> Void):MultipartParser { })
	@:overload(function(event:String, listener:() -> Void):MultipartParser { })
	@:overload(function(event:String, listener:() -> Void):MultipartParser { })
	@:overload(function(event:String, listener:() -> Void):MultipartParser { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):MultipartParser { })
	function prependListener(event:String, listener:() -> Void):MultipartParser;
	@:overload(function(event:String, listener:(chunk:Dynamic) -> Void):MultipartParser { })
	@:overload(function(event:String, listener:() -> Void):MultipartParser { })
	@:overload(function(event:String, listener:(err:js.lib.Error) -> Void):MultipartParser { })
	@:overload(function(event:String, listener:() -> Void):MultipartParser { })
	@:overload(function(event:String, listener:() -> Void):MultipartParser { })
	@:overload(function(event:String, listener:() -> Void):MultipartParser { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):MultipartParser { })
	function prependOnceListener(event:String, listener:() -> Void):MultipartParser;
	@:overload(function(event:String, listener:(chunk:Dynamic) -> Void):MultipartParser { })
	@:overload(function(event:String, listener:() -> Void):MultipartParser { })
	@:overload(function(event:String, listener:(err:js.lib.Error) -> Void):MultipartParser { })
	@:overload(function(event:String, listener:() -> Void):MultipartParser { })
	@:overload(function(event:String, listener:() -> Void):MultipartParser { })
	@:overload(function(event:String, listener:() -> Void):MultipartParser { })
	@:overload(function(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):MultipartParser { })
	function removeListener(event:String, listener:() -> Void):MultipartParser;
	function off(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):MultipartParser;
	function removeAllListeners(?event:ts.AnyOf2<String, js.lib.Symbol>):MultipartParser;
	function setMaxListeners(n:Float):MultipartParser;
	static var prototype : MultipartParser;
	static dynamic function stateToString(stateNumber:Float):String;
	static var STATES : {
		var PARSER_UNINITIALIZED : Float;
		var START : Float;
		var START_BOUNDARY : Float;
		var HEADER_FIELD_START : Float;
		var HEADER_FIELD : Float;
		var HEADER_VALUE_START : Float;
		var HEADER_VALUE : Float;
		var HEADER_VALUE_ALMOST_DONE : Float;
		var HEADERS_ALMOST_DONE : Float;
		var PART_DATA_START : Float;
		var PART_DATA : Float;
		var PART_END : Float;
		var END : Float;
	};
}