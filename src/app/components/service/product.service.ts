import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../collection/collection.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productSource = new BehaviorSubject<Product[]>([]);
  product$ = this.productSource.asObservable();

  updateProduct(newProduct: Product) {
    const currentProducts = this.productSource.value;

    const productIndex = currentProducts.findIndex(
      (product) => product.id === newProduct.id
    );
    if (productIndex !== -1) {
      currentProducts[productIndex] = newProduct;
    } else {
      currentProducts.push(newProduct);
    }

    this.productSource.next([...currentProducts]);
  }
}
