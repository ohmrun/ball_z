package http_errors;

typedef UnknownError = ts.AnyOf4<String, Float, js.lib.Error, { }>;