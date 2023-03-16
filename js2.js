const seccionSeleccionarAtaque=document.getElementById('seleccionar-ataque')
const seccionReiniciar=document.getElementById('reiniciar')
const botonMascotaJugador=document.getElementById('boton-mascota')
const botonReiniciar=document.getElementById('boton-reiniciar')
seccionReiniciar.style.display='none'


const seleccionarSeleccionarMascota=document.getElementById('seleccionar-mascota')
const spanMascotaJugador=document.getElementById('mascota-jugador')

const spanMascotaEnemigo=document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes=document.getElementById('resultado')
const ataqueDelJugador=document.getElementById('ataque-del-jugador')
const ataqueDelEnemigo=document.getElementById('ataque-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques= document.getElementById('ContenedorAtques')

//Valores Globabales que las funciones dan el resultado
let mokepones = []
let ataqueJugador =[]
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego
let botonAgua
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0 
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepos{
    constructor(nombre, foto, vidas){
        this.nombre = nombre
        this.foto= foto
        this.vidas=vidas
        this.ataques = []
    }
}

let Hipodoge= new Mokepos('Hipodoge','./assets/mokepons_mokepon_hipodoge_attack.png',5)

let Capipepo= new Mokepos('Capipepo','./assets/mokepons_mokepon_capipepo_attack.png',5)

let Ratatopo= new Mokepos('Ratatopo','./assets/mokepons_mokepon_Ratatopo_attack.png',5)

Hipodoge.ataques.push(
    { nombre:'💧', id:'boton-agua'},
    {nombre:'💧', id:'boton-agua'},
    {nombre:'💧', id:'boton-agua'},
    {nombre:'🌱', id:'boton-tierra'},
    {nombre:'🔥', id:'boton-fuego'},

)
Capipepo.ataques.push(
    { nombre: '🌱', id:'boton-tierra'},
    {nombre:'🌱', id:'boton-tierra'},
    {nombre:'🌱', id:'boton-tierra'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'💧', id:'boton-agua'},

)
Ratatopo.ataques.push(
    { nombre:'🔥', id:'boton-fuego'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'💧', id:'boton-agua'},
    {nombre:'🌱', id:'boton-tierra'},

)

mokepones.push(Hipodoge,Capipepo,Ratatopo)

//El código comienza definiendo varias variables globales, incluidas las variables para almacenar el valor de los ataques de jugador y enemigo, el resultado del combate y el número de vidas para cada jugador.
function iniciarJuego(){

seccionSeleccionarAtaque.style.display='none'

mokepones.forEach((mokepon) => {
    opcionesDeMokepones = `<input type="radio" name="mascota" id= ${mokepon.nombre}   />
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

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)


    botonReiniciar.addEventListener('click', reiniciarJuego )
}

//seleccionarMascotaJugador(): Esta función se llama cuando el jugador selecciona su mascota. Obtiene la mascota seleccionada por el jugador y muestra los botones de ataque.
function seleccionarMascotaJugador(){

    seleccionarSeleccionarMascota.style.display='none'


    seccionSeleccionarAtaque.style.display='flex'
    

if(inputHipodoge.checked){
    spanMascotaJugador.innerHTML= inputHipodoge.id
    mascotaJugador= inputHipodoge.id
}
    else if(inputCapipepo.checked){
    spanMascotaJugador.innerHTML=inputCapipepo.id
    mascotaJugador= inputCapipepo.id
}
    else if(inputRatatopo.checked){
    spanMascotaJugador.innerHTML=inputRatatopo.id
    mascotaJugador= inputRatatopo.id
}
    else{alert('Selecciona una mascota')}

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i< mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
    }

    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="Boton-de-ataque BATataque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })
    
    botonFuego=document.getElementById('boton-fuego')
    botonAgua=document.getElementById('boton-agua')
    botonTierra=document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.BATataque')

}

function secuenciaAteque(){
    botones.forEach((boton)=>{
        boton.addEventListener('click', (e)=>{
            if(e.target.textContent.trim() === '🔥'){
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background='#112F58'
            }else if(e.target.textContent.trim() === '💧'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background='#112F58'
            }else{
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background='#112F58'
            }
            ataqueAleatorioEnemigo()
        })
    })

}

//seleccionarMascotaEnemigo(): Esta función se llama después de que el seleccione su mascota y elige una mascota aleatoria para el enemigo. Muestra el nombre de la mascota enemigo en la pantalla.
function seleccionarMascotaEnemigo(){
    let mascotaAleatoria=aleatorio(0, mokepones.length -1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    secuenciaAteque()
}

//ataqueFuego(), ataqueAgua(), ataqueTierra(): Estas funciones se llaman cuando el jugador selecciona uno de los botones de ataque. Configuran el ataque del jugador y llaman a ataqueAleatorioEnemigo().


//ataqueAleatorioEnemigo(): Esta función elige un ataque aleatorio para el enemigo y llama a combate().
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio=aleatorio(0,ataquesMokeponEnemigo.length -1)

    if(ataqueAleatorio == 0 || ataqueAleatorio == 1){
        ataqueEnemigo.push('FUEGO')
    }else if(ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push('AGUA')
    }else{
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea(){
    if(ataqueJugador.length === 5 ){
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueEnemigo[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

//enfrentamiendo 
//combate(): Esta función determina el resultado del combate y llama a crearMensaje()para mostrar el resultado en la pantalla. También llama revsisarVidas()para actualizar las vidas restantes del jugador y del enemigo.
function combate() {

    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]){
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE")
        }else if((ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'TIERRA') || (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'AGUA') || (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'FUEGO')){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanMascotaEnemigo.innerHTML = victoriasEnemigo
        }
    }

    revsisarVidas()
}

//revsisarVidas(): Esta función verifica si uno de los combatientes ha perdido todas sus vidas y termina el juego si es así. Actualiza las vidas restantes del jugador y del enemigo en la pantalla.
function revsisarVidas(){
    if(victoriasJugador === victoriasEnemigo){
        crearMensajeFinal("Esto es un empate:|")
    }else if (victoriasJugador > victoriasEnemigo ){
        crearMensajeFinal("Felicitaciones Ganaste :)")
    }else{
        crearMensajeFinal('Lo siento, perdiste :(')
    }
}

//crearMensaje(): Esta función crea un mensaje para mostrar el resultado del combate en la pantalla.
function crearMensaje(resultado){


    let nuevoataqueDelJugador=document.createElement('p')
    let nuevoataqueDelEnemigo=document.createElement('p')

    sectionMensajes.innerHTML= resultado
    nuevoataqueDelJugador.innerHTML= indexAtaqueJugador
    nuevoataqueDelEnemigo.innerHTML= indexAtaqueEnemigo

    ataqueDelJugador.appendChild(nuevoataqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoataqueDelEnemigo)
}

//crearMensajeFinal(): Esta función crea un mensaje final para mostrar el resultado del juego en la pantalla.
function crearMensajeFinal(resultadoFinal){
   

sectionMensajes.innerHTML= resultadoFinal
    
    botonFuego.disabled = true

    
    botonAgua.disabled = true

    
    botonTierra.disabled = true

    
    seccionReiniciar.style.display='block'
}

//Esta funcion lo que hace es volver al inicio del juego
function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener('load',iniciarJuego)