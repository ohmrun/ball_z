typedef ICookies = {
	var value(get, never) : cookies.CookiesFunction;
	function get_value():cookies.CookiesFunction return cast ICookies;
	var secure : Bool;
	var request : node.http.IncomingMessage;
	var response : node.http.ServerResponse;
	/**
		This extracts the cookie with the given name from the
		Cookie header in the request. If such a cookie exists,
		its value is returned. Otherwise, nothing is returned.
	**/
	function get(name:String, ?opts:cookies.GetOption):Null<String>;
	/**
		This sets the given cookie in the response and returns
		the current context to allow chaining.If the value is omitted,
		an outbound header with an expired date is used to delete the cookie.
	**/
	function set(name:String, ?value:String, ?opts:cookies.SetOption):Cookies;
};