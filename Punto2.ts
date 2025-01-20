import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interface Producto {
    nombre: string;
    precio: number;
    stock: number;
    estado: boolean;
}

interface Categoria {
    nombre: string;
    productos: Producto[];
}

interface Tienda {
    id: number;
    nombre: string;
    categorias: Categoria[];
}

const tiendas: Tienda[] = [
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

function inicio(): void {
    console.log("************************************************************")
    console.log ("Bienvenido al sistema de gestión de tiendas!");
    console.log("************************************************************")
    console.log ("Productos que manejamos:");
    const lista = ["TV", "Radio", "Teléfono", "Camiseta", "Pantalón", "Zapatos"];
    lista.forEach(producto => {
        console.log(`- ${producto}`);
    });
    rl.question("¿Desea buscar un producto o ver toda la información? (1)Buscar (2)Ver (3)Salir: ", (respuesta: string) => {
        if (respuesta.toLowerCase() === '1') {
            rl.question("Ingrese el nombre del producto a buscar: ", (nombreProducto: string) => {
                if (nombreProducto) {
                    buscarProducto(nombreProducto);
                } else {
                    console.log("No se ingresó un nombre de producto.");
                }
                //rl.close(); // Aquí cerramos la interfaz una vez que termina la búsqueda
                inicio();
            });
        } else if (respuesta.toLowerCase() === '2') {
            mostrarInformacion();
            //rl.close(); // Aquí cerramos la interfaz una vez que termina de mostrar la información
            inicio();
        } else if (respuesta.toLowerCase() === '3') {
            console.log("¡Gracias por usar el sistema! Adiós.");
            rl.close(); // Cerramos la interfaz y salimos del programa
        }else {
            console.log("Opción no válida. Por favor ingrese 'sí' o 'no'.");
            //rl.close(); // Cerramos la interfaz si la opción no es válida
            inicio();
        }
    });
}


// Recorrer y mostrar la información
function mostrarInformacion(): void {tiendas.forEach(tienda => {
    console.log("************************************************************")
    console.log("Mostrar información de la tienda...");
    console.log("************************************************************")
    console.log(`Tienda: ${tienda.nombre} (ID:${tienda.id})`);
    tienda.categorias.forEach(categoria => {
        console.log(`  Categoría:${categoria.nombre}`);
        categoria.productos.forEach(producto => { //mostramos la informacion de cada producto
            console.log(`    Producto:${producto.nombre}`); 
            console.log(`      Precio:${producto.precio.toFixed(2)} Pesos`);
            console.log(`      Stock:${producto.stock}`);
            console.log(`      Estado:${producto.estado ? 'Activo' : 'Inactivo'}`);
            console.log("************************************************************")
        });
    });
});
}




//Funcion para buscar producto por nombre

function buscarProducto(nombreProducto:string): void {
    console.log("************************************************************")
    console.log(`BUSCANDO PRODUCTO: ${nombreProducto}...`);
    console.log("************************************************************")
    tiendas.forEach(tienda => {
        tienda.categorias.forEach(categoria => {
            const productoEncontrado = categoria.productos.find(producto => producto.nombre.toLowerCase() === nombreProducto.toLowerCase() && producto.estado);
            if (productoEncontrado) {
                console.log(`Producto encontrado en ${tienda.nombre}:`);
                console.log(`Nombre:${productoEncontrado.nombre}`);
                console.log(`Precio:${productoEncontrado.precio.toFixed(2)} Pesos`);
                console.log(`Stock:${productoEncontrado.stock}`);
                console.log("************************************************************")
            }
        });
    });
}

inicio();
