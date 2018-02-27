map.addEventListener('moveend', function (event) {
    // put action here
});


// Process data from #drawProperties
document.getElementById("upload").addEventListener('change', dateiupload);


function dateiupload(evt) {
    var _URL = window.URL || window.webkitURL;
    var dateien = evt.target.files; // FileList objekt

    // erste Datei auswählen (wichtig, weil IMMER ein FileList Objekt generiert wird)
    var uploadDatei = dateien[0];

    // Ein Objekt um Dateien einzulesen
    var reader = new FileReader();

    var senddata = new Object();
    // Auslesen der Datei-Metadaten
    senddata.name = uploadDatei.name;
    senddata.date = uploadDatei.lastModified;
    senddata.size = uploadDatei.size;
    senddata.type = uploadDatei.type;


    // Wenn der Dateiinhalt ausgelesen wurde...
    reader.onload = function (theFileData) {
        senddata.fileData = theFileData.target.result; // Ergebnis vom FileReader auslesen
    };

    // Die Datei einlesen und in eine Data-URL konvertieren
    objectURL = _URL.createObjectURL(uploadDatei);

    console.log(objectURL);

    // Read out dimensions of the image
    var image_html = new Image();
    image_html.src = objectURL;

    img_width = 0;
    img_heigth = 0;

    image_html.onload = function () {
        console.log("image_html.onload");
        addImageToMap(image_html);
    };
}







// TODO gejson datum author