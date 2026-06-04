function login(inputEmail, inputPass) {

    fetch('./users.json') 
        .then(respuesta => respuesta.json())
        .then(datos => {
    console.log(datos);
    let users = datos;
    localStorage.getItem(users)

    inputEmail = document.getElementById("email").value
    inputPass = document.getElementById("password").value

    if(inputEmail.trim() === '' || inputPass.trim() === '') {
        alert('Debe completar todos los campos.')
        return;
    }
    
    console.log(`Correo: ${inputEmail}`)
    console.log(`Contraseña: ********`)

    const loginOk = users.find(
        (item) => item.email === inputEmail && item.password === inputPass
    );

    const index = users.length - 1;    
    const name = users[index].name;

    if (loginOk) {
        alert(`¡Bienvenido, ${name}!`)
        window.location.href = "./Home/Home.html";
        return true
    } else {
        alert("Datos incorrectos.")
        return false
    }

    return;
    })
    .catch(error => console.error('Error al cargar el JSON:', error));
}