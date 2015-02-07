"use strict";
const ejercicios = require ("./../arrays.js");

exports.testArrayConStep= function(test){
    test.expect(1);
    
    //arrange
    let start = 2;
    let end = 6;
    let step = 2;
    let expected = [2,4,6];
    
    //act
    var pruebaUno = ejercicios.range(start,end,step);
    
    //assert
    test.deepEqual(pruebaUno,expected,"sumando de 2 en 2");
    test.done();
}
exports.testArrayConStepNegativo = function(test){
    test.expect(1);
    
    //arrange
    let start = 6;
    let end = 0;
    let step = -2;
    let expected = [6,4,2,0];
    
    //act
    var pruebaUno = ejercicios.range(start,end,step);
    
    //assert
    test.deepEqual(pruebaUno,expected,"start - step -step..");
    test.done();
}
exports.testArrayConDosArgumentosRegresaNumeroProgresivos= function(test){
    test.expect(1);
    
    //arrange
    let start = 4;
    let end = 8;
    let expected = [4,5,6,7,8];
    
    //act
    var pruebaUno = ejercicios.range(start,end);
    
    //assert
    test.deepEqual(pruebaUno,expected,"numeros desde start to the end");
    test.done();
}
exports.testsumarUnArray= function(test){
    test.expect(1);
    
    //arrange
    let listOfNumbers= [1,2,3,4,5,6,7,8,9,10];
    let expected = 55;
    //act
    var pruebaUno = ejercicios.sum(listOfNumbers);
    
    //assert
    test.equal(pruebaUno,expected,"sumando el total de cada numero del array");
    test.done();
}
exports.testReverseArray= function(test){
    test.expect(1);
    
    //arrange
    var arrayOfNumbers= [1,2,3,4,5,6,7,8,9,10];
    var expected = [10,9,8,7,6,5,4,3,2,1];
    //act
    var pruebaUno = ejercicios.reverseArray(arrayOfNumbers);
    
    //assert
    test.deepEqual(pruebaUno,expected,"probando el arrray en reverse");
    test.done();
}
exports.testReverseArrayInPlace= function(test){
    test.expect(1);
    
    //arrange
    var arrayOfNumbers= [1,2,3,4,5,6,7,8,9,10];
    var expected = [10,9,8,7,6,5,4,3,2,1];
    //act
    var pruebaUno = ejercicios.reverseArrayInPlace(arrayOfNumbers);
    
    //assert
    test.deepEqual(pruebaUno,expected,"probando el arrray en reverse");
    test.done();
}