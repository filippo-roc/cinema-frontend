import { Injectable } from '@angular/core';
import { User } from './model/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User = new User("", "", "", "", "");

  constructor() { }

  setUserCredentials(name,surname, email, phoneNumber, token){
    this.user.name = name;
    this.user.surname = surname;
    this.user.email = email;
    this.user.phoneNumber = phoneNumber;
    this.user.token = token;
  }
 
}
