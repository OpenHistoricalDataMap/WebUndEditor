/*
author: Samuel Erb
e-mail: s0556350@htw-berlin.de
*/

// remote json data export
var apiPathname = '/api.php';
var url = window.location.protocol + '//' + window.location.host + apiPathname;

$("#save").on('click', function () {
    if (getGeoJSON() !== null) {
        $.ajax({
            type: "POST",
            url: url,
            data: {json: getGeoJSON()},
            success: null,
            dataType: 'application/geo+json'
        });
        alert("You're geometries were uploaded successfully to our server! Tanks for your work.");
    }
});


// local json data export
document.getElementById('exportLink').addEventListener('mousedown', function (ev) {
    if (getGeoJSON() !== null) {
        var data = new Blob([getGeoJSON()]);
        ev.target.setAttribute('download', 'OHDM-GEOJSON-'+new Date().toISOString()+'.geojson');
        ev.target.href = URL.createObjectURL(data);
    }
});


function getGeoJSON() {
    if (document.getElementById('date').value === '') {
        document.getElementById('date').style.border = '1px solid red';
        document.getElementById('date').style.boxShadow = '0 0 3px #CC0000';
        alert("Please fill out the mandatory field's.");
        return null;
    } else {
        var length = collection.getArray().length;
        for (var i = 0; i < length; i++) {
            collection.item(i).set('date', document.getElementById('date').value);
            collection.item(i).set('map_author', document.getElementById('map_author').value);
            collection.item(i).set('uploader', document.getElementById('uploader').value);
            collection.item(i).set('description', document.getElementById('description').value);
        }
        return getfeatures();
    }
}

//TODO Eingabe ueberpruefung -> Datum; Schutz vor Injections hinzufuegen; Events erzeugen um 'activities' besser zu handeln
//TODO autom. Kartenanpassung -> indem man mind. 2 markante Punkte auf der Karte auswaehlt und die dazugehoerigen Punkte auf dem Bild
//TODO Drag'n'Drop importer fuer geojson um vorher gespeicherte daten wieder zu importieren -> https://openlayers.org/en/latest/examples/drag-and-drop.html
//TODO Code aufraeumen
//TODO CSS anpassen
//TODO Karte verschwindet sobald der Punkt, der mit dem Bild ueber das feature verknuepft, ist aus dem viewport ist
//TODO Loesung Punkt mit Polygon, dass das Bild umrandent, austauschen