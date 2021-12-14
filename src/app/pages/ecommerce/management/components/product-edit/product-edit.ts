import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product, ProductsService } from '../../../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'product-edit',
  templateUrl: './product-edit.html',
  styleUrls: ['./product-edit.scss'],
})
export class ProductEditComponent implements OnInit {
  @ViewChild('tagInput') tagInputRef: ElementRef;
  tag: string;
  form: FormGroup;

  constructor(
    public productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
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

    this.form = this.fb.group({
      tag: [undefined],
    });
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

  focusTagInput(): void {
    this.tagInputRef.nativeElement.focus();
  }

  onKeyUp(event: KeyboardEvent): void {
    const inputValue = this.form.controls.tag.value;
    if (event.code === 'Backspace' && !inputValue) {
      this.removeTag();
      return;
    } else {
      if (event.code === 'Comma' || event.code === 'Space' || event.code === 'Enter') {
        this.addTag(inputValue);
        this.form.controls.tag.setValue('');
      }
    }
  }

  addTag(tag: string): void {
    if (tag[tag.length - 1] === ',' || tag[tag.length - 1] === ' ') {
      tag = tag.slice(0, -1);
    }
    if (tag.length > 0 && this.product.technology.indexOf(tag) < 0) {
      this.product.technology.push(tag);
    }
  }

  removeTag(tag?: string): void {
    const index = this.product.technology.indexOf(tag);
    if (index > -1) {
      this.product.technology.splice(index, 1);
    }
  }

  updateProductProperty(value, key) {
    const product = this.product;
    product[key] = value;
    this.productsService.updateProduct(product);
  }
}
