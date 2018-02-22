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
                //showText: false
            }
        ]
    });
} );
document.getElementById('info-editor').addEventListener('click', function () {
    // alert("Please read this information carefully!\n\n" +
    //     "Right now you can only draw one layer at a time.\n" +
    //     "One layer could be a building, a river or a street\n" +
    //     "Please note that label's for the above mentioned layer's are layer's themselves.")
    $( "#dialog" ).dialog("open");
});
