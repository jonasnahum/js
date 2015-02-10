"use strict";
exports.range = function(start, end, step){
  var arreglo = [];
  var count = start;
    
    if((arguments.length == 3 )&& (step < 0)){
      for(count; count > end; count = count + step){
        arreglo.push(count); 
      }

    }
    if(arguments.length == 2){ 
      while(count<end+1){
        arreglo.push(count);
        count++
      }
    }
    if(arguments.length==3){
      while(count<end+1){
        arreglo.push(count);
        count=count + 2;
      }
    } 
  return arreglo;
}

exports.sum = function(numbers){
  var sumatoria = 0;

  for(var count = 0; count < numbers.length; count++){
    sumatoria = sumatoria + numbers[count];
  }

  return sumatoria;        
}

exports.reverseArray = function (arreglo ){
var newArray = arreglo.reverse();
return newArray;
}
exports.reverseArrayInPlace = function(arreglo){
return arreglo.reverse();
}

exports.arrayToList = function (arreglo){
  var arrayAlreves=arreglo.reverse();
  var list;
  for (var count = 0; count < arrayAlreves.length; count++){
    list= {value: arrayAlreves[count], rest:list};
  }
  return list;
}

exports.listToArray= function(list){
  var arreglo=[];
    
    for(var node=list; node; node=node.rest){
        arreglo.push(node.value);//node tiene solo un value. en node.rest hay otro value.  
    }
    
return arreglo;
}

exports.prepend = function (value, list){//recibe un elemento y una lista y pone el elemento en frente de lista.
  var newList = {value: value, rest: list};
  return newList;
}

exports.nth = function(list, n) {//returns the element at given position in the list.
//  if (!list)
//    return undefined;
//  else if (n == 0)
//    return list.value;
//  else
//    return nth(list.rest, n - 1);
  for(var varObj=list; varObj; varObj=varObj.rest){
    if (n == 0)
    return varObj.value;
    n--;
  }  
}

//takes two values and returns true only if they are the same value or are objects with the same properties whose valuesare also equal when compared with a recursive call to deepEqual .
exports.deepEqual = function (a, b) {
   if (a === b) return true;//checa si son iguales en tipo  y valor.
  
   if (a == null || typeof a != "object" ||//si no son objetos return false
       b == null || typeof b != "object")
     return false;
  
   var conteoPropiedadesEnObjetoA = 0, conteoPropiedadesEnObjetoB = 0;

   for (var propiedad in a)
     conteoPropiedadesEnObjetoA += 1;//si es true, agregar uno al conteo.

   for (var propiedad in b) {
     conteoPropiedadesEnObjetoB += 1;
    
     if (!(propiedad in a) || !deepEqual(a[propiedad], b[propiedad]))//checa si prop actual esta en a o los valores son iguales.
       return false;
   }

   return conteoPropiedadesEnObjetoA == conteoPropiedadesEnObjetoB;//cuenta que tengan el mismo numero de propiedades.
 }
 
//    var obj2 = {nombre: "jonas", apellido: "jimenez"};
//    console.log(deepEqual(obj2, {nombre: "jonas", apellido: "jimenez"}));
    