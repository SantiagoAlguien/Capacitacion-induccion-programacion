let ataquejugador
let ataqueenemigo

function IniciarJuego(){
    let botonMascotaJugador = document.getElementById('Selecionar-Mascota')
    botonMascotaJugador.addEventListener('click',selecionarMascotaJugador)

    let BotonFuego=document.getElementById('boton-Fuego')
    BotonFuego.addEventListener('click', ataqueFuego)
    
    let BotonAgua=document.getElementById('boton-Agua')
    BotonAgua.addEventListener('click', ataqueAgua)
    
    let BotonTierra=document.getElementById('boton-Tierra')
    BotonTierra.addEventListener('click', ataqueTierra)
}

function ataqueFuego(){
    ataquejugador='FUEGO'
    ataqueEnemigoAleatorio()
}
function ataqueAgua(){
    ataquejugador='AGUA'
    ataqueEnemigoAleatorio()
}
function ataqueTierra(){
    ataquejugador='TIERRA'
    ataqueEnemigoAleatorio()
}

function selecionarMascotaJugador(){
    let imputHipodoge = document.getElementById('Hipodoge')
    let imputcapipepo = document.getElementById('Capipepo')
    let impuratatopo = document.getElementById('ratatopo')
    let spanJugador = document.getElementById('Mascota-jugador')


    if(imputHipodoge.checked){
     spanJugador.innerHTML='Hipodoge'
    } else if (imputcapipepo.checked){
        spanJugador.innerHTML='Capipepo'
    } else if (impuratatopo.checked){
        spanJugador.innerHTML='Ratatopo'
    } else {
        alert('seleciona un bicho')
    }
    eleccionarMascotaEnemigo()
}
function eleccionarMascotaEnemigo(){
let mascotaAleatoria = aleatorio(1,3) 
let spanEnemigo = document.getElementById('Mascota-enemigo')
if(mascotaAleatoria== 1){
    spanEnemigo.innerHTML='Hipodoge'
}else if(mascotaAleatoria==2){
    spanEnemigo.innerHTML='Capipepo'
}else if(mascotaAleatoria==3){
    spanEnemigo.innerHTML='Ratatopo'
}}

function ataqueEnemigoAleatorio(){
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio== 1){
        ataqueenemigo='AGUA'
    } else if (ataqueAleatorio== 2){
        ataqueenemigo='FUEGO'
    }else{ataqueenemigo='TIERRA'
        
    }
    crearMensaje()
}

function crearMensaje(){
let sectionMensajes=document.getElementById('Mensajes')
let parrafo=document.createElement('p')
parrafo.innerHTML='Tu mascota atacó con '+ataquejugador+', las mascota del enemigo atacó con '+ataqueenemigo+'- PENDIENTE'
sectionMensajes.appendChild(parrafo)}

function aleatorio(min,max){
return Math.floor(Math.random() * (max-min+1)+ min )}

window.addEventListener('load',IniciarJuego)

//este es el capitulo 18 de plazi