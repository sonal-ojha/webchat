var express = require('express');
var socket = require('socket.io');

var app = express();

// Static files
app.use(express.static('public'))

var server = app.listen(4000, () => {
    console.log('Listening on Port 4000')
});

// Server Connection: Socket setup
var io = socket(server);

// Trigger Connection from Client
io.on('connection', function(socket) {
    // console.log('Made Socket Connection!!', socket.id);
   socket.on('chat', function(data) {
        // Send data to all the other clients coonected to this server
       io.sockets.emit('chat', data);
   })
})
