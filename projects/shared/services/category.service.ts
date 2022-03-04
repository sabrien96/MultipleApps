import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../amazon/src/environments/environment';
import { catchError, throwError, Observable } from 'rxjs';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  _url = "";
  productList:Array<IProduct>=[];
  constructor(private http: HttpClient) {
    this.getAllProducts().subscribe((data) => {
     this.productList=data;
    });
  }
  //get all categories
  getAllCategory() {
    this._url = `${env.api}filter/category`;
    return this.http.get<any>(this._url).pipe(catchError(err => { return throwError(err.message) }));
  }
  //get all sub-categories by category id
  getAllSubcategoryByCateId(CateId: any) {
    this._url = `${env.api}filter/subcategory/${CateId}`;
    return this.http.get<any>(this._url).pipe(catchError(err => { return throwError(err.message) }));
  }
  //get all sub-categories by category name
  getAllSubcategoryByName(cateName: any) {
    this._url = `${env.api}filter/subcategoryarr/${cateName}`;
    return this.http.get<any>(this._url).pipe(catchError(err => { return throwError(err.message) }));
  }
  //get all products by category name
  getProductByCategory(categoryName: any): Observable<IProduct[]> {
    this._url = `${env.api}products/bycategory/${categoryName}`;
    return this.http.get<IProduct[]>(this._url).pipe(catchError(err => { return throwError(err.message) }));
  }

  //get all products by sub category name
  getProductsBySubcategory(SubcategoryName: any): Observable<IProduct[]> {
    this._url = `${env.api}products/bysubcategory/${SubcategoryName}`;
    return this.http.get<IProduct[]>(this._url).pipe(catchError(err => { return throwError(err.message); }))
  }
  //get all products
  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${env.api}products`).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }

}
