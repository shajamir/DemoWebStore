import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { IProduct } from '../models/product';

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    constructor(private http: HttpClient) {}

    getProducts() {
        const params = new HttpParams()
        .set('limit', 5);
        
        return this.http.get<IProduct[]>('https://fakestoreapi.com/products', { params });
    }
}