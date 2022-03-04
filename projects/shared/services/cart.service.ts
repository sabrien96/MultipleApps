import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../amazon/src/environments/environment';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.getToken()}`
    })
  };
  constructor(private http: HttpClient) { }
  // to get token
  getToken() {
    return localStorage.getItem("userToken")
  }
  // add to cart
  addToCart(productId: any, qty: any) {
    return this.http.post<any>(`${env.api}/cart/addcart`, { productId: productId, qty: qty }, this.options).pipe(catchError(err => {
      return throwError(err.message);
    }))
  }
  // delete one product from cart
  deleteProductFromCart(productId: any) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.getToken()}`
      }),
      body: { productId: productId }
    };
    return this.http.delete(`${env.api}/cart/delete-cart`, options).pipe(catchError(err=>{
      return throwError(err.message);
    }))
  }
  // clear all cart
  clearCart() {
    return this.http.delete(`${env.api}/cart/clear`, this.options).pipe(catchError(err => {
      return throwError(err.message);
    }))
  }
  // return all cart
  getAllCart() {
    return this.http.get<any>(`${env.api}/cart/getcart`,this.options).pipe(catchError(err=>{
      return throwError(err.message);
    }))
  }
}
