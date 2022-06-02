// ?=========================================================
// ?                 STRING METOTLARI
// ?=========================================================
console.log("****STRİNG METHODS******");

//!klasik yöntem ile tanımlanan bir String primitive dir (ilkel)

const str1="clarusway";
const str2="hello ";
const str3="world";
 console.log(str2 + str3, typeof (str2 + str3));

 //!String constructor ile tanımlanan String non-primitive dir 

 const str4=new String("yeni bir string") ;
 console.log(str4, typeof str4);//object


//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String
//! nesnelerine dönüştürür. Bu sayede, String nesnelerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur.Ayrıca 2 tür arasında çevrim yapmakta mümkündür.

// *=========================================================
// *               concat() immutable=değiştirmez
// *=========================================================

const s1=" hello ";
const s2="world";
const s3=s1.concat(s2);
console.log(s3.concat(" Clarusway", s1));
console.log(s1);//hello

// *=========================================================
// *               charAt() 
// *=========================================================
//? Stringler için Escape karakterleri
 //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#escape_sequences

const s4 = "primitive \n veri tiplerinin \n property ve\nya metodu olmaz.";
console.log(s4);
  console.log( s4.charAt(5)); //t
  console.log( s4.charAt());// içi boşsa ilk harfi döndürür
  console.log(s4.charAt(s4.length-2));//z

// *=========================================================
// *       includes()        
// *=========================================================

const kelime="to be, or not to be, that is the question.";

console.log( kelime.includes("TO be")); //false
console.log( kelime.includes("to be")); //true
console.log( kelime.includes("quest")); //true
console.log( kelime.includes("")); //true
console.log( kelime.includes("to be",15)); //false
console.log( kelime.includes("or",7)); //true

// *=========================================================
// *       indexOf() , lastIndexOf()       
// *=========================================================

console.log( kelime.indexOf("or")); //7
console.log( kelime.indexOf("this")); //-1
console.log(kelime.indexOf("TO be")); //-1 
console.log(kelime.indexOf("be")); //3
console.log(kelime.indexOf("be",4)); //17
console.log(kelime.lastIndexOf("be")); //17
