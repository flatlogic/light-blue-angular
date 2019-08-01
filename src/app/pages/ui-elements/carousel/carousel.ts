import {Component} from '@angular/core';

@Component({
  selector: 'carousel-page',
  templateUrl: './carousel.html'
})
export class CarouselComponent {
  slides: Array<string> = [
    'assets/slides/1.jpg',
    'assets/slides/2.jpg',
    'assets/slides/3.jpg'
  ];
}
