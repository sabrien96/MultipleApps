import { environment } from './../../amazon/src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../amazon/src/environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  //get all products
  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${env.api}products`).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }

  //get product by it's id
  getProductById(id: any): Observable<IProduct> {
    return this.http.get<IProduct>(`${env.api}products/${id}`).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }

  // add new product
  addProduct(product: IProduct):Observable<IProduct> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer${this.getToken()}`
      })
    };
    return this.http.post<IProduct>(`${env.api}products/`,{...product},options).pipe(
      catchError(err=>{return throwError(err.message);})
    );
  }


  getToken() {
    return localStorage.getItem("userToken")
  }
}
