let usuarios = [
 
    ["0", "Carla", "1545628984", "carla@gmail.com", "\n"] ,
    ["1", " Pedro ","1545251245", "pedro@gmail.com",  "\n"],
    ["2"," Lucas ","1523357849", "lucas@gmail.com" ,  "\n"],
    ["3", "Ana","15789456", "ana@gmail.com", "\n"]
];

console.log(usuarios);
const operacion = "La operación ha sido cancelada";
const idInexistente = "No existe un usuario con ese ID";
let accion = "ENTRAR";

while (accion !== "SALIR") {
    let nuevoUsuario = [];
    let seguir = true;
    let id = 0;

    accion = prompt(`¿Qué acción desea realizar? 
    - CREAR un usuario
    - BUSCAR un usuario
    - LISTAR los usuarios
    - MODIFICAR un usuario
    - ELIMINAR un usuario
    - SALIR del programa`)

  

    switch(accion) {
        case "CREAR": 
        
            while (seguir) {

                for(i = 0; i < usuarios.length; i++) {
                    for (j = 0; j < usuarios[i].length; j++) {
                        if (j === 0) {
                            id = Number(i) + 1;
                        }
            
                    }
                }

                let nombre = "";
                let celular = "";
                let email = "";
                nuevoUsuario = [];

                nombre = prompt("Ingrese el nombre del usuario a agregar");
                celular = prompt("Ingrese el celular del usuario a agregar");
                email = prompt("Ingrese el email del usuario a agregar");

                let confirmar = confirm(`Los datos del usuario a ingresar son:

                    ${nombre}
                    ${celular}
                    ${email}
                ¿Está seguro de que desea ingresar este usuario?`);

                if (confirmar) {
                    nuevoUsuario.push( id, " ",nombre, " ", celular, " ", email, '\n');
                    usuarios.push(nuevoUsuario);
                }
                else {
                    alert(operacion)
                }
                
                seguir = confirm(`Los usuarios en la lista hasta el momento son: 

                ${usuarios}
                
                ¿Desea agregar otro usuario?`);
        }
        break

        case "BUSCAR":

            while (seguir) {
                let buscarPor = prompt(`Ingrese por qué valor desea buscar al usuario: 
                - ID
                - NOMBRE
                - CELULAR
                - EMAIL`);
    
                let valor = prompt("Ingrese el valor que desea encontrar");
                let noExiste = "no existe";
                let info = [];
                let id = 0;

                if (buscarPor === "ID") {
                    id = Number(valor);    

                    if (usuarios[id] !== undefined) {
                    info = usuarios[(id)].slice(0, (usuarios[(id)].length)); 
                    noExiste = "existe";
                    }
                }

                else if (buscarPor === "NOMBRE" || buscarPor === "CELULAR" || buscarPor === "EMAIL") {
                    for(i = 0; i < usuarios.length; i++) {
                        for (j = 0; j < usuarios[i].length; j++) {
                            if (usuarios[i][j] === valor) {
                                info = usuarios[i].slice(0, (usuarios[(i)].length));
                                noExiste = "existe";
                            };
                
                        };
                    };
                }
         
            if (noExiste === "no existe" || usuarios[id] === undefined) {
                alert(`No existe ningún usuario con el valor ${valor}.`);
                }   
            else {
                alert(`La información que está buscando del ${buscarPor} ${valor} es:
                
                ${info}`);
            }                  
            seguir = confirm(`¿Desea buscar otro usuario?`);
    
            };
        break

        case "LISTAR":
            alert(`Los usuarios ingresados a la lista son: 
            
            ${usuarios}`);
        break

        case "MODIFICAR":

            while(seguir) {
                let modificar = "";
                let idUsuario = Number(prompt("Ingrese el ID del usuario a modificar"));

                if (usuarios[idUsuario] !== undefined) {
                    let cambiar = false;
                    modificar = prompt("¿Qué valor desea modificar: NOMBRE, CELULAR o EMAIL?");
                    let valor = prompt("Ingrese el valor a modificar");

                    
                    switch (modificar) {
                        case "NOMBRE":
                            cambiar = confirm(`Usted está a punto de modificar el ${modificar}:
                             ${usuarios[idUsuario][1]} por ${valor}. ¿Desea confirmar la operación?`)
                            
                            if (cambiar) {

                                if (usuarios[idUsuario][1] === '\n') {
                                    usuarios[idUsuario].splice(1, 0, valor);
                                }
                                else {
                                    usuarios[idUsuario].splice(1, 1, valor);
                                }
                            }
                            else {
                                alert(operacion)
                            }

                        break
                        case "CELULAR":
                            cambiar = confirm(`Usted está a punto de modificar el ${modificar}:
                            ${usuarios[idUsuario][2]} por ${valor}. ¿Desea confirmar la operación?`)
                           
                           if (cambiar) {

                            if (usuarios[idUsuario][2] === '\n') {
                                usuarios[idUsuario].splice(2, 0, valor);
                            }
                            else {
                                usuarios[idUsuario].splice(2, 1, valor);
                            }
                           }
                           else {
                                alert(operacion)
                           }
                            
                        break
                        case "EMAIL":
                            cambiar = confirm(`Usted está a punto de modificar el ${modificar}:
                            ${usuarios[idUsuario][3]} por ${valor}. ¿Desea confirmar la operación?`)
                           
                           if (usuarios[idUsuario][3] === '\n') {
                                    usuarios[idUsuario].splice(3, 0, valor);
                                }
                                else {
                                    usuarios[idUsuario].splice(3, 1, valor);
                                }
                        break
                    }

                    if (cambiar) {
                        alert(`El ${modificar} ha sido correctamente modificado. La información actual del usuario es: 
                    
                    ${usuarios[idUsuario]}`)
                    }
                    else {
                        alert(`El ${modificar} no ha sido modificado. La información del usuario es: 
                    
                        ${usuarios[idUsuario]} `)
                    }
                       
                }
                else {
                    alert(idInexistente);
                }
                    
                seguir = confirm(`¿Desea modificar otro usuario?`);
            }
        break

        case "ELIMINAR":
                 
            while(seguir) {
                let idUsuario = Number(prompt("Ingrese el ID del usuario a eliminar"));

                if (usuarios[idUsuario] !== undefined) {
                    
                    let eliminar = confirm(`La información del ID ingresado es: 
                    ${usuarios[idUsuario]}
                    
                    ¿Desea eliminarlo?`);
                    
                    if (eliminar) {
                        usuarios[idUsuario].splice(1, ((usuarios[idUsuario].length)- 2));
                    }
                    else {  
                        alert(operacion)
                    }

                }
                else {
                    alert(idInexistente);
                }
                    
                seguir = confirm(`¿Desea eliminar otro usuario?`);

            }
        break

        case "SALIR":
            accion = "SALIR";
        break

        default: 
        
            alert("Ingrese una opción válida");
        break
    };
}
