<script>

    var flickrSource = new ol.source.Vector();

    var cache = {};

    function photoStyle(feature, scale) {
      var url = feature.get('url');
      var key = scale + url;
      if (!cache[key]) {
        cache[key] = new ol.style.Style({
          image: new ol.style.Icon({
            scale: scale,
            src: url
          })
        });
      }
      return cache[key];
    }

    function flickrStyle(feature) {
      return [photoStyle(feature, 0.10)];
    }

    function selectedStyle(feature) {
      return [photoStyle(feature, 0.50)];
    }

    var flickrLayer = new ol.layer.Vector({
      source: flickrSource,
      style: flickrStyle
    });

    var layer = new ol.layer.Tile({
      source: new ol.source.OSM()
    });

    var center = ol.proj.transform([0,0], 'EPSG:4326', 'EPSG:3857');

    var view = new ol.View({
      center: center,
      zoom: 2
    });

    var map = new ol.Map({
      target: 'map',
      layers: [layer, flickrLayer],
      view: view
    });

    // a simple templating function that replaces keywords wrapped in
    // curly brackets with the equivalent value from the feature properties
    function photoContent(feature) {
      // get the HTML content of the template as a string
      var content = $('#photo-template').html();
      // a list of keys we will consider for replacement
      var keys = ['author','author_id','date_taken','latitude','longitude','link','url','tags','title'];
      for (var i=0; i<keys.length; i++) {
        var key = keys[i];
        // get the value of the key
        var value = feature.get(key);
        // and replace its template placeholder in the content. If the template
        // placeholder is absent, nothing happens so its safe
        content = content.replace('{'+key+'}',value);
      }
      return content;
    }

    var select = new ol.interaction.Select({
      layers: [flickrLayer],
      style: selectedStyle
    });

    map.addInteraction(select);

    var selectedFeatures = select.getFeatures();

    selectedFeatures.on('add', function(event) {
      var feature = event.target.item(0);
      // instead of the photo url, get the templated content
      // for the current feature instead
      var content = photoContent(feature);
      $('#photo-info').html(content);
    });

    selectedFeatures.on('remove', function(event) {
      $('#photo-info').empty();
    });

    function successHandler(data) {
      var transform = ol.proj.getTransform('EPSG:4326', 'EPSG:3857');
      data.items.forEach(function(item) {
        var feature = new ol.Feature(item);
        feature.set('url', item.media.m);
        var coordinate = transform([parseFloat(item.longitude), parseFloat(item.latitude)]);
        var geometry = new ol.geom.Point(coordinate);
        feature.setGeometry(geometry);
        flickrSource.addFeature(feature);
      });
    }

    $.ajax({
      url: '../assets/data/flickr_data.json',
      dataType: 'jsonp',
      jsonpCallback: 'jsonFlickrFeed',
      success: successHandler
    });

    </script>


map.addEventListener('moveend', function (event) {
    //console.log(map.getView().calculateExtent(map.getSize()));
});


var img_extent = null;
var overlay_image_layer;
var img_view_extent;
var img_source;
var map_view_extent;
var multiplier = 100;
var img_heigth;
var img_width;


// Process data from #drawProperties
var upload = document.getElementById('imageUpload');
upload.addEventListener('change', dateiupload);


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

        /*
        Code für AJAX-Request hier einfügen
        */

    };

    // Die Datei einlesen und in eine Data-URL konvertieren
    objectURL = _URL.createObjectURL(uploadDatei);

    // Read out dimensions of the image
    var image_html = new Image();
    image_html.src = objectURL;

    img_width = 0;
    img_heigth = 0;

    image_html.onload = function () {
        img_heigth = image_html.height;
        img_width = image_html.width;

        // get base image position
        // [minx, miny, maxx, maxy]
        map_view_extent = map.getView().calculateExtent(map.getSize());
        img_view_extent = [map_view_extent[0], map_view_extent[1], map_view_extent[0] + img_width * multiplier, map_view_extent[1] + img_heigth * multiplier];
        console.log(img_view_extent);

        img_source = new ol.source.ImageStatic({
            //projection: ol.proj.get('EPSG:3857'),
            url: objectURL,
            imageExtent: img_view_extent
        });

        overlay_image_layer =
            new ol.layer.Image({
                zIndex: 1,
                source: img_source
            });
        overlay_image_layer.addEventListener('change', function () {
            console.log('changed');
            map.render();
        });


        map.addLayer(overlay_image_layer);
    };
}
