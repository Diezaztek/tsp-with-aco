$(document).ready(function() {
    $('#backgroundFile').change(function(evt) {
        $("#definitionCanvas").css({backgroundImage:`url(${$(this).val()})`,
                                    backgroundSize: "contain"});
    });

    $( "#calculate" ).click(function() {
        console.log(nodes);
        console.log(links);
    });
});