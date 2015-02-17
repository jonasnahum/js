"use strict";

function Vector(x, y) {
    this.x = x;
    this.y = y;
}
Vector.prototype.z = 3;

function VectorHijo(x, y) {
    Vector.call(this, x, y);//1er paso para hacer herencia. se pasa este objeto y dos params a la funcion Vector para que ella trabaje.
    this.nombre = "Hijo de Vector";
}
VectorHijo.prototype = Object.create(Vector.prototype);//2do paso . create crea un nuevo objeto con el objeto y propiedades del prototipo especificado. creo que es como override.
VectorHijo.prototype.z = 4;


 var vector = new Vector(1, 2);
 var vector2 = new Vector(5, 8);
 var vector3 = new VectorHijo(6, 6);



var mexico = function (objectToIterate){
    var result = [];
    for(var property in objectToIterate) {
        if (objectToIterate.hasOwnProperty(property)) {
            result = result + property + " (own) tiene el valor " + objectToIterate[property];
        }else{
            result = result + property + " (proto) tiene el valor " + objectToIterate[property];
        }
    }
    console.dir(result);
};
mexico(vector3);