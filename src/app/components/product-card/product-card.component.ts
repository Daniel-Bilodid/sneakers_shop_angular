import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ShoesService } from '../../shoes.service';
import { Product } from '../collection/collection.model';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  selectedProduct: Product | undefined;
  amount = 0;

  constructor(
    private route: ActivatedRoute,
    private shoesService: ShoesService,
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const productId = Number(params['id']);
      this.shoesService.getShoes().subscribe((shoes) => {
        this.selectedProduct = shoes.find(
          (product) => product.id === productId
        );
      });
    });
  }

  onIncreaseAmount() {
    if (this.amount < 20) {
      this.amount++;
      this.cartService.updateAmount(this.amount);
    }
  }

  onDecreaseAmount() {
    if (this.amount > 0) {
      this.amount--;
      this.cartService.updateAmount(this.amount);
    }
  }
  addToCart() {
    if (this.selectedProduct && this.amount > 0) {
      this.cartService.updateAmount(this.amount);
      this.productService.updateProduct(this.selectedProduct);
    }
  }
}
