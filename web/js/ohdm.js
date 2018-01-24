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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function change_on_x(event) {
    var temp = [img_view_extent[0] + (parseInt(event.value)), img_view_extent[1], img_view_extent[2] + (parseInt(event.value)), img_view_extent[3]]
    console.log(temp);
    img_source.set('imageExtent', temp);
    overlay_image_layer.setMap(map);
    overlay_image_layer.changed();

}

function changeOpacity(event) {
    overlay_image_layer.set('opacity', event.value);
}




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// deprecated code -> open layer's 2
//map.addControl(new OpenLayers.Control.LayerSwitcher());

// Name the root layer group
map.getLayerGroup().set('name', 'Root');

document.getElementById('info-editor').addEventListener('click', function () {
    document.alert("Please read this information carefully!\n\n" +
        "Right now you can only draw one layer at a time.\n" +
        "One layer could be a building, a river or a street\n" +
        "Please note that label's for the above mentioned layer's are layer's themselves.")
});
