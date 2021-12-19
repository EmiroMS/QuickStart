import { Product } from './products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class CartService {
  items: Product[] = [];

  constructor(
    private http: HttpClient
  ) {}
/* . . . */
getShippingPrices() {
  return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
}
}
