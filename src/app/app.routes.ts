import { Routes } from '@angular/router';
import { CollectionComponent } from './components/collection/collection.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

export const routes: Routes = [
  { path: 'collection', component: CollectionComponent },
  { path: 'product/:id', component: ProductCardComponent },
  { path: '', redirectTo: '/collection', pathMatch: 'full' },
];
