package koa;

typedef BaseResponse = {
	/**
		Return the request socket.
	**/
	var socket : node.net.Socket;
	/**
		Return response header.
	**/
	var header : node.http.OutgoingHttpHeaders;
	/**
		Return response header, alias as response.header
	**/
	var headers : node.http.OutgoingHttpHeaders;
	/**
		Check whether the response is one of the listed types.
		Pretty much the same as `this.request.is()`.
	**/
	@:overload(function(types:Array<String>):Null<ts.AnyOf2<String, Bool>> { })
	function is(types:haxe.extern.Rest<String>):Null<ts.AnyOf2<String, Bool>>;
	/**
		Return response header. If the header is not set, will return an empty
		string.
		
		The `Referrer` header field is special-cased, both `Referrer` and
		`Referer` are interchangeable.
		
		Examples:
		
		     this.get('Content-Type');
		     // => "text/plain"
		
		     this.get('content-type');
		     // => "text/plain"
		
		     this.get('Something');
		     // => ''
	**/
	function get(field:String):String;
	/**
		Inspect implementation.
	**/
	function inspect():Dynamic;
	/**
		Return JSON representation.
	**/
	function toJSON():Dynamic;
	/**
		Get/Set response status code.
	**/
	var status : Float;
	/**
		Get response status message
	**/
	var message : String;
	/**
		Get/Set response body.
	**/
	var body : Any;
	/**
		Return parsed response Content-Length when present.
		Set Content-Length field to `n`.
	**/
	var length : Float;
	/**
		Check if a header has been written to the socket.
	**/
	var headerSent : Bool;
	/**
		Vary on `field`.
	**/
	function vary(field:String):Void;
	/**
		Perform a 302 redirect to `url`.
		
		The string "back" is special-cased
		to provide Referrer support, when Referrer
		is not present `alt` or "/" is used.
		
		Examples:
		
		    this.redirect('back');
		    this.redirect('back', '/index.html');
		    this.redirect('/login');
		    this.redirect('http://google.com');
	**/
	function redirect(url:String, ?alt:String):Void;
	/**
		Set Content-Disposition to "attachment" to signal the client to prompt for download.
		Optionally specify the filename of the download and some options.
	**/
	function attachment(?filename:String, ?options:content_disposition.Options):Void;
	/**
		Return the response mime type void of
		parameters such as "charset".
		
		Set Content-Type response header with `type` through `mime.lookup()`
		when it does not contain a charset.
		
		Examples:
		
		     this.type = '.html';
		     this.type = 'html';
		     this.type = 'json';
		     this.type = 'application/json';
		     this.type = 'png';
	**/
	var type : String;
	/**
		Get the Last-Modified date in Date form, if it exists.
		Set the Last-Modified date using a string or a Date.
		
		     this.response.lastModified = new Date();
		     this.response.lastModified = '2013-09-13';
	**/
	var lastModified : js.lib.Date;
	/**
		Get/Set the ETag of a response.
		This will normalize the quotes if necessary.
		
		     this.response.etag = 'md5hashsum';
		     this.response.etag = '"md5hashsum"';
		     this.response.etag = 'W/"123456789"';
	**/
	var etag : String;
	/**
		Set header `field` to `val`, or pass
		an object of header fields.
		
		Examples:
		
		    this.set('Foo', ['bar', 'baz']);
		    this.set('Accept', 'application/json');
		    this.set({ Accept: 'text/plain', 'X-API-Key': 'tobi' });
	**/
	@:overload(function(field:String, val:ts.AnyOf2<String, Array<String>>):Void { })
	function set(field:{ }):Void;
	/**
		Append additional header `field` with value `val`.
		
		Examples:
		
		```
		this.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
		this.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
		this.append('Warning', '199 Miscellaneous warning');
		```
	**/
	function append(field:String, val:ts.AnyOf2<String, Array<String>>):Void;
	/**
		Remove header `field`.
	**/
	function remove(field:String):Void;
	/**
		Checks if the request is writable.
		Tests for the existence of the socket
		as node sometimes does not set it.
	**/
	var writable : Bool;
	/**
		Flush any set headers, and begin the body
	**/
	function flushHeaders():Void;
};