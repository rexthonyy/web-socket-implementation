class Sockit {
	constructor(socketUrl){
		this.socket = new WebSocket(socketUrl);
	}

	onOpen(callback){
		this.socket.onopen = (e) => {
			callback(e);
		};
	}

	onClose(callback){
		this.socket.onclose = (e) => {
			callback(e);
		};
	}

	onError(callback){
		this.socket.onerror = (e) => {
			callback(e);
		};
	}

	receiveMessage(callback){
		this.socket.onmessage = (e) => {
			callback(JSON.parse(e.data));
		};
	}

	sendMessage(data){
		this.socket.send(JSON.stringify(data));
	}
}