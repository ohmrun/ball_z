package node_mocks_http;

typedef Mocks<T1, T2> = {
	var req : MockRequest<T1>;
	var res : MockResponse<T2>;
};