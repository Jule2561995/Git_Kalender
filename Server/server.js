const express = require('express'); //Modulimport
const app = express(); //Konstruktor
const port = 3000;
const http = require ('http').createServer(app);
const io = require ('socket.io'); //Modulimport
const io_server = io(http);
const hardware = require ('./hardware.js') //Modulimport aus hardware.js

app.get('/', function (req, res) { // Callback für get-Anfrage; "hol mir"
  res.sendFile(__dirname+'/index.html')
});

io_server.on('connection',function(socket) {
    console.log("connected")
    socket.on('eintrag', function(firstname, birthday) { //interface.vue
    console.log("Testnachricht: "+firstname +" "+ birthday)
    hardware.allesAbrufen(birthday);
  })
})

http.listen(3000, function () { // Server starten
  console.log('Example app listening on port 3000!')
});
