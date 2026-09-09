function validarFormulario() {
    let esValido = true; // Empieza asumiendo que todo está bien, se cambia a false si algo falla

    // Guarda lo que el usuario escribió en cada campo
    const nombre = document.getElementById("nombreCompleto").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const mensaje = document.getElementById("mensaje").value;

    // Validar nombre
    if (nombre.length < 2 || nombre.length > 100) { // Por si el nombre es muy corto o muy largo
        document.getElementById("error_nombre").style.display = "block"; // Muestra el mensaje de error
        esValido = false; // Marca el formulario como inválido
    } else {
        document.getElementById("error_nombre").style.display = "none"; // Oculta el mensaje de error
    }

    // Validar email
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patrón que debe tener un correo válido (texto@texto.texto)
    if (!formatoEmail.test(email)) { // Si el email no cumple el patrón
        document.getElementById("error_email").style.display = "block"; // Muestra el mensaje de error
        esValido = false; // Marca el formulario como inválido
    } else {
        document.getElementById("error_email").style.display = "none"; // Oculta el mensaje de error
    }

    // Validar telefono
    const formatoTelefono = /^[0-9+ ]{8,12}$/; // Solo números, espacios y "+", entre 8 y 12 caracteres
    if (!formatoTelefono.test(telefono)) { // Si el teléfono no cumple el patrón
        document.getElementById("error_telefono").style.display = "block"; // Muestra el mensaje de error
        esValido = false; // Marca el formulario como inválido
    } else {
        document.getElementById("error_telefono").style.display = "none"; // Oculta el mensaje de error
    }

    // Validar mensaje
    if (mensaje.length < 10) { // Si el mensaje es muy corto
        document.getElementById("error_mensaje").style.display = "block"; // Muestra el mensaje de error
        esValido = false; // Marca el formulario como inválido
    } else {
        document.getElementById("error_mensaje").style.display = "none"; // Oculta el mensaje de error
    }

    if (esValido) { // Si pasó todas las validaciones
        document.getElementById("mensajeExito").style.display = "block"; // Muestra el mensaje de éxito
        document.getElementById("formulario").reset(); // Limpia todos los campos del formulario
    }

    return false; // Evita que la página se recargue al enviar el formulario
}