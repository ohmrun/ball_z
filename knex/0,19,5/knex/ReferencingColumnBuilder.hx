package knex;

typedef ReferencingColumnBuilder = {
	function inTable(tableName:String):ColumnBuilder;
	function index(?indexName:String):ColumnBuilder;
	function primary(?constraintName:String):ColumnBuilder;
	function unique(?indexName:String):ColumnBuilder;
	function references(columnName:String):ReferencingColumnBuilder;
	function onDelete(command:String):ColumnBuilder;
	function onUpdate(command:String):ColumnBuilder;
	function defaultTo(value:Null<Value>):ColumnBuilder;
	function unsigned():ColumnBuilder;
	function notNullable():ColumnBuilder;
	function nullable():ColumnBuilder;
	function comment(value:String):ColumnBuilder;
	function alter():ColumnBuilder;
	function queryContext(context:Dynamic):ColumnBuilder;
};