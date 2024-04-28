let usuario = prompt('Ingrese su edad:');
const edadPermitida = 18;
let msg;

while ( isNaN(usuario) || usuario === '' || usuario < 0) {
    usuario = prompt('Datos incorrectos. Ingrese su edad:');
}

if (usuario < edadPermitida & usuario > 0) {
    //console.log('Edad: ' + usuario + '. El usuario es menor de edad');
    msg = alert('Edad: ' + usuario + '. El usuario es menor de edad')
} else if ( usuario >= 18 & usuario < 100) {
    //console.log('Edad: ' + usuario + '. El usuario es mayor de edad');
    alert('Edad: ' + usuario + '. El usuario es mayor de edad')
} else {
    //console.log('Edad: ' + usuario + '. El usuario probablemente no esté vivo');
    alert('Edad: ' + usuario + '. El usuario probablemente no esté vivo');
}
