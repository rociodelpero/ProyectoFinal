
const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')

const botonComprar = document.getElementById('boton-comprar')

const contadorCarrito = document.getElementById('contadorCarrito')

const precioTotal = document.getElementById('precioTotal')



 let carrito = []


document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})



stockProductos.forEach((producto) => {
    const div = document.createElement ('div')
    div.classList.add('producto')
    div.innerHTML = `
                    <div class="carddd card">
                    <img src=${producto.img} alt= "">
                    <h3 class="cardtitlecentro card-title">${producto.nombre} </3>
                    <p>Talle: ${producto.talle}</p>
                    <p class="cardPrecio">  $${producto.precio}</p>
                    <button id="agregar${producto.id}" class="boton-agregar"> <i class= "fas fa-shopping-cart"> </i> </button>
                    </div>
                    `

    contenedorProductos.appendChild(div)

    localStorage.setItem('carrito', JSON.stringify(carrito))

    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener ('click', () => {
        agregarAlCarrito(producto.id)
    })
})



//función que trae prod que coincida con id que recibe por parámetro
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
    }

toastAgrego()
actualizarCarrito()
}


//Vaciar carrito
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find ((prod) => prod.id === prodId)

    item.cantidad -= 1

    if (item.cantidad === 0) {
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    }
    else if (carrito.length == 0){
    contenedorModal.remove()
    Swal.fire('No hay productos en el carrito')
    }


    localStorage.setItem('carrito', JSON.stringify(carrito))

    toastSaco()
    actualizarCarrito()
}

botonVaciar.addEventListener('click', () => {
    
    carrito.length = 0 
    Swal.fire('No hay productos en el carrito')
    contenedorModal.remove()
    actualizarCarrito ()    
})

botonAbrir.addEventListener('click', () => {
    if (carrito.length == 0) {
       //contenedorModal.removeChild(modalCarrito)
       Swal.fire('No hay productos en el carrito')
         contenedorModal.remove()
   } else {
    document.body.append(contenedorModal)
    console.log('no esta  funcando');
   }
})


const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""
      
        carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio: ${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick = "eliminarDelCarrito (${prod.id})" class= "boton-eliminar"><i class= "fas fa-trash-alt"> </i> </button>
        `
        contenedorCarrito.appendChild(div)

    
    })


    contadorCarrito.innerText = carrito.reduce((acc,prod) => acc += prod.cantidad,0)
    precioTotal.innerText = carrito.reduce ((acc, prod) => acc + prod.precio * prod.cantidad, 0)
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



actualizarCarrito()


