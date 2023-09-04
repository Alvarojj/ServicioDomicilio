import { Component } from '@angular/core';
import productos from './../../../assets/productos.json'

@Component({
  selector: 'app-sopa',
  templateUrl: './sopa.component.html',
  styleUrls: ['./sopa.component.css']
})
export class SopaComponent {
  titulo: String = '';
  precio: number = 0;
  cantidad: number = 1;
  pedidos: any[] = [];

  ProductosLista: { tipo: String, titulo: String, Descricion: String, precio: number }[] = productos

  obtenerDatos(titulo: String, precio: number): void {
    this.titulo = titulo;
    this.precio = precio;
  }

  InsCarrito(): void {
    let data: any = localStorage.getItem('micarrito');
    var objetoPedido = {
      titulo: this.titulo,
      precio: this.precio,
      cantidad: this.cantidad
    }
    if (data == null) {
      this.pedidos.push(objetoPedido);
      localStorage.setItem('micarrito', JSON.stringify(this.pedidos));
    } else {
      this.pedidos = JSON.parse(data);
      this.pedidos.push(objetoPedido);
      localStorage.setItem('micarrito', JSON.stringify(this.pedidos));
    }
    console.log(this.pedidos);
    this.cantidad = 1;
  }

  cerrar(): void {
    this.cantidad = 1
  }

}
