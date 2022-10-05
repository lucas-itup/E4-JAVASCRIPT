let pizza1 = {
    id: '1',
    nombre: 'Muzarella',
    ingredientes: [
        'tomate', 'muzarella', 'oregano'
    ],
    precio: '600',
    imagen: '/img/descarga (1).jpg',
}
let pizza2 = {
    id: '2',
    nombre: 'Napolitana',
    ingredientes: [
        'jamon', 'huevo', 'queso'
    ],
    precio: '300',
    imagen: '/img/descarga (2).jpg',
}
let pizza3 = {
    id: '3',
    nombre: 'Americana',
    ingredientes: [
        'huevoFrito', 'peperoni', 'roquefort'
    ],
    precio: '200',
    imagen: '/img/descarga (3).jpg',
}
let pizza4 = {
    id: '4',
    nombre: 'Rucula',
    ingredientes: [
        'verduras', 'palmito', 'especias'
    ],
    precio: '500',
    imagen: '/img/descarga.jpg',
}
let pizza5 = {
    id: '5',
    nombre: 'Especial',
    ingredientes: [
        'salsa', 'harina', 'crema'
    ],
    precio: '800',
    imagen: '/img/images (1).jpg',
}
let pizza6 = {
    id: '6',
    nombre: 'DE_LA_CASA',
    ingredientes: [
        'anchoas', 'pimientos', 'hongos'
    ],
    precio: '900',
    imagen: '/img/images.jpg',
}

let pizzas = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6]
let listado = document.getElementById('listado-pizzas');

const buscarPizza = () => {
    let valueid = document.getElementById('value-id').value;
    var precioPizza = document.getElementById('precio-pizza');
    var nombrePizza = document.getElementById('nombre-pizza');
    var ingredientesPizza = document.getElementById('ingredientes-pizza');
    var inputVacio = document.getElementById('input-vacio');
    var imgPizza = document.getElementById("img-pizza");
    inputVacio.textContent = "";
    precioPizza.textContent = "";
    nombrePizza.textContent = "";
    imgPizza.setAttribute('src', '/img/descarga (4).jpg');

    if (valueid == "") return inputVacio.textContent = "Debes ingresar un valor numerico."

    var found = pizzas.find(function(post, index) {
        inputVacio.textContent = ""
        if (post.id == valueid) {
            precioPizza.textContent = post.precio;
            nombrePizza.textContent = post.nombre;
            ingredientesPizza.textContent = post.ingredientes.join("");
            imgPizza.setAttribute('src', post.imagen);
            return true;
        }
    });

    if (found == undefined) return inputVacio.textContent = "El codigo ingresado es incorrecto."
}