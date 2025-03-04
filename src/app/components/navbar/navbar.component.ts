import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';
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
  amount = 0;
  selectedProduct: Product | null = null;

  constructor(
    private router: Router,
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.cartService.amount$.subscribe((newAmount) => {
      this.amount = newAmount;
    });

    this.productService.product$.subscribe((newProduct) => {
      this.selectedProduct = newProduct;
    });
  }

  goToCollection() {
    this.router.navigate(['/collection']);
  }
  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }
}
