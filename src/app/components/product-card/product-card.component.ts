import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  amount = 0;

  onIncreaseAmount() {
    if (this.amount !== 20) {
      this.amount++;
    }
  }

  onDecreaseAmount() {
    if (this.amount !== 0) {
      this.amount--;
    }
  }
}
