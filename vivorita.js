// Viborita

// Crear un programa que permita controlar una viborita.
// El programa debe mostrar el tablero en todo momento.
// Debe permitir ingresar las direcciones para donde desea mover la víbora: ARRIBA, DERECHA, ABAJO, IZQUIERDA, y moverla en consecuencia.
// El objetivo es comer todas las manzanas, el juego termina cuando no hay más manzanas.
// Para comer una manzana, debe moverse hacia ella.
// Si la vibora llega esta en el borde del tablero, y se mueve hacia este, debe aparecer del otro lado del mismo.
// Si se intenta avanzar a un casillero bloqueado (en el ejemplo, un ladrillo) no debe poder avanzar.
// En vez de emojis se pueden usar letras.


let tablero = 
[
    ['🌱', '🌱', '🍎', '🌱', '🌱'],
    ['🍎', '🧱', '🌱', '🧱', '🍎'],
    ['🌱', '🧱', '🐍', '🌱', '🌱'],
    ['🌱', '🍎', '🌱', '🧱', '🌱'],
    ['🍎', '🌱', '🌱', '🍎', '🧱'],
    ['🌱', '🌱', '🌱', '🌱', '🍎'],    
];

let iVivorita = 0;
let jVivorita = 0;

let sigue = true; 

while (sigue) {
    let manzana = 0;

    for (let i =  0; i < tablero.length; i++) {

        for(let j = 0; j < tablero[i].length; j++) 
        {
            if (tablero[i][j] === '🐍') {
                iVivorita = i;
                jVivorita = j;
            }
            
            
        }
    }

    let pregunta = prompt(`¿Desea mover a la vivorita hacia ARRIBA, ABAJO, DERECHA o IZQUIERDA?
    ${tablero[0]}
    ${tablero[1]}
    ${tablero[2]}
    ${tablero[3]}
    ${tablero[4]}
    ${tablero[5]}`);

    if (pregunta === "DERECHA") {

        if (tablero[iVivorita][jVivorita + 1] === undefined) {

            if (tablero[iVivorita][jVivorita - 4] === '🧱') {
                alert(`No puede pasar porque hay una pared, intente otra opción.
            ${tablero[0]}
            ${tablero[1]}
            ${tablero[2]}
            ${tablero[3]}
            ${tablero[4]}
            ${tablero[5]}`)
            }
            else {
            tablero[iVivorita].splice((jVivorita), 1);
            tablero[iVivorita].splice((jVivorita - (iVivorita.length)), 1);
            tablero[iVivorita].splice((jVivorita - (iVivorita.length)), 0, '🐍');
            tablero[iVivorita].splice((jVivorita), 0, '🌱');
            }
        }
        else if (tablero[iVivorita][jVivorita + 1] === '🧱') {
            alert(`No puede pasar porque hay una pared, intente otra opción.
            ${tablero[0]}
            ${tablero[1]}
            ${tablero[2]}
            ${tablero[3]}
            ${tablero[4]}
            ${tablero[5]}`)
        }
        else if (tablero[iVivorita][jVivorita + 1] === '🍎') {
            tablero[iVivorita].splice((jVivorita + 1), 1);
            tablero[iVivorita].splice((jVivorita), 0, '🌱');
        }
        else {
            tablero[iVivorita].splice((jVivorita + 1), 1);
            tablero[iVivorita].splice((jVivorita), 0, '🌱');
        }
    }
    else if (pregunta === "IZQUIERDA"){

        if (tablero[iVivorita][jVivorita - 1] === undefined) {

            if (tablero[iVivorita][jVivorita + (iVivorita.length)] === '🧱') {
                alert(`No puede pasar porque hay una pared, intente otra opción.
            ${tablero[0]}
            ${tablero[1]}
            ${tablero[2]}
            ${tablero[3]}
            ${tablero[4]}
            ${tablero[5]}`)
            }
            else {
                tablero[iVivorita].splice((jVivorita), 1);
                tablero[iVivorita].splice((jVivorita), 0, '🌱');
                tablero[iVivorita].splice((jVivorita + (iVivorita.length)), 1);
                tablero[iVivorita].splice((jVivorita + (iVivorita.length)), 0, '🐍');
            }

            
           
        }
        else if (tablero[iVivorita][jVivorita - 1]  === '🧱') {
            alert(`No puede pasar porque hay una pared, intente otra opción.
            ${tablero[0]}
            ${tablero[1]}
            ${tablero[2]}
            ${tablero[3]}
            ${tablero[4]}
            ${tablero[5]}`)
        }
        else if (tablero[iVivorita][jVivorita - 1]  === '🍎') {
            tablero[iVivorita].splice((jVivorita - 1), 1);
            tablero[iVivorita].splice((jVivorita), 0, '🌱');
        }
        else {
            tablero[iVivorita].splice((jVivorita - 1), 1);     
            tablero[iVivorita].splice((jVivorita), 0, '🌱');
        }
    }
    else if (pregunta === "ARRIBA") {
        if (tablero[iVivorita - 1] === undefined) {

            if (tablero[iVivorita + (tablero.length-1)][jVivorita] === '🧱') {
                alert(`No puede pasar porque hay una pared, intente otra opción.
            ${tablero[0]}
            ${tablero[1]}
            ${tablero[2]}
            ${tablero[3]}
            ${tablero[4]}
            ${tablero[5]}`)
            }
            else {
            tablero[iVivorita].splice((jVivorita), 1);  
            tablero[iVivorita].splice((jVivorita), 0, '🌱'); 
            tablero[iVivorita + (tablero.length-1)].splice(jVivorita, 1)
            tablero[iVivorita + (tablero.length-1)].splice(jVivorita, 0, '🐍');
            }
        }
        else if (tablero[iVivorita - 1][jVivorita]  === '🧱') {
            alert(`No puede pasar porque hay una pared, intente otra opción.
            ${tablero[0]}
            ${tablero[1]}
            ${tablero[2]}
            ${tablero[3]}
            ${tablero[4]}
            ${tablero[5]}`)
        }
        else if (tablero[iVivorita - 1][jVivorita]  === '🍎') {
            tablero[iVivorita - 1].splice((jVivorita), 1);  
            tablero[iVivorita].splice(jVivorita, 1);
            tablero[iVivorita - 1].splice((jVivorita), 0, '🐍');
            tablero[iVivorita].splice((jVivorita), 0, '🌱');      
        }
        else {
            tablero[iVivorita - 1].splice((jVivorita), 1);  
            tablero[iVivorita].splice(jVivorita, 1);
            tablero[iVivorita - 1].splice((jVivorita), 0, '🐍');
            tablero[iVivorita].splice((jVivorita), 0, '🌱');  
            
        }

    }

    else if (pregunta === "ABAJO") {
        if (tablero[iVivorita + 1] === undefined) {

            if (tablero[iVivorita + (tablero.length-1)][jVivorita] === '🧱') {
                alert(`No puede pasar porque hay una pared, intente otra opción.
            ${tablero[0]}
            ${tablero[1]}
            ${tablero[2]}
            ${tablero[3]}
            ${tablero[4]}
            ${tablero[5]}`)
            }
            else {
            tablero[iVivorita].splice((jVivorita), 1);  
            tablero[iVivorita].splice((jVivorita), 0, '🌱'); 
            tablero[iVivorita - (tablero.length-1)].splice(jVivorita, 1)
            tablero[iVivorita - (tablero.length-1)].splice(jVivorita, 0, '🐍');
            }
        }
        else if (tablero[iVivorita + 1][jVivorita]  === '🧱') {
            alert(`No puede pasar porque hay una pared, intente otra opción.
            ${tablero[0]}
            ${tablero[1]}
            ${tablero[2]}
            ${tablero[3]}
            ${tablero[4]}
            ${tablero[5]}`)
        }
        else if (tablero[iVivorita + 1][jVivorita]  === '🍎') {
            tablero[iVivorita + 1].splice((jVivorita), 1);  
            tablero[iVivorita].splice(jVivorita, 1);
            tablero[iVivorita + 1].splice((jVivorita), 0, '🐍');
            tablero[iVivorita].splice((jVivorita), 0, '🌱');      
        }
        else {
            tablero[iVivorita + 1].splice((jVivorita), 1);  
            tablero[iVivorita].splice(jVivorita, 1);
            tablero[iVivorita + 1].splice((jVivorita), 0, '🐍');
            tablero[iVivorita].splice((jVivorita), 0, '🌱');  
            
        }
    }


    for (let i =  0; i < tablero.length; i++) {

        for(let j = 0; j < tablero[i].length; j++) 
        {
            if (tablero[i][j] === '🍎') {

                if (tablero[i][j] === '🍎') {
                    manzana += 1;
                }
            }
            
        }
    }


    if (manzana === 0 ) {
        sigue = false;
        alert(`¡Usted ha ganado!
        
        ${tablero[0]}
        ${tablero[1]}
        ${tablero[2]}
        ${tablero[3]}
        ${tablero[4]}
        ${tablero[5]}`)
    }

}

