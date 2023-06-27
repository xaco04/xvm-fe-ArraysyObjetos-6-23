// Utiliza el objeto del ejercicio anterior y mediante desestructuración accede únicamente
// a tres de esas propiedades.
let persona = {
    nombre: "xavi",
    apellidos: "vico",
    edad: 25,
    dirección: "Calle Principal 123",
    ciudad: "Tarragona",
    país: "España"
};

let { nombre, apellidos, dirección } = persona;

console.log(nombre);
console.log(apellidos);
console.log(dirección);