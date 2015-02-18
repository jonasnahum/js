"use strict";
var bugs = require("./../BugsErrors.js");
exports.testPuedeMultiplicar2NumerosSinLanzarExcepcion = function (test){
    test.expect (1);
    
    //arrange
    var numeroa = 8;
    var numerob = 8;
    var expected = 64;
    
    //act
    var actual = bugs.reliableMultiply (numeroa,numerob);
    
    //assert
    test.equal (actual,expected, "probando si multiplica un numero por otro");
    test.done();
};
exports.contentRecibeUnaPiezaDeOroCuandoLaCajaAbierta = function (test){
    test.expect (1);
    
    //arrange
    var box = bugs.box;
    var expected = ["gold piece"];
    //act
    var body1 = bugs.withBoxUnlocked(function() {
                     box.content.push("gold piece");
                 });
    var actual = box._content;
    
    //assert
    test.deepEqual (actual,expected, "probando si content array en box cambio despues de meterle una pieza de oro  ");
    test.done();
};
exports.SiEnLaFuncionQueSeMandaAwithBoxUnlockedSeTiraUnaExepcionSeEjecutaFinalyYBoxSeQuedaCerrada = function (test){
    test.expect (1);
    
    //arrange
    var expected = true;

    try {
    var body1 =bugs.withBoxUnlocked(function() {
         throw new Error("Pirates on the horizon! Abort!");
       });
     } catch (e) {
       console.log("Error raised:", e);
     }                
    
    //act
    var actual = bugs.box.locked;

    
    //assert
    test.equal (actual,expected, "despues de mandar una funcion que tira un error a withBoxUnlocked, esta ultima hace finally y cierra la box, le hace locked" );
    test.done();
};