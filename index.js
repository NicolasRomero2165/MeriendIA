function login(inputEmail, inputPass) {

    fetch('./users.json') 
        .then(respuesta => respuesta.json())
        .then(datos => {
    console.log(datos);
    let users = datos;

    inputEmail = document.getElementById("email").value
    inputPass = document.getElementById("password").value

    if(inputEmail.trim() === '' || inputPass.trim() === '') {
        alert('Debe completar todos los campos.')
        return;
    }
    
    console.log(`Correo: ${inputEmail}`)
    console.log(`Contraseña: ********`)

    const loginOk = users.find(
        (item) => item.email === inputEmail && item.password === inputPass)

    const user = users.find(item => item.email === inputEmail);
    localStorage.setItem('name', user.name)
    localStorage.setItem('email', user.email)
    localStorage.setItem('number', user.number)
    localStorage.setItem('image', user.image)
    localStorage.setItem('points', user.points)

    console.log(user.name)

    if (loginOk) {
        alert(`¡Bienvenido, ${user.name}!`)
        window.location.href = "./Home/Home.html";
        return true
    } else {
        alert("Datos incorrectos.")
        return false
    }

    })
    .catch(error => console.error('Error al cargar el JSON:', error));
}