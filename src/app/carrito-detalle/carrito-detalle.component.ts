import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from '../util/models/session.storage.service';
import { Product } from '../util/models/product.model';

@Component({
  selector: 'app-carrito-detalle',
  templateUrl: './carrito-detalle.component.html',
  styleUrl: './carrito-detalle.component.css'
})
export class CarritoDetalleComponent implements OnInit {
  unidadesEnCarrito=0;
  data: any;
  productos: Product[] = [];
  productosUnicos: Product[] = [];
  carroVacio  = true;

  constructor(
    private sessionStorageService: SessionStorageService

  ) { }

  ngOnInit(): void {
    this.obtenerDeSesion()
  }

  obtenerDeSesion() {
    const data = this.sessionStorageService.getItem('miClave');
    if (data) {
      this.unidadesEnCarrito = data.unidadesEnCarrito
      this.productos = data.total_productos
      const totalesPorId = new Map<number, number>();

      this.productos.forEach(producto => {
        const id = producto.id;
        if (totalesPorId.has(id)) {
          totalesPorId.set(id, totalesPorId.get(id)! + producto.price);
        } else {
          totalesPorId.set(id, producto.price);
        }
      });
      this.productosUnicos = Array.from(totalesPorId.keys()).map(id => {
        const producto = this.productos.find(p => p.id === id)!;
        return { ...producto, total: totalesPorId.get(id)! };
      });
      

    } else {
      this.carroVacio === true;
    }
  }
}


