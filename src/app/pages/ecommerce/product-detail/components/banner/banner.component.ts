import { Component, Input } from '@angular/core';
import {Product} from '../../../products.service';

@Component({
  standalone: false,
  selector: 'banner',
  templateUrl: './banner.template.html',
  styleUrls: ['./banner.style.scss']
})
export class BannerComponent {
  @Input() product: Product = {};
  @Input() image: string = '';
}
