import {Producto} from "./producto";
import {Cliente} from "./cliente";

export class ProductoSubject {
    
// Constructor de la clase que toma un objeto de tipo Producto como argumento.
    constructor(private producto: Producto) {}

// Declaración de un atributo privado observers que es una matriz de objetos de tipo Cliente.
    private observers: Cliente[] = [];

// Método para agregar un observador (cliente) a la lista de observadores.
    addObserver(observer: Cliente) {
        this.observers.push(observer);
    }

// Método para eliminar un observador (cliente) de la lista de observadores.
    removeObserver(observer: Cliente) {
// Se busca el índice del observador en la matriz.
        const index = this.observers.indexOf(observer);
// Si se encuentra el observador (índice no es -1), se elimina de la matriz.
        if (index >= 0) {
            this.observers.splice(index, 1);
        }
    }
// Método para establecer un nuevo precio para el producto.
    setPrecio(newPrecio: number) {
// Se actualiza el precio del producto con el nuevo precio proporcionado.
        this.producto.precio = newPrecio;
// Se llama al método notify para notificar a los observadores sobre el cambio de precio.
        this.notify();
    }
// Método para notificar a todos los observadores sobre un cambio en el producto.
    notify() {
// Itera a través de la lista de observadores y llama al método update de cada observador.
        for (const observer of this.observers) {
            observer.update(this.producto);
        }
    }
}
// exporta la clase ProductoSubject como el valor predeterminado del módulo, lo que te permite usar cualquier nombre de importación deseado.
export default ProductoSubject;
