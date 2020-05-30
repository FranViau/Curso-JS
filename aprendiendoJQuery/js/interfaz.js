$(document).ready(()=>{

    let elemento = $(".elemento");

    // Mover elemento por la pagina
    elemento.draggable();

    // Redimensionar elementos en la pagina, hay que importar los estilos css
    elemento.resizable();

    // Hacer una lista de elementos seleccionables
    //$(".listaSelecc").selectable(); 

    // Ordenar los elementos
    $(".listaSelecc").sortable({
        update: function(event,ui) {
            console.log("Cambio la lista");
        }
    });

    // Droppable
    $("#elemMovido").draggable();
    $("#area").droppable({
        drop: function() {
            console.log("Has soltado algo dentro");
        }
    })

    // Efectos
    $("#mostrar").click(() =>{
        //$(".cajaEfectos").toggle("explode");
        //$(".cajaEfectos").toggle("blind");
       // $(".cajaEfectos").toggle("drop");
       //$(".cajaEfectos").toggle("fold");
       //$(".cajaEfectos").toggle("puff");
       //$(".cajaEfectos").toggle("scale",4000);
       $(".cajaEfectos").toggle("shake","slow"); // El segundo parametro es la velocidad, puede ser segundos o fast slow normal
    });

    // ToolTips
    $(document).tooltip(); // Lo que hace esto es mostrar una ventanita con el title del elemento cuando haces hover

    // Cuadros de dialogo
    $(".popup").dialog();   

    // Calendario
    $("#calendario").datepicker();

    // Tabs
    $("#pestanas").tabs();
});