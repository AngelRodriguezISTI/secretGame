/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Titulo del juego';

let subtitulo = document.querySelector('p');
subtitulo.innerHTML = "Este es el subtitulo";
se susituyo con la funcion de asignarTextoElemento
*/

let numeroSectreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}
console.log(numeroSectreto);
function verificarIntento () {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroSectreto === numeroUsuario){
        asignarTextoElemento('p', `Adivinaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto
        if (numeroUsuario > numeroSectreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles')
    } else {

    }
    //Si el número generado esta incluido en la lista hace una operacion si no otra
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    
}
function condicionesIniciales (){
    asignarTextoElemento('h1', 'adivina adivinador');
    asignarTextoElemento('p', `Coloca un numero del 1 al ${numeroMaximo}`);
    numeroSectreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    //limpiar la caja porque se reinicia el juego
    limpiarCaja();
    //indicar mensaje de inicio
    //generar el numero aleatorio
    //reiniciar numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true'); 
    
}


function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    //let valorCaja = document.querySelector('#valorUsuario');
    //valorCaja.value=' ';
}

condicionesIniciales();
