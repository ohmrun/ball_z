package knex;

typedef SeederConfig = {
	@:optional
	var extension : String;
	@:optional
	var directory : String;
	@:optional
	var loadExtensions : Array<String>;
	@:optional
	var specific : String;
};