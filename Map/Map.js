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

function toStore(name, product, price, points, image, map){

    localStorage.removeItem('nameStore');
    localStorage.removeItem('productStore');
    localStorage.removeItem('priceStore');
    localStorage.removeItem('pointsStore');
    localStorage.removeItem('imageStore');

    localStorage.setItem('nameStore', name)
    localStorage.setItem('productStore', product)
    localStorage.setItem('priceStore', price)
    localStorage.setItem('pointsStore', points)
    localStorage.setItem('imageStore', image)
    localStorage.setItem('mapStore', map)

    console.log(store)

    window.location.href = "../Stores/Store.html";
}


document.addEventListener('DOMContentLoaded', () => {

    const RecaCafe = document.getElementById('RecaCafe');
    const Pauline = document.getElementById('Pauline');
    const HanaCafe = document.getElementById('HanaCafe');
    const Docena = document.getElementById('Docena');
    const NorteCafe = document.getElementById('NorteCafe');

    RecaCafe.addEventListener("click", () => toStore(
        "RECA CAFÉ", 
        "Bowl Saludable", 
        "$ " + 14000, 
        140, 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsbyv15o577urJSs3bInT_qseALWGJJoi3N88VAvngw7RDsB9TIIUycW0A&s=10",
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6564.869807100211!2d-58.5668415!3d-34.6437181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7003c139095%3A0xa58c4c3d09b7790c!2sRECA%20CAFE!5e0!3m2!1ses-419!2sar!4v1781568716624!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'));

    Pauline.addEventListener("click", () => toStore("PAULINE BOULANGERIE 1964", 
        "Caja sorpresa de café", 
        "$ " + 22000, 
        220, 
        "https://coffeeme.mx/cdn/shop/products/Mujer-Recibe_CG250_02.jpg?v=1693437245&width=1500",
        '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d105038.14214040054!2d-58.6492436!3d-34.6435403!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7ef63c659d5%3A0x832aed2426863ae2!2sPauline%20Boulangerie%201964!5e0!3m2!1ses-419!2sar!4v1781568771273!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'));

    HanaCafe.addEventListener("click", () => toStore("HANA CAFÉ", 
        "Mix Pastelería Premium", 
        "$ " + 17500, 
        175, 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqtGTyM5lqcdDaiYMcJ4gWbLtRxoRSVGw6ih22kzLRgBQJklt1IjcJ4x1C&s=10",
        '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d105038.14214040054!2d-58.6492436!3d-34.6435403!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc700096f683b%3A0x8443aef9c0c330ab!2sHana%20Caf%C3%A9!5e0!3m2!1ses-419!2sar!4v1781568785658!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'));
    
    Docena.addEventListener("click", () => toStore("DOCENA", 
        "Sandwich Gourmet", 
        "$ " + 13000, 
        130, 
        "https://imagenes.montevideo.com.uy/imgnoticias/201410/_W880_H495/471570.jpg",
        '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d105038.57016986673!2d-58.6492439!3d-34.6432024!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb50c74d13221%3A0xa9af1bace74d090b!2sDocena!5e0!3m2!1ses-419!2sar!4v1781568798739!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'));

    NorteCafe.addEventListener("click", () => toStore("NORTE CAFÉ DE ESPECIALIDAD", 
        "Brunch Sorpresa", 
        "$ " + 25750, 
        257, 
        "https://http2.mlstatic.com/D_NQ_NP_626459-MLA103634092244_012026-O.webp",
        '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d105037.1961303847!2d-58.7375855!3d-34.6442871!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc761065bede5%3A0xc1ec6e6e6a2e132b!2sNorte%20Caf%C3%A9%20de%20Especialidad!5e0!3m2!1ses-419!2sar!4v1781568810736!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'));
});