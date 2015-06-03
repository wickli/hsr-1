$(function(){
    /* New */
    $(".js-new").click(function(event){
        var newTemp =  {"id":"0", "date":"2015-11-25", "title":"1", "text":"1", "rating":"1", "done": "1"};
        var newStore = JSON.stringify(newTemp);
        localStorage.setItem('editData', newStore);
        event.preventDefault(); //STOP default action
        window.location.replace("edit.html");
    });
    /* Edit */
    $(".js-store").click(function(event) {
        var editTemp = $("#editform").serializeJSON();
        console.log(editTemp);
        event.preventDefault(); //STOP default action
        var editStore = JSON.stringify(editTemp);
        localStorage.setItem('editData', editStore);
        window.location.replace("index.html");
    });
    $( ".js-store" ).on( "click", function() {
        var notezID = $(this).attr('data-id');
        window.location.replace("edit.html");
    });
    /* Load */
    var notezData = JSON.parse(localStorage.getItem('editData'));
    console.log(notezData);
    /*console.log(notezData);
    $.each(notezData, function(key, value){
        console.log(key + ' = ' + value);
        notez += '"' + key + '" :"' + value + '"';
    });*/
    /*notez = [
        {"id":"01", "date":"15.12.2015", "title":"Notez 1", "text":"Parturient quam eu porttitor morbi nibh a parturient parturient fringilla donec tortor condimentum a torquent hac.Porttitor vestibulum cubilia adipiscing id fermentum ante cras vestibulum nam fermentum curabitur fusce ante.", "rating":3},
        {"id":"02", "date":"15.12.2015", "title":"CAS FEE", "text":"Parturient quam eu porttitor morbi nibh a parturient parturient fringilla donec tortor condimentum a torquent hac.Porttitor vestibulum cubilia adipiscing id fermentum ante cras vestibulum nam fermentum curabitur fusce ante.", "rating":2},
        {"id":"03", "date":"15.12.2015", "title":"My Notez", "text":"Fringilla donec tortor condimentum a torquent hac.Porttitor vestibulum cubilia adipiscing id fermentum ante cras vestibulum nam fermentum curabitur fusce ante.", "rating":1},
    ];*/
    /* View */
    /*var createNotezHtml = Handlebars.compile(document.getElementById("notez-template").innerText);
    function notezList () {
        $("#notezlist").html(createNotezHtml(notez));
    }*/
    /* notezList */
    if($('.notezPage').length ) {
        var notezSource = $("#notez-template").html();
        var notezTemplate = Handlebars.compile(notezSource);
        $('#notezlist').html(notezTemplate(notezData));
    }
    /* Edit */
    if($('.editPage').length ) {
        var editSource = $("#edit-template").html();
        var editTemplate = Handlebars.compile(editSource);
        $('#edit').html(editTemplate(notezData));
    }
});

