// auth.service.ts
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './model/user';
@Injectable({
  providedIn: 'root',
})
export class MyAuthService {
  private isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private apiUrl = "http://localhost:8080/api/v1/";
  private user:User = new User("","","","","");

  constructor(private http: HttpClient) { }


  login(credentials: User) {
    return this.http.post(`${this.apiUrl}login`, {
      email : credentials.email,
      password : credentials.password
    });
  }

   signIn(credentials: User) {
    return this.http.post(`${this.apiUrl}register`, credentials);
  }

  setIsLogged(isLogged : boolean){
    this.isLoggedIn.next(isLogged);
  }

  logout() {
    return this.http.post(`${this.apiUrl}logout`,{token :  this.user.token})
  }
  
  getIsLoggedIn() {
    return this.isLoggedIn;
  }


  setUserToken(token:string){
  this.user.token = token;
  }
  // Resto del servizio...
}