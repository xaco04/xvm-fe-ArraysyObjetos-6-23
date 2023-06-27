// . Dado el array ["A", "B", "C", "D", "E", "F", "G", "H", "I"] crea una función que saque por
// consola la longitud del array. Crea otra función que obtenga un elemento aleatorio del
// array y lo saque por consola.

let array = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

const obtenerLongitudArray = (newArray) => {
    let longitudArray = newArray.length;
    return longitudArray;
}

const obtenerElementoAleatorio = (newLongitudArray) => {
    let iAleatorio = Math.floor(Math.random() * newLongitudArray);
    let elementoAleatorio = array[iAleatorio];
    return elementoAleatorio;
}

let longitudArray = obtenerLongitudArray(array);
console.log(longitudArray);
let elementoAleatorio = obtenerElementoAleatorio(longitudArray);
console.log(elementoAleatorio);

