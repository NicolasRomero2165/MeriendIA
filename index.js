function login(inputEmail, inputPass) {

    fetch('./users.json') 
        .then(respuesta => respuesta.json())
        .then(datos => {
    console.log(datos);
    let users = datos;

    inputEmail = document.getElementById("email").value
    inputPass = document.getElementById("password").value

    console.log(`Correo: ${inputEmail}`)
    console.log(`Contraseña: ********`)

    const loginOk = users.find(
        (item) => item.email === inputEmail && item.password === inputPass
    );

    const name = users[0].name;

    if (loginOk) {
        alert(`¡Bienvenido, ${name}!`)
        window.location.href = "./Home/Home.html";
        return true
    } else {
        alert("Datos incorrectos.")
        return false
    }

    })
    .catch(error => console.error('Error al cargar el JSON:', error));
}