document.getElementById('miDiv').addEventListener('click', function() {
    alert('Hola! Soy el div');
});
const boton = document.getElementById('miBoton');
boton.addEventListener('click', (event) => {
    event.stopPropagation();
    alert('¡Botón clickeado!');
});