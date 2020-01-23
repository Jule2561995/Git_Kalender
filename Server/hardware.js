const pixel = require("node-pixel"); //libary im Terminal mit npm install
const firmata = require('firmata'); //libary im Terminal mit npm install
let data = [
            {name: 'Jule', date: '25.06.1995'},
            {name: 'Jule', date: '25.06.1995'},
            {name: 'Jule', date: '25.06.1995'},
           ]

let board = new firmata.Board('/dev/tty.usbmodem14201',function(){ //USB-Port links

    strip = new pixel.Strip({
        strips: [ {pin: 6, length: 35}, ], //length entsprechend der Pins anpassen
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

    strip.on("ready", function() {
      let now = new Date().getDate();
      console.log();
        //Set the entire strip to pink.
        strip.pixel(remap(0)).color('#000');
        strip.pixel(remap(1)).color('#000');
        strip.pixel(remap(2)).color('#423');
        strip.pixel(remap(3)).color('#423');
        strip.pixel(remap(4)).color('#423');
        strip.pixel(remap(5)).color('#423');
        strip.pixel(remap(6)).color('#423');
        strip.pixel(remap(7)).color('#423');
        strip.pixel(remap(8)).color('#423');
        strip.pixel(remap(9)).color('#423');
        strip.pixel(remap(10)).color('#423');
        strip.pixel(remap(11)).color('#423');
        strip.pixel(remap(12)).color('#423');
        strip.pixel(remap(13)).color('#423');
        strip.pixel(remap(14)).color('#423');
        strip.pixel(remap(15)).color('#423');
        strip.pixel(remap(16)).color('#423');
        strip.pixel(remap(17)).color('#423');
        strip.pixel(remap(18)).color('#423');
        strip.pixel(remap(19)).color('#423');
        strip.pixel(remap(20)).color('#423');
        strip.pixel(remap(21)).color('#423');
        strip.pixel(remap(22)).color('#423');
        strip.pixel(remap(23)).color('#423');
        strip.pixel(remap(24)).color('#423');
        strip.pixel(remap(25)).color('#423');
        strip.pixel(remap(26)).color('#423');
        strip.pixel(remap(27)).color('#423');
        strip.pixel(remap(28)).color('#423');
        strip.pixel(remap(29)).color('#423');
        strip.pixel(remap(30)).color('#423');
        strip.pixel(remap(31)).color('#423');
        strip.pixel(remap(32)).color('#423');
        strip.pixel(remap(33)).color('#000');
        strip.pixel(remap(34)).color('#000');
	    // Set first and seventh pixels to turquoise.
	   // strip.pixel(0).color('#074');
	   // strip.pixel(6).color('#074');

	    // Display initial state.
	  strip.show();

	    // Loop the following command forever
	    // at 12fps until Arduino powers down.
	   // let loop = setInterval(function () {
	      // Shift all pixels clockwise
	    //  strip.shift(1, pixel.FORWARD, true);
	      //strip.show();
	   // }, 1000 / 12);
	});
});
// Alle LED's sollen grundsätzlich in weiß #423 abgebildet sein. Dabei wird die erste LED an der Position gestartet
// in der auch der 1. Tag in der Woche starten würde d.h. 1. Januar war Wochentag Mittwoch, also wird auch die 3. LED im
// obersten Strip gestartet
// Die LED-Farbe des aktuellen Tages soll in rot #500 sein. Die LED-Farbe von eingetragenen Geburtstagen soll in blau #001 sein.
// Wenn beide Tage sich überschneiden, soll die LED lila #303 aufleuchten.
