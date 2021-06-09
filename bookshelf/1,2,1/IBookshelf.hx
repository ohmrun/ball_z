typedef IBookshelf = {
	@:selfCall
	function call(knex:knex.types.Index<Dynamic, Array<Any>>):Bookshelf;
	var VERSION : String;
	var knex : knex.types.Index<Dynamic, Array<Any>>;
	var Model : {
		var prototype : bookshelf.Model<Dynamic>;
		function collection<T>(?models:Array<T>, ?options:bookshelf.CollectionOptions<T>):bookshelf.Collection<T>;
		function count(?column:String, ?options:bookshelf.SyncOptions):Bluebird<ts.AnyOf2<String, Float>>;
		function extend<T>(?prototypeProperties:Dynamic, ?classProperties:Dynamic):haxe.Constraints.Function;
		function fetchAll<T>():Bluebird<bookshelf.Collection<T>>;
		function forge<T>(?attributes:Dynamic, ?options:bookshelf.ModelOptions):T;
		@:overload(function<T>(key:String, operatorOrValue:ts.AnyOf3<String, Float, Bool>, ?valueIfOperator:ts.AnyOf5<String, Float, Bool, Array<String>, Array<Float>>):T { })
		function where<T>(properties:{ }):T;
		var NotFoundError : create_error.Error<js.lib.Error>;
		var NoRowsUpdatedError : create_error.Error<js.lib.Error>;
		var NoRowsDeletedError : create_error.Error<js.lib.Error>;
	};
	var Collection : {
		var prototype : bookshelf.Collection<Dynamic>;
		function extend<T>(?prototypeProperties:Dynamic, ?classProperties:Dynamic):haxe.Constraints.Function;
		function forge<T>(?attributes:Dynamic, ?options:bookshelf.ModelOptions):T;
		var EmptyError : create_error.Error<js.lib.Error>;
	};
	function model(name:String, ?model:ts.AnyOf2<Dynamic, { var prototype : bookshelf.Model<Dynamic>; function collection<T>(?models:Array<T>, ?options:bookshelf.CollectionOptions<T>):bookshelf.Collection<T>; function count(?column:String, ?options:bookshelf.SyncOptions):Bluebird<ts.AnyOf2<String, Float>>; function extend<T>(?prototypeProperties:Dynamic, ?classProperties:Dynamic):haxe.Constraints.Function; function fetchAll<T>():Bluebird<bookshelf.Collection<T>>; function forge<T>(?attributes:Dynamic, ?options:bookshelf.ModelOptions):T; @:overload(function<T>(key:String, operatorOrValue:ts.AnyOf3<String, Float, Bool>, ?valueIfOperator:ts.AnyOf5<String, Float, Bool, Array<String>, Array<Float>>):T { }) function where<T>(properties:{ }):T; var NotFoundError : create_error.Error<js.lib.Error>; var NoRowsUpdatedError : create_error.Error<js.lib.Error>; var NoRowsDeletedError : create_error.Error<js.lib.Error>; }>, ?staticProperties:Dynamic):{
		var prototype : bookshelf.Model<Dynamic>;
		function collection<T>(?models:Array<T>, ?options:bookshelf.CollectionOptions<T>):bookshelf.Collection<T>;
		function count(?column:String, ?options:bookshelf.SyncOptions):Bluebird<ts.AnyOf2<String, Float>>;
		function extend<T>(?prototypeProperties:Dynamic, ?classProperties:Dynamic):haxe.Constraints.Function;
		function fetchAll<T>():Bluebird<bookshelf.Collection<T>>;
		function forge<T>(?attributes:Dynamic, ?options:bookshelf.ModelOptions):T;
		@:overload(function<T>(key:String, operatorOrValue:ts.AnyOf3<String, Float, Bool>, ?valueIfOperator:ts.AnyOf5<String, Float, Bool, Array<String>, Array<Float>>):T { })
		function where<T>(properties:{ }):T;
		var NotFoundError : create_error.Error<js.lib.Error>;
		var NoRowsUpdatedError : create_error.Error<js.lib.Error>;
		var NoRowsDeletedError : create_error.Error<js.lib.Error>;
	};
	function plugin(name:ts.AnyOf3<String, haxe.Constraints.Function, Array<String>>, ?options:Dynamic):Bookshelf;
	function transaction<T>(callback:(transaction:knex.types.index.Transaction<Dynamic, Dynamic>) -> js.lib.PromiseLike<T>):Bluebird<T>;
	function on(?event:String, ?callback:bookshelf.EventFunction<Dynamic>, ?context:Dynamic):Void;
	function off(?event:String):Void;
	function trigger(?event:String, args:haxe.extern.Rest<Dynamic>):Void;
	function triggerThen(name:String, args:haxe.extern.Rest<Dynamic>):Bluebird<Dynamic>;
	function once(event:String, callback:bookshelf.EventFunction<Dynamic>, ?context:Dynamic):Void;
};