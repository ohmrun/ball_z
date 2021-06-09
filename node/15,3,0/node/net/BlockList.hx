package node.net;

@:jsRequire("net", "BlockList") extern class BlockList {
	function new();
	/**
		Adds a rule to block the given IP address.
	**/
	function addAddress(address:String, ?type:IPVersion):Void;
	/**
		Adds a rule to block a range of IP addresses from start (inclusive) to end (inclusive).
	**/
	function addRange(start:String, end:String, ?type:IPVersion):Void;
	/**
		Adds a rule to block a range of IP addresses specified as a subnet mask.
	**/
	function addSubnet(net:String, prefix:Float, ?type:IPVersion):Void;
	/**
		Returns `true` if the given IP address matches any of the rules added to the `BlockList`.
	**/
	function check(address:String, ?type:IPVersion):Bool;
	static var prototype : BlockList;
}