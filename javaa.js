alert("holaaaaaaaa")

function IniciarJuego(){
    let botonMascotaJugador = document.getElementById('Selecionar-Mascota')
    botonMascotaJugador.addEventListener('click',selecionarMascotaJugador)
}
let NombreBicho= 0
function selecionarMascotaJugador(){
    let imputHipodoge = document.getElementById('Hipodoge')
    let imputcapipepo = document.getElementById('Capipepo')
    let impuratatopo = document.getElementById('ratatopo')
    let impuseleciona = document.getElementById
    if(imputHipodoge.checked) {
        alert('Selecionaste Hipodoge')
    } else if (imputcapipepo.checked){
        alert('Selecionate Capipepo')
    } else if (impuratatopo.checked){
        alert('Selecionate ratatopo')
    } else {
        alert('seleciona un bicho')
    }
}


window.addEventListener("load",IniciarJuego)

//este es el capitulo 18 de plazi   