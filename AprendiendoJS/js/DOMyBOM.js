"use strict"
// EL DOM (DOCUMENT OBJECT MODEL)
//var caja = document.getElementById("caja");
var caja = document.querySelector("#caja");
var divs = document.getElementsByTagName("div"); // El querySelector solo selecciona un elemento, por lo que existe querySelectorAll.
for(let div in divs){  
    if(divs[div].tagName == "div"){ // Este if lo pongo porque da error sino, asi me certero de que todos son divs.
        var parrafo = document.createElement("p");
        var texto = document.createTextNode("Hola soy un div");
        parrafo.prepend(texto);
        divs[div].appendChild(parrafo);
    } 
}

caja.innerHTML = "Hola Mundo"
caja.style.backgroundColor = "red";
caja.style.padding = "20px";
caja.className = "micaja";

// EL BOM (Browser Object Model)
console.log(window.innerHeight); // la altura de la pantalla de la pagina
console.log(window.innerWidth); // El ancho de la pantalla de la pagina
console.log(screen.height); // La altura de la pantalla
console.log(screen.width); // El ancho de la pantalla
console.log(window.location.href); // La direccion actual del navegador

function redirigir(url){
    window.location.href = url;
}
function abrirVentana(url){
    window.open(url,"_blank","width=600,height=500");
}

