# Dokumentation

## Aufgabe der Komponente

Der Web-Editor soll dem Nutzer die Möglichkeit bieten alte historische Karten, die schon digitalisiert wurden und als Bilddatei vorliegen, in das OHDM-Projekt einzupflegen. Die aufgezeichneten Daten sollen als GeoJSON gespeichert und anschließend per API-Schnittstelle in die Datenbank eingefügt werden.


## Architektur

### Überblick

Der Editor bietet eine Schnittstelle nach außen, mit der er die aufgezeichneten Daten an den Server schickt.

Das verwendete Framework OpenLayer’s lädt das Kartenmaterial vom Geo-Server und erzeugt damit eine Karte. Mithilfe des Editors wird eine historische Karte hochgeladen und in die Karte eingefügt. Diese kann man anschließend skalieren und verschieben. Der Nutzer hat die Möglichkeit eine Strecke oder ein Gebiet aufzuzeichnen und abzuspeichern. Des Weiteren wird ein Zeitstempel und ein Name angegeben um Historische Orte zu dokumentieren. Diese Informationen liegen am Ende des Prozesses als GeoJSOn vor und kann an eine Schnittstelle gesendet werden.


### Schnittstellendefinitionen

Per "Post"-Methode werden GeoJSON-Daten an den Server gesendet

### genutzte Komponenten

Momentan wird Openlayers's verwendet um die OHDM-Karte darzustellen.
Außerdem werden die jQuery und Bootstrap Bibliotheken verwendet.



## Funktionsbeschreibung

Um die Übersicht des Codes zu verbessern wurde er in mehrere „Activities“ geteilt:

### image_upload_activity
Hier wird unter Verwendung von <input type=“file“> aus dem hoch geladenem Bild ein HTML Objekt mit dem Tag „img“ erstellt.
Anschließend wird das Objekt an die nächste Activity weitergegeben: adjust_activity

### adjust_activity
Hier wird eine neue „ol.layer“ erstellt, diese enthält ein Objekt der Klasse ol.source. Das Objekt der Klasse ol.source dient in diesem Fall als Container für ein Feature (ol.feature).
Ein Feature kann ein Point, LineString oder Polygon sein.
Um nun ein Bild auf der Karte anzuzeigen benutze ich als Geometrie einen Punkt, dem ich das Bild als Style-Objekt (ol.style.Icon)zugewiesen habe.

Um das Feature (der Punkt samt seinem Bild als Style) wurden die Interactions Select und Translate (ol.interaction.Select, ol.interaction.Translate) zur Karte hinzugefügt.

Falls in die Karte hineingezoomt wird sollte das Bild im selben Verhältnis bleiben. Das war ganz schön tricky da die Zoomstufe der Karte (map.getView().getResolution())von annähernd 0 bis zu einer hohen positiven Zahl wobei kleine Zahlen nah an der Erde und hohe Zahlen weiter weg sind. Bei der Zoomstufe des Bildes (style.getImage().getScale()) ist es andersrum.

Um trotzdem das ungefähr selbe Verhältnis beizubehalten(bei mehrmaligen raus und reinzoomen sieht man das es verändert), wurde die initiale Zoomstufe der Karte erfasst. Diese wird beim zoomen dazu verwendet die Differenz der Zoomstufe zu bestimmten. Dieser Wert wird mit dem Verhältnis (Kartenzoom / Bildzoom) multipliziert. Dieser Wert wiederum mit dem Bildzoom addiert und das Ergebnis als neuer Bildzoom festgelegt. (siehe adjust_activity.js Line 47-53).

### draw_activity
Ist nun ein Bild in der Karte vorhanden kann man damit beginnen Geometrien einzuzeichnen.
Dazu wird eine Layer (ol.layer) erzeugt, die die eingezeichneten Geometrien aufnehmen soll. In der Theorie werden diese aber in eine Source (ol.source) gemalt, die der Layer als Datenhaltung dient. Die Geometrien werden per Draw-Interaction (ol.interaction.Draw) in der Source sowie der Collection (ol.collection) gespeichert. Die Collection dient später zum auslesen der Daten. Per setProperties() werden Attribute zu den gezeichneten Geometrien -> Features hinzugefügt.

### geometry_upload_activity
Hier werden die Daten gesammelt und entweder an die Import-Schnittstelle per AJAX-Post gesendet oder per Button heruntergeladen.


## Vorschläge / Ausblick
## Eingabeueberpruefung
Man sollte die Daten aus den Textfeldern auf Code überprüfen und ggf. Escape-Characters einsetzen. Um SQL-Injection und Cross-Site-Scripting zu verhindern.
## Automatische Kartenanpassung
Es wär schön wenn man auf der Karte zunächst zwei Punkte von markanten Orten markieren könnte und nach dem Upload des Bildes anschließend dort. So könnte man das Bild programmatisch skalieren in dem diese Punkte übereinander gelegt werden.
## Drag and Drop Importer
Drag'n'Drop-Importer für GeoJSON um vorher gespeicherte Daten wieder zu importieren und weiter zu bearbeiten. [Link](https://openlayers.org/en/latest/examples/drag-and-drop.html)
## Fehler mit dem Punkt beheben
Karte verschwindet sobald der Punkt, der mit dem Bild über das Feature verknüpft ist, aus dem Viewport ist.
Vorschlag: Bild mit Polygon umranden und Bild als Feature fürs Polygon benutzen.


# Wie bringe ich die Seite zum Laufen (Ubuntu/Debian Apache2)

1. Super User!
```bash
sudo bash
```
2. Apache Server installieren
```bash
apt install apache2
```
3. Dieses Verzeichnis von GitHub klonen

``Document Root``'s von Apache-Seiten liegen normalerweise in ``/var/www/``.
also ...
```bash
cd /var/www/
```
und anschließend klonen und Rechte an den User des Webservers geben
```bash
git clone https://github.com/OpenHistoricalDataMap/WebUndEditor.git
chown -R www-data:www-data WebUndEditor
```

4. Apache konfigurieren

Danach erstellt ihr mit dem Editor eurer Wahl eine `.conf`-Datei in `/etc/apache2/sites-available`.
```bash
vim OHDM_Editor.conf
```
Die Datei sollte in etwa so aussehen:
```apacheconfig
<VirtualHost *:80>
    ServerName "<URL>"
    ServerAdmin webmaster@<URL>
    DocumentRoot /var/www/WebUndEditor
    ErrorLog ${APACHE_LOG_DIR}/WebUndEditor_error.log
    CustomLog ${APACHE_LOG_DIR}/WebUndEditor_access.log combined
    
    <Directory /var/www/WebUndEditor/>
		Options +FollowSymlinks
		AllowOverride All
		<IfModule mod_dav.c>
			Dav off
		</IfModule>
	</Directory>
</VirtualHost>
```

5. Seite online stellen
```bash
a2ensite OHDM_Editor.conf
service apache2 reload

# Super user out
exit
```


## Kleiner Php-Server zum testen und arbeiten

```bash
php -S localhost:8080 -t ./
```
