let ataquejugador
let ataqueenemigo

function IniciarJuego(){
    let botonMascotaJugador = document.getElementById('Selecionar-Mascota')
    botonMascotaJugador.addEventListener('click',selecionarMascotaJugador)

    let BotonFuego=document.getElementById('boton-fuego')
    BotonFuego.addEventListener('click', ataqueFuego)
    
    let BotonAgua=document.getElementById('boton-Agua')
    BotonAgua.addEventListener('click', ataqueAgua)
    
    let BotonTierra=document.getElementById('boton-Tierra')
    BotonTierra.addEventListener('click', ataqueTierra)
}

function ataqueFuego(){
    ataquejugador='FUEGO'
    alert(ataquejugador)
}
function ataqueAgua(){
    ataqueJugador='AGUA'
    alert(ataquejugador)
}
function ataqueTierra(){
    ataquejugador='Fuego'
    alert(ataquejugador)
}
function ataqueenemigoaleatorio(){
    let ataqueenemigoaleatorio= aleatorio(1,3)
    if(ataqueenemigoaleatorio== 1){ataqueenemigo='AGUA'}
    else if (ataqueenemigoaleatorio== 2){ataqueenemigo='FUEGO'}
    else if (ataqueenemigoaleatorio== 3){ataqueenemigo='TIERRA'}
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
let mascotaaleatoria = aleatorio(1,3) 
let spanEnemigo = document.getElementById('Mascota-enemigo')
if(mascotaaleatoria== 1){
    spanEnemigo.innerHTML='Hipodoge'
}else if(mascotaaleatoria==2){
    spanEnemigo.innerHTML='Capipepo'
}else if(mascotaaleatoria==3){
    spanEnemigo.innerHTML='Ratatopo'
}}

function aleatorio(min,max){
return Math.floor(Math.random() * (max-min+1)+ min )}

window.addEventListener("load",IniciarJuego)

//este es el capitulo 18 de plazi