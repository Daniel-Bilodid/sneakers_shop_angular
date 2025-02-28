import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Подключаем модуль
import { ShoesService } from './shoes.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CollectionComponent } from './components/collection/collection.component';
import { Product } from './components/collection/collection.model';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    NavbarComponent,
    ProductCardComponent,
    CollectionComponent,
    HttpClientModule,
  ],
})
export class AppComponent implements OnInit {
  title = 'ecommerce-frontend';
  shoesData: Product[] = [];
  selectedProduct: number | null = null;

  constructor(private shoesService: ShoesService) {}

  ngOnInit(): void {
    this.shoesService.getShoes().subscribe((shoes) => {
      this.shoesData = shoes;
    });
  }
  handleProductSelection(productId: number) {
    this.selectedProduct = productId;
  }
}
