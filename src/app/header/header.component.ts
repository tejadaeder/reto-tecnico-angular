import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../util/models/product.model';
import { SessionStorageService } from '../util/models/session.storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  @Input() unidadesEnCarrito: number = 0 ;
  @Input() total_productos: Product [] = [];

  constructor(
    private sessionStorageService: SessionStorageService

  ) {
  this.obtenerDeSesion()
  }

  obtenerDeSesion() {
    const data = this.sessionStorageService.getItem('miClave');
    if (data) {
      this.unidadesEnCarrito = data.unidadesEnCarrito
    } else {
    }
  }
}



