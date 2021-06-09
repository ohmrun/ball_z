package config;

typedef IConfig = {
	function get<T>(setting:String):T;
	function has(setting:String):Bool;
	var util : IUtil;
};