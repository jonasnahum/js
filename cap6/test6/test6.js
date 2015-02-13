"use strict";
var Cap6 = require("./../secretObjects.js");
exports.testProbarSumatoriaDeXyY = function (test){
    test.expect(1);
    
    //arrange
    
    var vector1 = new vector (1,2);
    var vector2 = new vector (2,3);
    
    //act
    var actual = cap6.vector(vector1, vector2);
    
    //assert
    test.equal(actual, vector{x: 3, y: 5}, "probando sumatoria de x y de y");
    test.done();
}