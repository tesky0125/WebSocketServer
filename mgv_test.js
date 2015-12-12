
//var url = 'wss://a1200-pc.s3graphics.com:2000/mgv?user=rylan&password=5fa285e1bebe0a6623e33afc04a1fbd5';
var url = 'wss://localhost:3000/mgv_test';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var WebSocket = require('ws');
var ws = new WebSocket(url);

ws.on('open', function() {
    console.log('WebSocket Client Connected');

    function sendNumber() {
        if (ws.readyState === ws.OPEN) {
            var number = Math.round(Math.random() * 0xFFFFFF);
            ws.send(number.toString());
            setTimeout(sendNumber, 1000);
        }
    }
    sendNumber();
});
ws.on('message', function(message) {
    console.log("Received: '" + message + "'");
});
