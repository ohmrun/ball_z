(function ($hx_exports, $global) { "use strict";
$hx_exports["stx"] = $hx_exports["stx"] || {};
$hx_exports["stx"]["nano"] = $hx_exports["stx"]["nano"] || {};
$hx_exports["stx"]["nano"]["_Contract"] = $hx_exports["stx"]["nano"]["_Contract"] || {};
var $estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {},$_;
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var _$Date_Date_$Impl_$ = function() { };
_$Date_Date_$Impl_$.__name__ = "_Date.Date_Impl_";
_$Date_Date_$Impl_$.now = function() {
	return new Date();
};
var EReg = function(r,opt) {
	this.r = new RegExp(r,opt.split("u").join(""));
};
EReg.__name__ = "EReg";
EReg.prototype = {
	r: null
	,match: function(s) {
		if(this.r.global) {
			this.r.lastIndex = 0;
		}
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,matched: function(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) {
			return this.r.m[n];
		} else {
			throw haxe_Exception.thrown("EReg::matched");
		}
	}
	,matchedPos: function() {
		if(this.r.m == null) {
			throw haxe_Exception.thrown("No string matched");
		}
		return { pos : this.r.m.index, len : this.r.m[0].length};
	}
	,matchSub: function(s,pos,len) {
		if(len == null) {
			len = -1;
		}
		if(this.r.global) {
			this.r.lastIndex = pos;
			this.r.m = this.r.exec(len < 0 ? s : HxOverrides.substr(s,0,pos + len));
			var b = this.r.m != null;
			if(b) {
				this.r.s = s;
			}
			return b;
		} else {
			var b = this.match(len < 0 ? HxOverrides.substr(s,pos,null) : HxOverrides.substr(s,pos,len));
			if(b) {
				this.r.s = s;
				this.r.m.index += pos;
			}
			return b;
		}
	}
	,map: function(s,f) {
		var offset = 0;
		var buf_b = "";
		while(true) {
			if(offset >= s.length) {
				break;
			} else if(!this.matchSub(s,offset)) {
				buf_b += Std.string(HxOverrides.substr(s,offset,null));
				break;
			}
			var p = this.matchedPos();
			buf_b += Std.string(HxOverrides.substr(s,offset,p.pos - offset));
			buf_b += Std.string(f(this));
			if(p.len == 0) {
				buf_b += Std.string(HxOverrides.substr(s,p.pos,1));
				offset = p.pos + 1;
			} else {
				offset = p.pos + p.len;
			}
			if(!this.r.global) {
				break;
			}
		}
		if(!this.r.global && offset > 0 && offset < s.length) {
			buf_b += Std.string(HxOverrides.substr(s,offset,null));
		}
		return buf_b;
	}
	,__class__: EReg
};
var HxOverrides = function() { };
HxOverrides.__name__ = "HxOverrides";
HxOverrides.dateStr = function(date) {
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var mi = date.getMinutes();
	var s = date.getSeconds();
	return date.getFullYear() + "-" + (m < 10 ? "0" + m : "" + m) + "-" + (d < 10 ? "0" + d : "" + d) + " " + (h < 10 ? "0" + h : "" + h) + ":" + (mi < 10 ? "0" + mi : "" + mi) + ":" + (s < 10 ? "0" + s : "" + s);
};
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) {
		return undefined;
	}
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(len == null) {
		len = s.length;
	} else if(len < 0) {
		if(pos == 0) {
			len = s.length + len;
		} else {
			return "";
		}
	}
	return s.substr(pos,len);
};
HxOverrides.remove = function(a,obj) {
	var i = a.indexOf(obj);
	if(i == -1) {
		return false;
	}
	a.splice(i,1);
	return true;
};
HxOverrides.now = function() {
	return Date.now();
};
var Lambda = function() { };
Lambda.__name__ = "Lambda";
Lambda.array = function(it) {
	var a = [];
	var i = $getIterator(it);
	while(i.hasNext()) {
		var i1 = i.next();
		a.push(i1);
	}
	return a;
};
Lambda.list = function(it) {
	var l = new haxe_ds_List();
	var i = $getIterator(it);
	while(i.hasNext()) {
		var i1 = i.next();
		l.add(i1);
	}
	return l;
};
Lambda.map = function(it,f) {
	var l = new haxe_ds_List();
	var x = $getIterator(it);
	while(x.hasNext()) {
		var x1 = x.next();
		l.add(f(x1));
	}
	return l;
};
Lambda.mapi = function(it,f) {
	var l = new haxe_ds_List();
	var i = 0;
	var x = $getIterator(it);
	while(x.hasNext()) {
		var x1 = x.next();
		l.add(f(i++,x1));
	}
	return l;
};
Lambda.flatten = function(it) {
	var l = new haxe_ds_List();
	var e = $getIterator(it);
	while(e.hasNext()) {
		var e1 = e.next();
		var x = $getIterator(e1);
		while(x.hasNext()) {
			var x1 = x.next();
			l.add(x1);
		}
	}
	return l;
};
Lambda.flatMap = function(it,f) {
	return Lambda.flatten(Lambda.map(it,f));
};
Lambda.has = function(it,elt) {
	var x = $getIterator(it);
	while(x.hasNext()) {
		var x1 = x.next();
		if(x1 == elt) {
			return true;
		}
	}
	return false;
};
Lambda.exists = function(it,f) {
	var x = $getIterator(it);
	while(x.hasNext()) {
		var x1 = x.next();
		if(f(x1)) {
			return true;
		}
	}
	return false;
};
Lambda.foreach = function(it,f) {
	var x = $getIterator(it);
	while(x.hasNext()) {
		var x1 = x.next();
		if(!f(x1)) {
			return false;
		}
	}
	return true;
};
Lambda.iter = function(it,f) {
	var x = $getIterator(it);
	while(x.hasNext()) {
		var x1 = x.next();
		f(x1);
	}
};
Lambda.filter = function(it,f) {
	var l = new haxe_ds_List();
	var x = $getIterator(it);
	while(x.hasNext()) {
		var x1 = x.next();
		if(f(x1)) {
			l.add(x1);
		}
	}
	return l;
};
Lambda.fold = function(it,f,first) {
	var x = $getIterator(it);
	while(x.hasNext()) {
		var x1 = x.next();
		first = f(x1,first);
	}
	return first;
};
Lambda.count = function(it,pred) {
	var n = 0;
	if(pred == null) {
		var _ = $getIterator(it);
		while(_.hasNext()) {
			var _1 = _.next();
			++n;
		}
	} else {
		var x = $getIterator(it);
		while(x.hasNext()) {
			var x1 = x.next();
			if(pred(x1)) {
				++n;
			}
		}
	}
	return n;
};
Lambda.empty = function(it) {
	return !$getIterator(it).hasNext();
};
Lambda.indexOf = function(it,v) {
	var i = 0;
	var v2 = $getIterator(it);
	while(v2.hasNext()) {
		var v21 = v2.next();
		if(v == v21) {
			return i;
		}
		++i;
	}
	return -1;
};
Lambda.find = function(it,f) {
	var v = $getIterator(it);
	while(v.hasNext()) {
		var v1 = v.next();
		if(f(v1)) {
			return v1;
		}
	}
	return null;
};
Lambda.concat = function(a,b) {
	var l = new haxe_ds_List();
	var x = $getIterator(a);
	while(x.hasNext()) {
		var x1 = x.next();
		l.add(x1);
	}
	var x = $getIterator(b);
	while(x.hasNext()) {
		var x1 = x.next();
		l.add(x1);
	}
	return l;
};
var Main = function() { };
Main.__name__ = "Main";
Main.main = function() {
	var url = "https://jsonplaceholder.typicode.com/todos";
	var req = stx_http_client_Request.make("GET",url);
	var ext = stx_http_client_RemotingContextExtractor.unit();
	stx_http_Client.client(stx_nano_Wildcard.__).fetch(ext,req).handle(stx_nano_lift_LiftNano.trace(stx_nano_Wildcard.__,{ fileName : "Main.hx", lineNumber : 12, className : "Main", methodName : "main"}));
};
Math.__name__ = "Math";
var Reflect = function() { };
Reflect.__name__ = "Reflect";
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( _g ) {
		haxe_NativeStackTrace.lastError = _g;
		return null;
	}
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) {
			a.push(f);
		}
		}
	}
	return a;
};
Reflect.isFunction = function(f) {
	if(typeof(f) == "function") {
		return !(f.__name__ || f.__ename__);
	} else {
		return false;
	}
};
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) {
		return true;
	}
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) {
		return false;
	}
	if(f1.scope == f2.scope && f1.method == f2.method) {
		return f1.method != null;
	} else {
		return false;
	}
};
var Std = function() { };
Std.__name__ = "Std";
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std.parseInt = function(x) {
	if(x != null) {
		var _g = 0;
		var _g1 = x.length;
		while(_g < _g1) {
			var i = _g++;
			var c = x.charCodeAt(i);
			if(c <= 8 || c >= 14 && c != 32 && c != 45) {
				var nc = x.charCodeAt(i + 1);
				var v = parseInt(x,nc == 120 || nc == 88 ? 16 : 10);
				if(isNaN(v)) {
					return null;
				} else {
					return v;
				}
			}
		}
	}
	return null;
};
var StringBuf = function() {
	this.b = "";
};
StringBuf.__name__ = "StringBuf";
StringBuf.prototype = {
	b: null
	,__class__: StringBuf
};
var StringTools = function() { };
StringTools.__name__ = "StringTools";
StringTools.htmlEscape = function(s,quotes) {
	var buf_b = "";
	var _g_offset = 0;
	var _g_s = s;
	while(_g_offset < _g_s.length) {
		var s = _g_s;
		var index = _g_offset++;
		var c = s.charCodeAt(index);
		if(c >= 55296 && c <= 56319) {
			c = c - 55232 << 10 | s.charCodeAt(index + 1) & 1023;
		}
		var c1 = c;
		if(c1 >= 65536) {
			++_g_offset;
		}
		var code = c1;
		switch(code) {
		case 34:
			if(quotes) {
				buf_b += "&quot;";
			} else {
				buf_b += String.fromCodePoint(code);
			}
			break;
		case 38:
			buf_b += "&amp;";
			break;
		case 39:
			if(quotes) {
				buf_b += "&#039;";
			} else {
				buf_b += String.fromCodePoint(code);
			}
			break;
		case 60:
			buf_b += "&lt;";
			break;
		case 62:
			buf_b += "&gt;";
			break;
		default:
			buf_b += String.fromCodePoint(code);
		}
	}
	return buf_b;
};
StringTools.startsWith = function(s,start) {
	if(s.length >= start.length) {
		return s.lastIndexOf(start,0) == 0;
	} else {
		return false;
	}
};
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	if(slen >= elen) {
		return s.indexOf(end,slen - elen) == slen - elen;
	} else {
		return false;
	}
};
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	if(!(c > 8 && c < 14)) {
		return c == 32;
	} else {
		return true;
	}
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) ++r;
	if(r > 0) {
		return HxOverrides.substr(s,r,l - r);
	} else {
		return s;
	}
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) ++r;
	if(r > 0) {
		return HxOverrides.substr(s,0,l - r);
	} else {
		return s;
	}
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
StringTools.lpad = function(s,c,l) {
	if(c.length <= 0) {
		return s;
	}
	var buf_b = "";
	l -= s.length;
	while(buf_b.length < l) buf_b += c == null ? "null" : "" + c;
	buf_b += s == null ? "null" : "" + s;
	return buf_b;
};
StringTools.rpad = function(s,c,l) {
	if(c.length <= 0) {
		return s;
	}
	var buf_b = "";
	buf_b += s == null ? "null" : "" + s;
	while(buf_b.length < l) buf_b += c == null ? "null" : "" + c;
	return buf_b;
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	while(true) {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
		if(!(n > 0)) {
			break;
		}
	}
	if(digits != null) {
		while(s.length < digits) s = "0" + s;
	}
	return s;
};
var ValueType = $hxEnums["ValueType"] = { __ename__:"ValueType",__constructs__:null
	,TNull: {_hx_name:"TNull",_hx_index:0,__enum__:"ValueType",toString:$estr}
	,TInt: {_hx_name:"TInt",_hx_index:1,__enum__:"ValueType",toString:$estr}
	,TFloat: {_hx_name:"TFloat",_hx_index:2,__enum__:"ValueType",toString:$estr}
	,TBool: {_hx_name:"TBool",_hx_index:3,__enum__:"ValueType",toString:$estr}
	,TObject: {_hx_name:"TObject",_hx_index:4,__enum__:"ValueType",toString:$estr}
	,TFunction: {_hx_name:"TFunction",_hx_index:5,__enum__:"ValueType",toString:$estr}
	,TClass: ($_=function(c) { return {_hx_index:6,c:c,__enum__:"ValueType",toString:$estr}; },$_._hx_name="TClass",$_.__params__ = ["c"],$_)
	,TEnum: ($_=function(e) { return {_hx_index:7,e:e,__enum__:"ValueType",toString:$estr}; },$_._hx_name="TEnum",$_.__params__ = ["e"],$_)
	,TUnknown: {_hx_name:"TUnknown",_hx_index:8,__enum__:"ValueType",toString:$estr}
};
ValueType.__constructs__ = [ValueType.TNull,ValueType.TInt,ValueType.TFloat,ValueType.TBool,ValueType.TObject,ValueType.TFunction,ValueType.TClass,ValueType.TEnum,ValueType.TUnknown];
var Type = function() { };
Type.__name__ = "Type";
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) {
		throw haxe_Exception.thrown("No such constructor " + constr);
	}
	if(Reflect.isFunction(f)) {
		if(params == null) {
			throw haxe_Exception.thrown("Constructor " + constr + " need parameters");
		}
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) {
		throw haxe_Exception.thrown("Constructor " + constr + " does not need parameters");
	}
	return f;
};
Type.createEnumIndex = function(e,index,params) {
	var c;
	var _g = e.__constructs__[index];
	if(_g == null) {
		c = null;
	} else {
		var ctor = _g;
		c = ctor._hx_name;
	}
	if(c == null) {
		throw haxe_Exception.thrown(index + " is not a valid enum constructor index");
	}
	return Type.createEnum(e,c,params);
};
Type.getInstanceFields = function(c) {
	var a = [];
	for(var i in c.prototype) a.push(i);
	HxOverrides.remove(a,"__class__");
	HxOverrides.remove(a,"__properties__");
	return a;
};
Type.typeof = function(v) {
	switch(typeof(v)) {
	case "boolean":
		return ValueType.TBool;
	case "function":
		if(v.__name__ || v.__ename__) {
			return ValueType.TObject;
		}
		return ValueType.TFunction;
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) {
			return ValueType.TInt;
		}
		return ValueType.TFloat;
	case "object":
		if(v == null) {
			return ValueType.TNull;
		}
		var e = v.__enum__;
		if(e != null) {
			return ValueType.TEnum($hxEnums[e]);
		}
		var c = js_Boot.getClass(v);
		if(c != null) {
			return ValueType.TClass(c);
		}
		return ValueType.TObject;
	case "string":
		return ValueType.TClass(String);
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
};
Type.enumParameters = function(e) {
	var enm = $hxEnums[e.__enum__];
	var params = enm.__constructs__[e._hx_index].__params__;
	if(params != null) {
		var _g = [];
		var _g1 = 0;
		while(_g1 < params.length) {
			var p = params[_g1];
			++_g1;
			_g.push(e[p]);
		}
		return _g;
	} else {
		return [];
	}
};
var haxe_StackItem = $hxEnums["haxe.StackItem"] = { __ename__:"haxe.StackItem",__constructs__:null
	,CFunction: {_hx_name:"CFunction",_hx_index:0,__enum__:"haxe.StackItem",toString:$estr}
	,Module: ($_=function(m) { return {_hx_index:1,m:m,__enum__:"haxe.StackItem",toString:$estr}; },$_._hx_name="Module",$_.__params__ = ["m"],$_)
	,FilePos: ($_=function(s,file,line,column) { return {_hx_index:2,s:s,file:file,line:line,column:column,__enum__:"haxe.StackItem",toString:$estr}; },$_._hx_name="FilePos",$_.__params__ = ["s","file","line","column"],$_)
	,Method: ($_=function(classname,method) { return {_hx_index:3,classname:classname,method:method,__enum__:"haxe.StackItem",toString:$estr}; },$_._hx_name="Method",$_.__params__ = ["classname","method"],$_)
	,LocalFunction: ($_=function(v) { return {_hx_index:4,v:v,__enum__:"haxe.StackItem",toString:$estr}; },$_._hx_name="LocalFunction",$_.__params__ = ["v"],$_)
};
haxe_StackItem.__constructs__ = [haxe_StackItem.CFunction,haxe_StackItem.Module,haxe_StackItem.FilePos,haxe_StackItem.Method,haxe_StackItem.LocalFunction];
var haxe_CallStack = {};
haxe_CallStack.callStack = function() {
	return haxe_NativeStackTrace.toHaxe(haxe_NativeStackTrace.callStack());
};
haxe_CallStack.exceptionStack = function(fullStack) {
	if(fullStack == null) {
		fullStack = false;
	}
	var eStack = haxe_NativeStackTrace.toHaxe(haxe_NativeStackTrace.exceptionStack());
	return fullStack ? eStack : haxe_CallStack.subtract(eStack,haxe_CallStack.callStack());
};
haxe_CallStack.toString = function(stack) {
	var b = new StringBuf();
	var _g = 0;
	var _g1 = stack;
	while(_g < _g1.length) {
		var s = _g1[_g];
		++_g;
		b.b += "\nCalled from ";
		haxe_CallStack.itemToString(b,s);
	}
	return b.b;
};
haxe_CallStack.subtract = function(this1,stack) {
	var startIndex = -1;
	var i = -1;
	while(++i < this1.length) {
		var _g = 0;
		var _g1 = stack.length;
		while(_g < _g1) {
			var j = _g++;
			if(haxe_CallStack.equalItems(this1[i],stack[j])) {
				if(startIndex < 0) {
					startIndex = i;
				}
				++i;
				if(i >= this1.length) {
					break;
				}
			} else {
				startIndex = -1;
			}
		}
		if(startIndex >= 0) {
			break;
		}
	}
	if(startIndex >= 0) {
		return this1.slice(0,startIndex);
	} else {
		return this1;
	}
};
haxe_CallStack.equalItems = function(item1,item2) {
	if(item1 == null) {
		if(item2 == null) {
			return true;
		} else {
			return false;
		}
	} else {
		switch(item1._hx_index) {
		case 0:
			if(item2 == null) {
				return false;
			} else if(item2._hx_index == 0) {
				return true;
			} else {
				return false;
			}
			break;
		case 1:
			if(item2 == null) {
				return false;
			} else if(item2._hx_index == 1) {
				var m2 = item2.m;
				var m1 = item1.m;
				return m1 == m2;
			} else {
				return false;
			}
			break;
		case 2:
			if(item2 == null) {
				return false;
			} else if(item2._hx_index == 2) {
				var item21 = item2.s;
				var file2 = item2.file;
				var line2 = item2.line;
				var col2 = item2.column;
				var col1 = item1.column;
				var line1 = item1.line;
				var file1 = item1.file;
				var item11 = item1.s;
				if(file1 == file2 && line1 == line2 && col1 == col2) {
					return haxe_CallStack.equalItems(item11,item21);
				} else {
					return false;
				}
			} else {
				return false;
			}
			break;
		case 3:
			if(item2 == null) {
				return false;
			} else if(item2._hx_index == 3) {
				var class2 = item2.classname;
				var method2 = item2.method;
				var method1 = item1.method;
				var class1 = item1.classname;
				if(class1 == class2) {
					return method1 == method2;
				} else {
					return false;
				}
			} else {
				return false;
			}
			break;
		case 4:
			if(item2 == null) {
				return false;
			} else if(item2._hx_index == 4) {
				var v2 = item2.v;
				var v1 = item1.v;
				return v1 == v2;
			} else {
				return false;
			}
			break;
		}
	}
};
haxe_CallStack.itemToString = function(b,s) {
	switch(s._hx_index) {
	case 0:
		b.b += "a C function";
		break;
	case 1:
		var m = s.m;
		b.b += "module ";
		b.b += m == null ? "null" : "" + m;
		break;
	case 2:
		var s1 = s.s;
		var file = s.file;
		var line = s.line;
		var col = s.column;
		if(s1 != null) {
			haxe_CallStack.itemToString(b,s1);
			b.b += " (";
		}
		b.b += file == null ? "null" : "" + file;
		b.b += " line ";
		b.b += line == null ? "null" : "" + line;
		if(col != null) {
			b.b += " column ";
			b.b += col == null ? "null" : "" + col;
		}
		if(s1 != null) {
			b.b += ")";
		}
		break;
	case 3:
		var cname = s.classname;
		var meth = s.method;
		b.b += Std.string(cname == null ? "<unknown>" : cname);
		b.b += ".";
		b.b += meth == null ? "null" : "" + meth;
		break;
	case 4:
		var n = s.v;
		b.b += "local function #";
		b.b += n == null ? "null" : "" + n;
		break;
	}
};
var haxe_IMap = function() { };
haxe_IMap.__name__ = "haxe.IMap";
haxe_IMap.__isInterface__ = true;
haxe_IMap.prototype = {
	get: null
	,set: null
	,exists: null
	,keys: null
	,keyValueIterator: null
	,__class__: haxe_IMap
};
var haxe_EntryPoint = function() { };
haxe_EntryPoint.__name__ = "haxe.EntryPoint";
haxe_EntryPoint.processEvents = function() {
	while(true) {
		var f = haxe_EntryPoint.pending.shift();
		if(f == null) {
			break;
		}
		f();
	}
	var time = haxe_MainLoop.tick();
	if(!haxe_MainLoop.hasEvents() && haxe_EntryPoint.threadCount == 0) {
		return -1;
	}
	return time;
};
haxe_EntryPoint.run = function() {
	var nextTick = haxe_EntryPoint.processEvents();
	if(nextTick >= 0) {
		setTimeout(haxe_EntryPoint.run,nextTick * 1000);
	}
};
var haxe_Exception = function(message,previous,native) {
	Error.call(this,message);
	this.message = message;
	this.__previousException = previous;
	this.__nativeException = native != null ? native : this;
	this.__skipStack = 0;
	var old = Error.prepareStackTrace;
	Error.prepareStackTrace = function(e) { return e.stack; }
	if(((native) instanceof Error)) {
		this.stack = native.stack;
	} else {
		var e = null;
		if(Error.captureStackTrace) {
			Error.captureStackTrace(this,haxe_Exception);
			e = this;
		} else {
			e = new Error();
			if(typeof(e.stack) == "undefined") {
				try { throw e; } catch(_) {}
				this.__skipStack++;
			}
		}
		this.stack = e.stack;
	}
	Error.prepareStackTrace = old;
};
haxe_Exception.__name__ = "haxe.Exception";
haxe_Exception.caught = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value;
	} else if(((value) instanceof Error)) {
		return new haxe_Exception(value.message,null,value);
	} else {
		return new haxe_ValueException(value,null,value);
	}
};
haxe_Exception.thrown = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value.get_native();
	} else if(((value) instanceof Error)) {
		return value;
	} else {
		var e = new haxe_ValueException(value);
		e.__skipStack++;
		return e;
	}
};
haxe_Exception.__super__ = Error;
haxe_Exception.prototype = $extend(Error.prototype,{
	__skipStack: null
	,__nativeException: null
	,__previousException: null
	,unwrap: function() {
		return this.__nativeException;
	}
	,__shiftStack: function() {
		this.__skipStack++;
	}
	,get_native: function() {
		return this.__nativeException;
	}
	,get_stack: function() {
		var _g = this.__exceptionStack;
		if(_g == null) {
			var value = haxe_NativeStackTrace.toHaxe(haxe_NativeStackTrace.normalize(this.stack),this.__skipStack);
			this.setProperty("__exceptionStack",value);
			return value;
		} else {
			var s = _g;
			return s;
		}
	}
	,setProperty: function(name,value) {
		try {
			Object.defineProperty(this,name,{ value : value});
		} catch( _g ) {
			this[name] = value;
		}
	}
	,__class__: haxe_Exception
});
var haxe_Log = function() { };
haxe_Log.__name__ = "haxe.Log";
haxe_Log.formatOutput = function(v,infos) {
	var str = Std.string(v);
	if(infos == null) {
		return str;
	}
	var pstr = infos.fileName + ":" + infos.lineNumber;
	if(infos.customParams != null) {
		var _g = 0;
		var _g1 = infos.customParams;
		while(_g < _g1.length) {
			var v = _g1[_g];
			++_g;
			str += ", " + Std.string(v);
		}
	}
	return pstr + ": " + str;
};
haxe_Log.trace = function(v,infos) {
	var str = haxe_Log.formatOutput(v,infos);
	if(typeof(console) != "undefined" && console.log != null) {
		console.log(str);
	}
};
var haxe_MainEvent = function(f,p) {
	this.isBlocking = true;
	this.f = f;
	this.priority = p;
	this.nextRun = -Infinity;
};
haxe_MainEvent.__name__ = "haxe.MainEvent";
haxe_MainEvent.prototype = {
	f: null
	,prev: null
	,next: null
	,isBlocking: null
	,nextRun: null
	,priority: null
	,stop: function() {
		if(this.f == null) {
			return;
		}
		this.f = null;
		this.nextRun = -Infinity;
		if(this.prev == null) {
			haxe_MainLoop.pending = this.next;
		} else {
			this.prev.next = this.next;
		}
		if(this.next != null) {
			this.next.prev = this.prev;
		}
	}
	,__class__: haxe_MainEvent
};
var haxe_MainLoop = function() { };
haxe_MainLoop.__name__ = "haxe.MainLoop";
haxe_MainLoop.hasEvents = function() {
	var p = haxe_MainLoop.pending;
	while(p != null) {
		if(p.isBlocking) {
			return true;
		}
		p = p.next;
	}
	return false;
};
haxe_MainLoop.add = function(f,priority) {
	if(priority == null) {
		priority = 0;
	}
	if(f == null) {
		throw haxe_Exception.thrown("Event function is null");
	}
	var e = new haxe_MainEvent(f,priority);
	var head = haxe_MainLoop.pending;
	if(head != null) {
		head.prev = e;
	}
	e.next = head;
	haxe_MainLoop.pending = e;
	haxe_MainLoop.injectIntoEventLoop(0);
	return e;
};
haxe_MainLoop.injectIntoEventLoop = function(waitMs) {
};
haxe_MainLoop.sortEvents = function() {
	var list = haxe_MainLoop.pending;
	if(list == null) {
		return;
	}
	var insize = 1;
	var nmerges;
	var psize = 0;
	var qsize = 0;
	var p;
	var q;
	var e;
	var tail;
	while(true) {
		p = list;
		list = null;
		tail = null;
		nmerges = 0;
		while(p != null) {
			++nmerges;
			q = p;
			psize = 0;
			var _g = 0;
			var _g1 = insize;
			while(_g < _g1) {
				var i = _g++;
				++psize;
				q = q.next;
				if(q == null) {
					break;
				}
			}
			qsize = insize;
			while(psize > 0 || qsize > 0 && q != null) {
				if(psize == 0) {
					e = q;
					q = q.next;
					--qsize;
				} else if(qsize == 0 || q == null || (p.priority > q.priority || p.priority == q.priority && p.nextRun <= q.nextRun)) {
					e = p;
					p = p.next;
					--psize;
				} else {
					e = q;
					q = q.next;
					--qsize;
				}
				if(tail != null) {
					tail.next = e;
				} else {
					list = e;
				}
				e.prev = tail;
				tail = e;
			}
			p = q;
		}
		tail.next = null;
		if(nmerges <= 1) {
			break;
		}
		insize *= 2;
	}
	list.prev = null;
	haxe_MainLoop.pending = list;
};
haxe_MainLoop.tick = function() {
	haxe_MainLoop.sortEvents();
	var e = haxe_MainLoop.pending;
	var hrtime = process.hrtime();
	var now = hrtime[0] + hrtime[1] / 1e9;
	var wait = 1e9;
	while(e != null) {
		var next = e.next;
		var wt = e.nextRun - now;
		if(wt <= 0) {
			wait = 0;
			if(e.f != null) {
				e.f();
			}
		} else if(wait > wt) {
			wait = wt;
		}
		e = next;
	}
	return wait;
};
var haxe_NativeStackTrace = function() { };
haxe_NativeStackTrace.__name__ = "haxe.NativeStackTrace";
haxe_NativeStackTrace.saveStack = function(e) {
	haxe_NativeStackTrace.lastError = e;
};
haxe_NativeStackTrace.callStack = function() {
	var e = new Error("");
	var stack = haxe_NativeStackTrace.tryHaxeStack(e);
	if(typeof(stack) == "undefined") {
		try {
			throw e;
		} catch( _g ) {
		}
		stack = e.stack;
	}
	return haxe_NativeStackTrace.normalize(stack,2);
};
haxe_NativeStackTrace.exceptionStack = function() {
	return haxe_NativeStackTrace.normalize(haxe_NativeStackTrace.tryHaxeStack(haxe_NativeStackTrace.lastError));
};
haxe_NativeStackTrace.toHaxe = function(s,skip) {
	if(skip == null) {
		skip = 0;
	}
	if(s == null) {
		return [];
	} else if(typeof(s) == "string") {
		var stack = s.split("\n");
		if(stack[0] == "Error") {
			stack.shift();
		}
		var m = [];
		var _g = 0;
		var _g1 = stack.length;
		while(_g < _g1) {
			var i = _g++;
			if(skip > i) {
				continue;
			}
			var line = stack[i];
			var matched = line.match(/^    at ([A-Za-z0-9_. ]+) \(([^)]+):([0-9]+):([0-9]+)\)$/);
			if(matched != null) {
				var path = matched[1].split(".");
				if(path[0] == "$hxClasses") {
					path.shift();
				}
				var meth = path.pop();
				var file = matched[2];
				var line1 = Std.parseInt(matched[3]);
				var column = Std.parseInt(matched[4]);
				m.push(haxe_StackItem.FilePos(meth == "Anonymous function" ? haxe_StackItem.LocalFunction() : meth == "Global code" ? null : haxe_StackItem.Method(path.join("."),meth),file,line1,column));
			} else {
				m.push(haxe_StackItem.Module(StringTools.trim(line)));
			}
		}
		return m;
	} else if(skip > 0 && Array.isArray(s)) {
		return s.slice(skip);
	} else {
		return s;
	}
};
haxe_NativeStackTrace.tryHaxeStack = function(e) {
	if(e == null) {
		return [];
	}
	var oldValue = Error.prepareStackTrace;
	Error.prepareStackTrace = haxe_NativeStackTrace.prepareHxStackTrace;
	var stack = e.stack;
	Error.prepareStackTrace = oldValue;
	return stack;
};
haxe_NativeStackTrace.prepareHxStackTrace = function(e,callsites) {
	var stack = [];
	var _g = 0;
	while(_g < callsites.length) {
		var site = callsites[_g];
		++_g;
		if(haxe_NativeStackTrace.wrapCallSite != null) {
			site = haxe_NativeStackTrace.wrapCallSite(site);
		}
		var method = null;
		var fullName = site.getFunctionName();
		if(fullName != null) {
			var idx = fullName.lastIndexOf(".");
			if(idx >= 0) {
				var className = fullName.substring(0,idx);
				var methodName = fullName.substring(idx + 1);
				method = haxe_StackItem.Method(className,methodName);
			} else {
				method = haxe_StackItem.Method(null,fullName);
			}
		}
		var fileName = site.getFileName();
		var fileAddr = fileName == null ? -1 : fileName.indexOf("file:");
		if(haxe_NativeStackTrace.wrapCallSite != null && fileAddr > 0) {
			fileName = fileName.substring(fileAddr + 6);
		}
		stack.push(haxe_StackItem.FilePos(method,fileName,site.getLineNumber(),site.getColumnNumber()));
	}
	return stack;
};
haxe_NativeStackTrace.normalize = function(stack,skipItems) {
	if(skipItems == null) {
		skipItems = 0;
	}
	if(Array.isArray(stack) && skipItems > 0) {
		return stack.slice(skipItems);
	} else if(typeof(stack) == "string") {
		switch(stack.substring(0,6)) {
		case "Error\n":case "Error:":
			++skipItems;
			break;
		default:
		}
		return haxe_NativeStackTrace.skipLines(stack,skipItems);
	} else {
		return stack;
	}
};
haxe_NativeStackTrace.skipLines = function(stack,skip,pos) {
	if(pos == null) {
		pos = 0;
	}
	if(skip > 0) {
		pos = stack.indexOf("\n",pos);
		if(pos < 0) {
			return "";
		} else {
			return haxe_NativeStackTrace.skipLines(stack,--skip,pos + 1);
		}
	} else {
		return stack.substring(pos);
	}
};
var haxe_Resource = function() { };
haxe_Resource.__name__ = "haxe.Resource";
haxe_Resource.listNames = function() {
	var _g = [];
	var _g1 = 0;
	var _g2 = haxe_Resource.content;
	while(_g1 < _g2.length) {
		var x = _g2[_g1];
		++_g1;
		_g.push(x.name);
	}
	return _g;
};
haxe_Resource.getString = function(name) {
	var _g = 0;
	var _g1 = haxe_Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) {
				return x.str;
			}
			var b = haxe_crypto_Base64.decode(x.data);
			return b.toString();
		}
	}
	return null;
};
haxe_Resource.getBytes = function(name) {
	var _g = 0;
	var _g1 = haxe_Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) {
				return haxe_io_Bytes.ofString(x.str);
			}
			return haxe_crypto_Base64.decode(x.data);
		}
	}
	return null;
};
var haxe_Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe_Timer.__name__ = "haxe.Timer";
haxe_Timer.delay = function(f,time_ms) {
	var t = new haxe_Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe_Timer.prototype = {
	id: null
	,stop: function() {
		if(this.id == null) {
			return;
		}
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe_Timer
};
var haxe_ValueException = function(value,previous,native) {
	haxe_Exception.call(this,String(value),previous,native);
	this.value = value;
	this.__skipStack++;
};
haxe_ValueException.__name__ = "haxe.ValueException";
haxe_ValueException.__super__ = haxe_Exception;
haxe_ValueException.prototype = $extend(haxe_Exception.prototype,{
	value: null
	,unwrap: function() {
		return this.value;
	}
	,__class__: haxe_ValueException
});
var haxe_io_Bytes = function(data) {
	this.length = data.byteLength;
	this.b = new Uint8Array(data);
	this.b.bufferValue = data;
	data.hxBytes = this;
	data.bytes = this.b;
};
haxe_io_Bytes.__name__ = "haxe.io.Bytes";
haxe_io_Bytes.ofString = function(s,encoding) {
	if(encoding == haxe_io_Encoding.RawNative) {
		var buf = new Uint8Array(s.length << 1);
		var _g = 0;
		var _g1 = s.length;
		while(_g < _g1) {
			var i = _g++;
			var c = s.charCodeAt(i);
			buf[i << 1] = c & 255;
			buf[i << 1 | 1] = c >> 8;
		}
		return new haxe_io_Bytes(buf.buffer);
	}
	var a = [];
	var i = 0;
	while(i < s.length) {
		var c = s.charCodeAt(i++);
		if(55296 <= c && c <= 56319) {
			c = c - 55232 << 10 | s.charCodeAt(i++) & 1023;
		}
		if(c <= 127) {
			a.push(c);
		} else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe_io_Bytes(new Uint8Array(a).buffer);
};
haxe_io_Bytes.prototype = {
	length: null
	,b: null
	,getString: function(pos,len,encoding) {
		if(pos < 0 || len < 0 || pos + len > this.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		if(encoding == null) {
			encoding = haxe_io_Encoding.UTF8;
		}
		var s = "";
		var b = this.b;
		var i = pos;
		var max = pos + len;
		switch(encoding._hx_index) {
		case 0:
			var debug = pos > 0;
			while(i < max) {
				var c = b[i++];
				if(c < 128) {
					if(c == 0) {
						break;
					}
					s += String.fromCodePoint(c);
				} else if(c < 224) {
					var code = (c & 63) << 6 | b[i++] & 127;
					s += String.fromCodePoint(code);
				} else if(c < 240) {
					var c2 = b[i++];
					var code1 = (c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127;
					s += String.fromCodePoint(code1);
				} else {
					var c21 = b[i++];
					var c3 = b[i++];
					var u = (c & 15) << 18 | (c21 & 127) << 12 | (c3 & 127) << 6 | b[i++] & 127;
					s += String.fromCodePoint(u);
				}
			}
			break;
		case 1:
			while(i < max) {
				var c = b[i++] | b[i++] << 8;
				s += String.fromCodePoint(c);
			}
			break;
		}
		return s;
	}
	,toString: function() {
		return this.getString(0,this.length);
	}
	,__class__: haxe_io_Bytes
};
var haxe_io_Encoding = $hxEnums["haxe.io.Encoding"] = { __ename__:"haxe.io.Encoding",__constructs__:null
	,UTF8: {_hx_name:"UTF8",_hx_index:0,__enum__:"haxe.io.Encoding",toString:$estr}
	,RawNative: {_hx_name:"RawNative",_hx_index:1,__enum__:"haxe.io.Encoding",toString:$estr}
};
haxe_io_Encoding.__constructs__ = [haxe_io_Encoding.UTF8,haxe_io_Encoding.RawNative];
var haxe_crypto_Base64 = function() { };
haxe_crypto_Base64.__name__ = "haxe.crypto.Base64";
haxe_crypto_Base64.decode = function(str,complement) {
	if(complement == null) {
		complement = true;
	}
	if(complement) {
		while(HxOverrides.cca(str,str.length - 1) == 61) str = HxOverrides.substr(str,0,-1);
	}
	return new haxe_crypto_BaseCode(haxe_crypto_Base64.BYTES).decodeBytes(haxe_io_Bytes.ofString(str));
};
var haxe_crypto_BaseCode = function(base) {
	var len = base.length;
	var nbits = 1;
	while(len > 1 << nbits) ++nbits;
	if(nbits > 8 || len != 1 << nbits) {
		throw haxe_Exception.thrown("BaseCode : base length must be a power of two.");
	}
	this.base = base;
	this.nbits = nbits;
};
haxe_crypto_BaseCode.__name__ = "haxe.crypto.BaseCode";
haxe_crypto_BaseCode.prototype = {
	base: null
	,nbits: null
	,tbl: null
	,initTable: function() {
		var tbl = [];
		var _g = 0;
		while(_g < 256) {
			var i = _g++;
			tbl[i] = -1;
		}
		var _g = 0;
		var _g1 = this.base.length;
		while(_g < _g1) {
			var i = _g++;
			tbl[this.base.b[i]] = i;
		}
		this.tbl = tbl;
	}
	,decodeBytes: function(b) {
		var nbits = this.nbits;
		var base = this.base;
		if(this.tbl == null) {
			this.initTable();
		}
		var tbl = this.tbl;
		var size = b.length * nbits >> 3;
		var out = new haxe_io_Bytes(new ArrayBuffer(size));
		var buf = 0;
		var curbits = 0;
		var pin = 0;
		var pout = 0;
		while(pout < size) {
			while(curbits < 8) {
				curbits += nbits;
				buf <<= nbits;
				var i = tbl[b.b[pin++]];
				if(i == -1) {
					throw haxe_Exception.thrown("BaseCode : invalid encoded char");
				}
				buf |= i;
			}
			curbits -= 8;
			out.b[pout++] = buf >> curbits & 255;
		}
		return out;
	}
	,__class__: haxe_crypto_BaseCode
};
var haxe_ds_Either = $hxEnums["haxe.ds.Either"] = { __ename__:"haxe.ds.Either",__constructs__:null
	,Left: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"haxe.ds.Either",toString:$estr}; },$_._hx_name="Left",$_.__params__ = ["v"],$_)
	,Right: ($_=function(v) { return {_hx_index:1,v:v,__enum__:"haxe.ds.Either",toString:$estr}; },$_._hx_name="Right",$_.__params__ = ["v"],$_)
};
haxe_ds_Either.__constructs__ = [haxe_ds_Either.Left,haxe_ds_Either.Right];
var haxe_ds_List = function() {
	this.length = 0;
};
haxe_ds_List.__name__ = "haxe.ds.List";
haxe_ds_List.prototype = {
	h: null
	,q: null
	,length: null
	,add: function(item) {
		var x = new haxe_ds__$List_ListNode(item,null);
		if(this.h == null) {
			this.h = x;
		} else {
			this.q.next = x;
		}
		this.q = x;
		this.length++;
	}
	,iterator: function() {
		return new haxe_ds__$List_ListIterator(this.h);
	}
	,__class__: haxe_ds_List
};
var haxe_ds__$List_ListNode = function(item,next) {
	this.item = item;
	this.next = next;
};
haxe_ds__$List_ListNode.__name__ = "haxe.ds._List.ListNode";
haxe_ds__$List_ListNode.prototype = {
	item: null
	,next: null
	,__class__: haxe_ds__$List_ListNode
};
var haxe_ds__$List_ListIterator = function(head) {
	this.head = head;
};
haxe_ds__$List_ListIterator.__name__ = "haxe.ds._List.ListIterator";
haxe_ds__$List_ListIterator.prototype = {
	head: null
	,hasNext: function() {
		return this.head != null;
	}
	,next: function() {
		var val = this.head.item;
		this.head = this.head.next;
		return val;
	}
	,__class__: haxe_ds__$List_ListIterator
};
var haxe_ds_ObjectMap = function() {
	this.h = { __keys__ : { }};
};
haxe_ds_ObjectMap.__name__ = "haxe.ds.ObjectMap";
haxe_ds_ObjectMap.__interfaces__ = [haxe_IMap];
haxe_ds_ObjectMap.prototype = {
	h: null
	,set: function(key,value) {
		var id = key.__id__;
		if(id == null) {
			id = (key.__id__ = $global.$haxeUID++);
		}
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,get: function(key) {
		return this.h[key.__id__];
	}
	,exists: function(key) {
		return this.h.__keys__[key.__id__] != null;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) {
			a.push(this.h.__keys__[key]);
		}
		}
		return new haxe_iterators_ArrayIterator(a);
	}
	,keyValueIterator: function() {
		return new haxe_iterators_MapKeyValueIterator(this);
	}
	,__class__: haxe_ds_ObjectMap
};
var haxe_ds_Option = $hxEnums["haxe.ds.Option"] = { __ename__:"haxe.ds.Option",__constructs__:null
	,Some: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"haxe.ds.Option",toString:$estr}; },$_._hx_name="Some",$_.__params__ = ["v"],$_)
	,None: {_hx_name:"None",_hx_index:1,__enum__:"haxe.ds.Option",toString:$estr}
};
haxe_ds_Option.__constructs__ = [haxe_ds_Option.Some,haxe_ds_Option.None];
var haxe_ds_StringMap = function() {
	this.h = Object.create(null);
};
haxe_ds_StringMap.__name__ = "haxe.ds.StringMap";
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	h: null
	,exists: function(key) {
		return Object.prototype.hasOwnProperty.call(this.h,key);
	}
	,get: function(key) {
		return this.h[key];
	}
	,set: function(key,value) {
		this.h[key] = value;
	}
	,keys: function() {
		return new haxe_ds__$StringMap_StringMapKeyIterator(this.h);
	}
	,keyValueIterator: function() {
		return new haxe_ds__$StringMap_StringMapKeyValueIterator(this.h);
	}
	,__class__: haxe_ds_StringMap
};
var haxe_ds__$StringMap_StringMapKeyIterator = function(h) {
	this.h = h;
	this.keys = Object.keys(h);
	this.length = this.keys.length;
	this.current = 0;
};
haxe_ds__$StringMap_StringMapKeyIterator.__name__ = "haxe.ds._StringMap.StringMapKeyIterator";
haxe_ds__$StringMap_StringMapKeyIterator.prototype = {
	h: null
	,keys: null
	,length: null
	,current: null
	,hasNext: function() {
		return this.current < this.length;
	}
	,next: function() {
		return this.keys[this.current++];
	}
	,__class__: haxe_ds__$StringMap_StringMapKeyIterator
};
var haxe_ds__$StringMap_StringMapKeyValueIterator = function(h) {
	this.h = h;
	this.keys = Object.keys(h);
	this.length = this.keys.length;
	this.current = 0;
};
haxe_ds__$StringMap_StringMapKeyValueIterator.__name__ = "haxe.ds._StringMap.StringMapKeyValueIterator";
haxe_ds__$StringMap_StringMapKeyValueIterator.prototype = {
	h: null
	,keys: null
	,length: null
	,current: null
	,hasNext: function() {
		return this.current < this.length;
	}
	,next: function() {
		var key = this.keys[this.current++];
		return { key : key, value : this.h[key]};
	}
	,__class__: haxe_ds__$StringMap_StringMapKeyValueIterator
};
var haxe_io_Error = $hxEnums["haxe.io.Error"] = { __ename__:"haxe.io.Error",__constructs__:null
	,Blocked: {_hx_name:"Blocked",_hx_index:0,__enum__:"haxe.io.Error",toString:$estr}
	,Overflow: {_hx_name:"Overflow",_hx_index:1,__enum__:"haxe.io.Error",toString:$estr}
	,OutsideBounds: {_hx_name:"OutsideBounds",_hx_index:2,__enum__:"haxe.io.Error",toString:$estr}
	,Custom: ($_=function(e) { return {_hx_index:3,e:e,__enum__:"haxe.io.Error",toString:$estr}; },$_._hx_name="Custom",$_.__params__ = ["e"],$_)
};
haxe_io_Error.__constructs__ = [haxe_io_Error.Blocked,haxe_io_Error.Overflow,haxe_io_Error.OutsideBounds,haxe_io_Error.Custom];
var haxe_io_Path = function(path) {
	switch(path) {
	case ".":case "..":
		this.dir = path;
		this.file = "";
		return;
	}
	var c1 = path.lastIndexOf("/");
	var c2 = path.lastIndexOf("\\");
	if(c1 < c2) {
		this.dir = HxOverrides.substr(path,0,c2);
		path = HxOverrides.substr(path,c2 + 1,null);
		this.backslash = true;
	} else if(c2 < c1) {
		this.dir = HxOverrides.substr(path,0,c1);
		path = HxOverrides.substr(path,c1 + 1,null);
	} else {
		this.dir = null;
	}
	var cp = path.lastIndexOf(".");
	if(cp != -1) {
		this.ext = HxOverrides.substr(path,cp + 1,null);
		this.file = HxOverrides.substr(path,0,cp);
	} else {
		this.ext = null;
		this.file = path;
	}
};
haxe_io_Path.__name__ = "haxe.io.Path";
haxe_io_Path.addTrailingSlash = function(path) {
	if(path.length == 0) {
		return "/";
	}
	var c1 = path.lastIndexOf("/");
	var c2 = path.lastIndexOf("\\");
	if(c1 < c2) {
		if(c2 != path.length - 1) {
			return path + "\\";
		} else {
			return path;
		}
	} else if(c1 != path.length - 1) {
		return path + "/";
	} else {
		return path;
	}
};
haxe_io_Path.prototype = {
	dir: null
	,file: null
	,ext: null
	,backslash: null
	,toString: function() {
		return (this.dir == null ? "" : this.dir + (this.backslash ? "\\" : "/")) + this.file + (this.ext == null ? "" : "." + this.ext);
	}
	,__class__: haxe_io_Path
};
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.__name__ = "haxe.iterators.ArrayIterator";
haxe_iterators_ArrayIterator.prototype = {
	array: null
	,current: null
	,hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
	,__class__: haxe_iterators_ArrayIterator
};
var haxe_iterators_MapKeyValueIterator = function(map) {
	this.map = map;
	this.keys = map.keys();
};
haxe_iterators_MapKeyValueIterator.__name__ = "haxe.iterators.MapKeyValueIterator";
haxe_iterators_MapKeyValueIterator.prototype = {
	map: null
	,keys: null
	,hasNext: function() {
		return this.keys.hasNext();
	}
	,next: function() {
		var key = this.keys.next();
		return { value : this.map.get(key), key : key};
	}
	,__class__: haxe_iterators_MapKeyValueIterator
};
var haxe_unit_TestCase = function() {
};
haxe_unit_TestCase.__name__ = "haxe.unit.TestCase";
haxe_unit_TestCase.prototype = {
	currentTest: null
	,setup: function() {
	}
	,tearDown: function() {
	}
	,print: function(v) {
		haxe_unit_TestRunner.print(v);
	}
	,assertTrue: function(b,c) {
		this.currentTest.done = true;
		if(b != true) {
			this.currentTest.success = false;
			this.currentTest.error = "expected true but was false";
			this.currentTest.posInfos = c;
			throw haxe_Exception.thrown(this.currentTest);
		}
	}
	,assertFalse: function(b,c) {
		this.currentTest.done = true;
		if(b == true) {
			this.currentTest.success = false;
			this.currentTest.error = "expected false but was true";
			this.currentTest.posInfos = c;
			throw haxe_Exception.thrown(this.currentTest);
		}
	}
	,assertEquals: function(expected,actual,c) {
		this.currentTest.done = true;
		if(actual != expected) {
			this.currentTest.success = false;
			this.currentTest.error = "expected '" + Std.string(expected) + "' but was '" + Std.string(actual) + "'";
			this.currentTest.posInfos = c;
			throw haxe_Exception.thrown(this.currentTest);
		}
	}
	,__class__: haxe_unit_TestCase
};
var haxe_unit_TestResult = function() {
	this.m_tests = new haxe_ds_List();
	this.success = true;
};
haxe_unit_TestResult.__name__ = "haxe.unit.TestResult";
haxe_unit_TestResult.prototype = {
	m_tests: null
	,success: null
	,add: function(t) {
		this.m_tests.add(t);
		if(!t.success) {
			this.success = false;
		}
	}
	,toString: function() {
		var buf_b = "";
		var failures = 0;
		var _g_head = this.m_tests.h;
		while(_g_head != null) {
			var val = _g_head.item;
			_g_head = _g_head.next;
			var test = val;
			if(test.success == false) {
				buf_b += "* ";
				buf_b += Std.string(test.classname);
				buf_b += "::";
				buf_b += Std.string(test.method);
				buf_b += "()";
				buf_b += "\n";
				buf_b += "ERR: ";
				if(test.posInfos != null) {
					buf_b += Std.string(test.posInfos.fileName);
					buf_b += ":";
					buf_b += Std.string(test.posInfos.lineNumber);
					buf_b += "(";
					buf_b += Std.string(test.posInfos.className);
					buf_b += ".";
					buf_b += Std.string(test.posInfos.methodName);
					buf_b += ") - ";
				}
				buf_b += Std.string(test.error);
				buf_b += "\n";
				if(test.backtrace != null) {
					buf_b += Std.string(test.backtrace);
					buf_b += "\n";
				}
				buf_b += "\n";
				++failures;
			}
		}
		buf_b += "\n";
		if(failures == 0) {
			buf_b += "OK ";
		} else {
			buf_b += "FAILED ";
		}
		buf_b += Std.string(this.m_tests.length);
		buf_b += " tests, ";
		buf_b += failures == null ? "null" : "" + failures;
		buf_b += " failed, ";
		buf_b += Std.string(this.m_tests.length - failures);
		buf_b += " success";
		buf_b += "\n";
		return buf_b;
	}
	,__class__: haxe_unit_TestResult
};
var haxe_unit_TestRunner = function() {
	this.result = new haxe_unit_TestResult();
	this.cases = new haxe_ds_List();
};
haxe_unit_TestRunner.__name__ = "haxe.unit.TestRunner";
haxe_unit_TestRunner.print = function(v) {
	var msg = js_Boot.__string_rec(v,"");
	var d;
	var tmp;
	if(typeof(document) != "undefined") {
		d = document.getElementById("haxe:trace");
		tmp = d != null;
	} else {
		tmp = false;
	}
	if(tmp) {
		msg = StringTools.htmlEscape(msg).split("\n").join("<br/>");
		d.innerHTML += msg + "<br/>";
	} else if(typeof process != "undefined" && process.stdout != null && process.stdout.write != null) {
		process.stdout.write(msg);
	} else if(typeof console != "undefined" && console.log != null) {
		console.log(msg);
	}
};
haxe_unit_TestRunner.customTrace = function(v,p) {
	haxe_unit_TestRunner.print(p.fileName + ":" + p.lineNumber + ": " + Std.string(v) + "\n");
};
haxe_unit_TestRunner.prototype = {
	result: null
	,cases: null
	,add: function(c) {
		this.cases.add(c);
	}
	,run: function() {
		this.result = new haxe_unit_TestResult();
		var _g_head = this.cases.h;
		while(_g_head != null) {
			var val = _g_head.item;
			_g_head = _g_head.next;
			var c = val;
			this.runCase(c);
		}
		haxe_unit_TestRunner.print(this.result.toString());
		return this.result.success;
	}
	,runCase: function(t) {
		var old = haxe_Log.trace;
		haxe_Log.trace = haxe_unit_TestRunner.customTrace;
		var cl = js_Boot.getClass(t);
		var fields = Type.getInstanceFields(cl);
		haxe_unit_TestRunner.print("Class: " + cl.__name__ + " ");
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			var fname = f;
			var field = Reflect.field(t,f);
			if(StringTools.startsWith(fname,"test") && Reflect.isFunction(field)) {
				t.currentTest = new haxe_unit_TestStatus();
				t.currentTest.classname = cl.__name__;
				t.currentTest.method = fname;
				t.setup();
				try {
					field.apply(t,[]);
					if(t.currentTest.done) {
						t.currentTest.success = true;
						haxe_unit_TestRunner.print(".");
					} else {
						t.currentTest.success = false;
						t.currentTest.error = "(warning) no assert";
						haxe_unit_TestRunner.print("W");
					}
				} catch( _g1 ) {
					haxe_NativeStackTrace.lastError = _g1;
					var _g2 = haxe_Exception.caught(_g1).unwrap();
					if(((_g2) instanceof haxe_unit_TestStatus)) {
						haxe_unit_TestRunner.print("F");
						var tmp = haxe_CallStack.exceptionStack();
						t.currentTest.backtrace = haxe_CallStack.toString(tmp);
					} else {
						var e = _g2;
						haxe_unit_TestRunner.print("E");
						if(e.message != null) {
							t.currentTest.error = "exception thrown : " + Std.string(e) + " [" + Std.string(e.message) + "]";
						} else {
							t.currentTest.error = "exception thrown : " + Std.string(e);
						}
						var tmp1 = haxe_CallStack.exceptionStack();
						t.currentTest.backtrace = haxe_CallStack.toString(tmp1);
					}
				}
				this.result.add(t.currentTest);
				t.tearDown();
			}
		}
		haxe_unit_TestRunner.print("\n");
		haxe_Log.trace = old;
	}
	,__class__: haxe_unit_TestRunner
};
var haxe_unit_TestStatus = function() {
	this.done = false;
	this.success = false;
};
haxe_unit_TestStatus.__name__ = "haxe.unit.TestStatus";
haxe_unit_TestStatus.prototype = {
	done: null
	,success: null
	,error: null
	,method: null
	,classname: null
	,posInfos: null
	,backtrace: null
	,__class__: haxe_unit_TestStatus
};
var hre_HreError = function(message) {
	this.message = message;
};
hre_HreError.__name__ = "hre.HreError";
hre_HreError.prototype = {
	message: null
	,__class__: hre_HreError
};
var hre_Match = function(input,index,groups) {
	this.input = input;
	this.index = index;
	this.groups = groups;
};
hre_Match.__name__ = "hre.Match";
hre_Match.prototype = {
	input: null
	,index: null
	,groups: null
	,equals: function(other) {
		if(other == null || this.input != other.input || this.index != other.index) {
			return false;
		}
		var _g = 0;
		var _g1 = this.groups.length;
		while(_g < _g1) {
			var i = _g++;
			if(this.groups[i] != other.groups[i]) {
				return false;
			}
		}
		return true;
	}
	,toString: function() {
		return "Match(input=\"" + this.input + "\", index=" + this.index + ", groups=[" + this.groups.join(", ") + "])";
	}
	,__class__: hre_Match
};
var hre_RegExp = function(pattern,flags) {
	this.length = 2;
	this.pattern = hre_RegExpParser.parse(pattern);
	var global1 = false;
	var ignoreCase = false;
	var multiline = false;
	var sticky = false;
	if(flags != null) {
		var _g = 0;
		var _g1 = flags.length;
		while(_g < _g1) {
			var i = _g++;
			var charCode = HxOverrides.cca(flags,i);
			if(charCode == hre_RegExp.LATIN_SMALL_LETTER_G) {
				global1 = true;
			} else if(charCode == hre_RegExp.LATIN_SMALL_LETTER_I) {
				ignoreCase = true;
			} else if(charCode == hre_RegExp.LATIN_SMALL_LETTER_M) {
				multiline = true;
			} else if(charCode == hre_RegExp.LATIN_SMALL_LETTER_U) {
				haxe_Log.trace("Unicode flag is always enabled, no need to provide it",{ fileName : "hre/RegExp.hx", lineNumber : 49, className : "hre.RegExp", methodName : "new"});
			} else if(charCode == hre_RegExp.LATIN_SMALL_LETTER_Y) {
				sticky = true;
			} else {
				throw haxe_Exception.thrown(new hre_RegExpSyntaxError("Invalid flags",0,pattern));
			}
		}
	}
	this.flags = new hre_RegExpFlags(global1,ignoreCase,multiline,sticky);
	this.lastIndex = 0;
};
hre_RegExp.__name__ = "hre.RegExp";
hre_RegExp.prototype = {
	length: null
	,lastIndex: null
	,pattern: null
	,flags: null
	,exec: function(input) {
		var matcher = hre_RegExpMatcher.evaluatePattern(this.pattern,this.flags);
		var currentIndex = this.flags.global || this.flags.sticky ? this.lastIndex : 0;
		var successfulMatch = null;
		_hx_loop1: while(true) {
			if(currentIndex > input.length) {
				this.lastIndex = 0;
				return null;
			}
			var _g = matcher(input,currentIndex);
			switch(_g._hx_index) {
			case 0:
				if(this.flags.sticky) {
					this.lastIndex = 0;
					return null;
				}
				++currentIndex;
				continue;
			case 1:
				var state = _g.matcherState;
				successfulMatch = state;
				break _hx_loop1;
			}
		}
		if(this.flags.global || this.flags.sticky) {
			this.lastIndex = successfulMatch.index;
		}
		var matchedSubstring = input.substring(currentIndex,successfulMatch.index);
		var groups = [matchedSubstring];
		var _g = 0;
		var _g1 = successfulMatch.captures;
		while(_g < _g1.length) {
			var captured = _g1[_g];
			++_g;
			groups.push(captured);
		}
		return new hre_Match(input,currentIndex,groups);
	}
	,test: function(input) {
		return this.exec(input) != null;
	}
	,__class__: hre_RegExp
};
var hre_RegExpFlags = function(global1,ignoreCase,multiline,sticky) {
	this.global = global1;
	this.ignoreCase = ignoreCase;
	this.multiline = multiline;
	this.unicode = true;
	this.sticky = sticky;
};
hre_RegExpFlags.__name__ = "hre.RegExpFlags";
hre_RegExpFlags.prototype = {
	global: null
	,ignoreCase: null
	,multiline: null
	,unicode: null
	,sticky: null
	,__class__: hre_RegExpFlags
};
var hre_MatcherResult = $hxEnums["hre.MatcherResult"] = { __ename__:"hre.MatcherResult",__constructs__:null
	,Failure: {_hx_name:"Failure",_hx_index:0,__enum__:"hre.MatcherResult",toString:$estr}
	,Success: ($_=function(matcherState) { return {_hx_index:1,matcherState:matcherState,__enum__:"hre.MatcherResult",toString:$estr}; },$_._hx_name="Success",$_.__params__ = ["matcherState"],$_)
};
hre_MatcherResult.__constructs__ = [hre_MatcherResult.Failure,hre_MatcherResult.Success];
var hre_MatcherState = function() {
};
hre_MatcherState.__name__ = "hre.MatcherState";
hre_MatcherState.prototype = {
	index: null
	,length: null
	,ignoreCase: null
	,multiline: null
	,unicode: null
	,list: null
	,captures: null
	,copy: function() {
		var result = new hre_MatcherState();
		result.index = this.index;
		result.length = this.length;
		result.ignoreCase = this.ignoreCase;
		result.multiline = this.multiline;
		result.unicode = this.unicode;
		result.list = this.list.slice();
		result.captures = this.captures.slice();
		return result;
	}
	,__class__: hre_MatcherState
};
var hre_RegExpMatcher = function() {
};
hre_RegExpMatcher.__name__ = "hre.RegExpMatcher";
hre_RegExpMatcher.evaluatePattern = function(pattern,flags) {
	return function(source,index) {
		if(index > source.length) {
			throw haxe_Exception.thrown(new hre_HreError("Assertion `index <= source.length` failed"));
		}
		var state = new hre_MatcherState();
		state.length = source.length;
		state.list = [];
		var _g = 0;
		var _g1 = source.length;
		while(_g < _g1) {
			var i = _g++;
			state.list.push(HxOverrides.cca(source,i));
		}
		state.index = index;
		state.multiline = flags.multiline;
		state.ignoreCase = flags.ignoreCase;
		state.unicode = flags.unicode;
		state.captures = [];
		var _g = 0;
		var _g1 = pattern.captures;
		while(_g < _g1) {
			var _ = _g++;
			state.captures.push(null);
		}
		var m = hre_RegExpMatcher.evaluateDisjunction(pattern);
		var continuation = function(state) {
			return hre_MatcherResult.Success(state);
		};
		return m(state,continuation);
	};
};
hre_RegExpMatcher.evaluateDisjunction = function(disjunction) {
	var _this = disjunction.alternatives;
	var f = hre_RegExpMatcher.evaluateAlternative;
	var result = new Array(_this.length);
	var _g = 0;
	var _g1 = _this.length;
	while(_g < _g1) {
		var i = _g++;
		result[i] = f(_this[i]);
	}
	var alternativeMatchers = result;
	return function(state,continuation) {
		if(alternativeMatchers.length == 0) {
			return continuation(state);
		}
		var _g = 0;
		while(_g < alternativeMatchers.length) {
			var matcher = alternativeMatchers[_g];
			++_g;
			var r = matcher(state,continuation);
			if(r._hx_index == 0) {
				continue;
			} else {
				return r;
			}
		}
		return hre_MatcherResult.Failure;
	};
};
hre_RegExpMatcher.evaluateAlternative = function(alternative) {
	return function(state,continuation) {
		var c = continuation;
		var idx = alternative.terms.length;
		while(idx > 0) {
			--idx;
			var m = [hre_RegExpMatcher.evaluateTerm(alternative.terms[idx])];
			var nextContinuation = [c];
			c = (function(nextContinuation,m) {
				return function(s) {
					return m[0](s,nextContinuation[0]);
				};
			})(nextContinuation,m);
		}
		return c(state);
	};
};
hre_RegExpMatcher.evaluateTerm = function(term) {
	switch(term._hx_index) {
	case 0:
		var assertion = term.assertion;
		return function(state,continuation) {
			if(term == null) {
				return hre_MatcherResult.Failure;
			}
			var _g = hre_RegExpMatcher.evaluateAssertion(assertion);
			switch(_g._hx_index) {
			case 0:
				var assertionTester = _g.v;
				if(assertionTester(state)) {
					return continuation(state);
				} else {
					return hre_MatcherResult.Failure;
				}
				break;
			case 1:
				var matcher = _g.v;
				return matcher(state,continuation);
			}
		};
	case 1:
		var atom = term.atom;
		return hre_RegExpMatcher.evaluateAtom(atom);
	case 2:
		var atom = term.atom;
		var quantifier = term.quantifier;
		var captureStart = term.capturesStartIndex;
		var captureEnd = term.capturesEndIndex;
		return hre_RegExpMatcher.evaluateQuantifiedAtom(atom,quantifier,captureStart,captureEnd);
	}
};
hre_RegExpMatcher.evaluateAssertion = function(assertion) {
	switch(assertion._hx_index) {
	case 0:
		return haxe_ds_Either.Left(function(state) {
			var e = state.index;
			if(e == 0) {
				return true;
			}
			if(!state.multiline) {
				return false;
			}
			if(hre_RegExpMatcher.isLineTerminator(state.list[e - 1])) {
				return true;
			}
			return false;
		});
	case 1:
		return haxe_ds_Either.Left(function(state) {
			if(state.index == state.length) {
				return true;
			}
			if(!state.multiline) {
				return false;
			}
			if(hre_RegExpMatcher.isLineTerminator(state.list[state.index])) {
				return true;
			}
			return false;
		});
	case 2:
		return haxe_ds_Either.Left(function(state) {
			var e = state.index;
			var a = e > 0 && hre_RegExpMatcher.isWordChar(state.list[e - 1]);
			var b = e < state.length && hre_RegExpMatcher.isWordChar(state.list[e]);
			return a != b;
		});
	case 3:
		return haxe_ds_Either.Left(function(state) {
			var e = state.index;
			var a = e > 0 && hre_RegExpMatcher.isWordChar(state.list[e - 1]);
			var b = e < state.length && hre_RegExpMatcher.isWordChar(state.list[e]);
			return a == b;
		});
	case 4:
		var disjunction = assertion.disjunction;
		var m = hre_RegExpMatcher.evaluateDisjunction(disjunction);
		return haxe_ds_Either.Right(function(state,continuation) {
			var d = function(state) {
				return hre_MatcherResult.Success(state);
			};
			var _g = m(state,d);
			switch(_g._hx_index) {
			case 0:
				return hre_MatcherResult.Failure;
			case 1:
				var subState = _g.matcherState;
				var nextState = subState.copy();
				nextState.index = state.index;
				return continuation(nextState);
			}
		});
	case 5:
		var disjunction = assertion.disjunction;
		var m1 = hre_RegExpMatcher.evaluateDisjunction(disjunction);
		return haxe_ds_Either.Right(function(state,continuation) {
			var d = function(state) {
				return hre_MatcherResult.Success(state);
			};
			var _g = m1(state,d);
			switch(_g._hx_index) {
			case 0:
				return continuation(state);
			case 1:
				var _g1 = _g.matcherState;
				return hre_MatcherResult.Failure;
			}
		});
	}
};
hre_RegExpMatcher.evaluateAtom = function(atom) {
	switch(atom._hx_index) {
	case 0:
		return hre_RegExpMatcher.characterSetMatcher(hre_RegExpMatcher.lineTerminators,true);
	case 1:
		return function(state,continuation) {
			var e = state.index;
			if(e == state.length) {
				return hre_MatcherResult.Failure;
			}
			var cc = hre_RegExpMatcher.canonicalize(state,state.list[e]);
			if(48 <= cc && cc <= 57) {
				var nextState = state.copy();
				nextState.index++;
				return continuation(nextState);
			} else {
				return hre_MatcherResult.Failure;
			}
		};
	case 2:
		return function(state,continuation) {
			var e = state.index;
			if(e == state.length) {
				return hre_MatcherResult.Failure;
			}
			var cc = hre_RegExpMatcher.canonicalize(state,state.list[e]);
			if(!(48 <= cc && cc <= 57)) {
				var nextState = state.copy();
				nextState.index++;
				return continuation(nextState);
			} else {
				return hre_MatcherResult.Failure;
			}
		};
	case 3:
		return hre_RegExpMatcher.characterSetMatcher(hre_RegExpMatcher.separators,false);
	case 4:
		return hre_RegExpMatcher.characterSetMatcher(hre_RegExpMatcher.separators,true);
	case 5:
		return function(state,continuation) {
			var e = state.index;
			if(e == state.length) {
				return hre_MatcherResult.Failure;
			}
			var cc = hre_RegExpMatcher.canonicalize(state,state.list[e]);
			if(hre_RegExpMatcher.isWordChar(cc)) {
				var nextState = state.copy();
				nextState.index++;
				return continuation(nextState);
			} else {
				return hre_MatcherResult.Failure;
			}
		};
	case 6:
		return function(state,continuation) {
			var e = state.index;
			if(e == state.length) {
				return hre_MatcherResult.Failure;
			}
			var cc = hre_RegExpMatcher.canonicalize(state,state.list[e]);
			if(!hre_RegExpMatcher.isWordChar(cc)) {
				var nextState = state.copy();
				nextState.index++;
				return continuation(nextState);
			} else {
				return hre_MatcherResult.Failure;
			}
		};
	case 7:
		var captureId = atom.captureId;
		return hre_RegExpMatcher.evaluateBackreference(captureId);
	case 8:
		var literal = atom.literal;
		return hre_RegExpMatcher.characterSetMatcher([HxOverrides.cca(literal,0)],false);
	case 9:
		var characterClass = atom.characterClass;
		return hre_RegExpMatcher.evaluateCharacterClass(characterClass);
	case 10:
		var disjunction = atom.disjunction;
		var captureIndex = atom.captureIndex;
		return hre_RegExpMatcher.evaluateCaptureGroup(disjunction,captureIndex);
	case 11:
		var disjunction = atom.disjunction;
		return hre_RegExpMatcher.evaluateDisjunction(disjunction);
	}
};
hre_RegExpMatcher.evaluateQuantifiedAtom = function(atom,quantifier,captureStart,captureEnd) {
	var m = hre_RegExpMatcher.evaluateAtom(atom);
	return function(state,continuation) {
		return hre_RegExpMatcher.repeatMatcher(m,quantifier.min,quantifier.max,quantifier.greedy,state,continuation,captureStart,captureEnd);
	};
};
hre_RegExpMatcher.repeatMatcher = function(m,min,max,greedy,x,c,captureStart,captureEnd) {
	if(max == 0) {
		return c(x);
	}
	var d = function(y) {
		if(min == 0 && x.index == y.index) {
			return hre_MatcherResult.Failure;
		}
		var min2 = min == 0 ? 0 : min - 1;
		var max2 = max == -1 ? -1 : max - 1;
		return hre_RegExpMatcher.repeatMatcher(m,min2,max2,greedy,y,c,captureStart,captureEnd);
	};
	var xr = x.copy();
	var _g = captureStart;
	var _g1 = captureEnd;
	while(_g < _g1) {
		var k = _g++;
		xr.captures[k] = null;
	}
	if(min > 0) {
		return m(xr,d);
	}
	if(!greedy) {
		var z = c(x);
		if(z._hx_index == 0) {
			return m(xr,d);
		} else {
			return z;
		}
	}
	var z = m(xr,d);
	if(z._hx_index == 0) {
		return c(x);
	} else {
		return z;
	}
};
hre_RegExpMatcher.evaluateCaptureGroup = function(disjunction,captureIndex) {
	var m = hre_RegExpMatcher.evaluateDisjunction(disjunction);
	return function(state,continuation) {
		var subContinuation = function(subState) {
			var capturedSubstring = "";
			var _g = state.index;
			var _g1 = subState.index;
			while(_g < _g1) {
				var i = _g++;
				var code = state.list[i];
				capturedSubstring += String.fromCodePoint(code);
			}
			var nextState = subState.copy();
			nextState.captures[captureIndex] = capturedSubstring;
			return continuation(nextState);
		};
		return m(state,subContinuation);
	};
};
hre_RegExpMatcher.evaluateBackreference = function(captureId) {
	var captureIndex = captureId - 1;
	return function(state,continuation) {
		var referenced = state.captures[captureIndex];
		if(referenced == null) {
			return continuation(state);
		}
		var e = state.index;
		var f = e + referenced.length;
		if(f > state.list.length) {
			return hre_MatcherResult.Failure;
		}
		var _g = 0;
		var _g1 = referenced.length;
		while(_g < _g1) {
			var i = _g++;
			if(hre_RegExpMatcher.canonicalize(state,state.list[e + i]) != hre_RegExpMatcher.canonicalize(state,HxOverrides.cca(referenced,i))) {
				return hre_MatcherResult.Failure;
			}
		}
		var y = state.copy();
		y.index = f;
		return continuation(y);
	};
};
hre_RegExpMatcher.evaluateCharacterClass = function(characterClass) {
	return function(state,continuation) {
		var e = state.index;
		if(e == state.length) {
			return hre_MatcherResult.Failure;
		}
		var cc = hre_RegExpMatcher.canonicalize(state,state.list[e]);
		var matched = false;
		var _g = 0;
		var _g1 = characterClass.ranges;
		_hx_loop1: while(_g < _g1.length) {
			var range = _g1[_g];
			++_g;
			switch(range._hx_index) {
			case 0:
				var start = range.start;
				var end = range.end;
				var startCode = HxOverrides.cca(start,0);
				var endCode = HxOverrides.cca(end,0);
				if(state.ignoreCase) {
					var _g2 = startCode;
					var _g3 = endCode + 1;
					while(_g2 < _g3) {
						var i = _g2++;
						if(cc == hre_RegExpMatcher.canonicalize(state,i)) {
							matched = true;
							break;
						}
					}
				} else if(startCode <= cc && cc <= endCode) {
					matched = true;
					break _hx_loop1;
				}
				break;
			case 1:
				var ccAtom = range.value;
				switch(ccAtom._hx_index) {
				case 0:
					var value = ccAtom.value;
					if(hre_RegExpMatcher.canonicalize(state,HxOverrides.cca(value,0)) == cc) {
						matched = true;
						break _hx_loop1;
					}
					break;
				case 1:
					if(48 <= cc && cc <= 57) {
						matched = true;
						break _hx_loop1;
					}
					break;
				case 2:
					if(!(48 <= cc && cc <= 57)) {
						matched = true;
						break _hx_loop1;
					}
					break;
				case 3:
					if(hre_RegExpMatcher.separators.indexOf(cc) >= 0) {
						matched = true;
						break _hx_loop1;
					}
					break;
				case 4:
					if(hre_RegExpMatcher.separators.indexOf(cc) < 0) {
						matched = true;
						break _hx_loop1;
					}
					break;
				case 5:
					if(hre_RegExpMatcher.isWordChar(cc)) {
						matched = true;
						break _hx_loop1;
					}
					break;
				case 6:
					if(!hre_RegExpMatcher.isWordChar(cc)) {
						matched = true;
						break _hx_loop1;
					}
					break;
				}
				break;
			}
		}
		if(characterClass.inverted == matched) {
			return hre_MatcherResult.Failure;
		}
		var nextState = state.copy();
		nextState.index++;
		return continuation(nextState);
	};
};
hre_RegExpMatcher.characterSetMatcher = function(codepoints,invert) {
	return function(state,continuation) {
		var e = state.index;
		if(e == state.length) {
			return hre_MatcherResult.Failure;
		}
		var cc = hre_RegExpMatcher.canonicalize(state,state.list[e]);
		var matched = false;
		var _g = 0;
		while(_g < codepoints.length) {
			var chr = codepoints[_g];
			++_g;
			if(cc == hre_RegExpMatcher.canonicalize(state,chr)) {
				matched = true;
				break;
			}
		}
		if(invert == matched) {
			return hre_MatcherResult.Failure;
		}
		var nextState = state.copy();
		nextState.index++;
		return continuation(nextState);
	};
};
hre_RegExpMatcher.canonicalize = function(state,codepoint) {
	if(!state.ignoreCase) {
		return codepoint;
	}
	return HxOverrides.cca(String.fromCodePoint(codepoint).toLowerCase(),0);
};
hre_RegExpMatcher.isLineTerminator = function(codepoint) {
	return hre_RegExpMatcher.lineTerminators.indexOf(codepoint) >= 0;
};
hre_RegExpMatcher.isWordChar = function(codepoint) {
	if(!(97 <= codepoint && codepoint <= 122 || 65 <= codepoint && codepoint <= 90 || 48 <= codepoint && codepoint <= 57)) {
		return codepoint == 95;
	} else {
		return true;
	}
};
hre_RegExpMatcher.prototype = {
	__class__: hre_RegExpMatcher
};
var hre_RegExpSyntaxError = function(message,index,source) {
	hre_HreError.call(this,"RegExp syntax error for \"" + source + "\" at index " + index + ": " + message);
	this.index = index;
	this.source = source;
};
hre_RegExpSyntaxError.__name__ = "hre.RegExpSyntaxError";
hre_RegExpSyntaxError.__super__ = hre_HreError;
hre_RegExpSyntaxError.prototype = $extend(hre_HreError.prototype,{
	index: null
	,source: null
	,__class__: hre_RegExpSyntaxError
});
var hre_QuantifierPrefix = function(min,max) {
	this.min = min;
	this.max = max;
};
hre_QuantifierPrefix.__name__ = "hre.QuantifierPrefix";
hre_QuantifierPrefix.prototype = {
	min: null
	,max: null
	,__class__: hre_QuantifierPrefix
};
var hre_IntLiteral = function(length,value) {
	this.length = length;
	this.value = value;
};
hre_IntLiteral.__name__ = "hre.IntLiteral";
hre_IntLiteral.prototype = {
	length: null
	,value: null
	,__class__: hre_IntLiteral
};
var hre_Escape = $hxEnums["hre.Escape"] = { __ename__:"hre.Escape",__constructs__:null
	,Literal: ($_=function(codepoint) { return {_hx_index:0,codepoint:codepoint,__enum__:"hre.Escape",toString:$estr}; },$_._hx_name="Literal",$_.__params__ = ["codepoint"],$_)
	,Backreference: ($_=function(captureId) { return {_hx_index:1,captureId:captureId,__enum__:"hre.Escape",toString:$estr}; },$_._hx_name="Backreference",$_.__params__ = ["captureId"],$_)
	,Word: {_hx_name:"Word",_hx_index:2,__enum__:"hre.Escape",toString:$estr}
	,NotWord: {_hx_name:"NotWord",_hx_index:3,__enum__:"hre.Escape",toString:$estr}
	,Decimal: {_hx_name:"Decimal",_hx_index:4,__enum__:"hre.Escape",toString:$estr}
	,NotDecimal: {_hx_name:"NotDecimal",_hx_index:5,__enum__:"hre.Escape",toString:$estr}
	,Separator: {_hx_name:"Separator",_hx_index:6,__enum__:"hre.Escape",toString:$estr}
	,NotSeparator: {_hx_name:"NotSeparator",_hx_index:7,__enum__:"hre.Escape",toString:$estr}
	,WordBoundary: {_hx_name:"WordBoundary",_hx_index:8,__enum__:"hre.Escape",toString:$estr}
	,NotWordBoundary: {_hx_name:"NotWordBoundary",_hx_index:9,__enum__:"hre.Escape",toString:$estr}
};
hre_Escape.__constructs__ = [hre_Escape.Literal,hre_Escape.Backreference,hre_Escape.Word,hre_Escape.NotWord,hre_Escape.Decimal,hre_Escape.NotDecimal,hre_Escape.Separator,hre_Escape.NotSeparator,hre_Escape.WordBoundary,hre_Escape.NotWordBoundary];
var hre_RegExpParser = function(source) {
	this.source = source;
	this.currentIndex = 0;
	this.length = source.length;
	this.capturesCount = 0;
};
hre_RegExpParser.__name__ = "hre.RegExpParser";
hre_RegExpParser.parse = function(pattern) {
	return new hre_RegExpParser(pattern).readPattern();
};
hre_RegExpParser.prototype = {
	source: null
	,currentIndex: null
	,length: null
	,capturesCount: null
	,isEndOfPattern: function() {
		if(this.peek()._hx_index == 0) {
			return true;
		} else {
			return false;
		}
	}
	,readPattern: function() {
		var alternatives = [];
		_hx_loop1: while(!this.isEndOfPattern()) {
			alternatives.push(this.readAlternative());
			var _g = this.peek();
			switch(_g._hx_index) {
			case 0:
				break _hx_loop1;
			case 1:
				var c = _g.character;
				if(c == "|") {
					this.currentIndex++;
				} else {
					throw haxe_Exception.thrown(new hre_RegExpSyntaxError("Unexpected character " + c,this.currentIndex,this.source));
				}
				break;
			}
		}
		return new hre_ast_Pattern(alternatives,this.capturesCount);
	}
	,isEndOfDisjunction: function() {
		var _g = this.peek();
		switch(_g._hx_index) {
		case 0:
			return true;
		case 1:
			var c = _g.character;
			return c == ")";
		}
	}
	,readDisjunction: function() {
		var alternatives = [];
		_hx_loop1: while(!this.isEndOfDisjunction()) {
			alternatives.push(this.readAlternative());
			var _g = this.peek();
			switch(_g._hx_index) {
			case 0:
				break _hx_loop1;
			case 1:
				var c = _g.character;
				switch(c) {
				case ")":
					break _hx_loop1;
				case "|":
					this.currentIndex++;
					break;
				default:
					throw haxe_Exception.thrown(new hre_RegExpSyntaxError("Unexpected character " + c,this.currentIndex,this.source));
				}
				break;
			}
		}
		return new hre_ast_Disjunction(alternatives);
	}
	,isEndOfAlternative: function() {
		var _g = this.peek();
		switch(_g._hx_index) {
		case 0:
			return true;
		case 1:
			var c = _g.character;
			if(c == "|" || c == ")") {
				return true;
			} else {
				return false;
			}
			break;
		}
	}
	,readAlternative: function() {
		var terms = [];
		while(!this.isEndOfAlternative()) terms.push(this.readTerm());
		return new hre_ast_Alternative(terms);
	}
	,readTerm: function() {
		if(this.readQuantifier() != null) {
			throw haxe_Exception.thrown(new hre_RegExpSyntaxError("There is nothing to repeat",this.currentIndex,this.source));
		}
		var oldCapturesCount = this.capturesCount;
		var assertionOrAtom;
		var _g = this.peek();
		switch(_g._hx_index) {
		case 0:
			throw haxe_Exception.thrown(new hre_RegExpSyntaxError("Unexpected end of text",this.currentIndex,this.source));
		case 1:
			var c = _g.character;
			switch(c) {
			case "$":
				this.currentIndex++;
				assertionOrAtom = haxe_ds_Either.Left(hre_ast_Assertion.EndOfText);
				break;
			case "(":
				assertionOrAtom = this.readGroup();
				break;
			case ".":
				this.currentIndex++;
				assertionOrAtom = haxe_ds_Either.Right(hre_ast_Atom.AnyCharacter);
				break;
			case "[":
				assertionOrAtom = haxe_ds_Either.Right(this.readCharacterClass());
				break;
			case "\\":
				assertionOrAtom = this.readEscapeTerm();
				break;
			case "^":
				this.currentIndex++;
				assertionOrAtom = haxe_ds_Either.Left(hre_ast_Assertion.StartOfText);
				break;
			case "|":
				throw haxe_Exception.thrown(new hre_RegExpSyntaxError("Unexpected syntax character |",this.currentIndex,this.source));
			default:
				this.currentIndex++;
				assertionOrAtom = haxe_ds_Either.Right(hre_ast_Atom.Literal(c));
			}
			break;
		}
		switch(assertionOrAtom._hx_index) {
		case 0:
			var assertion = assertionOrAtom.v;
			return hre_ast_Term.Assertion(assertion);
		case 1:
			var atom = assertionOrAtom.v;
			var quantifier = this.readQuantifier();
			if(quantifier == null) {
				return hre_ast_Term.Atom(atom);
			} else {
				return hre_ast_Term.QuantifiedAtom(atom,quantifier,oldCapturesCount,this.capturesCount);
			}
			break;
		}
	}
	,readEscape: function(inCharacterClass) {
		if(this.peekChar() != "\\") {
			throw haxe_Exception.thrown(new hre_RegExpSyntaxError("Invalid escape term, expected \\",this.currentIndex,this.source));
		}
		this.currentIndex++;
		var _g = this.peek();
		switch(_g._hx_index) {
		case 0:
			throw haxe_Exception.thrown(new hre_RegExpSyntaxError("Escape at the end of the pattern",this.currentIndex,this.source));
		case 1:
			var c = _g.character;
			var charCode = HxOverrides.cca(c,0);
			if(48 <= charCode && charCode <= 57) {
				if(charCode == 48) {
					this.currentIndex++;
					return hre_Escape.Literal(0);
				} else {
					if(inCharacterClass) {
						throw haxe_Exception.thrown(new hre_RegExpSyntaxError("Invalid decimal escape in character class",this.currentIndex,this.source));
					}
					var decimal = this.readDecimalDigits();
					var decimalLen = decimal.length;
					var decimalVal = decimal.value;
					return hre_Escape.Backreference(decimalVal);
				}
			} else {
				switch(c) {
				case "B":
					if(inCharacterClass) {
						throw haxe_Exception.thrown(new hre_RegExpSyntaxError("Invalid `\\B` escape in character class",this.currentIndex,this.source));
					}
					this.currentIndex++;
					return hre_Escape.NotWordBoundary;
				case "D":
					this.currentIndex++;
					return hre_Escape.NotDecimal;
				case "S":
					this.currentIndex++;
					return hre_Escape.NotSeparator;
				case "W":
					this.currentIndex++;
					return hre_Escape.NotWord;
				case "b":
					this.currentIndex++;
					if(inCharacterClass) {
						return hre_Escape.Literal(8);
					} else {
						return hre_Escape.WordBoundary;
					}
					break;
				case "c":
					this.currentIndex++;
					var controlLetter = this.peekChar();
					var controlLetterCode = HxOverrides.cca(controlLetter,0);
					if(!(65 <= controlLetterCode && controlLetterCode <= 90) && !(97 <= controlLetterCode && controlLetterCode <= 122)) {
						throw haxe_Exception.thrown(new hre_RegExpSyntaxError("Control letter must be in A-Za-z",this.currentIndex,this.source));
					}
					this.currentIndex++;
					return hre_Escape.Literal(controlLetterCode % 32);
				case "d":
					this.currentIndex++;
					return hre_Escape.Decimal;
				case "f":
					this.currentIndex++;
					return hre_Escape.Literal(12);
				case "n":
					this.currentIndex++;
					return hre_Escape.Literal(10);
				case "r":
					this.currentIndex++;
					return hre_Escape.Literal(13);
				case "s":
					this.currentIndex++;
					return hre_Escape.Separator;
				case "t":
					this.currentIndex++;
					return hre_Escape.Literal(9);
				case "u":
					this.currentIndex++;
					var codePoint;
					if(this.peekChar() == "{") {
						this.currentIndex++;
						var hexLiteral = this.readHexadecimal(4,-1);
						if(this.peekChar() != "}") {
							throw haxe_Exception.thrown(new hre_RegExpSyntaxError("Expected `}`",this.currentIndex,this.source));
						}
						this.currentIndex++;
						codePoint = hexLiteral.value;
					} else {
						codePoint = this.readHexadecimal(4,4).value;
					}
					if(codePoint > 1114111) {
						throw haxe_Exception.thrown(new hre_RegExpSyntaxError("Codepoint exceeds max value (0x10ffff)`",this.currentIndex,this.source));
					}
					return hre_Escape.Literal(codePoint);
				case "v":
					this.currentIndex++;
					return hre_Escape.Literal(11);
				case "w":
					this.currentIndex++;
					return hre_Escape.Word;
				case "x":
					this.currentIndex++;
					var hexLiteral = this.readHexadecimal(2,2);
					return hre_Escape.Literal(hexLiteral.value);
				default:
					this.currentIndex++;
					return hre_Escape.Literal(HxOverrides.cca(c,0));
				}
			}
			break;
		}
	}
	,readEscapeTerm: function() {
		var _g = this.readEscape(false);
		switch(_g._hx_index) {
		case 0:
			var codePoint = _g.codepoint;
			return haxe_ds_Either.Right(hre_ast_Atom.Literal(String.fromCodePoint(codePoint)));
		case 1:
			var captureId = _g.captureId;
			return haxe_ds_Either.Right(hre_ast_Atom.Backreference(captureId));
		case 2:
			return haxe_ds_Either.Right(hre_ast_Atom.Word);
		case 3:
			return haxe_ds_Either.Right(hre_ast_Atom.NotWord);
		case 4:
			return haxe_ds_Either.Right(hre_ast_Atom.Decimal);
		case 5:
			return haxe_ds_Either.Right(hre_ast_Atom.NotDecimal);
		case 6:
			return haxe_ds_Either.Right(hre_ast_Atom.Separator);
		case 7:
			return haxe_ds_Either.Right(hre_ast_Atom.NotSeparator);
		case 8:
			return haxe_ds_Either.Left(hre_ast_Assertion.WordBoundary);
		case 9:
			return haxe_ds_Either.Left(hre_ast_Assertion.NotWordBoundary);
		}
	}
	,readGroup: function() {
		if(this.peekChar() != "(") {
			throw haxe_Exception.thrown(new hre_RegExpSyntaxError("Invalid group, expected (",this.currentIndex,this.source));
		}
		this.currentIndex++;
		var kind = hre_GroupKind.Capture;
		var oldCaptureCount = this.capturesCount;
		var _g = this.peek();
		switch(_g._hx_index) {
		case 0:
			throw haxe_Exception.thrown(new hre_RegExpSyntaxError("Unterminated group",this.currentIndex,this.source));
		case 1:
			var c = _g.character;
			if(c == "?") {
				this.currentIndex++;
				var _g = this.peek();
				switch(_g._hx_index) {
				case 0:
					throw haxe_Exception.thrown(new hre_RegExpSyntaxError("Invalid group, expected modifier",this.currentIndex,this.source));
				case 1:
					var c = _g.character;
					switch(c) {
					case "!":
						kind = hre_GroupKind.NotFollowedBy;
						break;
					case ":":
						kind = hre_GroupKind.Simple;
						break;
					case "=":
						kind = hre_GroupKind.FollowedBy;
						break;
					default:
						throw haxe_Exception.thrown(new hre_RegExpSyntaxError("Invalid group, unknown modifier: " + c,this.currentIndex,this.source));
					}
					break;
				}
				this.currentIndex++;
			}
			break;
		}
		if(kind._hx_index == 0) {
			this.capturesCount++;
		}
		var disjunction = this.readDisjunction();
		var _g = this.peek();
		switch(_g._hx_index) {
		case 0:
			throw haxe_Exception.thrown(new hre_RegExpSyntaxError("Invalid group, unterminated group",this.currentIndex,this.source));
		case 1:
			var c = _g.character;
			if(c == ")") {
				this.currentIndex++;
			}
			break;
		}
		switch(kind._hx_index) {
		case 0:
			return haxe_ds_Either.Right(hre_ast_Atom.CaptureGroup(disjunction,oldCaptureCount));
		case 1:
			return haxe_ds_Either.Right(hre_ast_Atom.SimpleGroup(disjunction));
		case 2:
			return haxe_ds_Either.Left(hre_ast_Assertion.FollowedBy(disjunction));
		case 3:
			return haxe_ds_Either.Left(hre_ast_Assertion.NotFollowedBy(disjunction));
		}
	}
	,isEndOfCharacterClass: function() {
		var _g = this.peek();
		switch(_g._hx_index) {
		case 0:
			return false;
		case 1:
			var c = _g.character;
			return c == "]";
		}
	}
	,readCharacterClass: function() {
		if(this.peekChar() != "[") {
			throw haxe_Exception.thrown(new hre_RegExpSyntaxError("Invalid character class, expected [",this.currentIndex,this.source));
		}
		this.currentIndex++;
		var inverted;
		var _g = this.peek();
		switch(_g._hx_index) {
		case 0:
			throw haxe_Exception.thrown(new hre_RegExpSyntaxError("Unterminated character class",this.currentIndex,this.source));
		case 1:
			var c = _g.character;
			if(c == "^") {
				this.currentIndex++;
				inverted = true;
			} else {
				inverted = false;
			}
			break;
		}
		var ranges = [];
		while(!this.isEndOfCharacterClass()) ranges.push(this.readCharacterClassRange(ranges.length == 0));
		var _g = this.peek();
		switch(_g._hx_index) {
		case 0:
			throw haxe_Exception.thrown(new hre_RegExpSyntaxError("Unterminated character class",this.currentIndex,this.source));
		case 1:
			var c = _g.character;
			if(c == "]") {
				this.currentIndex++;
			}
			break;
		}
		return hre_ast_Atom.Class(new hre_ast_CharacterClass(inverted,ranges));
	}
	,readCharacterClassRange: function(firstRange) {
		var start = this.readCharacterClassAtom(!firstRange);
		if(start == null) {
			throw haxe_Exception.thrown(new hre_RegExpSyntaxError("Expected character class atom",this.currentIndex,this.source));
		}
		var c = this.peekChar();
		if(c != "-") {
			return hre_ast_CharacterClassRange.Simple(start);
		}
		if(this.peekChar(1) == "]") {
			return hre_ast_CharacterClassRange.Simple(start);
		}
		this.currentIndex++;
		var end = this.readCharacterClassAtom(false);
		if(end == null) {
			throw haxe_Exception.thrown(new hre_RegExpSyntaxError("Invalid range in character class",this.currentIndex,this.source));
		}
		var startCharacter;
		if(start._hx_index == 0) {
			var c = start.value;
			startCharacter = c;
		} else {
			throw haxe_Exception.thrown(new hre_RegExpSyntaxError("Start of range is not a literal",this.currentIndex,this.source));
		}
		var endCharacter;
		if(end._hx_index == 0) {
			var c = end.value;
			endCharacter = c;
		} else {
			throw haxe_Exception.thrown(new hre_RegExpSyntaxError("End of range is not a literal",this.currentIndex,this.source));
		}
		if(HxOverrides.cca(startCharacter,0) > HxOverrides.cca(endCharacter,0)) {
			throw haxe_Exception.thrown(new hre_RegExpSyntaxError("Invalid range",this.currentIndex,this.source));
		}
		return hre_ast_CharacterClassRange.Range(startCharacter,endCharacter);
	}
	,readCharacterClassAtom: function(noDash) {
		var _g = this.peek();
		switch(_g._hx_index) {
		case 0:
			return null;
		case 1:
			var c = _g.character;
			switch(c) {
			case "-":
				if(noDash) {
					return null;
				}
				this.currentIndex++;
				return hre_ast_CharacterClassAtom.Literal("-");
			case "\\":
				return this.readEscapedCharacterClassAtom();
			case "]":
				return null;
			default:
				this.currentIndex++;
				return hre_ast_CharacterClassAtom.Literal(c);
			}
			break;
		}
	}
	,readEscapedCharacterClassAtom: function() {
		var $escape = this.readEscape(true);
		switch($escape._hx_index) {
		case 0:
			var codePoint = $escape.codepoint;
			return hre_ast_CharacterClassAtom.Literal(String.fromCodePoint(codePoint));
		case 2:
			return hre_ast_CharacterClassAtom.Word;
		case 3:
			return hre_ast_CharacterClassAtom.NotWord;
		case 4:
			return hre_ast_CharacterClassAtom.Decimal;
		case 5:
			return hre_ast_CharacterClassAtom.NotDecimal;
		case 6:
			return hre_ast_CharacterClassAtom.Separator;
		case 7:
			return hre_ast_CharacterClassAtom.NotSeparator;
		default:
			throw haxe_Exception.thrown(new hre_RegExpSyntaxError("Unexpected escape in character class: " + $hxEnums[$escape.__enum__].__constructs__[$escape._hx_index]._hx_name,this.currentIndex,this.source));
		}
	}
	,isGreedyQuantifier: function() {
		var _g = this.peek();
		if(_g._hx_index == 1) {
			var c = _g.character;
			return c != "?";
		} else {
			return true;
		}
	}
	,readQuantifierPrefix: function() {
		var _g = this.peek();
		if(_g._hx_index == 1) {
			var c = _g.character;
			switch(c) {
			case "*":
				this.currentIndex++;
				return new hre_QuantifierPrefix(0,-1);
			case "+":
				this.currentIndex++;
				return new hre_QuantifierPrefix(1,-1);
			case "?":
				this.currentIndex++;
				return new hre_QuantifierPrefix(0,1);
			case "{":
				return this.readQuantifierBlock();
			default:
				return null;
			}
		} else {
			return null;
		}
	}
	,readQuantifierBlock: function() {
		var oldIndex = this.currentIndex;
		if(this.peekChar() != "{") {
			return null;
		}
		this.currentIndex++;
		var min = this.readDecimalDigits();
		var minLen = min.length;
		var minVal = min.value;
		if(minLen == 0) {
			this.currentIndex = oldIndex;
			return null;
		}
		var _g = this.peek();
		switch(_g._hx_index) {
		case 0:
			this.currentIndex = oldIndex;
			return null;
		case 1:
			var c = _g.character;
			switch(c) {
			case ",":
				this.currentIndex++;
				break;
			case "}":
				this.currentIndex++;
				return new hre_QuantifierPrefix(minVal,minVal);
			default:
				this.currentIndex = oldIndex;
				return null;
			}
			break;
		}
		var max = this.readDecimalDigits();
		var maxLen = max.length;
		var maxVal = max.value;
		var _g = this.peek();
		switch(_g._hx_index) {
		case 0:
			this.currentIndex = oldIndex;
			return null;
		case 1:
			var c = _g.character;
			if(c != "}") {
				this.currentIndex = oldIndex;
				return null;
			}
			this.currentIndex++;
			if(maxLen == 0) {
				return new hre_QuantifierPrefix(minVal,-1);
			} else {
				if(maxVal < minVal) {
					throw haxe_Exception.thrown(new hre_RegExpSyntaxError("Max is finite and less than min",this.currentIndex,this.source));
				}
				return new hre_QuantifierPrefix(minVal,maxVal);
			}
			break;
		}
	}
	,readQuantifier: function() {
		var prefix = this.readQuantifierPrefix();
		if(prefix == null) {
			return null;
		}
		var greedy = this.isGreedyQuantifier();
		if(!greedy) {
			this.currentIndex++;
		}
		return new hre_ast_Quantifier(prefix.min,prefix.max,greedy);
	}
	,readDecimalDigits: function() {
		var len = 0;
		var val = 0;
		while(true) {
			var _g = this.peek();
			if(_g._hx_index == 1) {
				var c = _g.character;
				var charCode = HxOverrides.cca(c,0);
				if(48 <= charCode && charCode <= 57) {
					this.currentIndex++;
					++len;
					val = 10 * val + (charCode - 48);
				} else {
					break;
				}
			} else {
				break;
			}
		}
		return new hre_IntLiteral(len,val);
	}
	,readHexadecimal: function(minLen,maxLen) {
		var len = 0;
		var val = 0;
		while(!(maxLen == -1 && len >= maxLen)) {
			var _g = this.peek();
			if(_g._hx_index == 1) {
				var c = _g.character;
				var charCode = HxOverrides.cca(c,0);
				if(48 <= charCode && charCode <= 57) {
					this.currentIndex++;
					++len;
					val = 16 * val + (charCode - 48);
				} else if(65 <= charCode && charCode <= 70) {
					this.currentIndex++;
					++len;
					val = 16 * val + (10 + charCode - 65);
				} else if(97 <= charCode && charCode <= 102) {
					this.currentIndex++;
					++len;
					val = 16 * val + (10 + charCode - 97);
				} else {
					break;
				}
			} else {
				break;
			}
		}
		if(len < minLen) {
			throw haxe_Exception.thrown(new hre_RegExpSyntaxError("Not enough hex digits",this.currentIndex,this.source));
		}
		return new hre_IntLiteral(len,val);
	}
	,symbolAt: function(index) {
		if(index < this.length) {
			return hre_tokens_Symbol.Character(this.source.charAt(index));
		} else {
			return hre_tokens_Symbol.EndOfText;
		}
	}
	,charAt: function(index) {
		if(index >= this.length) {
			throw haxe_Exception.thrown(new hre_RegExpSyntaxError("Unexpected end of text",this.currentIndex,this.source));
		}
		return this.source.charAt(index);
	}
	,peek: function(lookahead) {
		if(lookahead == null) {
			lookahead = 0;
		}
		return this.symbolAt(this.currentIndex + lookahead);
	}
	,peekChar: function(lookahead) {
		if(lookahead == null) {
			lookahead = 0;
		}
		return this.charAt(this.currentIndex + lookahead);
	}
	,__class__: hre_RegExpParser
};
var hre_GroupKind = $hxEnums["hre.GroupKind"] = { __ename__:"hre.GroupKind",__constructs__:null
	,Capture: {_hx_name:"Capture",_hx_index:0,__enum__:"hre.GroupKind",toString:$estr}
	,Simple: {_hx_name:"Simple",_hx_index:1,__enum__:"hre.GroupKind",toString:$estr}
	,FollowedBy: {_hx_name:"FollowedBy",_hx_index:2,__enum__:"hre.GroupKind",toString:$estr}
	,NotFollowedBy: {_hx_name:"NotFollowedBy",_hx_index:3,__enum__:"hre.GroupKind",toString:$estr}
};
hre_GroupKind.__constructs__ = [hre_GroupKind.Capture,hre_GroupKind.Simple,hre_GroupKind.FollowedBy,hre_GroupKind.NotFollowedBy];
var hre_ast_Alternative = function(expressions) {
	this.terms = expressions;
};
hre_ast_Alternative.__name__ = "hre.ast.Alternative";
hre_ast_Alternative.prototype = {
	terms: null
	,__class__: hre_ast_Alternative
};
var hre_ast_Assertion = $hxEnums["hre.ast.Assertion"] = { __ename__:"hre.ast.Assertion",__constructs__:null
	,StartOfText: {_hx_name:"StartOfText",_hx_index:0,__enum__:"hre.ast.Assertion",toString:$estr}
	,EndOfText: {_hx_name:"EndOfText",_hx_index:1,__enum__:"hre.ast.Assertion",toString:$estr}
	,WordBoundary: {_hx_name:"WordBoundary",_hx_index:2,__enum__:"hre.ast.Assertion",toString:$estr}
	,NotWordBoundary: {_hx_name:"NotWordBoundary",_hx_index:3,__enum__:"hre.ast.Assertion",toString:$estr}
	,FollowedBy: ($_=function(disjunction) { return {_hx_index:4,disjunction:disjunction,__enum__:"hre.ast.Assertion",toString:$estr}; },$_._hx_name="FollowedBy",$_.__params__ = ["disjunction"],$_)
	,NotFollowedBy: ($_=function(disjunction) { return {_hx_index:5,disjunction:disjunction,__enum__:"hre.ast.Assertion",toString:$estr}; },$_._hx_name="NotFollowedBy",$_.__params__ = ["disjunction"],$_)
};
hre_ast_Assertion.__constructs__ = [hre_ast_Assertion.StartOfText,hre_ast_Assertion.EndOfText,hre_ast_Assertion.WordBoundary,hre_ast_Assertion.NotWordBoundary,hre_ast_Assertion.FollowedBy,hre_ast_Assertion.NotFollowedBy];
var hre_ast_Atom = $hxEnums["hre.ast.Atom"] = { __ename__:"hre.ast.Atom",__constructs__:null
	,AnyCharacter: {_hx_name:"AnyCharacter",_hx_index:0,__enum__:"hre.ast.Atom",toString:$estr}
	,Decimal: {_hx_name:"Decimal",_hx_index:1,__enum__:"hre.ast.Atom",toString:$estr}
	,NotDecimal: {_hx_name:"NotDecimal",_hx_index:2,__enum__:"hre.ast.Atom",toString:$estr}
	,Separator: {_hx_name:"Separator",_hx_index:3,__enum__:"hre.ast.Atom",toString:$estr}
	,NotSeparator: {_hx_name:"NotSeparator",_hx_index:4,__enum__:"hre.ast.Atom",toString:$estr}
	,Word: {_hx_name:"Word",_hx_index:5,__enum__:"hre.ast.Atom",toString:$estr}
	,NotWord: {_hx_name:"NotWord",_hx_index:6,__enum__:"hre.ast.Atom",toString:$estr}
	,Backreference: ($_=function(captureId) { return {_hx_index:7,captureId:captureId,__enum__:"hre.ast.Atom",toString:$estr}; },$_._hx_name="Backreference",$_.__params__ = ["captureId"],$_)
	,Literal: ($_=function(literal) { return {_hx_index:8,literal:literal,__enum__:"hre.ast.Atom",toString:$estr}; },$_._hx_name="Literal",$_.__params__ = ["literal"],$_)
	,Class: ($_=function(characterClass) { return {_hx_index:9,characterClass:characterClass,__enum__:"hre.ast.Atom",toString:$estr}; },$_._hx_name="Class",$_.__params__ = ["characterClass"],$_)
	,CaptureGroup: ($_=function(disjunction,captureIndex) { return {_hx_index:10,disjunction:disjunction,captureIndex:captureIndex,__enum__:"hre.ast.Atom",toString:$estr}; },$_._hx_name="CaptureGroup",$_.__params__ = ["disjunction","captureIndex"],$_)
	,SimpleGroup: ($_=function(disjunction) { return {_hx_index:11,disjunction:disjunction,__enum__:"hre.ast.Atom",toString:$estr}; },$_._hx_name="SimpleGroup",$_.__params__ = ["disjunction"],$_)
};
hre_ast_Atom.__constructs__ = [hre_ast_Atom.AnyCharacter,hre_ast_Atom.Decimal,hre_ast_Atom.NotDecimal,hre_ast_Atom.Separator,hre_ast_Atom.NotSeparator,hre_ast_Atom.Word,hre_ast_Atom.NotWord,hre_ast_Atom.Backreference,hre_ast_Atom.Literal,hre_ast_Atom.Class,hre_ast_Atom.CaptureGroup,hre_ast_Atom.SimpleGroup];
var hre_ast_CharacterClass = function(inverted,ranges) {
	this.inverted = inverted;
	this.ranges = ranges;
};
hre_ast_CharacterClass.__name__ = "hre.ast.CharacterClass";
hre_ast_CharacterClass.prototype = {
	inverted: null
	,ranges: null
	,__class__: hre_ast_CharacterClass
};
var hre_ast_CharacterClassAtom = $hxEnums["hre.ast.CharacterClassAtom"] = { __ename__:"hre.ast.CharacterClassAtom",__constructs__:null
	,Literal: ($_=function(value) { return {_hx_index:0,value:value,__enum__:"hre.ast.CharacterClassAtom",toString:$estr}; },$_._hx_name="Literal",$_.__params__ = ["value"],$_)
	,Decimal: {_hx_name:"Decimal",_hx_index:1,__enum__:"hre.ast.CharacterClassAtom",toString:$estr}
	,NotDecimal: {_hx_name:"NotDecimal",_hx_index:2,__enum__:"hre.ast.CharacterClassAtom",toString:$estr}
	,Separator: {_hx_name:"Separator",_hx_index:3,__enum__:"hre.ast.CharacterClassAtom",toString:$estr}
	,NotSeparator: {_hx_name:"NotSeparator",_hx_index:4,__enum__:"hre.ast.CharacterClassAtom",toString:$estr}
	,Word: {_hx_name:"Word",_hx_index:5,__enum__:"hre.ast.CharacterClassAtom",toString:$estr}
	,NotWord: {_hx_name:"NotWord",_hx_index:6,__enum__:"hre.ast.CharacterClassAtom",toString:$estr}
};
hre_ast_CharacterClassAtom.__constructs__ = [hre_ast_CharacterClassAtom.Literal,hre_ast_CharacterClassAtom.Decimal,hre_ast_CharacterClassAtom.NotDecimal,hre_ast_CharacterClassAtom.Separator,hre_ast_CharacterClassAtom.NotSeparator,hre_ast_CharacterClassAtom.Word,hre_ast_CharacterClassAtom.NotWord];
var hre_ast_CharacterClassRange = $hxEnums["hre.ast.CharacterClassRange"] = { __ename__:"hre.ast.CharacterClassRange",__constructs__:null
	,Range: ($_=function(start,end) { return {_hx_index:0,start:start,end:end,__enum__:"hre.ast.CharacterClassRange",toString:$estr}; },$_._hx_name="Range",$_.__params__ = ["start","end"],$_)
	,Simple: ($_=function(value) { return {_hx_index:1,value:value,__enum__:"hre.ast.CharacterClassRange",toString:$estr}; },$_._hx_name="Simple",$_.__params__ = ["value"],$_)
};
hre_ast_CharacterClassRange.__constructs__ = [hre_ast_CharacterClassRange.Range,hre_ast_CharacterClassRange.Simple];
var hre_ast_Disjunction = function(alternatives) {
	this.alternatives = alternatives;
};
hre_ast_Disjunction.__name__ = "hre.ast.Disjunction";
hre_ast_Disjunction.prototype = {
	alternatives: null
	,__class__: hre_ast_Disjunction
};
var hre_ast_Pattern = function(alternatives,captures) {
	hre_ast_Disjunction.call(this,alternatives);
	this.captures = captures;
};
hre_ast_Pattern.__name__ = "hre.ast.Pattern";
hre_ast_Pattern.__super__ = hre_ast_Disjunction;
hre_ast_Pattern.prototype = $extend(hre_ast_Disjunction.prototype,{
	captures: null
	,__class__: hre_ast_Pattern
});
var hre_ast_Quantifier = function(min,max,greedy) {
	this.min = min;
	this.max = max;
	this.greedy = greedy;
};
hre_ast_Quantifier.__name__ = "hre.ast.Quantifier";
hre_ast_Quantifier.prototype = {
	min: null
	,max: null
	,greedy: null
	,__class__: hre_ast_Quantifier
};
var hre_ast_Term = $hxEnums["hre.ast.Term"] = { __ename__:"hre.ast.Term",__constructs__:null
	,Assertion: ($_=function(assertion) { return {_hx_index:0,assertion:assertion,__enum__:"hre.ast.Term",toString:$estr}; },$_._hx_name="Assertion",$_.__params__ = ["assertion"],$_)
	,Atom: ($_=function(atom) { return {_hx_index:1,atom:atom,__enum__:"hre.ast.Term",toString:$estr}; },$_._hx_name="Atom",$_.__params__ = ["atom"],$_)
	,QuantifiedAtom: ($_=function(atom,quantifier,capturesStartIndex,capturesEndIndex) { return {_hx_index:2,atom:atom,quantifier:quantifier,capturesStartIndex:capturesStartIndex,capturesEndIndex:capturesEndIndex,__enum__:"hre.ast.Term",toString:$estr}; },$_._hx_name="QuantifiedAtom",$_.__params__ = ["atom","quantifier","capturesStartIndex","capturesEndIndex"],$_)
};
hre_ast_Term.__constructs__ = [hre_ast_Term.Assertion,hre_ast_Term.Atom,hre_ast_Term.QuantifiedAtom];
var hre_tokens_Symbol = $hxEnums["hre.tokens.Symbol"] = { __ename__:"hre.tokens.Symbol",__constructs__:null
	,EndOfText: {_hx_name:"EndOfText",_hx_index:0,__enum__:"hre.tokens.Symbol",toString:$estr}
	,Character: ($_=function(character) { return {_hx_index:1,character:character,__enum__:"hre.tokens.Symbol",toString:$estr}; },$_._hx_name="Character",$_.__params__ = ["character"],$_)
};
hre_tokens_Symbol.__constructs__ = [hre_tokens_Symbol.EndOfText,hre_tokens_Symbol.Character];
var httpstatus_HttpStatusCode = {};
httpstatus_HttpStatusCode.toMessage = function(this1) {
	var this2 = httpstatus_HttpStatusMessage.fromCode(this1);
	return this2;
};
httpstatus_HttpStatusCode.toInt = function(this1) {
	return this1;
};
httpstatus_HttpStatusCode.fromErrorCode = function(code) {
	return code;
};
var httpstatus_HttpStatusMessage = {};
httpstatus_HttpStatusMessage._new = function(statusCode) {
	var this1 = httpstatus_HttpStatusMessage.fromCode(statusCode);
	return this1;
};
httpstatus_HttpStatusMessage.fromCode = function(statusCode) {
	switch(statusCode) {
	case 100:
		return "Continue";
	case 101:
		return "Switching Protocols";
	case 102:
		return "Processing";
	case 200:
		return "OK";
	case 201:
		return "Created";
	case 202:
		return "Accepted";
	case 203:
		return "Non-Authoritative Information";
	case 204:
		return "No Content";
	case 205:
		return "Reset Content";
	case 206:
		return "Partial Content";
	case 207:
		return "Multi-Status";
	case 208:
		return "Already Reported";
	case 226:
		return "IM Used";
	case 300:
		return "Multiple Choices";
	case 301:
		return "Moved Permanently";
	case 302:
		return "Found";
	case 303:
		return "See Other";
	case 304:
		return "Not Modified";
	case 305:
		return "Use Proxy";
	case 306:
		return "Switch Proxy";
	case 307:
		return "Temporary Redirect";
	case 308:
		return "Permanent Redirect";
	case 400:
		return "Bad Request";
	case 401:
		return "Unauthorized";
	case 402:
		return "Payment Required";
	case 403:
		return "Forbidden";
	case 404:
		return "Not Found";
	case 405:
		return "Method Not Allowed";
	case 406:
		return "Not Acceptable";
	case 407:
		return "Proxy Authentication Required";
	case 408:
		return "Request Timeout";
	case 409:
		return "Conflict";
	case 410:
		return "Gone";
	case 411:
		return "Length Required";
	case 412:
		return "Precondition Failed";
	case 413:
		return "Payload Too Large";
	case 414:
		return "URI Too Long";
	case 415:
		return "Unsupported Media Type";
	case 416:
		return "Range Not Satisfiable";
	case 417:
		return "Expectation Failed";
	case 418:
		return "I'm a teapot";
	case 421:
		return "Misdirected Request";
	case 422:
		return "Unprocessable Entity";
	case 423:
		return "Locked";
	case 424:
		return "Failed Dependency";
	case 426:
		return "Upgrade Required";
	case 428:
		return "Precondition Required";
	case 429:
		return "Too Many Requests";
	case 431:
		return "Request Header Fields Too Large";
	case 451:
		return "Unavailable For Legal Reasons";
	case 500:
		return "Internal Server Error";
	case 501:
		return "Not Implemented";
	case 502:
		return "Bad Gateway";
	case 503:
		return "Service Unavailable";
	case 504:
		return "Gateway Timeout";
	case 505:
		return "HTTP Version Not Supported";
	case 506:
		return "Variant Also Negotiates";
	case 507:
		return "Insufficient Storage";
	case 508:
		return "Loop Detected";
	case 510:
		return "Not Extended";
	case 511:
		return "Network Authentication Required";
	default:
		return "Unknown Status";
	}
};
var js_Boot = function() { };
js_Boot.__name__ = "js.Boot";
js_Boot.getClass = function(o) {
	if(o == null) {
		return null;
	} else if(((o) instanceof Array)) {
		return Array;
	} else {
		var cl = o.__class__;
		if(cl != null) {
			return cl;
		}
		var name = js_Boot.__nativeClassName(o);
		if(name != null) {
			return js_Boot.__resolveNativeClass(name);
		}
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o.__enum__) {
			var e = $hxEnums[o.__enum__];
			var con = e.__constructs__[o._hx_index];
			var n = con._hx_name;
			if(con.__params__) {
				s = s + "\t";
				return n + "(" + ((function($this) {
					var $r;
					var _g = [];
					{
						var _g1 = 0;
						var _g2 = con.__params__;
						while(true) {
							if(!(_g1 < _g2.length)) {
								break;
							}
							var p = _g2[_g1];
							_g1 = _g1 + 1;
							_g.push(js_Boot.__string_rec(o[p],s));
						}
					}
					$r = _g;
					return $r;
				}(this))).join(",") + ")";
			} else {
				return n;
			}
		}
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g = 0;
			var _g1 = o.length;
			while(_g < _g1) {
				var i = _g++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( _g ) {
			haxe_NativeStackTrace.lastError = _g;
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		var k = null;
		for( k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) {
			str += ", \n";
		}
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) {
		return false;
	}
	if(cc == cl) {
		return true;
	}
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g = 0;
		var _g1 = intf.length;
		while(_g < _g1) {
			var i = _g++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) {
				return true;
			}
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) {
		return false;
	}
	switch(cl) {
	case Array:
		return ((o) instanceof Array);
	case Bool:
		return typeof(o) == "boolean";
	case Dynamic:
		return o != null;
	case Float:
		return typeof(o) == "number";
	case Int:
		if(typeof(o) == "number") {
			return ((o | 0) === o);
		} else {
			return false;
		}
		break;
	case String:
		return typeof(o) == "string";
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(js_Boot.__downcastCheck(o,cl)) {
					return true;
				}
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(((o) instanceof cl)) {
					return true;
				}
			}
		} else {
			return false;
		}
		if(cl == Class ? o.__name__ != null : false) {
			return true;
		}
		if(cl == Enum ? o.__ename__ != null : false) {
			return true;
		}
		return o.__enum__ != null ? $hxEnums[o.__enum__] == cl : false;
	}
};
js_Boot.__downcastCheck = function(o,cl) {
	if(!((o) instanceof cl)) {
		if(cl.__isInterface__) {
			return js_Boot.__interfLoop(js_Boot.getClass(o),cl);
		} else {
			return false;
		}
	} else {
		return true;
	}
};
js_Boot.__implements = function(o,iface) {
	return js_Boot.__interfLoop(js_Boot.getClass(o),iface);
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") {
		return null;
	}
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var js_node_KeyValue = {};
js_node_KeyValue.get_key = function(this1) {
	return this1[0];
};
js_node_KeyValue.get_value = function(this1) {
	return this1[1];
};
var js_node_stream_WritableNewOptionsAdapter = {};
js_node_stream_WritableNewOptionsAdapter.from = function(options) {
	if(!Object.prototype.hasOwnProperty.call(options,"final")) {
		Object.defineProperty(options,"final",{ get : function() {
			return options.final_;
		}});
	}
	return options;
};
var js_node_url_URLSearchParamsEntry = {};
js_node_url_URLSearchParamsEntry._new = function(name,value) {
	var this1 = [name,value];
	return this1;
};
js_node_url_URLSearchParamsEntry.get_name = function(this1) {
	return this1[0];
};
js_node_url_URLSearchParamsEntry.get_value = function(this1) {
	return this1[1];
};
var node_$fetch_Fetch = require("node-fetch").default;
var node_$fetch_Headers = require("node-fetch").Headers;
var node_$fetch_Request = require("node-fetch").Request;
var stx_LiftAssert = function() { };
stx_LiftAssert.__name__ = "stx.LiftAssert";
stx_LiftAssert.that = function(stx,pos) {
	return new stx_assert_Module(pos);
};
stx_LiftAssert.assert = function(__,pos) {
	return new stx_assert_module_Crunch(pos);
};
stx_LiftAssert.expect = function(b,err) {
	if(b) {
		return stx_nano_Report.unit();
	} else {
		return stx_nano_Report.pure(err);
	}
};
var stx_LiftErr = function() { };
stx_LiftErr.__name__ = "stx.LiftErr";
var stx_Fn = function() { };
stx_Fn.__name__ = "stx.Fn";
stx_Fn.fn = function(wildcard) {
	return new stx_fn_Module();
};
stx_Fn._0x = function(fn) {
	var self = stx_pico_OptionLift.map(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,fn),stx_fn_Block.lift);
	if(self._hx_index == 0) {
		var v = self.v;
		return v;
	} else {
		return stx_fn_Block.unit();
	}
};
stx_Fn._1x = function(fn) {
	var self = stx_pico_OptionLift.map(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,fn),stx_fn_Sink.lift);
	if(self._hx_index == 0) {
		var v = self.v;
		return v;
	} else {
		var this1 = function(p) {
		};
		return this1;
	}
};
stx_Fn._1r = function() {
	return stx_fn_Unary.unit();
};
var stx_LiftCurriedBinary = function() { };
stx_LiftCurriedBinary.__name__ = "stx.LiftCurriedBinary";
stx_LiftCurriedBinary.uncurry = function(f) {
	return function(p1,p2) {
		return (f(p1))(p2);
	};
};
var stx_LiftCurriedTernary = function() { };
stx_LiftCurriedTernary.__name__ = "stx.LiftCurriedTernary";
stx_LiftCurriedTernary.uncurry = function(f) {
	return function(p1,p2,p3) {
		return ((f(p1))(p2))(p3);
	};
};
var stx_LiftFn = function() { };
stx_LiftFn.__name__ = "stx.LiftFn";
stx_LiftFn.pinch = function(fn0) {
	return function(x) {
		return fn0(stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,x,x));
	};
};
stx_LiftFn.repeat = function(fn) {
	return function(v) {
		var i = null;
		var o = null;
		_hx_loop1: while(true) {
			var _g = fn(i);
			switch(_g._hx_index) {
			case 0:
				var v = _g.v;
				i = v;
				break;
			case 1:
				var v1 = _g.v;
				o = v1;
				break _hx_loop1;
			}
		}
		return o;
	};
};
var stx_LiftUnary = function() { };
stx_LiftUnary.__name__ = "stx.LiftUnary";
stx_LiftUnary.fn = function(f) {
	return f;
};
var stx_LiftThunk = function() { };
stx_LiftThunk.__name__ = "stx.LiftThunk";
stx_LiftThunk.fn = function(fn) {
	return fn;
};
var stx_LiftBlock = function() { };
stx_LiftBlock.__name__ = "stx.LiftBlock";
stx_LiftBlock.fn = function(f) {
	return f;
};
var stx_LiftBinary = function() { };
stx_LiftBinary.__name__ = "stx.LiftBinary";
stx_LiftBinary.fn = function(fn) {
	return stx_fn_Binary._new(fn);
};
stx_LiftBinary.bind1 = function(fn,p) {
	var _g = fn;
	var a1 = p;
	return function(a2) {
		return _g(a1,a2);
	};
};
var stx_LiftPerhapsConstructor = function() { };
stx_LiftPerhapsConstructor.__name__ = "stx.LiftPerhapsConstructor";
stx_LiftPerhapsConstructor.perhaps = function(fn) {
	return function(x) {
		switch(x._hx_index) {
		case 0:
			var v = x.v;
			return fn(v);
		case 1:
			return haxe_ds_Option.None;
		}
	};
};
var stx_LiftPerhaps = function() { };
stx_LiftPerhaps.__name__ = "stx.LiftPerhaps";
stx_LiftPerhaps.perhaps = function(fn) {
	return function(x) {
		switch(x._hx_index) {
		case 0:
			var v = x.v;
			return haxe_ds_Option.Some(fn(v));
		case 1:
			return haxe_ds_Option.None;
		}
	};
};
var stx_LiftTernary = function() { };
stx_LiftTernary.__name__ = "stx.LiftTernary";
stx_LiftTernary.fn = function(fn) {
	return fn;
};
var stx_LiftIf = function() { };
stx_LiftIf.__name__ = "stx.LiftIf";
stx_LiftIf.if_else = function(b,yes,no) {
	if(b) {
		return yes();
	} else {
		return no();
	}
};
var stx_Fp = function() { };
stx_Fp.__name__ = "stx.Fp";
stx_Fp.handle = function(opt) {
};
var stx_LiftFp = function() { };
stx_LiftFp.__name__ = "stx.LiftFp";
stx_LiftFp.asState = function(fn) {
	return stx_fp_State._new(fn);
};
var stx_LiftLog = function() { };
stx_LiftLog.__name__ = "stx.LiftLog";
stx_LiftLog.log = function(wildcard) {
	return stx_Log.ZERO;
};
stx_LiftLog.scope = function(stx,pos,method) {
	return stx_log_LogPosition.get_scoping(stx_log_LogPosition.fromPos(pos));
};
stx_LiftLog.stamp = function(pos) {
	return stx_log_LogPosition._new(pos);
};
var stx_log_Debugging = function() { };
stx_log_Debugging.__name__ = "stx.log.Debugging";
stx_log_Debugging.prototype = {
	note: function(str,pos) {
	}
	,__class__: stx_log_Debugging
};
var stx_log_OutputApi = function() { };
stx_log_OutputApi.__name__ = "stx.log.OutputApi";
stx_log_OutputApi.__isInterface__ = true;
stx_log_OutputApi.prototype = {
	render: null
	,__class__: stx_log_OutputApi
};
var stx_log_output_term_Full = function() { };
stx_log_output_term_Full.__name__ = "stx.log.output.term.Full";
stx_log_output_term_Full.__interfaces__ = [stx_log_OutputApi];
stx_log_output_term_Full.clear = function() {
	js_Boot.__clear_trace();
};
stx_log_output_term_Full.__super__ = stx_log_Debugging;
stx_log_output_term_Full.prototype = $extend(stx_log_Debugging.prototype,{
	render: function(v,infos) {
		this.note("haxelog " + Std.string(infos),{ fileName : "stx/log/output/term/Full.hx", lineNumber : 5, className : "stx.log.output.term.Full", methodName : "render"});
		this.note("js",{ fileName : "stx/log/output/term/Full.hx", lineNumber : 24, className : "stx.log.output.term.Full", methodName : "render"});
		new stx_log_output_term_Js().render(v,infos);
	}
	,__class__: stx_log_output_term_Full
});
var stx_log_LoggerApi = function() { };
stx_log_LoggerApi.__name__ = "stx.log.LoggerApi";
stx_log_LoggerApi.__isInterface__ = true;
stx_log_LoggerApi.prototype = {
	format: null
	,logic: null
	,apply: null
	,do_apply: null
	,__class__: stx_log_LoggerApi
};
var stx_log_Logger = function(logic,format) {
	var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,logic);
	var tmp;
	if(self._hx_index == 0) {
		var v = self.v;
		tmp = v;
	} else {
		tmp = stx_log_Filter.Unit();
	}
	this.logic = stx_log_Logic.fromFilter(tmp);
	var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,format);
	var v = stx_log_core_Format.unit();
	var tmp;
	if(self._hx_index == 0) {
		var v1 = self.v;
		tmp = v1;
	} else {
		tmp = v;
	}
	this.format = tmp;
};
stx_log_Logger.__name__ = "stx.log.Logger";
stx_log_Logger.__interfaces__ = [stx_log_LoggerApi];
stx_log_Logger.spur = function(value) {
	var this1 = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,{ fileName : "stx/log/Logger.hx", lineNumber : 6, className : "stx.log.Logger", methodName : "spur"});
	return stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,new stx_nano_Err(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,stx_nano_FailureSum.ERR_OF(stx_fail_LogFailure.E_Log_Zero)),haxe_ds_Option.None,this1));
};
stx_log_Logger.__super__ = stx_log_output_term_Full;
stx_log_Logger.prototype = $extend(stx_log_output_term_Full.prototype,{
	logic: null
	,format: null
	,apply: function(value) {
		var _gthis = this;
		return stx_fp_ContinuationLift.mod(this.do_apply(value),function(res) {
			var fn = stx_nano_lift_LiftNano.passthrough(stx_nano_Wildcard.__,function(string) {
				if(!value.get_stamp().hidden) {
					_gthis.render(string,value.source);
				}
			});
			var self;
			switch(res._hx_index) {
			case 0:
				var t = res.t;
				self = stx_nano_ResSum.Accept(fn(t));
				break;
			case 1:
				var e = res.e;
				self = stx_nano_ResSum.Reject(e);
				break;
			}
			return stx_nano_Res._new(self);
		});
	}
	,do_apply: function(value) {
		var _gthis = this;
		return stx_fp_Continuation.lift(function(fn) {
			var result = stx_nano_ReportLift.resolve(stx_log_Logic.apply(_gthis.logic,value),function() {
				return _gthis.format.print(value);
			});
			return result;
		});
	}
	,__class__: stx_log_Logger
});
var stx_log_logger_Unit = function(logic,format,level,verbose,reinstate) {
	if(reinstate == null) {
		reinstate = false;
	}
	if(verbose == null) {
		verbose = false;
	}
	if(level == null) {
		level = 0;
	}
	stx_log_Logger.call(this,logic,format);
	this.level = level;
	this.verbose = verbose;
	this.reinstate = reinstate;
	this.includes = [];
};
stx_log_logger_Unit.__name__ = "stx.log.logger.Unit";
stx_log_logger_Unit.__super__ = stx_log_Logger;
stx_log_logger_Unit.prototype = $extend(stx_log_Logger.prototype,{
	level: null
	,reinstate: null
	,includes: null
	,verbose: null
	,do_apply: function(data) {
		var _gthis = this;
		var applied = stx_log_Logger.prototype.do_apply.call(this,data);
		var _g = function(e) {
			return stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,e);
		};
		var this1 = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,{ fileName : "stx/log/logger/Unit.hx", lineNumber : 18, className : "stx.log.logger.Unit", methodName : "do_apply"});
		var e = new stx_nano_Err(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,stx_nano_FailureSum.ERR_OF(stx_fail_LogFailure.E_Log_Zero)),haxe_ds_Option.None,this1);
		var applied_fn = function() {
			return _g(e);
		};
		var self = applied(function(_) {
			return applied_fn();
		});
		var parent;
		switch(self._hx_index) {
		case 0:
			var t = self.t;
			parent = true;
			break;
		case 1:
			var e1 = self.e;
			parent = false;
			break;
		}
		var has_custom = stx_log_Signal.has_custom;
		var level = stx_log_Level.asInt(data.get_stamp().level) >= stx_log_Level.asInt(this.level);
		var include_tag = this.includes.length > 0 ? stx_lift_ArrayLift.any(this.includes,function(x) {
			var self = stx_pico_OptionLift.flat_map(stx_pico_OptionLift.flat_map(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,data),function(x) {
				return stx_pico_Option.fromNullT(x.get_stamp());
			}),function(x) {
				return stx_pico_Option.fromNullT(x.tags);
			});
			var include_tag;
			if(self._hx_index == 0) {
				var v = self.v;
				include_tag = v;
			} else {
				include_tag = [];
			}
			return stx_pico_OptionLift.is_defined(stx_lift_ArrayLift.search(include_tag,function(y) {
				return x == y;
			}));
		}) : data.get_stamp().tags.length <= 0;
		var res = stx_nano_lift_LiftNano.if_else(has_custom,function() {
			return _gthis.reinstate;
		},function() {
			return stx_nano_lift_LiftNano.if_else(_gthis.verbose,function() {
				return true;
			},function() {
				return stx_nano_lift_LiftNano.if_else(include_tag,function() {
					if(parent) {
						return level;
					} else {
						return false;
					}
				},function() {
					return false;
				});
			});
		});
		this.note("has_custom:" + (has_custom == null ? "null" : "" + has_custom) + " " + ("parent:" + (parent == null ? "null" : "" + parent) + " ") + ("level:" + (level == null ? "null" : "" + level) + " ") + ("includes:" + Std.string(this.includes) + " ") + ("include_tag:" + (include_tag == null ? "null" : "" + include_tag) + " ") + ("stamp_tag:" + Std.string(data.get_stamp().tags) + " ") + ("parent && level: " + Std.string(parent && level) + " ") + ("verbose:" + Std.string(this.verbose) + " ") + ("res:" + (res == null ? "null" : "" + res) + " "),{ fileName : "stx/log/logger/Unit.hx", lineNumber : 37, className : "stx.log.logger.Unit", methodName : "do_apply"});
		return function(fn) {
			return stx_nano_lift_LiftNano.if_else(res,function() {
				return stx_nano_lift_LiftNano.accept(stx_nano_Wildcard.__,_gthis.format.print(data));
			},function() {
				var this1 = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,{ fileName : "stx/log/logger/Unit.hx", lineNumber : 50, className : "stx.log.logger.Unit", methodName : "do_apply"});
				return stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,new stx_nano_Err(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,stx_nano_FailureSum.ERR_OF(stx_fail_LogFailure.E_Log_Default({ has_custom : has_custom, parent : parent, level : level, includes : _gthis.includes, include_tag : include_tag, stamp_tag : data.get_stamp().tags, verbose : _gthis.verbose}))),haxe_ds_Option.None,this1));
			});
		};
	}
	,reset: function() {
		stx_log_Includes.clear(this.includes);
		this.level = 0;
		this.logic = stx_log_Logic._.make().always();
	}
	,__class__: stx_log_logger_Unit
});
var stx_log_LogicLift = function() { };
stx_log_LogicLift.__name__ = "stx.log.LogicLift";
stx_log_LogicLift.make = function() {
	return { pack : stx_log_Logic.pack, type : stx_log_Logic.type, line : stx_log_Logic.line, lines : stx_log_Logic.lines, tag : stx_log_Logic.tag, always : stx_log_Logic.always, never : stx_log_Logic.never, method : stx_log_Logic.method};
};
stx_log_LogicLift._ = function(fn) {
	return fn(stx_log_LogicLift.make());
};
var stx_log_Logic = {};
stx_log_Logic._new = function(self) {
	var this1 = self;
	return this1;
};
stx_log_Logic.lift = function(self) {
	return stx_log_Logic._new(self);
};
stx_log_Logic.ctr = function(fn) {
	return stx_log_Logic._._(fn);
};
stx_log_Logic.fromPosPredicate = function(self) {
	return stx_log_Logic.fromFilter(new stx_log_filter_term_PosPredicate(self));
};
stx_log_Logic.fromFilter = function(self) {
	return stx_log_LogicSum.LV(self);
};
stx_log_Logic.and = function(this1,that) {
	return stx_log_LogicSum.LAnd(this1,that);
};
stx_log_Logic.or = function(this1,that) {
	return stx_log_LogicSum.LOr(this1,that);
};
stx_log_Logic.not = function(this1) {
	return stx_log_LogicSum.LNot(stx_log_Logic.lift(this1));
};
stx_log_Logic.apply = function(this1,value) {
	switch(this1._hx_index) {
	case 0:
		var l = this1.l;
		var r = this1.r;
		return stx_nano_Report.or(stx_log_Logic.apply(l,value),function() {
			return stx_log_Logic.apply(r,value);
		});
	case 1:
		var l = this1.l;
		var r1 = this1.r;
		var fst = stx_log_Logic.apply(l,value);
		return stx_nano_lift_LiftNano.if_else(stx_nano_ReportLift.is_defined(fst),function() {
			return stx_log_Logic.apply(r1,value);
		},function() {
			return fst;
		});
	case 2:
		var v = this1.l;
		return stx_nano_ReportLift.fold(stx_log_Logic.apply(v,value),function(e) {
			return stx_nano_Report.unit();
		},function() {
			return stx_nano_Report.make(stx_fail_LogFailure.E_Log_Not,{ fileName : "stx/log/Logic.hx", lineNumber : 58, className : "stx.log._Logic.Logic_Impl_", methodName : "apply"});
		});
	case 3:
		var v = this1.v;
		return v.applyI(value);
	}
};
stx_log_Logic.opine = function(this1,value) {
	return stx_log_Logic.apply(this1,value);
};
stx_log_Logic.prj = function(this1) {
	return this1;
};
stx_log_Logic.get_self = function(this1) {
	return stx_log_Logic.lift(this1);
};
stx_log_Logic.construct = function(fn) {
	return stx_log_Logic.fromPosPredicate(stx_assert_Predicate.Anon(fn));
};
stx_log_Logic.pack = function(pack) {
	return stx_log_Logic.construct(function(value) {
		var canonical = pack.join(".");
		var query = new hre_RegExp("" + canonical + ".*","g");
		var result = query.test(stx_log_LogFileName.get_pack(stx_log_LogPosition.get_fileName(value)).join("."));
		return stx_nano_lift_LiftNano.if_else(result,function() {
			return stx_nano_Report.unit();
		},function() {
			var f = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,{ fileName : "stx/log/Logic.hx", lineNumber : 82, className : "stx.log._Logic.Logic_Impl_", methodName : "pack"});
			return stx_nano_Report.pure(new stx_nano_Err(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,stx_nano_FailureSum.ERR_OF(stx_fail_LogFailure.E_Log_SourceNotInPackage(stx_log_LogPosition.get_fileName(value),canonical))),haxe_ds_Option.None,f));
		});
	});
};
stx_log_Logic.type = function(type) {
	return stx_log_Logic.construct(function(value) {
		var result = type == stx_log_LogFileName.get_canonical(stx_log_LogPosition.get_fileName(value));
		return stx_nano_lift_LiftNano.if_else(result,function() {
			return stx_nano_Report.unit();
		},function() {
			var f = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,{ fileName : "stx/log/Logic.hx", lineNumber : 91, className : "stx.log._Logic.Logic_Impl_", methodName : "type"});
			return stx_nano_Report.pure(new stx_nano_Err(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,stx_nano_FailureSum.ERR_OF(stx_fail_LogFailure.E_Log_SourceNotInPackage(stx_log_LogPosition.get_fileName(value),stx_log_LogFileName.get_canonical(stx_log_LogPosition.get_fileName(value))))),haxe_ds_Option.None,f));
		});
	});
};
stx_log_Logic.line = function(n) {
	return stx_log_Logic.construct(function(value) {
		var result = stx_log_LogPosition.get_lineNumber(value) == n;
		return stx_nano_lift_LiftNano.if_else(result,function() {
			return stx_nano_Report.unit();
		},function() {
			var f = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,{ fileName : "stx/log/Logic.hx", lineNumber : 100, className : "stx.log._Logic.Logic_Impl_", methodName : "line"});
			return stx_nano_Report.pure(new stx_nano_Err(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,stx_nano_FailureSum.ERR_OF(stx_fail_LogFailure.E_Log_NotLine(n))),haxe_ds_Option.None,f));
		});
	});
};
stx_log_Logic.lines = function(l,h) {
	return stx_log_Logic.construct(function(value) {
		return stx_nano_lift_LiftNano.if_else(stx_log_LogPosition.get_lineNumber(value) >= l && stx_log_LogPosition.get_lineNumber(value) <= h,function() {
			return stx_nano_Report.unit();
		},function() {
			var f = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,{ fileName : "stx/log/Logic.hx", lineNumber : 109, className : "stx.log._Logic.Logic_Impl_", methodName : "lines"});
			return stx_nano_Report.pure(new stx_nano_Err(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,stx_nano_FailureSum.ERR_OF(stx_fail_LogFailure.E_Log_NotOfRange(l,h))),haxe_ds_Option.None,f));
		});
	});
};
stx_log_Logic.tag = function(str) {
	return stx_log_Logic.construct(function(value) {
		return stx_nano_lift_LiftNano.if_else(stx_pico_OptionLift.is_defined(stx_lift_ArrayLift.search(stx_log_LogPosition.get_stamp(value).tags,function(tag) {
			return tag == str;
		})),function() {
			return stx_nano_Report.unit();
		},function() {
			var f = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,{ fileName : "stx/log/Logic.hx", lineNumber : 119, className : "stx.log._Logic.Logic_Impl_", methodName : "tag"});
			return stx_nano_Report.pure(new stx_nano_Err(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,stx_nano_FailureSum.ERR_OF(stx_fail_LogFailure.E_Log_DoesNotContainTag(str))),haxe_ds_Option.None,f));
		});
	});
};
stx_log_Logic.method = function(str) {
	return stx_log_Logic.construct(function(value) {
		return stx_nano_lift_LiftNano.if_else(stx_log_LogPosition.get_methodName(value) == str,function() {
			return stx_nano_Report.unit();
		},function() {
			var f = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,{ fileName : "stx/log/Logic.hx", lineNumber : 127, className : "stx.log._Logic.Logic_Impl_", methodName : "method"});
			return stx_nano_Report.pure(new stx_nano_Err(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,stx_nano_FailureSum.ERR_OF(stx_fail_LogFailure.E_Log_NotInMethod(str))),haxe_ds_Option.None,f));
		});
	});
};
stx_log_Logic.always = function() {
	return stx_log_Logic.construct(function(value) {
		return stx_nano_Report.unit();
	});
};
stx_log_Logic.never = function() {
	return stx_log_Logic.construct(function(value) {
		return stx_nano_Report.make(stx_fail_LogFailure.E_Log_Zero,{ fileName : "stx/log/Logic.hx", lineNumber : 138, className : "stx.log._Logic.Logic_Impl_", methodName : "never"});
	});
};
var stx_log_LogicSum = $hxEnums["stx.log.LogicSum"] = { __ename__:"stx.log.LogicSum",__constructs__:null
	,LAnd: ($_=function(l,r) { return {_hx_index:0,l:l,r:r,__enum__:"stx.log.LogicSum",toString:$estr}; },$_._hx_name="LAnd",$_.__params__ = ["l","r"],$_)
	,LOr: ($_=function(l,r) { return {_hx_index:1,l:l,r:r,__enum__:"stx.log.LogicSum",toString:$estr}; },$_._hx_name="LOr",$_.__params__ = ["l","r"],$_)
	,LNot: ($_=function(l) { return {_hx_index:2,l:l,__enum__:"stx.log.LogicSum",toString:$estr}; },$_._hx_name="LNot",$_.__params__ = ["l"],$_)
	,LV: ($_=function(v) { return {_hx_index:3,v:v,__enum__:"stx.log.LogicSum",toString:$estr}; },$_._hx_name="LV",$_.__params__ = ["v"],$_)
};
stx_log_LogicSum.__constructs__ = [stx_log_LogicSum.LAnd,stx_log_LogicSum.LOr,stx_log_LogicSum.LNot,stx_log_LogicSum.LV];
var stx_nano_lift_LiftNano = function() { };
stx_nano_lift_LiftNano.__name__ = "stx.nano.lift.LiftNano";
stx_nano_lift_LiftNano.nano = function(wildcard) {
	return new stx_nano_Module();
};
stx_nano_lift_LiftNano.arrd = function(wildcard,arr) {
	return arr;
};
stx_nano_lift_LiftNano.if_else = function(b,_if,_else) {
	if(b) {
		return _if();
	} else {
		return _else();
	}
};
stx_nano_lift_LiftNano.here = function(wildcard,pos) {
	return pos;
};
stx_nano_lift_LiftNano.test = function(wildcard,arr) {
	var runner = new haxe_unit_TestRunner();
	var t = $getIterator(arr);
	while(t.hasNext()) {
		var t1 = t.next();
		runner.add(t1);
	}
	runner.run();
};
stx_nano_lift_LiftNano.uuid = function(v,value) {
	if(value == null) {
		value = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
	}
	var reg = new EReg("[xy]","g");
	return reg.map(value,function(reg) {
		var r = Math.random() * 16 | 0 | 0;
		var v = reg.matched(0) == "x" ? r : r & 3 | 8;
		return StringTools.hex(v);
	}).toLowerCase();
};
stx_nano_lift_LiftNano.sep = function(_) {
	var out = "/";
	return out;
};
stx_nano_lift_LiftNano.option = function(wildcard,v) {
	if(v == null) {
		return haxe_ds_Option.None;
	} else {
		return haxe_ds_Option.Some(v);
	}
};
stx_nano_lift_LiftNano.accept = function(wildcard,t) {
	return stx_nano_Res.accept(t);
};
stx_nano_lift_LiftNano.reject = function(wildcard,e) {
	return stx_nano_Res.reject(e);
};
stx_nano_lift_LiftNano.success = function(wildcard,t) {
	return stx_pico_Outcome.success(t);
};
stx_nano_lift_LiftNano.failure = function(wildcard,e) {
	haxe_Log.trace(e,{ fileName : "stx/nano/lift/LiftNano.hx", lineNumber : 84, className : "stx.nano.lift.LiftNano", methodName : "failure"});
	return stx_pico_Outcome.failure(e);
};
stx_nano_lift_LiftNano.fault = function(wildcard,pos) {
	return stx_nano_Fault._new(pos);
};
stx_nano_lift_LiftNano.couple = function(wildcard,tI,tII) {
	return function(fn) {
		fn(tI,tII);
	};
};
stx_nano_lift_LiftNano.pair = function(wildcard,tI,tII) {
	var this1 = new tink_core_MPair(tI,tII);
	return this1;
};
stx_nano_lift_LiftNano.decouple = function(wildcard,fn) {
	return function(tp) {
		return stx_nano_CoupleLift.decouple(tp,fn);
	};
};
stx_nano_lift_LiftNano.triple = function(wildcard,tI,tII,tIII) {
	return function(fn) {
		fn(tI,tII,tIII);
	};
};
stx_nano_lift_LiftNano.detriple = function(wildcard,fn) {
	return function(tp) {
		return stx_nano_TripleLift.detriple(tp,fn);
	};
};
stx_nano_lift_LiftNano.toCouple = function(self) {
	return self;
};
stx_nano_lift_LiftNano.lbump = function(wildcard,tp) {
	return stx_nano_CoupleLift.decouple(tp,function(lhs,rhs) {
		var tmp;
		switch(lhs._hx_index) {
		case 0:
			var t = lhs.v;
			tmp = haxe_ds_Option.Some(stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,t,rhs));
			break;
		case 1:
			tmp = haxe_ds_Option.None;
			break;
		}
		return tmp;
	});
};
stx_nano_lift_LiftNano.rbump = function(wildcard,tp) {
	return stx_nano_CoupleLift.decouple(tp,function(lhs,rhs) {
		var tmp;
		switch(rhs._hx_index) {
		case 0:
			var t = rhs.v;
			tmp = haxe_ds_Option.Some(stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,lhs,t));
			break;
		case 1:
			tmp = haxe_ds_Option.None;
			break;
		}
		return tmp;
	});
};
stx_nano_lift_LiftNano.fromPos = function(pos) {
	return stx_nano_Position.fromPos(pos);
};
stx_nano_lift_LiftNano.future = function(wildcard) {
	var trigger = new tink_core_FutureTrigger();
	var future = trigger;
	return stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,trigger,future);
};
stx_nano_lift_LiftNano.tracer = function(v,pos) {
	return function(t) {
		haxe_Log.trace(t,pos);
		return t;
	};
};
stx_nano_lift_LiftNano.trace = function(v,pos) {
	var infos = pos;
	return function(d) {
		haxe_Log.trace(d,infos);
	};
};
stx_nano_lift_LiftNano.through = function(__) {
	return function(v) {
		return v;
	};
};
stx_nano_lift_LiftNano.command = function(__,fn) {
	return function(v) {
		fn(v);
		return v;
	};
};
stx_nano_lift_LiftNano.perform = function(__,fn) {
	return function(v) {
		fn();
		return v;
	};
};
stx_nano_lift_LiftNano.execute = function(__,fn) {
	return function(v) {
		var _g = fn();
		if(_g._hx_index == 0) {
			var e = _g.v;
			return stx_nano_lift_LiftNano.reject(__,e);
		} else {
			return stx_nano_lift_LiftNano.accept(__,v);
		}
	};
};
stx_nano_lift_LiftNano.left = function(__,tI) {
	return haxe_ds_Either.Left(tI);
};
stx_nano_lift_LiftNano.right = function(__,tII) {
	return haxe_ds_Either.Right(tII);
};
stx_nano_lift_LiftNano.either = function(either) {
	return stx_pico_EitherLift.fold(either,function(l) {
		return l;
	},function(r) {
		return r;
	});
};
stx_nano_lift_LiftNano.value = function(future) {
	var result = haxe_ds_Option.None;
	var cancelled = false;
	future.handle(function(x) {
		cancelled = true;
		result = haxe_ds_Option.Some(x);
	});
	return result;
};
stx_nano_lift_LiftNano.crack = function(wildcard,e) {
	throw haxe_Exception.thrown(e);
};
stx_nano_lift_LiftNano.report = function(wildcard,f,pos) {
	if(f == null) {
		return stx_nano_Report.unit();
	} else {
		return stx_nano_Report.pure(f(stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,pos)));
	}
};
stx_nano_lift_LiftNano.definition = function(wildcard,t) {
	return js_Boot.getClass(t);
};
stx_nano_lift_LiftNano.identifier = function(self) {
	return stx_pico_Identifier._new(self.__name__);
};
stx_nano_lift_LiftNano.locals = function(self) {
	return Type.getInstanceFields(self);
};
stx_nano_lift_LiftNano.vblock = function(wildcard,t) {
	return function() {
	};
};
stx_nano_lift_LiftNano.noop = function(wildcard) {
	return function(t) {
		return t;
	};
};
stx_nano_lift_LiftNano.nullify = function(wildcard) {
	return function(t) {
	};
};
stx_nano_lift_LiftNano.passthrough = function(wildcard,fn) {
	return function(t) {
		fn(t);
		return t;
	};
};
stx_nano_lift_LiftNano.not = function(bool) {
	return !bool;
};
stx_nano_lift_LiftNano.toPosition = function(pos) {
	return stx_nano_Position.fromPos(pos);
};
stx_nano_lift_LiftNano.chunk = function(_,v) {
	if(v == null) {
		return stx_nano_ChunkSum.Tap;
	} else {
		return stx_nano_ChunkSum.Val(v);
	}
};
stx_nano_lift_LiftNano.ident = function(wildcard,str) {
	return stx_pico_Identifier._new(str);
};
stx_nano_lift_LiftNano.toIdentifier = function(pos) {
	return stx_pico_Identifier.lift(stx_nano_Position.get_className(stx_nano_Position.fromPos(pos)));
};
stx_nano_lift_LiftNano.toAlert = function(ft) {
	return stx_nano_Alert.lift(ft);
};
stx_nano_lift_LiftNano.toString = function(pos) {
	var id = stx_nano_lift_LiftNano.toIdentifier(pos);
	var fn = stx_nano_Position.get_methodName(stx_nano_lift_LiftNano.toPosition(pos));
	return "" + (id == null ? "null" : stx_pico_Identifier.toString(id)) + "." + fn;
};
var stx_nano_Wildcard = $hxEnums["stx.nano.Wildcard"] = { __ename__:"stx.nano.Wildcard",__constructs__:null
	,__: {_hx_name:"__",_hx_index:0,__enum__:"stx.nano.Wildcard",toString:$estr}
};
stx_nano_Wildcard.__constructs__ = [stx_nano_Wildcard.__];
var stx_assert_PredicateApi = function() { };
stx_assert_PredicateApi.__name__ = "stx.assert.PredicateApi";
stx_assert_PredicateApi.__isInterface__ = true;
stx_assert_PredicateApi.prototype = {
	applyI: null
	,__class__: stx_assert_PredicateApi
};
var stx_log_Filter = function() {
};
stx_log_Filter.__name__ = "stx.log.Filter";
stx_log_Filter.__interfaces__ = [stx_assert_PredicateApi];
stx_log_Filter.Unit = function() {
	return new stx_log_filter_term_Unit();
};
stx_log_Filter.Race = function() {
	return new stx_log_filter_term_Race();
};
stx_log_Filter.PosPredicate = function() {
	return stx_log_filter_term_PosPredicate;
};
stx_log_Filter.prototype = {
	applyI: function(value) {
		return stx_nano_Report.unit();
	}
	,note: function(str) {
	}
	,__class__: stx_log_Filter
};
var stx_log_filter_term_Unit = function() {
	stx_log_Filter.call(this);
};
stx_log_filter_term_Unit.__name__ = "stx.log.filter.term.Unit";
stx_log_filter_term_Unit.__super__ = stx_log_Filter;
stx_log_filter_term_Unit.prototype = $extend(stx_log_Filter.prototype,{
	applyI: function(value) {
		return stx_nano_Report.unit();
	}
	,__class__: stx_log_filter_term_Unit
});
var stx_log_core_Format = {};
stx_log_core_Format.unit = function() {
	var this1 = stx_log_core_Format.fromArray(stx_log_core_Format.get_DEFAULT());
	return this1;
};
stx_log_core_Format._new = function(self) {
	var this1 = self;
	return this1;
};
stx_log_core_Format.lift = function(self) {
	var this1 = self;
	return this1;
};
stx_log_core_Format.fromArray = function(self) {
	return new stx_log_core_FormatCls(self);
};
stx_log_core_Format.get_DEFAULT = function() {
	if(stx_log_core_Format.DEFAULT == null) {
		return stx_log_core_Format.DEFAULT = [stx_log_core_FormatSum.INCLUDE_TAGS,stx_log_core_FormatSum.INCLUDE_LEVEL,stx_log_core_FormatSum.INCLUDE_TIMESTAMP,stx_log_core_FormatSum.INCLUDE_LOCATION,stx_log_core_FormatSum.INCLUDE_DETAIL];
	} else {
		return stx_log_core_Format.DEFAULT;
	}
};
stx_log_core_Format.prj = function(this1) {
	return this1;
};
stx_log_core_Format.get_self = function(this1) {
	var this2 = this1;
	return this2;
};
var stx_log_core_FormatCls = function(data) {
	var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,data);
	var v = stx_log_core_Format.get_DEFAULT();
	var tmp;
	if(self._hx_index == 0) {
		var v1 = self.v;
		tmp = v1;
	} else {
		tmp = v;
	}
	this.data = tmp;
};
stx_log_core_FormatCls.__name__ = "stx.log.core.FormatCls";
stx_log_core_FormatCls.prototype = {
	data: null
	,has: function(v) {
		var index = this.data.indexOf(v);
		return stx_pico_OptionLift.is_defined(index == -1 ? haxe_ds_Option.None : haxe_ds_Option.Some(index));
	}
	,print: function(value) {
		var p = value.source;
		var s = stx_log_LogPosition.get_stamp(p);
		var a = [];
		if(this.has(stx_log_core_FormatSum.INCLUDE_LEVEL)) {
			a.push(stx_log_Level.toString(s.level));
		}
		if(this.has(stx_log_core_FormatSum.INCLUDE_TIMESTAMP)) {
			a.push(HxOverrides.dateStr(s.timestamp));
		}
		if(this.has(stx_log_core_FormatSum.INCLUDE_TAGS)) {
			a.push("[" + s.tags.join(",") + "]");
		}
		if(this.has(stx_log_core_FormatSum.INCLUDE_LOCATION)) {
			a.push(stx_nano_PositionLift.to_vscode_clickable_link(p));
		}
		if(this.has(stx_log_core_FormatSum.INCLUDE_NEWLINE_FOR_DETAIL)) {
			a.push("\n");
		}
		if(this.has(stx_log_core_FormatSum.INCLUDE_DETAIL)) {
			a.push(stx_log_core_Entry.toString(value.detail));
		}
		return a.join(" ");
	}
	,__class__: stx_log_core_FormatCls
};
var stx_log_core_FormatSum = $hxEnums["stx.log.core.FormatSum"] = { __ename__:"stx.log.core.FormatSum",__constructs__:null
	,INCLUDE_LEVEL: {_hx_name:"INCLUDE_LEVEL",_hx_index:0,__enum__:"stx.log.core.FormatSum",toString:$estr}
	,INCLUDE_TIMESTAMP: {_hx_name:"INCLUDE_TIMESTAMP",_hx_index:1,__enum__:"stx.log.core.FormatSum",toString:$estr}
	,INCLUDE_TAGS: {_hx_name:"INCLUDE_TAGS",_hx_index:2,__enum__:"stx.log.core.FormatSum",toString:$estr}
	,INCLUDE_LOCATION: {_hx_name:"INCLUDE_LOCATION",_hx_index:3,__enum__:"stx.log.core.FormatSum",toString:$estr}
	,INCLUDE_NEWLINE_FOR_DETAIL: {_hx_name:"INCLUDE_NEWLINE_FOR_DETAIL",_hx_index:4,__enum__:"stx.log.core.FormatSum",toString:$estr}
	,INCLUDE_DETAIL: {_hx_name:"INCLUDE_DETAIL",_hx_index:5,__enum__:"stx.log.core.FormatSum",toString:$estr}
};
stx_log_core_FormatSum.__constructs__ = [stx_log_core_FormatSum.INCLUDE_LEVEL,stx_log_core_FormatSum.INCLUDE_TIMESTAMP,stx_log_core_FormatSum.INCLUDE_TAGS,stx_log_core_FormatSum.INCLUDE_LOCATION,stx_log_core_FormatSum.INCLUDE_NEWLINE_FOR_DETAIL,stx_log_core_FormatSum.INCLUDE_DETAIL];
var stx_log_Facade = {};
stx_log_Facade.get_instance = function() {
	if(stx_log_Facade.instance == null) {
		return stx_log_Facade.instance = new stx_log_logger_Unit();
	} else {
		return stx_log_Facade.instance;
	}
};
stx_log_Facade._new = function() {
	var this1 = stx_log_Facade.get_instance();
	return this1;
};
stx_log_Facade.unit = function() {
	return stx_log_Facade._new();
};
stx_log_Facade.toLoggerApi = function(this1) {
	return this1;
};
var stx_log__$Signal_SignalCls = function() {
	this.handlers = [];
};
stx_log__$Signal_SignalCls.__name__ = "stx.log._Signal.SignalCls";
stx_log__$Signal_SignalCls.prototype = {
	handlers: null
	,handle: function(fn) {
		this.handlers.push(fn);
	}
	,trigger: function(v) {
		var _g = 0;
		var _g1 = this.handlers;
		while(_g < _g1.length) {
			var handle = _g1[_g];
			++_g;
			handle(v);
		}
	}
	,attach: function(logger) {
		stx_log_Signal.has_custom = true;
		this.handle(function(x) {
			var o = (logger.apply(x))(stx_log_Logger.spur);
		});
	}
	,__class__: stx_log__$Signal_SignalCls
};
var stx_log_Signal = {};
stx_log_Signal.get_instance = function() {
	return stx_nano_lift_LiftNano.if_else(stx_log_Signal.instance == null,function() {
		return stx_log_Signal.instance = new stx_log__$Signal_SignalCls();
	},function() {
		return stx_log_Signal.instance;
	});
};
stx_log_Signal._new = function() {
	var this1 = stx_log_Signal.get_instance();
	return this1;
};
stx_log_Signal.handle = function(this1,x) {
	stx_log_Signal.has_custom = true;
	this1.handle(x);
};
stx_log_Signal.transmit = function(v) {
	stx_log_Signal.get_instance().trigger(v);
};
var stx_log_LogPosition = {};
stx_log_LogPosition.lift = function(pos) {
	return stx_log_LogPosition._new(pos);
};
stx_log_LogPosition.fromPos = function(pos) {
	return stx_log_LogPosition._new(pos);
};
stx_log_LogPosition._new = function(self) {
	var this1 = self;
	return this1;
};
stx_log_LogPosition.is_runtime = function() {
	return true;
};
stx_log_LogPosition.pure = function(pos) {
	return stx_log_LogPosition._new(pos);
};
stx_log_LogPosition.get_stamp = function(this1) {
	return stx_log_LogCustomParameters.get_stamp(stx_log_LogPosition.get_customParams(this1));
};
stx_log_LogPosition.restamp = function(this1,fn) {
	return stx_log_LogPosition.lift(stx_log_LogPosition.copy(this1,null,null,null,null,stx_log_LogCustomParameters.restamp(stx_log_LogPosition.get_customParams(this1),fn)));
};
stx_log_LogPosition.copy = function(this1,fileName,className,methodName,lineNumber,customParams) {
	var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,fileName);
	var tmp;
	if(self._hx_index == 0) {
		var v = self.v;
		tmp = v;
	} else {
		tmp = this1.fileName;
	}
	var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,className);
	var tmp1;
	if(self._hx_index == 0) {
		var v = self.v;
		tmp1 = v;
	} else {
		tmp1 = this1.className;
	}
	var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,methodName);
	var tmp2;
	if(self._hx_index == 0) {
		var v = self.v;
		tmp2 = v;
	} else {
		tmp2 = this1.methodName;
	}
	var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,lineNumber);
	var tmp3;
	if(self._hx_index == 0) {
		var v = self.v;
		tmp3 = v;
	} else {
		tmp3 = this1.lineNumber;
	}
	var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,customParams);
	var tmp4;
	if(self._hx_index == 0) {
		var v = self.v;
		tmp4 = v;
	} else {
		tmp4 = this1.customParams;
	}
	return stx_log_LogPosition.lift({ fileName : tmp, className : tmp1, methodName : tmp2, lineNumber : tmp3, customParams : tmp4});
};
stx_log_LogPosition.get_customParams = function(this1) {
	return stx_nano_lift_LiftNano.if_else(stx_pico_OptionLift.is_defined(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,this1.customParams)),function() {
		return this1.customParams;
	},function() {
		this1.customParams = stx_log_LogCustomParameters._new();
		return this1.customParams;
	});
};
stx_log_LogPosition.get_scoping = function(this1) {
	return new stx_log_Scoping(this1.methodName,this1.className,this1.fileName);
};
stx_log_LogPosition.match = function(this1,race) {
	switch(race.scope._hx_index) {
	case 0:
		return this1.methodName == race.scoping.method;
	case 1:
		return this1.className == race.scoping.type;
	case 2:
		return this1.fileName == race.scoping.module;
	}
};
stx_log_LogPosition.prj = function(this1) {
	return this1;
};
stx_log_LogPosition.get_fileName = function(this1) {
	return this1.fileName;
};
stx_log_LogPosition.get_lineNumber = function(this1) {
	return this1.lineNumber;
};
stx_log_LogPosition.get_methodName = function(this1) {
	return this1.methodName;
};
stx_log_LogPosition.re_methodName = function(this1,method) {
	return stx_log_LogPosition.copy(this1,null,null,method);
};
stx_log_LogPosition.re_lineNumber = function(this1,n) {
	return stx_log_LogPosition.copy(this1,null,null,null,n);
};
var stx_log_Value = function(detail,source) {
	this.detail = detail;
	this.source = source;
};
stx_log_Value.__name__ = "stx.log.Value";
stx_log_Value.make = function(detail,source) {
	return new stx_log_Value(detail,source);
};
stx_log_Value.prototype = {
	detail: null
	,stamp: null
	,get_stamp: function() {
		return stx_log_LogPosition.get_stamp(this.source);
	}
	,source: null
	,restamp: function(fn) {
		var next = stx_log_LogPosition.restamp(this.source,fn);
		return new stx_log_Value(this.detail,next);
	}
	,__class__: stx_log_Value
};
var stx_LogLift = function() { };
stx_LogLift.__name__ = "stx.LogLift";
stx_LogLift.Filter = function() {
	return stx_log_Filter;
};
stx_LogLift.Facade = function() {
	return stx_log_Facade._new();
};
stx_LogLift.Logic = function() {
	return stx_log_Logic._.make();
};
var stx_Log = {};
stx_Log.LOG = function(value,pos) {
	stx_log_Signal.transmit(stx_Log.enlog(value,pos));
};
stx_Log.unit = function() {
	var this1 = stx_Log.LOG;
	return this1;
};
stx_Log.enlog = function(value,pos) {
	var log_position = stx_log_LogPosition.pure(pos);
	var value1 = new stx_log_Value(value,log_position);
	return value1;
};
stx_Log.make = function(fn) {
	return function(value,pos) {
		fn(stx_Log.enlog(value,pos));
	};
};
stx_Log._new = function() {
	var this1 = stx_Log.LOG;
	return this1;
};
stx_Log.level = function(this1,level) {
	var this2 = this1;
	var fn = function(pos) {
		return stx_log_LogPosition.restamp(pos,function(stamp) {
			return stamp.relevel(level);
		});
	};
	return function(value,pos) {
		this2(value,fn(pos));
	};
};
stx_Log.trace = function(this1,v,pos) {
	var this2 = this1;
	var fn = function(pos) {
		return stx_log_LogPosition.restamp(pos,function(stamp) {
			return stamp.relevel(1);
		});
	};
	(function(value,pos) {
		this2(value,fn(pos));
	})(v(new stx_log_EntryCtr()),pos);
};
stx_Log.debug = function(this1,v,pos) {
	var this2 = this1;
	var fn = function(pos) {
		return stx_log_LogPosition.restamp(pos,function(stamp) {
			return stamp.relevel(2);
		});
	};
	(function(value,pos) {
		this2(value,fn(pos));
	})(v(new stx_log_EntryCtr()),pos);
};
stx_Log.info = function(this1,v,pos) {
	var this2 = this1;
	var fn = function(pos) {
		return stx_log_LogPosition.restamp(pos,function(stamp) {
			return stamp.relevel(3);
		});
	};
	(function(value,pos) {
		this2(value,fn(pos));
	})(v(new stx_log_EntryCtr()),pos);
};
stx_Log.warn = function(this1,v,pos) {
	var this2 = this1;
	var fn = function(pos) {
		return stx_log_LogPosition.restamp(pos,function(stamp) {
			return stamp.relevel(4);
		});
	};
	(function(value,pos) {
		this2(value,fn(pos));
	})(v(new stx_log_EntryCtr()),pos);
};
stx_Log.error = function(this1,v,pos) {
	var this2 = this1;
	var fn = function(pos) {
		return stx_log_LogPosition.restamp(pos,function(stamp) {
			return stamp.relevel(5);
		});
	};
	(function(value,pos) {
		this2(value,fn(pos));
	})(v(new stx_log_EntryCtr()),pos);
};
stx_Log.fatal = function(this1,v,pos) {
	var this2 = this1;
	var fn = function(pos) {
		return stx_log_LogPosition.restamp(pos,function(stamp) {
			return stamp.relevel(6);
		});
	};
	(function(value,pos) {
		this2(value,fn(pos));
	})(v(new stx_log_EntryCtr()),pos);
};
stx_Log.mod = function(this1,fn) {
	return function(value,pos) {
		this1(value,fn(pos));
	};
};
stx_Log.tag = function(this1,tag) {
	var this2 = this1;
	var fn = function(pos) {
		return stx_log_LogPosition.restamp(pos,function(stamp) {
			return stamp.tag(tag);
		});
	};
	return function(value,pos) {
		this2(value,fn(pos));
	};
};
stx_Log.close = function(this1) {
	var this2 = this1;
	var fn = function(pos) {
		return stx_log_LogPosition.restamp(pos,function(stamp) {
			return stamp.hide();
		});
	};
	return function(value,pos) {
		this2(value,fn(pos));
	};
};
stx_Log.through = function(this1,ctr,pos) {
	var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,ctr);
	if(self._hx_index == 0) {
		var v = self.v;
		ctr = v;
	} else {
		ctr = stx_log_StringCtr.unit();
	}
	return function(v) {
		this1(stx_log_StringCtr.capture(ctr,v),pos);
		return v;
	};
};
stx_Log.printer = function(this1,ctr,pos) {
	var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,ctr);
	if(self._hx_index == 0) {
		var v = self.v;
		ctr = v;
	} else {
		ctr = stx_log_StringCtr.unit();
	}
	return function(v) {
		this1(stx_log_StringCtr.capture(ctr,v),pos);
	};
};
var stx_Tup2 = $hxEnums["stx.Tup2"] = { __ename__:"stx.Tup2",__constructs__:null
	,tuple2: ($_=function(l,r) { return {_hx_index:0,l:l,r:r,__enum__:"stx.Tup2",toString:$estr}; },$_._hx_name="tuple2",$_.__params__ = ["l","r"],$_)
};
stx_Tup2.__constructs__ = [stx_Tup2.tuple2];
var stx_Tup2Lift = function() { };
stx_Tup2Lift.__name__ = "stx.Tup2Lift";
stx_Tup2Lift.cat = function(self,fn) {
	var l = self.l;
	var r = self.r;
	return fn(l,r);
};
stx_Tup2Lift.fst = function(self) {
	var l = self.l;
	var r = self.r;
	return l;
};
stx_Tup2Lift.snd = function(self) {
	var l = self.l;
	var r = self.r;
	return r;
};
var stx_Tup3 = $hxEnums["stx.Tup3"] = { __ename__:"stx.Tup3",__constructs__:null
	,tuple3: ($_=function(tI,tII,tIII) { return {_hx_index:0,tI:tI,tII:tII,tIII:tIII,__enum__:"stx.Tup3",toString:$estr}; },$_._hx_name="tuple3",$_.__params__ = ["tI","tII","tIII"],$_)
};
stx_Tup3.__constructs__ = [stx_Tup3.tuple3];
var stx_LiftPos = function() { };
stx_LiftPos.__name__ = "stx.LiftPos";
stx_LiftPos.lift = function(pos) {
	return stx_nano_Position._new(pos);
};
var stx_LiftArrayClassWithUnderscore = function() { };
stx_LiftArrayClassWithUnderscore.__name__ = "stx.LiftArrayClassWithUnderscore";
stx_LiftArrayClassWithUnderscore.graft = function(clazz) {
	return stx_lift_ArrayLift;
};
var stx_LiftFutureToSlot = function() { };
stx_LiftFutureToSlot.__name__ = "stx.LiftFutureToSlot";
stx_LiftFutureToSlot.toSlot = function(ft,pos) {
	return stx_nano_Slot.Guard(ft,pos);
};
var stx_LiftLazyFutureToSlot = function() { };
stx_LiftLazyFutureToSlot.__name__ = "stx.LiftLazyFutureToSlot";
stx_LiftLazyFutureToSlot.toSlot = function(fn) {
	return stx_nano_Slot.Guard(fn(),{ fileName : "stx/Nano.hx", lineNumber : 163, className : "stx.LiftLazyFutureToSlot", methodName : "toSlot"});
};
var stx_FPath = {};
stx_FPath.lift = function(self) {
	return stx_FPath._new(self);
};
stx_FPath._new = function(self) {
	var this1 = self;
	return this1;
};
stx_FPath.pure = function(str) {
	return stx_FPath._new(str);
};
stx_FPath.into = function(this1,str) {
	return stx_FPath.lift(stx_nano_lift_LiftNano.if_else(stx_FPath.has_end_slash(this1),function() {
		return "" + this1 + str;
	},function() {
		return "" + this1 + "/" + str;
	}));
};
stx_FPath.trim_end_slash = function(this1) {
	return stx_nano_lift_LiftNano.if_else(stx_FPath.has_end_slash(this1),function() {
		return stx_FPath.lift(stx_nano_CharsLift.rdropn(this1,1));
	},function() {
		return stx_FPath.lift(this1);
	});
};
stx_FPath.has_end_slash = function(this1) {
	return StringTools.endsWith(this1,"/");
};
stx_FPath.is_absolute = function(this1) {
	return StringTools.startsWith(this1,"/");
};
stx_FPath.fromString = function(str) {
	return stx_FPath.lift(str);
};
stx_FPath.toString = function(this1) {
	return this1;
};
stx_FPath.toArray = function(this1) {
	var splut = this1.split("/");
	if(stx_FPath.is_absolute(this1)) {
		splut.shift();
	}
	if(stx_FPath.has_end_slash(this1)) {
		splut.pop();
	}
	return splut;
};
stx_FPath.head = function(this1) {
	return stx_lift_ArrayLift.head(stx_FPath.toArray(this1));
};
stx_FPath.prj = function(this1) {
	return this1;
};
var stx_Show = function() { };
stx_Show.__name__ = "stx.Show";
stx_Show.show = function(wildcard,v) {
	return (stx_Show.make(v))(v);
};
stx_Show.__show__ = function(impl) {
	return function(v) {
		if(null == v) {
			return "null";
		} else {
			return impl(v);
		}
	};
};
stx_Show.make = function(t) {
	return stx_Show.make0(Type.typeof(t));
};
stx_Show.make0 = function(v) {
	switch(v._hx_index) {
	case 0:
		return stx__$Show_NullShow.toString;
	case 1:
		return stx_Show.__show__(stx__$Show_IntShow.toString);
	case 2:
		return stx_Show.__show__(stx__$Show_FloatShow.toString);
	case 3:
		return stx_Show.__show__(stx__$Show_BoolShow.toString);
	case 4:
		return stx_Show.__show__(stx__$Show_ObjectShow.toString);
	case 5:
		return stx_Show.__show__(function(v) {
			return "<function>";
		});
	case 6:
		var _g = v.c;
		var c = _g;
		if(c == String) {
			return stx_Show.__show__(Std.string);
		} else {
			var c = _g;
			if(c == Array) {
				return stx_Show.__show__(stx__$Show_ArrayShow.toString);
			} else {
				var c = _g;
				if(c == haxe_ds_List) {
					return stx_Show.__show__(stx__$Show_ListShow.toString);
				} else {
					var c = _g;
					if(HxOverrides.remove(Type.getInstanceFields(c),"toString")) {
						return stx_Show.__show__(function(v) {
							return Reflect.field(v,"toString").apply(v,[]);
						});
					} else {
						return stx_Show.__show__(function(v) {
							var c = js_Boot.getClass(v);
							return c.__name__;
						});
					}
				}
			}
		}
		break;
	case 7:
		var _g = v.e;
		return stx_Show.__show__(stx__$Show_EnumShow.toString);
	case 8:
		return stx_Show.__show__(function(v) {
			return "<unknown>";
		});
	}
};
var stx__$Show_ListShow = function() { };
stx__$Show_ListShow.__name__ = "stx._Show.ListShow";
stx__$Show_ListShow.toString = function(lst) {
	return stx__$Show_IterableShow.toString(lst);
};
var stx__$Show_NullShow = function() { };
stx__$Show_NullShow.__name__ = "stx._Show.NullShow";
stx__$Show_NullShow.toString = function(v) {
	return "null";
};
var stx__$Show_EnumShow = function() { };
stx__$Show_EnumShow.__name__ = "stx._Show.EnumShow";
stx__$Show_EnumShow.toString = function(v) {
	var e = v;
	var buf = $hxEnums[e.__enum__].__constructs__[e._hx_index]._hx_name;
	var params = Type.enumParameters(v);
	if(params.length == 0) {
		return buf;
	} else {
		buf += "(";
		var _g = 0;
		var _g1 = params.length;
		while(_g < _g1) {
			var i = _g++;
			var p = params[i];
			buf += (stx_Show.make(p))(p);
			if(i < params.length - 1) {
				buf += ", ";
			}
		}
		buf += ")";
		return buf;
	}
};
var stx__$Show_ObjectShow = function() { };
stx__$Show_ObjectShow.__name__ = "stx._Show.ObjectShow";
stx__$Show_ObjectShow.toString = function(v) {
	if(Reflect.fields(v).length == 0) {
		return Std.string(v);
	}
	var buf = [];
	var _g = 0;
	var _g1 = Reflect.fields(v);
	while(_g < _g1.length) {
		var k = _g1[_g];
		++_g;
		var i = Reflect.field(v,k);
		buf.push(k + ":" + (stx_Show.make(i))(i));
	}
	return "{" + buf.join(",") + "}";
};
var stx__$Show_ArrayShow = function() { };
stx__$Show_ArrayShow.__name__ = "stx._Show.ArrayShow";
stx__$Show_ArrayShow.toString = function(v) {
	return stx__$Show_ArrayShow.toStringWith(v,stx_Show.make(v[0]));
};
stx__$Show_ArrayShow.toStringWith = function(v,show) {
	var result = new Array(v.length);
	var _g = 0;
	var _g1 = v.length;
	while(_g < _g1) {
		var i = _g++;
		result[i] = show(v[i]);
	}
	return "[" + result.join(", ") + "]";
};
stx__$Show_ArrayShow.mkString = function(arr,sep,show) {
	if(sep == null) {
		sep = ", ";
	}
	var isFirst = true;
	return Lambda.fold(arr,function(b,a) {
		var prefix;
		if(isFirst) {
			isFirst = false;
			prefix = "";
		} else {
			prefix = sep;
		}
		if(null == show) {
			show = stx_Show.make(b);
		}
		return a + prefix + show(b);
	},"");
};
var stx__$Show_IterableShow = function() { };
stx__$Show_IterableShow.__name__ = "stx._Show.IterableShow";
stx__$Show_IterableShow.toString = function(i,show,prefix,suffix,sep) {
	if(sep == null) {
		sep = ", ";
	}
	if(suffix == null) {
		suffix = ")";
	}
	if(prefix == null) {
		prefix = "(";
	}
	return stx__$Show_IterableShow.mkString(i,show,prefix,suffix,sep);
};
stx__$Show_IterableShow.mkString = function(i,show,prefix,suffix,sep) {
	if(sep == null) {
		sep = ", ";
	}
	if(suffix == null) {
		suffix = ")";
	}
	if(prefix == null) {
		prefix = "(";
	}
	if(show == null) {
		show = Std.string;
	}
	var s = prefix;
	var isFirst = true;
	var t = $getIterator(i);
	while(t.hasNext()) {
		var t1 = t.next();
		if(isFirst) {
			isFirst = false;
		} else {
			s += sep;
		}
		s += show(t1);
	}
	return s + suffix;
};
var stx__$Show_IntShow = function() { };
stx__$Show_IntShow.__name__ = "stx._Show.IntShow";
stx__$Show_IntShow.toString = function(v) {
	return "" + v;
};
var stx__$Show_FloatShow = function() { };
stx__$Show_FloatShow.__name__ = "stx._Show.FloatShow";
stx__$Show_FloatShow.toString = function(v) {
	return "" + v;
};
var stx__$Show_StackItemShow = function() { };
stx__$Show_StackItemShow.__name__ = "stx._Show.StackItemShow";
stx__$Show_StackItemShow.toString = function(s) {
	switch(s._hx_index) {
	case 0:
		return "function";
	case 1:
		var m = s.m;
		return m;
	case 2:
		var _g = s.file;
		var _g = s.column;
		var si = s.s;
		var line = s.line;
		return stx__$Show_StackItemShow.toString(si) + (":" + line);
	case 3:
		var classname = s.classname;
		var method = s.method;
		return "" + classname + "." + method;
	case 4:
		var v = s.v;
		return "@" + v;
	}
};
var stx__$Show_BoolShow = function() { };
stx__$Show_BoolShow.__name__ = "stx._Show.BoolShow";
stx__$Show_BoolShow.toString = function(v) {
	if(v) {
		return "true";
	} else {
		return "false";
	}
};
var stx_nano_Err = function(data,prev,pos) {
	this.data = data;
	var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,prev);
	var tmp;
	if(self._hx_index == 0) {
		var v = self.v;
		tmp = v;
	} else {
		tmp = haxe_ds_Option.None;
	}
	this.prev = tmp;
	this.pos = pos;
};
stx_nano_Err.__name__ = "stx.nano.Err";
stx_nano_Err.fromTinkError = function(err) {
	return new stx_nano_Err(stx_pico_Option.fromNullT(stx_nano_FailureSum.ERR(stx_nano_FailCode.fromString(err.message))),null,err.pos);
};
stx_nano_Err.grow = function(arr,pos) {
	return stx_lift_ArrayLift.lfold(stx_lift_ArrayLift.tail(arr),function(next,memo) {
		return new stx_nano_Err(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,stx_nano_FailureSum.ERR_OF(next)),haxe_ds_Option.Some(memo),pos);
	},new stx_nano_Err(stx_pico_OptionLift.map(stx_lift_ArrayLift.head(arr),stx_nano_FailureSum.ERR_OF),haxe_ds_Option.None,pos));
};
stx_nano_Err.prototype = {
	uuid: null
	,get_uuid: function() {
		return stx_nano_Err.UUID;
	}
	,prev: null
	,data: null
	,pos: null
	,errate: function(fn) {
		return this.map(fn);
	}
	,map: function(fn) {
		var next_data = stx_pico_OptionLift.map(this.data,function(t) {
			switch(t._hx_index) {
			case 0:
				var t1 = t.v;
				return stx_nano_FailureSum.ERR_OF(fn(t1));
			case 1:
				var spec = t.spec;
				return stx_nano_FailureSum.ERR(spec);
			}
		});
		var next_prev;
		var _g = this.prev;
		if(_g == null) {
			next_prev = haxe_ds_Option.None;
		} else if(_g._hx_index == 0) {
			var err = _g.v;
			next_prev = haxe_ds_Option.Some(err.map(fn));
		} else {
			next_prev = haxe_ds_Option.None;
		}
		return new stx_nano_Err(next_data,next_prev,this.pos);
	}
	,copy: function(data,prev,pos) {
		var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,data);
		var tmp;
		if(self._hx_index == 0) {
			var v = self.v;
			tmp = v;
		} else {
			tmp = this.data;
		}
		var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,prev);
		var tmp1;
		if(self._hx_index == 0) {
			var v = self.v;
			tmp1 = v;
		} else {
			tmp1 = this.prev;
		}
		var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,pos);
		var tmp2;
		if(self._hx_index == 0) {
			var v = self.v;
			tmp2 = v;
		} else {
			tmp2 = this.pos;
		}
		return new stx_nano_Err(tmp,tmp1,tmp2);
	}
	,last: function() {
		var self = this;
		while(self.prev != haxe_ds_Option.None) {
			var _g = self.prev;
			if(_g._hx_index == 0) {
				var last = _g.v;
				self = last;
			} else {
				break;
			}
		}
		return self;
	}
	,next: function(that) {
		return this.merge(that);
	}
	,merge: function(that) {
		var last = that.copy(null,null,{ fileName : "stx/nano/Err.hx", lineNumber : 66, className : "stx.nano.Err", methodName : "merge"});
		var stack = [];
		while(stx_pico_OptionLift.is_defined(last.prev)) {
			stack.push(stx_pico_OptionLift.fudge(last.prev));
			last = stx_pico_OptionLift.fudge(last.prev);
		}
		var next = Lambda.fold(stack,function(next,memo) {
			return next.copy(null,stx_pico_Option.fromNullT(memo),{ fileName : "stx/nano/Err.hx", lineNumber : 73, className : "stx.nano.Err", methodName : "merge"});
		},this);
		return next;
	}
	,head: function() {
		var _g = this.data;
		if(_g._hx_index == 0) {
			var _g1 = _g.v;
			if(_g1._hx_index == 0) {
				var v = _g1.v;
				return haxe_ds_Option.Some(v);
			} else {
				return haxe_ds_Option.None;
			}
		} else {
			return haxe_ds_Option.None;
		}
	}
	,fault: function() {
		return this.pos;
	}
	,toString: function() {
		var p = stx_nano_PositionLift.toStringClassMethodLine(stx_nano_Position.fromPos(this.pos));
		var e = stx_pico_Option.toString(this.data);
		return "" + e + " at (" + p + ")";
	}
	,iterator: function() {
		var cursor = haxe_ds_Option.Some(this);
		return { hasNext : function() {
			return stx_pico_OptionLift.is_defined(cursor);
		}, next : function() {
			var value = stx_nano_lift_LiftOptionNano.fudge(cursor);
			cursor = value.prev;
			return value;
		}};
	}
	,value: function() {
		return stx_pico_OptionLift.flat_map(this.data,function(f) {
			return stx_nano_FailureLift.fold(f,haxe_ds_Option.Some,function(_) {
				return haxe_ds_Option.None;
			});
		});
	}
	,elide: function() {
		return this.map(function(v) {
			return v;
		});
	}
	,report: function() {
		return stx_nano_Report.pure(this);
	}
	,alert: function() {
		return stx_nano_Report.alert(this.report());
	}
	,__class__: stx_nano_Err
};
var stx_assert_AssertError = function(data,prev,pos) {
	stx_nano_Err.call(this,data,prev,pos);
};
stx_assert_AssertError.__name__ = "stx.assert.AssertError";
stx_assert_AssertError.__super__ = stx_nano_Err;
stx_assert_AssertError.prototype = $extend(stx_nano_Err.prototype,{
	__class__: stx_assert_AssertError
});
var stx_assert_AssertionApi = function() { };
stx_assert_AssertionApi.__name__ = "stx.assert.AssertionApi";
stx_assert_AssertionApi.__isInterface__ = true;
stx_assert_AssertionApi.prototype = {
	applyII: null
	,asAssertionApi: null
	,__class__: stx_assert_AssertionApi
};
var stx_assert_Assertion = {};
stx_assert_Assertion.crunchII = function(this1,l,r) {
	stx_nano_ReportLift.fold(this1.applyII(l,r),function(e) {
		throw haxe_Exception.thrown(e);
	},function() {
	});
};
stx_assert_Assertion.ok = function(this1,l,r) {
	return !stx_nano_ReportLift.is_defined(this1.applyII(l,r));
};
stx_assert_Assertion.bindI = function(this1,l) {
	return new stx_assert_predicate_term_AssertionPredicate(this1,l);
};
stx_assert_Assertion.equals = function(pos) {
	return new stx_assert_assertion_term_Equals(pos);
};
stx_assert_Assertion.alike = function(pos) {
	return new stx_assert_assertion_term_Alike(pos);
};
stx_assert_Assertion.gt = function(pos) {
	return new stx_assert_assertion_term_GreaterThan(pos);
};
stx_assert_Assertion.gt_eq = function(pos) {
	return new stx_assert_assertion_term_GreaterThanOrEquals(pos);
};
stx_assert_Assertion.lt = function(pos) {
	return new stx_assert_assertion_term_LessThan(pos);
};
stx_assert_Assertion.lt_eq = function(pos) {
	return new stx_assert_assertion_term_LessThanOrEquals(pos);
};
stx_assert_Assertion.Anon = function(fn) {
	return new stx_assert_assertion_term_Anon(fn,{ fileName : "stx/assert/Assertion.hx", lineNumber : 47, className : "stx.assert._Assertion.Assertion_Impl_", methodName : "Anon"});
};
stx_assert_Assertion.Errata = function(self,fn) {
	return new stx_assert_assertion_term_Errata(self.asAssertionApi(),fn,{ fileName : "stx/assert/Assertion.hx", lineNumber : 50, className : "stx.assert._Assertion.Assertion_Impl_", methodName : "Errata"});
};
var stx_assert_OrderableApi = function() { };
stx_assert_OrderableApi.__name__ = "stx.assert.OrderableApi";
stx_assert_OrderableApi.__isInterface__ = true;
stx_assert_OrderableApi.prototype = {
	lt: null
	,__class__: stx_assert_OrderableApi
};
var stx_assert_EqualableApi = function() { };
stx_assert_EqualableApi.__name__ = "stx.assert.EqualableApi";
stx_assert_EqualableApi.__isInterface__ = true;
stx_assert_EqualableApi.prototype = {
	eq: null
	,__class__: stx_assert_EqualableApi
};
var stx_assert_ComparableApi = function() { };
stx_assert_ComparableApi.__name__ = "stx.assert.ComparableApi";
stx_assert_ComparableApi.__isInterface__ = true;
stx_assert_ComparableApi.__interfaces__ = [stx_assert_OrderableApi,stx_assert_EqualableApi];
var stx_assert_Comparable = {};
stx_assert_Comparable._new = function(self) {
	var this1 = self;
	return this1;
};
stx_assert_Comparable.Int = function() {
	return new stx_assert_comparable_term_Int();
};
stx_assert_Comparable.String = function() {
	return new stx_assert_comparable_term_String();
};
stx_assert_Comparable.Couple = function(l,r) {
	return new stx_assert_comparable_term_Couple(l,r);
};
stx_assert_Comparable.Primitive = function() {
	return new stx_assert_comparable_term_Primitive();
};
stx_assert_Comparable.Anon = function(eq,lt) {
	return new stx_assert_comparable_term_Anon(eq,lt);
};
var stx_assert_ComparativeSum = $hxEnums["stx.assert.ComparativeSum"] = { __ename__:"stx.assert.ComparativeSum",__constructs__:null
	,GT: {_hx_name:"GT",_hx_index:0,__enum__:"stx.assert.ComparativeSum",toString:$estr}
	,GTEQ: {_hx_name:"GTEQ",_hx_index:1,__enum__:"stx.assert.ComparativeSum",toString:$estr}
	,LT: {_hx_name:"LT",_hx_index:2,__enum__:"stx.assert.ComparativeSum",toString:$estr}
	,LTEQ: {_hx_name:"LTEQ",_hx_index:3,__enum__:"stx.assert.ComparativeSum",toString:$estr}
	,EQ: {_hx_name:"EQ",_hx_index:4,__enum__:"stx.assert.ComparativeSum",toString:$estr}
};
stx_assert_ComparativeSum.__constructs__ = [stx_assert_ComparativeSum.GT,stx_assert_ComparativeSum.GTEQ,stx_assert_ComparativeSum.LT,stx_assert_ComparativeSum.LTEQ,stx_assert_ComparativeSum.EQ];
var stx_assert_Comparative = {};
stx_assert_Comparative._new = function(self) {
	var this1 = self;
	return this1;
};
stx_assert_Comparative.toString = function(this1) {
	switch(this1._hx_index) {
	case 0:
		return ">";
	case 1:
		return ">=";
	case 2:
		return "<";
	case 3:
		return "<=";
	case 4:
		return "==";
	}
};
var stx_assert_Compare = {};
stx_assert_Compare._new = function(self) {
	var this1 = self;
	return this1;
};
stx_assert_Compare.pure = function(v) {
	return stx_assert__$Compare_CompareSum.Value(v);
};
stx_assert_Compare.and = function(this1,that) {
	return stx_assert__$Compare_CompareSum.And(this1,that);
};
stx_assert_Compare.or = function(this1,that) {
	return stx_assert__$Compare_CompareSum.Or(this1,that);
};
stx_assert_Compare.not = function(this1) {
	return stx_assert__$Compare_CompareSum.Not(this1);
};
stx_assert_Compare.gt = function(this1,that) {
	return stx_assert__$Compare_CompareSum.Binop(this1,stx_assert_ComparativeSum.GT,that);
};
stx_assert_Compare.gtEq = function(this1,that) {
	return stx_assert__$Compare_CompareSum.Binop(this1,stx_assert_ComparativeSum.GTEQ,that);
};
stx_assert_Compare.lt = function(this1,that) {
	return stx_assert__$Compare_CompareSum.Binop(this1,stx_assert_ComparativeSum.LT,that);
};
stx_assert_Compare.ltEq = function(this1,that) {
	return stx_assert__$Compare_CompareSum.Binop(this1,stx_assert_ComparativeSum.LTEQ,that);
};
stx_assert_Compare.eq = function(this1,that) {
	return stx_assert__$Compare_CompareSum.Binop(this1,stx_assert_ComparativeSum.EQ,that);
};
stx_assert_Compare.nEq = function(this1,that) {
	return stx_assert__$Compare_CompareSum.Not(stx_assert__$Compare_CompareSum.Binop(this1,stx_assert_ComparativeSum.GTEQ,that));
};
stx_assert_Compare.get_self = function(this1) {
	return this1;
};
var stx_assert__$Compare_CompareSum = $hxEnums["stx.assert._Compare.CompareSum"] = { __ename__:"stx.assert._Compare.CompareSum",__constructs__:null
	,Value: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"stx.assert._Compare.CompareSum",toString:$estr}; },$_._hx_name="Value",$_.__params__ = ["v"],$_)
	,And: ($_=function(l,r) { return {_hx_index:1,l:l,r:r,__enum__:"stx.assert._Compare.CompareSum",toString:$estr}; },$_._hx_name="And",$_.__params__ = ["l","r"],$_)
	,Or: ($_=function(l,r) { return {_hx_index:2,l:l,r:r,__enum__:"stx.assert._Compare.CompareSum",toString:$estr}; },$_._hx_name="Or",$_.__params__ = ["l","r"],$_)
	,Not: ($_=function(e) { return {_hx_index:3,e:e,__enum__:"stx.assert._Compare.CompareSum",toString:$estr}; },$_._hx_name="Not",$_.__params__ = ["e"],$_)
	,Binop: ($_=function(l,op,r) { return {_hx_index:4,l:l,op:op,r:r,__enum__:"stx.assert._Compare.CompareSum",toString:$estr}; },$_._hx_name="Binop",$_.__params__ = ["l","op","r"],$_)
};
stx_assert__$Compare_CompareSum.__constructs__ = [stx_assert__$Compare_CompareSum.Value,stx_assert__$Compare_CompareSum.And,stx_assert__$Compare_CompareSum.Or,stx_assert__$Compare_CompareSum.Not,stx_assert__$Compare_CompareSum.Binop];
var stx_assert_EqApi = function() { };
stx_assert_EqApi.__name__ = "stx.assert.EqApi";
stx_assert_EqApi.__isInterface__ = true;
stx_assert_EqApi.prototype = {
	applyII: null
	,__class__: stx_assert_EqApi
};
var stx_assert_Eq = {};
stx_assert_Eq._new = function(self) {
	var this1 = self;
	return this1;
};
stx_assert_Eq.toAssertion = function(this1,pos) {
	return new stx_assert_eq_term_EqAssertion(this1,pos);
};
stx_assert_Eq.Int = function() {
	return new stx_assert_eq_term_Int();
};
stx_assert_Eq.String = function() {
	return new stx_assert_eq_term_String();
};
stx_assert_Eq.Couple = function(l,r) {
	return new stx_assert_eq_term_Couple(l,r);
};
stx_assert_Eq.Anon = function(fn) {
	return new stx_assert_eq_term_Anon(fn);
};
stx_assert_Eq.Noise = function() {
	return stx_assert_Eq._new(new stx_assert_eq_term_Noise());
};
stx_assert_Eq.Bool = function() {
	return stx_assert_Eq.Anon(function(l,r) {
		if(l == r) {
			return true;
		} else {
			return false;
		}
	});
};
stx_assert_Eq.Float = function() {
	return stx_assert_Eq.Anon(function(l,r) {
		if(l == r) {
			return true;
		} else {
			return false;
		}
	});
};
stx_assert_Eq.Array = function(inner) {
	return new stx_assert_eq_term_Array(inner);
};
stx_assert_Eq.Primitive = function() {
	return new stx_assert_eq_term_Primitive();
};
stx_assert_Eq.Option = function(inner) {
	return new stx_assert_eq_term_Option(inner);
};
var stx_assert_Equal = function() { };
stx_assert_Equal.__name__ = "stx.assert.Equal";
stx_assert_Equal.getEqualFor = function(v) {
	return stx_assert_Equal.getEqualForType(Type.typeof(v));
};
stx_assert_Equal.getEqualForType = function(v) {
	var tmp;
	switch(v._hx_index) {
	case 0:
		tmp = new stx_assert_eq_term_Null();
		break;
	case 1:
		tmp = new stx_assert_eq_term_Int();
		break;
	case 2:
		tmp = new stx_assert_eq_term_Float();
		break;
	case 3:
		tmp = new stx_assert_eq_term_Bool();
		break;
	case 4:
		tmp = new stx_assert_eq_term_Object();
		break;
	case 5:
		tmp = new stx_assert_eq_term_Function();
		break;
	case 6:
		var _g = v.c;
		var c = _g;
		if(c == haxe_ds_StringMap) {
			tmp = new stx_assert_eq_term_Map(new stx_assert_eq_term_Deferred());
		} else {
			var c = _g;
			if(c == stx_assert_eq_term_Array) {
				tmp = new stx_assert_eq_term_Array(new stx_assert_eq_term_Deferred());
			} else {
				var c = _g;
				if(c == stx_assert_eq_term_Date) {
					tmp = new stx_assert_eq_term_Date();
				} else {
					var c = _g;
					if(c == stx_assert_eq_term_String) {
						tmp = new stx_assert_eq_term_String();
					} else {
						var c = _g;
						tmp = HxOverrides.remove(Type.getInstanceFields(c),"equals") ? new stx_assert_eq_term_HasFunction().elide() : new stx_assert_eq_term_UnsupportedClass();
					}
				}
			}
		}
		break;
	case 7:
		var _g = v.e;
		tmp = new stx_assert_eq_term_Enum();
		break;
	case 8:
		tmp = new stx_assert_eq_term_Unknown();
		break;
	}
	return new stx_assert_eq_term_NotNull(tmp);
};
var stx_assert_Equalable = {};
stx_assert_Equalable._new = function(self) {
	var this1 = self;
	return this1;
};
var stx_assert_EqualedSum = {};
stx_assert_EqualedSum.ok = function(this1) {
	return this1;
};
stx_assert_EqualedSum.and = function(this1,that) {
	return stx_assert_Equaled.fromBool(this1 && stx_assert_EqualedSum.ok(that));
};
var stx_assert_Equaled = {};
stx_assert_Equaled.fromBool = function(b) {
	if(b) {
		return stx_assert_Equaled.AreEqual;
	} else {
		return stx_assert_Equaled.NotEqual;
	}
};
stx_assert_Equaled.and = function(this1,that) {
	return stx_assert_Equaled.fromBool(stx_assert_Equaled.toBool(this1) && stx_assert_Equaled.toBool(that));
};
stx_assert_Equaled.toBool = function(this1) {
	if(this1) {
		return true;
	} else {
		return false;
	}
};
stx_assert_Equaled.or = function(this1,that) {
	return stx_assert_Equaled.fromBool(stx_assert_Equaled.toBool(this1) || stx_assert_Equaled.toBool(that));
};
stx_assert_Equaled.not = function(this1) {
	if(this1) {
		return false;
	} else {
		return true;
	}
};
var stx_pico_Clazz = $hx_exports["stx"]["Clazz"] = function() {
};
stx_pico_Clazz.__name__ = "stx.pico.Clazz";
stx_pico_Clazz.prototype = {
	definition: function() {
		return js_Boot.getClass(this);
	}
	,identifier: function() {
		var c = js_Boot.getClass(this);
		return stx_pico_Identifier._new(c.__name__);
	}
	,__class__: stx_pico_Clazz
};
var stx_assert_Module = function(pos) {
	stx_pico_Clazz.call(this);
	this.pos = pos;
};
stx_assert_Module.__name__ = "stx.assert.Module";
stx_assert_Module.__super__ = stx_pico_Clazz;
stx_assert_Module.prototype = $extend(stx_pico_Clazz.prototype,{
	pos: null
	,equals: function() {
		return stx_assert_Assertion.equals(this.pos);
	}
	,alike: function() {
		return new stx_assert_assertion_term_Alike(this.pos);
	}
	,gt: function() {
		return stx_assert_Assertion.gt(this.pos);
	}
	,gt_eq: function() {
		return new stx_assert_assertion_term_GreaterThanOrEquals(this.pos);
	}
	,lt: function() {
		return new stx_assert_assertion_term_LessThan(this.pos);
	}
	,lt_eq: function() {
		return new stx_assert_assertion_term_LessThanOrEquals(this.pos);
	}
	,always: function() {
		return stx_assert_Predicate.always(this.pos);
	}
	,never: function() {
		return stx_assert_Predicate.never(this.pos);
	}
	,iz: function(clazz) {
		return new stx_assert_predicate_term_Is(clazz,this.pos);
	}
	,throws: function() {
		return new stx_assert_predicate_term_Throws(this.pos);
	}
	,'void': function() {
		return new stx_assert_predicate_term_Void(this.pos);
	}
	,exists: function() {
		return new stx_assert_predicate_term_Exists(this.pos);
	}
	,matches: function(reg,opt) {
		return new stx_assert_predicate_term_Matches(this.pos,reg,opt,{ fileName : "stx/assert/Predicate.hx", lineNumber : 47, className : "stx.assert._Predicate.Predicate_Impl_", methodName : "matches"});
	}
	,ands: function(self,rest) {
		return stx_assert_Predicate._.ands(self,rest);
	}
	,ors: function(self,rest) {
		return stx_assert_Predicate._.ors(self,rest);
	}
	,and: function(self,that) {
		return stx_assert_Predicate._.and(self,that);
	}
	,or: function(self,that) {
		return stx_assert_Predicate._.or(self,that);
	}
	,xor: function(self,that) {
		return stx_assert_Predicate._.xor(self,that);
	}
	,not: function(self) {
		return stx_assert_Predicate._.not(self);
	}
	,__class__: stx_assert_Module
});
var stx_assert_OrdApi = function() { };
stx_assert_OrdApi.__name__ = "stx.assert.OrdApi";
stx_assert_OrdApi.__isInterface__ = true;
stx_assert_OrdApi.prototype = {
	applyII: null
	,__class__: stx_assert_OrdApi
};
var stx_assert_Ord = {};
stx_assert_Ord._new = function(self) {
	var this1 = self;
	return this1;
};
stx_assert_Ord.toAssertion = function(this1) {
	return new stx_assert_ord_term_OrdAssertion(this1,{ fileName : "stx/assert/Ord.hx", lineNumber : 22, className : "stx.assert._Ord.Ord_Impl_", methodName : "toAssertion"}).asAssertionApi();
};
stx_assert_Ord.Int = function() {
	return new stx_assert_ord_term_Int();
};
stx_assert_Ord.Float = function() {
	return new stx_assert_ord_term_Float();
};
stx_assert_Ord.String = function() {
	return new stx_assert_ord_term_String();
};
stx_assert_Ord.Couple = function(l,r) {
	return new stx_assert_ord_term_Couple(l,r);
};
stx_assert_Ord.Anon = function(fn) {
	return new stx_assert_ord_term_Anon(fn);
};
stx_assert_Ord.Bool = function() {
	return stx_assert_Ord.Anon(function(lhs,rhs) {
		if(lhs == rhs) {
			return false;
		} else if(lhs == false) {
			return true;
		} else {
			return false;
		}
	});
};
stx_assert_Ord.Primitive = function() {
	return new stx_assert_ord_term_Primitive();
};
stx_assert_Ord.Array = function(inner) {
	return new stx_assert_ord_term_Array(inner);
};
stx_assert_Ord.Option = function(inner) {
	return new stx_assert_ord_term_Option(inner);
};
var stx_assert_Orderable = {};
stx_assert_Orderable._new = function(self) {
	var this1 = self;
	return this1;
};
var stx_assert_OrderedSum = {};
stx_assert_OrderedSum.ok = function(this1) {
	return this1;
};
var stx_assert_Ordered = {};
stx_assert_Ordered._new = function(self) {
	var this1 = self;
	return this1;
};
stx_assert_Ordered.fromBool = function(b) {
	if(b) {
		return true;
	} else {
		return false;
	}
};
stx_assert_Ordered.toBool = function(this1) {
	if(this1) {
		return true;
	} else {
		return false;
	}
};
stx_assert_Ordered.or = function(this1,that) {
	return stx_assert_Ordered.fromBool(stx_assert_Ordered.toBool(this1) || stx_assert_Ordered.toBool(that));
};
stx_assert_Ordered.not = function(this1) {
	if(this1) {
		return false;
	} else {
		return true;
	}
};
stx_assert_Ordered.and = function(this1,that) {
	return stx_assert_Ordered.fromBool(stx_assert_Ordered.toBool(this1) && stx_assert_Ordered.toBool(that));
};
var stx_assert_PredicateLift = function() { };
stx_assert_PredicateLift.__name__ = "stx.assert.PredicateLift";
stx_assert_PredicateLift.ands = function(self,rest) {
	return Lambda.fold(rest,function(next,memo) {
		return new stx_assert_predicate_term_And(memo,next,{ fileName : "stx/assert/Predicate.hx", lineNumber : 81, className : "stx.assert.PredicateLift", methodName : "ands"});
	},self);
};
stx_assert_PredicateLift.ors = function(self,rest) {
	return Lambda.fold(rest,function(next,memo) {
		return new stx_assert_predicate_term_Or(memo,next,{ fileName : "stx/assert/Predicate.hx", lineNumber : 90, className : "stx.assert.PredicateLift", methodName : "ors"});
	},self);
};
stx_assert_PredicateLift.and = function(self,that) {
	return new stx_assert_predicate_term_And(self,that,{ fileName : "stx/assert/Predicate.hx", lineNumber : 98, className : "stx.assert.PredicateLift", methodName : "and"});
};
stx_assert_PredicateLift.or = function(self,that) {
	return new stx_assert_predicate_term_Or(self,that,{ fileName : "stx/assert/Predicate.hx", lineNumber : 105, className : "stx.assert.PredicateLift", methodName : "or"});
};
stx_assert_PredicateLift.xor = function(self,that) {
	return new stx_assert_predicate_term_XOr(self,that,{ fileName : "stx/assert/Predicate.hx", lineNumber : 111, className : "stx.assert.PredicateLift", methodName : "xor"});
};
stx_assert_PredicateLift.not = function(self) {
	return new stx_assert_predicate_term_Not(self,{ fileName : "stx/assert/Predicate.hx", lineNumber : 117, className : "stx.assert.PredicateLift", methodName : "not"});
};
stx_assert_PredicateLift.errata = function(self,fn) {
	return new stx_assert_predicate_term_Transform(self,fn,{ fileName : "stx/assert/Predicate.hx", lineNumber : 121, className : "stx.assert.PredicateLift", methodName : "errata"});
};
stx_assert_PredicateLift.errate = function(self,fn) {
	return stx_assert_PredicateLift.errata(self,function(err) {
		return err.map(fn);
	});
};
stx_assert_PredicateLift.map_i = function(self,fn) {
	return stx_assert_Predicate.Anon(function(v) {
		return self.applyI(fn(v));
	});
};
var stx_assert_Predicate = {};
stx_assert_Predicate._new = function(v) {
	var this1 = v;
	return this1;
};
stx_assert_Predicate.Natural = function(method,pos) {
	return new stx_assert_predicate_term_Natural(method,pos);
};
stx_assert_Predicate.NaturalReport = function(method,e,pos) {
	return new stx_assert_predicate_term_NaturalReport(method,e,pos);
};
stx_assert_Predicate.Anon = function(method) {
	return new stx_assert_predicate_term_Anon(method);
};
stx_assert_Predicate.unit = function() {
	return new stx_assert_predicate_term_Always({ fileName : "stx/assert/Predicate.hx", lineNumber : 25, className : "stx.assert._Predicate.Predicate_Impl_", methodName : "unit"});
};
stx_assert_Predicate.always = function(pos) {
	return new stx_assert_predicate_term_Always({ fileName : "stx/assert/Predicate.hx", lineNumber : 29, className : "stx.assert._Predicate.Predicate_Impl_", methodName : "always"});
};
stx_assert_Predicate.never = function(pos) {
	return new stx_assert_predicate_term_Never(pos);
};
stx_assert_Predicate.iz = function(pos,clazz) {
	return new stx_assert_predicate_term_Is(clazz,pos);
};
stx_assert_Predicate.throws = function(pos) {
	return new stx_assert_predicate_term_Throws(pos);
};
stx_assert_Predicate.void = function(pos) {
	return new stx_assert_predicate_term_Void(pos);
};
stx_assert_Predicate.exists = function(pos) {
	return new stx_assert_predicate_term_Exists(pos);
};
stx_assert_Predicate.matches = function(pos,reg,opt) {
	return new stx_assert_predicate_term_Matches(pos,reg,opt,{ fileName : "stx/assert/Predicate.hx", lineNumber : 47, className : "stx.assert._Predicate.Predicate_Impl_", methodName : "matches"});
};
stx_assert_Predicate.ordef = function(this1,l,r) {
	if(stx_nano_ReportLift.is_defined(this1.applyI(l))) {
		return r;
	} else {
		return l;
	}
};
stx_assert_Predicate.fudge = function(this1,v) {
	return stx_nano_ReportLift.fold(this1.applyI(v),function(x) {
		throw haxe_Exception.thrown(x);
	},function() {
		return v;
	});
};
stx_assert_Predicate.ok = function(this1) {
	return stx_fn_UnaryLift.then($bind(this1,this1.applyI),function(report) {
		return stx_nano_Report.ok(report);
	});
};
stx_assert_Predicate.bindI = function(this1,v) {
	var _g = $bind(this1,this1.applyI);
	var p = v;
	return function() {
		return _g(p);
	};
};
stx_assert_Predicate.check = function(this1) {
	return function(x) {
		return this1.applyI(x) == stx_nano_Report.fromStdOption(haxe_ds_Option.None);
	};
};
stx_assert_Predicate.crunch = function(this1,v) {
	stx_nano_ReportLift.fold(this1.applyI(v),function(e) {
		throw haxe_Exception.thrown(e);
	},function() {
	});
};
var stx_assert_assertion_term_Base = function(pos) {
	stx_pico_Clazz.call(this);
	this.pos = pos;
};
stx_assert_assertion_term_Base.__name__ = "stx.assert.assertion.term.Base";
stx_assert_assertion_term_Base.__interfaces__ = [stx_assert_AssertionApi];
stx_assert_assertion_term_Base.__super__ = stx_pico_Clazz;
stx_assert_assertion_term_Base.prototype = $extend(stx_pico_Clazz.prototype,{
	pos: null
	,applyII: function(a,b) {
		return stx_nano_Report.unit();
	}
	,error: function(l,r,pos) {
		var this1 = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,pos);
		return new stx_nano_Err(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,stx_nano_FailureSum.ERR_OF(stx_fail_AssertFailure.PredicateFailed(js_Boot.getClass(this),l,r))),haxe_ds_Option.None,this1);
	}
	,asAssertionApi: function() {
		return this;
	}
	,__class__: stx_assert_assertion_term_Base
});
var stx_assert_assertion_term_Alike = function(pos) {
	stx_assert_assertion_term_Base.call(this,pos);
};
stx_assert_assertion_term_Alike.__name__ = "stx.assert.assertion.term.Alike";
stx_assert_assertion_term_Alike.__super__ = stx_assert_assertion_term_Base;
stx_assert_assertion_term_Alike.prototype = $extend(stx_assert_assertion_term_Base.prototype,{
	applyII: function(a,b) {
		return stx_LiftAssert.expect(a._hx_index == b._hx_index,this.error(null,null,{ fileName : "stx/assert/assertion/term/Alike.hx", lineNumber : 8, className : "stx.assert.assertion.term.Alike", methodName : "applyII"}));
	}
	,__class__: stx_assert_assertion_term_Alike
});
var stx_assert_assertion_term_Anon = function(delegate,pos) {
	this.delegate = delegate;
	this.pos = pos;
};
stx_assert_assertion_term_Anon.__name__ = "stx.assert.assertion.term.Anon";
stx_assert_assertion_term_Anon.__interfaces__ = [stx_assert_AssertionApi];
stx_assert_assertion_term_Anon.prototype = {
	pos: null
	,delegate: function(a,b) {
		var this1 = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,{ fileName : "stx/assert/assertion/term/Anon.hx", lineNumber : 10, className : "stx.assert.assertion.term.Anon", methodName : "delegate"});
		return stx_nano_Report.pure(new stx_nano_Err(stx_pico_Option.fromNullT(stx_nano_FailureSum.ERR(stx_nano_FailCode.fromString("unimplemented"))),null,this1));
	}
	,applyII: function(a,b) {
		return this.delegate(a,b);
	}
	,asAssertionApi: function() {
		return this;
	}
	,__class__: stx_assert_assertion_term_Anon
};
var stx_assert_assertion_term_Equals = function(pos) {
	stx_assert_assertion_term_Base.call(this,pos);
};
stx_assert_assertion_term_Equals.__name__ = "stx.assert.assertion.term.Equals";
stx_assert_assertion_term_Equals.__super__ = stx_assert_assertion_term_Base;
stx_assert_assertion_term_Equals.prototype = $extend(stx_assert_assertion_term_Base.prototype,{
	applyII: function(a,b) {
		return stx_LiftAssert.expect(a == b,this.error(null,null,{ fileName : "stx/assert/assertion/term/Equals.hx", lineNumber : 9, className : "stx.assert.assertion.term.Equals", methodName : "applyII"}));
	}
	,__class__: stx_assert_assertion_term_Equals
});
var stx_assert_assertion_term_Errata = function(delegate,errata,pos) {
	this.delegate = delegate;
	this.errata = errata;
	this.pos = pos;
};
stx_assert_assertion_term_Errata.__name__ = "stx.assert.assertion.term.Errata";
stx_assert_assertion_term_Errata.__interfaces__ = [stx_assert_AssertionApi];
stx_assert_assertion_term_Errata.prototype = {
	delegate: null
	,errata: null
	,pos: null
	,applyII: function(lhs,rhs) {
		return stx_nano_Report.errata(this.delegate.applyII(lhs,rhs),this.errata);
	}
	,asAssertionApi: function() {
		return this;
	}
	,__class__: stx_assert_assertion_term_Errata
};
var stx_assert_assertion_term_GreaterThan = function(pos) {
	stx_assert_assertion_term_Base.call(this,pos);
};
stx_assert_assertion_term_GreaterThan.__name__ = "stx.assert.assertion.term.GreaterThan";
stx_assert_assertion_term_GreaterThan.__super__ = stx_assert_assertion_term_Base;
stx_assert_assertion_term_GreaterThan.prototype = $extend(stx_assert_assertion_term_Base.prototype,{
	applyII: function(a,b) {
		var l = a;
		var r = b;
		return stx_LiftAssert.expect(l > r,this.error(null,null,{ fileName : "stx/assert/assertion/term/GreaterThan.hx", lineNumber : 11, className : "stx.assert.assertion.term.GreaterThan", methodName : "applyII"}));
	}
	,__class__: stx_assert_assertion_term_GreaterThan
});
var stx_assert_assertion_term_GreaterThanOrEquals = function(pos) {
	stx_assert_assertion_term_Base.call(this,pos);
};
stx_assert_assertion_term_GreaterThanOrEquals.__name__ = "stx.assert.assertion.term.GreaterThanOrEquals";
stx_assert_assertion_term_GreaterThanOrEquals.__super__ = stx_assert_assertion_term_Base;
stx_assert_assertion_term_GreaterThanOrEquals.prototype = $extend(stx_assert_assertion_term_Base.prototype,{
	applyII: function(a,b) {
		var l = a;
		var r = b;
		return stx_LiftAssert.expect(l >= r,this.error(null,null,{ fileName : "stx/assert/assertion/term/GreaterThanOrEquals.hx", lineNumber : 11, className : "stx.assert.assertion.term.GreaterThanOrEquals", methodName : "applyII"}));
	}
	,__class__: stx_assert_assertion_term_GreaterThanOrEquals
});
var stx_assert_assertion_term_LessThan = function(pos) {
	stx_assert_assertion_term_Base.call(this,pos);
};
stx_assert_assertion_term_LessThan.__name__ = "stx.assert.assertion.term.LessThan";
stx_assert_assertion_term_LessThan.__super__ = stx_assert_assertion_term_Base;
stx_assert_assertion_term_LessThan.prototype = $extend(stx_assert_assertion_term_Base.prototype,{
	applyII: function(a,b) {
		var l = a;
		var r = b;
		return stx_LiftAssert.expect(l < r,this.error(null,null,{ fileName : "stx/assert/assertion/term/LessThan.hx", lineNumber : 10, className : "stx.assert.assertion.term.LessThan", methodName : "applyII"}));
	}
	,__class__: stx_assert_assertion_term_LessThan
});
var stx_assert_assertion_term_LessThanOrEquals = function(pos) {
	stx_assert_assertion_term_Base.call(this,pos);
};
stx_assert_assertion_term_LessThanOrEquals.__name__ = "stx.assert.assertion.term.LessThanOrEquals";
stx_assert_assertion_term_LessThanOrEquals.__super__ = stx_assert_assertion_term_Base;
stx_assert_assertion_term_LessThanOrEquals.prototype = $extend(stx_assert_assertion_term_Base.prototype,{
	applyII: function(a,b) {
		var l = a;
		var r = b;
		return stx_LiftAssert.expect(l <= r,this.error(null,null,{ fileName : "stx/assert/assertion/term/LessThanOrEquals.hx", lineNumber : 10, className : "stx.assert.assertion.term.LessThanOrEquals", methodName : "applyII"}));
	}
	,__class__: stx_assert_assertion_term_LessThanOrEquals
});
var stx_assert_comparable_term_Anon = function(_eq,_lt) {
	this._eq = _eq;
	this._lt = _lt;
};
stx_assert_comparable_term_Anon.__name__ = "stx.assert.comparable.term.Anon";
stx_assert_comparable_term_Anon.__interfaces__ = [stx_assert_ComparableApi];
stx_assert_comparable_term_Anon.prototype = {
	_eq: null
	,_lt: null
	,eq: function() {
		return this._eq;
	}
	,lt: function() {
		return this._lt;
	}
	,__class__: stx_assert_comparable_term_Anon
};
var stx_assert_comparable_term_Couple = function(l,r) {
	this.l = l;
	this.r = r;
};
stx_assert_comparable_term_Couple.__name__ = "stx.assert.comparable.term.Couple";
stx_assert_comparable_term_Couple.__interfaces__ = [stx_assert_ComparableApi];
stx_assert_comparable_term_Couple.prototype = {
	l: null
	,r: null
	,eq: function() {
		return stx_assert_Eq.Couple(this.l.eq(),this.r.eq());
	}
	,lt: function() {
		return stx_assert_Ord.Couple(this.l.lt(),this.r.lt());
	}
	,__class__: stx_assert_comparable_term_Couple
};
var stx_assert_comparable_term_Int = function() {
	stx_pico_Clazz.call(this);
};
stx_assert_comparable_term_Int.__name__ = "stx.assert.comparable.term.Int";
stx_assert_comparable_term_Int.__interfaces__ = [stx_assert_ComparableApi];
stx_assert_comparable_term_Int.__super__ = stx_pico_Clazz;
stx_assert_comparable_term_Int.prototype = $extend(stx_pico_Clazz.prototype,{
	eq: function() {
		return stx_assert_Eq.Int();
	}
	,lt: function() {
		return stx_assert_Ord.Int();
	}
	,__class__: stx_assert_comparable_term_Int
});
var stx_assert_comparable_term_Primitive = function() {
	stx_pico_Clazz.call(this);
};
stx_assert_comparable_term_Primitive.__name__ = "stx.assert.comparable.term.Primitive";
stx_assert_comparable_term_Primitive.__interfaces__ = [stx_assert_ComparableApi];
stx_assert_comparable_term_Primitive.__super__ = stx_pico_Clazz;
stx_assert_comparable_term_Primitive.prototype = $extend(stx_pico_Clazz.prototype,{
	eq: function() {
		return stx_assert_Eq.Primitive();
	}
	,lt: function() {
		return stx_assert_Ord.Primitive();
	}
	,__class__: stx_assert_comparable_term_Primitive
});
var stx_assert_comparable_term_String = function() {
	stx_pico_Clazz.call(this);
};
stx_assert_comparable_term_String.__name__ = "stx.assert.comparable.term.String";
stx_assert_comparable_term_String.__interfaces__ = [stx_assert_ComparableApi];
stx_assert_comparable_term_String.__super__ = stx_pico_Clazz;
stx_assert_comparable_term_String.prototype = $extend(stx_pico_Clazz.prototype,{
	eq: function() {
		return stx_assert_Eq.String();
	}
	,lt: function() {
		return stx_assert_Ord.String();
	}
	,__class__: stx_assert_comparable_term_String
});
var stx_assert_eq_term_Anon = function(self) {
	this.delegate = self;
};
stx_assert_eq_term_Anon.__name__ = "stx.assert.eq.term.Anon";
stx_assert_eq_term_Anon.__interfaces__ = [stx_assert_EqApi];
stx_assert_eq_term_Anon.prototype = {
	delegate: null
	,applyII: function(lhs,rhs) {
		return this.delegate(lhs,rhs);
	}
	,__class__: stx_assert_eq_term_Anon
};
var stx_assert_eq_term_Array = function(inner) {
	this.inner = inner;
};
stx_assert_eq_term_Array.__name__ = "stx.assert.eq.term.Array";
stx_assert_eq_term_Array.__interfaces__ = [stx_assert_EqApi];
stx_assert_eq_term_Array.prototype = {
	inner: null
	,applyII: function(a,b) {
		var ok = true;
		if(a.length != b.length) {
			return false;
		}
		var _g = 0;
		var _g1 = a.length - 1;
		while(_g < _g1) {
			var i = _g++;
			var lhs = a[i];
			var rhs = b[i];
			ok = this.inner.applyII(lhs,rhs);
			if(!stx_assert_EqualedSum.ok(ok)) {
				break;
			}
		}
		return ok;
	}
	,__class__: stx_assert_eq_term_Array
};
var stx_assert_eq_term_Bool = function() {
	stx_pico_Clazz.call(this);
};
stx_assert_eq_term_Bool.__name__ = "stx.assert.eq.term.Bool";
stx_assert_eq_term_Bool.__interfaces__ = [stx_assert_EqApi];
stx_assert_eq_term_Bool.__super__ = stx_pico_Clazz;
stx_assert_eq_term_Bool.prototype = $extend(stx_pico_Clazz.prototype,{
	applyII: function(a,b) {
		if(a == b) {
			return true;
		} else {
			return false;
		}
	}
	,__class__: stx_assert_eq_term_Bool
});
var stx_assert_eq_term_Couple = function(l,r) {
	this.l = l;
	this.r = r;
};
stx_assert_eq_term_Couple.__name__ = "stx.assert.eq.term.Couple";
stx_assert_eq_term_Couple.__interfaces__ = [stx_assert_EqApi];
stx_assert_eq_term_Couple.prototype = {
	l: null
	,r: null
	,applyII: function(a,b) {
		var _gthis = this;
		return stx_nano_CoupleLift.decouple(a,function(l0,r0) {
			return stx_nano_CoupleLift.decouple(b,function(l1,r1) {
				return stx_assert_Equaled.and(_gthis.l.applyII(l0,l1),_gthis.r.applyII(r0,r1));
			});
		});
	}
	,__class__: stx_assert_eq_term_Couple
};
var stx_assert_eq_term_Date = function() {
	stx_pico_Clazz.call(this);
};
stx_assert_eq_term_Date.__name__ = "stx.assert.eq.term.Date";
stx_assert_eq_term_Date.__interfaces__ = [stx_assert_EqApi];
stx_assert_eq_term_Date.__super__ = stx_pico_Clazz;
stx_assert_eq_term_Date.prototype = $extend(stx_pico_Clazz.prototype,{
	applyII: function(a,b) {
		if(a.getTime() == b.getTime()) {
			return true;
		} else {
			return false;
		}
	}
	,__class__: stx_assert_eq_term_Date
});
var stx_assert_eq_term_Deferred = function() {
};
stx_assert_eq_term_Deferred.__name__ = "stx.assert.eq.term.Deferred";
stx_assert_eq_term_Deferred.__interfaces__ = [stx_assert_EqApi];
stx_assert_eq_term_Deferred.prototype = {
	eq: null
	,applyII: function(a,b) {
		if(this.eq == null) {
			if(a == null) {
				this.eq = stx_assert_Equal.getEqualFor(a);
			} else {
				this.eq = stx_assert_Equal.getEqualFor(b);
			}
		}
		return this.eq.applyII(a,b);
	}
	,__class__: stx_assert_eq_term_Deferred
};
var stx_assert_eq_term_Enum = function() {
	stx_pico_Clazz.call(this);
};
stx_assert_eq_term_Enum.__name__ = "stx.assert.eq.term.Enum";
stx_assert_eq_term_Enum.__interfaces__ = [stx_assert_EqApi];
stx_assert_eq_term_Enum.__super__ = stx_pico_Clazz;
stx_assert_eq_term_Enum.prototype = $extend(stx_pico_Clazz.prototype,{
	applyII: function(a,b) {
		if(0 != a._hx_index - b._hx_index) {
			return false;
		} else {
			var pa = Type.enumParameters(a);
			var pb = Type.enumParameters(b);
			var b = true;
			var _g = 0;
			var _g1 = pa.length;
			while(_g < _g1) {
				var i = _g++;
				if(!stx_assert_EqualedSum.ok(stx_assert_Equal.getEqualFor(pa[i]).applyII(a[i],pb[i]))) {
					b = false;
					break;
				}
			}
			return b;
		}
	}
	,__class__: stx_assert_eq_term_Enum
});
var stx_assert_eq_term_EqAssertion = function(eq,pos) {
	stx_assert_assertion_term_Base.call(this,pos);
	this.eq = eq;
};
stx_assert_eq_term_EqAssertion.__name__ = "stx.assert.eq.term.EqAssertion";
stx_assert_eq_term_EqAssertion.__super__ = stx_assert_assertion_term_Base;
stx_assert_eq_term_EqAssertion.prototype = $extend(stx_assert_assertion_term_Base.prototype,{
	eq: null
	,applyII: function(a,b) {
		var tmp = stx_assert_Equaled.toBool(this.eq.applyII(a,b));
		var this1 = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,this.pos);
		return stx_LiftAssert.expect(tmp,new stx_nano_Err(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,stx_nano_FailureSum.ERR_OF(stx_fail_AssertFailure.PredicateFailed(js_Boot.getClass(this),a,b))),haxe_ds_Option.None,this1));
	}
	,__class__: stx_assert_eq_term_EqAssertion
});
var stx_assert_eq_term_Float = function() {
	stx_pico_Clazz.call(this);
};
stx_assert_eq_term_Float.__name__ = "stx.assert.eq.term.Float";
stx_assert_eq_term_Float.__interfaces__ = [stx_assert_EqApi];
stx_assert_eq_term_Float.__super__ = stx_pico_Clazz;
stx_assert_eq_term_Float.prototype = $extend(stx_pico_Clazz.prototype,{
	applyII: function(a,b) {
		if(a == b) {
			return true;
		} else {
			return false;
		}
	}
	,__class__: stx_assert_eq_term_Float
});
var stx_assert_eq_term_Function = function() {
	stx_pico_Clazz.call(this);
};
stx_assert_eq_term_Function.__name__ = "stx.assert.eq.term.Function";
stx_assert_eq_term_Function.__interfaces__ = [stx_assert_EqApi];
stx_assert_eq_term_Function.__super__ = stx_pico_Clazz;
stx_assert_eq_term_Function.prototype = $extend(stx_pico_Clazz.prototype,{
	applyII: function(a,b) {
		if(Reflect.compareMethods(a,b)) {
			return true;
		} else {
			return false;
		}
	}
	,__class__: stx_assert_eq_term_Function
});
var stx_assert_eq_term_HasFunction = function() {
	stx_pico_Clazz.call(this);
};
stx_assert_eq_term_HasFunction.__name__ = "stx.assert.eq.term.HasFunction";
stx_assert_eq_term_HasFunction.__interfaces__ = [stx_assert_EqApi];
stx_assert_eq_term_HasFunction.__super__ = stx_pico_Clazz;
stx_assert_eq_term_HasFunction.prototype = $extend(stx_pico_Clazz.prototype,{
	applyII: function(a,b) {
		if(a.equals(b)) {
			return true;
		} else {
			return false;
		}
	}
	,elide: function() {
		return this;
	}
	,__class__: stx_assert_eq_term_HasFunction
});
var stx_assert_eq_term_Int = function() {
	stx_pico_Clazz.call(this);
};
stx_assert_eq_term_Int.__name__ = "stx.assert.eq.term.Int";
stx_assert_eq_term_Int.__interfaces__ = [stx_assert_EqApi];
stx_assert_eq_term_Int.__super__ = stx_pico_Clazz;
stx_assert_eq_term_Int.prototype = $extend(stx_pico_Clazz.prototype,{
	applyII: function(a,b) {
		if(a == b) {
			return true;
		} else {
			return false;
		}
	}
	,__class__: stx_assert_eq_term_Int
});
var stx_assert_eq_term_Map = function(eq) {
	this.eq = eq;
};
stx_assert_eq_term_Map.__name__ = "stx.assert.eq.term.Map";
stx_assert_eq_term_Map.__interfaces__ = [stx_assert_EqApi];
stx_assert_eq_term_Map.prototype = {
	eq: null
	,applyII: function(a,b) {
		var ok = true;
		var _g = a.keyValueIterator();
		while(_g.hasNext()) {
			var _g1 = _g.next();
			var key = _g1.key;
			var val = _g1.value;
			if(!b.exists(key)) {
				break;
			}
			ok = stx_assert_Equaled.toBool(this.eq.applyII(val,b.get(key)));
			if(!ok) {
				break;
			}
		}
		var _g = b.keyValueIterator();
		while(_g.hasNext()) {
			var _g1 = _g.next();
			var key = _g1.key;
			var val = _g1.value;
			if(!a.exists(key)) {
				break;
			}
		}
		if(ok) {
			return true;
		} else {
			return false;
		}
	}
	,__class__: stx_assert_eq_term_Map
};
var stx_assert_eq_term_Noise = function() {
	stx_pico_Clazz.call(this);
};
stx_assert_eq_term_Noise.__name__ = "stx.assert.eq.term.Noise";
stx_assert_eq_term_Noise.__interfaces__ = [stx_assert_EqApi];
stx_assert_eq_term_Noise.__super__ = stx_pico_Clazz;
stx_assert_eq_term_Noise.prototype = $extend(stx_pico_Clazz.prototype,{
	applyII: function(a,b) {
		return stx_assert_Equaled.AreEqual;
	}
	,__class__: stx_assert_eq_term_Noise
});
var stx_assert_eq_term_NotNull = function(eq) {
	this.eq = eq;
};
stx_assert_eq_term_NotNull.__name__ = "stx.assert.eq.term.NotNull";
stx_assert_eq_term_NotNull.__interfaces__ = [stx_assert_EqApi];
stx_assert_eq_term_NotNull.prototype = {
	eq: null
	,applyII: function(a,b) {
		if(a == null) {
			if(b == null) {
				return true;
			} else {
				return false;
			}
		} else if(b == null) {
			return false;
		} else {
			return this.eq.applyII(a,b);
		}
	}
	,__class__: stx_assert_eq_term_NotNull
};
var stx_assert_eq_term_Null = function() {
	stx_pico_Clazz.call(this);
};
stx_assert_eq_term_Null.__name__ = "stx.assert.eq.term.Null";
stx_assert_eq_term_Null.__interfaces__ = [stx_assert_EqApi];
stx_assert_eq_term_Null.__super__ = stx_pico_Clazz;
stx_assert_eq_term_Null.prototype = $extend(stx_pico_Clazz.prototype,{
	applyII: function(a,b) {
		if(a == null && b == null) {
			return true;
		} else {
			return false;
		}
	}
	,__class__: stx_assert_eq_term_Null
});
var stx_assert_eq_term_Object = function() {
	stx_pico_Clazz.call(this);
};
stx_assert_eq_term_Object.__name__ = "stx.assert.eq.term.Object";
stx_assert_eq_term_Object.__interfaces__ = [stx_assert_EqApi];
stx_assert_eq_term_Object.__super__ = stx_pico_Clazz;
stx_assert_eq_term_Object.prototype = $extend(stx_pico_Clazz.prototype,{
	applyII: function(a,b) {
		var o = true;
		var _g = 0;
		var _g1 = Reflect.fields(a);
		while(_g < _g1.length) {
			var key = _g1[_g];
			++_g;
			var va = Reflect.field(a,key);
			if(!stx_assert_EqualedSum.ok(stx_assert_Equal.getEqualFor(va).applyII(va,Reflect.field(b,key)))) {
				o = false;
				break;
			}
		}
		return o;
	}
	,__class__: stx_assert_eq_term_Object
});
var stx_assert_eq_term_Option = function(eq) {
	this.eq = eq;
};
stx_assert_eq_term_Option.__name__ = "stx.assert.eq.term.Option";
stx_assert_eq_term_Option.__interfaces__ = [stx_assert_EqApi];
stx_assert_eq_term_Option.prototype = {
	eq: null
	,applyII: function(a,b) {
		if(a._hx_index == 0) {
			if(b._hx_index == 0) {
				var r = b.v;
				var l = a.v;
				return this.eq.applyII(l,r);
			} else {
				return stx_assert_Equaled.fromBool(false);
			}
		} else {
			return stx_assert_Equaled.fromBool(false);
		}
	}
	,__class__: stx_assert_eq_term_Option
};
var stx_assert_eq_term_Primitive = function() {
	stx_pico_Clazz.call(this);
};
stx_assert_eq_term_Primitive.__name__ = "stx.assert.eq.term.Primitive";
stx_assert_eq_term_Primitive.__interfaces__ = [stx_assert_EqApi];
stx_assert_eq_term_Primitive.__super__ = stx_pico_Clazz;
stx_assert_eq_term_Primitive.prototype = $extend(stx_pico_Clazz.prototype,{
	applyII: function(lhs,rhs) {
		switch(lhs._hx_index) {
		case 0:
			if(rhs._hx_index == 0) {
				return true;
			} else if(lhs._hx_index == rhs._hx_index) {
				return true;
			} else {
				return false;
			}
			break;
		case 1:
			if(rhs._hx_index == 1) {
				var rhs1 = rhs.b;
				var lhs1 = lhs.b;
				return stx_assert_Eq.Bool().applyII(lhs1,rhs1);
			} else if(lhs._hx_index == rhs._hx_index) {
				return true;
			} else {
				return false;
			}
			break;
		case 2:
			if(rhs._hx_index == 2) {
				var rhs1 = rhs.int;
				var lhs1 = lhs.int;
				return stx_assert_Eq.Int().applyII(lhs1,rhs1);
			} else if(lhs._hx_index == rhs._hx_index) {
				return true;
			} else {
				return false;
			}
			break;
		case 3:
			if(rhs._hx_index == 3) {
				var rhs1 = rhs.fl;
				var lhs1 = lhs.fl;
				return stx_assert_Eq.Float().applyII(lhs1,rhs1);
			} else if(lhs._hx_index == rhs._hx_index) {
				return true;
			} else {
				return false;
			}
			break;
		case 4:
			if(rhs._hx_index == 4) {
				var rhs1 = rhs.str;
				var lhs1 = lhs.str;
				return stx_assert_Eq.String().applyII(lhs1,rhs1);
			} else if(lhs._hx_index == rhs._hx_index) {
				return true;
			} else {
				return false;
			}
			break;
		}
	}
	,__class__: stx_assert_eq_term_Primitive
});
var stx_assert_eq_term_String = function() {
	stx_pico_Clazz.call(this);
};
stx_assert_eq_term_String.__name__ = "stx.assert.eq.term.String";
stx_assert_eq_term_String.__interfaces__ = [stx_assert_EqApi];
stx_assert_eq_term_String.__super__ = stx_pico_Clazz;
stx_assert_eq_term_String.prototype = $extend(stx_pico_Clazz.prototype,{
	applyII: function(a,b) {
		if(a == b) {
			return true;
		} else {
			return false;
		}
	}
	,__class__: stx_assert_eq_term_String
});
var stx_assert_eq_term_Unknown = function() {
	stx_pico_Clazz.call(this);
};
stx_assert_eq_term_Unknown.__name__ = "stx.assert.eq.term.Unknown";
stx_assert_eq_term_Unknown.__interfaces__ = [stx_assert_EqApi];
stx_assert_eq_term_Unknown.__super__ = stx_pico_Clazz;
stx_assert_eq_term_Unknown.prototype = $extend(stx_pico_Clazz.prototype,{
	applyII: function(a,b) {
		if(Object.prototype.hasOwnProperty.call(a,"equals")) {
			return new stx_assert_eq_term_HasFunction().applyII(a,b);
		} else {
			return new stx_assert_eq_term_Object().applyII(a,b);
		}
	}
	,__class__: stx_assert_eq_term_Unknown
});
var stx_assert_eq_term_UnsupportedClass = function() {
	stx_pico_Clazz.call(this);
};
stx_assert_eq_term_UnsupportedClass.__name__ = "stx.assert.eq.term.UnsupportedClass";
stx_assert_eq_term_UnsupportedClass.__interfaces__ = [stx_assert_EqApi];
stx_assert_eq_term_UnsupportedClass.__super__ = stx_pico_Clazz;
stx_assert_eq_term_UnsupportedClass.prototype = $extend(stx_pico_Clazz.prototype,{
	applyII: function(a,b) {
		return stx_assert_Equaled.and(new stx_assert_eq_term_Object().applyII(a,b),js_Boot.getClass(a) == js_Boot.getClass(b) && true);
	}
	,__class__: stx_assert_eq_term_UnsupportedClass
});
var stx_assert_module_Crunch = function(pos) {
	stx_pico_Clazz.call(this);
	this.module = new stx_assert_Module(pos);
};
stx_assert_module_Crunch.__name__ = "stx.assert.module.Crunch";
stx_assert_module_Crunch.__super__ = stx_pico_Clazz;
stx_assert_module_Crunch.prototype = $extend(stx_pico_Clazz.prototype,{
	module: null
	,equals: function(lhs,rhs) {
		stx_assert_Assertion.crunchII(this.module.equals(),lhs,rhs);
	}
	,alike: function(lhs,rhs) {
		stx_assert_Assertion.crunchII(this.module.alike(),lhs,rhs);
	}
	,gt: function(lhs,rhs) {
		stx_assert_Assertion.crunchII(this.module.gt(),lhs,rhs);
	}
	,gt_eq: function(lhs,rhs) {
		stx_assert_Assertion.crunchII(this.module.gt_eq(),lhs,rhs);
	}
	,lt: function(lhs,rhs) {
		stx_assert_Assertion.crunchII(this.module.lt(),lhs,rhs);
	}
	,lt_eq: function(lhs,rhs) {
		stx_assert_Assertion.crunchII(this.module.lt_eq(),lhs,rhs);
	}
	,always: function(t) {
		stx_nano_ReportLift.fold(this.module.always().applyI(t),function(e) {
			throw haxe_Exception.thrown(e);
		},function() {
		});
	}
	,never: function(t) {
		stx_nano_ReportLift.fold(this.module.never().applyI(t),function(e) {
			throw haxe_Exception.thrown(e);
		},function() {
		});
	}
	,iz: function(a,clazz) {
		stx_nano_ReportLift.fold(this.module.iz(clazz).applyI(a),function(e) {
			throw haxe_Exception.thrown(e);
		},function() {
		});
	}
	,throws: function(fn) {
		stx_nano_ReportLift.fold(this.module.throws().applyI(fn),function(e) {
			throw haxe_Exception.thrown(e);
		},function() {
		});
	}
	,'void': function(t) {
		stx_nano_ReportLift.fold(this.module.void().applyI(t),function(e) {
			throw haxe_Exception.thrown(e);
		},function() {
		});
	}
	,exists: function(t) {
		stx_nano_ReportLift.fold(this.module.exists().applyI(t),function(e) {
			throw haxe_Exception.thrown(e);
		},function() {
		});
	}
	,matches: function(string,reg,opt) {
		stx_nano_ReportLift.fold(this.module.matches(reg,opt).applyI(string),function(e) {
			throw haxe_Exception.thrown(e);
		},function() {
		});
	}
	,__class__: stx_assert_module_Crunch
});
var stx_assert_ord_term_Anon = function(delegate) {
	this.delegate = delegate;
};
stx_assert_ord_term_Anon.__name__ = "stx.assert.ord.term.Anon";
stx_assert_ord_term_Anon.__interfaces__ = [stx_assert_OrdApi];
stx_assert_ord_term_Anon.prototype = {
	delegate: null
	,applyII: function(lhs,rhs) {
		return this.delegate(lhs,rhs);
	}
	,__class__: stx_assert_ord_term_Anon
};
var stx_assert_ord_term_Array = function(inner) {
	this.inner = inner;
};
stx_assert_ord_term_Array.__name__ = "stx.assert.ord.term.Array";
stx_assert_ord_term_Array.__interfaces__ = [stx_assert_OrdApi];
stx_assert_ord_term_Array.prototype = {
	inner: null
	,applyII: function(v1,v2) {
		var n = v1.length - v2.length;
		if(n != 0) {
			if(n > 0) {
				return false;
			} else {
				return true;
			}
		} else if(v1.length == 0) {
			return false;
		} else {
			var v = false;
			var _g = 0;
			var _g1 = v1.length;
			while(_g < _g1) {
				var i = _g++;
				v = this.inner.applyII(v1[i],v2[i]);
				if(v == true) {
					break;
				}
			}
			return v;
		}
	}
	,__class__: stx_assert_ord_term_Array
};
var stx_assert_ord_term_Couple = function(l,r) {
	this.l = l;
	this.r = r;
};
stx_assert_ord_term_Couple.__name__ = "stx.assert.ord.term.Couple";
stx_assert_ord_term_Couple.__interfaces__ = [stx_assert_OrdApi];
stx_assert_ord_term_Couple.prototype = {
	l: null
	,r: null
	,applyII: function(a,b) {
		var _gthis = this;
		return stx_nano_CoupleLift.decouple(a,function(l0,r0) {
			return stx_nano_CoupleLift.decouple(b,function(l1,r1) {
				return stx_assert_Ordered.or(_gthis.l.applyII(l0,l1),_gthis.r.applyII(r0,r1));
			});
		});
	}
	,__class__: stx_assert_ord_term_Couple
};
var stx_assert_ord_term_Float = function() {
	stx_pico_Clazz.call(this);
};
stx_assert_ord_term_Float.__name__ = "stx.assert.ord.term.Float";
stx_assert_ord_term_Float.__interfaces__ = [stx_assert_OrdApi];
stx_assert_ord_term_Float.__super__ = stx_pico_Clazz;
stx_assert_ord_term_Float.prototype = $extend(stx_pico_Clazz.prototype,{
	applyII: function(a,b) {
		if(a < b) {
			return true;
		} else {
			return false;
		}
	}
	,__class__: stx_assert_ord_term_Float
});
var stx_assert_ord_term_Int = function() {
	stx_pico_Clazz.call(this);
};
stx_assert_ord_term_Int.__name__ = "stx.assert.ord.term.Int";
stx_assert_ord_term_Int.__interfaces__ = [stx_assert_OrdApi];
stx_assert_ord_term_Int.__super__ = stx_pico_Clazz;
stx_assert_ord_term_Int.prototype = $extend(stx_pico_Clazz.prototype,{
	applyII: function(a,b) {
		if(a < b) {
			return true;
		} else {
			return false;
		}
	}
	,__class__: stx_assert_ord_term_Int
});
var stx_assert_ord_term_Option = function(inner) {
	this.inner = inner;
};
stx_assert_ord_term_Option.__name__ = "stx.assert.ord.term.Option";
stx_assert_ord_term_Option.__interfaces__ = [stx_assert_OrdApi];
stx_assert_ord_term_Option.prototype = {
	inner: null
	,applyII: function(lhs,rhs) {
		var _gthis = this;
		var self = stx_pico_OptionLift.map(stx_nano_lift_LiftOptionNano.zip(lhs,rhs),stx_nano_lift_LiftNano.decouple(stx_nano_Wildcard.__,function(l,r) {
			return _gthis.inner.applyII(l,r);
		}));
		if(self._hx_index == 0) {
			var v = self.v;
			return v;
		} else {
			return false;
		}
	}
	,__class__: stx_assert_ord_term_Option
};
var stx_assert_ord_term_OrdAssertion = function(ord,pos) {
	stx_assert_assertion_term_Base.call(this,pos);
	this.ord = ord;
};
stx_assert_ord_term_OrdAssertion.__name__ = "stx.assert.ord.term.OrdAssertion";
stx_assert_ord_term_OrdAssertion.__super__ = stx_assert_assertion_term_Base;
stx_assert_ord_term_OrdAssertion.prototype = $extend(stx_assert_assertion_term_Base.prototype,{
	ord: null
	,applyII: function(a,b) {
		var tmp = stx_assert_Ordered.toBool(this.ord.applyII(a,b));
		var this1 = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,this.pos);
		return stx_LiftAssert.expect(tmp,new stx_nano_Err(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,stx_nano_FailureSum.ERR_OF(stx_fail_AssertFailure.PredicateFailed(js_Boot.getClass(this),a,b))),haxe_ds_Option.None,this1));
	}
	,__class__: stx_assert_ord_term_OrdAssertion
});
var stx_assert_ord_term_Primitive = function() {
	stx_pico_Clazz.call(this);
};
stx_assert_ord_term_Primitive.__name__ = "stx.assert.ord.term.Primitive";
stx_assert_ord_term_Primitive.__interfaces__ = [stx_assert_OrdApi];
stx_assert_ord_term_Primitive.__super__ = stx_pico_Clazz;
stx_assert_ord_term_Primitive.prototype = $extend(stx_pico_Clazz.prototype,{
	applyII: function(lhs,rhs) {
		switch(lhs._hx_index) {
		case 0:
			if(rhs._hx_index == 0) {
				return false;
			} else if(lhs._hx_index < rhs._hx_index) {
				return true;
			} else {
				return false;
			}
			break;
		case 1:
			if(rhs._hx_index == 1) {
				var rhs1 = rhs.b;
				var lhs1 = lhs.b;
				return stx_assert_Ord.Bool().applyII(lhs1,rhs1);
			} else if(lhs._hx_index < rhs._hx_index) {
				return true;
			} else {
				return false;
			}
			break;
		case 2:
			if(rhs._hx_index == 2) {
				var rhs1 = rhs.int;
				var lhs1 = lhs.int;
				return stx_assert_Ord.Int().applyII(lhs1,rhs1);
			} else if(lhs._hx_index < rhs._hx_index) {
				return true;
			} else {
				return false;
			}
			break;
		case 3:
			if(rhs._hx_index == 3) {
				var rhs1 = rhs.fl;
				var lhs1 = lhs.fl;
				return stx_assert_Ord.Float().applyII(lhs1,rhs1);
			} else if(lhs._hx_index < rhs._hx_index) {
				return true;
			} else {
				return false;
			}
			break;
		case 4:
			if(rhs._hx_index == 4) {
				var rhs1 = rhs.str;
				var lhs1 = lhs.str;
				return stx_assert_Ord.String().applyII(lhs1,rhs1);
			} else if(lhs._hx_index < rhs._hx_index) {
				return true;
			} else {
				return false;
			}
			break;
		}
	}
	,__class__: stx_assert_ord_term_Primitive
});
var stx_assert_ord_term_String = function() {
	stx_pico_Clazz.call(this);
};
stx_assert_ord_term_String.__name__ = "stx.assert.ord.term.String";
stx_assert_ord_term_String.__interfaces__ = [stx_assert_OrdApi];
stx_assert_ord_term_String.__super__ = stx_pico_Clazz;
stx_assert_ord_term_String.prototype = $extend(stx_pico_Clazz.prototype,{
	applyII: function(a,b) {
		if(a < b) {
			return true;
		} else {
			return false;
		}
	}
	,__class__: stx_assert_ord_term_String
});
var stx_assert_predicate_term_Open = function(pos) {
	this.pos = pos;
};
stx_assert_predicate_term_Open.__name__ = "stx.assert.predicate.term.Open";
stx_assert_predicate_term_Open.__interfaces__ = [stx_assert_PredicateApi];
stx_assert_predicate_term_Open.prototype = {
	pos: null
	,get_pos: function() {
		return this.pos;
	}
	,applyI: function(v) {
		return stx_nano_Report.unit();
	}
	,error: function() {
		return new stx_nano_Err(haxe_ds_Option.None,haxe_ds_Option.None,stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,this.get_pos()));
	}
	,__class__: stx_assert_predicate_term_Open
};
var stx_assert_predicate_term_Always = function(pos) {
	stx_assert_predicate_term_Open.call(this,pos);
};
stx_assert_predicate_term_Always.__name__ = "stx.assert.predicate.term.Always";
stx_assert_predicate_term_Always.__super__ = stx_assert_predicate_term_Open;
stx_assert_predicate_term_Always.prototype = $extend(stx_assert_predicate_term_Open.prototype,{
	applyI: function(v) {
		return stx_nano_Report.unit();
	}
	,__class__: stx_assert_predicate_term_Always
});
var stx_assert_predicate_term_And = function(l,r,pos) {
	stx_assert_predicate_term_Open.call(this,pos);
	this.l = l;
	this.r = r;
};
stx_assert_predicate_term_And.__name__ = "stx.assert.predicate.term.And";
stx_assert_predicate_term_And.__super__ = stx_assert_predicate_term_Open;
stx_assert_predicate_term_And.prototype = $extend(stx_assert_predicate_term_Open.prototype,{
	l: null
	,r: null
	,applyI: function(v) {
		var lr = this.l.applyI(v);
		var rr = stx_nano_Report.unit();
		if(!stx_nano_ReportLift.is_defined(lr)) {
			rr = this.r.applyI(v);
		}
		return stx_nano_ReportLift.merge(lr,rr);
	}
	,__class__: stx_assert_predicate_term_And
});
var stx_assert_predicate_term_Anon = function(delegate) {
	this.delegate = delegate;
};
stx_assert_predicate_term_Anon.__name__ = "stx.assert.predicate.term.Anon";
stx_assert_predicate_term_Anon.__interfaces__ = [stx_assert_PredicateApi];
stx_assert_predicate_term_Anon.prototype = {
	delegate: null
	,applyI: function(p) {
		return this.delegate(p);
	}
	,__class__: stx_assert_predicate_term_Anon
};
var stx_assert_predicate_term_AssertionPredicate = function(delegate,data) {
	this.delegate = delegate;
	this.data = data;
};
stx_assert_predicate_term_AssertionPredicate.__name__ = "stx.assert.predicate.term.AssertionPredicate";
stx_assert_predicate_term_AssertionPredicate.__interfaces__ = [stx_assert_PredicateApi];
stx_assert_predicate_term_AssertionPredicate.prototype = {
	delegate: null
	,data: null
	,applyI: function(v) {
		return stx_nano_Report.errata(this.delegate.applyII(this.data,v),function(x) {
			return x;
		});
	}
	,__class__: stx_assert_predicate_term_AssertionPredicate
};
var stx_assert_predicate_term_Base = function(pos) {
	stx_pico_Clazz.call(this);
	this.pos = pos;
};
stx_assert_predicate_term_Base.__name__ = "stx.assert.predicate.term.Base";
stx_assert_predicate_term_Base.__interfaces__ = [stx_assert_PredicateApi];
stx_assert_predicate_term_Base.__super__ = stx_pico_Clazz;
stx_assert_predicate_term_Base.prototype = $extend(stx_pico_Clazz.prototype,{
	pos: null
	,applyI: function(v) {
		return stx_nano_Report.fromStdOption(haxe_ds_Option.None);
	}
	,error: function(l,r) {
		var this1 = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,this.pos);
		return new stx_nano_Err(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,stx_nano_FailureSum.ERR_OF(stx_fail_AssertFailure.PredicateFailed(js_Boot.getClass(this),l,r))),haxe_ds_Option.None,this1);
	}
	,__class__: stx_assert_predicate_term_Base
});
var stx_assert_predicate_term_Exists = function(pos) {
	stx_assert_predicate_term_Base.call(this,pos);
};
stx_assert_predicate_term_Exists.__name__ = "stx.assert.predicate.term.Exists";
stx_assert_predicate_term_Exists.__super__ = stx_assert_predicate_term_Base;
stx_assert_predicate_term_Exists.prototype = $extend(stx_assert_predicate_term_Base.prototype,{
	applyI: function(v) {
		var self = stx_pico_OptionLift.map(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,v),function(_) {
			return true;
		});
		var bool;
		if(self._hx_index == 0) {
			var v = self.v;
			bool = v;
		} else {
			bool = false;
		}
		return stx_LiftAssert.expect(bool,this.error());
	}
	,__class__: stx_assert_predicate_term_Exists
});
var stx_assert_predicate_term_Is = function(type,pos) {
	stx_assert_predicate_term_Base.call(this,pos);
	this.type = type;
};
stx_assert_predicate_term_Is.__name__ = "stx.assert.predicate.term.Is";
stx_assert_predicate_term_Is.__super__ = stx_assert_predicate_term_Base;
stx_assert_predicate_term_Is.prototype = $extend(stx_assert_predicate_term_Base.prototype,{
	type: null
	,applyI: function(v) {
		var bool = js_Boot.__instanceof(v,this.type);
		var this1 = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,{ fileName : "stx/assert/predicate/term/Is.hx", lineNumber : 12, className : "stx.assert.predicate.term.Is", methodName : "applyI"});
		var err = new stx_nano_Err(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,stx_nano_FailureSum.ERR_OF(stx_fail_AssertFailure.PredicateFailed(js_Boot.getClass(this),v))),haxe_ds_Option.None,this1);
		return stx_LiftAssert.expect(bool,err);
	}
	,__class__: stx_assert_predicate_term_Is
});
var stx_assert_predicate_term_Matches = function(fault,match,opt,pos) {
	if(opt == null) {
		opt = "g";
	}
	stx_assert_predicate_term_Base.call(this,pos);
	this.fault = fault;
	this.match = match;
	this.opt = opt;
};
stx_assert_predicate_term_Matches.__name__ = "stx.assert.predicate.term.Matches";
stx_assert_predicate_term_Matches.__super__ = stx_assert_predicate_term_Base;
stx_assert_predicate_term_Matches.prototype = $extend(stx_assert_predicate_term_Base.prototype,{
	fault: null
	,match: null
	,opt: null
	,applyI: function(v) {
		var err = this.error("~/" + this.match + "/" + this.opt,v);
		var ereg = new EReg(this.match,this.opt);
		ereg.match(v);
		var bool = ereg.matched(0) == null;
		return stx_LiftAssert.expect(bool,err);
	}
	,__class__: stx_assert_predicate_term_Matches
});
var stx_assert_predicate_term_Natural = function(method,pos) {
	this.method = method;
	stx_assert_predicate_term_Base.call(this,pos);
};
stx_assert_predicate_term_Natural.__name__ = "stx.assert.predicate.term.Natural";
stx_assert_predicate_term_Natural.__super__ = stx_assert_predicate_term_Base;
stx_assert_predicate_term_Natural.prototype = $extend(stx_assert_predicate_term_Base.prototype,{
	method: null
	,applyI: function(v) {
		if(this.method(v)) {
			return stx_nano_Report.unit();
		} else {
			return stx_nano_Report.pure(this.error());
		}
	}
	,__class__: stx_assert_predicate_term_Natural
});
var stx_assert_predicate_term_NaturalReport = function(delegate,report,pos) {
	this.delegate = delegate;
	this.report = report;
	this.pos = pos;
};
stx_assert_predicate_term_NaturalReport.__name__ = "stx.assert.predicate.term.NaturalReport";
stx_assert_predicate_term_NaturalReport.__interfaces__ = [stx_assert_PredicateApi];
stx_assert_predicate_term_NaturalReport.prototype = {
	pos: null
	,report: null
	,delegate: null
	,applyI: function(p) {
		var _gthis = this;
		return stx_LiftIf.if_else(this.delegate(p),stx_nano_Report.unit,function() {
			var this1 = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,_gthis.pos);
			return new stx_nano_Err(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,stx_nano_FailureSum.ERR_OF(_gthis.report)),haxe_ds_Option.None,this1).report();
		});
	}
	,__class__: stx_assert_predicate_term_NaturalReport
};
var stx_assert_predicate_term_Never = function(pos) {
	stx_assert_predicate_term_Open.call(this,pos);
};
stx_assert_predicate_term_Never.__name__ = "stx.assert.predicate.term.Never";
stx_assert_predicate_term_Never.__super__ = stx_assert_predicate_term_Open;
stx_assert_predicate_term_Never.prototype = $extend(stx_assert_predicate_term_Open.prototype,{
	applyI: function(v) {
		return stx_nano_Report.pure(this.error());
	}
	,__class__: stx_assert_predicate_term_Never
});
var stx_assert_predicate_term_Not = function(predicate,pos) {
	stx_assert_predicate_term_Open.call(this,pos);
	this.predicate = predicate;
};
stx_assert_predicate_term_Not.__name__ = "stx.assert.predicate.term.Not";
stx_assert_predicate_term_Not.__super__ = stx_assert_predicate_term_Open;
stx_assert_predicate_term_Not.prototype = $extend(stx_assert_predicate_term_Open.prototype,{
	predicate: null
	,applyI: function(v) {
		var bool = stx_nano_ReportLift.fold(this.predicate.applyI(v),function(c) {
			return true;
		},function() {
			return false;
		});
		return stx_LiftAssert.expect(bool,this.error());
	}
	,__class__: stx_assert_predicate_term_Not
});
var stx_assert_predicate_term_Or = function(l,r,pos) {
	stx_assert_predicate_term_Open.call(this,pos);
	this.l = l;
	this.r = r;
};
stx_assert_predicate_term_Or.__name__ = "stx.assert.predicate.term.Or";
stx_assert_predicate_term_Or.__super__ = stx_assert_predicate_term_Open;
stx_assert_predicate_term_Or.prototype = $extend(stx_assert_predicate_term_Open.prototype,{
	l: null
	,r: null
	,applyI: function(v) {
		var resI = this.l.applyI(v);
		var resII = this.r.applyI(v);
		if(stx_nano_ReportLift.is_defined(resI) && stx_nano_ReportLift.is_defined(resII)) {
			return stx_nano_ReportLift.merge(resI,resII);
		} else {
			return stx_nano_Report.unit();
		}
	}
	,__class__: stx_assert_predicate_term_Or
});
var stx_assert_predicate_term_Throws = function(pos) {
	stx_assert_predicate_term_Base.call(this,pos);
};
stx_assert_predicate_term_Throws.__name__ = "stx.assert.predicate.term.Throws";
stx_assert_predicate_term_Throws.__super__ = stx_assert_predicate_term_Base;
stx_assert_predicate_term_Throws.prototype = $extend(stx_assert_predicate_term_Base.prototype,{
	applyI: function(block) {
		try {
			block();
		} catch( _g ) {
			haxe_NativeStackTrace.lastError = _g;
			return stx_nano_Report.unit();
		}
		return stx_nano_Report.pure(this.error());
	}
	,__class__: stx_assert_predicate_term_Throws
});
var stx_assert_predicate_term_Transform = function(delegate,transform,pos) {
	stx_assert_predicate_term_Open.call(this,pos);
	this.transform = transform;
	this.delegate = delegate;
};
stx_assert_predicate_term_Transform.__name__ = "stx.assert.predicate.term.Transform";
stx_assert_predicate_term_Transform.__super__ = stx_assert_predicate_term_Open;
stx_assert_predicate_term_Transform.prototype = $extend(stx_assert_predicate_term_Open.prototype,{
	transform: null
	,delegate: null
	,applyI: function(v) {
		return stx_nano_Report.errata(this.delegate.applyI(v),this.transform);
	}
	,__class__: stx_assert_predicate_term_Transform
});
var stx_assert_predicate_term_Void = function(pos) {
	stx_assert_predicate_term_Base.call(this,pos);
};
stx_assert_predicate_term_Void.__name__ = "stx.assert.predicate.term.Void";
stx_assert_predicate_term_Void.__super__ = stx_assert_predicate_term_Base;
stx_assert_predicate_term_Void.prototype = $extend(stx_assert_predicate_term_Base.prototype,{
	applyI: function(v) {
		return stx_LiftAssert.expect(v == null,this.error());
	}
	,__class__: stx_assert_predicate_term_Void
});
var stx_assert_predicate_term_XOr = function(l,r,pos) {
	stx_assert_predicate_term_Open.call(this,pos);
	this.l = l;
	this.r = r;
};
stx_assert_predicate_term_XOr.__name__ = "stx.assert.predicate.term.XOr";
stx_assert_predicate_term_XOr.__super__ = stx_assert_predicate_term_Open;
stx_assert_predicate_term_XOr.prototype = $extend(stx_assert_predicate_term_Open.prototype,{
	l: null
	,r: null
	,applyI: function(v) {
		var lr = this.l.applyI(v);
		var rr = this.r.applyI(v);
		return stx_LiftAssert.expect(!stx_nano_ReportLift.is_defined(lr) && !stx_nano_ReportLift.is_defined(rr),this.error());
	}
	,__class__: stx_assert_predicate_term_XOr
});
var stx_fail_AssertFailure = $hxEnums["stx.fail.AssertFailure"] = { __ename__:"stx.fail.AssertFailure",__constructs__:null
	,PredicateFailed: ($_=function(type,valueN,value0) { return {_hx_index:0,type:type,valueN:valueN,value0:value0,__enum__:"stx.fail.AssertFailure",toString:$estr}; },$_._hx_name="PredicateFailed",$_.__params__ = ["type","valueN","value0"],$_)
};
stx_fail_AssertFailure.__constructs__ = [stx_fail_AssertFailure.PredicateFailed];
var stx_fail_LogFailure = $hxEnums["stx.fail.LogFailure"] = { __ename__:"stx.fail.LogFailure",__constructs__:null
	,E_Log_UnderLogLevel: {_hx_name:"E_Log_UnderLogLevel",_hx_index:0,__enum__:"stx.fail.LogFailure",toString:$estr}
	,E_Log_SourceNotInPackage: ($_=function(source,dir) { return {_hx_index:1,source:source,dir:dir,__enum__:"stx.fail.LogFailure",toString:$estr}; },$_._hx_name="E_Log_SourceNotInPackage",$_.__params__ = ["source","dir"],$_)
	,E_Log_NotLine: ($_=function(n) { return {_hx_index:2,n:n,__enum__:"stx.fail.LogFailure",toString:$estr}; },$_._hx_name="E_Log_NotLine",$_.__params__ = ["n"],$_)
	,E_Log_NotOfRange: ($_=function(l,r) { return {_hx_index:3,l:l,r:r,__enum__:"stx.fail.LogFailure",toString:$estr}; },$_._hx_name="E_Log_NotOfRange",$_.__params__ = ["l","r"],$_)
	,E_Log_NotInMethod: ($_=function(str) { return {_hx_index:4,str:str,__enum__:"stx.fail.LogFailure",toString:$estr}; },$_._hx_name="E_Log_NotInMethod",$_.__params__ = ["str"],$_)
	,E_Log_DoesNotContainTag: ($_=function(tag) { return {_hx_index:5,tag:tag,__enum__:"stx.fail.LogFailure",toString:$estr}; },$_._hx_name="E_Log_DoesNotContainTag",$_.__params__ = ["tag"],$_)
	,E_Log_Not: {_hx_name:"E_Log_Not",_hx_index:6,__enum__:"stx.fail.LogFailure",toString:$estr}
	,E_Log_LosesRace: {_hx_name:"E_Log_LosesRace",_hx_index:7,__enum__:"stx.fail.LogFailure",toString:$estr}
	,E_Log_Default: ($_=function(data) { return {_hx_index:8,data:data,__enum__:"stx.fail.LogFailure",toString:$estr}; },$_._hx_name="E_Log_Default",$_.__params__ = ["data"],$_)
	,E_Log_Zero: {_hx_name:"E_Log_Zero",_hx_index:9,__enum__:"stx.fail.LogFailure",toString:$estr}
};
stx_fail_LogFailure.__constructs__ = [stx_fail_LogFailure.E_Log_UnderLogLevel,stx_fail_LogFailure.E_Log_SourceNotInPackage,stx_fail_LogFailure.E_Log_NotLine,stx_fail_LogFailure.E_Log_NotOfRange,stx_fail_LogFailure.E_Log_NotInMethod,stx_fail_LogFailure.E_Log_DoesNotContainTag,stx_fail_LogFailure.E_Log_Not,stx_fail_LogFailure.E_Log_LosesRace,stx_fail_LogFailure.E_Log_Default,stx_fail_LogFailure.E_Log_Zero];
var stx_failure_StxHttpClientFailure = $hxEnums["stx.failure.StxHttpClientFailure"] = { __ename__:"stx.failure.StxHttpClientFailure",__constructs__:null
	,E_HttpClient_CantDecode: ($_=function(type) { return {_hx_index:0,type:type,__enum__:"stx.failure.StxHttpClientFailure",toString:$estr}; },$_._hx_name="E_HttpClient_CantDecode",$_.__params__ = ["type"],$_)
};
stx_failure_StxHttpClientFailure.__constructs__ = [stx_failure_StxHttpClientFailure.E_HttpClient_CantDecode];
var stx_fn_Arw = {};
stx_fn_Arw._new = function(self) {
	var this1 = self;
	return this1;
};
stx_fn_Arw.fromUnary = function(self) {
	var fn = self;
	return stx_fn_Arw._new(function(p,cont) {
		var res = stx_nano_lift_LiftNano.success(stx_nano_Wildcard.__,fn(p));
		cont(res);
		return stx_fn_Work.unit();
	});
};
stx_fn_Arw.fromBinary = function(self) {
	var fn = stx_fn_BinaryLift.encouple(self);
	return stx_fn_Arw._new(function(p,cont) {
		var res = stx_nano_lift_LiftNano.success(stx_nano_Wildcard.__,fn(p));
		cont(res);
		return stx_fn_Work.unit();
	});
};
stx_fn_Arw.lift = function(self) {
	return stx_fn_Arw._new(self);
};
stx_fn_Arw.unit = function() {
	return stx_fn_Arw._new(function(p,cont) {
		cont(stx_nano_lift_LiftNano.success(stx_nano_Wildcard.__,p));
		return stx_fn_Work.unit();
	});
};
stx_fn_Arw.fromFun = function(fn) {
	return stx_fn_Arw._new(function(p,cont) {
		var res = stx_nano_lift_LiftNano.success(stx_nano_Wildcard.__,fn(p));
		cont(res);
		return stx_fn_Work.unit();
	});
};
stx_fn_Arw.prj = function(this1) {
	return this1;
};
stx_fn_Arw.get_self = function(this1) {
	return stx_fn_Arw._new(this1);
};
var stx_fn_ArwLift = function() { };
stx_fn_ArwLift.__name__ = "stx.fn.ArwLift";
stx_fn_ArwLift.lift = function(self) {
	return stx_fn_Arw._new(self);
};
stx_fn_ArwLift.then = function(self,that) {
	return stx_fn_Arw._new(function(p,cont) {
		var b = stx_fn_Work.wait();
		var a = self(p,function(res) {
			switch(res._hx_index) {
			case 0:
				var t = res.t;
				var work = that(t,cont);
				var self = stx_fn_Work.prj(work);
				switch(self._hx_index) {
				case 0:
					var t = self.v;
					t.handle(function(v) {
						stx_fn_Bang.fill(b,v);
					});
					break;
				case 1:
					stx_fn_Bang.done(b);
					var this1 = new tink_core_SimpleLink(function() {
						return;
					});
					break;
				}
				break;
			case 1:
				var e = res.e;
				cont(stx_nano_lift_LiftNano.failure(stx_nano_Wildcard.__,e));
				var this1 = new tink_core_SimpleLink(function() {
					return;
				});
				break;
			}
		});
		return stx_fn_WorkLift.seq(a,stx_fn_Bang.toWork(b));
	});
};
stx_fn_ArwLift.pair = function(self,that) {
	return stx_fn_Arw._new(function(p,cont) {
		var l = haxe_ds_Option.None;
		var r = haxe_ds_Option.None;
		var work = stx_fn_Work.wait();
		var completer = function() {
			var self = stx_nano_lift_LiftOptionNano.zip(l,r);
			switch(self._hx_index) {
			case 0:
				var t = self.v;
				stx_nano_CoupleLift.decouple(t,function(l,r) {
					cont(stx_nano_lift_LiftOutcomeTDefect.zip(l,r));
				});
				stx_fn_Bang.done(work);
				break;
			case 1:
				break;
			}
		};
		var lh = function(o) {
			l = haxe_ds_Option.Some(o);
			completer();
		};
		var rh = function(o) {
			r = haxe_ds_Option.Some(o);
			completer();
		};
		var l_work = (stx_fn_Arw._new(self))(stx_nano_CoupleLift.fst(p),lh);
		var r_work = that(stx_nano_CoupleLift.snd(p),rh);
		return stx_fn_WorkLift.seq(stx_fn_WorkLift.par(l_work,r_work),stx_fn_Bang.toWork(work));
	});
};
stx_fn_ArwLift.go_left = function(self) {
	return stx_fn_Arw._new(function(p,cont) {
		return stx_pico_EitherLift.fold(p,function(lhs) {
			return self(lhs,function(res) {
				cont(stx_pico_OutcomeLift.flat_map(res,function(x) {
					return stx_pico_OutcomeSum.Success(haxe_ds_Either.Left(x));
				}));
			});
		},function(rhs) {
			var _g = cont;
			var a1 = stx_nano_lift_LiftNano.success(stx_nano_Wildcard.__,haxe_ds_Either.Right(rhs));
			return (stx_fn_BlockLift.bung(function() {
				_g(a1);
			}))();
		});
	});
};
stx_fn_ArwLift.go_right = function(self) {
	return stx_fn_Arw._new(function(p,cont) {
		return stx_pico_EitherLift.fold(p,function(lhs) {
			var _g = cont;
			var a1 = stx_nano_lift_LiftNano.success(stx_nano_Wildcard.__,haxe_ds_Either.Left(lhs));
			return (stx_fn_BlockLift.bung(function() {
				_g(a1);
			}))();
		},function(rhs) {
			return self(rhs,function(res) {
				cont(stx_pico_OutcomeLift.flat_map(res,function(x) {
					return stx_pico_OutcomeSum.Success(haxe_ds_Either.Right(x));
				}));
			});
		});
	});
};
stx_fn_ArwLift.split = function(self,that) {
	return stx_fn_Arw._new(function(pi,cont) {
		return (stx_fn_ArwLift.pair(self,that))(stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,pi,pi),cont);
	});
};
stx_fn_ArwLift.fan = function(self) {
	var self1 = self;
	var that = stx_fn_Arw.fromUnary(function(x) {
		return stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,x,x);
	});
	return stx_fn_Arw._new(function(p,cont) {
		var b = stx_fn_Work.wait();
		var a = self1(p,function(res) {
			switch(res._hx_index) {
			case 0:
				var t = res.t;
				var work = that(t,cont);
				var self = stx_fn_Work.prj(work);
				switch(self._hx_index) {
				case 0:
					var t = self.v;
					t.handle(function(v) {
						stx_fn_Bang.fill(b,v);
					});
					break;
				case 1:
					stx_fn_Bang.done(b);
					var this1 = new tink_core_SimpleLink(function() {
						return;
					});
					break;
				}
				break;
			case 1:
				var e = res.e;
				cont(stx_nano_lift_LiftNano.failure(stx_nano_Wildcard.__,e));
				var this1 = new tink_core_SimpleLink(function() {
					return;
				});
				break;
			}
		});
		return stx_fn_WorkLift.seq(a,stx_fn_Bang.toWork(b));
	});
};
stx_fn_ArwLift.first = function(self) {
	return stx_fn_ArwLift.pair(self,stx_fn_Arw.unit());
};
stx_fn_ArwLift.second = function(self) {
	return stx_fn_ArwLift.pair(stx_fn_Arw.unit(),self);
};
stx_fn_ArwLift.joint = function(lhs,rhs) {
	var self = lhs;
	var that = stx_fn_ArwLift.split(stx_fn_Arw.unit(),rhs);
	return stx_fn_Arw._new(function(p,cont) {
		var b = stx_fn_Work.wait();
		var a = self(p,function(res) {
			switch(res._hx_index) {
			case 0:
				var t = res.t;
				var work = that(t,cont);
				var self = stx_fn_Work.prj(work);
				switch(self._hx_index) {
				case 0:
					var t = self.v;
					t.handle(function(v) {
						stx_fn_Bang.fill(b,v);
					});
					break;
				case 1:
					stx_fn_Bang.done(b);
					var this1 = new tink_core_SimpleLink(function() {
						return;
					});
					break;
				}
				break;
			case 1:
				var e = res.e;
				cont(stx_nano_lift_LiftNano.failure(stx_nano_Wildcard.__,e));
				var this1 = new tink_core_SimpleLink(function() {
					return;
				});
				break;
			}
		});
		return stx_fn_WorkLift.seq(a,stx_fn_Bang.toWork(b));
	});
};
stx_fn_ArwLift.bound = function(self,that) {
	var self1 = stx_fn_ArwLift.joint(stx_fn_Arw.unit(),self);
	var that1 = that;
	return stx_fn_Arw._new(function(p,cont) {
		var b = stx_fn_Work.wait();
		var a = self1(p,function(res) {
			switch(res._hx_index) {
			case 0:
				var t = res.t;
				var work = that1(t,cont);
				var self = stx_fn_Work.prj(work);
				switch(self._hx_index) {
				case 0:
					var t = self.v;
					t.handle(function(v) {
						stx_fn_Bang.fill(b,v);
					});
					break;
				case 1:
					stx_fn_Bang.done(b);
					var this1 = new tink_core_SimpleLink(function() {
						return;
					});
					break;
				}
				break;
			case 1:
				var e = res.e;
				cont(stx_nano_lift_LiftNano.failure(stx_nano_Wildcard.__,e));
				var this1 = new tink_core_SimpleLink(function() {
					return;
				});
				break;
			}
		});
		return stx_fn_WorkLift.seq(a,stx_fn_Bang.toWork(b));
	});
};
var stx_fn_BinaryLift = function() {
	stx_pico_Clazz.call(this);
};
stx_fn_BinaryLift.__name__ = "stx.fn.BinaryLift";
stx_fn_BinaryLift.then = function(self,that) {
	return function(pI,pII) {
		return that(self(pI,pII));
	};
};
stx_fn_BinaryLift.braid = function(self,pI,pII) {
	return self(pI,pII);
};
stx_fn_BinaryLift.rotate = function(self) {
	return function(pII,pI) {
		return self(pI,pII);
	};
};
stx_fn_BinaryLift.swap = function(self) {
	return function(pII,pI) {
		return self(pI,pII);
	};
};
stx_fn_BinaryLift.curry = function(self) {
	return function(pI) {
		return function(pII) {
			return self(pI,pII);
		};
	};
};
stx_fn_BinaryLift.equals = function(self,that) {
	return Reflect.compareMethods(self,that);
};
stx_fn_BinaryLift.bindPi = function(self,pI) {
	var fn = self;
	var _g = fn;
	var a1 = pI;
	return function(a2) {
		return _g(a1,a2);
	};
};
stx_fn_BinaryLift.bindPii = function(pII,self) {
	var fn = self;
	var _g = fn;
	var a2 = pII;
	return function(a1) {
		return _g(a1,a2);
	};
};
stx_fn_BinaryLift.cache = function(self,pI,pII) {
	var r = null;
	return function() {
		if(r == null) {
			r = false;
			r = self(pI,pII);
			return r;
		} else {
			return r;
		}
	};
};
stx_fn_BinaryLift.pipe = function(self,tp) {
	return function() {
		return stx_nano_CoupleLift.decouple(tp(),self);
	};
};
stx_fn_BinaryLift.encouple = function(self) {
	return function(tp) {
		return stx_nano_CoupleLift.decouple(tp,self);
	};
};
stx_fn_BinaryLift.arw = function(self) {
	return stx_fn_Arw.fromBinary(self);
};
stx_fn_BinaryLift.__super__ = stx_pico_Clazz;
stx_fn_BinaryLift.prototype = $extend(stx_pico_Clazz.prototype,{
	__class__: stx_fn_BinaryLift
});
var stx_fn_Binary = {};
stx_fn_Binary._new = function(self) {
	var this1 = self;
	return this1;
};
stx_fn_Binary.prj = function(this1) {
	return this1;
};
var stx_fn_BlockLift = function() { };
stx_fn_BlockLift.__name__ = "stx.fn.BlockLift";
stx_fn_BlockLift.returning = function(self,r) {
	return function() {
		self();
		return r;
	};
};
stx_fn_BlockLift.equals = function(self,that) {
	return Reflect.compareMethods(self,that);
};
stx_fn_BlockLift.promote = function(f) {
	return function(p) {
		f();
	};
};
stx_fn_BlockLift.then = function(self,that) {
	return function() {
		self();
		that();
	};
};
stx_fn_BlockLift.enact = function(self) {
	self();
};
stx_fn_BlockLift.bung = function(self) {
	return function() {
		self();
		return stx_fn_Work.unit();
	};
};
var stx_fn_Block = {};
stx_fn_Block._new = function(self) {
	var this1 = self;
	return this1;
};
stx_fn_Block.unit = function() {
	return function() {
	};
};
stx_fn_Block.pure = function(fn) {
	return fn;
};
stx_fn_Block.lift = function(fn) {
	return stx_fn_Block._new(fn);
};
var stx_fn_CYCLED = $hxEnums["stx.fn.CYCLED"] = { __ename__:"stx.fn.CYCLED",__constructs__:null
	,CYCLED: {_hx_name:"CYCLED",_hx_index:0,__enum__:"stx.fn.CYCLED",toString:$estr}
};
stx_fn_CYCLED.__constructs__ = [stx_fn_CYCLED.CYCLED];
var tink_core__$Future_FutureObject = function() { };
tink_core__$Future_FutureObject.__name__ = "tink.core._Future.FutureObject";
tink_core__$Future_FutureObject.__isInterface__ = true;
tink_core__$Future_FutureObject.prototype = {
	getStatus: null
	,handle: null
	,eager: null
	,__class__: tink_core__$Future_FutureObject
};
var tink_core__$Future_NeverFuture = function() {
};
tink_core__$Future_NeverFuture.__name__ = "tink.core._Future.NeverFuture";
tink_core__$Future_NeverFuture.__interfaces__ = [tink_core__$Future_FutureObject];
tink_core__$Future_NeverFuture.prototype = {
	getStatus: function() {
		return tink_core_FutureStatus.NeverEver;
	}
	,handle: function(callback) {
		return null;
	}
	,eager: function() {
	}
	,__class__: tink_core__$Future_NeverFuture
};
var tink_core__$Lazy_Computable = function() { };
tink_core__$Lazy_Computable.__name__ = "tink.core._Lazy.Computable";
tink_core__$Lazy_Computable.__isInterface__ = true;
tink_core__$Lazy_Computable.prototype = {
	isComputed: null
	,compute: null
	,underlying: null
	,__class__: tink_core__$Lazy_Computable
};
var tink_core__$Lazy_LazyObject = function() { };
tink_core__$Lazy_LazyObject.__name__ = "tink.core._Lazy.LazyObject";
tink_core__$Lazy_LazyObject.__isInterface__ = true;
tink_core__$Lazy_LazyObject.__interfaces__ = [tink_core__$Lazy_Computable];
tink_core__$Lazy_LazyObject.prototype = {
	get: null
	,__class__: tink_core__$Lazy_LazyObject
};
var tink_core__$Lazy_LazyConst = function(value) {
	this.value = value;
};
tink_core__$Lazy_LazyConst.__name__ = "tink.core._Lazy.LazyConst";
tink_core__$Lazy_LazyConst.__interfaces__ = [tink_core__$Lazy_LazyObject];
tink_core__$Lazy_LazyConst.prototype = {
	value: null
	,isComputed: function() {
		return true;
	}
	,get: function() {
		return this.value;
	}
	,compute: function() {
	}
	,underlying: function() {
		return null;
	}
	,__class__: tink_core__$Lazy_LazyConst
};
var tink_core__$Future_SyncFuture = function(value) {
	this.value = value;
};
tink_core__$Future_SyncFuture.__name__ = "tink.core._Future.SyncFuture";
tink_core__$Future_SyncFuture.__interfaces__ = [tink_core__$Future_FutureObject];
tink_core__$Future_SyncFuture.prototype = {
	value: null
	,getStatus: function() {
		return tink_core_FutureStatus.Ready(this.value);
	}
	,handle: function(cb) {
		tink_core_Callback.invoke(cb,tink_core_Lazy.get(this.value));
		return null;
	}
	,eager: function() {
		if(!this.value.isComputed()) {
			tink_core_Lazy.get(this.value);
		}
	}
	,__class__: tink_core__$Future_SyncFuture
};
var tink_core_Future = {};
tink_core_Future.get_status = function(this1) {
	return this1.getStatus();
};
tink_core_Future._new = function(wakeup) {
	var this1 = new tink_core__$Future_SuspendableFuture(wakeup);
	return this1;
};
tink_core_Future.handle = function(this1,callback) {
	return this1.handle(callback);
};
tink_core_Future.eager = function(this1) {
	this1.eager();
	return this1;
};
tink_core_Future.noise = function(this1) {
	if(this1.getStatus()._hx_index == 4) {
		return tink_core_Future.NEVER;
	} else {
		return tink_core_Future.map(this1,function(_) {
			return null;
		});
	}
};
tink_core_Future.first = function(this1,that) {
	var _g = this1;
	var _g1 = _g.getStatus();
	switch(_g1._hx_index) {
	case 3:
		var _g2 = _g1.result;
		var _g1 = that.getStatus();
		switch(_g1._hx_index) {
		case 3:
			var _g2 = _g1.result;
			var v = _g;
			return v;
		case 4:
			var v = _g;
			return v;
		default:
			var v = _g;
			return v;
		}
		break;
	case 4:
		var v = that;
		return v;
	default:
		var _g1 = that.getStatus();
		switch(_g1._hx_index) {
		case 3:
			var _g2 = _g1.result;
			var v = that;
			return v;
		case 4:
			var v = _g;
			return v;
		default:
			return new tink_core__$Future_SuspendableFuture(function(fire) {
				return new tink_core__$Callback_LinkPair(this1.handle(fire),that.handle(fire));
			});
		}
	}
};
tink_core_Future.map = function(this1,f,gather) {
	var _g = this1.getStatus();
	switch(_g._hx_index) {
	case 3:
		var l = _g.result;
		var this2 = l;
		var f1 = f;
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyFunc(function() {
			return f1(this2.get());
		},this2));
	case 4:
		return tink_core_Future.NEVER;
	default:
		return new tink_core__$Future_SuspendableFuture(function(fire) {
			return this1.handle(function(v) {
				fire(f(v));
			});
		});
	}
};
tink_core_Future.flatMap = function(this1,next,gather) {
	var _g = this1.getStatus();
	switch(_g._hx_index) {
	case 3:
		var l = _g.result;
		return new tink_core__$Future_SuspendableFuture(function(fire) {
			return next(tink_core_Lazy.get(l)).handle(function(v) {
				fire(v);
			});
		});
	case 4:
		return tink_core_Future.NEVER;
	default:
		return new tink_core__$Future_SuspendableFuture(function($yield) {
			var inner = new tink_core_CallbackLinkRef();
			var outer = this1.handle(function(v) {
				var outer = next(v).handle($yield);
				inner.link = outer;
			});
			return new tink_core__$Callback_LinkPair(outer,inner);
		});
	}
};
tink_core_Future.next = function(this1,n) {
	return tink_core_Future.flatMap(this1,n);
};
tink_core_Future.gather = function(this1) {
	return this1;
};
tink_core_Future.merge = function(this1,that,combine) {
	var _g = this1.getStatus();
	var _g1 = that.getStatus();
	if(_g._hx_index == 4) {
		return tink_core_Future.NEVER;
	} else if(_g1._hx_index == 4) {
		return tink_core_Future.NEVER;
	} else {
		return new tink_core__$Future_SuspendableFuture(function($yield) {
			var check = function(v) {
				var _g = this1.getStatus();
				var _g1 = that.getStatus();
				if(_g._hx_index == 3) {
					if(_g1._hx_index == 3) {
						var b = _g1.result;
						var a = _g.result;
						$yield(combine(tink_core_Lazy.get(a),tink_core_Lazy.get(b)));
					}
				}
			};
			return new tink_core__$Callback_LinkPair(this1.handle(check),that.handle(check));
		});
	}
};
tink_core_Future.flatten = function(f) {
	return tink_core_Future.flatMap(f,function(v) {
		return v;
	});
};
tink_core_Future.ofJsPromise = function(promise) {
	return tink_core_Future.irreversible(function(cb) {
		promise.then(function(a) {
			var _g = cb;
			var a1 = tink_core_Outcome.Success(a);
			tink_core_Callback.defer(function() {
				_g(a1);
			});
		},function(e) {
			cb(tink_core_Outcome.Failure(tink_core_TypedError.withData(null,e.message,e,{ fileName : "tink/core/Future.hx", lineNumber : 158, className : "tink.core._Future.Future_Impl_", methodName : "ofJsPromise"})));
		});
	});
};
tink_core_Future.neverToAny = function(l) {
	return l;
};
tink_core_Future.ofAny = function(v) {
	return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(v));
};
tink_core_Future.asPromise = function(s) {
	return s;
};
tink_core_Future.ofMany = function(futures,gather) {
	return tink_core_Future.inSequence(futures);
};
tink_core_Future.inParallel = function(futures,concurrency) {
	return tink_core_Future.many(futures,concurrency);
};
tink_core_Future.inSequence = function(futures) {
	return tink_core_Future.many(futures,1);
};
tink_core_Future.many = function(a,concurrency) {
	return tink_core_Future.processMany(a,concurrency,tink_core_Outcome.Success,function(o) {
		return tink_core_OutcomeTools.orNull(o);
	});
};
tink_core_Future.processMany = function(a,concurrency,fn,lift) {
	if(a.length == 0) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(lift(tink_core_Outcome.Success([]))));
	} else {
		var this1 = new tink_core__$Future_SuspendableFuture(function($yield) {
			var links = [];
			var _g = [];
			var _g1 = 0;
			while(_g1 < a.length) {
				var x = a[_g1];
				++_g1;
				_g.push(null);
			}
			var ret = _g;
			var index = 0;
			var pending = 0;
			var done = false;
			var concurrency1;
			if(concurrency == null) {
				concurrency1 = a.length;
			} else {
				var v = concurrency;
				concurrency1 = v < 1 ? 1 : v > a.length ? a.length : v;
			}
			var fireWhenReady = function() {
				if(index == ret.length) {
					if(pending == 0) {
						var v = lift(tink_core_Outcome.Success(ret));
						done = true;
						$yield(v);
						return true;
					} else {
						return false;
					}
				} else {
					return false;
				}
			};
			var step = null;
			step = function() {
				if(!done && !fireWhenReady()) {
					while(index < ret.length) {
						index += 1;
						var index1 = [index - 1];
						var p = a[index1[0]];
						var check = [(function(index) {
							return function(o) {
								var _g = fn(o);
								switch(_g._hx_index) {
								case 0:
									var v = _g.data;
									ret[index[0]] = v;
									fireWhenReady();
									break;
								case 1:
									var e = _g.failure;
									var _g = 0;
									while(_g < links.length) {
										var l = links[_g];
										++_g;
										if(l != null) {
											l.cancel();
										}
									}
									var v = lift(tink_core_Outcome.Failure(e));
									done = true;
									$yield(v);
									break;
								}
							};
						})(index1)];
						var _g = p.getStatus();
						if(_g._hx_index == 3) {
							var _hx_tmp;
							_hx_tmp = tink_core_Lazy.get(_g.result);
							var v = _hx_tmp;
							check[0](v);
							if(!done) {
								continue;
							}
						} else {
							pending += 1;
							links.push(p.handle((function(check) {
								return function(o) {
									pending -= 1;
									check[0](o);
									if(!done) {
										step();
									}
								};
							})(check)));
						}
						break;
					}
				}
			};
			var _g = 0;
			var _g1 = concurrency1;
			while(_g < _g1) {
				var i = _g++;
				step();
			}
			return tink_core_CallbackLink.fromMany(links);
		});
		return this1;
	}
};
tink_core_Future.lazy = function(l) {
	return new tink_core__$Future_SyncFuture(l);
};
tink_core_Future.sync = function(v) {
	return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(v));
};
tink_core_Future.isFuture = function(maybeFuture) {
	return js_Boot.__implements(maybeFuture,tink_core__$Future_FutureObject);
};
tink_core_Future.async = function(init,lazy) {
	if(lazy == null) {
		lazy = false;
	}
	var ret = tink_core_Future.irreversible(init);
	if(lazy) {
		return ret;
	} else {
		ret.eager();
		return ret;
	}
};
tink_core_Future.irreversible = function(init) {
	return new tink_core__$Future_SuspendableFuture(function($yield) {
		init($yield);
		return null;
	});
};
tink_core_Future.or = function(a,b) {
	return tink_core_Future.first(a,b);
};
tink_core_Future.either = function(a,b) {
	return tink_core_Future.first(tink_core_Future.map(a,haxe_ds_Either.Left),tink_core_Future.map(b,haxe_ds_Either.Right));
};
tink_core_Future.and = function(a,b) {
	return tink_core_Future.merge(a,b,function(a,b) {
		var this1 = new tink_core_MPair(a,b);
		return this1;
	});
};
tink_core_Future._tryFailingFlatMap = function(f,map) {
	return tink_core_Future.flatMap(f,function(o) {
		switch(o._hx_index) {
		case 0:
			var d = o.data;
			return map(d);
		case 1:
			var f = o.failure;
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(f)));
		}
	});
};
tink_core_Future._tryFlatMap = function(f,map) {
	return tink_core_Future.flatMap(f,function(o) {
		switch(o._hx_index) {
		case 0:
			var d = o.data;
			return tink_core_Future.map(map(d),tink_core_Outcome.Success);
		case 1:
			var f = o.failure;
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(f)));
		}
	});
};
tink_core_Future._tryFailingMap = function(f,map) {
	return tink_core_Future.map(f,function(o) {
		return tink_core_OutcomeTools.flatMap(o,tink_core__$Outcome_OutcomeMapper.withSameError(map));
	});
};
tink_core_Future._tryMap = function(f,map) {
	return tink_core_Future.map(f,function(o) {
		return tink_core_OutcomeTools.map(o,map);
	});
};
tink_core_Future._flatMap = function(f,map) {
	return tink_core_Future.flatMap(f,map);
};
tink_core_Future._map = function(f,map) {
	return tink_core_Future.map(f,map);
};
tink_core_Future.trigger = function() {
	return new tink_core_FutureTrigger();
};
tink_core_Future.delay = function(ms,value) {
	var this1 = tink_core_Future.irreversible(function(cb) {
		haxe_Timer.delay(function() {
			cb(tink_core_Lazy.get(value));
		},ms);
	});
	this1.eager();
	return this1;
};
var stx_fn_Cycle = {};
stx_fn_Cycle._new = function(self) {
	var this1 = self;
	return this1;
};
stx_fn_Cycle.lift = function(self) {
	return stx_fn_Cycle._new(self);
};
stx_fn_Cycle.unit = function() {
	return stx_fn_Cycle.lift(function() {
		throw haxe_Exception.thrown(stx_fn_CYCLED.CYCLED);
	});
};
stx_fn_Cycle.fromFutureCycle = function(self) {
	return stx_fn_Cycle.lift(function() {
		return self;
	});
};
stx_fn_Cycle.fromWork = function(self) {
	var self1 = stx_fn_Work.prj(self);
	switch(self1._hx_index) {
	case 0:
		var t = self1.v;
		var ok = t;
		return stx_fn_Cycle.lift(function() {
			return ok;
		});
	case 1:
		return stx_fn_Cycle.ZERO;
	}
};
var stx_fn_CycleLift = function() { };
stx_fn_CycleLift.__name__ = "stx.fn.CycleLift";
stx_fn_CycleLift.lift = function(self) {
	return stx_fn_Cycle.lift(self);
};
stx_fn_CycleLift.seq = function(self,that) {
	return stx_fn_CycleLift.lift(function() {
		try {
			var tmp = self();
			var that1 = that;
			return tink_core_Future.map(tmp,function(self) {
				return stx_fn_CycleLift.seq(self,that1);
			});
		} catch( _g ) {
			haxe_NativeStackTrace.lastError = _g;
			if(js_Boot.__instanceof(haxe_Exception.caught(_g).unwrap(),stx_fn_CYCLED)) {
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(that));
			} else {
				throw _g;
			}
		}
	});
};
stx_fn_CycleLift.par = function(self,that) {
	return stx_fn_CycleLift.lift(function() {
		var l = haxe_ds_Option.None;
		var r = haxe_ds_Option.None;
		try {
			l = haxe_ds_Option.Some(self());
		} catch( _g ) {
			haxe_NativeStackTrace.lastError = _g;
			if(!js_Boot.__instanceof(haxe_Exception.caught(_g).unwrap(),stx_fn_CYCLED)) {
				throw _g;
			}
		}
		try {
			r = haxe_ds_Option.Some(that());
		} catch( _g ) {
			haxe_NativeStackTrace.lastError = _g;
			if(!js_Boot.__instanceof(haxe_Exception.caught(_g).unwrap(),stx_fn_CYCLED)) {
				throw _g;
			}
		}
		switch(l._hx_index) {
		case 0:
			var _g = l.v;
			switch(r._hx_index) {
			case 0:
				var r1 = r.v;
				var l = _g;
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(stx_fn_CycleLift.lift(function() {
					return tink_core_Future.map(tink_core_Future.inParallel([l,r1]),function(arr) {
						return stx_fn_CycleLift.par(arr[0],arr[1]);
					});
				})));
			case 1:
				var l1 = _g;
				return l1;
			}
			break;
		case 1:
			switch(r._hx_index) {
			case 0:
				var r2 = r.v;
				return r2;
			case 1:
				return stx_fn_Cycle.ZERO();
			}
			break;
		}
	});
};
stx_fn_CycleLift.submit = function(self) {
	var event = null;
	event = haxe_MainLoop.add(function() {
		try {
			var rec = null;
			rec = function(x) {
				try {
					x().handle(rec);
				} catch( _g ) {
					haxe_NativeStackTrace.lastError = _g;
					if(js_Boot.__instanceof(haxe_Exception.caught(_g).unwrap(),stx_fn_CYCLED)) {
						event.stop();
					} else {
						throw _g;
					}
				}
			};
			self().handle(rec);
		} catch( _g ) {
			haxe_NativeStackTrace.lastError = _g;
			if(js_Boot.__instanceof(haxe_Exception.caught(_g).unwrap(),stx_fn_CYCLED)) {
				event.stop();
			} else {
				throw _g;
			}
		}
	});
};
stx_fn_CycleLift.crunch = function(self) {
	try {
		self().handle(function(x) {
			stx_fn_CycleLift.crunch(x);
		});
	} catch( _g ) {
		haxe_NativeStackTrace.lastError = _g;
		if(!js_Boot.__instanceof(haxe_Exception.caught(_g).unwrap(),stx_fn_CYCLED)) {
			throw _g;
		}
	}
};
var stx_fn_DualLift = function() { };
stx_fn_DualLift.__name__ = "stx.fn.DualLift";
stx_fn_DualLift.then = function(self,then) {
	return stx_fn_Unary._.then(stx_fn_Dual.toUnary(self),then);
};
stx_fn_DualLift.into = function(self,fn) {
	return stx_fn_DualLift.then(self,stx_nano_lift_LiftNano.decouple(stx_nano_Wildcard.__,fn));
};
stx_fn_DualLift.pass = function(self,fn) {
	return stx_fn_Dual.fromUnary(stx_fn_DualLift.then(self,stx_nano_lift_LiftNano.decouple(stx_nano_Wildcard.__,fn)));
};
stx_fn_DualLift.first = function(self,fn) {
	return stx_fn_Dual.fromUnary(stx_fn_DualLift.then(self,stx_fn_UnaryLift.first(fn)));
};
stx_fn_DualLift.second = function(self,fn) {
	return stx_fn_Dual.fromUnary(stx_fn_DualLift.then(self,stx_fn_UnaryLift.second(fn)));
};
var stx_fn_Dual = {};
stx_fn_Dual.unit = function() {
	return stx_fn_Dual._new(function(tp) {
		return tp;
	});
};
stx_fn_Dual._new = function(self) {
	var this1 = self;
	return this1;
};
stx_fn_Dual.fromUnary = function(self) {
	return stx_fn_Dual._new(self);
};
stx_fn_Dual.toUnary = function(this1) {
	return this1;
};
var stx_fn_Module = function() {
	stx_pico_Clazz.call(this);
};
stx_fn_Module.__name__ = "stx.fn.Module";
stx_fn_Module.__super__ = stx_pico_Clazz;
stx_fn_Module.prototype = $extend(stx_pico_Clazz.prototype,{
	__class__: stx_fn_Module
});
var stx_fn_Perhaps = {};
stx_fn_Perhaps._new = function(self) {
	var this1 = self;
	return this1;
};
var stx_fn_Pick = {};
stx_fn_Pick._new = function(self) {
	var this1 = self;
	return this1;
};
stx_fn_Pick.leftPickToSwitch = function(fn) {
	return function(e) {
		switch(e._hx_index) {
		case 0:
			var v = e.v;
			return fn(v);
		case 1:
			var v = e.v;
			return haxe_ds_Either.Right(v);
		}
	};
};
stx_fn_Pick.rightPickToSwitch = function(fn) {
	return function(e) {
		switch(e._hx_index) {
		case 0:
			var v = e.v;
			return haxe_ds_Either.Left(v);
		case 1:
			var v = e.v;
			return fn(v);
		}
	};
};
var stx_fn_SinkLift = function() { };
stx_fn_SinkLift.__name__ = "stx.fn.SinkLift";
stx_fn_SinkLift.then = function(self,that) {
	var this1 = function(p) {
		self(p);
		that(p);
	};
	return this1;
};
stx_fn_SinkLift.bind = function(self,p) {
	return stx_fn_Block.lift(stx_fn_SinkLift.bind(self,p));
};
stx_fn_SinkLift.promote = function(self,r) {
	return function(p) {
		self(p);
		return r;
	};
};
stx_fn_SinkLift.compose = function(self,fn) {
	return function(pI) {
		self(fn(pI));
	};
};
var stx_fn_Sink = {};
stx_fn_Sink._new = function(self) {
	var this1 = self;
	return this1;
};
stx_fn_Sink.unit = function() {
	var this1 = function(p) {
	};
	return this1;
};
stx_fn_Sink.lift = function(fn) {
	var this1 = fn;
	return this1;
};
stx_fn_Sink.toTinkCallback = function(this1) {
	return this1;
};
stx_fn_Sink.stage = function(this1,before,after) {
	if(before == null) {
		before = function(_) {
		};
	}
	if(after == null) {
		after = function(_) {
		};
	}
	return function(p) {
		before(p);
		this1(p);
		after(p);
	};
};
stx_fn_Sink.prj = function(this1) {
	return this1;
};
var stx_fn_Switch = {};
stx_fn_Switch._new = function(self) {
	var this1 = self;
	return this1;
};
var stx_fn_TernaryLift = function() {
	stx_pico_Clazz.call(this);
};
stx_fn_TernaryLift.__name__ = "stx.fn.TernaryLift";
stx_fn_TernaryLift.rotate = function(f) {
	return function(pII,pIII,pI) {
		return f(pI,pII,pIII);
	};
};
stx_fn_TernaryLift.curry = function(f) {
	return function(pI) {
		return function(pII) {
			return function(pIII) {
				return f(pI,pII,pIII);
			};
		};
	};
};
stx_fn_TernaryLift.cache = function(self,pI,pII,pIII) {
	var r = null;
	return function() {
		if(r == null) {
			r = false;
			r = self(pI,pII,pIII);
			return r;
		} else {
			return r;
		}
	};
};
stx_fn_TernaryLift.equals = function(self,that) {
	return Reflect.compareMethods(self,that);
};
stx_fn_TernaryLift.__super__ = stx_pico_Clazz;
stx_fn_TernaryLift.prototype = $extend(stx_pico_Clazz.prototype,{
	__class__: stx_fn_TernaryLift
});
var stx_fn_Ternary = {};
stx_fn_Ternary._new = function(self) {
	var this1 = self;
	return this1;
};
var stx_fn_ThunkLift = function() {
	stx_pico_Clazz.call(this);
};
stx_fn_ThunkLift.__name__ = "stx.fn.ThunkLift";
stx_fn_ThunkLift.reply = function(self) {
	return self();
};
stx_fn_ThunkLift.cache = function(self) {
	var r = null;
	return function() {
		if(r == null) {
			r = false;
			r = self();
			return r;
		} else {
			return r;
		}
	};
};
stx_fn_ThunkLift.promote = function(self) {
	return function(p) {
		return self();
	};
};
stx_fn_ThunkLift.stage = function(f,before,after) {
	var state = before();
	var result = f();
	after(state);
	return result;
};
stx_fn_ThunkLift.equals = function(that,self) {
	return Reflect.compareMethods(self,that);
};
stx_fn_ThunkLift.then = function(that,self) {
	return function() {
		return that(self());
	};
};
stx_fn_ThunkLift.__super__ = stx_pico_Clazz;
stx_fn_ThunkLift.prototype = $extend(stx_pico_Clazz.prototype,{
	__class__: stx_fn_ThunkLift
});
var stx_fn_Thunk = {};
stx_fn_Thunk.lift = function(thk) {
	var this1 = thk;
	return this1;
};
stx_fn_Thunk._new = function(self) {
	var this1 = self;
	return this1;
};
stx_fn_Thunk.then = function(this1,that) {
	return stx_fn_Thunk._.then(that,this1);
};
stx_fn_Thunk.cache = function(this1) {
	return stx_fn_Thunk._.cache(this1);
};
stx_fn_Thunk.prj = function(this1) {
	return this1;
};
var stx_fn_UnaryLift = function() { };
stx_fn_UnaryLift.__name__ = "stx.fn.UnaryLift";
stx_fn_UnaryLift.apply = function(self,pI) {
	return self(pI);
};
stx_fn_UnaryLift.cache = function(self,pI) {
	var r = null;
	return function() {
		if(r == null) {
			r = false;
			r = self(pI);
			return r;
		} else {
			return r;
		}
	};
};
stx_fn_UnaryLift.pipe = function(self,pI) {
	return function() {
		return self(pI());
	};
};
stx_fn_UnaryLift.equals = function(self,that) {
	return Reflect.compareMethods(self,that);
};
stx_fn_UnaryLift.then = function(self,that) {
	return function(a) {
		return that(self(a));
	};
};
stx_fn_UnaryLift.compose = function(that,self) {
	return function(a) {
		return that(self(a));
	};
};
stx_fn_UnaryLift.dual = function(self) {
	return function(t) {
		return stx_nano_CoupleLift.decouple(t,function(l,r) {
			return stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,self(l),self(r));
		});
	};
};
stx_fn_UnaryLift.perhaps = function(self) {
	return function(x) {
		switch(x._hx_index) {
		case 0:
			var v = x.v;
			return haxe_ds_Option.Some(self(v));
		case 1:
			return haxe_ds_Option.None;
		}
	};
};
stx_fn_UnaryLift.first = function(fn1) {
	return function(t) {
		return stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,fn1(stx_nano_CoupleLift.fst(t)),stx_nano_CoupleLift.snd(t));
	};
};
stx_fn_UnaryLift.second = function(fn1) {
	return function(t) {
		return stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,stx_nano_CoupleLift.fst(t),fn1(stx_nano_CoupleLift.snd(t)));
	};
};
stx_fn_UnaryLift.bound = function(bindl,bindr) {
	var out = stx_fn_UnaryLift.then(stx_fn_UnaryLift.split(stx_fn_Unary.unit(),bindl),bindr);
	return out;
};
stx_fn_UnaryLift.broach = function(bindl) {
	return stx_fn_UnaryLift.bound(bindl,function(x) {
		return x;
	});
};
stx_fn_UnaryLift.split = function(self,that) {
	return function(p) {
		return stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,self(p),that(p));
	};
};
stx_fn_UnaryLift.fan = function(a) {
	return stx_fn_UnaryLift.then(a,function(x) {
		return stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,x,x);
	});
};
stx_fn_UnaryLift.pair = function(fn1,fn2) {
	return function(t) {
		return stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,fn1(stx_nano_CoupleLift.fst(t)),fn2(stx_nano_CoupleLift.snd(t)));
	};
};
stx_fn_UnaryLift.bindI = function(fn,p) {
	var _g = stx_fn_Unary.prj(fn);
	var a1 = p;
	return function() {
		return _g(a1);
	};
};
stx_fn_UnaryLift.sink = function(fn,handler) {
	var this1 = function(p) {
		var val = fn(p);
		handler(val);
	};
	return this1;
};
stx_fn_UnaryLift.arw = function(fn) {
	var fn1 = fn;
	return stx_fn_Arw._new(function(p,cont) {
		var res = stx_nano_lift_LiftNano.success(stx_nano_Wildcard.__,fn1(p));
		cont(res);
		return stx_fn_Work.unit();
	});
};
var stx_fn_Unary = {};
stx_fn_Unary._new = function(self) {
	var this1 = self;
	return this1;
};
stx_fn_Unary.lift = function(fn) {
	return stx_fn_Unary._new(fn);
};
stx_fn_Unary.unit = function() {
	return stx_fn_Unary.lift(function(x) {
		return x;
	});
};
stx_fn_Unary.pure = function(r) {
	return function(v) {
		return r;
	};
};
stx_fn_Unary.prj = function(this1) {
	return this1;
};
var stx_fn_Work = {};
stx_fn_Work.unit = function() {
	return stx_fn_Work.lift(haxe_ds_Option.None);
};
stx_fn_Work.wait = function() {
	return stx_fn_Bang._new();
};
stx_fn_Work._new = function(self) {
	var this1 = self;
	return this1;
};
stx_fn_Work.lift = function(self) {
	return stx_fn_Work._new(self);
};
stx_fn_Work.prj = function(this1) {
	return this1;
};
stx_fn_Work.get_self = function(this1) {
	return stx_fn_Work.lift(this1);
};
stx_fn_Work.fromFutureWork = function(ft) {
	return stx_fn_Work.lift(haxe_ds_Option.Some(tink_core_Future.flatMap(ft,function(bang) {
		var self = stx_fn_Work.prj(bang);
		switch(self._hx_index) {
		case 0:
			var t = self.v;
			return t;
		case 1:
			return tink_core_Future.irreversible(function(cb) {
				cb(stx_fn_Cycle.ZERO);
			});
		}
	})));
};
stx_fn_Work.toCycle = function(this1) {
	return stx_fn_Cycle.fromWork(this1);
};
var stx_fn_Bang = {};
stx_fn_Bang._new = function() {
	var this1 = new tink_core_FutureTrigger();
	return this1;
};
stx_fn_Bang.fill = function(this1,block) {
	this1.trigger(block);
};
stx_fn_Bang.done = function(this1) {
	this1.trigger(stx_fn_Cycle.ZERO);
};
stx_fn_Bang.toWork = function(this1) {
	return stx_fn_Work.lift(haxe_ds_Option.Some(this1));
};
var stx_fn_WorkLift = function() { };
stx_fn_WorkLift.__name__ = "stx.fn.WorkLift";
stx_fn_WorkLift.lift = function(self) {
	return stx_fn_Work.lift(self);
};
stx_fn_WorkLift.seq = function(self,that) {
	return stx_fn_WorkLift.lift(stx_pico_OptionLift.or(stx_pico_OptionLift.or(stx_pico_OptionLift.map(stx_nano_lift_LiftOptionNano.zip(stx_fn_Work.prj(self),stx_fn_Work.prj(that)),function(tp) {
		return stx_nano_CoupleLift.decouple(tp,function(lhs,rhs) {
			return tink_core_Future.map(tink_core_Future.inSequence([lhs,rhs]),function(arr) {
				return stx_fn_Cycle.lift(function() {
					var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,arr[0]);
					var v;
					if(self._hx_index == 0) {
						var v1 = self.v;
						v = v1;
					} else {
						v = stx_fn_Cycle.ZERO;
					}
					var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,arr[1]);
					var v1;
					if(self._hx_index == 0) {
						var v2 = self.v;
						v1 = v2;
					} else {
						v1 = stx_fn_Cycle.ZERO;
					}
					return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(stx_fn_CycleLift.seq(v,v1)));
				});
			});
		});
	}),function() {
		return stx_fn_Work.prj(self);
	}),function() {
		return stx_fn_Work.prj(that);
	}));
};
stx_fn_WorkLift.par = function(self,that) {
	return stx_fn_WorkLift.lift(stx_pico_OptionLift.or(stx_pico_OptionLift.or(stx_pico_OptionLift.map(stx_nano_lift_LiftOptionNano.zip(stx_fn_Work.prj(self),stx_fn_Work.prj(that)),function(tp) {
		return stx_nano_CoupleLift.decouple(tp,function(lhs,rhs) {
			return tink_core_Future.map(tink_core_Future.inParallel([lhs,rhs]),function(arr) {
				return stx_fn_Cycle.lift(function() {
					var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,arr[0]);
					var v;
					if(self._hx_index == 0) {
						var v1 = self.v;
						v = v1;
					} else {
						v = stx_fn_Cycle.ZERO;
					}
					var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,arr[1]);
					var v1;
					if(self._hx_index == 0) {
						var v2 = self.v;
						v1 = v2;
					} else {
						v1 = stx_fn_Cycle.ZERO;
					}
					return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(stx_fn_CycleLift.seq(v,v1)));
				});
			});
		});
	}),function() {
		return stx_fn_Work.prj(self);
	}),function() {
		return stx_fn_Work.prj(that);
	}));
};
var stx_fn_lift_LiftBroker = function() { };
stx_fn_lift_LiftBroker.__name__ = "stx.fn.lift.LiftBroker";
stx_fn_lift_LiftBroker.broker = function(v,fn) {
	return (fn(function(x) {
		return x;
	}))(v);
};
var stx_fp_ContinuationLift = function() { };
stx_fp_ContinuationLift.__name__ = "stx.fp.ContinuationLift";
stx_fp_ContinuationLift.apply = function(self,fn) {
	return self(fn);
};
stx_fp_ContinuationLift.map = function(self,fn) {
	return function(cont) {
		return self(function(p) {
			return cont(fn(p));
		});
	};
};
stx_fp_ContinuationLift.flat_map = function(self,fn) {
	return function(cont) {
		return self(function(p) {
			return (fn(p))(cont);
		});
	};
};
stx_fp_ContinuationLift.zip_with = function(self,that,fn) {
	return function(cont) {
		return self(function(p) {
			return that(function(pI) {
				return cont(fn(p,pI));
			});
		});
	};
};
stx_fp_ContinuationLift.mod = function(self,g) {
	return function(f) {
		return g(self(f));
	};
};
var stx_fp_Continuation = {};
stx_fp_Continuation.unit = function() {
	return function(fn) {
		return fn(null);
	};
};
stx_fp_Continuation.pure = function(p) {
	return function(fn) {
		return fn(p);
	};
};
stx_fp_Continuation.lift = function(fn) {
	return stx_fp_Continuation._new(fn);
};
stx_fp_Continuation._new = function(self) {
	var this1 = self;
	return this1;
};
stx_fp_Continuation.callcc = function(f) {
	return function(k) {
		return (f(function(p) {
			return stx_fp_Continuation.lift(function(_) {
				return k(p);
			});
		}))(k);
	};
};
stx_fp_Continuation.asFunction = function(this1) {
	return this1;
};
var stx_fp_Fix = $hxEnums["stx.fp.Fix"] = { __ename__:"stx.fp.Fix",__constructs__:null
	,FixOf: ($_=function(unfix) { return {_hx_index:0,unfix:unfix,__enum__:"stx.fp.Fix",toString:$estr}; },$_._hx_name="FixOf",$_.__params__ = ["unfix"],$_)
};
stx_fp_Fix.__constructs__ = [stx_fp_Fix.FixOf];
var stx_fp_FreeFSum = $hxEnums["stx.fp.FreeFSum"] = { __ename__:"stx.fp.FreeFSum",__constructs__:null
	,Pure: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"stx.fp.FreeFSum",toString:$estr}; },$_._hx_name="Pure",$_.__params__ = ["v"],$_)
	,Impure: ($_=function(kind) { return {_hx_index:1,kind:kind,__enum__:"stx.fp.FreeFSum",toString:$estr}; },$_._hx_name="Impure",$_.__params__ = ["kind"],$_)
};
stx_fp_FreeFSum.__constructs__ = [stx_fp_FreeFSum.Pure,stx_fp_FreeFSum.Impure];
var stx_fp_FreeF = {};
stx_fp_FreeF._new = function(self) {
	var this1 = self;
	return this1;
};
stx_fp_FreeF.lift = function(self) {
	return stx_fp_FreeF._new(self);
};
stx_fp_FreeF.prj = function(this1) {
	return this1;
};
stx_fp_FreeF.get_self = function(this1) {
	return stx_fp_FreeF.lift(this1);
};
var stx_fp_Handler = {};
stx_fp_Handler.lift = function(self) {
	return stx_fp_Handler._new(self);
};
stx_fp_Handler._new = function(self) {
	var this1 = self;
	return this1;
};
stx_fp_Handler.handle = function(this1,cb) {
	this1(cb);
};
stx_fp_Handler.callcc = function(f) {
	return function(k) {
		(f(function(p) {
			return stx_fp_Handler.lift(function(_) {
				k(p);
			});
		}))(k);
	};
};
var stx_fp_HandlerLift = function() { };
stx_fp_HandlerLift.__name__ = "stx.fp.HandlerLift";
stx_fp_HandlerLift.lift = function(self) {
	return stx_fp_Handler._new(self);
};
stx_fp_HandlerLift.apply = function(self,fn) {
	stx_fp_ContinuationLift.apply(self,fn);
};
stx_fp_HandlerLift.map = function(self,fn) {
	return stx_fp_HandlerLift.lift(stx_fp_ContinuationLift.map(self,fn));
};
stx_fp_HandlerLift.flat_map = function(self,fn) {
	return stx_fp_HandlerLift.lift(stx_fp_ContinuationLift.flat_map(self,fn));
};
stx_fp_HandlerLift.zip_with = function(self,that,fn) {
	return stx_fp_HandlerLift.lift(stx_fp_ContinuationLift.zip_with(self,that,fn));
};
var stx_fp_KindApi = function() { };
stx_fp_KindApi.__name__ = "stx.fp.KindApi";
stx_fp_KindApi.__isInterface__ = true;
stx_fp_KindApi.prototype = {
	fix: null
	,__class__: stx_fp_KindApi
};
var stx_fp_Kind = {};
stx_fp_Kind._new = function(self) {
	var this1 = self;
	return this1;
};
stx_fp_Kind.lift = function(self) {
	return stx_fp_Kind._new(self);
};
stx_fp_Kind.prj = function(this1) {
	return this1;
};
stx_fp_Kind.get_self = function(this1) {
	return stx_fp_Kind.lift(this1);
};
var stx_fp_LazyStreamTrigger = {};
stx_fp_LazyStreamTrigger._new = function(self) {
	var this1 = self;
	return this1;
};
stx_fp_LazyStreamTrigger.lift = function(self) {
	return stx_fp_LazyStreamTrigger._new(self);
};
stx_fp_LazyStreamTrigger.fromFn = function(fn) {
	return { next : fn};
};
stx_fp_LazyStreamTrigger.prj = function(this1) {
	return this1;
};
stx_fp_LazyStreamTrigger.get_self = function(this1) {
	return stx_fp_LazyStreamTrigger.lift(this1);
};
var stx_fp_LazyStreamSum = $hxEnums["stx.fp.LazyStreamSum"] = { __ename__:"stx.fp.LazyStreamSum",__constructs__:null
	,LazyVal: ($_=function(val,next) { return {_hx_index:0,val:val,next:next,__enum__:"stx.fp.LazyStreamSum",toString:$estr}; },$_._hx_name="LazyVal",$_.__params__ = ["val","next"],$_)
};
stx_fp_LazyStreamSum.__constructs__ = [stx_fp_LazyStreamSum.LazyVal];
var stx_fp_LazyStream = {};
stx_fp_LazyStream._new = function(self) {
	var this1 = self;
	return this1;
};
stx_fp_LazyStream.lift = function(self) {
	return self;
};
stx_fp_LazyStream.zero = function() {
	return stx_fp_LazyStream.ZERO;
};
stx_fp_LazyStream.fromRec = function(v) {
	var v1 = v;
	return stx_fp_LazyStream.lift(stx_fp_LazyStreamSum.LazyVal(stx_pico_Option.fromNullT(v()),stx_fp_LazyStreamTrigger.fromFn(function() {
		return stx_fp_LazyStream.fromRec(v1);
	})));
};
stx_fp_LazyStream.fromTuple = function(tp) {
	return stx_fp_LazyStream.lift(stx_fp_LazyStreamSum.LazyVal(stx_nano_CoupleLift.fst(tp),stx_nano_CoupleLift.snd(tp)));
};
stx_fp_LazyStream.make = function(xs,x) {
	return stx_fp_LazyStream.fromTuple(stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,x,xs));
};
stx_fp_LazyStream.unit = function() {
	return stx_fp_LazyStreamSum.LazyVal(null,stx_fp_LazyStreamTrigger.fromFn(stx_fp_LazyStream.unit));
};
stx_fp_LazyStream.pure = function(x) {
	return stx_fp_LazyStream.make(stx_fp_LazyStreamTrigger.fromFn(stx_fp_LazyStream.unit),x);
};
stx_fp_LazyStream.reply = function(this1) {
	var val = this1.val;
	var next = this1.next;
	return stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,val,next);
};
var stx_fp_Monoid = {};
stx_fp_Monoid._new = function(self) {
	var this1 = self;
	return this1;
};
stx_fp_Monoid.put = function(this1,v) {
	return { unit : function() {
		return this1.plus(this1.unit(),v);
	}, plus : function(l,r) {
		return this1.plus(l,r);
	}};
};
stx_fp_Monoid.into = function(this1,next,fn) {
	return stx_fp_Monoid.put(this1,fn(this1,next));
};
var stx_fp_SemiGroup = {};
stx_fp_SemiGroup._new = function(self) {
	var this1 = self;
	return this1;
};
var stx_fp_State = {};
stx_fp_State._new = function(self) {
	var this1 = self;
	return this1;
};
stx_fp_State.unit = function() {
	return function(p) {
		return stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,null,p);
	};
};
stx_fp_State.pure = function(r) {
	return function(p) {
		return stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,r,p);
	};
};
var stx_fp_StateLift = function() { };
stx_fp_StateLift.__name__ = "stx.fp.StateLift";
stx_fp_StateLift.exec = function(self,p) {
	return stx_nano_CoupleLift.snd(self(p));
};
stx_fp_StateLift.eval = function(self,p) {
	return stx_nano_CoupleLift.fst(self(p));
};
stx_fp_StateLift.map = function(self,fn) {
	return function(p) {
		return stx_nano_CoupleLift.decouple(self(p),function(r,p) {
			return stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,fn(r),p);
		});
	};
};
stx_fp_StateLift.mod = function(self,fn) {
	return function(p) {
		return stx_nano_CoupleLift.decouple(self(p),function(r,p) {
			return stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,r,fn(p));
		});
	};
};
stx_fp_StateLift.flat_map = function(self,fn) {
	return function(p) {
		return stx_nano_CoupleLift.decouple(self(p),function(r,p) {
			return (fn(r))(p);
		});
	};
};
var stx_http_Client = function() { };
stx_http_Client.__name__ = "stx.http.Client";
stx_http_Client.client = function(wildcard) {
	return new stx_http_client_Module();
};
var stx_http_client_Configured = function(config) {
	stx_pico_Clazz.call(this);
	this.config = config;
};
stx_http_client_Configured.__name__ = "stx.http.client.Configured";
stx_http_client_Configured.__super__ = stx_pico_Clazz;
stx_http_client_Configured.prototype = $extend(stx_pico_Clazz.prototype,{
	config: null
	,__class__: stx_http_client_Configured
});
var stx_http_client_Content = {};
stx_http_client_Content.lift = function(self) {
	return stx_http_client_Content._new(self);
};
stx_http_client_Content._new = function(self) {
	var this1 = self;
	return this1;
};
stx_http_client_Content.fromT = function(v) {
	return stx_http_client_Content._new(v);
};
var stx_http_client_Fetch = function() { };
stx_http_client_Fetch.__name__ = "stx.http.client.Fetch";
stx_http_client_Fetch.apply = function(extractor,req) {
	return stx_nano_Pledge.flat_map(stx_nano_lift_LiftJsPromiseToPledge.toPledge(node_$fetch_Fetch(stx_http_client_Request.toNodeFetchRequest(req)),{ fileName : "src/main/haxe/stx/http/client/Fetch.hx", lineNumber : 5, className : "stx.http.client.Fetch", methodName : "apply"}),function(res) {
		return new stx_http_client_RemotingContextCtr().pull0(extractor,req,stx_http_client_Response.fromNodeFetchResponse(res));
	});
};
var stx_http_client_HeaderId = {};
stx_http_client_HeaderId.toString = function(this1) {
	return this1;
};
var stx_http_client_Headers = {};
stx_http_client_Headers._new = function(self) {
	var this1;
	var self1 = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,self);
	if(self1._hx_index == 0) {
		var v = self1.v;
		this1 = v;
	} else {
		this1 = [];
	}
	return this1;
};
stx_http_client_Headers.unit = function() {
	return stx_http_client_Headers.lift([]);
};
stx_http_client_Headers.lift = function(self) {
	return stx_http_client_Headers._new(self);
};
stx_http_client_Headers.toNodeFetchHeaders = function(this1) {
	var next = new node_$fetch_Headers();
	var _g = 0;
	while(_g < this1.length) {
		var tp = this1[_g];
		++_g;
		var a = tp.l;
		var b = tp.r;
		next.set(stx_http_client_HeaderId.toString(a),b);
	}
	return next;
};
stx_http_client_Headers.fromNodeFetchHeaders = function(self) {
	var res = [];
	self.forEach(function(value,name) {
		res.push(stx_Tup2.tuple2(name,value));
	});
	return stx_http_client_Headers.lift(res);
};
stx_http_client_Headers.prj = function(this1) {
	return this1;
};
stx_http_client_Headers.get_self = function(this1) {
	return stx_http_client_Headers.lift(this1);
};
stx_http_client_Headers.copy = function(this1) {
	return this1.slice();
};
stx_http_client_Headers.toArray = function(this1) {
	return this1;
};
stx_http_client_Headers.concat = function(this1,rhs) {
	return stx_http_client_Headers.lift(this1.concat(stx_http_client_Headers.toArray(rhs)));
};
var stx_http_client_HeadersCtrApi = function() { };
stx_http_client_HeadersCtrApi.__name__ = "stx.http.client.HeadersCtrApi";
stx_http_client_HeadersCtrApi.__isInterface__ = true;
stx_http_client_HeadersCtrApi.prototype = {
	unit: null
	,json: null
	,conf: null
	,__class__: stx_http_client_HeadersCtrApi
};
var stx_http_client_HeadersCtr = function() {
	stx_pico_Clazz.call(this);
};
stx_http_client_HeadersCtr.__name__ = "stx.http.client.HeadersCtr";
stx_http_client_HeadersCtr.__interfaces__ = [stx_http_client_HeadersCtrApi];
stx_http_client_HeadersCtr.__super__ = stx_pico_Clazz;
stx_http_client_HeadersCtr.prototype = $extend(stx_pico_Clazz.prototype,{
	unit: function() {
		var headers = stx_http_client_Headers._new([stx_Tup2.tuple2("Accept","*/*"),stx_Tup2.tuple2("Connection","keep-alive")]);
		return headers;
	}
	,json: function() {
		return stx_lift_ArrayLift.snoc(this.unit(),stx_Tup2.tuple2("Content-Type","application/json"));
	}
	,conf: function(data) {
		var headers = this.unit();
		var _g = 0;
		while(_g < data.length) {
			var v = data[_g];
			++_g;
			headers.push(stx_Tup2.tuple2(stx_nano_CoupleLift.fst(v),stx_nano_CoupleLift.snd(v)));
		}
		return headers;
	}
	,__class__: stx_http_client_HeadersCtr
});
var stx_http_client_HttpMethod = {};
stx_http_client_HttpMethod.equals = function(this1,str) {
	return str == this1;
};
stx_http_client_HttpMethod.toString = function(this1) {
	return this1;
};
stx_http_client_HttpMethod.fromString = function(str) {
	switch(str) {
	case "DELETE":
		return stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,"DELETE");
	case "GET":
		return stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,"GET");
	case "HEAD":
		return stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,"HEAD");
	case "PATCH":
		return stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,"PATCH");
	case "POST":
		return stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,"POST");
	default:
		return stx_pico_Option.unit();
	}
};
var stx_http_client_Module = function() {
	stx_pico_Clazz.call(this);
};
stx_http_client_Module.__name__ = "stx.http.client.Module";
stx_http_client_Module.__super__ = stx_pico_Clazz;
stx_http_client_Module.prototype = $extend(stx_pico_Clazz.prototype,{
	ctx: function(ext,req,res) {
		return new stx_http_client_RemotingContextCtr().pull0(ext,req,res);
	}
	,fetch: function(ext,req) {
		var _gthis = this;
		var self = stx_nano_lift_LiftJsPromiseToPledge.toPledge(node_$fetch_Fetch(stx_http_client_Request.toNodeFetchRequest(req)),{ fileName : "src/main/haxe/stx/http/client/Module.hx", lineNumber : 8, className : "stx.http.client.Module", methodName : "fetch"});
		var fn = stx_nano_lift_LiftNano.command(stx_nano_Wildcard.__,stx_nano_lift_LiftNano.trace(stx_nano_Wildcard.__,{ fileName : "src/main/haxe/stx/http/client/Module.hx", lineNumber : 10, className : "stx.http.client.Module", methodName : "fetch"}));
		return stx_nano_Pledge.flat_map(stx_nano_PledgeLift.errata(self,function(x) {
			return x.map(fn);
		}),function(res) {
			return _gthis.ctx(ext,req,stx_http_client_Response.fromNodeFetchResponse(res));
		});
	}
	,__class__: stx_http_client_Module
});
var stx_http_client_RemotingContext = function(internal,request,response,extract) {
	this.internal = internal;
	this.request = request;
	this.response = response;
	this.extract = extract;
};
stx_http_client_RemotingContext.__name__ = "stx.http.client.RemotingContext";
stx_http_client_RemotingContext.prototype = {
	extract: null
	,request: null
	,response: null
	,internal: null
	,error: null
	,get_error: function() {
		var payload = this.try_get_payload();
		var self = stx_pico_OptionLift.flat_map(payload,($_=this.internal.value,$bind($_,$_.extract)));
		var value_error;
		switch(self._hx_index) {
		case 0:
			var t = self.v;
			switch(t._hx_index) {
			case 0:
				var t1 = t.t;
				value_error = stx_nano_Defect.unit();
				break;
			case 1:
				var e = t.e;
				value_error = e;
				break;
			}
			break;
		case 1:
			value_error = stx_nano_Defect.unit();
			break;
		}
		var error_error = this.internal.error.extract(this.response);
		return value_error.concat(error_error);
	}
	,value: null
	,get_value: function() {
		var self = stx_pico_OptionLift.flat_map(this.try_get_payload(),($_=this.internal.value,$bind($_,$_.extract)));
		switch(self._hx_index) {
		case 0:
			var t = self.v;
			switch(t._hx_index) {
			case 0:
				var t1 = t.t;
				return stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,t1);
			case 1:
				var e = t.e;
				return stx_pico_Option.unit();
			}
			break;
		case 1:
			return stx_pico_Option.unit();
		}
	}
	,try_get_payload: function() {
		try {
			return stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,this.extract);
		} catch( _g ) {
			haxe_NativeStackTrace.lastError = _g;
			return stx_pico_Option.unit();
		}
	}
	,__class__: stx_http_client_RemotingContext
};
var stx_http_client_RemotingContextCtr = function() {
	stx_pico_Clazz.call(this);
};
stx_http_client_RemotingContextCtr.__name__ = "stx.http.client.RemotingContextCtr";
stx_http_client_RemotingContextCtr.__super__ = stx_pico_Clazz;
stx_http_client_RemotingContextCtr.prototype = $extend(stx_pico_Clazz.prototype,{
	pull0: function(extractor,req,res) {
		var rectifier = function(err) {
			var _g = err.data;
			if(_g._hx_index == 0) {
				var _g1 = _g.v;
				if(_g1._hx_index == 0) {
					if(_g1.v.type == "json") {
						return stx_nano_lift_LiftNano.accept(stx_nano_Wildcard.__,new stx_http_client_RemotingContext(extractor,req,res,null));
					} else {
						return stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,err);
					}
				} else {
					return stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,err);
				}
			} else {
				return stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,err);
			}
		};
		var self = res.decode();
		var er = stx_fn_UnaryLift.then(rectifier,stx_nano_Pledge.make);
		switch(self._hx_index) {
		case 0:
			var t = self.t;
			return stx_nano_PledgeLift.rectify(stx_nano_Pledge.map(t,function(dyn) {
				return new stx_http_client_RemotingContext(extractor,req,res,dyn);
			}),rectifier);
		case 1:
			var e = self.e;
			return er(e);
		}
	}
	,__class__: stx_http_client_RemotingContextCtr
});
var stx_http_client_RemotingContextExtractor = {};
stx_http_client_RemotingContextExtractor._new = function(self) {
	var this1 = self;
	return this1;
};
stx_http_client_RemotingContextExtractor.lift = function(self) {
	return stx_http_client_RemotingContextExtractor._new(self);
};
stx_http_client_RemotingContextExtractor.prj = function(this1) {
	return this1;
};
stx_http_client_RemotingContextExtractor.get_self = function(this1) {
	return stx_http_client_RemotingContextExtractor.lift(this1);
};
stx_http_client_RemotingContextExtractor.unit = function() {
	return { value : { extract : function(dyn) {
		return stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,stx_nano_lift_LiftNano.success(stx_nano_Wildcard.__,dyn));
	}}, error : { extract : function(res) {
		return stx_nano_Defect.unit();
	}}};
};
stx_http_client_RemotingContextExtractor.adjust = function(this1,fn) {
	return stx_http_client_RemotingContextExtractor.lift({ value : { extract : function(dyn) {
		return stx_pico_OptionLift.map(this1.value.extract(dyn),function(oc) {
			return stx_pico_OutcomeLift.flat_map(oc,fn);
		});
	}}, error : { extract : ($_=this1.error,$bind($_,$_.extract))}});
};
var stx_http_client_RequestCls = function(url,method,headers,body) {
	this.url = url;
	this.method = method;
	this.headers = headers;
	this.body = body;
};
stx_http_client_RequestCls.__name__ = "stx.http.client.RequestCls";
stx_http_client_RequestCls.prototype = {
	url: null
	,method: null
	,headers: null
	,body: null
	,toString: function() {
		return JSON.stringify(this,null," ");
	}
	,__class__: stx_http_client_RequestCls
};
var stx_http_client_Request = {};
stx_http_client_Request._new = function(self) {
	var this1 = self;
	return this1;
};
stx_http_client_Request.lift = function(self) {
	return stx_http_client_Request._new(self);
};
stx_http_client_Request.make = function(method,url,headers,body) {
	return stx_LiftIf.if_else(stx_pico_OptionLift.is_defined(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,body)),function() {
		return new stx_http_client_RequestCls(url,method,headers,body);
	},function() {
		return new stx_http_client_RequestCls(url,method,headers,null);
	});
};
stx_http_client_Request.toNodeFetchRequest = function(this1) {
	var headers = new node_$fetch_Headers();
	var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,this1.headers);
	var v = stx_http_client_Headers._new();
	var _this;
	if(self._hx_index == 0) {
		var v1 = self.v;
		_this = v1;
	} else {
		_this = v;
	}
	var _g_current = 0;
	var _g_array = _this;
	while(_g_current < _g_array.length) {
		var i = _g_array[_g_current++];
		var l = i.l;
		var r = i.r;
		var l1 = i.l;
		var r1 = i.r;
		headers.set(stx_http_client_HeaderId.toString(l),r1);
	}
	if(this1.method == "POST") {
		return new node_$fetch_Request({ href : this1.url},{ body : JSON.stringify(this1.body), headers : headers, method : this1.method});
	} else {
		return new node_$fetch_Request({ href : this1.url},{ headers : headers, method : this1.method});
	}
};
stx_http_client_Request.copy = function(this1,method,url,headers,body) {
	var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,method);
	var tmp;
	if(self._hx_index == 0) {
		var v = self.v;
		tmp = v;
	} else {
		tmp = this1.method;
	}
	var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,url);
	var tmp1;
	if(self._hx_index == 0) {
		var v = self.v;
		tmp1 = v;
	} else {
		tmp1 = this1.url;
	}
	var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,stx_http_client_Headers.copy(headers));
	var v = stx_http_client_Headers.copy(this1.headers);
	var tmp2;
	if(self._hx_index == 0) {
		var v1 = self.v;
		tmp2 = v1;
	} else {
		tmp2 = v;
	}
	var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,body);
	var tmp3;
	if(self._hx_index == 0) {
		var v = self.v;
		tmp3 = v;
	} else {
		tmp3 = this1.body;
	}
	return stx_http_client_Request.make(tmp,tmp1,tmp2,tmp3);
};
stx_http_client_Request.prj = function(this1) {
	return this1;
};
stx_http_client_Request.get_self = function(this1) {
	return stx_http_client_Request.lift(this1);
};
var stx_http_client_RequestCtr = function() {
	stx_pico_Clazz.call(this);
};
stx_http_client_RequestCtr.__name__ = "stx.http.client.RequestCtr";
stx_http_client_RequestCtr.__super__ = stx_pico_Clazz;
stx_http_client_RequestCtr.prototype = $extend(stx_pico_Clazz.prototype,{
	make: function(config,method,node,headers,body) {
		return stx_http_client_Request.make(method,"" + config.base + "/" + node,stx_http_client_Headers.concat(config.options.headers,headers),body);
	}
	,__class__: stx_http_client_RequestCtr
});
var stx_http_client_RequestOptions = {};
stx_http_client_RequestOptions.toRequestInit = function(this1) {
	return { headers : stx_http_client_Headers.toNodeFetchHeaders(this1.headers)};
};
var stx_http_client_RequestOptionsLift = function() { };
stx_http_client_RequestOptionsLift.__name__ = "stx.http.client.RequestOptionsLift";
stx_http_client_RequestOptionsLift.fill = function(self,url,body,method) {
	if(method == null) {
		method = "GET";
	}
	return new stx_http_client_RequestCls(url,method,self.headers,body);
};
var stx_http_client_RequestOptionsCtrApi = function() { };
stx_http_client_RequestOptionsCtrApi.__name__ = "stx.http.client.RequestOptionsCtrApi";
stx_http_client_RequestOptionsCtrApi.__isInterface__ = true;
stx_http_client_RequestOptionsCtrApi.prototype = {
	pure: null
	,make: null
	,__class__: stx_http_client_RequestOptionsCtrApi
};
var stx_http_client_RequestOptionsCtr = function() {
	stx_pico_Clazz.call(this);
};
stx_http_client_RequestOptionsCtr.__name__ = "stx.http.client.RequestOptionsCtr";
stx_http_client_RequestOptionsCtr.__interfaces__ = [stx_http_client_RequestOptionsCtrApi];
stx_http_client_RequestOptionsCtr.__super__ = stx_pico_Clazz;
stx_http_client_RequestOptionsCtr.prototype = $extend(stx_pico_Clazz.prototype,{
	pure: function(headers) {
		return { headers : headers, agent : "vanguardia/ov8"};
	}
	,make: function(headers,url,body,method) {
		if(method == null) {
			method = "GET";
		}
		var request = this.pure(headers);
		return stx_http_client_RequestOptionsLift.fill(request,url,body,method);
	}
	,__class__: stx_http_client_RequestOptionsCtr
});
var stx_http_client_Response = {};
stx_http_client_Response._new = function(self) {
	var this1 = self;
	return this1;
};
stx_http_client_Response.lift = function(self) {
	return stx_http_client_Response._new(self);
};
stx_http_client_Response.make = function(code,decode,headers,messages) {
	var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,headers);
	var tmp;
	if(self._hx_index == 0) {
		var v = self.v;
		tmp = v;
	} else {
		tmp = stx_http_client_Headers.unit();
	}
	var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,messages);
	var tmp1;
	if(self._hx_index == 0) {
		var v = self.v;
		tmp1 = v;
	} else {
		tmp1 = [];
	}
	return stx_http_client_Response.lift({ code : code, decode : decode, headers : tmp, messages : tmp1});
};
stx_http_client_Response.fromNodeFetchResponse = function(self) {
	return stx_http_client_Response.make(Math.round(self.status),function() {
		try {
			return stx_nano_lift_LiftNano.accept(stx_nano_Wildcard.__,stx_nano_PledgeLift.rectify(stx_nano_lift_LiftJsPromiseToPledge.toPledge(self.json(),{ fileName : "src/main/haxe/stx/http/client/Response.hx", lineNumber : 29, className : "stx.http.client._Response.Response_Impl_", methodName : "fromNodeFetchResponse"}),function(err) {
				var pos = { fileName : "src/main/haxe/stx/http/client/Response.hx", lineNumber : 30, className : "stx.http.client._Response.Response_Impl_", methodName : "fromNodeFetchResponse"};
				var _g = (function(t) {
					haxe_Log.trace(t,pos);
					return t;
				})(err.data);
				if(_g._hx_index == 0) {
					var _g1 = _g.v;
					if(_g1._hx_index == 1) {
						var str = _g1.spec;
						var match = stx_nano_CharsLift.starts_with(stx_nano_Chars.lift(stx_nano_FailCode.toString(str)),"FetchError:");
						haxe_Log.trace("\"" + (str == null ? "null" : stx_nano_FailCode.toString(str)) + "\" " + (match == null ? "null" : "" + match),{ fileName : "src/main/haxe/stx/http/client/Response.hx", lineNumber : 33, className : "stx.http.client._Response.Response_Impl_", methodName : "fromNodeFetchResponse"});
						if(StringTools.startsWith(stx_nano_FailCode.toString(str),"FetchError: invalid json")) {
							haxe_Log.trace("JERE",{ fileName : "src/main/haxe/stx/http/client/Response.hx", lineNumber : 35, className : "stx.http.client._Response.Response_Impl_", methodName : "fromNodeFetchResponse"});
							var this1 = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,{ fileName : "src/main/haxe/stx/http/client/Response.hx", lineNumber : 36, className : "stx.http.client._Response.Response_Impl_", methodName : "fromNodeFetchResponse"});
							return stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,new stx_nano_Err(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,stx_nano_FailureSum.ERR_OF(stx_failure_StxHttpClientFailure.E_HttpClient_CantDecode("json"))),haxe_ds_Option.None,this1));
						} else {
							return stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,err);
						}
					} else {
						return stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,err);
					}
				} else {
					return stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,err);
				}
			}));
		} catch( _g ) {
			haxe_NativeStackTrace.lastError = _g;
			var this1 = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,{ fileName : "src/main/haxe/stx/http/client/Response.hx", lineNumber : 46, className : "stx.http.client._Response.Response_Impl_", methodName : "fromNodeFetchResponse"});
			return stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,new stx_nano_Err(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,stx_nano_FailureSum.ERR_OF(stx_failure_StxHttpClientFailure.E_HttpClient_CantDecode("json"))),haxe_ds_Option.None,this1));
		}
	},stx_http_client_Headers.fromNodeFetchHeaders(self.headers),[{ message : self.statusText}]);
};
stx_http_client_Response.prj = function(this1) {
	return this1;
};
stx_http_client_Response.get_self = function(this1) {
	return stx_http_client_Response.lift(this1);
};
var stx_http_client_ResponseMessage = {};
stx_http_client_ResponseMessage._new = function(self) {
	var this1 = self;
	return this1;
};
stx_http_client_ResponseMessage.lift = function(self) {
	return stx_http_client_ResponseMessage._new(self);
};
stx_http_client_ResponseMessage.prj = function(this1) {
	return this1;
};
stx_http_client_ResponseMessage.get_self = function(this1) {
	return stx_http_client_ResponseMessage.lift(this1);
};
var stx_lift_ArrayLift = function() { };
stx_lift_ArrayLift.__name__ = "stx.lift.ArrayLift";
stx_lift_ArrayLift.flatten = function(arrs) {
	var res = [];
	var _g = 0;
	while(_g < arrs.length) {
		var arr = arrs[_g];
		++_g;
		var _g1 = 0;
		while(_g1 < arr.length) {
			var e = arr[_g1];
			++_g1;
			res.push(e);
		}
	}
	return res;
};
stx_lift_ArrayLift.interleave = function(alls) {
	var res = [];
	if(alls.length > 0) {
		var minLength = alls[0].length;
		var _g = 0;
		while(_g < alls.length) {
			var e = alls[_g];
			++_g;
			minLength = Math.min(minLength,e.length) | 0;
		}
		var length = minLength;
		var i = 0;
		while(i < length) {
			var _g = 0;
			while(_g < alls.length) {
				var arr = alls[_g];
				++_g;
				res.push(arr[i]);
			}
			++i;
		}
	}
	return res;
};
stx_lift_ArrayLift.is_defined = function(self) {
	return self.length > 0;
};
stx_lift_ArrayLift.cons = function(self,t) {
	var copy = stx_lift_ArrayLift.copy(self);
	copy.unshift(t);
	return copy;
};
stx_lift_ArrayLift.snoc = function(self,t) {
	var copy = stx_lift_ArrayLift.copy(self);
	copy.push(t);
	return copy;
};
stx_lift_ArrayLift.set = function(self,i,v) {
	var arr0 = self.slice();
	arr0[i] = v;
	return arr0;
};
stx_lift_ArrayLift.get = function(self,i) {
	return self[i];
};
stx_lift_ArrayLift.head = function(self) {
	if(self.length == 0) {
		return haxe_ds_Option.None;
	} else if(self[0] == null) {
		return haxe_ds_Option.None;
	} else {
		return haxe_ds_Option.Some(self[0]);
	}
};
stx_lift_ArrayLift.tail = function(self) {
	return self.slice(1);
};
stx_lift_ArrayLift.last = function(self) {
	var v = self[self.length > 0 ? self.length - 1 : 0];
	if(v == null) {
		return haxe_ds_Option.None;
	} else {
		return haxe_ds_Option.Some(v);
	}
};
stx_lift_ArrayLift.copy = function(self) {
	return [].concat(self);
};
stx_lift_ArrayLift.concat = function(self,that) {
	var acc = stx_lift_ArrayLift.copy(self);
	var _g = 0;
	while(_g < self.length) {
		var e = self[_g];
		++_g;
		acc.push(e);
	}
	return acc;
};
stx_lift_ArrayLift.bind_fold = function(self,pure,init,bind,fold) {
	return stx_lift_ArrayLift.lfold(self,function(next,memo) {
		return bind(memo,function(b) {
			return pure(fold(next,b));
		});
	},pure(init));
};
stx_lift_ArrayLift.reduce = function(self,unit,pure,plus) {
	return stx_lift_ArrayLift.lfold(self,function(next,memo) {
		return plus(memo,pure(next));
	},unit());
};
stx_lift_ArrayLift.map = function(self,fn) {
	var n = [];
	var _g = 0;
	while(_g < self.length) {
		var e = self[_g];
		++_g;
		n.push(fn(e));
	}
	return n;
};
stx_lift_ArrayLift.mapi = function(self,fn) {
	var n = [];
	var e = null;
	var _g = 0;
	var _g1 = self.length;
	while(_g < _g1) {
		var i = _g++;
		e = self[i];
		n.push(fn(i,e));
	}
	return n;
};
stx_lift_ArrayLift.flat_map = function(self,fn) {
	var n = [];
	var _g = 0;
	while(_g < self.length) {
		var e1 = self[_g];
		++_g;
		var e2 = $getIterator(fn(e1));
		while(e2.hasNext()) {
			var e21 = e2.next();
			n.push(e21);
		}
	}
	return n;
};
stx_lift_ArrayLift.lfold = function(self,fn,memo) {
	var r = memo;
	var _g = 0;
	while(_g < self.length) {
		var e = self[_g];
		++_g;
		r = fn(e,r);
	}
	return r;
};
stx_lift_ArrayLift.lfold1 = function(self,fn) {
	var folded = stx_lift_ArrayLift.head(self);
	var tail = stx_lift_ArrayLift.tail(self);
	return stx_pico_OptionLift.map(folded,function(memo) {
		var _g = 0;
		while(_g < tail.length) {
			var item = tail[_g];
			++_g;
			memo = fn(memo,item);
		}
		return memo;
	});
};
stx_lift_ArrayLift.rfold = function(self,fn,z) {
	var r = z;
	var _g = 0;
	var _g1 = self.length;
	while(_g < _g1) {
		var i = _g++;
		var e = self[self.length - 1 - i];
		r = fn(e,r);
	}
	return r;
};
stx_lift_ArrayLift.rfold1 = function(self,fn) {
	return stx_lift_ArrayLift.lfold1(stx_lift_ArrayLift.lfold(self,function(b,a) {
		a.unshift(b);
		return a;
	},[]),fn);
};
stx_lift_ArrayLift.lscan = function(self,f,init) {
	var accum = init;
	var result = [init];
	var _g = 0;
	while(_g < self.length) {
		var e = self[_g];
		++_g;
		result.push(f(e,accum));
	}
	return result;
};
stx_lift_ArrayLift.lscan1 = function(self,f) {
	var result = [];
	if(0 == self.length) {
		return result;
	}
	var accum = self[0];
	result.push(accum);
	var _g = 1;
	var _g1 = self.length;
	while(_g < _g1) {
		var i = _g++;
		result.push(f(self[i],accum));
	}
	return result;
};
stx_lift_ArrayLift.rscan = function(self,init,f) {
	var a = self.slice();
	a.reverse();
	return stx_lift_ArrayLift.lscan(a,f,init);
};
stx_lift_ArrayLift.rscan1 = function(self,f) {
	var a = self.slice();
	a.reverse();
	return stx_lift_ArrayLift.lscan1(a,f);
};
stx_lift_ArrayLift.filter = function(self,fn) {
	var n = [];
	var _g = 0;
	while(_g < self.length) {
		var e = self[_g];
		++_g;
		if(fn(e)) {
			n.push(e);
		}
	}
	return n;
};
stx_lift_ArrayLift.map_filter = function(self,fn) {
	return stx_lift_ArrayLift.lfold(self,function(next,memo) {
		var _g = fn(next);
		if(_g._hx_index == 0) {
			var v = _g.v;
			return stx_lift_ArrayLift.snoc(memo,v);
		} else {
			return memo;
		}
	},[]);
};
stx_lift_ArrayLift.whilst = function(self,fn) {
	var r = [];
	var _g = 0;
	while(_g < self.length) {
		var e = self[_g];
		++_g;
		if(fn(e)) {
			r.push(e);
		} else {
			break;
		}
	}
	return r;
};
stx_lift_ArrayLift.ltaken = function(self,n) {
	return self.slice(0,Math.min(n,self.length) | 0);
};
stx_lift_ArrayLift.ldropn = function(self,n) {
	if(n >= self.length) {
		return [];
	} else {
		return self.slice(n);
	}
};
stx_lift_ArrayLift.rdropn = function(self,n) {
	if(self != null && n >= self.length) {
		return [];
	} else {
		return self.splice(0,self.length - n);
	}
};
stx_lift_ArrayLift.ldrop = function(self,p) {
	var r = [].concat(self);
	var _g = 0;
	while(_g < self.length) {
		var e = self[_g];
		++_g;
		if(p(e)) {
			r.shift();
		} else {
			break;
		}
	}
	return r;
};
stx_lift_ArrayLift.search = function(self,fn) {
	var out = haxe_ds_Option.None;
	var _g = 0;
	while(_g < self.length) {
		var el = self[_g];
		++_g;
		if(fn(el)) {
			out = haxe_ds_Option.Some(el);
			break;
		}
	}
	return out;
};
stx_lift_ArrayLift.all = function(self,fn) {
	return stx_lift_ArrayLift.lfold(self,function(b,a) {
		if(a) {
			return fn(b);
		} else {
			return false;
		}
	},true);
};
stx_lift_ArrayLift.any = function(self,fn) {
	return stx_lift_ArrayLift.lfold(self,function(b,a) {
		if(a) {
			return true;
		} else {
			return fn(b);
		}
	},false);
};
stx_lift_ArrayLift.zip_with = function(self,that,fn) {
	var next = [];
	var lower = Math.min(self.length,that.length) | 0;
	var _g = 0;
	var _g1 = lower;
	while(_g < _g1) {
		var i = _g++;
		next.push(fn(self[i],that[i]));
	}
	return next;
};
stx_lift_ArrayLift.cross_with = function(self,that,fn) {
	var r = [];
	var _g = 0;
	while(_g < self.length) {
		var va = self[_g];
		++_g;
		var _g1 = 0;
		while(_g1 < that.length) {
			var vb = that[_g1];
			++_g1;
			r.push(fn(va,vb));
		}
	}
	return r;
};
stx_lift_ArrayLift.difference_with = function(self,that,eq) {
	var res = [];
	var _g = 0;
	while(_g < self.length) {
		var e = [self[_g]];
		++_g;
		if(!stx_lift_ArrayLift.any(that,(function(e) {
			return function(x) {
				return eq(x,e[0]);
			};
		})(e))) {
			res.push(e[0]);
		}
	}
	return res;
};
stx_lift_ArrayLift.union_with = function(self,that,eq) {
	var res = [];
	var _g = 0;
	while(_g < self.length) {
		var e = self[_g];
		++_g;
		res.push(e);
	}
	var _g = 0;
	while(_g < that.length) {
		var e = [that[_g]];
		++_g;
		if(!stx_lift_ArrayLift.any(res,(function(e) {
			return function(x) {
				return eq(x,e[0]);
			};
		})(e))) {
			res.push(e[0]);
		}
	}
	return res;
};
stx_lift_ArrayLift.unique_with = function(self,eq) {
	var r = [];
	var _g = 0;
	while(_g < self.length) {
		var e = self[_g];
		++_g;
		var exists = stx_lift_ArrayLift.any(r,(function(_g,a1) {
			return function(a2) {
				return _g[0](a1[0],a2);
			};
		})([eq],[e]));
		var val = stx_lift_ArrayLift.search(r,(function(_g,a1) {
			return function(a2) {
				return _g[0](a1[0],a2);
			};
		})([eq],[e]));
		if(!exists) {
			r.push(e);
		}
	}
	return r;
};
stx_lift_ArrayLift.nub_with = function(self,f) {
	return stx_lift_ArrayLift.lfold(self,function(b,a) {
		var _g = f;
		var a1 = b;
		if(stx_lift_ArrayLift.any(a,function(a2) {
			return _g(a1,a2);
		})) {
			return a;
		} else {
			return stx_lift_ArrayLift.snoc(a,b);
		}
	},[]);
};
stx_lift_ArrayLift.intersect_with = function(self,that,f) {
	return stx_lift_ArrayLift.lfold(self,function(next,memo) {
		var _g = f;
		var a1 = next;
		var _g1 = function(a2) {
			return _g(a1,a2);
		};
		if(stx_lift_ArrayLift.any(that,_g1) == true) {
			return stx_lift_ArrayLift.snoc(memo,next);
		} else {
			return memo;
		}
	},[]);
};
stx_lift_ArrayLift.reversed = function(self) {
	return stx_lift_ArrayLift.lfold(self,function(b,a) {
		a.unshift(b);
		return a;
	},[]);
};
stx_lift_ArrayLift.count = function(self,f) {
	return stx_lift_ArrayLift.lfold(self,function(b,a) {
		return a + (f(b) ? 1 : 0);
	},0);
};
stx_lift_ArrayLift.size = function(self) {
	return self.length;
};
stx_lift_ArrayLift.index_of = function(self,t) {
	var index = 0;
	var ok = false;
	var _g = 0;
	while(_g < self.length) {
		var e = self[_g];
		++_g;
		if(t(e)) {
			ok = true;
			break;
		}
		++index;
	}
	if(ok) {
		return index;
	} else {
		return -1;
	}
};
stx_lift_ArrayLift.has = function(self,obj) {
	var index = self.indexOf(obj);
	if(index == -1) {
		return haxe_ds_Option.None;
	} else {
		return haxe_ds_Option.Some(index);
	}
};
stx_lift_ArrayLift.partition = function(self,f) {
	return stx_lift_ArrayLift.lfold(self,function(next,memo) {
		if(f(next)) {
			memo.a.push(next);
		} else {
			memo.b.push(next);
		}
		return memo;
	},{ a : [], b : []});
};
stx_lift_ArrayLift.chunk = function(self,size) {
	var slices = [];
	var rest = 0;
	var _g = 0;
	while(_g < size.length) {
		var n = size[_g];
		++_g;
		var next = rest + n;
		var slice = self.slice(rest,next);
		slices.push(slice);
		rest = next;
	}
	return slices;
};
stx_lift_ArrayLift.pad = function(self,len,val) {
	var len0 = len - self.length;
	var arr0 = [];
	var _g = 0;
	var _g1 = len0;
	while(_g < _g1) {
		var i = _g++;
		arr0.push(val);
	}
	return self.concat(arr0);
};
stx_lift_ArrayLift.fill = function(self,def) {
	var result = new Array(self.length);
	var _g = 0;
	var _g1 = self.length;
	while(_g < _g1) {
		var i = _g++;
		var x = self[i];
		result[i] = x == null ? def : x;
	}
	return result;
};
stx_lift_ArrayLift.toIterable = function(self) {
	return self;
};
stx_lift_ArrayLift.toMap = function(self) {
	var mp = new haxe_ds_StringMap();
	var _g = 0;
	while(_g < self.length) {
		var tp = self[_g];
		++_g;
		var val = tp();
		mp.h[val.a] = val.b;
	}
	return mp;
};
stx_lift_ArrayLift.random = function(self) {
	var len = self.length;
	var ind = Math.round(Math.random() * (len - 1));
	return self[ind];
};
stx_lift_ArrayLift.shuffle = function(self) {
	var res = [];
	var cp = self.slice();
	while(cp.length > 0) {
		var randArray = Math.floor(Math.random() * cp.length);
		res.push(cp.splice(randArray,1)[0]);
	}
	return res;
};
stx_lift_ArrayLift.and_with = function(self,that,eq) {
	return stx_lift_ArrayLift.lfold(stx_lift_ArrayLift.zip_with(self,that,function(l,r) {
		return { a : l, b : r};
	}),function(next,memo) {
		if(memo) {
			if(eq(next.a,next.b)) {
				return eq(next.a,next.b);
			} else {
				return false;
			}
		} else {
			return memo;
		}
	},true);
};
stx_lift_ArrayLift.rotate = function(self,num) {
	num %= self.length;
	var l = stx_lift_ArrayLift.ltaken(self,num);
	var r = stx_lift_ArrayLift.ldropn(self,num);
	if(num < 0) {
		return stx_lift_ArrayLift.concat(l,r);
	} else if(num > 1) {
		return stx_lift_ArrayLift.concat(l,r);
	} else {
		return self;
	}
};
stx_lift_ArrayLift.iterator = function(self) {
	return new haxe_iterators_ArrayIterator(self);
};
stx_lift_ArrayLift.elide = function(self) {
	return stx_lift_ArrayLift.map(self,function(v) {
		return v;
	});
};
stx_lift_ArrayLift.prj = function(self) {
	return self;
};
var stx_log_EntryCtr = function() {
	stx_pico_Clazz.call(this);
};
stx_log_EntryCtr.__name__ = "stx.log.EntryCtr";
stx_log_EntryCtr.__super__ = stx_pico_Clazz;
stx_log_EntryCtr.prototype = $extend(stx_pico_Clazz.prototype,{
	make: function(val,ctr) {
		return { val : val, ctr : ctr};
	}
	,pure: function(val) {
		return { val : val, ctr : Std.string};
	}
	,thunk: function(fn) {
		return { val : null, ctr : function(_) {
			return Std.string(fn());
		}};
	}
	,json: function(val) {
		return { val : val, ctr : function(x) {
			return JSON.stringify(x,null," ");
		}};
	}
	,show: function(val) {
		return { val : val, ctr : function(x) {
			return stx_Show.show(stx_nano_Wildcard.__,x);
		}};
	}
	,__class__: stx_log_EntryCtr
});
var stx_log_Includes = {};
stx_log_Includes.clear = function(this1) {
	while(this1.length > 0) this1.pop();
};
var stx_log_Level = {};
stx_log_Level._new = function(self) {
	var this1 = self;
	return this1;
};
stx_log_Level.asInt = function(this1) {
	var int = this1;
	return int;
};
stx_log_Level.toString = function(this1) {
	switch(this1) {
	case 0:
		return "CRAZY";
	case 1:
		return "TRACE";
	case 2:
		return "DEBUG";
	case 3:
		return "INFO";
	case 4:
		return "WARN";
	case 5:
		return "ERROR";
	case 6:
		return "FATAL";
	}
};
var stx_log_LogCustomParameters = {};
stx_log_LogCustomParameters._new = function(self) {
	var this1;
	var self1 = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,self);
	if(self1._hx_index == 0) {
		var v = self1.v;
		this1 = v;
	} else {
		this1 = [];
	}
	return this1;
};
stx_log_LogCustomParameters.get_stamp = function(this1) {
	var obj = null;
	var _g = 0;
	while(_g < this1.length) {
		var x = this1[_g];
		++_g;
		var clazz = js_Boot.getClass(x);
		if(clazz == stx_log_Stamp) {
			obj = x;
			break;
		}
	}
	if(obj == null) {
		obj = new stx_log_Stamp();
		this1.push(obj);
	}
	return obj;
};
stx_log_LogCustomParameters.restamp = function(this1,fn) {
	var self = stx_lift_ArrayLift.search(stx_lift_ArrayLift.mapi(this1,function(tI,tII) {
		return stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,tI,tII);
	}),function(tp) {
		return stx_log_LogCustomParameters.is_stamp(stx_nano_CoupleLift.snd(tp));
	});
	var indexed;
	if(self._hx_index == 0) {
		var v = self.v;
		indexed = v;
	} else {
		var stamp = new stx_log_Stamp();
		var index = this1.length;
		this1[index] = stamp;
		indexed = stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,index,stamp);
	}
	var next_stamp = fn(stx_nano_CoupleLift.snd(indexed));
	var copy = this1.slice();
	copy[stx_nano_CoupleLift.fst(indexed)] = next_stamp;
	return copy;
};
stx_log_LogCustomParameters.is_stamp = function(v) {
	var clazz = js_Boot.getClass(v);
	return clazz == stx_log_Stamp;
};
var stx_log_LogFileName = {};
stx_log_LogFileName._new = function(self) {
	var this1 = self;
	return this1;
};
stx_log_LogFileName.lift = function(self) {
	return stx_log_LogFileName._new(self);
};
stx_log_LogFileName.get_pack = function(this1) {
	var parts = this1.split(stx_nano_lift_LiftNano.sep(stx_nano_Wildcard.__));
	parts.pop();
	return parts;
};
stx_log_LogFileName.get_canonical = function(this1) {
	var a = this1.split(".")[0];
	var canonical = a.split(stx_nano_lift_LiftNano.sep(stx_nano_Wildcard.__)).join(".");
	return canonical;
};
stx_log_LogFileName.prj = function(this1) {
	return this1;
};
stx_log_LogFileName.get_self = function(this1) {
	return stx_log_LogFileName.lift(this1);
};
var stx_log_ScopeSum = $hxEnums["stx.log.ScopeSum"] = { __ename__:"stx.log.ScopeSum",__constructs__:null
	,ScopeMethod: {_hx_name:"ScopeMethod",_hx_index:0,__enum__:"stx.log.ScopeSum",toString:$estr}
	,ScopeClass: {_hx_name:"ScopeClass",_hx_index:1,__enum__:"stx.log.ScopeSum",toString:$estr}
	,ScopeModule: {_hx_name:"ScopeModule",_hx_index:2,__enum__:"stx.log.ScopeSum",toString:$estr}
};
stx_log_ScopeSum.__constructs__ = [stx_log_ScopeSum.ScopeMethod,stx_log_ScopeSum.ScopeClass,stx_log_ScopeSum.ScopeModule];
var stx_log_Scoping = function(method,type,$module) {
	this.method = method;
	this.type = type;
	this.module = $module;
};
stx_log_Scoping.__name__ = "stx.log.Scoping";
stx_log_Scoping.prototype = {
	method: null
	,type: null
	,module: null
	,copy: function(method,type,$module) {
		var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,method);
		var tmp;
		if(self._hx_index == 0) {
			var v = self.v;
			tmp = v;
		} else {
			tmp = this.method;
		}
		var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,type);
		var tmp1;
		if(self._hx_index == 0) {
			var v = self.v;
			tmp1 = v;
		} else {
			tmp1 = this.type;
		}
		var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,$module);
		var tmp2;
		if(self._hx_index == 0) {
			var v = self.v;
			tmp2 = v;
		} else {
			tmp2 = this.module;
		}
		return new stx_log_Scoping(tmp,tmp1,tmp2);
	}
	,with_method: function(name) {
		return this.copy(name);
	}
	,toString: function() {
		return "(" + this.module + "::" + this.type + "::" + this.method + ")";
	}
	,__class__: stx_log_Scoping
};
var stx_log__$Signal_NullSignalCls = function() {
	stx_log__$Signal_SignalCls.call(this);
};
stx_log__$Signal_NullSignalCls.__name__ = "stx.log._Signal.NullSignalCls";
stx_log__$Signal_NullSignalCls.__super__ = stx_log__$Signal_SignalCls;
stx_log__$Signal_NullSignalCls.prototype = $extend(stx_log__$Signal_SignalCls.prototype,{
	trigger: function(v) {
	}
	,__class__: stx_log__$Signal_NullSignalCls
});
var stx_log_DebugLogger = function(logic,format) {
	stx_log_Logger.call(this,logic,format);
};
stx_log_DebugLogger.__name__ = "stx.log.DebugLogger";
stx_log_DebugLogger.__super__ = stx_log_Logger;
stx_log_DebugLogger.prototype = $extend(stx_log_Logger.prototype,{
	__class__: stx_log_DebugLogger
});
var stx_log_Stamp = function(id,level,timestamp,tags,hidden) {
	if(hidden == null) {
		hidden = false;
	}
	var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,id);
	var tmp;
	if(self._hx_index == 0) {
		var v = self.v;
		tmp = v;
	} else {
		var _g = function(value) {
			return stx_nano_lift_LiftNano.uuid(stx_nano_Wildcard.__,value);
		};
		var value = "xxxxx";
		tmp = (function() {
			return _g(value);
		})();
	}
	this.id = tmp;
	var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,level);
	var tmp;
	if(self._hx_index == 0) {
		var v = self.v;
		tmp = v;
	} else {
		tmp = 0;
	}
	this.level = tmp;
	var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,timestamp);
	var tmp;
	if(self._hx_index == 0) {
		var v = self.v;
		tmp = v;
	} else {
		tmp = _$Date_Date_$Impl_$.now();
	}
	this.timestamp = tmp;
	var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,tags);
	var tmp;
	if(self._hx_index == 0) {
		var v = self.v;
		tmp = v;
	} else {
		tmp = [];
	}
	this.tags = tmp;
	this.hidden = hidden;
};
stx_log_Stamp.__name__ = "stx.log.Stamp";
stx_log_Stamp.prototype = {
	id: null
	,level: null
	,timestamp: null
	,tags: null
	,hidden: null
	,copy: function(id,level,timestamp,tags,hidden) {
		var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,id);
		var tmp;
		if(self._hx_index == 0) {
			var v = self.v;
			tmp = v;
		} else {
			tmp = this.id;
		}
		var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,level);
		var tmp1;
		if(self._hx_index == 0) {
			var v = self.v;
			tmp1 = v;
		} else {
			tmp1 = this.level;
		}
		var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,timestamp);
		var tmp2;
		if(self._hx_index == 0) {
			var v = self.v;
			tmp2 = v;
		} else {
			tmp2 = this.timestamp;
		}
		var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,tags);
		var tmp3;
		if(self._hx_index == 0) {
			var v = self.v;
			tmp3 = v;
		} else {
			tmp3 = this.tags;
		}
		var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,hidden);
		var tmp4;
		if(self._hx_index == 0) {
			var v = self.v;
			tmp4 = v;
		} else {
			tmp4 = this.hidden;
		}
		return new stx_log_Stamp(tmp,tmp1,tmp2,tmp3,tmp4);
	}
	,relevel: function(level) {
		return this.copy(null,level);
	}
	,tag: function(tag) {
		return this.copy(null,null,null,stx_lift_ArrayLift.snoc(this.tags,tag));
	}
	,hide: function() {
		return this.copy(this.id,this.level,this.timestamp,this.tags,true);
	}
	,toString: function() {
		var time = HxOverrides.dateStr(this.timestamp);
		var lev = stx_log_Level.toString(this.level);
		var out = "Stamp(" + lev + " " + time + ")";
		return out;
	}
	,is_zero: function() {
		return this == stx_log_Stamp.ZERO;
	}
	,__class__: stx_log_Stamp
};
var stx_log_StringCtr = {};
stx_log_StringCtr._new = function(self) {
	var this1 = self;
	return this1;
};
stx_log_StringCtr.unit = function() {
	return stx_log_StringCtr.lift({ ctr : Std.string});
};
stx_log_StringCtr.lift = function(self) {
	return stx_log_StringCtr._new(self);
};
stx_log_StringCtr.capture = function(this1,val) {
	return { ctr : $bind(this1,this1.ctr), val : val};
};
stx_log_StringCtr.prj = function(this1) {
	return this1;
};
stx_log_StringCtr.get_self = function(this1) {
	return stx_log_StringCtr.lift(this1);
};
var stx_log_Stringify = {};
stx_log_Stringify.fromString = function(str) {
	return function(ctr) {
		return stx_log_core_Entry.fromString(str);
	};
};
var stx_log_core_Entry = {};
stx_log_core_Entry._new = function(self) {
	var this1 = self;
	return this1;
};
stx_log_core_Entry.fromString = function(str) {
	return stx_log_core_Entry._new({ ctr : function(_) {
		return str;
	}, val : null});
};
stx_log_core_Entry.toString = function(this1) {
	return this1.ctr(this1.val);
};
var stx_log_filter_term_PosPredicate = function(delegate) {
	stx_log_Filter.call(this);
	this.delegate = delegate;
};
stx_log_filter_term_PosPredicate.__name__ = "stx.log.filter.term.PosPredicate";
stx_log_filter_term_PosPredicate.__super__ = stx_log_Filter;
stx_log_filter_term_PosPredicate.prototype = $extend(stx_log_Filter.prototype,{
	delegate: null
	,applyI: function(value) {
		return this.delegate.applyI(value.source);
	}
	,__class__: stx_log_filter_term_PosPredicate
});
var stx_log_filter_term_Race = function() {
	stx_log_Filter.call(this);
	this.races = [];
};
stx_log_filter_term_Race.__name__ = "stx.log.filter.term.Race";
stx_log_filter_term_Race.__super__ = stx_log_Filter;
stx_log_filter_term_Race.prototype = $extend(stx_log_Filter.prototype,{
	races: null
	,applyI: function(value) {
		var race = Lambda.fold(this.races,function(next,memo) {
			var race;
			switch(memo._hx_index) {
			case 0:
				var t = memo.v;
				var v = t;
				race = stx_nano_lift_LiftNano.if_else(next.timestamp > v.timestamp,function() {
					return haxe_ds_Option.Some(next);
				},function() {
					return haxe_ds_Option.Some(v);
				});
				break;
			case 1:
				race = haxe_ds_Option.Some(next);
				break;
			}
			return race;
		},haxe_ds_Option.None);
		if(race._hx_index == 0) {
			var v = race.v;
			haxe_Log.trace("wins race",{ fileName : "stx/log/filter/term/Race.hx", lineNumber : 24, className : "stx.log.filter.term.Race", methodName : "applyI"});
			var out = stx_log_LogPosition.match(value.source,v);
			if(out) {
				haxe_Log.trace("wins race",{ fileName : "stx/log/filter/term/Race.hx", lineNumber : 27, className : "stx.log.filter.term.Race", methodName : "applyI"});
			}
			return stx_nano_lift_LiftNano.if_else(out,function() {
				return stx_nano_Report.unit();
			},function() {
				var this1 = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,{ fileName : "stx/log/filter/term/Race.hx", lineNumber : 29, className : "stx.log.filter.term.Race", methodName : "applyI"});
				return stx_nano_Report.pure(new stx_nano_Err(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,stx_nano_FailureSum.ERR_OF(stx_fail_LogFailure.E_Log_LosesRace)),haxe_ds_Option.None,this1));
			});
		} else {
			var this1 = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,{ fileName : "stx/log/filter/term/Race.hx", lineNumber : 30, className : "stx.log.filter.term.Race", methodName : "applyI"});
			return stx_nano_Report.pure(new stx_nano_Err(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,stx_nano_FailureSum.ERR_OF(stx_fail_LogFailure.E_Log_LosesRace)),haxe_ds_Option.None,this1));
		}
	}
	,__class__: stx_log_filter_term_Race
});
var stx_log_filter_term_race_Stamp = {};
stx_log_filter_term_race_Stamp._new = function(self) {
	var this1 = self;
	return this1;
};
stx_log_filter_term_race_Stamp.lift = function(self) {
	return stx_log_filter_term_race_Stamp._new(self);
};
stx_log_filter_term_race_Stamp.make = function(scoping,timestamp,scope) {
	var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,scope);
	var tmp;
	if(self._hx_index == 0) {
		var v = self.v;
		tmp = v;
	} else {
		tmp = stx_log_ScopeSum.ScopeMethod;
	}
	return { scoping : scoping, timestamp : timestamp, scope : tmp};
};
stx_log_filter_term_race_Stamp.prj = function(this1) {
	return this1;
};
stx_log_filter_term_race_Stamp.get_self = function(this1) {
	return stx_log_filter_term_race_Stamp.lift(this1);
};
var stx_log_output_term_Js = function() {
	stx_pico_Clazz.call(this);
};
stx_log_output_term_Js.__name__ = "stx.log.output.term.Js";
stx_log_output_term_Js.__interfaces__ = [stx_log_OutputApi];
stx_log_output_term_Js.__super__ = stx_pico_Clazz;
stx_log_output_term_Js.prototype = $extend(stx_pico_Clazz.prototype,{
	render: function(v,si) {
		var msg = "";
		msg += js_Boot.__string_rec(v,"");
		var d;
		var tmp;
		if(typeof(document) != "undefined") {
			d = document.getElementById("haxe:trace");
			tmp = d != null;
		} else {
			tmp = false;
		}
		if(tmp) {
			d.innerHTML += __unhtml(msg) + "<br/>";
		} else if(typeof console != "undefined" && console.log != null) {
			console.log(msg);
		}
	}
	,__class__: stx_log_output_term_Js
});
var stx_nano_AlertLift = function() { };
stx_nano_AlertLift.__name__ = "stx.nano.AlertLift";
stx_nano_AlertLift.fold = function(self,pure,unit) {
	return tink_core_Future.map(self,function(report) {
		return stx_nano_ReportLift.fold(report,pure,unit);
	});
};
stx_nano_AlertLift.execute = function(self,fn) {
	return tink_core_Future.flatMap(self,function(report) {
		return stx_nano_ReportLift.fold(report,function(err) {
			return stx_nano_Alert.pure(err);
		},function() {
			return fn();
		});
	});
};
stx_nano_AlertLift.adjust = function(self,fn) {
	return stx_nano_Alert.lift(tink_core_Future.flatMap(self,function(report) {
		return fn(report);
	}));
};
stx_nano_AlertLift.tap = function(self,fn,pos) {
	return stx_nano_Alert.lift(tink_core_Future.map(self,function(report) {
		fn(report,pos);
		return report;
	}));
};
stx_nano_AlertLift.flat_fold = function(self,ers,nil) {
	return tink_core_Future.flatMap(self,function(report) {
		return stx_nano_ReportLift.fold(report,ers,nil);
	});
};
stx_nano_AlertLift.resolve = function(self,val) {
	return stx_nano_Pledge.lift(stx_nano_AlertLift.fold(self,function(e) {
		return stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,e);
	},function() {
		return stx_nano_lift_LiftNano.accept(stx_nano_Wildcard.__,val);
	}));
};
stx_nano_AlertLift.ignore = function(self,fn) {
	return stx_nano_Alert.lift(tink_core_Future.map(self,function(report) {
		return stx_nano_ReportLift.ignore(report,fn);
	}));
};
stx_nano_AlertLift.anyway = function(self,fn) {
	return tink_core_Future.flatMap(self,function(report) {
		return stx_nano_Alert.prj(fn(report));
	});
};
var stx_nano_Alert = {};
stx_nano_Alert.unit = function() {
	return tink_core_Future.irreversible(function(cb) {
		cb(stx_nano_Report.unit());
	});
};
stx_nano_Alert.pure = function(e) {
	return tink_core_Future.irreversible(function(cb) {
		cb(stx_nano_Report.pure(e));
	});
};
stx_nano_Alert.make = function(self) {
	return tink_core_Future.irreversible(function(cb) {
		cb(self);
	});
};
stx_nano_Alert.any = function(arr) {
	return stx_nano_Alert.lift(stx_nano_lift_LiftNano.nano(stx_nano_Wildcard.__).Ft().bind_fold(arr,function(next,memo) {
		return tink_core_Future.map(stx_nano_Alert.prj(next),function(report) {
			return stx_nano_ReportLift.merge(memo,report);
		});
	},stx_nano_Report.unit()));
};
stx_nano_Alert.seq = function(arr,fn) {
	return stx_nano_Alert.lift(stx_nano_lift_LiftNano.nano(stx_nano_Wildcard.__).Ft().bind_fold(arr,function(next,memo) {
		return stx_nano_ReportLift.fold(memo,function(err) {
			return stx_nano_Report.alert(err.report());
		},function() {
			return fn(next);
		});
	},stx_nano_Report.unit()));
};
stx_nano_Alert._new = function(self) {
	var this1 = self;
	return this1;
};
stx_nano_Alert.lift = function(self) {
	return stx_nano_Alert._new(self);
};
stx_nano_Alert.prj = function(this1) {
	return this1;
};
stx_nano_Alert.get_self = function(this1) {
	return stx_nano_Alert.lift(this1);
};
stx_nano_Alert.errata = function(this1,fn) {
	return tink_core_Future.map(this1,function(report) {
		return stx_nano_Report.errata(report,fn);
	});
};
stx_nano_Alert.errate = function(this1,fn) {
	return stx_nano_Alert.errata(this1,function(err) {
		return err.map(fn);
	});
};
stx_nano_Alert.handle = function(this1,fn) {
	return this1.handle(fn);
};
var stx_nano_Blob = {};
stx_nano_Blob.asInt = function(this1) {
	return this1;
};
stx_nano_Blob.asString = function(this1) {
	return this1;
};
stx_nano_Blob.asBool = function(this1) {
	return this1;
};
stx_nano_Blob.asFloat = function(this1) {
	return this1;
};
stx_nano_Blob.typeof = function(this1) {
	return Type.typeof(this1);
};
var stx_nano_Bools = function() { };
stx_nano_Bools.__name__ = "stx.nano.Bools";
stx_nano_Bools.truthiness = function(str) {
	var self = stx_pico_OptionLift.map(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,str),StringTools.trim);
	var _g;
	if(self._hx_index == 0) {
		var v = self.v;
		_g = v;
	} else {
		_g = null;
	}
	if(_g == null) {
		return false;
	} else {
		switch(_g) {
		case "0":
			return false;
		case "1":
			return true;
		case "false":
			return false;
		case "true":
			return true;
		default:
			return true;
		}
	}
};
stx_nano_Bools.existishness = function(str) {
	if(str == null) {
		return false;
	} else if(str == "") {
		return false;
	} else {
		return true;
	}
};
var stx_nano_Char = {};
stx_nano_Char._new = function(self) {
	var this1 = self;
	return this1;
};
stx_nano_Char.code = function(this1) {
	return HxOverrides.cca(this1,0);
};
var stx_nano_CharsLift = function() { };
stx_nano_CharsLift.__name__ = "stx.nano.CharsLift";
stx_nano_CharsLift.parse_bool = function(self) {
	var vLower = self.toLowerCase();
	switch(vLower) {
	case "false":
		return haxe_ds_Option.Some(false);
	case "true":
		switch(self) {
		case "0":
			return haxe_ds_Option.Some(false);
		case "1":
			return haxe_ds_Option.Some(true);
		default:
			return haxe_ds_Option.Some(true);
		}
		break;
	default:
		switch(self) {
		case "0":
			return haxe_ds_Option.Some(false);
		case "1":
			return haxe_ds_Option.Some(true);
		default:
			return haxe_ds_Option.None;
		}
	}
};
stx_nano_CharsLift.parse_int = function(self) {
	return stx_pico_OptionLift.filter(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,Std.parseInt(self)),function(i) {
		return !isNaN(i);
	});
};
stx_nano_CharsLift.parse_float = function(self) {
	return stx_pico_OptionLift.filter(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,parseFloat(self)),function(i) {
		return !isNaN(i);
	});
};
stx_nano_CharsLift.starts_with = function(self,frag) {
	if(self.length >= frag.length && frag == HxOverrides.substr(self,0,frag.length)) {
		return true;
	} else {
		return false;
	}
};
stx_nano_CharsLift.ends_with = function(self,frag) {
	if(self.length >= frag.length && frag == HxOverrides.substr(self,self.length - frag.length,null)) {
		return true;
	} else {
		return false;
	}
};
stx_nano_CharsLift.contains = function(self,substr) {
	return self.indexOf(substr) != -1;
};
stx_nano_CharsLift.replace = function(self,sub,by) {
	return StringTools.replace(self,sub,by);
};
stx_nano_CharsLift.brackets = function(self,l,r) {
	return "" + l + self + r;
};
stx_nano_CharsLift.prepend = function(self,before) {
	return stx_nano_Chars.add(before,self);
};
stx_nano_CharsLift.append = function(self,after) {
	return stx_nano_Chars.add(self,after);
};
stx_nano_CharsLift.cca = function(self,i) {
	return HxOverrides.cca(self,i);
};
stx_nano_CharsLift.at = function(self,i) {
	return self.charAt(i);
};
stx_nano_CharsLift.chunk = function(self,len) {
	if(len == null) {
		len = 1;
	}
	var start = 0;
	var end = Math.round(Math.min(start + len,self.length));
	if(end == 0) {
		return [];
	} else {
		var prefix = HxOverrides.substr(self,start,end);
		var rest = HxOverrides.substr(self,end,null);
		return [prefix].concat(stx_nano_CharsLift.chunk(rest,len));
	}
};
stx_nano_CharsLift.chars = function(self) {
	var a = [];
	var _g = 0;
	var _g1 = self.length;
	while(_g < _g1) {
		var i = _g++;
		a.push(self.charAt(i));
	}
	return a;
};
stx_nano_CharsLift.split = function(self,sep) {
	return self.split(sep);
};
stx_nano_CharsLift.strip_white = function(self) {
	var l = self.length;
	var i = 0;
	var sb_b = "";
	while(i < l) {
		if(!stx_nano_CharsLift.is_space(self,i)) {
			sb_b += Std.string(self.charAt(i));
		}
		++i;
	}
	return sb_b;
};
stx_nano_CharsLift.replace_recurse = function(self,sub,by) {
	if(sub.length == 0) {
		return stx_nano_CharsLift.replace(self,sub,by);
	}
	if(by.indexOf(sub) >= 0) {
		throw haxe_Exception.thrown("Infinite recursion");
	}
	var ns = self.toString();
	var olen = 0;
	var nlen = ns.length;
	while(olen != nlen) {
		olen = ns.length;
		stx_nano_CharsLift.replace(sub,by,ns);
		nlen = ns.length;
	}
	return ns;
};
stx_nano_CharsLift.iterator = function(self) {
	var index = 0;
	return { hasNext : function() {
		return index < self.length;
	}, next : function() {
		if(index < self.length) {
			index += 1;
			return HxOverrides.substr(self,index - 1,1);
		} else {
			var this1 = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,{ fileName : "stx/nano/Chars.hx", lineNumber : 184, className : "stx.nano.CharsLift", methodName : "iterator"});
			throw haxe_Exception.thrown(new stx_nano_Err(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,stx_nano_FailureSum.ERR_OF("E_IndexOutOfBounds")),haxe_ds_Option.None,this1));
		}
	}};
};
stx_nano_CharsLift.is_space = function(self,pos) {
	var c = HxOverrides.cca(self,pos);
	if(!(c >= 9 && c <= 13)) {
		return c == 32;
	} else {
		return true;
	}
};
stx_nano_CharsLift.chr = function(i) {
	return String.fromCodePoint(i);
};
stx_nano_CharsLift.underscore = function(s) {
	var _this_r = new RegExp("::","g".split("u").join(""));
	s = s.replace(_this_r,"/");
	var _this_r = new RegExp("([A-Z]+)([A-Z][a-z])","g".split("u").join(""));
	s = s.replace(_this_r,"$1_$2");
	var _this_r = new RegExp("([a-z\\d])([A-Z])","g".split("u").join(""));
	s = s.replace(_this_r,"$1_$2");
	var _this_r = new RegExp("-","g".split("u").join(""));
	s = s.replace(_this_r,"_");
	return s.toLowerCase();
};
stx_nano_CharsLift.after = function(self,sub) {
	var idx = self.indexOf(sub);
	if(idx < 0) {
		return "";
	}
	return self.substring(idx + sub.length,self.length);
};
stx_nano_CharsLift.before = function(self,sub) {
	return self.substring(0,self.indexOf(sub));
};
stx_nano_CharsLift.quote = function(str) {
	return "\"" + str + "\"";
};
stx_nano_CharsLift.requote = function(self) {
	return stx_nano_CharsLift.replace(self,"\"","\\\"");
};
stx_nano_CharsLift.truncate = function(self,int) {
	return HxOverrides.substr(self,0,int);
};
stx_nano_CharsLift.rdropn = function(self,int) {
	return HxOverrides.substr(self,0,self.length - int);
};
stx_nano_CharsLift.ldropn = function(self,int) {
	return HxOverrides.substr(self,int,null);
};
var stx_nano_Chars = {};
stx_nano_Chars.lift = function(self) {
	return stx_nano_Chars._new(self);
};
stx_nano_Chars._new = function(self) {
	var this1 = self;
	return this1;
};
stx_nano_Chars.char = function(this1,int) {
	return stx_nano_Char._new(this1.charAt(int));
};
stx_nano_Chars.add = function(this1,that) {
	return this1 + that;
};
var stx_nano_ChunkSum = $hxEnums["stx.nano.ChunkSum"] = { __ename__:"stx.nano.ChunkSum",__constructs__:null
	,Val: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"stx.nano.ChunkSum",toString:$estr}; },$_._hx_name="Val",$_.__params__ = ["v"],$_)
	,Tap: {_hx_name:"Tap",_hx_index:1,__enum__:"stx.nano.ChunkSum",toString:$estr}
	,End: ($_=function(err) { return {_hx_index:2,err:err,__enum__:"stx.nano.ChunkSum",toString:$estr}; },$_._hx_name="End",$_.__params__ = ["err"],$_)
};
stx_nano_ChunkSum.__constructs__ = [stx_nano_ChunkSum.Val,stx_nano_ChunkSum.Tap,stx_nano_ChunkSum.End];
var stx_nano_ChunkLift = function() { };
stx_nano_ChunkLift.__name__ = "stx.nano.ChunkLift";
stx_nano_ChunkLift.def = function(self,fn) {
	switch(self._hx_index) {
	case 0:
		var v = self.v;
		return v;
	case 1:
		return fn();
	case 2:
		var e = self.err;
		throw haxe_Exception.thrown(e);
	}
};
stx_nano_ChunkLift.defv = function(self,t) {
	switch(self._hx_index) {
	case 0:
		var v = self.v;
		return v;
	case 1:
		return t;
	case 2:
		var e = self.err;
		throw haxe_Exception.thrown(e);
	}
};
stx_nano_ChunkLift.fold = function(chk,val,ers,tap) {
	switch(chk._hx_index) {
	case 0:
		var v = chk.v;
		return val(v);
	case 1:
		return tap();
	case 2:
		var e = chk.err;
		return ers(e);
	}
};
stx_nano_ChunkLift.map = function(self,fn) {
	switch(self._hx_index) {
	case 0:
		var v = self.v;
		var o = fn(v);
		return stx_nano_Chunk.pure(o);
	case 1:
		return stx_nano_ChunkSum.Tap;
	case 2:
		var err = self.err;
		return stx_nano_ChunkSum.End(err);
	}
};
stx_nano_ChunkLift.flatten = function(self) {
	return stx_nano_ChunkLift.flat_map(self,function(x) {
		return x;
	});
};
stx_nano_ChunkLift.flat_map = function(self,fn) {
	switch(self._hx_index) {
	case 0:
		var v = self.v;
		return fn(v);
	case 1:
		return stx_nano_ChunkSum.Tap;
	case 2:
		var err = self.err;
		return stx_nano_ChunkSum.End(err);
	}
};
stx_nano_ChunkLift.recover = function(self,fn) {
	switch(self._hx_index) {
	case 0:
		var v = self.v;
		return stx_nano_ChunkSum.Val(v);
	case 1:
		return stx_nano_ChunkSum.Tap;
	case 2:
		var err = self.err;
		return fn(err);
	}
};
stx_nano_ChunkLift.errata = function(self,fn) {
	return stx_nano_ChunkLift.recover(self,function(x) {
		return stx_nano_ChunkSum.End(fn(x));
	});
};
stx_nano_ChunkLift.zip = function(self,that) {
	switch(self._hx_index) {
	case 0:
		var v = self.v;
		switch(that._hx_index) {
		case 0:
			var v0 = that.v;
			return stx_nano_ChunkSum.Val(stx_nano_lift_LiftNano.toCouple(stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,v,v0)));
		case 1:
			return stx_nano_ChunkSum.Tap;
		case 2:
			var err = that.err;
			return stx_nano_ChunkSum.End(err);
		}
		break;
	case 1:
		return stx_nano_ChunkSum.Tap;
	case 2:
		var err = self.err;
		if(that._hx_index == 2) {
			var err0 = that.err;
			return stx_nano_ChunkSum.End(err.merge(err0));
		} else {
			return stx_nano_ChunkSum.Tap;
		}
		break;
	}
};
stx_nano_ChunkLift.value = function(chk) {
	switch(chk._hx_index) {
	case 0:
		var v = chk.v;
		return haxe_ds_Option.Some(v);
	case 1:
		return haxe_ds_Option.None;
	case 2:
		var _g = chk.err;
		return haxe_ds_Option.None;
	}
};
stx_nano_ChunkLift.is_defined = function(self) {
	return stx_nano_ChunkLift.fold(self,function(_) {
		return true;
	},function(_) {
		return false;
	},function() {
		return false;
	});
};
stx_nano_ChunkLift.opt_else = function(self,_if,_else) {
	return stx_nano_ChunkLift.fold(self,_if,function(e) {
		return _else(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,e));
	},function() {
		return _else(haxe_ds_Option.None);
	});
};
stx_nano_ChunkLift.fudge = function(self,pos) {
	if(self == null) {
		throw haxe_Exception.thrown("no self to push on");
	} else {
		switch(self._hx_index) {
		case 0:
			var v = self.v;
			return v;
		case 1:
			throw haxe_Exception.thrown("Value not found on force");
		case 2:
			var _g = self.err;
			if(_g == null) {
				throw haxe_Exception.thrown("Value not found on force");
			} else {
				var err = _g;
				throw haxe_Exception.thrown(err);
			}
			break;
		}
	}
};
stx_nano_ChunkLift.iterator = function(self) {
	var done = false;
	return { hasNext : function() {
		if(!done) {
			return stx_nano_EnumValue.alike(stx_nano_EnumValue._new(self),stx_nano_EnumValue._new(stx_nano_ChunkSum.Val(null)));
		} else {
			return false;
		}
	}, next : function() {
		done = true;
		if(self._hx_index == 0) {
			var v = self.v;
			return v;
		} else {
			return null;
		}
	}};
};
stx_nano_ChunkLift.secure = function(self) {
	return stx_nano_ChunkLift.fold(self,function(v) {
		if(v == null) {
			return stx_nano_ChunkSum.Tap;
		} else {
			return stx_nano_ChunkSum.Val(v);
		}
	},stx_nano_ChunkSum.End,function() {
		return stx_nano_ChunkSum.Tap;
	});
};
var stx_nano_Chunk = {};
stx_nano_Chunk._new = function(self) {
	var this1 = self;
	return this1;
};
stx_nano_Chunk.fromError = function(e) {
	return stx_nano_ChunkSum.End(e);
};
stx_nano_Chunk.fromNull_T = function(v) {
	return stx_nano_Chunk.pure(v);
};
stx_nano_Chunk.lift = function(v) {
	return stx_nano_Chunk._new(v);
};
stx_nano_Chunk.pure = function(c) {
	if(c == null) {
		return stx_nano_ChunkSum.Tap;
	} else {
		return stx_nano_ChunkSum.Val(c);
	}
};
stx_nano_Chunk.unit = function() {
	return stx_nano_ChunkSum.Tap;
};
stx_nano_Chunk.fromTinkOutcome = function(outcome) {
	var tmp;
	switch(outcome._hx_index) {
	case 0:
		var v = outcome.data;
		tmp = stx_nano_Chunk.pure(v);
		break;
	case 1:
		var e = outcome.failure;
		tmp = stx_nano_ChunkSum.End(e);
		break;
	}
	return stx_nano_Chunk._new(tmp);
};
stx_nano_Chunk.fromOption = function(opt) {
	switch(opt._hx_index) {
	case 0:
		var v = opt.v;
		return stx_nano_ChunkSum.Val(v);
	case 1:
		return stx_nano_ChunkSum.Tap;
	}
};
stx_nano_Chunk.fromOptionError = function(opt) {
	switch(opt._hx_index) {
	case 0:
		var v = opt.v;
		return stx_nano_ChunkSum.End(v);
	case 1:
		return stx_nano_ChunkSum.Tap;
	}
};
stx_nano_Chunk.all = function(arr,TapFail) {
	return stx_lift_ArrayLift.lfold(arr,function(next,memo) {
		switch(memo._hx_index) {
		case 0:
			var _g = memo.v;
			switch(next._hx_index) {
			case 0:
				var next1 = next.v;
				var memo1 = _g;
				memo1.push(next1);
				return stx_nano_ChunkSum.Val(memo1);
			case 1:
				var v = _g;
				if(TapFail == null) {
					return stx_nano_ChunkSum.Tap;
				} else {
					return stx_nano_ChunkSum.End(TapFail);
				}
				break;
			case 2:
				var e = next.err;
				var memo1 = _g;
				return stx_nano_ChunkSum.End(e);
			}
			break;
		case 2:
			var _g = memo.err;
			switch(next._hx_index) {
			case 1:
				var e = _g;
				var self = stx_pico_OptionLift.map(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,e),function(e) {
					return e.merge(TapFail);
				});
				var err;
				if(self._hx_index == 0) {
					var v = self.v;
					err = v;
				} else {
					err = TapFail;
				}
				return stx_nano_ChunkSum.End(err);
			case 2:
				var e0 = next.err;
				var e = _g;
				var err = stx_lift_ArrayLift.lfold(stx_pico_OptionLift.toArray(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,e)).concat(stx_pico_OptionLift.toArray(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,e0))),function(nx,mm) {
					return mm.merge(nx);
				},TapFail);
				return stx_nano_ChunkSum.End(err);
			default:
				var e = _g;
				return stx_nano_ChunkSum.End(e);
			}
			break;
		default:
			if(TapFail == null) {
				return stx_nano_ChunkSum.Tap;
			} else {
				return stx_nano_ChunkSum.End(TapFail);
			}
		}
	},stx_nano_ChunkSum.Val([]));
};
stx_nano_Chunk.available = function(rest) {
	return stx_lift_ArrayLift.lfold(rest,function(next,memo) {
		if(memo._hx_index == 0) {
			var xs = memo.v;
			switch(next._hx_index) {
			case 0:
				var x = next.v;
				xs.push(x);
				return stx_nano_ChunkSum.Val(xs);
			case 1:
				return stx_nano_ChunkSum.Val(xs);
			case 2:
				var e = next.err;
				return stx_nano_ChunkSum.End(e);
			}
		} else {
			return memo;
		}
	},stx_nano_ChunkSum.Val([]));
};
stx_nano_Chunk.get_self = function(this1) {
	return this1;
};
var stx_nano_CompilerTargetSum = $hxEnums["stx.nano.CompilerTargetSum"] = { __ename__:"stx.nano.CompilerTargetSum",__constructs__:null
	,Js: {_hx_name:"Js",_hx_index:0,__enum__:"stx.nano.CompilerTargetSum",toString:$estr}
	,Lua: {_hx_name:"Lua",_hx_index:1,__enum__:"stx.nano.CompilerTargetSum",toString:$estr}
	,Swf: {_hx_name:"Swf",_hx_index:2,__enum__:"stx.nano.CompilerTargetSum",toString:$estr}
	,Neko: {_hx_name:"Neko",_hx_index:3,__enum__:"stx.nano.CompilerTargetSum",toString:$estr}
	,Php: {_hx_name:"Php",_hx_index:4,__enum__:"stx.nano.CompilerTargetSum",toString:$estr}
	,Cpp: {_hx_name:"Cpp",_hx_index:5,__enum__:"stx.nano.CompilerTargetSum",toString:$estr}
	,Cppia: {_hx_name:"Cppia",_hx_index:6,__enum__:"stx.nano.CompilerTargetSum",toString:$estr}
	,Cs: {_hx_name:"Cs",_hx_index:7,__enum__:"stx.nano.CompilerTargetSum",toString:$estr}
	,Java: {_hx_name:"Java",_hx_index:8,__enum__:"stx.nano.CompilerTargetSum",toString:$estr}
	,Python: {_hx_name:"Python",_hx_index:9,__enum__:"stx.nano.CompilerTargetSum",toString:$estr}
	,Hl: {_hx_name:"Hl",_hx_index:10,__enum__:"stx.nano.CompilerTargetSum",toString:$estr}
	,Interp: {_hx_name:"Interp",_hx_index:11,__enum__:"stx.nano.CompilerTargetSum",toString:$estr}
};
stx_nano_CompilerTargetSum.__constructs__ = [stx_nano_CompilerTargetSum.Js,stx_nano_CompilerTargetSum.Lua,stx_nano_CompilerTargetSum.Swf,stx_nano_CompilerTargetSum.Neko,stx_nano_CompilerTargetSum.Php,stx_nano_CompilerTargetSum.Cpp,stx_nano_CompilerTargetSum.Cppia,stx_nano_CompilerTargetSum.Cs,stx_nano_CompilerTargetSum.Java,stx_nano_CompilerTargetSum.Python,stx_nano_CompilerTargetSum.Hl,stx_nano_CompilerTargetSum.Interp];
var stx_nano_CompilerTargetLift = function() { };
stx_nano_CompilerTargetLift.__name__ = "stx.nano.CompilerTargetLift";
stx_nano_CompilerTargetLift.list = function() {
	return stx_nano_Enum.constructs(stx_nano_Enum._new(stx_nano_CompilerTargetSum));
};
stx_nano_CompilerTargetLift.toBuildDirective = function(target) {
	switch(target._hx_index) {
	case 0:
		return haxe_ds_Option.Some("js");
	case 1:
		return haxe_ds_Option.Some("lua");
	case 2:
		return haxe_ds_Option.Some("swf");
	case 3:
		return haxe_ds_Option.Some("neko");
	case 4:
		return haxe_ds_Option.Some("php");
	case 5:
		return haxe_ds_Option.Some("cpp");
	case 7:
		return haxe_ds_Option.Some("cs");
	case 8:
		return haxe_ds_Option.Some("java");
	case 9:
		return haxe_ds_Option.Some("python");
	case 10:
		return haxe_ds_Option.Some("hl");
	case 11:
		return haxe_ds_Option.Some("interp");
	default:
		return haxe_ds_Option.None;
	}
};
stx_nano_CompilerTargetLift.canonical = function(target) {
	return stx_nano_EnumValue.ctr(stx_nano_EnumValue._new(stx_nano_CompilerTarget.prj(target)));
};
var stx_nano_CompilerTarget = {};
stx_nano_CompilerTarget._new = function(self) {
	var this1 = self;
	return this1;
};
stx_nano_CompilerTarget.lift = function(self) {
	return stx_nano_CompilerTarget._new(self);
};
stx_nano_CompilerTarget.prj = function(this1) {
	return this1;
};
stx_nano_CompilerTarget.get_self = function(this1) {
	return stx_nano_CompilerTarget.lift(this1);
};
stx_nano_CompilerTarget.fromString = function(str) {
	switch(str) {
	case "cpp":
		return stx_nano_CompilerTargetSum.Cpp;
	case "cs":
		return stx_nano_CompilerTargetSum.Cs;
	case "hl":
		return stx_nano_CompilerTargetSum.Hl;
	case "interp":
		return stx_nano_CompilerTargetSum.Interp;
	case "java":
		return stx_nano_CompilerTargetSum.Java;
	case "js":
		return stx_nano_CompilerTargetSum.Js;
	case "lua":
		return stx_nano_CompilerTargetSum.Lua;
	case "neko":
		return stx_nano_CompilerTargetSum.Neko;
	case "php":
		return stx_nano_CompilerTargetSum.Php;
	case "python":
		return stx_nano_CompilerTargetSum.Python;
	case "swf":
		return stx_nano_CompilerTargetSum.Swf;
	default:
		haxe_Log.trace(str,{ fileName : "stx/nano/CompilerTarget.hx", lineNumber : 49, className : "stx.nano._CompilerTarget.CompilerTarget_Impl_", methodName : "fromString"});
		throw haxe_Exception.thrown(new stx_nano_Err(haxe_ds_Option.Some(stx_nano_FailureSum.ERR("E_ResourceNotFound")),null,stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,{ fileName : "stx/nano/CompilerTarget.hx", lineNumber : 50, className : "stx.nano._CompilerTarget.CompilerTarget_Impl_", methodName : "fromString"})));
	}
};
var stx_nano_ContractLift = function() {
	stx_pico_Clazz.call(this);
};
stx_nano_ContractLift.__name__ = "stx.nano.ContractLift";
stx_nano_ContractLift.lift = function(self) {
	return stx_nano_Contract.lift(self);
};
stx_nano_ContractLift.toJsPromise = function(self) {
	var promise = new Promise(function(resolve,reject) {
		try {
			stx_nano_Contract.handle(self,function(res) {
				stx_nano_ChunkLift.fold(res,function(v) {
					resolve(stx_nano_lift_LiftNano.accept(stx_nano_Wildcard.__,haxe_ds_Option.Some(v)));
				},function(e) {
					reject(stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,e));
				},function() {
					resolve(stx_nano_lift_LiftNano.accept(stx_nano_Wildcard.__,haxe_ds_Option.None));
				});
			});
		} catch( _g ) {
			haxe_NativeStackTrace.lastError = _g;
			var _g1 = haxe_Exception.caught(_g).unwrap();
			if(((_g1) instanceof stx_nano_Err)) {
				var e = _g1;
				reject(stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,e));
			} else {
				var e = _g1;
				var reject1 = reject;
				var this1 = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,{ fileName : "stx/nano/Contract.hx", lineNumber : 165, className : "stx.nano.ContractLift", methodName : "toJsPromise"});
				reject1(stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,new stx_nano_Err(stx_pico_Option.fromNullT(stx_nano_FailureSum.ERR(stx_nano_FailCode.fromString(Std.string(e)))),null,this1)));
			}
		}
	});
	return promise;
};
stx_nano_ContractLift.zip = function(self,that) {
	var out = tink_core_Future.map(stx_nano_lift_LiftNano.nano(stx_nano_Wildcard.__).Ft().zip(self,that),function(tp) {
		return stx_nano_ChunkLift.zip(stx_nano_CoupleLift.fst(tp),stx_nano_CoupleLift.snd(tp));
	});
	return out;
};
stx_nano_ContractLift.map = function(self,fn) {
	return stx_nano_ContractLift.lift(tink_core_Future.map(self,function(x) {
		switch(x._hx_index) {
		case 0:
			var v = x.v;
			return stx_nano_ChunkSum.Val(fn(v));
		case 1:
			return stx_nano_ChunkSum.Tap;
		case 2:
			var err = x.err;
			return stx_nano_ChunkSum.End(err);
		}
	}));
};
stx_nano_ContractLift.flat_map = function(self,fn) {
	var ft = stx_nano_Contract.prj(self);
	return tink_core_Future.flatMap(ft,function(x) {
		switch(x._hx_index) {
		case 0:
			var v = x.v;
			return stx_nano_Contract.prj(fn(v));
		case 1:
			return stx_nano_Contract.prj(stx_nano_Contract._new(new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(stx_nano_ChunkSum.Tap))));
		case 2:
			var err = x.err;
			return stx_nano_Contract.prj(stx_nano_Contract.fromChunk(stx_nano_ChunkSum.End(err)));
		}
	});
};
stx_nano_ContractLift.flat_fold = function(self,val,ers,nil) {
	return tink_core_Future.flatMap(self,function(chunk) {
		return stx_nano_ChunkLift.fold(chunk,val,ers,nil);
	});
};
stx_nano_ContractLift.fold = function(self,val,ers,nil) {
	var val1 = val;
	var ers1 = ers;
	var tap = nil;
	var tmp = function(chk) {
		return stx_nano_Chunk._.fold(chk,val1,ers1,tap);
	};
	return tink_core_Future.map(stx_nano_Contract.prj(self),tmp);
};
stx_nano_ContractLift.recover = function(self,fn) {
	return stx_nano_ContractLift.lift(stx_nano_ContractLift.fold(self,function(x) {
		return stx_nano_ChunkSum.Val(x);
	},function(e) {
		return fn(e);
	},function() {
		return stx_nano_ChunkSum.Tap;
	}));
};
stx_nano_ContractLift.adjust = function(self,fn) {
	return stx_nano_ContractLift.lift(stx_nano_ContractLift.fold(self,function(x) {
		return fn(x);
	},function(v) {
		return stx_nano_ChunkSum.End(v);
	},function() {
		return stx_nano_ChunkSum.Tap;
	}));
};
stx_nano_ContractLift.receive = function(self,fn) {
	return tink_core_Future.map(stx_nano_Contract.prj(self),function(chk) {
		switch(chk._hx_index) {
		case 0:
			var v = chk.v;
			fn(v);
			return haxe_ds_Option.None;
		case 1:
			return haxe_ds_Option.None;
		case 2:
			var e = chk.err;
			return stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,e);
		}
	});
};
stx_nano_ContractLift.now = function(self) {
	var out = null;
	stx_nano_Contract.prj(self).handle(function(v) {
		out = v;
	});
	if(out == null) {
		out = stx_nano_ChunkSum.Tap;
	}
	return out;
};
stx_nano_ContractLift.errata = function(self,fn) {
	return tink_core_Future.map(stx_nano_Contract.prj(self),function(chk) {
		return stx_nano_ChunkLift.errata(chk,fn);
	});
};
stx_nano_ContractLift.errate = function(self,fn) {
	return stx_nano_ContractLift.errata(self,function(x) {
		return x.map(fn);
	});
};
stx_nano_ContractLift.tap = function(self,fn,pos) {
	return stx_nano_ContractLift.lift(tink_core_Future.map(stx_nano_Contract.prj(self),function(x) {
		fn(x,pos);
		return x;
	}));
};
stx_nano_ContractLift.__super__ = stx_pico_Clazz;
stx_nano_ContractLift.prototype = $extend(stx_pico_Clazz.prototype,{
	__class__: stx_nano_ContractLift
});
var stx_nano_Contract = $hx_exports["stx"]["nano"]["Contract"] = {};
stx_nano_Contract._new = function(v) {
	var this1 = v;
	return this1;
};
stx_nano_Contract.lift = function(self) {
	return stx_nano_Contract._new(self);
};
stx_nano_Contract.unit = function() {
	return stx_nano_Contract.pure(stx_nano_ChunkSum.Tap);
};
stx_nano_Contract.sync = function(ch) {
	return stx_nano_Contract.lift(new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(ch)));
};
stx_nano_Contract.pure = function(ch) {
	return tink_core_Future.irreversible(function(f) {
		f(ch);
	});
};
stx_nano_Contract.accept = function(ch) {
	return tink_core_Future.irreversible(function(f) {
		f(stx_nano_ChunkSum.Val(ch));
	});
};
stx_nano_Contract.reject = function(ch) {
	return tink_core_Future.irreversible(function(f) {
		f(stx_nano_ChunkSum.End(ch));
	});
};
stx_nano_Contract.bind_fold = function(it,fm,start) {
	return stx_nano_Contract._new(stx_nano_lift_LiftNano.nano(stx_nano_Wildcard.__).Ft().bind_fold(it,function(next,memo) {
		switch(memo._hx_index) {
		case 0:
			var v = memo.v;
			return stx_nano_Contract.prj(fm(next,v));
		case 1:
			return stx_nano_Contract.prj(stx_nano_Contract.unit());
		case 2:
			var err = memo.err;
			return stx_nano_Contract.prj(stx_nano_Contract.end(err));
		}
	},stx_nano_ChunkSum.Val(start)));
};
stx_nano_Contract.lazy = function(fn) {
	return stx_nano_Contract.lift(tink_core_Future.irreversible(function(f) {
		f(stx_nano_ChunkSum.Val(fn()));
	}));
};
stx_nano_Contract.fromLazyError = function(fn) {
	return stx_nano_Contract.fromLazyChunk(function() {
		return stx_nano_ChunkSum.End(fn());
	});
};
stx_nano_Contract.fromLazyChunk = function(fn) {
	return tink_core_Future.irreversible(function(f) {
		f(fn());
	});
};
stx_nano_Contract.end = function(e) {
	return stx_nano_Contract.pure(stx_nano_ChunkSum.End(e));
};
stx_nano_Contract.tap = function() {
	return stx_nano_Contract.unit();
};
stx_nano_Contract.fromChunk = function(chk) {
	return tink_core_Future.irreversible(function(cb) {
		cb(chk);
	});
};
stx_nano_Contract.fromOption = function(m) {
	var val;
	switch(m._hx_index) {
	case 0:
		var t = m.v;
		val = stx_nano_ChunkSum.Val(t);
		break;
	case 1:
		val = stx_nano_ChunkSum.Tap;
		break;
	}
	var val1 = val;
	return stx_nano_Contract.fromChunk(val1);
};
stx_nano_Contract.fromRes = function(self) {
	var tmp;
	switch(self._hx_index) {
	case 0:
		var t = self.t;
		tmp = stx_nano_ChunkSum.Val(t);
		break;
	case 1:
		var e = self.e;
		tmp = stx_nano_ChunkSum.End(e);
		break;
	}
	return stx_nano_Contract.pure(tmp);
};
stx_nano_Contract.toTinkSurprise = function(this1) {
	return stx_nano_Contract._.fold(this1,tink_core_Outcome.Success,function(e) {
		var tmp = e.toString();
		var self = e.data;
		var tmp1;
		if(self._hx_index == 0) {
			var v = self.v;
			tmp1 = v;
		} else {
			tmp1 = null;
		}
		return tink_core_Outcome.Failure(tink_core_TypedError.withData(500,tmp,tmp1,e.pos));
	},function() {
		return tink_core_Outcome.Failure(new tink_core_TypedError(500,"empty",{ fileName : "stx/nano/Contract.hx", lineNumber : 97, className : "stx.nano._Contract.Contract_Impl_", methodName : "toTinkSurprise"}));
	});
};
stx_nano_Contract.fromJsPromise = function(self,pos) {
	var t = new tink_core_FutureTrigger();
	self.then(function(ok) {
		return t.trigger(stx_nano_ChunkSum.Val(ok));
	},function(no) {
		var t1 = t;
		var this1 = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,pos);
		return t1.trigger(stx_nano_ChunkSum.End(new stx_nano_Err(stx_pico_Option.fromNullT(stx_nano_FailureSum.ERR(stx_nano_FailCode.fromString(no))),null,this1)));
	}).catch(function(e) {
		var t1 = t;
		var this1 = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,pos);
		return t1.trigger(stx_nano_ChunkSum.End(new stx_nano_Err(stx_pico_Option.fromNullT(stx_nano_FailureSum.ERR(stx_nano_FailCode.fromString(e))),null,this1)));
	});
	return stx_nano_Contract.lift(t);
};
stx_nano_Contract.prj = function(this1) {
	return this1;
};
stx_nano_Contract.handle = function(this1,fn) {
	return this1.handle(fn);
};
stx_nano_Contract.seq = function(iter) {
	return stx_nano_Contract.bind_fold(iter,function(next,memo) {
		return stx_nano_ContractLift.map(next,function(a) {
			return stx_lift_ArrayLift.snoc(memo,a);
		});
	},[]);
};
var stx_nano_CoupleLift = function() { };
stx_nano_CoupleLift.__name__ = "stx.nano.CoupleLift";
stx_nano_CoupleLift.map = function(self,fn) {
	return function(tp) {
		self(function(ti,tii) {
			tp(ti,fn(tii));
		});
	};
};
stx_nano_CoupleLift.mapl = function(self,fn) {
	return function(tp) {
		self(function(ti,tii) {
			tp(fn(ti),tii);
		});
	};
};
stx_nano_CoupleLift.mapr = function(self,fn) {
	return stx_nano_CoupleLift.map(self,fn);
};
stx_nano_CoupleLift.fst = function(self) {
	return stx_nano_CoupleLift.decouple(self,function(tI,_) {
		return tI;
	});
};
stx_nano_CoupleLift.snd = function(self) {
	return stx_nano_CoupleLift.decouple(self,function(_,tII) {
		return tII;
	});
};
stx_nano_CoupleLift.swap = function(self) {
	return function(tp) {
		self(function(ti,tii) {
			tp(tii,ti);
		});
	};
};
stx_nano_CoupleLift.equals = function(lhs,rhs) {
	return stx_nano_CoupleLift.decouple(lhs,function(t0l,t0r) {
		return stx_nano_CoupleLift.decouple(rhs,function(t1l,t1r) {
			if(t0l == t1l) {
				return t0r == t1r;
			} else {
				return false;
			}
		});
	});
};
stx_nano_CoupleLift.reduce = function(self,flhs,frhs,plus) {
	return stx_nano_CoupleLift.decouple(self,function(tI,tII) {
		return plus(flhs(tI),frhs(tII));
	});
};
stx_nano_CoupleLift.decouple = function(self,fn) {
	var out = null;
	self(function(ti,tii) {
		out = fn(ti,tii);
	});
	return out;
};
stx_nano_CoupleLift.cat = function(self) {
	return stx_nano_CoupleLift.decouple(self,function(l,r) {
		return [haxe_ds_Either.Left(l),haxe_ds_Either.Right(r)];
	});
};
stx_nano_CoupleLift.tup = function(self) {
	return stx_nano_CoupleLift.decouple(self,stx_Tup2.tuple2);
};
stx_nano_CoupleLift.toString = function(self) {
	return stx_nano_CoupleLift.decouple(self,function(l,r) {
		return "(" + Std.string(l) + " " + Std.string(r) + ")";
	});
};
var stx_nano_Couple = {};
stx_nano_Couple.make = function(lhs,rhs) {
	return function(cb) {
		cb(lhs,rhs);
	};
};
stx_nano_Couple.toString = function(this1) {
	return stx_nano_CoupleLift.toString(this1);
};
var stx_nano_DefectLift = function() { };
stx_nano_DefectLift.__name__ = "stx.nano.DefectLift";
stx_nano_DefectLift.concat = function(self,that) {
	return self.concat(that);
};
var stx_nano_Defect = {};
stx_nano_Defect.unit = function() {
	return [];
};
stx_nano_Defect.pure = function(e) {
	return [e];
};
stx_nano_Defect.toErr = function(this1) {
	return stx_nano_Err.grow(this1,{ fileName : "stx/nano/Defect.hx", lineNumber : 13, className : "stx.nano._Defect.Defect_Impl_", methodName : "toErr"});
};
stx_nano_Defect.fromErr = function(err) {
	return stx_pico_OptionLift.toArray(stx_pico_OptionLift.flat_map(err.data,function(x) {
		if(x._hx_index == 0) {
			var e = x.v;
			return haxe_ds_Option.Some(e);
		} else {
			return haxe_ds_Option.None;
		}
	}));
};
stx_nano_Defect.elide = function(this1) {
	return this1;
};
stx_nano_Defect.entype = function(this1) {
	return this1;
};
var stx_nano_Embed = {};
stx_nano_Embed._new = function() {
	var this1 = stx_nano__$Embed_Constructor.embed();
	return this1;
};
var stx_nano__$Embed_Constructor = function() {
	stx_pico_Clazz.call(this);
};
stx_nano__$Embed_Constructor.__name__ = "stx.nano._Embed.Constructor";
stx_nano__$Embed_Constructor.embed = function() {
	var r = haxe_ds_Option.None;
	var unpack = null;
	unpack = function(fn) {
		r = haxe_ds_Option.None;
		fn();
		return r;
	};
	var pull = null;
	pull = function(fn) {
		r = haxe_ds_Option.None;
		fn();
		return stx_pico_OptionLift.fudge(r);
	};
	var pack = null;
	pack = function(v) {
		var o = haxe_ds_Option.Some(v);
		return function() {
			r = o;
		};
	};
	var check = null;
	check = function(fn) {
		var _g = unpack(fn);
		switch(_g._hx_index) {
		case 0:
			var _g1 = _g.v;
			return true;
		case 1:
			return false;
		}
	};
	return { pack : pack, unpack : unpack, pull : pull, check : check};
};
stx_nano__$Embed_Constructor.__super__ = stx_pico_Clazz;
stx_nano__$Embed_Constructor.prototype = $extend(stx_pico_Clazz.prototype,{
	__class__: stx_nano__$Embed_Constructor
});
var stx_nano_Enum = {};
stx_nano_Enum._new = function(self) {
	var this1 = self;
	return this1;
};
stx_nano_Enum.constructs = function(this1) {
	var _this = this1.__constructs__;
	var result = new Array(_this.length);
	var _g = 0;
	var _g1 = _this.length;
	while(_g < _g1) {
		var i = _g++;
		result[i] = _this[i]._hx_name;
	}
	return result;
};
stx_nano_Enum.$name = function(this1) {
	return this1.__ename__;
};
stx_nano_Enum.construct = function(this1,cons,args) {
	switch(cons._hx_index) {
	case 0:
		var i = cons.v;
		return stx_pico_Option.fromNullT(Type.createEnumIndex(this1,i,args));
	case 1:
		var s = cons.v;
		return stx_pico_Option.fromNullT(Type.createEnum(this1,s,args));
	}
};
var stx_nano_EnumValue = {};
stx_nano_EnumValue.pure = function(self) {
	return stx_nano_EnumValue._new(self);
};
stx_nano_EnumValue._new = function(self) {
	var this1 = self;
	return this1;
};
stx_nano_EnumValue.params = function(this1) {
	return Type.enumParameters(this1);
};
stx_nano_EnumValue.ctr = function(this1) {
	return $hxEnums[this1.__enum__].__constructs__[this1._hx_index]._hx_name;
};
stx_nano_EnumValue.index = function(this1) {
	return this1._hx_index;
};
stx_nano_EnumValue.alike = function(this1,that) {
	if(stx_nano_EnumValue.ctr(this1) == stx_nano_EnumValue.ctr(that)) {
		return stx_nano_EnumValue.index(this1) == stx_nano_EnumValue.index(that);
	} else {
		return false;
	}
};
stx_nano_EnumValue.prj = function(this1) {
	return this1;
};
var stx_nano_FailCode = {};
stx_nano_FailCode._new = function(self) {
	var this1 = self;
	return this1;
};
stx_nano_FailCode.fromString = function(str) {
	return stx_nano_FailCode._new(str);
};
stx_nano_FailCode.toString = function(this1) {
	return this1;
};
var stx_nano_FailureSum = $hxEnums["stx.nano.FailureSum"] = { __ename__:"stx.nano.FailureSum",__constructs__:null
	,ERR_OF: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"stx.nano.FailureSum",toString:$estr}; },$_._hx_name="ERR_OF",$_.__params__ = ["v"],$_)
	,ERR: ($_=function(spec) { return {_hx_index:1,spec:spec,__enum__:"stx.nano.FailureSum",toString:$estr}; },$_._hx_name="ERR",$_.__params__ = ["spec"],$_)
};
stx_nano_FailureSum.__constructs__ = [stx_nano_FailureSum.ERR_OF,stx_nano_FailureSum.ERR];
var stx_nano_FailureLift = function() { };
stx_nano_FailureLift.__name__ = "stx.nano.FailureLift";
stx_nano_FailureLift.fold = function(self,val,def) {
	switch(self._hx_index) {
	case 0:
		var v = self.v;
		return val(v);
	case 1:
		var e = self.spec;
		return def(e);
	}
};
stx_nano_FailureLift.fold_filter = function(self,val,def) {
	return stx_nano_FailureLift.fold(self,function(x) {
		return stx_nano_lift_LiftNano.if_else(val(x),function() {
			return stx_pico_Option.pure(stx_nano_FailureSum.ERR_OF(x));
		},function() {
			return stx_pico_Option.unit();
		});
	},function(x) {
		return stx_nano_lift_LiftNano.if_else(def(x),function() {
			return stx_pico_Option.pure(stx_nano_FailureSum.ERR(x));
		},function() {
			return stx_pico_Option.unit();
		});
	});
};
stx_nano_FailureLift.pick = function(self,val,code) {
	return !stx_pico_OptionLift.is_defined(stx_nano_FailureLift.fold_filter(self,val,code));
};
stx_nano_FailureLift.value = function(self) {
	return stx_nano_FailureLift.fold(self,haxe_ds_Option.Some,function(_) {
		return haxe_ds_Option.None;
	});
};
stx_nano_FailureLift.toString = function(self) {
	return stx_nano_FailureLift.fold(self,function(v) {
		return Std.string(v);
	},function(n) {
		return stx_nano_FailCode.toString(n);
	});
};
var stx_nano_Failure = {};
stx_nano_Failure._new = function(self) {
	var this1 = self;
	return this1;
};
stx_nano_Failure.lift = function(self) {
	return stx_nano_Failure._new(self);
};
stx_nano_Failure.fromFailCode = function(code) {
	return stx_nano_FailureSum.ERR(code);
};
stx_nano_Failure.fromErrOf = function(v) {
	return stx_nano_FailureSum.ERR_OF(v);
};
stx_nano_Failure.report = function(this1,pos) {
	return stx_nano_Report.pure(new stx_nano_Err(haxe_ds_Option.Some(this1),null,stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,pos)));
};
stx_nano_Failure.prj = function(this1) {
	return this1;
};
stx_nano_Failure.get_self = function(this1) {
	return stx_nano_Failure._new(this1);
};
var stx_nano_Fault = {};
stx_nano_Fault._new = function(self) {
	var this1 = self;
	return this1;
};
stx_nano_Fault.of = function(this1,data,code) {
	return new stx_nano_Err(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,stx_nano_FailureSum.ERR_OF(data)),haxe_ds_Option.None,this1);
};
stx_nano_Fault.empty = function(this1) {
	return new stx_nano_Err(haxe_ds_Option.None,haxe_ds_Option.None,this1);
};
stx_nano_Fault.any = function(this1,msg) {
	return new stx_nano_Err(stx_pico_Option.fromNullT(stx_nano_FailureSum.ERR(stx_nano_FailCode.fromString(msg))),null,this1);
};
stx_nano_Fault.failure = function(this1,failure) {
	return new stx_nano_Err(haxe_ds_Option.Some(failure),null,this1);
};
stx_nano_Fault.err = function(this1,code) {
	return new stx_nano_Err(haxe_ds_Option.Some(stx_nano_FailureSum.ERR(code)),null,this1);
};
var stx_nano_Field = {};
stx_nano_Field._new = function(self) {
	var this1 = self;
	return this1;
};
stx_nano_Field.fromTup = function(tp) {
	return stx_nano_Field._new(stx_nano_KV.fromObj({ key : stx_nano_CoupleLift.fst(tp), val : stx_nano_CoupleLift.snd(tp)}));
};
stx_nano_Field.fromCouple = function(tp) {
	return stx_nano_Field._new(stx_nano_KV.fromObj({ key : stx_nano_CoupleLift.fst(tp), val : stx_nano_CoupleLift.snd(tp)}));
};
stx_nano_Field.create = function(key,val) {
	return stx_nano_Field._new(stx_nano_KV.fromObj({ key : key, val : val}));
};
stx_nano_Field.map = function(this1,fn) {
	return stx_nano_KV.map(this1,fn);
};
stx_nano_Field.into = function(this1,fn) {
	return fn(this1.key,this1.val);
};
stx_nano_Field.toCouple = function(this1) {
	return stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,this1.key,this1.val);
};
var stx_nano_Floats = function() { };
stx_nano_Floats.__name__ = "stx.nano.Floats";
stx_nano_Floats.delta = function(n0,n1) {
	return n1 - n0;
};
stx_nano_Floats.normalize = function(v,n0,n1) {
	return (v - n0) / (n1 - n0);
};
stx_nano_Floats.interpolate = function(v,n0,n1) {
	return n0 + (n1 - n0) * v;
};
stx_nano_Floats.map = function(v,min0,max0,min1,max1) {
	return min1 + (max1 - min1) * ((v - min0) / (max0 - min0));
};
stx_nano_Floats.round = function(n,c) {
	if(c == null) {
		c = 1;
	}
	var r = Math.pow(10,c);
	return stx_nano_Floats.int(Math.round(n * r) / r);
};
stx_nano_Floats.ceil = function(n,c) {
	if(c == null) {
		c = 1;
	}
	var r = Math.pow(10,c);
	return stx_nano_Floats.int(Math.ceil(n * r) / r);
};
stx_nano_Floats.floor = function(n,c) {
	if(c == null) {
		c = 1;
	}
	var r = Math.pow(10,c);
	return stx_nano_Floats.int(Math.floor(n * r) / r);
};
stx_nano_Floats.clamp = function(n,min,max) {
	if(n > max) {
		n = max;
	} else if(n < min) {
		n = min;
	}
	return n;
};
stx_nano_Floats.sgn = function(n) {
	if(n == 0) {
		return 0;
	} else {
		return Math.abs(n) / n;
	}
};
stx_nano_Floats.max = function(v1,v2) {
	if(v2 > v1) {
		return v2;
	} else {
		return v1;
	}
};
stx_nano_Floats.min = function(v1,v2) {
	if(v2 < v1) {
		return v2;
	} else {
		return v1;
	}
};
stx_nano_Floats.int = function(v) {
	return v | 0;
};
stx_nano_Floats.compare = function(v1,v2) {
	if(v1 < v2) {
		return -1;
	} else if(v1 > v2) {
		return 1;
	} else {
		return 0;
	}
};
stx_nano_Floats.equals = function(v1,v2) {
	return v1 == v2;
};
stx_nano_Floats.toString = function(v) {
	return "" + v;
};
stx_nano_Floats.toInt = function(v) {
	return v | 0;
};
stx_nano_Floats.add = function(a,b) {
	return a + b;
};
stx_nano_Floats.sub = function(a,b) {
	return a - b;
};
stx_nano_Floats.div = function(a,b) {
	return a / b;
};
stx_nano_Floats.mul = function(a,b) {
	return a * b;
};
stx_nano_Floats.mod = function(a,b) {
	return a % b;
};
var stx_nano_Introspectable = function() {
	stx_pico_Clazz.call(this);
};
stx_nano_Introspectable.__name__ = "stx.nano.Introspectable";
stx_nano_Introspectable.__super__ = stx_pico_Clazz;
stx_nano_Introspectable.prototype = $extend(stx_pico_Clazz.prototype,{
	locals: function() {
		return stx_nano_lift_LiftNano.locals(stx_nano_lift_LiftNano.definition(stx_nano_Wildcard.__,this));
	}
	,__class__: stx_nano_Introspectable
});
var stx_nano_Ints = function() { };
stx_nano_Ints.__name__ = "stx.nano.Ints";
stx_nano_Ints.max = function(v1,v2) {
	if(v2 > v1) {
		return v2;
	} else {
		return v1;
	}
};
stx_nano_Ints.min = function(v1,v2) {
	if(v2 < v1) {
		return v2;
	} else {
		return v1;
	}
};
stx_nano_Ints.toBool = function(v) {
	if(v == 0) {
		return false;
	} else {
		return true;
	}
};
stx_nano_Ints.toFloat = function(v) {
	return v;
};
stx_nano_Ints.compare = function(v1,v2) {
	if(v1 < v2) {
		return -1;
	} else if(v1 > v2) {
		return 1;
	} else {
		return 0;
	}
};
stx_nano_Ints.equals = function(v1,v2) {
	return v1 == v2;
};
stx_nano_Ints.isOdd = function(n) {
	if(n % 2 == 0) {
		return false;
	} else {
		return true;
	}
};
stx_nano_Ints.isEven = function(n) {
	return (n % 2 == 0 ? false : true) == false;
};
stx_nano_Ints.isInteger = function(n) {
	return n % 1 == 0;
};
stx_nano_Ints.isNatural = function(n) {
	if(n > 0) {
		return n % 1 == 0;
	} else {
		return false;
	}
};
stx_nano_Ints.isPrime = function(n) {
	if(n == 1) {
		return false;
	}
	if(n == 2) {
		return false;
	}
	if(n % 2 == 0) {
		return false;
	}
	var itr_min = 3;
	var itr_max = Math.ceil(Math.sqrt(n)) + 1;
	while(itr_min < itr_max) {
		var i = itr_min++;
		if(n % 1 == 0) {
			return false;
		}
		++i;
	}
	return true;
};
stx_nano_Ints.factorial = function(n) {
	if(!(n > 0 && n % 1 == 0)) {
		throw haxe_Exception.thrown("function factorial requires natural number as input");
	}
	if(n == 0) {
		return 1;
	}
	var i = n - 1;
	while(i > 0) {
		n *= i;
		--i;
	}
	return n;
};
stx_nano_Ints.divisors = function(n) {
	var r = [];
	var iter_min = 1;
	var iter_max = Math.ceil(n / 2 + 1);
	while(iter_min < iter_max) {
		var i = iter_min++;
		if(n % i == 0) {
			r.push(i);
		}
	}
	if(n != 0) {
		r.push(n);
	}
	return r;
};
stx_nano_Ints.clamp = function(n,min,max) {
	if(n > max) {
		n = max;
	} else if(n < min) {
		n = min;
	}
	return n;
};
stx_nano_Ints.half = function(n) {
	return n / 2;
};
stx_nano_Ints.sum = function(xs) {
	var o = 0;
	var val = $getIterator(xs);
	while(val.hasNext()) {
		var val1 = val.next();
		o += val1;
	}
	return o;
};
stx_nano_Ints.add = function(a,b) {
	return a + b;
};
stx_nano_Ints.sub = function(a,b) {
	return a - b;
};
stx_nano_Ints.div = function(a,b) {
	return a / b;
};
stx_nano_Ints.mul = function(a,b) {
	return a * b;
};
stx_nano_Ints.mod = function(a,b) {
	return a % b;
};
stx_nano_Ints.inv = function(n) {
	return -n;
};
stx_nano_Ints.and = function(a,b) {
	return a & b;
};
stx_nano_Ints.eq = function(a,b) {
	return a == b;
};
stx_nano_Ints.gt = function(a,b) {
	return a > b;
};
stx_nano_Ints.gteq = function(a,b) {
	return a >= b;
};
stx_nano_Ints.lt = function(a,b) {
	return a < b;
};
stx_nano_Ints.lteq = function(a,b) {
	return a <= b;
};
stx_nano_Ints.ushr = function(v,bits) {
	return v >>> bits;
};
stx_nano_Ints.xor = function(a,b) {
	return a ^ b;
};
stx_nano_Ints.shl = function(v,bits) {
	return v << bits;
};
stx_nano_Ints.shr = function(v,bits) {
	return v >> bits;
};
stx_nano_Ints.abs = function(v) {
	return Math.abs(v) | 0;
};
stx_nano_Ints.toString = function(a) {
	return "" + a;
};
stx_nano_Ints.is_between = function(n,l,h) {
	if(n > l) {
		return n < h;
	} else {
		return false;
	}
};
stx_nano_Ints.is_of_range = function(n,l,h) {
	if(n >= l) {
		return n <= h;
	} else {
		return false;
	}
};
var stx_nano_IterLift = function() { };
stx_nano_IterLift.__name__ = "stx.nano.IterLift";
stx_nano_IterLift.cross = function(self,that) {
	return { iterator : function() {
		var l_it = $getIterator(self);
		var r_it = $getIterator(that);
		var l_val = null;
		var rec = null;
		rec = function() {
			if(l_val != null && l_it.hasNext()) {
				l_val = l_it.next();
			}
			if(r_it.hasNext()) {
				return stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,l_val,r_it.next());
			} else {
				if(l_it.hasNext()) {
					r_it = $getIterator(that);
				}
				l_val = null;
				return rec();
			}
		};
		return { next : rec, hasNext : function() {
			if(!l_it.hasNext()) {
				return r_it.hasNext();
			} else {
				return false;
			}
		}};
	}};
};
stx_nano_IterLift.zip = function(l,r) {
	return { iterator : function() {
		var lit = $getIterator(l);
		var rit = $getIterator(r);
		return { next : function() {
			return stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,lit.next(),rit.next());
		}, hasNext : function() {
			if(lit.hasNext()) {
				return rit.hasNext();
			} else {
				return false;
			}
		}};
	}};
};
stx_nano_IterLift.ldrop = function(it,n) {
	return { iterator : function() {
		var iter = $getIterator(it);
		while(n > 0) {
			iter.next();
			n -= 1;
		}
		return iter;
	}};
};
stx_nano_IterLift.toMap = function(iter,fn,map) {
	var i = $getIterator(iter);
	while(i.hasNext()) {
		var i1 = i.next();
		var kv = fn(i1);
		stx_nano_CoupleLift.decouple(kv,$bind(map,map.set));
	}
	return map;
};
stx_nano_IterLift.map = function(iter,fn) {
	return { iterator : function() {
		var i = $getIterator(iter);
		return { next : function() {
			return fn(i.next());
		}, hasNext : function() {
			return i.hasNext();
		}};
	}};
};
stx_nano_IterLift.head = function(iter) {
	var it = $getIterator(iter);
	if(it.hasNext()) {
		return haxe_ds_Option.Some(it.next());
	} else {
		return haxe_ds_Option.None;
	}
};
stx_nano_IterLift.tail = function(iter) {
	return { iterator : function() {
		var it = $getIterator(iter);
		it.next();
		return { next : $bind(it,it.next), hasNext : $bind(it,it.hasNext)};
	}};
};
stx_nano_IterLift.lfold = function(iter,mapper,seed) {
	var folded = seed;
	var e = $getIterator(iter);
	while(e.hasNext()) {
		var e1 = e.next();
		folded = mapper(e1,folded);
	}
	return folded;
};
stx_nano_IterLift.lfold1 = function(iter,mapper) {
	return stx_pico_OptionLift.map(stx_nano_IterLift.head(iter),function(seed) {
		return stx_nano_IterLift.lfold(stx_nano_IterLift.tail(iter),mapper,seed);
	});
};
stx_nano_IterLift.toGenerator = function(self) {
	var iter = haxe_ds_Option.None;
	return function() {
		if(iter == haxe_ds_Option.None) {
			iter = haxe_ds_Option.Some($getIterator(self));
		}
		return stx_pico_OptionLift.flat_map(iter,function(x) {
			if(x.hasNext()) {
				return haxe_ds_Option.Some(x.next());
			} else {
				return haxe_ds_Option.None;
			}
		});
	};
};
stx_nano_IterLift.toArray = function(self) {
	var arr = [];
	var v = $getIterator(self);
	while(v.hasNext()) {
		var v1 = v.next();
		arr.push(v1);
	}
	return arr;
};
stx_nano_IterLift.foldr = function(iter,fn,init) {
	var data = init;
	var iterator = $getIterator(iter);
	var eff = null;
	eff = function() {
		if(iterator.hasNext()) {
			var next = iterator.next();
			eff();
			data = fn(next,data);
		}
	};
	eff();
	return data;
};
stx_nano_IterLift.foldl = function(iter,fn,init) {
	var data = init;
	var iterator = $getIterator(iter);
	var eff = null;
	eff = function() {
		if(iterator.hasNext()) {
			var next = iterator.next();
			data = fn(next,data);
			eff();
		}
	};
	eff();
	return data;
};
var stx_nano_Iter = {};
stx_nano_Iter._new = function(self) {
	var this1 = self;
	return this1;
};
stx_nano_Iter.prj = function(this1) {
	return this1;
};
var stx_nano_KV = {};
stx_nano_KV._new = function(self) {
	var this1 = self;
	return this1;
};
stx_nano_KV.map = function(this1,fn) {
	return stx_nano_KV.fromObj({ key : this1.key, val : fn(this1.val)});
};
stx_nano_KV.fromObj = function(v) {
	return stx_nano_KV._new(v);
};
stx_nano_KV.fromTup = function(tp) {
	return stx_nano_KV._new({ key : stx_nano_CoupleLift.fst(tp), val : stx_nano_CoupleLift.snd(tp)});
};
stx_nano_KV.fst = function(this1) {
	return this1.key;
};
stx_nano_KV.snd = function(this1) {
	return this1.val;
};
stx_nano_KV.into = function(this1,fn) {
	return fn(this1.key,this1.val);
};
stx_nano_KV.decouple = function(this1,fn) {
	return fn(this1.key,this1.val);
};
var stx_nano_Math = function() { };
stx_nano_Math.__name__ = "stx.nano.Math";
stx_nano_Math.rndOne = function(weight) {
	if(weight == null) {
		weight = 0.5;
	}
	return Math.random() - weight | 0;
};
stx_nano_Math.radians = function(v) {
	return v * (Math.PI / 180);
};
stx_nano_Math.degrees = function(v) {
	return v * (180 / Math.PI);
};
stx_nano_Math.random = function(max,min) {
	if(min == null) {
		min = 0;
	}
	if(max == null) {
		max = 1;
	}
	return Math.random() * (max - min) + min;
};
stx_nano_Math.isNaN = function(fl) {
	return isNaN(fl);
};
stx_nano_Math.unique_unordered_pair = function(x,y) {
	if(x < y) {
		return x * (y - 1) + Math.floor(Math.pow(y - x - 2,2) / 4);
	} else {
		return (x - 1) * y + Math.floor(Math.pow(x - y - 2,2) / 4);
	}
};
var stx_nano_Module = function() {
	stx_pico_Clazz.call(this);
};
stx_nano_Module.__name__ = "stx.nano.Module";
stx_nano_Module.__super__ = stx_pico_Clazz;
stx_nano_Module.prototype = $extend(stx_pico_Clazz.prototype,{
	Ft: function() {
		return new stx_nano__$Module_Ft();
	}
	,Map: function() {
		return new stx_nano__$Module_Map();
	}
	,__class__: stx_nano_Module
});
var stx_nano__$Module_Ft = function() {
	stx_pico_Clazz.call(this);
};
stx_nano__$Module_Ft.__name__ = "stx.nano._Module.Ft";
stx_nano__$Module_Ft.__super__ = stx_pico_Clazz;
stx_nano__$Module_Ft.prototype = $extend(stx_pico_Clazz.prototype,{
	bind_fold: function(arr,fn,init) {
		return stx_lift_ArrayLift.lfold(arr,function(next,memo) {
			return tink_core_Future.flatMap(memo,function(tt) {
				return fn(next,tt);
			});
		},new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(init)));
	}
	,zip: function(self,that) {
		var left = haxe_ds_Option.None;
		var right = haxe_ds_Option.None;
		var trigger = new tink_core_FutureTrigger();
		var on_done = function() {
			if(left._hx_index == 0) {
				if(right._hx_index == 0) {
					var r = right.v;
					var l = left.v;
					trigger.trigger(stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,l,r));
				}
			}
		};
		var l_handler = function(l) {
			left = haxe_ds_Option.Some(l);
			on_done();
		};
		var r_handler = function(r) {
			right = haxe_ds_Option.Some(r);
			on_done();
		};
		self.handle(l_handler);
		that.handle(r_handler);
		return trigger;
	}
	,tryAndThenCancelIfNotAvailable: function(ft) {
		var output = haxe_ds_Option.None;
		var canceller = ft.handle(function(x) {
			output = haxe_ds_Option.Some(x);
		});
		if(!stx_pico_OptionLift.is_defined(output)) {
			if(canceller != null) {
				canceller.cancel();
			}
		}
		return output;
	}
	,__class__: stx_nano__$Module_Ft
});
var stx_nano__$Module_Sig = function() { };
stx_nano__$Module_Sig.__name__ = "stx.nano._Module.Sig";
var stx_nano__$Module_Map = function() {
	stx_pico_Clazz.call(this);
};
stx_nano__$Module_Map.__name__ = "stx.nano._Module.Map";
stx_nano__$Module_Map.__super__ = stx_pico_Clazz;
stx_nano__$Module_Map.prototype = $extend(stx_pico_Clazz.prototype,{
	String: function() {
		return new haxe_ds_StringMap();
	}
	,__class__: stx_nano__$Module_Map
});
var stx_nano_OneOrManySum = $hxEnums["stx.nano.OneOrManySum"] = { __ename__:"stx.nano.OneOrManySum",__constructs__:null
	,OneOf: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"stx.nano.OneOrManySum",toString:$estr}; },$_._hx_name="OneOf",$_.__params__ = ["v"],$_)
	,ManyOf: ($_=function(arr) { return {_hx_index:1,arr:arr,__enum__:"stx.nano.OneOrManySum",toString:$estr}; },$_._hx_name="ManyOf",$_.__params__ = ["arr"],$_)
};
stx_nano_OneOrManySum.__constructs__ = [stx_nano_OneOrManySum.OneOf,stx_nano_OneOrManySum.ManyOf];
var stx_nano_OneOrMany = {};
stx_nano_OneOrMany._new = function(self) {
	var this1 = self;
	return this1;
};
stx_nano_OneOrMany.lift = function(self) {
	return stx_nano_OneOrMany._new(self);
};
stx_nano_OneOrMany.fromT = function(self) {
	return stx_nano_OneOrMany.lift(stx_nano_OneOrManySum.OneOf(self));
};
stx_nano_OneOrMany.fromArray = function(self) {
	return stx_nano_OneOrMany.lift(stx_nano_OneOrManySum.ManyOf(self));
};
stx_nano_OneOrMany.toArray = function(this1) {
	switch(this1._hx_index) {
	case 0:
		var v = this1.v;
		return [v];
	case 1:
		var arr = this1.arr;
		return arr;
	}
};
stx_nano_OneOrMany.prj = function(this1) {
	return this1;
};
stx_nano_OneOrMany.get_self = function(this1) {
	return stx_nano_OneOrMany.lift(this1);
};
var stx_nano_PledgeLift = function() { };
stx_nano_PledgeLift.__name__ = "stx.nano.PledgeLift";
stx_nano_PledgeLift.toJsPromise = function(self) {
	var promise = new Promise(function(resolve,reject) {
		try {
			self.handle(function(res) {
				switch(res._hx_index) {
				case 0:
					var t = res.t;
					resolve(stx_nano_lift_LiftNano.accept(stx_nano_Wildcard.__,t));
					break;
				case 1:
					var e = res.e;
					reject(stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,e));
					break;
				}
			});
		} catch( _g ) {
			haxe_NativeStackTrace.lastError = _g;
			var _g1 = haxe_Exception.caught(_g).unwrap();
			if(((_g1) instanceof stx_nano_Err)) {
				var e = _g1;
				reject(stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,e));
			} else {
				var e = _g1;
				var reject1 = reject;
				var this1 = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,{ fileName : "stx/nano/Pledge.hx", lineNumber : 175, className : "stx.nano.PledgeLift", methodName : "toJsPromise"});
				reject1(stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,new stx_nano_Err(stx_pico_Option.fromNullT(stx_nano_FailureSum.ERR(stx_nano_FailCode.fromString(Std.string(e)))),null,this1)));
			}
		}
	});
	return promise;
};
stx_nano_PledgeLift.toJsPromiseError = function(self) {
	return stx_nano_PledgeLift.toJsPromise(self).then(function(res) {
		return new Promise(function(resolve,reject) {
			switch(res._hx_index) {
			case 0:
				var t = res.t;
				resolve(t);
				break;
			case 1:
				var e = res.e;
				reject(e);
				break;
			}
		});
	});
};
stx_nano_PledgeLift.lift = function(self) {
	return stx_nano_Pledge.lift(self);
};
stx_nano_PledgeLift.zip = function(self,that) {
	var out = tink_core_Future.map(stx_nano_lift_LiftNano.nano(stx_nano_Wildcard.__).Ft().zip(stx_nano_Pledge.prj(self),stx_nano_Pledge.prj(that)),function(tp) {
		var self = stx_nano_CoupleLift.fst(tp);
		var that = stx_nano_CoupleLift.snd(tp);
		switch(self._hx_index) {
		case 0:
			var _g = self.t;
			switch(that._hx_index) {
			case 0:
				var tt = that.t;
				var t = _g;
				return stx_nano_ResSum.Accept(stx_nano_Couple.make(t,tt));
			case 1:
				var e = that.e;
				return stx_nano_ResSum.Reject(e);
			}
			break;
		case 1:
			var _g = self.e;
			if(that._hx_index == 1) {
				var ee = that.e;
				var e = _g;
				return stx_nano_ResSum.Reject(e.merge(ee));
			} else {
				var e = _g;
				return stx_nano_ResSum.Reject(e);
			}
			break;
		}
	});
	return out;
};
stx_nano_PledgeLift.map = function(self,fn) {
	return stx_nano_PledgeLift.lift(tink_core_Future.map(stx_nano_Pledge.prj(self),function(x) {
		var tmp;
		switch(x._hx_index) {
		case 0:
			var t = x.t;
			tmp = stx_nano_lift_LiftNano.accept(stx_nano_Wildcard.__,fn(t));
			break;
		case 1:
			var e = x.e;
			tmp = stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,e);
			break;
		}
		return tmp;
	}));
};
stx_nano_PledgeLift.flat_map = function(self,fn) {
	var ft = stx_nano_Pledge.prj(self);
	return tink_core_Future.flatMap(ft,function(x) {
		switch(x._hx_index) {
		case 0:
			var t = x.t;
			return stx_nano_Pledge.prj(fn(t));
		case 1:
			var e = x.e;
			return stx_nano_Pledge.prj(stx_nano_Pledge.fromRes(stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,e)));
		}
	});
};
stx_nano_PledgeLift.flat_fold = function(self,val,ers) {
	return tink_core_Future.flatMap(self,function(res) {
		switch(res._hx_index) {
		case 0:
			var t = res.t;
			return val(t);
		case 1:
			var e = res.e;
			return ers(e);
		}
	});
};
stx_nano_PledgeLift.fold = function(self,val,ers) {
	var fn = val;
	var er = ers;
	var tmp = function(self) {
		switch(self._hx_index) {
		case 0:
			var t = self.t;
			return fn(t);
		case 1:
			var e = self.e;
			return er(e);
		}
	};
	return tink_core_Future.map(stx_nano_Pledge.prj(self),tmp);
};
stx_nano_PledgeLift.recover = function(self,fn) {
	return stx_nano_PledgeLift.lift(stx_nano_PledgeLift.fold(self,function(x) {
		return stx_nano_lift_LiftNano.accept(stx_nano_Wildcard.__,x);
	},function(e) {
		return fn(e);
	}));
};
stx_nano_PledgeLift.adjust = function(self,fn) {
	return stx_nano_PledgeLift.lift(stx_nano_PledgeLift.fold(self,function(x) {
		return fn(x);
	},function(v) {
		return stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,v);
	}));
};
stx_nano_PledgeLift.rectify = function(self,fn) {
	return stx_nano_PledgeLift.lift(tink_core_Future.map(stx_nano_Pledge.prj(self),function(res) {
		var fn1 = fn;
		switch(res._hx_index) {
		case 0:
			var t = res.t;
			return stx_nano_Res.accept(t);
		case 1:
			var e = res.e;
			return fn1(e);
		}
	}));
};
stx_nano_PledgeLift.receive = function(self,fn) {
	return tink_core_Future.map(stx_nano_Pledge.prj(self),function(res) {
		var tmp;
		switch(res._hx_index) {
		case 0:
			var t = res.t;
			fn(t);
			tmp = haxe_ds_Option.None;
			break;
		case 1:
			var e = res.e;
			tmp = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,e);
			break;
		}
		return tmp;
	});
};
stx_nano_PledgeLift.fudge = function(self) {
	var out = null;
	stx_nano_Pledge.prj(self).handle(function(v) {
		out = v;
	});
	if(out == null) {
		throw haxe_Exception.thrown(new stx_nano_Err(haxe_ds_Option.Some(stx_nano_FailureSum.ERR("E_ValueNotReady")),null,stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,{ fileName : "stx/nano/Pledge.hx", lineNumber : 267, className : "stx.nano.PledgeLift", methodName : "fudge"})));
	}
	return out;
};
stx_nano_PledgeLift.point = function(self,fn) {
	return stx_nano_Alert.lift(tink_core_Future.map(self,function(res) {
		switch(res._hx_index) {
		case 0:
			var t = res.t;
			return fn(t);
		case 1:
			var e = res.e;
			return e.report();
		}
	}));
};
stx_nano_PledgeLift.errata = function(self,fn) {
	return tink_core_Future.map(stx_nano_Pledge.prj(self),function(chk) {
		var self;
		switch(chk._hx_index) {
		case 0:
			var t = chk.t;
			self = stx_nano_Res.accept(t);
			break;
		case 1:
			var e = chk.e;
			self = stx_nano_Res.reject(fn(e));
			break;
		}
		return stx_nano_Res._new(self);
	});
};
stx_nano_PledgeLift.errate = function(self,fn) {
	return stx_nano_PledgeLift.errata(self,function(x) {
		return x.map(fn);
	});
};
stx_nano_PledgeLift.each = function(self,fn,err) {
	stx_nano_Pledge.prj(self).handle(function(res) {
		switch(res._hx_index) {
		case 0:
			var t = res.t;
			fn(t);
			break;
		case 1:
			var e = res.e;
			var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,err);
			switch(self._hx_index) {
			case 0:
				var t = self.v;
				t(e);
				break;
			case 1:
				throw haxe_Exception.thrown(e);
			}
			break;
		}
	});
};
stx_nano_PledgeLift.tap = function(self,fn,pos) {
	return stx_nano_PledgeLift.lift(tink_core_Future.map(stx_nano_Pledge.prj(self),function(x) {
		fn(x,pos);
		return x;
	}));
};
stx_nano_PledgeLift.command = function(self,fn) {
	return stx_nano_Pledge.flat_map(self,function(t) {
		return stx_nano_AlertLift.resolve(fn(t),t);
	});
};
stx_nano_PledgeLift.execute = function(self,fn) {
	return stx_nano_Pledge.flat_map(self,function(t) {
		return stx_nano_AlertLift.resolve(fn(),t);
	});
};
stx_nano_PledgeLift.anyway = function(self,fn) {
	return tink_core_Future.flatMap(self,function(res) {
		var tmp;
		switch(res._hx_index) {
		case 0:
			var t = res.t;
			var ok = t;
			var f = null;
			tmp = stx_nano_AlertLift.flat_fold(fn(f == null ? stx_nano_Report.unit() : stx_nano_Report.pure(f(stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,{ fileName : "stx/nano/Pledge.hx", lineNumber : 322, className : "stx.nano.PledgeLift", methodName : "anyway"})))),function(err) {
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,err)));
			},function() {
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(stx_nano_lift_LiftNano.accept(stx_nano_Wildcard.__,ok)));
			});
			break;
		case 1:
			var e = res.e;
			var err = e;
			tmp = stx_nano_AlertLift.flat_fold(fn(err.report()),function(err0) {
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,err.merge(err0))));
			},function() {
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,err)));
			});
			break;
		}
		return tmp;
	});
};
var stx_nano_Pledge = {};
stx_nano_Pledge._new = function(self) {
	var this1 = self;
	return this1;
};
stx_nano_Pledge.lift = function(self) {
	return stx_nano_Pledge._new(self);
};
stx_nano_Pledge.make = function(ch) {
	var this1 = new tink_core__$Future_SuspendableFuture(function(f) {
		f(ch);
		return null;
	});
	return this1;
};
stx_nano_Pledge.accept = function(ch) {
	return stx_nano_Pledge.make(stx_nano_lift_LiftNano.accept(stx_nano_Wildcard.__,ch));
};
stx_nano_Pledge.reject = function(e) {
	return stx_nano_Pledge.make(stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,e));
};
stx_nano_Pledge.bind_fold = function(it,fm,start) {
	return stx_nano_Pledge._new(stx_nano_lift_LiftNano.nano(stx_nano_Wildcard.__).Ft().bind_fold(it,function(next,memo) {
		switch(memo._hx_index) {
		case 0:
			var t = memo.t;
			return stx_nano_Pledge.prj(fm(next,t));
		case 1:
			var e = memo.e;
			return stx_nano_Pledge.make(stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,e));
		}
	},stx_nano_lift_LiftNano.accept(stx_nano_Wildcard.__,start)));
};
stx_nano_Pledge.seq = function(iter) {
	return stx_nano_Pledge.bind_fold(iter,function(next,memo) {
		return stx_nano_Pledge.map(next,function(a) {
			return stx_lift_ArrayLift.snoc(memo,a);
		});
	},[]);
};
stx_nano_Pledge.lazy = function(fn) {
	return stx_nano_Pledge.lift(tink_core_Future.irreversible(function(f) {
		f(stx_nano_lift_LiftNano.accept(stx_nano_Wildcard.__,fn()));
	}));
};
stx_nano_Pledge.fromLazyError = function(fn) {
	return stx_nano_Pledge.fromLazyRes(function() {
		return stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,fn());
	});
};
stx_nano_Pledge.fromTinkPromise = function(promise) {
	return stx_nano_Pledge.lift(tink_core_Future.map(promise,function(outcome) {
		switch(outcome._hx_index) {
		case 0:
			var s = outcome.data;
			return stx_nano_lift_LiftNano.accept(stx_nano_Wildcard.__,s);
		case 1:
			var f = outcome.failure;
			return stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,stx_nano_Err.fromTinkError(f));
		}
	}));
};
stx_nano_Pledge.fromTinkFuture = function(future) {
	return stx_nano_Pledge.lift(tink_core_Future.map(future,function(t) {
		return stx_nano_lift_LiftNano.accept(stx_nano_Wildcard.__,t);
	}));
};
stx_nano_Pledge.fromLazyRes = function(fn) {
	return tink_core_Future.irreversible(function(f) {
		f(fn());
	});
};
stx_nano_Pledge.err = function(e) {
	return stx_nano_Pledge.make(stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,e));
};
stx_nano_Pledge.fromRes = function(chk) {
	return tink_core_Future.irreversible(function(cb) {
		cb(chk);
	});
};
stx_nano_Pledge.fromOption = function(m) {
	var val;
	switch(m._hx_index) {
	case 0:
		var t = m.v;
		val = stx_nano_lift_LiftNano.accept(stx_nano_Wildcard.__,t);
		break;
	case 1:
		val = stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,new stx_nano_Err(haxe_ds_Option.Some(stx_nano_FailureSum.ERR("E_UnexpectedNullValueEncountered")),null,stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,{ fileName : "stx/nano/Pledge.hx", lineNumber : 88, className : "stx.nano._Pledge.Pledge_Impl_", methodName : "fromOption"})));
		break;
	}
	var val1 = val;
	return stx_nano_Pledge.fromRes(val1);
};
stx_nano_Pledge.prj = function(this1) {
	return this1;
};
stx_nano_Pledge.get_self = function(this1) {
	return stx_nano_Pledge.lift(this1);
};
stx_nano_Pledge.map = function(this1,fn) {
	return stx_nano_Pledge._.map(this1,fn);
};
stx_nano_Pledge.flat_map = function(this1,fn) {
	return stx_nano_Pledge._.flat_map(this1,fn);
};
stx_nano_Pledge.fromJsPromise = function(self,pos) {
	var t = new tink_core_FutureTrigger();
	self.then(function(ok) {
		return t.trigger(stx_nano_lift_LiftNano.accept(stx_nano_Wildcard.__,ok));
	},function(no) {
		var _g = Type.typeof(no);
		if(_g._hx_index == 6) {
			if(_g.c == Error) {
				var e = no;
				var t1 = t;
				var this1 = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,pos);
				return t1.trigger(stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,new stx_nano_Err(stx_pico_Option.fromNullT(stx_nano_FailureSum.ERR(stx_nano_FailCode.fromString(e.message))),null,this1)));
			} else {
				var t1 = t;
				var this1 = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,pos);
				return t1.trigger(stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,new stx_nano_Err(stx_pico_Option.fromNullT(stx_nano_FailureSum.ERR(stx_nano_FailCode.fromString(no))),null,this1)));
			}
		} else {
			var t1 = t;
			var this1 = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,pos);
			return t1.trigger(stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,new stx_nano_Err(stx_pico_Option.fromNullT(stx_nano_FailureSum.ERR(stx_nano_FailCode.fromString(no))),null,this1)));
		}
	}).catch(function(e) {
		var e1 = e;
		var t1 = t;
		var this1 = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,pos);
		return t1.trigger(stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,new stx_nano_Err(stx_pico_Option.fromNullT(stx_nano_FailureSum.ERR(stx_nano_FailCode.fromString(e1.message))),null,this1)));
	});
	return stx_nano_Pledge.lift(t);
};
var stx_nano_PositionLift = function() { };
stx_nano_PositionLift.__name__ = "stx.nano.PositionLift";
stx_nano_PositionLift.toString = function(pos) {
	if(pos == null) {
		return ":pos ()";
	}
	var f = pos.fileName;
	var cls = pos.className;
	var fn = pos.methodName;
	var ln = pos.lineNumber;
	return ":pos (object :file_name " + fn + " :class_name " + cls + " :method_name " + fn + "  :line_number " + ln + ")";
};
stx_nano_PositionLift.clone = function(p) {
	return stx_nano_Position.make(p.fileName,p.className,p.methodName,p.lineNumber,p.customParams);
};
stx_nano_PositionLift.withFragmentName = function(pos) {
	var f = pos.fileName;
	var cls = pos.className;
	var fn = pos.methodName;
	var ln = pos.lineNumber;
	return "" + cls + "." + fn;
};
stx_nano_PositionLift.toStringClassMethodLine = function(pos) {
	var f = pos.fileName;
	var cls = pos.className;
	var fn = pos.methodName;
	var ln = pos.lineNumber;
	var class_method = stx_nano_PositionLift.withFragmentName(pos);
	return "(" + class_method + "@" + pos.lineNumber + ")";
};
stx_nano_PositionLift.to_vscode_clickable_link = function(pos) {
	var f = pos.fileName;
	var cls = pos.className;
	var fn = pos.methodName;
	var ln = pos.lineNumber;
	var class_method = stx_nano_PositionLift.withFragmentName(pos);
	return "" + f + ":" + ln;
};
stx_nano_PositionLift.toString_name_method_line = function(pos) {
	var name = stx_pico_Identifier.get_name(stx_nano_lift_LiftNano.toIdentifier(stx_LiftPos.lift(pos)));
	var method = pos.methodName;
	var line = pos.lineNumber;
	return "" + name + "." + method + "@" + line;
};
stx_nano_PositionLift.withCustomParams = function(p,v) {
	p = stx_nano_PositionLift.clone(p);
	if(p.customParams == null) {
		p.customParams = [];
	}
	p.customParams.push(v);
	return p;
};
stx_nano_PositionLift.identifier = function(self) {
	var valid = stx_nano_Position.get_fileName(stx_nano_lift_LiftNano.toPosition(self)).split(".")[0].split(stx_nano_lift_LiftNano.sep(stx_nano_Wildcard.__)).join(".");
	return stx_pico_Identifier._new(valid);
};
stx_nano_PositionLift.toIdentfier = function(self) {
	var valid = stx_nano_Position.get_fileName(stx_nano_lift_LiftNano.toPosition(self)).split(".")[0].split(stx_nano_lift_LiftNano.sep(stx_nano_Wildcard.__)).join(".");
	return stx_pico_Identifier._new(valid);
};
var stx_nano_Position = {};
stx_nano_Position._new = function(self) {
	var this1 = self;
	return this1;
};
stx_nano_Position.lift = function(pos) {
	return stx_nano_Position.fromPos(pos);
};
stx_nano_Position.make = function(fileName,className,methodName,lineNumber,customParams) {
	return { fileName : fileName, className : className, methodName : methodName, lineNumber : lineNumber, customParams : customParams};
};
stx_nano_Position.fromPos = function(pos) {
	return stx_nano_Position._new(pos);
};
stx_nano_Position.toString = function(this1) {
	return stx_nano_Position._.toStringClassMethodLine(this1);
};
stx_nano_Position.here = function(pos) {
	return pos;
};
stx_nano_Position.get_fileName = function(this1) {
	return this1.fileName;
};
stx_nano_Position.get_className = function(this1) {
	return this1.className;
};
stx_nano_Position.get_methodName = function(this1) {
	return this1.methodName;
};
stx_nano_Position.get_lineNummber = function(this1) {
	return this1.lineNumber;
};
stx_nano_Position.get_customParams = function(this1) {
	return this1.customParams;
};
stx_nano_Position.toIdentDef = function(this1) {
	return stx_pico_Identifier.toIdentDef(stx_nano_lift_LiftNano.toIdentifier(this1));
};
stx_nano_Position.toPos = function(this1) {
	return this1;
};
var stx_nano_PrimitiveDef = $hxEnums["stx.nano.PrimitiveDef"] = { __ename__:"stx.nano.PrimitiveDef",__constructs__:null
	,PNull: {_hx_name:"PNull",_hx_index:0,__enum__:"stx.nano.PrimitiveDef",toString:$estr}
	,PBool: ($_=function(b) { return {_hx_index:1,b:b,__enum__:"stx.nano.PrimitiveDef",toString:$estr}; },$_._hx_name="PBool",$_.__params__ = ["b"],$_)
	,PInt: ($_=function(int) { return {_hx_index:2,int:int,__enum__:"stx.nano.PrimitiveDef",toString:$estr}; },$_._hx_name="PInt",$_.__params__ = ["int"],$_)
	,PFloat: ($_=function(fl) { return {_hx_index:3,fl:fl,__enum__:"stx.nano.PrimitiveDef",toString:$estr}; },$_._hx_name="PFloat",$_.__params__ = ["fl"],$_)
	,PString: ($_=function(str) { return {_hx_index:4,str:str,__enum__:"stx.nano.PrimitiveDef",toString:$estr}; },$_._hx_name="PString",$_.__params__ = ["str"],$_)
};
stx_nano_PrimitiveDef.__constructs__ = [stx_nano_PrimitiveDef.PNull,stx_nano_PrimitiveDef.PBool,stx_nano_PrimitiveDef.PInt,stx_nano_PrimitiveDef.PFloat,stx_nano_PrimitiveDef.PString];
var stx_nano_Primitive = {};
stx_nano_Primitive.fromInt = function(i) {
	return stx_nano_PrimitiveDef.PInt(i);
};
stx_nano_Primitive.fromFloat = function(i) {
	return stx_nano_PrimitiveDef.PFloat(i);
};
stx_nano_Primitive.fromBool = function(i) {
	return stx_nano_PrimitiveDef.PBool(i);
};
stx_nano_Primitive.fromString = function(i) {
	return stx_nano_PrimitiveDef.PString(i);
};
stx_nano_Primitive.toAny = function(this1) {
	switch(this1._hx_index) {
	case 0:
		return null;
	case 1:
		var b = this1.b;
		return b;
	case 2:
		var int = this1.int;
		return int;
	case 3:
		var fl = this1.fl;
		return fl;
	case 4:
		var str = this1.str;
		return str;
	}
};
stx_nano_Primitive.toString = function(this1) {
	switch(this1._hx_index) {
	case 0:
		return "null";
	case 1:
		var b = this1.b;
		return "" + (b == null ? "null" : "" + b);
	case 2:
		var int = this1.int;
		return "" + int;
	case 3:
		var fl = this1.fl;
		return "" + fl;
	case 4:
		var str = this1.str;
		return str;
	}
};
stx_nano_Primitive.prj = function(this1) {
	return this1;
};
stx_nano_Primitive.lt = function(l,r) {
	switch(l._hx_index) {
	case 1:
		if(l.b == false) {
			if(r._hx_index == 1) {
				if(r.b == true) {
					return true;
				} else {
					return false;
				}
			} else {
				var x = l;
				var y = r;
				return x._hx_index < y._hx_index;
			}
		} else if(r._hx_index == 1) {
			var _g = r.b;
			return false;
		} else {
			var x = l;
			var y = r;
			return x._hx_index < y._hx_index;
		}
		break;
	case 2:
		if(r._hx_index == 2) {
			var int0 = r.int;
			var int = l.int;
			return int < int0;
		} else {
			var x = l;
			var y = r;
			return x._hx_index < y._hx_index;
		}
		break;
	case 3:
		if(r._hx_index == 3) {
			var fl0 = r.fl;
			var fl = l.fl;
			return fl < fl0;
		} else {
			var x = l;
			var y = r;
			return x._hx_index < y._hx_index;
		}
		break;
	case 4:
		if(r._hx_index == 4) {
			var str0 = r.str;
			var str = l.str;
			return str < str0;
		} else {
			var x = l;
			var y = r;
			return x._hx_index < y._hx_index;
		}
		break;
	default:
		var x = l;
		var y = r;
		return x._hx_index < y._hx_index;
	}
};
stx_nano_Primitive.eq = function(l,r) {
	switch(l._hx_index) {
	case 0:
		if(r._hx_index == 0) {
			return true;
		} else {
			return false;
		}
		break;
	case 1:
		if(l.b) {
			if(r._hx_index == 1) {
				if(r.b == true) {
					return true;
				} else {
					return false;
				}
			} else {
				return false;
			}
		} else if(r._hx_index == 1) {
			if(r.b == false) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
		break;
	case 2:
		if(r._hx_index == 2) {
			var int0 = r.int;
			var int = l.int;
			return int == int0;
		} else {
			return false;
		}
		break;
	case 3:
		if(r._hx_index == 3) {
			var fl0 = r.fl;
			var fl = l.fl;
			return fl == fl0;
		} else {
			return false;
		}
		break;
	case 4:
		if(r._hx_index == 4) {
			var str0 = r.str;
			var str = l.str;
			return str == str0;
		} else {
			return false;
		}
		break;
	}
};
var stx_nano_ReportLift = function() { };
stx_nano_ReportLift.__name__ = "stx.nano.ReportLift";
stx_nano_ReportLift.lift = function(self) {
	return stx_nano_Report._new(self);
};
stx_nano_ReportLift.resolve = function(self,fn) {
	return stx_nano_ReportLift.fold(self,function(e) {
		return stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,e);
	},function() {
		return stx_nano_lift_LiftNano.accept(stx_nano_Wildcard.__,fn());
	});
};
stx_nano_ReportLift.merge = function(self,that) {
	switch(self._hx_index) {
	case 0:
		var _g = self.v;
		switch(that._hx_index) {
		case 0:
			var r = that.v;
			var l = _g;
			return stx_nano_ReportSum.Reported(l.merge(r));
		case 1:
			var l = _g;
			return stx_nano_ReportSum.Reported(l);
		}
		break;
	case 1:
		if(that._hx_index == 0) {
			var r = that.v;
			return stx_nano_ReportSum.Reported(r);
		} else {
			return stx_nano_ReportSum.Happened;
		}
		break;
	}
};
stx_nano_ReportLift.fold = function(self,val,nil) {
	if(self == null) {
		return nil();
	} else {
		switch(self._hx_index) {
		case 0:
			var v = self.v;
			return val(v);
		case 1:
			return nil();
		}
	}
};
stx_nano_ReportLift.def = function(self,fn) {
	return stx_nano_ReportLift.fold(self,function(x) {
		return x;
	},fn);
};
stx_nano_ReportLift.defv = function(self,v) {
	return stx_nano_ReportLift.def(self,function() {
		return v;
	});
};
stx_nano_ReportLift.is_defined = function(self) {
	return stx_nano_ReportLift.fold(self,function(_) {
		return true;
	},function() {
		return false;
	});
};
stx_nano_ReportLift.ignore = function(self,fn) {
	var self1 = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,fn);
	if(self1._hx_index == 0) {
		var v = self1.v;
	} else {
		fn = function(x) {
			return true;
		};
	}
	return stx_nano_ReportLift.fold(self,function(err) {
		var self = err.data;
		switch(self._hx_index) {
		case 0:
			var t = self.v;
			return stx_nano_lift_LiftNano.if_else(fn(t),function() {
				var f = null;
				if(f == null) {
					return stx_nano_Report.unit();
				} else {
					return stx_nano_Report.pure(f(stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,{ fileName : "stx/nano/Report.hx", lineNumber : 150, className : "stx.nano.ReportLift", methodName : "ignore"})));
				}
			},function() {
				return err.report();
			});
		case 1:
			var f = null;
			if(f == null) {
				return stx_nano_Report.unit();
			} else {
				return stx_nano_Report.pure(f(stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,{ fileName : "stx/nano/Report.hx", lineNumber : 153, className : "stx.nano.ReportLift", methodName : "ignore"})));
			}
			break;
		}
	},function() {
		var f = null;
		if(f == null) {
			return stx_nano_Report.unit();
		} else {
			return stx_nano_Report.pure(f(stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,{ fileName : "stx/nano/Report.hx", lineNumber : 155, className : "stx.nano.ReportLift", methodName : "ignore"})));
		}
	});
};
var stx_nano_Report = {};
stx_nano_Report._new = function(self) {
	var this1 = self;
	return this1;
};
stx_nano_Report.lift = function(self) {
	return stx_nano_Report._new(self);
};
stx_nano_Report.make = function(data,pos) {
	var this1 = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,pos);
	return stx_nano_Report.pure(new stx_nano_Err(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,stx_nano_FailureSum.ERR_OF(data)),haxe_ds_Option.None,this1));
};
stx_nano_Report.make0 = function(data,pos) {
	return stx_nano_Report.pure(new stx_nano_Err(haxe_ds_Option.Some(data),null,stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,pos)));
};
stx_nano_Report.unit = function() {
	return stx_nano_Report._new(stx_nano_ReportSum.Happened);
};
stx_nano_Report.conf = function(e) {
	var self = stx_pico_OptionLift.map(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,e),stx_nano_ReportSum.Reported);
	var self1;
	if(self._hx_index == 0) {
		var v = self.v;
		self1 = v;
	} else {
		self1 = stx_nano_ReportSum.Happened;
	}
	return stx_nano_Report._new(self1);
};
stx_nano_Report.pure = function(e) {
	return stx_nano_Report._new(stx_nano_ReportSum.Reported(e));
};
stx_nano_Report.effects = function(this1,success,failure) {
	return stx_nano_Report._.fold(this1,function(e) {
		failure();
		return stx_nano_Report.pure(e);
	},function() {
		success();
		return stx_nano_Report.unit();
	});
};
stx_nano_Report.crunch = function(this1) {
	if(this1._hx_index == 0) {
		var e = this1.v;
		throw haxe_Exception.thrown(e);
	}
};
stx_nano_Report.fromStdOption = function(opt) {
	var self;
	switch(opt._hx_index) {
	case 0:
		var t = opt.v;
		self = stx_nano_ReportSum.Reported(t);
		break;
	case 1:
		self = stx_nano_ReportSum.Happened;
		break;
	}
	return stx_nano_Report._new(self);
};
stx_nano_Report.fromOption = function(opt) {
	var self;
	switch(opt._hx_index) {
	case 0:
		var t = opt.v;
		self = stx_nano_ReportSum.Reported(t);
		break;
	case 1:
		self = stx_nano_ReportSum.Happened;
		break;
	}
	return stx_nano_Report._new(self);
};
stx_nano_Report.prj = function(this1) {
	return this1;
};
stx_nano_Report.value = function(this1) {
	return stx_nano_Report._.fold(this1,function(err) {
		return haxe_ds_Option.Some(err);
	},function() {
		return haxe_ds_Option.None;
	});
};
stx_nano_Report.defv = function(this1,error) {
	var v = error;
	return stx_nano_ReportLift.def(this1,function() {
		return v;
	});
};
stx_nano_Report.or = function(this1,that) {
	return stx_nano_Report._.fold(this1,function(x) {
		return stx_nano_Report.pure(x);
	},that);
};
stx_nano_Report.errata = function(this1,fn) {
	var tmp;
	switch(this1._hx_index) {
	case 0:
		var v = this1.v;
		tmp = stx_nano_ReportSum.Reported(fn(v));
		break;
	case 1:
		tmp = stx_nano_ReportSum.Happened;
		break;
	}
	return stx_nano_Report._new(tmp);
};
stx_nano_Report.ok = function(this1) {
	if(this1._hx_index == 1) {
		return true;
	} else {
		return false;
	}
};
stx_nano_Report.promote = function(this1) {
	return stx_nano_Report._.resolve(this1,function() {
		return null;
	});
};
stx_nano_Report.alert = function(this1) {
	return stx_nano_Alert.make(this1);
};
var stx_nano_ReportSum = $hxEnums["stx.nano.ReportSum"] = { __ename__:"stx.nano.ReportSum",__constructs__:null
	,Reported: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"stx.nano.ReportSum",toString:$estr}; },$_._hx_name="Reported",$_.__params__ = ["v"],$_)
	,Happened: {_hx_name:"Happened",_hx_index:1,__enum__:"stx.nano.ReportSum",toString:$estr}
};
stx_nano_ReportSum.__constructs__ = [stx_nano_ReportSum.Reported,stx_nano_ReportSum.Happened];
var stx_nano_ResSum = $hxEnums["stx.nano.ResSum"] = { __ename__:"stx.nano.ResSum",__constructs__:null
	,Accept: ($_=function(t) { return {_hx_index:0,t:t,__enum__:"stx.nano.ResSum",toString:$estr}; },$_._hx_name="Accept",$_.__params__ = ["t"],$_)
	,Reject: ($_=function(e) { return {_hx_index:1,e:e,__enum__:"stx.nano.ResSum",toString:$estr}; },$_._hx_name="Reject",$_.__params__ = ["e"],$_)
};
stx_nano_ResSum.__constructs__ = [stx_nano_ResSum.Accept,stx_nano_ResSum.Reject];
var stx_nano_ResSumLift = function() { };
stx_nano_ResSumLift.__name__ = "stx.nano.ResSumLift";
stx_nano_ResSumLift.toString = function(self) {
	return stx_nano_Res._.toString(self);
};
var stx_nano_ResLift = function() { };
stx_nano_ResLift.__name__ = "stx.nano.ResLift";
stx_nano_ResLift.toString = function(self) {
	switch(self._hx_index) {
	case 0:
		var t = self.t;
		return "Accept(" + Std.string(t) + ")";
	case 1:
		var e = self.e;
		return "Reject(" + e.toString() + ")";
	}
};
stx_nano_ResLift.errata = function(self,fn) {
	var self1;
	switch(self._hx_index) {
	case 0:
		var t = self.t;
		self1 = stx_nano_Res.accept(t);
		break;
	case 1:
		var e = self.e;
		self1 = stx_nano_Res.reject(fn(e));
		break;
	}
	return stx_nano_Res._new(self1);
};
stx_nano_ResLift.errate = function(self,fn) {
	var self1;
	switch(self._hx_index) {
	case 0:
		var t = self.t;
		self1 = stx_nano_Res.accept(t);
		break;
	case 1:
		var e = self.e;
		self1 = stx_nano_Res.reject(e.map(fn));
		break;
	}
	return stx_nano_Res._new(self1);
};
stx_nano_ResLift.zip = function(self,that) {
	switch(self._hx_index) {
	case 0:
		var _g = self.t;
		switch(that._hx_index) {
		case 0:
			var tt = that.t;
			var t = _g;
			return stx_nano_ResSum.Accept(stx_nano_Couple.make(t,tt));
		case 1:
			var e = that.e;
			return stx_nano_ResSum.Reject(e);
		}
		break;
	case 1:
		var _g = self.e;
		if(that._hx_index == 1) {
			var ee = that.e;
			var e = _g;
			return stx_nano_ResSum.Reject(e.merge(ee));
		} else {
			var e = _g;
			return stx_nano_ResSum.Reject(e);
		}
		break;
	}
};
stx_nano_ResLift.map = function(self,fn) {
	var self1;
	switch(self._hx_index) {
	case 0:
		var t = self.t;
		self1 = stx_nano_ResSum.Accept(fn(t));
		break;
	case 1:
		var e = self.e;
		self1 = stx_nano_ResSum.Reject(e);
		break;
	}
	return stx_nano_Res._new(self1);
};
stx_nano_ResLift.flat_map = function(self,fn) {
	var self1;
	switch(self._hx_index) {
	case 0:
		var t = self.t;
		self1 = fn(t);
		break;
	case 1:
		var e = self.e;
		self1 = stx_nano_ResSum.Reject(e);
		break;
	}
	return stx_nano_Res._new(self1);
};
stx_nano_ResLift.adjust = function(self,fn) {
	var self1;
	switch(self._hx_index) {
	case 0:
		var t = self.t;
		self1 = fn(t);
		break;
	case 1:
		var e = self.e;
		self1 = stx_nano_ResSum.Reject(e);
		break;
	}
	return stx_nano_Res._new(self1);
};
stx_nano_ResLift.fold = function(self,fn,er) {
	switch(self._hx_index) {
	case 0:
		var t = self.t;
		return fn(t);
	case 1:
		var e = self.e;
		return er(e);
	}
};
stx_nano_ResLift.fudge = function(self) {
	switch(self._hx_index) {
	case 0:
		var t = self.t;
		return t;
	case 1:
		var e = self.e;
		throw haxe_Exception.thrown(e);
	}
};
stx_nano_ResLift.elide = function(self) {
	var tmp;
	switch(self._hx_index) {
	case 0:
		var t = self.t;
		tmp = stx_nano_ResSum.Reject(t);
		break;
	case 1:
		var e = self.e;
		tmp = stx_nano_ResSum.Accept(e);
		break;
	}
	return tmp;
};
stx_nano_ResLift.value = function(self) {
	var tmp;
	switch(self._hx_index) {
	case 0:
		var t = self.t;
		tmp = haxe_ds_Option.Some(t);
		break;
	case 1:
		var e = self.e;
		tmp = haxe_ds_Option.None;
		break;
	}
	return tmp;
};
stx_nano_ResLift.report = function(self) {
	var tmp;
	switch(self._hx_index) {
	case 0:
		var t = self.t;
		tmp = stx_nano_Report.unit();
		break;
	case 1:
		var e = self.e;
		tmp = stx_nano_Report.pure(e);
		break;
	}
	return tmp;
};
stx_nano_ResLift.rectify = function(self,fn) {
	var tmp;
	switch(self._hx_index) {
	case 0:
		var t = self.t;
		tmp = stx_nano_Res.accept(t);
		break;
	case 1:
		var e = self.e;
		tmp = fn(e);
		break;
	}
	return tmp;
};
stx_nano_ResLift.recover = function(self,fn) {
	switch(self._hx_index) {
	case 0:
		var t = self.t;
		return t;
	case 1:
		var e = self.e;
		return fn(e);
	}
};
stx_nano_ResLift.effects = function(self,success,failure) {
	var tmp;
	switch(self._hx_index) {
	case 0:
		var t = self.t;
		success(t);
		tmp = stx_nano_Res.accept(t);
		break;
	case 1:
		var e = self.e;
		failure(e);
		tmp = stx_nano_Res.reject(e);
		break;
	}
	return tmp;
};
stx_nano_ResLift.ok = function(self) {
	switch(self._hx_index) {
	case 0:
		var t = self.t;
		return true;
	case 1:
		var e = self.e;
		return false;
	}
};
stx_nano_ResLift.toPledge = function(self) {
	return stx_nano_Pledge.fromRes(self);
};
var stx_nano_Res = {};
stx_nano_Res._new = function(self) {
	var this1 = self;
	return this1;
};
stx_nano_Res.get_self = function(this1) {
	return stx_nano_Res._new(this1);
};
stx_nano_Res.lift = function(self) {
	return stx_nano_Res._new(self);
};
stx_nano_Res.accept = function(t) {
	return stx_nano_Res._new(stx_nano_ResSum.Accept(t));
};
stx_nano_Res.reject = function(e) {
	return stx_nano_Res._new(stx_nano_ResSum.Reject(e));
};
stx_nano_Res.fromReport = function(self) {
	return stx_nano_Res._new(stx_nano_ReportLift.fold(self,function(ok) {
		return stx_nano_Res.reject(ok);
	},function() {
		return stx_nano_Res.accept(null);
	}));
};
stx_nano_Res.prj = function(this1) {
	return this1;
};
stx_nano_Res.fromOutcome = function(self) {
	var ocd;
	switch(self._hx_index) {
	case 0:
		var ok = self.t;
		ocd = stx_nano_ResSum.Accept(ok);
		break;
	case 1:
		var no = self.e;
		ocd = stx_nano_ResSum.Reject(no);
		break;
	}
	return stx_nano_Res._new(ocd);
};
stx_nano_Res.toOutcome = function(this1) {
	switch(this1._hx_index) {
	case 0:
		var ok = this1.t;
		return stx_pico_OutcomeSum.Success(ok);
	case 1:
		var no = this1.e;
		return stx_pico_OutcomeSum.Failure(no);
	}
};
stx_nano_Res.bind_fold = function(arr,fn,init) {
	return stx_lift_ArrayLift.lfold(arr,function(next,memo) {
		switch(memo._hx_index) {
		case 0:
			var t = memo.t;
			return fn(next,t);
		case 1:
			var e = memo.e;
			return stx_nano_Res.reject(e);
		}
	},stx_nano_Res.accept(init));
};
stx_nano_Res.toStringable = function(this1) {
	var self = this1;
	return { toString : function() {
		return stx_nano_Res._.toString(self);
	}};
};
var stx_nano_Resource = {};
stx_nano_Resource.exists = function(str) {
	return stx_lift_ArrayLift.any(haxe_Resource.listNames(),function(x) {
		return x == str;
	});
};
stx_nano_Resource._new = function(str,pos) {
	if(!stx_nano_Resource.exists(str)) {
		if(pos == null) {
			throw haxe_Exception.thrown("E_ResourceNotFound(" + str + ")");
		} else {
			var this1 = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,pos);
			var error = new stx_nano_Err(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,stx_nano_FailureSum.ERR_OF("E_ResourceNotFound")),haxe_ds_Option.None,this1);
			throw haxe_Exception.thrown(error);
		}
	}
	var this1 = str;
	return this1;
};
stx_nano_Resource.string = function(this1) {
	return haxe_Resource.getString(this1);
};
stx_nano_Resource.bytes = function(this1) {
	return haxe_Resource.getBytes(this1);
};
stx_nano_Resource.json = function(this1) {
	try {
		return JSON.parse(stx_nano_Resource.string(this1));
	} catch( _g ) {
		haxe_NativeStackTrace.lastError = _g;
		var e = haxe_Exception.caught(_g).unwrap();
		throw haxe_Exception.thrown("ERROR parsing " + this1 + ": " + Std.string(e));
	}
};
var stx_nano_SignalLift = function() { };
stx_nano_SignalLift.__name__ = "stx.nano.SignalLift";
stx_nano_SignalLift.lift = function(self) {
	return stx_nano_Signal.lift(self);
};
stx_nano_SignalLift.flat_map = function(self,fn) {
	var this1 = new tink_core__$Signal_Suspendable(function(cb) {
		var cancelled = false;
		var links = [];
		links.push(self.listen(function(t) {
			haxe_Log.trace(t,{ fileName : "stx/nano/Signal.hx", lineNumber : 91, className : "stx.nano.SignalLift", methodName : "flat_map"});
			if(!cancelled) {
				var sI = fn(t);
				links.push(sI.listen(function(tI) {
					haxe_Log.trace(tI,{ fileName : "stx/nano/Signal.hx", lineNumber : 96, className : "stx.nano.SignalLift", methodName : "flat_map"});
					cb(tI);
				}));
			} else {
				throw haxe_Exception.thrown("stream already cancelled");
			}
		}));
		var this1 = new tink_core_SimpleLink(function() {
			cancelled = true;
			var _g = 0;
			while(_g < links.length) {
				var link = links[_g];
				++_g;
				var fn = $iterator(stx_pico_OptionLift)(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,link));
				while(fn.hasNext()) {
					var fn1 = fn.next();
					if(fn1 != null) {
						fn1.cancel();
					}
				}
			}
		});
		return this1;
	},null);
	return stx_nano_SignalLift.lift(this1);
};
stx_nano_SignalLift.lscan = function(self,fn,unit) {
	return stx_nano_Signal.map(self,function(t) {
		unit = fn(t,unit);
		return unit;
	});
};
var stx_nano_Signal = {};
stx_nano_Signal._new = function(self) {
	var this1 = self;
	return this1;
};
stx_nano_Signal.lift = function(self) {
	return stx_nano_Signal._new(self);
};
stx_nano_Signal.make = function(f,init) {
	var this1 = new tink_core__$Signal_Suspendable(f,init);
	return stx_nano_Signal.lift(this1);
};
stx_nano_Signal.bind_fold = function(self,fn,init) {
	var this1 = new tink_core__$Signal_Suspendable(function(cb) {
		var self1 = self;
		var this1 = new tink_core__$Signal_Suspendable(function(cb) {
			cb(init);
			var this1 = new tink_core_SimpleLink(function() {
				return;
			});
			return this1;
		},null);
		return stx_nano_Signal._.flat_map(stx_nano_Signal._.lscan(self1,function(next,memo) {
			var _g = fn;
			var a1 = next;
			return stx_nano_Signal._.flat_map(memo,function(a2) {
				return _g(a1,a2);
			});
		},this1),function(z) {
			return z;
		}).listen(cb);
	},null);
	return stx_nano_Signal.lift(this1);
};
stx_nano_Signal.pure = function(v) {
	var this1 = new tink_core__$Signal_Suspendable(function(cb) {
		cb(v);
		var this1 = new tink_core_SimpleLink(function() {
			return;
		});
		return this1;
	},null);
	return stx_nano_Signal.lift(this1);
};
stx_nano_Signal.join = function(this1,that) {
	return tink_core_Signal.join(this1,that);
};
stx_nano_Signal.fromArray = function(arr) {
	return stx_nano_Signal.make(function(cb) {
		var _g = 0;
		while(_g < arr.length) {
			var v = arr[_g];
			++_g;
			cb(v);
		}
		var this1 = new tink_core_SimpleLink(function() {
			return;
		});
		return this1;
	});
};
stx_nano_Signal.fromFuture = function(ft) {
	return stx_nano_Signal.make(function(cb) {
		return ft.handle(function(x) {
			cb(x);
		});
	});
};
stx_nano_Signal.map_filter = function(this1,fn) {
	return stx_nano_Signal.map(stx_nano_Signal.filter(stx_nano_Signal.map(this1,fn),function(_) {
		return stx_pico_OptionLift.is_defined(_);
	}),function(_) {
		return stx_pico_OptionLift.fudge(_);
	});
};
stx_nano_Signal.filter = function(this1,fn) {
	return stx_nano_Signal.lift(tink_core_Signal.filter(this1,fn));
};
stx_nano_Signal.map = function(this1,fn) {
	return stx_nano_Signal.lift(tink_core_Signal.map(this1,fn));
};
stx_nano_Signal.tap = function(this1,fn) {
	return stx_nano_Signal.map(this1,function(x) {
		fn(x);
		return x;
	});
};
var stx_nano_SlotCls = function(data,guard,pos) {
	this.data = data;
	this.ready = true;
	this.pos = pos;
	if(guard != null) {
		this.ready = false;
		this.guard = guard;
		guard.handle($bind(this,this.handler));
	}
};
stx_nano_SlotCls.__name__ = "stx.nano.SlotCls";
stx_nano_SlotCls.prototype = {
	handler: function(data) {
		this.ready = true;
		this.data = data;
	}
	,data: null
	,guard: null
	,ready: null
	,pos: null
	,toString: function() {
		var p = stx_nano_PositionLift.to_vscode_clickable_link(stx_nano_Position.fromPos(this.pos));
		return "Slot(" + Std.string(this.ready) + " " + p + ")";
	}
	,step: function() {
		return -1;
	}
	,__class__: stx_nano_SlotCls
};
var stx_nano_SlotLift = function() { };
stx_nano_SlotLift.__name__ = "stx.nano.SlotLift";
stx_nano_SlotLift.map = function(self,fn) {
	if(self.ready) {
		return stx_nano_Slot.Ready(fn(self.data),self.pos);
	} else {
		return stx_nano_Slot.Guard(tink_core_Future.map(self.guard,function(t) {
			return fn(t);
		}),self.pos);
	}
};
stx_nano_SlotLift.flat_map = function(self,fn) {
	if(self.ready) {
		return fn(self.data);
	} else {
		return stx_nano_Slot.Guard(tink_core_Future.flatMap(self.guard,function(t) {
			var val = fn(t);
			if(val.ready) {
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyFunc(function() {
					return val.data;
				}));
			} else {
				return val.guard;
			}
		}),{ fileName : "stx/nano/Slot.hx", lineNumber : 80, className : "stx.nano.SlotLift", methodName : "flat_map"});
	}
};
stx_nano_SlotLift.value = function(self) {
	if(self.ready == true) {
		return haxe_ds_Option.Some(self.data);
	} else {
		return haxe_ds_Option.None;
	}
};
stx_nano_SlotLift.handle = function(self,fn) {
	if(self.ready) {
		fn(self.data);
	} else {
		self.guard.handle(fn);
	}
};
stx_nano_SlotLift.toFuture = function(self) {
	if(self.ready) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyFunc(function() {
			return self.data;
		}));
	} else {
		return self.guard;
	}
};
stx_nano_SlotLift.zip = function(self,that) {
	var _g = that.ready;
	if(self.ready) {
		if(_g) {
			return stx_nano_Slot.Ready(stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,self.data,that.data),{ fileName : "stx/nano/Slot.hx", lineNumber : 113, className : "stx.nano.SlotLift", methodName : "zip"});
		} else {
			var fn = function(rhs) {
				return stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,self.data,rhs);
			};
			if(that.ready) {
				return stx_nano_Slot.Ready(fn(that.data),that.pos);
			} else {
				return stx_nano_Slot.Guard(tink_core_Future.map(that.guard,function(t) {
					return fn(t);
				}),that.pos);
			}
		}
	} else if(_g) {
		var fn1 = function(lhs) {
			return stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,lhs,that.data);
		};
		if(self.ready) {
			return stx_nano_Slot.Ready(fn1(self.data),self.pos);
		} else {
			return stx_nano_Slot.Guard(tink_core_Future.map(self.guard,function(t) {
				return fn1(t);
			}),self.pos);
		}
	} else {
		return stx_nano_Slot.Guard(tink_core_Future.merge(self.guard,that.guard,function(tI,tII) {
			return stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,tI,tII);
		}),{ fileName : "stx/nano/Slot.hx", lineNumber : 116, className : "stx.nano.SlotLift", methodName : "zip"});
	}
};
var stx_nano_Slot = {};
stx_nano_Slot._new = function(self) {
	var this1 = self;
	return this1;
};
stx_nano_Slot.lift = function(self) {
	return stx_nano_Slot._new(self);
};
stx_nano_Slot.prj = function(this1) {
	return this1;
};
stx_nano_Slot.get_self = function(this1) {
	return stx_nano_Slot._new(this1);
};
stx_nano_Slot.Ready = function(v,pos) {
	return new stx_nano_SlotCls(v,null,pos);
};
stx_nano_Slot.Guard = function(v,pos) {
	return new stx_nano_SlotCls(null,v,pos);
};
stx_nano_Slot.toSlot = function(ft) {
	return new stx_nano_SlotCls(null,ft,{ fileName : "stx/nano/Slot.hx", lineNumber : 53, className : "stx.nano._Slot.Slot_Impl_", methodName : "toSlot"});
};
stx_nano_Slot.fromFunSinkVoid = function(fn) {
	var v = haxe_ds_Option.None;
	var handler = function(h) {
		v = haxe_ds_Option.Some(h);
	};
	fn(handler);
	switch(v._hx_index) {
	case 0:
		var v1 = v.v;
		return stx_nano_Slot.Ready(v1,{ fileName : "stx/nano/Slot.hx", lineNumber : 62, className : "stx.nano._Slot.Slot_Impl_", methodName : "fromFunSinkVoid"});
	case 1:
		return stx_nano_Slot.Guard(tink_core_Future.irreversible(fn),{ fileName : "stx/nano/Slot.hx", lineNumber : 63, className : "stx.nano._Slot.Slot_Impl_", methodName : "fromFunSinkVoid"});
	}
};
var stx_nano_Stream = {};
stx_nano_Stream._new = function(self) {
	var this1 = self;
	return this1;
};
stx_nano_Stream.lift = function(self) {
	return stx_nano_Stream._new(self);
};
stx_nano_Stream.fromArray = function(self) {
	var f = stx_nano_ChunkSum.Val;
	var result = new Array(self.length);
	var _g = 0;
	var _g1 = self.length;
	while(_g < _g1) {
		var i = _g++;
		result[i] = f(self[i]);
	}
	return stx_nano_Stream.lift(stx_nano_Signal.fromArray(stx_lift_ArrayLift.snoc(result,stx_nano_ChunkSum.End())));
};
stx_nano_Stream.fromFuture = function(self) {
	return stx_nano_Stream.fromThunkFuture(function() {
		return self;
	});
};
stx_nano_Stream.fromThunkFuture = function(self) {
	return stx_nano_Stream.lift(stx_nano_Signal.make(function(cb) {
		return self().handle(function(x) {
			cb(stx_nano_ChunkSum.Val(x));
			cb(stx_nano_ChunkSum.End());
		});
	}));
};
stx_nano_Stream.pure = function(self) {
	return stx_nano_Stream.lift(stx_nano_Signal.make(function(cb) {
		cb(stx_nano_ChunkSum.Val(self));
		cb(stx_nano_ChunkSum.End());
		var this1 = new tink_core_SimpleLink(function() {
			return;
		});
		return this1;
	}));
};
stx_nano_Stream.unit = function() {
	return stx_nano_Stream.lift(stx_nano_Signal.make(function(cb) {
		cb(stx_nano_ChunkSum.End());
		var this1 = new tink_core_SimpleLink(function() {
			return;
		});
		return this1;
	}));
};
stx_nano_Stream.make = function(f,init) {
	var this1 = new tink_core__$Signal_Suspendable(f,init);
	return stx_nano_Stream.lift(this1);
};
stx_nano_Stream.map = function(this1,fn) {
	return stx_nano_Signal.map(this1,function(chunk) {
		return stx_nano_ChunkLift.map(chunk,fn);
	});
};
stx_nano_Stream.prj = function(this1) {
	return this1;
};
stx_nano_Stream.get_self = function(this1) {
	return stx_nano_Stream.lift(this1);
};
var stx_nano_StreamLift = function() { };
stx_nano_StreamLift.__name__ = "stx.nano.StreamLift";
stx_nano_StreamLift.lift = function(self) {
	return stx_nano_Stream.lift(self);
};
stx_nano_StreamLift.seq = function(self,that) {
	var ended = false;
	return stx_nano_StreamLift.lift(stx_nano_Signal.make(function(cb) {
		var cbII = null;
		var cbI = self.listen(function(chunk) {
			stx_nano_ChunkLift.fold(chunk,function(val) {
				cb(stx_nano_ChunkSum.Val(val));
			},function(end) {
				var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,end);
				switch(self._hx_index) {
				case 0:
					var t = self.v;
					cb(stx_nano_ChunkSum.End(t));
					break;
				case 1:
					cbII = that.listen(function(chunk) {
						stx_nano_ChunkLift.fold(chunk,function(val) {
							if(!ended) {
								cb(stx_nano_ChunkSum.Val(val));
							} else {
								var cb1 = cb;
								var this1 = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,{ fileName : "stx/nano/Stream.hx", lineNumber : 89, className : "stx.nano.StreamLift", methodName : "seq"});
								cb1(stx_nano_ChunkSum.End(new stx_nano_Err(stx_pico_Option.fromNullT(stx_nano_FailureSum.ERR(stx_nano_FailCode.fromString("already ended"))),null,this1)));
							}
						},function(end) {
							ended = true;
							cb(stx_nano_ChunkSum.End(end));
						},function() {
						});
					});
					break;
				}
			},function() {
			});
		});
		var this1 = new tink_core_SimpleLink(function() {
			var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,cbI);
			var v = new tink_core_SimpleLink(function() {
			});
			var this1;
			if(self._hx_index == 0) {
				var v1 = self.v;
				this1 = v1;
			} else {
				this1 = v;
			}
			if(this1 != null) {
				this1.cancel();
			}
			var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,cbII);
			var v = new tink_core_SimpleLink(function() {
			});
			var this1;
			if(self._hx_index == 0) {
				var v1 = self.v;
				this1 = v1;
			} else {
				this1 = v;
			}
			if(this1 != null) {
				this1.cancel();
			}
		});
		return this1;
	}));
};
stx_nano_StreamLift.flat_map = function(self,fn) {
	var cancelled = false;
	var streams = [];
	var id = Math.random();
	var this1 = new tink_core__$Signal_Suspendable(function(cb) {
		self.listen(function(chunk) {
			stx_nano_ChunkLift.fold(chunk,function(val) {
				if(!cancelled) {
					streams.push(fn(val));
				}
			},function(end) {
				var self = stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,end);
				switch(self._hx_index) {
				case 0:
					var t = self.v;
					streams = [];
					cb(stx_nano_ChunkSum.End(t));
					break;
				case 1:
					var self = stx_lift_ArrayLift.lfold1(streams,stx_nano_StreamLift.seq);
					var v = stx_nano_Stream.unit();
					var this1;
					if(self._hx_index == 0) {
						var v1 = self.v;
						this1 = v1;
					} else {
						this1 = v;
					}
					this1.listen(function(chunk) {
						cb(chunk);
					});
					break;
				}
			},function() {
			});
		});
		var this1 = new tink_core_SimpleLink(function() {
			return;
		});
		return this1;
	},null);
	return stx_nano_StreamLift.lift(this1);
};
var stx_nano_Stringable = {};
stx_nano_Stringable.lift = function(self) {
	return stx_nano_Stringable._new(self);
};
stx_nano_Stringable._new = function(self) {
	var this1 = self;
	return this1;
};
var stx_nano_TripleLift = function() { };
stx_nano_TripleLift.__name__ = "stx.nano.TripleLift";
stx_nano_TripleLift.map = function(self,fn) {
	return function(tp) {
		self(function(tI,tII,tIII) {
			tp(tI,tII,fn(tIII));
		});
	};
};
stx_nano_TripleLift.fst = function(self) {
	return stx_nano_TripleLift.detriple(self,function(tI,_,_1) {
		return tI;
	});
};
stx_nano_TripleLift.snd = function(self) {
	return stx_nano_TripleLift.detriple(self,function(_,tII,_1) {
		return tII;
	});
};
stx_nano_TripleLift.thd = function(self) {
	return stx_nano_TripleLift.detriple(self,function(_,_1,tIII) {
		return tIII;
	});
};
stx_nano_TripleLift.equals = function(lhs,rhs) {
	return stx_nano_TripleLift.detriple(lhs,function(t0I,t0II,t0III) {
		return stx_nano_TripleLift.detriple(rhs,function(t1I,t1II,t1III) {
			if(t0I == t1I && t0II == t1II) {
				return t0III == t1III;
			} else {
				return false;
			}
		});
	});
};
stx_nano_TripleLift.reduce = function(self,f_a,f_b,f_c,plus) {
	return stx_nano_TripleLift.detriple(self,function(tI,tII,tIII) {
		return plus(plus(f_a(tI),f_b(tII)),f_c(tIII));
	});
};
stx_nano_TripleLift.detriple = function(self,fn) {
	var out = null;
	self(function(tI,tII,tIII) {
		out = fn(tI,tII,tIII);
	});
	return out;
};
stx_nano_TripleLift.tup = function(self) {
	return stx_nano_TripleLift.detriple(self,stx_Tup3.tuple3);
};
stx_nano_TripleLift.toString = function(self) {
	return stx_nano_TripleLift.detriple(self,function(a,b,c) {
		return "(" + Std.string(a) + " " + Std.string(b) + " " + Std.string(c) + ")";
	});
};
var stx_nano_Triple = {};
stx_nano_Triple.toString = function(this1) {
	return stx_nano_TripleLift.toString(this1);
};
var stx_nano_Unique = {};
stx_nano_Unique._new = function(self) {
	var this1 = self;
	return this1;
};
stx_nano_Unique.lift = function(self) {
	return stx_nano_Unique._new(self);
};
stx_nano_Unique.pure = function(data) {
	return stx_nano_Unique.make(data,function() {
	});
};
stx_nano_Unique.make = function(data,rtid) {
	return stx_nano_Unique._new({ data : data, rtid : rtid});
};
stx_nano_Unique.prj = function(this1) {
	return this1;
};
stx_nano_Unique.get_self = function(this1) {
	return stx_nano_Unique._new(this1);
};
stx_nano_Unique.equals = function(this1,that) {
	return this1.rtid == that.rtid;
};
stx_nano_Unique.toT = function(this1) {
	return this1.data;
};
var stx_nano_VBlock = {};
stx_nano_VBlock.unit = function() {
	return function() {
	};
};
stx_nano_VBlock._new = function(self) {
	var this1 = self;
	return this1;
};
var stx_nano_lift_LiftArrayNano = function() { };
stx_nano_lift_LiftArrayNano.__name__ = "stx.nano.lift.LiftArrayNano";
stx_nano_lift_LiftArrayNano.cross = function(self,that) {
	return stx_lift_ArrayLift.cross_with(self,that,function(tI,tII) {
		return stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,tI,tII);
	});
};
stx_nano_lift_LiftArrayNano.zip = function(self,that) {
	return stx_lift_ArrayLift.zip_with(self,that,function(tI,tII) {
		return stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,tI,tII);
	});
};
var stx_nano_lift_LiftArrayToIter = function() { };
stx_nano_lift_LiftArrayToIter.__name__ = "stx.nano.lift.LiftArrayToIter";
stx_nano_lift_LiftArrayToIter.toIter = function(arr) {
	return arr;
};
var stx_nano_lift_LiftContractToJsPromise = function() { };
stx_nano_lift_LiftContractToJsPromise.__name__ = "stx.nano.lift.LiftContractToJsPromise";
stx_nano_lift_LiftContractToJsPromise.toJsPromise = function(self) {
	return stx_nano_Contract._.toJsPromise(self);
};
var stx_nano_lift_LiftErrToChunk = function() { };
stx_nano_lift_LiftErrToChunk.__name__ = "stx.nano.lift.LiftErrToChunk";
stx_nano_lift_LiftErrToChunk.toChunk = function(err) {
	return stx_nano_Chunk.fromError(err);
};
var stx_nano_lift_LiftFutureResToPledge = function() { };
stx_nano_lift_LiftFutureResToPledge.__name__ = "stx.nano.lift.LiftFutureResToPledge";
stx_nano_lift_LiftFutureResToPledge.toPledge = function(self) {
	return stx_nano_Pledge.lift(self);
};
var stx_nano_lift_LiftIMapToArrayKV = function() { };
stx_nano_lift_LiftIMapToArrayKV.__name__ = "stx.nano.lift.LiftIMapToArrayKV";
stx_nano_lift_LiftIMapToArrayKV.toArrayKV = function(map) {
	var out = [];
	var _g = map.keyValueIterator();
	while(_g.hasNext()) {
		var _g1 = _g.next();
		var key = _g1.key;
		var val = _g1.value;
		out.push(stx_nano_KV.fromTup(stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,key,val)));
	}
	return out;
};
var stx_nano_lift_LiftIterableToIter = function() { };
stx_nano_lift_LiftIterableToIter.__name__ = "stx.nano.lift.LiftIterableToIter";
stx_nano_lift_LiftIterableToIter.toIter = function(it) {
	return it;
};
var stx_nano_lift_LiftIteratorToIter = function() { };
stx_nano_lift_LiftIteratorToIter.__name__ = "stx.nano.lift.LiftIteratorToIter";
stx_nano_lift_LiftIteratorToIter.toIter = function(it) {
	return { iterator : function() {
		return it;
	}};
};
var stx_nano_lift_LiftJsPromiseToContract = function() { };
stx_nano_lift_LiftJsPromiseToContract.__name__ = "stx.nano.lift.LiftJsPromiseToContract";
stx_nano_lift_LiftJsPromiseToContract.toContract = function(self,pos) {
	return stx_nano_Contract.fromJsPromise(self,pos);
};
var stx_nano_lift_LiftJsPromiseToPledge = function() { };
stx_nano_lift_LiftJsPromiseToPledge.__name__ = "stx.nano.lift.LiftJsPromiseToPledge";
stx_nano_lift_LiftJsPromiseToPledge.toPledge = function(self,pos) {
	return stx_nano_Pledge.fromJsPromise(self,pos);
};
var stx_nano_lift_LiftMapToIter = function() { };
stx_nano_lift_LiftMapToIter.__name__ = "stx.nano.lift.LiftMapToIter";
stx_nano_lift_LiftMapToIter.toIter = function(map) {
	return { iterator : function() {
		var source = map.keyValueIterator();
		return { next : function() {
			var out = source.next();
			return stx_nano_KV.fromObj({ key : out.key, val : out.value});
		}, hasNext : $bind(source,source.hasNext)};
	}};
};
var stx_nano_lift_LiftOptionNano = function() { };
stx_nano_lift_LiftOptionNano.__name__ = "stx.nano.lift.LiftOptionNano";
stx_nano_lift_LiftOptionNano.zip = function(self,that) {
	if(self._hx_index == 0) {
		if(that._hx_index == 0) {
			var r = that.v;
			var l = self.v;
			return haxe_ds_Option.Some(stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,l,r));
		} else {
			return haxe_ds_Option.None;
		}
	} else {
		return haxe_ds_Option.None;
	}
};
stx_nano_lift_LiftOptionNano.fudge = function(self,err) {
	var self1 = stx_pico_Option.make(err);
	var v = new stx_nano_Err(haxe_ds_Option.Some(stx_nano_FailureSum.ERR("E_OptionForcedError")),null,stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,{ fileName : "stx/nano/lift/LiftOptionNano.hx", lineNumber : 11, className : "stx.nano.lift.LiftOptionNano", methodName : "fudge"}));
	if(self1._hx_index == 0) {
		var v1 = self1.v;
		err = v1;
	} else {
		err = v;
	}
	if(self == null) {
		throw haxe_Exception.thrown(err);
	} else {
		switch(self._hx_index) {
		case 0:
			var v = self.v;
			return v;
		case 1:
			throw haxe_Exception.thrown(err);
		}
	}
};
stx_nano_lift_LiftOptionNano.resolve = function(self,fn,pos) {
	var tmp;
	switch(self._hx_index) {
	case 0:
		var t = self.v;
		tmp = stx_nano_lift_LiftNano.accept(stx_nano_Wildcard.__,t);
		break;
	case 1:
		tmp = stx_nano_lift_LiftNano.reject(stx_nano_Wildcard.__,fn(stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,pos)));
		break;
	}
	return tmp;
};
var stx_nano_lift_LiftOptionToChunk = function() { };
stx_nano_lift_LiftOptionToChunk.__name__ = "stx.nano.lift.LiftOptionToChunk";
stx_nano_lift_LiftOptionToChunk.toChunk = function(opt) {
	switch(opt._hx_index) {
	case 0:
		var v = opt.v;
		return stx_nano_ChunkSum.Val(v);
	case 1:
		return stx_nano_ChunkSum.Tap;
	}
};
var stx_nano_lift_LiftOutcomeTDefect = function() { };
stx_nano_lift_LiftOutcomeTDefect.__name__ = "stx.nano.lift.LiftOutcomeTDefect";
stx_nano_lift_LiftOutcomeTDefect.zip = function(self,that) {
	switch(self._hx_index) {
	case 0:
		var _g = self.t;
		switch(that._hx_index) {
		case 0:
			var r = that.t;
			var l = _g;
			return stx_nano_lift_LiftNano.success(stx_nano_Wildcard.__,stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,l,r));
		case 1:
			var r = that.e;
			return stx_nano_lift_LiftNano.failure(stx_nano_Wildcard.__,r);
		}
		break;
	case 1:
		var _g = self.e;
		if(that._hx_index == 1) {
			var r = that.e;
			var l = _g;
			return stx_nano_lift_LiftNano.failure(stx_nano_Wildcard.__,l.concat(r));
		} else {
			var l = _g;
			return stx_nano_lift_LiftNano.failure(stx_nano_Wildcard.__,l);
		}
		break;
	}
};
var stx_nano_lift_LiftPath = function() { };
stx_nano_lift_LiftPath.__name__ = "stx.nano.lift.LiftPath";
stx_nano_lift_LiftPath.into = function(path,v) {
	var base = haxe_io_Path.addTrailingSlash(path.toString());
	var rest = stx_nano_OneOrMany.toArray(v).join(stx_nano_lift_LiftNano.sep(stx_nano_Wildcard.__));
	var next = "" + base + rest;
	return new haxe_io_Path(next);
};
stx_nano_lift_LiftPath.toArray = function(path) {
	var base = path.toString();
	if(StringTools.startsWith(base,stx_nano_lift_LiftNano.sep(stx_nano_Wildcard.__))) {
		base = HxOverrides.substr(base,1,null);
	}
	var next = base.split(stx_nano_lift_LiftNano.sep(stx_nano_Wildcard.__));
	return next;
};
var stx_nano_lift_LiftResToChunk = function() { };
stx_nano_lift_LiftResToChunk.__name__ = "stx.nano.lift.LiftResToChunk";
stx_nano_lift_LiftResToChunk.toChunk = function(self) {
	var tmp;
	switch(self._hx_index) {
	case 0:
		var t = self.t;
		tmp = stx_nano_ChunkSum.Val(t);
		break;
	case 1:
		var e = self.e;
		tmp = stx_nano_ChunkSum.End(e);
		break;
	}
	return tmp;
};
var stx_nano_lift_LiftStringMapToIter = function() { };
stx_nano_lift_LiftStringMapToIter.__name__ = "stx.nano.lift.LiftStringMapToIter";
stx_nano_lift_LiftStringMapToIter.toIter = function(map) {
	return stx_nano_IterLift.map(stx_nano_lift_LiftMapToIter.toIter(map),function(x) {
		return stx_nano_lift_LiftNano.couple(stx_nano_Wildcard.__,stx_nano_KV.fst(x),stx_nano_KV.snd(x));
	});
};
var stx_nano_lift_LiftStringToResource = function() { };
stx_nano_lift_LiftStringToResource.__name__ = "stx.nano.lift.LiftStringToResource";
stx_nano_lift_LiftStringToResource.resource = function(stx,str,pos) {
	if(!stx_nano_Resource.exists(str)) {
		if(pos == null) {
			throw haxe_Exception.thrown("E_ResourceNotFound(" + str + ")");
		} else {
			var this1 = stx_nano_lift_LiftNano.fault(stx_nano_Wildcard.__,pos);
			var error = new stx_nano_Err(stx_nano_lift_LiftNano.option(stx_nano_Wildcard.__,stx_nano_FailureSum.ERR_OF("E_ResourceNotFound")),haxe_ds_Option.None,this1);
			throw haxe_Exception.thrown(error);
		}
	}
	var this1 = str;
	return this1;
};
var stx_nano_lift_LiftTinkOutcomeToChunk = function() { };
stx_nano_lift_LiftTinkOutcomeToChunk.__name__ = "stx.nano.lift.LiftTinkOutcomeToChunk";
stx_nano_lift_LiftTinkOutcomeToChunk.core = function(oc) {
	return stx_nano_Chunk.fromTinkOutcome(oc);
};
var stx_pico_EitherLift = function() { };
stx_pico_EitherLift.__name__ = "stx.pico.EitherLift";
stx_pico_EitherLift.fold = function(self,lhs,rhs) {
	switch(self._hx_index) {
	case 0:
		var l = self.v;
		return lhs(l);
	case 1:
		var r = self.v;
		return rhs(r);
	}
};
stx_pico_EitherLift.map = function(self,fn) {
	return stx_pico_EitherLift.flat_map(self,function(x) {
		return haxe_ds_Either.Right(fn(x));
	});
};
stx_pico_EitherLift.flat_map = function(self,fn) {
	return stx_pico_EitherLift.fold(self,haxe_ds_Either.Left,function(r) {
		return fn(r);
	});
};
stx_pico_EitherLift.flip = function(self) {
	return stx_pico_EitherLift.fold(self,function(l) {
		return haxe_ds_Either.Right(l);
	},function(r) {
		return haxe_ds_Either.Left(r);
	});
};
stx_pico_EitherLift.get_data = function(self) {
	return stx_pico_EitherLift.fold(self,function(x) {
		return x;
	},function(x) {
		return x;
	});
};
stx_pico_EitherLift.is_left = function(self) {
	return stx_pico_EitherLift.fold(self,function(_) {
		return true;
	},function(_) {
		return false;
	});
};
stx_pico_EitherLift.is_right = function(self) {
	return stx_pico_EitherLift.fold(self,function(_) {
		return false;
	},function(_) {
		return true;
	});
};
var stx_pico_Either = {};
stx_pico_Either._new = function(self) {
	var this1 = self;
	return this1;
};
stx_pico_Either.lift = function(self) {
	return stx_pico_Either._new(self);
};
stx_pico_Either.left = function(tI) {
	return haxe_ds_Either.Left(tI);
};
stx_pico_Either.right = function(tII) {
	return haxe_ds_Either.Right(tII);
};
stx_pico_Either.prj = function(this1) {
	return this1;
};
var stx_pico_IFaze = function() { };
stx_pico_IFaze.__name__ = "stx.pico.IFaze";
stx_pico_IFaze.__isInterface__ = true;
stx_pico_IFaze.prototype = {
	definition: null
	,identifier: null
	,__class__: stx_pico_IFaze
};
var stx_pico_Identifier = {};
stx_pico_Identifier.lift = function(self) {
	return stx_pico_Identifier._new(self);
};
stx_pico_Identifier._new = function(self) {
	var this1 = self;
	return this1;
};
stx_pico_Identifier.get_name = function(this1) {
	var self = stx_lift_ArrayLift.last(this1.split("."));
	if(self._hx_index == 0) {
		var v = self.v;
		return v;
	} else {
		return "?";
	}
};
stx_pico_Identifier.get_pack = function(this1) {
	return stx_lift_ArrayLift.rdropn(this1.split("."),1);
};
stx_pico_Identifier.toIdentDef = function(this1) {
	var n = stx_pico_Identifier.get_name(this1);
	var p = stx_pico_Identifier.get_pack(this1);
	return { name : n, pack : p};
};
stx_pico_Identifier.fromIdentDef = function(self) {
	var _g = self.name;
	var _g1 = self.pack;
	if(_g1 == null) {
		var n = _g;
		return stx_pico_Identifier.lift(n);
	} else if(_g1.length == 0) {
		var n = _g;
		return stx_pico_Identifier.lift(n);
	} else {
		var p = _g1;
		var n = _g;
		return stx_pico_Identifier.lift(stx_lift_ArrayLift.snoc(p,n).join("."));
	}
};
stx_pico_Identifier.toString = function(this1) {
	return this1;
};
stx_pico_Identifier.toArray = function(this1) {
	var p = stx_pico_Identifier.get_pack(this1).slice();
	p.push(stx_pico_Identifier.get_name(this1));
	return p;
};
var stx_pico_OptionLift = function() { };
stx_pico_OptionLift.__name__ = "stx.pico.OptionLift";
stx_pico_OptionLift.fold = function(self,ok,no) {
	switch(self._hx_index) {
	case 0:
		var t = self.v;
		return ok(t);
	case 1:
		return no();
	}
};
stx_pico_OptionLift.map = function(self,f) {
	var tmp;
	switch(self._hx_index) {
	case 0:
		var t = self.v;
		tmp = haxe_ds_Option.Some(f(t));
		break;
	case 1:
		tmp = haxe_ds_Option.None;
		break;
	}
	return tmp;
};
stx_pico_OptionLift.flat_map = function(self,f) {
	if(self == null) {
		return haxe_ds_Option.None;
	} else {
		switch(self._hx_index) {
		case 0:
			var v = self.v;
			return f(v);
		case 1:
			return haxe_ds_Option.None;
		}
	}
};
stx_pico_OptionLift.or = function(self,thunk) {
	var tmp;
	switch(self._hx_index) {
	case 0:
		var t = self.v;
		tmp = haxe_ds_Option.Some(t);
		break;
	case 1:
		tmp = thunk();
		break;
	}
	return tmp;
};
stx_pico_OptionLift.filter = function(self,fn) {
	return stx_pico_OptionLift.flat_map(self,function(v) {
		if(fn(v)) {
			return haxe_ds_Option.Some(v);
		} else {
			return haxe_ds_Option.None;
		}
	});
};
stx_pico_OptionLift.def = function(self,thunk) {
	if(self._hx_index == 0) {
		var v = self.v;
		return v;
	} else {
		return thunk();
	}
};
stx_pico_OptionLift.defv = function(self,v) {
	if(self._hx_index == 0) {
		var v1 = self.v;
		return v1;
	} else {
		return v;
	}
};
stx_pico_OptionLift.is_defined = function(self) {
	switch(self._hx_index) {
	case 0:
		var t = self.v;
		return true;
	case 1:
		return false;
	}
};
stx_pico_OptionLift.iterator = function(self) {
	var done = false;
	return { hasNext : function() {
		if(!done) {
			return stx_pico_OptionLift.is_defined(self);
		} else {
			return false;
		}
	}, next : function() {
		done = true;
		if(self._hx_index == 0) {
			var v = self.v;
			return v;
		} else {
			return null;
		}
	}};
};
stx_pico_OptionLift.merge = function(self,that,fn) {
	switch(self._hx_index) {
	case 0:
		var _g = self.v;
		switch(that._hx_index) {
		case 0:
			var r = that.v;
			var l = _g;
			return haxe_ds_Option.Some(fn(l,r));
		case 1:
			var l = _g;
			return haxe_ds_Option.Some(l);
		}
		break;
	case 1:
		if(that._hx_index == 0) {
			var r = that.v;
			return haxe_ds_Option.Some(r);
		} else {
			return haxe_ds_Option.None;
		}
		break;
	}
};
stx_pico_OptionLift.toArray = function(self) {
	switch(self._hx_index) {
	case 0:
		var v = self.v;
		return [v];
	case 1:
		return [];
	}
};
stx_pico_OptionLift.fudge = function(self,err) {
	switch(self._hx_index) {
	case 0:
		var t = self.v;
		return t;
	case 1:
		if(err != null) {
			throw haxe_Exception.thrown(err);
		} else {
			throw haxe_Exception.thrown("empty Option");
		}
		break;
	}
};
stx_pico_OptionLift.toString = function(self) {
	switch(self._hx_index) {
	case 0:
		var t = self.v;
		return "" + Std.string(t);
	case 1:
		return "<undefined>";
	}
};
stx_pico_OptionLift.prj = function(self) {
	return self;
};
var stx_pico_Option = {};
stx_pico_Option._new = function(self) {
	var this1 = self;
	return this1;
};
stx_pico_Option.fromNullT = function(v) {
	return stx_pico_Option.make(v);
};
stx_pico_Option.unit = function() {
	return haxe_ds_Option.None;
};
stx_pico_Option.pure = function(t) {
	return haxe_ds_Option.Some(t);
};
stx_pico_Option.make = function(t) {
	if(t == null) {
		return haxe_ds_Option.None;
	} else {
		return haxe_ds_Option.Some(t);
	}
};
stx_pico_Option.flatten = function(self) {
	var _g = stx_pico_OptionLift.prj(self);
	switch(_g._hx_index) {
	case 0:
		var next = _g.v;
		return next;
	case 1:
		return haxe_ds_Option.None;
	}
};
stx_pico_Option.toString = function(this1) {
	return stx_pico_Option._.toString(this1);
};
var stx_pico_OutcomeSum = $hxEnums["stx.pico.OutcomeSum"] = { __ename__:"stx.pico.OutcomeSum",__constructs__:null
	,Success: ($_=function(t) { return {_hx_index:0,t:t,__enum__:"stx.pico.OutcomeSum",toString:$estr}; },$_._hx_name="Success",$_.__params__ = ["t"],$_)
	,Failure: ($_=function(e) { return {_hx_index:1,e:e,__enum__:"stx.pico.OutcomeSum",toString:$estr}; },$_._hx_name="Failure",$_.__params__ = ["e"],$_)
};
stx_pico_OutcomeSum.__constructs__ = [stx_pico_OutcomeSum.Success,stx_pico_OutcomeSum.Failure];
var stx_pico_OutcomeLift = function() { };
stx_pico_OutcomeLift.__name__ = "stx.pico.OutcomeLift";
stx_pico_OutcomeLift.map = function(self,fn) {
	return stx_pico_OutcomeLift.flat_map(self,function(x) {
		return stx_pico_OutcomeSum.Success(fn(x));
	});
};
stx_pico_OutcomeLift.flat_map = function(self,fn) {
	var tmp;
	switch(self._hx_index) {
	case 0:
		var t = self.t;
		tmp = fn(t);
		break;
	case 1:
		var e = self.e;
		tmp = stx_pico_OutcomeSum.Failure(e);
		break;
	}
	return stx_pico_Outcome.lift(tmp);
};
stx_pico_OutcomeLift.fold = function(self,fn,er) {
	switch(self._hx_index) {
	case 0:
		var t = self.t;
		return fn(t);
	case 1:
		var e = self.e;
		return er(e);
	}
};
stx_pico_OutcomeLift.fudge = function(self) {
	switch(self._hx_index) {
	case 0:
		var t = self.t;
		return t;
	case 1:
		var e = self.e;
		throw haxe_Exception.thrown(e);
	}
};
stx_pico_OutcomeLift.elide = function(self) {
	var tmp;
	switch(self._hx_index) {
	case 0:
		var t = self.t;
		tmp = stx_pico_OutcomeSum.Failure(t);
		break;
	case 1:
		var e = self.e;
		tmp = stx_pico_OutcomeSum.Success(e);
		break;
	}
	return tmp;
};
stx_pico_OutcomeLift.value = function(self) {
	var tmp;
	switch(self._hx_index) {
	case 0:
		var t = self.t;
		tmp = stx_pico_Option.pure(t);
		break;
	case 1:
		var e = self.e;
		tmp = stx_pico_Option.unit();
		break;
	}
	return tmp;
};
stx_pico_OutcomeLift.error = function(self) {
	var tmp;
	switch(self._hx_index) {
	case 0:
		var t = self.t;
		tmp = stx_pico_Option.unit();
		break;
	case 1:
		var e = self.e;
		tmp = stx_pico_Option.pure(e);
		break;
	}
	return tmp;
};
var stx_pico_Outcome = {};
stx_pico_Outcome._new = function(self) {
	var this1 = self;
	return this1;
};
stx_pico_Outcome.lift = function(self) {
	return stx_pico_Outcome._new(self);
};
stx_pico_Outcome.success = function(t) {
	return stx_pico_Outcome.lift(stx_pico_OutcomeSum.Success(t));
};
stx_pico_Outcome.failure = function(e) {
	return stx_pico_Outcome.lift(stx_pico_OutcomeSum.Failure(e));
};
stx_pico_Outcome.prj = function(this1) {
	return this1;
};
stx_pico_Outcome.get_self = function(this1) {
	return stx_pico_Outcome.lift(this1);
};
var tink_core_Annex = function(target) {
	this.target = target;
	this.registry = new haxe_ds_ObjectMap();
};
tink_core_Annex.__name__ = "tink.core.Annex";
tink_core_Annex.prototype = {
	target: null
	,registry: null
	,__class__: tink_core_Annex
};
var tink_core_Callback = {};
tink_core_Callback._new = function(f) {
	var this1 = f;
	return this1;
};
tink_core_Callback.toFunction = function(this1) {
	return this1;
};
tink_core_Callback.invoke = function(this1,data) {
	if(tink_core_Callback.depth < 500) {
		tink_core_Callback.depth++;
		this1(data);
		tink_core_Callback.depth--;
	} else {
		tink_core_Callback.defer(function() {
			this1(data);
		});
	}
};
tink_core_Callback.fromNiladic = function(f) {
	return f;
};
tink_core_Callback.fromMany = function(callbacks) {
	return function(v) {
		var _g = 0;
		while(_g < callbacks.length) {
			var callback = callbacks[_g];
			++_g;
			tink_core_Callback.invoke(callback,v);
		}
	};
};
tink_core_Callback.defer = function(f) {
	process.nextTick(f);
};
var tink_core_LinkObject = function() { };
tink_core_LinkObject.__name__ = "tink.core.LinkObject";
tink_core_LinkObject.__isInterface__ = true;
tink_core_LinkObject.prototype = {
	cancel: null
	,__class__: tink_core_LinkObject
};
var tink_core_CallbackLinkRef = function() {
};
tink_core_CallbackLinkRef.__name__ = "tink.core.CallbackLinkRef";
tink_core_CallbackLinkRef.__interfaces__ = [tink_core_LinkObject];
tink_core_CallbackLinkRef.prototype = {
	link: null
	,cancel: function() {
		var this1 = this.link;
		if(this1 != null) {
			this1.cancel();
		}
	}
	,__class__: tink_core_CallbackLinkRef
};
var tink_core_CallbackLink = {};
tink_core_CallbackLink._new = function(link) {
	var this1 = new tink_core_SimpleLink(link);
	return this1;
};
tink_core_CallbackLink.cancel = function(this1) {
	if(this1 != null) {
		this1.cancel();
	}
};
tink_core_CallbackLink.dissolve = function(this1) {
	if(this1 != null) {
		this1.cancel();
	}
};
tink_core_CallbackLink.noop = function() {
};
tink_core_CallbackLink.toFunction = function(this1) {
	if(this1 == null) {
		return tink_core_CallbackLink.noop;
	} else {
		return $bind(this1,this1.cancel);
	}
};
tink_core_CallbackLink.toCallback = function(this1) {
	if(this1 == null) {
		return tink_core_CallbackLink.noop;
	} else {
		return $bind(this1,this1.cancel);
	}
};
tink_core_CallbackLink.fromFunction = function(f) {
	var this1 = new tink_core_SimpleLink(f);
	return this1;
};
tink_core_CallbackLink.join = function(this1,b) {
	return new tink_core__$Callback_LinkPair(this1,b);
};
tink_core_CallbackLink.fromMany = function(callbacks) {
	var this1 = new tink_core_SimpleLink(function() {
		if(callbacks != null) {
			var _g = 0;
			while(_g < callbacks.length) {
				var cb = callbacks[_g];
				++_g;
				if(cb != null) {
					cb.cancel();
				}
			}
		} else {
			callbacks = null;
		}
	});
	return this1;
};
var tink_core_SimpleLink = function(f) {
	this.f = f;
};
tink_core_SimpleLink.__name__ = "tink.core.SimpleLink";
tink_core_SimpleLink.__interfaces__ = [tink_core_LinkObject];
tink_core_SimpleLink.prototype = {
	f: null
	,cancel: function() {
		if(this.f != null) {
			this.f();
			this.f = null;
		}
	}
	,__class__: tink_core_SimpleLink
};
var tink_core__$Callback_LinkPair = function(a,b) {
	this.dissolved = false;
	this.a = a;
	this.b = b;
};
tink_core__$Callback_LinkPair.__name__ = "tink.core._Callback.LinkPair";
tink_core__$Callback_LinkPair.__interfaces__ = [tink_core_LinkObject];
tink_core__$Callback_LinkPair.prototype = {
	a: null
	,b: null
	,dissolved: null
	,cancel: function() {
		if(!this.dissolved) {
			this.dissolved = true;
			var this1 = this.a;
			if(this1 != null) {
				this1.cancel();
			}
			var this1 = this.b;
			if(this1 != null) {
				this1.cancel();
			}
			this.a = null;
			this.b = null;
		}
	}
	,__class__: tink_core__$Callback_LinkPair
};
var tink_core__$Callback_ListCell = function(cb,list) {
	if(cb == null) {
		throw haxe_Exception.thrown("callback expected but null received");
	}
	this.cb = cb;
	this.list = list;
};
tink_core__$Callback_ListCell.__name__ = "tink.core._Callback.ListCell";
tink_core__$Callback_ListCell.__interfaces__ = [tink_core_LinkObject];
tink_core__$Callback_ListCell.prototype = {
	cb: null
	,list: null
	,invoke: function(data) {
		if(this.list != null) {
			this.cb(data);
		}
	}
	,clear: function() {
		this.cb = null;
		this.list = null;
	}
	,cancel: function() {
		if(this.list != null) {
			var list = this.list;
			this.cb = null;
			this.list = null;
			if(--list.used <= list.cells.length >> 1) {
				list.compact();
			}
		}
	}
	,__class__: tink_core__$Callback_ListCell
};
var tink_core_Disposable = function() { };
tink_core_Disposable.__name__ = "tink.core.Disposable";
tink_core_Disposable.__isInterface__ = true;
tink_core_Disposable.prototype = {
	get_disposed: null
	,ondispose: null
	,__class__: tink_core_Disposable
};
var tink_core_OwnedDisposable = function() { };
tink_core_OwnedDisposable.__name__ = "tink.core.OwnedDisposable";
tink_core_OwnedDisposable.__isInterface__ = true;
tink_core_OwnedDisposable.__interfaces__ = [tink_core_Disposable];
tink_core_OwnedDisposable.prototype = {
	dispose: null
	,__class__: tink_core_OwnedDisposable
};
var tink_core_SimpleDisposable = function(dispose) {
	this.disposeHandlers = [];
	this.f = dispose;
};
tink_core_SimpleDisposable.__name__ = "tink.core.SimpleDisposable";
tink_core_SimpleDisposable.__interfaces__ = [tink_core_OwnedDisposable];
tink_core_SimpleDisposable.noop = function() {
};
tink_core_SimpleDisposable.prototype = {
	f: null
	,disposeHandlers: null
	,get_disposed: function() {
		return this.disposeHandlers == null;
	}
	,ondispose: function(d) {
		var _g = this.disposeHandlers;
		if(_g == null) {
			d();
		} else {
			var v = _g;
			v.push(d);
		}
	}
	,dispose: function() {
		var _g = this.disposeHandlers;
		if(_g != null) {
			var v = _g;
			this.disposeHandlers = null;
			var f = this.f;
			this.f = tink_core_SimpleDisposable.noop;
			f();
			var _g = 0;
			while(_g < v.length) {
				var h = v[_g];
				++_g;
				h();
			}
		}
	}
	,__class__: tink_core_SimpleDisposable
};
var tink_core_CallbackList = function(destructive) {
	if(destructive == null) {
		destructive = false;
	}
	this.onfill = function() {
	};
	this.ondrain = function() {
	};
	this.busy = false;
	this.queue = [];
	this.used = 0;
	var _gthis = this;
	tink_core_SimpleDisposable.call(this,function() {
		if(!_gthis.busy) {
			_gthis.destroy();
		}
	});
	this.destructive = destructive;
	this.cells = [];
};
tink_core_CallbackList.__name__ = "tink.core.CallbackList";
tink_core_CallbackList.__super__ = tink_core_SimpleDisposable;
tink_core_CallbackList.prototype = $extend(tink_core_SimpleDisposable.prototype,{
	destructive: null
	,cells: null
	,get_length: function() {
		return this.used;
	}
	,used: null
	,queue: null
	,busy: null
	,ondrain: null
	,onfill: null
	,release: function() {
		if(--this.used <= this.cells.length >> 1) {
			this.compact();
		}
	}
	,destroy: function() {
		var _g = 0;
		var _g1 = this.cells;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			c.cb = null;
			c.list = null;
		}
		this.queue = null;
		this.cells = null;
		if(this.used > 0) {
			this.used = 0;
			var fn = this.ondrain;
			if(tink_core_Callback.depth < 500) {
				tink_core_Callback.depth++;
				fn();
				tink_core_Callback.depth--;
			} else {
				tink_core_Callback.defer(fn);
			}
		}
	}
	,drain: function() {
		var fn = this.ondrain;
		if(tink_core_Callback.depth < 500) {
			tink_core_Callback.depth++;
			fn();
			tink_core_Callback.depth--;
		} else {
			tink_core_Callback.defer(fn);
		}
	}
	,add: function(cb) {
		if(this.disposeHandlers == null) {
			return null;
		}
		var node = new tink_core__$Callback_ListCell(cb,this);
		this.cells.push(node);
		if(this.used++ == 0) {
			var fn = this.onfill;
			if(tink_core_Callback.depth < 500) {
				tink_core_Callback.depth++;
				fn();
				tink_core_Callback.depth--;
			} else {
				tink_core_Callback.defer(fn);
			}
		}
		return node;
	}
	,invoke: function(data) {
		var _gthis = this;
		if(tink_core_Callback.depth < 500) {
			tink_core_Callback.depth++;
			if(_gthis.disposeHandlers != null) {
				if(_gthis.busy) {
					if(_gthis.destructive != true) {
						var _g = $bind(_gthis,_gthis.invoke);
						var data1 = data;
						var tmp = function() {
							_g(data1);
						};
						_gthis.queue.push(tmp);
					}
				} else {
					_gthis.busy = true;
					if(_gthis.destructive) {
						_gthis.dispose();
					}
					var length = _gthis.cells.length;
					var _g1 = 0;
					var _g2 = length;
					while(_g1 < _g2) {
						var i = _g1++;
						var _this = _gthis.cells[i];
						if(_this.list != null) {
							_this.cb(data);
						}
					}
					_gthis.busy = false;
					if(_gthis.disposeHandlers == null) {
						_gthis.destroy();
					} else {
						if(_gthis.used < _gthis.cells.length) {
							_gthis.compact();
						}
						if(_gthis.queue.length > 0) {
							(_gthis.queue.shift())();
						}
					}
				}
			}
			tink_core_Callback.depth--;
		} else {
			tink_core_Callback.defer(function() {
				if(_gthis.disposeHandlers != null) {
					if(_gthis.busy) {
						if(_gthis.destructive != true) {
							var _g = $bind(_gthis,_gthis.invoke);
							var data1 = data;
							var tmp = function() {
								_g(data1);
							};
							_gthis.queue.push(tmp);
						}
					} else {
						_gthis.busy = true;
						if(_gthis.destructive) {
							_gthis.dispose();
						}
						var length = _gthis.cells.length;
						var _g1 = 0;
						var _g2 = length;
						while(_g1 < _g2) {
							var i = _g1++;
							var _this = _gthis.cells[i];
							if(_this.list != null) {
								_this.cb(data);
							}
						}
						_gthis.busy = false;
						if(_gthis.disposeHandlers == null) {
							_gthis.destroy();
						} else {
							if(_gthis.used < _gthis.cells.length) {
								_gthis.compact();
							}
							if(_gthis.queue.length > 0) {
								(_gthis.queue.shift())();
							}
						}
					}
				}
			});
		}
	}
	,compact: function() {
		if(this.busy) {
			return;
		} else if(this.used == 0) {
			this.resize(0);
			var fn = this.ondrain;
			if(tink_core_Callback.depth < 500) {
				tink_core_Callback.depth++;
				fn();
				tink_core_Callback.depth--;
			} else {
				tink_core_Callback.defer(fn);
			}
		} else {
			var compacted = 0;
			var _g = 0;
			var _g1 = this.cells.length;
			while(_g < _g1) {
				var i = _g++;
				var _g2 = this.cells[i];
				var _g3 = _g2.list;
				if(_g2.cb != null) {
					var v = _g2;
					if(compacted != i) {
						this.cells[compacted] = v;
					}
					if(++compacted == this.used) {
						break;
					}
				}
			}
			this.resize(this.used);
		}
	}
	,resize: function(length) {
		this.cells.length = length;
	}
	,clear: function() {
		if(this.busy) {
			this.queue.push($bind(this,this.clear));
		}
		var _g = 0;
		var _g1 = this.cells;
		while(_g < _g1.length) {
			var cell = _g1[_g];
			++_g;
			cell.cb = null;
			cell.list = null;
		}
		this.resize(0);
	}
	,__class__: tink_core_CallbackList
});
var tink_core_AlreadyDisposed = function() {
};
tink_core_AlreadyDisposed.__name__ = "tink.core.AlreadyDisposed";
tink_core_AlreadyDisposed.__interfaces__ = [tink_core_OwnedDisposable];
tink_core_AlreadyDisposed.prototype = {
	get_disposed: function() {
		return true;
	}
	,ondispose: function(d) {
		d();
	}
	,dispose: function() {
	}
	,__class__: tink_core_AlreadyDisposed
};
var tink_core_TypedError = function(code,message,pos) {
	if(code == null) {
		code = 500;
	}
	this.isTinkError = true;
	this.code = code;
	this.message = message;
	this.pos = pos;
	this.exceptionStack = [];
	this.callStack = [];
};
tink_core_TypedError.__name__ = "tink.core.TypedError";
tink_core_TypedError.withData = function(code,message,data,pos) {
	return tink_core_TypedError.typed(code,message,data,pos);
};
tink_core_TypedError.typed = function(code,message,data,pos) {
	var ret = new tink_core_TypedError(code,message,pos);
	ret.data = data;
	return ret;
};
tink_core_TypedError.ofJsError = function(e,pos) {
	return tink_core_TypedError.withData(500,e.message,e,pos);
};
tink_core_TypedError.asError = function(v) {
	if(v != null && v.isTinkError) {
		return v;
	} else {
		return null;
	}
};
tink_core_TypedError.catchExceptions = function(f,report,pos) {
	try {
		return tink_core_Outcome.Success(f());
	} catch( _g ) {
		haxe_NativeStackTrace.lastError = _g;
		var e = haxe_Exception.caught(_g).unwrap();
		var e1 = tink_core_TypedError.asError(e);
		var tmp;
		if(e1 == null) {
			tmp = report == null ? tink_core_TypedError.withData(null,"Unexpected Error",e1,pos) : report(e1);
		} else {
			var e = e1;
			tmp = e;
		}
		return tink_core_Outcome.Failure(tmp);
	}
};
tink_core_TypedError.reporter = function(code,message,pos) {
	return function(e) {
		return tink_core_TypedError.withData(code,message,e,pos);
	};
};
tink_core_TypedError.rethrow = function(any) {
	throw haxe_Exception.thrown(any);
};
tink_core_TypedError.tryFinally = function(f,cleanup) {
	try { return f(); } finally { cleanup(); }
	return null;
};
tink_core_TypedError.prototype = {
	message: null
	,code: null
	,data: null
	,pos: null
	,callStack: null
	,exceptionStack: null
	,isTinkError: null
	,printPos: function() {
		return this.pos.className + "." + this.pos.methodName + ":" + this.pos.lineNumber;
	}
	,toString: function() {
		var ret = "Error#" + this.code + ": " + this.message;
		if(this.pos != null) {
			ret += " @ " + this.printPos();
		}
		return ret;
	}
	,toPromise: function() {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(this)));
	}
	,throwSelf: function() {
		var any = this;
		throw haxe_Exception.thrown(any);
	}
	,toJsError: function() {
		var value = this.data;
		var _g = ((value) instanceof Error) ? value : null;
		if(_g == null) {
			return new tink_core__$Error_TinkError(this);
		} else {
			var e = _g;
			return e;
		}
	}
	,__class__: tink_core_TypedError
};
var tink_core_Stack = {};
tink_core_Stack.toString = function(this1) {
	return "Error stack not available. Compile with -D error_stack.";
};
var tink_core__$Error_TinkError = function(e) {
	Error.call(this);
	this.message = e.message;
	this.data = e;
};
tink_core__$Error_TinkError.__name__ = "tink.core._Error.TinkError";
tink_core__$Error_TinkError.__super__ = Error;
tink_core__$Error_TinkError.prototype = $extend(Error.prototype,{
	data: null
	,__class__: tink_core__$Error_TinkError
});
var tink_core_FutureStatus = $hxEnums["tink.core.FutureStatus"] = { __ename__:"tink.core.FutureStatus",__constructs__:null
	,Suspended: {_hx_name:"Suspended",_hx_index:0,__enum__:"tink.core.FutureStatus",toString:$estr}
	,Awaited: {_hx_name:"Awaited",_hx_index:1,__enum__:"tink.core.FutureStatus",toString:$estr}
	,EagerlyAwaited: {_hx_name:"EagerlyAwaited",_hx_index:2,__enum__:"tink.core.FutureStatus",toString:$estr}
	,Ready: ($_=function(result) { return {_hx_index:3,result:result,__enum__:"tink.core.FutureStatus",toString:$estr}; },$_._hx_name="Ready",$_.__params__ = ["result"],$_)
	,NeverEver: {_hx_name:"NeverEver",_hx_index:4,__enum__:"tink.core.FutureStatus",toString:$estr}
};
tink_core_FutureStatus.__constructs__ = [tink_core_FutureStatus.Suspended,tink_core_FutureStatus.Awaited,tink_core_FutureStatus.EagerlyAwaited,tink_core_FutureStatus.Ready,tink_core_FutureStatus.NeverEver];
var tink_core_FutureTrigger = function() {
	this.status = tink_core_FutureStatus.Awaited;
	this.list = new tink_core_CallbackList(true);
};
tink_core_FutureTrigger.__name__ = "tink.core.FutureTrigger";
tink_core_FutureTrigger.__interfaces__ = [tink_core__$Future_FutureObject];
tink_core_FutureTrigger.prototype = {
	status: null
	,list: null
	,getStatus: function() {
		return this.status;
	}
	,handle: function(callback) {
		var _g = this.status;
		if(_g._hx_index == 3) {
			var result = _g.result;
			tink_core_Callback.invoke(callback,tink_core_Lazy.get(result));
			return null;
		} else {
			var v = _g;
			var _this = this.list;
			if(_this.disposeHandlers == null) {
				return null;
			} else {
				var node = new tink_core__$Callback_ListCell(callback,_this);
				_this.cells.push(node);
				if(_this.used++ == 0) {
					var fn = _this.onfill;
					if(tink_core_Callback.depth < 500) {
						tink_core_Callback.depth++;
						fn();
						tink_core_Callback.depth--;
					} else {
						tink_core_Callback.defer(fn);
					}
				}
				return node;
			}
		}
	}
	,eager: function() {
	}
	,asFuture: function() {
		return this;
	}
	,trigger: function(result) {
		var _g = this.status;
		if(_g._hx_index == 3) {
			var _g1 = _g.result;
			return false;
		} else {
			this.status = tink_core_FutureStatus.Ready(new tink_core__$Lazy_LazyConst(result));
			this.list.invoke(result);
			return true;
		}
	}
	,__class__: tink_core_FutureTrigger
};
var tink_core_JsPromiseTools = function() { };
tink_core_JsPromiseTools.__name__ = "tink.core.JsPromiseTools";
tink_core_JsPromiseTools.toSurprise = function(promise) {
	return tink_core_Future.ofJsPromise(promise);
};
tink_core_JsPromiseTools.toPromise = function(promise) {
	return tink_core_Future.ofJsPromise(promise);
};
var tink_core__$Future_SuspendableFuture = function(wakeup) {
	this.status = tink_core_FutureStatus.Suspended;
	var _gthis = this;
	this.wakeup = wakeup;
	this.callbacks = new tink_core_CallbackList(true);
	this.callbacks.ondrain = function() {
		if(_gthis.status == tink_core_FutureStatus.Awaited) {
			_gthis.status = tink_core_FutureStatus.Suspended;
			var this1 = _gthis.link;
			if(this1 != null) {
				this1.cancel();
			}
			_gthis.link = null;
		}
	};
	this.callbacks.onfill = function() {
		if(_gthis.status == tink_core_FutureStatus.Suspended) {
			_gthis.status = tink_core_FutureStatus.Awaited;
			_gthis.arm();
		}
	};
};
tink_core__$Future_SuspendableFuture.__name__ = "tink.core._Future.SuspendableFuture";
tink_core__$Future_SuspendableFuture.__interfaces__ = [tink_core__$Future_FutureObject];
tink_core__$Future_SuspendableFuture.prototype = {
	callbacks: null
	,status: null
	,link: null
	,wakeup: null
	,getStatus: function() {
		return this.status;
	}
	,trigger: function(value) {
		var _g = this.status;
		if(_g._hx_index == 3) {
			var _g1 = _g.result;
		} else {
			this.status = tink_core_FutureStatus.Ready(new tink_core__$Lazy_LazyConst(value));
			var link = this.link;
			this.link = null;
			this.wakeup = null;
			this.callbacks.invoke(value);
			if(link != null) {
				link.cancel();
			}
		}
	}
	,handle: function(callback) {
		var _g = this.status;
		if(_g._hx_index == 3) {
			var result = _g.result;
			tink_core_Callback.invoke(callback,tink_core_Lazy.get(result));
			return null;
		} else {
			var _this = this.callbacks;
			if(_this.disposeHandlers == null) {
				return null;
			} else {
				var node = new tink_core__$Callback_ListCell(callback,_this);
				_this.cells.push(node);
				if(_this.used++ == 0) {
					var fn = _this.onfill;
					if(tink_core_Callback.depth < 500) {
						tink_core_Callback.depth++;
						fn();
						tink_core_Callback.depth--;
					} else {
						tink_core_Callback.defer(fn);
					}
				}
				return node;
			}
		}
	}
	,arm: function() {
		var _gthis = this;
		this.link = this.wakeup(function(x) {
			_gthis.trigger(x);
		});
	}
	,eager: function() {
		switch(this.status._hx_index) {
		case 0:
			this.status = tink_core_FutureStatus.EagerlyAwaited;
			this.arm();
			break;
		case 1:
			this.status = tink_core_FutureStatus.EagerlyAwaited;
			break;
		default:
		}
	}
	,__class__: tink_core__$Future_SuspendableFuture
};
var tink_core_Lazy = {};
tink_core_Lazy.get_computed = function(this1) {
	return this1.isComputed();
};
tink_core_Lazy.get = function(this1) {
	this1.compute();
	return this1.get();
};
tink_core_Lazy.fromNoise = function(l) {
	return l;
};
tink_core_Lazy.ofFunc = function(f) {
	return new tink_core__$Lazy_LazyFunc(f);
};
tink_core_Lazy.map = function(this1,f) {
	return new tink_core__$Lazy_LazyFunc(function() {
		return f(this1.get());
	},this1);
};
tink_core_Lazy.flatMap = function(this1,f) {
	return new tink_core__$Lazy_LazyFunc(function() {
		return tink_core_Lazy.get(f(this1.get()));
	},this1);
};
tink_core_Lazy.ofConst = function(c) {
	return new tink_core__$Lazy_LazyConst(c);
};
var tink_core__$Lazy_LazyFunc = function(f,from) {
	this.f = f;
	this.from = from;
};
tink_core__$Lazy_LazyFunc.__name__ = "tink.core._Lazy.LazyFunc";
tink_core__$Lazy_LazyFunc.__interfaces__ = [tink_core__$Lazy_LazyObject];
tink_core__$Lazy_LazyFunc.prototype = {
	f: null
	,from: null
	,result: null
	,underlying: function() {
		return this.from;
	}
	,isComputed: function() {
		return this.f == null;
	}
	,get: function() {
		return this.result;
	}
	,compute: function() {
		var _g = this.f;
		if(_g != null) {
			var v = _g;
			this.f = null;
			var _g = this.from;
			if(_g != null) {
				var cur = _g;
				this.from = null;
				var stack = [];
				while(cur != null && !cur.isComputed()) {
					stack.push(cur);
					cur = cur.underlying();
				}
				stack.reverse();
				var _g = 0;
				while(_g < stack.length) {
					var c = stack[_g];
					++_g;
					c.compute();
				}
			}
			this.result = v();
		}
	}
	,__class__: tink_core__$Lazy_LazyFunc
};
var tink_core_NamedWith = function(name,value) {
	this.name = name;
	this.value = value;
};
tink_core_NamedWith.__name__ = "tink.core.NamedWith";
tink_core_NamedWith.prototype = {
	name: null
	,value: null
	,__class__: tink_core_NamedWith
};
var tink_core_Noise = {};
tink_core_Noise.ofAny = function(t) {
	return null;
};
var tink_core_OptionTools = function() { };
tink_core_OptionTools.__name__ = "tink.core.OptionTools";
tink_core_OptionTools.force = function(o,pos) {
	if(o._hx_index == 0) {
		var v = o.v;
		return v;
	} else {
		throw haxe_Exception.thrown(new tink_core_TypedError(404,"Some value expected but none found",pos));
	}
};
tink_core_OptionTools.sure = function(o,pos) {
	if(o._hx_index == 0) {
		var v = o.v;
		return v;
	} else {
		throw haxe_Exception.thrown(new tink_core_TypedError(404,"Some value expected but none found",pos));
	}
};
tink_core_OptionTools.toOutcome = function(o,pos) {
	switch(o._hx_index) {
	case 0:
		var value = o.v;
		return tink_core_Outcome.Success(value);
	case 1:
		return tink_core_Outcome.Failure(new tink_core_TypedError(404,"Some value expected but none found in " + pos.fileName + "@line " + pos.lineNumber,{ fileName : "tink/core/Option.hx", lineNumber : 31, className : "tink.core.OptionTools", methodName : "toOutcome"}));
	}
};
tink_core_OptionTools.or = function(o,l) {
	if(o._hx_index == 0) {
		var v = o.v;
		return v;
	} else {
		return tink_core_Lazy.get(l);
	}
};
tink_core_OptionTools.orTry = function(o,fallback) {
	if(o._hx_index == 0) {
		var v = o.v;
		return o;
	} else {
		return tink_core_Lazy.get(fallback);
	}
};
tink_core_OptionTools.orNull = function(o) {
	if(o._hx_index == 0) {
		var v = o.v;
		return v;
	} else {
		return null;
	}
};
tink_core_OptionTools.filter = function(o,f) {
	if(o._hx_index == 0) {
		if(f(o.v) == false) {
			return haxe_ds_Option.None;
		} else {
			return o;
		}
	} else {
		return o;
	}
};
tink_core_OptionTools.satisfies = function(o,f) {
	if(o._hx_index == 0) {
		var v = o.v;
		return f(v);
	} else {
		return false;
	}
};
tink_core_OptionTools.equals = function(o,v) {
	if(o._hx_index == 0) {
		var v1 = o.v;
		return v1 == v;
	} else {
		return false;
	}
};
tink_core_OptionTools.map = function(o,f) {
	if(o._hx_index == 0) {
		var v = o.v;
		return haxe_ds_Option.Some(f(v));
	} else {
		return haxe_ds_Option.None;
	}
};
tink_core_OptionTools.flatMap = function(o,f) {
	if(o._hx_index == 0) {
		var v = o.v;
		return f(v);
	} else {
		return haxe_ds_Option.None;
	}
};
tink_core_OptionTools.iterator = function(o) {
	return new tink_core_OptionIter(o);
};
tink_core_OptionTools.toArray = function(o) {
	if(o._hx_index == 0) {
		var v = o.v;
		return [v];
	} else {
		return [];
	}
};
var tink_core_OptionIter = function(o) {
	this.alive = true;
	if(o._hx_index == 0) {
		var v = o.v;
		this.value = v;
	} else {
		this.alive = false;
	}
};
tink_core_OptionIter.__name__ = "tink.core.OptionIter";
tink_core_OptionIter.prototype = {
	value: null
	,alive: null
	,hasNext: function() {
		return this.alive;
	}
	,next: function() {
		this.alive = false;
		return this.value;
	}
	,__class__: tink_core_OptionIter
};
var tink_core_Outcome = $hxEnums["tink.core.Outcome"] = { __ename__:"tink.core.Outcome",__constructs__:null
	,Success: ($_=function(data) { return {_hx_index:0,data:data,__enum__:"tink.core.Outcome",toString:$estr}; },$_._hx_name="Success",$_.__params__ = ["data"],$_)
	,Failure: ($_=function(failure) { return {_hx_index:1,failure:failure,__enum__:"tink.core.Outcome",toString:$estr}; },$_._hx_name="Failure",$_.__params__ = ["failure"],$_)
};
tink_core_Outcome.__constructs__ = [tink_core_Outcome.Success,tink_core_Outcome.Failure];
var tink_core_OutcomeTools = function() { };
tink_core_OutcomeTools.__name__ = "tink.core.OutcomeTools";
tink_core_OutcomeTools.sure = function(outcome) {
	switch(outcome._hx_index) {
	case 0:
		var data = outcome.data;
		return data;
	case 1:
		var failure = outcome.failure;
		var _g = tink_core_TypedError.asError(failure);
		if(_g == null) {
			throw haxe_Exception.thrown(failure);
		} else {
			var e = _g;
			return e.throwSelf();
		}
		break;
	}
};
tink_core_OutcomeTools.toOption = function(outcome) {
	switch(outcome._hx_index) {
	case 0:
		var data = outcome.data;
		return haxe_ds_Option.Some(data);
	case 1:
		var _g = outcome.failure;
		return haxe_ds_Option.None;
	}
};
tink_core_OutcomeTools.orNull = function(outcome) {
	switch(outcome._hx_index) {
	case 0:
		var data = outcome.data;
		return data;
	case 1:
		var _g = outcome.failure;
		return null;
	}
};
tink_core_OutcomeTools.orUse = function(outcome,fallback) {
	return tink_core_OutcomeTools.or(outcome,fallback);
};
tink_core_OutcomeTools.or = function(outcome,fallback) {
	switch(outcome._hx_index) {
	case 0:
		var data = outcome.data;
		return data;
	case 1:
		var _g = outcome.failure;
		return tink_core_Lazy.get(fallback);
	}
};
tink_core_OutcomeTools.orTry = function(outcome,fallback) {
	switch(outcome._hx_index) {
	case 0:
		var _g = outcome.data;
		return outcome;
	case 1:
		var _g = outcome.failure;
		return tink_core_Lazy.get(fallback);
	}
};
tink_core_OutcomeTools.equals = function(outcome,to) {
	switch(outcome._hx_index) {
	case 0:
		var data = outcome.data;
		return data == to;
	case 1:
		var _g = outcome.failure;
		return false;
	}
};
tink_core_OutcomeTools.map = function(outcome,transform) {
	switch(outcome._hx_index) {
	case 0:
		var a = outcome.data;
		return tink_core_Outcome.Success(transform(a));
	case 1:
		var f = outcome.failure;
		return tink_core_Outcome.Failure(f);
	}
};
tink_core_OutcomeTools.isSuccess = function(outcome) {
	if(outcome._hx_index == 0) {
		var _g = outcome.data;
		return true;
	} else {
		return false;
	}
};
tink_core_OutcomeTools.flatMap = function(o,mapper) {
	return tink_core__$Outcome_OutcomeMapper.apply(mapper,o);
};
tink_core_OutcomeTools.swap = function(outcome,v) {
	switch(outcome._hx_index) {
	case 0:
		var a = outcome.data;
		return tink_core_Outcome.Success(v);
	case 1:
		var f = outcome.failure;
		return tink_core_Outcome.Failure(f);
	}
};
tink_core_OutcomeTools.next = function(outcome,f) {
	switch(outcome._hx_index) {
	case 0:
		var v = outcome.data;
		return f(v);
	case 1:
		var e = outcome.failure;
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(e)));
	}
};
tink_core_OutcomeTools.attempt = function(f,report) {
	try {
		return tink_core_Outcome.Success(f());
	} catch( _g ) {
		haxe_NativeStackTrace.lastError = _g;
		var e = haxe_Exception.caught(_g).unwrap();
		return tink_core_Outcome.Failure(report(e));
	}
};
tink_core_OutcomeTools.flatten = function(o) {
	switch(o._hx_index) {
	case 0:
		var _g = o.data;
		switch(_g._hx_index) {
		case 0:
			var d = _g.data;
			return tink_core_Outcome.Success(d);
		case 1:
			var f = _g.failure;
			return tink_core_Outcome.Failure(f);
		}
		break;
	case 1:
		var f = o.failure;
		return tink_core_Outcome.Failure(f);
	}
};
var tink_core__$Outcome_OutcomeMapper = {};
tink_core__$Outcome_OutcomeMapper._new = function(f) {
	var this1 = { f : f};
	return this1;
};
tink_core__$Outcome_OutcomeMapper.apply = function(this1,o) {
	return this1.f(o);
};
tink_core__$Outcome_OutcomeMapper.withSameError = function(f) {
	return tink_core__$Outcome_OutcomeMapper._new(function(o) {
		switch(o._hx_index) {
		case 0:
			var d = o.data;
			return f(d);
		case 1:
			var f1 = o.failure;
			return tink_core_Outcome.Failure(f1);
		}
	});
};
tink_core__$Outcome_OutcomeMapper.withEitherError = function(f) {
	return tink_core__$Outcome_OutcomeMapper._new(function(o) {
		switch(o._hx_index) {
		case 0:
			var d = o.data;
			var _g = f(d);
			switch(_g._hx_index) {
			case 0:
				var d = _g.data;
				return tink_core_Outcome.Success(d);
			case 1:
				var f1 = _g.failure;
				return tink_core_Outcome.Failure(haxe_ds_Either.Right(f1));
			}
			break;
		case 1:
			var f1 = o.failure;
			return tink_core_Outcome.Failure(haxe_ds_Either.Left(f1));
		}
	});
};
var tink_core_Pair = {};
tink_core_Pair._new = function(a,b) {
	var this1 = new tink_core_MPair(a,b);
	return this1;
};
tink_core_Pair.get_a = function(this1) {
	return this1.a;
};
tink_core_Pair.get_b = function(this1) {
	return this1.b;
};
tink_core_Pair.toBool = function(this1) {
	return this1 != null;
};
tink_core_Pair.isNil = function(this1) {
	return this1 == null;
};
tink_core_Pair.nil = function() {
	return null;
};
var tink_core_MPair = function(a,b) {
	this.a = a;
	this.b = b;
};
tink_core_MPair.__name__ = "tink.core.MPair";
tink_core_MPair.prototype = {
	a: null
	,b: null
	,__class__: tink_core_MPair
};
var tink_core_ProgressValue = {};
tink_core_ProgressValue._new = function(value,total) {
	var this1 = new tink_core_MPair(value,total);
	var this2 = this1;
	return this2;
};
tink_core_ProgressValue.normalize = function(this1) {
	var o = this1.b;
	if(o._hx_index == 0) {
		var v = o.v;
		return haxe_ds_Option.Some(this1.a / v);
	} else {
		return haxe_ds_Option.None;
	}
};
tink_core_ProgressValue.get_value = function(this1) {
	return this1.a;
};
tink_core_ProgressValue.get_total = function(this1) {
	return this1.b;
};
var tink_core_Progress = {};
tink_core_Progress.listen = function(this1,cb) {
	return this1.progressed.listen(cb);
};
tink_core_Progress.handle = function(this1,cb) {
	return this1.result.handle(cb);
};
tink_core_Progress.trigger = function() {
	return new tink_core_ProgressTrigger();
};
tink_core_Progress.make = function(f) {
	return new tink_core__$Progress_SuspendableProgress(function(fire) {
		return f(function(value,total) {
			var fire1 = fire;
			var this1 = new tink_core_MPair(value,total);
			var this2 = this1;
			fire1(tink_core_ProgressStatus.InProgress(this2));
		},function(result) {
			fire(tink_core_ProgressStatus.Finished(result));
		});
	});
};
tink_core_Progress.map = function(this1,f) {
	return new tink_core__$Progress_ProgressObject(tink_core_Signal.map(this1.changed,function(s) {
		return tink_core_ProgressStatusTools.map(s,f);
	}),function() {
		return tink_core_ProgressStatusTools.map(this1.getStatus(),f);
	});
};
tink_core_Progress.asFuture = function(this1) {
	return this1.result;
};
tink_core_Progress.promise = function(v) {
	return new tink_core__$Progress_SuspendableProgress(function(fire) {
		var inner = new tink_core_CallbackLinkRef();
		return new tink_core__$Callback_LinkPair(v.handle(function(o) {
			switch(o._hx_index) {
			case 0:
				var p = o.data;
				var this1 = p.changed.listen(function(s) {
					fire(tink_core_ProgressStatusTools.map(s,tink_core_Outcome.Success));
				});
				inner.link = this1;
				break;
			case 1:
				var e = o.failure;
				fire(tink_core_ProgressStatus.Finished(tink_core_Outcome.Failure(e)));
				break;
			}
		}),inner);
	});
};
tink_core_Progress.flatten = function(v) {
	return tink_core_Progress.map(tink_core_Progress.promise(v),function(o) {
		switch(o._hx_index) {
		case 0:
			var _g = o.data;
			switch(_g._hx_index) {
			case 0:
				var v = _g.data;
				return tink_core_Outcome.Success(v);
			case 1:
				var e = _g.failure;
				return tink_core_Outcome.Failure(e);
			}
			break;
		case 1:
			var e = o.failure;
			return tink_core_Outcome.Failure(e);
		}
	});
};
tink_core_Progress.future = function(v) {
	return new tink_core__$Progress_SuspendableProgress(function(fire) {
		var inner = new tink_core_CallbackLinkRef();
		return new tink_core__$Callback_LinkPair(v.handle(function(p) {
			var this1 = p.changed.listen(fire);
			inner.link = this1;
		}),inner);
	});
};
tink_core_Progress.next = function(this1,f) {
	return tink_core_Future.flatMap(this1.result,f);
};
var tink_core__$Progress_ProgressObject = function(changed,getStatus) {
	this.changed = changed;
	var this1 = new tink_core__$Signal_Suspendable(function(fire) {
		return changed.listen(function(s) {
			if(s._hx_index == 0) {
				var v = s.v;
				fire(v);
			}
		});
	},null);
	this.progressed = this1;
	this.getStatus = getStatus;
	var this1 = new tink_core__$Future_SuspendableFuture(function(fire) {
		var _g = getStatus();
		if(_g._hx_index == 1) {
			var v = _g.v;
			fire(v);
			return null;
		} else {
			return changed.listen(function(s) {
				if(s._hx_index == 1) {
					var v = s.v;
					fire(v);
				}
			});
		}
	});
	this.result = this1;
};
tink_core__$Progress_ProgressObject.__name__ = "tink.core._Progress.ProgressObject";
tink_core__$Progress_ProgressObject.prototype = {
	get_status: function() {
		return this.getStatus();
	}
	,getStatus: null
	,changed: null
	,progressed: null
	,result: null
	,__class__: tink_core__$Progress_ProgressObject
};
var tink_core__$Progress_SuspendableProgress = function(wakeup,status) {
	if(status == null) {
		status = tink_core_ProgressStatus.InProgress(tink_core_ProgressValue.ZERO);
	}
	var disposable = tink_core_AlreadyDisposed.INST;
	var changed;
	switch(status._hx_index) {
	case 0:
		var _g = status.v;
		var this1 = new tink_core__$Signal_Suspendable(function(fire) {
			return wakeup(function(s) {
				status = s;
				fire(status);
			});
		},function(d) {
			disposable = d;
		});
		changed = this1;
		break;
	case 1:
		var _g = status.v;
		changed = tink_core_Signal.dead();
		break;
	}
	tink_core__$Progress_ProgressObject.call(this,changed,function() {
		return status;
	});
};
tink_core__$Progress_SuspendableProgress.__name__ = "tink.core._Progress.SuspendableProgress";
tink_core__$Progress_SuspendableProgress.__super__ = tink_core__$Progress_ProgressObject;
tink_core__$Progress_SuspendableProgress.prototype = $extend(tink_core__$Progress_ProgressObject.prototype,{
	noop: function(_,_0) {
		return null;
	}
	,__class__: tink_core__$Progress_SuspendableProgress
});
var tink_core_ProgressTrigger = function(status) {
	this._changed = null;
	var _gthis = this;
	if(status == null) {
		status = tink_core_ProgressStatus.InProgress(tink_core_ProgressValue.ZERO);
		this._status = status;
	}
	var tmp;
	if(status == null) {
		tmp = false;
	} else if(status._hx_index == 1) {
		var _g = status.v;
		tmp = true;
	} else {
		tmp = false;
	}
	tink_core__$Progress_ProgressObject.call(this,tmp ? tink_core_Signal.dead() : this._changed = tink_core_Signal.trigger(),function() {
		return _gthis._status;
	});
};
tink_core_ProgressTrigger.__name__ = "tink.core.ProgressTrigger";
tink_core_ProgressTrigger.__super__ = tink_core__$Progress_ProgressObject;
tink_core_ProgressTrigger.prototype = $extend(tink_core__$Progress_ProgressObject.prototype,{
	_status: null
	,_changed: null
	,asProgress: function() {
		return this;
	}
	,progress: function(v,total) {
		var _g = this._status;
		var tmp;
		if(_g._hx_index == 1) {
			var _g1 = _g.v;
			tmp = true;
		} else {
			tmp = false;
		}
		if(!tmp) {
			var _this = this._changed;
			var this1 = new tink_core_MPair(v,total);
			var this2 = this1;
			_this.handlers.invoke(this._status = tink_core_ProgressStatus.InProgress(this2));
		}
	}
	,finish: function(v) {
		var _g = this._status;
		var tmp;
		if(_g._hx_index == 1) {
			var _g1 = _g.v;
			tmp = true;
		} else {
			tmp = false;
		}
		if(!tmp) {
			this._changed.handlers.invoke(this._status = tink_core_ProgressStatus.Finished(v));
		}
	}
	,__class__: tink_core_ProgressTrigger
});
var tink_core_UnitInterval = {};
tink_core_UnitInterval.toPercentageString = function(this1,dp) {
	var m = Math.pow(10,dp);
	var v = Math.round(this1 * m * 100) / m;
	var s = v == null ? "null" : "" + v;
	var _g = s.indexOf(".");
	if(_g == -1) {
		return s + "." + StringTools.lpad("","0",dp) + "%";
	} else {
		var i = _g;
		if(s.length - i > dp) {
			return HxOverrides.substr(s,0,dp + i + 1) + "%";
		} else {
			var i = _g;
			return StringTools.rpad(s,"0",i + dp + 1) + "%";
		}
	}
};
var tink_core_ProgressStatus = $hxEnums["tink.core.ProgressStatus"] = { __ename__:"tink.core.ProgressStatus",__constructs__:null
	,InProgress: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"tink.core.ProgressStatus",toString:$estr}; },$_._hx_name="InProgress",$_.__params__ = ["v"],$_)
	,Finished: ($_=function(v) { return {_hx_index:1,v:v,__enum__:"tink.core.ProgressStatus",toString:$estr}; },$_._hx_name="Finished",$_.__params__ = ["v"],$_)
};
tink_core_ProgressStatus.__constructs__ = [tink_core_ProgressStatus.InProgress,tink_core_ProgressStatus.Finished];
var tink_core_ProgressStatusTools = function() { };
tink_core_ProgressStatusTools.__name__ = "tink.core.ProgressStatusTools";
tink_core_ProgressStatusTools.map = function(p,f) {
	switch(p._hx_index) {
	case 0:
		var v = p.v;
		return tink_core_ProgressStatus.InProgress(v);
	case 1:
		var v = p.v;
		return tink_core_ProgressStatus.Finished(f(v));
	}
};
var tink_core_TotalTools = function() { };
tink_core_TotalTools.__name__ = "tink.core.TotalTools";
tink_core_TotalTools.eq = function(a,b) {
	switch(a._hx_index) {
	case 0:
		if(b._hx_index == 0) {
			var t2 = b.v;
			var t1 = a.v;
			return t1 == t2;
		} else {
			return false;
		}
		break;
	case 1:
		if(b._hx_index == 1) {
			return true;
		} else {
			return false;
		}
		break;
	}
};
var tink_core_ProgressTools = function() { };
tink_core_ProgressTools.__name__ = "tink.core.ProgressTools";
tink_core_ProgressTools.asPromise = function(p) {
	return p.result;
};
var tink_core_Promise = {};
tink_core_Promise._new = function(f) {
	var this1 = new tink_core__$Future_SuspendableFuture(function(cb) {
		return f(function(v) {
			cb(tink_core_Outcome.Success(v));
		},function(e) {
			cb(tink_core_Outcome.Failure(e));
		});
	});
	var this2 = this1;
	return this2;
};
tink_core_Promise.eager = function(this1) {
	this1.eager();
	return this1;
};
tink_core_Promise.map = function(this1,f) {
	return tink_core_Future.map(this1,f);
};
tink_core_Promise.flatMap = function(this1,f) {
	return tink_core_Future.flatMap(this1,f);
};
tink_core_Promise.tryRecover = function(this1,f) {
	return tink_core_Future.flatMap(this1,function(o) {
		switch(o._hx_index) {
		case 0:
			var d = o.data;
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(o));
		case 1:
			var e = o.failure;
			return f(e);
		}
	});
};
tink_core_Promise.recover = function(this1,f) {
	return tink_core_Future.flatMap(this1,function(o) {
		switch(o._hx_index) {
		case 0:
			var d = o.data;
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(d));
		case 1:
			var e = o.failure;
			return f(e);
		}
	});
};
tink_core_Promise.mapError = function(this1,f) {
	return tink_core_Future.map(this1,function(o) {
		switch(o._hx_index) {
		case 0:
			var _g = o.data;
			return o;
		case 1:
			var e = o.failure;
			return tink_core_Outcome.Failure(f(e));
		}
	});
};
tink_core_Promise.handle = function(this1,cb) {
	return this1.handle(cb);
};
tink_core_Promise.noise = function(this1) {
	if(this1.getStatus()._hx_index == 4) {
		return tink_core_Promise.NEVER;
	} else {
		return tink_core_Promise.next(this1,function(v) {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(null)));
		});
	}
};
tink_core_Promise.isSuccess = function(this1) {
	return tink_core_Future.map(this1,function(o) {
		return tink_core_OutcomeTools.isSuccess(o);
	});
};
tink_core_Promise.next = function(this1,f,gather) {
	return tink_core_Future.flatMap(this1,function(o) {
		switch(o._hx_index) {
		case 0:
			var d = o.data;
			return f(d);
		case 1:
			var f1 = o.failure;
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(f1)));
		}
	});
};
tink_core_Promise.swap = function(this1,v) {
	return tink_core_Promise.next(this1,function(_) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(v)));
	});
};
tink_core_Promise.swapError = function(this1,e) {
	return tink_core_Promise.mapError(this1,function(_) {
		return e;
	});
};
tink_core_Promise.merge = function(this1,other,merger,gather) {
	return tink_core_Future.flatMap(tink_core_Future.merge(this1,other,function(a,b) {
		switch(a._hx_index) {
		case 0:
			var _g = a.data;
			switch(b._hx_index) {
			case 0:
				var b1 = b.data;
				var a1 = _g;
				return merger(a1,b1);
			case 1:
				var e = b.failure;
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(e)));
			}
			break;
		case 1:
			var e = a.failure;
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(e)));
		}
	}),function(o) {
		return o;
	});
};
tink_core_Promise.and = function(a,b) {
	return tink_core_Promise.merge(a,b,function(a,b) {
		var this1 = new tink_core_MPair(a,b);
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(this1)));
	});
};
tink_core_Promise.iterate = function(promises,$yield,fallback) {
	return tink_core_Future.irreversible(function(cb) {
		var iter = $getIterator(promises);
		var next = null;
		next = function() {
			if(iter.hasNext()) {
				iter.next().handle(function(o) {
					switch(o._hx_index) {
					case 0:
						var v = o.data;
						$yield(v).handle(function(o) {
							switch(o._hx_index) {
							case 0:
								var _g = o.data;
								switch(_g._hx_index) {
								case 0:
									var ret = _g.v;
									cb(tink_core_Outcome.Success(ret));
									break;
								case 1:
									next();
									break;
								}
								break;
							case 1:
								var e = o.failure;
								cb(tink_core_Outcome.Failure(e));
								break;
							}
						});
						break;
					case 1:
						var e = o.failure;
						cb(tink_core_Outcome.Failure(e));
						break;
					}
				});
			} else {
				fallback.handle(cb);
			}
		};
		next();
	});
};
tink_core_Promise.retry = function(gen,next) {
	var stamp = function() {
		var hrtime = process.hrtime();
		return (hrtime[0] + hrtime[1] / 1e9) * 1000;
	};
	var start = stamp();
	var attempt = null;
	attempt = function(count) {
		var f = function(error) {
			return tink_core_Promise.next(next({ attempt : count, error : error, elapsed : stamp() - start}),function(_) {
				return attempt(count + 1);
			});
		};
		return tink_core_Future.flatMap(gen(),function(o) {
			switch(o._hx_index) {
			case 0:
				var d = o.data;
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(o));
			case 1:
				var e = o.failure;
				return f(e);
			}
		});
	};
	return attempt(1);
};
tink_core_Promise.ofJsPromise = function(promise) {
	return tink_core_Future.ofJsPromise(promise);
};
tink_core_Promise.toJsPromise = function(this1) {
	return new Promise(function(resolve,reject) {
		this1.handle(function(o) {
			switch(o._hx_index) {
			case 0:
				var v = o.data;
				resolve(v);
				break;
			case 1:
				var e = o.failure;
				reject(e.toJsError());
				break;
			}
		});
	});
};
tink_core_Promise.ofSpecific = function(s) {
	return s;
};
tink_core_Promise.fromNever = function(l) {
	return l;
};
tink_core_Promise.ofTrigger = function(f) {
	return f;
};
tink_core_Promise.ofHappyTrigger = function(f) {
	return tink_core_Future.map(f,tink_core_Outcome.Success);
};
tink_core_Promise.ofFuture = function(f) {
	return tink_core_Future.map(f,tink_core_Outcome.Success);
};
tink_core_Promise.ofOutcome = function(o) {
	return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(o));
};
tink_core_Promise.ofError = function(e) {
	return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(e)));
};
tink_core_Promise.ofData = function(d) {
	return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(d)));
};
tink_core_Promise.lazy = function(p) {
	var this1 = new tink_core__$Future_SuspendableFuture(function(cb) {
		return tink_core_Lazy.get(p).handle(cb);
	});
	return this1;
};
tink_core_Promise.inParallel = function(a,concurrency) {
	return tink_core_Promise.many(a,concurrency);
};
tink_core_Promise.many = function(a,concurrency) {
	return tink_core_Future.processMany(a,concurrency,function(o) {
		return o;
	},function(o) {
		return o;
	});
};
tink_core_Promise.inSequence = function(a) {
	return tink_core_Promise.many(a,1);
};
tink_core_Promise.cache = function(gen) {
	var p = null;
	return function() {
		var ret = p;
		if(ret == null) {
			var sync = false;
			ret = tink_core_Promise.next(gen(),function(o) {
				o.b.handle(function(_) {
					sync = true;
					p = null;
				});
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(o.a)));
			});
			if(!sync) {
				p = ret;
			}
		}
		return tink_core_Future.map(ret,function(o) {
			if(!tink_core_OutcomeTools.isSuccess(o)) {
				p = null;
			}
			return o;
		});
	};
};
tink_core_Promise.lift = function(p) {
	return p;
};
tink_core_Promise.trigger = function() {
	var this1 = new tink_core_FutureTrigger();
	return this1;
};
tink_core_Promise.resolve = function(v) {
	return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(v)));
};
tink_core_Promise.reject = function(e) {
	return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(e)));
};
var tink_core_Next = {};
tink_core_Next.ofSafe = function(f) {
	return function(x) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(f(x)));
	};
};
tink_core_Next.ofSync = function(f) {
	return function(x) {
		return tink_core_Future.map(f(x),tink_core_Outcome.Success);
	};
};
tink_core_Next.ofSafeSync = function(f) {
	return function(x) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(f(x))));
	};
};
tink_core_Next._chain = function(a,b) {
	return function(v) {
		return tink_core_Promise.next(a(v),b);
	};
};
var tink_core_Recover = {};
tink_core_Recover.ofSync = function(f) {
	return function(e) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(f(e)));
	};
};
var tink_core_Combiner = {};
tink_core_Combiner.ofSync = function(f) {
	return function(x1,x2) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(f(x1,x2)));
	};
};
tink_core_Combiner.ofSafe = function(f) {
	return function(x1,x2) {
		return tink_core_Future.map(f(x1,x2),tink_core_Outcome.Success);
	};
};
tink_core_Combiner.ofSafeSync = function(f) {
	return function(x1,x2) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(f(x1,x2))));
	};
};
var tink_core_PromiseTrigger = {};
tink_core_PromiseTrigger._new = function() {
	var this1 = new tink_core_FutureTrigger();
	return this1;
};
tink_core_PromiseTrigger.resolve = function(this1,v) {
	return this1.trigger(tink_core_Outcome.Success(v));
};
tink_core_PromiseTrigger.reject = function(this1,e) {
	return this1.trigger(tink_core_Outcome.Failure(e));
};
tink_core_PromiseTrigger.asPromise = function(this1) {
	return this1;
};
var tink_core_Ref = {};
tink_core_Ref._new = function() {
	var this1 = new Array(1);
	var this2 = this1;
	return this2;
};
tink_core_Ref.get_value = function(this1) {
	return this1[0];
};
tink_core_Ref.set_value = function(this1,param) {
	return this1[0] = param;
};
tink_core_Ref.toString = function(this1) {
	return "@[" + Std.string(this1[0]) + "]";
};
tink_core_Ref.to = function(v) {
	var this1 = new Array(1);
	var this2 = this1;
	var ret = this2;
	ret[0] = v;
	return ret;
};
var tink_core_Gather = {};
tink_core_Gather._new = function(v) {
	var this1 = v;
	return this1;
};
tink_core_Gather.ofBool = function(b) {
	var this1 = b;
	return this1;
};
var tink_core_Signal = {};
tink_core_Signal._new = function(f,init) {
	var this1 = new tink_core__$Signal_Suspendable(f,init);
	return this1;
};
tink_core_Signal.handle = function(this1,handler) {
	return this1.listen(handler);
};
tink_core_Signal.map = function(this1,f,gather) {
	return tink_core__$Signal_Suspendable.over(this1,function(fire) {
		return this1.listen(function(v) {
			fire(f(v));
		});
	});
};
tink_core_Signal.flatMap = function(this1,f,gather) {
	return tink_core__$Signal_Suspendable.over(this1,function(fire) {
		return this1.listen(function(v) {
			f(v).handle(fire);
		});
	});
};
tink_core_Signal.filter = function(this1,f,gather) {
	return tink_core__$Signal_Suspendable.over(this1,function(fire) {
		return this1.listen(function(v) {
			if(f(v)) {
				fire(v);
			}
		});
	});
};
tink_core_Signal.select = function(this1,selector,gather) {
	return tink_core__$Signal_Suspendable.over(this1,function(fire) {
		return this1.listen(function(v) {
			var _g = selector(v);
			if(_g._hx_index == 0) {
				var v = _g.v;
				fire(v);
			}
		});
	});
};
tink_core_Signal.join = function(this1,that,gather) {
	if(this1.get_disposed()) {
		return that;
	} else if(that.get_disposed()) {
		return this1;
	} else {
		return new tink_core__$Signal_Suspendable(function(fire) {
			var cb = fire;
			return new tink_core__$Callback_LinkPair(this1.listen(cb),that.listen(cb));
		},function(self) {
			var release = function() {
				if(this1.get_disposed() && that.get_disposed()) {
					self.dispose();
				}
			};
			this1.ondispose(release);
			that.ondispose(release);
		});
	}
};
tink_core_Signal.nextTime = function(this1,condition) {
	return tink_core_Signal.pickNext(this1,function(v) {
		if(condition == null || condition(v)) {
			return haxe_ds_Option.Some(v);
		} else {
			return haxe_ds_Option.None;
		}
	});
};
tink_core_Signal.pickNext = function(this1,selector) {
	var ret = new tink_core_FutureTrigger();
	var link = null;
	link = this1.listen(function(v) {
		var _g = selector(v);
		switch(_g._hx_index) {
		case 0:
			var v = _g.v;
			ret.trigger(v);
			break;
		case 1:
			break;
		}
	});
	ret.handle(link == null ? tink_core_CallbackLink.noop : ($_=link,$bind($_,$_.cancel)));
	return ret;
};
tink_core_Signal.until = function(this1,end) {
	return new tink_core__$Signal_Suspendable(function($yield) {
		return this1.listen($yield);
	},function(self) {
		end.handle($bind(self,self.dispose));
	});
};
tink_core_Signal.next = function(this1,condition) {
	return tink_core_Signal.nextTime(this1,condition);
};
tink_core_Signal.noise = function(this1) {
	return tink_core_Signal.map(this1,function(_) {
		return null;
	});
};
tink_core_Signal.gather = function(this1) {
	return this1;
};
tink_core_Signal.create = function(f) {
	var this1 = new tink_core__$Signal_Suspendable(f,null);
	return this1;
};
tink_core_Signal.generate = function(generator,init) {
	var this1 = new tink_core__$Signal_Suspendable(function(fire) {
		generator(fire);
		return null;
	},init);
	return this1;
};
tink_core_Signal.trigger = function() {
	return new tink_core_SignalTrigger();
};
tink_core_Signal.ofClassical = function(add,remove,gather) {
	return new tink_core__$Signal_Suspendable(function(fire) {
		add(fire);
		var _g = remove;
		var a1 = fire;
		var this1 = new tink_core_SimpleLink(function() {
			_g(a1);
		});
		return this1;
	});
};
tink_core_Signal.dead = function() {
	return tink_core__$Signal_Disposed.INST;
};
var tink_core__$Signal_SignalObject = function() { };
tink_core__$Signal_SignalObject.__name__ = "tink.core._Signal.SignalObject";
tink_core__$Signal_SignalObject.__isInterface__ = true;
tink_core__$Signal_SignalObject.__interfaces__ = [tink_core_Disposable];
tink_core__$Signal_SignalObject.prototype = {
	listen: null
	,__class__: tink_core__$Signal_SignalObject
};
var tink_core__$Signal_Disposed = function() {
	tink_core_AlreadyDisposed.call(this);
};
tink_core__$Signal_Disposed.__name__ = "tink.core._Signal.Disposed";
tink_core__$Signal_Disposed.__interfaces__ = [tink_core__$Signal_SignalObject];
tink_core__$Signal_Disposed.__super__ = tink_core_AlreadyDisposed;
tink_core__$Signal_Disposed.prototype = $extend(tink_core_AlreadyDisposed.prototype,{
	listen: function(cb) {
		return null;
	}
	,__class__: tink_core__$Signal_Disposed
});
var tink_core__$Signal_Suspendable = function(activate,init) {
	this.handlers = new tink_core_CallbackList();
	var _gthis = this;
	this.activate = activate;
	this.init = init;
	this.handlers.ondrain = function() {
		var this1 = _gthis.subscription;
		if(this1 != null) {
			this1.cancel();
		}
	};
	this.handlers.onfill = function() {
		if(init != null) {
			var f = init;
			init = null;
			f(_gthis);
		}
		_gthis.subscription = activate(($_=_gthis.handlers,$bind($_,$_.invoke)));
	};
};
tink_core__$Signal_Suspendable.__name__ = "tink.core._Signal.Suspendable";
tink_core__$Signal_Suspendable.__interfaces__ = [tink_core_OwnedDisposable,tink_core__$Signal_SignalObject];
tink_core__$Signal_Suspendable.over = function(s,activate) {
	if(s.get_disposed()) {
		return tink_core_Signal.dead();
	} else {
		var ret = new tink_core__$Signal_Suspendable(activate);
		s.ondispose($bind(ret,ret.dispose));
		return ret;
	}
};
tink_core__$Signal_Suspendable.prototype = {
	handlers: null
	,activate: null
	,init: null
	,subscription: null
	,get_disposed: function() {
		return this.handlers.disposeHandlers == null;
	}
	,dispose: function() {
		this.handlers.dispose();
	}
	,ondispose: function(handler) {
		this.handlers.ondispose(handler);
	}
	,listen: function(cb) {
		var _this = this.handlers;
		if(_this.disposeHandlers == null) {
			return null;
		} else {
			var node = new tink_core__$Callback_ListCell(cb,_this);
			_this.cells.push(node);
			if(_this.used++ == 0) {
				var fn = _this.onfill;
				if(tink_core_Callback.depth < 500) {
					tink_core_Callback.depth++;
					fn();
					tink_core_Callback.depth--;
				} else {
					tink_core_Callback.defer(fn);
				}
			}
			return node;
		}
	}
	,__class__: tink_core__$Signal_Suspendable
};
var tink_core_SignalTrigger = function() {
	this.handlers = new tink_core_CallbackList();
};
tink_core_SignalTrigger.__name__ = "tink.core.SignalTrigger";
tink_core_SignalTrigger.__interfaces__ = [tink_core_OwnedDisposable,tink_core__$Signal_SignalObject];
tink_core_SignalTrigger.prototype = {
	get_disposed: function() {
		return this.handlers.disposeHandlers == null;
	}
	,handlers: null
	,dispose: function() {
		this.handlers.dispose();
	}
	,ondispose: function(d) {
		this.handlers.ondispose(d);
	}
	,trigger: function(event) {
		this.handlers.invoke(event);
	}
	,getLength: function() {
		return this.handlers.used;
	}
	,listen: function(cb) {
		var _this = this.handlers;
		if(_this.disposeHandlers == null) {
			return null;
		} else {
			var node = new tink_core__$Callback_ListCell(cb,_this);
			_this.cells.push(node);
			if(_this.used++ == 0) {
				var fn = _this.onfill;
				if(tink_core_Callback.depth < 500) {
					tink_core_Callback.depth++;
					fn();
					tink_core_Callback.depth--;
				} else {
					tink_core_Callback.defer(fn);
				}
			}
			return node;
		}
	}
	,clear: function() {
		this.handlers.clear();
	}
	,asSignal: function() {
		return this;
	}
	,__class__: tink_core_SignalTrigger
};
function $iterator(o) { if( o instanceof Array ) return function() { return new haxe_iterators_ArrayIterator(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
function $getIterator(o) { if( o instanceof Array ) return new haxe_iterators_ArrayIterator(o); else return o.iterator(); }
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
if(typeof(performance) != "undefined" ? typeof(performance.now) == "function" : false) {
	HxOverrides.now = performance.now.bind(performance);
}
if( String.fromCodePoint == null ) String.fromCodePoint = function(c) { return c < 0x10000 ? String.fromCharCode(c) : String.fromCharCode((c>>10)+0xD7C0)+String.fromCharCode((c&0x3FF)+0xDC00); }
String.prototype.__class__ = String;
String.__name__ = "String";
Array.__name__ = "Array";
Date.prototype.__class__ = Date;
Date.__name__ = "Date";
var Int = { };
var Dynamic = { };
var Float = Number;
var Bool = Boolean;
var Class = { };
var Enum = { };
haxe_Resource.content = [];
js_Boot.__toStr = ({ }).toString;
var facade = stx_log_Facade.unit();
stx_log_Signal.get_instance().attach(stx_log_Facade.toLoggerApi(facade));
stx_log_Signal.has_custom = false;
haxe_EntryPoint.pending = [];
haxe_EntryPoint.threadCount = 0;
haxe_crypto_Base64.CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
haxe_crypto_Base64.BYTES = haxe_io_Bytes.ofString(haxe_crypto_Base64.CHARS);
hre_RegExp.LATIN_SMALL_LETTER_G = 103;
hre_RegExp.LATIN_SMALL_LETTER_I = 105;
hre_RegExp.LATIN_SMALL_LETTER_M = 109;
hre_RegExp.LATIN_SMALL_LETTER_U = 117;
hre_RegExp.LATIN_SMALL_LETTER_Y = 121;
hre_RegExpMatcher.lineTerminators = [10,13,8232,8233];
hre_RegExpMatcher.whiteSpaces = [9,11,12,32,160,65279];
hre_RegExpMatcher.separators = hre_RegExpMatcher.lineTerminators.concat(hre_RegExpMatcher.whiteSpaces);
httpstatus_HttpStatusCode.Continue = 100;
httpstatus_HttpStatusCode.SwitchingProtocols = 101;
httpstatus_HttpStatusCode.Processing = 102;
httpstatus_HttpStatusCode.OK = 200;
httpstatus_HttpStatusCode.Created = 201;
httpstatus_HttpStatusCode.Accepted = 202;
httpstatus_HttpStatusCode.NonAuthoritativeInformation = 203;
httpstatus_HttpStatusCode.NoContent = 204;
httpstatus_HttpStatusCode.ResetContent = 205;
httpstatus_HttpStatusCode.PartialContent = 206;
httpstatus_HttpStatusCode.MultiStatus = 207;
httpstatus_HttpStatusCode.AlreadyReported = 208;
httpstatus_HttpStatusCode.IMUsed = 226;
httpstatus_HttpStatusCode.MultipleChoices = 300;
httpstatus_HttpStatusCode.MovedPermanently = 301;
httpstatus_HttpStatusCode.Found = 302;
httpstatus_HttpStatusCode.SeeOther = 303;
httpstatus_HttpStatusCode.NotModified = 304;
httpstatus_HttpStatusCode.UseProxy = 305;
httpstatus_HttpStatusCode.SwitchProxy = 306;
httpstatus_HttpStatusCode.TemporaryRedirect = 307;
httpstatus_HttpStatusCode.PermanentRedirect = 308;
httpstatus_HttpStatusCode.BadRequest = 400;
httpstatus_HttpStatusCode.Unauthorized = 401;
httpstatus_HttpStatusCode.PaymentRequired = 402;
httpstatus_HttpStatusCode.Forbidden = 403;
httpstatus_HttpStatusCode.NotFound = 404;
httpstatus_HttpStatusCode.MethodNotAllowed = 405;
httpstatus_HttpStatusCode.NotAcceptable = 406;
httpstatus_HttpStatusCode.ProxyAuthenticationRequired = 407;
httpstatus_HttpStatusCode.RequestTimeout = 408;
httpstatus_HttpStatusCode.Conflict = 409;
httpstatus_HttpStatusCode.Gone = 410;
httpstatus_HttpStatusCode.LengthRequired = 411;
httpstatus_HttpStatusCode.PreconditionFailed = 412;
httpstatus_HttpStatusCode.PayloadTooLarge = 413;
httpstatus_HttpStatusCode.URITooLong = 414;
httpstatus_HttpStatusCode.UnsupportedMediaType = 415;
httpstatus_HttpStatusCode.RangeNotSatisfiable = 416;
httpstatus_HttpStatusCode.ExpectationFailed = 417;
httpstatus_HttpStatusCode.ImATeapot = 418;
httpstatus_HttpStatusCode.MisdirectedRequest = 421;
httpstatus_HttpStatusCode.UnprocessableEntity = 422;
httpstatus_HttpStatusCode.Locked = 423;
httpstatus_HttpStatusCode.FailedDependency = 424;
httpstatus_HttpStatusCode.UpgradeRequired = 426;
httpstatus_HttpStatusCode.PreconditionRequired = 428;
httpstatus_HttpStatusCode.TooManyRequests = 429;
httpstatus_HttpStatusCode.RequestHeaderFieldsTooLarge = 431;
httpstatus_HttpStatusCode.UnavailableForLegalReasons = 451;
httpstatus_HttpStatusCode.InternalServerError = 500;
httpstatus_HttpStatusCode.NotImplemented = 501;
httpstatus_HttpStatusCode.BadGateway = 502;
httpstatus_HttpStatusCode.ServiceUnavailable = 503;
httpstatus_HttpStatusCode.GatewayTimeout = 504;
httpstatus_HttpStatusCode.HTTPVersionNotSupported = 505;
httpstatus_HttpStatusCode.VariantAlsoNegotiates = 506;
httpstatus_HttpStatusCode.InsufficientStorage = 507;
httpstatus_HttpStatusCode.LoopDetected = 508;
httpstatus_HttpStatusCode.NotExtended = 510;
httpstatus_HttpStatusCode.NetworkAuthenticationRequired = 511;
stx_log_Logic._ = stx_log_LogicLift;
stx_log_Facade.ZERO = stx_log_Facade.unit();
stx_log_Signal.ZERO = (function($this) {
	var $r;
	var this1 = stx_log_Signal.get_instance();
	$r = this1;
	return $r;
}(this));
stx_log_Signal.has_custom = false;
stx_log_LogPosition.id = "306cccf1-89a7-44a4-b99a-7c69772a528d";
stx_Log._ = stx_LogLift;
stx_Log.ZERO = stx_Log.LOG;
stx_nano_Err.UUID = "e30e1389-4a72-41fe-ba9f-d7ddf3d1e247";
stx_assert_EqualedSum.AreEqual = true;
stx_assert_EqualedSum.NotEqual = false;
stx_assert_Equaled.AreEqual = true;
stx_assert_Equaled.NotEqual = false;
stx_assert_OrderedSum.LessThan = true;
stx_assert_OrderedSum.NotLessThan = false;
stx_assert_Predicate._ = stx_assert_PredicateLift;
stx_fn_Binary._ = stx_fn_BinaryLift;
stx_fn_Block.ZERO = function() {
};
stx_fn_Block._ = stx_fn_BlockLift;
tink_core_Future.NOISE = new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(null));
tink_core_Future.NULL = tink_core_Future.NOISE;
tink_core_Future.NEVER = new tink_core__$Future_NeverFuture();
stx_fn_Cycle.ZERO = stx_fn_Cycle.unit();
stx_fn_Dual._ = stx_fn_DualLift;
stx_fn_Sink._ = stx_fn_SinkLift;
stx_fn_Ternary._ = stx_fn_TernaryLift;
stx_fn_ThunkLift.__meta__ = { statics : { cache : { params : ["The Thunk to call once"], returns : ["A Thunk which will call the input Thunk once."]}}};
stx_fn_Thunk._ = stx_fn_ThunkLift;
stx_fn_Unary._ = stx_fn_UnaryLift;
stx_fp_Continuation._ = stx_fp_ContinuationLift;
stx_fp_LazyStream.ZERO = stx_fp_LazyStream.unit();
stx_fp_StateLift.__meta__ = { statics : { exec : { doc : ["Run `State` with `s`, dropping the result and returning `s`."]}, 'eval' : { doc : ["Run `State` with `s`, returning the result."]}}};
stx_http_client_HeaderId.ContentType = "Content-Type";
stx_http_client_HeaderId.Accept = "Accept";
stx_http_client_HeaderId.Connection = "Connection";
stx_http_client_HeaderId.Authorization = "Authorization";
stx_http_client_HttpMethod.POST = "POST";
stx_http_client_HttpMethod.GET = "GET";
stx_http_client_HttpMethod.HEAD = "HEAD";
stx_http_client_HttpMethod.DELETE = "DELETE";
stx_http_client_HttpMethod.PATCH = "PATCH";
stx_log_Stamp.ZERO = new stx_log_Stamp();
stx_nano_Alert._ = stx_nano_AlertLift;
stx_nano_CharsLift.__meta__ = { statics : { underscore : { thx : null}}};
stx_nano_Chars._ = stx_nano_CharsLift;
stx_nano_Chunk._ = stx_nano_ChunkLift;
stx_nano_CompilerTarget._ = stx_nano_CompilerTargetLift;
stx_nano_Contract._ = stx_nano_ContractLift;
stx_nano_Couple._ = stx_nano_CoupleLift;
stx_nano_Defect._ = stx_nano_DefectLift;
stx_nano_FailCode.E_ResourceNotFound = "E_ResourceNotFound";
stx_nano_FailCode.E_IteratorExhaustedUnexpectedly = "E_IteratorExhaustedUnexpectedly";
stx_nano_FailCode.E_UnexpectedNullValueEncountered = "E_UnexpectedNullValueEncountered";
stx_nano_FailCode.E_OptionForcedError = "E_OptionForcedError";
stx_nano_FailCode.E_ValueNotReady = "E_ValueNotReady";
stx_nano_FailCode.E_AbstractMethod = "E_AbstractMethod";
stx_nano_FailCode.E_IndexOutOfBounds = "E_IndexOutOfBounds";
stx_nano_FailCode.E_UndefinedError = "E_UndefinedError";
stx_nano_Failure._ = stx_nano_FailureLift;
stx_nano_Floats.__meta__ = { statics : { clamp : { doc : ["Produce a number based on `n` that is `min` if less than `min`, \n\t\t`max` if `n` is greater than `max` and is left untouched if\n\t\tbetween the two."]}}};
stx_nano_Ints.__meta__ = { statics : { xor : { doc : ["Returns `a ^ b`"]}}};
stx_nano_Ints.ZERO = 0;
stx_nano_Ints.ONE = 1;
stx_nano_Iter._ = stx_nano_IterLift;
stx_nano_Math.PRIMES = [1,3,7,13,31,61,127,251,509,1021,2039,4093,8191,16381,32749,65521,131071,262139,524287,1048573,2097143,4194301,8388593,16777213,33554393,67108859,134217689,268435399,536870909,1073741789,2147483647];
stx_nano_Pledge._ = stx_nano_PledgeLift;
stx_nano_Position.ZERO = stx_nano_Position.make(null,null,null,null);
stx_nano_Position._ = stx_nano_PositionLift;
stx_nano_Report._ = stx_nano_ReportLift;
stx_nano_Res._ = stx_nano_ResLift;
stx_nano_Signal._ = stx_nano_SignalLift;
stx_nano_Slot._ = stx_nano_SlotLift;
stx_nano_Triple._ = stx_nano_TripleLift;
stx_pico_Either._ = stx_pico_EitherLift;
stx_pico_Option._ = stx_pico_OptionLift;
stx_pico_Outcome._ = stx_pico_OutcomeLift;
tink_core_Callback.depth = 0;
tink_core_Callback.MAX_DEPTH = 500;
tink_core_AlreadyDisposed.INST = new tink_core_AlreadyDisposed();
tink_core_Lazy.NOISE = new tink_core__$Lazy_LazyConst(null);
tink_core_Lazy.NULL = tink_core_Lazy.NOISE;
tink_core_Noise.Noise = null;
tink_core_ProgressValue.ZERO = (function($this) {
	var $r;
	var this1 = new tink_core_MPair(0,haxe_ds_Option.None);
	var this2 = this1;
	$r = this2;
	return $r;
}(this));
tink_core_Progress.INIT = tink_core_ProgressValue.ZERO;
tink_core_Promise.NOISE = new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(null)));
tink_core_Promise.NULL = tink_core_Promise.NOISE;
tink_core_Promise.NEVER = tink_core_Future.NEVER;
tink_core__$Signal_Disposed.INST = new tink_core__$Signal_Disposed();
{
	Main.main();
	haxe_EntryPoint.run();
}
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
