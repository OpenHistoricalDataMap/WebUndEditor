/*
author: Samuel Erb
e-mail: s0556350@htw-berlin.de
*/

var panels = [$('#uploadMap'),
        $('#adjustMap'),
        $('#drawMap'),
        $('#saveMap')];

function nextPanel(current, next) {
    $(current).hide("slide", {direction: 'left'}, 250);
    $(next).hide().show("slide", {direction: 'right'}, 250);
}

function previousPanel(current, previous) {
    $(current).hide("slide", {direction: 'right'}, 250);
    $(previous).hide().show("slide", {direction: 'left'}, 250);
}

$("#adjustMap > .navigator > .back").on('click', function () {
    previousPanel('#adjustMap', '#uploadMap');
    source.clear();
});
$("#adjustMap > .navigator > .next").on('click', function () {
    nextPanel('#adjustMap', '#drawMap');
});


$("#drawMap > .navigator > .back").on('click', function () {
    previousPanel('#drawMap', "#adjustMap");
    map.removeInteraction(draw);
    document.getElementById("drawModeToggle").checked = false;
});
$("#drawMap > .navigator > .next").on('click', function () {
    nextPanel('#drawMap', '#saveMap');
    map.removeInteraction(draw);
    document.getElementById("drawModeToggle").checked = false;
});


$("#saveMap > .navigator > .back").on('click', function () {
    previousPanel('#saveMap', '#drawMap');
});



for (i = 0; i < panels.length; i++) {

    if (i !== 0) {
        panels[i].hide();
    }
}
