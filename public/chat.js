// Create a Client Socket Connection
var socket = io.connect('http://localhost:4000');

var to = document.getElementById('handle');
var message = document.getElementById('message');
var btnSendText = document.getElementById('send');
var output = document.getElementById('output');

// Emit Event on Click of Send Button
btnSendText.addEventListener('click', function() {
    // Create a Socket and emit an event with data
    socket.emit('chat', {
        message: message.value,
        to: to.value,
    })
})

// Listen for Even triggered from Server
socket.on('chat', function(data) {
    output.innerHTML = '<p><strong>' + data.to + '</strong>' + ':' + data.message + '</p>';
})