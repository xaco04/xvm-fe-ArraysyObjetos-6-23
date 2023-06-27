// Crea un array con los nombres de los planetas del Sistema Solar. Crea una función que
// los liste y los saque por consola.

let planetas = ["Mercurio", "Venus", "Tierra", "Marte", "Júpiter", "Saturno", "Urano", "Neptuno"];
const listarPlanetas = () => {
    for (let i = 0; i < planetas.length; i++) {
        console.log(planetas[i]);   
    }
}
listarPlanetas()