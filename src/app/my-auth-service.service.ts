// auth.service.ts
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './model/user';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root',
})
export class MyAuthService {
  private isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private apiUrl = "http://localhost:8080/api/v1/";

  constructor(private http: HttpClient, private userService: UserService ) {
   this.recoverDataFromLocalStorage();
  }


  login(credentials: User) {
    return this.http.post(`${this.apiUrl}login`, {
      email: credentials.email,
      password: credentials.password
    });
  }

  signIn(credentials: User) {
    return this.http.post(`${this.apiUrl}register`, credentials);
  }

  private setIsLogged(isLogged: boolean) {
    this.isLoggedIn.next(isLogged);
  }

  logout() {
    localStorage.removeItem("userData");
    this.setIsLogged(false);
    return this.http.post(`${this.apiUrl}logout`, { token: this.userService.user.token })
  }

  getIsLoggedIn() {
    return this.isLoggedIn;
  }

  setUserCredentials(name, surname, email, phoneNumber, token) {
    // save user data
    this.userService.setUserCredentials(name,surname,email, phoneNumber, token);

    // set logged to true 
    this.setIsLogged(true);

    // save data in local storage 
    this.saveDataToLocalStorage();
  }

  private recoverDataFromLocalStorage() {
    const userData: any = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      this.setUserCredentials(userData.name, userData.surname, userData.email, userData.phoneNumber, userData.token);;
      this.setIsLogged(true);
    }
  }
  private saveDataToLocalStorage() {
    // save the obj in local storage 
    const userString = JSON.stringify(this.userService.user);
    localStorage.setItem("userData", userString);
  }

  // Resto del servizio...
}