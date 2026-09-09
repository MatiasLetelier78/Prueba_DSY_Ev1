function validarFormulario() {
    let esValido = true;

    const nombre = document.getElementById("nombreCompleto").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const mensaje = document.getElementById("mensaje").value;

    // Validar nombre
    if (nombre.length < 2 || nombre.length > 100) {
        document.getElementById("error_nombre").style.display = "block";
        esValido = false;
    } else {
        document.getElementById("error_nombre").style.display = "none";
    }

    // Validar email
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoEmail.test(email)) {
        document.getElementById("error_email").style.display = "block";
        esValido = false;
    } else {
        document.getElementById("error_email").style.display = "none";
    }

    // Validar telefono
    const formatoTelefono = /^[0-9+ ]{8,12}$/;
    if (!formatoTelefono.test(telefono)) {
        document.getElementById("error_telefono").style.display = "block";
        esValido = false;
    } else {
        document.getElementById("error_telefono").style.display = "none";
    }

    // Validar mensaje
    if (mensaje.length < 10) {
        document.getElementById("error_mensaje").style.display = "block";
        esValido = false;
    } else {
        document.getElementById("error_mensaje").style.display = "none";
    }

    if (esValido) {
        document.getElementById("mensajeExito").style.display = "block";
        document.getElementById("formulario").reset();
    }

    return false; // evita que la página se recargue
}
