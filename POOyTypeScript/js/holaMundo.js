// El 85% de este lenguaje es JavaScript
// Para correr un archivo .ts hay que descargarse node.js y luego hacer en el cmd npm install -g typescript
// Despues hacer cd hasta llegar a la ruta del archivo y hacer tsc nombreDelArchivo
// Esto generara un nuevo archivo con el mismo nombre pero con .js, que es el que vamos a incluir en nuestro html
// Una forma de no tener que estar compilando continuamente los archivos .ts para pasar a .js se puede generar una
// compilacion automatica con el comando tsc -w *.ts (este comando hay que correrlo desde el bash (puede ser con cygwin terminal))
// TypeScript es un lenguaje de tipado fuerte, es decir, las variables tienen que declararse con un tipo (string,bool,int,etc..)
// STRING
var cadena = "Hola";
// NUMBER
var numero = 12;
// BOOLEAN
var siono = true;
// ANY
var cualq = "Hola";
cualq = 124;
// ARRAY
var lenguajes = ["PHP", "MySQL", "C++"];
var lenguajeS = ["PHP", "MySQL", "C++"];
var sionoyNumber = true;
sionoyNumber = 18;
var numOString = "hola";
numOString = 412;
// FUNCIONES EN TIPADO FUERTE
function getNumero(numero) {
    return "El numero es: " + numero;
}
var num = getNumero(32);
