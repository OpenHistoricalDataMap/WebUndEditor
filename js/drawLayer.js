var source = new ol.source.Vector({wrapX: false});
var collection = new ol.Collection();

var vector = new ol.layer.Vector({
    source: source,
    zIndex: 1
});

map.addLayer(vector);

var typeSelect = document.getElementById('type');
var nameSelect = document.getElementById('vector_name');
var drawModeToggle = document.getElementById("drawModeToggle");


var testButton = document.getElementById("testButton");

testButton.addEventListener('click', function () {
    getfeatures();
});

drawModeToggle.addEventListener("change", function () {
    console.log(drawModeToggle.checked);
    if (drawModeToggle.checked) {
        addInteraction(draw);
    } else {
        map.removeInteraction(draw);
    }
});

var draw; // global so we can remove it later
function addInteraction() {
    var value = typeSelect.value;
    if (value !== 'None') {
        draw = new ol.interaction.Draw({
            source: source,
            features: collection,
            type: typeSelect.value,
        });
        draw.on('drawend', function(e) {
            e.feature.setProperties({
                'name': nameSelect.value
            });
        });
        if (drawModeToggle.checked) {
            map.addInteraction(draw);
        } else {
            map.removeInteraction(draw);
        }
    }
}


/**
 * Handle change event.
 */
typeSelect.onchange = function () {

    switch (typeSelect.value) {
        case 'LineString':
            $('.line').show();
            $('.polygon').hide();
            break;
        case 'Polygon':
            $('.line').hide();
            $('.polygon').show();
            break;
    }
    map.removeInteraction(draw);
    addInteraction();
};

nameSelect.onchange = function (ev) {
    map.removeInteraction(draw);
    addInteraction();
};


function getfeatures() {
    var writer = new ol.format.GeoJSON({
        extractGeometryName: true
    });
    var geojsonStr = writer.writeFeatures(collection.getArray());

    console.log(geojsonStr);
    console.log(writer.writeFeaturesObject(collection.getArray()))

    // document.getElementById("demo").innerHTML = geojsonStr;
}