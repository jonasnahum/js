"use strict";
this.persona = {
    nombre: "jonas",
    decirNombre: function(){
        console.log(this.nombre);//this es el objeto.
    }    
};
this.persona.decirNombre();

var Persona = function (){
    this.apellido = "jimenez garcia";
    this.nombre = "pedro";
    this.decirApellido = function (){
        console.log(this.apellido);
    };
};
var otraPersona = new Persona();
otraPersona.decirApellido();
this.persona.decirNombre.call(otraPersona);
this.persona.decirNombre.apply(otraPersona);
var per = this.persona.decirNombre.bind(otraPersona);
per();

this.persona.decirNombre();