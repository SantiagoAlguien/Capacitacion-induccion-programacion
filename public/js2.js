const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador=document.getElementById('boton-mascota')
const botonReiniciar=document.getElementById('boton-reiniciar')
sectionReiniciar.style.display = 'none'

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
let jugadorId = null
let enemigoId = null
let mokepones = []
let mokeponesEnemigos = []
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
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth -20
const anchoMaximoDelMapa = 550

if (anchoDelMapa > anchoMaximoDelMapa){
    anchoDelMapa = anchoMaximoDelMapa -20
}


alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

class Mokepon{
    constructor(nombre, foto, vida, fotoMapa, id= 0 ){
        this.id = id
        this.nombre=nombre
        this.foto=foto
        this.vida=vida
        this.ataques =[]
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
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


const HIPODOGE_ATAQUES = [
    {nombre:'💧',id:'boton-agua'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'💨',id:'boton-viento'},
    {nombre:'🌱',id:'boton-tierra'},
]

const CAPIPEPO_ATAQUES = [
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'💨',id:'boton-viento'},
    {nombre:'💧',id:'boton-agua'},
]

const RATATOPO_ATAQUES = [
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'💧',id:'boton-agua'},
]

const TUCANPALON_ATAQUES = [
    {nombre:'💨',id:'boton-viento'},
    {nombre:'💨',id:'boton-viento'},
    {nombre:'💨',id:'boton-viento'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🌱',id:'boton-tierra'},
]

const PYDAS_ATAQUES = [
    {nombre:'💧',id:'boton-agua'},
    {nombre:'💨',id:'boton-viento'},
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🌱',id:'boton-tierra'},
]

hipodoge.ataques.push(...HIPODOGE_ATAQUES)
capipepo.ataques.push(...CAPIPEPO_ATAQUES)
ratatopo.ataques.push(...RATATOPO_ATAQUES)
tucanpaloma.ataques.push(...TUCANPALON_ATAQUES)
pydas.ataques.push(...PYDAS_ATAQUES)

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
    
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

    botonReiniciar.addEventListener('click',reiniciarJuego )

    unirseAlJuego()
}

function unirseAlJuego(){
    fetch("http://192.168.20.81:8080/unirse")
    .then((res) => {
        if (res.ok) {
                res.text()
                    .then((respuesta) => {
                        console.log(respuesta);
                        jugadorId = respuesta
                    })
            }
        })

}

function seleccionarMascotaJugador(){

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
        return
    }
    
    sectionSeleccionarMascota.style.display = 'none'
    
    seleccionarMokepon(mascotaJugador)

    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = 'flex'
    InciarMapa()
}


function seleccionarMokepon(mascotaJugador){
    fetch(`http://192.168.20.81:8080/mokepon/${jugadorId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepon: mascotaJugador
        })
    })
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

function mostrarAtaque(ataques) {
    ataques.forEach((ataque) => {
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
            if ( ataqueJugador.length === 5) {
                enviarAtaques()
            }
        })
    })
    
}

function enviarAtaques (){
    console.log('Enviar ataques', ataqueJugador);

    fetch(`http://192.168.20.81:8080/mokepon/${jugadorId}/ataques`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })
    })

    intervalo = setInterval(obtenerAtaques, 50)
}

function obtenerAtaques(){
    console.log('OBTENER ATAQUES');

    fetch(`http://192.168.20.81:8080/mokepon/${enemigoId}/ataques`)
        .then(function(res) {
            if (res.ok) {
                res.json()
                    .then(function ({ ataques }) {
                        if (ataques.length === 5) {
                            ataqueEnemigo = ataques
                            combate()
                        }
                    })
            }
        })
}

function seleccionarMascotaEnemigo(enemigo){
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesMokeponEnenmigo = enemigo.ataques
    secuenciaAtaque()
}


function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

//enfrentamiendo 
function combate(){
    clearInterval(intervalo)
    console.log('COMBATE');

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

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function pintarCanvas(){
    mascotaJugadorObjecto.x = mascotaJugadorObjecto.x + mascotaJugadorObjecto.velocidadX
    mascotaJugadorObjecto.y = mascotaJugadorObjecto.y + mascotaJugadorObjecto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjecto.pintarMokepon()

    enviarPosicion(mascotaJugadorObjecto.x, mascotaJugadorObjecto.y)

    mokeponesEnemigos.forEach(function (mokepon){
        mokepon.pintarMokepon()
        revisarColicion(mokepon)
    })
}

function enviarPosicion(x, y){
    fetch(`http://192.168.20.81:8080/mokepon/${jugadorId}/posicion`,{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function (res){
        if (res.ok) {
            res.json()
            .then(function ({ enemigos }) {
                mokeponesEnemigos = enemigos.map(function (enemigo) {
                    console.log({enemigo});                        
                        let mokeponEnemigo = null
                        const mokeponNombre = enemigo.mokepon.nombre || ""

                        if (mokeponNombre === "Hipodoge"){
                            mokeponEnemigo=new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5, './assets/hipodoge.png', enemigo.id)        
                        } else if ( mokeponNombre === "Capipepo"){
                            mokeponEnemigo=new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5,'./assets/capipepo.png', enemigo.id)
                        } else if ( mokeponNombre === "Ratatopo"){
                            mokeponEnemigo=new Mokepon('Ratatopo', './assets/mokepons_mokepon_Ratatopo_attack.png', 5,'./assets/ratigueya.png', enemigo.id) 
                        } else if ( mokeponNombre === "Tucapalom"){
                            mokeponEnemigo=new Mokepon('Tucapalom', './assets/mokepons_mokepon_tucapalma_attack.png', 5,'./assets/TucaPalom.png', enemigo.id)
                        } else if ( mokeponNombre === "Pydas"){
                            mokeponEnemigo=new Mokepon('Pydas', './assets/mokepons_mokepon_pydos_attack.png', 5,'./assets/Pydas.png', enemigo.id)
                        }

                        mokeponEnemigo.x = enemigo.x || 0
                        mokeponEnemigo.y = enemigo.y || 0

                        return mokeponEnemigo
                    })
                })
        }
    })
}

function moverDerecha() {
    mascotaJugadorObjecto.velocidadX = 5
}

function moverIzquirda() {
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

function sePresionoUnaTecla(event) {
    switch (event.key) {
        case 'w':
            moverArriba()
            break
        case 's':
            moverAbajo()
            break
        case 'a':
            moverIzquirda()
            break
        case 'd':
            moverDerecha()
            break
        default:
            break
    }
}

function InciarMapa(){

    mascotaJugadorObjecto = obtenerObjectoMascota(mascotaJugador)
    console.log(mascotaJugadorObjecto, mascotaJugador);
    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener('keydown', sePresionoUnaTecla)
    
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
    const izquierdaEnemigo = enemigo.x

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
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }

    detenerMovimiento()
    clearInterval(intervalo)
    console.log('Se detecto una colision');

    enemigoId = enemigo.id
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo)
    //alert("Si hay colision con " + enemigo.nombre)
}

window.addEventListener('load',iniciarJuego)