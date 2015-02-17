"use strict";
function Auto() {
    this.conducir = function(conductor) {
    return conductor + " estaá manejando un Auto";
}
}
function Camion(){
    this.conducir = function(conductor) {
    return conductor + " está manejando un camión";
}
}
exports.Camion = Camion;
exports.Auto = Auto;


exports.metodo = function(conductores, vehiculos){
    var result = [];
    for(var i = 0; i < conductores.length; i++) {
        for (var j = 0; j < vehiculos.length; j++){
            var persona = conductores[i];
            var vehiculo = vehiculos[j];
            result.push(vehiculo.conducir(persona));
        }
    }
    return result;
};

// function Crujitos (){
//     this.agarrar = function (niño){
//         return niño + "esta aggarando crujitos";
//     };
// }
// function Refresco (){
//     this.agarrar = function (niño){
//         return niño + "esta agarrando refresco";
//     };
// }
// var niños = ["diego", "bryan", "elpollo"];
// var botanas = [ new Crujitos(), new Refresco()];

// for (var i = 0; i < niños.length; i++){
//     for (var j = 0; j < botanas.length; j++){
//       var niño = niños[i];
//       var botana = botanas[i];
//       console.log(botana.agarrar(niño));
//     }
// }

