var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Camiseta = /** @class */ (function () {
    function Camiseta(modelo) {
        this.modelo = modelo;
    }
    // Métodos (Funciones o Acciones del objeto)
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
// Clase hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
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
