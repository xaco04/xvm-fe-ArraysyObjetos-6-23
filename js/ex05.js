// Crea dos arrays de la misma longitud y una función que cree un nuevo array que intercale
// sus elementos y vacíe los arrays originales. Por ejemplo, con los arrays arrayUno = [1, 2,
// 3] y arrayDos = [4, 5, 6] el resultado debería ser [1, 4, 2, 5, 3, 6]

let arrayUno = [1, 2, 3];
let arrayDos = [4, 5, 6];

const intercalararrays = (newarrayuno, newarraydos) => {
    let nuevoarray = [];
    while (newarrayuno.length > 0 && newarraydos.length > 0) {
        nuevoarray.push(newarrayuno.shift());
        nuevoarray.push(newarraydos.shift());
}
    return nuevoarray;
}
console.log(arrayUno);
console.log(arrayDos);
console.log(intercalararrays(arrayUno,arrayDos));
