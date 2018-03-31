/*
author: Samuel Erb
e-mail: s0556350@htw-berlin.de
*/

var style;
var point;
var ratio = 1;
var imageScale;
var imageSource = new ol.source.Vector();
var photoFeature;


function addImageToMap(HTMLCanvas) {
    if (imageSource != undefined) {
        imageSource.clear();

    }
    point = new ol.geom.Point(getMapCenter());
    photoFeature = new ol.Feature(point);
    style = createStyle(HTMLCanvas);
    photoFeature.setStyle(style);
    imageSource.addFeature(photoFeature);
    var imageLayer = new ol.layer.Vector(
        {
            source: imageSource
        }
    );

    map.addLayer(imageLayer);

    function rerender() {
        photoFeature.changed();
    }

    function getImageScale() {
        return style.getImage().getScale();
    }

    function setImageScale(value) {
        style.getImage().setScale(value);
    }

    function getMapScale() {
        return map.getView().getResolution();
    }

    var zoombefore = getMapScale();
    map.getView().on('propertychange', function (e) {
        switch (e.key) {
            case 'resolution':
                var d = zoombefore - getMapScale();
                var dr = d * ratio;
                var imageScale = getImageScale();
                var newImageScale = parseFloat(imageScale) + parseFloat(dr);
                scaleImage(newImageScale);
                imageScale.value = newImageScale;
                zoombefore = getMapScale();
                break;
        }
    });

    function scaleImage(scale) {
        setImageScale(scale);
        ratio = getImageScale() / getMapScale();
        photoFeature.changed();
    }

    function setOpacity(opacity) {
        style.getImage().setOpacity(opacity);
        rerender();
    }

    imageScale = document.getElementById("imageScale");
    imageScale.addEventListener("input", function (evt) {
        scaleImage(imageScale.value);
    });

    var imageOpacity = document.getElementById("opacity");
    imageOpacity.addEventListener("input", function (evt) {
        setOpacity(imageOpacity.value);
    });

    var select = new ol.interaction.Select();

    var translate = new ol.interaction.Translate({
        features: select.getFeatures()
    });

    map.addInteraction(select);
    map.addInteraction(translate);
}

function getMapCenter() {
    return map.getView().getCenter();
}

function createStyle(HTMLCanvas) {
    var imgSize = [HTMLCanvas.width, HTMLCanvas.height];

    return new ol.style.Style(
        {
            image: new ol.style.Icon(
                {
                    img: HTMLCanvas,
                    imgSize: imgSize,
                    rotateWithView: true,
                    opacity: 1,
                    scale: 1
                }
            )
        }
    )
}
