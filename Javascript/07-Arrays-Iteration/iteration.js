
//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//*                       ITERATION IN ARRAYS
//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//* ======================================================
//*                     FOR LOOP
//* ======================================================

// const diziIsaretliTopla = (dizi) => {
//   let sumP = 0,
//     sumN = 0;
//   for (let i = 0; i < dizi.length; i++) {
//     if (dizi[i] > 0) {
//       sumP += dizi[i];
//     } else {
//       sumN += dizi[i];
//     }
//   }
//   return "Negatiflerin Toplami=" + sumN + " Pozitiflerin Toplami=" + sumP;
// };

// const koordinatlar = [120, 100, -100, 220, 330, -40];
// console.log(diziIsaretliTopla(koordinatlar));

//*FOR IN
const diziIsaretliTopla = (dizi) => {
    let sumP = 0,
      sumN = 0;
    for (let i in dizi) {
      if (dizi[i] > 0) {
        sumP += dizi[i];
      } else {
        sumN += dizi[i];
      }
    }
    return "Negatiflerin Toplami=" + sumN + " Pozitiflerin Toplami=" + sumP;
  };
  
  const koordinatlar = [120, 100, -100, 220, 330, -40];
  console.log(diziIsaretliTopla(koordinatlar));
  
  
  
  
  //* ======================================================
  //*                   FOR IN LOOP
  //* ======================================================
  
  //*-------------------------------------------------------
  //* SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
  //* bir dizide saklandığı varsayalım.Bu hayvanları türüne
  //* göre aramamızı sağlayacak ve o türden kaç adet bulunduğunu
  //*  ana programa döndürecek fonksiyonu yazınız. Eğer o
  //* türden bir hayvan yok ise bulunamadığını yazdırsın.
  //*--------------------------------------------------------
  
  const findAnimal=(animals,userAnimal)=>{
  let counter=0;
  for(let i in animals)
  {if(animals[i]==userAnimal)
  {counter++;}
  }
  if(counter==0)
  return `sorry we have not, ${userAnimal}`
  else
  return `We have  ${counter} ${userAnimal}`
  
  
  }
  
  const animals=["elephant","camel","bird","camel","bird","camel","mouse"];
  
  const userAnimal=prompt("Please enter your animals").toLowerCase();
    
  alert( findAnimal(animals, userAnimal));