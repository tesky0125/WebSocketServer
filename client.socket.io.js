
// var url = 'wss://a1200-pc.s3graphics.com:2000/mgv?user=rylan&password=5fa285e1bebe0a6623e33afc04a1fbd5';
var url = "http://localhost:3000";

var socket = require('socket.io-client')(url);
socket.on('open',function(){
	console.log('opened!');
});
socket.on('connect', function(){
	console.log('connected!');
    socket.emit("message","This is my message");

    socket.on('message',function(data){
        console.log("We got a message: ",data);
    });
});