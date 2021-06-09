package cookies;

typedef SetOption = {
	/**
		a number representing the milliseconds from Date.now() for expiry
	**/
	@:optional
	var maxAge : Float;
	/**
		a Date object indicating the cookie's expiration
		date (expires at the end of session by default).
	**/
	@:optional
	var expires : js.lib.Date;
	/**
		a string indicating the path of the cookie (/ by default).
	**/
	@:optional
	var path : String;
	/**
		a string indicating the domain of the cookie (no default).
	**/
	@:optional
	var domain : String;
	/**
		a boolean indicating whether the cookie is only to be sent
		over HTTPS (false by default for HTTP, true by default for HTTPS).
	**/
	@:optional
	var secure : Bool;
	/**
		"secureProxy" option is deprecated; use "secure" option, provide "secure" to constructor if needed
	**/
	@:optional
	var secureProxy : Bool;
	/**
		a boolean indicating whether the cookie is only to be sent over HTTP(S),
		and not made available to client JavaScript (true by default).
	**/
	@:optional
	var httpOnly : Bool;
	/**
		a boolean or string indicating whether the cookie is a "same site" cookie (false by default).
		This can be set to 'strict', 'lax', or true (which maps to 'strict').
	**/
	@:optional
	var sameSite : ts.AnyOf2<Bool, String>;
	/**
		a boolean indicating whether the cookie is to be signed (false by default).
		If this is true, another cookie of the same name with the .sig suffix
		appended will also be sent, with a 27-byte url-safe base64 SHA1 value
		representing the hash of cookie-name=cookie-value against the first Keygrip key.
		This signature key is used to detect tampering the next time a cookie is received.
	**/
	@:optional
	var signed : Bool;
	/**
		a boolean indicating whether to overwrite previously set
		cookies of the same name (false by default). If this is true,
		all cookies set during the same request with the same
		name (regardless of path or domain) are filtered out of
		the Set-Cookie header when setting this cookie.
	**/
	@:optional
	var overwrite : Bool;
};