package node.http2;

typedef SecureServerSessionOptions = {
	@:optional
	var Http1IncomingMessage : {
		var prototype : node.http.IncomingMessage;
		/**
			A utility method for creating Readable Streams out of iterators.
		**/
		function from(iterable:ts.AnyOf2<Iterable<Dynamic>, js.lib.AsyncIterable<Dynamic>>, ?options:node.stream.ReadableOptions):node.stream.Readable;
		@:overload(function(stream:ts.AnyOf3<global.nodejs.ReadableStream, global.nodejs.WritableStream, global.nodejs.ReadWriteStream>, callback:ts.AnyOf2<() -> Void, (err:global.nodejs.ErrnoException) -> Void>):() -> Void { })
		function finished(stream:ts.AnyOf3<global.nodejs.ReadableStream, global.nodejs.WritableStream, global.nodejs.ReadWriteStream>, options:node.stream.FinishedOptions, callback:ts.AnyOf2<() -> Void, (err:global.nodejs.ErrnoException) -> Void>):() -> Void;
		@:overload(function<A, T1, B>(source:A, transform1:T1, destination:B, ?callback:node.stream.PipelineCallback<B>):Dynamic { })
		@:overload(function<A, T1, T2, B>(source:A, transform1:T1, transform2:T2, destination:B, ?callback:node.stream.PipelineCallback<B>):Dynamic { })
		@:overload(function<A, T1, T2, T3, B>(source:A, transform1:T1, transform2:T2, transform3:T3, destination:B, ?callback:node.stream.PipelineCallback<B>):Dynamic { })
		@:overload(function<A, T1, T2, T3, T4, B>(source:A, transform1:T1, transform2:T2, transform3:T3, transform4:T4, destination:B, ?callback:node.stream.PipelineCallback<B>):Dynamic { })
		@:overload(function(streams:haxe.ds.ReadOnlyArray<ts.AnyOf3<global.nodejs.ReadableStream, global.nodejs.WritableStream, global.nodejs.ReadWriteStream>>, ?callback:(err:Null<global.nodejs.ErrnoException>) -> Void):global.nodejs.WritableStream { })
		@:overload(function(stream1:global.nodejs.ReadableStream, stream2:ts.AnyOf2<global.nodejs.WritableStream, global.nodejs.ReadWriteStream>, streams:haxe.extern.Rest<ts.AnyOf3<global.nodejs.WritableStream, global.nodejs.ReadWriteStream, (err:Null<global.nodejs.ErrnoException>) -> Void>>):global.nodejs.WritableStream { })
		function pipeline<A, B>(source:A, destination:B, ?callback:node.stream.PipelineCallback<B>):Dynamic;
		final promises : {
			function finished(stream:ts.AnyOf3<global.nodejs.ReadableStream, global.nodejs.WritableStream, global.nodejs.ReadWriteStream>, ?options:node.stream.FinishedOptions):js.lib.Promise<Void>;
			@:overload(function<A, T1, B>(source:A, transform1:T1, destination:B, ?options:node.stream.PipelineOptions):node.stream.PipelinePromise<B> { })
			@:overload(function<A, T1, T2, B>(source:A, transform1:T1, transform2:T2, destination:B, ?options:node.stream.PipelineOptions):node.stream.PipelinePromise<B> { })
			@:overload(function<A, T1, T2, T3, B>(source:A, transform1:T1, transform2:T2, transform3:T3, destination:B, ?options:node.stream.PipelineOptions):node.stream.PipelinePromise<B> { })
			@:overload(function<A, T1, T2, T3, T4, B>(source:A, transform1:T1, transform2:T2, transform3:T3, transform4:T4, destination:B, ?options:node.stream.PipelineOptions):node.stream.PipelinePromise<B> { })
			@:overload(function(streams:haxe.ds.ReadOnlyArray<ts.AnyOf3<global.nodejs.ReadableStream, global.nodejs.WritableStream, global.nodejs.ReadWriteStream>>, ?options:node.stream.PipelineOptions):js.lib.Promise<Void> { })
			@:overload(function(stream1:global.nodejs.ReadableStream, stream2:ts.AnyOf2<global.nodejs.WritableStream, global.nodejs.ReadWriteStream>, streams:haxe.extern.Rest<ts.AnyOf3<global.nodejs.WritableStream, global.nodejs.ReadWriteStream, node.stream.PipelineOptions>>):js.lib.Promise<Void> { })
			function pipeline<A, B>(source:A, destination:B, ?options:node.stream.PipelineOptions):node.stream.PipelinePromise<B>;
		};
		@:overload(function(emitter:SecureServerSessionOptions, event:String, ?options:SecureServerSessionOptions):js.lib.Promise<Array<Dynamic>> { })
		function once(emitter:SecureServerSessionOptions, event:ts.AnyOf2<String, js.lib.Symbol>, ?options:SecureServerSessionOptions):js.lib.Promise<Array<Dynamic>>;
		function on(emitter:global.nodejs.EventEmitter, event:String, ?options:SecureServerSessionOptions):js.lib.AsyncIterableIterator<Dynamic>;
		function listenerCount(emitter:global.nodejs.EventEmitter, event:ts.AnyOf2<String, js.lib.Symbol>):Float;
		/**
			Returns a list listener for a specific emitter event name.
		**/
		function getEventListener(emitter:ts.AnyOf2<global.nodejs.EventEmitter, SecureServerSessionOptions>, name:ts.AnyOf2<String, js.lib.Symbol>):Array<haxe.Constraints.Function>;
		/**
			This symbol shall be used to install a listener for only monitoring `'error'`
			events. Listeners installed using this symbol are called before the regular
			`'error'` listeners are called.
			
			Installing a listener using this symbol does not change the behavior once an
			`'error'` event is emitted, therefore the process will still crash if no
			regular `'error'` listener is installed.
		**/
		final errorMonitor : js.lib.Symbol;
		final captureRejectionSymbol : js.lib.Symbol;
		/**
			Sets or gets the default captureRejection value for all emitters.
		**/
		var captureRejections : Bool;
		var defaultMaxListeners : Float;
	};
	@:optional
	var Http1ServerResponse : {
		var prototype : node.http.ServerResponse;
		@:overload(function(stream:ts.AnyOf3<global.nodejs.ReadableStream, global.nodejs.WritableStream, global.nodejs.ReadWriteStream>, callback:ts.AnyOf2<() -> Void, (err:global.nodejs.ErrnoException) -> Void>):() -> Void { })
		function finished(stream:ts.AnyOf3<global.nodejs.ReadableStream, global.nodejs.WritableStream, global.nodejs.ReadWriteStream>, options:node.stream.FinishedOptions, callback:ts.AnyOf2<() -> Void, (err:global.nodejs.ErrnoException) -> Void>):() -> Void;
		@:overload(function<A, T1, B>(source:A, transform1:T1, destination:B, ?callback:node.stream.PipelineCallback<B>):Dynamic { })
		@:overload(function<A, T1, T2, B>(source:A, transform1:T1, transform2:T2, destination:B, ?callback:node.stream.PipelineCallback<B>):Dynamic { })
		@:overload(function<A, T1, T2, T3, B>(source:A, transform1:T1, transform2:T2, transform3:T3, destination:B, ?callback:node.stream.PipelineCallback<B>):Dynamic { })
		@:overload(function<A, T1, T2, T3, T4, B>(source:A, transform1:T1, transform2:T2, transform3:T3, transform4:T4, destination:B, ?callback:node.stream.PipelineCallback<B>):Dynamic { })
		@:overload(function(streams:haxe.ds.ReadOnlyArray<ts.AnyOf3<global.nodejs.ReadableStream, global.nodejs.WritableStream, global.nodejs.ReadWriteStream>>, ?callback:(err:Null<global.nodejs.ErrnoException>) -> Void):global.nodejs.WritableStream { })
		@:overload(function(stream1:global.nodejs.ReadableStream, stream2:ts.AnyOf2<global.nodejs.WritableStream, global.nodejs.ReadWriteStream>, streams:haxe.extern.Rest<ts.AnyOf3<global.nodejs.WritableStream, global.nodejs.ReadWriteStream, (err:Null<global.nodejs.ErrnoException>) -> Void>>):global.nodejs.WritableStream { })
		function pipeline<A, B>(source:A, destination:B, ?callback:node.stream.PipelineCallback<B>):Dynamic;
		final promises : {
			function finished(stream:ts.AnyOf3<global.nodejs.ReadableStream, global.nodejs.WritableStream, global.nodejs.ReadWriteStream>, ?options:node.stream.FinishedOptions):js.lib.Promise<Void>;
			@:overload(function<A, T1, B>(source:A, transform1:T1, destination:B, ?options:node.stream.PipelineOptions):node.stream.PipelinePromise<B> { })
			@:overload(function<A, T1, T2, B>(source:A, transform1:T1, transform2:T2, destination:B, ?options:node.stream.PipelineOptions):node.stream.PipelinePromise<B> { })
			@:overload(function<A, T1, T2, T3, B>(source:A, transform1:T1, transform2:T2, transform3:T3, destination:B, ?options:node.stream.PipelineOptions):node.stream.PipelinePromise<B> { })
			@:overload(function<A, T1, T2, T3, T4, B>(source:A, transform1:T1, transform2:T2, transform3:T3, transform4:T4, destination:B, ?options:node.stream.PipelineOptions):node.stream.PipelinePromise<B> { })
			@:overload(function(streams:haxe.ds.ReadOnlyArray<ts.AnyOf3<global.nodejs.ReadableStream, global.nodejs.WritableStream, global.nodejs.ReadWriteStream>>, ?options:node.stream.PipelineOptions):js.lib.Promise<Void> { })
			@:overload(function(stream1:global.nodejs.ReadableStream, stream2:ts.AnyOf2<global.nodejs.WritableStream, global.nodejs.ReadWriteStream>, streams:haxe.extern.Rest<ts.AnyOf3<global.nodejs.WritableStream, global.nodejs.ReadWriteStream, node.stream.PipelineOptions>>):js.lib.Promise<Void> { })
			function pipeline<A, B>(source:A, destination:B, ?options:node.stream.PipelineOptions):node.stream.PipelinePromise<B>;
		};
		@:overload(function(emitter:SecureServerSessionOptions, event:String, ?options:SecureServerSessionOptions):js.lib.Promise<Array<Dynamic>> { })
		function once(emitter:SecureServerSessionOptions, event:ts.AnyOf2<String, js.lib.Symbol>, ?options:SecureServerSessionOptions):js.lib.Promise<Array<Dynamic>>;
		function on(emitter:global.nodejs.EventEmitter, event:String, ?options:SecureServerSessionOptions):js.lib.AsyncIterableIterator<Dynamic>;
		function listenerCount(emitter:global.nodejs.EventEmitter, event:ts.AnyOf2<String, js.lib.Symbol>):Float;
		/**
			Returns a list listener for a specific emitter event name.
		**/
		function getEventListener(emitter:ts.AnyOf2<global.nodejs.EventEmitter, SecureServerSessionOptions>, name:ts.AnyOf2<String, js.lib.Symbol>):Array<haxe.Constraints.Function>;
		/**
			This symbol shall be used to install a listener for only monitoring `'error'`
			events. Listeners installed using this symbol are called before the regular
			`'error'` listeners are called.
			
			Installing a listener using this symbol does not change the behavior once an
			`'error'` event is emitted, therefore the process will still crash if no
			regular `'error'` listener is installed.
		**/
		final errorMonitor : js.lib.Symbol;
		final captureRejectionSymbol : js.lib.Symbol;
		/**
			Sets or gets the default captureRejection value for all emitters.
		**/
		var captureRejections : Bool;
		var defaultMaxListeners : Float;
	};
	@:optional
	var Http2ServerRequest : {
		var prototype : Http2ServerRequest;
		/**
			A utility method for creating Readable Streams out of iterators.
		**/
		function from(iterable:ts.AnyOf2<Iterable<Dynamic>, js.lib.AsyncIterable<Dynamic>>, ?options:node.stream.ReadableOptions):node.stream.Readable;
		@:overload(function(stream:ts.AnyOf3<global.nodejs.ReadableStream, global.nodejs.WritableStream, global.nodejs.ReadWriteStream>, callback:ts.AnyOf2<() -> Void, (err:global.nodejs.ErrnoException) -> Void>):() -> Void { })
		function finished(stream:ts.AnyOf3<global.nodejs.ReadableStream, global.nodejs.WritableStream, global.nodejs.ReadWriteStream>, options:node.stream.FinishedOptions, callback:ts.AnyOf2<() -> Void, (err:global.nodejs.ErrnoException) -> Void>):() -> Void;
		@:overload(function<A, T1, B>(source:A, transform1:T1, destination:B, ?callback:node.stream.PipelineCallback<B>):Dynamic { })
		@:overload(function<A, T1, T2, B>(source:A, transform1:T1, transform2:T2, destination:B, ?callback:node.stream.PipelineCallback<B>):Dynamic { })
		@:overload(function<A, T1, T2, T3, B>(source:A, transform1:T1, transform2:T2, transform3:T3, destination:B, ?callback:node.stream.PipelineCallback<B>):Dynamic { })
		@:overload(function<A, T1, T2, T3, T4, B>(source:A, transform1:T1, transform2:T2, transform3:T3, transform4:T4, destination:B, ?callback:node.stream.PipelineCallback<B>):Dynamic { })
		@:overload(function(streams:haxe.ds.ReadOnlyArray<ts.AnyOf3<global.nodejs.ReadableStream, global.nodejs.WritableStream, global.nodejs.ReadWriteStream>>, ?callback:(err:Null<global.nodejs.ErrnoException>) -> Void):global.nodejs.WritableStream { })
		@:overload(function(stream1:global.nodejs.ReadableStream, stream2:ts.AnyOf2<global.nodejs.WritableStream, global.nodejs.ReadWriteStream>, streams:haxe.extern.Rest<ts.AnyOf3<global.nodejs.WritableStream, global.nodejs.ReadWriteStream, (err:Null<global.nodejs.ErrnoException>) -> Void>>):global.nodejs.WritableStream { })
		function pipeline<A, B>(source:A, destination:B, ?callback:node.stream.PipelineCallback<B>):Dynamic;
		final promises : {
			function finished(stream:ts.AnyOf3<global.nodejs.ReadableStream, global.nodejs.WritableStream, global.nodejs.ReadWriteStream>, ?options:node.stream.FinishedOptions):js.lib.Promise<Void>;
			@:overload(function<A, T1, B>(source:A, transform1:T1, destination:B, ?options:node.stream.PipelineOptions):node.stream.PipelinePromise<B> { })
			@:overload(function<A, T1, T2, B>(source:A, transform1:T1, transform2:T2, destination:B, ?options:node.stream.PipelineOptions):node.stream.PipelinePromise<B> { })
			@:overload(function<A, T1, T2, T3, B>(source:A, transform1:T1, transform2:T2, transform3:T3, destination:B, ?options:node.stream.PipelineOptions):node.stream.PipelinePromise<B> { })
			@:overload(function<A, T1, T2, T3, T4, B>(source:A, transform1:T1, transform2:T2, transform3:T3, transform4:T4, destination:B, ?options:node.stream.PipelineOptions):node.stream.PipelinePromise<B> { })
			@:overload(function(streams:haxe.ds.ReadOnlyArray<ts.AnyOf3<global.nodejs.ReadableStream, global.nodejs.WritableStream, global.nodejs.ReadWriteStream>>, ?options:node.stream.PipelineOptions):js.lib.Promise<Void> { })
			@:overload(function(stream1:global.nodejs.ReadableStream, stream2:ts.AnyOf2<global.nodejs.WritableStream, global.nodejs.ReadWriteStream>, streams:haxe.extern.Rest<ts.AnyOf3<global.nodejs.WritableStream, global.nodejs.ReadWriteStream, node.stream.PipelineOptions>>):js.lib.Promise<Void> { })
			function pipeline<A, B>(source:A, destination:B, ?options:node.stream.PipelineOptions):node.stream.PipelinePromise<B>;
		};
		@:overload(function(emitter:SecureServerSessionOptions, event:String, ?options:SecureServerSessionOptions):js.lib.Promise<Array<Dynamic>> { })
		function once(emitter:SecureServerSessionOptions, event:ts.AnyOf2<String, js.lib.Symbol>, ?options:SecureServerSessionOptions):js.lib.Promise<Array<Dynamic>>;
		function on(emitter:global.nodejs.EventEmitter, event:String, ?options:SecureServerSessionOptions):js.lib.AsyncIterableIterator<Dynamic>;
		function listenerCount(emitter:global.nodejs.EventEmitter, event:ts.AnyOf2<String, js.lib.Symbol>):Float;
		/**
			Returns a list listener for a specific emitter event name.
		**/
		function getEventListener(emitter:ts.AnyOf2<global.nodejs.EventEmitter, SecureServerSessionOptions>, name:ts.AnyOf2<String, js.lib.Symbol>):Array<haxe.Constraints.Function>;
		/**
			This symbol shall be used to install a listener for only monitoring `'error'`
			events. Listeners installed using this symbol are called before the regular
			`'error'` listeners are called.
			
			Installing a listener using this symbol does not change the behavior once an
			`'error'` event is emitted, therefore the process will still crash if no
			regular `'error'` listener is installed.
		**/
		final errorMonitor : js.lib.Symbol;
		final captureRejectionSymbol : js.lib.Symbol;
		/**
			Sets or gets the default captureRejection value for all emitters.
		**/
		var captureRejections : Bool;
		var defaultMaxListeners : Float;
	};
	@:optional
	var Http2ServerResponse : {
		var prototype : Http2ServerResponse;
		@:overload(function(stream:ts.AnyOf3<global.nodejs.ReadableStream, global.nodejs.WritableStream, global.nodejs.ReadWriteStream>, callback:ts.AnyOf2<() -> Void, (err:global.nodejs.ErrnoException) -> Void>):() -> Void { })
		function finished(stream:ts.AnyOf3<global.nodejs.ReadableStream, global.nodejs.WritableStream, global.nodejs.ReadWriteStream>, options:node.stream.FinishedOptions, callback:ts.AnyOf2<() -> Void, (err:global.nodejs.ErrnoException) -> Void>):() -> Void;
		@:overload(function<A, T1, B>(source:A, transform1:T1, destination:B, ?callback:node.stream.PipelineCallback<B>):Dynamic { })
		@:overload(function<A, T1, T2, B>(source:A, transform1:T1, transform2:T2, destination:B, ?callback:node.stream.PipelineCallback<B>):Dynamic { })
		@:overload(function<A, T1, T2, T3, B>(source:A, transform1:T1, transform2:T2, transform3:T3, destination:B, ?callback:node.stream.PipelineCallback<B>):Dynamic { })
		@:overload(function<A, T1, T2, T3, T4, B>(source:A, transform1:T1, transform2:T2, transform3:T3, transform4:T4, destination:B, ?callback:node.stream.PipelineCallback<B>):Dynamic { })
		@:overload(function(streams:haxe.ds.ReadOnlyArray<ts.AnyOf3<global.nodejs.ReadableStream, global.nodejs.WritableStream, global.nodejs.ReadWriteStream>>, ?callback:(err:Null<global.nodejs.ErrnoException>) -> Void):global.nodejs.WritableStream { })
		@:overload(function(stream1:global.nodejs.ReadableStream, stream2:ts.AnyOf2<global.nodejs.WritableStream, global.nodejs.ReadWriteStream>, streams:haxe.extern.Rest<ts.AnyOf3<global.nodejs.WritableStream, global.nodejs.ReadWriteStream, (err:Null<global.nodejs.ErrnoException>) -> Void>>):global.nodejs.WritableStream { })
		function pipeline<A, B>(source:A, destination:B, ?callback:node.stream.PipelineCallback<B>):Dynamic;
		final promises : {
			function finished(stream:ts.AnyOf3<global.nodejs.ReadableStream, global.nodejs.WritableStream, global.nodejs.ReadWriteStream>, ?options:node.stream.FinishedOptions):js.lib.Promise<Void>;
			@:overload(function<A, T1, B>(source:A, transform1:T1, destination:B, ?options:node.stream.PipelineOptions):node.stream.PipelinePromise<B> { })
			@:overload(function<A, T1, T2, B>(source:A, transform1:T1, transform2:T2, destination:B, ?options:node.stream.PipelineOptions):node.stream.PipelinePromise<B> { })
			@:overload(function<A, T1, T2, T3, B>(source:A, transform1:T1, transform2:T2, transform3:T3, destination:B, ?options:node.stream.PipelineOptions):node.stream.PipelinePromise<B> { })
			@:overload(function<A, T1, T2, T3, T4, B>(source:A, transform1:T1, transform2:T2, transform3:T3, transform4:T4, destination:B, ?options:node.stream.PipelineOptions):node.stream.PipelinePromise<B> { })
			@:overload(function(streams:haxe.ds.ReadOnlyArray<ts.AnyOf3<global.nodejs.ReadableStream, global.nodejs.WritableStream, global.nodejs.ReadWriteStream>>, ?options:node.stream.PipelineOptions):js.lib.Promise<Void> { })
			@:overload(function(stream1:global.nodejs.ReadableStream, stream2:ts.AnyOf2<global.nodejs.WritableStream, global.nodejs.ReadWriteStream>, streams:haxe.extern.Rest<ts.AnyOf3<global.nodejs.WritableStream, global.nodejs.ReadWriteStream, node.stream.PipelineOptions>>):js.lib.Promise<Void> { })
			function pipeline<A, B>(source:A, destination:B, ?options:node.stream.PipelineOptions):node.stream.PipelinePromise<B>;
		};
		@:overload(function(emitter:SecureServerSessionOptions, event:String, ?options:SecureServerSessionOptions):js.lib.Promise<Array<Dynamic>> { })
		function once(emitter:SecureServerSessionOptions, event:ts.AnyOf2<String, js.lib.Symbol>, ?options:SecureServerSessionOptions):js.lib.Promise<Array<Dynamic>>;
		function on(emitter:global.nodejs.EventEmitter, event:String, ?options:SecureServerSessionOptions):js.lib.AsyncIterableIterator<Dynamic>;
		function listenerCount(emitter:global.nodejs.EventEmitter, event:ts.AnyOf2<String, js.lib.Symbol>):Float;
		/**
			Returns a list listener for a specific emitter event name.
		**/
		function getEventListener(emitter:ts.AnyOf2<global.nodejs.EventEmitter, SecureServerSessionOptions>, name:ts.AnyOf2<String, js.lib.Symbol>):Array<haxe.Constraints.Function>;
		/**
			This symbol shall be used to install a listener for only monitoring `'error'`
			events. Listeners installed using this symbol are called before the regular
			`'error'` listeners are called.
			
			Installing a listener using this symbol does not change the behavior once an
			`'error'` event is emitted, therefore the process will still crash if no
			regular `'error'` listener is installed.
		**/
		final errorMonitor : js.lib.Symbol;
		final captureRejectionSymbol : js.lib.Symbol;
		/**
			Sets or gets the default captureRejection value for all emitters.
		**/
		var captureRejections : Bool;
		var defaultMaxListeners : Float;
	};
	@:optional
	var maxDeflateDynamicTableSize : Float;
	@:optional
	var maxSessionMemory : Float;
	@:optional
	var maxHeaderListPairs : Float;
	@:optional
	var maxOutstandingPings : Float;
	@:optional
	var maxSendHeaderBlockLength : Float;
	@:optional
	var paddingStrategy : Float;
	@:optional
	var peerMaxConcurrentStreams : Float;
	@:optional
	var settings : Settings;
	@:optional
	function selectPadding(frameLen:Float, maxFrameLen:Float):Float;
	@:optional
	function createConnection(authority:node.url.URL, option:SessionOptions):node.stream.Duplex;
	/**
		Abort the connection if the SSL/TLS handshake does not finish in the
		specified number of milliseconds. A 'tlsClientError' is emitted on
		the tls.Server object whenever a handshake times out. Default:
		120000 (120 seconds).
	**/
	@:optional
	var handshakeTimeout : Float;
	/**
		The number of seconds after which a TLS session created by the
		server will no longer be resumable. See Session Resumption for more
		information. Default: 300.
	**/
	@:optional
	var sessionTimeout : Float;
	/**
		48-bytes of cryptographically strong pseudo-random data.
	**/
	@:optional
	var ticketKeys : global.Buffer;
	@:optional
	function pskCallback(socket:node.tls.TLSSocket, identity:String):Null<global.nodejs.ArrayBufferView>;
	/**
		hint to send to a client to help
		with selecting the identity during TLS-PSK negotiation. Will be ignored
		in TLS 1.3. Upon failing to set pskIdentityHint `tlsClientError` will be
		emitted with `ERR_TLS_PSK_SET_IDENTIY_HINT_FAILED` code.
	**/
	@:optional
	var pskIdentityHint : String;
	/**
		Optionally override the trusted CA certificates. Default is to trust
		the well-known CAs curated by Mozilla. Mozilla's CAs are completely
		replaced when CAs are explicitly specified using this option.
	**/
	@:optional
	var ca : ts.AnyOf3<String, global.Buffer, Array<ts.AnyOf2<String, global.Buffer>>>;
	/**
		Cert chains in PEM format. One cert chain should be provided per
		private key. Each cert chain should consist of the PEM formatted
		certificate for a provided private key, followed by the PEM
		formatted intermediate certificates (if any), in order, and not
		including the root CA (the root CA must be pre-known to the peer,
		see ca). When providing multiple cert chains, they do not have to
		be in the same order as their private keys in key. If the
		intermediate certificates are not provided, the peer will not be
		able to validate the certificate, and the handshake will fail.
	**/
	@:optional
	var cert : ts.AnyOf3<String, global.Buffer, Array<ts.AnyOf2<String, global.Buffer>>>;
	/**
		Colon-separated list of supported signature algorithms. The list
		can contain digest algorithms (SHA256, MD5 etc.), public key
		algorithms (RSA-PSS, ECDSA etc.), combination of both (e.g
		'RSA+SHA384') or TLS v1.3 scheme names (e.g. rsa_pss_pss_sha512).
	**/
	@:optional
	var sigalgs : String;
	/**
		Cipher suite specification, replacing the default. For more
		information, see modifying the default cipher suite. Permitted
		ciphers can be obtained via tls.getCiphers(). Cipher names must be
		uppercased in order for OpenSSL to accept them.
	**/
	@:optional
	var ciphers : String;
	/**
		Name of an OpenSSL engine which can provide the client certificate.
	**/
	@:optional
	var clientCertEngine : String;
	/**
		PEM formatted CRLs (Certificate Revocation Lists).
	**/
	@:optional
	var crl : ts.AnyOf3<String, global.Buffer, Array<ts.AnyOf2<String, global.Buffer>>>;
	/**
		Diffie Hellman parameters, required for Perfect Forward Secrecy. Use
		openssl dhparam to create the parameters. The key length must be
		greater than or equal to 1024 bits or else an error will be thrown.
		Although 1024 bits is permissible, use 2048 bits or larger for
		stronger security. If omitted or invalid, the parameters are
		silently discarded and DHE ciphers will not be available.
	**/
	@:optional
	var dhparam : ts.AnyOf2<String, global.Buffer>;
	/**
		A string describing a named curve or a colon separated list of curve
		NIDs or names, for example P-521:P-384:P-256, to use for ECDH key
		agreement. Set to auto to select the curve automatically. Use
		crypto.getCurves() to obtain a list of available curve names. On
		recent releases, openssl ecparam -list_curves will also display the
		name and description of each available elliptic curve. Default:
		tls.DEFAULT_ECDH_CURVE.
	**/
	@:optional
	var ecdhCurve : String;
	/**
		Attempt to use the server's cipher suite preferences instead of the
		client's. When true, causes SSL_OP_CIPHER_SERVER_PREFERENCE to be
		set in secureOptions
	**/
	@:optional
	var honorCipherOrder : Bool;
	/**
		Private keys in PEM format. PEM allows the option of private keys
		being encrypted. Encrypted keys will be decrypted with
		options.passphrase. Multiple keys using different algorithms can be
		provided either as an array of unencrypted key strings or buffers,
		or an array of objects in the form {pem: <string|buffer>[,
		passphrase: <string>]}. The object form can only occur in an array.
		object.passphrase is optional. Encrypted keys will be decrypted with
		object.passphrase if provided, or options.passphrase if it is not.
	**/
	@:optional
	var key : ts.AnyOf3<String, global.Buffer, Array<ts.AnyOf2<global.Buffer, node.tls.KeyObject>>>;
	/**
		Name of an OpenSSL engine to get private key from. Should be used
		together with privateKeyIdentifier.
	**/
	@:optional
	var privateKeyEngine : String;
	/**
		Identifier of a private key managed by an OpenSSL engine. Should be
		used together with privateKeyEngine. Should not be set together with
		key, because both options define a private key in different ways.
	**/
	@:optional
	var privateKeyIdentifier : String;
	/**
		Optionally set the maximum TLS version to allow. One
		of `'TLSv1.3'`, `'TLSv1.2'`, `'TLSv1.1'`, or `'TLSv1'`. Cannot be specified along with the
		`secureProtocol` option, use one or the other.
		**Default:** `'TLSv1.3'`, unless changed using CLI options. Using
		`--tls-max-v1.2` sets the default to `'TLSv1.2'`. Using `--tls-max-v1.3` sets the default to
		`'TLSv1.3'`. If multiple of the options are provided, the highest maximum is used.
	**/
	@:optional
	var maxVersion : node.tls.SecureVersion;
	/**
		Optionally set the minimum TLS version to allow. One
		of `'TLSv1.3'`, `'TLSv1.2'`, `'TLSv1.1'`, or `'TLSv1'`. Cannot be specified along with the
		`secureProtocol` option, use one or the other.  It is not recommended to use
		less than TLSv1.2, but it may be required for interoperability.
		**Default:** `'TLSv1.2'`, unless changed using CLI options. Using
		`--tls-v1.0` sets the default to `'TLSv1'`. Using `--tls-v1.1` sets the default to
		`'TLSv1.1'`. Using `--tls-min-v1.3` sets the default to
		'TLSv1.3'. If multiple of the options are provided, the lowest minimum is used.
	**/
	@:optional
	var minVersion : node.tls.SecureVersion;
	/**
		Shared passphrase used for a single private key and/or a PFX.
	**/
	@:optional
	var passphrase : String;
	/**
		PFX or PKCS12 encoded private key and certificate chain. pfx is an
		alternative to providing key and cert individually. PFX is usually
		encrypted, if it is, passphrase will be used to decrypt it. Multiple
		PFX can be provided either as an array of unencrypted PFX buffers,
		or an array of objects in the form {buf: <string|buffer>[,
		passphrase: <string>]}. The object form can only occur in an array.
		object.passphrase is optional. Encrypted PFX will be decrypted with
		object.passphrase if provided, or options.passphrase if it is not.
	**/
	@:optional
	var pfx : ts.AnyOf3<String, global.Buffer, Array<ts.AnyOf3<String, global.Buffer, node.tls.PxfObject>>>;
	/**
		Optionally affect the OpenSSL protocol behavior, which is not
		usually necessary. This should be used carefully if at all! Value is
		a numeric bitmask of the SSL_OP_* options from OpenSSL Options
	**/
	@:optional
	var secureOptions : Float;
	/**
		Legacy mechanism to select the TLS protocol version to use, it does
		not support independent control of the minimum and maximum version,
		and does not support limiting the protocol to TLSv1.3. Use
		minVersion and maxVersion instead. The possible values are listed as
		SSL_METHODS, use the function names as strings. For example, use
		'TLSv1_1_method' to force TLS version 1.1, or 'TLS_method' to allow
		any TLS protocol version up to TLSv1.3. It is not recommended to use
		TLS versions less than 1.2, but it may be required for
		interoperability. Default: none, see minVersion.
	**/
	@:optional
	var secureProtocol : String;
	/**
		Opaque identifier used by servers to ensure session state is not
		shared between applications. Unused by clients.
	**/
	@:optional
	var sessionIdContext : String;
	/**
		An optional TLS context object from tls.createSecureContext()
	**/
	@:optional
	var secureContext : node.tls.SecureContext;
	/**
		When enabled, TLS packet trace information is written to `stderr`. This can be
		used to debug TLS connection problems.
	**/
	@:optional
	var enableTrace : Bool;
	/**
		If true the server will request a certificate from clients that
		connect and attempt to verify that certificate. Defaults to
		false.
	**/
	@:optional
	var requestCert : Bool;
	/**
		An array of strings or a Buffer naming possible ALPN protocols.
		(Protocols should be ordered by their priority.)
	**/
	@:optional
	var ALPNProtocols : ts.AnyOf3<Array<String>, js.lib.Uint8Array, Array<js.lib.Uint8Array>>;
	/**
		SNICallback(servername, cb) <Function> A function that will be
		called if the client supports SNI TLS extension. Two arguments
		will be passed when called: servername and cb. SNICallback should
		invoke cb(null, ctx), where ctx is a SecureContext instance.
		(tls.createSecureContext(...) can be used to get a proper
		SecureContext.) If SNICallback wasn't provided the default callback
		with high-level API will be used (see below).
	**/
	@:optional
	dynamic function SNICallback(servername:String, cb:(err:Null<js.lib.Error>, ctx:node.tls.SecureContext) -> Void):Void;
	/**
		If true the server will reject any connection which is not
		authorized with the list of supplied CAs. This option only has an
		effect if requestCert is true.
	**/
	@:optional
	var rejectUnauthorized : Bool;
	/**
		Indicates whether half-opened TCP connections are allowed.
	**/
	@:optional
	var allowHalfOpen : Bool;
	/**
		Indicates whether the socket should be paused on incoming connections.
	**/
	@:optional
	var pauseOnConnect : Bool;
};