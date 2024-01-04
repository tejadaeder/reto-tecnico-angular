import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'assets/productos.json';
  private categoriasUrl = 'assets/categorias.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(this.productsUrl);
  }

  getCategorias(): Observable<any> {
    return this.http.get(this.categoriasUrl);
  }
}