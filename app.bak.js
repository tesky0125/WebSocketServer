var app = require('express')();
var httpServer = require('http').Server(app);
var io = require('socket.io')(httpServer);

app.set('port', process.env.PORT || 3000);

var server = httpServer.listen(app.get('port'), function() {
  console.log('start at port:' + server.address().port);
});

io.on('connection', function(socket){
  console.log('a user connected');
    
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);

    io.emit('chat message', msg);
  });

});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.bak.html');
});