import { Component } from '@angular/core';
import { User } from '../model/user';
import { MyAuthService } from '../my-auth-service.service';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent {
  credentials: User = new User("", "", "", "", "")
  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  nameIsValid: Boolean = false;
  surnameIsValid: Boolean = false;
  emailIsValid: Boolean = false;
  passwordIsValid: Boolean = false;
  phoneNumberIsValid: Boolean = false;

  nameErrorMessage: String = "";
  surnameErrorMessage: String = "";
  emailErrorMessage: String = "";
  passwordErrorMessage: String = "";
  phoneNumberErrorMessage: String = "";

  errorMessageDisplayed: String = "";

  formIsValid: boolean = false;


  constructor(private myAuthService: MyAuthService, private router: Router) { }

  onNameChange() {
    if (this.credentials.name.length < 3){
      this.nameIsValid = false;
      this.nameErrorMessage = "il name è troppo corto"
    }
    else if(this.credentials.name.length > 18){
      this.nameIsValid = false;
      this.nameErrorMessage = "il name è troppo lungo"
    }
    else {
      this.nameIsValid = true;
      this.nameErrorMessage = ""
    }
    this.checkMessage();
    this.checkIsValid();
  }
  
  onSurnameChange() {
    if (this.credentials.surname.length < 3){
      this.surnameIsValid = false;
      this.surnameErrorMessage = "il cogname è troppo corto"
    }
    else if(this.credentials.name.length > 18){
      this.surnameIsValid = false;
      this.surnameErrorMessage = "il cogname è troppo lungo"
    }
    else {
      this.surnameIsValid = true;
      this.surnameErrorMessage = ""
    }
    this.checkMessage();
    this.checkIsValid();
  }
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

  
  onPhoneNumberChange() {
    if (this.credentials.phoneNumber.length < 9 ){
      this.phoneNumberIsValid = false;
      this.phoneNumberErrorMessage = "il numero di telefono deve essere più lungo";
    }
    else {
      this.phoneNumberIsValid = true;
      this.phoneNumberErrorMessage = "";
    }
    this.checkMessage();
    this.checkIsValid()
  }

  checkMessage(){
    if(this.nameErrorMessage){
      this.errorMessageDisplayed = this.nameErrorMessage;
      return;
    }

    if(this.surnameErrorMessage){
      this.errorMessageDisplayed = this.surnameErrorMessage;
      return;
    }

    if(this.emailErrorMessage){
      this.errorMessageDisplayed = this.emailErrorMessage;
      return;
    }

    if(this.passwordErrorMessage){
      this.errorMessageDisplayed = this.passwordErrorMessage;
      return;
    }

    if(this.phoneNumberErrorMessage){
      this.errorMessageDisplayed = this.phoneNumberErrorMessage;
      return;
    }
    this.errorMessageDisplayed = "";
  }

  checkIsValid() {
    if(this.nameIsValid && this.surnameIsValid && this.phoneNumberIsValid && this.passwordIsValid && this.emailIsValid){
      this.formIsValid = true;
      return;
    }
    this.formIsValid = false;
  }

  async signIn() {
    try {
      // request to server
      const result:any = await lastValueFrom(this.myAuthService.signIn(this.credentials));
      // get the tokem
      const token = result.token;
      const isAdmin = false;
      // save user data
      this.myAuthService.setUserCredentials(this.credentials.name, this.credentials.surname, this.credentials.email, this.credentials.phoneNumber, token, isAdmin)
      // go to home
      this.router.navigate(["/home"])
    } catch (err) {
      console.log(err)
      if(err.error.message == "Il numero di telefono è errato"){
        err.error.message = err.error.message + " ,ricontrolla(ricorda di non aggiungere il prefisso)"
      }

      this.errorMessageDisplayed = err.error.message;

    }
  }
}
