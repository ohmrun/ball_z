package strapi;

typedef Strapi = {
	var db : Dynamic;
	function query(model:String, plugin:String):Dynamic;
};