// Sublistas

// Crear un programa que permita agregar listas de tareas y agruparlas en categorias. El programa debe hacer lo siguiente:
// Permitir ingresar el nombre de una categoría
// Permitir ingresar una tarea
// Preguntar si desea ingresar otra tarea
// Si responde que si, volver al punto 2
// Si responde que no, preguntar si desea ingresar otra categoría
// Si responde que sí, volver al punto 1
// Si responde que no, terminar el programa En todo momento (en cada mensaje), el programa debe mostrar las tareas agrupadas por categorías. Las categorías deben diferenciarse de las tareas (se pueden usar divisores, emojis, espacios, etc). Ejemplo:
// Lista de Tareas

// SUPERMERCADO
// ----------------------
// 👉 Comprar harina
// 👉 Comprar gaseosa
// 👉 Comprar aceite

// FACULTAD
// ----------------------
// 👉 Sacar apuntes
// 👉 Anotarse para final

// MICHI
// ----------------------
// 👉 Comprar comida
// 👉 Llevar a veterinaria 


// let seguir = true;
// let modelo = ["CATEGORIA", ("------------------" + "\n")];
// let lista = [];


// while (seguir) {
//     let i = 0;
//     let j = 0; 
//     let sublista = [];
 
    
   
//     sublista[i] = modelo.slice();
//     categoria = ('📄 ' + prompt(`Ingrese el nombre de la categoría que desea agregar.`) + '\n');
//     sublista[i][0] = categoria;


  

//     while (seguir) {

//         let tarea = (prompt(`Ingrese la tarea que desea agregar a la lista. Lista:  
//         ${lista}`) + '\n');
        
//         sublista[i].push(tarea);
        
//         seguir = confirm(`¿Desea agregar otra tarea a la lista? Lista:  
//         ${lista}`);
        
//     }

    
//     seguir = confirm("¿Desea agregar otra categoría?");

//     i += 1;
    
// }




let seguir = true;
let lista = "";

while (seguir) {
   
    
   
    
    categoria = ('📄 ' + prompt(`Ingrese el nombre de la categoría que desea agregar.`) + '\n');
    lista += '\n' + categoria + "-------------------" + '\n';


  

    while (seguir) {

        let tarea = ( '👉 ' + prompt(`Ingrese la tarea que desea agregar a la lista. Lista:  
        ${lista}`) + '\n');
        lista += tarea;
        
        seguir = confirm(`¿Desea agregar otra tarea a la lista? Lista:  
        ${lista}`);
        
    }

    
    seguir = confirm("¿Desea agregar otra categoría?");
    lista += '\n';
}

alert(`Su lista es: 
${lista}`);