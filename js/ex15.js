// Haz lo mismo declarando una clase "receta" e instanciando cada una de las nuevas
// recetas. Luego añádelas a un array y reutiliza la función que habías creado en el ejercicio
// anterior para sacarlas por consola.

class Receta {
    constructor(nombre, tiempoPreparacion, ingredientes) {
        this.nombre = nombre;
        this.tiempoPreparacion = tiempoPreparacion;
        this.ingredientes = ingredientes;
    }
}

let receta1 = new Receta(
    "Macarrones con tomate",
    "20 minutos",
    ["pasta", "tomate", "atun", "cebolla", "queso"]
);
let receta2 = new Receta(
    "Macarrones a la carbonara",
    "20 minutos",
    ["pasta", "nata", "bacon", "cebolla", "queso"]
);
let receta3 = new Receta(
    "Macarrones con aceite",
    "10 minutos",
    ["pasta", "aceite", "queso parmesano"]
);

let recetas = [receta1, receta2, receta3];

const mostrarReceta = (receta) => {
    console.log("Nombre: " + receta.nombre);
    console.log("Tiempo de preparación: " + receta.tiempoPreparacion);
    console.log("Ingredientes: " + receta.ingredientes.join(", "));
}

const mostrarRecetas = (recetas) => {
    for (let i = 0; i < recetas.length; i++) {
        console.log("Receta #" + (i + 1));
        mostrarReceta(recetas[i]);
        console.log("------------------------");
    }
}

mostrarRecetas(recetas);
