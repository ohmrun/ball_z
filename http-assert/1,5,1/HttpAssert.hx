@:jsRequire("http-assert") @valueModuleOnly extern class HttpAssert {
	@:overload(function(value:Dynamic, ?status:Float, ?opts:{ }):Void { })
	@:selfCall
	static function call(value:Dynamic, ?status:Float, ?msg:String, ?opts:{ }):Void;
	static function equal<T>(a:T, b:T, ?status:Float, ?msg:String, ?opts:{ }):Void;
	static function notEqual<T>(a:T, b:T, ?status:Float, ?msg:String, ?opts:{ }):Void;
	static function ok(a:Dynamic, ?status:Float, ?msg:String, ?opts:{ }):Void;
	static function strictEqual(a:Dynamic, b:Dynamic, ?status:Float, ?msg:String, ?opts:{ }):Void;
	static function notStrictEqual(a:Dynamic, b:Dynamic, ?status:Float, ?msg:String, ?opts:{ }):Void;
	static function deepEqual(a:Dynamic, b:Dynamic, ?status:Float, ?msg:String, ?opts:{ }):Void;
	static function notDeepEqual(a:Dynamic, b:Dynamic, ?status:Float, ?msg:String, ?opts:{ }):Void;
}