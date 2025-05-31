// API 'dan menu verilerini alacak bir fonksiyon

const fetchMenu = async ()=>{
    //API'ye istek at
    const response = await fetch("../db.json");

    //API'den gelen veriyi json formatından js nesnesine çevir
    const data = await response.json();

    //Elde edilen menuyu fonksiyon çağırıldığında return et
    return data.menu;
}

export default fetchMenu;