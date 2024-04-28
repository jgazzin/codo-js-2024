let nombre = prompt('Ingrese su nombre:');

while (nombre==='') {
    nombre = prompt('No ingresó datos. Ingrese su nombre:');
}

if (!isNaN(nombre)) {
    alert('Su nombre es un número :(')
} else {
    alert(`Hola ${nombre}, bienvenido al programa!`);
}