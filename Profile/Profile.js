fetch('../users.json') 
        .then(respuesta => respuesta.json())
        .then(datos => {
    console.log(datos);
    let users = datos;
    localStorage.getItem(users)

    nameUser = localStorage.getItem('name')
    nameImage = localStorage.getItem('image')
    nameEmail = localStorage.getItem('email')

    document.getElementById('image').src = nameImage
    document.getElementById('name').innerHTML = nameUser
    document.getElementById('email').innerHTML = nameEmail


        });

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

function toLogin(){
    window.location.href = "../index.html";
}