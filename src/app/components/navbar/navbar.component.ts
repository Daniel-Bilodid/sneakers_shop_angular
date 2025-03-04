import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isCartOpen = false;
  amount = 0;

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit() {
    this.cartService.amount$.subscribe((newAmount) => {
      this.amount = newAmount;
    });
  }

  goToCollection() {
    this.router.navigate(['/collection']);
  }
  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }
}
