package content_disposition;

/**
	Class for parsed Content-Disposition header for v8 optimization
**/
typedef ContentDisposition = {
	/**
		The disposition type (always lower case)
	**/
	var type : String;
	/**
		An object of the parameters in the disposition
		(name of parameter always lower case and extended versions replace non-extended versions)
	**/
	var parameters : Dynamic;
};