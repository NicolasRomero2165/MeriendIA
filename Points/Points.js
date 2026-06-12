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

function redeem200() {
    userPoints = localStorage.getItem('points')

    if(userPoints >= 200) {
        localStorage.setItem('points', userPoints - 200)
        alert("¡Puntos canjeados! Se te envió un correo electrónico con el código.")
        window.location.href = "./Points.html";
    } else {
        alert("No tienes los puntos suficientes.")
}
}

function redeem500(){
    userPoints = localStorage.getItem('points')

    if(userPoints >= 500) {
        localStorage.setItem('points', userPoints - 500)
        alert("¡Puntos canjeados! Se te envió un correo electrónico con el código.")
    } else {
        alert("No tienes los puntos suficientes.")
}}
