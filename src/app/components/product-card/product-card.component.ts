import { Component, Input } from '@angular/core';
import { Product } from '../collection/collection.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
@Component({
  selector: 'app-product-card',
  imports: [RouterModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() data: Product[] = [];
  @Input() productId?: number;

  amount = 0;

  get selectedProduct(): Product | undefined {
    return this.data.find((product) => product.id === this.productId);
  }
  constructor(private route: ActivatedRoute) {}
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
