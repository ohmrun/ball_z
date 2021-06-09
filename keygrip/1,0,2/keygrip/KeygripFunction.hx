package keygrip;

typedef KeygripFunction = ts.AnyOf3<(keys:haxe.ds.ReadOnlyArray<String>) -> Keygrip, (keys:haxe.ds.ReadOnlyArray<String>, algorithm:String) -> Keygrip, (keys:haxe.ds.ReadOnlyArray<String>, algorithm:String, encoding:String) -> Keygrip>;