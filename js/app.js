
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


alert ("¿Querés comprar un producto?")
let compra = prompt("Elegí un número del 1 al 24")

// if ( compra == 1,2,3,4,5,6,7,8,9 ) {
//     let numero1 = prompt("ingresá el primer dígito para sumar");
//     let numero2 = prompt("ingresá el segundo número para sumar");
//     resultado = sumar (numero1,numero2);
//     alert(`el total es $ ${resultado}`)
//     respuestaUsuario = prompt ("Querés seguir?")
// }

////////////////////////////////////////////
const agregarAlCarrito = (id) => {
    const producto = productos.find ( (prod) => prod.id ===id )
    carrito.push (producto)    
}

agregarAlCarrito (1)
agregarAlCarrito (2)

console.log (carrito)


/////////////////////////////

// const miCompra = [
//     { nombre: 'Desarrollo Web', precio: 20000 },
//     { nombre: 'Javascript', precio: 18750 },
//     { nombre: 'ReactJS', precio: 27500 }
// ]

const total = productos.reduce((acc, el) => acc + el.precio, 0)
console.log(total) 

////////////////////////////////

const calcularTotal = () => {
    const total = productos
}