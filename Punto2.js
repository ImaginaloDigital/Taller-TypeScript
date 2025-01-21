"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
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
function inicio() {
    console.log("************************************************************");
    console.log("Bienvenido al sistema de gestión de tiendas!");
    console.log("************************************************************");
    console.log("Productos que manejamos:");
    var lista = ["TV", "Radio", "Teléfono", "Camiseta", "Pantalón", "Zapatos"];
    lista.forEach(function (producto) {
        console.log("- ".concat(producto));
    });
    rl.question("¿Desea buscar un producto o ver toda la información? (1)Buscar (2)Ver (3)Salir: ", function (respuesta) {
        if (respuesta === '1') {
            rl.question("Ingrese el nombre del producto a buscar: ", function (nombreProducto) {
                if (nombreProducto) {
                    buscarProducto(nombreProducto);
                }
                else {
                    console.log("No se ingresó un nombre de producto.");
                }
                //rl.close(); // Aquí cerramos la interfaz una vez que termina la búsqueda
                inicio();
            });
        }
        else if (respuesta === '2') {
            mostrarInformacion();
            //rl.close(); // Aquí cerramos la interfaz una vez que termina de mostrar la información
            inicio();
        }
        else if (respuesta === '3') {
            console.log("¡Gracias por usar el sistema! Adiós.");
            rl.close(); // Cerramos la interfaz y salimos del programa
        }
        else {
            console.log("Opción no válida. Por favor ingrese los números definidos (1)Buscar (2)Ver (3)Salir.");
            //rl.close(); // Cerramos la interfaz si la opción no es válida
            inicio();
        }
    });
}
// Recorrer y mostrar la información
function mostrarInformacion() {
    tiendas.forEach(function (tienda) {
        console.log("************************************************************");
        console.log("Mostrar información de la tienda...");
        console.log("************************************************************");
        console.log("Tienda: ".concat(tienda.nombre, " (ID:").concat(tienda.id, ")"));
        tienda.categorias.forEach(function (categoria) {
            console.log("  Categor\u00EDa:".concat(categoria.nombre));
            categoria.productos.forEach(function (producto) {
                console.log("    Producto:".concat(producto.nombre));
                console.log("      Precio:".concat(producto.precio.toFixed(2), " Pesos"));
                console.log("      Stock:".concat(producto.stock));
                console.log("      Estado:".concat(producto.estado ? 'Activo' : 'Inactivo'));
                console.log("************************************************************");
            });
        });
    });
}
//Funcion para buscar producto por nombre
function buscarProducto(nombreProducto) {
    console.log("************************************************************");
    console.log("BUSCANDO PRODUCTO: ".concat(nombreProducto, "..."));
    console.log("************************************************************");
    tiendas.forEach(function (tienda) {
        tienda.categorias.forEach(function (categoria) {
            var productoEncontrado = categoria.productos.find(function (producto) { return producto.nombre.toLowerCase() === nombreProducto.toLowerCase() && producto.estado; });
            if (productoEncontrado) {
                console.log("Producto encontrado en ".concat(tienda.nombre, ":"));
                console.log("Nombre:".concat(productoEncontrado.nombre));
                console.log("Precio:".concat(productoEncontrado.precio.toFixed(2), " Pesos"));
                console.log("Stock:".concat(productoEncontrado.stock));
                console.log("************************************************************");
            }
        });
    });
}
inicio();
