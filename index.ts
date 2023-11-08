import { Producto } from "./producto";
import { Cliente } from "./cliente";
import { ProductoSubject } from "./ProductoSubject";


const producto1 = new Producto("cámara web para videojuegos", 100);
const producto2 = new Producto("Juego de comedor hecho de madera de 5 puestos", 200);

const Cliente1 = new Cliente("Camila");
const Cliente2 = new Cliente("Tomás");

Cliente1.followProduct(producto1);
Cliente2.followProduct(producto2);

const productoSubject1 = new ProductoSubject(producto1);
const productoSubject2 = new ProductoSubject(producto2);

productoSubject1.addObserver(Cliente1);
productoSubject2.addObserver(Cliente2);

productoSubject1.setPrecio(37);
productoSubject2.setPrecio(320);
