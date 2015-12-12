// create a socket 
var Socket = require('primus.io').createSocket({ transformer: 'websockets' });
 
// get socket instance 
var socket = new Socket('ws://localhost:3000');//http:ok
 
socket.on('open', function () {
 
  // Send request to join the news room 
  socket.send('hi', 'hello world');
 
  // listen to hello events 
  socket.on('hello', function (msg) {
 
    console.log(msg); //-> hello from the server 
 
  });
 
});