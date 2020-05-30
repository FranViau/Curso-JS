"use strict"
window.addEventListener("load", () => {
    // JSON - JavaScript Object Notation
    var pelicula = {
        titulo: "Batman vs Superman",
        year: "2017",
        pais: "Estados Unidos",
    };

    var peliculas = [
        {titulo: "La verdad duele", year: 2016, pais: "Francia"},
        pelicula
    ];

    var divPeliculas = document.querySelector("#peliculas");

    for(let index in peliculas){
        var p = document.createElement("p");
        p.append(peliculas[index].titulo + " - " + peliculas[index].year + " - " + peliculas[index].pais );
        divPeliculas.append(p);
    }   
})