// Dados los arrays javascript1 = ["DOM", "BOM", "Funciones", "Arrays"] y javascript2 =
// ["Objetos", "Arrays", "ParseInt"], crea una función que determine si se repite algún
// elemento y lo saque por consola.

let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
let javascript2 = ["Objetos", "Arrays", "ParseInt"];

const encontrarElementosRepetidos = (array1, array2) => {
    let elementosRepetidos = [];

    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            elementosRepetidos.push(array1[i]);
    }
}

    for (let i = 0; i < elementosRepetidos.length; i++) {
        console.log(elementosRepetidos[i]);
}
}

encontrarElementosRepetidos(javascript1, javascript2);



