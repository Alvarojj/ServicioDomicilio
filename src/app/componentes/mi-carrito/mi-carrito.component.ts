import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-carrito',
  templateUrl: './mi-carrito.component.html',
  styleUrls: ['./mi-carrito.component.css']
})
export class MiCarritoComponent {
  data: any = localStorage.getItem('micarrito');
  pedidos: any[] = JSON.parse(this.data);
  precioTotal: number = 0;



  total():void{
    let subtotal = 0;
    for(let i = 0; i < this.pedidos.length; i++){

      subtotal = subtotal + (this.pedidos[i].cantidad * this.pedidos[i].precio)
      console.log(this.pedidos[i].cantidad)
    }

    this.precioTotal = subtotal
  }
  
  finalizarPedido():void{
    localStorage.removeItem('micarrito')
    alert('Pedido realizado de manera exitosa')
  }

}
