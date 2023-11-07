import {Producto} from "./producto";
import {Cliente} from "./cliente";

export class ProductoSubject {
    private observers: Cliente[] = [];

    constructor(private producto: Producto) {}

    addObserver(observer: Cliente) {
        this.observers.push(observer);
    }

    removeObserver(observer: Cliente) {
        const index = this.observers.indexOf(observer);
        if (index >= 0) {
            this.observers.splice(index, 1);
        }
    }

    setPrecio(newPrecio: number) {
        this.producto.precio = newPrecio;
        this.notify();
    }

    notify() {
        for (const observer of this.observers) {
            observer.update(this.producto);
        }
    }
}

export default ProductoSubject;
