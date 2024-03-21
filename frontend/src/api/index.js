// api/index.js
var socket = new WebSocket('ws://localhost:9000/ws');

let connect = (cb) => {
    console.log("connecting")

    socket.onopen = () => {
        console.log("successfully connected")
    }

    socket.onmessage = (msg) => {
        console.log("Message from websocket: ",  msg);
        cb(msg);
    }

    socket.onclose = (event) => {
        console.log("Socket closed: ", event);
    }

    socket.onerror = (event) => {
        console.log("Socket error: ", event);
    }
}

let sendMsg = (msg) => {
    console.log("sending msg: ", msg);
    socket.send(msg);
}

export {connect, sendMsg};