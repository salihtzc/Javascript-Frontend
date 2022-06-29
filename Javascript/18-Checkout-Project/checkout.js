//* ======================================================================
//*                 Checkout Page Solution
//* =======================================================================
//!kargo ücreti indirim ve vergi oranlarını variable olarak atadık
const kargo = 15.0;
const vergi = 0.18;
const indirim = 0.7;

//!verilerin bilgilerini 3 object le diziye sakladık
let sepettekiler = [
  { name: "Vintage Backpack", price: 34.99, adet: 1, img: "./img/photo1.png" },
  { name: "Levi Shoes", price: 40.99, adet: 1, img: "./img/photo2.png" },
  { name: "Antique Clock", price: 69.99, adet: 1, img: "./img/photo3.jpg" },
];
//!fonksiyon calling
ekranaBastir();
  hesaplaCardTotal();
//!sepettekiler array indeki ürünleri browser a (DOM) bastırma
function ekranaBastir() {
  sepettekiler.forEach((urun) => {
    //!DESTRUCTURİNG
    const { name, price, adet, img } = urun;

    document.querySelector(
      "#urun-panel"
    ).innerHTML += `<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-5">
      <img src=${img} class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-7">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
             <div class="urun-price">
                    <p class="text-warning h2">$
                      <span class="indirim-price">${(price * indirim).toFixed(
                        2
                      )}</span>
                      <span class="h5 text-dark text-decoration-line-through">${price}</span>
                    </p>
                  </div>

                  
                  <div
                    class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2"
                  >
                    <div class="adet-controller">
                      <button class="btn btn-secondary btn-sm">
                        <i class="fas fa-minus"></i>
                      </button>
                      <p class="d-inline mx-4" id="urun-adet">${adet}</p>
                      <button class="btn btn-secondary btn-sm">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div class="urun-removal mt-4">
                    <button class="btn btn-danger btn-sm w-100 remove-urun">
                      <i class="fa-solid fa-trash-can me-2"></i>Remove
                    </button>
                  </div>
                  <div class="mt-2">
                    Urun Toplam: $<span class="urun-toplam">${(
                      price *
                      indirim *
                      adet
                    ).toFixed(2)}</span>
                  </div>
      </div>
    </div>
  </div>
</div>`;
  });

  silButon();

  adetButon();

   //!browser da en alttaki total kısmı
   document.querySelector("#card-prices").innerHTML = `<table class="table">
   <tbody>
     <tr class="text-end">
       <th class="text-start">Aratoplam</th>
       <td>$<span class="aratoplam">0.00</span></td>
     </tr>
     <tr class="text-end">
       <th class="text-start">Vergi(18%)</th>
       <td>$<span class="vergi">0.00</span></td>
     </tr>
     <tr class="text-end">
       <th class="text-start">Kargo</th>
       <td>$<span class="kargo">0.00</span></td>
     </tr>
     <tr class="text-end">
       <th class="text-start">Toplam</th>
       <td>$<span class="toplam">0.00</span></td>
     </tr>
   </tbody>
 </table>`;
}

function silButon() {
  document.querySelectorAll(".remove-urun").forEach((btn) => {
    btn.onclick = () => {
        remove(btn);
    };
    });
}

function remove(btn) {
btn.closest(".card").remove();

sepettekiler = sepettekiler.filter(
    (urun) => urun.name != btn.closest(".card").querySelector("h5").textContent
);
console.log(sepettekiler);

hesaplaCardTotal();
}


function adetButon() {
  document.querySelectorAll(".adet-controller").forEach((i) => {
    const minus=i.firstElementChild
    const adet1=i.querySelector("#urun-adet");
    minus.onclick=()=>{
      adet1.textContent = Number(adet1.textContent) - 1;

      console.log(sepettekiler);
      if (adet1.textContent == 0) {
        alert("sileyim mi");
        remove(minus);
      }

      sepettekiler.map((urun) => {
        if (
            urun.name ==
            adet1.closest(".row").querySelector(".card-title").textContent
        )
            urun.adet = Number(adet1.textContent);
      });

      adet1.closest(".row").querySelector(".urun-toplam").textContent = (
        adet1.closest(".row").querySelector(".indirim-price").textContent * adet1.textContent
      ).toFixed(2);
      hesaplaCardTotal();
      console.log(sepettekiler);

    }

    const plus=i.lastElementChild
    plus.onclick=()=>{
        adet1.textContent = Number(adet1.textContent) + 1;

        sepettekiler.map((urun) => {
            if (
                urun.name == adet1.closest(".row").querySelector(".card-title").textContent
            )
            urun.adet = Number(adet1.textContent);
            console.log(sepettekiler);
        });

        adet1.closest(".row").querySelector(".urun-toplam").textContent = (
            adet1.closest(".row").querySelector(".indirim-price").textContent * adet1.textContent
        ).toFixed(2);
        hesaplaCardTotal();

    }


  });

}


function hesaplaCardTotal() {

const urunToplam = document.querySelectorAll(".urun-toplam");

console.log(Array.from(urunToplam));
console.log(urunToplam);



const araToplam = Array.from(urunToplam).reduce(
    (acc, item) => acc + Number(item.textContent),
    0
);
const vergiPrice = araToplam * vergi;
const shipping = araToplam > 0 ? kargo : 0;
const cardTotal = araToplam + shipping + vergiPrice;

document.querySelector(".aratoplam").textContent = araToplam.toFixed(2);
document.querySelector(".vergi").textContent = vergiPrice.toFixed(2);
document.querySelector(".kargo").textContent = shipping.toFixed(2);
document.querySelector(".toplam").textContent = cardTotal.toFixed(2);
}