"use strict"
var mongoose = require("mongoose"); // Cargar el modulo de mongoose
var app = require("./app"); // App es el modulo donde esta express
var port = 3700;

mongoose.Promise = global.Promise; // Le indico que es una promesa
mongoose.connect("mongodb://localhost:27017/portafolio") // De esta forma se conecta a la base de datos de MongoDB con Node.
        .then( ()=>{
            // console.log("Conexion a base de datos establecida");

            // Creacion del servidor
            app.listen(port, ()=>{
                console.log("Servidor funcionando correctamente en localhost:3700");
                
            })
            
        })
        .catch( err => console.log(err) );
// La url de la base de datos tiene seleccionada portafolio para mostrar.