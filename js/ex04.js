// Crea una string, pásala a array y saca por consola la versión invertida de la original.
// Ejemplo: "Hola" -> [H, o, l, a] -> [a, l, o, H] -> "aloH"


let cadena = "Hola";

let array = cadena.split('');

let arrayInvertido = array.reverse();

let cadenaInvertida = arrayInvertido.join('');

console.log(cadenaInvertida);