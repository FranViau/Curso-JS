$(document).ready(() =>{

    // Seleccionar IDs
    let rojo = $("#rojo").css("background","red")
                          .css("color","white");

    // Seleccionar Clases                          
    let verde = $(".verde");

    $(".verde").click( (event) => {
        $(event.target).addClass("sinborde");
    });

    // Seleccionando etiquetas
    let p = $("p");
    p.click(function(){
        var esto = $(this);
        if(esto.hasClass("verde"))   esto.removeClass("verde");
        else esto.addClass("verde");
    });

    // Selectores de atributo
    $("[title='Youtube']").css("background","red");

    // Otros
    $("p , a").addClass("margin-tp");

    var resaltado = $("#caja").find(".resaltado"); // Seleccionara el span y un li
    var busqueda =$("#caja li").parent().parent().parent().find("[title='Youtube']"); // Subiendo capas para poder encontrar Youtube
    console.log(busqueda);
});