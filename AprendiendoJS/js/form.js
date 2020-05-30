window.addEventListener("load", () => {
    var formulario = document.querySelector("#formulario");
    var boxDashed = document.querySelector(".dashed");
    boxDashed.style.display = "none";
    formulario.addEventListener("submit", () => {

        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = document.querySelector("#edad").value;
        var errorNombre = document.querySelector("#errorNombre");
        var errorEdad = document.querySelector("#errorEdad");
        var errorApellidos = document.querySelector("#errorApellidos");

        nombre.trim(); apellidos.trim(); edad.trim();
        if(nombre == null || nombre.length == 0 || !isNaN(nombre)) {
            errorNombre.innerHTML = "El nombre no es valido"
            return false;
        } else errorNombre.style.display = "none";

        if(apellidos == null || apellidos.length == 0 || !isNaN(apellidos)) {
            errorApellidos.innerHTML = "Los apellidos no son validos"
            return false;
        } else errorApellidos.style.display = "none";

        if(edad == null || edad <= 0 || isNaN(edad)) {
            errorEdad.innerHTML = "La edad no es valida"
            return false;
        } else errorEdad.style.display = "none";

        boxDashed.style.display = "block";

        var datos = new Array(nombre,apellidos,edad);
        for(let indice in datos){
            var parrafo = document.createElement("p");
            parrafo.append(datos[indice]);
            boxDashed.append(parrafo);
        }
        
    });
    

    
})