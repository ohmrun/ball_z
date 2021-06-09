package config;

typedef IConfigSource = {
	var name : String;
	@:optional
	var original : String;
	var parsed : Dynamic;
};