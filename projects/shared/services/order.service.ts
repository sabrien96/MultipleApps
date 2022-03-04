import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment as env } from '../../amazon/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:`Bearer ${this.getToken()}`
    }),
  };
  constructor(private http:HttpClient) { }
  //get token of user
  getToken() {
    return localStorage.getItem("userToken")
  }
 //get all orders for user by his id
 getOrdersByUserID(userId:any){
  return this.http.get(`${env.api}orders/getOrders/${userId}`).pipe(
    catchError(err => { return throwError(err.message); })
  );
}

  //get  all orders
  getAllOrders(){
    return this.http.get(`${env.api}orders/`).pipe(
      catchError(err=>{return throwError(err.message);})
    )
  }
   //create new order
   createOrder(order:any){
    return this.http.post(`${env.api}orders/create-order`,{...order},this.options).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }
   //remove order
   removeOrder(orderID:any){
    return this.http.delete(`${env.api}orders/${orderID}`).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }
}
