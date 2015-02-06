//"use strict";
//var range = function(start, end, step){
//  var arreglo = [];
//  var count=start;
    
//    if((arguments.length == 3 )&& (step < 0)){
//      for(count; count > end; count=count+step){
//        arreglo.push(count); 
//      }

//    }
//    if(arguments.length == 2){ 
//      while(count<end+1){
//        arreglo.push(count);
//        count++
//      }
//    }
//    if(arguments.length==3){
//      while(count<end+1){
//        arreglo.push(count);
//        count=count + 2;
//      }
//    } 
//  return arreglo;
//}
//console.log(range(2,10));

//var sum = function(numbers){
//  var sumatoria = 0;

//  for(var count = 0; count < numbers.length; count++){
//    sumatoria = sumatoria + numbers[count];
//  }

//  return sumatoria;        
//}
//var listOfNumbers= [1,2,3,4,5,6,7,8,9,10];
//var x = sum(listOfNumbers);
//console.log(x);

//var reverseArray = function (arreglo ){
// var newArray = arreglo.reverse();
// return newArray;
//}
//var reverseArrayInPlace = function(arreglo){
// return arreglo.reverse();
//}
//console.log(reverseArray(["a","b","c"]));
//console.log(reverseArrayInPlace(["a","b","c"]));

var arrayToList = function (arreglo){
  var arrayAlreves=arreglo.reverse();
  var list;
  for (var count = 0; count < arrayAlreves.length; count++){
    list= {value: arrayAlreves[count], rest:list};
  }
  return list;
}
var arreglo=[1,2,3];
var listObject=arrayToList(arreglo);
//console.log(listObject);


var listToArray= function(listObject){
  var arreglo=[];
    for(var node=listObject; node; node=node.rest){
        arreglo.push(node);//node tiene solo un value. en node.rest hay otro value.  
    }  
 return arreglo;
}
var result = listToArray(listObject);
//console.log(result);



