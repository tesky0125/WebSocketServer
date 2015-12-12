'use strict';

var https = require('https')
    , fs = require('fs')
    , app = require('express')()
    , WebSocketServer = require('ws').Server
    , ws_server
    , sslOptions
    , server
    , port = 3000
    ;

sslOptions = {
    key: fs.readFileSync('./ssl/server.key')
    , cert: fs.readFileSync('./ssl/server.crt')
};

app.use('/mgv_test', function (req, res) {
    console.log("HTTPS Request received.")
    res.sendFile(__dirname + '/mgv_test.html');
});

app.use('/', function (req, res) {
    console.log("HTTPS Request received.")
    res.end('<html><body><h1>Hello World!Please use     WebSocket to connect!</h1></body></html>');
});

server = https.createServer(sslOptions, app).listen(port, function(){
    console.log('Listening on https://' + server.address().address + ':' + server.address().port);
});

ws_server = new WebSocketServer( {server: server});

ws_server.on('connection', function(ws) {
    console.log('websocket connection!');
    ws.send('Client Connected');

    ws.on('message', function(message) {
        console.log('message!');
        console.log('Client received: %s', message);
        ws.send(message);
    });
});

ws_server.on('close', function(ws) {
    console.log("closed connection: "+ws.id);
});