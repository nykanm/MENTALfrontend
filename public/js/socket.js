var server = io.connect('http://localhost/osc/servers/8000')
var client = io.connect('http://localhost/osc/clients/8000')
server.on('message', function(message) {
    console.log(message);
});

setInterval(() => {
    client.emit('message', ['/osc/test', 200]);
}, 500);