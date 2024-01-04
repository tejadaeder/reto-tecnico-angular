import { Component } from '@angular/core';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrl: './product-gallery.component.css'
})
export class ProductGalleryComponent {
  products = [
    { id: 1, name: 'Blanik',description:'Deshidratador de alimentos bda020 blanik', price: 15.75, imageUrl: 'assets/artifact1.jpg' },
    { id: 2, name: 'Riccaddona',description:'Pack Riccadonna: 01 Und Riccadonna Prosecco x 750ml', price: 20.5, imageUrl: 'assets/artifact2.jpg' },
    { id: 3, name: 'Tous',description:'Perfume tous frag tous kids girl edt 100 ml', price: 20.5, imageUrl: 'assets/artifact3.jpg' },
    { id: 4, name: 'Bestway',description:'Flotador de plastico pegazo 41121 bestway', price: 12.5, imageUrl: 'assets/artifact4.jpg' },
    { id: 5, name: 'Cacharel',description:'Perfume cacharel frag yes i am mujer edp 50 ml', price: 35.20, imageUrl: 'assets/artifact5.jpg' },
    { id: 6, name: 'Wahl',description:'Máquina de cortar wahl easy cut acero inox negro', price: 112.5, imageUrl: 'assets/artifact6.jpg' },
    { id: 7, name: 'The Ordinary',description:'The ordinary squalane cleanser 1.7 oz/ 50 ml', price: 48.0, imageUrl: 'assets/artifact7.jpg' },
    { id: 8, name: 'Barbie',description:'Lentes de barbie para niña , plastico , buena calidad', price: 10.0, imageUrl: 'assets/artifact8.jpg' },

  ];

  constructor() {}

  ngOnInit() {
  }
}
