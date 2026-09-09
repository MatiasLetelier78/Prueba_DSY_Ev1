function obtenerParametro(nombreParametro) {
    const parametros = new URLSearchParams(window.location.search); // Lee todo lo que viene después del "?" en la URL
    return parametros.get(nombreParametro); // Entrega el valor de ese parámetro en particular
}

function mostrarProducto() {
    // Lee los datos del producto desde la URL (ej: producto.html?nombre=Catan&precio=29990&imagen=...)
    const nombre = obtenerParametro("nombre");
    const precio = obtenerParametro("precio");
    const imagen = obtenerParametro("imagen");

    document.getElementById("nombreProducto").textContent = nombre; // Escribe el nombre del producto en el título
    document.getElementById("precioProducto").textContent = "$" + Number(precio).toLocaleString("es-CL") + " CLP"; // Escribe el precio con formato de miles
    document.getElementById("imagenProducto").src = imagen; // Pone la imagen del producto
    document.getElementById("imagenProducto").alt = nombre; // Pone el texto alternativo de la imagen
}

mostrarProducto(); // Ejecuta la función apenas se carga la página
