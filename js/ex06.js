// 6. Crea un array con al menos 10 números y una función que los divida en otros dos arrays:
// uno para pares y otro para impares. A continuación, saca por consola ambos arrays
// resultantes concatenados.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const dividirNumerosParesImpares = (array) => {
    let pares = [];
    let impares = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            pares.push(array[i]);
    } 
        else {
            impares.push(array[i]);
    }
}

    return {
        pares: pares,
        impares: impares
};
}

let resultado = dividirNumerosParesImpares(numeros);
let numerosConcatenados = resultado.pares.concat(resultado.impares);

console.log(numerosConcatenados);


