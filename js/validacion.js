function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const contraseña1 = document.getElementById("password1").value;
    const contraseña2 = document.getElementById("password2").value;
    const checkboxTerminos = document.getElementById("terminos");

    if (nombre === "" || apellido === "" || email === "" || contraseña1 === "" || contraseña2 === "") {
        showAlertError(); 
        return false;
    }

    if (contraseña1.length < 6) {
        showAlertError(); 
        alert("La contraseña debe tener al menos 6 caracteres."); 
        return false;
    }

    if (contraseña1 !== contraseña2) {
        showAlertError(); 
        alert("Las contraseñas no coinciden. Por favor, ingrésalas de nuevo.");
        return false;
    }

    if (!checkboxTerminos.checked) {
        showAlertError(); 
        alert("Debes aceptar los términos y condiciones para continuar."); 
        return false;
    }

    return true;
}

document.getElementById("regBtn").addEventListener("click", function() {
    if (validarFormulario()) {
        showAlertSuccess(); 
    }
});