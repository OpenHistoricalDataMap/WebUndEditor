// function loadMapInteractions() {
//     select =
//         new ol.interaction.Select();
//
//     translate =
//         new ol.interaction.Translate({
//             features: select.getFeatures(),
//             layers: [overlay_image_layer]
//         });
//
// }

loadBaseMapLayers();

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
            //base_map_group_layer,
            //overlay_image_layer,
            OSM
        ],
        interactions: ol.interaction.defaults().extend([
            new ol.interaction.DragRotateAndZoom()
        ])
    });



var polyCoords = null

var feature = new ol.Feature({
  geometry: new ol.geom.Polygon(polyCoords),
  name: 'My Polygon'
});

// deprecated code -> open layer's 2
//map.addControl(new OpenLayers.Control.LayerSwitcher());

// Name the root layer group
map.getLayerGroup().set('name', 'Root');

