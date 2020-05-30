// El 85% de este lenguaje es JavaScript
// Para correr un archivo .ts hay que descargarse node.js y luego hacer en el cmd npm install -g typescript
// Despues hacer cd hasta llegar a la ruta del archivo y hacer tsc nombreDelArchivo
// Esto generara un nuevo archivo con el mismo nombre pero con .js, que es el que vamos a incluir en nuestro html
// Una forma de no tener que estar compilando continuamente los archivos .ts para pasar a .js se puede generar una
// compilacion automatica con el comando tsc -w *.ts (este comando hay que correrlo desde el bash (puede ser con cygwin terminal))

// TypeScript es un lenguaje de tipado fuerte, es decir, las variables tienen que declararse con un tipo (string,bool,int,etc..)

// STRING
let cadena: string = "Hola";

// NUMBER
let numero: number = 12;

// BOOLEAN
let siono: boolean = true;

// ANY
let cualq: any = "Hola";
cualq = 124;

// ARRAY
let lenguajes: Array<string> = ["PHP","MySQL","C++"];

let lenguajeS: string[] = ["PHP","MySQL","C++"];

let sionoyNumber: boolean | number = true;
sionoyNumber = 18;

// DEFINIR TIPOS DE VARIABLES
type alfanumerico = string | number;

let numOString: alfanumerico = "hola";
numOString = 412;

// FUNCIONES EN TIPADO FUERTE

function getNumero(numero:number):string{ // String es lo que devuelve, number es el tipo de dato del parametro
    return "El numero es: " + numero;
}
var num:string = getNumero(32);