@:jsRequire("qs") @valueModuleOnly extern class Qs {
	static function stringify(obj:Dynamic, ?options:qs.IStringifyOptions):String;
	@:overload(function(str:ts.AnyOf2<String, { }>, ?options:qs.IParseOptions):{ } { })
	static function parse(str:String, ?options:Dynamic):qs.ParsedQs;
}