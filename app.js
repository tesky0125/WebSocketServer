var app = require('express')()
  , httpServer = require('http').createServer(app)
  , io = require('socket.io').listen(httpServer);

var server = httpServer.listen(3000,function(){
	console.log('start at address:'+server.address().address+',port:' + server.address().port);
});

io.sockets.on('connection', function (socket) {
  console.log('a user connected');

  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/mgv_test', function (req, res) {
  res.sendFile(__dirname + '/mgv_test.html');
});