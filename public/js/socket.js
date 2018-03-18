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

const socket      = io();
const $messages   = $('#messages');
const $turnOffLed = $('#turnOffLed');
const $turnOnLed  = $('#turnOnLed');


$(".row-1"+ " .col-1").val();

// Socket.io listeners
socket.on('message', (msg) => {
  let location = msg;

  if (location && location !== undefined) {
    let char = $(".row-1.col-0").html().replace(/\s/g,'')
    $("#inputText").val($("#inputText").val() + char);
    awesomplete.evaluate()
  }

});


$("#emergencyBtn").click((function() {
  console.log('sanity');
  // let char = document.getElementById("row-1col-0").getAttribute("data-value"); 
  let char = $(".row-1.col-0").html().replace(/\s/g,'')
  console.log(char);
  // socket.emit('sendmail', $("#emergencyEmail").val());
}))

// Functions
function sendData(data) {
  socket.send(data);
}
