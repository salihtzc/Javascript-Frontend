// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
//* Örnek1:tek-çift kontrolü
//**********************************************************/
console.log("******** 2- EXPRESSION*******");


//önce declaration
const tekCift=function(sayi){
 return sayi%2==1 ? "tektir" :"çifttir"

}
//sonra calling
console.log( tekCift(5));
console.log( tekCift(6));

//* Örnek2:en büyük sayıyı bul
//**********************************************************/
let büyükBul=function(x,y,z){

 let enBüyük;

 if(x>y && x>z )
 {enBüyük=x;}
else if(y>z && y>x)
{enBüyük=y;}
else {enBüyük=z;}

return enBüyük;
}

 console.log("en büyük sayı" , büyükBul(3,5,9));



