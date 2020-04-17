import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '../../../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TagModel } from 'ngx-chips/core/accessor';

@Component({
  selector: 'product-edit',
  templateUrl: './product-edit.html',
  styleUrls: ['./product-edit.scss'],
})
export class ProductEditComponent implements OnInit {

  constructor(
    public productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const newProduct = new Product(-1);
    const product = this.findProduct(this.getId());
    if (this.getId() > -1) {
      this.productsService.loadProductRequest(this.getId());
    } else {
      if (!product) {
        this.productsService.receiveProduct(newProduct);
      }

    }
    this.productsService.getProductsImagesRequest(newProduct);
  }

  get isNew() {
    return this.getId() === -1;
  }

  get product(): Product {
    return this.findProduct(this.getId()) || { technology: [] };
  }

  goBack() {
    this.router.navigate(['/app/ecommerce/management']);
  }

  findProduct(id) {
    return this.productsService.products.find(p => p.id === id);
  }

  getId() {
    return parseInt(this.route.params['value'].id, 10) || -1;
  }

  updateTechnology(model: TagModel, type) {
    const technology = this.product.technology;
    if (typeof model === 'string') {
      type === 'add' ? technology.push(model) : technology.splice(technology.indexOf(model), 1);
    } else {
      type === 'add' ? technology.push(model.value) : technology.splice(technology.indexOf(model.value), 1);
    }
    this.updateProductProperty(technology, 'technology');
  }

  updateProductProperty(value, key) {
    const product = this.product;
    product[key] = value;
    this.productsService.updateProduct(product);
  }
}
