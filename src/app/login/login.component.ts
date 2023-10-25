import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyAuthService } from '../my-auth-service.service';
import { User } from '../model/user';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials: User = new User("","","","","");
  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  emailIsValid: Boolean = false;
  emailErrorMessage: String = "";

  passwordIsValid: Boolean = false;
  passwordErrorMessage: String = "";

  errorMessageDisplayed: String = "";

  formIsValid: boolean = false;

  constructor(private myAuthService: MyAuthService, private router: Router) {}
 
  onEmailChange() {
    if (!this.emailPattern.test(this.credentials.email)) {
      this.emailIsValid = false;
      this.emailErrorMessage = "l'email non è valida";
    }
    else {
      this.emailIsValid = true
      this.emailErrorMessage = "";
    }
    this.checkMessage();
    this.checkIsValid();
  }
  onPasswordChange() {
    if (this.credentials.password.length < 8){
      this.passwordIsValid = false;
      this.passwordErrorMessage = "la password deve essere minimo 8 caratteri";
    }
    else if(! this.credentials.password.split("").find(char => char === char.toUpperCase()) ){
      this.passwordIsValid = false;
      this.passwordErrorMessage = "la password deve contenere almeno una lettera maiuscola";
    }
    else {
      this.passwordIsValid = true
      this.passwordErrorMessage = "";
    };
    this.checkMessage();
    this.checkIsValid();
  }

  checkMessage(){
    if(this.emailErrorMessage){
      this.errorMessageDisplayed = this.emailErrorMessage;
      return;
    }

    if(this.passwordErrorMessage){
      this.errorMessageDisplayed = this.passwordErrorMessage;
      return;
    }
    this.errorMessageDisplayed = "";

  }

  checkIsValid() {
    if( this.passwordIsValid && this.emailIsValid){
      this.formIsValid = true;
      return;
    }
    this.formIsValid = false;
  }
  
  async onLogin() {
    try {
      // send request to login to the server
      const result:any = await lastValueFrom(this.myAuthService.login(this.credentials));
      // get the data 
      const token = result.data.token;
      const name = result.data.name;
      const surname = result.data.surname;
      const email = result.data.email;
      const phoneNumber = result.data.phoneNumber;
      // save user data 
      this.myAuthService.setUserCredentials(name,surname,email,phoneNumber,token);   
      // go to home  
      this.router.navigate(["/home"])
    } catch (err) {
      console.log(err);
      this.errorMessageDisplayed = err.error.message;
    }
  }
}
