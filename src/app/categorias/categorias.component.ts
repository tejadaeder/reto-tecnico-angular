import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Product } from '../util/models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
  mostrarSoloFiltrados = false;
  products: Product [] = [];
  categories: any;
  selectedCategory: string | null | undefined;

  constructor(private http: HttpClient,
    private productService: ProductService) {

  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });

    this.productService.getCategorias().subscribe((categories) => {
      this.categories = categories;

    });
  }

  filterByCategory(category: string | null): void {
    this.selectedCategory = category;
    if(category == null){
      this.productService.getProducts().subscribe((data) => {
        this.products = data;
      });
    }
    this.products = this.products.filter(item => item.categoria  == category);

  }

   
  }
  


