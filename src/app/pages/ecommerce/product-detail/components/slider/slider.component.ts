import { Component, Input, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
import {Product} from '../../../products.service';

@Component({
  standalone: false,
  selector: 'slider',
  templateUrl: './slider.template.html',
  styleUrls: ['./slider.style.scss', '../../../product-grid/product-card.style.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent {
  @Input() products: Product[] = [];

  constructor(
    public router: Router
  ) {}

  scroll(track: HTMLElement, direction: number): void {
    track.scrollBy({left: direction * track.clientWidth, behavior: 'smooth'});
  }

  public toggleSliderProductStarred(product: Product) {
    product.starred = !product.starred;
  }

  getLabel(product) {
    return product.discount ? 'Sale' :
      product.createdAt === product.updatedAt ?
        'New' :
        null;
  }

  newPrice(product) {
    return product.discount ?
      product.price - (product.price * product.discount / 100) :
      product.price;
  }
}
