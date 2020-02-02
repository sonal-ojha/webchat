var express = require('express');

var app = express();

// Static files
app.use(express.static('public'))

var server = app.listen(4000, () => {
    console.log('Listening on Port 4000')
});

