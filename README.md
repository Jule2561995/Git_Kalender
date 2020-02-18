# Semesterprojekt
Ursprünglich wollte ich mit der Hardware und dem fullstack einen Kalender bauen, der mir den aktuellen Tag über Led’s ausgibt. Außerdem sollte es möglich sein über das Vue-Interface Geburtstagseinträge vorzunehmen. Die Hardware besteht aus 37 Led’s, die in einer Kalender-Matrix (Kalender-Raster?) angeordnet sind. Die Tage eines Monats in dem Raster sollen weiß leuchten. Die Led des aktuellen Tages soll in rot leuchten, die Geburtstagseinträge in blau. Sobald der aktuelle Tag und ein Geburtstagseintrag übereinander treffen, leuchtet die betreffende Led in lila - weil blau und rot ergeben lila :)


## Benutzung
Für die Benutzung meines Projektes müssen folgende Bibliotheken installiert werden: Firmata & NodePixel (Hardware), Vue, Express, socket.io, http usw. Um es anzusteuern müssen im Terminal zwei Tabs geöffnet werden. In einen Tab schiebt man den Ordner „vuetest“ und gibt den Befehl „npm run serve“ ein. In den anderen Tab wird der Ordner  „Server“ geöffnet und mit „node server.js“ der Server gestartet. Als nächstes geht man im Browser auf localhost: 8080. Wenn alles geklappt hat, sollte sich das Bootstrap-Vue Interface mit zwei Input-Feldern erscheinen. In dem linken Input-Feld könnte man einen String, also den Namen der Person eingeben und auf dem rechten ein das Geburtsdatum der jeweiligen Person. Sobald man auf „Confirm“ klickt, werden die jeweiligen Led’s angesteuert. Eigentlich wollte ich mir die eigegebenen Daten über eine Tabelle im Interface ausgeben lassen. D.h. sobald man einen Eintrag vornimmt, wird diese Liste ergänzt.



## Strukture und Aufbau
Grundsätzlich wird meine hardware.js in der server.js abgerufen. Die „hardware.js“ habe ich gebaut, um dort alle Funktionen, die Date-Objekte abfangen, aufzurufen. Date-Objekte waren für meinen Kalender grundlegend, da ich mir den aktuellen Tag und den aktuellen Monat in dem Kalender-Raster ausgeben lassen wollte. Der Kalender setzt sich aus fünf Reihen mit je sieben Leds zusammen. Zusätzlich wurden zwei weitere Led’s verwendet, da der März bspw. an einem Sonntag beginnt und mit 31 Tagen somit über dem Monatsraster hinaus gehen würde. Des Weiteren musste ich eine Funktion bauen, die die Led-Matrix an sich mapped. Das lag daran, dass die Leds des Strips nacheinander mit Strom versorgt werden. Um die eingegebenen Daten zu speichern, hatte ich bereits eine JSON-Datei (data.js) angelegt, welche in der hardware.js abgerufen werden soll (auskommentiert, Zeile 7 in hardware.js). Über die Interface.vue kann das Backend mit dem Frontend kommunizieren. Dafür wird mit dem Befehl "import" io from "socket.io-client" der socket-client abgefragt und über den Browser ausgegeben.

**Remap:** Durch die Funktion „remap“ in der hardware.js werden die Monate, wie in einem
gewöhnlichen Kalender abgebildet.

**pixelNum:** Anzahl der Pixel insgesamt

**Math.ceil:** gibt die nächst höhere Ganzzahl zurück

**SwipeMonth:** Mit der Funktion „swipeMonth“ bestimme ich, welche Led’s der Matrix angehen und welche ausbleiben, weil sie nicht in das entsprechende Monatsraster passen. Zusätzlich sollte es durch diese Funktion möglich sein, die Monate über den Browser durch zu swipen, was ich aber leider zeitlich nicht mehr hin bekommen habe.

**ActDate:** Mit der Funktion „actDate“ lasse ich mir den aktuellen Tag in der Pixel-Matrix ausgeben. Durch die Klasse .getDate des „new Date“ - Objektes wird das aktuelle Datum gemäß der Ortszeit zurück zurückgegeben. In dieser Funktion wird zusätzlich die If-Bedingung abgefangen, wenn beide Tage (aktueller Tag und Geburtstagseintrag) aufeinander treffen

**birthdayDate:** In dieser Funktion splitte ich zunächst den String, der mir über das Input-Feld eingegeben wird und trenne es durch einen Spiegelstrich (Ausgabe des Datums im Terminal 2020-02-02).In dem InputDay speichere ich durch „splittenBitte“ die zweite Position (Monat) des Datums.

**new Date**: Das Date-Objekt speichert das Datum und die Uhrzeit und stellt Methoden zur Verwaltung von Datum und Uhrzeit zur Verfügung. Ich benötige es für mein Projekt, um das Datum zu erstellen und zu speichern und das aktuelle Datum ausgeben zu lassen. Hierfür habe ich folgende Methoden verwendet:
* getDay: Holt sich den Wochentag, von 0 (Sonntag) bis 6 (Samstag).
* getDate: Holt sich den Tag des Monats von 1 bis 31


## ToDos
Was noch fehlt, und was die nächsten Schritte wären um es ggf. umzusetzen:

* Monatsswiping
* Speicherung der Geburtstagseinträge, die im Browser eingegeben Daten werden in einer Tabelle (& dem Kalender-Raster) ergänzt. Dafür muss noch das vue-Frontend ausgebaut werden. Ich hatte schon einige Varianten, wie in dem auskommentierten Bereich (Interface.vue) zu erkennen ist, ausprobiert, allerdings noch keine Lösung gefunden.
