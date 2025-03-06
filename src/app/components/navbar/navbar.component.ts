import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { Product } from '../collection/collection.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isCartOpen = false;
  cartProducts: any[] = [];

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart(): void {
    this.cartProducts = this.cartService.getCart();
  }

  goToCollection(): void {
    this.router.navigate(['/collection']);
  }

  toggleCart(): void {
    this.isCartOpen = !this.isCartOpen;

    if (this.isCartOpen) {
      this.loadCart();
    }
  }

  getAmountForProduct(productId: number): number {
    return this.cartService.getAmountForProduct(productId);
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.loadCart();
  }
}
