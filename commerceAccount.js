function login() {

    inputEmail = document.getElementById("email").value
    inputPass = document.getElementById("password").value

    if(inputEmail.trim() === '' || inputPass.trim() === '') {
        alert('Debe completar todos los campos.')
        return;
    }
    
    if (inputEmail === "comercio@gmail.com" && inputPass === "Comercio1234") {
        alert(`¡Bienvenido a su cuenta comercial!`)
        window.location.href = "./Commerce/Commerce.html";
        return true
    } else {
        alert("Datos incorrectos.")
        return false
    }
}

function toLogin(){
    window.location.href = "./index.html";
}