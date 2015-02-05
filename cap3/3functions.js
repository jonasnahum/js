"use strict"
exports.min=function(a,b){
  if(a<b){
    return a; 
  }
  else{
    return b;
  };
};

exports.isEven=function(number){
  function decrementar(nu){
    if(nu==1){
      return false;
    }
    if(nu==0){
      return true;
    }  
    else {
      let esNegativo = nu < 0;
      if (esNegativo)
        return decrementar(nu + 2);
      else 
        return decrementar(nu - 2);
    }
  }
return decrementar(number);
}


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












