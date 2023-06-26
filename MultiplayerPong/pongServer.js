const express = require('express');
const ws = require('ws');

// whip up simple http server to serve static files
const app = express();
app.use(express.static('root'));
app.listen(3000, () => {
    console.log('Server listening on port 3000'); 
});

// create websocket server
const wss = new ws.Server({
    port: 3001
});
const clients = [];

// handle incoming websocket connections
wss.on("connection", (client, request) => {
    console.log("A client has connected to the server!");
    console.log("Client IP: " + request.connection.remoteAddress);
    
    // store client in global list
    clients.push(client);
    
    // handle incoming messages
    client.on("message", (data, isBinary)=>{
        console.log("Recieved message from client: ", data.toString());
    });

    // handle client disconnect
    client.on("close",()=>{
        console.log("client disconnected from server");
        
        clients.splice(clients.indexOf(client), 1);
    });
});

wss.on("listening", () => {
    console.log("Websocket server listening on port 3001");
});


