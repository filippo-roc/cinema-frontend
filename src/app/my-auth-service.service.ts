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
  private apiUrl = "http://localhost:8080/"

  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    return this.http.get(this.apiUrl)
  }
  login(credentials: User): boolean {
    // Simula una verifica delle credenziali (username e password).
    if (credentials.email === 'demo' && credentials.password === 'demo') {
      this.isLoggedIn.next(true);
      console.log(this.isLoggedIn)
      return true;
    }
    // L'accesso è fallito
    return false;
  }
   signIn(credentials: User) {
    return this.http.post(`${this.apiUrl}register`, credentials);
  }

  logout() {
    this.isLoggedIn.next(false);
  }
  getIsLoggedIn() {
    return this.isLoggedIn;
  }
  // Resto del servizio...
}