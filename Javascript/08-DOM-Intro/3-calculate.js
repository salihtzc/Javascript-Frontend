const yaricapInput=document.querySelector("#yaricap");

const buton= document.querySelector("#btn")


buton.onclick=()=>{
 

//*ilk yapacagimiz alan cevre icin sonuclari bulmam
const r= yaricapInput.value;    
 
const alan= (Math.PI*r*r).toFixed(2)

const cevre= (2*Math.PI*r).toFixed(2)

//*2. yapacagim islem sonuclari ekrana bastirmak 

document.querySelector(".alan").textContent=alan;
document.querySelector(".cevre").textContent=cevre;

}


//*butona basmak yerine enter la sonuc bulmak
yaricapInput.onkeydown=(e)=>{

if(e.keyCode===13)

buton.onclick()

}


yaricapInput.onmouseover=function(e){
console.log(e);

  yaricapInput.style.backgroundColor="darkgray"
}

yaricapInput.onmouseout = function() {
  yaricapInput.style.backgroundColor="white";

  
}
