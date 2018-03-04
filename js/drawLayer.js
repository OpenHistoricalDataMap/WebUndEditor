var source = new ol.source.Vector({wrapX: false});

var vector = new ol.layer.Vector({
    source: source
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
    if (drawModeToggle.checked) {
        addInteraction(draw);
        draw.setProperties(nameSelect.value);
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
            type: typeSelect.value
        });
        map.addInteraction(draw);
    }
}


/**
 * Handle change event.
 */
typeSelect.onchange = function() {
    map.removeInteraction(draw);
    addInteraction();
};

nameSelect.onchange = function (ev) {
    map.removeInteraction(draw);
    addInteraction();
    draw.setProperties(nameSelect.value);
};



function getfeatures(){
    var writer = new ol.format.GeoJSON();
    var geojsonStr = writer.writeFeatures(source.getFeatures());

    console.log(geojsonStr);

    // document.getElementById("demo").innerHTML = geojsonStr;
}