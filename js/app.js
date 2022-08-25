
const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')

const contadorCarrito = document.getElementById('contadorCarrito')

const precioTotal = document.getElementById('precioTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito ()
})


stockProductos.forEach((producto) => {
    const div = document.createElement ('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt= "">
    <h3>${producto.nombre} </3>
    <p>Talle: ${producto.talle}</p>
    <p class="precioProducto"> Precio: $${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class= "fas fa-shopping-cart"> </i> </button>
    `

    contenedorProductos.appendChild(div)

    localStorage.setItem('carrito', JSON.stringify(carrito))

    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener ('click', () => {
        agregarAlCarrito(producto.id)
    })
})



//función q trae prod que coincida con id q reciba por parámetro
const agregarAlCarrito = (prodId) => {
    const existe = carrito.some (prod => prod.id === prodId)
    
    if (existe) {
        const prod = carrito.map (prod => {
            if (prod.id === prodId) {
                prod.cantidad++
            }
        })
    } else {

    const item = stockProductos.find((prod) => prod.id === prodId)
    carrito.push(item)
    console.log(carrito)
    toastAgrego()
    
}
//toastAgrego()
actualizarCarrito()
}


//Vaciar carrito
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find ((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)

    carrito.splice(indice, 1)

    toastSaco()
    actualizarCarrito()
}


const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        //agregar clase al css
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio: ${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick = "eliminarDelCarrito (${prod.id})" class= "boton-eliminar"><i class= "fas fa-trash-alt"> </i> </button>
        `
        contenedorCarrito.appendChild(div)
    })
    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce ((acc, prod) => acc + prod.precio, 0)
}

//librerías 
const toastAgrego = () => {
    Toastify ({
        text: 'Se agregó un producto al carrito',
        time: 2000,
        gravity: 'bottom',
        position: 'left'
    }).showToast()
}

const toastSaco = () => {
    Toastify ({
        text:'Se eliminó el producto del carrito',
        time: 2000,
        gravity: 'bottom',
        position: 'right'
    }).showToast()
}





// ///                   EVENTOS                  ///

// // const botonenviar = document.getElementById("bboton")
// //     botonenviar.addEventListener("click", respuestaClick)

// //      function respuestaClick(){
// //       console.log("Respuesta evento");
// // }

// const modalContainer = document.querySelector ('#modal-container')
// const abrirModal = document.querySelector ('#bboton')
// const cerrarModal = document.querySelector ('#cerrar-modal')

// abrirModal.addEventListener ('click', () => {
//     modalContainer.classList.add('modal-container-active')
// })

// cerrarModal.addEventListener('click', () => {
//     modalContainer.classList.remove('modal-container-active')
// })

// const inputMail = document.querySelector ('#input-mail') 

// //console.log (inputMail.value)

// inputMail.addEventListener('input', () => {
//     console.log (inputMail.value)
// })

// //validar email
// function validar () {
// let expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
// let email = document.form1.email.value;
// if (!expresion.test(email)){
//     todo_correcto = false;
// }


// if(!todo_correcto){
//     alert('No escribiste correctamente el mail, volvé a probar');
//     }
    
//     return todo_correcto;
//     }