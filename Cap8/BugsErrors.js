"use strict";
var bugs = require("./BugsErrors.js");

function MultiplicatorUnitFailure() {}//type. for rise an exeption.

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

exports.reliableMultiply = function (a, b) {//keeps trying until a call succeeds and returns the result
  for (;;) {//intentionally create a loop that doesn’t terminate on its own.We break out of the loop only when a valid value is give.
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure))
        throw e;//si entra aqui esto rompe y aqui se termina. lo que nunca sucede, porque todas los errores seran de tipo instance of.
    }
  }//cuando llega aquí, como no tiro exepcion, entonces vuelve a iterar.
};


exports.box = {
    locked: true,
    unlock: function() { 
        this.locked = false;
        },
    lock: function() { 
        this.locked = true;
        },
    _content: [],
    get content() {
        if (this.locked) 
          throw new Error("Locked!");
          return this._content;
    }
};


exports.withBoxUnlocked = function(body) {//body es una funcion que mete un gold piece a content. o lanza un error.
  var locked = bugs.box.locked;
  if (!locked)//si locked es false.
    return body();//box esta abierta, ejecutar la funcion. y regresar el resultado y termina.

  bugs.box.unlock();//si no esta abierta. abrir.
  try {
    return body();//intentar ejecutar la funcion y regresar el resultado.//aqui puede haber error debido a los piratas.
  } finally {
    bugs.box.lock();//en cualquier caso, cerrar la caja.
  }
};




