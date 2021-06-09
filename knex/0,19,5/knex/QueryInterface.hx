package knex;

typedef QueryInterface<TRecord, TResult> = {
	@:overload(function<TResult2, TInnerRecord, TInnerResult>(subQueryBuilders:haxe.extern.Rest<QueryBuilder<TInnerRecord, TInnerResult>>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2, TInnerRecord, TInnerResult>(subQueryBuilders:Array<QueryBuilder<TInnerRecord, TInnerResult>>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:haxe.extern.Rest<Any>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:AliasUT):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:haxe.extern.Rest<Any>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:AliasUT):QueryBuilder<TRecord, TResult2> { })
	@:overload(function(columnName:String):QueryBuilder<TRecord, Array<DeferredKeySelection<TRecord, String, Bool, { }, Bool, { }, Any>>> { })
	@:overload(function<ColNameUT, TResult2>(columnNames:haxe.extern.Rest<ColNameUT>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<ColNameUT, TResult2>(columnNames:Array<ColNameUT>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:haxe.extern.Rest<ColumnDescriptor<TRecord, TResult>>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:Array<ColumnDescriptor<TRecord, TResult>>):QueryBuilder<TRecord, TResult2> { })
	dynamic function select():QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String):QueryBuilder<TRecord, TResult> { })
	dynamic function as(columnName:Dynamic):QueryBuilder<TRecord, TResult>;
	@:overload(function<TResult2, TInnerRecord, TInnerResult>(subQueryBuilders:haxe.extern.Rest<QueryBuilder<TInnerRecord, TInnerResult>>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2, TInnerRecord, TInnerResult>(subQueryBuilders:Array<QueryBuilder<TInnerRecord, TInnerResult>>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:haxe.extern.Rest<Any>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:AliasUT):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:haxe.extern.Rest<Any>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:AliasUT):QueryBuilder<TRecord, TResult2> { })
	@:overload(function(columnName:String):QueryBuilder<TRecord, Array<DeferredKeySelection<TRecord, String, Bool, { }, Bool, { }, Any>>> { })
	@:overload(function<ColNameUT, TResult2>(columnNames:haxe.extern.Rest<ColNameUT>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<ColNameUT, TResult2>(columnNames:Array<ColNameUT>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:haxe.extern.Rest<ColumnDescriptor<TRecord, TResult>>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:Array<ColumnDescriptor<TRecord, TResult>>):QueryBuilder<TRecord, TResult2> { })
	dynamic function columns():QueryBuilder<TRecord, TResult>;
	@:overload(function<TResult2, TInnerRecord, TInnerResult>(subQueryBuilders:haxe.extern.Rest<QueryBuilder<TInnerRecord, TInnerResult>>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2, TInnerRecord, TInnerResult>(subQueryBuilders:Array<QueryBuilder<TInnerRecord, TInnerResult>>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:haxe.extern.Rest<Any>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:AliasUT):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:haxe.extern.Rest<Any>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:AliasUT):QueryBuilder<TRecord, TResult2> { })
	@:overload(function(columnName:String):QueryBuilder<TRecord, Array<DeferredKeySelection<TRecord, String, Bool, { }, Bool, { }, Any>>> { })
	@:overload(function<ColNameUT, TResult2>(columnNames:haxe.extern.Rest<ColNameUT>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<ColNameUT, TResult2>(columnNames:Array<ColNameUT>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:haxe.extern.Rest<ColumnDescriptor<TRecord, TResult>>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:Array<ColumnDescriptor<TRecord, TResult>>):QueryBuilder<TRecord, TResult2> { })
	dynamic function column():QueryBuilder<TRecord, TResult>;
	@:overload(function<TRecord2, TResult2>(callback:haxe.Constraints.Function):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TRecord2, TResult2>(raw:Raw<Dynamic>):QueryBuilder<TRecord2, TResult2> { })
	dynamic function from<TRecord2, TResult2>(tableName:ts.AnyOf4<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict>):QueryBuilder<TRecord2, TResult2>;
	@:overload(function<TRecord2, TResult2>(callback:haxe.Constraints.Function):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TRecord2, TResult2>(raw:Raw<Dynamic>):QueryBuilder<TRecord2, TResult2> { })
	dynamic function into<TRecord2, TResult2>(tableName:ts.AnyOf4<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict>):QueryBuilder<TRecord2, TResult2>;
	@:overload(function<TRecord2, TResult2>(callback:haxe.Constraints.Function):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TRecord2, TResult2>(raw:Raw<Dynamic>):QueryBuilder<TRecord2, TResult2> { })
	dynamic function table<TRecord2, TResult2>(tableName:ts.AnyOf4<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict>):QueryBuilder<TRecord2, TResult2>;
	@:overload(function<ColNameUT, TResult2>(columnNames:haxe.extern.Rest<ColNameUT>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<ColNameUT, TResult2>(columnNames:Array<ColNameUT>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:haxe.extern.Rest<ColumnDescriptor<TRecord, TResult>>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:Array<ColumnDescriptor<TRecord, TResult>>):QueryBuilder<TRecord, TResult2> { })
	dynamic function distinct(columnName:String):QueryBuilder<TRecord, Array<DeferredKeySelection<TRecord, String, Bool, { }, Bool, { }, Any>>>;
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, clause:JoinCallback):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, columns:{ }):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, raw:Raw<Dynamic>):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, column1:String, column2:String):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, column1:String, raw:Raw<Dynamic>):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, column1:String, operator_:String, column2:String):QueryBuilder<TRecord2, TResult2> { })
	dynamic function join<TJoinTargetRecord, TRecord2, TResult2>(raw:Raw<Dynamic>):QueryBuilder<TRecord2, TResult2>;
	dynamic function joinRaw(tableName:String, ?binding:ts.AnyOf11<String, Float, Bool, global.Buffer, js.lib.Date, Array<String>, Array<Float>, Array<js.lib.Date>, Array<Bool>, Raw<Dynamic>, ValueDict>):QueryBuilder<TRecord, TResult>;
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, clause:JoinCallback):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, columns:{ }):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, raw:Raw<Dynamic>):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, column1:String, column2:String):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, column1:String, raw:Raw<Dynamic>):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, column1:String, operator_:String, column2:String):QueryBuilder<TRecord2, TResult2> { })
	dynamic function innerJoin<TJoinTargetRecord, TRecord2, TResult2>(raw:Raw<Dynamic>):QueryBuilder<TRecord2, TResult2>;
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, clause:JoinCallback):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, columns:{ }):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, raw:Raw<Dynamic>):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, column1:String, column2:String):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, column1:String, raw:Raw<Dynamic>):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, column1:String, operator_:String, column2:String):QueryBuilder<TRecord2, TResult2> { })
	dynamic function leftJoin<TJoinTargetRecord, TRecord2, TResult2>(raw:Raw<Dynamic>):QueryBuilder<TRecord2, TResult2>;
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, clause:JoinCallback):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, columns:{ }):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, raw:Raw<Dynamic>):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, column1:String, column2:String):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, column1:String, raw:Raw<Dynamic>):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, column1:String, operator_:String, column2:String):QueryBuilder<TRecord2, TResult2> { })
	dynamic function leftOuterJoin<TJoinTargetRecord, TRecord2, TResult2>(raw:Raw<Dynamic>):QueryBuilder<TRecord2, TResult2>;
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, clause:JoinCallback):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, columns:{ }):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, raw:Raw<Dynamic>):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, column1:String, column2:String):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, column1:String, raw:Raw<Dynamic>):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, column1:String, operator_:String, column2:String):QueryBuilder<TRecord2, TResult2> { })
	dynamic function rightJoin<TJoinTargetRecord, TRecord2, TResult2>(raw:Raw<Dynamic>):QueryBuilder<TRecord2, TResult2>;
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, clause:JoinCallback):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, columns:{ }):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, raw:Raw<Dynamic>):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, column1:String, column2:String):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, column1:String, raw:Raw<Dynamic>):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, column1:String, operator_:String, column2:String):QueryBuilder<TRecord2, TResult2> { })
	dynamic function rightOuterJoin<TJoinTargetRecord, TRecord2, TResult2>(raw:Raw<Dynamic>):QueryBuilder<TRecord2, TResult2>;
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, clause:JoinCallback):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, columns:{ }):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, raw:Raw<Dynamic>):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, column1:String, column2:String):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, column1:String, raw:Raw<Dynamic>):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, column1:String, operator_:String, column2:String):QueryBuilder<TRecord2, TResult2> { })
	dynamic function outerJoin<TJoinTargetRecord, TRecord2, TResult2>(raw:Raw<Dynamic>):QueryBuilder<TRecord2, TResult2>;
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, clause:JoinCallback):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, columns:{ }):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, raw:Raw<Dynamic>):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, column1:String, column2:String):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, column1:String, raw:Raw<Dynamic>):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, column1:String, operator_:String, column2:String):QueryBuilder<TRecord2, TResult2> { })
	dynamic function fullOuterJoin<TJoinTargetRecord, TRecord2, TResult2>(raw:Raw<Dynamic>):QueryBuilder<TRecord2, TResult2>;
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, clause:JoinCallback):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, columns:{ }):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, raw:Raw<Dynamic>):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, column1:String, column2:String):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, column1:String, raw:Raw<Dynamic>):QueryBuilder<TRecord2, TResult2> { })
	@:overload(function<TJoinTargetRecord, TRecord2, TResult2>(tableName:ts.AnyOf5<String, Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>, AliasDict, QueryCallback<Dynamic, Array<Any>>>, column1:String, operator_:String, column2:String):QueryBuilder<TRecord2, TResult2> { })
	dynamic function crossJoin<TJoinTargetRecord, TRecord2, TResult2>(raw:Raw<Dynamic>):QueryBuilder<TRecord2, TResult2>;
	@:overload(function(alias:String, sql:String, ?bindings:ts.AnyOf2<Dynamic, Array<Value>>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(alias:String, queryBuilder:QueryBuilder<Dynamic, Array<Dynamic>>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(alias:String, callback:(queryBuilder:QueryBuilder<Dynamic, Array<Dynamic>>) -> Dynamic):QueryBuilder<TRecord, TResult> { })
	dynamic function with(alias:String, raw:ts.AnyOf2<Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>>):QueryBuilder<TRecord, TResult>;
	@:overload(function(alias:String, sql:String, ?bindings:ts.AnyOf2<Dynamic, Array<Value>>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(alias:String, queryBuilder:QueryBuilder<Dynamic, Array<Dynamic>>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(alias:String, callback:(queryBuilder:QueryBuilder<Dynamic, Array<Dynamic>>) -> Dynamic):QueryBuilder<TRecord, TResult> { })
	dynamic function withRecursive(alias:String, raw:ts.AnyOf2<Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>>):QueryBuilder<TRecord, TResult>;
	@:overload(function(alias:String, sql:String, ?bindings:ts.AnyOf2<Dynamic, Array<Value>>):QueryBuilder<TRecord, TResult> { })
	dynamic function withRaw(alias:String, raw:ts.AnyOf2<Raw<Dynamic>, QueryBuilder<Dynamic, Array<Dynamic>>>):QueryBuilder<TRecord, TResult>;
	dynamic function withSchema(schema:String):QueryBuilder<TRecord, TResult>;
	@:overload(function(alias:String, callback:(queryBuilder:QueryBuilder<Dynamic, Array<Dynamic>>) -> Dynamic):QueryBuilder<TRecord, TResult> { })
	dynamic function withWrapped(alias:String, queryBuilder:QueryBuilder<Dynamic, Array<Dynamic>>):QueryBuilder<TRecord, TResult>;
	@:overload(function(callback:QueryCallback<Dynamic, Array<Any>>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(object:SafePartial<TRecord>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(object:Dynamic):QueryBuilder<TRecord, TResult> { })
	@:overload(function<T>(columnName:T, value:Null<Dynamic>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String, value:Null<Value>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<T>(columnName:T, operator_:ComparisionOperator, value:Null<Dynamic>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String, operator_:String, value:Null<Value>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<T, TRecordInner, TResultInner>(columnName:T, operator_:ComparisionOperator, value:QueryBuilder<TRecordInner, TResultInner>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(columnName:String, operator_:String, value:QueryBuilder<TRecordInner, TResultInner>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(left:Raw<Dynamic>, operator_:String, right:Null<Value>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(left:Raw<Dynamic>, operator_:String, right:QueryBuilder<TRecordInner, TResultInner>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(condition:Bool):QueryBuilder<TRecord, TResult> { })
	@:overload(function<TResult2>(sql:String, bindings:haxe.extern.Rest<RawBinding>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<RawBinding>, ValueDict>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:Raw<TResult2>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function(callback:QueryCallback<Dynamic, Array<Any>>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:Dynamic):QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String):QueryBuilder<TRecord, TResult> { })
	dynamic function where(raw:Raw<Dynamic>):QueryBuilder<TRecord, TResult>;
	@:overload(function(callback:QueryCallback<Dynamic, Array<Any>>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(object:SafePartial<TRecord>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(object:Dynamic):QueryBuilder<TRecord, TResult> { })
	@:overload(function<T>(columnName:T, value:Null<Dynamic>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String, value:Null<Value>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<T>(columnName:T, operator_:ComparisionOperator, value:Null<Dynamic>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String, operator_:String, value:Null<Value>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<T, TRecordInner, TResultInner>(columnName:T, operator_:ComparisionOperator, value:QueryBuilder<TRecordInner, TResultInner>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(columnName:String, operator_:String, value:QueryBuilder<TRecordInner, TResultInner>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(left:Raw<Dynamic>, operator_:String, right:Null<Value>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(left:Raw<Dynamic>, operator_:String, right:QueryBuilder<TRecordInner, TResultInner>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(condition:Bool):QueryBuilder<TRecord, TResult> { })
	@:overload(function<TResult2>(sql:String, bindings:haxe.extern.Rest<RawBinding>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<RawBinding>, ValueDict>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:Raw<TResult2>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function(callback:QueryCallback<Dynamic, Array<Any>>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:Dynamic):QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String):QueryBuilder<TRecord, TResult> { })
	dynamic function andWhere(raw:Raw<Dynamic>):QueryBuilder<TRecord, TResult>;
	@:overload(function(callback:QueryCallback<Dynamic, Array<Any>>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(object:SafePartial<TRecord>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(object:Dynamic):QueryBuilder<TRecord, TResult> { })
	@:overload(function<T>(columnName:T, value:Null<Dynamic>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String, value:Null<Value>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<T>(columnName:T, operator_:ComparisionOperator, value:Null<Dynamic>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String, operator_:String, value:Null<Value>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<T, TRecordInner, TResultInner>(columnName:T, operator_:ComparisionOperator, value:QueryBuilder<TRecordInner, TResultInner>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(columnName:String, operator_:String, value:QueryBuilder<TRecordInner, TResultInner>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(left:Raw<Dynamic>, operator_:String, right:Null<Value>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(left:Raw<Dynamic>, operator_:String, right:QueryBuilder<TRecordInner, TResultInner>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(condition:Bool):QueryBuilder<TRecord, TResult> { })
	@:overload(function<TResult2>(sql:String, bindings:haxe.extern.Rest<RawBinding>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<RawBinding>, ValueDict>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:Raw<TResult2>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function(callback:QueryCallback<Dynamic, Array<Any>>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:Dynamic):QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String):QueryBuilder<TRecord, TResult> { })
	dynamic function orWhere(raw:Raw<Dynamic>):QueryBuilder<TRecord, TResult>;
	@:overload(function(callback:QueryCallback<Dynamic, Array<Any>>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(object:SafePartial<TRecord>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(object:Dynamic):QueryBuilder<TRecord, TResult> { })
	@:overload(function<T>(columnName:T, value:Null<Dynamic>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String, value:Null<Value>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<T>(columnName:T, operator_:ComparisionOperator, value:Null<Dynamic>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String, operator_:String, value:Null<Value>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<T, TRecordInner, TResultInner>(columnName:T, operator_:ComparisionOperator, value:QueryBuilder<TRecordInner, TResultInner>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(columnName:String, operator_:String, value:QueryBuilder<TRecordInner, TResultInner>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(left:Raw<Dynamic>, operator_:String, right:Null<Value>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(left:Raw<Dynamic>, operator_:String, right:QueryBuilder<TRecordInner, TResultInner>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(condition:Bool):QueryBuilder<TRecord, TResult> { })
	@:overload(function<TResult2>(sql:String, bindings:haxe.extern.Rest<RawBinding>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<RawBinding>, ValueDict>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:Raw<TResult2>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function(callback:QueryCallback<Dynamic, Array<Any>>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:Dynamic):QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String):QueryBuilder<TRecord, TResult> { })
	dynamic function whereNot(raw:Raw<Dynamic>):QueryBuilder<TRecord, TResult>;
	@:overload(function(callback:QueryCallback<Dynamic, Array<Any>>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(object:SafePartial<TRecord>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(object:Dynamic):QueryBuilder<TRecord, TResult> { })
	@:overload(function<T>(columnName:T, value:Null<Dynamic>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String, value:Null<Value>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<T>(columnName:T, operator_:ComparisionOperator, value:Null<Dynamic>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String, operator_:String, value:Null<Value>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<T, TRecordInner, TResultInner>(columnName:T, operator_:ComparisionOperator, value:QueryBuilder<TRecordInner, TResultInner>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(columnName:String, operator_:String, value:QueryBuilder<TRecordInner, TResultInner>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(left:Raw<Dynamic>, operator_:String, right:Null<Value>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(left:Raw<Dynamic>, operator_:String, right:QueryBuilder<TRecordInner, TResultInner>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(condition:Bool):QueryBuilder<TRecord, TResult> { })
	@:overload(function<TResult2>(sql:String, bindings:haxe.extern.Rest<RawBinding>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<RawBinding>, ValueDict>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:Raw<TResult2>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function(callback:QueryCallback<Dynamic, Array<Any>>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:Dynamic):QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String):QueryBuilder<TRecord, TResult> { })
	dynamic function andWhereNot(raw:Raw<Dynamic>):QueryBuilder<TRecord, TResult>;
	@:overload(function(callback:QueryCallback<Dynamic, Array<Any>>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(object:SafePartial<TRecord>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(object:Dynamic):QueryBuilder<TRecord, TResult> { })
	@:overload(function<T>(columnName:T, value:Null<Dynamic>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String, value:Null<Value>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<T>(columnName:T, operator_:ComparisionOperator, value:Null<Dynamic>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String, operator_:String, value:Null<Value>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<T, TRecordInner, TResultInner>(columnName:T, operator_:ComparisionOperator, value:QueryBuilder<TRecordInner, TResultInner>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(columnName:String, operator_:String, value:QueryBuilder<TRecordInner, TResultInner>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(left:Raw<Dynamic>, operator_:String, right:Null<Value>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(left:Raw<Dynamic>, operator_:String, right:QueryBuilder<TRecordInner, TResultInner>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(condition:Bool):QueryBuilder<TRecord, TResult> { })
	@:overload(function<TResult2>(sql:String, bindings:haxe.extern.Rest<RawBinding>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<RawBinding>, ValueDict>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:Raw<TResult2>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function(callback:QueryCallback<Dynamic, Array<Any>>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:Dynamic):QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnName:String):QueryBuilder<TRecord, TResult> { })
	dynamic function orWhereNot(raw:Raw<Dynamic>):QueryBuilder<TRecord, TResult>;
	@:overload(function<TResult2>(sql:String, bindings:haxe.extern.Rest<RawBinding>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<RawBinding>, ValueDict>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:Raw<TResult2>):QueryBuilder<TRecord, TResult2> { })
	dynamic function whereRaw(condition:Bool):QueryBuilder<TRecord, TResult>;
	@:overload(function<TResult2>(sql:String, bindings:haxe.extern.Rest<RawBinding>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<RawBinding>, ValueDict>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:Raw<TResult2>):QueryBuilder<TRecord, TResult2> { })
	dynamic function orWhereRaw(condition:Bool):QueryBuilder<TRecord, TResult>;
	@:overload(function<TResult2>(sql:String, bindings:haxe.extern.Rest<RawBinding>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<RawBinding>, ValueDict>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:Raw<TResult2>):QueryBuilder<TRecord, TResult2> { })
	dynamic function andWhereRaw(condition:Bool):QueryBuilder<TRecord, TResult>;
	dynamic function whereWrapped(callback:QueryCallback<Dynamic, Array<Any>>):QueryBuilder<TRecord, TResult>;
	dynamic function havingWrapped(callback:QueryCallback<Dynamic, Array<Any>>):QueryBuilder<TRecord, TResult>;
	@:overload(function<TRecordInner, TResultInner>(query:QueryBuilder<TRecordInner, TResultInner>):QueryBuilder<TRecord, TResult> { })
	dynamic function whereExists(callback:QueryCallback<Dynamic, Array<Any>>):QueryBuilder<TRecord, TResult>;
	@:overload(function<TRecordInner, TResultInner>(query:QueryBuilder<TRecordInner, TResultInner>):QueryBuilder<TRecord, TResult> { })
	dynamic function orWhereExists(callback:QueryCallback<Dynamic, Array<Any>>):QueryBuilder<TRecord, TResult>;
	@:overload(function<TRecordInner, TResultInner>(query:QueryBuilder<TRecordInner, TResultInner>):QueryBuilder<TRecord, TResult> { })
	dynamic function whereNotExists(callback:QueryCallback<Dynamic, Array<Any>>):QueryBuilder<TRecord, TResult>;
	@:overload(function<TRecordInner, TResultInner>(query:QueryBuilder<TRecordInner, TResultInner>):QueryBuilder<TRecord, TResult> { })
	dynamic function orWhereNotExists(callback:QueryCallback<Dynamic, Array<Any>>):QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String, values:ts.AnyOf2<QueryCallback<Dynamic, Array<Any>>, Array<Value>>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<K>(columnNames:Array<K>, values:ts.AnyOf2<QueryCallback<Dynamic, Array<Any>>, Array<Array<Dynamic>>>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnNames:Array<String>, values:ts.AnyOf2<QueryCallback<Dynamic, Array<Any>>, Array<Array<Value>>>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<K, TRecordInner, TResultInner>(columnName:K, values:QueryBuilder<TRecordInner, Dynamic>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(columnName:String, values:QueryBuilder<TRecordInner, TResultInner>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<K, TRecordInner, TResultInner>(columnNames:Array<K>, values:QueryBuilder<TRecordInner, Dynamic>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(columnNames:Array<String>, values:QueryBuilder<TRecordInner, TResultInner>):QueryBuilder<TRecord, TResult> { })
	dynamic function whereIn<K>(columnName:K, values:ts.AnyOf2<QueryCallback<Dynamic, Array<Any>>, Array<Dynamic>>):QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String, values:ts.AnyOf2<QueryCallback<Dynamic, Array<Any>>, Array<Value>>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<K>(columnNames:Array<K>, values:ts.AnyOf2<QueryCallback<Dynamic, Array<Any>>, Array<Array<Dynamic>>>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnNames:Array<String>, values:ts.AnyOf2<QueryCallback<Dynamic, Array<Any>>, Array<Array<Value>>>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<K, TRecordInner, TResultInner>(columnName:K, values:QueryBuilder<TRecordInner, Dynamic>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(columnName:String, values:QueryBuilder<TRecordInner, TResultInner>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<K, TRecordInner, TResultInner>(columnNames:Array<K>, values:QueryBuilder<TRecordInner, Dynamic>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(columnNames:Array<String>, values:QueryBuilder<TRecordInner, TResultInner>):QueryBuilder<TRecord, TResult> { })
	dynamic function orWhereIn<K>(columnName:K, values:ts.AnyOf2<QueryCallback<Dynamic, Array<Any>>, Array<Dynamic>>):QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String, values:ts.AnyOf2<QueryCallback<Dynamic, Array<Any>>, Array<Value>>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<K>(columnNames:Array<K>, values:ts.AnyOf2<QueryCallback<Dynamic, Array<Any>>, Array<Array<Dynamic>>>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnNames:Array<String>, values:ts.AnyOf2<QueryCallback<Dynamic, Array<Any>>, Array<Array<Value>>>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<K, TRecordInner, TResultInner>(columnName:K, values:QueryBuilder<TRecordInner, Dynamic>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(columnName:String, values:QueryBuilder<TRecordInner, TResultInner>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<K, TRecordInner, TResultInner>(columnNames:Array<K>, values:QueryBuilder<TRecordInner, Dynamic>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(columnNames:Array<String>, values:QueryBuilder<TRecordInner, TResultInner>):QueryBuilder<TRecord, TResult> { })
	dynamic function whereNotIn<K>(columnName:K, values:ts.AnyOf2<QueryCallback<Dynamic, Array<Any>>, Array<Dynamic>>):QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String, values:ts.AnyOf2<QueryCallback<Dynamic, Array<Any>>, Array<Value>>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<K>(columnNames:Array<K>, values:ts.AnyOf2<QueryCallback<Dynamic, Array<Any>>, Array<Array<Dynamic>>>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnNames:Array<String>, values:ts.AnyOf2<QueryCallback<Dynamic, Array<Any>>, Array<Array<Value>>>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<K, TRecordInner, TResultInner>(columnName:K, values:QueryBuilder<TRecordInner, Dynamic>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(columnName:String, values:QueryBuilder<TRecordInner, TResultInner>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<K, TRecordInner, TResultInner>(columnNames:Array<K>, values:QueryBuilder<TRecordInner, Dynamic>):QueryBuilder<TRecord, TResult> { })
	@:overload(function<TRecordInner, TResultInner>(columnNames:Array<String>, values:QueryBuilder<TRecordInner, TResultInner>):QueryBuilder<TRecord, TResult> { })
	dynamic function orWhereNotIn<K>(columnName:K, values:ts.AnyOf2<QueryCallback<Dynamic, Array<Any>>, Array<Dynamic>>):QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String):QueryBuilder<TRecord, TResult> { })
	dynamic function whereNull(columnName:Dynamic):QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String):QueryBuilder<TRecord, TResult> { })
	dynamic function orWhereNull(columnName:Dynamic):QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String):QueryBuilder<TRecord, TResult> { })
	dynamic function whereNotNull(columnName:Dynamic):QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String):QueryBuilder<TRecord, TResult> { })
	dynamic function orWhereNotNull(columnName:Dynamic):QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String, range:ts.Tuple2<Value, Value>):QueryBuilder<TRecord, TResult> { })
	dynamic function whereBetween<K>(columnName:K, range:ts.Tuple2<Dynamic, Dynamic>):QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String, range:ts.Tuple2<Value, Value>):QueryBuilder<TRecord, TResult> { })
	dynamic function orWhereBetween<K>(columnName:K, range:ts.Tuple2<Dynamic, Dynamic>):QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String, range:ts.Tuple2<Value, Value>):QueryBuilder<TRecord, TResult> { })
	dynamic function andWhereBetween<K>(columnName:K, range:ts.Tuple2<Dynamic, Dynamic>):QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String, range:ts.Tuple2<Value, Value>):QueryBuilder<TRecord, TResult> { })
	dynamic function whereNotBetween<K>(columnName:K, range:ts.Tuple2<Dynamic, Dynamic>):QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String, range:ts.Tuple2<Value, Value>):QueryBuilder<TRecord, TResult> { })
	dynamic function orWhereNotBetween<K>(columnName:K, range:ts.Tuple2<Dynamic, Dynamic>):QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String, range:ts.Tuple2<Value, Value>):QueryBuilder<TRecord, TResult> { })
	dynamic function andWhereNotBetween<K>(columnName:K, range:ts.Tuple2<Dynamic, Dynamic>):QueryBuilder<TRecord, TResult>;
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<RawBinding>, ValueDict>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:Raw<TResult2>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function(columnName:String):QueryBuilder<TRecord, Array<DeferredKeySelection<TRecord, String, Bool, { }, Bool, { }, Any>>> { })
	@:overload(function<ColNameUT, TResult2>(columnNames:haxe.extern.Rest<ColNameUT>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<ColNameUT, TResult2>(columnNames:Array<ColNameUT>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:haxe.extern.Rest<ColumnDescriptor<TRecord, TResult>>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:Array<ColumnDescriptor<TRecord, TResult>>):QueryBuilder<TRecord, TResult2> { })
	dynamic function groupBy<TResult2>(sql:String, bindings:haxe.extern.Rest<RawBinding>):QueryBuilder<TRecord, TResult2>;
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<RawBinding>, ValueDict>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:Raw<TResult2>):QueryBuilder<TRecord, TResult2> { })
	dynamic function groupByRaw<TResult2>(sql:String, bindings:haxe.extern.Rest<RawBinding>):QueryBuilder<TRecord, TResult2>;
	@:overload(function(columnName:String, ?order:String):QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnDefs:Array<ts.AnyOf2<{ var column : Dynamic; @:optional var order : String; }, Dynamic>>):QueryBuilder<TRecord, TResult> { })
	@:overload(function(columnDefs:Array<ts.AnyOf2<String, { var column : String; @:optional var order : String; }>>):QueryBuilder<TRecord, TResult> { })
	dynamic function orderBy(columnName:Dynamic, ?order:String):QueryBuilder<TRecord, TResult>;
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<RawBinding>, ValueDict>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:Raw<TResult2>):QueryBuilder<TRecord, TResult2> { })
	dynamic function orderByRaw<TResult2>(sql:String, bindings:haxe.extern.Rest<RawBinding>):QueryBuilder<TRecord, TResult2>;
	@:overload(function(callbacks:haxe.extern.Rest<ts.AnyOf3<Raw<Dynamic>, QueryCallback<Dynamic, Array<Any>>, QueryBuilder<TRecord, Dynamic>>>):QueryBuilder<TRecord, TResult> { })
	dynamic function intersect(callback:MaybeArray<ts.AnyOf3<Raw<Dynamic>, QueryCallback<Dynamic, Array<Any>>, QueryBuilder<TRecord, Dynamic>>>, ?wrap:Bool):QueryBuilder<TRecord, TResult>;
	@:overload(function(callbacks:haxe.extern.Rest<ts.AnyOf3<Raw<Dynamic>, QueryCallback<Dynamic, Array<Any>>, QueryBuilder<TRecord, Dynamic>>>):QueryBuilder<TRecord, TResult> { })
	dynamic function union(callback:MaybeArray<ts.AnyOf3<Raw<Dynamic>, QueryCallback<Dynamic, Array<Any>>, QueryBuilder<TRecord, Dynamic>>>, ?wrap:Bool):QueryBuilder<TRecord, TResult>;
	@:overload(function(callbacks:haxe.extern.Rest<ts.AnyOf3<Raw<Dynamic>, QueryCallback<Dynamic, Array<Any>>, QueryBuilder<TRecord, Dynamic>>>):QueryBuilder<TRecord, TResult> { })
	dynamic function unionAll(callback:MaybeArray<ts.AnyOf3<Raw<Dynamic>, QueryCallback<Dynamic, Array<Any>>, QueryBuilder<TRecord, Dynamic>>>, ?wrap:Bool):QueryBuilder<TRecord, TResult>;
	@:overload(function(tableName:String, column1:String, operator_:String, column2:String):QueryBuilder<TRecord, TResult> { })
	@:overload(function<TResult2>(sql:String, bindings:haxe.extern.Rest<RawBinding>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<RawBinding>, ValueDict>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:Raw<TResult2>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function(callback:QueryCallback<Dynamic, Array<Any>>):QueryBuilder<TRecord, TResult> { })
	dynamic function having<K1, K2>(tableName:String, column1:K1, operator_:ComparisionOperator, column2:K2):QueryBuilder<TRecord, TResult>;
	@:overload(function(tableName:String, column1:String, operator_:String, column2:String):QueryBuilder<TRecord, TResult> { })
	@:overload(function<TResult2>(sql:String, bindings:haxe.extern.Rest<RawBinding>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<RawBinding>, ValueDict>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:Raw<TResult2>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function(callback:QueryCallback<Dynamic, Array<Any>>):QueryBuilder<TRecord, TResult> { })
	dynamic function andHaving<K1, K2>(tableName:String, column1:K1, operator_:ComparisionOperator, column2:K2):QueryBuilder<TRecord, TResult>;
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<RawBinding>, ValueDict>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:Raw<TResult2>):QueryBuilder<TRecord, TResult2> { })
	dynamic function havingRaw<TResult2>(sql:String, bindings:haxe.extern.Rest<RawBinding>):QueryBuilder<TRecord, TResult2>;
	@:overload(function(tableName:String, column1:String, operator_:String, column2:String):QueryBuilder<TRecord, TResult> { })
	@:overload(function<TResult2>(sql:String, bindings:haxe.extern.Rest<RawBinding>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<RawBinding>, ValueDict>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:Raw<TResult2>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function(callback:QueryCallback<Dynamic, Array<Any>>):QueryBuilder<TRecord, TResult> { })
	dynamic function orHaving<K1, K2>(tableName:String, column1:K1, operator_:ComparisionOperator, column2:K2):QueryBuilder<TRecord, TResult>;
	@:overload(function<TResult2>(sql:String, bindings:ts.AnyOf2<Array<RawBinding>, ValueDict>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(raw:Raw<TResult2>):QueryBuilder<TRecord, TResult2> { })
	dynamic function orHavingRaw<TResult2>(sql:String, bindings:haxe.extern.Rest<RawBinding>):QueryBuilder<TRecord, TResult2>;
	@:overload(function(columnName:String, values:Array<Value>):QueryBuilder<TRecord, TResult> { })
	dynamic function havingIn<K>(columnName:K, values:Array<Dynamic>):QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String, values:Array<Value>):QueryBuilder<TRecord, TResult> { })
	dynamic function orHavingNotBetween<K>(columnName:K, values:Array<Dynamic>):QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String, values:Array<Value>):QueryBuilder<TRecord, TResult> { })
	dynamic function havingNotBetween<K>(columnName:K, values:Array<Dynamic>):QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String, values:Array<Value>):QueryBuilder<TRecord, TResult> { })
	dynamic function orHavingBetween<K>(columnName:K, values:Array<Dynamic>):QueryBuilder<TRecord, TResult>;
	@:overload(function(columnName:String, values:Array<Value>):QueryBuilder<TRecord, TResult> { })
	dynamic function havingBetween<K>(columnName:K, values:Array<Dynamic>):QueryBuilder<TRecord, TResult>;
	function clearSelect():QueryBuilder<TRecord, Dynamic>;
	function clearWhere():QueryBuilder<TRecord, TResult>;
	function clearOrder():QueryBuilder<TRecord, TResult>;
	function clearHaving():QueryBuilder<TRecord, TResult>;
	function clearCounters():QueryBuilder<TRecord, TResult>;
	function offset(offset:Float):QueryBuilder<TRecord, TResult>;
	function limit(limit:Float):QueryBuilder<TRecord, TResult>;
	@:overload(function<TAliases, TResult2>(aliases:TAliases):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:haxe.extern.Rest<ts.AnyOf3<String, Raw<Dynamic>, { }>>):QueryBuilder<TRecord, TResult2> { })
	dynamic function count<TResult2>(columnNames:haxe.extern.Rest<Dynamic>):QueryBuilder<TRecord, TResult2>;
	@:overload(function<TAliases, TResult2>(aliases:TAliases):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:haxe.extern.Rest<ts.AnyOf3<String, Raw<Dynamic>, { }>>):QueryBuilder<TRecord, TResult2> { })
	dynamic function countDistinct<TResult2>(columnNames:haxe.extern.Rest<Dynamic>):QueryBuilder<TRecord, TResult2>;
	@:overload(function<TAliases, TResult2>(aliases:TAliases):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:haxe.extern.Rest<ts.AnyOf3<String, Raw<Dynamic>, { }>>):QueryBuilder<TRecord, TResult2> { })
	dynamic function min<TKey, TResult2>(columnNames:haxe.extern.Rest<TKey>):QueryBuilder<TRecord, TResult2>;
	@:overload(function<TAliases, TResult2>(aliases:TAliases):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:haxe.extern.Rest<ts.AnyOf3<String, Raw<Dynamic>, { }>>):QueryBuilder<TRecord, TResult2> { })
	dynamic function max<TKey, TResult2>(columnNames:haxe.extern.Rest<TKey>):QueryBuilder<TRecord, TResult2>;
	@:overload(function<TAliases, TResult2>(aliases:TAliases):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:haxe.extern.Rest<ts.AnyOf3<String, Raw<Dynamic>, { }>>):QueryBuilder<TRecord, TResult2> { })
	dynamic function sum<TKey, TResult2>(columnNames:haxe.extern.Rest<TKey>):QueryBuilder<TRecord, TResult2>;
	@:overload(function<TAliases, TResult2>(aliases:TAliases):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:haxe.extern.Rest<ts.AnyOf3<String, Raw<Dynamic>, { }>>):QueryBuilder<TRecord, TResult2> { })
	dynamic function sumDistinct<TKey, TResult2>(columnNames:haxe.extern.Rest<TKey>):QueryBuilder<TRecord, TResult2>;
	@:overload(function<TAliases, TResult2>(aliases:TAliases):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:haxe.extern.Rest<ts.AnyOf3<String, Raw<Dynamic>, { }>>):QueryBuilder<TRecord, TResult2> { })
	dynamic function avg<TKey, TResult2>(columnNames:haxe.extern.Rest<TKey>):QueryBuilder<TRecord, TResult2>;
	@:overload(function<TAliases, TResult2>(aliases:TAliases):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:haxe.extern.Rest<ts.AnyOf3<String, Raw<Dynamic>, { }>>):QueryBuilder<TRecord, TResult2> { })
	dynamic function avgDistinct<TKey, TResult2>(columnNames:haxe.extern.Rest<TKey>):QueryBuilder<TRecord, TResult2>;
	@:overload(function(columnName:String, ?amount:Float):QueryBuilder<TRecord, Float> { })
	function increment(columnName:Dynamic, ?amount:Float):QueryBuilder<TRecord, Float>;
	@:overload(function(columnName:String, ?amount:Float):QueryBuilder<TRecord, Float> { })
	function decrement(columnName:Dynamic, ?amount:Float):QueryBuilder<TRecord, Float>;
	@:overload(function<TResult2, TInnerRecord, TInnerResult>(subQueryBuilders:haxe.extern.Rest<QueryBuilder<TInnerRecord, TInnerResult>>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2, TInnerRecord, TInnerResult>(subQueryBuilders:Array<QueryBuilder<TInnerRecord, TInnerResult>>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:haxe.extern.Rest<Any>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:AliasUT):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:haxe.extern.Rest<Any>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<AliasUT, TResult2>(aliases:AliasUT):QueryBuilder<TRecord, TResult2> { })
	@:overload(function(columnName:String):QueryBuilder<TRecord, Array<DeferredKeySelection<TRecord, String, Bool, { }, Bool, { }, Any>>> { })
	@:overload(function<ColNameUT, TResult2>(columnNames:haxe.extern.Rest<ColNameUT>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<ColNameUT, TResult2>(columnNames:Array<ColNameUT>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:haxe.extern.Rest<ColumnDescriptor<TRecord, knex.deferredkeyselection.AddUnionMember<UnwrapArrayMember<TResult>, Null<Any>>>>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnNames:Array<ColumnDescriptor<TRecord, knex.deferredkeyselection.AddUnionMember<UnwrapArrayMember<TResult>, Null<Any>>>>):QueryBuilder<TRecord, TResult2> { })
	dynamic function first():QueryBuilder<TRecord, knex.deferredkeyselection.AddUnionMember<UnwrapArrayMember<TResult>, Null<Any>>>;
	@:overload(function<TResult2>(column:String):QueryBuilder<TRecord, TResult2> { })
	function pluck<K>(column:K):QueryBuilder<TRecord, Array<Dynamic>>;
	@:overload(function<TKey, TResult2>(data:MaybeArray<SafePartial<TRecord>>, returning:TKey):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TKey, TResult2>(data:MaybeArray<SafePartial<TRecord>>, returning:Array<TKey>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TKey, TResult2>(data:MaybeArray<SafePartial<TRecord>>, returning:TKey):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TKey, TResult2>(data:MaybeArray<SafePartial<TRecord>>, returning:Array<TKey>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(data:MaybeArray<SafePartial<TRecord>>):QueryBuilder<TRecord, TResult2> { })
	function insert(data:MaybeArray<SafePartial<TRecord>>, returning:String):QueryBuilder<TRecord, Array<DeferredKeySelection<TRecord, Any, Bool, { }, Bool, { }, Any>>>;
	function modify<TRecord2, TResult2>(callback:QueryCallbackWithArgs<TRecord, Dynamic>, args:haxe.extern.Rest<Dynamic>):QueryBuilder<TRecord2, TResult2>;
	@:overload(function<TKey, TResult2>(data:MaybeArray<SafePartial<TRecord>>, returning:TKey):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TKey, TResult2>(data:MaybeArray<SafePartial<TRecord>>, returning:Array<TKey>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TKey, TResult2>(data:MaybeArray<SafePartial<TRecord>>, returning:ts.AnyOf2<Array<TKey>, TKey>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TKey, TResult2>(data:MaybeArray<SafePartial<TRecord>>, returning:Array<TKey>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(data:MaybeArray<SafePartial<TRecord>>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<K1, K2, TResult2>(columnName:K1, value:Dynamic, returning:K1):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<K1, K2, TResult2>(columnName:K1, value:Dynamic, returning:Array<K1>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<K>(columnName:K, value:Dynamic):QueryBuilder<TRecord, Float> { })
	@:overload(function<TResult2>(columnName:String, value:Value, returning:ts.AnyOf2<String, Array<String>>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(columnName:String, value:Value):QueryBuilder<TRecord, TResult2> { })
	function update(data:MaybeArray<SafePartial<TRecord>>, returning:String):QueryBuilder<TRecord, Array<DeferredKeySelection<TRecord, Any, Bool, { }, Bool, { }, Any>>>;
	@:overload(function<TKey, TResult2>(column:TKey):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TKey, TResult2>(columns:Array<TKey>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(column:ts.AnyOf2<String, Array<String>>):QueryBuilder<TRecord, TResult2> { })
	function returning(column:String):QueryBuilder<TRecord, Array<DeferredKeySelection<TRecord, Any, Bool, { }, Bool, { }, Any>>>;
	@:overload(function<TKey, TResult2>(returning:TKey):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TKey, TResult2>(returning:Array<TKey>):QueryBuilder<TRecord, Array<TResult2>> { })
	@:overload(function<TResult2>(returning:ts.AnyOf2<String, Array<String>>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>():QueryBuilder<TRecord, TResult2> { })
	function del(returning:String):QueryBuilder<TRecord, Array<DeferredKeySelection<TRecord, Any, Bool, { }, Bool, { }, Any>>>;
	@:overload(function<TKey, TResult2>(returning:TKey):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TKey, TResult2>(returning:Array<TKey>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>(returning:ts.AnyOf2<String, Array<String>>):QueryBuilder<TRecord, TResult2> { })
	@:overload(function<TResult2>():QueryBuilder<TRecord, TResult2> { })
	function delete(returning:String):QueryBuilder<TRecord, Array<DeferredKeySelection<TRecord, Any, Bool, { }, Bool, { }, Any>>>;
	function truncate():QueryBuilder<TRecord, Void>;
};