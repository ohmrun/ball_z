package cookies;

typedef Cookie = {
	var name : String;
	var value : String;
	/**
		"maxage" is deprecated, use "maxAge" instead
	**/
	var maxage : Float;
	var maxAge : Float;
	var expires : js.lib.Date;
	var path : String;
	var domain : String;
	var secure : Bool;
	var httpOnly : Bool;
	var sameSite : Bool;
	var overwrite : Bool;
	function toString():String;
	function toHeader():String;
};