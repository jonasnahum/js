"use strict";
const ejercicios = require ("./../HiOrderF.js");


exports.testReduceArrayOfArrays = function(test){
    test.expect(1);
    //arrange
    var arrayDeArrays = [[1, 2, 3], [4, 5], [6]];
    var expected =  [1, 2, 3, 4, 5, 6];
    //act
    var pruebaUno = ejercicios.reduceArrays(arrayDeArrays);
    //assert
    test.deepEqual (pruebaUno,expected, "probando reduccion de array");
    test.done();
};

exports.testAñosPromedioDeLasMadresCuandoTuvieronHijo = function(test){
    test.expect(1);
    //arrange
    var ancestry = ejercicios.ancestry;
    var expected =  31.22222222222222;
    //act
    var pruebaUno = ejercicios.promediosEdadMadresCuandoHijoNacio(ancestry);
    //assert
    test.equal (pruebaUno,expected, "probando promedios de edad de las madres");
    test.done();
};

exports.testPromediosDeVidaPorSiglo = function(test){
    test.expect(1);
    //arrange
    var ancestry = ejercicios.ancestry;
    var expected =   ["16: 43.5","17: 51.2","18: 52.78947368421053","19: 54.833333333333336","20: 84.66666666666667","21: 94"];
    //act
    var pruebaUno = ejercicios.promediosDeVidaPorSiglo(ancestry);
    //assert
    test.deepEqual (pruebaUno,expected, "probando promedios de vida por siglo");
    test.done();
};

exports.probandoSiEveryRegresaTrueCuandoSeEvaluaCadaCasillaDelArray = function(test){
    test.expect(1);
    //arrange
    var array = [6,7,8,9,7];
    var predicate = function (elementoDelArray){
      if (elementoDelArray>5)
        return true;
      else
        return false;
    };
    var expected = true;
    
    //act
    var pruebaUno = ejercicios.every(array,predicate);
    //assert
    test.equal (pruebaUno,expected, "probando que todas las casillas sean true ante la function predicate");
    test.done();
};