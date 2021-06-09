package bookshelf;

@:jsRequire("bookshelf", "Events") extern class Events<T> {
	function new();
	function on(?event:String, ?callback:EventFunction<T>, ?context:Dynamic):Void;
	function off(?event:String):Void;
	function trigger(?event:String, args:haxe.extern.Rest<Dynamic>):Void;
	function triggerThen(name:String, args:haxe.extern.Rest<Dynamic>):Bluebird<Dynamic>;
	function once(event:String, callback:EventFunction<T>, ?context:Dynamic):Void;
	static var prototype : Events<Dynamic>;
}