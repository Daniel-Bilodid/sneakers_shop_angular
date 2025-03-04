import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private amountSource = new BehaviorSubject<number>(0);
  amount$ = this.amountSource.asObservable();

  updateAmount(newAmount: number) {
    this.amountSource.next(newAmount);
  }
}
