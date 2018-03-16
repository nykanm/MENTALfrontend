/* Copyright MENTAL Front End Team 2018 */
/* All Rights Reserved */
/* Made with love <3 */

/* SET UP SERVER */
var express = require('express'); // Creates the server
var app = express();
var server = require('http').createServer(app); // Ensures it's HTTP
var path = require('path'); // Directory/path handling
var io = require('socket.io')(server); // Sets up a socket
var osc = require('osc.io');
osc(io);

/* DIRECTORIES */
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public'))); //Put public files (JS, CSS, images) in here

/* SOCKET */
io.on('connection', (socket) => {
	console.log("new connection on socket");
	//socket.emit('news', { hello: 'world' });
	// socket.on('my other event', function (data) {
	// 	console.log(data);
	// });
	socket.on('message', (msg) => {
		console.log("message: " + msg);
	})

	socket.on('disconnect', function(){
		console.log('a socket connection terminated');
	});
})

/* START SERVER */
server.listen(app.get('port'), () => {
	console.log('Listening on port 3000...')
});