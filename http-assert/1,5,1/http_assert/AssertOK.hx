package http_assert;

typedef AssertOK = ts.AnyOf4<(a:Dynamic) -> Void, (a:Dynamic, status:Float) -> Void, (a:Dynamic, status:Float, msg:String) -> Void, (a:Dynamic, status:Float, msg:String, opts:{ }) -> Void>;