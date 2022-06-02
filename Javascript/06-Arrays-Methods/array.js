// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

//* Dizi Tanımlama
//* ---------------------------------------------------------

//! 1.Yöntem (Array Literal) - Tercih edilen yöntem
const yaslar = [30, 54, 22, 18, 5];
console.log(yaslar);
console.log(yaslar.length);

//! 2.Yöntem (Array Constructor)
const cars = new Array("BMW", "Mercedes", "Volvo");
console.log(cars);

const numbers = new Array(3, 2, 0);
console.log(numbers);

//10 elemanlı boş bir array tanımlama

const sayilar1=new Array(10)
console.log(sayilar1);

sayilar1[4]=123;
console.log(sayilar1);


//!hata, const keyword ü ile tanımlanmış bir diziye tamamiyle bir atama yapılamaz, içinde tek tek değişikliğe izin veriyor.
// yaslar=[1,2,3,4,5];
// console.log(yaslar);

const dogum=1980;

const isimler=[

"Ferhat", "Nurbaki","Enes", 2022-dogum, "Salih",true, 4.5, yaslar
]

console.log(isimler);

//*dizinin elemanlarına yazma (indisleme)

isimler[6]=false;
console.log(isimler);

//*nested erişim
console.log( isimler[7][1]);
console.log( isimler[isimler.length-1][1]);


// ?=========================================================
// ?                DİZİYİ DEĞİŞTİREN METODLAR (mutator)
// ?=========================================================
//*pop() dizinin son elemanını siler ve yazdırırsak sildiği elemanı döndürür
const meyveler = ["Elma","Erik","Armut","Muz","Kivi"]

const silinen=   meyveler.pop();

console.log(meyveler , "sildiğim eleman" , silinen);

//*shift() dizinin ilk elemanını siler ve yazdırırsak onu döndürür
const sil2= meyveler.shift();

console.log(meyveler, sil2);

//*push() dizinin sonuna eleman ekler , ve yazdırırsak dizinin güncel eleman sayısına döndürür

 const sayi= meyveler.push("Çilek","Kavun", "karpuz");

console.log(meyveler ,sayi);

//*unshift() dizinin başına eleman ekler ve dizi sayısını döndürür

meyveler.unshift("Ayva");
console.log(meyveler);

//*reverse() dizinin tamamını ters çevirir

meyveler.reverse();

console.log(meyveler);

const yeni = meyveler[4].split("").reverse();

console.log(meyveler);
console.log(yeni);

//*sort() , string ifadelerde alfabetik sıralar(ascıı değerlerine göre)
const number=[3,5,1,10,22,55,77,231];
  number.sort();
console.log(number);

number.sort((a,b)=>a-b);

console.log(number);

meyveler.sort();
console.log(meyveler);
meyveler.reverse()

console.log(meyveler);



