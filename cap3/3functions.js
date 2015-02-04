"use strict"
exports.min=function(a,b){
  if(a<b){
    return a; 
  }
  else{
    return b;
  };
};
//var result=min(10,5);
//console.log(result);


exports.isEven=function(number){
  function decrementar(nu){
    if(nu==1||nu==-1){
      return false;
    }
    if(nu==0){
      return true;
    }  
    else{
      return decrementar(nu-2);
    }
  }
return decrementar(number);
}
//var result=isEven(-1);
//console.log(result);


exports.countBs=function(texto){
  var cuentaB=0;
  var count=0;

  while (count<texto.length){
    var position=texto.charAt(count);
    if(position==="B") {
      cuentaB++;
      count++;  
    }
    else {
      count++;
    }
  }

  return cuentaB;
}
//var imprimir= countBs("BetoelBoticariotieneunBurro");
//console.log(imprimir);













