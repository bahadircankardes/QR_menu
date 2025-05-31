import fetchMenu from "./api.js";
import { renderCard, uiElements } from "./ui.js";

//Sayfa yüklendiğinde

document.addEventListener("DOMContentLoaded", async () => {
    //API'den menu verisini al
    const menuData = await fetchMenu();
    //Alınan menu verisine göre arayüzü render et   
    renderCard(menuData); 

    //uielements içerisindeki inputlara bir olay izleyicisi ekle.Inputlar bir nodelist olduğundan önce bu nodelist içerisindeki elemanlara teker teker erişip bu erişilen elemanlara olay izleyicisi eklememiz gerekir.

    uiElements.inputs.forEach((input)=>{
        //Her bir input'un değişimini izle
        input.addEventListener("click", ()=>{
            //Seçili input'un id'sine eriş
            const selectedCategory = input.id;
            console.log(selectedCategory);

            //menuData içerisinden selectedCategory'e sahip olan menu elemanlarını filtrele
            const filteredMenu = menuData.filter((item)=>item.category == selectedCategory);

            //filrelenen dizi elemanlarını renderla
            if (selectedCategory == "all") {
                renderCard(menuData);                
            } else {
                renderCard(filteredMenu);
            }
            

            console.log(filteredMenu);
            
            
        });
    });
});

console.log(uiElements.inputs);



