"use strict";
exports.Vector = Vector;
function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(other) {//la función recibe un Vector con parametros.
  return new Vector(this.x + other.x, this.y + other.y);//regresa un nuevo Vector.
};

Vector.prototype.minus = function(other) {//prototype is another object that is used as a fallback source of properties. when an object gets a request for a property that ir does not have, its prototype will be searched for the property, then the prototype{s prototype, and so on.. the entity behind almost all objects, Object.prototype.
  return new Vector(this.x - other.x, this.y - other.y);//regresa un nuevo vector.
};

Object.defineProperty(Vector.prototype, "length", {//for define our own nonenumerable properties.
  get: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
});



exports.logFive = function (sequence) {//recibe array. de ArraySeq que tiene -1 en post//si mandan un objeto de tipo RangeSeq, entonces este tiene las propiedades fromm que es un numero inicial y to, numero final. 
  var result = [];
  for (var i = 0; i < 5; i++) {//iterar nadamas hasta cinco.
    if (!sequence.next())//va aumentando +1 el pos en cada iteracion.
      break;
  //console.log(sequence.current());//imprimir el value de la posición actual.
      result.push(sequence.current());
  }
  return result;
};

exports.ArraySeq = ArraySeq;
function ArraySeq(array) {//pos y array son la interfase.
  this.pos = -1;
  this.array = array;
}
ArraySeq.prototype.next = function() {//parte de la interfase.
  if (this.pos >= this.array.length - 1)
    return false;
  this.pos++;
  return true;
};
ArraySeq.prototype.current = function() {//regresa la posicion en el array.
  return this.array[this.pos];
};

exports.RangeSeq = RangeSeq;
function RangeSeq(from, to) {//pos y array son la interfase
  this.pos = from - 1;
  this.to = to;
}
RangeSeq.prototype.next = function() {//parte de la interfase//esta funcion es solo para objetos tipo RangeSeq
  if (this.pos >= this.to)
    return false;
  this.pos++;
  return true;
};
RangeSeq.prototype.current = function() {
  return this.pos;
};




