package knex;

typedef MariaSslConfiguration = {
	@:optional
	var key : String;
	@:optional
	var cert : String;
	@:optional
	var ca : String;
	@:optional
	var capath : String;
	@:optional
	var cipher : String;
	@:optional
	var rejectUnauthorized : Bool;
};