import { Producto } from "./producto";
import { Cliente } from "./cliente";
import { ProductoSubject } from "./ProductoSubject";

//Se crean dos instancias de la clase Producto, producto1 representa una cámara web para videojuegos con un precio de $100, y producto2 representa un juego de comedor hecho de maderacon un precio de 200.
const producto1 = new Producto("cámara web para videojuegos", 100);
const producto2 = new Producto("Juego de comedor hecho de madera de 5 puestos", 200);

// se crean dos instancias de la clase Cliente, Cliente1 representa a un cliente llamado "Camila", y `Cliente2 representa a un cliente llamado "Tomás".
const Cliente1 = new Cliente("Camila");
const Cliente2 = new Cliente("Tomás");

// Se llaman al método followProductde Cliente1 y Cliente2. Cada cliente sigue un producto específico: Cliente1 sigue producto1(la cámara web) Cliente2 sigue producto2(el juego de comedor).
Cliente1.followProduct(producto1);
Cliente2.followProduct(producto2);

// Se crean dos instancias ProductoSubject. productoSubject1 está asociado con producto1(la cámara web), y productoSubject2 está asociado con producto2(el juego de comedor).
const productoSubject1 = new ProductoSubject(producto1);
const productoSubject2 = new ProductoSubject(producto2);

// Cliente1 como observador de productoSubject1, Cliente2como observador de `productoSubject2. Esto significa que cuando cambie el precio de producto1(cámara web), se notificará a `Cliente1, y cuando cambie el precio de producto2(juego de comedor), se notificará a Cliente2.
productoSubject1.addObserver(Cliente1);
productoSubject2.addObserver(Cliente2);

// Cuando se cambian los precios, se llama al método setPrecio  en los sujetos correspondientes (productoSubject1 y productoSubject2`), lo que desencadena la notificación a los observadores). Como resultado, Cliente1 es notificado del cambio de precio deproducto1 , y Cliente2 es notificado del cambio de precio de producto2`.
productoSubject1.setPrecio(37);
productoSubject2.setPrecio(320);
