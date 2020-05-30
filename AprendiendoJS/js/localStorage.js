"use strict"
window.addEventListener("load", () => {
    // El Local Storage permite que se pueda guardar informacion en el navegador web a modo de sesion para que esta informacion 
    // persista y este disponible en la navegacion de las diferentes paginas de nuestra pagina web
    // El Local Storage se puede observar en Inspeccionar > Application > Local Storage, ahi dentro se pueden ver los datos guardados

    // Comprobar disponibilidad de Local Storage
    if(typeof(Storage) != "undefined"){
        console.log("Esto significa que el navegador es reciente y esta disponible el Local Storage");
    }
    else console.log("Incompatible con local storage");

    // Guardar datos en el Local Storage
    localStorage.setItem("titulo", "cursoJS");

    // Recuperar datos
    document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

    // Guardar objetos
    var usuario = {
        nombre: "Franco Viau",
        mail: "franco.rodriguez.viau@gmail.com",
        edad: "16"
    };
    localStorage.setItem("usuario", JSON.stringify(usuario)); // Stringify es para convertir un JSON a un string
    
    // Recuperar objetos
    var user = JSON.parse(localStorage.getItem("usuario"));
    console.log(user);

    // Borrar elementos
    localStorage.removeItem("titulo");
    localStorage.clear(); // Borra todo el Local Storage

    // Mostrar todo el Local Storage
    for(let index in localStorage){
        if(typeof localStorage[index] == "string")
            console.log(localStorage[index]);
    }

})