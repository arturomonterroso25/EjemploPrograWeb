document.addEventListener("DOMContentLoaded", function() {
    var tabla = document.getElementById("miTabla");

    // Crear una fila
    var fila = document.createElement("tr");

    // Crear celdas y establecer su contenido
    var celda1 = document.createElement("td");
    celda1.textContent = "Dato 1";
    fila.appendChild(celda1);

    var celda2 = document.createElement("td");
    celda2.textContent = "Dato 2";
    fila.appendChild(celda2);

    // Agregar la fila a la tabla
    tabla.appendChild(fila);
});
