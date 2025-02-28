import { Routes, RouterModule } from '@angular/router';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CollectionComponent } from './components/collection/collection.component';

const routes: Routes = [
  { path: 'product/:id', component: ProductCardComponent },
  { path: '', component: CollectionComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
