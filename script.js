const formulario = document.getElementById("formulario");
const listaLibros = document.getElementById("lista-libros");
const carrito = document.getElementById("carrito");
const total = document.getElementById("total");

let totalCompra = 0;

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    const titulo = document.getElementById("titulo").value.trim();
    const precio = parseFloat(document.getElementById("precio").value);

    if (titulo === "" || isNaN(precio) || precio <= 0) {
        alert("Por favor ingresa un título y un precio válido.");
        return;
    }

    const libroDiv = document.createElement("div");
    libroDiv.innerHTML = `
        <strong>${titulo}</strong><br>
        Precio: $${precio.toFixed(2)}<br>
        <button class="agregar-carrito">Agregar al carrito</button>
        <hr>
    `;

    libroDiv.querySelector(".agregar-carrito").addEventListener("click", function () {
        const li = document.createElement("li");
        li.innerHTML = `${titulo} - $${precio.toFixed(2)} <button class="eliminar">Eliminar</button>`;

        li.querySelector(".eliminar").addEventListener("click", function () {
            totalCompra -= precio;
            carrito.removeChild(li);
            actualizarTotal();
        });

        carrito.appendChild(li);
        totalCompra += precio;
        actualizarTotal();
    });

    listaLibros.appendChild(libroDiv);
    formulario.reset();
});

function actualizarTotal() {
    total.textContent = `Total: $${totalCompra.toFixed(2)}`;
}
