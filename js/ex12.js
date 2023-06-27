// Crea un array que contenga al menos tres objetos con las mismas propiedades (al menos
//     tres) y distintos valores. Crea una función que saque por consola el valor de una de las
//     propiedades para todos los objetos.
let personas = [
    { nombre: "xavi", edad: 25, ciudad: "Tarragona" },
    { nombre: "jose", edad: 32, ciudad: "Barcelona" },
    { nombre: "jesus", edad: 20, ciudad: "Reus" }
];

const mostrarPropiedad = (objetos, propiedad) => {
    for (let i = 0; i < objetos.length; i++) {
        console.log(objetos[i][propiedad]);
    }
}

mostrarPropiedad(personas, "nombre");