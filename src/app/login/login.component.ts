import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyAuthService } from '../my-auth-service.service';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials: User = new User("", "")

  constructor(private myAuthService: MyAuthService, private router: Router) {}

  onLogin(): void {
    const loginSuccess = this.myAuthService.login(this.credentials);
    this.myAuthService.getUser().subscribe((data) =>{ console.log(data)});
    if (loginSuccess) {
      console.log("ciao sono entrato");
      // Reindirizzamento o azioni post-login
      this.router.navigate(["/add-film"])
    } else {
      console.log("ciao non sono entrato");
      // Gestione degli errori di login
    }
  }
}
