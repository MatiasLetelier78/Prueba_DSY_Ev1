function validarLogin() {
    let esValido = true; // Empieza asumiendo que todo está bien, se cambia a false si algo falla

    // Guarda lo que el usuario escribió en cada campo
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validar email
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patrón que debe tener un correo válido (texto@texto.texto)
    if (!formatoEmail.test(email)) { // Si el email no cumple el patrón
        document.getElementById("error_email").style.display = "block"; // Muestra el mensaje de error
        esValido = false; // Marca el formulario como inválido
    } else {
        document.getElementById("error_email").style.display = "none"; // Oculta el mensaje de error
    }

    // Validar contraseña (no puede estar vacía)
    if (password.length === 0) { // Si no escribió nada en la contraseña
        document.getElementById("error_password").style.display = "block"; // Muestra el mensaje de error
        esValido = false; // Marca el formulario como inválido
    } else {
        document.getElementById("error_password").style.display = "none"; // Oculta el mensaje de error
    }

    if (esValido) { // Si pasó todas las validaciones
        document.getElementById("mensajeExito").style.display = "block"; // Muestra el mensaje de éxito
    }

    return false; // Evita que la página se recargue al enviar el formulario
}
