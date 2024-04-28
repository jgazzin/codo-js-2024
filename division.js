let numA = prompt('Ingrese un número:');
let numB = prompt('Ingrese un segundo número:');
let msg;

//console.log(typeof(numA))

while (isNaN(numA) || isNaN(numB) ||
numA==='' || numB==='') {
    numA = prompt('Dato incorrecto. Ingrese el primer número:');
    numB = prompt('Dato incorrecto. Ingrese el segundo número:');

}

if (numB == 0) {
    alert('La división por 0 no existe. Vuelva a la primaria');
} else {
    let div = numA / numB;

    if ( numA % numB != 0) {
        div = Math.round(div * 10) / 10;
    }
    
    msg = alert(`La división entre ${numA} y ${numB} es ${div}`);
}
