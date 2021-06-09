package knex;

typedef TableBuilder = {
	function increments(?columnName:String):ColumnBuilder;
	function bigIncrements(?columnName:String):ColumnBuilder;
	function dropColumn(columnName:String):TableBuilder;
	function dropColumns(columnNames:haxe.extern.Rest<String>):TableBuilder;
	function renameColumn(from:String, to:String):ColumnBuilder;
	function integer(columnName:String, ?length:Float):ColumnBuilder;
	function bigInteger(columnName:String):ColumnBuilder;
	function text(columnName:String, ?textType:String):ColumnBuilder;
	function string(columnName:String, ?length:Float):ColumnBuilder;
	function float(columnName:String, ?precision:Float, ?scale:Float):ColumnBuilder;
	function decimal(columnName:String, ?precision:Float, ?scale:Float):ColumnBuilder;
	function boolean(columnName:String):ColumnBuilder;
	function date(columnName:String):ColumnBuilder;
	function dateTime(columnName:String, ?options:{ @:optional var useTz : Bool; @:optional var precision : Float; }):ColumnBuilder;
	function time(columnName:String):ColumnBuilder;
	@:overload(function(columnName:String, ?withoutTz:Bool, ?precision:Float):ColumnBuilder { })
	function timestamp(columnName:String, ?options:{ @:optional var useTz : Bool; @:optional var precision : Float; }):ColumnBuilder;
	function timestamps(?useTimestampType:Bool, ?makeDefaultNow:Bool):ColumnBuilder;
	function binary(columnName:String, ?length:Float):ColumnBuilder;
	@:native("enum")
	function enum_(columnName:String, values:Array<Value>, ?options:EnumOptions):ColumnBuilder;
	function enu(columnName:String, values:Array<Value>, ?options:EnumOptions):ColumnBuilder;
	function json(columnName:String):ColumnBuilder;
	function jsonb(columnName:String):ColumnBuilder;
	function uuid(columnName:String):ColumnBuilder;
	function comment(val:String):TableBuilder;
	function specificType(columnName:String, type:String):ColumnBuilder;
	function primary(columnNames:Array<String>, ?constraintName:String):TableBuilder;
	function index(columnNames:Array<ts.AnyOf2<String, Raw<Dynamic>>>, ?indexName:String, ?indexType:String):TableBuilder;
	function unique(columnNames:Array<ts.AnyOf2<String, Raw<Dynamic>>>, ?indexName:String):TableBuilder;
	@:overload(function(columns:Array<String>, ?foreignKeyName:String):MultikeyForeignConstraintBuilder { })
	function foreign(column:String, ?foreignKeyName:String):ForeignConstraintBuilder;
	function dropForeign(columnNames:Array<String>, ?foreignKeyName:String):TableBuilder;
	function dropUnique(columnNames:Array<ts.AnyOf2<String, Raw<Dynamic>>>, ?indexName:String):TableBuilder;
	function dropPrimary(?constraintName:String):TableBuilder;
	function dropIndex(columnNames:Array<ts.AnyOf2<String, Raw<Dynamic>>>, ?indexName:String):TableBuilder;
	function dropTimestamps():ColumnBuilder;
	function queryContext(context:Dynamic):TableBuilder;
};