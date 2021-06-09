package knex;

typedef JoinClause = {
	@:overload(function(callback:JoinCallback):JoinClause { })
	@:overload(function(columns:{ }):JoinClause { })
	@:overload(function(column1:String, column2:String):JoinClause { })
	@:overload(function(column1:String, raw:Raw<Dynamic>):JoinClause { })
	@:overload(function(column1:String, operator_:String, column2:ts.AnyOf2<String, Raw<Dynamic>>):JoinClause { })
	function on(raw:Raw<Dynamic>):JoinClause;
	@:overload(function(callback:JoinCallback):JoinClause { })
	@:overload(function(columns:{ }):JoinClause { })
	@:overload(function(column1:String, column2:String):JoinClause { })
	@:overload(function(column1:String, raw:Raw<Dynamic>):JoinClause { })
	@:overload(function(column1:String, operator_:String, column2:ts.AnyOf2<String, Raw<Dynamic>>):JoinClause { })
	function andOn(raw:Raw<Dynamic>):JoinClause;
	@:overload(function(callback:JoinCallback):JoinClause { })
	@:overload(function(columns:{ }):JoinClause { })
	@:overload(function(column1:String, column2:String):JoinClause { })
	@:overload(function(column1:String, raw:Raw<Dynamic>):JoinClause { })
	@:overload(function(column1:String, operator_:String, column2:ts.AnyOf2<String, Raw<Dynamic>>):JoinClause { })
	function orOn(raw:Raw<Dynamic>):JoinClause;
	function onIn(column1:String, values:Array<Dynamic>):JoinClause;
	function andOnIn(column1:String, values:Array<Dynamic>):JoinClause;
	function orOnIn(column1:String, values:Array<Dynamic>):JoinClause;
	function onNotIn(column1:String, values:Array<Dynamic>):JoinClause;
	function andOnNotIn(column1:String, values:Array<Dynamic>):JoinClause;
	function orOnNotIn(column1:String, values:Array<Dynamic>):JoinClause;
	function onNull(column1:String):JoinClause;
	function andOnNull(column1:String):JoinClause;
	function orOnNull(column1:String):JoinClause;
	function onNotNull(column1:String):JoinClause;
	function andOnNotNull(column1:String):JoinClause;
	function orOnNotNull(column1:String):JoinClause;
	function onExists(callback:QueryCallback<Dynamic, Array<Any>>):JoinClause;
	function andOnExists(callback:QueryCallback<Dynamic, Array<Any>>):JoinClause;
	function orOnExists(callback:QueryCallback<Dynamic, Array<Any>>):JoinClause;
	function onNotExists(callback:QueryCallback<Dynamic, Array<Any>>):JoinClause;
	function andOnNotExists(callback:QueryCallback<Dynamic, Array<Any>>):JoinClause;
	function orOnNotExists(callback:QueryCallback<Dynamic, Array<Any>>):JoinClause;
	function onBetween(column1:String, range:ts.Tuple2<Dynamic, Dynamic>):JoinClause;
	function andOnBetween(column1:String, range:ts.Tuple2<Dynamic, Dynamic>):JoinClause;
	function orOnBetween(column1:String, range:ts.Tuple2<Dynamic, Dynamic>):JoinClause;
	function onNotBetween(column1:String, range:ts.Tuple2<Dynamic, Dynamic>):JoinClause;
	function andOnNotBetween(column1:String, range:ts.Tuple2<Dynamic, Dynamic>):JoinClause;
	function orOnNotBetween(column1:String, range:ts.Tuple2<Dynamic, Dynamic>):JoinClause;
	@:native("using")
	function using_(column:ts.AnyOf4<String, Array<String>, Raw<Dynamic>, { }>):JoinClause;
	function type(type:String):JoinClause;
};