import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  
  currentIndex = 0;
  items = document.querySelectorAll('.carousel-item');
  totalItems = this.items.length;

 showItem(index: number) {
    if (index < 0) {
      this.currentIndex = this.totalItems - 1;
    } else if (index >= this.totalItems) {
      this.currentIndex = 0;
    } else {
      this.currentIndex = index;
    }

    const translationValue = -100 * this.currentIndex + '%';
  }

  prevSlide() {
    this.showItem(this.currentIndex - 1);
  }

  nextSlide() {
    this.showItem(this.currentIndex + 1);
  }

}
