package accepts;

typedef Accepts = {
	/**
		Return the first accepted charset. If nothing in `charsets` is accepted, then `false` is returned.
		If no charsets are supplied, all accepted charsets are returned, in the order of the client's preference
		(most preferred first).
	**/
	@:overload(function(charsets:Array<String>):ts.AnyOf2<String, Bool> { })
	@:overload(function(charsets:haxe.extern.Rest<String>):ts.AnyOf2<String, Bool> { })
	function charset():Array<String>;
	/**
		Return the first accepted charset. If nothing in `charsets` is accepted, then `false` is returned.
		If no charsets are supplied, all accepted charsets are returned, in the order of the client's preference
		(most preferred first).
	**/
	@:overload(function(charsets:Array<String>):ts.AnyOf2<String, Bool> { })
	@:overload(function(charsets:haxe.extern.Rest<String>):ts.AnyOf2<String, Bool> { })
	function charsets():Array<String>;
	/**
		Return the first accepted encoding. If nothing in `encodings` is accepted, then `false` is returned.
		If no encodings are supplied, all accepted encodings are returned, in the order of the client's preference
		(most preferred first).
	**/
	@:overload(function(encodings:Array<String>):ts.AnyOf2<String, Bool> { })
	@:overload(function(encodings:haxe.extern.Rest<String>):ts.AnyOf2<String, Bool> { })
	function encoding():Array<String>;
	/**
		Return the first accepted encoding. If nothing in `encodings` is accepted, then `false` is returned.
		If no encodings are supplied, all accepted encodings are returned, in the order of the client's preference
		(most preferred first).
	**/
	@:overload(function(encodings:Array<String>):ts.AnyOf2<String, Bool> { })
	@:overload(function(encodings:haxe.extern.Rest<String>):ts.AnyOf2<String, Bool> { })
	function encodings():Array<String>;
	/**
		Return the first accepted language. If nothing in `languages` is accepted, then `false` is returned.
		If no languaes are supplied, all accepted languages are returned, in the order of the client's preference
		(most preferred first).
	**/
	@:overload(function(languages:Array<String>):ts.AnyOf2<String, Bool> { })
	@:overload(function(languages:haxe.extern.Rest<String>):ts.AnyOf2<String, Bool> { })
	function language():Array<String>;
	/**
		Return the first accepted language. If nothing in `languages` is accepted, then `false` is returned.
		If no languaes are supplied, all accepted languages are returned, in the order of the client's preference
		(most preferred first).
	**/
	@:overload(function(languages:Array<String>):ts.AnyOf2<String, Bool> { })
	@:overload(function(languages:haxe.extern.Rest<String>):ts.AnyOf2<String, Bool> { })
	function languages():Array<String>;
	/**
		Return the first accepted language. If nothing in `languages` is accepted, then `false` is returned.
		If no languaes are supplied, all accepted languages are returned, in the order of the client's preference
		(most preferred first).
	**/
	@:overload(function(languages:Array<String>):ts.AnyOf2<String, Bool> { })
	@:overload(function(languages:haxe.extern.Rest<String>):ts.AnyOf2<String, Bool> { })
	function lang():Array<String>;
	/**
		Return the first accepted language. If nothing in `languages` is accepted, then `false` is returned.
		If no languaes are supplied, all accepted languages are returned, in the order of the client's preference
		(most preferred first).
	**/
	@:overload(function(languages:Array<String>):ts.AnyOf2<String, Bool> { })
	@:overload(function(languages:haxe.extern.Rest<String>):ts.AnyOf2<String, Bool> { })
	function langs():Array<String>;
	/**
		Return the first accepted type (and it is returned as the same text as what appears in the `types` array). If nothing in `types` is accepted, then `false` is returned.
		If no types are supplied, return the entire set of acceptable types.
		
		The `types` array can contain full MIME types or file extensions. Any value that is not a full MIME types is passed to `require('mime-types').lookup`.
	**/
	@:overload(function(types:haxe.extern.Rest<String>):ts.AnyOf3<String, Bool, Array<String>> { })
	function type(types:Array<String>):ts.AnyOf3<String, Bool, Array<String>>;
	@:overload(function(types:haxe.extern.Rest<String>):ts.AnyOf3<String, Bool, Array<String>> { })
	function types(types:Array<String>):ts.AnyOf3<String, Bool, Array<String>>;
};