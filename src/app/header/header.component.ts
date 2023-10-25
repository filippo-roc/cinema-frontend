import { Component } from '@angular/core';
import { MyAuthService } from '../my-auth-service.service';
import { lastValueFrom } from 'rxjs';
import { User } from '../model/user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn: boolean = false;
  userName  = "";

  constructor(private myAuthService: MyAuthService, private userService: UserService) {
    this.myAuthService.getIsLoggedIn().subscribe((value) => {
      this.isLoggedIn = value;
      this.userName = userService.user.name;
      console.log(this.userName)
    })
    
  }

 async onLogout() {
    try { 
      const result = await lastValueFrom(this.myAuthService.logout());

     } catch (err){
      console.log(err)
    }
  }

}
