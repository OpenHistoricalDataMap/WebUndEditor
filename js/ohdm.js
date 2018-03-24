// Open street map for development purposes
var OSM =
    new ol.layer.Tile({
        source: new ol.source.OSM()
    });


var map =
    new ol.Map({
        target: 'map',
        view: new ol.View({
            center: [1492062.75385, 6895234.55805],
            zoom: 11
        }),
        layers: [
            // getBaseMapLayers()//,
            OSM
        ],
        interactions: ol.interaction.defaults().extend([
            new ol.interaction.DragRotateAndZoom()
        ])
    });
