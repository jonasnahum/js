//var entrada=10;
//var string="";
//for (var count = 0; count < entrada; count = count + 1){
//      if(count % 2==0){
//          string=string+"# # # # "+"\n" ; 
//          continue;
//        }
//        else{
//          string=string+" # # # #"+"\n";
//          continue;
//        }
//}   
//console.log(string);
input=8;
tablero="";

for (var y=0; y<input; y++){
  for (var x=0; x<input; x++){
    if((x+y) %2 ==0)
      tablero +=" ";
    else
      tablero +="#";
  }
  tablero += "\n";
}
console.log(tablero);
