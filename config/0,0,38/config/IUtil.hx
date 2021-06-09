package config;

typedef IUtil = {
	function extendDeep(mergeInto:Dynamic, mergeFrom:Dynamic, ?depth:Float):Dynamic;
	function cloneDeep(copyFrom:Dynamic, ?depth:Float):Dynamic;
	function equalsDeep(object1:Dynamic, object2:Dynamic, ?dept:Float):Bool;
	function diffDeep(object1:Dynamic, object2:Dynamic, ?depth:Float):Dynamic;
	function makeImmutable(object:Dynamic, ?propertyName:String, ?propertyValue:String):Dynamic;
	function makeHidden(object:Dynamic, propertyName:String, ?propertyValue:String):Dynamic;
	function getEnv(varName:String):String;
	function loadFileConfigs(?configDir:String):Dynamic;
	function getConfigSources():Array<IConfigSource>;
	function toObject(?config:Dynamic):Dynamic;
	/**
		This allows module developers to attach their configurations onto
		the 6 years agoInitial 0.4 checkin default configuration object so
		they can be configured by the consumers of the module.
	**/
	function setModuleDefaults(moduleName:String, defaults:Dynamic):Dynamic;
};