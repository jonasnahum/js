//se me borro el test,,
"use strict";
var cap6 = require("./../secretObjects.js");
var callApplyBind = require("./../bindCallApply.js");
var polimorfismo = require("./../interfacePolimorfismo.js");
var herencia = require ("./../Herencia.js");

exports.testProbarSumatoriaDeXyY = function (test){
  test.expect(1);
  //arrange
  var vector1 = new cap6.Vector (1,2);
  var vector2 = new cap6.Vector (2,3);
  var expected = new cap6.Vector (3,5);//{ x: 3, y: 5 };
  //act

  var actual = vector1.plus(vector2);
  
  //assert
  test.deepEqual(actual,expected, "probando sumatoria de x y de y");
  test.done();
};

exports.testProbarrestatoriaXyY = function (test){
  test.expect(1);
  //arrange
  var vector1 = new cap6.Vector (4,6);
  var vector2 = new cap6.Vector (2,3);
  var expected = new cap6.Vector (2,3);//{ x: 3, y: 5 };
  //act

  var actual = vector1.minus(vector2);
  
  //assert
  test.deepEqual(actual,expected, "probando restatoria de x y de y");
  test.done();
};

exports.testProbaRaizCuadradaXY = function (test){
  test.expect(1);
  //arrange
  var vector1 = new cap6.Vector (2,0);
  var expected = 2;
  //act

  var actual = vector1.length;
  
  //assert
  test.deepEqual(actual,expected, "probando raiz cuadrada de x2 + y2");
  test.done();
};


exports.testProbaSequenciaArrayCincoElementos = function (test){
  test.expect(1);
  //arrange
  var array = new cap6.ArraySeq([1, 2, 3, 4, 5]);
  var expected = [1, 2, 3, 4, 5];
  //act

  var actual = cap6.logFive(array);
  
  //assert
  test.deepEqual(actual,expected, "probando impresion de cinco primero elementos del array");
  test.done();
};

exports.testProbaSequenciaConsecutivaDELosPrimeros5numerosDados2NumerosInicioYFin = function (test){
  test.expect(1);
  //arrange
  var rango = new cap6.RangeSeq(100, 1000);
  var expected = [100, 101, 102, 103, 104];
  //act

  var actual = cap6.logFive(rango);
  
  //assert
  test.deepEqual(actual,expected, "probando impresion de cinco primero elementos rango");
  test.done();
};
exports.testCallApplyBind = function (test){
  test.expect(3);
  //arrange
  var textoCall = "hola con Call";
  var textoApply = "hola con Apply";
  var textoBind = "hola con Bind";
  
  var expectedCall = "hola con Call mi nombre es: jonas";
  var expectedApply = "hola con Apply mi nombre es: jonas";
  var expectedBind = "hola con Bind mi nombre es: jonas";
  
  //act
  var actualCall = callApplyBind.printCall(textoCall);
  var actualApply = callApplyBind.printApply(textoApply);
  var actualBind = callApplyBind.printBind(textoBind);
  
  //assert
  test.equal(actualCall,expectedCall);
  test.equal(actualApply,expectedApply);
  test.equal(actualBind,expectedBind);
  
  test.done();
};

exports.testPolimorpismo = function (test){
  test.expect(1);
  //arrange
  var conductores = ["Moi", "David", "Pepe"];
  var auto1= new polimorfismo.Auto();
  var camion1= new polimorfismo.Camion();
  var vehiculos = [ auto1, camion1 ];
  var expected = [ 'Moi estaá manejando un Auto',
                   'Moi está manejando un camión',
                   'David estaá manejando un Auto',
                   'David está manejando un camión',
                   'Pepe estaá manejando un Auto',
                   'Pepe está manejando un camión' ];
  //act
  var actual = polimorfismo.metodo(conductores, vehiculos);

  //assert
  test.deepEqual(actual, expected);
  test.done();
};

exports.testHerencia = function (test){
  test.expect(1);
  //arrange
  var vector = new herencia.Vector(3,6);
  var expected = 3;
  //act
  var actual = herencia.Vector.x;

  //assert
  test.equal(actual, expected);
  test.done();
};

























// exports.testProbarSumatoriaDeXyY = function (test){
//     test.expect(2);
    
//     //arrange
//     var vector1 = new cap6.Vector(1,2);
//     var vector2 = new cap6.Vector(2,3);
//     //act
//     var actual = vector1.plus(vector2);
//     //assert
//     test.equal(actual.x,3,"probando sumatoria de equis");
//     test.equal(actual.y,5,"probando sumatoria de yes");
    
//     test.done();
// };
// exports.testProbarRestaDeXyY = function (test){
//     test.expect(2);
    
//     //arrange
//     var vector1 = new cap6.Vector(1,2);
//     var vector2 = new cap6.Vector(2,3);
//     //act
//     var actual = vector1.minus(vector2);
//     //assert
//     test.equal(actual.x,-1,"probando restatoria de equis");
//     test.equal(actual.y,-1,"probando restatoria de yes");
    
//     test.done();
// };
// exports.probandoSumatoriaDeRaizCuadradaDeXyY = function (test){
//     test.expect(1);
//     //arrange
//     var vector1 = new cap6.Vector(2,4);
//     var expected = 4.47213595499958 ;
//     //act
//     var actual = vector1.length;
//     //assert
//     test.equal(actual, expected,"probando restatoria de sqrt");
//     test.done();
// };
// exports.probandoImpresionDeScuenciaDeArray = function (test){
//     test.expect(1);
//     //arrange
//     var ArraySeq1 = new cap6.ArraySeq([1, 2]);
//     var expected = [1, 2];
//     //act
//     var actual = cap6.logFive(ArraySeq1);
//     //assert
//     test.deepEqual(actual, expected,"probando impresion de array consecutivo");
//     test.done();
// };
// exports.probandoImpresionDeLosPrimerosCincoDeUnaScuenciaDeRange = function (test){
//     test.expect(1);
//     //arrange
//     var RangeSeq = new cap6.RangeSeq(100, 1000);
//     var expected = [100, 101, 102, 103, 104];
//     //act
//     var actual = cap6.logFive(RangeSeq);
//     //assert
//     test.deepEqual(actual, expected,"probando impresion de secuencia consec. de los 5");
//     test.done();
// };