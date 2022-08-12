
//CARRITO DE PRODUCTOS 

//array de carrito vacío
const carrito = []


const productos = [
    {
        id: 1,
        nombre: "Remera Avant",
        precio: 3000,
        talle: "L"
    },
    {
        id: 2,
        nombre: "Remera Escarabajo",
        precio: 3000,
        talle: "S"
    },
    {
        id: 3,
        nombre: "Remera Espejo",
        precio: 3000,
        talle: "M"
    },
    {
        id: 4,
        nombre: "Remera Chiru",
        precio: 3000,
        talle: "XS"
    },
    {
        id: 5,
        nombre: "Remera Estampa",
        precio: 3000,
        talle: "L"
    },
    {
        id: 6,
        nombre: "Remera Astromutante",
        precio: 3000,
        talle: "L"
    },
    {
        id: 7,
        nombre: "Remera Cuánto",
        precio: 3000,
        talle: "L"
    },
    {
        id: 8,
        nombre: "Remera Field",
        precio: 3000,
        talle: "L"
    },
    {
        id: 9,
        nombre: "Remera Dentadura",
        precio: 3000,
        talle: "L"
    },
    {
        id: 10,
        nombre: "Print notas",
        precio: 1000,
    },    {
        id: 11,
        nombre: "Print sed",
        precio: 1000,
    },    {
        id: 12,
        nombre: "Print aldea",
        precio: 1000,
    },    {
        id: 13,
        nombre: "Print noctambul",
        precio: 1000,
    },    {
        id: 14,
        nombre: "Print gato",
        precio: 1000,
    },    {
        id: 15,
        nombre: "Print arribo",
        precio: 1000,
    },    {
        id: 16,
        nombre: "Print avant",
        precio: 1000,
    },    {
        id: 17,
        nombre: "Print cuánto",
        precio: 1000,
    },    {
        id: 18,
        nombre: "Print escarabajo",
        precio: 1000,
    },    {
        id: 19,
        nombre: "Bolsa mano",
        precio: 2000,
    },    {
        id: 20,
        nombre: "Bolsa verde",
        precio: 2000,
        talle: "L"
    },    {
        id: 21,
        nombre: "Bolsa roja",
        precio: 2000,
    },    {
        id: 22,
        nombre: "Bolsa vinilo",
        precio: 2000,
    },    {
        id: 23,
        nombre: "Bolsa negra",
        precio: 2000,
    },    {
        id: 24,
        nombre: "Bolsa lienzo",
        precio: 2000,
    }
   
]

console.log ( productos )



////////////////////////////////////////////
const agregarAlCarrito = (id) => {
    const producto = productos.find ( (prod) => prod.id ===id )
    carrito.push (producto)    
}

agregarAlCarrito (1)


console.log (carrito)


/////////////////////////////


const total = productos.reduce((acc, el) => acc + el.precio, 0)
console.log(total) 

////////////////////////////////

const calcularTotal = () => {
    // const total = 
}

///                   EVENTOS                  ///

// const botonenviar = document.getElementById("bboton")
//     botonenviar.addEventListener("click", respuestaClick)

//      function respuestaClick(){
//       console.log("Respuesta evento");
// }

const modalContainer = document.querySelector ('#modal-container')
const abrirModal = document.querySelector ('#bboton')
const cerrarModal = document.querySelector ('#cerrar-modal')

abrirModal.addEventListener ('click', () => {
    modalContainer.classList.add('modal-container-active')
})

cerrarModal.addEventListener('click', () => {
    modalContainer.classList.remove('modal-container-active')
})

const inputMail = document.querySelector ('#input-mail') 

//console.log (inputMail.value)

inputMail.addEventListener('input', () => {
    console.log (inputMail.value)
})

//validar email
function validar () {
let expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
let email = document.form1.email.value;
if (!expresion.test(email)){
    todo_correcto = false;
}


if(!todo_correcto){
    alert('No escribiste correctamente el mail, volvé a probar');
    }
    
    return todo_correcto;
    }