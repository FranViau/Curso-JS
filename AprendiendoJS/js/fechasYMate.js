"use strict"
window.addEventListener("load", () => { 

    var fecha = new Date();
    var year = fecha.getFullYear();
    var mes = fecha.getMonth();
    var dia = fecha.getDay();
    var hora = fecha.getHours();
    var textoHora = `
        El año es: ${year}
        El mes es: ${mes}
        El dia es: ${dia}
        La hora es: ${hora}
    `;
    console.log(textoHora);
    console.log(Math.ceil(Math.random() * 1000)); // Viene un numero decimal, por lo que lo multiplicamos por la cantidad de digitios que queremos que tenga
    // https://www.w3schools.com/js/js_math.asp en esta pagina se encuentran muchas funciones matematicas de JavaScript
});