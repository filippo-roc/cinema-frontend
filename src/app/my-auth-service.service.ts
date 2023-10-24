// auth.service.ts
import { Injectable } from '@angular/core';
import { User } from './model/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MyAuthService {
  private isLoggedIn:boolean = false;
  private apiUrl = "http://localhost:8080/cliente/2"
  constructor(private http: HttpClient) { }

  getUser(): Observable<any>{
    return this.http.get(this.apiUrl)
  }
  login(credentials: User): boolean {
    // Simula una verifica delle credenziali (username e password).
    if (credentials.email === 'demo' && credentials.password === 'demo') {
      this.isLoggedIn = true;
      console.log(this.isLoggedIn)
      return true;
    }
    // L'accesso è fallito
    return false;
  }
  logout(){
    this.isLoggedIn = false;
  }
  getIsLoggedIn(){
    return this.isLoggedIn;
  }
  // Resto del servizio...
}