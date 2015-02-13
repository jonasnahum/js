"use strict";



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
exports.Vector = Vector;

// console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// // → Vector{x: 3, y: 5}
// console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// // → Vector{x: -1, y: -1}
// console.log(new Vector(2, 2).length);
// // → 5


function logFive(sequence) {//recibe array. de ArraySeq que tiene -1 en post//si mandan un objeto de tipo RangeSeq, entonces este tiene las propiedades fromm que es un numero inicial y to, numero final. 
  for (var i = 0; i < 5; i++) {//iterar nadamas hasta cinco.
    if (!sequence.next())//va aumentando +1 el pos en cada iteracion.
      break;
    console.log(sequence.current());//imprimir el value de la posición actual.
  }
}

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

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104

// This alternative approach represents the empty sequence as null,
// and gives non-empty sequences two methods:
//
// * head() returns the element at the start of the sequence.
// 
// * rest() returns the rest of the sequence, or null if there are no
//   elemements left.
//
// Because a JavaScript constructor can not return null, we add a make
// function to constructors of this type of sequence, which constructs
// a sequence, or returns null if the resulting sequence would be
// empty.

function logFive2(sequence) {
  for (var i = 0; i < 5 && sequence != null; i++) {
    console.log(sequence.head());
    sequence = sequence.rest();
  }
}

function ArraySeq2(array, offset) {
  this.array = array;
  this.offset = offset;
}
ArraySeq2.prototype.rest = function() {
  return ArraySeq2.make(this.array, this.offset + 1);
};
ArraySeq2.prototype.head = function() {
  return this.array[this.offset];
};
ArraySeq2.make = function(array, offset) {
  if (offset == null) offset = 0;
  if (offset >= array.length)
    return null;
  else
    return new ArraySeq2(array, offset);
};

function RangeSeq2(from, to) {
  this.from = from;
  this.to = to;
}
RangeSeq2.prototype.rest = function() {
  return RangeSeq2.make(this.from + 1, this.to);
};
RangeSeq2.prototype.head = function() {
  return this.from;
};
RangeSeq2.make = function(from, to) {
  if (from > to)
    return null;
  else
    return new RangeSeq2(from, to);
};

logFive2(ArraySeq2.make([1, 2]));
// → 1
// → 2
logFive2(RangeSeq2.make(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104



