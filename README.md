# Semesterprojekt
Ursprünglich wollte ich mit der Hardware und dem fullstack einen Kalender bauen, der mir den aktuellen Tag über Led’s ausgibt. Außerdem sollte es möglich sein über das Vue-Interface Geburtstag-Einträge vorzunehmen. Die Hardware besteht aus 37 Led’s, die in einer Kalender-Matrix angeordnet sind. Die Tage eines Monats in der Matrix sollen weiß leuchten. Die Led des aktuellen Tages soll in rot leuchten, die Geburtstagseinträge in blau. Sobald der aktuelle Tag und ein Geburtstagseintrag übereinander treffen, leuchtet die betreffende Led in lila - weil blau und rot ergeben lila :)


## Benutzung
Für die Benutzung meines Projektes müssen folgende Bibliotheken installiert
werden: Firmata & NodePixel (Hardware), Vue, Express, socket.io, http usw.
Um es anzusteuern müssen im Terminal zwei Tabs geöffnet werden. In einen Tab
schiebt man den Ordner „vuetest“ und gibt den Befehl „npm run serve“ ein. In den
anderen Tab wird der Ordner  „Server“ geöffnet und mit „node server.js“ der Server gestartet.
Als nächstes geht man im Browser auf localhost: 8080. Wenn alles geklappt hat,
sollte sich das Bootstrap-Vue Interface mit zwei Input-Feldern erscheinen.
In dem linken Input-Feld könnte man einen String, also den Namen der Person eingeben
und auf dem rechten ein das Geburtsdatum der jeweiligen Person. Sobald man
auf „Confirm“ klickt, werden die jeweiligen Led’s angesteuert. Eigentlich wollte
ich mir die eigegebenen Daten über eine Tabelle im Interface ausgeben lassen. D.h.
sobald man einen Eintrag vornimmt, wird diese Liste ergänzt.



## Strukture und Aufbau
Grundsätzlich wird meine hardware.js in der server.js abgerufen. Die „hardware.js“
habe ich gebaut, um dort alle Funktionen, die Date-Objekte abfangen, aufzurufen.
Date-Objekte waren für meinen Kalender grundlegend, da ich mir den aktuellen Tag
und den aktuellen Monat in der Matrix ausgeben lassen wollte. Die Matrix setzt
sich aus fünf Reihen mit je sieben Leds zusammen. Zusätzlich wurden zwei weitere
Led’s verwendet, da der März bspw. an einem Sonntag beginnt und mit 31 Tagen somit
über dem Monatsraster hinaus gehen würde. Des Weiteren musste ich eine Funktion bauen,
die die Led-Matrix an sich mapped. Das lag daran, dass die Leds des Strips
nacheinander mit Strom versorgt werden.

**Remap:** Durch die Funktion „remap“ in der hardware.js werden die Monate, wie in einem
gewöhnlichen Kalender abgebildet.

**pixelNum:** Anzahl der Pixel insgesamt

**Math.ceil:** gibt die nächst höhere Ganzzahl zurück

**SwipeMonth:** Mit der Funktion „swipeMonth“ bestimme ich, welche Led’s der Matrix angehen
und welche ausbleiben, weil sie nicht in das entsprechende Monatsraster passen. Zusätzlich
sollte es durch diese Funktion möglich sein, die Monate über den Browser durch zu swipen,
was ich aber leider zeitlich nicht mehr hin bekommen habe.

**getDay:**

**ActDate:** Mit der Funktion „actDate“ lasse ich mir den aktuellen Tag in der Pixel-Matrix
ausgeben. Durch die Klasse .getDate des „new Date“ - Objektes wird das aktuelle Datum
gemäß der Ortszeit zurück zurückgegeben.

**birthdayDate:** In dieser Funktion splitte ich zunächst den String, der mir über das Input-Feld
eingegeben wird und trenne es durch einen Spiegelstrich (Ausgabe des Datums im Terminal 2020-02-02).
In dem InputDay speichere ich durch „splittenBitte“ die zweite Position (Monat) des Datums.
