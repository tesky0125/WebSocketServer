var io = require('socket.io').listen(3000);

io.sockets.on("connection",function(socket){
    // Display a connected message
    console.log("User-Client Connected!");

    // Lets force this connection into the lobby room.
    // socket.join('lobby');

    // Some roster/user management logic to track them
    // This would be upto you to add :)

    // When we receive a message...
    socket.on("message",function(data){
        // We need to just forward this message to our other guy
        // We are literally just forwarding the whole data packet
        // other_server.emit("message",data);
        socket.emit("message",data);
    });

    socket.on("disconnect",function(data){
        // We need to notify Server 2 that the client has disconnected
        // other_server.emit("message","UD,"+socket.id);

        // Other logic you may or may not want
        // Your other disconnect code here
        console.log(data);
    });
});