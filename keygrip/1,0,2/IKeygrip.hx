typedef IKeygrip = {
	var value(get, never) : keygrip.KeygripFunction;
	function get_value():keygrip.KeygripFunction return cast IKeygrip;
	function sign(data:Dynamic):String;
	function verify(data:Dynamic, digest:String):Bool;
	function index(data:Dynamic, digest:String):Float;
};