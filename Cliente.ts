import Producto from "./producto";

export class Cliente {
    private followedProducts: Producto[] = [];

    constructor(public name: string) {}

    followProduct(product: Producto) {
        this.followedProducts.push(product);
        console.log(`${this.name} está siguiendo ${product.name}.`);
    }

    update(producto: Producto) {
        console.log(`Hola ${this.name}, el precio de ${producto.name} ha bajado a $${producto.precio}.`);
    }
}

export default Cliente;



   