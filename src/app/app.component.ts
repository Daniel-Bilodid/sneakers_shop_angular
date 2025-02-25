import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  Firestore,
  getFirestore,
  collection,
  getDocs,
} from 'firebase/firestore';
import { environment } from '../environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [NavbarComponent],
})
export class AppComponent implements OnInit {
  title = 'ecommerce-frontend';
  private firestore!: Firestore;

  constructor() {
    const firebaseApp = initializeApp(environment.firebaseConfig);
    this.firestore = getFirestore(firebaseApp);
  }

  async ngOnInit(): Promise<void> {
    try {
      const productsCollection = collection(this.firestore, 'products');
      const snapshot = await getDocs(productsCollection);

      if (snapshot.empty) {
        console.log('Коллекция "products" пуста.');
      } else {
        snapshot.forEach((doc) => {
          console.log('Документ:', doc.id, doc.data());
        });
      }
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  }
}
