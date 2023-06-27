// 13. Crea un objeto que contenga una receta de cocina, con propiedades asignadas a su
// nombre, tiempo de preparación e ingredientes. Haz una función que saque por consola
// el nombre, el tiempo y una lista de los ingredientes.
let receta = {
    nombre: "Macarrones con tomate",
    tiempoPreparacion: "20 minutos",
    ingredientes: ["pasta", "tomate", "atun", "cebolla", "queso"]
};

const mostrarReceta = (receta) => {
    console.log("Receta: " + receta.nombre);
    console.log("Tiempo de Preparación: " + receta.tiempoPreparacion);
    console.log("Ingredientes:");

    for (let i = 0; i < receta.ingredientes.length; i++) {
        console.log("- " + receta.ingredientes[i]);
    }
}

mostrarReceta(receta);