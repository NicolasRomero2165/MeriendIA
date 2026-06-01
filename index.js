users = [
    {
        name: "Nicolas Romero",
        email: "nicolasromero@gmail.com",
        number: 1164046773,
        password: "Nico1234",
        weight: 65,
        height: 1.68,
    }
]

function login(inputEmail, inputPass) {

    inputEmail = document.getElementById("email").value
    inputPass = document.getElementById("password").value

    console.log(`Correo: ${inputEmail}`)
    console.log(`Contraseña: ${inputPass}`)

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
}