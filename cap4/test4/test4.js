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
exports.arrayToList = function(test){
    test.expect(1);
    
    //arrange
    var arreglo=[1,2,3];
    var expected = { value: 1, rest: { value: 2, rest: { value: 3, rest: undefined } } };         
    
    //act
    var pruebaUno = ejercicios.arrayToList(arreglo);
    
    //assert
    test.deepEqual(pruebaUno,expected,"probando arrayToList");
    test.done();
}
exports.listToArray = function(test){
    test.expect(1);
    
    //arrange
    var list={ value: 1, rest: { value: 2, rest: { value: 3, rest: undefined } } };
    var expected = [1,2,3];          
    
    //act
    var pruebaUno = ejercicios.listToArray(list);

    //assert
    test.deepEqual(pruebaUno,expected,"probando listToArray");
    test.done();
}
exports.prepend = function(test){
    test.expect(1);
    
    //arrange
    var list={ value: 1, rest: { value: 2, rest: { value: 3, rest: undefined } } };
    var elemento = 0;
    var expected ={value: 0, rest: { value: 1, rest: { value: 2, rest: { value: 3, rest: undefined } } }};           
    
    //act
    var pruebaUno = ejercicios.prepend(elemento,list);

    //assert
    test.deepEqual(pruebaUno,expected,"prepend poner el elemento al frente de la lista");
    test.done();
}
exports.nth = function(test){
    test.expect(1);
    
    //arrange
    var list={ value: 1, rest: { value: 2, rest: { value: 3, rest: undefined } } };
    var n = 1;
    var expected = 2;           
    
    //act
    var pruebaUno = ejercicios.nth(list, n);

    //assert
    test.equal(pruebaUno,expected,"nth, buscando elemento en la posicion n de la lista");
    test.done();
}