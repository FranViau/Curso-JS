$(document).ready(() => {

    reloadLinks();

    $("#addButton").click( () =>{
        $("#menu").prepend("<li><a href = '"+ $("#addLink").val() + "'> </a></li>"); // Tambien existe .before y .after para agregarlos
                                                                                     // despues de la lista
        reloadLinks();
    })

    
    function reloadLinks(){
        $("a").each(function(i){
            var esto = $(this);
            var enlace = esto.attr("href"); // Attr es para acceder a los atributos del objeto
            esto.attr("target","_blank"); // Le agregamos el atributo target con el valor _blank
            esto.removeAttr("target"); // Se lo removemos
            esto.text(enlace);
        })
    }
});