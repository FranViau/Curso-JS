"use strict"
window.addEventListener("load", () => { // PARA QUE CARGUEN TODOS LOS ELEMENTOS DE LA PAGINA ANTES DE APLICAR JS
        // EVENTOS DEL MOUSE
    var boton = document.querySelector("#boton");
    function cambiarColor(){
        var bg = boton.style.backgroundColor;
        if(bg == "red") boton.style.backgroundColor = "green"; else boton.style.backgroundColor = "red";
    }
    // CLICKS
    boton.addEventListener("click", () => {
        cambiarColor();
    });

    boton.addEventListener("mouseover", () => { // Tambien existe mouseout y mousein
        boton.style.backgroundColor = "#CCC";
    })

    // FOCUS
    var input = document.querySelector("#nombre");
    input.addEventListener("focus", () => { 
        console.log("Estas dentro del input");
        input.style.padding = "20px";
    });
    // BLUR
    input.addEventListener("blur", () => { 
        console.log("Estas fuera del input");
        input.style.padding = "0px";
    });
    // KEY DOWN
    input.addEventListener("keydown", event => { 
        console.log("Presionaste una tecla ", String.fromCharCode(event.keyCode));
    });
    // KEY PRESS
    input.addEventListener("keypress", () => { 
        console.log("Presionando tecla: ", String.fromCharCode(event.keyCode));
    });
    // KEY UP
    input.addEventListener("keypress", () => { 
        console.log("Soltaste la tecla: ", String.fromCharCode(event.keyCode));
    });

    // TIMERS
    var heading = document.querySelector("h1");
    function intervalo(){
        let tiempo = setInterval( () => {
            if(heading.style.fontSize == "50px") heading.style.fontSize = "30px"; else heading.style.fontSize = "50px";
            console.log("Intervalo ejecutado");
        }, 2000 ); // 2000 = 2 segundos cada intervalo
        return tiempo;
    }
    let tiempo = intervalo();

    // STOP INTERVAL
    var stop = document.querySelector("#stop");
    stop.addEventListener("click", () => {
        clearInterval(tiempo);
        console.log("Paraste el intervalo");
    } )
    // START INTERVAL
    var start = document.querySelector("#start");
    console.log("Empezaste el intervalo");
    start.addEventListener("click", () => {
        intervalo();
    })
})
