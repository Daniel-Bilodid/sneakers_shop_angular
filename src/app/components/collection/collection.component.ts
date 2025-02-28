import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from './collection.model';
@Component({
  selector: 'app-collection',
  imports: [],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss',
})
export class CollectionComponent {
  @Input() data: Product[] = [];
  @Output() selectedProduct = new EventEmitter<number>();

  onProductClick(productId: number) {
    console.log('Clicked product ID:', productId);
    this.selectedProduct.emit(productId);
  }
}
