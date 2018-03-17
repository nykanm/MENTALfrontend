/* Copyright MENTAL Front End Team 2018 */
/* All Rights Reserved */
/* Made with love <3 */

require('dotenv').config()

/* SET UP SERVER */
const express = require('express'); // Creates the server
const app     = express();
const server  = require('http').createServer(app); // Ensures it's HTTP
const path    = require('path'); // Directory/path handling
const io      = require('socket.io')(server); // Sets up a socket
const osc     = require('osc.io');
const mail    = require('nodemailer');


const transporter = mail.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

const mailOptions = {
  from: 'mcgillneurotech@gmail.com',
  to: 'jessica.quynh.tran@gmail.com',
  subject: 'Sent from MENTAL P300 user',
  text: 'Ping from P300 machine'
};

osc(io);

/* DIRECTORIES */
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public'))); //Put public files (JS, CSS, images) in here

/* SOCKET */
io.on('connection', (socket) => {
	console.log("new connection on socket");
	
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
