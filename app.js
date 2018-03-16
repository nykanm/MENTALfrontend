/* Copyright MENTAL Front End Team 2018 */
/* All Rights Reserved */
/* Made with love <3 */

/* DEPENDENCIES */
var express = require('express');
var path = require('path');

/* CREATE SERVER */
var app = express(); // Creates the server

/* DIRECTORIES */
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public'))); //Put public files (JS, CSS, images) in here

/* START SERVER */
app.listen(app.get('port'), () => {
	console.log('Listening on port 3000...')
});