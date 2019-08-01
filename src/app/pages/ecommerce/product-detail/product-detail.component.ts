import { Component, ViewEncapsulation } from '@angular/core';

import mock from '../product-grid/products.mock';
import DescriptionMock from './description.mock';

@Component({
  selector: '[product-detail]',
  templateUrl: './product-detail.template.html',
  styleUrls: ['./product-detail.style.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent {
  public description: Array<any> = DescriptionMock;
  public products: Array<any> = mock;
}
