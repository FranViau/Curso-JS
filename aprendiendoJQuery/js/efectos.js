$(document).ready(() =>{
    var caja = $("#caja");
    $("#mostrar").hide();

    $("#mostrar").click((event) =>{
        $(event.target).hide();
        $("#ocultar").show();
        //caja.show("slow"); // Hay distintas velocidades que se le pueden poner, como fast, normal y slow
        //caja.fadeIn("normal");
        //caja.fadeTo("slow", 1); // El segundo parametro es en que opacidad deberia estar cuando se ejecute esto.
        caja.slideDown("normal");
    })
    $("#ocultar").click((event) =>{
        $(event.target).hide();
        $("#mostrar").show();
        //caja.hide("normal");
        //caja.fadeOut("normal");
        //caja.fadeTo("slow",0.1) // En este caso quedara con opacidad 0.1, por lo que no sera del todo invisible.
        caja.slideUp("normal");
    })

    // Boton toggle
    $("#todoenuno").click(() =>{
        // $("#caja").toggle("normal");
        // $("#caja").fadeToggle("normal");
        caja.slideToggle("normal");
    });

    // Animaciones
    $("#animar").click(() => {
        caja.animate({ 
                marginLeft:"500px",
                fontSize: "40px",
                height:"70px" 
            }, "slow")
            .animate({
                borderRadius:"900px",
                marginTop:"80px",

            }, "slow")
            .animate({
                borderRadius:"0px",
                marginLeft:"0px",

            }, "slow")
            .animate({
                borderRadius:"100px",
                marginTop:"0px",

            }, "slow") 
            ;
    });

});