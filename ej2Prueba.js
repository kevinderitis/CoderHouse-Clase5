const productos = [
    { id:1, nombre:'Escuadra', precio: 323.45 },
    { id:2, nombre:'Calculadora', precio: 234.56 },
    { id:3, nombre:'Globo terraqueo', precio: 45.67 },
    { id:4, nombre:'Paleta pintura', precio: 456.78 },
    { id:5, nombre:'Reloj', precio: 67.89 },
    { id:6, nombre:'Agenda', precio: 78.90 }
]

let nombreProductos = '';
let precioTotal = 0;
let precioPromedio = 0;

productos.forEach(producto => {
    nombreProductos = nombreProductos + ',' + producto.nombre;
    precioTotal += producto.precio;  
})

precioPromedio = precioTotal / productos.length;



const maximo = Math.max(...productos.map(prod => prod.precio), 0);
let mayorPrecio = productos.filter(prod => prod.precio === maximo);

console.log(maximo);
console.log(mayorPrecio);