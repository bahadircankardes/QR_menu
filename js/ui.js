//Ui elemanlarını bir arada tutan obje

const uiElements = {
  menuList: document.querySelector("#menu-list"),
  inputs: document.querySelectorAll("input"),
  wrapper:document.querySelector("#wrapper"),
};

//menuList içerisine dinamik olarak card ekleyecek fonksiyon
const renderCard = (data) => {
  //Bu fonskiyona dışarıdan bir data adında parametre verilsin. Verilen her eleman için bir HTML oluştur.
console.log(data);

  const cardHtml = data.map(
    //URL'e parametre geçmek için url2den sonra '?' kullanılır
    (item) => `
    <a href="/detail.html?id=${item.id}" class="d-flex flex-column flex-md-row text-dark gap-3 text-decoration-none" id="card">
        <img
          class="rounded img-fluid shadow"
          src="${item.img}"
          alt=""
        />
        <div>
          <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="fw-bold text-success">${(item.price * 50).toFixed(2)}₺</p>
          </div>
          <p class="lead">
            ${item.desc}
          </p>
        </div>
    </a>`
  ).join("");

  //Oluşturulan HTML'i arayüze aktar.
  uiElements.menuList.innerHTML = cardHtml;

  
  
};

//Detay sayfasını renderlayacak fonksiyon

const renderDetailPage = (product, outlet) =>{
    //Fonksiyona dışarıdan verilen outlet'in html içeriğini oluştur.

        console.log(product);
        
    outlet.innerHTML = `
     
      <div class="d-flex justify-content-between">
      <a href="/index .html">
        <img width="35px" src="/images/home.png" alt="" />
      </a>
        
        <a class="text-decoration-none text-dark" href="#"
          >anasayfa / ${product.category} / ${product.title}</a
        >
      </div>

      
      <h1 class="text-center">${product.title}</h1>
     

      <img
        class="rounded object-fit-cover shadow"
        style="max-height: 400px"
        src="${product.img}"
        alt=""
      />

      
      <h4>Ürünün Kategorisi: <span class="text-success">${product.category}</span></h4>

      <!-- Price -->
      <h4>Ürünün Fiyatı: <span class="text-success">${(product.price * 50).toFixed(2)}₺</span></h4>

      
      <p class="lead">
        ${product.desc}
      </p>
    `;

    

};

export { uiElements, renderCard, renderDetailPage};
