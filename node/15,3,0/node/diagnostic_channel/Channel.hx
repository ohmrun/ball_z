package node.diagnostic_channel;

/**
	Simple diagnostic channel that allows
**/
@:jsRequire("diagnostic_channel", "Channel") extern class Channel {
	private function new(name:String);
	final name : String;
	final hashSubscribers : Bool;
	/**
		Add a listener to the message channel.
	**/
	function subscribe(listener:ChannelListener):Void;
	/**
		Removes a previously registered listener.
	**/
	function unsubscribe(listener:ChannelListener):Void;
	static var prototype : Channel;
}