var style;
var point;
var ratio = 1;
var polygon;

var imageScale;

var imageSource = new ol.source.Vector();
var photoFeature;

function addImageToMap(HTMLCanvas) {
    if (imageSource != undefined) {
        imageSource.clear();

    }

    var ring = [
        //bottom left
        [getMapCenter()[0] - HTMLCanvas.width/2, getMapCenter()[1] - HTMLCanvas.height/2],
        // bottom right
        [getMapCenter()[0] + HTMLCanvas.width/2, getMapCenter()[1] - HTMLCanvas.height/2],
        // top right
        [getMapCenter()[0] + HTMLCanvas.width/2, getMapCenter()[1] + HTMLCanvas.height/2],
        // top left
        [getMapCenter()[0] - HTMLCanvas.width/2, getMapCenter()[1] + HTMLCanvas.height/2],
        // close polygon -> bottom left
        [getMapCenter()[0] - HTMLCanvas.width/2, getMapCenter()[1] - HTMLCanvas.height/2]
    ];
    // polygon = new ol.geom.Polygon([ring]);
    // console.log(polygon);

    point = new ol.geom.Point(getMapCenter());

    photoFeature = new ol.Feature(point);

    // photoFeature.setGeometry(point);

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
        // return (Math.abs(style.getImage().getScale()) * -1);
        return style.getImage().getScale();
    }
    function setImageScale(value) {
        style.getImage().setScale(value);
        // style.getImage().setScale(Math.abs(value));
    }

    function getMapScale() {
        return map.getView().getResolution();
    }


    var zoombefore = getMapScale();

    map.getView().on('propertychange', function(e) {
        switch (e.key) {
            case 'resolution':
                var d = zoombefore - getMapScale();
                var dr = d * ratio;
                var imageScale = getImageScale();
                var newImageScale = parseFloat(imageScale) + parseFloat(dr);
                // ratio = getImageScale() / getMapScale();

                scaleImage(newImageScale);
                imageScale.value = newImageScale;

                // console.log("map resolution: " + getMapScale());
                // console.log("image resolution:" + getImageScale());
                // console.log("ratio: " + ratio);
                zoombefore = getMapScale();
                break;
        }
    });

    function scaleImage(scale) {
        setImageScale(scale);
        ratio = getImageScale() / getMapScale();
        photoFeature.changed();


        // console.log("+++++++ scaleImage(" + scale + ") +++++++");
        // console.log("ratio: " + ratio);
        // console.log("++++++++++++++++++++++++++")

    }

    function setOpacity(opacity) {
        style.getImage().setOpacity(opacity);
        rerender();
    }

    function movePointBy(x, y) {
        var origin = photoFeature.getGeometry().getCoordinates();
        photoFeature.getGeometry().setCoordinates(
            [
                origin[0] + x,
                origin[1] + y
            ]
        );
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

    // var moveX = document.getElementById("moveX");
    // moveX.addEventListener("input", function (evt) {
    //     var value = parseInt(moveX.value);
    //     console.log(value);
    //     movePointBy(value, 0);
    // });


    // var moveY = document.getElementById("moveY");
    // moveY.addEventListener("input", function (evt) {
    //     var value = parseInt(moveY.value);
    //     console.log(value);
    //     movePointBy(0, value);
    // });

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

// TODO bild an den zoom anpassen
