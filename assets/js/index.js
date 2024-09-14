class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Carrito {
    constructor(){
        this.productos = []
    }

    agregarProductos = (producto) => {
        this.productos.push(producto);
    }

    calcularTotalCompra = () => {
        let total = 0
        for (let i = 0; i < this.productos.length; i++) {
            total = total + this.productos[i].precio;
        }
        return `Total de la compra: $${total}`
    }

    mostrarDetalles = () => {
        let mensaje = "Detalles de la compra:\n";
        this.productos.forEach((producto, id) => {
            mensaje += `${id + 1}.- ${producto.nombre} - $${producto.precio}\n`;
        });
        mensaje += this.calcularTotalCompra();
        alert(mensaje)
    }

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

var opcion = ""
const carrito = new Carrito()
do{
    opcion = Number(prompt("Bienvenido al Kwik-E-Mart: \n1.- Agregar un producto\n2.- Ver total de la compra\n3.- Ver detalles de la compra\n4.- Finalizar compra"))
    switch(opcion){
        case 1:
            let continuar = ""
            while(continuar !== "n"){
                alert("Productos disponibles:\n1.- Leche $1000\n2.- Pan de Molde $2000\n3.- Queso $1200\n4.- Mermelada $890\n5.- Azúcar $1300")    
                listaProductos = [{nombre : "Leche", precio : 1000}, {nombre : "Pan de Molde", precio : 2000}, {nombre : "Queso", precio : 1200}, {nombre : "Mermelada", precio : 890}, {nombre : "Azúcar", precio : 1300}] 
                let numProducto = prompt("Ingresa el número del producto que deseas agregar al carrito:")
                if (numProducto >=1 && numProducto <=5){
                    let cantProducto = prompt("Ingresa la cantidad de unidades: ")
                    for (let i = 0; i < cantProducto; i++) {
                        let producto = new Producto()
                        producto = listaProductos[numProducto-1];
                        carrito.agregarProductos(producto)  
                }
                    continuar = prompt("¿Deseas seguir agregando productos? (s/n)")
                }else{
                    alert("El número de producto ingresado no se encuentra en nuestra base de datos, por favor ingrese un número del 1 al 5")
                }
            }
            break;
        case 2:
            alert(carrito.calcularTotalCompra())
            break;
        case 3:
            carrito.mostrarDetalles()
            break;
        case 4:
            carrito.finalizarCompra()
            break;
        default:
            alert("Opción incorrecta!!!")
    }
}
while(opcion!=4)
