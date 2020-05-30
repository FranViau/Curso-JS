
var bicicleta = {
    color: "Rojo",
    modelo: "BMX",
    frenos: "A disco",
    velocidadMax: "60km",
    cambiarColor: function(nuevoColor){
        //bicicleta.color = nuevoColor;
        this.color = nuevoColor;
    },
};
bicicleta.cambiarColor("Azul");
bicicleta.color = "Amarillo";
