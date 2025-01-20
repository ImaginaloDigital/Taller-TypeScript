"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var tiendas = [
    {
        id: 1,
        nombre: "San Juan",
        categorias: [
            {
                nombre: "Electrónica",
                productos: [
                    { nombre: "TV", precio: 1599.99, stock: 10, estado: true },
                    { nombre: "Radio", precio: 49.99, stock: 25, estado: true },
                    { nombre: "Teléfono", precio: 699.99, stock: 15, estado: false },
                ],
            },
            {
                nombre: "Ropa",
                productos: [
                    { nombre: "Camiseta", precio: 19.99, stock: 50, estado: true },
                    { nombre: "Pantalón", precio: 39.99, stock: 30, estado: true },
                    { nombre: "Zapatos", precio: 89.99, stock: 20, estado: false },
                ],
            },
        ],
    },
    {
        id: 2,
        nombre: "Santa Marta",
        categorias: [
            {
                nombre: "Electrónica",
                productos: [
                    { nombre: "TV", precio: 1699.99, stock: 8, estado: true },
                    { nombre: "Radio", precio: 59.99, stock: 20, estado: true },
                    { nombre: "Teléfono", precio: 799.99, stock: 12, estado: true },
                ],
            },
            {
                nombre: "Ropa",
                productos: [
                    { nombre: "Camiseta", precio: 14.99, stock: 60, estado: true },
                    { nombre: "Pantalón", precio: 49.99, stock: 25, estado: false },
                    { nombre: "Zapatos", precio: 99.99, stock: 15, estado: true },
                ],
            },
        ],
    },
];
// Recorrer y mostrar la información
function mostrarInformacion() {
    tiendas.forEach(function (tienda) {
        console.log("Tienda: ".concat(tienda.nombre, " (ID:").concat(tienda.id, ")"));
        tienda.categorias.forEach(function (categoria) {
            console.log("  Categor\u00EDa:".concat(categoria.nombre));
            categoria.productos.forEach(function (producto) {
                console.log("    Producto:".concat(producto.nombre));
                console.log("      Precio:".concat(producto.precio.toFixed(2), " Pesos"));
                console.log("      Stock:".concat(producto.stock));
                console.log("      Estado:".concat(producto.estado ? 'Activo' : 'Inactivo'));
            });
        });
    });
}
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function inicio() {
    rl.question("¿Desea buscar un producto? (sí/no): ", function (respuesta) {
        if (respuesta.toLowerCase() === 'sí') {
            rl.question("Ingrese el nombre del producto a buscar: ", function (nombreProducto) {
                if (nombreProducto) {
                    buscarProducto(nombreProducto);
                }
                else {
                    console.log("No se ingresó un nombre de producto.");
                }
                rl.close();
            });
        }
        else {
            mostrarInformacion();
            rl.close();
        }
    });
}
//Funcion para buscar producto por nombre
function buscarProducto(nombreProducto) {
    tiendas.forEach(function (tienda) {
        tienda.categorias.forEach(function (categoria) {
            var productoEncontrado = categoria.productos.find(function (producto) { return producto.nombre.toLowerCase() === nombreProducto.toLowerCase() && producto.estado; });
            if (productoEncontrado) {
                console.log("Producto encontrado en ".concat(tienda.nombre, ":"));
                console.log("Nombre:".concat(productoEncontrado.nombre));
                console.log("Precio:".concat(productoEncontrado.precio.toFixed(2), " Pesos"));
                console.log("Stock:".concat(productoEncontrado.stock));
            }
        });
    });
}
inicio();
