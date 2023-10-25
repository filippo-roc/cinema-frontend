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
  private user: User = new User("", "", "", "", "");

  constructor(private http: HttpClient) {
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
    return this.http.post(`${this.apiUrl}logout`, { token: this.user.token })
  }

  getIsLoggedIn() {
    return this.isLoggedIn;
  }

  setUserCredentials(nome, surname, email, phoneNumber, token) {
    // save user data
    this.user.nome = nome;
    this.user.surname = surname;
    this.user.email = email;
    this.user.phoneNumber = phoneNumber;
    this.user.token = token;

    // set logged to true 
    this.setIsLogged(true);

    // save data in local storage 
    this.saveDataToLocalStorage();
  }

  private recoverDataFromLocalStorage() {
    const userData: any = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      this.setUserCredentials(userData.nome, userData.surname, userData.email, userData.phoneNumber, userData.token);;
      this.setIsLogged(true);
    }
  }
  private saveDataToLocalStorage() {
    // save the obj in local storage 
    const userString = JSON.stringify(this.user);
    localStorage.setItem("userData", userString);
  }

  // Resto del servizio...
}