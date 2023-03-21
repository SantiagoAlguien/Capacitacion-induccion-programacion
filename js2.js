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

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

//Valores Globabales que las funciones dan el resultado
let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatatopo
let inputTucanpaloma
let inputpydas
let mascotaJugador
let mascotaJugadorObjecto
let ataquesMokepon
let ataquesMokeponEnenmigo
let botonFuego
let botonAgua
let botonTierra
let botonViento
let botones =[]
let indexAtaqueJugador
let indexAtaqueEnemigo
let VictoriasJugador = 0
let VictoriasEnemigo = 0 
let vidasJugador = 3
let vidasEnemigo = 3

let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './assets/mokemap.png'

class Mokepon{
    constructor(nombre, foto, vida, fotoMapa, x = 10 , y = 10, ){
        this.nombre=nombre
        this.foto=foto
        this.vida=vida
        this.ataques =[]
        this.x = x
        this.y = y
        this.ancho = 40
        this.alto = 40
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto,
            )
        }
    
    }


let hipodoge=new Mokepon('Hipodoge','./assets/mokepons_mokepon_hipodoge_attack.png',5,'./assets/hipodoge.png')
let capipepo=new Mokepon('Capipepo','./assets/mokepons_mokepon_capipepo_attack.png',5,'./assets/capipepo.png')
let ratatopo=new Mokepon('Ratatopo','./assets/mokepons_mokepon_Ratatopo_attack.png',5,'./assets/ratigueya.png')
let tucanpaloma=new Mokepon('Tucapalom','./assets/mokepons_mokepon_tucapalma_attack.png',5,'./assets/TucaPalom.png')
let pydas=new Mokepon('Pydas','./assets/mokepons_mokepon_pydos_attack.png',5,'./assets/Pydas.png')

let hipodogeEnemigo=new Mokepon('Hipodoge','./assets/mokepons_mokepon_hipodoge_attack.png',5,'./assets/hipodoge.png',80 , 120)
let capipepoEnemigo=new Mokepon('Capipepo','./assets/mokepons_mokepon_capipepo_attack.png',5,'./assets/capipepo.png',90 ,150)
let ratatopoEnemigo=new Mokepon('Ratatopo','./assets/mokepons_mokepon_Ratatopo_attack.png',5,'./assets/ratigueya.png',200 , 190) 
let tucanpalomaEnemigo=new Mokepon('Tucapalom','./assets/mokepons_mokepon_tucapalma_attack.png',5,'./assets/TucaPalom.png', 50 ,40)
let pydasEnemigo=new Mokepon('Pydas','./assets/mokepons_mokepon_pydos_attack.png',5,'./assets/Pydas.png',150 ,90)

hipodoge.ataques.push(
    {nombre:'💧',id:'boton-agua'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'💨',id:'boton-viento'},
    {nombre:'🌱',id:'boton-tierra'},
)

capipepo.ataques.push(
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'💨',id:'boton-viento'},
    {nombre:'💧',id:'boton-agua'},
)

ratatopo.ataques.push(
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'💧',id:'boton-agua'},
)

tucanpaloma.ataques.push(
    {nombre:'💨',id:'boton-viento'},
    {nombre:'💨',id:'boton-viento'},
    {nombre:'💨',id:'boton-viento'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🌱',id:'boton-tierra'},
)

pydas.ataques.push(
    {nombre:'💧',id:'boton-agua'},
    {nombre:'💨',id:'boton-viento'},
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🌱',id:'boton-tierra'},
)

mokepones.push(hipodoge,capipepo,ratatopo,tucanpaloma,pydas)

function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'

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
         inputTucanpaloma=document.getElementById('Tucapalom')
         inputpydas=document.getElementById('Pydas')
    })
    sectionReiniciar.style.display = 'none'
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

    botonReiniciar.addEventListener('click',reiniciarJuego )
}

function seleccionarMascotaJugador(){
    
    sectionSeleccionarMascota.style.display='none'
    
    //sectionSeleccionarAtaque.style.display='flex'


    if(inputHipodoge.checked){
            spanMascotaJugador.innerHTML= inputHipodoge.id
            mascotaJugador = inputHipodoge.id
        }else if(inputCapipepo.checked){
            spanMascotaJugador.innerHTML=inputCapipepo.id
            mascotaJugador = inputCapipepo.id
        }else if(inputRatatopo.checked){
            spanMascotaJugador.innerHTML=inputRatatopo.id
            mascotaJugador = inputRatatopo.id
        }else if(inputTucanpaloma.checked){
            spanMascotaJugador.innerHTML=inputTucanpaloma.id
            mascotaJugador = inputTucanpaloma.id
        }else if(inputpydas.checked){
            spanMascotaJugador.innerHTML=inputpydas.id
            mascotaJugador = inputpydas.id
        }else{
             alert('Seleciona una mascota')
        }
    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = 'flex'
    InciarMapa()
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
    botonViento=document.getElementById('boton-viento')
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
            }else if(e.target.textContent === '💨'){
                ataqueJugador.push('VIENTO')
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
    }else if(ataqueAleatorio== 6 || ataqueAleatorio == 7){
        ataqueEnemigo.push('VIENTO')
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
        }else if((ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA') || (ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO') || (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA') || (ataqueJugador[index] === 'VIENTO' && ataqueEnemigo[index] === 'TIERRA')){
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

function pintarCanvas(){
    console.log(mascotaJugador)
    mascotaJugadorObjecto.x = mascotaJugadorObjecto.x + mascotaJugadorObjecto.velocidadX
    mascotaJugadorObjecto.y = mascotaJugadorObjecto.y + mascotaJugadorObjecto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height,
    )
    mascotaJugadorObjecto.pintarMokepon()
    hipodogeEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()
    ratatopoEnemigo.pintarMokepon()
    tucanpalomaEnemigo.pintarMokepon()
    pydasEnemigo.pintarMokepon()

    if (mascotaJugadorObjecto.velocidadX !== 0 || mascotaJugadorObjecto.velocidadY !== 0){
        revisarColicion(hipodogeEnemigo)
        revisarColicion(ratatopoEnemigo)
        revisarColicion(capipepoEnemigo)
        revisarColicion(pydasEnemigo)
        revisarColicion(tucanpalomaEnemigo)
    }
}

function moverDerecha() {
    mascotaJugadorObjecto.velocidadX = 5
}

function moverIzquerda() {
    mascotaJugadorObjecto.velocidadX = -5
}

function moverAbajo() {
    mascotaJugadorObjecto.velocidadY = 5
}

function moverArriba() {
    mascotaJugadorObjecto.velocidadY = -5
}

function detenerMovimiento(){
    mascotaJugadorObjecto.velocidadX = 0
    mascotaJugadorObjecto.velocidadY = 0
}

function sePresionaUnaTecla(event){
    switch (event.key) {
        case 'w':
            moverArriba()
            break
        case 's':
            moverAbajo()
            break
        case 'd':
            moverDerecha()
            break
        case 'a':
            moverIzquerda()
            break
        default:
            break
    }
}

function InciarMapa(){
    mapa.width = 600
    mapa.height = 400
    mascotaJugadorObjecto = obtenerObjectoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener('keydown', sePresionaUnaTecla)
    
    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjectoMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre){
            return mokepones[i]
        }
        
    }
}

function revisarColicion(enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnmigo = enemigo.x 

    const arribaMascota = 
    mascotaJugadorObjecto.y
    const abajoMascota = 
    mascotaJugadorObjecto.y + mascotaJugadorObjecto.alto
    const derechaMascota = 
    mascotaJugadorObjecto.x + mascotaJugadorObjecto.ancho
    const izquierdaMascota = 
    mascotaJugadorObjecto.x 

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnmigo ||
        izquierdaMascota < derechaEnemigo 
    ){
        return
    }
    detenerMovimiento()
    alert("Si hay colision" + enemigo.nombre)
}
window.addEventListener('load',iniciarJuego)