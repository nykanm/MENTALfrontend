require('dotenv').config()

const exp  = require('express')
const app  = require('express')();
const http = require('http').Server(app);
const port = 3000;
const path = require('path');
const mail = require('nodemailer');

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

app.use(exp.static(__dirname + '/'));

app.get('/sendemail', (req, res) => {
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

http.listen(port, () => {
  console.log(`listening on *:${port}`);
});
