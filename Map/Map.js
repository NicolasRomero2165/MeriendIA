function toHome(){
    window.location.href = "../Home/Home.html";
}

function toMap(){
    window.location.href = "./Map.html";
}

function toPoints(){
    window.location.href = "../Points/Points.html";
}

function toProfile(){
    window.location.href = "../Profile/Profile.html";
}

function toStore(id){
    fetch('../Stores/Store.json') 
        .then(respuesta => respuesta.json())
        .then(datos => {
    console.log(datos);

    const store = datos.find(item => item.id === id);

    localStorage.removeItem('nameStore');
    localStorage.removeItem('productStore');
    localStorage.removeItem('priceStore');
    localStorage.removeItem('pointsStore');
    localStorage.removeItem('imageStore');

    localStorage.setItem('nameStore', store.name)
    localStorage.setItem('productStore', store.product)
    localStorage.setItem('priceStore', store.price)
    localStorage.setItem('pointsStore', store.points)
    localStorage.setItem('imageStore', store.image)

    console.log(store)

    window.location.href = "../Stores/Store.html";
})}


document.addEventListener('DOMContentLoaded', () => {

    const RecaCafe = document.getElementById('RecaCafe');
    const Pauline = document.getElementById('Pauline');
    const HanaCafe = document.getElementById('HanaCafe');
    const Docena = document.getElementById('Docena');
    const NorteCafe = document.getElementById('NorteCafe');

    RecaCafe.addEventListener("click", () => toStore(1));
    Pauline.addEventListener("click", () => toStore(2));
    HanaCafe.addEventListener("click", () => toStore(3));
    Docena.addEventListener("click", () => toStore(4));
    NorteCafe.addEventListener("click", () => toStore(5));

});