import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../util/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {
  private apiUrl = 'https://fake-api.example.com';
  filteredData: Product[] | undefined;

  constructor(private http: HttpClient) { }

  getData(idProducto: number): Observable<any> {
    // Simula la respuesta del servidor
    const fakeData: Product[] = [
      { "id": 1, "name": "Blanik", "detail": "Deshidratador de alimentos bda020 blanik", "price": 15.75, "imagen": "assets/artifact1.jpg", "categoria": "Electrodomésticos", "total": 0 },
      { "id": 2, "name": "Riccaddona", "detail": "Pack Riccadonna: 01 Und Riccadonna Prosecco x 750ml + 01Und. Riccadonna Moscato Rose x 750ml", "price": 20.5, "imagen": "assets/artifact2.jpg", "categoria": "Bebidas" , "total": 0  },
      { "id": 3, "name": "Tous", "detail": "Perfume tous frag tous kids girl edt 100 ml", "price": 20.5, "imagen": "assets/artifact3.jpg", "categoria": "Belleza" , "total": 0  },
      { "id": 4, "name": "Bestway", "detail": "Flotador de plastico pegazo 41121 bestway", "price": 12.5, "imagen": "assets/artifact4.jpg", "categoria": "Deportes" , "total": 0 },
      { "id": 5, "name": "Cacharel", "detail": "Perfume cacharel frag yes i am mujer edp 50 ml", "price": 35.20, "imagen": "assets/artifact5.jpg", "categoria": "Belleza", "total": 0  },
      { "id": 6, "name": "Wahl", "detail": "Máquina de cortar wahl easy cut acero inox negro", "price": 112.5, "imagen": "assets/artifact6.jpg", "categoria": "Electrodomésticos" , "total": 0  },
      { "id": 7, "name": "The Ordinary", "detail": "The ordinary squalane cleanser 1.7 oz/ 50 ml", "price": 48.0, "imagen": "assets/artifact7.jpg", "categoria": "Belleza" , "total": 0  },
      { "id": 8, "name": "Barbie", "detail": "Lentes de barbie para niña , plastico , buena calidad", "price": 10.0, "imagen": "assets/artifact8.jpg", "categoria": "Juguetes" , "total": 0 },
      { "id": 9, "name": "Samsung", "detail": "Samsung Galaxy S21", "price": 799.99, "imagen": "assets/artifact9.jpg", "categoria": "Electrónicos" , "total": 0 },
      { "id": 10, "name": "Sony", "detail": "Sony 65-inch 4K Ultra HD Smart LED TV", "price": 1200.00, "imagen": "assets/artifact10.jpg", "categoria": "Electrónicos" , "total": 0 },
      { "id": 11, "name": "Nike", "detail": "Zapatillas Nike Air Max", "price": 129.99, "imagen": "assets/artifact11.jpg", "categoria": "Deportes" , "total": 0 },
      { "id": 12, "name": "Canon", "detail": "Cámara Canon EOS Rebel T7", "price": 449.99, "imagen": "assets/artifact12.jpg", "categoria": "Electrónicos", "total": 0  },
      { "id": 13, "name": "Fitbit", "detail": "Fitbit Charge 4 Fitness and Activity Tracker", "price": 149.95, "imagen": "assets/artifact13.jpg", "categoria": "Fitness", "total": 0  },
      { "id": 14, "name": "KitchenAid", "detail": "KitchenAid Stand Mixer", "price": 329.99, "imagen": "assets/artifact14.jpg", "categoria": "Electrodomésticos" , "total": 0 },
      { "id": 15, "name": "LG", "detail": "LG UltraGear 27-inch Gaming Monitor", "price": 349.99, "imagen": "assets/artifact15.jpg", "categoria": "Electrónicos" , "total": 0 },
      { "id": 16, "name": "Apple", "detail": "Apple AirPods Pro", "price": 249.00, "imagen": "assets/artifact16.jpg", "categoria": "Electrónicos" , "total": 0 },
      { "id": 17, "name": "Dyson", "detail": "Dyson V11 Animal Cordless Vacuum Cleaner", "price": 599.99, "imagen": "assets/artifact17.jpg", "categoria": "Electrodomésticos", "total": 0  },
      { "id": 18, "name": "Adidas", "detail": "Chaqueta Adidas Originals", "price": 79.99, "imagen": "assets/artifact18.jpg", "categoria": "Ropa y Accesorios", "total": 0  },
      { "id": 19, "name": "LG", "detail": "LG 55-inch 4K Smart OLED TV", "price": 1499.99, "imagen": "assets/artifact19.jpg", "categoria": "Electrónicos", "total": 0  },
      { "id": 20, "name": "Bose", "detail": "Bose QuietComfort 35 II Wireless Headphones", "price": 299.00, "imagen": "assets/artifact20.jpg", "categoria": "Electrónicos", "total": 0  }
  
      ];

      this.filteredData = fakeData.filter(item => item.id  == idProducto);

      return of(this.filteredData);
  }
}