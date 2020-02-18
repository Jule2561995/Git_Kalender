function allesAbrufen(birthday){

let stringBirthday = String(birthday);
console.log(stringBirthday);
const pixel = require("node-pixel"); //libary
const firmata = require('firmata');  //libary
//const data = require ('./data.js');

let board = new firmata.Board('/dev/tty.usbmodem14201',function(){ //USB-Port links auf meinem MacBook Air

    strip = new pixel.Strip({
        strips: [ {pin: 6, length: 37}, ],
        firmata: board,
        controller: "FIRMATA",
    });

    function remap(pixelNum) {
      let mappedPixel = pixelNum;
      const pixelsPerRow = 7;
      let currentRow = Math.ceil((pixelNum+1)/pixelsPerRow);
      let rowPixelNbr = pixelNum % pixelsPerRow;
      let isOddRow = currentRow % 2 != 0;

      if(isOddRow) mappedPixel = ((currentRow-1)*pixelsPerRow) + (pixelsPerRow - (rowPixelNbr+1));

      return mappedPixel;
    }

    function swipeMonth(month, year){
      let firstOfMonth = new Date(year, month, 1,0,0,0,0);
      let firstOfDay = firstOfMonth.getDay()-1;
      if(firstOfDay == -1) firstOfDay = 6;
      let lastOfMonth = new Date(year, month+1,0,0,0,0,0);
      let numDays = lastOfMonth.getDate();
      console.log(firstOfDay);
      console.log(numDays);
      strip.color('#000')

      for (var i = firstOfDay; i < numDays+firstOfDay; i++) {
        strip.pixel(remap(i)).color('#423');
      }

    }

      function actDate(){
        let today = new Date();
        let day = today.getDate()-1;
        console.log(day);
        let splittenBitte = stringBirthday.split("-");
        let inputDay = splittenBitte[2] -1;
        console.log("test" + inputDay);
        let firstOfMonth = new Date(today.getFullYear(), today.getMonth(), 1,0,0,0,0);
        let firstOfDay = firstOfMonth.getDay()-1;
        if(firstOfDay == -1) firstOfDay = 6;

        if(inputDay==day){
          strip.pixel(remap(inputDay+firstOfDay)).color('#909');
          console.log("lila");
         }
        else {
            strip.pixel(remap(day+firstOfDay)).color('#900');
            console.log("rot");
        }
      }


      function birthdayDate(stringBirthday){
        let splittenBitte = stringBirthday.split("-");
        console.log("Test" + stringBirthday);
        let inputDay = splittenBitte[2] -1;
        let today = new Date();
        let day = today.getDate()-1;
        let firstOfMonth = new Date(today.getFullYear(), today.getMonth(), 1,0,0,0,0);
        let firstOfDay = firstOfMonth.getDay()-1;
        if(firstOfDay == -1) firstOfDay = 6;
        strip.pixel(remap(inputDay+firstOfDay)).color('#009');

      }

//---------------------------------------------------------------------------------

        //Alternativ 1 in birthdayDate

    //    if(inputDay==(day+firstOfDay)){
    //      strip.pixel(remap(day+firstOfDay)).color('#909');
    //      console.log("lila");
    //     }
    //    else {
    //        strip.pixel(remap(inputDay+firstOfDay)).color('#009');
    //        console.log("blau");
    //      }
    //    }


        // Alternativ 2 neue Funktion, wenn beide Tage übereinander treffen.

      //  function beideTage(day, firstOfDay, inputDay) {
      //    let day = today.getDate()-1;
      //    let firstOfDay = firstOfMonth.getDay()-1;
      //    let inputDay = splittenBitte[2] -1;
      //    if ((day+firstOfDay) == inputDay) {
      //         strip.pixel(remap(inputDay+firstOfDay)).color('#808');
      //      }
      //   else {
      //     birthdayDate(stringBirthday);
      //    }
      //  }

//-----------------------------------------------------------------------------


    strip.on("ready", function() {
      let now = new Date();
      console.log(new Date());

      swipeMonth(1,2020);
      actDate();
      birthdayDate(stringBirthday);
    //beideTage();



	    // Das einzig Erotische, was in diesem Code passiert.
	  strip.show();

	});
});

}

module.exports.allesAbrufen = allesAbrufen; //bezieht sich auf const hardware = require in der server.js

//Erklärung

// Alle LED's sollen grundsätzlich in weiß #423 abgebildet sein. Dabei wird die erste LED an der Position gestartet
// in der auch der 1. Tag in der Woche starten würde d.h. 1. Januar war Wochentag Mittwoch, also wird auch die 3. LED im
// obersten Strip gestartet
// Die LED-Farbe des aktuellen Tages soll in rot #900 sein. Die LED-Farbe von eingetragenen Geburtstagen soll in blau #009 sein.
// Wenn beide Tage sich überschneiden, soll die LED lila #909 aufleuchten.
//
