const OcualtarIncio=document.getElementById('seleccionar-ataque')
const OcualtarReiniciar=document.getElementById('reiniciar')
const botonMascotaJugador=document.getElementById('boton-mascota')
const botonReiniciar=document.getElementById('boton-reiniciar')

const spanMascotaJugador=document.getElementById('mascota-jugador')

const seleccionarMascota=document.getElementById('seleccionar-mascota')
const spanMascotaEnemigo=document.getElementById('mascota-enemigo')

const sectionMensajes=document.getElementById('resultado')
const ataqueDelJugador=document.getElementById('ataque-del-jugador')
const ataqueDelEnemigo=document.getElementById('ataque-del-enemigo')
const Ocualtarresultado=document.getElementById('resultado')
//El código comienza definiendo varias variables globales, incluidas las variables para almacenar el valor de los ataques de jugador y enemigo, el resultado del combate y el número de vidas para cada jugador.

const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques= document.getElementById('ContenedorAtques')

//Valores Globabales que las funciones dan el resultado
let mokepones=[]
let ataqueJugador=[]
let ataqueEnemigo
let resultado
let opcionesDeMokepones 
let inputHipodoge
let inputCapipepo
let inputRatatopo
let mascotaJugador
let ataquesMokepon
let botonAgua
let botonTierra
let botonFuego 
let botones=[]
let VidasJugagor = 3
let VidasEnemigo = 3

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
    { nombre: '💧', id: 'boton-agua'},{nombre:'💧', id:'boton-agua'},{nombre:'💧', id:'boton-agua'},{nombre:'🌱', id:'boton-tierra'},{nombre:'🔥', id:'boton-fuego'}

)
Capipepo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra'},{nombre:'🌱', id:'boton-tierra'},{nombre:'🌱', id:'boton-tierra'},{nombre:'🔥', id:'boton-fuego'},{nombre:'💧', id:'boton-agua'}

)
Ratatopo.ataques.push(
    { nombre: '🔥', id: 'boton-agua'},{nombre:'🔥', id:'boton-fuego'},{nombre:'🔥', id:'boton-fuego'},{nombre:'💧', id:'boton-agua'},{nombre:'🌱', id:'boton-tierra'}

)

mokepones.push(Hipodoge,Capipepo,Ratatopo)

//El código comienza definiendo varias variables globales, incluidas las variables para almacenar el valor de los ataques de jugador y enemigo, el resultado del combate y el número de vidas para cada jugador.
function iniciarJuego(){

OcualtarIncio.style.display='none'

mokepones.forEach((mokepon) => {
    opcionesDeMokepones = `<input type="radio" name="mascota" id= ${mokepon.nombre}   />
    <label class="clases-botones" for=${mokepon.nombre}>
        <p>${mokepon.nombre}</p>
        <img src=${mokepon.foto} alt=${mokepon.nombre}>
    </label>
    `
    contenedorTarjetas.innerHTML += opcionesDeMokepones

    inputHipodoge=document.getElementById('Hipodoge')
    inputCapipepo=document.getElementById('Capipepo')
    inputRatatopo=document.getElementById('Ratatopo')

})

OcualtarReiniciar.style.display='none'


botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)


botonReiniciar.addEventListener('click',reiniciarJuego )
}

//seleccionarMascotaJugador(): Esta función se llama cuando el jugador selecciona su mascota. Obtiene la mascota seleccionada por el jugador y muestra los botones de ataque.
function seleccionarMascotaJugador(){

    
    OcualtarIncio.style.display='flex'
    

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

function extraerAtaques(){
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
        <button id=${ataque.id} class="Boton-de-ataque BATataque">${ataque.nombre}
        </button>
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
            if (e.target.textContent === '🔥'){
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background='#112F58'
            }else if(e.target.textContent === '💧'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background='#112F58'
            }else{
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background='#112F58'
            }
        })
    })
}

//seleccionarMascotaEnemigo(): Esta función se llama después de que el seleccione su mascota y elige una mascota aleatoria para el enemigo. Muestra el nombre de la mascota enemiga en la pantalla.
function seleccionarMascotaEnemigo(){
let mascotaAleatoria=aleatorio(0, mokepones.length -1)
secuenciaAteque()
seleccionarMascota.style.display='none'

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre

}

//ataqueFuego(), ataqueAgua(), ataqueTierra(): Estas funciones se llaman cuando el jugador selecciona uno de los botones de ataque. Configuran el ataque del jugador y llaman a ataqueAleatorioEnemigo().


//ataqueAleatorioEnemigo(): Esta función elige un ataque aleatorio para el enemigo y llama a combate().
function ataqueAleatorioEnemigo(){let ataqueAleatorio=aleatorio(1,3)
if(ataqueAleatorio==1){
ataqueEnemigo='FUEGO'}
else if(ataqueAleatorio==2){
ataqueEnemigo='AGUA'}
else{ataqueEnemigo='TIERRA'}
combate()
}


//enfrentamiendo 
//combate(): Esta función determina el resultado del combate y llama a crearMensaje()para mostrar el resultado en la pantalla. También llama revsisarVidas()para actualizar las vidas restantes del jugador y del enemigo.
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

//revsisarVidas(): Esta función verifica si uno de los combatientes ha perdido todas sus vidas y termina el juego si es así. Actualiza las vidas restantes del jugador y del enemigo en la pantalla.
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

//crearMensaje(): Esta función crea un mensaje para mostrar el resultado del combate en la pantalla.
function crearMensaje(){


let nuevoataqueDelJugador=document.createElement('p')
let nuevoataqueDelEnemigo=document.createElement('p')

sectionMensajes.innerHTML= resultado
ataqueDelJugador.innerHTML= ataqueJugador
ataqueDelEnemigo.innerHTML= ataqueEnemigo

ataqueDelJugador.appendChild(nuevoataqueDelJugador)
ataqueDelEnemigo.appendChild(nuevoataqueDelEnemigo)
}

//crearMensajeFinal(): Esta función crea un mensaje final para mostrar el resultado del juego en la pantalla.
function crearMensajeFinal(resultadoFinal){
    let sectionMensajes=document.getElementById('mensajes')
    let parrafo=document.createElement('p')
    
    parrafo.innerHTML= resultadoFinal
    sectionMensajes.appendChild(parrafo)

    
    botonFuego.disabled = true

    
    botonAgua.disabled = true

    
    botonTierra.disabled = true

    
    OcualtarReiniciar.style.display='block'

    
    Ocualtarresultado.style.display='none'
}

//Esta funcion lo que hace es volver al inicio del juego
function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max){return Math.floor(Math.random()*(max-min+1)+min)}

window.addEventListener('load',iniciarJuego)