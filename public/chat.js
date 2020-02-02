// Create a Client Socket Connection
var socket = io.connect('http://localhost:4000');

var to = document.getElementById('handle');
var message = document.getElementById('message');
var btnSendText = document.getElementById('send');
var output = document.getElementById('output');
var typingFeedback = document.getElementById('feedback');

// Emit Event on Click of Send Button
btnSendText.addEventListener('click', function() {
    // Create a Socket and emit an event with data
    socket.emit('chat', {
        message: message.value,
        to: to.value,
    })
})

// Emit event as: X user is typing
message.addEventListener('keypress', function() {
    console.log('on key press!!');
    socket.emit('typing', {
        user: to.value,
    })
})

// Listen for Events triggered from Server
socket.on('chat', function(data) {
    // typingFeedback.innerHTML = '';
    output.innerHTML = '<p><strong>' + data.to + '</strong>' + ':' + data.message + '</p>';
})

socket.on('typing', function(data) {
    console.log('data is Typing...=', data);
    typingFeedback.innerHTML = '<p><em>' + data.user + ' is typing...</em></P>';
})