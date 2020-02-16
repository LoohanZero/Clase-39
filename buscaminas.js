// Buscaminas

// Crear un programa que dado un array 2d permita ingresar una coordenada (representando los índices del array), y mostrar si era una casilla vacía o tenía una mina. En caso de que tenga una casilla vacía, debe poder seguir jugando e ingresando casillas. Si descubre todas las casillas vacías o elige una con una mina, el juego debe terminar, e indicar si perdió o ganó. Las minas y casillas vacías (ocultas y descubiertas) pueden representarse con emojis con con números o letras.
// 📦 📦 📦
// 📦 📦 📦
// 📦 📦 📦

// // Ingrese una coordenada: 0,0
// // La caja está vacía!

// 💨 📦 📦
// 📦 📦 📦
// 📦 📦 📦

// // Ingrese una coordenada: 0,1
// // ¡Oh no!¡Has encontrado una bomba!

// 💨 💥 📦
// 📦 📦 📦
// 📦 📦 📦


const tablero = 
[
  ['📦', '💣', '💣'],
  ['📦', '📦', '📦'],
  ['💣', '📦', '📦']
];

let tableroMostrado = [
    ['📦', '📦', '📦'],
    ['📦', '📦', '📦'],
    ['📦', '📦', '📦']
];

let casillaElegida = '💣';
let terminarPrograma = "ENTRAR";

while (terminarPrograma !== "SALIR") {
   let casilla = prompt(`Elija una casilla e ingrese su número en forma de coordenadas. Intente esquivar las minas: 

    ${tableroMostrado[0]}
    ${tableroMostrado[1]}
    ${tableroMostrado[2]}`
    ).split("");

    let i = Number(casilla.shift())- 1;
    let j = Number(casilla.pop())- 1;

    let casillaElegida = tablero[i][j];

    if (casillaElegida === '💣') {
        tableroMostrado[i][j] = '💥'; 
        terminarPrograma = "SALIR";

        alert(`¡Oh no!¡Has encontrado una bomba!
        ${tableroMostrado[0]}
        ${tableroMostrado[1]}
        ${tableroMostrado[2]}`);
    }
    else if (casillaElegida === '📦') {
        tableroMostrado[i][j] = '💨';
        tablero[i][j] = '💨';
        alert(`¡La caja está vacía!
        ${tableroMostrado[0]}
        ${tableroMostrado[1]}
        ${tableroMostrado[2]}`);
    }
    else {
        alert(`¡Usted ya ha abierto esa caja! Elija una nueva coordenada.`);
    }


    for (x=0; x < tablero.length; x++) {

        for (y=0; y < tablero[x].length; y++) {

            if(tablero[x][y] === '📦') {
                terminarPrograma = "ENTRAR";
            }
            else {
                terminarPrograma = "SALIR";
            };
            if (casillaElegida === '💣') {
                terminarPrograma = "SALIR";
            }
        }  
    }
}

if (casillaElegida !== '💣') {
    alert(`¡Has Ganado! Has esquivado todas las bombas: 
    ${tableroMostrado[0]}
    ${tableroMostrado[1]}
    ${tableroMostrado[2]}
    `)
} 