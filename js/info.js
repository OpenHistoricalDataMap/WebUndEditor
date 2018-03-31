/*
author: Samuel Erb
e-mail: s0556350@htw-berlin.de
*/

document.getElementById('info-editor').addEventListener('click', function () {
    $( "#dialog" ).dialog("open");
});
$( function() {
    $( "#dialog" ).dialog({
        closeText: "hide",
        modal: true,
        autoOpen: false,
        buttons: [
            {
                text: "Ok",
                icon: "ui-icon-heart",
                click: function() {
                    $( this ).dialog( "close" );
                }
                // Uncommenting the following line would hide the text,
                // resulting in the label being used as a tooltip
                // showText: false
            }
        ]
    });
} );