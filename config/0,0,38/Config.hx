@:jsRequire("config") extern class Config {
	static var value(get, never) : config.IConfig;
	static inline function get_value():config.IConfig return cast Config;
}