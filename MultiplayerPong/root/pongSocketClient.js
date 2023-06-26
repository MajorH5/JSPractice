export const PongSocketClient = (function () {
    return class PongSocketClient {
        constructor (address) {
            this.address = address;
            this.socket = new WebSocket(address);
            this.isOpen = false;
            this.events = {};

            this.socket.onopen = this._onOpen.bind(this);
            this.socket.onmessage = this._onMessage.bind(this);
            this.socket.onclose = this._onClose.bind(this);
        }

        on (event, callback) {
            // this function binds the given callback lambda to
            // the given event name

            /*
                {
                    "onBallMoved": [() => {}, () => {}],
                    "onPlayerMoved": [() => {}, function () {}]
                }
            */ 

            // if the event is not in the events object, add it
            if(this.events[event] === undefined){
                this.events[event] = [];
            }

            this.events[event].push(callback);
        }

        emit (event, data) {
            // this function calls all the callbacks bound to the given event

            const callbacks = this.events[event];

            for(let index = 0; index < callbacks.length;index++){
                callbacks[index](data);
            }
        }
        
        send (data) {

        }

        _onOpen () {
            console.log("client is open");
            this.isOpen = true;
        }

        _onMessage (data) {
            console.log("Data received: ", data);
        }

        _onClose () {
            console.log("client is closed");
            this.isOpen=false;
        }
    }
})();