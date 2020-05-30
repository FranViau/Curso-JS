$(document).ready(()=>{

    let datos = $("#datos");

    // Load
    // datos.load("https://reqres.in/"); // Trae toda la informacion de la URL que le metas por medio de peticiones Ajax, lo devuelve por el metodo GET

    // GET
    $.get("https://reqres.in/api/users",{page:2}, function(response){
        response.data.forEach((element, index) =>{
            datos.append("<p>"+ element.first_name + " " + element.last_name +"</p>");
        });
    });

    

    var formulario = $("#formulario");
    formulario.submit((event) => {
        event.preventDefault(); // Esto es para que no haga la accion por defecto de los formularios (redirigirte a la URL del action)
        var usuario = {
            name: $("input[name='name']").val(),
            edad: $("input[name='edad']").val(),
        };
        // POST
        /*
        $.post($(event.target).attr("action"), usuario, function(response){// Al usar metodos distintos van por canales diferentes
                                                                           // por lo que pueden dar usuarios diferentes
            console.log(response);
        }).done(() =>{
            alert("Usuario Cargado Correctamente");
        }); 
        */

        // $AJAX
        $.ajax({
            type: "POST",
            dataType: "json", // Que formato tienen los datos que se mandan y se reciben
            url: $(event.target).attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log("Enviando Formulario");
            },
            success: function(response){
                console.log(response);
            },
            error: function(){
                console.log("Ocurrió un error" );
            },
            timeout: 2000, // Cuanto tiempo quiero que tarde en realizarse esta peticion, entonces si le pongo 100ms, va a ocurrir
                            // un error ya que no llega en tiempo

         })

        return false; // Tiene la misma funcion que el preventDefault()
    });

    
    

});