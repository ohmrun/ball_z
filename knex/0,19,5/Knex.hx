@:jsRequire("knex") extern class Knex<TRecord, TResult> {
	@:selfCall
	function call<TRecord2, TResult2>(?tableName:ts.AnyOf4<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict>):knex.QueryBuilder<TRecord2, TResult2>;
	@:selfCall
	static function call_<TRecord, TResult>(config:ts.AnyOf2<String, knex.Config>):Knex<TRecord, TResult>;
	var VERSION : String;
	var __knex__ : String;
	@:overload(function<TResult2>(sql:String, bindings:haxe.extern.Rest<knex.RawBinding>):knex.Raw<TResult2> { })
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<knex.RawBinding>, knex.ValueDict>):knex.Raw<TResult2> { })
	dynamic function raw<TResult2>(value:knex.Value):knex.Raw<TResult2>;
	function transactionProvider(?config:Dynamic):() -> js.lib.Promise<knex.Transaction<Dynamic, Dynamic>>;
	@:overload(function<T>(transactionScope:(trx:knex.Transaction<Dynamic, Dynamic>) -> ts.AnyOf2<Void, js.lib.Promise<T>>, ?config:Dynamic):js.lib.Promise<T> { })
	function transaction(?transactionScope:Any, ?config:Dynamic):js.lib.Promise<knex.Transaction<Dynamic, Dynamic>>;
	function initialize(?config:knex.Config):Void;
	@:overload(function():js.lib.Promise<Void> { })
	function destroy(callback:haxe.Constraints.Function):Void;
	function batchInsert(tableName:knex.TableDescriptor, data:Array<Dynamic>, ?chunkSize:Float):knex.QueryBuilder<TRecord, { }>;
	var schema : knex.SchemaBuilder;
	function queryBuilder<TRecord2, TResult2>():knex.QueryBuilder<TRecord2, TResult2>;
	var client : Dynamic;
	var migrate : knex.Migrator;
	var seed : knex.Seeder;
	var fn : knex.FunctionHelper;
	dynamic function ref<TSrc>(src:TSrc):knex.Ref<TSrc, Dynamic>;
	@:overload(function<TResult2, TInnerRecord, TInnerResult>(subQueryBuilders:haxe.extern.Rest<knex.QueryBuilder<TInnerRecord, TInnerResult>>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2, TInnerRecord, TInnerResult>(subQueryBuilders:Array<knex.QueryBuilder<TInnerRecord, TInnerResult>>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:haxe.extern.Rest<Any>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:AliasUT):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:haxe.extern.Rest<Any>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:AliasUT):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function(columnName:String):knex.QueryBuilder<TRecord, Array<knex.DeferredKeySelection<TRecord, String, Bool, { }, Bool, { }, Any>>> { })
	@:overload(function<ColNameUT, TResult2>(columnNames:haxe.extern.Rest<ColNameUT>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<ColNameUT, TResult2>(columnNames:Array<ColNameUT>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:haxe.extern.Rest<knex.ColumnDescriptor<TRecord, TResult>>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:Array<knex.ColumnDescriptor<TRecord, TResult>>):knex.QueryBuilder<TRecord, TResult2> { })
	dynamic function select():knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function as(columnName:Dynamic):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function<TResult2, TInnerRecord, TInnerResult>(subQueryBuilders:haxe.extern.Rest<knex.QueryBuilder<TInnerRecord, TInnerResult>>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2, TInnerRecord, TInnerResult>(subQueryBuilders:Array<knex.QueryBuilder<TInnerRecord, TInnerResult>>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:haxe.extern.Rest<Any>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:AliasUT):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:haxe.extern.Rest<Any>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:AliasUT):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function(columnName:String):knex.QueryBuilder<TRecord, Array<knex.DeferredKeySelection<TRecord, String, Bool, { }, Bool, { }, Any>>> { })
	@:overload(function<ColNameUT, TResult2>(columnNames:haxe.extern.Rest<ColNameUT>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<ColNameUT, TResult2>(columnNames:Array<ColNameUT>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:haxe.extern.Rest<knex.ColumnDescriptor<TRecord, TResult>>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:Array<knex.ColumnDescriptor<TRecord, TResult>>):knex.QueryBuilder<TRecord, TResult2> { })
	dynamic function columns():knex.QueryBuilder<TRecord, TResult>;
	@:overload(function<TResult2, TInnerRecord, TInnerResult>(subQueryBuilders:haxe.extern.Rest<knex.QueryBuilder<TInnerRecord, TInnerResult>>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2, TInnerRecord, TInnerResult>(subQueryBuilders:Array<knex.QueryBuilder<TInnerRecord, TInnerResult>>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:haxe.extern.Rest<Any>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:AliasUT):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:haxe.extern.Rest<Any>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:AliasUT):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function(columnName:String):knex.QueryBuilder<TRecord, Array<knex.DeferredKeySelection<TRecord, String, Bool, { }, Bool, { }, Any>>> { })
	@:overload(function<ColNameUT, TResult2>(columnNames:haxe.extern.Rest<ColNameUT>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<ColNameUT, TResult2>(columnNames:Array<ColNameUT>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:haxe.extern.Rest<knex.ColumnDescriptor<TRecord, TResult>>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:Array<knex.ColumnDescriptor<TRecord, TResult>>):knex.QueryBuilder<TRecord, TResult2> { })
	dynamic function column():knex.QueryBuilder<TRecord, TResult>;
	@:overload(function<TRecord2, TResult2>(callback:haxe.Constraints.Function):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TRecord2, TResult2>(raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord2, TResult2> { })
	dynamic function from<TRecord2, TResult2>(tableName:ts.AnyOf4<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict>):knex.QueryBuilder<TRecord2, TResult2>;
	@:overload(function<TRecord2, TResult2>(callback:haxe.Constraints.Function):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TRecord2, TResult2>(raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord2, TResult2> { })
	dynamic function into<TRecord2, TResult2>(tableName:ts.AnyOf4<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict>):knex.QueryBuilder<TRecord2, TResult2>;
	@:overload(function<TRecord2, TResult2>(callback:haxe.Constraints.Function):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TRecord2, TResult2>(raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord2, TResult2> { })
	dynamic function table<TRecord2, TResult2>(tableName:ts.AnyOf4<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict>):knex.QueryBuilder<TRecord2, TResult2>;
	@:overload(function<ColNameUT, TResult2>(columnNames:haxe.extern.Rest<ColNameUT>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<ColNameUT, TResult2>(columnNames:Array<ColNameUT>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:haxe.extern.Rest<knex.ColumnDescriptor<TRecord, TResult>>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:Array<knex.ColumnDescriptor<TRecord, TResult>>):knex.QueryBuilder<TRecord, TResult2> { })
	dynamic function distinct(columnName:String):knex.QueryBuilder<TRecord, Array<knex.DeferredKeySelection<TRecord, String, Bool, { }, Bool, { }, Any>>>;
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, clause:knex.JoinCallback):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, columns:{ }):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, column1:String, column2:String):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, column1:String, raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, column1:String, operator_:String, column2:String):knex.QueryBuilder<TRecord2, TResult2> { })
	dynamic function join<TJoinTargetRecord, TRecord2, TResult2>(raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord2, TResult2>;
	dynamic function joinRaw(tableName:String, ?binding:ts.AnyOf11<String, Float, Bool, global.Buffer, js.lib.Date, Array<String>, Array<Float>, Array<js.lib.Date>, Array<Bool>, knex.Raw<Dynamic>, knex.ValueDict>):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, clause:knex.JoinCallback):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, columns:{ }):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, column1:String, column2:String):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, column1:String, raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, column1:String, operator_:String, column2:String):knex.QueryBuilder<TRecord2, TResult2> { })
	dynamic function innerJoin<TJoinTargetRecord, TRecord2, TResult2>(raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord2, TResult2>;
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, clause:knex.JoinCallback):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, columns:{ }):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, column1:String, column2:String):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, column1:String, raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, column1:String, operator_:String, column2:String):knex.QueryBuilder<TRecord2, TResult2> { })
	dynamic function leftJoin<TJoinTargetRecord, TRecord2, TResult2>(raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord2, TResult2>;
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, clause:knex.JoinCallback):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, columns:{ }):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, column1:String, column2:String):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, column1:String, raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, column1:String, operator_:String, column2:String):knex.QueryBuilder<TRecord2, TResult2> { })
	dynamic function leftOuterJoin<TJoinTargetRecord, TRecord2, TResult2>(raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord2, TResult2>;
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, clause:knex.JoinCallback):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, columns:{ }):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, column1:String, column2:String):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, column1:String, raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, column1:String, operator_:String, column2:String):knex.QueryBuilder<TRecord2, TResult2> { })
	dynamic function rightJoin<TJoinTargetRecord, TRecord2, TResult2>(raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord2, TResult2>;
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, clause:knex.JoinCallback):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, columns:{ }):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, column1:String, column2:String):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, column1:String, raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, column1:String, operator_:String, column2:String):knex.QueryBuilder<TRecord2, TResult2> { })
	dynamic function rightOuterJoin<TJoinTargetRecord, TRecord2, TResult2>(raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord2, TResult2>;
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, clause:knex.JoinCallback):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, columns:{ }):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, column1:String, column2:String):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, column1:String, raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, column1:String, operator_:String, column2:String):knex.QueryBuilder<TRecord2, TResult2> { })
	dynamic function outerJoin<TJoinTargetRecord, TRecord2, TResult2>(raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord2, TResult2>;
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, clause:knex.JoinCallback):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, columns:{ }):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, column1:String, column2:String):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, column1:String, raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, column1:String, operator_:String, column2:String):knex.QueryBuilder<TRecord2, TResult2> { })
	dynamic function fullOuterJoin<TJoinTargetRecord, TRecord2, TResult2>(raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord2, TResult2>;
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, clause:knex.JoinCallback):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, columns:{ }):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, column1:String, column2:String):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, column1:String, raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>, knex.AliasDict, knex.QueryCallback<Dynamic, Array<Any>>>, column1:String, operator_:String, column2:String):knex.QueryBuilder<TRecord2, TResult2> { })
	dynamic function crossJoin<TJoinTargetRecord, TRecord2, TResult2>(raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord2, TResult2>;
	@:overload(function(alias:String, sql:String, ?bindings:ts.AnyOf2<Dynamic, Array<knex.Value>>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(alias:String, queryBuilder:knex.QueryBuilder<Dynamic, Array<Dynamic>>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(alias:String, callback:(queryBuilder:knex.QueryBuilder<Dynamic, Array<Dynamic>>) -> Dynamic):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function with(alias:String, raw:ts.AnyOf2<knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>>):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(alias:String, sql:String, ?bindings:ts.AnyOf2<Dynamic, Array<knex.Value>>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(alias:String, queryBuilder:knex.QueryBuilder<Dynamic, Array<Dynamic>>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(alias:String, callback:(queryBuilder:knex.QueryBuilder<Dynamic, Array<Dynamic>>) -> Dynamic):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function withRecursive(alias:String, raw:ts.AnyOf2<knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>>):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(alias:String, sql:String, ?bindings:ts.AnyOf2<Dynamic, Array<knex.Value>>):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function withRaw(alias:String, raw:ts.AnyOf2<knex.Raw<Dynamic>, knex.QueryBuilder<Dynamic, Array<Dynamic>>>):knex.QueryBuilder<TRecord, TResult>;
	dynamic function withSchema(schema:String):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(alias:String, callback:(queryBuilder:knex.QueryBuilder<Dynamic, Array<Dynamic>>) -> Dynamic):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function withWrapped(alias:String, queryBuilder:knex.QueryBuilder<Dynamic, Array<Dynamic>>):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(callback:knex.QueryCallback<Dynamic, Array<Any>>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(object:knex.SafePartial<TRecord>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(object:Dynamic):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<T>(columnName:T, value:Null<Dynamic>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String, value:Null<knex.Value>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<T>(columnName:T, operator_:knex.ComparisionOperator, value:Null<Dynamic>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String, operator_:String, value:Null<knex.Value>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<T, TRecordInner, TResultInner>(columnName:T, operator_:knex.ComparisionOperator, value:knex.QueryBuilder<TRecordInner, TResultInner>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(columnName:String, operator_:String, value:knex.QueryBuilder<TRecordInner, TResultInner>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(left:knex.Raw<Dynamic>, operator_:String, right:Null<knex.Value>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(left:knex.Raw<Dynamic>, operator_:String, right:knex.QueryBuilder<TRecordInner, TResultInner>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(condition:Bool):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<TResult2>(sql:String, bindings:haxe.extern.Rest<knex.RawBinding>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<knex.RawBinding>, knex.ValueDict>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:knex.Raw<TResult2>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function(callback:knex.QueryCallback<Dynamic, Array<Any>>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:Dynamic):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function where(raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(callback:knex.QueryCallback<Dynamic, Array<Any>>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(object:knex.SafePartial<TRecord>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(object:Dynamic):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<T>(columnName:T, value:Null<Dynamic>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String, value:Null<knex.Value>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<T>(columnName:T, operator_:knex.ComparisionOperator, value:Null<Dynamic>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String, operator_:String, value:Null<knex.Value>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<T, TRecordInner, TResultInner>(columnName:T, operator_:knex.ComparisionOperator, value:knex.QueryBuilder<TRecordInner, TResultInner>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(columnName:String, operator_:String, value:knex.QueryBuilder<TRecordInner, TResultInner>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(left:knex.Raw<Dynamic>, operator_:String, right:Null<knex.Value>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(left:knex.Raw<Dynamic>, operator_:String, right:knex.QueryBuilder<TRecordInner, TResultInner>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(condition:Bool):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<TResult2>(sql:String, bindings:haxe.extern.Rest<knex.RawBinding>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<knex.RawBinding>, knex.ValueDict>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:knex.Raw<TResult2>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function(callback:knex.QueryCallback<Dynamic, Array<Any>>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:Dynamic):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function andWhere(raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(callback:knex.QueryCallback<Dynamic, Array<Any>>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(object:knex.SafePartial<TRecord>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(object:Dynamic):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<T>(columnName:T, value:Null<Dynamic>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String, value:Null<knex.Value>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<T>(columnName:T, operator_:knex.ComparisionOperator, value:Null<Dynamic>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String, operator_:String, value:Null<knex.Value>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<T, TRecordInner, TResultInner>(columnName:T, operator_:knex.ComparisionOperator, value:knex.QueryBuilder<TRecordInner, TResultInner>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(columnName:String, operator_:String, value:knex.QueryBuilder<TRecordInner, TResultInner>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(left:knex.Raw<Dynamic>, operator_:String, right:Null<knex.Value>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(left:knex.Raw<Dynamic>, operator_:String, right:knex.QueryBuilder<TRecordInner, TResultInner>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(condition:Bool):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<TResult2>(sql:String, bindings:haxe.extern.Rest<knex.RawBinding>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<knex.RawBinding>, knex.ValueDict>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:knex.Raw<TResult2>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function(callback:knex.QueryCallback<Dynamic, Array<Any>>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:Dynamic):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function orWhere(raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(callback:knex.QueryCallback<Dynamic, Array<Any>>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(object:knex.SafePartial<TRecord>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(object:Dynamic):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<T>(columnName:T, value:Null<Dynamic>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String, value:Null<knex.Value>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<T>(columnName:T, operator_:knex.ComparisionOperator, value:Null<Dynamic>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String, operator_:String, value:Null<knex.Value>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<T, TRecordInner, TResultInner>(columnName:T, operator_:knex.ComparisionOperator, value:knex.QueryBuilder<TRecordInner, TResultInner>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(columnName:String, operator_:String, value:knex.QueryBuilder<TRecordInner, TResultInner>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(left:knex.Raw<Dynamic>, operator_:String, right:Null<knex.Value>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(left:knex.Raw<Dynamic>, operator_:String, right:knex.QueryBuilder<TRecordInner, TResultInner>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(condition:Bool):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<TResult2>(sql:String, bindings:haxe.extern.Rest<knex.RawBinding>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<knex.RawBinding>, knex.ValueDict>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:knex.Raw<TResult2>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function(callback:knex.QueryCallback<Dynamic, Array<Any>>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:Dynamic):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function whereNot(raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(callback:knex.QueryCallback<Dynamic, Array<Any>>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(object:knex.SafePartial<TRecord>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(object:Dynamic):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<T>(columnName:T, value:Null<Dynamic>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String, value:Null<knex.Value>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<T>(columnName:T, operator_:knex.ComparisionOperator, value:Null<Dynamic>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String, operator_:String, value:Null<knex.Value>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<T, TRecordInner, TResultInner>(columnName:T, operator_:knex.ComparisionOperator, value:knex.QueryBuilder<TRecordInner, TResultInner>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(columnName:String, operator_:String, value:knex.QueryBuilder<TRecordInner, TResultInner>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(left:knex.Raw<Dynamic>, operator_:String, right:Null<knex.Value>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(left:knex.Raw<Dynamic>, operator_:String, right:knex.QueryBuilder<TRecordInner, TResultInner>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(condition:Bool):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<TResult2>(sql:String, bindings:haxe.extern.Rest<knex.RawBinding>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<knex.RawBinding>, knex.ValueDict>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:knex.Raw<TResult2>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function(callback:knex.QueryCallback<Dynamic, Array<Any>>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:Dynamic):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function andWhereNot(raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(callback:knex.QueryCallback<Dynamic, Array<Any>>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(object:knex.SafePartial<TRecord>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(object:Dynamic):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<T>(columnName:T, value:Null<Dynamic>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String, value:Null<knex.Value>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<T>(columnName:T, operator_:knex.ComparisionOperator, value:Null<Dynamic>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String, operator_:String, value:Null<knex.Value>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<T, TRecordInner, TResultInner>(columnName:T, operator_:knex.ComparisionOperator, value:knex.QueryBuilder<TRecordInner, TResultInner>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(columnName:String, operator_:String, value:knex.QueryBuilder<TRecordInner, TResultInner>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(left:knex.Raw<Dynamic>, operator_:String, right:Null<knex.Value>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(left:knex.Raw<Dynamic>, operator_:String, right:knex.QueryBuilder<TRecordInner, TResultInner>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(condition:Bool):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<TResult2>(sql:String, bindings:haxe.extern.Rest<knex.RawBinding>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<knex.RawBinding>, knex.ValueDict>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:knex.Raw<TResult2>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function(callback:knex.QueryCallback<Dynamic, Array<Any>>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:Dynamic):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function orWhereNot(raw:knex.Raw<Dynamic>):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function<TResult2>(sql:String, bindings:haxe.extern.Rest<knex.RawBinding>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<knex.RawBinding>, knex.ValueDict>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:knex.Raw<TResult2>):knex.QueryBuilder<TRecord, TResult2> { })
	dynamic function whereRaw(condition:Bool):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function<TResult2>(sql:String, bindings:haxe.extern.Rest<knex.RawBinding>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<knex.RawBinding>, knex.ValueDict>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:knex.Raw<TResult2>):knex.QueryBuilder<TRecord, TResult2> { })
	dynamic function orWhereRaw(condition:Bool):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function<TResult2>(sql:String, bindings:haxe.extern.Rest<knex.RawBinding>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<knex.RawBinding>, knex.ValueDict>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:knex.Raw<TResult2>):knex.QueryBuilder<TRecord, TResult2> { })
	dynamic function andWhereRaw(condition:Bool):knex.QueryBuilder<TRecord, TResult>;
	dynamic function whereWrapped(callback:knex.QueryCallback<Dynamic, Array<Any>>):knex.QueryBuilder<TRecord, TResult>;
	dynamic function havingWrapped(callback:knex.QueryCallback<Dynamic, Array<Any>>):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function<TRecordInner, TResultInner>(query:knex.QueryBuilder<TRecordInner, TResultInner>):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function whereExists(callback:knex.QueryCallback<Dynamic, Array<Any>>):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function<TRecordInner, TResultInner>(query:knex.QueryBuilder<TRecordInner, TResultInner>):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function orWhereExists(callback:knex.QueryCallback<Dynamic, Array<Any>>):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function<TRecordInner, TResultInner>(query:knex.QueryBuilder<TRecordInner, TResultInner>):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function whereNotExists(callback:knex.QueryCallback<Dynamic, Array<Any>>):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function<TRecordInner, TResultInner>(query:knex.QueryBuilder<TRecordInner, TResultInner>):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function orWhereNotExists(callback:knex.QueryCallback<Dynamic, Array<Any>>):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String, values:ts.AnyOf2<knex.QueryCallback<Dynamic, Array<Any>>, Array<knex.Value>>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<K>(columnNames:Array<K>, values:ts.AnyOf2<knex.QueryCallback<Dynamic, Array<Any>>, Array<Array<Dynamic>>>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnNames:Array<String>, values:ts.AnyOf2<knex.QueryCallback<Dynamic, Array<Any>>, Array<Array<knex.Value>>>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<K, TRecordInner, TResultInner>(columnName:K, values:knex.QueryBuilder<TRecordInner, Dynamic>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(columnName:String, values:knex.QueryBuilder<TRecordInner, TResultInner>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<K, TRecordInner, TResultInner>(columnNames:Array<K>, values:knex.QueryBuilder<TRecordInner, Dynamic>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(columnNames:Array<String>, values:knex.QueryBuilder<TRecordInner, TResultInner>):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function whereIn<K>(columnName:K, values:ts.AnyOf2<knex.QueryCallback<Dynamic, Array<Any>>, Array<Dynamic>>):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String, values:ts.AnyOf2<knex.QueryCallback<Dynamic, Array<Any>>, Array<knex.Value>>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<K>(columnNames:Array<K>, values:ts.AnyOf2<knex.QueryCallback<Dynamic, Array<Any>>, Array<Array<Dynamic>>>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnNames:Array<String>, values:ts.AnyOf2<knex.QueryCallback<Dynamic, Array<Any>>, Array<Array<knex.Value>>>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<K, TRecordInner, TResultInner>(columnName:K, values:knex.QueryBuilder<TRecordInner, Dynamic>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(columnName:String, values:knex.QueryBuilder<TRecordInner, TResultInner>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<K, TRecordInner, TResultInner>(columnNames:Array<K>, values:knex.QueryBuilder<TRecordInner, Dynamic>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(columnNames:Array<String>, values:knex.QueryBuilder<TRecordInner, TResultInner>):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function orWhereIn<K>(columnName:K, values:ts.AnyOf2<knex.QueryCallback<Dynamic, Array<Any>>, Array<Dynamic>>):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String, values:ts.AnyOf2<knex.QueryCallback<Dynamic, Array<Any>>, Array<knex.Value>>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<K>(columnNames:Array<K>, values:ts.AnyOf2<knex.QueryCallback<Dynamic, Array<Any>>, Array<Array<Dynamic>>>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnNames:Array<String>, values:ts.AnyOf2<knex.QueryCallback<Dynamic, Array<Any>>, Array<Array<knex.Value>>>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<K, TRecordInner, TResultInner>(columnName:K, values:knex.QueryBuilder<TRecordInner, Dynamic>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(columnName:String, values:knex.QueryBuilder<TRecordInner, TResultInner>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<K, TRecordInner, TResultInner>(columnNames:Array<K>, values:knex.QueryBuilder<TRecordInner, Dynamic>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(columnNames:Array<String>, values:knex.QueryBuilder<TRecordInner, TResultInner>):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function whereNotIn<K>(columnName:K, values:ts.AnyOf2<knex.QueryCallback<Dynamic, Array<Any>>, Array<Dynamic>>):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String, values:ts.AnyOf2<knex.QueryCallback<Dynamic, Array<Any>>, Array<knex.Value>>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<K>(columnNames:Array<K>, values:ts.AnyOf2<knex.QueryCallback<Dynamic, Array<Any>>, Array<Array<Dynamic>>>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnNames:Array<String>, values:ts.AnyOf2<knex.QueryCallback<Dynamic, Array<Any>>, Array<Array<knex.Value>>>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<K, TRecordInner, TResultInner>(columnName:K, values:knex.QueryBuilder<TRecordInner, Dynamic>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(columnName:String, values:knex.QueryBuilder<TRecordInner, TResultInner>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<K, TRecordInner, TResultInner>(columnNames:Array<K>, values:knex.QueryBuilder<TRecordInner, Dynamic>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(columnNames:Array<String>, values:knex.QueryBuilder<TRecordInner, TResultInner>):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function orWhereNotIn<K>(columnName:K, values:ts.AnyOf2<knex.QueryCallback<Dynamic, Array<Any>>, Array<Dynamic>>):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function whereNull(columnName:Dynamic):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function orWhereNull(columnName:Dynamic):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function whereNotNull(columnName:Dynamic):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function orWhereNotNull(columnName:Dynamic):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String, range:ts.Tuple2<knex.Value, knex.Value>):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function whereBetween<K>(columnName:K, range:ts.Tuple2<Dynamic, Dynamic>):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String, range:ts.Tuple2<knex.Value, knex.Value>):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function orWhereBetween<K>(columnName:K, range:ts.Tuple2<Dynamic, Dynamic>):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String, range:ts.Tuple2<knex.Value, knex.Value>):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function andWhereBetween<K>(columnName:K, range:ts.Tuple2<Dynamic, Dynamic>):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String, range:ts.Tuple2<knex.Value, knex.Value>):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function whereNotBetween<K>(columnName:K, range:ts.Tuple2<Dynamic, Dynamic>):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String, range:ts.Tuple2<knex.Value, knex.Value>):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function orWhereNotBetween<K>(columnName:K, range:ts.Tuple2<Dynamic, Dynamic>):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String, range:ts.Tuple2<knex.Value, knex.Value>):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function andWhereNotBetween<K>(columnName:K, range:ts.Tuple2<Dynamic, Dynamic>):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<knex.RawBinding>, knex.ValueDict>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:knex.Raw<TResult2>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function(columnName:String):knex.QueryBuilder<TRecord, Array<knex.DeferredKeySelection<TRecord, String, Bool, { }, Bool, { }, Any>>> { })
	@:overload(function<ColNameUT, TResult2>(columnNames:haxe.extern.Rest<ColNameUT>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<ColNameUT, TResult2>(columnNames:Array<ColNameUT>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:haxe.extern.Rest<knex.ColumnDescriptor<TRecord, TResult>>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:Array<knex.ColumnDescriptor<TRecord, TResult>>):knex.QueryBuilder<TRecord, TResult2> { })
	dynamic function groupBy<TResult2>(sql:String, bindings:haxe.extern.Rest<knex.RawBinding>):knex.QueryBuilder<TRecord, TResult2>;
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<knex.RawBinding>, knex.ValueDict>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:knex.Raw<TResult2>):knex.QueryBuilder<TRecord, TResult2> { })
	dynamic function groupByRaw<TResult2>(sql:String, bindings:haxe.extern.Rest<knex.RawBinding>):knex.QueryBuilder<TRecord, TResult2>;
	@:overload(function(columnName:String, ?order:String):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnDefs:Array<ts.AnyOf2<{ var column : Dynamic; @:optional var order : String; }, Dynamic>>):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnDefs:Array<ts.AnyOf2<String, { var column : String; @:optional var order : String; }>>):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function orderBy(columnName:Dynamic, ?order:String):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<knex.RawBinding>, knex.ValueDict>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:knex.Raw<TResult2>):knex.QueryBuilder<TRecord, TResult2> { })
	dynamic function orderByRaw<TResult2>(sql:String, bindings:haxe.extern.Rest<knex.RawBinding>):knex.QueryBuilder<TRecord, TResult2>;
	@:overload(function(callbacks:haxe.extern.Rest<ts.AnyOf3<knex.Raw<Dynamic>, knex.QueryCallback<Dynamic, Array<Any>>, knex.QueryBuilder<TRecord, Dynamic>>>):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function intersect(callback:knex.MaybeArray<ts.AnyOf3<knex.Raw<Dynamic>, knex.QueryCallback<Dynamic, Array<Any>>, knex.QueryBuilder<TRecord, Dynamic>>>, ?wrap:Bool):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(callbacks:haxe.extern.Rest<ts.AnyOf3<knex.Raw<Dynamic>, knex.QueryCallback<Dynamic, Array<Any>>, knex.QueryBuilder<TRecord, Dynamic>>>):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function union(callback:knex.MaybeArray<ts.AnyOf3<knex.Raw<Dynamic>, knex.QueryCallback<Dynamic, Array<Any>>, knex.QueryBuilder<TRecord, Dynamic>>>, ?wrap:Bool):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(callbacks:haxe.extern.Rest<ts.AnyOf3<knex.Raw<Dynamic>, knex.QueryCallback<Dynamic, Array<Any>>, knex.QueryBuilder<TRecord, Dynamic>>>):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function unionAll(callback:knex.MaybeArray<ts.AnyOf3<knex.Raw<Dynamic>, knex.QueryCallback<Dynamic, Array<Any>>, knex.QueryBuilder<TRecord, Dynamic>>>, ?wrap:Bool):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(tableName:String, column1:String, operator_:String, column2:String):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<TResult2>(sql:String, bindings:haxe.extern.Rest<knex.RawBinding>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<knex.RawBinding>, knex.ValueDict>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:knex.Raw<TResult2>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function(callback:knex.QueryCallback<Dynamic, Array<Any>>):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function having<K1, K2>(tableName:String, column1:K1, operator_:knex.ComparisionOperator, column2:K2):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(tableName:String, column1:String, operator_:String, column2:String):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<TResult2>(sql:String, bindings:haxe.extern.Rest<knex.RawBinding>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<knex.RawBinding>, knex.ValueDict>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:knex.Raw<TResult2>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function(callback:knex.QueryCallback<Dynamic, Array<Any>>):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function andHaving<K1, K2>(tableName:String, column1:K1, operator_:knex.ComparisionOperator, column2:K2):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<knex.RawBinding>, knex.ValueDict>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:knex.Raw<TResult2>):knex.QueryBuilder<TRecord, TResult2> { })
	dynamic function havingRaw<TResult2>(sql:String, bindings:haxe.extern.Rest<knex.RawBinding>):knex.QueryBuilder<TRecord, TResult2>;
	@:overload(function(tableName:String, column1:String, operator_:String, column2:String):knex.QueryBuilder<TRecord, TResult> { })
	@:overload(function<TResult2>(sql:String, bindings:haxe.extern.Rest<knex.RawBinding>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<knex.RawBinding>, knex.ValueDict>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:knex.Raw<TResult2>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function(callback:knex.QueryCallback<Dynamic, Array<Any>>):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function orHaving<K1, K2>(tableName:String, column1:K1, operator_:knex.ComparisionOperator, column2:K2):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<knex.RawBinding>, knex.ValueDict>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:knex.Raw<TResult2>):knex.QueryBuilder<TRecord, TResult2> { })
	dynamic function orHavingRaw<TResult2>(sql:String, bindings:haxe.extern.Rest<knex.RawBinding>):knex.QueryBuilder<TRecord, TResult2>;
	@:overload(function(columnName:String, values:Array<knex.Value>):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function havingIn<K>(columnName:K, values:Array<Dynamic>):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String, values:Array<knex.Value>):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function orHavingNotBetween<K>(columnName:K, values:Array<Dynamic>):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String, values:Array<knex.Value>):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function havingNotBetween<K>(columnName:K, values:Array<Dynamic>):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String, values:Array<knex.Value>):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function orHavingBetween<K>(columnName:K, values:Array<Dynamic>):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String, values:Array<knex.Value>):knex.QueryBuilder<TRecord, TResult> { })
	dynamic function havingBetween<K>(columnName:K, values:Array<Dynamic>):knex.QueryBuilder<TRecord, TResult>;
	function clearSelect():knex.QueryBuilder<TRecord, Dynamic>;
	function clearWhere():knex.QueryBuilder<TRecord, TResult>;
	function clearOrder():knex.QueryBuilder<TRecord, TResult>;
	function clearHaving():knex.QueryBuilder<TRecord, TResult>;
	function clearCounters():knex.QueryBuilder<TRecord, TResult>;
	function offset(offset:Float):knex.QueryBuilder<TRecord, TResult>;
	function limit(limit:Float):knex.QueryBuilder<TRecord, TResult>;
	@:overload(function<TAliases, TResult2>(aliases:TAliases):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:haxe.extern.Rest<ts.AnyOf3<String, knex.Raw<Dynamic>, { }>>):knex.QueryBuilder<TRecord, TResult2> { })
	dynamic function count<TResult2>(columnNames:haxe.extern.Rest<Dynamic>):knex.QueryBuilder<TRecord, TResult2>;
	@:overload(function<TAliases, TResult2>(aliases:TAliases):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:haxe.extern.Rest<ts.AnyOf3<String, knex.Raw<Dynamic>, { }>>):knex.QueryBuilder<TRecord, TResult2> { })
	dynamic function countDistinct<TResult2>(columnNames:haxe.extern.Rest<Dynamic>):knex.QueryBuilder<TRecord, TResult2>;
	@:overload(function<TAliases, TResult2>(aliases:TAliases):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:haxe.extern.Rest<ts.AnyOf3<String, knex.Raw<Dynamic>, { }>>):knex.QueryBuilder<TRecord, TResult2> { })
	dynamic function min<TKey, TResult2>(columnNames:haxe.extern.Rest<TKey>):knex.QueryBuilder<TRecord, TResult2>;
	@:overload(function<TAliases, TResult2>(aliases:TAliases):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:haxe.extern.Rest<ts.AnyOf3<String, knex.Raw<Dynamic>, { }>>):knex.QueryBuilder<TRecord, TResult2> { })
	dynamic function max<TKey, TResult2>(columnNames:haxe.extern.Rest<TKey>):knex.QueryBuilder<TRecord, TResult2>;
	@:overload(function<TAliases, TResult2>(aliases:TAliases):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:haxe.extern.Rest<ts.AnyOf3<String, knex.Raw<Dynamic>, { }>>):knex.QueryBuilder<TRecord, TResult2> { })
	dynamic function sum<TKey, TResult2>(columnNames:haxe.extern.Rest<TKey>):knex.QueryBuilder<TRecord, TResult2>;
	@:overload(function<TAliases, TResult2>(aliases:TAliases):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:haxe.extern.Rest<ts.AnyOf3<String, knex.Raw<Dynamic>, { }>>):knex.QueryBuilder<TRecord, TResult2> { })
	dynamic function sumDistinct<TKey, TResult2>(columnNames:haxe.extern.Rest<TKey>):knex.QueryBuilder<TRecord, TResult2>;
	@:overload(function<TAliases, TResult2>(aliases:TAliases):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:haxe.extern.Rest<ts.AnyOf3<String, knex.Raw<Dynamic>, { }>>):knex.QueryBuilder<TRecord, TResult2> { })
	dynamic function avg<TKey, TResult2>(columnNames:haxe.extern.Rest<TKey>):knex.QueryBuilder<TRecord, TResult2>;
	@:overload(function<TAliases, TResult2>(aliases:TAliases):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:haxe.extern.Rest<ts.AnyOf3<String, knex.Raw<Dynamic>, { }>>):knex.QueryBuilder<TRecord, TResult2> { })
	dynamic function avgDistinct<TKey, TResult2>(columnNames:haxe.extern.Rest<TKey>):knex.QueryBuilder<TRecord, TResult2>;
	@:overload(function(columnName:String, ?amount:Float):knex.QueryBuilder<TRecord, Float> { })
	function increment(columnName:Dynamic, ?amount:Float):knex.QueryBuilder<TRecord, Float>;
	@:overload(function(columnName:String, ?amount:Float):knex.QueryBuilder<TRecord, Float> { })
	function decrement(columnName:Dynamic, ?amount:Float):knex.QueryBuilder<TRecord, Float>;
	@:overload(function<TResult2, TInnerRecord, TInnerResult>(subQueryBuilders:haxe.extern.Rest<knex.QueryBuilder<TInnerRecord, TInnerResult>>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2, TInnerRecord, TInnerResult>(subQueryBuilders:Array<knex.QueryBuilder<TInnerRecord, TInnerResult>>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:haxe.extern.Rest<Any>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:AliasUT):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:haxe.extern.Rest<Any>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:AliasUT):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function(columnName:String):knex.QueryBuilder<TRecord, Array<knex.DeferredKeySelection<TRecord, String, Bool, { }, Bool, { }, Any>>> { })
	@:overload(function<ColNameUT, TResult2>(columnNames:haxe.extern.Rest<ColNameUT>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<ColNameUT, TResult2>(columnNames:Array<ColNameUT>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:haxe.extern.Rest<knex.ColumnDescriptor<TRecord, knex.deferredkeyselection.AddUnionMember<knex.UnwrapArrayMember<TResult>, Null<Any>>>>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:Array<knex.ColumnDescriptor<TRecord, knex.deferredkeyselection.AddUnionMember<knex.UnwrapArrayMember<TResult>, Null<Any>>>>):knex.QueryBuilder<TRecord, TResult2> { })
	dynamic function first():knex.QueryBuilder<TRecord, knex.deferredkeyselection.AddUnionMember<knex.UnwrapArrayMember<TResult>, Null<Any>>>;
	@:overload(function<TResult2>(column:String):knex.QueryBuilder<TRecord, TResult2> { })
	function pluck<K>(column:K):knex.QueryBuilder<TRecord, Array<Dynamic>>;
	@:overload(function<TKey, TResult2>(data:knex.MaybeArray<knex.SafePartial<TRecord>>, returning:TKey):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TKey, TResult2>(data:knex.MaybeArray<knex.SafePartial<TRecord>>, returning:Array<TKey>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TKey, TResult2>(data:knex.MaybeArray<knex.SafePartial<TRecord>>, returning:TKey):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TKey, TResult2>(data:knex.MaybeArray<knex.SafePartial<TRecord>>, returning:Array<TKey>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(data:knex.MaybeArray<knex.SafePartial<TRecord>>):knex.QueryBuilder<TRecord, TResult2> { })
	function insert(data:knex.MaybeArray<knex.SafePartial<TRecord>>, returning:String):knex.QueryBuilder<TRecord, Array<knex.DeferredKeySelection<TRecord, Any, Bool, { }, Bool, { }, Any>>>;
	function modify<TRecord2, TResult2>(callback:knex.QueryCallbackWithArgs<TRecord, Dynamic>, args:haxe.extern.Rest<Dynamic>):knex.QueryBuilder<TRecord2, TResult2>;
	@:overload(function<TKey, TResult2>(data:knex.MaybeArray<knex.SafePartial<TRecord>>, returning:TKey):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TKey, TResult2>(data:knex.MaybeArray<knex.SafePartial<TRecord>>, returning:Array<TKey>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TKey, TResult2>(data:knex.MaybeArray<knex.SafePartial<TRecord>>, returning:ts.AnyOf2<Array<TKey>, TKey>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TKey, TResult2>(data:knex.MaybeArray<knex.SafePartial<TRecord>>, returning:Array<TKey>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(data:knex.MaybeArray<knex.SafePartial<TRecord>>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<K1, K2, TResult2>(columnName:K1, value:Dynamic, returning:K1):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<K1, K2, TResult2>(columnName:K1, value:Dynamic, returning:Array<K1>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<K>(columnName:K, value:Dynamic):knex.QueryBuilder<TRecord, Float> { })
	@:overload(function<TResult2>(columnName:String, value:knex.Value, returning:ts.AnyOf2<String, Array<String>>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnName:String, value:knex.Value):knex.QueryBuilder<TRecord, TResult2> { })
	function update(data:knex.MaybeArray<knex.SafePartial<TRecord>>, returning:String):knex.QueryBuilder<TRecord, Array<knex.DeferredKeySelection<TRecord, Any, Bool, { }, Bool, { }, Any>>>;
	@:overload(function<TKey, TResult2>(column:TKey):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TKey, TResult2>(columns:Array<TKey>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(column:ts.AnyOf2<String, Array<String>>):knex.QueryBuilder<TRecord, TResult2> { })
	function returning(column:String):knex.QueryBuilder<TRecord, Array<knex.DeferredKeySelection<TRecord, Any, Bool, { }, Bool, { }, Any>>>;
	@:overload(function<TKey, TResult2>(returning:TKey):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TKey, TResult2>(returning:Array<TKey>):knex.QueryBuilder<TRecord, Array<TResult2>> { })
	@:overload(function<TResult2>(returning:ts.AnyOf2<String, Array<String>>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>():knex.QueryBuilder<TRecord, TResult2> { })
	function del(returning:String):knex.QueryBuilder<TRecord, Array<knex.DeferredKeySelection<TRecord, Any, Bool, { }, Bool, { }, Any>>>;
	@:overload(function<TKey, TResult2>(returning:TKey):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TKey, TResult2>(returning:Array<TKey>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(returning:ts.AnyOf2<String, Array<String>>):knex.QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>():knex.QueryBuilder<TRecord, TResult2> { })
	function delete(returning:String):knex.QueryBuilder<TRecord, Array<knex.DeferredKeySelection<TRecord, Any, Bool, { }, Bool, { }, Any>>>;
	function truncate():knex.QueryBuilder<TRecord, Void>;
	function addListener(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):Knex<TRecord, TResult>;
	function on(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):Knex<TRecord, TResult>;
	function once(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):Knex<TRecord, TResult>;
	function removeListener(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):Knex<TRecord, TResult>;
	function off(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):Knex<TRecord, TResult>;
	function removeAllListeners(?event:ts.AnyOf2<String, js.lib.Symbol>):Knex<TRecord, TResult>;
	function setMaxListeners(n:Float):Knex<TRecord, TResult>;
	function getMaxListeners():Float;
	function listeners(event:ts.AnyOf2<String, js.lib.Symbol>):Array<haxe.Constraints.Function>;
	function rawListeners(event:ts.AnyOf2<String, js.lib.Symbol>):Array<haxe.Constraints.Function>;
	function emit(event:ts.AnyOf2<String, js.lib.Symbol>, args:haxe.extern.Rest<Dynamic>):Bool;
	function listenerCount(event:ts.AnyOf2<String, js.lib.Symbol>):Float;
	function prependListener(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):Knex<TRecord, TResult>;
	function prependOnceListener(event:ts.AnyOf2<String, js.lib.Symbol>, listener:(args:haxe.extern.Rest<Dynamic>) -> Void):Knex<TRecord, TResult>;
	function eventNames():Array<ts.AnyOf2<String, js.lib.Symbol>>;
}