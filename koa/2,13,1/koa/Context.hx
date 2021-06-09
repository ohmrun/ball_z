package koa;

typedef Context = {
	var app : Koa<DefaultState, DefaultContext>;
	var request : Request;
	var response : Dynamic;
	var req : node.http.IncomingMessage;
	var res : node.http.ServerResponse;
	var originalUrl : String;
	var cookies : Cookies;
	var accept : accepts.Accepts;
	/**
		To bypass Koa's built-in response handling, you may explicitly set `ctx.respond = false;`
	**/
	@:optional
	var respond : Bool;
	/**
		util.inspect() implementation, which
		just returns the JSON output.
	**/
	function inspect():Dynamic;
	/**
		Return JSON representation.
		
		Here we explicitly invoke .toJSON() on each
		object, as iteration will otherwise fail due
		to the getters and cause utilities such as
		clone() to fail.
	**/
	function toJSON():Dynamic;
	/**
		Similar to .throw(), adds assertion.
		
		    this.assert(this.user, 401, 'Please login!');
		
		See: https://github.com/jshttp/http-assert
	**/
	var assert : {
		@:overload(function(value:Dynamic, ?status:Float, ?opts:{ }):Void { })
		@:selfCall
		function call(value:Dynamic, ?status:Float, ?msg:String, ?opts:{ }):Void;
		function equal<T>(a:T, b:T, ?status:Float, ?msg:String, ?opts:{ }):Void;
		function notEqual<T>(a:T, b:T, ?status:Float, ?msg:String, ?opts:{ }):Void;
		function ok(a:Dynamic, ?status:Float, ?msg:String, ?opts:{ }):Void;
		function strictEqual(a:Dynamic, b:Dynamic, ?status:Float, ?msg:String, ?opts:{ }):Void;
		function notStrictEqual(a:Dynamic, b:Dynamic, ?status:Float, ?msg:String, ?opts:{ }):Void;
		function deepEqual(a:Dynamic, b:Dynamic, ?status:Float, ?msg:String, ?opts:{ }):Void;
		function notDeepEqual(a:Dynamic, b:Dynamic, ?status:Float, ?msg:String, ?opts:{ }):Void;
	};
	/**
		Throw an error with `msg` and optional `status`
		defaulting to 500. Note that these are user-level
		errors, and the message may be exposed to the client.
		
		    this.throw(403)
		    this.throw('name required', 400)
		    this.throw(400, 'name required')
		    this.throw('something exploded')
		    this.throw(new Error('invalid'), 400);
		    this.throw(400, new Error('invalid'));
		
		See: https://github.com/jshttp/http-errors
	**/
	@:native("throw")
	@:overload(function(status:Float):Any { })
	@:overload(function(properties:haxe.extern.Rest<ts.AnyOf3<String, Float, { }>>):Any { })
	function throw_(message:String, ?code:Float, ?properties:{ }):Any;
	/**
		Default error handling.
	**/
	function onerror(err:js.lib.Error):Void;
	/**
		Return request header.
	**/
	var header : node.http.IncomingHttpHeaders;
	/**
		Return request header, alias as request.header
	**/
	var headers : node.http.IncomingHttpHeaders;
	/**
		Get/Set request URL.
	**/
	var url : String;
	/**
		Get origin of URL.
	**/
	var origin : String;
	/**
		Get full request URL.
	**/
	var href : String;
	/**
		Get/Set request method.
	**/
	var method : String;
	/**
		Get request pathname.
		Set pathname, retaining the query-string when present.
	**/
	var path : String;
	/**
		Get parsed query-string.
		Set query-string as an object.
	**/
	var query : node.querystring.ParsedUrlQuery;
	/**
		Get/Set query string.
	**/
	var querystring : String;
	/**
		Get the search string. Same as the querystring
		except it includes the leading ?.
		
		Set the search string. Same as
		response.querystring= but included for ubiquity.
	**/
	var search : String;
	/**
		Parse the "Host" header field host
		and support X-Forwarded-Host when a
		proxy is enabled.
	**/
	var host : String;
	/**
		Parse the "Host" header field hostname
		and support X-Forwarded-Host when a
		proxy is enabled.
	**/
	var hostname : String;
	/**
		Get WHATWG parsed URL object.
	**/
	var URL : node.url.URL;
	/**
		Check if the request is fresh, aka
		Last-Modified and/or the ETag
		still match.
	**/
	var fresh : Bool;
	/**
		Check if the request is stale, aka
		"Last-Modified" and / or the "ETag" for the
		resource has changed.
	**/
	var stale : Bool;
	/**
		Check if the request is idempotent.
	**/
	var idempotent : Bool;
	/**
		Return the request socket.
	**/
	var socket : node.net.Socket;
	/**
		Return the protocol string "http" or "https"
		when requested with TLS. When the proxy setting
		is enabled the "X-Forwarded-Proto" header
		field will be trusted. If you're running behind
		a reverse proxy that supplies https for you this
		may be enabled.
	**/
	var protocol : String;
	/**
		Short-hand for:
		
		    this.protocol == 'https'
	**/
	var secure : Bool;
	/**
		Request remote address. Supports X-Forwarded-For when app.proxy is true.
	**/
	var ip : String;
	/**
		When `app.proxy` is `true`, parse
		the "X-Forwarded-For" ip address list.
		
		For example if the value were "client, proxy1, proxy2"
		you would receive the array `["client", "proxy1", "proxy2"]`
		where "proxy2" is the furthest down-stream.
	**/
	var ips : Array<String>;
	/**
		Return subdomains as an array.
		
		Subdomains are the dot-separated parts of the host before the main domain
		of the app. By default, the domain of the app is assumed to be the last two
		parts of the host. This can be changed by setting `app.subdomainOffset`.
		
		For example, if the domain is "tobi.ferrets.example.com":
		If `app.subdomainOffset` is not set, this.subdomains is
		`["ferrets", "tobi"]`.
		If `app.subdomainOffset` is 3, this.subdomains is `["tobi"]`.
	**/
	var subdomains : Array<String>;
	/**
		Check if the given `type(s)` is acceptable, returning
		the best match when true, otherwise `false`, in which
		case you should respond with 406 "Not Acceptable".
		
		The `type` value may be a single mime type string
		such as "application/json", the extension name
		such as "json" or an array `["json", "html", "text/plain"]`. When a list
		or array is given the _best_ match, if any is returned.
		
		Examples:
		
		     // Accept: text/html
		     this.accepts('html');
		     // => "html"
		
		     // Accept: text/*, application/json
		     this.accepts('html');
		     // => "html"
		     this.accepts('text/html');
		     // => "text/html"
		     this.accepts('json', 'text');
		     // => "json"
		     this.accepts('application/json');
		     // => "application/json"
		
		     // Accept: text/*, application/json
		     this.accepts('image/png');
		     this.accepts('png');
		     // => undefined
		
		     // Accept: text/*;q=.5, application/json
		     this.accepts(['html', 'json']);
		     this.accepts('html', 'json');
		     // => "json"
	**/
	@:overload(function(types:haxe.extern.Rest<String>):ts.AnyOf2<String, Bool> { })
	@:overload(function(types:Array<String>):ts.AnyOf2<String, Bool> { })
	function accepts():Array<String>;
	/**
		Return accepted encodings or best fit based on `encodings`.
		
		Given `Accept-Encoding: gzip, deflate`
		an array sorted by quality is returned:
		
		     ['gzip', 'deflate']
	**/
	@:overload(function(encodings:haxe.extern.Rest<String>):ts.AnyOf2<String, Bool> { })
	@:overload(function(encodings:Array<String>):ts.AnyOf2<String, Bool> { })
	function acceptsEncodings():Array<String>;
	/**
		Return accepted charsets or best fit based on `charsets`.
		
		Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5`
		an array sorted by quality is returned:
		
		     ['utf-8', 'utf-7', 'iso-8859-1']
	**/
	@:overload(function(charsets:haxe.extern.Rest<String>):ts.AnyOf2<String, Bool> { })
	@:overload(function(charsets:Array<String>):ts.AnyOf2<String, Bool> { })
	function acceptsCharsets():Array<String>;
	/**
		Return accepted languages or best fit based on `langs`.
		
		Given `Accept-Language: en;q=0.8, es, pt`
		an array sorted by quality is returned:
		
		     ['es', 'pt', 'en']
	**/
	@:overload(function(langs:haxe.extern.Rest<String>):ts.AnyOf2<String, Bool> { })
	@:overload(function(langs:Array<String>):ts.AnyOf2<String, Bool> { })
	function acceptsLanguages():Array<String>;
	/**
		Check if the incoming request contains the "Content-Type"
		header field, and it contains any of the give mime `type`s.
		If there is no request body, `null` is returned.
		If there is no content type, `false` is returned.
		Otherwise, it returns the first `type` that matches.
		
		Examples:
		
		     // With Content-Type: text/html; charset=utf-8
		     this.is('html'); // => 'html'
		     this.is('text/html'); // => 'text/html'
		     this.is('text/*', 'application/json'); // => 'text/html'
		
		     // When Content-Type is application/json
		     this.is('json', 'urlencoded'); // => 'json'
		     this.is('application/json'); // => 'application/json'
		     this.is('html', 'application/*'); // => 'application/json'
		
		     this.is('html'); // => false
	**/
	@:overload(function(types:Array<String>):Null<ts.AnyOf2<String, Bool>> { })
	function is(types:haxe.extern.Rest<String>):Null<ts.AnyOf2<String, Bool>>;
	/**
		Return request header. If the header is not set, will return an empty
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
	var state : DefaultState;
};