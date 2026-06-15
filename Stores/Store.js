nameStore = localStorage.getItem('nameStore')
productStore = localStorage.getItem('productStore')
priceStore = localStorage.getItem('priceStore')
pointsStore = localStorage.getItem('pointsStore')
imageStore = localStorage.getItem('imageStore')

document.getElementById('name').innerHTML = nameStore
document.getElementById('product').innerHTML = productStore
document.getElementById('price').innerHTML = priceStore
document.getElementById('points').innerText = pointsStore
document.getElementById('image').src = imageStore

function toHome(){
    window.location.href = "../Home/Home.html";
}

function toMap(){
    window.location.href = "../Map/Map.html";
}

function toPoints(){
    window.location.href = "../Points/Points.html";
}

function toProfile(){
    window.location.href = "../Profile/Profile.html";
}

function buy(){
    alert("¡Compra realizada! Se envió un código para retirar a tu correo electrónico.")
}