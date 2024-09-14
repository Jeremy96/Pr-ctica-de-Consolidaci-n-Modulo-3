/**
 * Se crea una clase producto
 * @param {String} nombre Nombre del producto
 * @param {number} precio Precio del Producto
 */
class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}
/**
 * Clase Carrito que contiene una arreglo para guardar productos
 * @param {Array} productos Lista de productos
 */
class Carrito {
    constructor(){
        this.productos = []
    }
    /**
     * Función para agregar un producto a la lista productos con el metodo push() que agrega cada producto al final de la lista
     * @param {Object} producto 
     */
    agregarProductos = (producto) => {
        this.productos.push(producto);
    }
    /**
     * Función para calcular el total de la compra del carrito
     * @returns Mensaje con el total de la compra
     */
    calcularTotalCompra = () => {
        let total = 0
        for (let i = 0; i < this.productos.length; i++) {
            total = total + this.productos[i].precio;
        }
        return `Total de la compra: $${total}`
    }
    /**
     * Funcion que imprime en un alert la lista de productos y el total de la compra
     */
    mostrarDetalles = () => {
        let mensaje = "Detalles de la compra:\n";
        this.productos.forEach((producto, id) => {
            mensaje += `${id + 1}.- ${producto.nombre} - $${producto.precio}\n`;
        });
        mensaje += this.calcularTotalCompra();
        alert(mensaje)
    }
    /**
     * Funcion que imprime la boleta final de la compra y vacia el carrito
     */
    finalizarCompra = () => {
        let mensaje = "- - - - - Supermercado Kwik-E-Mart - - - - -\n";
        mensaje += "Detalles de la compra:\n";
        this.productos.forEach((producto, id) => {
            mensaje += `${id + 1}.- ${producto.nombre} - $${producto.precio}\n`;
        });
        mensaje += this.calcularTotalCompra();
        mensaje += "\n- - - - -Gracias por su compra - - - - -\n - - - - - Carrito Vaciado - - - - -";
        this.productos = [];
        alert(mensaje)
    }
}
// Variable que se utiliza para cambiar de opcion en el menu principal
var opcion = ""
// Se crea el carrito
const carrito = new Carrito()
do{
    //Prompt para escribir una opcion del menu principal
    opcion = Number(prompt("Bienvenido al Kwik-E-Mart: \n1.- Agregar un producto\n2.- Ver total de la compra\n3.- Ver detalles de la compra\n4.- Finalizar compra"))
    switch(opcion){
        // Agregar Productos
        case 1:
            // variable para continuar agregando productos s/n
            let continuar = ""
            // Si continuar es distinto de n se sigue agregando productos
            while(continuar !== "n"){
                alert("Productos disponibles:\n1.- Leche $1000\n2.- Pan de Molde $2000\n3.- Queso $1200\n4.- Mermelada $890\n5.- Azúcar $1300")    
                listaProductos = [{nombre : "Leche", precio : 1000}, {nombre : "Pan de Molde", precio : 2000}, {nombre : "Queso", precio : 1200}, {nombre : "Mermelada", precio : 890}, {nombre : "Azúcar", precio : 1300}] 
                let numProducto = prompt("Ingresa el número del producto que deseas agregar al carrito:")
                // Se valida si el numero de producto esta entre 1 a 5
                if (numProducto >=1 && numProducto <=5){
                    let cantProducto = prompt("Ingresa la cantidad de unidades: ")
                    for (let i = 0; i < cantProducto; i++) {
                        let producto = new Producto()
                        producto = listaProductos[numProducto-1];
                        carrito.agregarProductos(producto)  
                }
                    continuar = prompt("¿Deseas seguir agregando productos? (s/n)")
                }else{
                    // en caso de que el numero de producto no exista se envia alert con el error
                    alert("El número de producto ingresado no se encuentra en nuestra base de datos, por favor ingrese un número del 1 al 5")
                }
            }
            break;
        // Calcular Total de compra
        case 2:
            alert(carrito.calcularTotalCompra())
            break;
        // Mostrar Detalles de la compra
        case 3:
            carrito.mostrarDetalles()
            break;
        // Finaliza la compra
        case 4:
            carrito.finalizarCompra()
            break;
        // En caso de cualquier otra opcion manda error
        default:
            alert("Opción incorrecta!!!")
    }
}
// Continua el ciclo si la variable opcion el distinta de 4
while(opcion!=4)
