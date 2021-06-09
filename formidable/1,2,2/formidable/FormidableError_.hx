package formidable;

@jsInaccessible extern class FormidableError_ extends js.lib.Error {
	function new(message:String, internalCode:Float, ?httpCode:Float);
	var internalCode : Float;
	@:optional
	var httpCode : Float;
	static var prototype : FormidableError_;
}