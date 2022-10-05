let pizza1 = {
    id: '1',
    nombre: 'Muzarella',
    ingredientes: [
        'tomate', 'muzarella', 'oregano'
    ],
    precio: '600'
}
let pizza2 = {
    id: '2',
    nombre: 'Napolitana',
    ingredientes: [
        'jamon', 'huevo', 'queso'
    ],
    precio: '300'
}
let pizza3 = {
    id: '3',
    nombre: 'Americana',
    ingredientes: [
        'huevoFrito', 'peperoni', 'roquefort'
    ],
    precio: '200'
}
let pizza4 = {
    id: '4',
    nombre: 'Rucula',
    ingredientes: [
        'verduras', 'palmito', 'especias'
    ],
    precio: '500'
}
let pizza5 = {
    id: '5',
    nombre: 'Especial',
    ingredientes: [
        'salsa', 'harina', 'crema'
    ],
    precio: '800'
}
let pizza6 = {
    id: '6',
    nombre: 'DE_LA_CASA',
    ingredientes: [
        'anchoas', 'pimientos', 'hongos'
    ],
    precio: '900'
}

let pizzas = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6]
let listado = document.getElementById('listado-pizzas');

const buscarPizza = () => {
    let valueid = document.getElementById('value-id').value;
    var precioPizza = document.getElementById('precio-pizza').innerHTML;
    var found = pizzas.find(function(post, index) {
        if (post.id == valueid)
            console.log("entro")
        precioPizza = post.precio;
    });

}