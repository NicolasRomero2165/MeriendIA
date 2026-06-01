users = [
    {
        id: 1,
        name: "Nicolas Romero",
        email: "nicolasromero@gmail.com",
        number: 1164046773,
        password: "Nico1234",
    }
]

function login(inputEmail, inputPass) {

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
}

function newUser(inputName, inputEmail, inputNumber, inputPass, inputPass2) {

    inputName = document.getElementById("name").value
    inputEmail = document.getElementById("email").value
    inputNumber = document.getElementById("number").value
    inputPass = document.getElementById("password").value
    inputPass2 = document.getElementById("password2").value

    console.log(`Nombre completo: ${inputName}`)
    console.log(`Correo: ${inputEmail}`)
    console.log(`Número: ${inputNumber}`)
    console.log(`Contraseña1: ${inputPass}`)
    console.log(`Contraseña2: ${inputPass2}`)

    if (inputPass === inputPass2) {

        const index = users.length + 1
        console.log(index)
        
        const newUser = {
            id: index, 
            name: inputName, 
            email: inputEmail, 
            number: inputNumber,
            password: inputPass,
        }

        users.push(newUser)

        console.log(users)
        alert("¡Cuenta creada!")
    } else {
        alert("No coinciden las contraseñas.")
    }
}