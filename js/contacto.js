const inputNombre = document.querySelector('#form4Example1')
const inputEmail = document.querySelector('#form4Example2')
const inputMensaje = document.querySelector('#form4Example3')

const form = document.querySelector ('#form')
const userContact = document.querySelector ('#usuarios')
const contenedorCarrito = document.getElementById('carrito-contenedor')

const mensajeRegistrado = []

form.addEventListener('submit', (event)=> {
    event.preventDefault()
    
    const nombre = inputNombre.value
    const email = inputEmail.value
    const mensaje = inputMensaje.value

    if (nombre.length < 4 || email.length < 4 || mensaje.length < 4) {
        toastValidar()
        return
    }

    const user = {
        nombre: nombre,
        email: email,
        mensaje: mensaje
    }

    mensajeRegistrado.push(user)

    console.log(mensajeRegistrado)

    Swal.fire({
             icon:'success',
             html: `Gracias por contactarnos! Se envió una copia del mensaje a la dirección: ${user.email}`,
            })

    form.reset()

  
})


const toastValidar = () => {
    Toastify ({
        text: 'Datos inválidos',
        time: 3000,
        gravity: 'bottom',
        position: 'right',    
    }).showToast()
}

