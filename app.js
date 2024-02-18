//asignar texto a una etiqueta de forma individual
// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica un número del 1 al 10';

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log('numeroSecreto');

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {

    //verifica el input sin necesidad del id
    //let numeroDeUsuario = document.querySelector ('input');

    let numeroDeUsuario = parseInt(document.getElementById ('valorUsuario').value);

    // console.log (typeof (numeroDeUsuario));
    // console.log(numeroSecreto);
    // console.log (typeof (numeroSecreto));
    // console.log (numeroDeUsuario);
    //alert ('Click desde el botón');

    //console.log (numeroDeUsuario == numeroSecreto);
    //console.log (intentos);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
        document.getElementById ('reiniciar').removeAttribute ('disabled');
    } else {
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento ('p', 'El número es menor');
        } else {
            asignarTextoElemento ('p', 'El número es mayor');
        }
        intentos ++;
        limpiarCaja();
    }

    return;
}

function condicionesIniciales () {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.querySelector ('#reiniciar').setAttribute ('disabled', 'true');
}

//generar el número secreto de forma independiente
// function generarNumeroSecreto () {
//     return Math.floor(Math.random()*10)+1;
// }

function generarNumeroSecreto () {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
    //Si ya sorteamos todos lo números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ('p', 'Ya se sortearon todos los números posibles');
    } else {
        //si el número generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

//verifica el input agregando "#" para indicar el ID que queremos usar"

//limpiar el input de forma larda
// function limpiarCaja() {
//     let valorCaja = document.querySelector('#valorUsuario');
//     valorCaja.value = '';
// }
//Limpiar el input de forma corta
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego () {
    //limpiar el input 
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar número aleatorio
    //inicializar el número de intentos
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego
    
}

condicionesIniciales();
