/* OSC CODE (STABLE BUT NOT FUNCTIONAL */
// var server = io.connect('http://localhost/osc/servers/8000')
// var client = io.connect('http://localhost/osc/clients/8000')
// server.on('message', function(message) {
//     console.log(message);
// });

// setInterval(() => {
//     client.emit('message', "connected to socket");
// }, 1000);

/* GENERIC SOCKET CODE */
//var socket = io();

//setInterval(() => {
//    socket.emit('message', "connected to socket");
//}, 5000);

var socket = io("http://localhost:3000");

socket.on('message', (msg) => {
   var char = $(".row-"+msg[0]+" .col-"+msg[1]).val();
   $("#inputText").val($("#inputText").val() + char);
});

setInterval(function() {
 socket.emit('message', [0, 0]);
}, 1000);