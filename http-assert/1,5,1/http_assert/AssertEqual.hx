package http_assert;

typedef AssertEqual = ts.AnyOf4<(a:Dynamic, b:Dynamic) -> Void, (a:Dynamic, b:Dynamic, status:Float) -> Void, (a:Dynamic, b:Dynamic, status:Float, msg:String) -> Void, (a:Dynamic, b:Dynamic, status:Float, msg:String, opts:{ }) -> Void>;