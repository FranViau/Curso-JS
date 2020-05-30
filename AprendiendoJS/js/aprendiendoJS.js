'use strict' // Muestra mas errores, no te deja declarar una variable sin antes ponerle var, let o const por ejemplo, ya que tira error
document.write("<h1> Aprendiendo JavaScript </h1>")
//  LET Y VAR

// Let permite definir variables limitando su alcance al bloque de declaracion o expresion donde se esta usando
// Var define una variable global o local en una funcion sin importar el ambito del bloque

// PRUEBA CON VAR
var numero =  44;
if(true){
    var numero = 50; // numero: valor 50
}
// numero: valor 50

//PRUEBA CON LET
let numero2 = 44;
if(true) {
    let numero2 = 50; // numero2: valor 50
}
// numero2: valor 44

// TIPOS DE DATOS
var numero = "43";
var numero1 = Number(numero); // Convierte a float o a int
var numero2 = parseInt(numero); // Convierte a int
var numero3 = parseFloat(numero); // Convierte a float
var texto = String(numero3); // Convierte a String  
var tipo = typeof texto; // Devuelve el tipo de dato


// SWITCH
var edad = 18;
switch(edad){
    case 18: 
        //console.log("18");
        break;
    case 60: 
        //console.log("60");
        break;
    default:
        //console.log("Qsyo");
        break;
}

//DEBUGEAR
debugger; // Escribiendo esto en el codigo y yendo a sources en el navegador se puede debugear

// DO WHILE
var numero = 20;
do{
    //console.log("Esto se imprime si es diferente a 20");
}while( numero != 20 )

// ALERTAS
alert("HOLA");
var resultado = confirm("¿Estas Seguro?"); // Podes decir que si o que no, devuelve true o false
var resultado2 = prompt("¿Que edad tenes?", 18 ); // Le permite ingresar valores, el segundo parametro es el valor por defecto

// isNaN (Not a Number)
var resultado = isNaN(prompt("INGRESE NUMERO")); // DEVUELVE TRUE SI NO ES UN NUMERO Y FALSE SI ES NUMERO

// INSERTAR VALORES AL HTML
document.write("<h1> Hola Mundo </h1>")

// FUNCIONES
function calculadora(numero1,numero2){
    return numero1 + numero2;
}
calculadora(2,3);

// PARAMETROS REST Y SPREAD
// REST
function listaFrutas(fruta1, fruta2, fruta3, ...resto_de_frutas){ 
    //console.log(fruta1,fruta2);
    //console.log(resto_de_frutas); // Los parametros que se escriben con tres puntos delante significa que si la funcion recibe mas de tres parametros, los demas se van
                                  // a guardar en un array llamado resto_de_frutas. Esto es para capturar un numero indefinido de parametros.
}
// SPREAD
var frutas = ["Naranja", "Manzana"];
listaFrutas(...frutas); // Lo que hace esto es que se pasen todas las posiciones de frutas como parametros individuales

// FUNCIONES ANONIMAS Y CALLBACKS(Funciones que no tienen nombre)
var pelicula = function(nombre){ return "La pelicula es: " + nombre; } // Estas funciones permiten hacer callbacks (funciones que se llaman dentro de otras)
                                                                       // Una funcion callback es anonima y se le pasa como parametro a otra funcion
// EJEMPLO
function sumame(num1, num2, sumaYMuestra, sumaPorDos){
    var suma = num1 + num2;
    sumaYMuestra(suma);
    sumaPorDos(suma);
}
sumame( 5, 7, function(dato){ 
    //console.log("La suma es: " + dato);
},
function(dato){
    //console.log("La suma por dos es: " + (dato*2));
}
)
// FUNCIONES FLECHA
sumame(5,7, (dato) =>{ }, dato => { }) // Cuando hay un parametro, no es necesario usar parentesis, cuando hay 0 o mas de 1 si es necesario.

// BUSQUEDA Y EDICION DE TEXTOS
var text = "Hola como andan me llamo Franco";
//console.log( text.toUpperCase() );
var nombre = ""; 
//console.log(nombre.length); // Returna 0, Tambien se puede usar para la cantidad de elementos en un array
var busqueda = text.indexOf("como"); // Returna en la posicion del string text donde se encuentra la palabra "como". Tambien existe lastIndexOf,
                                     // la cual returna la ultima incidencia de ese string
var busqueda = text.search("xd"); // Funciona igual que indexOf, si no existe returna -1
var busqueda = text.match("como"); // Busca las incidencias de un string en otro pero da varios datos, en un array indica la cantidad de incidencias y donde se encuentran
var subString = text.substr(14, 5); // Crea un string con los caracteres de text desde el caracter 14, 5 caracteres en adelante. 
var caracter = text.charAt(44); // Devuelve el caracter que se encuentre en la posicion 44.
var inicio = text.startsWith("Hola como"); // Returna true o false si el string text comienza con el parametro. Tambien existe endsWith().
var existe = text.includes("andas"); // Devuelve true o false si lo incluye o no
var reemplazar = text.replace("Franco", "Victor"); 
var cortar = text.slice(14); // A partir de que caracter te devuelve, en este caso devuelve desde el caracter 14 del string text. Se puede meter segundo parametro "hasta"
var separar = text.split(" "); // Separa al string en un array por cada espacio que encuentra. En este caso cada posicion del array seria una palabra
var texto = "       Hola       ";
var limpio = texto.trim(); // Saca los espacios que tiene por delante y por detras el string

// PLANTILLAS DE TEXTO
var nombre = "Franco"; var apellidos = "Rodriguez Viau";
var plantilla = `
    <h2> Hola como andan, </h2>
    <h3> Me llamo ${nombre} y mi apellido es ${apellidos}</h3> 
`;
document.write(plantilla);

// ARRAYS Y ARREGLOS
var nombres = ["Franco", "Malena", "Bruno", 52, true];
var lenguajes = new Array("JavaScript", "C++", "Java", "Ruby", "HTML"); 
//  RECORRER ARRAYS
document.write("<ul>");
nombres.forEach( (elemento, indice) => { // El parametro indice es opcional
    document.write( "<li>"+ indice + " - " + elemento + "</li>" );
});
for(let lenguaje in lenguajes){ // lenguaje es el indice
    document.write( "<li>"+ lenguaje + " - " + lenguajes[lenguaje] + "</li>" );
}
document.write("</ul>");


// ARRAYS BIDIMENSIONALES
var matrix = [nombres, lenguajes];
// AGREGAR ELEMENTOS
matrix[0].push("Rodolfo");
matrix[0].pop();
// BORRAR ALGUN ELEMENTO
var indice = nombres.indexOf("Malena");
if(indice > -1){
    nombres.splice(indice, 1); // Splice toma desde que indice borrar y el segundo parametro es cuantas posiciones en adelante, esto es para borrar solo la posicion "Malena".
}
var texto = nombres.join();// Pasar de Array a String separandolos con comas.

// SORTING ARRAYS
nombres.sort(); // Ordena por orden alfabetico
nombres.reverse(); // Da vuelta el array

// BUSQUEDA
var busqueda = lenguajes.findIndex( lenguaje => lenguaje == "PHP"); // Devuelve -1 si no lo encuentra
var precios = [10,20,25,36,48,62];
var busqueda2 = precios.some( precio => precio > 30); // Devuelve true o false si existe alguno o no

// TRY CATCH

try{
    var year = 2020;
    alert(yea);
}
catch(error){
    console.log("Hubo un error: " + error);
}


