/**
 * Created by ThinkPad on 2015/4/24.
 */
var WebSocket = require('ws');
ws = new WebSocket('ws://localhost:3000/');
ws.on('open', function() {
    ws.send('Client Connected');
});
ws.on('message', function(message) {
    console.log('Client received: %s', message);
});