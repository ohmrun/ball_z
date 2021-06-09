package bluebird;

typedef PromisifyAllOptions<T> = {
	@:optional
	var suffix : String;
	@:optional
	function filter(name:String, func:(args:haxe.extern.Rest<Dynamic>) -> Dynamic, ?target:Dynamic, ?passesDefaultFilter:Bool):Bool;
	@:optional
	function promisifier(originalMethod:(args:haxe.extern.Rest<Dynamic>) -> Dynamic, defaultPromisifer:(args:haxe.extern.Rest<Dynamic>) -> ((args:haxe.extern.Rest<Dynamic>) -> Bluebird<Dynamic>)):() -> js.lib.PromiseLike<Dynamic>;
	@:optional
	var context : Dynamic;
	@:optional
	var multiArgs : Bool;
};