import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../collection/collection.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productQuantitySource = new BehaviorSubject<{
    [key: number]: number;
  }>({});

  productQuantity$ = this.productQuantitySource.asObservable();

  private productSource = new BehaviorSubject<Product[]>([]);

  product$ = this.productSource.asObservable();

  // Обновление количества товара
  updateAmount(productId: number, amount: number) {
    const currentQuantities = this.productQuantitySource.value;
    currentQuantities[productId] = amount;
    this.productQuantitySource.next({ ...currentQuantities });
  }

  getAmount(productId: number): number {
    return this.productQuantitySource.value[productId] || 0;
  }

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
