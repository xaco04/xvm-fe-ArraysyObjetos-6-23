// Dado el array javascript1 = ["DOM", "BOM", "Funciones", "Arrays"], elimina "DOM" del
// array. Añade en su lugar el elemento "Objetos". Elimina el elemento "Arrays". Añade en
// su lugar el elemento "ArraysDifíciles". Haz una copia del array que solo incluya los
// últimos dos elementos. Obtén el índice del elemento "Funciones".

javascript1 = ["DOM", "BOM", "Funciones", "Arrays"]

javascript1[0] = "Objetos";

javascript1[3] = "ArraysDificiles";

let ultimosdoselementos = [ javascript1[2], javascript1[3] ];

let indiceFunciones = javascript1.indexOf("Funciones");


console.log(javascript1);
console.log(ultimosdoselementos);
console.log("El índice de 'Funciones' es: " + indiceFunciones);


