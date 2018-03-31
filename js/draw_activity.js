/*
author: Samuel Erb
e-mail: s0556350@htw-berlin.de
*/

var source = new ol.source.Vector({wrapX: false});
var collection = new ol.Collection();

var vector = new ol.layer.Vector({
    source: source,
    zIndex: 1
});

map.addLayer(vector);

var typeSelect = document.getElementById('geometry_type');
var layer_name = document.getElementById('layer_name');
var name = document.getElementById('label');
var drawModeToggle = document.getElementById("drawModeToggle");
layer_name.value = 'None';

drawModeToggle.addEventListener("change", function () {
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
            type: typeSelect.value
        });
        draw.on('drawend', function (e) {
            e.feature.setProperties({'layer': layer_name.value});
            e.feature.setProperties({'name': document.getElementById('label').value});
            // clear text field for geometry label
            document.getElementById('label').value = '';
        });
        if (drawModeToggle.checked) {
            map.addInteraction(draw);
        } else {
            map.removeInteraction(draw);
        }
    }
}

function disableOptgroup() {
    layer_name.value = 'None';
    switch (typeSelect.value) {
        case 'Point':
            $('#layer_name > .line').each(function (index, value) {
                value.disabled = true;
            });
            $('#layer_name > .polygon').each(function (index, value) {
                value.disabled = true;
            });
            $('#layer_name > .point').each(function (index, value) {
                value.disabled = false;
            });
            break;
        case 'LineString':
            $('#layer_name > .line').each(function (index, value) {
                value.disabled = false;
            });
            $('#layer_name > .polygon').each(function (index, value) {
                value.disabled = true;
            });
            $('#layer_name > .point').each(function (index, value) {
                value.disabled = true;
            });
            break;
        case 'Polygon':
            $('#layer_name > .line').each(function (index, value) {
                value.disabled = true;
            });
            $('#layer_name > .polygon').each(function (index, value) {
                value.disabled = false;
            });
            $('#layer_name > .point').each(function (index, value) {
                value.disabled = true;
            });
            break;
    }
}

disableOptgroup();

/**
 * Handle change event.
 */
typeSelect.onchange = function () {
    disableOptgroup();
    map.removeInteraction(draw);
    addInteraction();
};

layer_name.onchange = function (ev) {
    map.removeInteraction(draw);
    addInteraction();
};


function getfeatures() {
    var writer = new ol.format.GeoJSON({
        extractGeometryName: true
    });
    return writer.writeFeatures(collection.getArray());
}