package knex;

typedef EnumOptions = {
	var useNative : Bool;
	@:optional
	var existingType : Bool;
	@:optional
	var schemaName : String;
	var enumName : String;
};