import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../service/product.service';
import { Product } from '../collection/collection.model';
@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isCartOpen = false;
  selectedProduct: Product[] = [];

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit() {
    this.productService.product$.subscribe((newProducts) => {
      this.selectedProduct = newProducts;
    });
  }

  goToCollection() {
    this.router.navigate(['/collection']);
  }
  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }
  getAmountForProduct(productId: number): number {
    return this.productService.getAmount(productId);
  }
}
