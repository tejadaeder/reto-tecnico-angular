import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../util/models/product.model';
import { FakeApiService } from '../services/fake-api.service';
import { SessionStorageService } from '../util/models/session.storage.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  productId: any;
  productsResponse: any;
  products: Product[] = [];
  data: any;
  private apiUrl = 'api/products'; 
  quantity: number = 1;
  cartCounter = 77;
  
  unidadesEnCarrito = 0;
  total_productos: Product [] = [];

  constructor(
    private route: ActivatedRoute,
    private fakeApiService: FakeApiService,
    private sessionStorageService: SessionStorageService   ) 
    {}

    ngOnInit(): void {
      //simulando consumo de servicio
      this.obtenerDeSesion()

      this.route.paramMap.subscribe(params => {
        const url = `${this.apiUrl}/${this.productId}`;

        this.productId = params.get('id');
        this.fakeApiService.getData(this.productId).subscribe(
          (response) => {
            this.data = response;
          },
          (error) => {
          }
        );
      });
    }
    
      obtenerDeSesion() {
        const data = this.sessionStorageService.getItem('miClave');
        if (data) {
          this.unidadesEnCarrito = data.unidadesEnCarrito | 0;
          this.total_productos = data.total_productos
        } else {
        }
      }
    
    addToCart(product: any) {
      this.unidadesEnCarrito++;
      this.total_productos.push(product)
      this.guardarEnSesion(this.unidadesEnCarrito,this.total_productos)
      this.obtenerDeSesion();

    }

    guardarEnSesion(unidadesEnCarrito: number,total_productos:Product[]) {
      const data = { unidadesEnCarrito: unidadesEnCarrito , total_productos:total_productos};
      this.sessionStorageService.setItem('miClave', data);
    }
  
}
