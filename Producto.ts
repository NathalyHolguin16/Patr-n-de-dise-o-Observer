export class Producto {
// Estos son parámetros del constructor "nombre" es una cadena que representa el nombre del producto, y "precio" es un número que representa el precio del producto.
    constructor(public nombre: string, public precio: number) {} 
}
// exporta la clase Producto como el valor predeterminado del módulo, lo que te permite usar cualquier nombre de importación deseado.
export default Producto;
