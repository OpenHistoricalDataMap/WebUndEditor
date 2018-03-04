var style;
var point;

var source = new ol.source.Vector();

function addImageToMap(HTMLCanvas) {

    point = new ol.geom.Point(getMapCenter());

    var photoFeature = new ol.Feature();

    photoFeature.setGeometry(point);

    style = createStyle(HTMLCanvas);

    photoFeature.setStyle(style);

    source.addFeature(photoFeature);

    var imageLayer = new ol.layer.Vector(
        {
            source: source,
            //style : style
        }
    );


    map.addLayer(imageLayer);

    function rerender() {
        photoFeature.changed();
    }

    function scaleImage(scale) {
        style.getImage().setScale(scale);
        rerender();
    }

    function setOpacity(opacity) {
        style.getImage().setOpacity(opacity);
        rerender();
    }

    function movePointTo(x, y) {
        point.setCoordinates([x, y]);
        rerender();
    }

    var origin = photoFeature.getGeometry().getCoordinates();

    function movePointBy(x, y) {
        photoFeature.getGeometry().setCoordinates(
            [
                origin[0] + x,
                origin[1] + y
            ]
        );
        rerender();
    }

    var imageScale = document.getElementById("imageScale");
    imageScale.addEventListener("input", function (evt) {
        scaleImage(imageScale.value);
    });

    var imageOpacity = document.getElementById("opacity");
    imageOpacity.addEventListener("input", function (evt) {
        setOpacity(imageOpacity.value);
    });

    var moveX = document.getElementById("moveX");
    moveX.addEventListener("input", function (evt) {
        var value = parseInt(moveX.value);
        console.log(value);
        movePointBy(value, 0);
    });


    var moveY = document.getElementById("moveY");
    moveY.addEventListener("input", function (evt) {
        var value = parseInt(moveY.value);
        console.log(value);
        movePointBy(0, value);
    })

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