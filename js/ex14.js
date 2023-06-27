// Reutiliza la receta del ejercicio anterior y añádela a un array que contenga varias recetas
// similares, con las mismas propiedades. Utiliza también la función del ejercicio anterior y
// saca por consola todas las recetas de tu array
let receta1 = {
    nombre: "Macarrones con tomate",
    tiempoPreparacion: "20 minutos",
    ingredientes: ["pasta", "tomate", "atun", "cebolla", "queso"]
};

let receta2 = {
    nombre: "Macarrones a la carbonara",
    tiempoPreparacion: "20 minutos",
    ingredientes: ["pasta", "nata", "bacon", "cebolla", "queso"]
};

let receta3 = {
    nombre: "Macarrones con aceite",
    tiempoPreparacion: "10 minutos",
    ingredientes: ["pasta", "aceite", "queso parmesano"]
};

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