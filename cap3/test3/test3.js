"use strict";
const capitulo3=require("./../3functions.js");
exports.min=function(test){
        test.expect(1);
//arrange
        var a=3;
        var b=4;
//act
        var pruebaUno = capitulo3.min(a,b);
//assert
        test.equal(pruebaUno,3,"es mas pequeño el no 3 que el 4");
        test.done();
};

exports.isEven=function(test){
        test.expect(2);
//arrange
        var number=15;
//act
        var pruebaUno = capitulo3.isEven(number);
//assert
        test.equal(pruebaUno,false,"es falso que 15 es even");

        test.equal(capitulo3.isEven(-16), true, "-16 es numero par negativo");
        test.done();
};

exports.countBs=function(test){
        test.expect(1);
//arrange
        var texto="BimbovendeBimbollosBienBuenos";
//act
        var pruebaUno = capitulo3.countBs(texto);
//assert
        test.equal(pruebaUno,4,"probando que el texto tiene 4 B");
        test.done();
};

