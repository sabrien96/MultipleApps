import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable, catchError, throwError } from 'rxjs';
import { User } from '../models/user';
import { environment as env } from '../../amazon/src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginListener=new Subject<boolean>();
  user:any;
  // private cartCountListener = new Subject<number>();
    constructor(private http: HttpClient) { }

    addUser(user: User):Observable<User> {
      return this.http.post<User>(`${env.api}users/register`,user).pipe(
        catchError(err=>{return throwError(err.message);})
      );
    }

    loginUser(user:User) {
      this.http.post<User>(`${env.api}users/authenticate`,user).subscribe((data)=>{
          this.user = data;
          alert("you are login your token is: "+this.user.token)
          this.setLoginListener(true);
          localStorage.setItem('userToken', this.user.token);
          localStorage.setItem('userId', this.user._id);
          location.href="/";
        },
        err => {
          console.log(err);

        }
      )
    }
    getLoginistner() {
      return this.loginListener.asObservable()
    }
    setLoginListener(flag: boolean) {
      this.loginListener.next(flag)
    }
    getToken() {
      return localStorage.getItem("userToken")
    }
    getAllUsers(): Observable<any> {
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.getToken()}`
        }),

      };
      return this.http.get<any>(`${env.api}users/`, options).pipe(
        catchError(err => { return throwError(err.message); })
      )
    }

    getUserById(id: any): Observable<any> {
      return this.http.get<any>(`http://localhost:8000/api/users/${id}`).pipe(
        catchError(err => { return throwError(err.message); })
      )
    }

    removeUser(userID: any) {
      return this.http.delete<User>(`http://localhost:8000/api/users/${userID}`).pipe(
        catchError(err => { return throwError(err.message); })
      )
    }
    logOut() {
      console.log("deleted")
      this.setLoginListener(false);
      localStorage.removeItem("userToken");
      localStorage.removeItem("userId");
      // localStorage.removeItem("wishList")

    }

    signInCheckout(user: User) {
      `http://localhost:8000/api/users/authenticate`;
      return this.http.post<User>(`${env.api}users/authenticate`, user)
    }
}
