$(document).ready( () =>{
    // Mouse Over y Mouse Out
    let caja = $("#caja");
    /*
    caja.mouseover( () =>{
        caja.css("background","red");
    });
    caja.mouseout( () =>{
        caja.css("background","green");
    });
    */
    function Rojo(){
        $(this).css("background","red");
    }
    function Verde(){
        $(this).css("background","green");
    }
    // Hover
    caja.hover(Rojo,Verde);
    
    // Click y Doble Click
    caja.click(() =>{
        caja.css("background","blue");
    });
    caja.dblclick(() =>{
        caja.css("background","pink");
    });
    var nombre = $("#nombre");
    let datos = $("#datos");
    // Blur 
    nombre.blur( () =>{
        nombre.css("border","2px solid #ccc");
        datos.text(nombre.val()).show(); 
    });
    // Focus
    nombre.focus( () =>{
        nombre.css("border","2px solid green");
    });

    // Mouse down y Mouse Up
    datos.mousedown( () =>{
        nombre.css("border-color","gray");
    });
    datos.mouseup( () =>{
        nombre.css("border-color","black");
    });

    //Mouse move
    $(document).mousemove( function(){
        $("body").css("cursor","none");
        $("#seguime").css("left",event.clientX - 12);
        $("#seguime").css("top",event.clientY - 12);
    });

});