import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ShoesService } from '../../shoes.service';
import { Product } from './collection.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  data: Product[] = [];

  constructor(private router: Router, private shoesService: ShoesService) {}

  ngOnInit() {
    this.shoesService.getShoes().subscribe((shoes) => {
      this.data = shoes;
    });
  }

  onProductClick(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}
