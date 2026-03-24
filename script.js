// Variables para la página de Farmacon
let nombreFarmacia = "Farmacon"; // String 1
let slogan = "Tu salud primero"; // String 2
let numeroProductos = 50; // Number
let esAbierta = true; // Boolean
let descuento = null; // Null
let precioEspecial = undefined; // Undefined

// Mostrar valores en consola
console.log("Nombre de la farmacia:", nombreFarmacia);
console.log("Slogan:", slogan);
console.log("Número de productos:", numeroProductos);
console.log("¿Está abierta?", esAbierta);
console.log("Descuento actual:", descuento);
console.log("Precio especial:", precioEspecial);

// Agregar alerta a botones "Ver más" y "Comprar"
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Página en desarrollo');
    });
});
