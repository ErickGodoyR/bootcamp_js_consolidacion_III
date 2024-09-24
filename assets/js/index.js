class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}


class Carrito {
    constructor(){
        this.compras = [];
    }

    agregarProducto(nombre, precio){
        const producto = new Producto(nombre, precio)
        this.compras.push(producto);
        alert(`El producto ${producto.nombre} con valor $${producto.precio} agregado correctamente`)
    }

    mostrarCarrito(){
        // console.log("productos agregados:");
        this.compras.forEach(producto => {
            alert(`producto: ${producto.nombre}`);
            // console.log(producto)
        });
    }

    calcularTotal(cantidad, precio){        
        let subTotalPagar = cantidad * precio;
        totalPagar += subTotalPagar
       console.log(subTotalPagar)
       alert(`Total de la compra: ${totalPagar}`)
    }

   

}

let totalPagar = 0
const miCarrito = new Carrito();
let continuar = true;

function seleccionarProducto(){
    while(continuar){
        var productoSeleccion = parseInt(prompt("Productos disponibles: \n1.- Leche $1000\n 2.-Pan de Molde $2000 \n 3.- Queso $1200 \n 4.- Mermelada $890 \n 5.- Azúcar $1300"))
        var cantidad = parseInt(prompt("Ingrese la cantidad de unidades:"))
        
        if(productoSeleccion === 1){
            miCarrito.agregarProducto("Leche", 1000)
           miCarrito.calcularTotal(cantidad, 1000);
            
        }else if(productoSeleccion === 2){            
            miCarrito.agregarProducto("Pan de Molde", 2000)
            miCarrito.calcularTotal(cantidad, 2000);
            
        }else if(productoSeleccion === 3){
            miCarrito.agregarProducto("Queso", 1200)
            miCarrito.calcularTotal(cantidad, 1200);
            
        }else if(productoSeleccion === 4) {
            miCarrito.agregarProducto("Mermelada", 890)
            miCarrito.calcularTotal(cantidad, 890);
            
        }else if(productoSeleccion === 5){
            miCarrito.agregarProducto("Azucar", 1300)
            miCarrito.calcularTotal(cantidad, 1300);
    
        }
        
        continuar = confirm("Desea agregar más productos al carro")
    }


}

seleccionarProducto();