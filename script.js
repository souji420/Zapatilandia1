// Simulamos los productos en formato JSON
const productos = [
    { folio: "001", descripcion: "Zapatilla", talla: "25", precio: "$500" },
    { folio: "002", descripcion: "Tenis", talla: "22", precio: "$700" },
    { folio: "003", descripcion: "Crocs", talla: "23", precio: "$350" },
    { folio: "004", descripcion: "Zapato", talla: "26", precio: "$800" }
];

// Función para cargar productos en la tabla
function cargarProductos() {
    const tabla = document.querySelector("#product-table tbody");

    productos.forEach(producto => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${producto.folio}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.talla}</td>
            <td>${producto.precio}</td>
        `;

        tabla.appendChild(fila);
    });
}

// Ejecutar la función al cargar la página
document.addEventListener("DOMContentLoaded", cargarProductos);