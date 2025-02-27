// src/app/shoes.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoesService {
  constructor(private http: HttpClient) {}

  getShoes(): Observable<any[]> {
    return this.http.get<any[]>('assets/data.json');
  }
}
