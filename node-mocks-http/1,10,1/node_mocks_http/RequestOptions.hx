package node_mocks_http;

typedef RequestOptions = {
	@:optional
	var method : RequestMethod;
	@:optional
	var url : String;
	@:optional
	var originalUrl : String;
	@:optional
	var baseUrl : String;
	@:optional
	var path : String;
	@:optional
	var params : Params;
	@:optional
	var session : Session;
	@:optional
	var cookies : Cookies;
	@:optional
	var signedCookies : Cookies;
	@:optional
	var headers : Headers;
	@:optional
	var body : Body;
	@:optional
	var query : Query;
	@:optional
	var files : Files;
};