function newUser(inputName, inputEmail, inputNumber, inputPass, inputPass2) {

    fetch('../users.json') 
        .then(respond => respond.json())
        .then(data => {
    console.log(data);
    let users = data;

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

    })
    .catch(error => console.error('Error al cargar el JSON:', error));
}