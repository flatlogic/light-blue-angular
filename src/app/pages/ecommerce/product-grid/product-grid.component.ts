import {Component, OnInit} from '@angular/core';

import mockFilters from './filters.mock';
import {ProductsService} from '../products.service';
import {Router} from '@angular/router';

@Component({
  selector: '[product-grid]',
  templateUrl: './product-grid.template.html',
  styleUrls: ['./product-grid.style.scss', './product-card.style.scss']
})
export class ProductGridComponent implements OnInit {
  public filters = mockFilters;
  public activeModalFilter: number = null;

  constructor(
    public productsService: ProductsService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.productsService.getProductsRequest();
  }

  public changeItem (product) {
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

  public openModal(id) {
    this.activeModalFilter = id;
  }

  public closeModal() {
    this.activeModalFilter = null;
  }
}
