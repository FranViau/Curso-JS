"use strict"
// Se pueden tomar parametros de la consola con Node.js, de este modo:
var params = process.argv.slice(2);

var numero1 = parseFloat(params[0]);
var numero2 = parseFloat(params[1]);

var plantilla = `
La suma es: ${numero1 + numero2}
La resta es: ${numero1 - numero2}
La división es: ${numero1 / numero2}
La multiplicación es: ${numero1 * numero2}
`;
console.log(plantilla);
// Los parametros se pasan en la llamada al archivo de este modo: node calculadora.js primerParam segundoParan tercerParan
// Lo que hace el slice es cortar desde la posicion 2, por lo que la ruta de node.exe (primera posicion) y la ruta
// del archivo (segunda posicion), no se muestran, solo dejando los argumentos pasados por la consola