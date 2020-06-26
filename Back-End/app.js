// ACA SE VAN A GUARDAR LA CONFIGURACION DE EXPRESS Y DE LAS PETICIONES CON BODYPARSER.
"use strict"
var express = require("express"); // Cargar el modulo de express
var bodyParser = require("body-parser"); // Cargar el modulo de bodyParser
const { urlencoded } = require("body-parser");

var app = express();

// CARGAR ARCHIVOS DE RUTAS
var projectRoutes = require("./routes/project");

// MIDDLEWARES: Son un metodo que se ejecuta antes de ejecutar la accion de un controlador, antes del resultado de la peticion.
app.use(bodyParser.urlencoded({extended:false})); // Creando un middleware utilizando bodyparse
app.use(bodyParser.json()); // Todo lo que le llegue lo convierte a json
app.use(bodyParser({limit:"50mb"}));

// CORS (cross-origin resource sharing) Permite compartir datos entre dominios sin problemas
app.use((req, res, next) => { // Pernite el acceso de un dominio a otro sin generar problemas (este codigo es un snippet)
    res.header('Access-Control-Allow-Origin', '*'); // Si publicamos la pagina, en el asterisco debe ir la URL
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next(); // Esto pasa a las rutas, despues de haber declarado los headers
});
// RUTAS

// app.use("/api",projectRoutes); // EN localhost:3700/api/test estara la funcion test y lo mismo que en /api/home
app.use("/",projectRoutes);
/*
app.post("/",(req,res) => { // REQ = Request RES = Response
    console.log(req.body.name); // Body es para recibir un parametro por la web, lo estoy haciendo mediante postman (extension de google)
                                // Presionando la tab "body" y con "x-www-form-urlencoded" Pasando un json con clave "name", si 
                                // quisiera hacerlo por parametros en la url deberia ser req.query.name
                                // Tambien esta req.params.name que se utiliza cuando pasas un parametro en la url como por ejemplo
                                // localhost:3700/franco/?name=FrancoViau, en este caso franco es params y FrancoViau es query
    
    res.status(200).send(
        "<h1>Hola desde mi API de NodeJS</h1>"
    );
});

app.get("/test",(req,res) => {
    res.status(200).send({
        message: "Hola desde mi API de NodeJS"
    });
});*/


// EXPORTAR EL MODULO APP
module.exports = app;