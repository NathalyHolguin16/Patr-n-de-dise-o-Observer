import Producto from "./producto";

export class Cliente {
// El constructor de la clase toma un argumento "nombre" que representa el nombre del Cliente.
    constructor(public nombre: string) {}

// Declaración de un atributo privado "followedProducts" que es una matriz de objetos de tipo Producto.
    private followedProducts: Producto[] = [];

// Método "followProduct" que permite que el cliente siga un producto.
    followProduct(product: Producto) {
// Agrega el producto a la lista de productos seguidos por el cliente.
        this.followedProducts.push(product);
// Imprime un mensaje en la consola indicando qué producto está siguiendo el cliente.
        console.log(`${this.nombre} está siguiendo ${product.nombre}.`);
    }
// Método "update" que se llama cuando el precio de un producto seguido por el cliente cambia.
    update(producto: Producto) {
// Imprime un mensaje en la consola indicando que el cliente ha sido notificado sobre el cambio de precio del producto.
        console.log(`Hola ${this.nombre}, el precio de ${producto.nombre} ha bajado a $${producto.precio}.`);
    }
}

// exporta la clase Cliente como el valor predeterminado del módulo, lo que te permite usar cualquier nombre de importación deseado.
export default Cliente;
