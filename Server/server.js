const express = require('express'); //Modulimport durch Variabelbenennung
const app = express(); //Konstruktor
const port = 3000;
const http = require ('http').createServer(app);
const io = require ('socket.io');
const io_server = io(http);
const calc = require ('./calculation.js')

app.get('/', function (req, res) { // Callback für get-Anfrage; "hol mir"
  res.sendFile(__dirname+'/index.html')
});

io_server.on('connection',function(socket) {
    console.log("connected")
    socket.on('zahlRein', function(payload, payload2) {
    console.log("Testnachricht: "+payload)
      let sum = calc.zahl(payload, payload2);
      socket.emit('zahlRaus', sum);
  })
})

http.listen(3000, function () { // Server starten
  console.log('Example app listening on port 3000!')
});
