let NumeroSecreto = 0;
let Intentos = 0;
let ListaNumerosSorteados = [];
let NumeroMaximo = 10;


function AsignarTextoElemento(Elemento, Texto){
    let ElementoHTML = document.querySelector(Elemento);
    ElementoHTML.innerHTML = Texto;
    return;
}

function VerificarIntento() {
    let NumeroUsuario = parseInt(document.getElementById('ValorUsuario').value);
    
    if(NumeroSecreto === NumeroUsuario){
        AsignarTextoElemento('p', `Acertaste el número en ${Intentos} ${(Intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //El usuario no acerto
        if(NumeroUsuario > NumeroSecreto){
            AsignarTextoElemento('p', 'El número secreto es menor');
        }
        else{
            AsignarTextoElemento('p','El número secreto es mayor');
        }
    }
    Intentos++;
    LimpiarCaja();
    return;
}

function LimpiarCaja(){
    let ValorCaja = document.querySelector('#ValorUsuario');
    ValorCaja.value = '';
}

function GenerarNumeroSecreto() {
    let NumeroGenerado =  Math.floor(Math.random()*NumeroMaximo)+1; 

    console.log(NumeroGenerado);
    console.log(ListaNumerosSorteados);

    //Si ya sorteamos todos los números
    if(ListaNumerosSorteados.length == NumeroMaximo){
        AsignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        //Si el número generado está incluido en la lista
        if(ListaNumerosSorteados.includes(NumeroGenerado)){
            return GenerarNumeroSecreto();
        } else{
            ListaNumerosSorteados.push(NumeroGenerado);
            return NumeroGenerado;
        }
    }
}

function CondicionesIniciales(){
    AsignarTextoElemento('h1', 'Juego del número secreto!');
    AsignarTextoElemento('p', `Ingresa un número del 1 al ${NumeroMaximo}:`);
    NumeroSecreto = GenerarNumeroSecreto();
    console.log(NumeroSecreto);
    Intentos = 1;
}

function ReiniciarJuego(){
    //Limpiar la caja
    LimpiarCaja();
    //Indicar mensaje de inicio
    //Generar el número aleatorio
    //Inicializar el número de intentos
    CondicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');    
}

CondicionesIniciales();