import { Injectable } from '@angular/core';
import { Product } from '../collection/collection.model';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  getCart(): any[] {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  addToCart(product: any, amount: number): void {
    const cartData = this.getCart();
    const existingProductIndex = cartData.findIndex(
      (item: { id: number }) => item.id === product.id
    );

    if (existingProductIndex >= 0) {
      cartData[existingProductIndex].amount = amount;
    } else {
      cartData.push({
        id: product.id,
        name: product.name,
        price: product.price,
        amount: amount,
        img: product.img,
      });
    }

    localStorage.setItem('cart', JSON.stringify(cartData));
  }

  removeFromCart(productId: number): void {
    let cartData = this.getCart();
    cartData = cartData.filter(
      (product: { id: number }) => product.id !== productId
    );
    localStorage.setItem('cart', JSON.stringify(cartData));
  }

  getAmountForProduct(productId: number): number {
    const cartData = this.getCart();
    const product = cartData.find(
      (item: { id: number }) => item.id === productId
    );
    return product ? product.amount : 0;
  }
}
