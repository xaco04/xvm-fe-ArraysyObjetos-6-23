// Crea un objeto que almacene los datos de una persona (nombre, apellidos, edad,
//     dirección, ciudad, país... y lo que quieras). Crea una función que saque por consola el
//     nombre completo (nombre y apellidos) de la persona a modo de string.

let persona = {
    nombre: "xavi",
    apellidos: "vico",
    edad: 25,
    dirección: "Calle Principal 123",
    ciudad: "Tarragona",
    país: "España"
};

const mostrarNombreCompleto = (persona) => {
    let nombreCompleto = persona.nombre + " " + persona.apellidos;
    console.log(nombreCompleto);
}

mostrarNombreCompleto(persona);