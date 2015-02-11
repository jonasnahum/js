"use strict";
var ancestryJson = require("./ancestry.js");
exports.ancestry = JSON.parse(ancestryJson);

//recibe un array de arrays y con reduce los reduce a un solo array.
exports.reduceArrays = function(arrayDeArrays){
   var result = arrayDeArrays.reduce(function(flat, current) {//reduce el array a un solo resultado, en este caso flat se refiere a la casilla previa o al resultado priliminar que va acumulando durante la iteracion y current a la casilla  actual. despues de que se reciben estos parametros, se va haciendo la implementacion  que se aplicara a cada valor del array , finalmente se pasa el parametro start.
   return flat.concat(current);
   }, []);
   return result;
};

//calcula los promedios de la edad de las madres cuando tuvieron un hijo.
exports.promediosEdadMadresCuandoHijoNacio = function(ancestry){

  function average(array) {
     function plus(a, b) { return a + b; }//plus tiene la var previo a y current b.
     return array.reduce(plus) / array.length;//reduce recibe una funcion.
  }
  
  var byName = {};
  ancestry.forEach(function(person) {
    byName[person.name] = person;
  });
 
  var differences = ancestry.filter(function(person) {//nvoarraylos que tienen madre.
    return byName[person.mother] != null;
    }).map(function(person) {//transforms el array y aplica una resta que da como resultado la edad que tenia la madre a la hora que nacio su hijo.
    return person.born - byName[person.mother].born;
    });
    
 return average(differences);
 
};

//saca los promedios de vida  por siglo.
exports.promediosDeVidaPorSiglo = function (ancestry){
var result = [];
    function average(array) {
      function plus(a, b) { return a + b; }
      return array.reduce(plus) / array.length;
    }
    
    function groupBy(array, groupOf) {//recibe ancestry y una function.
      var groups = {};
      array.forEach(function(element) {//por cada persona en el array.
        var groupName = groupOf(element);//sacar su siglo y guardarlo en variable.
        if (groupName in groups)//si  el siglo ya esta registrado
          groups[groupName].push(element);//agregar la persona al siglo.
        else
          groups[groupName] = [element];//crear propiedad con el nombre del siglo.
      });
      return groups;//el objeto grup que tiene siglos como propiedades y personas.
    }
    
    var byCentury = groupBy(ancestry, function(person) {//byCentury tiene siglos.
      return Math.ceil(person.died / 100);//ceil redondea.
    });
    
    for (var century in byCentury) {
      var ages = byCentury[century].map(function(person) {//ages tiene las edades de cada siglo.
        return person.died - person.born;
      });
      result.push(century + ": " + average(ages));
    }
    return result;
};

//retorna true si cada elemento del array es true al ponerlo en predicate.
exports.every = function (array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (!predicate(array[i]))//se manda llamar la funcion predicate con cada elemento del array.
      return false;
  }
  return true;
}

// //retorna true si algun elemento del array es true.
// function some(array, predicate) {
//   for (var i = 0; i < array.length; i++) {
//     if (predicate(array[i]))//cualquiera que de true.
//       return true;
//   }
//   return false;
// }


// var array = [2,1,6,3,4]; 
// var predicate = function (elementoDelArray){
//     if (elementoDelArray>5)
//     return true;
//     else
//     return false;
// };
// console.log(some(array, predicate));



