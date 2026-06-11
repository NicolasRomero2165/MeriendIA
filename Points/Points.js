fetch('../users.json') 
        .then(respuesta => respuesta.json())
        .then(datos => {
    console.log(datos);
    let users = datos;
    localStorage.getItem(users)

    userPoints = localStorage.getItem('points')

    document.getElementById('points').innerHTML = userPoints
    
    if(userPoints < 200) {
        document.getElementById('next').innerHTML = `¡Estás a ${200 - userPoints} de tu próxima recompensa!`
    }

    if(userPoints > 200) {
        document.getElementById('next').innerHTML = `¡Estás a ${500 - userPoints} de tu próxima recompensa!`
    }
});

function toHome(){
    window.location.href = "../Home/Home.html";
}

function toMap(){
    window.location.href = "../Map/Map.html";
}

function toPoints(){
    window.location.href = "./Points.html";
}

function toProfile(){
    window.location.href = "../Profile/Profile.html";
}
