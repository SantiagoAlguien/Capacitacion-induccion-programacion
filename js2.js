const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador=document.getElementById('boton-mascota')

const botonReiniciar=document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota=document.getElementById('seleccionar-mascota')

const spanMascotaJugador=document.getElementById('mascota-jugador')

const spanMascotaEnemigo=document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes=document.getElementById('resultado')
const ataquesDelJugador=document.getElementById('ataques-del-jugador')
const ataqueDelEnemigo=document.getElementById('ataques-del-enemigo')

const contenedorTarjetas= document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

//Valores Globabales que las funciones dan el resultado
let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatatopo
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnenmigo
let botonFuego
let botonAgua
let botonTierra
let botones =[]
let indexAtaqueJugador
let indexAtaqueEnemigo
let VictoriasJugador = 0
let VictoriasEnemigo = 0 
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon{
    constructor(nombre, foto, vida){
        this.nombre=nombre
        this.foto=foto
        this.vida=vida
        this.ataques =[]
    }
}
let hipodoge=new Mokepon('Hipodoge','./assets/mokepons_mokepon_hipodoge_attack.png',5)
let capipepo=new Mokepon('Capipepo','./assets/mokepons_mokepon_capipepo_attack.png',5)
let ratatopo=new Mokepon('Ratatopo','./assets/mokepons_mokepon_Ratatopo_attack.png',5)

hipodoge.ataques.push(
    {nombre:'💧',id:'boton-agua'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🌱',id:'boton-tierra'},
)

capipepo.ataques.push(
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🔥',id:'boton-fuego'},
)

ratatopo.ataques.push(
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'💧',id:'boton-agua'},
)

mokepones.push(hipodoge,capipepo,ratatopo)

function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="clases-botones" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

    
         inputHipodoge=document.getElementById('Hipodoge')
         inputCapipepo=document.getElementById('Capipepo')
         inputRatatopo=document.getElementById('Ratatopo')
    })
    sectionReiniciar.style.display = 'none'
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

    botonReiniciar.addEventListener('click',reiniciarJuego )
}

function seleccionarMascotaJugador(){
    
    sectionSeleccionarMascota.style.display='none'
    
    sectionSeleccionarAtaque.style.display='flex'
    
    if(inputHipodoge.checked){
            spanMascotaJugador.innerHTML= inputHipodoge.id
            mascotaJugador = inputHipodoge.id
        }else if(inputCapipepo.checked){
            spanMascotaJugador.innerHTML=inputCapipepo.id
            mascotaJugador = inputCapipepo.id
        }else if(inputRatatopo.checked){
            spanMascotaJugador.innerHTML=inputRatatopo.id
            mascotaJugador = inputRatatopo.id
        }else{
             alert('Seleciona una mascota')
        }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()

}

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
        
    }

    mostrarAtaque(ataques)
}

function mostrarAtaque(ataques){
    ataques.forEach((ataque) =>{
        ataquesMokepon = `
        <button id= ${ataque.id} class="Boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML +=  ataquesMokepon
    })
    botonFuego=document.getElementById('boton-fuego')
    botonAgua=document.getElementById('boton-agua')
    botonTierra=document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.BAtaque')

}

function secuenciaAtaque(){
    botones.forEach((boton) =>{
        boton.addEventListener('click', (e) =>{
            if (e.target.textContent === '🔥'){
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }else if(e.target.textContent === '💧'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }else{
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })
    
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria=aleatorio(0, mokepones.length -1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnenmigo = mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio=aleatorio(0,ataquesMokeponEnenmigo.length,-1)

    if(ataqueAleatorio==0 || ataqueAleatorio == 1){
        ataqueEnemigo.push('FUEGO')
    }else if(ataqueAleatorio== 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push('AGUA')
    }else{
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea(){
    if (ataqueJugador.length === 5){
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

//enfrentamiendo 
function combate(){

    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE")
        }else if((ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA') || (ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO') || (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA')){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            VictoriasJugador++
            spanVidasJugador.innerHTML = VictoriasJugador
        }else {
            indexAmbosOponentes(index, index)
            crearMensaje("PERDISTE")
            VictoriasEnemigo++
            spanVidasEnemigo.innerHTML = VictoriasEnemigo
        }
    }

    revsisarVidas()
}

function revsisarVidas(){
    if (VictoriasJugador  === VictoriasEnemigo) {
        crearMensajeFinal("ESTO ES UN EMPATE")
    } else if (VictoriasJugador > VictoriasEnemigo) {
        crearMensajeFinal('FELICITACIONES! Ganaste :)')
    } else{
        crearMensajeFinal('Lo siento perdiste :(')
    }
}

function crearMensaje(resultado){

    let nuevoataqueDelJugador=document.createElement('p')
    let nuevoataqueDelEnemigo=document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoataqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoataqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoataqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoataqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    
    sectionMensajes.innerHTML= resultadoFinal

    sectionReiniciar.style.display='block'
}

function reiniciarJuego(){
    location.reload()
}
function aleatorio(min,max){return Math.floor(Math.random()*(max-min+1)+min)}

window.addEventListener('load',iniciarJuego)