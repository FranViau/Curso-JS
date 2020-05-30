
module Tienda{
    export class Ropa{
        constructor( public titulo: string){
            console.log("Bienvenido a la tienda de ropa: "+ titulo);
        }        
    }
    export class Informatica{
        constructor( public titulo: string){
            console.log("Bienvenido a la tienda de Informatica: "+ titulo);
        }        
    }
}
// Desde otro script lo que deberias hacer seria esto: 
import Informaticas = Tienda.Informatica;
let cargarInformatica = new Informaticas("Supertienda");

// Interfaz
interface camisetaBase{ // Son propiedades o metodos que una clase si tiene implements los tiene que seguir si o si
                        // Si no, da error
    setColor(color),
    getColor(),
}
/*
// Decorador (Sirven para añadir funcionalidades a las clases)
function estampar(logo:string){ 
    return function(target: Function){
        target.prototype.estampacion = function : void (){
            console.log("Camiseta estampada con el logo de: "+ logo);
        }
    }
}
*/
//@estampar("Gucci Gang") // El decorador (No se usa con ;)
class Camiseta implements camisetaBase{ // Se puede escribir export delante de la clase para poder usarla en otro script

    constructor(modelo){
        this.modelo = modelo;
    }

    // Propiedades (Caracteristicas del objeto)
    private color: string;
    private modelo: string;
    public marca: string;
    public talla: string;
    public precio: number;

    // Métodos (Funciones o Acciones del objeto)
    public setColor(color){ // Cuando las propiedades son privadas, solo se las puede acceder mediante funciones publicas
        this.color = color;
    }
    public getColor(){
        return this.color;
    }
}

// Clase hija

class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }

    getCapucha():boolean{
        return this.capucha;
    }
}
var camiseta = new Camiseta("Manga larga");

camiseta.setColor("Rojo");
camiseta.marca = "Nike";
camiseta.talla = "L";
camiseta.precio = 300;

// camiseta.estampacion(); Esto es por el decorador el cual añade una funcion a la clase

var sudadera = new Sudadera("Manga corta");
sudadera.setCapucha(true);
sudadera.setColor("Azul");
console.log(camiseta);
