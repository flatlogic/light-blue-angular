import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

export class Product {
  id?: number;
  img?: string;
  title?: string;
  subtitle?: string;
  price?: number;
  rating?: number;
  description_1?: string;
  description_2?: string;
  code?: number;
  hashtag?: string;
  technology?: string[];
  discount?: number;

  constructor(id?) {
    if (id) {
      this.id = id;
    }
    this.img = '';
    this.title = '';
    this.subtitle = '';
    this.price = 0.01;
    this.rating = 5;
    this.description_1 = '';
    this.description_2 = '';
    this.code = null;
    this.hashtag = '';
    this.technology = [];
    this.discount = null;
  }
}

@Injectable()
export class ProductsService {
  _products: Product[] = [];
  _images: string[] = [];
  _isReceiving: boolean = false;
  _isUpdating: boolean = false;
  _isDeleting: boolean = false;
  _idToDelete: string = null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}

  getProductsRequest() {
    this.receivingProducts();
    this.http.get('/products').subscribe(products => {
      this.receiveProducts(products);
    });
  }

  loadProductRequest(id) {
    this.receivingProduct();
    this.http.get('/products/' + id).subscribe(product => {
      this.receiveProduct(product);
    });
  }

  updateProductRequest(payload) {
    this.updatingProduct();
    this.http.put('/products/' + payload.product.id, payload.product).subscribe(() => {
      this.updateProduct(payload.product);
      this.toastr.success('Product has been Updated!');
    });
  }

  createProductRequest(payload) {
    this.updatingProduct();
    this.http.post('/products', payload.product).subscribe(() => {
      this.updateProduct(payload.product);
      this.router.navigate(['/app/ecommerce/management']);
      this.toastr.success('Product has been Created!');
    });
  }

  deleteProductRequest(payload) {
    this.deletingProduct (payload);
    this.http.delete('/products/' + payload.id).subscribe(() => {
      this.deleteProduct ({id: payload.id});
      // if (this.router.history.current.pathname !== '/app/ecommerce/management') {
      //   this.router.navigate(['/app/ecommerce/management']);
      // }
      this.toastr.success('Product has been Deleted!');
    });
  }

  getProductsImagesRequest(payload) {
    this.http.get('/products/images-list').subscribe((images: Array<string>) => {
      this.receiveProductImages(images);
      if (!payload.img && images.length) {
        this.updateProduct ({id: payload.id, img: images[0]});
      }
    });
  }

  receiveProducts(payload) {
    this.products = payload;
    this.isReceiving = false;
  }

  receivingProducts() {
    this.isReceiving = true;
  }

  receiveProduct(payload) {
    this.products = [...this.products, payload];
    this.isReceiving = false;
  }

  receivingProduct() {
    this.isReceiving = true;
  }

  updateProduct(payload) {
    const index = this.products.findIndex((p: Product) => p.id === payload.id);
    this.products = this.products.map((p, i) => {
      if (i === index) {
        return Object.assign({}, p, payload);
      }
      return p;
    });
    this.isUpdating = false;
  }

  updatingProduct() {
    this.isUpdating = true;
  }

  deleteProduct(payload) {
    const indexToDelete = this.products.findIndex(p => p.id === payload.id);
    this.products.splice(indexToDelete, 1);
    this.isDeleting = false;
    this.idToDelete = null;
  }

  deletingProduct(payload) {
    this.isDeleting = true;
    this.idToDelete = payload.id;
  }

  receiveProductImages(payload) {
    this.images = payload;
  }

  get products() {
    return this._products;
  }

  set products(products) {
    this._products = products;
  }

  get images() {
    return this._images;
  }

  set images(images) {
    this._images = images;
  }

  get isReceiving() {
    return this._isReceiving;
  }

  set isReceiving(isReceiving) {
    this._isReceiving = isReceiving;
  }

  get isUpdating() {
    return this._isUpdating;
  }

  set isUpdating(isUpdating) {
    this._isUpdating = isUpdating;
  }

  get isDeleting() {
    return this._isDeleting;
  }

  set isDeleting(isDeleting) {
    this._isDeleting = isDeleting;
  }

  get idToDelete() {
    return this._idToDelete;
  }

  set idToDelete(idToDelete) {
    this._idToDelete = idToDelete;
  }
}
