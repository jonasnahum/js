"use strict";
var print = function (){
    for(var i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
};
print("hola", "mundo");

var persona = {nombre: "jonas"};




var f = function (text){
    return text + " mi nombre es: " + this.nombre;
};

exports.printCall = function(text){
    var result = f.call(persona, text);//argumentos separados por coma.para que el obj persona se vuelva this dentro de f.
    return result;
};

exports.printApply = function(){
    var result = f.apply(persona, arguments);//argumentos en array.//para que persona se vuelva this adentro de f.aplica a la function los argumentos cualesquiera que recibe, a travez de arguments todos metodos tienen arguments.
    return result;
};

exports.printBind = function (text) {
    var bound = f.bind(persona);//en bound se guarda una funcion con el objeto persona y el objeto es this.
    var result = bound(text);//se mandan los argumentos separados por coma.
    return result;
};
