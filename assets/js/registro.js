function calcularEdad(fechaNacimiento) {
    const hoy = new Date(); // Fecha de hoy
    const nacimiento = new Date(fechaNacimiento); // Fecha de nacimiento que escribió el usuario
    let edad = hoy.getFullYear() - nacimiento.getFullYear(); // Resta los años (cálculo aproximado)
    const mes = hoy.getMonth() - nacimiento.getMonth(); // Resta los meses para ajustar el cálculo

    // Si el mes de nacimiento todavía no llega este año, o es el mismo mes pero el día no ha llegado, resta 1 año
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad = edad - 1; // Ajusta la edad porque el cumpleaños de este año todavía no pasa
    }

    return edad; // Entrega la edad ya calculada
}

function validarRegistro() {
    let esValido = true; // Empieza asumiendo que todo está bien, se cambia a false si algo falla

    // Guarda lo que el usuario escribió en cada campo
    const nombre = document.getElementById("nombreCompleto").value;
    const email = document.getElementById("email").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const password = document.getElementById("password").value;
    const confirmarPassword = document.getElementById("confirmarPassword").value;

    // Validar nombre
    if (nombre.length < 2 || nombre.length > 100) { // Si el nombre es muy corto o muy largo
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

    // Validar edad (debe ser mayor de 18)
    if (fechaNacimiento === "" || calcularEdad(fechaNacimiento) < 18) { // Si no eligió fecha o es menor de 18
        document.getElementById("error_fecha").style.display = "block"; // Muestra el mensaje de error
        esValido = false; // Marca el formulario como inválido
    } else {
        document.getElementById("error_fecha").style.display = "none"; // Oculta el mensaje de error
    }

    // Validar contraseña
    if (password.length < 6) { // Si la contraseña tiene menos de 6 caracteres
        document.getElementById("error_password").style.display = "block"; // Muestra el mensaje de error
        esValido = false; // Marca el formulario como inválido
    } else {
        document.getElementById("error_password").style.display = "none"; // Oculta el mensaje de error
    }

    // Validar confirmación de contraseña
    if (confirmarPassword === "" || confirmarPassword !== password) { // Si está vacía o no coincide con la anterior
        document.getElementById("error_confirmar").style.display = "block"; // Muestra el mensaje de error
        esValido = false; // Marca el formulario como inválido
    } else {
        document.getElementById("error_confirmar").style.display = "none"; // Oculta el mensaje de error
    }

    document.getElementById("mensajeDescuento").style.display = "none"; // Oculta el mensaje de descuento antes de revisar

    if (esValido) { // Si pasó todas las validaciones
        document.getElementById("mensajeExito").style.display = "block"; // Muestra el mensaje de éxito

        // Descuento de por vida para correos Duoc
        if (email.endsWith("@duoc.cl") || email.endsWith("@duocuc.cl")) { // Si el correo termina en @duoc.cl o @duocuc.cl
            document.getElementById("mensajeDescuento").style.display = "block"; // Muestra el mensaje del descuento
        }

        document.getElementById("formularioRegistro").reset(); // Limpia todos los campos del formulario
    }

    return false; // Evita que la página se recargue al enviar el formulario
}
