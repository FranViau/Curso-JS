"use strict"
window.addEventListener("load", () => { //Fetch (metodo que hace peticiones ajax) y peticiones a servicios / apis Rest
    // Una peticion Ajax es una llamada a un servicio REST, a un Api REST o a un Back End que nos devuelve un resultado
    // Entonces, vamos a usar el metodo Fetch, para hacer peticiones Ajax y conseguir resultados desde un servicio externo
    // JSON Place Holder es una API REST con datos de prueba. Una API REST es un servicio o un Back-End que nos devuelve datos en JSON
    // Puede recibir peticiones por metodos HTTP como POST.
    // La extension de google "JSON View" permite formatear JSONs en la web
    // Fetch maneja promesas, estas son objetos que los podemos tener ahora, los podemos tener despues, o no los podemos tener nunca,
    // pero nos aseguran que cuando lo tengamos, el codigo que escribamos en estas se va a ejecutar cuando las tengamos.

    var divUsuarios = document.querySelector("#usuarios");
    var divUsuario = document.querySelector("#usuario");
    
    getUsuarios() // Esto es una promesa
        .then( data => data.json()) // Lo que hace esto es transformar un objeto que nos llega a JSON
        .then( data => { // Estos son los datos que nos devuelve la promesa de getUsuario()
            listadoUsuarios(data); // Esta es una funcion para manejar y mostrar los datos de la promesa anterior

            return getInfo(); // Esta es otra promesa
        })
        .then(data => {
            console.log(data); // Los resultados de la promesa getInfo()

            return getUsuario(); // Esta es la ultima promesa
        })
        .then(data => data.json())
        .then(usuario => {
            mostrarUsuario(usuario.data); // La funcion para mostrar los datos de la promesa getUsuario()
        })
        .catch(error => {
            console.log(error); // Esta es la forma de captar los errores de las promesas.
        })
        ;

    function getUsuarios(){
        return fetch("https://jsonplaceholder.typicode.com/users");  // La URL de la que proviene el JSON
    }

    function getUsuario(){
        return fetch("https://reqres.in/api/users/2");  // La URL de la que proviene el JSON
    }

    function getInfo(){ // CREANDO UNA PROMESA
        
        let profesor = {
            nombre: "Victor",
            apellido: "Robles",
            mail: "victorrobles@gmail.com"
        };
        return new Promise( (resolve,reject) => { // Resolve y reject son dos funciones

            var profeString = "";

            setTimeout(() =>{ // Este timeout es para darse cuenta que las promesas se ejecutan una vez que termine el anterior .then
                              // En este caso podemos ver que mostrarUsuario() solo se ejecuta despues de esta promesa, esperando 3 seg.
                profeString = JSON.stringify(profesor);

                if(typeof profeString != "string" || profeString == "") return reject("Error"); // Reject es una funcion la cual tira un error

                return resolve(profeString);
            },3000);
            
            
        });
        
    }

    function listadoUsuarios(users){

        users.map( (user,i) => {

            let nombre = document.createElement("h3");
            nombre.innerHTML = i + " - " + user.name;
            divUsuarios.appendChild(nombre);
        })
        document.querySelector("#usuarios .cargando").style.display = "none";
    }

    function mostrarUsuario(user){
        let nombre = document.createElement("h4");
        let avatar = document.createElement("img");
        avatar.src = user.avatar;
        avatar.width = "100";  
        nombre.innerHTML = user.first_name + " " + user.last_name + "<br>";
        divUsuario.appendChild(nombre);
        divUsuario.appendChild(avatar);
        document.querySelector("#usuario .cargando").style.display = "none";
    }
    
})  
