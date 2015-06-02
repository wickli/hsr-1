$(function(){
    /* Edit */
    $(".js-store").click(function(event) {
        var editTemp = $("#editform").serializeJSON();
        console.log(editTemp);
        event.preventDefault(); //STOP default action
        var editStore = JSON.stringify(editTemp);
        localStorage.setItem('editData', editStore);
        window.location.replace("index.html");
    });
    /* Load */
    notez = [];
    var notezData = localStorage.getItem('editData');
    /*console.log(notezData);
    $.each(notezData, function(key, value){
        console.log(key + ' = ' + value);
        notez += '"' + key + '" :"' + value + '"';
    });*/
    notez = notezData;
    console.log(notez);
    /*notez = [
        {"id":"01", "date":"15.12.2015", "title":"Notez 1", "text":"Parturient quam eu porttitor morbi nibh a parturient parturient fringilla donec tortor condimentum a torquent hac.Porttitor vestibulum cubilia adipiscing id fermentum ante cras vestibulum nam fermentum curabitur fusce ante.", "rating":3},
        {"id":"02", "date":"15.12.2015", "title":"CAS FEE", "text":"Parturient quam eu porttitor morbi nibh a parturient parturient fringilla donec tortor condimentum a torquent hac.Porttitor vestibulum cubilia adipiscing id fermentum ante cras vestibulum nam fermentum curabitur fusce ante.", "rating":2},
        {"id":"03", "date":"15.12.2015", "title":"My Notez", "text":"Fringilla donec tortor condimentum a torquent hac.Porttitor vestibulum cubilia adipiscing id fermentum ante cras vestibulum nam fermentum curabitur fusce ante.", "rating":1},
    ];*/
    /* View */
    /*var createNotezHtml = Handlebars.compile(document.getElementById("notez-template").innerText);
    function notezList () {
        $("#notezlist").html(createNotezHtml(notez));
    }
    notezList();*/
    var source   = $("#notez-template").html();
    var template = Handlebars.compile(source);
    //console.log(data);
    $('#notezlist').html(template(notez));
});

