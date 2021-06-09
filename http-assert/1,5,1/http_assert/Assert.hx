package http_assert;

typedef Assert = ts.AnyOf4<(a:Any, b:Any) -> Void, (a:Any, b:Any, status:Float) -> Void, (a:Any, b:Any, status:Float, msg:String) -> Void, (a:Any, b:Any, status:Float, msg:String, opts:{ }) -> Void>;