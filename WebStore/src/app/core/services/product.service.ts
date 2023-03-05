import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { IProduct } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  url = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getProducts() : Observable<IProduct[]> {
      const params = new HttpParams()
      .set('limit', 5);
      
      return this.http.get<IProduct[]>(this.url, { params });
  }
}