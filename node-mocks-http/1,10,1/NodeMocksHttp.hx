@:jsRequire("node-mocks-http") @valueModuleOnly extern class NodeMocksHttp {
	static function createRequest<T>(?options:node_mocks_http.RequestOptions):node_mocks_http.MockRequest<T>;
	static function createResponse<T>(?options:node_mocks_http.ResponseOptions):node_mocks_http.MockResponse<T>;
	static function createMocks<T1, T2>(?reqOptions:node_mocks_http.RequestOptions, ?resOptions:node_mocks_http.ResponseOptions):node_mocks_http.Mocks<T1, T2>;
}