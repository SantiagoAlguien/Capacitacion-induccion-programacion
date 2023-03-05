
//Valores Globabales que las funciones dan el resultado
let ataqueJugador
let ataqueEnemigo
let resultado
let VidasJugagor = 3
let VidasEnemigo = 3

function iniciarJuego(){
let OcualtarIncio=document.getElementById('seleccionar-ataque')
OcualtarIncio.style.display='none'

let OcualtarReiniciar=document.getElementById('reiniciar')
OcualtarReiniciar.style.display='none'

let botonMascotaJugador=document.getElementById('boton-mascota')
botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

let botonFuego=document.getElementById('boton-fuego')
botonFuego.addEventListener('click',ataqueFuego)

let botonAgua=document.getElementById('boton-agua')
botonAgua.addEventListener('click',ataqueAgua)

let botonTierra=document.getElementById('boton-tierra')
botonTierra.addEventListener('click',ataqueTierra)

let botonReiniciar=document.getElementById('boton-reiniciar')
botonReiniciar.addEventListener('click',reiniciarJuego )
}

function seleccionarMascotaJugador(){
    let OcualtarIncio=document.getElementById('seleccionar-ataque')
    OcualtarIncio.style.display='flex'

let inputHipodoge=document.getElementById('hipodoge')
let inputCapipepo=document.getElementById('capipepo')
let inputRatatopo=document.getElementById('Ratatopo')
let spanMascotaJugador=document.getElementById('mascota-jugador')

if(inputHipodoge.checked){
    spanMascotaJugador.innerHTML='Hipodoge'}
    else if(inputCapipepo.checked){
    spanMascotaJugador.innerHTML='Capipepo'}
    else if(inputRatatopo.checked){
    spanMascotaJugador.innerHTML='Ratatopo'}
    else{alert('Selecciona una mascota')}
seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){let mascotaAleatoria=aleatorio(1,3)
let seleccionarMascota=document.getElementById('seleccionar-mascota')
seleccionarMascota.style.display='none'

let spanMascotaEnemigo=document.getElementById('mascota-enemigo')
if(mascotaAleatoria==1){
spanMascotaEnemigo.innerHTML='Hipodoge'}
else if(mascotaAleatoria==2){
spanMascotaEnemigo.innerHTML='Capipepo'}
else{spanMascotaEnemigo.innerHTML='Ratatopo'}
}

function ataqueFuego(){ataqueJugador='FUEGO'
ataqueAleatorioEnemigo()}
function ataqueAgua(){ataqueJugador='AGUA'
ataqueAleatorioEnemigo()}
function ataqueTierra(){ataqueJugador='TIERRA'
ataqueAleatorioEnemigo()}

function ataqueAleatorioEnemigo(){let ataqueAleatorio=aleatorio(1,3)
if(ataqueAleatorio==1){
ataqueEnemigo='FUEGO'}
else if(ataqueAleatorio==2){
ataqueEnemigo='AGUA'}
else{ataqueEnemigo='TIERRA'}
combate()
}

//enfrentamiendo 
function combate() 
{if(ataqueJugador == ataqueEnemigo){resultado='EMPATE'} 
else if((ataqueJugador == 'AGUA' && ataqueEnemigo == 'TIERRA') || (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'AGUA') || (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'FUEGO')){resultado=('GANASTE')
VidasEnemigo--
} 
else {resultado =('PERDISTE')
VidasJugagor--
}
crearMensaje()
revsisarVidas()
}

function revsisarVidas(){
    if(VidasEnemigo == 0){
        alert("GANASTE")
        crearMensajeFinal("Felicitaciones, Ganaste :)")
    }else if (VidasJugagor ==0 ){
        alert("PERDISTE")
        crearMensajeFinal("Perdiste :(")
    }
    var miElemento = document.getElementById('Vidas-jugador');
    var miVariable = +VidasJugagor+''
    miElemento.innerHTML = miVariable;

    var miElemento = document.getElementById('Vidas-enemigo');
    var miVariable = +VidasEnemigo+''
    miElemento.innerHTML = miVariable;
}

function crearMensaje(){
let sectionMensajes=document.getElementById('resultado')
let ataqueDelJugador=document.getElementById('ataque-del-jugador')
let ataqueDelEnemigo=document.getElementById('ataque-del-enemigo')


let nuevoataqueDelJugador=document.createElement('p')
let nuevoataqueDelEnemigo=document.createElement('p')

sectionMensajes.innerHTML= resultado
ataqueDelJugador.innerHTML= ataqueJugador
ataqueDelEnemigo.innerHTML= ataqueEnemigo

ataqueDelJugador.appendChild(nuevoataqueDelJugador)
ataqueDelEnemigo.appendChild(nuevoataqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes=document.getElementById('mensajes')
    let parrafo=document.createElement('p')
    
    parrafo.innerHTML= resultadoFinal
    sectionMensajes.appendChild(parrafo)

    let botonFuego=document.getElementById('boton-fuego')
    botonFuego.disabled = true

    let botonAgua=document.getElementById('boton-agua')
    botonAgua.disabled = true

    let botonTierra=document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let OcualtarReiniciar=document.getElementById('reiniciar')
    OcualtarReiniciar.style.display='block'

    let Ocualtarresultado=document.getElementById('resultado')
    Ocualtarresultado.style.display='none'
}

function reiniciarJuego(){
    location.reload()
}
function aleatorio(min,max){return Math.floor(Math.random()*(max-min+1)+min)}

window.addEventListener('load',iniciarJuego)