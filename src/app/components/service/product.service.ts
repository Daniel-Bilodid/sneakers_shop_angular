import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../collection/collection.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productSource = new BehaviorSubject<Product | null>(null);
  product$ = this.productSource.asObservable();

  updateProduct(newProduct: Product) {
    this.productSource.next(newProduct);
  }
}
