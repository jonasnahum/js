"use strict";

//var range = function(start, end){
//  var arreglo = [];
//  var count=start
//    while(count<end+1){
//      arreglo.push(count);
//      count++
//    } 
//  return arreglo;
//}
//console.log(range(5,10));

var sum = function(numbers){
  var sumatoria = 0;

  for(var count = 0; count < numbers.length; count++){
    sumatoria = sumatoria + numbers[count];
  }

  return sumatoria;        
}
var listOfNumbers= [1,2,3,4,5,6,7,8,9,10];
var x = sum(listOfNumbers);
console.log(x);
